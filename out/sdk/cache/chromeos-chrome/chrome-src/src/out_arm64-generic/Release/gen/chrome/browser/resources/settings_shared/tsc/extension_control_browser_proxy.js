// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ExtensionControlBrowserProxyImpl {
    disableExtension(extensionId) {
        chrome.send('disableExtension', [extensionId]);
    }
    manageExtension(extensionId) {
        window.open('chrome://extensions?id=' + extensionId);
    }
    static getInstance() {
        return instance || (instance = new ExtensionControlBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
