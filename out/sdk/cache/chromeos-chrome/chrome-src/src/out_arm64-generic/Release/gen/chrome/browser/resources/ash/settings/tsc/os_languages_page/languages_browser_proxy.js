// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the languages section
 * to interact with the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class LanguagesBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new LanguagesBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    setProspectiveUiLanguage(languageCode) {
        chrome.send('setProspectiveUILanguage', [languageCode]);
    }
    getProspectiveUiLanguage() {
        return sendWithPromise('getProspectiveUILanguage');
    }
    getLanguageSettingsPrivate() {
        return chrome.languageSettingsPrivate;
    }
    getInputMethodPrivate() {
        return chrome.inputMethodPrivate;
    }
}
