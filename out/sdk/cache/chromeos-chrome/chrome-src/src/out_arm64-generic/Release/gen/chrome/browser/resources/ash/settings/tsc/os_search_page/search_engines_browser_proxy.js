// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "Manage search engines" section
 * to interact with the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class SearchEnginesBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new SearchEnginesBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getSearchEnginesList() {
        return sendWithPromise('getSearchEnginesList');
    }
    openBrowserSearchSettings() {
        chrome.send('openBrowserSearchSettings');
    }
}
