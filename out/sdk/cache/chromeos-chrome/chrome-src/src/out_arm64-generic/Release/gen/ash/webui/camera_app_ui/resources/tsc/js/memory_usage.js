// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from './assert.js';
import { AsyncJobQueue } from './async_job_queue.js';
import { updateMemoryUsageEventDimensions } from './metrics.js';
import * as state from './state.js';
import { Mode } from './type.js';
import { measureUntrustedScriptsMemory } from './untrusted_scripts.js';
/**
 * Measures memory usage from trusted and untrusted frames.
 */
export async function measureAppMemoryUsage() {
    assert(self.crossOriginIsolated);
    const usages = await Promise.all([
        performance.measureUserAgentSpecificMemory(),
        measureUntrustedScriptsMemory(),
    ]);
    return {
        main: usages[0],
        untrusted: usages[1],
    };
}
const MEASUREMENT_INTERVAL_MS = 30000;
var SessionBehavior;
(function (SessionBehavior) {
    SessionBehavior[SessionBehavior["TAKE_NORMAL_PHOTO"] = 1] = "TAKE_NORMAL_PHOTO";
    SessionBehavior[SessionBehavior["TAKE_PORTRAIT_PHOTO"] = 2] = "TAKE_PORTRAIT_PHOTO";
    SessionBehavior[SessionBehavior["SCAN_BARCODE"] = 4] = "SCAN_BARCODE";
    SessionBehavior[SessionBehavior["SCAN_DOCUMENT"] = 8] = "SCAN_DOCUMENT";
    SessionBehavior[SessionBehavior["RECORD_NORMAL_VIDEO"] = 16] = "RECORD_NORMAL_VIDEO";
    SessionBehavior[SessionBehavior["RECORD_GIF_VIDEO"] = 32] = "RECORD_GIF_VIDEO";
    SessionBehavior[SessionBehavior["RECORD_TIME_LAPSE_VIDEO"] = 64] = "RECORD_TIME_LAPSE_VIDEO";
})(SessionBehavior || (SessionBehavior = {}));
class MemoryMeasurementHelper {
    constructor() {
        /**
         * A job queue for measuring memory usage.
         */
        this.jobQueue = new AsyncJobQueue('keepLatest');
        /**
         * Maximum memory usage in the current session, in bytes.
         */
        this.maxUsage = null;
        /**
         * A number represented boolean bit flags for each |SessionBehavior|. The
         * value is updated in |measureWithSessionBehavior|.
         */
        this.sessionBehavior = 0;
        this.jobQueue.push(() => this.collectMemoryUsage());
        // Schedule the measurement every |MEASUREMENT_INTERVAL_MS| milliseconds.
        setInterval(() => {
            this.jobQueue.push(() => this.collectMemoryUsage());
        }, MEASUREMENT_INTERVAL_MS);
        // Measure memory usage when session behaviors are triggered.
        state.addEnabledStateObserver(state.State.TAKING, () => {
            if (state.get(Mode.PHOTO)) {
                this.measureWithSessionBehavior(SessionBehavior.TAKE_NORMAL_PHOTO);
            }
            else if (state.get(Mode.PORTRAIT)) {
                this.measureWithSessionBehavior(SessionBehavior.TAKE_PORTRAIT_PHOTO);
            }
        });
        const observeScanBehavior = () => {
            if (state.get(Mode.SCAN)) {
                if (state.get(state.State.ENABLE_SCAN_BARCODE)) {
                    this.measureWithSessionBehavior(SessionBehavior.SCAN_BARCODE);
                }
                else {
                    this.measureWithSessionBehavior(SessionBehavior.SCAN_DOCUMENT);
                }
            }
        };
        state.addEnabledStateObserver(Mode.SCAN, observeScanBehavior);
        state.addObserver(state.State.ENABLE_SCAN_BARCODE, observeScanBehavior);
        state.addEnabledStateObserver(state.State.RECORDING, () => {
            if (state.get(state.State.RECORD_TYPE_NORMAL)) {
                this.measureWithSessionBehavior(SessionBehavior.RECORD_NORMAL_VIDEO);
            }
            else if (state.get(state.State.RECORD_TYPE_GIF)) {
                this.measureWithSessionBehavior(SessionBehavior.RECORD_GIF_VIDEO);
            }
            else if (state.get(state.State.RECORD_TYPE_TIME_LAPSE)) {
                this.measureWithSessionBehavior(SessionBehavior.RECORD_TIME_LAPSE_VIDEO);
            }
        });
    }
    async collectMemoryUsage() {
        const usage = await measureAppMemoryUsage();
        const totalUsage = usage.main.bytes + usage.untrusted.bytes;
        if (this.maxUsage === null || totalUsage > this.maxUsage) {
            this.maxUsage = totalUsage;
            updateMemoryUsageEventDimensions({
                memoryUsage: this.maxUsage,
                sessionBehavior: this.sessionBehavior,
            });
        }
    }
    measureWithSessionBehavior(behavior) {
        this.sessionBehavior |= behavior;
        this.jobQueue.push(() => this.collectMemoryUsage());
    }
}
let helper = null;
/**
 * Starts scheduling memory measurement throughout the session.
 */
export function startMeasuringMemoryUsage() {
    if (helper === null) {
        helper = new MemoryMeasurementHelper();
    }
}
