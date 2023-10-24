// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// 
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class DownloadsBrowserProxyImpl {
    initializeDownloads() {
        chrome.send('initializeDownloads');
    }
    selectDownloadLocation() {
        chrome.send('selectDownloadLocation');
    }
    resetAutoOpenFileTypes() {
        chrome.send('resetAutoOpenFileTypes');
    }
    // 
    getDownloadLocationText(path) {
        return sendWithPromise('getDownloadLocationText', path);
    }
    // 
    static getInstance() {
        return instance || (instance = new DownloadsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
