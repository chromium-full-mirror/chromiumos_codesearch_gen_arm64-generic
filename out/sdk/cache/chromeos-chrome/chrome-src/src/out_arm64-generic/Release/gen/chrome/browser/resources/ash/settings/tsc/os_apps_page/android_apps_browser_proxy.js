// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class AndroidAppsBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new AndroidAppsBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    requestAndroidAppsInfo() {
        chrome.send('requestAndroidAppsInfo');
    }
    showAndroidAppsSettings(keyboardAction) {
        chrome.send('showAndroidAppsSettings', [keyboardAction]);
    }
    openGooglePlayStore(url) {
        chrome.send('showPlayStoreApps', [url]);
    }
}
