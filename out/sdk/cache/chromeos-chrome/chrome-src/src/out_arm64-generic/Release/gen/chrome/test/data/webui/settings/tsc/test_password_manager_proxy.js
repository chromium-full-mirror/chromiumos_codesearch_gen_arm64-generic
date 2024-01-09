// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
/**
 * Test implementation
 */
export class TestPasswordManagerProxy extends TestBrowserProxy {
    constructor() {
        super([
            'recordPasswordCheckReferrer',
            'showPasswordManager',
        ]);
    }
    recordPasswordsPageAccessInSettings() { }
    recordPasswordCheckReferrer(referrer) {
        this.methodCalled('recordPasswordCheckReferrer', referrer);
    }
    showPasswordManager(page) {
        this.methodCalled('showPasswordManager', page);
    }
}
