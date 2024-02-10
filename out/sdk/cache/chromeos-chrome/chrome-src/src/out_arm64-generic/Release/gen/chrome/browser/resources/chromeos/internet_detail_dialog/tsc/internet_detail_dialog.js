// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/network/cr_policy_network_indicator_mojo.js';
import 'chrome://resources/ash/common/network/network_apnlist.js';
import 'chrome://resources/ash/common/network/network_choose_mobile.js';
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/ash/common/network/network_ip_config.js';
import 'chrome://resources/ash/common/network/network_nameservers.js';
import 'chrome://resources/ash/common/network/network_property_list_mojo.js';
import 'chrome://resources/ash/common/network/network_proxy.js';
import 'chrome://resources/ash/common/network/network_shared.css.js';
import 'chrome://resources/ash/common/network/network_siminfo.js';
import 'chrome://resources/ash/common/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_page_host_style.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/ash/common/cr_elements/cros_color_overrides.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/ash/common/network/apn_list.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_policy_indicator_mixin.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { getApnDisplayName, isActiveSim } from 'chrome://resources/ash/common/network/cellular_utils.js';
import { CrPolicyNetworkBehaviorMojo } from 'chrome://resources/ash/common/network/cr_policy_network_behavior_mojo.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { MAX_NUM_CUSTOM_APNS, StartConnectResult } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { ConnectionStateType, NetworkType, OncSource, PortalState } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './internet_detail_dialog.html.js';
import { InternetDetailDialogBrowserProxyImpl } from './internet_detail_dialog_browser_proxy.js';
/**
 * @fileoverview
 * 'internet-detail-dialog' is used in the login screen to show a subset of
 * internet details and allow configuration of proxy, IP, and nameservers.
 */
