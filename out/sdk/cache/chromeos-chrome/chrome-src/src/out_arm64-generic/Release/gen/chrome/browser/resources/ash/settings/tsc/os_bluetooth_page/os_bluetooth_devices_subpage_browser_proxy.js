// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
let instance = null;
export class OsBluetoothDevicesSubpageBrowserProxyImpl {
    static getInstance() {
        return instance ||
            (instance = new OsBluetoothDevicesSubpageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    requestFastPairDeviceSupport() {
        chrome.send('requestFastPairDeviceSupportStatus');
    }
    requestFastPairSavedDevices() {
        chrome.send('loadSavedDevicePage');
    }
    deleteFastPairSavedDevice(accountKey) {
        chrome.send('removeSavedDevice', [accountKey]);
    }
    showBluetoothRevampHatsSurvey() {
        if (loadTimeData.getBoolean('bluetoothRevampHatsSurveyFlag')) {
            chrome.send('showBluetoothRevampHatsSurvey');
        }
    }
}
