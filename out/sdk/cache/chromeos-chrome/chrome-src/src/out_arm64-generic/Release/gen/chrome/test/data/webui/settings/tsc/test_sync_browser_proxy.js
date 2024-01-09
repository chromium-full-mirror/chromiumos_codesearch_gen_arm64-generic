// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { PageStatus, StatusAction } from 'chrome://settings/settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
export class TestSyncBrowserProxy extends TestBrowserProxy {
    constructor() {
        // clang-format off
        super([
            'didNavigateAwayFromSyncPage',
            'didNavigateToSyncPage',
            'getPromoImpressionCount',
            'getStoredAccounts',
            'getSyncStatus',
            'incrementPromoImpressionCount',
            'setSyncDatatypes',
            'setEncryptionPassphrase',
            'setDecryptionPassphrase',
            'sendSyncPrefsChanged',
            'sendTrustedVaultBannerStateChanged',
            'startSyncingWithEmail',
            // 
            // 
            'turnOnSync',
            'turnOffSync',
            // 
        ]);
        this.impressionCount_ = 0;
        this.resolveGetSyncStatus_ = null;
        this.syncStatus_ = {
            signedIn: true,
            signedInUsername: 'fakeUsername',
            statusAction: StatusAction.NO_ACTION,
        };
        // Settable fake data.
        this.encryptionPassphraseSuccess = false;
        this.decryptionPassphraseSuccess = false;
        this.storedAccounts = [];
        // clang-format on
    }
    get testSyncStatus() {
        return this.syncStatus_;
    }
    set testSyncStatus(syncStatus) {
        this.syncStatus_ = syncStatus;
        if (this.syncStatus_ && this.resolveGetSyncStatus_) {
            this.resolveGetSyncStatus_(this.syncStatus_);
            this.resolveGetSyncStatus_ = null;
        }
    }
    getSyncStatus() {
        this.methodCalled('getSyncStatus');
        if (this.syncStatus_) {
            return Promise.resolve(this.syncStatus_);
        }
        else {
            return new Promise((resolve) => {
                this.resolveGetSyncStatus_ = resolve;
            });
        }
    }
    getStoredAccounts() {
        this.methodCalled('getStoredAccounts');
        return Promise.resolve(this.storedAccounts);
    }
    // 
    startSyncingWithEmail(email, isDefaultPromoAccount) {
        this.methodCalled('startSyncingWithEmail', [email, isDefaultPromoAccount]);
    }
    setImpressionCount(count) {
        this.impressionCount_ = count;
    }
    getPromoImpressionCount() {
        this.methodCalled('getPromoImpressionCount');
        return this.impressionCount_;
    }
    incrementPromoImpressionCount() {
        this.methodCalled('incrementPromoImpressionCount');
    }
    didNavigateToSyncPage() {
        this.methodCalled('didNavigateToSyncPage');
    }
    didNavigateAwayFromSyncPage(didAbort) {
        this.methodCalled('didNavigateAwayFromSyncPage', didAbort);
    }
    setSyncDatatypes(syncPrefs) {
        this.methodCalled('setSyncDatatypes', syncPrefs);
        return Promise.resolve(PageStatus.CONFIGURE);
    }
    setEncryptionPassphrase(passphrase) {
        this.methodCalled('setEncryptionPassphrase', passphrase);
        return Promise.resolve(this.encryptionPassphraseSuccess);
    }
    setDecryptionPassphrase(passphrase) {
        this.methodCalled('setDecryptionPassphrase', passphrase);
        return Promise.resolve(this.decryptionPassphraseSuccess);
    }
    sendSyncPrefsChanged() {
        this.methodCalled('sendSyncPrefsChanged');
    }
    sendTrustedVaultBannerStateChanged() {
        this.methodCalled('sendTrustedVaultBannerStateChanged');
    }
    openActivityControlsUrl() { }
    startKeyRetrieval() { }
    // 
    attemptUserExit() { }
    turnOnSync() {
        this.methodCalled('turnOnSync');
    }
    turnOffSync() {
        this.methodCalled('turnOffSync');
    }
}
