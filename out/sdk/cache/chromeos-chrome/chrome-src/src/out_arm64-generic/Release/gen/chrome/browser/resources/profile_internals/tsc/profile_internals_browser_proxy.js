// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class ProfileInternalsBrowserProxyImpl {
    getProfilesList() {
        chrome.send('getProfilesList');
    }
    static getInstance() {
        return instance || (instance = new ProfileInternalsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
