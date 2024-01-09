// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestBookmarkManagerApiProxy extends TestBrowserProxy {
    onDragEnter = new FakeChromeEvent();
    canPaste_ = false;
    constructor() {
        super([
            'canPaste',
            'copy',
            'cut',
            'drop',
            'openInNewTab',
            'openInNewWindow',
            'paste',
            'removeTrees',
            'startDrag',
        ]);
    }
    setCanPaste(canPaste) {
        this.canPaste_ = canPaste;
    }
    drop(parentId, index) {
        this.methodCalled('drop', [parentId, index]);
        return Promise.resolve();
    }
    startDrag(idList, _dragNodeIndex, _isFromTouch, _x, _y) {
        this.methodCalled('startDrag', idList);
    }
    removeTrees(idList) {
        this.methodCalled('removeTrees', idList);
        return Promise.resolve();
    }
    canPaste(_parentId) {
        this.methodCalled('canPaste');
        return Promise.resolve(this.canPaste_);
    }
    openInNewWindow(idList, incognito) {
        this.methodCalled('openInNewWindow', [idList, incognito]);
    }
    openInNewTab(id, active) {
        this.methodCalled('openInNewTab', [id, active]);
    }
    cut(idList) {
        this.methodCalled('cut', idList);
        return Promise.resolve();
    }
    paste(parentId, _selectedIdList) {
        this.methodCalled('paste', parentId);
        return Promise.resolve();
    }
    copy(idList) {
        this.methodCalled('copy', idList);
        return Promise.resolve();
    }
}
