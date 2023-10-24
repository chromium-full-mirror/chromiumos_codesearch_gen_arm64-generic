// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists, assertInstanceof } from '../assert.js';
import { DeviceOperator } from '../mojo/device_operator.js';
import { Camera3DeviceInfo } from './camera3_device_info.js';
/**
 * All supported constant fps options of video recording.
 */
export const SUPPORTED_CONSTANT_FPS = [30, 60];
export class CameraInfo {
    constructor(rawDevicesInfo) {
        this.devicesInfo = rawDevicesInfo.map((d) => d.v1Info);
        this.camera3DevicesInfo = (DeviceOperator.isSupported()) ?
            rawDevicesInfo.map((d) => assertExists(d.v3Info)) :
            null;
        this.idToDeviceInfo = new Map(this.devicesInfo.map((d) => [d.deviceId, d]));
        this.idToCamera3DeviceInfo = this.camera3DevicesInfo === null ?
            null :
            new Map(this.camera3DevicesInfo.map((d) => [d.deviceId, d]));
    }
    getDeviceInfo(deviceId) {
        const info = this.idToDeviceInfo.get(deviceId);
        assert(info !== undefined);
        return info;
    }
    getCamera3DeviceInfo(deviceId) {
        if (this.idToCamera3DeviceInfo === null) {
            return null;
        }
        const info = this.idToCamera3DeviceInfo.get(deviceId);
        return assertInstanceof(info, Camera3DeviceInfo);
    }
}
