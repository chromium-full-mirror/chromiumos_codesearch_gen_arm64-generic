// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPerformanceMetricsProxy extends TestBrowserProxy {
    constructor() {
        super([
            'recordBatterySaverModeChanged',
            'recordMemorySaverModeChanged',
            'recordExceptionListAction',
        ]);
    }
    recordBatterySaverModeChanged(state) {
        this.methodCalled('recordBatterySaverModeChanged', state);
    }
    recordMemorySaverModeChanged(state) {
        this.methodCalled('recordMemorySaverModeChanged', state);
    }
    recordExceptionListAction(action) {
        this.methodCalled('recordExceptionListAction', action);
    }
}
