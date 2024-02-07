// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './shortcut_input_key.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { FakeShortcutInputProvider } from './fake_shortcut_input_provider.js';
import { getTemplate } from './shortcut_input.html.js';
import { ShortcutInputObserverReceiver } from './shortcut_input_provider.mojom-webui.js';
import { getSortedModifiers, KeyInputState, KeyToIconNameMap, Modifier, ModifierKeyCodes, Modifiers } from './shortcut_utils.js';
/**
 * @fileoverview
 * 'shortcut-input' is wrapper component for a key event. It maintains both
 * the read-only and editable state of a key event.
 */
const ShortcutInputElementBase = I18nMixin(PolymerElement);
export class ShortcutInputElement extends ShortcutInputElementBase {
    constructor() {
        super(...arguments);
        this.hasLauncherButton = true;
        this.shortcutInputProvider = null;
        this.pendingKeyEvent = null;
        this.pendingPrerewrittenKeyEvent = null;
        this.modifiers = [];
        this.showSeparator = false;
        this.isCapturing = false;
        this.updateOnKeyPress = false;
        this.displayPrerewrittenKeyEvents = false;
        this.ignoreBlur = false;
        this.shouldIgnoreKeyRelease = false;
        this.shortcutInputObserverReceiver = null;
        this.eventTracker = new EventTracker();
    }
    static get is() {
        return 'shortcut-input';
    }
    static get properties() {
        return {
            // Event after event rewrites.
            pendingKeyEvent: { type: Object },
            // Event before event rewrites.
            pendingPrerewrittenKeyEvent: { type: Object },
            shortcutInputProvider: { type: Object },
            modifiers: {
                type: Array,
                computed: 'getModifiers(pendingKeyEvent, pendingPrerewrittenKeyEvent)',
                value: [],
            },
            showSeparator: {
                type: Boolean,
            },
            hasLauncherButton: {
                type: Boolean,
            },
            // When `updateOnKeyPress` is true, always show edit-view and and updates
            // occur on key press events rather than on key release.
            updateOnKeyPress: {
                type: Boolean,
                value: false,
            },
            // If true, will display the `pendingPrerewrittenKeyEvents` instead of
            // `pendingKeyEvent`.
            displayPrerewrittenKeyEvents: {
                type: Boolean,
            },
            // If true, this element will continue to observe for inputs even after
            // an `on-blur`. Allows parent element to handle blur events.
            ignoreBlur: {
                type: Boolean,
            },
            // If true, `onShortcutInputEventPressed` will be a no-op.
            shouldIgnoreKeyRelease: {
                type: Boolean,
            },
        };
    }
    observeShortcutInput() {
        if (!this.shortcutInputProvider) {
            return;
        }
        if (this.shortcutInputProvider instanceof FakeShortcutInputProvider) {
            this.shortcutInputProvider.startObservingShortcutInput(this);
            return;
        }
        this.shortcutInputObserverReceiver =
            new ShortcutInputObserverReceiver(this);
        this.shortcutInputProvider.startObservingShortcutInput(this.shortcutInputObserverReceiver.$.bindNewPipeAndPassRemote());
    }
    /**
     * Updates UI to the newly received KeyEvent.
     */
    onShortcutInputEventPressed(prerewrittenKeyEvent, keyEvent) {
        this.pendingKeyEvent = keyEvent;
        this.pendingPrerewrittenKeyEvent = prerewrittenKeyEvent;
        if (this.updateOnKeyPress) {
            // TODO(jimmyxgong): Should be able to do this unconditionally, but for
            // now the modifiers trigger observable events that may unintentionally
            // update the UI.
            this.pendingKeyEvent.modifiers = keyEvent.modifiers;
            this.pendingPrerewrittenKeyEvent.modifiers =
                prerewrittenKeyEvent.modifiers;
            this.dispatchEvent(new CustomEvent('shortcut-input-event', {
                bubbles: true,
                composed: true,
                detail: {
                    keyEvent: this.pendingKeyEvent,
                },
            }));
        }
    }
    /**
     * Updates the UI to the new KeyEvent and dispatches and event to notify
     * parent elements.
     */
    onShortcutInputEventReleased(prerewrittenKeyEvent, keyEvent) {
        if (this.shouldIgnoreKeyRelease) {
            return;
        }
        // Ignore the release event if no key was pressed before. This is to
        // avoid the case when the user presses "enter" key to pop up the
        // shortcut input, release of the key is captured by accident.
        if (!this.pendingKeyEvent) {
            return;
        }
        if (this.updateOnKeyPress) {
            const updatedKeyEvent = { ...keyEvent };
            const updatedPrerewrittenKeyEvent = { ...prerewrittenKeyEvent };
            // If the key released is not a modifier, reset keyDisplay.
            if (!ModifierKeyCodes.includes(updatedKeyEvent.vkey)) {
                updatedKeyEvent.keyDisplay = '';
            }
            if (!ModifierKeyCodes.includes(updatedPrerewrittenKeyEvent.vkey)) {
                updatedPrerewrittenKeyEvent.keyDisplay = '';
            }
            // Update pending events with the modifications made to the key events
            // above.
            this.pendingKeyEvent = updatedKeyEvent;
            // console.log('pendingKeyEvent', pendingKeyEvent.keyDisplay);
            this.pendingPrerewrittenKeyEvent = updatedPrerewrittenKeyEvent;
        }
        else {
            // Only update the UI if the released key is the last key pressed OR if
            // its a modifier.
            if (this.pendingKeyEvent && keyEvent.vkey !== this.pendingKeyEvent.vkey) {
                if (!ModifierKeyCodes.includes(keyEvent.vkey)) {
                    return;
                }
                this.pendingKeyEvent.modifiers = keyEvent.modifiers;
                this.pendingPrerewrittenKeyEvent.modifiers =
                    prerewrittenKeyEvent.modifiers;
                return;
            }
            this.pendingKeyEvent = keyEvent;
            this.pendingPrerewrittenKeyEvent = prerewrittenKeyEvent;
            this.dispatchEvent(new CustomEvent('shortcut-input-event', {
                bubbles: true,
                composed: true,
                detail: {
                    keyEvent: this.pendingKeyEvent,
                },
            }));
        }
    }
    connectedCallback() {
        super.connectedCallback();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker.removeAll();
    }
    /**
     * shortcut_input only starts observing via calling `startObserving`. It
     * registers event handlers so it stops observing input when focus is lost.
     */
    startObserving() {
        this.isCapturing = true;
        this.observeShortcutInput();
        this.eventTracker.add(this, 'keydown', (e) => this.stopEvent(e));
        this.eventTracker.add(this, 'keyup', (e) => this.stopEvent(e));
        this.eventTracker.add(this, 'blur', () => this.onBlur());
        this.$.container.focus();
        this.dispatchCaptureStateEvent();
    }
    onBlur() {
        if (this.ignoreBlur) {
            return;
        }
        this.stopObserving();
    }
    stopObserving() {
        this.isCapturing = false;
        this.shortcutInputProvider?.stopObservingShortcutInput();
        this.eventTracker.removeAll();
        this.dispatchCaptureStateEvent();
    }
    reset() {
        this.pendingKeyEvent = null;
        this.pendingPrerewrittenKeyEvent = null;
    }
    /**
     * Consumes all events received by the shortcut_input element.
     */
    stopEvent(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    isModifier(keyEvent) {
        return ModifierKeyCodes.includes(keyEvent.vkey);
    }
    getKey() {
        const keyEvent = this.getPendingKeyEvent();
        if (keyEvent && keyEvent.keyDisplay != '' && !this.isModifier(keyEvent)) {
            const keyDisplay = keyEvent.keyDisplay;
            if (keyDisplay in KeyToIconNameMap) {
                return keyDisplay;
            }
            return keyDisplay.toLowerCase();
        }
        // TODO(dpad, b/286930911): Reset to localized default empty state.
        return 'key';
    }
    getKeyState() {
        const keyEvent = this.getPendingKeyEvent();
        if (keyEvent && keyEvent.keyDisplay != '' && !this.isModifier(keyEvent)) {
            return KeyInputState.ALPHANUMERIC_SELECTED;
        }
        return KeyInputState.NOT_SELECTED;
    }
    getConfirmKey() {
        const keyEvent = this.getPendingKeyEvent();
        if (keyEvent && keyEvent.keyDisplay != '') {
            const keyDisplay = keyEvent.keyDisplay;
            if (keyDisplay in KeyToIconNameMap) {
                return keyDisplay;
            }
            return keyDisplay.toLowerCase();
        }
        // TODO(dpad, b/286930911): Reset to localized default empty state.
        return 'key';
    }
    getConfirmKeyState() {
        const keyEvent = this.getPendingKeyEvent();
        if (keyEvent && keyEvent.keyDisplay != '' && this.isModifier(keyEvent)) {
            return KeyInputState.MODIFIER_SELECTED;
        }
        if (keyEvent && keyEvent.keyDisplay != '') {
            return KeyInputState.ALPHANUMERIC_SELECTED;
        }
        return KeyInputState.NOT_SELECTED;
    }
    shouldShowEditView() {
        return this.isCapturing || this.updateOnKeyPress;
    }
    shouldShowConfirmView() {
        return this.getPendingKeyEvent() !== null && !this.isCapturing &&
            !this.updateOnKeyPress;
    }
    /**
     * Returns the specified CSS state of the modifier key element.
     */
    getCtrlState() {
        return this.getModifierState(Modifier.CONTROL);
    }
    /**
     * Returns the specified CSS state of the modifier key element.
     */
    getAltState() {
        return this.getModifierState(Modifier.ALT);
    }
    /**
     * Returns the specified CSS state of the modifier key element.
     */
    getShiftState() {
        return this.getModifierState(Modifier.SHIFT);
    }
    /**
     * Returns the specified CSS state of the modifier key element.
     */
    getSearchState() {
        return this.getModifierState(Modifier.COMMAND);
    }
    /**
     * Returns the specified CSS state of the modifier key element.
     */
    getModifierState(modifier) {
        const keyEvent = this.getPendingKeyEvent();
        if (keyEvent && keyEvent?.modifiers & modifier) {
            return KeyInputState.MODIFIER_SELECTED;
        }
        return KeyInputState.NOT_SELECTED;
    }
    getModifierString(modifier) {
        switch (modifier) {
            case Modifier.SHIFT:
                return 'shift';
            case Modifier.CONTROL:
                return 'ctrl';
            case Modifier.ALT:
                return 'alt';
            case Modifier.COMMAND:
                return 'meta';
        }
        return assertNotReached();
    }
    /**
     * Returns a list of the modifier strings for the held down modifiers within
     * `keyEvent.`
     */
    getModifiers(keyEvent) {
        if (!keyEvent) {
            return [];
        }
        const modifierStrings = [];
        for (const modifier of Modifiers) {
            if (keyEvent.modifiers & modifier) {
                modifierStrings.push(this.getModifierString(modifier));
            }
        }
        return getSortedModifiers(modifierStrings);
    }
    shouldShowSeparator() {
        return this.showSeparator && this.modifiers.length > 0;
    }
    shouldShowSelectedKey() {
        return this.getPendingKeyEvent() !== null;
    }
    dispatchCaptureStateEvent() {
        this.dispatchEvent(new CustomEvent('shortcut-input-capture-state', {
            bubbles: true,
            composed: true,
            detail: {
                capturing: this.isCapturing,
            },
        }));
    }
    getPendingKeyEvent() {
        return this.displayPrerewrittenKeyEvents ?
            this.pendingPrerewrittenKeyEvent :
            this.pendingKeyEvent;
    }
    static get template() {
        return getTemplate();
    }
}
customElements.define(ShortcutInputElement.is, ShortcutInputElement);
