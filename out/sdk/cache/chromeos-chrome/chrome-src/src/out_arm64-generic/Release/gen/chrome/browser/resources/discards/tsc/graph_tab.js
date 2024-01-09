// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { Debouncer, PolymerElement, timeOut } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GraphChangeStreamReceiver, GraphDump } from './discards.mojom-webui.js';
import { Graph } from './graph.js';
import { getTemplate } from './graph_tab.html.js';
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
        this.graph_ = null;
        this.resizeObserver_ = null;
        this.debouncer_ = null;
    }
    static get is() {
        return 'graph-tab';
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        super.connectedCallback();
        this.graph_ = new Graph(this.$.graphBody, this.$.toolTips);
        this.graph_.initialize();
        // Set up a resize listener to track the graph on resize.
        this.resizeObserver_ = new ResizeObserver(() => {
            this.debouncer_ =
                Debouncer.debounce(this.debouncer_, timeOut.after(20), () => {
                    if (this.graph_) {
                        this.graph_.onResize();
                    }
                });
        });
        this.resizeObserver_.observe(this.$.graphBody);
        this.graphDump_ = GraphDump.getRemote();
        this.client_ = new GraphChangeStreamReceiver(this.graph_);
        // Subscribe for graph updates.
        this.graphDump_.subscribeToChanges(this.client_.$.bindNewPipeAndPassRemote());
    }
    disconnectedCallback() {
        // TODO(siggi): Is there a way to tear down the binding explicitly?
        this.graphDump_ = null;
        this.changeListener_ = null;
        if (this.resizeObserver_) {
            this.resizeObserver_.disconnect();
            this.resizeObserver_ = null;
        }
        this.graph_ = null;
    }
    // Handle request for node descriptions from the Graph.
    onRequestNodeDescriptions_(event) {
        // Forward the request through the mojoms and bounce the reply back.
        this.graphDump_.requestNodeDescriptions(event.detail)
            .then((descriptions) => this.graph_.nodeDescriptions(descriptions.nodeDescriptionsJson));
    }
}
customElements.define(GraphTabElement.is, GraphTabElement);
