// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class SetTimeBrowserProxyImpl {
    sendPageReady() {
        chrome.send('setTimePageReady');
    }
    setTimeInSeconds(timeInSeconds) {
        chrome.send('setTimeInSeconds', [timeInSeconds]);
    }
    setTimezone(timezone) {
        chrome.send('setTimezone', [timezone]);
    }
    dialogClose() {
        chrome.send('dialogClose');
    }
    doneClicked(timeInSeconds) {
        chrome.send('doneClicked', [timeInSeconds]);
    }
    static getInstance() {
        return instance || (instance = new SetTimeBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
