// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class SyncConfirmationBrowserProxyImpl {
    confirm(description, confirmation) {
        chrome.send('confirm', [description, confirmation]);
    }
    undo() {
        chrome.send('undo');
    }
    goToSettings(description, confirmation) {
        chrome.send('goToSettings', [description, confirmation]);
    }
    initializedWithSize(height) {
        chrome.send('initializedWithSize', height);
    }
    requestAccountInfo() {
        chrome.send('accountInfoRequest');
    }
    openDeviceSyncSettings() {
        chrome.send('openDeviceSyncSettings');
    }
    static getInstance() {
        return instance || (instance = new SyncConfirmationBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
