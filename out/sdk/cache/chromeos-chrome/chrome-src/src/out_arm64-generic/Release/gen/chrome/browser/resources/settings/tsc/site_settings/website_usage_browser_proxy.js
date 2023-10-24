// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class WebsiteUsageBrowserProxyImpl {
    fetchUsageTotal(host) {
        chrome.send('fetchUsageTotal', [host]);
    }
    clearUsage(origin) {
        chrome.send('clearUnpartitionedUsage', [origin]);
    }
    static getInstance() {
        return instance || (instance = new WebsiteUsageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
