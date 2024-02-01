// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPrivacyHubBrowserProxy extends TestBrowserProxy {
    microphoneToggleIsEnabled;
    cameraSwitchIsForceDisabled;
    cameraLEDFallbackState;
    currentTimeZoneName;
    currentSunRiseTime;
    currentSunSetTime;
    constructor() {
        super([
            'getInitialMicrophoneHardwareToggleState',
            'getInitialCameraSwitchForceDisabledState',
            'sendLeftOsPrivacyPage',
            'sendOpenedOsPrivacyPage',
            'getCameraLedFallbackState',
            'getCurrentTimeZoneName',
            'getCurrentSunriseTime',
            'getCurrentSunsetTime',
        ]);
        this.microphoneToggleIsEnabled = false;
        this.cameraSwitchIsForceDisabled = false;
        this.cameraLEDFallbackState = false;
        this.currentTimeZoneName = 'Test Time Zone';
        this.currentSunRiseTime = '7:00AM';
        this.currentSunSetTime = '8:00PM';
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
    getCurrentTimeZoneName() {
        this.methodCalled('getCurrentTimeZoneName');
        return Promise.resolve(this.currentTimeZoneName);
    }
    getCurrentSunriseTime() {
        this.methodCalled('getCurrentSunriseTime');
        return Promise.resolve(this.currentSunRiseTime);
    }
    getCurrentSunsetTime() {
        this.methodCalled('getCurrentSunsetTime');
        return Promise.resolve(this.currentSunSetTime);
    }
    sendLeftOsPrivacyPage() {
        this.methodCalled('sendLeftOsPrivacyPage');
    }
    sendOpenedOsPrivacyPage() {
        this.methodCalled('sendOpenedOsPrivacyPage');
    }
}
