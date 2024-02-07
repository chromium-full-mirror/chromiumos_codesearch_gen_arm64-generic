// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CanvasDrawingProvider } from './drawing_provider.js';
import { TabletModeObserverReceiver } from './input_data_provider.mojom-webui.js';
import { getInputDataProvider } from './mojo_interface_provider.js';
import { getTemplate } from './touchscreen_tester.html.js';
// To ensure the tester works when the user rotates their screen, we
// need to set both the canvas width and height to be the larger number.
// Rather than looking for the correct display and find their size
// from backend, we take a simpler approach to set it as a very large
// number. The number is based on largest known supported resolution.
export const SCREEN_MAX_LENGTH = 9999;
// The dialog type enum, including intro-dialog and canvas-dialog.
export var DialogType;
(function (DialogType) {
    DialogType["INTRO"] = "intro-dialog";
    DialogType["CANVAS"] = "canvas-dialog";
})(DialogType || (DialogType = {}));
// The touch event type enum.
export var TouchEventType;
(function (TouchEventType) {
    TouchEventType["START"] = "touchstart";
    TouchEventType["MOVE"] = "touchmove";
    TouchEventType["END"] = "touchend";
})(TouchEventType || (TouchEventType = {}));
const TouchscreenTesterElementBase = I18nMixin(PolymerElement);
export class TouchscreenTesterElement extends TouchscreenTesterElementBase {
    constructor() {
        super(...arguments);
        // A map that stores all the touches.
        // The key is the identifier of the touch. Value is the x and y coordinates
        // of the touch point.
        this.touches = new Map();
        // Indicates if the laptop is in tablet mode.
        this.isTabletMode = false;
        // Manages all event listeners.
        this.eventTracker = new EventTracker();
        this.receiver = null;
        this.inputDataProvider = getInputDataProvider();
    }
    static get is() {
        return 'touchscreen-tester';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            touchscreenIdUnderTesting: {
                type: Number,
                value: -1,
                notify: true,
            },
        };
    }
    /**
     * For testing only.
     */
    getDrawingProvider() {
        return this.drawingProvider;
    }
    /**
     * For testing only.
     */
    getTouches() {
        return this.touches;
    }
    /**
     * For testing only.
     */
    getIsTabletMode() {
        return this.isTabletMode;
    }
    /**
     * For testing only.
     */
    getEventTracker() {
        return this.eventTracker;
    }
    getDialog(dialogId) {
        const dialog = this.shadowRoot.getElementById(dialogId);
        assert(dialog);
        return dialog;
    }
    /**
     * Shows the tester's dialog.
     */
    async showTester(evdevId) {
        this.inputDataProvider.moveAppToTestingScreen(evdevId);
        this.receiver = new TabletModeObserverReceiver(this);
        const { isTabletMode } = await this.inputDataProvider.observeTabletMode(this.receiver.$.bindNewPipeAndPassRemote());
        this.isTabletMode = isTabletMode;
        const introDialog = this.getDialog(DialogType.INTRO);
        await introDialog.requestFullscreen();
        introDialog.showModal();
        this.addListeners();
    }
    /**
     * Add various event listeners.
     */
    addListeners() {
        //  When user presses 'Esc' key, the tester will only exit the fullscreen
        //  mode. However, we want the tester to close when user has exited the
        //  fullscreen mode. Add a event listener to listen to the
        //  'fullscreenchange' event to handle this case.
        this.eventTracker.add(document, 'fullscreenchange', (e) => {
            e.preventDefault();
            if (!document.fullscreenElement &&
                this.touchscreenIdUnderTesting !== -1) {
                this.closeTester();
                // Only when users closes the tester themselves, we call
                // moveAppBackToPreviousScreen function. If the screen is disconnected
                // or untestable, the window movement will be handled by display manager
                // itself.
                this.inputDataProvider.moveAppBackToPreviousScreen();
            }
        });
        // When in tablet mode, pressing volume up button will exit the tester.
        this.eventTracker.add(window, 'keydown', (e) => {
            if (e.key === 'AudioVolumeUp' && this.isTabletMode) {
                // Exit fullscreen will trigger closing the tester.
                document.exitFullscreen();
            }
        });
    }
    /**
     * Close touchscreen tester.
     */
    closeTester() {
        this.getDialog(DialogType.INTRO).close();
        this.getDialog(DialogType.CANVAS).close();
        this.eventTracker.removeAll();
        this.inputDataProvider.setA11yTouchPassthrough(/*enabled=*/ false);
        this.touchscreenIdUnderTesting = -1;
        // Make sure to exit fullscreen if it's not already.
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        if (this.receiver) {
            this.receiver.$.close();
        }
    }
    /**
     * Handle when get start button is clicked.
     */
    onStartClick() {
        this.getDialog(DialogType.INTRO).close();
        this.getDialog(DialogType.CANVAS).showModal();
        this.setupCanvas();
        this.inputDataProvider.setA11yTouchPassthrough(/*enabled=*/ true);
    }
    /**
     * Set up canvas width, height and drawing context.
     */
    setupCanvas() {
        const canvas = this.shadowRoot.querySelector('canvas');
        assert(canvas);
        canvas.width = SCREEN_MAX_LENGTH;
        canvas.height = SCREEN_MAX_LENGTH;
        // CSS in .html file does not have access to this element,
        // therefore adjust it here to make the canvas cover the whole screen.
        const topContainer = this.getDialog(DialogType.CANVAS).shadowRoot
            .querySelector('.top-container');
        topContainer.style.display = 'none';
        const ctx = canvas.getContext('2d');
        assert(ctx);
        this.drawingProvider = new CanvasDrawingProvider(ctx);
        this.observeDataSource(canvas);
    }
    /**
     * This is the only place that deals with Touch API.
     * In future enhancement to use evdev as data source, this is the place
     * to interact with mojo interface.
     */
    observeDataSource(canvas) {
        for (const eventType of [TouchEventType.START, TouchEventType.MOVE,
            TouchEventType.END]) {
            this.eventTracker.add(canvas, eventType, (e) => {
                e.preventDefault();
                for (let i = 0; i < e.changedTouches.length; i++) {
                    const currentTouch = e.changedTouches[i];
                    const touchPt = {
                        x: currentTouch.pageX - canvas.offsetLeft,
                        y: currentTouch.pageY - canvas.offsetTop,
                    };
                    // Call corresponding function to handle those events.
                    if (eventType === TouchEventType.START) {
                        this.onDrawStart(currentTouch.identifier, touchPt, currentTouch.force);
                    }
                    else if (eventType === TouchEventType.MOVE) {
                        this.onDraw(currentTouch.identifier, touchPt, currentTouch.force);
                    }
                    else if (eventType === TouchEventType.END) {
                        this.onDrawEnd(currentTouch.identifier, touchPt);
                    }
                }
            });
        }
    }
    /**
     * Handle when a 'touchstart' event is fired from Touch API, or a new touch
     * starts from evdev.
     * @param touchId The identifier of a touch.
     * @param touchPt The coordinates of a touch point.
     * @param pressure The pressure of a touch.
     */
    onDrawStart(touchId, touchPt, pressure) {
        this.touches.set(touchId, touchPt);
        this.drawingProvider.drawTrailMark(touchPt.x, touchPt.y);
        this.drawingProvider.drawTrail(touchPt.x - 1, touchPt.y, touchPt.x, touchPt.y, pressure);
    }
    /**
     * Handle when a 'touchmove' event is fired from Touch API, or an existing
     * touch moves from evdev.
     * @param touchId The identifier of a touch.
     * @param touchPt The coordinates of a touch point.
     * @param pressure The pressure of a touch.
     */
    onDraw(touchId, touchPt, pressure) {
        // Previous point of this touch.
        const previousPt = this.touches.get(touchId);
        if (previousPt) {
            this.drawingProvider.drawTrail(previousPt.x, previousPt.y, touchPt.x, touchPt.y, pressure);
        }
        // Update the coordinates of this touch.
        this.touches.set(touchId, touchPt);
    }
    /**
     * Handle when a 'touchend' event is fired from Touch API, or an existing
     * touch ends from evdev.
     * @param touchId The identifier of a touch.
     * @param touchPt The coordinates of a touch point.
     */
    onDrawEnd(touchId, touchPt) {
        this.drawingProvider.drawTrailMark(touchPt.x, touchPt.y);
        // This touch has ended. Remove it from the touches object.
        this.touches.delete(touchId);
    }
    /**
     * Implements TabletModeObserver.OnTabletModeChanged.
     * @param isTabletMode Is current display on tablet mode.
     */
    onTabletModeChanged(isTabletMode) {
        this.isTabletMode = isTabletMode;
        // TODO(wenyu): Show exit instruction toaster.
    }
}
customElements.define(TouchscreenTesterElement.is, TouchscreenTesterElement);
