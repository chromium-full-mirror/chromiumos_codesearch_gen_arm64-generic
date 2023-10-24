// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class SelectToSpeakSubpageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new SelectToSpeakSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAllTtsVoiceData() {
        chrome.send('getAllTtsVoiceDataForSts');
    }
    getAppLocale() {
        chrome.send('getAppLocale');
    }
    previewTtsVoice(previewText, previewVoice) {
        chrome.send('previewTtsVoiceForSts', [previewText, previewVoice]);
    }
    refreshTtsVoices() {
        chrome.send('refreshTtsVoices');
    }
}
