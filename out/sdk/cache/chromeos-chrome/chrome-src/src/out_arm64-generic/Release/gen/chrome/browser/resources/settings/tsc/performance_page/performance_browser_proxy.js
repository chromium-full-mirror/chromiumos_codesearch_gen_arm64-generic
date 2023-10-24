// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PerformanceBrowserProxyImpl {
    getCurrentOpenSites() {
        return sendWithPromise('getCurrentOpenSites');
    }
    getDeviceHasBattery() {
        return sendWithPromise('getDeviceHasBattery');
    }
    openBatterySaverFeedbackDialog() {
        chrome.send('openBatterySaverFeedbackDialog');
    }
    openHighEfficiencyFeedbackDialog() {
        chrome.send('openHighEfficiencyFeedbackDialog');
    }
    openSpeedFeedbackDialog() {
        chrome.send('openSpeedFeedbackDialog');
    }
    validateTabDiscardExceptionRule(rule) {
        return sendWithPromise('validateTabDiscardExceptionRule', rule);
    }
    static getInstance() {
        return instance || (instance = new PerformanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
