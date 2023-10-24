// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Item in <os-saved-devices-list> that displays information for a saved
 * Bluetooth device.
 */
import '../settings_shared.css.js';
import '../os_settings_icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { FastPairSavedDevicesUiEvent, recordSavedDevicesUiEventMetrics } from 'chrome://resources/ash/common/bluetooth/bluetooth_metrics_utils.js';
import { FocusRowMixin } from 'chrome://resources/cr_elements/focus_row_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './os_saved_devices_list_item.html.js';
const SettingsSavedDevicesListItemElementBase = FocusRowMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
class SettingsSavedDevicesListItemElement extends SettingsSavedDevicesListItemElementBase {
    static get is() {
        return 'os-settings-saved-devices-list-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            device: {
                type: Object,
            },
            /** The index of this item in its parent list, used for its a11y label. */
            itemIndex: Number,
            /**
             * The total number of elements in this item's parent list, used for its
             * a11y label.
             */
            listSize: Number,
            shouldShowRemoveSavedDeviceDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    getDeviceName_(device) {
        return device.name;
    }
    getImageSrc_(device) {
        return device.imageUrl;
    }
    onMenuButtonClick_(event) {
        const button = event.target;
        this.$.dotsMenu.showAt(button);
        event.stopPropagation();
    }
    onRemoveClick_() {
        recordSavedDevicesUiEventMetrics(FastPairSavedDevicesUiEvent.SETTINGS_SAVED_DEVICE_LIST_REMOVE_DIALOG);
        this.shouldShowRemoveSavedDeviceDialog_ = true;
        this.$.dotsMenu.close();
    }
    onCloseRemoveDeviceDialog_() {
        this.shouldShowRemoveSavedDeviceDialog_ = false;
    }
    getAriaLabel_(device) {
        const deviceName = this.getDeviceName_(device);
        return this.i18n('savedDeviceItemA11yLabel', this.itemIndex + 1, this.listSize, deviceName);
    }
    getSubpageButtonA11yLabel_(device) {
        const deviceName = this.getDeviceName_(device);
        return this.i18n('savedDeviceItemButtonA11yLabel', deviceName);
    }
}
customElements.define(SettingsSavedDevicesListItemElement.is, SettingsSavedDevicesListItemElement);
