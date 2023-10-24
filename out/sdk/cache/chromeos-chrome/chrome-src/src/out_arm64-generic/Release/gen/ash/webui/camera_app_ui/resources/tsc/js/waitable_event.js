// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * A waitable event for synchronization between asynchronous jobs.
 */
export class WaitableEvent {
    constructor() {
        this.isSignaledInternal = false;
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    isSignaled() {
        return this.isSignaledInternal;
    }
    /**
     * Signals the event.
     */
    signal(value) {
        if (this.isSignaledInternal) {
            return;
        }
        this.isSignaledInternal = true;
        this.resolve(value);
    }
    /**
     * @return Resolved when the event is signaled.
     */
    wait() {
        return this.promise;
    }
    /**
     * @param timeout Timeout in ms.
     * @return Resolved when the event is signaled, or rejected when timed out.
     */
    timedWait(timeout) {
        const timeoutPromise = new Promise((_resolve, reject) => {
            setTimeout(() => {
                reject(new Error(`Timed out after ${timeout}ms`));
            }, timeout);
        });
        return Promise.race([this.promise, timeoutPromise]);
    }
}
export class CancelableEvent extends WaitableEvent {
    signalError(e) {
        this.reject(e);
    }
    signalAs(promise) {
        this.resolve(promise);
    }
}
