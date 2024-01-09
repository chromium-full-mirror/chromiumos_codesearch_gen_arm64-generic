// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
/**
 * A test version of SearchEnginesBrowserProxy. Provides helper methods
 * for allowing tests to know when a method was called, as well as
 * specifying mock responses.
 */
export class TestSearchEnginesBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'getSearchEnginesList',
            'removeSearchEngine',
            'searchEngineEditCancelled',
            'searchEngineEditCompleted',
            'searchEngineEditStarted',
            'setDefaultSearchEngine',
            'setIsActiveSearchEngine',
            'validateSearchEngineInput',
            'recordSearchEnginesPageHistogram',
        ]);
        this.searchEnginesInfo_ =
            { defaults: [], actives: [], others: [], extensions: [] };
    }
    setDefaultSearchEngine(modelIndex, choiceMadeLocation) {
        this.methodCalled('setDefaultSearchEngine', modelIndex, choiceMadeLocation);
    }
    setIsActiveSearchEngine(modelIndex, isActive) {
        this.methodCalled('setIsActiveSearchEngine', [modelIndex, isActive]);
    }
    removeSearchEngine(modelIndex) {
        this.methodCalled('removeSearchEngine', modelIndex);
    }
    searchEngineEditStarted(modelIndex) {
        this.methodCalled('searchEngineEditStarted', modelIndex);
    }
    searchEngineEditCancelled() {
        this.methodCalled('searchEngineEditCancelled');
    }
    searchEngineEditCompleted(searchEngine, keyword, queryUrl) {
        this.methodCalled('searchEngineEditCompleted', [searchEngine, keyword, queryUrl]);
    }
    getSearchEnginesList() {
        this.methodCalled('getSearchEnginesList');
        return Promise.resolve(this.searchEnginesInfo_);
    }
    validateSearchEngineInput(fieldName, fieldValue) {
        this.methodCalled('validateSearchEngineInput', [fieldName, fieldValue]);
        return Promise.resolve(true);
    }
    recordSearchEnginesPageHistogram(interaction) {
        this.methodCalled('recordSearchEnginesPageHistogram', interaction);
    }
    /**
     * Sets the response to be returned by |getSearchEnginesList|.
     */
    setSearchEnginesInfo(searchEnginesInfo) {
        this.searchEnginesInfo_ = searchEnginesInfo;
    }
}
export function createSampleSearchEngine(override) {
    return Object.assign({
        canBeDefault: false,
        canBeEdited: false,
        canBeRemoved: false,
        canBeActivated: false,
        canBeDeactivated: false,
        default: false,
        displayName: 'Google',
        // TODO(b/317357143): Rename to `isManaged` when the UI for DSP and SS
        //                    are unified.
        iconURL: 'http://www.google.com/favicon.ico',
        iconPath: 'images/foo.png',
        id: 0,
        isManaged: false,
        isOmniboxExtension: false,
        keyword: 'google.com',
        modelIndex: 0,
        name: 'Google',
        shouldConfirmDeletion: false,
        url: 'https://search.foo.com/search?p=%s',
        urlLocked: false,
    }, override || {});
}
export function createSampleOmniboxExtension() {
    return {
        canBeDefault: false,
        canBeEdited: false,
        canBeRemoved: false,
        canBeActivated: false,
        canBeDeactivated: false,
        default: false,
        displayName: 'Omnibox extension displayName',
        iconPath: 'images/foo.png',
        extension: {
            icon: 'chrome://extension-icon/some-extension-icon',
            id: 'dummyextensionid',
            name: 'Omnibox extension',
            canBeDisabled: false,
        },
        id: 0,
        isOmniboxExtension: true,
        isManaged: false,
        keyword: 'oe',
        modelIndex: 6,
        name: 'Omnibox extension',
        shouldConfirmDeletion: false,
        url: 'chrome-extension://dummyextensionid/?q=%s',
        urlLocked: false,
    };
}
