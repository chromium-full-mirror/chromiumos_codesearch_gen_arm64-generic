// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake implementation of MediaDevices for testing.
 */
export class FakeMediaDevices {
    devices_ = [];
    deviceChangeListener_ = null;
    addEventListener(_type, listener) {
        this.deviceChangeListener_ = listener;
    }
    enumerateDevices() {
        return Promise.resolve(this.devices_);
    }
    /**
     * Adds a media device to the list of media devices.
     */
    addDevice(kind, label) {
        const device = {
            deviceId: '',
            kind: kind,
            label: label,
            groupId: '',
        };
        // https://w3c.github.io/mediacapture-main/#dom-mediadeviceinfo
        device.__proto__ = MediaDeviceInfo.prototype;
        this.devices_.push(device);
        if (this.deviceChangeListener_) {
            this.deviceChangeListener_(new Event('addDevice'));
        }
    }
    /**
     * Removes the most recently added media device from the list of media
     * devices.
     */
    popDevice() {
        this.devices_.pop();
        if (this.deviceChangeListener_) {
            this.deviceChangeListener_(new Event('popDevice'));
        }
    }
    getDisplayMedia() {
        return Promise.resolve(new MediaStream());
    }
    getUserMedia() {
        return Promise.resolve(new MediaStream());
    }
    dispatchEvent(_event) {
        return false;
    }
    getSupportedConstraints() {
        return {};
    }
    ondevicechange() { }
    removeEventListener() { }
}
