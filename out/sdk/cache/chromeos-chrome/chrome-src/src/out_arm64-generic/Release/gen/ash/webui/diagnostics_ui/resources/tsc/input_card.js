// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './diagnostics_card_frame.js';
import './icons.html.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { ConnectionType } from './input.mojom-webui.js';
import { getTemplate } from './input_card.html.js';
import { getInputDataProvider } from './mojo_interface_provider.js';
/**
 * @fileoverview
 * 'input-card' is responsible for displaying a list of input devices with links
 * to their testers.
 */
/**
 * Enum of device types supported by input-card elements.
 */
export var InputCardType;
(function (InputCardType) {
    InputCardType["KEYBOARD"] = "keyboard";
    InputCardType["TOUCHPAD"] = "touchpad";
    InputCardType["TOUCHSCREEN"] = "touchscreen";
})(InputCardType || (InputCardType = {}));
const InputCardElementBase = I18nMixin(PolymerElement);
export class InputCardElement extends InputCardElementBase {
    constructor() {
        super(...arguments);
        this.inputDataProvider = getInputDataProvider();
    }
    static get is() {
        return 'input-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The type of input device to be displayed. Valid values are 'keyboard',
             * 'touchpad', and 'touchscreen'.
             */
            deviceType: String,
            devices: {
                type: Array,
                value: () => [],
            },
            deviceIcon: {
                type: String,
                computed: 'computeDeviceIcon(deviceType)',
            },
            hostDeviceStatus: {
                type: Object,
            },
        };
    }
    computeDeviceIcon(deviceType) {
        return {
            [InputCardType.KEYBOARD]: 'diagnostics:keyboard',
            [InputCardType.TOUCHPAD]: 'diagnostics:touchpad',
            [InputCardType.TOUCHSCREEN]: 'diagnostics:touchscreen',
        }[deviceType];
    }
    /**
     * Fetches the description string for a device based on its connection type
     * (e.g. "Bluetooth keyboard", "Internal touchpad").
     */
    getDeviceDescription(device) {
        if (device.connectionType === ConnectionType.kUnknown) {
            return '';
        }
        const connectionTypeString = {
            [ConnectionType.kInternal]: 'Internal',
            [ConnectionType.kUsb]: 'Usb',
            [ConnectionType.kBluetooth]: 'Bluetooth',
        }[device.connectionType];
        const deviceTypeString = {
            [InputCardType.KEYBOARD]: 'Keyboard',
            [InputCardType.TOUCHPAD]: 'Touchpad',
            [InputCardType.TOUCHSCREEN]: 'Touchscreen',
        }[this.deviceType];
        return loadTimeData.getString('inputDescription' + connectionTypeString + deviceTypeString);
    }
    isInternalKeyboard(device) {
        return this.deviceType == InputCardType.KEYBOARD &&
            device.connectionType == ConnectionType.kInternal;
    }
    isInternalKeyboardTestable() {
        return !this.hostDeviceStatus.isTabletMode &&
            this.hostDeviceStatus.isLidOpen;
    }
    /**
     * Grey out the test button if the test device is untestable. e.g. if the
     * laptop's lid is closed, the internal touchscreen is untestable.
     */
    getDeviceTestability(device) {
        // If the device has the key 'testable', we check its testable state.
        if ('testable' in device) {
            return device.testable;
        }
        if (this.isInternalKeyboard(device)) {
            return this.isInternalKeyboardTestable();
        }
        return true;
    }
    getDeviceTestabilityErrorMessage(device) {
        // If it is not an internal keyboard, return the generic untestable string.
        if (!this.isInternalKeyboard(device)) {
            return loadTimeData.getString('inputDeviceUntestableNote');
        }
        // Otherwise, differentiate the string based on the reason it is untestable.
        if (this.hostDeviceStatus.isTabletMode) {
            return loadTimeData.getString('inputKeyboardUntestableTabletModeNote');
        }
        if (!this.hostDeviceStatus.isLidOpen) {
            return loadTimeData.getString('inputKeyboardUntestableLidClosedNote');
        }
        // Otherwise, there is no error.
        return '';
    }
    handleTestButtonClick(e) {
        const inputDeviceButton = e.target;
        assert(inputDeviceButton);
        const closestDevice = inputDeviceButton.closest('.device');
        assert(closestDevice);
        const dataEvdevId = closestDevice.getAttribute('data-evdev-id');
        assert(typeof dataEvdevId === 'string');
        const evdevId = parseInt(dataEvdevId, 10);
        this.dispatchEvent(new CustomEvent('test-button-click', { composed: true, detail: { evdevId: evdevId } }));
    }
}
customElements.define(InputCardElement.is, InputCardElement);
