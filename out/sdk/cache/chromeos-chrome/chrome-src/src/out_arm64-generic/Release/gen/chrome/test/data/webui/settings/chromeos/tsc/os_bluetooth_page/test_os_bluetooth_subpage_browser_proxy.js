// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://os-settings/os_settings.js';
import { FastPairSavedDevicesOptInStatus } from 'chrome://os-settings/os_settings.js';
import { webUIListenerCallback } from 'chrome://resources/ash/common/cr.m.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestOsBluetoothDevicesSubpageBrowserProxy extends TestBrowserProxy {
    savedDevices = [];
    optInStatus = FastPairSavedDevicesOptInStatus.STATUS_OPTED_IN;
    showBluetoothRevampHatsSurveyCount_ = 0;
    constructor() {
        super([
            'requestFastPairSavedDevices',
            'deleteFastPairSavedDevice',
            'requestFastPairDeviceSupport',
        ]);
    }
    reset() {
        super.reset();
        // reset instance variables
        this.savedDevices = [];
        this.optInStatus = FastPairSavedDevicesOptInStatus.STATUS_OPTED_IN;
    }
    setSavedDevices(savedDevices) {
        this.savedDevices = savedDevices;
    }
    setOptInStatus(status) {
        this.optInStatus = status;
    }
    requestFastPairDeviceSupport() { }
    requestFastPairSavedDevices() {
        this.methodCalled('requestFastPairSavedDevices');
        webUIListenerCallback('fast-pair-saved-devices-list', this.savedDevices);
        webUIListenerCallback('fast-pair-saved-devices-opt-in-status', this.optInStatus);
    }
    deleteFastPairSavedDevice(accountKey) {
        // Remove the device from the proxy's device list if it exists,
        this.savedDevices =
            this.savedDevices.filter(device => device.accountKey !== accountKey);
    }
    showBluetoothRevampHatsSurvey() {
        this.showBluetoothRevampHatsSurveyCount_++;
    }
    /**
     * Returns the number of times showBluetoothRevampHatsSurvey()
     * was called.
     */
    getShowBluetoothRevampHatsSurveyCount() {
        return this.showBluetoothRevampHatsSurveyCount_;
    }
}
