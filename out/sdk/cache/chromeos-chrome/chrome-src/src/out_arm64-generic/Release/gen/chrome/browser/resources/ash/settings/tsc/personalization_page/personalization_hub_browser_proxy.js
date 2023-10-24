// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class PersonalizationHubBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new PersonalizationHubBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    openPersonalizationHub() {
        chrome.send('openPersonalizationHub');
    }
}
