// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestResetBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'performResetProfileSettings',
            'onHideResetProfileDialog',
            'onHideResetProfileBanner',
            'onShowResetProfileDialog',
            'showReportedSettings',
            'getTriggeredResetToolName',
        ]);
    }
    performResetProfileSettings(_sendSettings, requestOrigin) {
        this.methodCalled('performResetProfileSettings', requestOrigin);
        return Promise.resolve();
    }
    onHideResetProfileDialog() {
        this.methodCalled('onHideResetProfileDialog');
    }
    onHideResetProfileBanner() {
        this.methodCalled('onHideResetProfileBanner');
    }
    onShowResetProfileDialog() {
        this.methodCalled('onShowResetProfileDialog');
    }
    showReportedSettings() {
        this.methodCalled('showReportedSettings');
    }
    getTriggeredResetToolName() {
        this.methodCalled('getTriggeredResetToolName');
        return Promise.resolve('WonderfulAV');
    }
}
