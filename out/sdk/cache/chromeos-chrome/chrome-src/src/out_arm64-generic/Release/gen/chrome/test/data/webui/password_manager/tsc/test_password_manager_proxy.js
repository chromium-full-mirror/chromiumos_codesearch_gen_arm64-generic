// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { makeFamilyFetchResults, makePasswordCheckStatus } from './test_util.js';
/**
 * Test implementation
 */
export class TestPasswordManagerProxy extends TestBrowserProxy {
    data;
    listeners;
    requestCredentialsDetailsResponse_ = null;
    importResults_ = {
        status: chrome.passwordsPrivate.ImportResultsStatus.SUCCESS,
        numberImported: 0,
        displayedEntries: [],
        fileName: '',
    };
    constructor() {
        super([
            'addPassword',
            'changeCredential',
            'cancelExportPasswords',
            'continueImport',
            'dismissSafetyHubPasswordMenuNotification',
            'exportPasswords',
            'extendAuthValidity',
            'fetchFamilyMembers',
            'importPasswords',
            'isAccountStoreDefault',
            'isOptedInForAccountStorage',
            'getBlockedSitesList',
            'getCredentialGroups',
            'getCredentialsWithReusedPassword',
            'getInsecureCredentials',
            'getPasswordCheckStatus',
            'getSavedPasswordList',
            'getUrlCollection',
            'movePasswordsToAccount',
            'muteInsecureCredential',
            'optInForAccountStorage',
            'recordPasswordCheckInteraction',
            'recordPasswordViewInteraction',
            'removeBlockedSite',
            'removeCredential',
            'resetImporter',
            'requestCredentialsDetails',
            'requestExportProgressStatus',
            'requestPlaintextPassword',
            'showAddShortcutDialog',
            'showExportedFileInShell',
            'sharePassword',
            'startBulkPasswordCheck',
            'switchBiometricAuthBeforeFillingState',
            'undoRemoveSavedPasswordOrException',
            'unmuteInsecureCredential',
        ]);
        // Set these to have non-empty data.
        this.data = {
            blockedSites: [],
            checkStatus: makePasswordCheckStatus({}),
            credentialWithReusedPassword: [],
            familyFetchResults: makeFamilyFetchResults(),
            groups: [],
            insecureCredentials: [],
            isOptedInAccountStorage: false,
            isAccountStorageDefault: false,
            passwords: [],
        };
        // Holds listeners so they can be called when needed.
        this.listeners = {
            accountStorageOptInStateListener: null,
            blockedSitesListChangedListener: null,
            insecureCredentialsListener: null,
            passwordCheckStatusListener: null,
            passwordsFileExportProgressListener: null,
            passwordManagerAuthTimeoutListener: null,
            savedPasswordListChangedListener: null,
        };
    }
    addSavedPasswordListChangedListener(listener) {
        this.listeners.savedPasswordListChangedListener = listener;
    }
    removeSavedPasswordListChangedListener(_listener) {
        this.listeners.savedPasswordListChangedListener = null;
    }
    addBlockedSitesListChangedListener(listener) {
        this.listeners.blockedSitesListChangedListener = listener;
    }
    removeBlockedSitesListChangedListener(_listener) {
        this.listeners.blockedSitesListChangedListener = null;
    }
    addPasswordCheckStatusListener(listener) {
        this.listeners.passwordCheckStatusListener = listener;
    }
    removePasswordCheckStatusListener(_listener) {
        this.listeners.passwordCheckStatusListener = null;
    }
    addInsecureCredentialsListener(listener) {
        this.listeners.insecureCredentialsListener = listener;
    }
    removeInsecureCredentialsListener(_listener) {
        this.listeners.insecureCredentialsListener = null;
    }
    getSavedPasswordList() {
        this.methodCalled('getSavedPasswordList');
        return Promise.resolve(this.data.passwords.slice());
    }
    getCredentialGroups() {
        this.methodCalled('getCredentialGroups');
        return Promise.resolve(this.data.groups.slice());
    }
    getBlockedSitesList() {
        this.methodCalled('getBlockedSitesList');
        return Promise.resolve(this.data.blockedSites.slice());
    }
    getPasswordCheckStatus() {
        this.methodCalled('getPasswordCheckStatus');
        return Promise.resolve(this.data.checkStatus);
    }
    getInsecureCredentials() {
        this.methodCalled('getInsecureCredentials');
        return Promise.resolve(this.data.insecureCredentials.slice());
    }
    getCredentialsWithReusedPassword() {
        this.methodCalled('getCredentialsWithReusedPassword');
        return Promise.resolve(this.data.credentialWithReusedPassword.slice());
    }
    startBulkPasswordCheck() {
        this.methodCalled('startBulkPasswordCheck');
        if (this.data.checkStatus.state ===
            chrome.passwordsPrivate.PasswordCheckState.NO_PASSWORDS) {
            return Promise.reject(new Error('error'));
        }
        return Promise.resolve();
    }
    recordPasswordCheckInteraction(interaction) {
        this.methodCalled('recordPasswordCheckInteraction', interaction);
    }
    recordPasswordViewInteraction(interaction) {
        this.methodCalled('recordPasswordViewInteraction', interaction);
    }
    muteInsecureCredential(insecureCredential) {
        this.methodCalled('muteInsecureCredential', insecureCredential);
    }
    unmuteInsecureCredential(insecureCredential) {
        this.methodCalled('unmuteInsecureCredential', insecureCredential);
    }
    showAddShortcutDialog() {
        this.methodCalled('showAddShortcutDialog');
    }
    requestCredentialsDetails(ids) {
        this.methodCalled('requestCredentialsDetails', ids);
        if (!this.requestCredentialsDetailsResponse_) {
            return Promise.reject(new Error('Could not obtain credential details'));
        }
        return Promise.resolve(this.requestCredentialsDetailsResponse_);
    }
    setRequestCredentialsDetailsResponse(credentials) {
        this.requestCredentialsDetailsResponse_ = credentials;
    }
    requestPlaintextPassword(id, reason) {
        this.methodCalled('requestPlaintextPassword', { id, reason });
        return Promise.resolve('plainTextPassword');
    }
    addPassword(options) {
        this.methodCalled('addPassword', options);
        return Promise.resolve();
    }
    changeCredential(credential) {
        this.methodCalled('changeCredential', credential);
        return Promise.resolve();
    }
    removeCredential(id, fromStores) {
        this.methodCalled('removeCredential', { id, fromStores });
    }
    removeBlockedSite(id) {
        this.methodCalled('removeBlockedSite', id);
    }
    requestExportProgressStatus() {
        this.methodCalled('requestExportProgressStatus');
        return Promise.resolve(chrome.passwordsPrivate.ExportProgressStatus.NOT_STARTED);
    }
    exportPasswords() {
        this.methodCalled('exportPasswords');
        return Promise.resolve();
    }
    addPasswordsFileExportProgressListener(listener) {
        this.listeners.passwordsFileExportProgressListener = listener;
    }
    removePasswordsFileExportProgressListener(_listener) {
        this.listeners.passwordsFileExportProgressListener = null;
    }
    cancelExportPasswords() {
        this.methodCalled('cancelExportPasswords');
    }
    switchBiometricAuthBeforeFillingState() {
        this.methodCalled('switchBiometricAuthBeforeFillingState');
    }
    undoRemoveSavedPasswordOrException() {
        this.methodCalled('undoRemoveSavedPasswordOrException');
    }
    showExportedFileInShell() {
        this.methodCalled('showExportedFileInShell');
    }
    getUrlCollection(url) {
        this.methodCalled('getUrlCollection', url);
        if (url.includes('www')) {
            return Promise.resolve({
                signonRealm: `https://${url}/login`,
                shown: url,
                link: `https://${url}/login`,
            });
        }
        else {
            return Promise.reject();
        }
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        this.listeners.passwordManagerAuthTimeoutListener = listener;
    }
    removePasswordManagerAuthTimeoutListener(_listener) {
        this.listeners.passwordManagerAuthTimeoutListener = null;
    }
    extendAuthValidity() {
        this.methodCalled('extendAuthValidity');
    }
    addAccountStorageOptInStateListener(listener) {
        this.listeners.accountStorageOptInStateListener = listener;
    }
    removeAccountStorageOptInStateListener(_listener) {
        this.listeners.accountStorageOptInStateListener = null;
    }
    fetchFamilyMembers() {
        this.methodCalled('fetchFamilyMembers');
        return Promise.resolve(this.data.familyFetchResults);
    }
    sharePassword(id, recipients) {
        this.methodCalled('sharePassword', id, recipients);
    }
    /**
     * Sets the value to be returned by importPasswords.
     */
    setImportResults(results) {
        this.importResults_ = results;
    }
    importPasswords(toStore) {
        this.methodCalled('importPasswords', toStore);
        return Promise.resolve(this.importResults_);
    }
    continueImport(selectedIds) {
        this.methodCalled('continueImport', selectedIds);
        return Promise.resolve(this.importResults_);
    }
    resetImporter(deleteFile) {
        this.methodCalled('resetImporter', deleteFile);
        return Promise.resolve();
    }
    isOptedInForAccountStorage() {
        this.methodCalled('isOptedInForAccountStorage');
        return Promise.resolve(this.data.isOptedInAccountStorage);
    }
    optInForAccountStorage(optIn) {
        this.methodCalled('optInForAccountStorage');
        this.data.isOptedInAccountStorage = optIn;
    }
    isAccountStoreDefault() {
        this.methodCalled('isAccountStoreDefault');
        return Promise.resolve(this.data.isAccountStorageDefault);
    }
    movePasswordsToAccount(ids) {
        this.methodCalled('movePasswordsToAccount', ids);
    }
    dismissSafetyHubPasswordMenuNotification() {
        this.methodCalled('dismissSafetyHubPasswordMenuNotification');
    }
}
