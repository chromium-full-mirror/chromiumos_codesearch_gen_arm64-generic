// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class NearbyAccountManagerBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new NearbyAccountManagerBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAccounts() {
        return sendWithPromise('getAccounts');
    }
}
