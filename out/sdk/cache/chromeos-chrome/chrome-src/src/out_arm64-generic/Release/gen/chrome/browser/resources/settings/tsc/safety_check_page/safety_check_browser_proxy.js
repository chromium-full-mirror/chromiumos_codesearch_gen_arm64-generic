// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// clang-format on
/**
 * @fileoverview A helper object used by the "SafetyCheck" to interact with
 * the browser.
 */
/**
 * Constants used in safety check C++ to JS communication.
 * Their values need be kept in sync with their counterparts in
 * chrome/browser/ui/webui/settings/safety_check_handler.h and
 * chrome/browser/ui/webui/settings/safety_check_handler.cc
 */
export var SafetyCheckCallbackConstants;
(function (SafetyCheckCallbackConstants) {
    SafetyCheckCallbackConstants["PARENT_CHANGED"] = "safety-check-parent-status-changed";
    SafetyCheckCallbackConstants["UPDATES_CHANGED"] = "safety-check-updates-status-changed";
    SafetyCheckCallbackConstants["PASSWORDS_CHANGED"] = "safety-check-passwords-status-changed";
    SafetyCheckCallbackConstants["SAFE_BROWSING_CHANGED"] = "safety-check-safe-browsing-status-changed";
    SafetyCheckCallbackConstants["EXTENSIONS_CHANGED"] = "safety-check-extensions-status-changed";
})(SafetyCheckCallbackConstants || (SafetyCheckCallbackConstants = {}));
/**
 * States of the safety check parent element.
 * Needs to be kept in sync with ParentStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
export var SafetyCheckParentStatus;
(function (SafetyCheckParentStatus) {
    SafetyCheckParentStatus[SafetyCheckParentStatus["BEFORE"] = 0] = "BEFORE";
    SafetyCheckParentStatus[SafetyCheckParentStatus["CHECKING"] = 1] = "CHECKING";
    SafetyCheckParentStatus[SafetyCheckParentStatus["AFTER"] = 2] = "AFTER";
})(SafetyCheckParentStatus || (SafetyCheckParentStatus = {}));
/**
 * States of the safety check updates element.
 * Needs to be kept in sync with UpdateStatus in
 * components/safety_check/safety_check.h
 */
export var SafetyCheckUpdatesStatus;
(function (SafetyCheckUpdatesStatus) {
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATED"] = 1] = "UPDATED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATING"] = 2] = "UPDATING";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["RELAUNCH"] = 3] = "RELAUNCH";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["DISABLED_BY_ADMIN"] = 4] = "DISABLED_BY_ADMIN";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["FAILED_OFFLINE"] = 5] = "FAILED_OFFLINE";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["FAILED"] = 6] = "FAILED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UNKNOWN"] = 7] = "UNKNOWN";
    // Only used in Android but listed here to keep enum in sync.
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["OUTDATED"] = 8] = "OUTDATED";
    SafetyCheckUpdatesStatus[SafetyCheckUpdatesStatus["UPDATE_TO_ROLLBACK_VERSION_DISALLOWED"] = 9] = "UPDATE_TO_ROLLBACK_VERSION_DISALLOWED";
})(SafetyCheckUpdatesStatus || (SafetyCheckUpdatesStatus = {}));
/**
 * States of the safety check passwords element.
 * Needs to be kept in sync with PasswordsStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
export var SafetyCheckPasswordsStatus;
(function (SafetyCheckPasswordsStatus) {
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["SAFE"] = 1] = "SAFE";
    // Indicates that at least one compromised password exists. Weak, reused or
    // muted compromised password warnings may exist as well.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["COMPROMISED"] = 2] = "COMPROMISED";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["OFFLINE"] = 3] = "OFFLINE";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["NO_PASSWORDS"] = 4] = "NO_PASSWORDS";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["SIGNED_OUT"] = 5] = "SIGNED_OUT";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["QUOTA_LIMIT"] = 6] = "QUOTA_LIMIT";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["ERROR"] = 7] = "ERROR";
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["FEATURE_UNAVAILABLE"] = 8] = "FEATURE_UNAVAILABLE";
    // Indicates that no compromised or reused passwords exist, but there is at
    // least one weak password.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["WEAK_PASSWORDS_EXIST"] = 9] = "WEAK_PASSWORDS_EXIST";
    // Indicates that no compromised passwords exist, but there is at least one
    // reused password.
    // Not yet supported on Desktop.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["REUSED_PASSWORDS_EXIST"] = 10] = "REUSED_PASSWORDS_EXIST";
    // Indicates no weak or reused passwords exist, but there is
    // at least one compromised password warning that has been muted by the user.
    // Not yet supported on Desktop.
    SafetyCheckPasswordsStatus[SafetyCheckPasswordsStatus["MUTED_COMPROMISED_EXIST"] = 11] = "MUTED_COMPROMISED_EXIST";
})(SafetyCheckPasswordsStatus || (SafetyCheckPasswordsStatus = {}));
/**
 * States of the safety check safe browsing element.
 * Needs to be kept in sync with SafeBrowsingStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
export var SafetyCheckSafeBrowsingStatus;
(function (SafetyCheckSafeBrowsingStatus) {
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["CHECKING"] = 0] = "CHECKING";
    // Enabled is deprecated; kept not to break old UMA metrics (enums.xml).
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED"] = 1] = "ENABLED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED"] = 2] = "DISABLED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED_BY_ADMIN"] = 3] = "DISABLED_BY_ADMIN";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["DISABLED_BY_EXTENSION"] = 4] = "DISABLED_BY_EXTENSION";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_STANDARD"] = 5] = "ENABLED_STANDARD";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_ENHANCED"] = 6] = "ENABLED_ENHANCED";
    SafetyCheckSafeBrowsingStatus[SafetyCheckSafeBrowsingStatus["ENABLED_STANDARD_AVAILABLE_ENHANCED"] = 7] = "ENABLED_STANDARD_AVAILABLE_ENHANCED";
})(SafetyCheckSafeBrowsingStatus || (SafetyCheckSafeBrowsingStatus = {}));
/**
 * States of the safety check extensions element.
 * Needs to be kept in sync with ExtensionsStatus in
 * chrome/browser/ui/webui/settings/safety_check_handler.h
 */
export var SafetyCheckExtensionsStatus;
(function (SafetyCheckExtensionsStatus) {
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["CHECKING"] = 0] = "CHECKING";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["ERROR"] = 1] = "ERROR";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["NO_BLOCKLISTED_EXTENSIONS"] = 2] = "NO_BLOCKLISTED_EXTENSIONS";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_ALL_DISABLED"] = 3] = "BLOCKLISTED_ALL_DISABLED";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_ALL_BY_USER"] = 4] = "BLOCKLISTED_REENABLED_ALL_BY_USER";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_SOME_BY_USER"] = 5] = "BLOCKLISTED_REENABLED_SOME_BY_USER";
    SafetyCheckExtensionsStatus[SafetyCheckExtensionsStatus["BLOCKLISTED_REENABLED_ALL_BY_ADMIN"] = 6] = "BLOCKLISTED_REENABLED_ALL_BY_ADMIN";
})(SafetyCheckExtensionsStatus || (SafetyCheckExtensionsStatus = {}));
export class SafetyCheckBrowserProxyImpl {
    runSafetyCheck() {
        chrome.send('performSafetyCheck');
    }
    getParentRanDisplayString() {
        return sendWithPromise('getSafetyCheckRanDisplayString');
    }
    static getInstance() {
        return instance || (instance = new SafetyCheckBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
