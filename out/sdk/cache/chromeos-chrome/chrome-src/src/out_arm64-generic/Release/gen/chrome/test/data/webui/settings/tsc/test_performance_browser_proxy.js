// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPerformanceBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'getCurrentOpenSites',
            'getDeviceHasBattery',
            'openBatterySaverFeedbackDialog',
            'openMemorySaverFeedbackDialog',
            'openSpeedFeedbackDialog',
            'validateTabDiscardExceptionRule',
        ]);
        this.currentSites_ = [];
        this.validationResults_ = {};
    }
    setCurrentOpenSites(currentSites) {
        this.currentSites_ = currentSites;
    }
    getCurrentOpenSites() {
        this.methodCalled('getCurrentOpenSites');
        return Promise.resolve(this.currentSites_);
    }
    getDeviceHasBattery() {
        this.methodCalled('getDeviceHasBattery');
        return Promise.resolve(false);
    }
    openBatterySaverFeedbackDialog() {
        this.methodCalled('openBatterySaverFeedbackDialog');
    }
    openMemorySaverFeedbackDialog() {
        this.methodCalled('openMemorySaverFeedbackDialog');
    }
    openSpeedFeedbackDialog() {
        this.methodCalled('openSpeedFeedbackDialog');
    }
    setValidationResults(results) {
        this.validationResults_ = results;
    }
    validateTabDiscardExceptionRule(rule) {
        this.methodCalled('validateTabDiscardExceptionRule', rule);
        return Promise.resolve(this.validationResults_[rule] ?? true);
    }
}
