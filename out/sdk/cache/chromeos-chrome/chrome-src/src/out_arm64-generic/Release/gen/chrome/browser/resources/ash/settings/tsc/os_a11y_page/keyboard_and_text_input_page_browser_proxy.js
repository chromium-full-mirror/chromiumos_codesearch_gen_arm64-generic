// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class KeyboardAndTextInputPageBrowserProxyImpl {
    static getInstance() {
        return instance ||
            (instance = new KeyboardAndTextInputPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    keyboardAndTextInputPageReady() {
        chrome.send('manageA11yPageReady');
    }
}
