// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPowerBookmarksDelegate extends TestBrowserProxy {
    constructor() {
        super([
            'setCurrentUrl',
            'setImageUrl',
            'onBookmarksLoaded',
            'onBookmarkChanged',
            'onBookmarkCreated',
            'onBookmarkMoved',
            'onBookmarkRemoved',
            'isPriceTracked',
            'getProductImageUrl',
        ]);
    }
    setCurrentUrl(url) {
        this.methodCalled('setCurrentUrl', url);
    }
    setImageUrl(bookmark, url) {
        this.methodCalled('setImageUrl', bookmark, url);
    }
    onBookmarksLoaded() {
        this.methodCalled('onBookmarksLoaded');
    }
    onBookmarkChanged(id, changedInfo) {
        this.methodCalled('onBookmarkChanged', id, changedInfo);
    }
    onBookmarkCreated(bookmark, parent) {
        this.methodCalled('onBookmarkCreated', bookmark, parent);
    }
    onBookmarkMoved(bookmark, oldParent, newParent) {
        this.methodCalled('onBookmarkMoved', bookmark, oldParent, newParent);
    }
    onBookmarkRemoved(bookmark) {
        this.methodCalled('onBookmarkRemoved', bookmark);
    }
    isPriceTracked(bookmark) {
        this.methodCalled('isPriceTracked', bookmark);
        return false;
    }
    getProductImageUrl(bookmark) {
        this.methodCalled('getProductImageUrl', bookmark);
        return '';
    }
}
