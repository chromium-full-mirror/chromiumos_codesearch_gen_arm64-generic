// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * JavaScript hooks into the native WebUI handler to pass LogMessages to the
 * logging tab.
 */
export class NearbyLogsBrowserProxy {
    getLogMessages() {
        return sendWithPromise('getLogMessages');
    }
    getQuickPairLogMessages() {
        return sendWithPromise('getQuickPairLogMessages');
    }
    static getInstance() {
        return instance || (instance = new NearbyLogsBrowserProxy());
    }
}
let instance = null;
