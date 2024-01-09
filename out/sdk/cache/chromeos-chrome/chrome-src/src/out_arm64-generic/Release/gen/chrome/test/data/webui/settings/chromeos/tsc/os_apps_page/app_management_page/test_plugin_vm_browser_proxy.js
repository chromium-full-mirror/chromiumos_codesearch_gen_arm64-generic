// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestPluginVmBrowserProxy extends TestBrowserProxy {
    pluginVmRunning;
    constructor() {
        super([
            'isRelaunchNeededForNewPermissions',
            'relaunchPluginVm',
        ]);
        this.pluginVmRunning = false;
    }
    setPluginVmRunning(pluginVmRunning) {
        this.pluginVmRunning = pluginVmRunning;
    }
    isRelaunchNeededForNewPermissions() {
        this.methodCalled('isRelaunchNeededForNewPermissions');
        return Promise.resolve(this.pluginVmRunning);
    }
    relaunchPluginVm() {
        this.methodCalled('relaunchPluginVm');
    }
}
