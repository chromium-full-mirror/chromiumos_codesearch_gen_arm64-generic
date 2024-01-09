// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter } from 'chrome://tab-strip.top-chrome/tab_strip.mojom-webui.js';
import { TabNetworkState } from 'chrome://tab-strip.top-chrome/tab_strip.mojom-webui.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export function createTab(override) {
    return Object.assign({
        active: false,
        alertStates: [],
        blocked: false,
        crashed: false,
        id: -1,
        index: -1,
        isDefaultFavicon: false,
        networkState: TabNetworkState.kNone,
        pinned: false,
        shouldHideThrobber: false,
        showIcon: false,
        title: '',
        url: { url: 'about:blank' },
    }, override || {});
}
export class TestTabsApiProxy extends TestBrowserProxy {
    callbackRouter;
    callbackRouterRemote;
    groupVisualData_ = {};
    tabs_ = [];
    thumbnailRequestCounts_;
    layout_ = {};
    visible_ = false;
    constructor() {
        super([
            'activateTab',
            'closeTab',
            'getGroupVisualData',
            'getTabs',
            'groupTab',
            'moveGroup',
            'moveTab',
            'setThumbnailTracked',
            'ungroupTab',
            'closeContainer',
            'getLayout',
            'isVisible',
            'observeThemeChanges',
            'showBackgroundContextMenu',
            'showEditDialogForGroup',
            'showTabContextMenu',
            'reportTabActivationDuration',
            'reportTabDataReceivedDuration',
            'reportTabCreationDuration',
        ]);
        this.callbackRouter = new PageCallbackRouter();
        this.callbackRouterRemote =
            this.callbackRouter.$.bindNewPipeAndPassRemote();
        this.thumbnailRequestCounts_ = new Map();
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    getCallbackRouterRemote() {
        return this.callbackRouterRemote;
    }
    activateTab(tabId) {
        this.methodCalled('activateTab', tabId);
        return Promise.resolve({
            active: true,
            autoDiscardable: false,
            discareded: false,
            groupId: 0,
            highlighted: false,
            id: tabId,
            incognito: false,
            index: 0,
            pinned: false,
            selected: false,
            windowId: 0,
        });
    }
    closeTab(tabId, closeTabAction) {
        this.methodCalled('closeTab', [tabId, closeTabAction]);
    }
    getGroupVisualData() {
        this.methodCalled('getGroupVisualData');
        return Promise.resolve({ data: this.groupVisualData_ });
    }
    getTabs() {
        this.methodCalled('getTabs');
        return Promise.resolve({ tabs: this.tabs_.slice() });
    }
    getThumbnailRequestCount(tabId) {
        return this.thumbnailRequestCounts_.get(tabId) || 0;
    }
    groupTab(tabId, groupId) {
        this.methodCalled('groupTab', [tabId, groupId]);
    }
    moveGroup(groupId, newIndex) {
        this.methodCalled('moveGroup', [groupId, newIndex]);
    }
    moveTab(tabId, newIndex) {
        this.methodCalled('moveTab', [tabId, newIndex]);
    }
    resetThumbnailRequestCounts() {
        this.thumbnailRequestCounts_.clear();
    }
    setGroupVisualData(data) {
        this.groupVisualData_ = data;
    }
    setTabs(tabs) {
        this.tabs_ = tabs;
    }
    setThumbnailTracked(tabId, thumbnailTracked) {
        if (thumbnailTracked) {
            this.thumbnailRequestCounts_.set(tabId, this.getThumbnailRequestCount(tabId) + 1);
        }
        this.methodCalled('setThumbnailTracked', [tabId, thumbnailTracked]);
    }
    ungroupTab(tabId) {
        this.methodCalled('ungroupTab', [tabId]);
    }
    getLayout() {
        this.methodCalled('getLayout');
        return Promise.resolve({ layout: this.layout_ });
    }
    isVisible() {
        this.methodCalled('isVisible');
        return this.visible_;
    }
    setLayout(layout) {
        this.layout_ = layout;
    }
    setVisible(visible) {
        this.visible_ = visible;
    }
    observeThemeChanges() {
        this.methodCalled('observeThemeChanges');
    }
    closeContainer() {
        this.methodCalled('closeContainer');
    }
    showBackgroundContextMenu(locationX, locationY) {
        this.methodCalled('showBackgroundContextMenu', [locationX, locationY]);
    }
    showEditDialogForGroup(groupId, locationX, locationY, width, height) {
        this.methodCalled('showEditDialogForGroup', [groupId, locationX, locationY, width, height]);
    }
    showTabContextMenu(tabId, locationX, locationY) {
        this.methodCalled('showTabContextMenu', [tabId, locationX, locationY]);
    }
    reportTabActivationDuration(durationMs) {
        this.methodCalled('reportTabActivationDuration', [durationMs]);
    }
    reportTabDataReceivedDuration(tabCount, durationMs) {
        this.methodCalled('reportTabDataReceivedDuration', [tabCount, durationMs]);
    }
    reportTabCreationDuration(tabCount, durationMs) {
        this.methodCalled('reportTabCreationDuration', [tabCount, durationMs]);
    }
}
