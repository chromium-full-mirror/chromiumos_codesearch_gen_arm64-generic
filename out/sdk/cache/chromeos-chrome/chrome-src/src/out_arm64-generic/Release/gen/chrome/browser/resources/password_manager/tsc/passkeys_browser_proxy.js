// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PasskeysBrowserProxyImpl {
    hasPasskeys() {
        return sendWithPromise('passkeysHasPasskeys');
    }
    managePasskeys() {
        return chrome.send('passkeysManagePasskeys');
    }
    static getInstance() {
        return passkeysProxyInstance ||
            (passkeysProxyInstance = new PasskeysBrowserProxyImpl());
    }
    static setInstance(obj) {
        passkeysProxyInstance = obj;
    }
}
let passkeysProxyInstance = null;
