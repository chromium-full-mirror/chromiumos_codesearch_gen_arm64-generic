// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the "Site Settings" to interact with
 * the permission-related updates of the browser.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * Constants used in safety hub C++ to JS communication.
 * Their values need be kept in sync with their counterparts in
 * chrome/browser/ui/webui/settings/safety_hub_handler.h and
 * chrome/browser/ui/webui/settings/safety_hub_handler.cc
 */
export var SafetyHubEvent;
(function (SafetyHubEvent) {
    SafetyHubEvent["UNUSED_PERMISSIONS_MAYBE_CHANGED"] = "unused-permission-review-list-maybe-changed";
    SafetyHubEvent["NOTIFICATION_PERMISSIONS_MAYBE_CHANGED"] = "notification-permission-review-list-maybe-changed";
    SafetyHubEvent["EXTENSIONS_CHANGED"] = "extensions-review-list-maybe-changed";
})(SafetyHubEvent || (SafetyHubEvent = {}));
/**
 * A Safety Hub card has 4 different states as represented below. Depending on
 * the card state, the card will be updated.
 * Should be kept in sync with the corresponding enum in
 * chrome/browser/ui/safety_hub/safety_hub_constants.h.
 */
export var CardState;
(function (CardState) {
    CardState[CardState["WARNING"] = 0] = "WARNING";
    CardState[CardState["WEAK"] = 1] = "WEAK";
    CardState[CardState["INFO"] = 2] = "INFO";
    CardState[CardState["SAFE"] = 3] = "SAFE";
})(CardState || (CardState = {}));
export class SafetyHubBrowserProxyImpl {
    acknowledgeRevokedUnusedSitePermissionsList() {
        chrome.send('acknowledgeRevokedUnusedSitePermissionsList');
    }
    allowPermissionsAgainForUnusedSite(origin) {
        chrome.send('allowPermissionsAgainForUnusedSite', [origin]);
    }
    getRevokedUnusedSitePermissionsList() {
        return sendWithPromise('getRevokedUnusedSitePermissionsList');
    }
    undoAcknowledgeRevokedUnusedSitePermissionsList(unusedSitePermissionsList) {
        chrome.send('undoAcknowledgeRevokedUnusedSitePermissionsList', [unusedSitePermissionsList]);
    }
    undoAllowPermissionsAgainForUnusedSite(unusedSitePermissions) {
        chrome.send('undoAllowPermissionsAgainForUnusedSite', [unusedSitePermissions]);
    }
    getNotificationPermissionReview() {
        return sendWithPromise('getNotificationPermissionReview');
    }
    blockNotificationPermissionForOrigins(origins) {
        chrome.send('blockNotificationPermissionForOrigins', [origins]);
    }
    allowNotificationPermissionForOrigins(origins) {
        chrome.send('allowNotificationPermissionForOrigins', [origins]);
    }
    ignoreNotificationPermissionForOrigins(origins) {
        chrome.send('ignoreNotificationPermissionReviewForOrigins', [origins]);
    }
    undoIgnoreNotificationPermissionForOrigins(origins) {
        chrome.send('undoIgnoreNotificationPermissionReviewForOrigins', [origins]);
    }
    resetNotificationPermissionForOrigins(origins) {
        chrome.send('resetNotificationPermissionForOrigins', [origins]);
    }
    getPasswordCardData() {
        return sendWithPromise('getPasswordCardData');
    }
    getSafeBrowsingCardData() {
        return sendWithPromise('getSafeBrowsingCardData');
    }
    getVersionCardData() {
        return sendWithPromise('getVersionCardData');
    }
    getNumberOfExtensionsThatNeedReview() {
        return sendWithPromise('getNumberOfExtensionsThatNeedReview');
    }
    getSafetyHubHasRecommendations() {
        return sendWithPromise('getSafetyHubHasRecommendations');
    }
    getSafetyHubEntryPointSubheader() {
        return sendWithPromise('getSafetyHubEntryPointSubheader');
    }
    static getInstance() {
        return instance || (instance = new SafetyHubBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
