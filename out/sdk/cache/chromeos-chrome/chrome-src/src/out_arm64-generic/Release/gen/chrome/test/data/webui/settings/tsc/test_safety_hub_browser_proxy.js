// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { CardState } from 'chrome://settings/lazy_load.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
/**
 * A test version of SafetyHubBrowserProxy. Provides helper
 * methods for allowing tests to know when a method was called, as well as
 * specifying mock responses.
 */
export class TestSafetyHubBrowserProxy extends TestBrowserProxy {
    constructor() {
        super([
            'acknowledgeRevokedUnusedSitePermissionsList',
            'allowPermissionsAgainForUnusedSite',
            'getRevokedUnusedSitePermissionsList',
            'getNumberOfExtensionsThatNeedReview',
            'undoAcknowledgeRevokedUnusedSitePermissionsList',
            'undoAllowPermissionsAgainForUnusedSite',
            'getNotificationPermissionReview',
            'blockNotificationPermissionForOrigins',
            'allowNotificationPermissionForOrigins',
            'ignoreNotificationPermissionForOrigins',
            'undoIgnoreNotificationPermissionForOrigins',
            'resetNotificationPermissionForOrigins',
            'getPasswordCardData',
            'getSafeBrowsingCardData',
            'getVersionCardData',
            'getSafetyHubHasRecommendations',
            'getSafetyHubEntryPointSubheader',
            'dismissActiveMenuNotification',
        ]);
        this.dummyCardInfo = {
            header: 'Dummy Header',
            subheader: 'Dummy Subheader',
            state: CardState.INFO,
        };
        this.unusedSitePermissions_ = [];
        this.reviewNotificationList_ = [];
        this.numberOfExtensionsThatNeedReview_ = 0;
        this.passwordCardData_ = this.dummyCardInfo;
        this.safeBrowsingCardData_ = this.dummyCardInfo;
        this.versionCardData_ = this.dummyCardInfo;
        this.safetyHubHasRecommendations_ = false;
        this.entryPointSubheader_ = '';
    }
    acknowledgeRevokedUnusedSitePermissionsList() {
        this.methodCalled('acknowledgeRevokedUnusedSitePermissionsList');
    }
    allowPermissionsAgainForUnusedSite(origin) {
        this.methodCalled('allowPermissionsAgainForUnusedSite', [origin]);
    }
    setUnusedSitePermissions(unusedSitePermissionsList) {
        this.unusedSitePermissions_ = unusedSitePermissionsList;
    }
    getRevokedUnusedSitePermissionsList() {
        this.methodCalled('getRevokedUnusedSitePermissionsList');
        return Promise.resolve(this.unusedSitePermissions_.slice());
    }
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionList) {
        this.methodCalled('undoAcknowledgeRevokedUnusedSitePermissionsList', [unusedSitePermissionList]);
    }
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions) {
        this.methodCalled('undoAllowPermissionsAgainForUnusedSite', [unusedSitePermissions]);
    }
    getNotificationPermissionReview() {
        this.methodCalled('getNotificationPermissionReview');
        return Promise.resolve(this.reviewNotificationList_.slice());
    }
    setNotificationPermissionReview(reviewNotificationList) {
        this.reviewNotificationList_ = reviewNotificationList;
    }
    blockNotificationPermissionForOrigins(origins) {
        this.methodCalled('blockNotificationPermissionForOrigins', origins);
    }
    allowNotificationPermissionForOrigins(origins) {
        this.methodCalled('allowNotificationPermissionForOrigins', origins);
    }
    ignoreNotificationPermissionForOrigins(origins) {
        this.methodCalled('ignoreNotificationPermissionForOrigins', origins);
    }
    undoIgnoreNotificationPermissionForOrigins(origins) {
        this.methodCalled('undoIgnoreNotificationPermissionForOrigins', origins);
    }
    resetNotificationPermissionForOrigins(origins) {
        this.methodCalled('resetNotificationPermissionForOrigins', origins);
    }
    setNumberOfExtensionsThatNeedReview(numberExtensions) {
        this.numberOfExtensionsThatNeedReview_ = numberExtensions;
    }
    getNumberOfExtensionsThatNeedReview() {
        this.methodCalled('getNumberOfExtensionsThatNeedReview');
        return Promise.resolve(this.numberOfExtensionsThatNeedReview_);
    }
    getPasswordCardData() {
        this.methodCalled('getPasswordCardData');
        return Promise.resolve(this.passwordCardData_);
    }
    setPasswordCardData(data) {
        this.passwordCardData_ = data;
    }
    getSafeBrowsingCardData() {
        this.methodCalled('getSafeBrowsingCardData');
        return Promise.resolve(this.safeBrowsingCardData_);
    }
    setSafeBrowsingCardData(data) {
        this.safeBrowsingCardData_ = data;
    }
    getVersionCardData() {
        this.methodCalled('getVersionCardData');
        return Promise.resolve(this.versionCardData_);
    }
    setVersionCardData(data) {
        this.versionCardData_ = data;
    }
    getSafetyHubHasRecommendations() {
        return Promise.resolve(this.safetyHubHasRecommendations_);
    }
    setSafetyHubHasRecommendations(value) {
        this.safetyHubHasRecommendations_ = value;
    }
    getSafetyHubEntryPointSubheader() {
        return Promise.resolve(this.entryPointSubheader_);
    }
    setSafetyHubEntryPointSubheader(value) {
        this.entryPointSubheader_ = value;
    }
    dismissActiveMenuNotification() {
        this.methodCalled('dismissActiveMenuNotification');
    }
}
