// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class CursorAndTouchpadPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new CursorAndTouchpadPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    recordSelectedShowShelfNavigationButtonValue(enabled) {
        chrome.send('recordSelectedShowShelfNavigationButtonValue', [enabled]);
    }
}
