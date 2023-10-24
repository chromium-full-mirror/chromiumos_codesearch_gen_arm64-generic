// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from './assert.js';
import { reportError } from './error.js';
import { ChromeHelper } from './mojo/chrome_helper.js';
import { ErrorLevel, ErrorType, } from './type.js';
/**
 * Logger for performance events.
 */
export class PerfLogger {
    constructor() {
        /**
         * Map to store events starting timestamp.
         */
        this.startTimeMap = new Map();
        /**
         * Set of the listeners for perf events.
         */
        this.listeners = new Set();
        /**
         * The timestamp when the measurement is interrupted.
         */
        this.interruptedTime = null;
    }
    /**
     * Adds listener for perf events.
     */
    addListener(listener) {
        this.listeners.add(listener);
    }
    /**
     * Removes listener for perf events.
     *
     * @return Returns true if remove successfully. False otherwise.
     */
    removeListener(listener) {
        return this.listeners.delete(listener);
    }
    /**
     * Starts the measurement for given event.
     *
     * @param event Target event.
     * @param startTime The start time of the event.
     */
    start(event, startTime = performance.now()) {
        if (this.startTimeMap.has(event)) {
            reportError(ErrorType.PERF_METRICS_FAILURE, ErrorLevel.ERROR, new Error(`Failed to start event ${event} since the previous one is not stopped.`));
            return;
        }
        this.startTimeMap.set(event, startTime);
        ChromeHelper.getInstance().startTracing(event);
    }
    /**
     * Stops the measurement for given event and returns the measurement result.
     *
     * @param event Target event.
     * @param perfInfo Optional information of this event for performance
     *     measurement.
     */
    stop(event, perfInfo = {}) {
        if (!this.startTimeMap.has(event)) {
            reportError(ErrorType.PERF_METRICS_FAILURE, ErrorLevel.ERROR, new Error(`Failed to stop event ${event} which is never started.`));
            return;
        }
        const startTime = this.startTimeMap.get(event);
        assert(startTime !== undefined);
        this.startTimeMap.delete(event);
        // If there is error during performance measurement, drop it since it might
        // be inaccurate.
        if (perfInfo.hasError ?? false) {
            return;
        }
        // If the measurement is interrupted, drop the measurement since the result
        // might be inaccurate.
        if (this.interruptedTime !== null && startTime < this.interruptedTime) {
            return;
        }
        const duration = performance.now() - startTime;
        ChromeHelper.getInstance().stopTracing(event);
        for (const listener of this.listeners) {
            listener({ event, duration, perfInfo });
        }
    }
    /**
     * Records the time of the interruption.
     */
    interrupt() {
        this.interruptedTime = performance.now();
    }
}
