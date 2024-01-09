// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { createHistoryInfo } from './test_util.js';
export class TestBrowserService extends TestBrowserProxy {
    histogramMap = {};
    actionMap = {};
    delayedRemove_ = null;
    delayedQueryResult_ = null;
    ignoreNextQuery_ = false;
    foreignSessions_ = [];
    queryResult_;
    constructor() {
        super([
            'deleteForeignSession',
            'getForeignSessions',
            'historyLoaded',
            'navigateToUrl',
            'openForeignSessionTab',
            'otherDevicesInitialized',
            'queryHistory',
            'queryHistoryContinuation',
            'recordHistogram',
            'recordLongTime',
            'removeVisits',
            'setLastSelectedTab',
            'startTurnOnSyncFlow',
        ]);
        this.queryResult_ = { info: createHistoryInfo(), value: [] };
    }
    // Will delay resolution of the queryHistory() promise until
    // finishQueryHistory is called.
    delayQueryResult() {
        this.delayedQueryResult_ = new PromiseResolver();
    }
    // Will delay resolution of the removeVisits() promise until
    // finishRemoveVisits is called.
    delayDelete() {
        this.delayedRemove_ = new PromiseResolver();
    }
    // Prevents a call to methodCalled for the next call to queryHistory.
    ignoreNextQuery() {
        this.ignoreNextQuery_ = true;
    }
    deleteForeignSession(sessionTag) {
        this.methodCalled('deleteForeignSession', sessionTag);
    }
    getForeignSessions() {
        this.methodCalled('getForeignSessions');
        return Promise.resolve(this.foreignSessions_);
    }
    setForeignSessions(sessions) {
        this.foreignSessions_ = sessions;
    }
    removeVisits(removalList) {
        this.methodCalled('removeVisits', removalList);
        if (this.delayedRemove_) {
            return this.delayedRemove_.promise;
        }
        return Promise.resolve();
    }
    setLastSelectedTab(lastSelectedTab) {
        this.methodCalled('setLastSelectedTab', lastSelectedTab);
    }
    // Resolves the removeVisits promise. delayRemove() must be called first.
    finishRemoveVisits() {
        this.delayedRemove_.resolve();
        this.delayedRemove_ = null;
    }
    // Resolves the queryHistory promise. delayQueryHistory() must be called
    // first.
    finishQueryHistory() {
        this.delayedQueryResult_.resolve(this.queryResult_);
        this.delayedQueryResult_ = null;
    }
    historyLoaded() {
        this.methodCalled('historyLoaded');
    }
    navigateToUrl(url, _target, _e) {
        this.methodCalled('navigateToUrl', url);
    }
    openClearBrowsingData() { }
    openForeignSessionAllTabs() { }
    openForeignSessionTab(sessionTag, tabId, e) {
        this.methodCalled('openForeignSessionTab', {
            sessionTag: sessionTag,
            tabId: tabId,
            e: e,
        });
    }
    otherDevicesInitialized() {
        this.methodCalled('otherDevicesInitialized');
    }
    setQueryResult(queryResult) {
        this.queryResult_ = queryResult;
    }
    queryHistory(searchTerm) {
        if (!this.ignoreNextQuery_) {
            this.methodCalled('queryHistory', searchTerm);
        }
        else {
            this.ignoreNextQuery_ = false;
        }
        if (this.delayedQueryResult_) {
            return this.delayedQueryResult_.promise;
        }
        return Promise.resolve(this.queryResult_);
    }
    queryHistoryContinuation() {
        this.methodCalled('queryHistoryContinuation');
        return Promise.resolve(this.queryResult_);
    }
    recordAction(action) {
        if (!(action in this.actionMap)) {
            this.actionMap[action] = 0;
        }
        this.actionMap[action]++;
    }
    recordHistogram(histogram, value, max) {
        assertTrue(value <= max);
        if (!(histogram in this.histogramMap)) {
            this.histogramMap[histogram] = {};
        }
        if (!(value in this.histogramMap[histogram])) {
            this.histogramMap[histogram][value] = 0;
        }
        this.histogramMap[histogram][value]++;
        this.methodCalled('recordHistogram');
    }
    recordTime() { }
    recordLongTime(histogram, value) {
        this.methodCalled('recordLongTime', histogram, value);
    }
    removeBookmark() { }
    startTurnOnSyncFlow() { }
}
