// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class OsSyncBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new OsSyncBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    didNavigateToOsSyncPage() {
        chrome.send('DidNavigateToOsSyncPage');
    }
    didNavigateAwayFromOsSyncPage() {
        chrome.send('DidNavigateAwayFromOsSyncPage');
    }
    sendOsSyncPrefsChanged() {
        chrome.send('OsSyncPrefsDispatch');
    }
    setOsSyncDatatypes(osSyncPrefs) {
        return chrome.send('SetOsSyncDatatypes', [osSyncPrefs]);
    }
}
