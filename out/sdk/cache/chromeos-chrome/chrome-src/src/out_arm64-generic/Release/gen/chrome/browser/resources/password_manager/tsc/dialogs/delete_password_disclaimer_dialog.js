// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordCheckInteraction, PasswordManagerImpl } from '../password_manager_proxy.js';
import { getTemplate } from './delete_password_disclaimer_dialog.html.js';
const DeletePasswordDisclaimerDialogElementBase = I18nMixin(PolymerElement);
export class DeletePasswordDisclaimerDialogElement extends DeletePasswordDisclaimerDialogElementBase {
    constructor() {
        super(...arguments);
        this.passwordManager_ = PasswordManagerImpl.getInstance();
    }
    static get is() {
        return 'delete-password-disclaimer-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The password that is being displayed.
             */
            origin: String,
            actionUrl: String,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.$.dialog.showModal();
    }
    onDeleteClick_() {
        this.dispatchEvent(new CustomEvent('delete-password-click', { bubbles: true, composed: true }));
        this.passwordManager_.recordPasswordCheckInteraction(PasswordCheckInteraction.REMOVE_PASSWORD);
        this.$.dialog.close();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    hasSecureChangePasswordUrl_() {
        const url = this.actionUrl;
        return !!url && (url.startsWith('https://'));
    }
    /**
     * Returns the delete password description with a linkified change password
     * URL. Requires the change password URL to be present and secure.
     */
    getDescriptionHtml_() {
        if (!this.hasSecureChangePasswordUrl_()) {
            return window.trustedTypes.emptyHTML;
        }
        return this.i18nAdvanced('deletePasswordConfirmationDescription', {
            substitutions: [
                this.origin,
                `<a href='${this.actionUrl}' target='_blank'>${this.origin}</a>`,
            ],
        });
    }
    /**
     * Returns the delete password description as a plain text.
     * Used when the change password URL is not present or insecure.
     */
    getDescriptionText_() {
        return this.i18n('deletePasswordConfirmationDescription', this.origin, this.origin);
    }
}
customElements.define(DeletePasswordDisclaimerDialogElement.is, DeletePasswordDisclaimerDialogElement);
