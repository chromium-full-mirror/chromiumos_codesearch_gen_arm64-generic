// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the Plugin VM section
 * to manage the Plugin VM.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class PluginVmBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new PluginVmBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    isRelaunchNeededForNewPermissions() {
        return sendWithPromise('isRelaunchNeededForNewPermissions');
    }
    relaunchPluginVm() {
        chrome.send('relaunchPluginVm');
    }
}
