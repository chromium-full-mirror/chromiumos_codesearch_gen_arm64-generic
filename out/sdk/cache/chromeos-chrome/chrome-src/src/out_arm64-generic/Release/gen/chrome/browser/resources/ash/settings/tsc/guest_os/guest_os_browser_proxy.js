// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export const ARC_VM_TYPE = 'arcvm';
export const BRUSCHETTA_TYPE = 'bruschetta';
export const CROSTINI_TYPE = 'crostini';
export const PLUGIN_VM_TYPE = 'pluginVm';
export const TERMINA_VM_TYPE = 'termina';
export function getVMNameForGuestOsType(guestOs) {
    return {
        [CROSTINI_TYPE]: TERMINA_VM_TYPE,
        [PLUGIN_VM_TYPE]: 'PvmDefault',
        [ARC_VM_TYPE]: ARC_VM_TYPE,
        [BRUSCHETTA_TYPE]: 'bru',
    }[guestOs];
}
export const VM_DEVICE_MICROPHONE = 'microphone';
let instance = null;
export class GuestOsBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new GuestOsBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getGuestOsSharedPathsDisplayText(paths) {
        return sendWithPromise('getGuestOsSharedPathsDisplayText', paths);
    }
    removeGuestOsSharedPath(vmName, path) {
        return sendWithPromise('removeGuestOsSharedPath', vmName, path);
    }
    notifyGuestOsSharedUsbDevicesPageReady() {
        chrome.send('notifyGuestOsSharedUsbDevicesPageReady');
    }
    setGuestOsUsbDeviceShared(vmName, containerName, guid, shared) {
        chrome.send('setGuestOsUsbDeviceShared', [vmName, containerName, guid, shared]);
    }
}
