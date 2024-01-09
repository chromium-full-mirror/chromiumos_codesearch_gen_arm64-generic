// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestAndroidAppsBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'requestAndroidAppsInfo',
            'showAndroidAppsSettings',
            'showPlayStoreApps',
        ]);
    }
    requestAndroidAppsInfo() {
        this.methodCalled('requestAndroidAppsInfo');
        this.setAndroidAppsState(false, false);
    }
    showAndroidAppsSettings(keyboardAction) {
        this.methodCalled('showAndroidAppsSettings', keyboardAction);
    }
    openGooglePlayStore(url) {
        this.methodCalled('showPlayStoreApps', url);
    }
    setAndroidAppsState(playStoreEnabled, settingsAppAvailable) {
        // We need to make sure to pass a new object here, otherwise the property
        // change event may not get fired in the listener.
        const appsInfo = {
            playStoreEnabled,
            settingsAppAvailable,
        };
        webUIListenerCallback('android-apps-info-update', appsInfo);
    }
}
