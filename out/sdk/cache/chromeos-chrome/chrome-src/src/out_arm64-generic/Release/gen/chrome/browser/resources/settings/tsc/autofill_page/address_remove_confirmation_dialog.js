// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'address-remove-confirmation-dialog' is the dialog that allows
 * removing a saved address.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './address_remove_confirmation_dialog.html.js';
const SettingsAddressRemoveConfirmationDialogBase = I18nMixin(PolymerElement);
export class SettingsAddressRemoveConfirmationDialogElement extends SettingsAddressRemoveConfirmationDialogBase {
    static get is() {
        return 'settings-address-remove-confirmation-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            address: Object,
            accountInfo: Object,
            isAccountAddress_: {
                type: Boolean,
                computed: 'computeIsAccountAddress_(address)',
            },
            isProfileSyncEnabled_: {
                type: Boolean,
                computed: 'computeIsProfileSyncEnabled_(accountInfo)',
                value: false,
            },
        };
    }
    wasConfirmed() {
        return this.$.dialog.getNative().returnValue === 'success';
    }
    computeIsAccountAddress_(address) {
        return address.metadata !== undefined &&
            address.metadata.source ===
                chrome.autofillPrivate.AddressSource.ACCOUNT;
    }
    computeIsProfileSyncEnabled_(accountInfo) {
        return !!accountInfo?.isSyncEnabledForAutofillProfiles;
    }
    onRemoveClick() {
        this.$.dialog.close();
    }
    onCancelClick() {
        this.$.dialog.cancel();
    }
}
customElements.define(SettingsAddressRemoveConfirmationDialogElement.is, SettingsAddressRemoveConfirmationDialogElement);
