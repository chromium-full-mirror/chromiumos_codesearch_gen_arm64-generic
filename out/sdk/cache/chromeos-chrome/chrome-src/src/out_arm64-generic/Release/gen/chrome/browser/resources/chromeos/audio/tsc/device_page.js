// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
import { AudioBroker } from './audio_broker.js';
import { DeviceTable } from './device_table.js';
import { InputPage } from './input_page.js';
import { OutputPage } from './output_page.js';
import { Page, PageNavigator } from './page.js';
export class DevicePage extends Page {
    constructor() {
        super('devices');
        this.router = AudioBroker.getInstance().callbackRouter;
        this.mojoHandler = AudioBroker.getInstance().handler;
        this.deviceTable = new DeviceTable();
        getRequiredElement('deviceTable').appendChild(this.deviceTable);
        this.setUpAudioDevices();
        this.setUpButtons();
    }
    setUpButtons() {
        getRequiredElement('banner-feedback').addEventListener('click', () => {
            PageNavigator.getInstance().showPage('feedback');
        });
        getRequiredElement('no-device-feedback').addEventListener('click', () => {
            PageNavigator.getInstance().showPage('feedback');
        });
    }
    setUpAudioDevices() {
        this.router.updateDeviceInfo.addListener(this.updateDeviceInfo.bind(this));
        this.router.updateDeviceVolume.addListener(this.updateDeviceVolume.bind(this));
        this.router.updateDeviceMute.addListener(this.updateDeviceMute.bind(this));
        this.mojoHandler.getAudioDeviceInfo();
    }
    static getInstance() {
        if (instance === null) {
            instance = new DevicePage();
        }
        return instance;
    }
    updateDeviceInfo(devices) {
        this.deviceTable.setDevices(devices);
        OutputPage.getInstance().updateActiveOutputDevice();
        InputPage.getInstance().updateActiveInputDevice();
    }
    updateDeviceVolume(nodeId, volume) {
        this.deviceTable.setDeviceVolume(nodeId, volume);
    }
    updateDeviceMute(nodeId, isMuted) {
        this.deviceTable.setDeviceMuteState(nodeId, isMuted);
    }
}
let instance = null;
