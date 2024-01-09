// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://tab-search.top-chrome/tab_search.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestTabSearchApiProxy extends TestBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    profileData_;
    tabOrganizationSession_;
    constructor() {
        super([
            'closeTab',
            'acceptTabOrganization',
            'rejectTabOrganization',
            'getProfileData',
            'getTabOrganizationSession',
            'openRecentlyClosedEntry',
            'requestTabOrganization',
            'removeTabFromOrganization',
            'resetSession',
            'switchToTab',
            'saveRecentlyClosedExpandedPref',
            'setTabIndex',
            'startTabGroupTutorial',
            'triggerFeedback',
            'triggerSync',
            'triggerSignIn',
            'openHelpPage',
            'openSyncSettings',
            'setUserFeedback',
            'showUi',
        ]);
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
    }
    closeTab(tabId) {
        this.methodCalled('closeTab', [tabId]);
    }
    acceptTabOrganization(sessionId, organizationId, name, tabs) {
        this.methodCalled('acceptTabOrganization', [sessionId, organizationId, name, tabs]);
    }
    rejectTabOrganization(sessionId, organizationId) {
        this.methodCalled('rejectTabOrganization', [sessionId, organizationId]);
    }
    getProfileData() {
        this.methodCalled('getProfileData');
        return Promise.resolve({ profileData: this.profileData_ });
    }
    getTabOrganizationSession() {
        this.methodCalled('getTabOrganizationSession');
        return Promise.resolve({ session: this.tabOrganizationSession_ });
    }
    openRecentlyClosedEntry(id, withSearch, isTab, index) {
        this.methodCalled('openRecentlyClosedEntry', [id, withSearch, isTab, index]);
    }
    requestTabOrganization() {
        this.methodCalled('requestTabOrganization');
        return Promise.resolve({ name: '', tabs: [] });
    }
    removeTabFromOrganization(sessionId, organizationId, tab) {
        this.methodCalled('removeTabFromOrganization', sessionId, organizationId, tab);
    }
    resetSession() {
        this.methodCalled('resetSession');
    }
    switchToTab(info) {
        this.methodCalled('switchToTab', [info]);
    }
    saveRecentlyClosedExpandedPref(expanded) {
        this.methodCalled('saveRecentlyClosedExpandedPref', [expanded]);
    }
    setTabIndex(index) {
        this.methodCalled('setTabIndex', [index]);
    }
    startTabGroupTutorial() {
        this.methodCalled('startTabGroupTutorial');
    }
    triggerFeedback(sessionId) {
        this.methodCalled('triggerFeedback', [sessionId]);
    }
    triggerSync() {
        this.methodCalled('triggerSync');
    }
    triggerSignIn() {
        this.methodCalled('triggerSignIn');
    }
    openHelpPage() {
        this.methodCalled('openHelpPage');
    }
    openSyncSettings() {
        this.methodCalled('openSyncSettings');
    }
    setUserFeedback(feedback) {
        this.methodCalled('setUserFeedback', [feedback]);
    }
    showUi() {
        this.methodCalled('showUi');
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    getCallbackRouterRemote() {
        return this.callbackRouterRemote;
    }
    setProfileData(profileData) {
        this.profileData_ = profileData;
    }
    setSession(session) {
        this.tabOrganizationSession_ = session;
    }
}
