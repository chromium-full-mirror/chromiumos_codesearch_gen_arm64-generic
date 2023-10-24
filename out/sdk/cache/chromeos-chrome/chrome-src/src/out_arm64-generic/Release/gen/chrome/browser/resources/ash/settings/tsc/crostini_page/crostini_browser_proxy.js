// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the "Linux Apps" (Crostini) section
 * to install and uninstall Crostini.
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { TERMINA_VM_TYPE } from '../guest_os/guest_os_browser_proxy.js';
// Identifiers for the default Crostini VM and container.
export const DEFAULT_CROSTINI_VM = TERMINA_VM_TYPE;
export const DEFAULT_CROSTINI_CONTAINER = 'penguin';
export const DEFAULT_CROSTINI_GUEST_ID = {
    vm_name: DEFAULT_CROSTINI_VM,
    container_name: DEFAULT_CROSTINI_CONTAINER,
};
/**
 * These values should remain consistent with their C++ counterpart
 * (chrome/browser/ash/crostini/crostini_port_forwarder.h).
 */
export var CrostiniPortProtocol;
(function (CrostiniPortProtocol) {
    CrostiniPortProtocol[CrostiniPortProtocol["TCP"] = 0] = "TCP";
    CrostiniPortProtocol[CrostiniPortProtocol["UDP"] = 1] = "UDP";
})(CrostiniPortProtocol || (CrostiniPortProtocol = {}));
export const PortState = {
    VALID: '',
    INVALID: loadTimeData.getString('crostiniPortForwardingAddError'),
    DUPLICATE: loadTimeData.getString('crostiniPortForwardingAddExisting'),
};
export const MIN_VALID_PORT_NUMBER = 1024; // Minimum 16-bit integer value.
export const MAX_VALID_PORT_NUMBER = 65535; // Maximum 16-bit integer value.
let instance = null;
export class CrostiniBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new CrostiniBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    requestCrostiniInstallerView() {
        chrome.send('requestCrostiniInstallerView');
    }
    requestRemoveCrostini() {
        chrome.send('requestRemoveCrostini');
    }
    requestCrostiniInstallerStatus() {
        chrome.send('requestCrostiniInstallerStatus');
    }
    requestCrostiniExportImportOperationStatus() {
        chrome.send('requestCrostiniExportImportOperationStatus');
    }
    exportCrostiniContainer(containerId) {
        chrome.send('exportCrostiniContainer', [containerId]);
    }
    importCrostiniContainer(containerId) {
        chrome.send('importCrostiniContainer', [containerId]);
    }
    requestArcAdbSideloadStatus() {
        chrome.send('requestArcAdbSideloadStatus');
    }
    getCanChangeArcAdbSideloading() {
        chrome.send('getCanChangeArcAdbSideloading');
    }
    enableArcAdbSideload() {
        chrome.send('enableArcAdbSideload');
    }
    disableArcAdbSideload() {
        chrome.send('disableArcAdbSideload');
    }
    requestCrostiniContainerUpgradeView() {
        chrome.send('requestCrostiniContainerUpgradeView');
    }
    requestCrostiniUpgraderDialogStatus() {
        chrome.send('requestCrostiniUpgraderDialogStatus');
    }
    requestCrostiniContainerUpgradeAvailable() {
        chrome.send('requestCrostiniContainerUpgradeAvailable');
    }
    getCrostiniDiskInfo(vmName, fullInfo) {
        return sendWithPromise('getCrostiniDiskInfo', vmName, fullInfo);
    }
    resizeCrostiniDisk(vmName, newSizeBytes) {
        return sendWithPromise('resizeCrostiniDisk', vmName, newSizeBytes);
    }
    checkCrostiniMicSharingStatus(proposedValue) {
        return sendWithPromise('checkCrostiniMicSharingStatus', proposedValue);
    }
    addCrostiniPortForward(containerId, portNumber, protocol, label) {
        return sendWithPromise('addCrostiniPortForward', containerId, portNumber, protocol, label);
    }
    removeCrostiniPortForward(containerId, portNumber, protocol) {
        return sendWithPromise('removeCrostiniPortForward', containerId, portNumber, protocol);
    }
    removeAllCrostiniPortForwards(containerId) {
        chrome.send('removeAllCrostiniPortForwards', [containerId]);
    }
    activateCrostiniPortForward(containerId, portNumber, protocol) {
        return sendWithPromise('activateCrostiniPortForward', containerId, portNumber, protocol);
    }
    deactivateCrostiniPortForward(containerId, portNumber, protocol) {
        return sendWithPromise('deactivateCrostiniPortForward', containerId, portNumber, protocol);
    }
    getCrostiniActivePorts() {
        return sendWithPromise('getCrostiniActivePorts');
    }
    getCrostiniActiveNetworkInfo() {
        return sendWithPromise('getCrostiniActiveNetworkInfo');
    }
    checkCrostiniIsRunning() {
        return sendWithPromise('checkCrostiniIsRunning');
    }
    shutdownCrostini() {
        chrome.send('shutdownCrostini');
    }
    setCrostiniMicSharingEnabled(enabled) {
        chrome.send('setCrostiniMicSharingEnabled', [enabled]);
    }
    getCrostiniMicSharingEnabled() {
        return sendWithPromise('getCrostiniMicSharingEnabled');
    }
    createContainer(containerId, imageServer, imageAlias, containerFile) {
        chrome.send('createContainer', [containerId, imageServer, imageAlias, containerFile]);
    }
    deleteContainer(containerId) {
        chrome.send('deleteContainer', [containerId]);
    }
    requestContainerInfo() {
        chrome.send('requestContainerInfo');
    }
    setContainerBadgeColor(containerId, badgeColor) {
        chrome.send('setContainerBadgeColor', [containerId, badgeColor]);
    }
    stopContainer(containerId) {
        chrome.send('stopContainer', [containerId]);
    }
    openContainerFileSelector() {
        return sendWithPromise('openContainerFileSelector');
    }
    requestSharedVmDevices() {
        chrome.send('requestSharedVmDevices');
    }
    isVmDeviceShared(id, device) {
        return sendWithPromise('isVmDeviceShared', id, device);
    }
    setVmDeviceShared(id, device, shared) {
        return sendWithPromise('setVmDeviceShared', id, device, shared);
    }
    requestBruschettaInstallerView() {
        chrome.send('requestBruschettaInstallerView');
    }
    requestBruschettaUninstallerView() {
        chrome.send('requestBruschettaUninstallerView');
    }
}
