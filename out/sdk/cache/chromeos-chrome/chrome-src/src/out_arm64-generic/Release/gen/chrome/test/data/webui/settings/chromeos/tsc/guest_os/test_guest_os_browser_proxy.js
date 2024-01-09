// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestGuestOsBrowserProxy extends TestBrowserProxy {
    sharedUsbDevices = [];
    removeSharedPathResult_ = true;
    constructor() {
        super([
            'getGuestOsSharedPathsDisplayText',
            'notifyGuestOsSharedUsbDevicesPageReady',
            'setGuestOsUsbDeviceShared',
            'removeGuestOsSharedPath',
        ]);
    }
    getGuestOsSharedPathsDisplayText(paths) {
        this.methodCalled('getGuestOsSharedPathsDisplayText');
        return Promise.resolve(paths.map(path => path + '-displayText'));
    }
    notifyGuestOsSharedUsbDevicesPageReady() {
        this.methodCalled('notifyGuestOsSharedUsbDevicesPageReady');
        webUIListenerCallback('guest-os-shared-usb-devices-changed', this.sharedUsbDevices);
    }
    setGuestOsUsbDeviceShared(vmName, containerName, guid, shared) {
        this.methodCalled('setGuestOsUsbDeviceShared', [vmName, containerName, guid, shared]);
    }
    removeGuestOsSharedPath(vmName, path) {
        this.methodCalled('removeGuestOsSharedPath', [vmName, path]);
        return Promise.resolve(this.removeSharedPathResult_);
    }
    stubRemoveSharedPathResult(pathRemoved) {
        this.removeSharedPathResult_ = pathRemoved;
    }
}
