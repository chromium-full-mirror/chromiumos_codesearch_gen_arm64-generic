// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { Page, Router } from '../router.js';
import { ShowPasswordMixin } from '../show_password_mixin.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { getTemplate } from './add_password_dialog.html.js';
/**
 * Represents different user interactions related to adding credential from the
 * settings. Should be kept in sync with
 * |metrics_util::AddCredentialFromSettingsUserInteractions|. These values are
 * persisted to logs. Entries should not be renumbered and numeric values should
 * never be reused.
 */
export var AddCredentialFromSettingsUserInteractions;
(function (AddCredentialFromSettingsUserInteractions) {
    // Used when the add credential dialog is opened from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_OPENED"] = 0] = "ADD_DIALOG_OPENED";
    // Used when the add credential dialog is closed from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["ADD_DIALOG_CLOSED"] = 1] = "ADD_DIALOG_CLOSED";
    // Used when a new credential is added from the settings .
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["CREDENTIAL_ADDED"] = 2] = "CREDENTIAL_ADDED";
    // Used when a new credential is being added from the add credential dialog in
    // settings and another credential exists with the same username/website
    // combination.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATED_CREDENTIAL_ENTERED"] = 3] = "DUPLICATED_CREDENTIAL_ENTERED";
    // Used when an existing credential is viewed while adding a new credential
    // from the settings.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["DUPLICATE_CREDENTIAL_VIEWED"] = 4] = "DUPLICATE_CREDENTIAL_VIEWED";
    // Must be last.
    AddCredentialFromSettingsUserInteractions[AddCredentialFromSettingsUserInteractions["COUNT"] = 5] = "COUNT";
})(AddCredentialFromSettingsUserInteractions || (AddCredentialFromSettingsUserInteractions = {}));
function recordAddCredentialInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.AddCredentialFromSettings.UserAction2', interaction, AddCredentialFromSettingsUserInteractions.COUNT);
}
/**
 * When user enters more than or equal to 900 characters in the note field, a
 * footer will be displayed below the note to warn the user.
 */
export const PASSWORD_NOTE_WARNING_CHARACTER_COUNT = 900;
/**
 * When user enters more than 1000 characters, the note will become invalid and
 * save button will be disabled.
 */
