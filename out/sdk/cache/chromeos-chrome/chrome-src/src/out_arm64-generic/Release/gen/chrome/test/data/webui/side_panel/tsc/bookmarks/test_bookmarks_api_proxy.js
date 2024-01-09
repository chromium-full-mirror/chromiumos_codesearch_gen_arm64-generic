// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBookmarksApiProxy extends TestBrowserProxy {
    folders_ = [];
    callbackRouter;
    constructor() {
        super([
            'getActiveUrl',
            'getFolders',
            'bookmarkCurrentTabInFolder',
            'openBookmark',
            'cutBookmark',
            'contextMenuOpenBookmarkInNewTab',
            'contextMenuOpenBookmarkInNewWindow',
            'contextMenuOpenBookmarkInIncognitoWindow',
            'contextMenuOpenBookmarkInNewTabGroup',
            'contextMenuAddToBookmarksBar',
            'contextMenuRemoveFromBookmarksBar',
            'contextMenuDelete',
            'copyBookmark',
            'createFolder',
            'editBookmarks',
            'deleteBookmarks',
            'pasteToBookmark',
            'renameBookmark',
            'setSortOrder',
            'setViewType',
            'showContextMenu',
            'showUi',
            'undo',
        ]);
        this.callbackRouter = {
            onChanged: new FakeChromeEvent(),
            onChildrenReordered: new FakeChromeEvent(),
            onCreated: new FakeChromeEvent(),
            onMoved: new FakeChromeEvent(),
            onRemoved: new FakeChromeEvent(),
            onTabActivated: new FakeChromeEvent(),
            onTabUpdated: new FakeChromeEvent(),
        };
    }
    getActiveUrl() {
        this.methodCalled('getActiveUrl');
        return Promise.resolve('http://www.test.com');
    }
    getFolders() {
        this.methodCalled('getFolders');
        return Promise.resolve(this.folders_);
    }
    bookmarkCurrentTabInFolder() {
        this.methodCalled('bookmarkCurrentTabInFolder');
    }
    openBookmark(id, depth, clickModifiers, source) {
        this.methodCalled('openBookmark', id, depth, clickModifiers, source);
    }
    setFolders(folders) {
        this.folders_ = folders;
    }
    contextMenuOpenBookmarkInNewTab(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewTab', ids, source);
    }
    contextMenuOpenBookmarkInNewWindow(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewWindow', ids, source);
    }
    contextMenuOpenBookmarkInIncognitoWindow(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInIncognitoWindow', ids, source);
    }
    contextMenuOpenBookmarkInNewTabGroup(ids, source) {
        this.methodCalled('contextMenuOpenBookmarkInNewTabGroup', ids, source);
    }
    contextMenuAddToBookmarksBar(id, source) {
        this.methodCalled('contextMenuAddToBookmarksBar', id, source);
    }
    contextMenuRemoveFromBookmarksBar(id, source) {
        this.methodCalled('contextMenuRemoveFromBookmarksBar', id, source);
    }
    contextMenuDelete(ids, source) {
        this.methodCalled('contextMenuDelete', ids, source);
    }
    copyBookmark(id) {
        this.methodCalled('copyBookmark', id);
        return Promise.resolve();
    }
    createFolder(parentId, title) {
        this.methodCalled('createFolder', parentId, title);
        return Promise.resolve({ id: '0', title: 'foo' });
    }
    cutBookmark(id) {
        this.methodCalled('cutBookmark', id);
    }
    editBookmarks(ids, newTitle, newUrl, newParentId) {
        this.methodCalled('editBookmarks', ids, newTitle, newUrl, newParentId);
    }
    deleteBookmarks(ids) {
        this.methodCalled('deleteBookmarks', ids);
        return Promise.resolve();
    }
    pasteToBookmark(parentId, destinationId) {
        this.methodCalled('pasteToBookmark', parentId, destinationId);
        return Promise.resolve();
    }
    renameBookmark(id, title) {
        this.methodCalled('renameBookmark', id, title);
    }
    setSortOrder(sortOrder) {
        this.methodCalled('setSortOrder', sortOrder);
    }
    setViewType(viewType) {
        this.methodCalled('setViewType', viewType);
    }
    showContextMenu(id, x, y, source) {
        this.methodCalled('showContextMenu', id, x, y, source);
    }
    showUi() {
        this.methodCalled('showUi');
    }
    undo() {
        this.methodCalled('undo');
    }
}
