// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPrivacySandboxBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'getChildTopicsCurrentlyAssigned',
            'getFledgeState',
            'getFirstLevelTopics',
            'getTopicsState',
            'setFledgeJoiningAllowed',
            'setTopicAllowed',
            'topicsToggleChanged',
        ]);
        this.firstLevelTopicsState_ = { firstLevelTopics: [], blockedTopics: [] };
        this.childTopicsCurrentlyAssigned_ = [];
        this.fledgeState_ = {
            joiningSites: ['test-site-one.com'],
            blockedSites: ['test-site-two.com'],
        };
        this.topicsState_ = {
            topTopics: [{
                    topicId: 1,
                    taxonomyVersion: 1,
                    displayString: 'test-topic-1',
                    description: '',
                }],
            blockedTopics: [{
                    topicId: 2,
                    taxonomyVersion: 1,
                    displayString: 'test-topic-2',
                    description: '',
                }],
        };
    }
    // Setters for test
    setChildTopics(childTopics) {
        this.childTopicsCurrentlyAssigned_ = childTopics;
    }
    setFirstLevelTopicsState(firstLevelTopicsState) {
        this.firstLevelTopicsState_ = firstLevelTopicsState;
    }
    setTestTopicState(topicsState) {
        this.topicsState_ = topicsState;
    }
    setFledgeState(fledgeState) {
        this.fledgeState_ = fledgeState;
    }
    // Test Proxy Functions
    getFledgeState() {
        this.methodCalled('getFledgeState');
        return Promise.resolve(this.fledgeState_);
    }
    setFledgeJoiningAllowed(site, allowed) {
        this.methodCalled('setFledgeJoiningAllowed', [site, allowed]);
    }
    setTopicsState(topicsState) {
        this.topicsState_ = topicsState;
    }
    getTopicsState() {
        this.methodCalled('getTopicsState');
        return Promise.resolve(this.topicsState_);
    }
    setTopicAllowed(topic, allowed) {
        this.methodCalled('setTopicAllowed', [topic, allowed]);
    }
    topicsToggleChanged(newToggleValue) {
        this.methodCalled('topicsToggleChanged', [newToggleValue]);
    }
    getFirstLevelTopics() {
        this.methodCalled('getFirstLevelTopics');
        return Promise.resolve(this.firstLevelTopicsState_);
    }
    getChildTopicsCurrentlyAssigned(topic) {
        this.methodCalled('getChildTopicsCurrentlyAssigned', topic.topicId, topic.taxonomyVersion);
        return Promise.resolve(this.childTopicsCurrentlyAssigned_.slice());
    }
}
