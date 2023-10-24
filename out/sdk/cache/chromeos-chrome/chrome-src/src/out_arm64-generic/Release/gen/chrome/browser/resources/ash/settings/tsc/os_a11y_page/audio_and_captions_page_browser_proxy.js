// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class AudioAndCaptionsPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new AudioAndCaptionsPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    setStartupSoundEnabled(enabled) {
        chrome.send('setStartupSoundEnabled', [enabled]);
    }
    audioAndCaptionsPageReady() {
        chrome.send('manageA11yPageReady');
    }
    getStartupSoundEnabled() {
        chrome.send('getStartupSoundEnabled');
    }
}
