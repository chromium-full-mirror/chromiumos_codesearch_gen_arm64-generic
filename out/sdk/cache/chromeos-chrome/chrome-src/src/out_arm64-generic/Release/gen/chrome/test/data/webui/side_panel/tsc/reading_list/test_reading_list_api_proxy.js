// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://read-later.top-chrome/reading_list.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestReadingListApiProxy extends TestBrowserProxy {
    callbackRouter = new PageCallbackRouter();
    entries_;
    constructor() {
        super([
            'getReadLaterEntries',
            'openUrl',
            'updateReadStatus',
            'addCurrentTab',
            'markCurrentTabAsRead',
            'removeEntry',
            'showContextMenuForUrl',
            'updateCurrentPageActionButtonState',
            'showUi',
            'closeUi',
        ]);
        this.entries_ = {
            unreadEntries: [],
            readEntries: [],
        };
    }
    getReadLaterEntries() {
        this.methodCalled('getReadLaterEntries');
        return Promise.resolve({ entries: this.entries_ });
    }
    openUrl(url, markAsRead, clickModifiers) {
        this.methodCalled('openUrl', [url, markAsRead, clickModifiers]);
    }
    updateReadStatus(url, read) {
        this.methodCalled('updateReadStatus', [url, read]);
    }
    addCurrentTab() {
        this.methodCalled('addCurrentTab');
    }
    markCurrentTabAsRead() {
        this.methodCalled('markCurrentTabAsRead');
    }
    removeEntry(url) {
        this.methodCalled('removeEntry', url);
    }
    showContextMenuForUrl(url, locationX, locationY) {
        this.methodCalled('showContextMenuForUrl', [url, locationX, locationY]);
    }
    updateCurrentPageActionButtonState() {
        this.methodCalled('updateCurrentPageActionButtonState');
    }
    showUi() {
        this.methodCalled('showUi');
    }
    closeUi() {
        this.methodCalled('closeUi');
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    setEntries(entries) {
        this.entries_ = entries;
    }
}
