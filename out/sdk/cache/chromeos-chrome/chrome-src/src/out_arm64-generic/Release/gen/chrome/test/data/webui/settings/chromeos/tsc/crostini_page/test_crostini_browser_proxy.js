// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestCrostiniBrowserProxy extends TestBrowserProxy {
    crostiniMicSharingEnabled;
    crostiniIsRunning;
    methodCalls;
    portOperationSuccess;
    containerInfo;
    selectedContainerFileName;
    sharedVmDevices;
    constructor() {
        super([
            'requestCrostiniInstallerView',
            'requestRemoveCrostini',
            'exportCrostiniContainer',
            'importCrostiniContainer',
            'requestCrostiniContainerUpgradeView',
            'requestCrostiniUpgraderDialogStatus',
            'requestCrostiniContainerUpgradeAvailable',
            'getCrostiniDiskInfo',
            'resizeCrostiniDisk',
            'addCrostiniPortForward',
            'removeCrostiniPortForward',
            'removeAllCrostiniPortForwards',
            'activateCrostiniPortForward',
            'deactivateCrostiniPortForward',
            'getCrostiniActivePorts',
            'getCrostiniActiveNetworkInfo',
            'checkCrostiniIsRunning',
            'shutdownCrostini',
            'setCrostiniMicSharingEnabled',
            'getCrostiniMicSharingEnabled',
            'requestCrostiniInstallerStatus',
            'requestArcAdbSideloadStatus',
            'getCanChangeArcAdbSideloading',
            'createContainer',
            'deleteContainer',
            'requestContainerInfo',
            'setContainerBadgeColor',
            'stopContainer',
            'requestCrostiniExportImportOperationStatus',
            'openContainerFileSelector',
            'requestSharedVmDevices',
            'isVmDeviceShared',
            'setVmDeviceShared',
            'requestBruschettaInstallerView',
            'requestBruschettaUninstallerView',
            'enableArcAdbSideload',
            'disableArcAdbSideload',
            'checkCrostiniMicSharingStatus',
        ]);
        this.crostiniMicSharingEnabled = false;
        this.crostiniIsRunning = true;
        this.methodCalls = {};
        this.portOperationSuccess = true;
        this.containerInfo = [];
        this.selectedContainerFileName = '';
        this.sharedVmDevices = [];
    }
    getNewPromiseFor(name) {
        if (name in this.methodCalls) {
            return new Promise((resolve, reject) => {
                this.methodCalls[name].push({ name, resolve, reject });
            });
        }
        return new Promise((resolve, reject) => {
            this.methodCalls[name] = [{ name, resolve, reject }];
        });
    }
    async resolvePromises(name, ...args) {
        for (const o of this.methodCalls[name]) {
            await o.resolve(...args);
        }
        this.methodCalls[name] = [];
    }
    async rejectPromises(name, ...args) {
        for (const o of this.methodCalls[name]) {
            await o.reject(...args);
        }
        this.methodCalls[name] = [];
    }
    requestCrostiniInstallerView() {
        this.methodCalled('requestCrostiniInstallerView');
    }
    requestRemoveCrostini() {
        this.methodCalled('requestRemoveCrostini');
    }
    requestArcAdbSideloadStatus() {
        this.methodCalled('requestArcAdbSideloadStatus');
    }
    getCanChangeArcAdbSideloading() {
        this.methodCalled('getCanChangeArcAdbSideloading');
    }
    requestCrostiniInstallerStatus() {
        this.methodCalled('requestCrostiniInstallerStatus');
        webUIListenerCallback('crostini-installer-status-changed', false);
    }
    requestCrostiniExportImportOperationStatus() {
        this.methodCalled('requestCrostiniExportImportOperationStatus');
        webUIListenerCallback('crostini-export-import-operation-status-changed', false);
    }
    exportCrostiniContainer(containerId) {
        this.methodCalled('exportCrostiniContainer', containerId);
    }
    importCrostiniContainer(containerId) {
        this.methodCalled('importCrostiniContainer', containerId);
    }
    requestCrostiniContainerUpgradeView() {
        this.methodCalled('requestCrostiniContainerUpgradeView');
    }
    requestCrostiniUpgraderDialogStatus() {
        webUIListenerCallback('crostini-upgrader-status-changed', false);
    }
    requestCrostiniContainerUpgradeAvailable() {
        webUIListenerCallback('crostini-container-upgrade-available-changed', true);
    }
    addCrostiniPortForward(containerId, portNumber, protocolIndex, label) {
        this.methodCalled('addCrostiniPortForward', containerId, portNumber, protocolIndex, label);
        return Promise.resolve(this.portOperationSuccess);
    }
    removeCrostiniPortForward(containerId, portNumber, protocolIndex) {
        this.methodCalled('removeCrostiniPortForward', containerId, portNumber, protocolIndex);
        return Promise.resolve(this.portOperationSuccess);
    }
    activateCrostiniPortForward(containerId, portNumber, protocolIndex) {
        this.methodCalled('activateCrostiniPortForward', containerId, portNumber, protocolIndex);
        return Promise.resolve(this.portOperationSuccess);
    }
    deactivateCrostiniPortForward(containerId, portNumber, protocolIndex) {
        this.methodCalled('deactivateCrostiniPortForward', containerId, portNumber, protocolIndex);
        return Promise.resolve(this.portOperationSuccess);
    }
    removeAllCrostiniPortForwards(containerId) {
        this.methodCalled('removeAllCrostiniPortForwards', containerId);
    }
    getCrostiniActivePorts() {
        this.methodCalled('getCrostiniActivePorts');
        return Promise.resolve([]);
    }
    getCrostiniActiveNetworkInfo() {
        this.methodCalled('getCrostiniActiveNetworkInfo');
        return Promise.resolve([]);
    }
    getCrostiniDiskInfo(vmName, requestFullInfo) {
        this.methodCalled('getCrostiniDiskInfo', vmName, requestFullInfo);
        return this.getNewPromiseFor('getCrostiniDiskInfo');
    }
    resizeCrostiniDisk(vmName, newSizeBytes) {
        this.methodCalled('resizeCrostiniDisk', vmName, newSizeBytes);
        return this.getNewPromiseFor('resizeCrostiniDisk');
    }
    checkCrostiniIsRunning() {
        this.methodCalled('checkCrostiniIsRunning');
        return Promise.resolve(this.crostiniIsRunning);
    }
    shutdownCrostini() {
        this.methodCalled('shutdownCrostini');
        this.crostiniIsRunning = false;
    }
    setCrostiniMicSharingEnabled(enabled) {
        this.methodCalled('setCrostiniMicSharingEnabled');
        this.crostiniMicSharingEnabled = enabled;
    }
    getCrostiniMicSharingEnabled() {
        this.methodCalled('getCrostiniMicSharingEnabled');
        return Promise.resolve(this.crostiniMicSharingEnabled);
    }
    createContainer(containerId, imageServer, imageAlias, containerFile) {
        this.methodCalled('createContainer', containerId, imageServer, imageAlias, containerFile);
    }
    deleteContainer(containerId) {
        this.methodCalled('deleteContainer', containerId);
    }
    requestContainerInfo() {
        this.methodCalled('requestContainerInfo');
        webUIListenerCallback('crostini-container-info', this.containerInfo);
    }
    setContainerBadgeColor(containerId, badgeColor) {
        this.methodCalled('setContainerBadgeColor', [containerId, badgeColor]);
    }
    stopContainer(containerId) {
        this.methodCalled('stopContainer', containerId);
    }
    openContainerFileSelector() {
        this.methodCalled('openContainerFileSelector');
        return Promise.resolve(this.selectedContainerFileName);
    }
    requestSharedVmDevices() {
        this.methodCalled('requestSharedVmDevices');
        webUIListenerCallback('crostini-shared-vmdevices', this.sharedVmDevices);
    }
    isVmDeviceShared(id, device) {
        this.methodCalled('isVmDeviceShared', id, device);
        return this.getNewPromiseFor('isVmDeviceShared');
    }
    setVmDeviceShared(id, device, shared) {
        this.methodCalled('setVmDeviceShared', id, device, shared);
        return this.getNewPromiseFor('setVmDeviceShared');
    }
    requestBruschettaInstallerView() {
        this.methodCalled('requestBruschettaInstallerView');
    }
    requestBruschettaUninstallerView() {
        this.methodCalled('requestBruschettaUninstallerView');
    }
    enableArcAdbSideload() {
        this.methodCalled('enableArcAdbSideload');
    }
    disableArcAdbSideload() {
        this.methodCalled('disableArcAdbSideload');
    }
    checkCrostiniMicSharingStatus(proposedValue) {
        this.methodCalled('checkCrostiniMicSharingStatus', proposedValue);
        return Promise.resolve(true);
    }
}
