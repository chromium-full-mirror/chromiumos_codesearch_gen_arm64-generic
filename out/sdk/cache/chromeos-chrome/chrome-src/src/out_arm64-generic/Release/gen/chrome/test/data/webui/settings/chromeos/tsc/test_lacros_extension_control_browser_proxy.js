// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestLacrosExtensionControlBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'manageLacrosExtension',
        ]);
    }
    manageLacrosExtension(extensionId) {
        this.methodCalled('manageLacrosExtension', extensionId);
    }
}
