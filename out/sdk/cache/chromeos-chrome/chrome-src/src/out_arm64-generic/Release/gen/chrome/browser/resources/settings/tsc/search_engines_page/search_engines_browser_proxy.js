// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Contains all recorded interactions on the search engines settings page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsSearchEnginesInteractions enum in
 * histograms/enums.xml
 */
export var SearchEnginesInteractions;
(function (SearchEnginesInteractions) {
    SearchEnginesInteractions[SearchEnginesInteractions["ACTIVATE"] = 0] = "ACTIVATE";
    SearchEnginesInteractions[SearchEnginesInteractions["DEACTIVATE"] = 1] = "DEACTIVATE";
    SearchEnginesInteractions[SearchEnginesInteractions["KEYBOARD_SHORTCUT_TAB"] = 2] = "KEYBOARD_SHORTCUT_TAB";
    SearchEnginesInteractions[SearchEnginesInteractions["KEYBOARD_SHORTCUT_SPACE_OR_TAB"] = 3] = "KEYBOARD_SHORTCUT_SPACE_OR_TAB";
    // Leave this at the end.
    SearchEnginesInteractions[SearchEnginesInteractions["COUNT"] = 4] = "COUNT";
})(SearchEnginesInteractions || (SearchEnginesInteractions = {}));
export class SearchEnginesBrowserProxyImpl {
    setDefaultSearchEngine(modelIndex) {
        chrome.send('setDefaultSearchEngine', [modelIndex]);
    }
    setIsActiveSearchEngine(modelIndex, isActive) {
        chrome.send('setIsActiveSearchEngine', [modelIndex, isActive]);
        this.recordSearchEnginesPageHistogram(isActive ? SearchEnginesInteractions.ACTIVATE :
            SearchEnginesInteractions.DEACTIVATE);
    }
    removeSearchEngine(modelIndex) {
        chrome.send('removeSearchEngine', [modelIndex]);
    }
    searchEngineEditStarted(modelIndex) {
        chrome.send('searchEngineEditStarted', [modelIndex]);
    }
    searchEngineEditCancelled() {
        chrome.send('searchEngineEditCancelled');
    }
    searchEngineEditCompleted(searchEngine, keyword, queryUrl) {
        chrome.send('searchEngineEditCompleted', [
            searchEngine,
            keyword,
            queryUrl,
        ]);
    }
    getSearchEnginesList() {
        return sendWithPromise('getSearchEnginesList');
    }
    validateSearchEngineInput(fieldName, fieldValue) {
        return sendWithPromise('validateSearchEngineInput', fieldName, fieldValue);
    }
    recordSearchEnginesPageHistogram(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('Settings.SearchEngines.Interactions', interaction, SearchEnginesInteractions.COUNT);
    }
    static getInstance() {
        return instance || (instance = new SearchEnginesBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
