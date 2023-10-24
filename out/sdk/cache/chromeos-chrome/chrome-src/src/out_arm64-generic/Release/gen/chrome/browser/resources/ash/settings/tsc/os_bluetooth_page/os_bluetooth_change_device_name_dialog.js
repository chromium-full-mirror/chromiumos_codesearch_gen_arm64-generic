// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Settings dialog is used to change a Bluetooth device nickname.
 */
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import { getDeviceName } from 'chrome://resources/ash/common/bluetooth/bluetooth_utils.js';
import { getBluetoothConfig } from 'chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './os_bluetooth_change_device_name_dialog.html.js';
const MAX_INPUT_LENGTH = 32;
const SettingsBluetoothChangeDeviceNameDialogElementBase = I18nMixin(PolymerElement);
export class SettingsBluetoothChangeDeviceNameDialogElement extends SettingsBluetoothChangeDeviceNameDialogElementBase {
    static get is() {
        return 'os-settings-bluetooth-change-device-name-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            device: {
                type: Object,
                observer: 'onDeviceChanged_',
            },
            /** Used to reference the maxInputLength constant in HTML. */
            maxInputLength: {
                type: Number,
                value: MAX_INPUT_LENGTH,
            },
            deviceName_: {
                type: String,
                value: '',
                observer: 'onDeviceNameChanged_',
            },
            isInputInvalid_: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
        };
    }
    onDeviceChanged_() {
        this.deviceName_ = getDeviceName(this.device);
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
    onDoneClick_() {
        getBluetoothConfig().setDeviceNickname(this.device.deviceProperties.id, this.deviceName_);
        this.$.dialog.close();
    }
    /**
     * Returns a formatted string containing the current number of characters
     * entered in the input compared to the maximum number of characters allowed.
     */
    getInputCountString_(deviceName) {
        // minimumIntegerDigits is 2 because we want to show a leading zero if
        // length is less than 10.
        return this.i18n('bluetoothChangeNameDialogInputCharCount', deviceName.length.toLocaleString(
        /*locales=*/ undefined, { minimumIntegerDigits: 2 }), MAX_INPUT_LENGTH.toLocaleString());
    }
    /**
     * Observer for deviceName_ that sanitizes its value by truncating it to
     * maxInputLength. This method will be recursively called until deviceName_
     * is fully sanitized.
     */
    onDeviceNameChanged_(_newValue, oldValue) {
        if (oldValue) {
            // If oldValue.length > maxInputLength, the user attempted to
            // enter more than the max limit, this method was called and it was
            // truncated, and then this method was called one more time.
            this.isInputInvalid_ = oldValue.length > MAX_INPUT_LENGTH;
        }
        else {
            this.isInputInvalid_ = false;
        }
        // Truncate the name to maxInputLength.
        this.deviceName_ = this.deviceName_.substring(0, MAX_INPUT_LENGTH);
    }
    isDoneDisabled_() {
        if (this.deviceName_ === getDeviceName(this.device)) {
            return true;
        }
        if (!this.deviceName_.length) {
            return true;
        }
        return false;
    }
}
customElements.define(SettingsBluetoothChangeDeviceNameDialogElement.is, SettingsBluetoothChangeDeviceNameDialogElement);
