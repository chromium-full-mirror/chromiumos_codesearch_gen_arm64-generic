// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class TtsVoiceSubpageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new TtsVoiceSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAllTtsVoiceData() {
        chrome.send('getAllTtsVoiceData');
    }
    getTtsExtensions() {
        chrome.send('getTtsExtensions');
    }
    previewTtsVoice(previewText, previewVoice) {
        chrome.send('previewTtsVoice', [previewText, previewVoice]);
    }
    wakeTtsEngine() {
        chrome.send('wakeTtsEngine');
    }
    refreshTtsVoices() {
        chrome.send('refreshTtsVoices');
    }
}
