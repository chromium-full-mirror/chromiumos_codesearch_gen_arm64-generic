// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
/**
 * Must be kept in sync with the return values of getSyncErrorAction in
 * chrome/browser/ui/webui/settings/people_handler.cc
 */
export var StatusAction;
(function (StatusAction) {
    StatusAction["NO_ACTION"] = "noAction";
    StatusAction["REAUTHENTICATE"] = "reauthenticate";
    StatusAction["UPGRADE_CLIENT"] = "upgradeClient";
    StatusAction["ENTER_PASSPHRASE"] = "enterPassphrase";
    // User needs to go through key retrieval.
    StatusAction["RETRIEVE_TRUSTED_VAULT_KEYS"] = "retrieveTrustedVaultKeys";
    StatusAction["CONFIRM_SYNC_SETTINGS"] = "confirmSyncSettings";
})(StatusAction || (StatusAction = {}));
/**
 * Names of the individual data type properties to be cached from
 * SyncPrefs when the user checks 'Sync All'.
 */
export const syncPrefsIndividualDataTypes = [
    'appsSynced',
    'autofillSynced',
    'bookmarksSynced',
    'extensionsSynced',
    'readingListSynced',
    'passwordsSynced',
    'paymentsSynced',
    'preferencesSynced',
    'savedTabGroupsSynced',
    'tabsSynced',
    'themesSynced',
    'typedUrlsSynced',
    'wifiConfigurationsSynced',
];
export var PageStatus;
(function (PageStatus) {
    PageStatus["SPINNER"] = "spinner";
    PageStatus["CONFIGURE"] = "configure";
    PageStatus["DONE"] = "done";
    PageStatus["PASSPHRASE_FAILED"] = "passphraseFailed";
})(PageStatus || (PageStatus = {}));
// WARNING: Keep synced with chrome/browser/ui/webui/settings/people_handler.cc.
export var TrustedVaultBannerState;
(function (TrustedVaultBannerState) {
    TrustedVaultBannerState[TrustedVaultBannerState["NOT_SHOWN"] = 0] = "NOT_SHOWN";
    TrustedVaultBannerState[TrustedVaultBannerState["OFFER_OPT_IN"] = 1] = "OFFER_OPT_IN";
    TrustedVaultBannerState[TrustedVaultBannerState["OPTED_IN"] = 2] = "OPTED_IN";
})(TrustedVaultBannerState || (TrustedVaultBannerState = {}));
/**
 * Key to be used with localStorage.
 */
const PROMO_IMPRESSION_COUNT_KEY = 'signin-promo-count';
export class SyncBrowserProxyImpl {
    // 
    getPromoImpressionCount() {
        return parseInt(window.localStorage.getItem(PROMO_IMPRESSION_COUNT_KEY), 10) ||
            0;
    }
    incrementPromoImpressionCount() {
        window.localStorage.setItem(PROMO_IMPRESSION_COUNT_KEY, (this.getPromoImpressionCount() + 1).toString());
    }
    // 
    attemptUserExit() {
        return chrome.send('AttemptUserExit');
    }
    turnOnSync() {
        return chrome.send('TurnOnSync');
    }
    turnOffSync() {
        return chrome.send('TurnOffSync');
    }
    // 
    startKeyRetrieval() {
        chrome.send('SyncStartKeyRetrieval');
    }
    getSyncStatus() {
        return sendWithPromise('SyncSetupGetSyncStatus');
    }
    getStoredAccounts() {
        return sendWithPromise('SyncSetupGetStoredAccounts');
    }
    didNavigateToSyncPage() {
        chrome.send('SyncSetupShowSetupUI');
    }
    didNavigateAwayFromSyncPage(didAbort) {
        chrome.send('SyncSetupDidClosePage', [didAbort]);
    }
    setSyncDatatypes(syncPrefs) {
        return sendWithPromise('SyncSetupSetDatatypes', JSON.stringify(syncPrefs));
    }
    setEncryptionPassphrase(passphrase) {
        return sendWithPromise('SyncSetupSetEncryptionPassphrase', passphrase);
    }
    setDecryptionPassphrase(passphrase) {
        return sendWithPromise('SyncSetupSetDecryptionPassphrase', passphrase);
    }
    startSyncingWithEmail(email, isDefaultPromoAccount) {
        chrome.send('SyncSetupStartSyncingWithEmail', [email, isDefaultPromoAccount]);
    }
    openActivityControlsUrl() {
        chrome.metricsPrivate.recordUserAction('Signin_AccountSettings_GoogleActivityControlsClicked');
    }
    sendSyncPrefsChanged() {
        chrome.send('SyncPrefsDispatch');
    }
    sendTrustedVaultBannerStateChanged() {
        chrome.send('SyncTrustedVaultBannerStateDispatch');
    }
    static getInstance() {
        return instance || (instance = new SyncBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
