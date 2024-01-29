// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './metrics_utils.js';
import './share_password_dialog_header.js';
import './share_password_group_avatar.js';
import '../site_favicon.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { PasswordSharingActions, recordPasswordSharingInteraction } from './metrics_utils.js';
import { getTemplate } from './share_password_confirmation_dialog.html.js';
// Five seconds in milliseconds.
const FIVE_SECONDS = 5000;
var ConfirmationDialogStage;
(function (ConfirmationDialogStage) {
    ConfirmationDialogStage[ConfirmationDialogStage["LOADING"] = 0] = "LOADING";
    ConfirmationDialogStage[ConfirmationDialogStage["CANCELED"] = 1] = "CANCELED";
    ConfirmationDialogStage[ConfirmationDialogStage["SUCCESS"] = 2] = "SUCCESS";
})(ConfirmationDialogStage || (ConfirmationDialogStage = {}));
const SharePasswordConfirmationDialogElementBase = UserUtilMixin(I18nMixin(PolymerElement));
export class SharePasswordConfirmationDialogElement extends SharePasswordConfirmationDialogElementBase {
    constructor() {
        super(...arguments);
        this.dialogStage_ = ConfirmationDialogStage.LOADING;
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'share-password-confirmation-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dialogStage_: {
                type: Number,
                observer: 'stateChange_',
            },
            password: Object,
            passwordName: String,
            iconUrl: String,
            recipients: {
                type: Array,
                value: [],
            },
            dialogStageEnum_: {
                type: Object,
                value: ConfirmationDialogStage,
                readOnly: true,
            },
        };
    }
    ready() {
        super.ready();
        // Start the animation after all elements have been loaded.
        setTimeout(() => {
            this.$.animation.classList.add('loading');
        }, 0);
        // The user has 5 seconds to cancel the share action while loading/sharing
        // animation is in progress.
        setTimeout(() => {
            if (this.isStage_(ConfirmationDialogStage.CANCELED)) {
                return;
            }
            this.passwordManager_.sharePassword(this.password.id, this.recipients);
            this.dialogStage_ = ConfirmationDialogStage.SUCCESS;
        }, FIVE_SECONDS);
    }
    isStage_(stage) {
        return this.dialogStage_ === stage;
    }
    stateChange_() {
        // Force the screen reader to focus on the updated dialog header.
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
        this.$.dialog.focus();
    }
    getDialogTitle_() {
        switch (this.dialogStage_) {
            case ConfirmationDialogStage.LOADING:
                return this.i18n('shareDialogLoadingTitle');
            case ConfirmationDialogStage.CANCELED:
                return this.i18n('shareDialogCanceledTitle');
            case ConfirmationDialogStage.SUCCESS:
                return this.i18n('shareDialogSuccessTitle');
            default:
                assertNotReached();
        }
    }
    getSuccessDescription_() {
        if (this.recipients.length > 1) {
            return this.i18nAdvanced('sharePasswordConfirmationDescriptionMultipleRecipients', {
                substitutions: [
                    this.passwordName,
                ],
            });
        }
        return this.i18nAdvanced('sharePasswordConfirmationDescriptionSingleRecipient', {
            substitutions: [
                this.recipients[0].displayName,
                this.passwordName,
            ],
        });
    }
    hasSecureChangePasswordUrl_() {
        const url = this.password.changePasswordUrl;
        return !!url && (url.startsWith('https://'));
    }
    getFooterDescription_() {
        // Only for Android Apps that don't have affiliated website, change password
        // url can't be generated.
        if (!this.password.changePasswordUrl) {
            return this.i18nAdvanced('sharePasswordConfirmationFooterAndroidApp');
        }
        // Don't insert change password url as '<a href>' for 'non-https' urls.
        return this.i18nAdvanced('sharePasswordConfirmationFooterWebsite', {
            substitutions: [
                this.hasSecureChangePasswordUrl_() ?
                    `<a href='${this.password.changePasswordUrl}' target='_blank'>${this.passwordName}</a>` :
                    this.passwordName,
            ],
        });
    }
    onFooterClick_(e) {
        const element = e.target;
        if (element.tagName === 'A') {
            recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED);
        }
    }
    onClickDone_() {
        this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
    }
    onClickCancel_() {
        // Ignore the click if a race with the 5 second timeout occurred.
        if (this.isStage_(ConfirmationDialogStage.SUCCESS)) {
            return;
        }
        recordPasswordSharingInteraction(PasswordSharingActions.CONFIRMATION_DIALOG_SHARING_CANCELED);
        this.dialogStage_ = ConfirmationDialogStage.CANCELED;
        this.$.animation.classList.remove('loading');
    }
}
customElements.define(SharePasswordConfirmationDialogElement.is, SharePasswordConfirmationDialogElement);
