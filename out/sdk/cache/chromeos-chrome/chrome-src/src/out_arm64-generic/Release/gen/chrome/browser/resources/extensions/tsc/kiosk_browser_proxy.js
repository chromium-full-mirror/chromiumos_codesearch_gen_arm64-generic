// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Kiosk" dialog to interact with
 * the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class KioskBrowserProxyImpl {
    initializeKioskAppSettings() {
        return sendWithPromise('initializeKioskAppSettings');
    }
    getKioskAppSettings() {
        return sendWithPromise('getKioskAppSettings');
    }
    addKioskApp(appId) {
        chrome.send('addKioskApp', [appId]);
    }
    disableKioskAutoLaunch(appId) {
        chrome.send('disableKioskAutoLaunch', [appId]);
    }
    enableKioskAutoLaunch(appId) {
        chrome.send('enableKioskAutoLaunch', [appId]);
    }
    removeKioskApp(appId) {
        chrome.send('removeKioskApp', [appId]);
    }
    setDisableBailoutShortcut(disableBailout) {
        chrome.send('setDisableBailoutShortcut', [disableBailout]);
    }
    static getInstance() {
        return instance || (instance = new KioskBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
