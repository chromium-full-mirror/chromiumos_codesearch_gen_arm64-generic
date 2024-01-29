// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BrowserProxyImpl {
    requestSystemInfo() {
        return sendWithPromise('requestSystemInfo');
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    isLacrosEnabled() {
        return sendWithPromise('isLacrosEnabled');
    }
    openLacrosSystemPage() {
        chrome.send('openLacrosSystemPage');
    }
}
let instance = null;
