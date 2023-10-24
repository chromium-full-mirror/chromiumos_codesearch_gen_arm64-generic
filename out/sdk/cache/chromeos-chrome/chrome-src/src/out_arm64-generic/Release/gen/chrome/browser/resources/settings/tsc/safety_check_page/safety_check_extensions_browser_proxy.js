// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class SafetyCheckExtensionsBrowserProxyImpl {
    getNumberOfExtensionsThatNeedReview() {
        return sendWithPromise('getNumberOfExtensionsThatNeedReview');
    }
    static getInstance() {
        return instance || (instance = new SafetyCheckExtensionsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
