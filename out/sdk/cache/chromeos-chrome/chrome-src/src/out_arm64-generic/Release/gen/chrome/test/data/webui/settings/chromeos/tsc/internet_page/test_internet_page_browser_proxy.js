// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestInternetPageBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'showCarrierAccountDetail',
            'showPortalSignin',
            'showCellularSetupUi',
            'configureThirdPartyVpn',
            'addThirdPartyVpn',
            'requestGmsCoreNotificationsDisabledDeviceNames',
            'setGmsCoreNotificationsDisabledDeviceNamesCallback',
        ]);
    }
    showCarrierAccountDetail(guid) {
        this.methodCalled('showCarrierAccountDetail', guid);
    }
    showPortalSignin(guid) {
        this.methodCalled('showPortalSignin', guid);
    }
    showCellularSetupUi(guid) {
        this.methodCalled('showCellularSetupUi', guid);
    }
    configureThirdPartyVpn(guid) {
        this.methodCalled('configureThirdPartyVpn', guid);
    }
    addThirdPartyVpn(appId) {
        this.methodCalled('addThirdPartyVpn', appId);
    }
    requestGmsCoreNotificationsDisabledDeviceNames() {
        this.methodCalled('requestGmsCoreNotificationsDisabledDeviceNames');
    }
    setGmsCoreNotificationsDisabledDeviceNamesCallback(callback) {
        this.methodCalled('setGmsCoreNotificationsDisabledDeviceNamesCallback', callback);
    }
}
