// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageCallbackRouter, PageHandlerFactory, PageHandlerRemote } from './tab_strip.mojom-webui.js';
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var CloseTabAction;
(function (CloseTabAction) {
    CloseTabAction[CloseTabAction["CLOSE_BUTTON"] = 0] = "CLOSE_BUTTON";
    CloseTabAction[CloseTabAction["SWIPED_TO_CLOSE"] = 1] = "SWIPED_TO_CLOSE";
})(CloseTabAction || (CloseTabAction = {}));
export class TabsApiProxyImpl {
    callbackRouter = new PageCallbackRouter();
    handler = new PageHandlerRemote();
    constructor() {
        const factory = PageHandlerFactory.getRemote();
        factory.createPageHandler(this.callbackRouter.$.bindNewPipeAndPassRemote(), this.handler.$.bindNewPipeAndPassReceiver());
    }
    activateTab(tabId) {
        this.handler.activateTab(tabId);
    }
    getGroupVisualData() {
        return this.handler.getGroupVisualData();
    }
    getTabs() {
        return this.handler.getTabs();
    }
    closeTab(tabId, closeTabAction) {
        this.handler.closeTab(tabId, closeTabAction === CloseTabAction.SWIPED_TO_CLOSE);
        chrome.metricsPrivate.recordEnumerationValue('WebUITabStrip.CloseTabAction', closeTabAction, Object.keys(CloseTabAction).length);
    }
    groupTab(tabId, groupId) {
        this.handler.groupTab(tabId, groupId);
    }
    moveGroup(groupId, newIndex) {
        this.handler.moveGroup(groupId, newIndex);
    }
    moveTab(tabId, newIndex) {
        this.handler.moveTab(tabId, newIndex);
    }
    setThumbnailTracked(tabId, thumbnailTracked) {
        this.handler.setThumbnailTracked(tabId, thumbnailTracked);
    }
    ungroupTab(tabId) {
        this.handler.ungroupTab(tabId);
    }
    isVisible() {
        // TODO(crbug.com/1234500): Move this call out of tabs_api_proxy
        // since it's not related to tabs API.
        return document.visibilityState === 'visible';
    }
    getLayout() {
        return this.handler.getLayout();
    }
    showEditDialogForGroup(groupId, locationX, locationY, width, height) {
        this.handler.showEditDialogForGroup(groupId, locationX, locationY, width, height);
    }
    showTabContextMenu(tabId, locationX, locationY) {
        this.handler.showTabContextMenu(tabId, locationX, locationY);
    }
    showBackgroundContextMenu(locationX, locationY) {
        this.handler.showBackgroundContextMenu(locationX, locationY);
    }
    closeContainer() {
        this.handler.closeContainer();
    }
    reportTabActivationDuration(durationMs) {
        this.handler.reportTabActivationDuration(durationMs);
    }
    reportTabDataReceivedDuration(tabCount, durationMs) {
        this.handler.reportTabDataReceivedDuration(tabCount, durationMs);
    }
    reportTabCreationDuration(tabCount, durationMs) {
        this.handler.reportTabCreationDuration(tabCount, durationMs);
    }
    getCallbackRouter() {
        return this.callbackRouter;
    }
    static getInstance() {
        return instance || (instance = new TabsApiProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
