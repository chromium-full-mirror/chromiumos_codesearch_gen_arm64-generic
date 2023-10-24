// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as metrics from './metrics.js';
import { ChromeHelper } from './mojo/chrome_helper.js';
/**
 * Thrown when fails to parse intent url.
 */
export class ParseError extends Error {
    /**
     * @param url Intent url.
     */
    constructor(url) {
        super(`Failed to parse intent url ${url}`);
        this.name = this.constructor.name;
    }
}
/**
 * Intent from ARC++.
 */
export class Intent {
    /**
     * @param url URL passed along with app launch event.
     * @param intentId Id of the intent.
     * @param mode Capture mode of intent.
     * @param shouldHandleResult Whether the intent should return with the
     *     captured result.
     * @param shouldDownScale Whether the captured image should be down-scaled.
     * @param isSecure If the intent is launched when the device is under secure
     *     mode.
     */
    constructor(url, intentId, mode, shouldHandleResult, shouldDownScale, isSecure) {
        this.url = url;
        this.intentId = intentId;
        this.mode = mode;
        this.shouldHandleResult = shouldHandleResult;
        this.shouldDownScale = shouldDownScale;
        this.isSecure = isSecure;
        /**
         * Flag for avoiding intent being resolved by foreground and background
         * twice.
         */
        this.doneInternal = false;
    }
    /**
     * Whether intent has been finished or canceled.
     */
    get done() {
        return this.doneInternal;
    }
    /**
     * Notifies ARC++ to finish the intent.
     */
    async finish() {
        if (this.doneInternal) {
            return;
        }
        this.doneInternal = true;
        await ChromeHelper.getInstance().finish(this.intentId);
        this.logResult(metrics.IntentResultType.CONFIRMED);
    }
    /**
     * Notifies ARC++ to append data to the intent result.
     *
     * @param data The data to be appended to intent result.
     */
    async appendData(data) {
        if (this.doneInternal) {
            return;
        }
        await ChromeHelper.getInstance().appendData(this.intentId, data);
    }
    /**
     * Notifies ARC++ to clear appended intent result data.
     */
    async clearData() {
        if (this.doneInternal) {
            return;
        }
        await ChromeHelper.getInstance().clearData(this.intentId);
    }
    /**
     * Logs the intent result to metrics.
     */
    logResult(result) {
        metrics.sendIntentEvent({
            intent: this,
            result,
        });
    }
    /**
     * @param url URL passed along with app launch event.
     * @param mode Mode for the intent.
     */
    static create(url, mode) {
        const params = url.searchParams;
        function getBool(key) {
            return params.get(key) === '1';
        }
        const param = params.get('intentId');
        if (param === null) {
            throw new ParseError(url);
        }
        const intentId = Number(param);
        if (!Number.isInteger(intentId)) {
            throw new ParseError(url);
        }
        return new Intent(url, intentId, mode, getBool('shouldHandleResult'), getBool('shouldDownScale'), getBool('isSecure'));
    }
}
