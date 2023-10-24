// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class SwitchAccessSubpageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new SwitchAccessSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    refreshAssignmentsFromPrefs() {
        chrome.send('refreshAssignmentsFromPrefs');
    }
    notifySwitchAccessActionAssignmentPaneActive() {
        chrome.send('notifySwitchAccessActionAssignmentPaneActive');
    }
    notifySwitchAccessActionAssignmentPaneInactive() {
        chrome.send('notifySwitchAccessActionAssignmentPaneInactive');
    }
    notifySwitchAccessSetupGuideAttached() {
        // Currently only used in testing, so no event is fired.
    }
}
