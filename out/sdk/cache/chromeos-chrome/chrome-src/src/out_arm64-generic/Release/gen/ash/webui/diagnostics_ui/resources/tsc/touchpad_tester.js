// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './diagnostics_shared.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CanvasDrawingProvider } from './drawing_provider.js';
import { getTemplate } from './touchpad_tester.html.js';
const TouchpadTesterElementBase = I18nMixin(PolymerElement);
export class TouchpadTesterElement extends TouchpadTesterElementBase {
    constructor() {
        super(...arguments);
        this.drawingProvider = null;
        // Touchpad device being tested.
        this.touchpad = null;
    }
    static get is() {
        return 'touchpad-tester';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    connectedCallback() {
        super.connectedCallback();
        const ctx = this.$.testerCanvas.getContext('2d');
        assert(!!ctx);
        this.drawingProvider = new CanvasDrawingProvider(ctx);
    }
    /**
     * Resets dialog configuration to default.
     */
    close() {
        this.$.touchpadTesterDialog.close();
        this.touchpad = null;
    }
    /** Helper to check dialog open state. */
    isOpen() {
        assert(!!this.$.touchpadTesterDialog);
        return this.$.touchpadTesterDialog.open;
    }
    /** Setup display for requested touchpad.*/
    show(touchpad) {
        assert(!!touchpad);
        this.touchpad = touchpad;
        this.$.touchpadTesterDialog.showModal();
    }
    /** Receives TouchEventObserver events and displays on the tester canvas. */
    onTouchEvent(event) {
        assert(event);
        // TODO(b/253021171): Add call to clear canvas before drawing new touch data
        //  when drawing provider implements functionality.
        event.touchData.forEach((touch) => this.drawTouchPoint(touch));
    }
    /** Visualize individual contact based on provided TouchPoint data. */
    drawTouchPoint(touchPoint) {
        // TODO(b/253021171): Replace placeholder call to drawing provider with call
        // to TouchDrawer when implemented.
        assert(!!this.drawingProvider);
        this.drawingProvider.drawTrailMark(touchPoint.positionX, touchPoint.positionY);
    }
}
customElements.define(TouchpadTesterElement.is, TouchpadTesterElement);
