// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestFingerprintBrowserProxy extends TestBrowserProxy {
    fingerprintsList_;
    constructor() {
        super([
            'getFingerprintsList',
            'getNumFingerprints',
            'startEnroll',
            'cancelCurrentEnroll',
            'getEnrollmentLabel',
            'removeEnrollment',
            'changeEnrollmentLabel',
            'fakeScanComplete',
        ]);
        this.fingerprintsList_ = [];
    }
    setFingerprints(fingerprints) {
        this.fingerprintsList_ = fingerprints.slice();
    }
    scanReceived(result, complete, percent) {
        if (complete) {
            this.fingerprintsList_.push('New Label');
        }
        webUIListenerCallback('on-fingerprint-scan-received', { result: result, isComplete: complete, percentComplete: percent });
    }
    getFingerprintsList() {
        this.methodCalled('getFingerprintsList');
        const fingerprintInfo = {
            fingerprintsList: this.fingerprintsList_.slice(),
            isMaxed: this.fingerprintsList_.length >= 3,
        };
        return Promise.resolve(fingerprintInfo);
    }
    getNumFingerprints() {
        this.methodCalled('getNumFingerprints');
        return Promise.resolve(this.fingerprintsList_.length);
    }
    startEnroll() {
        this.methodCalled('startEnroll');
    }
    cancelCurrentEnroll() {
        this.methodCalled('cancelCurrentEnroll');
    }
    getEnrollmentLabel(index) {
        this.methodCalled('getEnrollmentLabel');
        return Promise.resolve(this.fingerprintsList_[index]);
    }
    removeEnrollment(index) {
        this.fingerprintsList_.splice(index, 1);
        this.methodCalled('removeEnrollment', index);
        return Promise.resolve(true);
    }
    changeEnrollmentLabel(index, newLabel) {
        this.fingerprintsList_[index] = newLabel;
        this.methodCalled('changeEnrollmentLabel', index, newLabel);
        return Promise.resolve(true);
    }
    fakeScanComplete() {
        chrome.send('fakeScanComplete');
    }
}
