// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input_style.css.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import '../shared_style.css.js';
import './credential_details_card.css.js';
import '../dialogs/edit_password_dialog.js';
import '../dialogs/multi_store_delete_password_dialog.js';
import '../sharing/share_password_flow.js';
import '../sharing/metrics_utils.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl, PasswordViewPageInteractions } from '../password_manager_proxy.js';
import { PasswordSharingActions, recordPasswordSharingInteraction } from '../sharing/metrics_utils.js';
import { ShowPasswordMixin } from '../show_password_mixin.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { getTemplate } from './password_details_card.html.js';
export const PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID = 'PasswordManagerUI::kSharePasswordElementId';
const PasswordDetailsCardElementBase = HelpBubbleMixin(UserUtilMixin(ShowPasswordMixin(I18nMixin(PolymerElement))));
export class PasswordDetailsCardElement extends PasswordDetailsCardElementBase {
    static get is() {
        return 'password-details-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            password: Object,
            groupName: String,
            iconUrl: String,
            toastMessage_: String,
            usernameCopyInteraction_: {
                type: PasswordViewPageInteractions,
                value() {
                    return PasswordViewPageInteractions.USERNAME_COPY_BUTTON_CLICKED;
                },
            },
            showEditPasswordDialog_: Boolean,
            showDeletePasswordDialog_: Boolean,
            showShareButton_: {
                type: Boolean,
                computed: 'computeShowShareButton_(enableSendPasswords_, ' +
                    'isOptedInForAccountStorage, isSyncingPasswords)',
            },
            showShareFlow_: {
                type: Boolean,
                value: false,
            },
            enableSendPasswords_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableSendPasswords');
                },
            },
        };
    }
    isFederated_() {
        return !!this.password.federationText;
    }
    getPasswordLabel_() {
        return this.isFederated_() ? this.i18n('federationLabel') :
            this.i18n('passwordLabel');
    }
    getPasswordValue_() {
        return this.isFederated_() ? this.password.federationText :
            this.password.password;
    }
    getPasswordType_() {
        return this.isFederated_() ? 'text' : this.getPasswordInputType();
    }
    onCopyPasswordClick_() {
        PasswordManagerImpl.getInstance()
            .requestPlaintextPassword(this.password.id, chrome.passwordsPrivate.PlaintextReason.COPY)
            .then(() => this.showToast_(this.i18n('passwordCopiedToClipboard')))
            .catch(() => { });
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_COPY_BUTTON_CLICKED);
    }
    onShowPasswordClick_() {
        this.onShowHidePasswordButtonClick();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_SHOW_BUTTON_CLICKED);
    }
    onDeleteClick_() {
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_DELETE_BUTTON_CLICKED);
        if (this.password.storedIn ===
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT) {
            this.showDeletePasswordDialog_ = true;
            return;
        }
        PasswordManagerImpl.getInstance().removeCredential(this.password.id, this.password.storedIn);
        this.dispatchEvent(new CustomEvent('password-removed', {
            bubbles: true,
            composed: true,
            detail: {
                removedFromStores: this.password.storedIn,
            },
        }));
    }
    showToast_(message) {
        this.toastMessage_ = message;
        this.$.toast.show();
    }
    onEditClicked_() {
        this.showEditPasswordDialog_ = true;
        this.extendAuthValidity_();
        PasswordManagerImpl.getInstance().recordPasswordViewInteraction(PasswordViewPageInteractions.PASSWORD_EDIT_BUTTON_CLICKED);
    }
    onEditPasswordDialogClosed_() {
        // Only note is notified because updating username or password triggers
        // recomputing of an id which updates the whole list of displayed passwords.
        this.notifyPath('password.note');
        this.showEditPasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onDeletePasswordDialogClosed_() {
        this.showDeletePasswordDialog_ = false;
        this.extendAuthValidity_();
    }
    onShareButtonClick_() {
        recordPasswordSharingInteraction(PasswordSharingActions.PASSWORD_DETAILS_SHARE_BUTTON_CLICKED);
        this.hideHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID);
        this.showShareFlow_ = true;
    }
    onShareFlowDone_() {
        this.showShareFlow_ = false;
    }
    extendAuthValidity_() {
        PasswordManagerImpl.getInstance().extendAuthValidity();
    }
    getDomainLabel_() {
        const hasApps = this.password.affiliatedDomains?.some(domain => domain.signonRealm.startsWith('android://'));
        const hasSites = this.password.affiliatedDomains?.some(domain => !domain.signonRealm.startsWith('android://'));
        if (hasApps && hasSites) {
            return this.i18n('sitesAndAppsLabel');
        }
        return hasApps ? this.i18n('appsLabel') : this.i18n('sitesLabel');
    }
    computeShowShareButton_() {
        return this.enableSendPasswords_ && !this.isFederated_() &&
            (this.isSyncingPasswords || this.isOptedInForAccountStorage);
    }
    maybeRegisterSharingHelpBubble() {
        if (!this.showShareButton_) {
            return;
        }
        this.registerHelpBubble(PASSWORD_SHARE_BUTTON_BUTTON_ELEMENT_ID, this.$.shareButton);
    }
}
customElements.define(PasswordDetailsCardElement.is, PasswordDetailsCardElement);
