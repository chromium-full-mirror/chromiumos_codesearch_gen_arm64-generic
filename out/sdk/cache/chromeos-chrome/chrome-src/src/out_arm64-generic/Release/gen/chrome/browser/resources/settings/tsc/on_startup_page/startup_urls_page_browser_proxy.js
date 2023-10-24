// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class StartupUrlsPageBrowserProxyImpl {
    loadStartupPages() {
        chrome.send('onStartupPrefsPageLoad');
    }
    useCurrentPages() {
        chrome.send('setStartupPagesToCurrentPages');
    }
    validateStartupPage(url) {
        return sendWithPromise('validateStartupPage', url);
    }
    addStartupPage(url) {
        return sendWithPromise('addStartupPage', url);
    }
    editStartupPage(modelIndex, url) {
        return sendWithPromise('editStartupPage', modelIndex, url);
    }
    removeStartupPage(index) {
        chrome.send('removeStartupPage', [index]);
    }
    static getInstance() {
        return instance || (instance = new StartupUrlsPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
