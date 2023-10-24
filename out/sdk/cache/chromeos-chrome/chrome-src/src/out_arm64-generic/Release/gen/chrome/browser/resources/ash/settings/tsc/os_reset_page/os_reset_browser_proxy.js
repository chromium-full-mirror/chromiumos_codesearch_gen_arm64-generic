// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class OsResetBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new OsResetBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    onPowerwashDialogShow() {
        chrome.send('onPowerwashDialogShow');
    }
    requestFactoryResetRestart() {
        chrome.send('requestFactoryResetRestart');
    }
}
