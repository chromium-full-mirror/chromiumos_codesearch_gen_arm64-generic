// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class GoogleAssistantBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new GoogleAssistantBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    showGoogleAssistantSettings() {
        chrome.send('showGoogleAssistantSettings');
    }
    retrainAssistantVoiceModel() {
        chrome.send('retrainAssistantVoiceModel');
    }
    syncVoiceModelStatus() {
        chrome.send('syncVoiceModelStatus');
    }
}
