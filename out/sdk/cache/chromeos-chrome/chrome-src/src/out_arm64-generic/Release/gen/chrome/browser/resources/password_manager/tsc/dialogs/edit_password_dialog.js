// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './add_password_dialog.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { Page, Router } from '../router.js';
import { ShowPasswordMixin } from '../show_password_mixin.js';
import { PASSWORD_NOTE_MAX_CHARACTER_COUNT, PASSWORD_NOTE_WARNING_CHARACTER_COUNT } from './add_password_dialog.js';
import { getTemplate } from './edit_password_dialog.html.js';
/**
 * Computes possible conflicting username by finding all passwords with
 * matching signonRealms. Returns map where key is the username and value is
 * human readable representation of signonRealm. Username is considered
 * conflicting if shares any domain with |currentPassword|.
 */
function getConflictingUsernames(currentPassword, passwords) {
    assert(currentPassword.affiliatedDomains);
    const currentSignonRealms = currentPassword.affiliatedDomains.map(domain => domain.signonRealm);
    return passwords.reduce(function (conflictingUsername, entry) {
        assert(entry.affiliatedDomains);
        const signonRealms = entry.affiliatedDomains.map(domain => domain.signonRealm);
        const signonRealm = signonRealms.filter(signonRealm => currentSignonRealms.includes(signonRealm))[0];
        if (signonRealm) {
            conflictingUsername.set(entry.username, entry.affiliatedDomains
                .find(domain => domain.signonRealm === signonRealm).name);
        }
        return conflictingUsername;
    }, new Map());
}
const EditPasswordDialogElementBase = ShowPasswordMixin(I18nMixin(PolymerElement));
export class EditPasswordDialogElement extends EditPasswordDialogElementBase {
    constructor() {
        super(...arguments);
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'edit-password-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            credential: Object,
            showRedirect: {
                type: Boolean,
                value: false,
            },
            username_: String,
            password_: String,
            note_: String,
            conflictingUsernames_: {
                type: Object,
                values: () => new Map(),
            },
            usernameErrorMessage_: {
                type: String,
                computed: 'computeUsernameErrorMessage_(credential, username_, ' +
                    'conflictingUsernames_)',
            },
            canEditPassword_: {
                type: Boolean,
                computed: 'computeCanEditPassword_(credential, username_, password_, ' +
                    'note_)',
            },
        };
    }
    ready() {
        super.ready();
        assert(this.credential.password);
        this.username_ = this.credential.username;
        this.password_ = this.credential.password;
        this.note_ = this.credential.note ?? '';
    }
    connectedCallback() {
        super.connectedCallback();
        this.setSavedPasswordsListener_ = credentialList => {
            // Passkeys and federated credential may have the same username as a
            // password, since they can be different ways to authenticate the same
            // user. Thus, ignore these when finding conflicting usernames.
            const passwordList = credentialList.filter(credential => !credential.isPasskey && !credential.federationText);
            this.conflictingUsernames_ =
                getConflictingUsernames(this.credential, passwordList);
        };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
    }
    computeUsernameErrorMessage_() {
        if (!this.conflictingUsernames_) {
            return null;
        }
        if (this.conflictingUsernames_.has(this.username_) &&
            this.username_ !== this.credential.username) {
            return this.i18n('usernameAlreadyUsed', this.conflictingUsernames_.get(this.username_));
        }
        return null;
    }
    doesUsernameExistAlready_() {
        return !!this.usernameErrorMessage_;
    }
    onCancel_() {
        this.$.dialog.close();
    }
    getFootnote_() {
        assert(this.credential.affiliatedDomains);
        return this.i18n('editPasswordFootnote', this.credential.affiliatedDomains[0]?.name ?? '');
    }
    showRedirect_() {
        return this.showRedirect && this.doesUsernameExistAlready_();
    }
    getViewExistingPasswordAriaDescription_() {
        if (!this.conflictingUsernames_) {
            return '';
        }
        return this.conflictingUsernames_.has(this.username_) ?
            this.i18n('viewExistingPasswordAriaDescription', this.username_, this.conflictingUsernames_.get(this.username_)) :
            '';
    }
    onViewExistingPasswordClick_(e) {
        e.preventDefault();
        assert(this.conflictingUsernames_.has(this.username_));
        Router.getInstance().navigateTo(Page.PASSWORD_DETAILS, this.conflictingUsernames_.get(this.username_));
        this.$.dialog.close();
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
    computeCanEditPassword_() {
        return !this.doesUsernameExistAlready_() && !!this.password_ &&
            this.password_.length > 0 && !this.isNoteInputInvalid_();
    }
    onEditClick_() {
        assert(this.computeCanEditPassword_());
        this.credential.password = this.password_;
        this.credential.username = this.username_;
        this.credential.note = this.note_;
        PasswordManagerImpl.getInstance()
            .changeCredential(this.credential)
            .finally(() => {
            this.$.dialog.close();
        });
    }
}
customElements.define(EditPasswordDialogElement.is, EditPasswordDialogElement);
