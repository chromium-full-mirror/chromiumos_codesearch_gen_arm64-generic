// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestOsA11yPageBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'confirmA11yImageLabels',
            'getScreenReaderState',
        ]);
    }
    confirmA11yImageLabels() {
        this.methodCalled('confirmA11yImageLabels');
    }
    getScreenReaderState() {
        this.methodCalled('getScreenReaderState');
        return Promise.resolve(false);
    }
}
