// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class BookmarksApiProxyImpl {
    getTree() {
        return chrome.bookmarks.getTree();
    }
    search(query) {
        return chrome.bookmarks.search(query);
    }
    update(id, changes) {
        return chrome.bookmarks.update(id, changes);
    }
    create(bookmark) {
        return chrome.bookmarks.create(bookmark);
    }
    static getInstance() {
        return instance || (instance = new BookmarksApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
