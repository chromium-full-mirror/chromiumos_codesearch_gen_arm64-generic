// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PageStatus, StatusAction } from 'chrome://os-settings/os_settings.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestSyncBrowserProxy extends TestBrowserProxy {
    impressionCount_ = 0;
    storedAccounts_ = [];
    syncStatus_ = {
        signedIn: true,
        signedInUsername: 'fakeUsername',
        statusAction: StatusAction.NO_ACTION,
    };
    constructor() {
        super([
            'didNavigateAwayFromSyncPage',
            'didNavigateToSyncPage',
            'getPromoImpressionCount',
            'getStoredAccounts',
            'getSyncStatus',
            'incrementPromoImpressionCount',
            'pauseSync',
            'sendSyncPrefsChanged',
            'sendTrustedVaultBannerStateChanged',
            'setEncryptionPassphrase',
            'setDecryptionPassphrase',
            'setSyncDatatypes',
            'setSyncEncryption',
            'signOut',
            'startSignIn',
            'startSyncingWithEmail',
            'turnOnSync',
            'turnOffSync',
        ]);
    }
    getSyncStatus() {
        this.methodCalled('getSyncStatus');
        return Promise.resolve(this.syncStatus_);
    }
    getStoredAccounts() {
        this.methodCalled('getStoredAccounts');
        return Promise.resolve(this.storedAccounts_);
    }
    signOut(deleteProfile) {
        this.methodCalled('signOut', deleteProfile);
    }
    pauseSync() {
        this.methodCalled('pauseSync');
    }
    startSignIn() {
        this.methodCalled('startSignIn');
    }
    startSyncingWithEmail(email, isDefaultPromoAccount) {
        this.methodCalled('startSyncingWithEmail', [email, isDefaultPromoAccount]);
    }
    setImpressionCount(count) {
        this.impressionCount_ = count;
    }
    turnOnSync() {
        this.methodCalled('turnOnSync');
    }
    turnOffSync() {
        this.methodCalled('turnOffSync');
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
    didNavigateAwayFromSyncPage(abort) {
        this.methodCalled('didNavigateAwayFromSyncPage', abort);
    }
    setSyncDatatypes(syncPrefs) {
        this.methodCalled('setSyncDatatypes', syncPrefs);
        return Promise.resolve(PageStatus.CONFIGURE);
    }
    setSyncEncryption(syncPrefs) {
        this.methodCalled('setSyncEncryption', syncPrefs);
        return Promise.resolve(PageStatus.CONFIGURE);
    }
    sendTrustedVaultBannerStateChanged() {
        this.methodCalled('sendTrustedVaultBannerStateChanged');
    }
    setEncryptionPassphrase(passphrase) {
        this.methodCalled('setEncryptionPassphrase', passphrase);
        return Promise.resolve(true);
    }
    setDecryptionPassphrase(passphrase) {
        this.methodCalled('setDecryptionPassphrase', passphrase);
        return Promise.resolve(true);
    }
    sendSyncPrefsChanged() {
        this.methodCalled('sendSyncPrefsChanged');
    }
    attemptUserExit() { }
    openActivityControlsUrl() { }
    startKeyRetrieval() { }
}
