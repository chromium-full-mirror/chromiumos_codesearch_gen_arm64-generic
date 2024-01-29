// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class PrivacySandboxBrowserProxyImpl {
    getFledgeState() {
        return sendWithPromise('getFledgeState');
    }
    setFledgeJoiningAllowed(site, allowed) {
        chrome.send('setFledgeJoiningAllowed', [site, allowed]);
    }
    getTopicsState() {
        return sendWithPromise('getTopicsState');
    }
    setTopicAllowed(topic, allowed) {
        chrome.send('setTopicAllowed', [topic.topicId, topic.taxonomyVersion, allowed]);
    }
    topicsToggleChanged(newToggleValue) {
        chrome.send('topicsToggleChanged', [newToggleValue]);
    }
    getFirstLevelTopics() {
        return sendWithPromise('getFirstLevelTopics');
    }
    getChildTopicsCurrentlyAssigned(topic) {
        return sendWithPromise('getChildTopicsCurrentlyAssigned', topic.topicId, topic.taxonomyVersion);
    }
    static getInstance() {
        return instance || (instance = new PrivacySandboxBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
