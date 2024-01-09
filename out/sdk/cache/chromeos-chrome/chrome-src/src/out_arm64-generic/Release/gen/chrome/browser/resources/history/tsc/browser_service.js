// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { RESULTS_PER_PAGE } from './constants.js';
export class BrowserServiceImpl {
    getForeignSessions() {
        return sendWithPromise('getForeignSessions');
    }
    removeBookmark(url) {
        chrome.send('removeBookmark', [url]);
    }
    /**
     * @return Promise that is resolved when items are deleted
     *     successfully or rejected when deletion fails.
     */
    removeVisits(removalList) {
        return sendWithPromise('removeVisits', removalList);
    }
    setLastSelectedTab(lastSelectedTab) {
        chrome.send('setLastSelectedTab', [lastSelectedTab]);
    }
    openForeignSessionAllTabs(sessionTag) {
        chrome.send('openForeignSessionAllTabs', [sessionTag]);
    }
    openForeignSessionTab(sessionTag, tabId, e) {
        chrome.send('openForeignSessionTab', [
            sessionTag,
            String(tabId),
            e.button || 0,
            e.altKey,
            e.ctrlKey,
            e.metaKey,
            e.shiftKey,
        ]);
    }
    deleteForeignSession(sessionTag) {
        chrome.send('deleteForeignSession', [sessionTag]);
    }
    openClearBrowsingData() {
        chrome.send('clearBrowsingData');
    }
    recordHistogram(histogram, value, max) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, value, max]);
    }
    /**
     * Record an action in UMA.
     * @param action The name of the action to be logged.
     */
    recordAction(action) {
        if (action.indexOf('_') === -1) {
            action = `HistoryPage_${action}`;
        }
        chrome.send('metricsHandler:recordAction', [action]);
    }
    recordTime(histogram, time) {
        chrome.send('metricsHandler:recordTime', [histogram, time]);
    }
    recordLongTime(histogram, time) {
        // It's a bit odd that this is the only one to use chrome.metricsPrivate,
        // but that's because the other code predates chrome.metricsPrivate.
        // In any case, the MetricsHandler doesn't support long time histograms.
        chrome.metricsPrivate.recordLongTime(histogram, time);
    }
    navigateToUrl(url, target, e) {
        chrome.send('navigateToUrl', [url, target, e.button, e.altKey, e.ctrlKey, e.metaKey, e.shiftKey]);
    }
    otherDevicesInitialized() {
        chrome.send('otherDevicesInitialized');
    }
    queryHistoryContinuation() {
        return sendWithPromise('queryHistoryContinuation');
    }
    queryHistory(searchTerm) {
        return sendWithPromise('queryHistory', searchTerm, RESULTS_PER_PAGE);
    }
    startTurnOnSyncFlow() {
        chrome.send('startTurnOnSyncFlow');
    }
    static getInstance() {
        return instance || (instance = new BrowserServiceImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
