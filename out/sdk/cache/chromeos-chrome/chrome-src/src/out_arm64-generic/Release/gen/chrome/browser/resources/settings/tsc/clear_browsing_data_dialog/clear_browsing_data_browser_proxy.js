// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Clear browsing data" dialog
 * to interact with the browser.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class ClearBrowsingDataBrowserProxyImpl {
    clearBrowsingData(dataTypes, timePeriod) {
        return sendWithPromise('clearBrowsingData', dataTypes, timePeriod);
    }
    initialize() {
        return sendWithPromise('initializeClearBrowsingData');
    }
    getSyncState() {
        return sendWithPromise('getSyncState');
    }
    static getInstance() {
        return instance || (instance = new ClearBrowsingDataBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
