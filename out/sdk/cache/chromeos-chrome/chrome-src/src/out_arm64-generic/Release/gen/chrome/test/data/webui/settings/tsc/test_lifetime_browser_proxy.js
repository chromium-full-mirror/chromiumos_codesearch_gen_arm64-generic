// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * A test version of LifetimeBrowserProxy.
 */
export class TestLifetimeBrowserProxy extends TestBrowserProxy {
    // 
    constructor() {
        super([
            'restart', 'relaunch',
            // 
            // 
            'signOutAndRestart', 'factoryReset',
            // 
        ]);
    }
    restart() {
        this.methodCalled('restart');
    }
    relaunch() {
        this.methodCalled('relaunch');
    }
    // 
    // 
    signOutAndRestart() {
        this.methodCalled('signOutAndRestart');
    }
    factoryReset(requestTpmFirmwareUpdate) {
        this.methodCalled('signOutAndRestart', requestTpmFirmwareUpdate);
    }
}
