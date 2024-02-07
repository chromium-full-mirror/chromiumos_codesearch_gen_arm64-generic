// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import '//resources/ash/common/cr_elements/cr_input/cr_input.js';
import '//resources/ash/common/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/ash/common/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { assert } from '//resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { getTemplate } from './os_sync_encryption_options.html.js';
/**
 * Names of the radio buttons which allow the user to choose their encryption
 * mechanism.
 */
var RadioButtonNames;
(function (RadioButtonNames) {
    RadioButtonNames["ENCRYPT_WITH_GOOGLE"] = "encrypt-with-google";
    RadioButtonNames["ENCRYPT_WITH_PASSPHRASE"] = "encrypt-with-passphrase";
})(RadioButtonNames || (RadioButtonNames = {}));
export class OsSettingsSyncEncryptionOptionsElement extends PolymerElement {
    static get is() {
        return 'os-settings-sync-encryption-options';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            syncPrefs: {
                type: Object,
                notify: true,
            },
            syncStatus: Object,
            existingPassphraseLabel: {
                type: String,
            },
            /**
             * Whether the "create passphrase" inputs should be shown. These inputs
             * give the user the opportunity to use a custom passphrase instead of
             * authenticating with their Google credentials.
             */
            creatingNewPassphrase_: {
                type: Boolean,
                value: false,
            },
            /**
             * The passphrase input field value.
             */
            passphrase_: {
                type: String,
                value: '',
            },
            /**
             * The passphrase confirmation input field value.
             */
            confirmation_: {
                type: String,
                value: '',
            },
            disableEncryptionOptions_: {
                type: Boolean,
                computed: 'computeDisableEncryptionOptions_(' +
                    'syncPrefs, syncStatus)',
                observer: 'disableEncryptionOptionsChanged_',
            },
        };
    }
    constructor() {
        super();
        /**
         * Whether there's a setEncryptionPassphrase() call pending response, in
         * which case the component should wait before making a new call.
         */
        this.isSettingEncryptionPassphrase_ = false;
    }
    /**
     * Returns the encryption options CrRadioGroupElement.
     */
    getEncryptionsRadioButtons() {
        return this.shadowRoot.querySelector('cr-radio-group');
    }
    /**
     * Whether we should disable the radio buttons that allow choosing the
     * encryption options for Sync.
     * We disable the buttons if:
     * (a) full data encryption is enabled, or,
     * (b) full data encryption is not allowed (so far, only applies to
     * supervised accounts), or,
     * (c) current encryption keys are missing, or,
     * (d) the user is a supervised account.
     */
    computeDisableEncryptionOptions_() {
        return !!((this.syncPrefs &&
            (this.syncPrefs.encryptAllData ||
                !this.syncPrefs.customPassphraseAllowed ||
                this.syncPrefs.trustedVaultKeysRequired)) ||
            (this.syncStatus && this.syncStatus.supervisedUser));
    }
    disableEncryptionOptionsChanged_() {
        if (this.disableEncryptionOptions_) {
            this.creatingNewPassphrase_ = false;
        }
    }
    /**
     * @param passphrase The passphrase input field value
     * @param confirmation The passphrase confirmation input field value.
     * @return Whether the passphrase save button should be enabled.
     */
    isSaveNewPassphraseEnabled_(passphrase, confirmation) {
        return passphrase !== '' && confirmation !== '';
    }
    onNewPassphraseInputKeypress_(e) {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }
        this.saveNewPassphrase_();
    }
    onSaveNewPassphraseClick_() {
        this.saveNewPassphrase_();
    }
    /**
     * Sends the newly created custom sync passphrase to the browser.
     */
    saveNewPassphrase_() {
        assert(this.creatingNewPassphrase_);
        chrome.metricsPrivate.recordUserAction('Sync_SaveNewPassphraseClicked');
        if (this.isSettingEncryptionPassphrase_) {
            return;
        }
        // If a new password has been entered but it is invalid, do not send the
        // sync state to the API.
        if (!this.validateCreatedPassphrases_()) {
            return;
        }
        this.isSettingEncryptionPassphrase_ = true;
        SyncBrowserProxyImpl.getInstance()
            .setEncryptionPassphrase(this.passphrase_)
            .then(successfullySet => {
            // TODO(crbug.com/1139060): Rename the event, there is no change if
            // |successfullySet| is false. It should also mention 'encryption
            // passphrase' in its name.
            this.dispatchEvent(new CustomEvent('passphrase-changed', {
                bubbles: true,
                composed: true,
                detail: { didChange: successfullySet },
            }));
            this.isSettingEncryptionPassphrase_ = false;
        });
    }
    onEncryptionRadioSelectionChanged_(event) {
        this.creatingNewPassphrase_ =
            event.detail.value === RadioButtonNames.ENCRYPT_WITH_PASSPHRASE;
    }
    /**
     * Computed binding returning the selected encryption radio button.
     */
    selectedEncryptionRadio_() {
        return this.syncPrefs.encryptAllData || this.creatingNewPassphrase_ ?
            RadioButtonNames.ENCRYPT_WITH_PASSPHRASE :
            RadioButtonNames.ENCRYPT_WITH_GOOGLE;
    }
    /**
     * Checks the supplied passphrases to ensure that they are not empty and that
     * they match each other. Additionally, displays error UI if they are invalid.
     * @return Whether the check was successful (i.e., that the passphrases were
     *     valid).
     */
    validateCreatedPassphrases_() {
        const emptyPassphrase = !this.passphrase_;
        const mismatchedPassphrase = this.passphrase_ !== this.confirmation_;
        this.shadowRoot.querySelector('#passphraseInput').invalid = emptyPassphrase;
        this.shadowRoot
            .querySelector('#passphraseConfirmationInput').invalid =
            !emptyPassphrase && mismatchedPassphrase;
        return !emptyPassphrase && !mismatchedPassphrase;
    }
    onLearnMoreClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events, so that clicking on links inside
            // checkboxes or radio buttons won't change the value.
            event.stopPropagation();
        }
    }
}
customElements.define(OsSettingsSyncEncryptionOptionsElement.is, OsSettingsSyncEncryptionOptionsElement);
