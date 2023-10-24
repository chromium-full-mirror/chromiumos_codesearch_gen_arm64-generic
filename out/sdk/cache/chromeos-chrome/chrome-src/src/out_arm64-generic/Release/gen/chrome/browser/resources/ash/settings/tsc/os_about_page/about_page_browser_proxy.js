// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "About" section to interact with
 * the browser.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Enumeration of all possible browser channels.
 */
export var BrowserChannel;
(function (BrowserChannel) {
    BrowserChannel["BETA"] = "beta-channel";
    BrowserChannel["CANARY"] = "canary-channel";
    BrowserChannel["DEV"] = "dev-channel";
    BrowserChannel["STABLE"] = "stable-channel";
    BrowserChannel["LTC"] = "ltc-channel";
    BrowserChannel["LTS"] = "lts-channel";
})(BrowserChannel || (BrowserChannel = {}));
/**
 * Enumeration of all possible update statuses. The string literals must match
 * the ones defined at |AboutHandler::UpdateStatusToString|.
 */
export var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["CHECKING"] = "checking";
    UpdateStatus["UPDATING"] = "updating";
    UpdateStatus["NEARLY_UPDATED"] = "nearly_updated";
    UpdateStatus["UPDATED"] = "updated";
    UpdateStatus["FAILED"] = "failed";
    UpdateStatus["FAILED_HTTP"] = "failed_http";
    UpdateStatus["FAILED_DOWNLOAD"] = "failed_download";
    UpdateStatus["DISABLED"] = "disabled";
    UpdateStatus["UPDATE_TO_ROLLBACK_VERSION_DISALLOWED"] = "update_to_rollback_version_disallowed";
    UpdateStatus["DISABLED_BY_ADMIN"] = "disabled_by_admin";
    UpdateStatus["NEED_PERMISSION_TO_UPDATE"] = "need_permission_to_update";
    UpdateStatus["DEFERRED"] = "deferred";
})(UpdateStatus || (UpdateStatus = {}));
export function browserChannelToI18nId(channel, isLts) {
    // TODO(b/273717293): Remove LTS tag handling.
    if (isLts) {
        return 'aboutChannelLongTermSupport';
    }
    switch (channel) {
        case BrowserChannel.BETA:
            return 'aboutChannelBeta';
        case BrowserChannel.CANARY:
            return 'aboutChannelCanary';
        case BrowserChannel.DEV:
            return 'aboutChannelDev';
        case BrowserChannel.STABLE:
            return 'aboutChannelStable';
        case BrowserChannel.LTC:
            return 'aboutChannelLongTermSupportCandidate';
        case BrowserChannel.LTS:
            return 'aboutChannelLongTermSupport';
    }
}
/**
 * Returns whether the target channel is more stable than the current channel.
 */
export function isTargetChannelMoreStable(currentChannel, targetChannel) {
    // List of channels in increasing stability order.
    const channelList = [
        BrowserChannel.CANARY,
        BrowserChannel.DEV,
        BrowserChannel.BETA,
        BrowserChannel.STABLE,
        BrowserChannel.LTC,
        BrowserChannel.LTS,
    ];
    const currentIndex = channelList.indexOf(currentChannel);
    const targetIndex = channelList.indexOf(targetChannel);
    return currentIndex < targetIndex;
}
let instance = null;
export class AboutPageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new AboutPageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    applyDeferredUpdate() {
        chrome.send('applyDeferredUpdate');
    }
    pageReady() {
        chrome.send('aboutPageReady');
    }
    refreshUpdateStatus() {
        chrome.send('refreshUpdateStatus');
    }
    launchReleaseNotes() {
        chrome.send('launchReleaseNotes');
    }
    // 
    openDiagnostics() {
        chrome.send('openDiagnostics');
    }
    openProductLicenseOther() {
        chrome.send('openProductLicenseOther');
    }
    openOsHelpPage() {
        chrome.send('openOsHelpPage');
    }
    openFirmwareUpdatesPage() {
        chrome.send('openFirmwareUpdatesPage');
    }
    getFirmwareUpdateCount() {
        return sendWithPromise('getFirmwareUpdateCount');
    }
    requestUpdate() {
        chrome.send('requestUpdate');
    }
    requestUpdateOverCellular(targetVersion, targetSize) {
        chrome.send('requestUpdateOverCellular', [targetVersion, targetSize]);
    }
    setChannel(channel, isPowerwashAllowed) {
        chrome.send('setChannel', [channel, isPowerwashAllowed]);
    }
    getChannelInfo() {
        return sendWithPromise('getChannelInfo');
    }
    canChangeChannel() {
        return sendWithPromise('canChangeChannel');
    }
    getVersionInfo() {
        return sendWithPromise('getVersionInfo');
    }
    getRegulatoryInfo() {
        return sendWithPromise('getRegulatoryInfo');
    }
    getEndOfLifeInfo() {
        return sendWithPromise('getEndOfLifeInfo');
    }
    endOfLifeIncentiveButtonClicked() {
        chrome.send('openEndOfLifeIncentive');
    }
    checkInternetConnection() {
        return sendWithPromise('checkInternetConnection');
    }
    refreshTpmFirmwareUpdateStatus() {
        chrome.send('refreshTPMFirmwareUpdateStatus');
    }
    isManagedAutoUpdateEnabled() {
        return sendWithPromise('isManagedAutoUpdateEnabled');
    }
    isConsumerAutoUpdateEnabled() {
        return sendWithPromise('isConsumerAutoUpdateEnabled');
    }
    setConsumerAutoUpdate(enable) {
        chrome.send('setConsumerAutoUpdate', [enable]);
    }
}
