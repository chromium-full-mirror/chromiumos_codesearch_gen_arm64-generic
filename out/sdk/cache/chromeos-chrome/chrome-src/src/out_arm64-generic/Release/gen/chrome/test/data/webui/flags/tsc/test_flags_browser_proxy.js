// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestFlagsBrowserProxy extends TestBrowserProxy {
    featureData = {
        // Default feature data
        'supportedFeatures': [],
        'unsupportedFeatures': [],
        'needsRestart': false,
        'showBetaChannelPromotion': false,
        'showDevChannelPromotion': false,
        'showOwnerWarning': false,
        'showSystemFlagsLink': true,
    };
    constructor() {
        super([
            'restartBrowser',
            // 
            'crosUrlFlagsRedirect',
            // 
            'resetAllFlags',
            'requestExperimentalFeatures',
            'enableExperimentalFeature',
            'selectExperimentalFeature',
            'setOriginListFlag',
            'setStringFlag',
        ]);
    }
    setFeatureData(data) {
        this.featureData = data;
    }
    restartBrowser() {
        this.methodCalled('restartBrowser');
    }
    // 
    crosUrlFlagsRedirect() {
        this.methodCalled('crosUrlFlagsRedirect');
    }
    // 
    resetAllFlags() {
        this.methodCalled('resetAllFlags');
    }
    requestExperimentalFeatures() {
        this.methodCalled('requestExperimentalFeatures');
        return Promise.resolve(structuredClone(this.featureData));
    }
    enableExperimentalFeature(internalName, enable) {
        this.methodCalled('enableExperimentalFeature', internalName, enable);
    }
    selectExperimentalFeature(internalName, index) {
        this.methodCalled('selectExperimentalFeature', internalName, index);
    }
    setOriginListFlag(internalName, value) {
        this.methodCalled('setOriginListFlag', internalName, value);
    }
    setStringFlag(internalName, value) {
        this.methodCalled('setStringFlag', internalName, value);
    }
}
