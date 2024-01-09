// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestFeedbackBrowserProxy extends TestBrowserProxy {
    dialogArugments_ = '';
    constructor() {
        super([
            'closeDialog',
            'sendFeedback',
        ]);
    }
    getSystemInformation() {
        return Promise.resolve([]);
    }
    getUserEmail() {
        return Promise.resolve('dummy_user_email');
    }
    getDialogArguments() {
        return this.dialogArugments_;
    }
    setDialogArguments(value) {
        this.dialogArugments_ = value;
    }
    getUserMedia(_params) {
        return Promise.resolve(undefined);
    }
    sendFeedback(feedback, _loadSystemInfo, _formOpenTime) {
        this.methodCalled('sendFeedback', feedback);
        return Promise.resolve({
            status: chrome.feedbackPrivate.Status.SUCCESS,
            landingPageType: chrome.feedbackPrivate.LandingPageType.NORMAL,
        });
    }
    showDialog() { }
    closeDialog() {
        this.methodCalled('closeDialog');
    }
    // 
    showAssistantLogsInfo() { }
    showBluetoothLogsInfo() { }
    // 
    showSystemInfo() { }
    showMetrics() { }
    showAutofillMetadataInfo(_autofillMetadata) { }
}
