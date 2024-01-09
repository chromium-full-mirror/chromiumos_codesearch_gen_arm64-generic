// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestOsSyncBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'didNavigateToOsSyncPage',
            'didNavigateAwayFromOsSyncPage',
            'setOsSyncDatatypes',
            'sendOsSyncPrefsChanged',
        ]);
    }
    didNavigateToOsSyncPage() {
        this.methodCalled('didNavigateToOsSyncPage');
    }
    didNavigateAwayFromOsSyncPage() {
        this.methodCalled('didNavigateAwayFromSyncPage');
    }
    setOsSyncDatatypes(osSyncPrefs) {
        this.methodCalled('setOsSyncDatatypes', osSyncPrefs);
    }
    sendOsSyncPrefsChanged() {
        this.methodCalled('sendOsSyncPrefsChanged');
    }
}
