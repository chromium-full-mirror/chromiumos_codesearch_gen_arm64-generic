// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Helper browser proxy for peripheral data access client.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class PeripheralDataAccessBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new PeripheralDataAccessBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    isThunderboltSupported() {
        return sendWithPromise('isThunderboltSupported');
    }
    getPolicyState() {
        return sendWithPromise('getPolicyState');
    }
}
