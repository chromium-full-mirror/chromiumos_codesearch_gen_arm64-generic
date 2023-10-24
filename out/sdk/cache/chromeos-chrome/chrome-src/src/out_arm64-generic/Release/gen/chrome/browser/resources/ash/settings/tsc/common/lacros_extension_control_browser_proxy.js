// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class LacrosExtensionControlBrowserProxyImpl {
    manageLacrosExtension(extensionId) {
        chrome.send('openExtensionPageInLacros', [extensionId]);
    }
    static getInstance() {
        return instance ||
            (instance = new LacrosExtensionControlBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
