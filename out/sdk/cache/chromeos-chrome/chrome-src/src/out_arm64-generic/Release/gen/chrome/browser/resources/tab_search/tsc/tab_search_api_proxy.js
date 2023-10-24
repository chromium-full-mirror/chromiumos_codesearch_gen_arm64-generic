// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './tab_search.mojom-webui.js';
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var RecentlyClosedItemOpenAction;
(function (RecentlyClosedItemOpenAction) {
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITHOUT_SEARCH"] = 0] = "WITHOUT_SEARCH";
    RecentlyClosedItemOpenAction[RecentlyClosedItemOpenAction["WITH_SEARCH"] = 1] = "WITH_SEARCH";
})(RecentlyClosedItemOpenAction || (RecentlyClosedItemOpenAction = {}));
export class TabSearchApiProxyImpl {
    constructor() {
        this.callbackRouter = new PageCallbackRouter();
        this.handler = new PageHandlerRemote();
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    closeTab(tabId) {
        this.handler.closeTab(tabId);
    }
    acceptTabOrganization(sessionId, organizationId, name, tabs) {
        this.handler.acceptTabOrganization(sessionId, organizationId, name, tabs);
    }
    rejectTabOrganization(sessionId, organizationId) {
        this.handler.rejectTabOrganization(sessionId, organizationId);
    }
    getProfileData() {
        return this.handler.getProfileData();
    }
    getTabOrganizationSession() {
        return this.handler.getTabOrganizationSession();
    }
    openRecentlyClosedEntry(id, withSearch, isTab, index) {
        chrome.metricsPrivate.recordEnumerationValue(isTab ? 'Tabs.TabSearch.WebUI.RecentlyClosedTabOpenAction' :
            'Tabs.TabSearch.WebUI.RecentlyClosedGroupOpenAction', withSearch ? RecentlyClosedItemOpenAction.WITH_SEARCH :
            RecentlyClosedItemOpenAction.WITHOUT_SEARCH, Object.keys(RecentlyClosedItemOpenAction).length);
        chrome.metricsPrivate.recordSmallCount(withSearch ?
            'Tabs.TabSearch.WebUI.IndexOfOpenRecentlyClosedEntryInFilteredList' :
            'Tabs.TabSearch.WebUI.IndexOfOpenRecentlyClosedEntryInUnfilteredList', index);
        this.handler.openRecentlyClosedEntry(id);
    }
    requestTabOrganization() {
        this.handler.requestTabOrganization();
    }
    switchToTab(info) {
        this.handler.switchToTab(info);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.handler.saveRecentlyClosedExpandedPref(expanded);
    }
    setTabIndex(index) {
        this.handler.setTabIndex(index);
    }
    showUi() {
        this.handler.showUI();
    }
    static getInstance() {
        return instance || (instance = new TabSearchApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
