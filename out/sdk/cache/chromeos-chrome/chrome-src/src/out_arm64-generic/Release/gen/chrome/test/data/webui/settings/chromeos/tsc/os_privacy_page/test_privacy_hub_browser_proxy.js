// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPrivacyHubBrowserProxy extends TestBrowserProxy {
    microphoneToggleIsEnabled;
    cameraSwitchIsForceDisabled;
    cameraLEDFallbackState;
    constructor() {
        super([
            'getInitialMicrophoneHardwareToggleState',
            'getInitialCameraSwitchForceDisabledState',
            'sendLeftOsPrivacyPage',
            'sendOpenedOsPrivacyPage',
            'getCameraLedFallbackState',
        ]);
        this.microphoneToggleIsEnabled = false;
        this.cameraSwitchIsForceDisabled = false;
        this.cameraLEDFallbackState = false;
    }
    getInitialMicrophoneHardwareToggleState() {
        this.methodCalled('getInitialMicrophoneHardwareToggleState');
        return Promise.resolve(this.microphoneToggleIsEnabled);
    }
    getInitialCameraSwitchForceDisabledState() {
        this.methodCalled('getInitialCameraSwitchForceDisabledState');
        return Promise.resolve(this.cameraSwitchIsForceDisabled);
    }
    getCameraLedFallbackState() {
        this.methodCalled('getCameraLedFallbackState');
        return Promise.resolve(this.cameraLEDFallbackState);
    }
    sendLeftOsPrivacyPage() {
        this.methodCalled('sendLeftOsPrivacyPage');
    }
    sendOpenedOsPrivacyPage() {
        this.methodCalled('sendOpenedOsPrivacyPage');
    }
}
