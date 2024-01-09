// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { SmbMountResult } from 'chrome://os-settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSmbBrowserProxy extends TestBrowserProxy {
    smbMountResult = SmbMountResult.SUCCESS;
    anySmbMounted = false;
    constructor() {
        super([
            'hasAnySmbMountedBefore',
        ]);
    }
    smbMount(smbUrl, smbName, username, password, authMethod, shouldOpenFileManagerAfterMount, saveCredentials) {
        this.methodCalled('smbMount', smbUrl, smbName, username, password, authMethod, shouldOpenFileManagerAfterMount, saveCredentials);
        return Promise.resolve(this.smbMountResult);
    }
    startDiscovery() {
        this.methodCalled('startDiscovery');
    }
    updateCredentials(mountId, username, password) {
        this.methodCalled('updateCredentials', mountId, username, password);
    }
    hasAnySmbMountedBefore() {
        this.methodCalled('hasAnySmbMountedBefore');
        return Promise.resolve(this.anySmbMounted);
    }
}
