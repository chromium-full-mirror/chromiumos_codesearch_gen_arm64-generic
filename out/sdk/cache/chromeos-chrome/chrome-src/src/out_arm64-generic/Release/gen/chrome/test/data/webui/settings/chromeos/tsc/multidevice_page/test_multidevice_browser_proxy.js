// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { MultiDeviceSettingsMode } from 'chrome://os-settings/os_settings.js';
import { webUIListenerCallback } from 'chrome://resources/ash/common/cr.m.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
/**
 * Default Host device for PageContentData.
 */
export const HOST_DEVICE = 'Pixel XL';
/**
 * Builds fake pageContentData for the specified mode. If it is a mode
 * corresponding to a set host, it will set the hostDeviceName to the provided
 * name or else default to HOST_DEVICE.
 * @param hostDeviceName Overrides default if |mode| corresponds
 *     to a set host.
 */
export function createFakePageContentData(mode, hostDeviceName) {
    const pageContentData = { mode: mode };
    if ([
        MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,
        MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION,
        MultiDeviceSettingsMode.HOST_SET_VERIFIED,
    ].includes(mode)) {
        pageContentData.hostDeviceName = hostDeviceName || HOST_DEVICE;
    }
    return pageContentData;
}
/**
 * Note: Only showMultiDeviceSetupDialog is used by the multidevice-page
 * element.
 */
export class TestMultideviceBrowserProxy extends TestBrowserProxy {
    data_ = createFakePageContentData(MultiDeviceSettingsMode.NO_HOST_SET);
    constructor() {
        super([
            'showMultiDeviceSetupDialog',
            'getPageContentData',
            'setFeatureEnabledState',
            'attemptNotificationSetup',
            'cancelNotificationSetup',
            'attemptAppsSetup',
            'cancelAppsSetup',
            'attemptCombinedFeatureSetup',
            'cancelCombinedFeatureSetup',
            'attemptFeatureSetupConnection',
            'cancelFeatureSetupConnection',
            'showBrowserSyncSettings',
            'logPhoneHubPermissionSetUpScreenAction',
            'logPhoneHubPermissionOnboardingSetupMode',
            'logPhoneHubPermissionOnboardingSetupResult',
            'getSmartLockSignInAllowed',
        ]);
    }
    setNotificationAccessStatusForTesting(status) {
        this.data_.notificationAccessStatus = status;
    }
    setIsPhoneHubPermissionsDialogSupportedForTesting(isSupported) {
        this.data_.isPhoneHubPermissionsDialogSupported = isSupported;
    }
    getPageContentData() {
        this.methodCalled('getPageContentData');
        return Promise.resolve(this.data_);
    }
    showMultiDeviceSetupDialog() {
        this.methodCalled('showMultiDeviceSetupDialog');
    }
    setFeatureEnabledState(feature, enabled, authToken) {
        this.methodCalled('setFeatureEnabledState', [feature, enabled, authToken]);
        return Promise.resolve(true);
    }
    attemptNotificationSetup() {
        this.methodCalled('attemptNotificationSetup');
    }
    cancelNotificationSetup() {
        this.methodCalled('cancelNotificationSetup');
    }
    attemptAppsSetup() {
        this.methodCalled('attemptAppsSetup');
    }
    cancelAppsSetup() {
        this.methodCalled('cancelAppsSetup');
    }
    attemptCombinedFeatureSetup(showCameraRoll, showNotifications) {
        this.methodCalled('attemptCombinedFeatureSetup', [showCameraRoll, showNotifications]);
    }
    cancelCombinedFeatureSetup() {
        this.methodCalled('cancelCombinedFeatureSetup');
    }
    attemptFeatureSetupConnection() {
        this.methodCalled('attemptFeatureSetupConnection');
    }
    cancelFeatureSetupConnection() {
        this.methodCalled('cancelFeatureSetupConnection');
    }
    setInstantTetheringStateForTest(state) {
        this.data_.instantTetheringState = state;
        webUIListenerCallback('settings.updateMultidevicePageContentData', Object.assign({}, this.data_));
    }
    showBrowserSyncSettings() {
        this.methodCalled('showBrowserSyncSettings');
    }
    logPhoneHubPermissionSetUpScreenAction(screen, action) {
        this.methodCalled('logPhoneHubPermissionSetUpScreenAction', [screen, action]);
    }
    logPhoneHubPermissionSetUpButtonClicked(setupMode) {
        chrome.send('logPhoneHubPermissionSetUpButtonClicked', [setupMode]);
    }
    logPhoneHubPermissionOnboardingSetupMode(setupMode) {
        this.methodCalled('logPhoneHubPermissionOnboardingSetupMode', [setupMode]);
    }
    logPhoneHubPermissionOnboardingSetupResult(completedMode) {
        this.methodCalled('logPhoneHubPermissionOnboardingSetupResult', [completedMode]);
    }
    getSmartLockSignInAllowed() {
        return Promise.resolve(true);
    }
    removeHostDevice() { }
    retryPendingHostSetup() { }
}
