// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Settings subpage providing high level summary of the state of Bluetooth and
 * its connected devices.
 */
import '../settings_shared.css.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import { getDeviceName } from 'chrome://resources/ash/common/bluetooth/bluetooth_utils.js';
import { getBluetoothConfig } from 'chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BluetoothSystemState, DeviceConnectionState } from 'chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Router, routes } from '../router.js';
import { OsBluetoothDevicesSubpageBrowserProxyImpl } from './os_bluetooth_devices_subpage_browser_proxy.js';
import { getTemplate } from './os_bluetooth_summary.html.js';
/**
 * Refers to Bluetooth secondary text label, used to distinguish between
 * accessibility string and UI text string.
 */
var LabelType;
(function (LabelType) {
    LabelType[LabelType["A11Y"] = 1] = "A11Y";
    LabelType[LabelType["DISPLAYED_TEXT"] = 2] = "DISPLAYED_TEXT";
})(LabelType || (LabelType = {}));
const SettingsBluetoothSummaryElementBase = RouteOriginMixin(I18nMixin(PolymerElement));
export class SettingsBluetoothSummaryElement extends SettingsBluetoothSummaryElementBase {
    static get is() {
        return 'os-settings-bluetooth-summary';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            systemProperties: {
                type: Object,
                observer: 'onSystemPropertiesChanged_',
            },
            /**
             * Reflects the current state of the toggle button. This will be set when
             * the |systemProperties| state changes or when the user presses the
             * toggle.
             */
            isBluetoothToggleOn_: {
                type: Boolean,
                observer: 'onBluetoothToggleChanged_',
            },
            LabelType: {
                type: Object,
                value: LabelType,
            },
            /**
             * Whether the user is a secondary user.
             */
            isSecondaryUser_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isSecondaryUser');
                },
                readOnly: true,
            },
            /**
             * Email address for the primary user.
             */
            primaryUserEmail_: {
                type: String,
                value() {
                    return loadTimeData.getString('primaryUserEmail');
                },
                readOnly: true,
            },
        };
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.BLUETOOTH;
        this.browserProxy_ =
            OsBluetoothDevicesSubpageBrowserProxyImpl.getInstance();
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.BLUETOOTH_DEVICES, '.subpage-arrow');
    }
    /**
     * RouteOriginMixinInterface override
     */
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === this.route) {
            this.browserProxy_.showBluetoothRevampHatsSurvey();
        }
    }
    onSystemPropertiesChanged_() {
        this.isBluetoothToggleOn_ =
            this.systemProperties.systemState === BluetoothSystemState.kEnabled ||
                this.systemProperties.systemState === BluetoothSystemState.kEnabling;
    }
    /**
     * Observer for isBluetoothToggleOn_ that returns early until the previous
     * value was not undefined to avoid wrongly toggling the Bluetooth state.
     */
    onBluetoothToggleChanged_(_newValue, oldValue) {
        if (oldValue === undefined) {
            return;
        }
        // If the toggle value changed but the toggle is disabled, the change came
        // from CrosBluetoothConfig, not the user. Don't attempt to update the
        // enabled state.
        if (this.isToggleDisabled_()) {
            return;
        }
        getBluetoothConfig().setBluetoothEnabledState(this.isBluetoothToggleOn_);
    }
    isToggleDisabled_() {
        if (!this.systemProperties) {
            return false;
        }
        // TODO(crbug.com/1010321): Add check for modification state when variable
        // is available.
        return this.systemProperties.systemState ===
            BluetoothSystemState.kUnavailable;
    }
    getSecondaryLabel_(labelType) {
        if (!this.isBluetoothToggleOn_) {
            return this.i18n('bluetoothSummaryPageOff');
        }
        const connectedDevices = this.getConnectedDevices_();
        if (!connectedDevices.length) {
            return this.i18n('bluetoothSummaryPageOn');
        }
        const isA11yLabel = labelType === LabelType.A11Y;
        const firstConnectedDeviceName = getDeviceName(connectedDevices[0]);
        if (connectedDevices.length === 1) {
            return isA11yLabel ? this.i18n('bluetoothSummaryPageConnectedA11yOneDevice', firstConnectedDeviceName) :
                firstConnectedDeviceName;
        }
        if (connectedDevices.length === 2) {
            const secondConnectedDeviceName = getDeviceName(connectedDevices[1]);
            return isA11yLabel ?
                this.i18n('bluetoothSummaryPageConnectedA11yTwoDevices', firstConnectedDeviceName, secondConnectedDeviceName) :
                this.i18n('bluetoothSummaryPageTwoDevicesDescription', firstConnectedDeviceName, secondConnectedDeviceName);
        }
        return isA11yLabel ?
            this.i18n('bluetoothSummaryPageConnectedA11yTwoOrMoreDevices', firstConnectedDeviceName, connectedDevices.length - 1) :
            this.i18n('bluetoothSummaryPageTwoOrMoreDevicesDescription', firstConnectedDeviceName, connectedDevices.length - 1);
    }
    getConnectedDevices_() {
        const pairedDevices = this.systemProperties.pairedDevices;
        if (!pairedDevices) {
            return [];
        }
        return pairedDevices.filter(device => device.deviceProperties.connectionState ===
            DeviceConnectionState.kConnected);
    }
    getBluetoothStatusIconName_() {
        if (!this.isBluetoothToggleOn_) {
            return 'os-settings:bluetooth-disabled';
        }
        if (this.getConnectedDevices_().length) {
            return 'os-settings:bluetooth-connected';
        }
        return 'cr:bluetooth';
    }
    shouldShowSubpageArrow_() {
        if (this.isToggleDisabled_()) {
            return false;
        }
        return this.isBluetoothToggleOn_;
    }
    onSubpageArrowClick_(e) {
        this.navigateToBluetoothDevicesSubpage_();
        e.stopPropagation();
    }
    navigateToBluetoothDevicesSubpage_() {
        Router.getInstance().navigateTo(routes.BLUETOOTH_DEVICES);
    }
    onWrapperClick_() {
        if (this.isToggleDisabled_()) {
            return;
        }
        if (this.systemProperties.systemState === BluetoothSystemState.kDisabled ||
            this.systemProperties.systemState === BluetoothSystemState.kDisabling) {
            this.isBluetoothToggleOn_ = true;
            return;
        }
        this.navigateToBluetoothDevicesSubpage_();
    }
    onPairNewDeviceBtnClick_() {
        this.dispatchEvent(new CustomEvent('start-pairing', {
            bubbles: true,
            composed: true,
        }));
    }
    onBluetoothToggleChange_() {
        getAnnouncerInstance().announce(this.isBluetoothToggleOn_ ? this.i18n('bluetoothEnabledA11YLabel') :
            this.i18n('bluetoothDisabledA11YLabel'));
        this.browserProxy_.showBluetoothRevampHatsSurvey();
    }
    shouldShowPairNewDevice_() {
        if (!this.systemProperties) {
            return false;
        }
        return this.systemProperties.systemState === BluetoothSystemState.kEnabled;
    }
}
customElements.define(SettingsBluetoothSummaryElement.is, SettingsBluetoothSummaryElement);
