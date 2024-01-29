// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import '../shared_style.css.js';
import '../user_utils_mixin.js';
import './password_preview_item.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from '../password_manager_proxy.js';
import { UserUtilMixin } from '../user_utils_mixin.js';
import { getTemplate } from './move_passwords_dialog.html.js';
/**
 * This should be kept in sync with the enum in
 * components/password_manager/core/browser/password_manager_metrics_util.h.
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 * @enum {number}
 */
export var MoveToAccountStoreTrigger;
(function (MoveToAccountStoreTrigger) {
    // LINT.IfChange
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD"] = 0] = "SUCCESSFUL_LOGIN_WITH_PROFILE_STORE_PASSWORD";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_IN_SETTINGS"] = 1] = "EXPLICITLY_TRIGGERED_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS"] = 2] = "EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["USER_OPTED_IN_AFTER_SAVING_LOCALLY"] = 3] = "USER_OPTED_IN_AFTER_SAVING_LOCALLY";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS"] = 4] = "EXPLICITLY_TRIGGERED_FOR_SINGLE_PASSWORD_IN_DETAILS_IN_SETTINGS";
    MoveToAccountStoreTrigger[MoveToAccountStoreTrigger["COUNT"] = 5] = "COUNT";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/password/enums.xml)
})(MoveToAccountStoreTrigger || (MoveToAccountStoreTrigger = {}));
const MovePasswordsDialogElementBase = UserUtilMixin(PolymerElement);
export class MovePasswordsDialogElement extends MovePasswordsDialogElementBase {
    static get is() {
        return 'move-passwords-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Password groups displayed in the UI.
             */
            passwords: {
                type: Array,
                value: () => [],
            },
            selectedPasswordIds_: {
                type: Array,
                value: () => [],
            },
            trigger: {
                type: MoveToAccountStoreTrigger,
                value: MoveToAccountStoreTrigger
                    .EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS,
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        chrome.metricsPrivate.recordEnumerationValue('PasswordManager.AccountStorage.MoveToAccountStoreFlowOffered', this.trigger, MoveToAccountStoreTrigger.COUNT);
        this.selectedPasswordIds_ = this.passwords.map(item => item.id);
        PasswordManagerImpl.getInstance()
            .requestCredentialsDetails(this.selectedPasswordIds_)
            .then(entries => {
            this.passwords = entries;
            this.$.dialog.showModal();
        })
            .catch(() => {
            this.$.dialog.close();
            this.dispatchEvent(new CustomEvent('close', { bubbles: true, composed: true }));
        });
    }
    onCancel_() {
        this.$.dialog.cancel();
    }
    onMoveButtonClick_() {
        assert(this.isOptedInForAccountStorage);
        PasswordManagerImpl.getInstance().movePasswordsToAccount(this.selectedPasswordIds_);
        this.$.dialog.close();
    }
    getUrl_(password) {
        assert(password.affiliatedDomains);
        assert(password.affiliatedDomains.length > 0);
        return password.affiliatedDomains[0].name;
    }
    passwordSelected_() {
        this.selectedPasswordIds_ =
            Array.from(this.shadowRoot.querySelectorAll('password-preview-item'))
                .filter(item => item.checked)
                .map(item => item.passwordId);
    }
}
customElements.define(MovePasswordsDialogElement.is, MovePasswordsDialogElement);
