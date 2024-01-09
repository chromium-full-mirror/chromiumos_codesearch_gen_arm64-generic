// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { stringToMojoString16 } from 'chrome://resources/js/mojo_type_util.js';
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
        this.handler.acceptTabOrganization(sessionId, organizationId, stringToMojoString16(name), tabs);
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
    resetSession() {
        this.handler.resetSession();
    }
    switchToTab(info) {
        this.handler.switchToTab(info);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    removeTabFromOrganization(sessionId, organizationId, tab) {
        this.handler.removeTabFromOrganization(sessionId, organizationId, tab);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.handler.saveRecentlyClosedExpandedPref(expanded);
    }
    setTabIndex(index) {
        this.handler.setTabIndex(index);
    }
    startTabGroupTutorial() {
        this.handler.startTabGroupTutorial();
    }
    triggerFeedback(sessionId) {
        this.handler.triggerFeedback(sessionId);
    }
    triggerSync() {
        this.handler.triggerSync();
    }
    triggerSignIn() {
        this.handler.triggerSignIn();
    }
    openHelpPage() {
        this.handler.openHelpPage();
    }
    openSyncSettings() {
        this.handler.openSyncSettings();
    }
    setUserFeedback(sessionId, organizationId, feedback) {
        this.handler.setUserFeedback(sessionId, organizationId, feedback);
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
