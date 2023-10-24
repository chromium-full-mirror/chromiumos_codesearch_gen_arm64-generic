// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class ChromeVoxSubpageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new ChromeVoxSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAllTtsVoiceData() {
        chrome.send('getAllTtsVoiceData');
    }
    refreshTtsVoices() {
        chrome.send('refreshTtsVoices');
    }
    getDisplayNameForLocale(locale) {
        return sendWithPromise('getDisplayNameForLocale', locale);
    }
    getApplicationLocale() {
        return sendWithPromise('getApplicationLocale');
    }
    addDeviceAddedListener(listener) {
        chrome.bluetooth.onDeviceAdded.addListener(listener);
    }
    removeDeviceAddedListener(listener) {
        chrome.bluetooth.onDeviceAdded.removeListener(listener);
    }
    addDeviceChangedListener(listener) {
        chrome.bluetooth.onDeviceChanged.addListener(listener);
    }
    removeDeviceChangedListener(listener) {
        chrome.bluetooth.onDeviceChanged.removeListener(listener);
    }
    addDeviceRemovedListener(listener) {
        chrome.bluetooth.onDeviceRemoved.addListener(listener);
    }
    removeDeviceRemovedListener(listener) {
        chrome.bluetooth.onDeviceRemoved.removeListener(listener);
    }
    addPairingListener(listener) {
        chrome.bluetoothPrivate.onPairing.addListener(listener);
    }
    removePairingListener(listener) {
        chrome.bluetoothPrivate.onPairing.removeListener(listener);
    }
    startDiscovery() {
        chrome.bluetooth.startDiscovery();
    }
    stopDiscovery() {
        chrome.bluetooth.startDiscovery();
    }
    updateBluetoothBrailleDisplayAddress(displayAddress) {
        chrome.send('updateBluetoothBrailleDisplayAddress', [displayAddress]);
    }
}
