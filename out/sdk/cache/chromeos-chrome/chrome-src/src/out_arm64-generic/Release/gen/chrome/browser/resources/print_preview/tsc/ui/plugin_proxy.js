// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { pdfCreateOutOfProcessPlugin } from 'chrome://print/pdf/pdf_scripting_api.js';
import { assert } from 'chrome://resources/js/assert.js';
export class PluginProxyImpl {
    constructor() {
        this.plugin_ = null;
    }
    pluginReady() {
        return !!this.plugin_;
    }
    createPlugin(previewUid, index) {
        assert(!this.plugin_);
        const srcUrl = this.getPreviewUrl_(previewUid, index);
        this.plugin_ = pdfCreateOutOfProcessPlugin(srcUrl, 'chrome://print/pdf/index_print.html');
        this.plugin_.classList.add('preview-area-plugin');
        // NOTE: The plugin's 'id' field must be set to 'pdf-viewer' since
        // chrome/renderer/printing/print_render_frame_helper.cc actually
        // references it.
        this.plugin_.setAttribute('id', 'pdf-viewer');
        return this.plugin_;
    }
    /**
     * Get the URL for the plugin.
     * @param previewUid Unique identifier of preview.
     * @param index Page index for plugin.
     */
    getPreviewUrl_(previewUid, index) {
        return `chrome-untrusted://print/${previewUid}/${index}/print.pdf`;
    }
    resetPrintPreviewMode(previewUid, index, color, pages, modifiable) {
        this.plugin_.resetPrintPreviewMode(this.getPreviewUrl_(previewUid, index), color, pages, modifiable);
    }
    scrollPosition(scrollX, scrollY) {
        this.plugin_.scrollPosition(scrollX, scrollY);
    }
    sendKeyEvent(e) {
        this.plugin_.sendKeyEvent(e);
    }
    hideToolbar() {
        this.plugin_.hideToolbar();
    }
    setPointerEvents(eventsEnabled) {
        this.plugin_.style.pointerEvents = eventsEnabled ? 'auto' : 'none';
    }
    loadPreviewPage(previewUid, pageIndex, index) {
        this.plugin_.loadPreviewPage(this.getPreviewUrl_(previewUid, pageIndex), index);
    }
    setKeyEventCallback(keyEventCallback) {
        this.plugin_.setKeyEventCallback(keyEventCallback);
    }
    setLoadCompleteCallback(loadCompleteCallback) {
        this.plugin_.setLoadCompleteCallback(loadCompleteCallback);
    }
    setViewportChangedCallback(viewportChangedCallback) {
        this.plugin_.setViewportChangedCallback(viewportChangedCallback);
    }
    darkModeChanged(darkMode) {
        this.plugin_.darkModeChanged(darkMode);
    }
    static setInstance(obj) {
        instance = obj;
    }
    static getInstance() {
        return instance || (instance = new PluginProxyImpl());
    }
}
let instance = null;
