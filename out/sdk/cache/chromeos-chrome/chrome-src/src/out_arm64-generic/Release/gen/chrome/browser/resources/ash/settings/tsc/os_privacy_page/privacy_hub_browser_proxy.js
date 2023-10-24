// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class PrivacyHubBrowserProxyImpl {
    getInitialMicrophoneHardwareToggleState() {
        return sendWithPromise('getInitialMicrophoneHardwareToggleState');
    }
    getInitialCameraSwitchForceDisabledState() {
        return sendWithPromise('getInitialCameraSwitchForceDisabledState');
    }
    getCameraLedFallbackState() {
        return sendWithPromise('getCameraLedFallbackState');
    }
    sendLeftOsPrivacyPage() {
        chrome.send('leftOsPrivacyPage');
    }
    sendOpenedOsPrivacyPage() {
        chrome.send('osPrivacyPageWasOpened');
    }
    static getInstance() {
        return instance || (instance = new PrivacyHubBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
}
