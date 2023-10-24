// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance = null;
export class OsSettingsSearchBoxBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new OsSettingsSearchBoxBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
}
