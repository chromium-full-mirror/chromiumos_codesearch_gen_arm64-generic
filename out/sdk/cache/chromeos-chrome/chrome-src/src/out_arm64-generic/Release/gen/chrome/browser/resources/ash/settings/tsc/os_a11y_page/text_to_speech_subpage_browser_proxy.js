// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class TextToSpeechSubpageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new TextToSpeechSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    pdfOcrSectionReady() {
        chrome.send('pdfOcrSectionReady');
    }
    showChromeVoxTutorial() {
        chrome.send('showChromeVoxTutorial');
    }
}
