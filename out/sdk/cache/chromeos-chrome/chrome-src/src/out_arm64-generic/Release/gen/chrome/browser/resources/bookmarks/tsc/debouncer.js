// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
/**
 * @fileoverview A debouncer which fires the given callback after a delay. The
 * delay can be refreshed by calling restartTimeout. Resetting the timeout with
 * no delay moves the callback to the end of the task queue.
 */
export class Debouncer {
    constructor(callback) {
        this.timer_ = null;
        this.isDone_ = false;
        this.callback_ = callback;
        this.timerProxy_ = window;
        this.boundTimerCallback_ = this.timerCallback_.bind(this);
        this.promiseResolver_ = new PromiseResolver();
    }
    /**
     * Starts the timer for the callback, cancelling the old timer if there is
     * one.
     */
    restartTimeout(delay) {
        assert(!this.isDone_);
        this.cancelTimeout_();
        this.timer_ =
            this.timerProxy_.setTimeout(this.boundTimerCallback_, delay || 0);
    }
    done() {
        return this.isDone_;
    }
    get promise() {
        return this.promiseResolver_.promise;
    }
    /**
     * Resets the debouncer as if it had been newly instantiated.
     */
    reset() {
        this.isDone_ = false;
        this.promiseResolver_ = new PromiseResolver();
        this.cancelTimeout_();
    }
    /**
     * Cancel the timer callback, which can be restarted by calling
     * restartTimeout().
     */
    cancelTimeout_() {
        if (this.timer_) {
            this.timerProxy_.clearTimeout(this.timer_);
        }
    }
    timerCallback_() {
        this.isDone_ = true;
        this.callback_.call(this);
        this.promiseResolver_.resolve();
    }
}
