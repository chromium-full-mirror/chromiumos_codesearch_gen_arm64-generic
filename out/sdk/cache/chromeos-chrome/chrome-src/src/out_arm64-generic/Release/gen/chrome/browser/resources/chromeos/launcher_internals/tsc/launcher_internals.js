// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './results_table.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserProxy } from './browser_proxy.js';
import { getTemplate } from './launcher_internals.html.js';
class LauncherInternalsElement extends PolymerElement {
    static get is() {
        return 'launcher-internals';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return { query: String, keywords: [String] };
    }
    constructor() {
        super();
        this.query = '';
        this.keywords = [];
        this.listenerIds = [];
        this.router = BrowserProxy.getInstance().callbackRouter;
    }
    connectedCallback() {
        super.connectedCallback();
        this.listenerIds.push(this.router.updateResults.addListener(this.updateResults.bind(this)));
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds.forEach(id => this.router.removeListener(id));
    }
    updateResults(query, keywords, results) {
        // Split the results array into its three display surfaces.
        const recentFiles = [];
        const recentApps = [];
        const searchResults = [];
        results.forEach(result => {
            switch (result.displayType) {
                case 'Continue':
                    recentFiles.push(result);
                    break;
                case 'RecentApps':
                    recentApps.push(result);
                    break;
                default:
                    searchResults.push(result);
                    break;
            }
        });
        if (recentFiles.length > 0) {
            this.$.recentFiles.clearResults();
            this.$.recentFiles.addResults(recentFiles);
        }
        if (recentApps.length > 0) {
            this.$.recentApps.clearResults();
            this.$.recentApps.addResults(recentApps);
        }
        if (searchResults.length > 0) {
            if (this.query != query) {
                // Only reset search results if the query changes.
                this.$.searchResults.clearResults();
                this.query = query;
            }
            if (this.keywords != keywords) {
                this.keywords = keywords;
            }
            this.$.searchResults.addResults(searchResults);
        }
    }
}
customElements.define(LauncherInternalsElement.is, LauncherInternalsElement);
