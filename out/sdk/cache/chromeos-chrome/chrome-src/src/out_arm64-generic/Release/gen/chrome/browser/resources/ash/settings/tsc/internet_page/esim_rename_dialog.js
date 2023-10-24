// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element to rename eSIM profile name
 */
import 'chrome://resources/ash/common/cellular_setup/cellular_setup_icons.html.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import { getESimProfile } from 'chrome://resources/ash/common/cellular_setup/esim_manager_utils.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { ESimOperationResult } from 'chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './esim_rename_dialog.html.js';
const MAX_INPUT_LENGTH = 20;
const MIN_INPUT_LENGTH = 1;
const EMOJI_REGEX_EXP = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
const EsimRenameDialogElementBase = I18nMixin(PolymerElement);
export class EsimRenameDialogElement extends EsimRenameDialogElementBase {
    static get is() {
        return 'esim-rename-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Used to reference the MAX_INPUT_LENGTH constant in HTML. */
            maxInputLength: {
                type: Number,
                value: MAX_INPUT_LENGTH,
                readonly: true,
            },
            networkState: {
                type: Object,
                value: null,
            },
            showCellularDisconnectWarning: {
                type: Boolean,
                value: false,
            },
            errorMessage_: {
                type: String,
                value: '',
            },
            esimProfileName_: {
                type: String,
                value: '',
                observer: 'onEsimProfileNameChanged_',
            },
            isInputInvalid_: {
                type: Boolean,
                value: false,
            },
            isRenameInProgress_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.esimProfileRemote_ = null;
    }
    connectedCallback() {
        super.connectedCallback();
        this.init_();
    }
    async init_() {
        if (!(this.networkState &&
            this.networkState.type === NetworkType.kCellular)) {
            return;
        }
        this.esimProfileRemote_ =
            await getESimProfile(this.networkState.typeState.cellular.iccid);
        // Fail gracefully if init is incomplete, see crbug/1194729.
        if (!this.esimProfileRemote_) {
            this.errorMessage_ = this.i18n('eSimRenameProfileDialogError');
        }
        this.esimProfileName_ = this.networkState.name;
        if (!this.errorMessage_) {
            this.shadowRoot.querySelector('#eSimprofileName').focus();
        }
    }
    /**
     * @param {Event} event
     * @private
     */
    async onRenameDialogDoneClick_() {
        if (this.errorMessage_) {
            this.$.profileRenameDialog.close();
            return;
        }
        this.isRenameInProgress_ = true;
        // The C++ layer uses std::u16string, which use 16 bit characters. JS
        // strings support either 8 or 16 bit characters, and must be converted
        // to an array of 16 bit character codes that match std::u16string.
        const name = {
            data: Array.from(this.esimProfileName_, c => c.charCodeAt(0)),
        };
        const response = await this.esimProfileRemote_.setProfileNickname(name);
        this.handleSetProfileNicknameResponse_(response.result);
    }
    handleSetProfileNicknameResponse_(result) {
        this.isRenameInProgress_ = false;
        if (result === ESimOperationResult.kFailure) {
            const showErrorToastEvent = new CustomEvent('show-error-toast', {
                bubbles: true,
                composed: true,
                detail: this.i18n('eSimRenameProfileDialogError'),
            });
            this.dispatchEvent(showErrorToastEvent);
        }
        this.$.profileRenameDialog.close();
    }
    onCancelClick_() {
        this.$.profileRenameDialog.close();
    }
    /**
     * Observer for esimProfileName_ that sanitizes its value by removing any
     * Emojis and truncating it to MAX_INPUT_LENGTH. This method will be
     * recursively called until esimProfileName_ is fully sanitized.
     */
    onEsimProfileNameChanged_(_newValue, oldValue) {
        if (oldValue) {
            const sanitizedOldValue = oldValue.replace(EMOJI_REGEX_EXP, '');
            // If sanitizedOldValue.length > MAX_INPUT_LENGTH, the user attempted to
            // enter more than the max limit, this method was called and it was
            // truncated, and then this method was called one more time.
            this.isInputInvalid_ = sanitizedOldValue.length > MAX_INPUT_LENGTH;
        }
        else {
            this.isInputInvalid_ = false;
        }
        // Remove all Emojis from the name.
        const sanitizedProfileName = this.esimProfileName_.replace(EMOJI_REGEX_EXP, '');
        // Truncate the name to MAX_INPUT_LENGTH.
        this.esimProfileName_ = sanitizedProfileName.substring(0, MAX_INPUT_LENGTH);
    }
    getInputInfoClass_(isInputInvalid) {
        return isInputInvalid ? 'error' : '';
    }
    /**
     * Returns a formatted string containing the current number of characters
     * entered in the input compared to the maximum number of characters allowed.
     */
    getInputCountString_(esimProfileName) {
        // minimumIntegerDigits is 2 because we want to show a leading zero if
        // length is less than 10.
        return this.i18n('eSimRenameProfileInputCharacterCount', esimProfileName.length.toLocaleString(
        /*locales=*/ undefined, { minimumIntegerDigits: 2 }), MAX_INPUT_LENGTH.toLocaleString());
    }
    isDoneButtonDisabled_(isRenameInProgress, esimProfileName) {
        if (isRenameInProgress) {
            return true;
        }
        return esimProfileName.length < MIN_INPUT_LENGTH;
    }
    getDoneBtnA11yLabel_(esimProfileName) {
        return this.i18n('eSimRenameProfileDoneBtnA11yLabel', esimProfileName);
    }
}
customElements.define(EsimRenameDialogElement.is, EsimRenameDialogElement);
