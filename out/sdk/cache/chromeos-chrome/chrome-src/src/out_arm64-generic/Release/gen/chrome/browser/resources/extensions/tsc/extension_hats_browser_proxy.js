// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ExtensionsHatsBrowserProxyImpl {
    triggerSurvey() {
        chrome.send('extensionsSafetyHubTriggerSurvey');
    }
    extensionKeptAction() {
        chrome.send('extensionsSafetyHubExtensionKept');
    }
    extensionRemovedAction() {
        chrome.send('extensionsSafetyHubExtensionRemoved');
    }
    nonTriggerExtensionRemovedAction() {
        chrome.send('extensionsSafetyHubNonTriggerExtensionRemoved');
    }
    removeAllAction(numberOfExtensionsRemoved) {
        chrome.send('extensionsSafetyHubRemoveAll', [numberOfExtensionsRemoved]);
    }
    static getInstance() {
        return instance || (instance = new ExtensionsHatsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
