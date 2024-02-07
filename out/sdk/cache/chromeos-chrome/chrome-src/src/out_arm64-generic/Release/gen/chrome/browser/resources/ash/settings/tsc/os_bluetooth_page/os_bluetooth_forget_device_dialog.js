// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Forget dialog is used to forget a Bluetooth device.
 */
import '../settings_shared.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { getDeviceName } from 'chrome://resources/ash/common/bluetooth/bluetooth_utils.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './os_bluetooth_forget_device_dialog.html.js';
const SettingsBluetoothForgetDeviceDialogElementBase = I18nMixin(PolymerElement);
class SettingsBluetoothForgetDeviceDialogElement extends SettingsBluetoothForgetDeviceDialogElementBase {
    static get is() {
        return 'os-settings-bluetooth-forget-device-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            device_: {
                type: Object,
            },
        };
    }
    getForgetDeviceDialogBodyText_() {
        return this.i18n('bluetoothDevicesDialogLabel', this.getDeviceName_(), loadTimeData.getString('primaryUserEmail'));
    }
    getDeviceName_() {
        return getDeviceName(this.device_);
    }
    onForgetClick_(event) {
        const fireEvent = new CustomEvent('forget-bluetooth-device', { bubbles: true, composed: true });
        this.dispatchEvent(fireEvent);
        this.$.dialog.close();
        event.stopPropagation();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
}
customElements.define(SettingsBluetoothForgetDeviceDialogElement.is, SettingsBluetoothForgetDeviceDialogElement);
