// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Represents different interactions the user can perform on the Password Check
 * page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckInteraction in enums.xml and
 * password_manager_metrics_util.h.
 */
export var PasswordCheckInteraction;
(function (PasswordCheckInteraction) {
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_AUTOMATICALLY"] = 0] = "START_CHECK_AUTOMATICALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["START_CHECK_MANUALLY"] = 1] = "START_CHECK_MANUALLY";
    PasswordCheckInteraction[PasswordCheckInteraction["STOP_CHECK"] = 2] = "STOP_CHECK";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD"] = 3] = "CHANGE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["EDIT_PASSWORD"] = 4] = "EDIT_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["REMOVE_PASSWORD"] = 5] = "REMOVE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["SHOW_PASSWORD"] = 6] = "SHOW_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["MUTE_PASSWORD"] = 7] = "MUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["UNMUTE_PASSWORD"] = 8] = "UNMUTE_PASSWORD";
    PasswordCheckInteraction[PasswordCheckInteraction["CHANGE_PASSWORD_AUTOMATICALLY"] = 9] = "CHANGE_PASSWORD_AUTOMATICALLY";
    // Must be last.
    PasswordCheckInteraction[PasswordCheckInteraction["COUNT"] = 10] = "COUNT";
})(PasswordCheckInteraction || (PasswordCheckInteraction = {}));
/**
 * Should be kept in sync with
 * |password_manager::metrics_util::PasswordViewPageInteractions|.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export var PasswordViewPageInteractions;
(function (PasswordViewPageInteractions) {
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_ROW_CLICKED"] = 0] = "CREDENTIAL_ROW_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_FOUND"] = 1] = "CREDENTIAL_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_NOT_FOUND"] = 2] = "CREDENTIAL_NOT_FOUND";
    PasswordViewPageInteractions[PasswordViewPageInteractions["USERNAME_COPY_BUTTON_CLICKED"] = 3] = "USERNAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_COPY_BUTTON_CLICKED"] = 4] = "PASSWORD_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_SHOW_BUTTON_CLICKED"] = 5] = "PASSWORD_SHOW_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_EDIT_BUTTON_CLICKED"] = 6] = "PASSWORD_EDIT_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSWORD_DELETE_BUTTON_CLICKED"] = 7] = "PASSWORD_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_EDITED"] = 8] = "CREDENTIAL_EDITED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_EDIT_DIALOG"] = 9] = "TIMED_OUT_IN_EDIT_DIALOG";
    PasswordViewPageInteractions[PasswordViewPageInteractions["TIMED_OUT_IN_VIEW_PAGE"] = 10] = "TIMED_OUT_IN_VIEW_PAGE";
    PasswordViewPageInteractions[PasswordViewPageInteractions["CREDENTIAL_REQUESTED_BY_URL"] = 11] = "CREDENTIAL_REQUESTED_BY_URL";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED"] = 12] = "PASSKEY_DISPLAY_NAME_COPY_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_DELETE_BUTTON_CLICKED"] = 13] = "PASSKEY_DELETE_BUTTON_CLICKED";
    PasswordViewPageInteractions[PasswordViewPageInteractions["PASSKEY_EDIT_BUTTON_CLICKED"] = 14] = "PASSKEY_EDIT_BUTTON_CLICKED";
    // Must be last.
    PasswordViewPageInteractions[PasswordViewPageInteractions["COUNT"] = 15] = "COUNT";
})(PasswordViewPageInteractions || (PasswordViewPageInteractions = {}));
/**
 * Implementation that accesses the private API.
 */
