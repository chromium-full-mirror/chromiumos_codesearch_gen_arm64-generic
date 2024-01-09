// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
export class TestClearBrowsingDataBrowserProxy extends TestBrowserProxy {
    constructor() {
        super(['initialize', 'clearBrowsingData']);
        /**
         * The promise to return from |clearBrowsingData|.
         * Allows testing code to test what happens after the call is made, and
         * before the browser responds.
         */
        this.clearBrowsingDataPromise_ = null;
    }
    setClearBrowsingDataPromise(promise) {
        this.clearBrowsingDataPromise_ = promise;
    }
    clearBrowsingData(dataTypes, timePeriod) {
        this.methodCalled('clearBrowsingData', [dataTypes, timePeriod]);
        webUIListenerCallback('browsing-data-removing', true);
        return this.clearBrowsingDataPromise_ !== null ?
            this.clearBrowsingDataPromise_ :
            Promise.resolve({ showHistoryNotice: false, showPasswordsNotice: false });
    }
    initialize() {
        this.methodCalled('initialize');
        return Promise.resolve();
    }
    getSyncState() {
        this.methodCalled('getSyncState');
        return Promise.resolve({
            signedIn: false,
            syncConsented: false,
            syncingHistory: false,
            shouldShowCookieException: false,
            isNonGoogleDse: false,
            nonGoogleSearchHistoryString: 'somestring',
        });
    }
}
