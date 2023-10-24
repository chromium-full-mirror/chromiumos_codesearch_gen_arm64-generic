// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertExists, assertInstanceof } from '../assert.js';
import * as dom from '../dom.js';
import * as state from '../state.js';
import { WaitableEvent } from '../waitable_event.js';
/**
 * Options for open PTZ panel.
 */
export class PTZPanelOptions {
    constructor({ stream, vidPid, resetPTZ }) {
        this.stream = stream;
        this.vidPid = vidPid;
        this.resetPTZ = resetPTZ;
    }
}
/**
 * Options for open Option panel.
 */
export class OptionPanelOptions {
    constructor({ triggerButton, titleLabel, stateOptions, onStateChanged, ariaDescribedByElement, }) {
        this.triggerButton = triggerButton;
        this.titleLabel = titleLabel;
        this.stateOptions = stateOptions;
        this.onStateChanged = onStateChanged;
        this.ariaDescribedByElement = ariaDescribedByElement;
    }
}
/**
 * Base controller of a view for views' navigation sessions (nav.ts).
 */
export class View {
    /**
     * @param name Unique name of view which should be same as its DOM element id.
     */
    constructor(name, { dismissByEsc = false, dismissByBackgroundClick = false, defaultFocusSelector = '[tabindex]:not([tabindex="-1"])', dismissOnStopStreaming = false, } = {}) {
        this.name = name;
        /**
         * Signal it to ends the session.
         */
        this.session = null;
        this.lastFocusedElement = null;
        this.root = dom.get(`#${name}`, HTMLElement);
        this.dismissByEsc = dismissByEsc;
        this.defaultFocusSelector = defaultFocusSelector;
        if (dismissByBackgroundClick) {
            this.root.addEventListener('click', (event) => {
                if (event.target === this.root) {
                    this.leave({ kind: 'BACKGROUND_CLICKED' });
                }
            });
        }
        if (dismissOnStopStreaming) {
            state.addObserver(state.State.STREAMING, (streaming) => {
                if (!streaming && state.get(this.name)) {
                    this.leave({ kind: 'STREAMING_STOPPED' });
                }
            });
        }
    }
    /**
     * Gets sub-views nested under this view.
     */
    getSubViews() {
        return [];
    }
    /**
     * Hook of the subclass for handling the key.
     *
     * @param _key Key to be handled.
     * @return Whether the key has been handled or not.
     */
    handlingKey(_key) {
        return false;
    }
    /**
     * Handles the pressed key.
     *
     * @param key Key to be handled.
     * @return Whether the key has been handled or not.
     */
    onKeyPressed(key) {
        if (this.handlingKey(key)) {
            return true;
        }
        else if (this.dismissByEsc && key === 'Escape') {
            this.leave({ kind: 'ESC_KEY_PRESSED' });
            return true;
        }
        return false;
    }
    /**
     * Deactivates the view to be unfocusable.
     */
    setUnfocusable() {
        this.root.setAttribute('aria-hidden', 'true');
        for (const element of dom.getAllFrom(this.root, '[tabindex]', HTMLElement)) {
            element.dataset['tabindex'] =
                assertExists(element.getAttribute('tabindex'));
            element.setAttribute('tabindex', '-1');
        }
        const activeElement = document.activeElement;
        if (activeElement instanceof HTMLElement) {
            activeElement.blur();
        }
    }
    /**
     * Activates the view to be focusable.
     */
    setFocusable() {
        this.root.setAttribute('aria-hidden', 'false');
        for (const element of dom.getAllFrom(this.root, '[tabindex]', HTMLElement)) {
            if (element.dataset['tabindex'] === undefined) {
                // First activation, no need to restore tabindex from data-tabindex.
                continue;
            }
            element.setAttribute('tabindex', element.dataset['tabindex']);
            element.removeAttribute('data-tabindex');
        }
    }
    /**
     * The view is newly shown as the topmost view.
     */
    onShownAsTop() {
        this.setFocusable();
        // Focus on the default selector on enter.
        const el = this.root.querySelector(this.defaultFocusSelector);
        if (el !== null) {
            assertInstanceof(el, HTMLElement).focus();
        }
    }
    /**
     * The view was the topmost shown view and is being hidden.
     */
    onHideAsTop() {
        this.lastFocusedElement = null;
        this.setUnfocusable();
    }
    /**
     * The view was the topmost shown view and is being covered by newly shown
     * view.
     */
    onCoveredAsTop() {
        this.lastFocusedElement = document.activeElement === null ?
            null :
            assertInstanceof(document.activeElement, HTMLElement);
        this.setUnfocusable();
    }
    /**
     * The view becomes the new topmost shown view after some upper view is
     * hidden.
     *
     * @param _viewName The name of the upper view that is hidden.
     */
    onUncoveredAsTop(_viewName) {
        this.setFocusable();
        // Focus on last focused element or default selector
        if (this.lastFocusedElement !== null) {
            this.lastFocusedElement.focus();
            this.lastFocusedElement = null;
        }
        else {
            const el = this.root.querySelector(this.defaultFocusSelector);
            if (el !== null) {
                assertInstanceof(el, HTMLElement).focus();
            }
        }
    }
    /**
     * Layouts the view.
     */
    layout() {
        // To be overridden by subclasses.
    }
    /**
     * Hook of the subclass for entering the view.
     *
     * @param _options Optional rest parameters for entering the view.
     */
    entering(_options) {
        // To be overridden by subclasses.
    }
    /**
     * Enters the view.
     *
     * @param options Optional rest parameters for entering the view.
     * @return Promise for the navigation session.
     */
    enter(options) {
        // The session is started by entering the view and ended by leaving the
        // view.
        if (this.session === null) {
            this.session = new WaitableEvent();
        }
        this.entering(options);
        return this.session.wait();
    }
    /**
     * Hook of the subclass for leaving the view.
     *
     * @return Whether able to leave the view or not.
     */
    leaving(_condition) {
        return true;
    }
    /**
     * Leaves the view.
     *
     * @param condition Optional condition for leaving the view and also as
     *     the result for the ended session.
     */
    leave(condition = { kind: 'CLOSED' }) {
        if (this.session !== null && this.leaving(condition)) {
            this.session.signal(condition);
            this.session = null;
        }
    }
}
