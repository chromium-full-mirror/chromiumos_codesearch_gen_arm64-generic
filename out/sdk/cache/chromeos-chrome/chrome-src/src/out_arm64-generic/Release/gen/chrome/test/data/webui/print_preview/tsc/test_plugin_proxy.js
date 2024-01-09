// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Test version of the PluginProxy.
 */
export class TestPluginProxy extends TestBrowserProxy {
    loadCompleteCallback_ = null;
    preloadCallback_ = null;
    viewportChangedCallback_ = null;
    fakePlugin_ = null;
    constructor() {
        super(['loadPreviewPage']);
    }
    setLoadCompleteCallback(loadCompleteCallback) {
        assert(!this.loadCompleteCallback_);
        this.loadCompleteCallback_ = loadCompleteCallback;
    }
    setPreloadCallback(preloadCallback) {
        this.preloadCallback_ = preloadCallback;
    }
    setKeyEventCallback(_keyEventCallback) { }
    setViewportChangedCallback(viewportChangedCallback) {
        this.viewportChangedCallback_ = viewportChangedCallback;
    }
    pluginReady() {
        return !!this.fakePlugin_;
    }
    createPlugin(_previewUid, _index) {
        this.fakePlugin_ = document.createElement('div');
        this.fakePlugin_.classList.add('preview-area-plugin');
        this.fakePlugin_.id = 'pdf-viewer';
        return this.fakePlugin_;
    }
    resetPrintPreviewMode(_previewUid, _index, _color, _pages, _modifiable) { }
    scrollPosition(_scrollX, _scrollY) { }
    sendKeyEvent(_e) { }
    hideToolbar() { }
    setPointerEvents(_eventsOn) { }
    loadPreviewPage(previewUid, pageIndex, index) {
        this.methodCalled('loadPreviewPage', { previewUid: previewUid, pageIndex: pageIndex, index: index });
        if (this.preloadCallback_) {
            this.preloadCallback_();
        }
        if (this.loadCompleteCallback_) {
            this.loadCompleteCallback_(true);
        }
    }
    darkModeChanged(_darkMode) { }
    /**
     * @param pageX The horizontal offset for the page corner in pixels.
     * @param pageY The vertical offset for the page corner in pixels.
     * @param pageWidth The page width in pixels.
     * @param viewportWidth The viewport width in pixels.
     * @param viewportHeight The viewport height in pixels.
     */
    triggerVisualStateChange(pageX, pageY, pageWidth, viewportWidth, viewportHeight) {
        this.viewportChangedCallback_(pageX, pageY, pageWidth, viewportWidth, viewportHeight);
    }
}
