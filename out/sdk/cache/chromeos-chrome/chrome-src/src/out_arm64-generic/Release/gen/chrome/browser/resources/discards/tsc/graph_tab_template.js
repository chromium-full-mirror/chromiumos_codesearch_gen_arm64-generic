// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GraphChangeStreamReceiver, GraphDump } from './discards.mojom-webui.js';
import { getTemplate } from './graph_tab_template.html.js';
class DiscardsGraphChangeStreamImpl {
    constructor(contentWindow) {
        this.contentWindow_ = contentWindow;
    }
    postMessage_(type, data) {
        this.contentWindow_.postMessage([type, data], '*');
    }
    frameCreated(frame) {
        this.postMessage_('frameCreated', frame);
    }
    pageCreated(page) {
        this.postMessage_('pageCreated', page);
    }
    processCreated(process) {
        this.postMessage_('processCreated', process);
    }
    workerCreated(worker) {
        this.postMessage_('workerCreated', worker);
    }
    frameChanged(frame) {
        this.postMessage_('frameChanged', frame);
    }
    pageChanged(page) {
        this.postMessage_('pageChanged', page);
    }
    processChanged(process) {
        this.postMessage_('processChanged', process);
    }
    workerChanged(worker) {
        this.postMessage_('workerChanged', worker);
    }
    favIconDataAvailable(iconInfo) {
        this.postMessage_('favIconDataAvailable', iconInfo);
    }
    nodeDeleted(nodeId) {
        this.postMessage_('nodeDeleted', nodeId);
    }
}
class GraphTabElement extends PolymerElement {
    constructor() {
        super(...arguments);
        /**
         * The Mojo graph data source.
         */
        this.graphDump_ = null;
        /**
         * The graph change listener.
         */
        this.changeListener_ = null;
        /**
         * The WebView's content window object.
         */
        this.contentWindow_ = null;
    }
    static get is() {
        return 'graph-tab';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        this.graphDump_ = GraphDump.getRemote();
    }
    disconnectedCallback() {
        // TODO(siggi): Is there a way to tear down the binding explicitly?
        this.graphDump_ = null;
        this.changeListener_ = null;
    }
    /** @param event A request from the WebView. */
    onMessage_(event) {
        const message = event.data;
        const type = message[0];
        const data = message[1];
        switch (type) {
            case 'requestNodeDescriptions':
                // Forward the request through the mojoms and bounce the reply back.
                this.graphDump_.requestNodeDescriptions(data)
                    .then((descriptions) => this.contentWindow_.postMessage(['nodeDescriptions', descriptions.nodeDescriptionsJson], '*'));
                break;
        }
    }
    onWebViewReady_() {
        this.contentWindow_ = this.$.webView.contentWindow;
        this.changeListener_ =
            new DiscardsGraphChangeStreamImpl(this.contentWindow_);
        this.client_ = new GraphChangeStreamReceiver(this.changeListener_);
        // Subscribe for graph updates.
        this.graphDump_.subscribeToChanges(this.client_.$.bindNewPipeAndPassRemote());
        window.addEventListener('message', this.onMessage_.bind(this));
    }
}
customElements.define(GraphTabElement.is, GraphTabElement);
