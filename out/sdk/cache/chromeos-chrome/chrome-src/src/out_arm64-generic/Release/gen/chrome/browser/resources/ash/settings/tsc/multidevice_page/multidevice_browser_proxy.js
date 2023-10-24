// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class MultiDeviceBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new MultiDeviceBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    showMultiDeviceSetupDialog() {
        chrome.send('showMultiDeviceSetupDialog');
    }
    getPageContentData() {
        return sendWithPromise('getPageContentData');
    }
    setFeatureEnabledState(feature, enabled, authToken) {
        return sendWithPromise('setFeatureEnabledState', feature, enabled, authToken);
    }
    removeHostDevice() {
        chrome.send('removeHostDevice');
    }
    retryPendingHostSetup() {
        chrome.send('retryPendingHostSetup');
    }
    attemptNotificationSetup() {
        chrome.send('attemptNotificationSetup');
    }
    cancelNotificationSetup() {
        chrome.send('cancelNotificationSetup');
    }
    attemptAppsSetup() {
        chrome.send('attemptAppsSetup');
    }
    cancelAppsSetup() {
        chrome.send('cancelAppsSetup');
    }
    attemptCombinedFeatureSetup(showCameraRoll, showNotifications) {
        chrome.send('attemptCombinedFeatureSetup', [showCameraRoll, showNotifications]);
    }
    cancelCombinedFeatureSetup() {
        chrome.send('cancelCombinedFeatureSetup');
    }
    attemptFeatureSetupConnection() {
        chrome.send('attemptFeatureSetupConnection');
    }
    cancelFeatureSetupConnection() {
        chrome.send('cancelFeatureSetupConnection');
    }
    showBrowserSyncSettings() {
        chrome.send('showBrowserSyncSettings');
    }
    logPhoneHubPermissionSetUpScreenAction(screen, action) {
        chrome.send('logPhoneHubPermissionSetUpScreenAction', [screen, action]);
    }
    logPhoneHubPermissionSetUpButtonClicked(setupMode) {
        chrome.send('logPhoneHubPermissionSetUpButtonClicked', [setupMode]);
    }
    logPhoneHubPermissionOnboardingSetupMode(setupMode) {
        chrome.send('logPhoneHubPermissionOnboardingSetupMode', [setupMode]);
    }
    logPhoneHubPermissionOnboardingSetupResult(completedMode) {
        chrome.send('logPhoneHubPermissionOnboardingSetupResult', [completedMode]);
    }
}
