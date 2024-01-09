// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as dom from '../../dom.js';
import { I18nString } from '../../i18n_string.js';
import { RecordTimeChip } from '../../lit/components/record-time-chip.js';
import { getI18nMessage } from '../../models/load_time_data.js';
import { speak } from '../../spoken_msg.js';
/**
 * Time between updates in milliseconds.
 */
const UPDATE_INTERVAL_MS = 100;
/**
 * Controller for the record-time-chip of Camera view.
 */
export class RecordTime {
    constructor(onMaxTimeout) {
        this.onMaxTimeout = onMaxTimeout;
        this.recordTime = dom.get('record-time-chip', RecordTimeChip);
        /**
         * Timeout to count every tick of elapsed recording time.
         */
        this.tickTimeout = null;
        /**
         * Tick count of elapsed recording time.
         */
        this.ticks = 0;
        /**
         * The timestamp when the recording starts.
         */
        this.startTimestamp = 0;
        /**
         * The total duration of the recording in milliseconds.
         */
        this.totalDuration = 0;
        /**
         * Maximal recording time in milliseconds.
         */
        this.maxTimeMs = null;
    }
    getTimeMessage(timeMs, maxTimeMs) {
        const seconds = timeMs / 1000;
        if (maxTimeMs === null) {
            // Normal recording. Format time into HH:MM:SS or MM:SS.
            const parts = [];
            if (seconds >= 3600) {
                parts.push(Math.floor(seconds / 3600)); // HH
            }
            parts.push(Math.floor(seconds / 60) % 60); // MM
            parts.push(Math.floor(seconds % 60)); // SS
            return parts.map((n) => n.toString().padStart(2, '0')).join(':');
        }
        else {
            // GIF recording. Formats seconds with only first digit shown after
            // floating point.
            return getI18nMessage(I18nString.LABEL_CURRENT_AND_MAXIMAL_RECORD_TIME, seconds.toFixed(1), (maxTimeMs / 1000).toFixed(1));
        }
    }
    /**
     * Starts to count and show the elapsed recording time.
     */
    start(maxTimeMs = null) {
        this.ticks = 0;
        this.totalDuration = 0;
        this.maxTimeMs = maxTimeMs;
        this.resume();
    }
    /**
     * Updates UI by the elapsed recording time.
     */
    update() {
        this.recordTime.textContent =
            this.getTimeMessage(this.ticks * UPDATE_INTERVAL_MS, this.maxTimeMs);
    }
    /**
     * Resumes to count and show the elapsed recording time.
     */
    resume() {
        this.update();
        this.recordTime.hidden = false;
        this.tickTimeout = setInterval(() => {
            if (this.maxTimeMs === null ||
                (this.ticks + 1) * UPDATE_INTERVAL_MS <= this.maxTimeMs) {
                this.ticks++;
            }
            else {
                this.onMaxTimeout();
                if (this.tickTimeout !== null) {
                    clearInterval(this.tickTimeout);
                    this.tickTimeout = null;
                }
            }
            this.update();
        }, UPDATE_INTERVAL_MS);
        this.startTimestamp = performance.now();
    }
    /**
     * Calculates total duration after stop recoding.
     */
    calculateDuration() {
        this.totalDuration += performance.now() - this.startTimestamp;
        if (this.maxTimeMs !== null) {
            this.totalDuration = Math.min(this.totalDuration, this.maxTimeMs);
        }
    }
    /**
     * Stops counting and showing the elapsed recording time.
     */
    stop() {
        speak(I18nString.STATUS_MSG_RECORDING_STOPPED);
        if (this.tickTimeout !== null) {
            clearInterval(this.tickTimeout);
            this.tickTimeout = null;
        }
        this.ticks = 0;
        this.recordTime.hidden = true;
        this.update();
        this.calculateDuration();
    }
    /**
     * Pauses counting and showing the elapsed recording time.
     */
    pause() {
        speak(I18nString.STATUS_MSG_RECORDING_STOPPED);
        if (this.tickTimeout !== null) {
            clearInterval(this.tickTimeout);
            this.tickTimeout = null;
        }
        this.calculateDuration();
    }
    /**
     * Returns the recorded duration in milliseconds.
     */
    inMilliseconds() {
        return Math.round(this.totalDuration);
    }
}
