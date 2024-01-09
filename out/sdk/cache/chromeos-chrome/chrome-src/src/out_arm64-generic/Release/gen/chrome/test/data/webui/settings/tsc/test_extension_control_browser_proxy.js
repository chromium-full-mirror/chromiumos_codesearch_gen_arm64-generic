// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestExtensionControlBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'disableExtension',
            'manageExtension',
        ]);
    }
    disableExtension(extensionId) {
        this.methodCalled('disableExtension', extensionId);
    }
    manageExtension(extensionId) {
        this.methodCalled('manageExtension', extensionId);
    }
}
