// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from './test_browser_proxy.js';
export class TestOpenWindowProxy extends TestBrowserProxy {
    constructor() {
        super(['openUrl']);
    }
    openUrl(url) {
        this.methodCalled('openUrl', url);
    }
}