export class PasswordManagerImpl {
    addSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.addListener(listener);
    }
    removeSavedPasswordListChangedListener(listener) {
        chrome.passwordsPrivate.onSavedPasswordsListChanged.removeListener(listener);
    }
    addBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.addListener(listener);
    }
    removeBlockedSitesListChangedListener(listener) {
        chrome.passwordsPrivate.onPasswordExceptionsListChanged.removeListener(listener);
    }
    addPasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.addListener(listener);
    }
    removePasswordCheckStatusListener(listener) {
        chrome.passwordsPrivate.onPasswordCheckStatusChanged.removeListener(listener);
    }
    addInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.addListener(listener);
    }
    removeInsecureCredentialsListener(listener) {
        chrome.passwordsPrivate.onInsecureCredentialsChanged.removeListener(listener);
    }
    getSavedPasswordList() {
        return chrome.passwordsPrivate.getSavedPasswordList().catch(() => []);
    }
    getCredentialGroups() {
        return chrome.passwordsPrivate.getCredentialGroups();
    }
    getBlockedSitesList() {
        return chrome.passwordsPrivate.getPasswordExceptionList().catch(() => []);
    }
    getPasswordCheckStatus() {
        return chrome.passwordsPrivate.getPasswordCheckStatus();
    }
    getInsecureCredentials() {
        return chrome.passwordsPrivate.getInsecureCredentials();
    }
    getCredentialsWithReusedPassword() {
        return chrome.passwordsPrivate.getCredentialsWithReusedPassword();
    }
    startBulkPasswordCheck() {
        return chrome.passwordsPrivate.startPasswordCheck();
    }
    recordPasswordCheckInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.UserAction', interaction, PasswordCheckInteraction.COUNT);
    }
    recordPasswordViewInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordViewPage.UserActions', interaction, PasswordViewPageInteractions.COUNT);
    }
    showAddShortcutDialog() {
        chrome.passwordsPrivate.showAddShortcutDialog();
    }
    requestCredentialsDetails(ids) {
        return chrome.passwordsPrivate.requestCredentialsDetails(ids);
    }
    requestPlaintextPassword(id, reason) {
        return chrome.passwordsPrivate.requestPlaintextPassword(id, reason);
    }
    addPassword(options) {
        return chrome.passwordsPrivate.addPassword(options);
    }
    changeCredential(credential) {
        return chrome.passwordsPrivate.changeCredential(credential);
    }
    removeCredential(id, fromStores) {
        chrome.passwordsPrivate.removeCredential(id, fromStores);
    }
    removeBlockedSite(id) {
        chrome.passwordsPrivate.removePasswordException(id);
    }
    muteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.muteInsecureCredential(insecureCredential);
    }
    unmuteInsecureCredential(insecureCredential) {
        chrome.passwordsPrivate.unmuteInsecureCredential(insecureCredential);
    }
    undoRemoveSavedPasswordOrException() {
        chrome.passwordsPrivate.undoRemoveSavedPasswordOrException();
    }
    fetchFamilyMembers() {
        return chrome.passwordsPrivate.fetchFamilyMembers();
    }
    sharePassword(id, recipients) {
        chrome.passwordsPrivate.sharePassword(id, recipients);
    }
    importPasswords(toStore) {
        return chrome.passwordsPrivate.importPasswords(toStore);
    }
    continueImport(selectedIds) {
        return chrome.passwordsPrivate.continueImport(selectedIds);
    }
    resetImporter(deleteFile) {
        return chrome.passwordsPrivate.resetImporter(deleteFile);
    }
    requestExportProgressStatus() {
        return chrome.passwordsPrivate.requestExportProgressStatus();
    }
    exportPasswords() {
        return chrome.passwordsPrivate.exportPasswords();
    }
    addPasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.addListener(listener);
    }
    removePasswordsFileExportProgressListener(listener) {
        chrome.passwordsPrivate.onPasswordsFileExportProgress.removeListener(listener);
    }
    switchBiometricAuthBeforeFillingState() {
        chrome.passwordsPrivate.switchBiometricAuthBeforeFillingState();
    }
    showExportedFileInShell(filePath) {
        chrome.passwordsPrivate.showExportedFileInShell(filePath);
    }
    getUrlCollection(url) {
        return chrome.passwordsPrivate.getUrlCollection(url);
    }
    addPasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.addListener(listener);
    }
    removePasswordManagerAuthTimeoutListener(listener) {
        chrome.passwordsPrivate.onPasswordManagerAuthTimeout.removeListener(listener);
    }
    extendAuthValidity() {
        chrome.passwordsPrivate.extendAuthValidity();
    }
    addAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.addListener(listener);
    }
    removeAccountStorageOptInStateListener(listener) {
        chrome.passwordsPrivate.onAccountStorageOptInStateChanged.removeListener(listener);
    }
    isOptedInForAccountStorage() {
        return chrome.passwordsPrivate.isOptedInForAccountStorage();
    }
    optInForAccountStorage(optIn) {
        chrome.passwordsPrivate.optInForAccountStorage(optIn);
    }
    isAccountStoreDefault() {
        return chrome.passwordsPrivate.isAccountStoreDefault();
    }
    movePasswordsToAccount(ids) {
        chrome.passwordsPrivate.movePasswordsToAccount(ids);
    }
    dismissSafetyHubPasswordMenuNotification() {
        chrome.send('dismissSafetyHubPasswordMenuNotification');
    }
    static getInstance() {
        return instance || (instance = new PasswordManagerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