const InternetDetailDialogElementBase = mixinBehaviors([NetworkListenerBehavior, CrPolicyNetworkBehaviorMojo], I18nMixin(PolymerElement));
export class InternetDetailDialogElement extends InternetDetailDialogElementBase {
    static get is() {
        return 'internet-detail-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** The network GUID to display details for. */
            guid: String,
            managedProperties_: {
                type: Object,
                observer: 'managedPropertiesChanged_',
            },
            deviceState_: {
                type: Object,
                value: null,
            },
            /**
             * Whether to show technology badge on mobile network icons.
             */
            showTechnologyBadge_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('showTechnologyBadge') &&
                        loadTimeData.getBoolean('showTechnologyBadge');
                },
            },
            /**
             * Whether network configuration properties sections should be shown. The
             * advanced section is not controlled by this property.
             */
            showConfigurableSections_: {
                type: Boolean,
                value: true,
                computed: `computeShowConfigurableSections_(deviceState_.*,
            managedProperties_.*)`,
            },
            /**
             * When true, all inputs that allow state to be changed (e.g., toggles,
             * inputs) are disabled.
             */
            disabled_: {
                type: Boolean,
                value: false,
                computed: 'computeDisabled_(deviceState_.*)',
            },
            globalPolicy_: Object,
            apnExpanded_: Boolean,
            /**
             * Return true if apnRevamp feature flag is enabled.
             */
            isApnRevampEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('apnRevamp') &&
                        loadTimeData.getBoolean('apnRevamp');
                },
            },
            /**
             * Return true if Jelly feature flag is enabled.
             */
            isJellyEnabled_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.valueExists('isJellyEnabled') &&
                        loadTimeData.getBoolean('isJellyEnabled');
                },
            },
            /**
             * Return true if custom APNs limit is reached.
             */
            isNumCustomApnsLimitReached_: {
                type: Boolean,
                notify: true,
                value: false,
                computed: 'computeIsNumCustomApnsLimitReached_(managedProperties_)',
            },
            /**
             * The message to be displayed in the error toast when shown.
             */
            errorToastMessage_: {
                type: String,
                value: '',
            },
        };
    }
    /** @override */
    constructor() {
        super();
        this.didSetFocus_ = false;
        /**
         * Set to true to once the initial properties have been received. This
         * prevents setProperties from being called when setting default properties.
         */
        this.propertiesReceived_ = false;
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        window.CrPolicyStrings = {
            controlledSettingPolicy: loadTimeData.getString('controlledSettingPolicy'),
        };
    }
    ready() {
        super.ready();
        this.addEventListener('show-error-toast', (event) => {
            this.onShowErrorToast_(event);
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_ = InternetDetailDialogBrowserProxyImpl.getInstance();
        const dialogArgs = this.browserProxy_.getDialogArguments();
        if (this.isJellyEnabled_) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'chrome://theme/colors.css?sets=legacy,sys';
            document.head.appendChild(link);
            document.body.classList.add('jelly-enabled');
            (function () {
                ColorChangeUpdater.forDocument().start();
            })();
        }
        let type;
        let name;
        if (dialogArgs) {
            const args = JSON.parse(dialogArgs);
            this.guid = args.guid || '';
            type = args.type || 'WiFi';
            name = args.name || type;
        }
        else {
            // For debugging
            const params = new URLSearchParams(document.location.search.substring(1));
            this.guid = params.get('guid') || '';
            type = params.get('type') || 'WiFi';
            name = params.get('name') || type;
        }
        if (!this.guid) {
            console.error('Invalid guid');
            this.close_();
        }
        // Set default managedProperties_ until they are loaded.
        this.propertiesReceived_ = false;
        this.deviceState_ = null;
        this.managedProperties_ = OncMojo.getDefaultManagedProperties(OncMojo.getNetworkTypeFromString(type), this.guid, name);
        this.getNetworkDetails_();
        // Fetch global policies.
        this.onPoliciesApplied(/*userhash=*/ '');
    }
    managedPropertiesChanged_() {
        assert(this.managedProperties_);
        // Focus the action button once the initial state is set.
        if (!this.didSetFocus_ &&
            this.showConnectDisconnect_(this.managedProperties_)) {
            const button = this.shadowRoot.querySelector('#title .action-button:not([hidden])');
            if (button) {
                button.focus();
                this.didSetFocus_ = true;
            }
        }
    }
    close_() {
        this.browserProxy_.closeDialog();
    }
    /** CrosNetworkConfigObserver impl */
    onPoliciesApplied(_userhash) {
        this.networkConfig_.getGlobalPolicy().then(response => {
            this.globalPolicy_ = response.result;
        });
    }
    /** CrosNetworkConfigObserver impl */
    onActiveNetworksChanged(networks) {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        // If the network was or is active, request an update.
        if (this.managedProperties_.connectionState !=
            ConnectionStateType.kNotConnected ||
            networks.find(network => network.guid === this.guid)) {
            this.getNetworkDetails_();
        }
    }
    /** CrosNetworkConfigObserver impl */
    onNetworkStateChanged(network) {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        if (network.guid === this.guid) {
            this.getNetworkDetails_();
        }
    }
    /** CrosNetworkConfigObserver impl */
    onDeviceStateListChanged() {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        this.getDeviceState_();
        this.getNetworkDetails_();
    }
    getNetworkDetails_() {
        assert(this.guid);
        this.networkConfig_.getManagedProperties(this.guid).then(response => {
            if (!response.result) {
                // Edge case, may occur when disabling. Close this.
                this.close_();
                return;
            }
            this.managedProperties_ = response.result;
            this.propertiesReceived_ = true;
            if (!this.deviceState_) {
                this.getDeviceState_();
            }
        });
    }
    getDeviceState_() {
        if (!this.managedProperties_) {
            return;
        }
        const type = this.managedProperties_.type;
        this.networkConfig_.getDeviceStateList().then(response => {
            const devices = response.result;
            this.deviceState_ = devices.find(device => device.type === type) || null;
            if (!this.deviceState_) {
                // If the device type associated with the current network has been
                // removed (e.g., due to unplugging a Cellular dongle), the details
                // dialog, if visible, displays controls which are no longer
                // functional. If this case occurs, close the dialog.
                this.close_();
            }
        });
    }
    getNetworkState_(managedProperties) {
        return OncMojo.managedPropertiesToNetworkState(managedProperties);
    }
    getDefaultConfigProperties_() {
        return OncMojo.getDefaultConfigProperties(this.managedProperties_.type);
    }
    setMojoNetworkProperties_(config) {
        if (!this.propertiesReceived_ || !this.guid) {
            return;
        }
        this.networkConfig_.setProperties(this.guid, config).then(response => {
            if (!response.success) {
                console.error('Unable to set properties: ' + JSON.stringify(config));
                // An error typically indicates invalid input; request the properties
                // to update any invalid fields.
                this.getNetworkDetails_();
            }
        });
    }
    getStateText_(managedProperties) {
        if (!managedProperties) {
            return '';
        }
        if (OncMojo.connectionStateIsConnected(managedProperties.connectionState)) {
            if (this.isPortalState_(managedProperties.portalState)) {
                return this.i18n('networkListItemSignIn');
            }
            if (managedProperties.portalState === PortalState.kPortalSuspected) {
                return this.i18n('networkListItemConnectedLimited');
            }
            if (managedProperties.portalState === PortalState.kNoInternet) {
                return this.i18n('networkListItemConnectedNoConnectivity');
            }
        }
        return this.i18n(OncMojo.getConnectionStateString(managedProperties.connectionState));
    }
    getNameText_(managedProperties) {
        return OncMojo.getNetworkNameUnsafe(managedProperties);
    }
    /**
     * @return True if the network is connected.
     */
    isConnectedState_(managedProperties) {
        return !!managedProperties &&
            OncMojo.connectionStateIsConnected(managedProperties.connectionState);
    }
    /**
     * @return True if the network is restricted.
     */
    isRestrictedConnectivity_(managedProperties) {
        return !!managedProperties &&
            OncMojo.isRestrictedConnectivity(managedProperties.portalState);
    }
    /**
     * @return True if the network is connected to have connected color
     *     for state.
     */
    showConnectedState_(managedProperties) {
        return this.isConnectedState_(managedProperties) &&
            !this.isRestrictedConnectivity_(managedProperties);
    }
    /**
     * @return True if the network is restricted to have warning color
     *     for state.
     */
    showRestrictedConnectivity_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        // State must be connected and restricted.
        return this.isConnectedState_(managedProperties) &&
            this.isRestrictedConnectivity_(managedProperties);
    }
    isRemembered_(managedProperties) {
        return managedProperties.source !== OncSource.kNone;
    }
    isRememberedOrConnected_(managedProperties) {
        return this.isRemembered_(managedProperties) ||
            this.isConnectedState_(managedProperties);
    }
    shouldShowApnList_(managedProperties) {
        return !this.isApnRevampEnabled_ &&
            managedProperties.type === NetworkType.kCellular;
    }
    shouldShowApnSection_(managedProperties) {
        return this.isApnRevampEnabled_ &&
            managedProperties.type === NetworkType.kCellular;
    }
    getApnRowSublabel_(managedProperties, apnExpanded) {
        if (managedProperties.type !== NetworkType.kCellular ||
            !managedProperties.typeProperties.cellular.connectedApn) {
            return '';
        }
        // Don't show the connected APN if the section has been expanded.
        if (apnExpanded) {
            return '';
        }
        return getApnDisplayName(this.i18n.bind(this), managedProperties.typeProperties.cellular.connectedApn);
    }
    showCellularSim_(managedProperties) {
        return managedProperties.type === NetworkType.kCellular &&
            managedProperties.typeProperties.cellular.family !== 'CDMA';
    }
    showCellularChooseNetwork_(managedProperties) {
        return managedProperties.type === NetworkType.kCellular &&
            managedProperties.typeProperties.cellular.supportNetworkScan;
    }
    showForget_(managedProperties) {
        if (!managedProperties || managedProperties.type !== NetworkType.kWiFi) {
            return false;
        }
        return managedProperties.source !== OncSource.kNone &&
            !this.isPolicySource(managedProperties.source);
    }
    onForgetClicked_() {
        this.networkConfig_.forgetNetwork(this.guid).then(response => {
            if (!response.success) {
                console.error('Forget network failed for: ' + this.guid);
            }
            // A forgotten network no longer has a valid GUID, close the dialog.
            this.close_();
        });
    }
    showSignin_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        if (OncMojo.connectionStateIsConnected(managedProperties.connectionState) &&
            this.isPortalState_(managedProperties.portalState)) {
            return true;
        }
        return false;
    }
    disableSignin_(managedProperties) {
        if (this.disabled_ || !managedProperties) {
            return true;
        }
        if (!OncMojo.connectionStateIsConnected(managedProperties.connectionState)) {
            return true;
        }
        return !this.isPortalState_(managedProperties.portalState);
    }
    onSigninClicked_() {
        this.browserProxy_.showPortalSignin(this.guid);
    }
    getConnectDisconnectText_(managedProperties) {
        if (this.showConnect_(managedProperties)) {
            return this.i18n('networkButtonConnect');
        }
        return this.i18n('networkButtonDisconnect');
    }
    showConnectDisconnect_(managedProperties) {
        return this.showConnect_(managedProperties) ||
            this.showDisconnect_(managedProperties);
    }
    showConnect_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        return managedProperties.connectable &&
            managedProperties.type !== NetworkType.kEthernet &&
            managedProperties.connectionState === ConnectionStateType.kNotConnected;
    }
    showDisconnect_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        return managedProperties.type !== NetworkType.kEthernet &&
            managedProperties.connectionState !== ConnectionStateType.kNotConnected;
    }
    shouldShowProxyPolicyIndicator_(managedProperties) {
        if (!managedProperties.proxySettings) {
            return false;
        }
        return this.isNetworkPolicyEnforced(managedProperties.proxySettings.type);
    }
    enableConnectDisconnect_(managedProperties) {
        if (this.disabled_) {
            return false;
        }
        if (!this.showConnectDisconnect_(managedProperties)) {
            return false;
        }
        if (this.showConnect_(managedProperties)) {
            return this.enableConnect_(managedProperties);
        }
        return true;
    }
    /**
     * @return Whether or not to enable the network connect button.
     */
    enableConnect_(managedProperties) {
        return this.showConnect_(managedProperties);
    }
    onConnectDisconnectClick_() {
        if (!this.managedProperties_) {
            return;
        }
        if (!this.showConnect_(this.managedProperties_)) {
            this.networkConfig_.startDisconnect(this.guid);
            return;
        }
        const guid = this.managedProperties_.guid;
        this.networkConfig_.startConnect(this.guid).then(response => {
            switch (response.result) {
                case StartConnectResult.kSuccess:
                    break;
                case StartConnectResult.kInvalidState:
                case StartConnectResult.kCanceled:
                    // Ignore failures due to in-progress or cancelled connects.
                    break;
                case StartConnectResult.kInvalidGuid:
                case StartConnectResult.kNotConfigured:
                case StartConnectResult.kBlocked:
                case StartConnectResult.kUnknown:
                    console.error('Unexpected startConnect error for: ' + guid + ' Result: ' +
                        response.result.toString() + ' Message: ' + response.message);
                    break;
            }
        });
    }
    onApnChange_(event) {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        const apn = event.detail;
        config.typeConfig.cellular = {
            apn: apn,
            roaming: undefined,
            textMessageAllowState: undefined,
        };
        this.setMojoNetworkProperties_(config);
    }
    /**
     * Event triggered when the IP Config or NameServers element changes.
     * @param event The network-ip-config or network-nameservers change event.
     */
    onIpConfigChange_(event) {
        if (!this.managedProperties_) {
            return;
        }
        const config = OncMojo.getUpdatedIPConfigProperties(this.managedProperties_, event.detail.field, event.detail.value);
        if (config) {
            this.setMojoNetworkProperties_(config);
        }
    }
    /**
     * Event triggered when the Proxy configuration element changes.
     */
    onProxyChange_(event) {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        config.proxySettings = event.detail;
        this.setMojoNetworkProperties_(config);
    }
    hasVisibleFields_(fields) {
        return fields.some((field) => {
            const key = OncMojo.getManagedPropertyKey(field);
            const value = this.get(key, this.managedProperties_);
            return value !== undefined && value !== '';
        });
    }
    hasInfoFields_() {
        return this.hasVisibleFields_(this.getInfoFields_());
    }
    /**
     * @return The fields to display in the info section.
     */
    getInfoFields_() {
        const fields = [];
        const type = this.managedProperties_.type;
        if (type === NetworkType.kCellular) {
            fields.push('cellular.activationState', 'cellular.servingOperator.name', 'cellular.networkTechnology');
        }
        if (OncMojo.isRestrictedConnectivity(this.managedProperties_.portalState)) {
            fields.push('portalState');
        }
        // Two separate checks for type === kCellular because the order of the array
        // dictates the order the fields appear on the UI. We want portalState to
        // show after the earlier Cellular fields but before these later fields.
        if (type === NetworkType.kCellular) {
            fields.push('cellular.homeProvider.name', 'cellular.homeProvider.country', 'cellular.firmwareRevision', 'cellular.hardwareRevision', 'cellular.esn', 'cellular.iccid', 'cellular.imei', 'cellular.meid', 'cellular.min');
        }
        return fields;
    }
    computeShowConfigurableSections_() {
        if (!this.managedProperties_ || !this.deviceState_) {
            return true;
        }
        if (this.managedProperties_.type !== NetworkType.kCellular) {
            return true;
        }
        const networkState = OncMojo.managedPropertiesToNetworkState(this.managedProperties_);
        assert(networkState);
        return isActiveSim(networkState, this.deviceState_);
    }
    computeDisabled_() {
        if (!this.deviceState_ ||
            this.deviceState_.type !== NetworkType.kCellular) {
            return false;
        }
        // If this is a cellular device and inhibited, state cannot be changed, so
        // the dialog's inputs should be disabled.
        return OncMojo.deviceIsInhibited(this.deviceState_);
    }
    /**
     * Return true if portalState is either kPortal or kProxyAuthRequired.
     */
    isPortalState_(portalState) {
        return portalState === PortalState.kPortal ||
            portalState === PortalState.kProxyAuthRequired;
    }
    /**
     * Handles UI requests to add new APN.
     */
    onCreateCustomApnClicked_() {
        if (this.isNumCustomApnsLimitReached_) {
            return;
        }
        assert(!!this.guid);
        const apnList = this.shadowRoot.querySelector('#apnList');
        assert(apnList);
        apnList.openApnDetailDialogInCreateMode();
    }
    computeIsNumCustomApnsLimitReached_() {
        if (!this.managedProperties_ ||
            this.managedProperties_.type !== NetworkType.kCellular ||
            !this.managedProperties_.typeProperties ||
            !this.managedProperties_.typeProperties.cellular) {
            return false;
        }
        const customApnList = this.managedProperties_.typeProperties.cellular.customApnList;
        return !!customApnList && customApnList.length >= MAX_NUM_CUSTOM_APNS;
    }
    onShowErrorToast_(event) {
        if (!this.isApnRevampEnabled_) {
            return;
        }
        this.errorToastMessage_ = event.detail;
        const errorToast = this.shadowRoot.querySelector('#errorToast');
        assert(errorToast);
        errorToast.show();
    }
    shouldShowMacAddress_(macAddress) {
        return !!macAddress && macAddress.length > 0 &&
            macAddress !== '00:00:00:00:00:00';
    }
}
customElements.define(InternetDetailDialogElement.is, InternetDetailDialogElement);
