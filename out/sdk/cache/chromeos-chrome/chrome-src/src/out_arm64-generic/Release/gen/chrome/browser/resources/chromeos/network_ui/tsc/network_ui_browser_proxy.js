// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class NetworkUiBrowserProxyImpl {
    addNetwork(type) {
        chrome.send('addNetwork', [type]);
    }
    getShillDeviceProperties(type) {
        return sendWithPromise('getShillDeviceProperties', type);
    }
    getShillEthernetEap() {
        return sendWithPromise('getShillEthernetEAP');
    }
    getShillNetworkProperties(guid) {
        return sendWithPromise('getShillNetworkProperties', guid);
    }
    getFirstWifiNetworkProperties() {
        return sendWithPromise('getFirstWifiNetworkProperties');
    }
    importOnc(content) {
        return sendWithPromise('importONC', content);
    }
    openCellularActivationUi() {
        return sendWithPromise('openCellularActivationUi');
    }
    resetEsimCache() {
        chrome.send('resetESimCache');
    }
    setShillDebugging(debugging) {
        return sendWithPromise('setShillDebugging', debugging);
    }
    showAddNewWifi() {
        chrome.send('showAddNewWifi');
    }
    showNetworkConfig(guid) {
        chrome.send('showNetworkConfig', [guid]);
    }
    showNetworkDetails(guid) {
        chrome.send('showNetworkDetails', [guid]);
    }
    storeLogs(options) {
        return sendWithPromise('storeLogs', options);
    }
    getHostname() {
        return sendWithPromise('getHostname');
    }
    setHostname(hostname) {
        chrome.send('setHostname', [hostname]);
    }
    disableActiveEsimProfile() {
        chrome.send('disableActiveESimProfile');
    }
    resetEuicc() {
        chrome.send('resetEuicc');
    }
    resetApnMigrator() {
        chrome.send('resetApnMigrator');
    }
    getTetheringCapabilities() {
        return sendWithPromise('getTetheringCapabilities');
    }
    getTetheringStatus() {
        return sendWithPromise('getTetheringStatus');
    }
    getTetheringConfig() {
        return sendWithPromise('getTetheringConfig');
    }
    setTetheringConfig(config) {
        return sendWithPromise('setTetheringConfig', config);
    }
    checkTetheringReadiness() {
        return sendWithPromise('checkTetheringReadiness');
    }
    setTetheringEnabled(enabled) {
        return sendWithPromise('setTetheringEnabled', enabled);
    }
    static getInstance() {
        return instance || (instance = new NetworkUiBrowserProxyImpl());
    }
}
let instance = null;
