// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class ResetBrowserProxyImpl {
    performResetProfileSettings(sendSettings, requestOrigin) {
        return sendWithPromise('performResetProfileSettings', sendSettings, requestOrigin);
    }
    onHideResetProfileDialog() {
        chrome.send('onHideResetProfileDialog');
    }
    onHideResetProfileBanner() {
        chrome.send('onHideResetProfileBanner');
    }
    onShowResetProfileDialog() {
        chrome.send('onShowResetProfileDialog');
    }
    showReportedSettings() {
        sendWithPromise('getReportedSettings')
            .then(function (settings) {
            const output = settings.map(function (entry) {
                return entry.key + ': ' + entry.value.replace(/\n/g, ', ');
            });
            const win = window.open('about:blank');
            const div = win.document.createElement('div');
            div.textContent = output.join('\n');
            div.style.whiteSpace = 'pre';
            win.document.body.appendChild(div);
        });
    }
    getTriggeredResetToolName() {
        return sendWithPromise('getTriggeredResetToolName');
    }
    static getInstance() {
        return instance || (instance = new ResetBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
