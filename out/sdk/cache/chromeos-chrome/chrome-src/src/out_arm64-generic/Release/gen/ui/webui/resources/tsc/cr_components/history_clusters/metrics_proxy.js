// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserProxyImpl } from './browser_proxy.js';
import { Annotation } from './history_cluster_types.mojom-webui.js';
import { VisitType } from './history_clusters.mojom-webui.js';
export class MetricsProxyImpl {
    recordClusterAction(action, index) {
        BrowserProxyImpl.getInstance().handler.recordClusterAction(action, index);
    }
    recordRelatedSearchAction(action, index) {
        BrowserProxyImpl.getInstance().handler.recordRelatedSearchAction(action, index);
    }
    recordToggledVisibility(visible) {
        BrowserProxyImpl.getInstance().handler.recordToggledVisibility(visible);
    }
    recordVisitAction(action, index, type) {
        BrowserProxyImpl.getInstance().handler.recordVisitAction(action, index, type);
    }
    static getInstance() {
        return instance || (instance = new MetricsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    /**
     * Returns the VisitType based on whether this is a visit to the default
     * search provider's results page.
     */
    static getVisitType(visit) {
        return visit.annotations.includes(Annotation.kSearchResultsPage) ?
            VisitType.kSRP :
            VisitType.kNonSRP;
    }
}
let instance = null;
