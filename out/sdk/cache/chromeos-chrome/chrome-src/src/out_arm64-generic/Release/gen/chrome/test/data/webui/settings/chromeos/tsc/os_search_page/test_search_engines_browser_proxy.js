// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSearchEnginesBrowserProxy extends TestBrowserProxy {
    searchEngineInfo;
    constructor(searchEngineInfo) {
        super([
            'getSearchEnginesList',
            'openBrowserSearchSettings',
        ]);
        this.searchEngineInfo = searchEngineInfo;
    }
    getSearchEnginesList() {
        this.methodCalled('getSearchEnginesList');
        return Promise.resolve(this.searchEngineInfo);
    }
    openBrowserSearchSettings() {
        this.methodCalled('openBrowserSearchSettings');
    }
}
