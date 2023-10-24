// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from './assert.js';
/**
 * A one-shot timer that is more powerful than setTimeout().
 */
export class OneShotTimer {
    /**
     * The parameters are same as the parameters of setTimeout().
     */
    constructor(handler, timeout) {
        this.handler = handler;
        this.timeout = timeout;
        this.timeoutId = null;
        this.start();
    }
    /**
     * Starts the timer.
     */
    start() {
        assert(this.timeoutId === null);
        this.timeoutId = setTimeout(this.handler, this.timeout);
    }
    /**
     * Stops the pending timeout.
     */
    stop() {
        assert(this.timeoutId !== null);
        clearTimeout(this.timeoutId);
        this.timeoutId = null;
    }
    /**
     * Resets the timer delay. It's a no-op if the timer is already stopped.
     */
    resetTimeout() {
        if (this.timeoutId === null) {
            return;
        }
        this.stop();
        this.start();
    }
    /**
     * Stops the timer and runs the scheduled handler immediately.
     */
    fireNow() {
        if (this.timeoutId !== null) {
            this.stop();
        }
        this.handler();
    }
}
