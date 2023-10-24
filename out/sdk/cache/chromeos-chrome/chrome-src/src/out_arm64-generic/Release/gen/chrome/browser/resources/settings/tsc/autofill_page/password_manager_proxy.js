// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Represents different referrers when navigating to the Password Check page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckReferrer in enums.xml and
 * password_check_referrer.h.
 */
export var PasswordCheckReferrer;
(function (PasswordCheckReferrer) {
    PasswordCheckReferrer[PasswordCheckReferrer["SAFETY_CHECK"] = 0] = "SAFETY_CHECK";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_SETTINGS"] = 1] = "PASSWORD_SETTINGS";
    PasswordCheckReferrer[PasswordCheckReferrer["PHISH_GUARD_DIALOG"] = 2] = "PHISH_GUARD_DIALOG";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_BREACH_DIALOG"] = 3] = "PASSWORD_BREACH_DIALOG";
    // Must be last.
    PasswordCheckReferrer[PasswordCheckReferrer["COUNT"] = 4] = "COUNT";
})(PasswordCheckReferrer || (PasswordCheckReferrer = {}));
// WARNING: Keep synced with
// chrome/browser/ui/webui/settings/password_manager_handler.cc.
export var PasswordManagerPage;
(function (PasswordManagerPage) {
    PasswordManagerPage[PasswordManagerPage["PASSWORDS"] = 0] = "PASSWORDS";
    PasswordManagerPage[PasswordManagerPage["CHECKUP"] = 1] = "CHECKUP";
})(PasswordManagerPage || (PasswordManagerPage = {}));
/**
 * Implementation that accesses the private API.
 */
export class PasswordManagerImpl {
    recordPasswordsPageAccessInSettings() {
        chrome.passwordsPrivate.recordPasswordsPageAccessInSettings();
    }
    /** override */
    recordPasswordCheckReferrer(referrer) {
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.PasswordCheckReferrer', referrer, PasswordCheckReferrer.COUNT);
    }
    showPasswordManager(page) {
        chrome.send('showPasswordManager', [page]);
    }
    static getInstance() {
        return instance || (instance = new PasswordManagerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
