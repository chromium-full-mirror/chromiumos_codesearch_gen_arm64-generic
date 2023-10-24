// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class ParentalControlsBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new ParentalControlsBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    showAddSupervisionDialog() {
        chrome.send('showAddSupervisionDialog');
    }
    launchFamilyLinkSettings() {
        chrome.send('launchFamilyLinkSettings');
    }
}
