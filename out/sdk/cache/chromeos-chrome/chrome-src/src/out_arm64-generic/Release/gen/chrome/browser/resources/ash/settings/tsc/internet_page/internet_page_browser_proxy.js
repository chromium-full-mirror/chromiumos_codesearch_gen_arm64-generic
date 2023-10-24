// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview A helper object used for Internet page. */
import { addWebUiListener } from 'chrome://resources/js/cr.js';
let instance = null;
export class InternetPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new InternetPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
    showCarrierAccountDetail(guid) {
        chrome.send('showCarrierAccountDetail', [guid]);
    }
    showCellularSetupUi(guid) {
        chrome.send('showCellularSetupUi', [guid]);
    }
    showPortalSignin(guid) {
        chrome.send('showPortalSignin', [guid]);
    }
    configureThirdPartyVpn(guid) {
        chrome.send('configureThirdPartyVpn', [guid]);
    }
    addThirdPartyVpn(appId) {
        chrome.send('addThirdPartyVpn', [appId]);
    }
    requestGmsCoreNotificationsDisabledDeviceNames() {
        chrome.send('requestGmsCoreNotificationsDisabledDeviceNames');
    }
    setGmsCoreNotificationsDisabledDeviceNamesCallback(callback) {
        addWebUiListener('sendGmsCoreNotificationsDisabledDeviceNames', callback);
    }
}
