// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class OsA11yPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new OsA11yPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    confirmA11yImageLabels() {
        chrome.send('confirmA11yImageLabels');
    }
    getScreenReaderState() {
        return sendWithPromise('getScreenReaderState');
    }
}
