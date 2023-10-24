// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class OsA11yPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new OsA11yPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    a11yPageReady() {
        chrome.send('a11yPageReady');
    }
    confirmA11yImageLabels() {
        chrome.send('confirmA11yImageLabels');
    }
}