export const PASSWORD_NOTE_MAX_CHARACTER_COUNT = 1000;
const AddPasswordDialogElementBase = UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement)));
function getUsernamesByOrigin(passwords) {
    // Group existing usernames by signonRealm.
    return passwords.reduce(function (usernamesByOrigin, entry) {
        assert(entry.affiliatedDomains);
        for (const domain of entry.affiliatedDomains) {
            if (!usernamesByOrigin.has(domain.signonRealm)) {
                usernamesByOrigin.set(domain.signonRealm, new Set());
            }
            usernamesByOrigin.get(domain.signonRealm).add(entry.username);
        }
        return usernamesByOrigin;
    }, new Map());
}
export class AddPasswordDialogElement extends AddPasswordDialogElementBase {
    constructor() {
        super(...arguments);
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'add-password-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            website_: {
                type: String,
                value: '',
            },
            username_: {
                type: String,
                value: '',
            },
            password_: {
                type: String,
                value: '',
            },
            note_: {
                type: String,
                value: '',
            },
            urlCollection_: Object,
            usernamesBySignonRealm_: {
                type: Object,
                values: () => new Map(),
            },
            /**
             * Error message if the website input is invalid.
             */
            websiteErrorMessage_: { type: String, value: null },
            usernameErrorMessage_: {
                type: String,
                computed: 'computeUsernameErrorMessage_(urlCollection_, username_, ' +
                    'usernamesBySignonRealm_)',
            },
            isPasswordInvalid_: {
                type: Boolean,
                value: false,
            },
            canAddPassword_: {
                type: Boolean,
                computed: 'computeCanAddPassword_(websiteErrorMessage_, username_, ' +
                    'password_, note_)',
            },
            storeOptionAccountValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.ACCOUNT,
                readonly: true,
            },
            storeOptionDeviceValue_: {
                type: String,
                value: chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
                readonly: true,
            },
        };
    }
    static get observers() {
        return [
            'updateDefaultStore_(isAccountStoreUser)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.setSavedPasswordsListener_ = passwordList => {
            this.usernamesBySignonRealm_ = getUsernamesByOrigin(passwordList);
        };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_OPENED);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
    }
    updateDefaultStore_() {
        if (this.isAccountStoreUser) {
            PasswordManagerImpl.getInstance().isAccountStoreDefault().then(isAccountStoreDefault => {
                this.$.storePicker.value = isAccountStoreDefault ?
                    this.storeOptionAccountValue_ :
                    this.storeOptionDeviceValue_;
            });
        }
    }
    closeDialog_() {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.ADD_DIALOG_CLOSED);
        this.$.dialog.close();
    }
    /**
     * Helper function that checks whether the entered url is valid.
     */
    async validateWebsite_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = null;
            return;
        }
        PasswordManagerImpl.getInstance()
            .getUrlCollection(this.website_)
            .then(urlCollection => {
            this.urlCollection_ = urlCollection;
            this.websiteErrorMessage_ =
                !urlCollection ? this.i18n('notValidWebsite') : null;
        })
            .catch(() => this.websiteErrorMessage_ = this.i18n('notValidWebsite'));
    }
    onWebsiteInputBlur_() {
        if (this.website_.length === 0) {
            this.websiteErrorMessage_ = '';
        }
        else if (!this.websiteErrorMessage_ && !this.website_.includes('.')) {
            this.websiteErrorMessage_ =
                this.i18n('missingTLD', `${this.website_}.com`);
        }
    }
    isWebsiteInputInvalid_() {
        return this.websiteErrorMessage_ !== null;
    }
    showWebsiteError_() {
        return !!this.websiteErrorMessage_ && this.websiteErrorMessage_.length > 0;
    }
    computeUsernameErrorMessage_() {
        const signonRealm = this.urlCollection_?.signonRealm;
        if (!signonRealm) {
            return null;
        }
        if (this.usernamesBySignonRealm_.has(signonRealm) &&
            this.usernamesBySignonRealm_.get(signonRealm).has(this.username_)) {
            recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions
                .DUPLICATED_CREDENTIAL_ENTERED);
            return this.i18n('usernameAlreadyUsed', this.website_);
        }
        return null;
    }
    doesUsernameExistAlready_() {
        return !!this.usernameErrorMessage_;
    }
    onPasswordInput_() {
        this.isPasswordInvalid_ = this.password_.length === 0;
    }
    isNoteInputInvalid_() {
        return this.note_.length >= PASSWORD_NOTE_MAX_CHARACTER_COUNT;
    }
    getFirstNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCountWarning', PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    getSecondNoteFooter_() {
        return this.note_.length < PASSWORD_NOTE_WARNING_CHARACTER_COUNT ?
            '' :
            this.i18n('passwordNoteCharacterCount', this.note_.length, PASSWORD_NOTE_MAX_CHARACTER_COUNT);
    }
    computeCanAddPassword_() {
        if (this.isWebsiteInputInvalid_() || this.website_.length === 0) {
            return false;
        }
        if (this.doesUsernameExistAlready_()) {
            return false;
        }
        if (this.password_.length === 0) {
            return false;
        }
        if (this.isNoteInputInvalid_()) {
            return false;
        }
        return true;
    }
    onAddClick_() {
        assert(this.computeCanAddPassword_());
        assert(this.urlCollection_);
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.CREDENTIAL_ADDED);
        const useAccountStore = this.isAccountStoreUser &&
            (this.$.storePicker.value === this.storeOptionAccountValue_);
        if (!this.$.storePicker.hidden) {
            chrome.metricsPrivate.recordBoolean('PasswordManager.AddCredentialFromSettings.AccountStoreUsed2', useAccountStore);
        }
        PasswordManagerImpl.getInstance()
            .addPassword({
            url: this.urlCollection_.signonRealm,
            username: this.username_,
            password: this.password_,
            note: this.note_,
            useAccountStore: useAccountStore,
        })
            .then(() => {
            this.closeDialog_();
        })
            .catch(() => { });
    }
    getViewExistingPasswordAriaDescription_() {
        return this.urlCollection_ ?
            this.i18n('viewExistingPasswordAriaDescription', this.username_, this.urlCollection_.shown) :
            '';
    }
    onViewExistingPasswordClick_(e) {
        recordAddCredentialInteraction(AddCredentialFromSettingsUserInteractions.DUPLICATE_CREDENTIAL_VIEWED);
        e.preventDefault();
        Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.urlCollection_?.shown);
        this.closeDialog_();
    }
}
customElements.define(AddPasswordDialogElement.is, AddPasswordDialogElement);
