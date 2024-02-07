// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * UI element shown when authentication via PIN or PASSKEY is required
 * during Bluetooth device pairing.
 */
import './bluetooth_base_page.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_input/cr_input.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { afterNextRender, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { getTemplate } from './bluetooth_pairing_request_code_page.html.js';
import { ButtonState, PairingAuthType } from './bluetooth_types.js';
/**
 * Maximum length of a PIN code, it can range from 1 to 6 digits.
 */
const PIN_CODE_MAX_LENGTH = 6;
/**
 * Maximum length of a passkey, it can range from 1 to 16 characters.
 */
const PASSKEY_MAX_LENGTH = 16;
const SettingsBluetoothPairingRequestCodePageElementBase = I18nMixin(PolymerElement);
export class SettingsBluetoothRequestCodePageElement extends SettingsBluetoothPairingRequestCodePageElementBase {
    static get is() {
        return 'bluetooth-pairing-request-code-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            device: {
                type: Object,
                value: null,
            },
            authType: {
                type: Object,
                value: null,
            },
            buttonBarState_: {
                type: Object,
                computed: 'computeButtonBarState_(pinCode_)',
            },
            pinCode_: {
                type: String,
                value: '',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, () => {
            this.$.pin.focus();
        });
    }
    getMessage_() {
        return this.i18n('bluetoothEnterPin', this.getDeviceName_());
    }
    getDeviceName_() {
        if (!this.device) {
            return '';
        }
        return mojoString16ToString(this.device.publicName);
    }
    computeButtonBarState_() {
        const pairButtonState = !this.pinCode_ ? ButtonState.DISABLED : ButtonState.ENABLED;
        return {
            cancel: ButtonState.ENABLED,
            pair: pairButtonState,
        };
    }
    onPairClicked_(event) {
        event.stopPropagation();
        // TODO(crbug.com/1010321): Show spinner while pairing.
        if (!this.pinCode_) {
            return;
        }
        this.dispatchEvent(new CustomEvent('request-code-entered', {
            bubbles: true,
            composed: true,
            detail: { code: this.pinCode_ },
        }));
    }
    getMaxlength_() {
        if (this.authType === PairingAuthType.REQUEST_PIN_CODE) {
            return PIN_CODE_MAX_LENGTH;
        }
        return PASSKEY_MAX_LENGTH;
    }
}
customElements.define(SettingsBluetoothRequestCodePageElement.is, SettingsBluetoothRequestCodePageElement);
