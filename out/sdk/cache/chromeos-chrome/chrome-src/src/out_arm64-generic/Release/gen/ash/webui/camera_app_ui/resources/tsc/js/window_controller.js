// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertInstanceof } from './assert.js';
import { WindowStateControllerRemote, WindowStateMonitorCallbackRouter, WindowStateType, } from './mojo/type.js';
import { wrapEndpoint } from './mojo/util.js';
/**
 * Controller to get/set/listener for window state.
 */
export class WindowController {
    constructor() {
        /**
         * The remote controller from Mojo interface.
         */
        this.windowStateController = null;
        /**
         * Current window states.
         */
        this.windowStates = [];
        /**
         * Set of the listeners for window state changed events.
         */
        this.windowStateListeners = new Set();
        /**
         * Set of the listeners for window focus changed events.
         */
        this.windowFocusListeners = new Set();
    }
    /**
     * Binds the controller remote from Mojo interface.
     */
    async bind(remoteController) {
        this.windowStateController = remoteController;
        const windowMonitorCallbackRouter = wrapEndpoint(new WindowStateMonitorCallbackRouter());
        windowMonitorCallbackRouter.onWindowStateChanged.addListener((states) => {
            this.windowStates = states;
            for (const listener of this.windowStateListeners) {
                listener(states);
            }
        });
        windowMonitorCallbackRouter.onWindowFocusChanged.addListener((isFocused) => {
            for (const listener of this.windowFocusListeners) {
                listener(isFocused);
            }
        });
        const { states } = await this.windowStateController.addMonitor(windowMonitorCallbackRouter.$.bindNewPipeAndPassRemote());
        this.windowStates = states;
    }
    /**
     * Minimizes the window.
     */
    minimize() {
        return assertInstanceof(this.windowStateController, WindowStateControllerRemote)
            .minimize();
    }
    /**
     * Maximizes the window.
     */
    maximize() {
        return assertInstanceof(this.windowStateController, WindowStateControllerRemote)
            .maximize();
    }
    /**
     * Restores the window and leaves maximized/minimized/fullscreen state.
     */
    restore() {
        return assertInstanceof(this.windowStateController, WindowStateControllerRemote)
            .restore();
    }
    /**
     * Makes the window fullscreen.
     */
    fullscreen() {
        return assertInstanceof(this.windowStateController, WindowStateControllerRemote)
            .fullscreen();
    }
    /**
     * Focuses the window.
     */
    focus() {
        return assertInstanceof(this.windowStateController, WindowStateControllerRemote)
            .focus();
    }
    /**
     * Returns true if the window is currently minimized.
     */
    isMinimized() {
        return this.windowStates.includes(WindowStateType.kMinimized);
    }
    /**
     * Returns true if the window is currently fullscreen or maximized.
     */
    isFullscreenOrMaximized() {
        return this.windowStates.includes(WindowStateType.kFullscreen) ||
            this.windowStates.includes(WindowStateType.kMaximized);
    }
    /**
     * Adds listener for the window state changed events.
     */
    addWindowStateListener(listener) {
        this.windowStateListeners.add(listener);
    }
    /**
     * Adds listener for the window focus changed events.
     */
    addWindowFocusListener(listener) {
        this.windowFocusListeners.add(listener);
    }
}
export const windowController = new WindowController();
