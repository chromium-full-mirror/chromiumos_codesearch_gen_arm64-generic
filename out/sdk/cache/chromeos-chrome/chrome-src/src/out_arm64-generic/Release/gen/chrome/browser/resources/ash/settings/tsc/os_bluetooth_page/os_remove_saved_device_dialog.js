// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Settings dialog is used to remove a bluetooth saved device from
 * the user's account.
 */
import '../settings_shared.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import { FastPairSavedDevicesUiEvent, recordSavedDevicesUiEventMetrics } from 'chrome://resources/ash/common/bluetooth/bluetooth_metrics_utils.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './os_remove_saved_device_dialog.html.js';
const SettingsBluetoothRemoveSavedDeviceDialogElementBase = WebUiListenerMixin(I18nMixin(PolymerElement));
class SettingsBluetoothRemoveSavedDeviceDialogElement extends SettingsBluetoothRemoveSavedDeviceDialogElementBase {
    static get is() {
        return 'os-settings-bluetooth-remove-saved-device-dialog';
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
    getRemoveDeviceDialogBodyText_() {
        return this.i18n('savedDevicesDialogLabel', this.device_.name, loadTimeData.getString('primaryUserEmail'));
    }
    onRemoveClick_(event) {
        recordSavedDevicesUiEventMetrics(FastPairSavedDevicesUiEvent.SETTINGS_SAVED_DEVICE_LIST_REMOVE);
        const fireEvent = new CustomEvent('remove-saved-device', {
            bubbles: true,
            composed: true,
            detail: { key: this.device_.accountKey },
        });
        this.dispatchEvent(fireEvent);
        this.$.dialog.close();
        event.preventDefault();
        event.stopPropagation();
    }
    onCancelClick_() {
        this.$.dialog.close();
    }
}
customElements.define(SettingsBluetoothRemoveSavedDeviceDialogElement.is, SettingsBluetoothRemoveSavedDeviceDialogElement);
