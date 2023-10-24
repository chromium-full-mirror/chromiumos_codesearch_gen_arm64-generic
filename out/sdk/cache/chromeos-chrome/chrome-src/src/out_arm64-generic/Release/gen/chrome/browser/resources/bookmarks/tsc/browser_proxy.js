// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class BrowserProxyImpl {
    getIncognitoAvailability() {
        return sendWithPromise('getIncognitoAvailability');
    }
    getCanEditBookmarks() {
        return sendWithPromise('getCanEditBookmarks');
    }
    recordInHistogram(histogram, bucket, maxBucket) {
        chrome.send('metricsHandler:recordInHistogram', [histogram, bucket, maxBucket]);
    }
    static getInstance() {
        return instance || (instance = new BrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
