// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBookmarksApiProxy extends TestBrowserProxy {
    searchResponse_ = [];
    getTreeResponse_ = [];
    constructor() {
        super([
            'create',
            'getTree',
            'search',
            'update',
        ]);
    }
    getTree() {
        this.methodCalled('getTree');
        return Promise.resolve(this.getTreeResponse_);
    }
    setGetTree(nodes) {
        this.getTreeResponse_ = nodes;
    }
    search(query) {
        this.methodCalled('search', query);
        return Promise.resolve(this.searchResponse_);
    }
    setSearchResponse(response) {
        this.searchResponse_ = response;
    }
    update(id, changes) {
        this.methodCalled('update', [id, changes]);
        return Promise.resolve({ id: '', title: '' });
    }
    create(bookmark) {
        this.methodCalled('create', bookmark);
        return Promise.resolve({ id: '', title: '' });
    }
}
