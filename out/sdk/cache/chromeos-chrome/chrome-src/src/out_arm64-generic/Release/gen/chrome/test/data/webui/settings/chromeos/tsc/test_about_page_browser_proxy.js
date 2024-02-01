// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserChannel, UpdateStatus } from 'chrome://os-settings/os_settings.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestAboutPageBrowserProxy extends TestBrowserProxy {
    updateStatus_ = UpdateStatus.UPDATED;
    sendUpdateStatus_ = true;
    versionInfo_ = {
        arcVersion: '',
        osFirmware: '',
        osVersion: '',
    };
    channelInfo_ = {
        currentChannel: BrowserChannel.BETA,
        targetChannel: BrowserChannel.BETA,
        isLts: false,
    };
    canChangeChannel_ = true;
    regulatoryInfo_ = null;
    tpmFirmwareUpdateStatus_ = {
        updateAvailable: false,
    };
    endOfLifeInfo_ = {
        hasEndOfLife: false,
        aboutPageEndOfLifeMessage: '',
        shouldShowEndOfLifeIncentive: false,
        shouldShowOfferText: false,
    };
    hasInternetConnection_ = true;
    managedAutoUpdateEnabled_ = true;
    consumerAutoUpdateEnabled_ = true;
    firmwareUpdateCount_ = 0;
    constructor() {
        super([
            'applyDeferredUpdate',
            'pageReady',
            'refreshUpdateStatus',
            'openHelpPage',
            'openFeedbackDialog',
            'canChangeChannel',
            'getChannelInfo',
            'getVersionInfo',
            'getRegulatoryInfo',
            'checkInternetConnection',
            'getEndOfLifeInfo',
            'endOfLifeIncentiveButtonClicked',
            'launchReleaseNotes',
            'openDiagnostics',
            'openOsHelpPage',
            'openProductLicenseOther',
            'refreshTpmFirmwareUpdateStatus',
            'requestUpdate',
            'requestUpdateOverCellular',
            'setChannel',
            'getFirmwareUpdateCount',
            'openFirmwareUpdatesPage',
            'isManagedAutoUpdateEnabled',
            'isConsumerAutoUpdateEnabled',
            'setConsumerAutoUpdate',
        ]);
    }
    setUpdateStatus(updateStatus) {
        this.updateStatus_ = updateStatus;
    }
    blockRefreshUpdateStatus() {
        this.sendUpdateStatus_ = false;
    }
    sendStatusNoInternet() {
        webUIListenerCallback('update-status-changed', {
            progress: 0,
            status: UpdateStatus.FAILED,
            message: 'offline',
            connectionTypes: 'no internet',
        });
    }
    setManagedAutoUpdate(enabled) {
        this.managedAutoUpdateEnabled_ = enabled;
    }
    resetConsumerAutoUpdate(enabled) {
        this.consumerAutoUpdateEnabled_ = enabled;
    }
    pageReady() {
        this.methodCalled('pageReady');
    }
    refreshUpdateStatus() {
        if (this.sendUpdateStatus_) {
            webUIListenerCallback('update-status-changed', {
                progress: 1,
                status: this.updateStatus_,
            });
        }
        this.methodCalled('refreshUpdateStatus');
    }
    openFeedbackDialog() {
        this.methodCalled('openFeedbackDialog');
    }
    openHelpPage() {
        this.methodCalled('openHelpPage');
    }
    setVersionInfo(versionInfo) {
        this.versionInfo_ = versionInfo;
    }
    setCanChangeChannel(canChangeChannel) {
        this.canChangeChannel_ = canChangeChannel;
    }
    setChannels(current, target) {
        this.channelInfo_.currentChannel = current;
        this.channelInfo_.targetChannel = target;
    }
    setRegulatoryInfo(regulatoryInfo) {
        this.regulatoryInfo_ = regulatoryInfo;
    }
    setEndOfLifeInfo(endOfLifeInfo) {
        this.endOfLifeInfo_ = endOfLifeInfo;
    }
    setInternetConnection(hasInternetConnection) {
        this.hasInternetConnection_ = hasInternetConnection;
    }
    getVersionInfo() {
        this.methodCalled('getVersionInfo');
        return Promise.resolve(this.versionInfo_);
    }
    getChannelInfo() {
        this.methodCalled('getChannelInfo');
        return Promise.resolve(this.channelInfo_);
    }
    canChangeChannel() {
        this.methodCalled('canChangeChannel');
        return Promise.resolve(this.canChangeChannel_);
    }
    checkInternetConnection() {
        this.methodCalled('checkInternetConnection');
        return Promise.resolve(this.hasInternetConnection_);
    }
    getRegulatoryInfo() {
        this.methodCalled('getRegulatoryInfo');
        return Promise.resolve(this.regulatoryInfo_);
    }
    getEndOfLifeInfo() {
        this.methodCalled('getEndOfLifeInfo');
        return Promise.resolve(this.endOfLifeInfo_);
    }
    endOfLifeIncentiveButtonClicked() {
        this.methodCalled('endOfLifeIncentiveButtonClicked');
    }
    setChannel(channel, isPowerwashAllowed) {
        this.methodCalled('setChannel', [channel, isPowerwashAllowed]);
    }
    setTpmFirmwareUpdateStatus(status) {
        this.tpmFirmwareUpdateStatus_ = status;
    }
    refreshTpmFirmwareUpdateStatus() {
        this.methodCalled('refreshTpmFirmwareUpdateStatus');
        webUIListenerCallback('tpm-firmware-update-status-changed', this.tpmFirmwareUpdateStatus_);
    }
    requestUpdate() {
        this.setUpdateStatus(UpdateStatus.UPDATING);
        this.refreshUpdateStatus();
        this.methodCalled('requestUpdate');
    }
    openOsHelpPage() {
        this.methodCalled('openOsHelpPage');
    }
    openDiagnostics() {
        this.methodCalled('openDiagnostics');
    }
    launchReleaseNotes() {
        this.methodCalled('launchReleaseNotes');
    }
    openFirmwareUpdatesPage() {
        this.methodCalled('openFirmwareUpdatesPage');
    }
    getFirmwareUpdateCount() {
        this.methodCalled('getFirmwareUpdateCount');
        return Promise.resolve(this.firmwareUpdateCount_);
    }
    setFirmwareUpdatesCount(firmwareUpdatesCount) {
        this.firmwareUpdateCount_ = firmwareUpdatesCount;
    }
    isManagedAutoUpdateEnabled() {
        this.methodCalled('isManagedAutoUpdateEnabled');
        return Promise.resolve(this.managedAutoUpdateEnabled_);
    }
    isConsumerAutoUpdateEnabled() {
        this.methodCalled('isConsumerAutoUpdateEnabled');
        return Promise.resolve(this.consumerAutoUpdateEnabled_);
    }
    setConsumerAutoUpdate(enable) {
        this.consumerAutoUpdateEnabled_ = enable;
        this.methodCalled('setConsumerAutoUpdate');
    }
    applyDeferredUpdate() {
        this.methodCalled('applyDeferredUpdate');
    }
    openProductLicenseOther() {
        this.methodCalled('openProductLicenseOther');
    }
    requestUpdateOverCellular(targetVersion, targetSize) {
        this.methodCalled('requestUpdateOverCellular', [targetVersion, targetSize]);
    }
}
