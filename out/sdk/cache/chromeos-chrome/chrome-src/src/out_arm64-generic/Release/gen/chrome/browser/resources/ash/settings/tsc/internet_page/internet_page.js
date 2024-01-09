// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-internet-page' is the settings page containing internet
 * settings.
 */
import 'chrome://resources/ash/common/cellular_setup/cellular_setup_icons.html.js';
import 'chrome://resources/ash/common/network/sim_lock_dialogs.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../settings_shared.css.js';
import '../os_settings_page/os_settings_animated_pages.js';
import '../os_settings_page/os_settings_subpage.js';
import '../os_settings_page/settings_card.js';
import '../os_settings_icons.css.js';
import './cellular_setup_dialog.js';
import './esim_rename_dialog.js';
import './esim_remove_profile_dialog.js';
import './hotspot_config_dialog.js';
import './internet_config.js';
import './internet_detail_menu.js';
import './network_summary.js';
import { CellularSetupPageName } from 'chrome://resources/ash/common/cellular_setup/cellular_types.js';
import { getNumESimProfiles } from 'chrome://resources/ash/common/cellular_setup/esim_manager_utils.js';
import { HotspotState } from 'chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js';
import { hasActiveCellularNetwork, isConnectedToNonCellularNetwork } from 'chrome://resources/ash/common/network/cellular_utils.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { StartConnectResult } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { DeviceStateType, NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { afterNextRender, mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Section } from '../mojom-webui/routes.mojom-webui.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './internet_page.html.js';
import { InternetPageBrowserProxyImpl } from './internet_page_browser_proxy.js';
const ESIM_PROFILE_LIMIT = 5;
const SettingsInternetPageElementBase = mixinBehaviors([
    NetworkListenerBehavior,
], DeepLinkingMixin(PrefsMixin(RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
class SettingsInternetPageElement extends SettingsInternetPageElementBase {
    static get is() {
        return 'settings-internet-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            section_: {
                type: Number,
                value: Section.kNetwork,
                readOnly: true,
            },
            /**
             * The device state for each network device type, keyed by NetworkType.
             * Set by network-summary.
             */
            deviceStates: {
                type: Object,
                notify: true,
                observer: 'onDeviceStatesChanged_',
            },
            /**
             * Highest priority connected network or null. Set by network-summary.
             */
            defaultNetwork: {
                type: Object,
                notify: true,
            },
            /**
             * Hotspot information. Set by network-summary.
             */
            hotspotInfo: {
                type: Object,
                notify: true,
            },
            /**
             * Set by internet-subpage. Controls spinner visibility in subpage header.
             */
            showSpinner_: Boolean,
            /**
             * The network type for the networks subpage when shown.
             */
            subpageType_: Number,
            /**
             * The network type for the known networks subpage when shown.
             */
            knownNetworksType_: Number,
            /**
             * Whether the 'Add connection' section is expanded.
             */
            addConnectionExpanded_: {
                type: Boolean,
                value: false,
            },
            /**
             * True if VPN is prohibited by policy.
             */
            vpnIsProhibited_: {
                type: Boolean,
                value: false,
            },
            /**
             * True if VPN is prohibited by policy, or an always-on Android VPN is
             * enforced by policy and users are prohibited by policy from manually
             * disconnecting from it.
             */
            disableVpnUi_: {
                type: Boolean,
                computed: 'shouldDisableVpnUi_(vpnIsProhibited_,' +
                    'prefs.vpn_config_allowed.*' +
                    'prefs.arc.vpn.*,' +
                    'prefs.arc.vpn.always_on.*)',
            },
            globalPolicy_: Object,
            /**
             * Whether a managed network is available in the visible network list.
             */
            managedNetworkAvailable: {
                type: Boolean,
                value: false,
            },
            /**
             * List of third party (Extension + Arc) VPN providers.
             */
            vpnProviders_: {
                type: Array,
                value() {
                    return [];
                },
            },
            showInternetConfig_: {
                type: Boolean,
                value: false,
            },
            isApnRevampEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isApnRevampEnabled') &&
                        loadTimeData.getBoolean('isApnRevampEnabled');
                },
            },
            isCellularCarrierLockEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isCellularCarrierLockEnabled') &&
                        loadTimeData.getBoolean('isCellularCarrierLockEnabled');
                },
            },
            /**
             * Page name, if defined, indicating that the next deviceStates update
             * should call attemptShowCellularSetupDialog_().
             */
            pendingShowCellularSetupDialogAttemptPageName_: {
                type: String,
                value: null,
            },
            showCellularSetupDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * Name of cellular setup dialog page.
             */
            cellularSetupDialogPageName_: String,
            hasActiveCellularNetwork_: {
                type: Boolean,
                value: false,
            },
            isConnectedToNonCellularNetwork_: {
                type: Boolean,
                value: false,
            },
            showESimProfileRenameDialog_: {
                type: Boolean,
                value: false,
            },
            showESimRemoveProfileDialog_: {
                type: Boolean,
                value: false,
            },
            /** @private {boolean} */
            showHotspotConfigDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * Flag, if true, indicating that the next deviceStates update
             * should set showSimLockDialog_ to true.
             */
            pendingShowSimLockDialog_: {
                type: Boolean,
                value: false,
            },
            showSimLockDialog_: {
                type: Boolean,
                value: false,
            },
            /**
             * eSIM network used in internet detail menu.
             */
            eSimNetworkState_: {
                type: Object,
                value: '',
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kWifiOnOff,
                    Setting.kMobileOnOff,
                    Setting.kCellularAddApn,
                ]),
            },
            errorToastMessage_: {
                type: String,
                value: '',
            },
            /**
             * Return true if hotspot feature flag is enabled.
             */
            isHotspotFeatureEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isHotspotEnabled') &&
                        loadTimeData.getBoolean('isHotspotEnabled');
                },
            },
            /**
             * Whether the 'Add custom APN' button is disabled.
             */
            isCreateCustomApnButtonDisabled_: {
                type: Boolean,
            },
            /**
             * Passpoint subscription set by show-passpoint-detail.
             */
            passpointSubscription_: {
                type: Object,
                notify: true,
            },
        };
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.INTERNET;
        /**
         * Type of last detail page visited
         */
        this.detailType_ = null;
        this.browserProxy_ = InternetPageBrowserProxyImpl.getInstance();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
    }
    ready() {
        super.ready();
        this.addEventListener('device-enabled-toggled', (event) => {
            this.onDeviceEnabledToggled_(event);
        });
        this.addEventListener('network-connect', (event) => {
            this.onNetworkConnect_(event);
        });
        this.addEventListener('show-cellular-setup', (event) => {
            this.onShowCellularSetupDialog_(event);
        });
        this.addEventListener('show-config', (event) => {
            this.onShowConfig_(event);
        });
        this.addEventListener('show-detail', (event) => {
            this.onShowDetail_(event);
        });
        this.addEventListener('show-known-networks', (event) => {
            this.onShowKnownNetworks_(event);
        });
        this.addEventListener('show-networks', (event) => {
            this.onShowNetworks_(event);
        });
        this.addEventListener('show-esim-profile-rename-dialog', (event) => {
            this.onShowEsimProfileRenameDialog_(event);
        });
        this.addEventListener('show-esim-remove-profile-dialog', (event) => {
            this.onShowEsimRemoveProfileDialog_(event);
        });
        this.addEventListener('show-hotspot-config-dialog', () => {
            this.onShowHotspotConfigDialog_();
        });
        this.addEventListener('show-passpoint-detail', (event) => {
            this.onShowPasspointDetails_(event);
        });
        this.addEventListener('show-error-toast', (event) => {
            this.onShowErrorToast_(event);
        });
        [routes.INTERNET_NETWORKS,
            routes.NETWORK_DETAIL,
            routes.KNOWN_NETWORKS,
            routes.HOTSPOT_DETAIL,
            routes.APN,
            routes.PASSPOINT_DETAIL,
        ].forEach((route) => {
            this.addFocusConfig(route, () => {
                if (this.detailType_ !== null) {
                    const rowForDetailType = this.shadowRoot.querySelector('network-summary').getNetworkRow(this.detailType_);
                    // Note: It is possible that the row is no longer present in the DOM
                    // (e.g., when a Cellular dongle is unplugged or when Instant
                    // Tethering becomes unavailable due to the Bluetooth controller
                    // disconnecting).
                    if (rowForDetailType) {
                        return rowForDetailType.shadowRoot.querySelector('.subpage-arrow');
                    }
                }
                return null;
            });
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.onPoliciesApplied(/*userhash=*/ '');
        this.onVpnProvidersChanged();
        this.onNetworkStateListChanged();
    }
    /**
     * Overridden from DeepLinkingMixin.
     */
    beforeDeepLinkAttempt(settingId) {
        // Manually show the deep links for settings nested within elements.
        let networkType = null;
        if (settingId === Setting.kWifiOnOff) {
            networkType = NetworkType.kWiFi;
        }
        else if (settingId === Setting.kMobileOnOff) {
            networkType = NetworkType.kCellular;
        }
        else {
            return true;
        }
        afterNextRender(this, () => {
            const networkRow = this.shadowRoot.querySelector('network-summary').getNetworkRow(networkType);
            if (networkRow) {
                const toggleEl = networkRow.getDeviceEnabledToggle();
                if (toggleEl) {
                    this.showDeepLinkElement(toggleEl);
                    return;
                }
            }
            console.warn(`Element with deep link id ${settingId} not focusable.`);
        });
        // Stop deep link attempt since we completed it manually.
        return false;
    }
    /**
     * RouteOriginMixin override
     */
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === this.route || newRoute === routes.APN) {
            // Show deep links for the internet page.
            this.attemptDeepLink();
        }
        else if (newRoute === routes.INTERNET_NETWORKS) {
            // Handle direct navigation to the networks page,
            // e.g. chrome://settings/internet/networks?type=WiFi
            const queryParams = Router.getInstance().getQueryParameters();
            const type = queryParams.get('type');
            if (type) {
                this.subpageType_ = OncMojo.getNetworkTypeFromString(type);
            }
            if (!oldRoute && queryParams.get('showCellularSetup') === 'true') {
                const pageName = queryParams.get('showPsimFlow') === 'true' ?
                    CellularSetupPageName.PSIM_FLOW_UI :
                    CellularSetupPageName.ESIM_FLOW_UI;
                // If the page just loaded, deviceStates will not be fully initialized
                // yet. Set pendingShowCellularSetupDialogAttemptPageName_ to indicate
                // showCellularSetupDialogAttempt_() should be called next deviceStates
                // update.
                this.pendingShowCellularSetupDialogAttemptPageName_ = pageName;
            }
            // If the page just loaded, deviceStates will not be fully initialized
            // yet. Set pendingShowSimLockDialog_ to indicate
            // showSimLockDialog_ should be set next deviceStates
            // update.
            this.pendingShowSimLockDialog_ = !oldRoute &&
                !!queryParams.get('showSimLockDialog') &&
                this.subpageType_ === NetworkType.kCellular;
        }
        else if (newRoute === routes.KNOWN_NETWORKS) {
            // Handle direct navigation to the known networks page,
            // e.g. chrome://settings/internet/knownNetworks?type=WiFi
            const queryParams = Router.getInstance().getQueryParameters();
            const type = queryParams.get('type');
            if (type) {
                this.knownNetworksType_ = OncMojo.getNetworkTypeFromString(type);
            }
            else {
                this.knownNetworksType_ = NetworkType.kWiFi;
            }
        }
    }
    /** NetworkListenerBehavior override */
    onNetworkStateListChanged() {
        hasActiveCellularNetwork().then((hasActive) => {
            this.hasActiveCellularNetwork_ = hasActive;
        });
        this.updateIsConnectedToNonCellularNetwork_();
    }
    async onVpnProvidersChanged() {
        const response = await this.networkConfig_.getVpnProviders();
        const providers = response.providers;
        providers.sort(this.compareVpnProviders_);
        this.vpnProviders_ = providers;
    }
    async onPoliciesApplied(_userhash) {
        const response = await this.networkConfig_.getGlobalPolicy();
        this.globalPolicy_ = response.result;
    }
    async updateIsConnectedToNonCellularNetwork_() {
        const isConnected = await isConnectedToNonCellularNetwork();
        this.isConnectedToNonCellularNetwork_ = isConnected;
        return isConnected;
    }
    /**
     * Event triggered by a device state enabled toggle.
     */
    onDeviceEnabledToggled_(event) {
        this.networkConfig_.setNetworkTypeEnabledState(event.detail.type, event.detail.enabled);
        recordSettingChange();
    }
    onShowConfig_(event) {
        const type = OncMojo.getNetworkTypeFromString(event.detail.type);
        if (!event.detail.guid) {
            // New configuration
            this.showConfig_(/* configAndConnect= */ true, type);
        }
        else {
            this.showConfig_(
            /* configAndConnect= */ false, type, event.detail.guid, event.detail.name);
        }
    }
    onShowCellularSetupDialog_(event) {
        this.attemptShowCellularSetupDialog_(event.detail.pageName);
    }
    /**
     * Opens the cellular setup dialog if pageName is PSIM_FLOW_UI, or if pageName
     * is ESIM_FLOW_UI and isConnectedToNonCellularNetwork_ is true. If
     * isConnectedToNonCellularNetwork_ is false, shows an error toast.
     */
    attemptShowCellularSetupDialog_(pageName) {
        const cellularDeviceState = this.getDeviceState_(NetworkType.kCellular, this.deviceStates);
        if (!cellularDeviceState ||
            cellularDeviceState.deviceState !== DeviceStateType.kEnabled) {
            this.showErrorToast_(this.i18n('eSimMobileDataNotEnabledErrorToast'));
            return;
        }
        if (pageName === CellularSetupPageName.PSIM_FLOW_UI) {
            this.showCellularSetupDialog_ = true;
            this.cellularSetupDialogPageName_ = pageName;
        }
        else {
            this.attemptShowEsimSetupDialog_();
        }
    }
    async attemptShowEsimSetupDialog_() {
        const numProfiles = await getNumESimProfiles();
        if (numProfiles >= ESIM_PROFILE_LIMIT) {
            this.showErrorToast_(this.i18n('eSimProfileLimitReachedErrorToast', ESIM_PROFILE_LIMIT));
            return;
        }
        // isConnectedToNonCellularNetwork_ may
        // not be fetched yet if the page just opened, fetch it
        // explicitly.
        const isConnected = await this.updateIsConnectedToNonCellularNetwork_();
        this.showCellularSetupDialog_ =
            isConnected || loadTimeData.getBoolean('bypassConnectivityCheck');
        if (!this.showCellularSetupDialog_) {
            this.showErrorToast_(this.i18n('eSimNoConnectionErrorToast'));
            return;
        }
        this.cellularSetupDialogPageName_ = CellularSetupPageName.ESIM_FLOW_UI;
    }
    onShowErrorToast_(event) {
        this.showErrorToast_(event.detail);
    }
    showErrorToast_(message) {
        this.errorToastMessage_ = message;
        this.$.errorToast.show();
    }
    onCloseCellularSetupDialog_() {
        this.showCellularSetupDialog_ = false;
    }
    showConfig_(configAndConnect, type, guid, name) {
        assert(type !== NetworkType.kCellular && type !== NetworkType.kTether);
        if (this.showInternetConfig_) {
            return;
        }
        this.showInternetConfig_ = true;
        // Async call to ensure dialog is stamped.
        setTimeout(() => {
            const configDialog = castExists(this.shadowRoot.querySelector('#configDialog'));
            configDialog.type = OncMojo.getNetworkTypeString(type);
            configDialog.guid = guid || '';
            configDialog.name = name || '';
            configDialog.showConnect = configAndConnect;
            configDialog.open();
        });
    }
    onInternetConfigClose_() {
        this.showInternetConfig_ = false;
    }
    onShowDetail_(event) {
        const networkState = event.detail;
        this.detailType_ = networkState.type;
        const params = new URLSearchParams();
        params.append('guid', networkState.guid);
        params.append('type', OncMojo.getNetworkTypeString(networkState.type));
        params.append('name', OncMojo.getNetworkStateDisplayNameUnsafe(networkState));
        Router.getInstance().navigateTo(routes.NETWORK_DETAIL, params);
    }
    onShowEsimProfileRenameDialog_(event) {
        this.eSimNetworkState_ = event.detail.networkState;
        this.showESimProfileRenameDialog_ = true;
    }
    onCloseEsimProfileRenameDialog_() {
        this.showESimProfileRenameDialog_ = false;
    }
    onShowEsimRemoveProfileDialog_(event) {
        this.eSimNetworkState_ = event.detail.networkState;
        this.showESimRemoveProfileDialog_ = true;
    }
    onCloseEsimRemoveProfileDialog_() {
        this.showESimRemoveProfileDialog_ = false;
    }
    onShowHotspotConfigDialog_() {
        this.showHotspotConfigDialog_ = true;
    }
    onCloseHotspotConfigDialog_() {
        this.showHotspotConfigDialog_ = false;
    }
    onShowNetworks_(event) {
        this.showNetworksSubpage_(event.detail);
    }
    getNetworksPageTitle_() {
        // The shared Cellular/Tether subpage is referred to as "Mobile".
        // TODO(khorimoto): Remove once Cellular/Tether are split into their own
        // sections.
        if (this.subpageType_ === NetworkType.kCellular ||
            this.subpageType_ === NetworkType.kTether) {
            return this.i18n('OncTypeMobile');
        }
        return this.i18n('OncType' + OncMojo.getNetworkTypeString(this.subpageType_));
    }
    isProviderLocked_() {
        if (!this.isCellularCarrierLockEnabled_) {
            return false;
        }
        if (this.subpageType_ !== NetworkType.kCellular) {
            return false;
        }
        // Check carrier lock status reported by carrier lock manager.
        const cellularDeviceState = this.getDeviceState_(NetworkType.kCellular, this.deviceStates);
        if (!cellularDeviceState || !cellularDeviceState.isCarrierLocked) {
            return false;
        }
        return true;
    }
    getDeviceState_(subpageType, deviceStates) {
        if (subpageType === undefined) {
            return undefined;
        }
        // If both Tether and Cellular are enabled, use the Cellular device state
        // when directly navigating to the Tether page.
        if (subpageType === NetworkType.kTether &&
            this.deviceStates[NetworkType.kCellular]) {
            subpageType = NetworkType.kCellular;
        }
        return deviceStates[subpageType];
    }
    getTetherDeviceState_(deviceStates) {
        return deviceStates[NetworkType.kTether];
    }
    onDeviceStatesChanged_(newValue, _oldValue) {
        const wifiDeviceState = this.getDeviceState_(NetworkType.kWiFi, newValue);
        let managedNetworkAvailable = false;
        if (wifiDeviceState) {
            managedNetworkAvailable = !!wifiDeviceState.managedNetworkAvailable;
        }
        if (this.managedNetworkAvailable !== managedNetworkAvailable) {
            this.managedNetworkAvailable = managedNetworkAvailable;
        }
        assert(this.deviceStates);
        const vpn = this.deviceStates[NetworkType.kVPN];
        this.vpnIsProhibited_ =
            !!vpn && vpn.deviceState === DeviceStateType.kProhibited;
        if (this.detailType_ && !this.deviceStates[this.detailType_]) {
            // If the device type associated with the current network has been
            // removed (e.g., due to unplugging a Cellular dongle), the details page,
            // if visible, displays controls which are no longer functional. If this
            // case occurs, close the details page.
            const detailPage = this.shadowRoot.querySelector('settings-internet-detail-subpage');
            if (detailPage) {
                detailPage.close();
            }
        }
        if (this.pendingShowCellularSetupDialogAttemptPageName_) {
            this.attemptShowCellularSetupDialog_(this.pendingShowCellularSetupDialogAttemptPageName_);
            this.pendingShowCellularSetupDialogAttemptPageName_ = null;
        }
        if (this.pendingShowSimLockDialog_) {
            this.showSimLockDialog_ = true;
            this.pendingShowSimLockDialog_ = false;
        }
    }
    onShowKnownNetworks_(event) {
        const type = event.detail;
        this.detailType_ = type;
        this.knownNetworksType_ = type;
        const params = new URLSearchParams();
        params.append('type', OncMojo.getNetworkTypeString(type));
        Router.getInstance().navigateTo(routes.KNOWN_NETWORKS, params);
    }
    onAddWiFiClick_() {
        this.showConfig_(true /* configAndConnect */, NetworkType.kWiFi);
    }
    onAddVpnClick_() {
        if (!this.disableVpnUi_) {
            this.showConfig_(true /* configAndConnect */, NetworkType.kVPN);
        }
    }
    onAddThirdPartyVpnClick_(event) {
        const provider = event.model.item;
        this.browserProxy_.addThirdPartyVpn(provider.appId);
        recordSettingChange();
    }
    showNetworksSubpage_(type) {
        this.detailType_ = type;
        const params = new URLSearchParams();
        params.append('type', OncMojo.getNetworkTypeString(type));
        this.subpageType_ = type;
        Router.getInstance().navigateTo(routes.INTERNET_NETWORKS, params);
    }
    compareVpnProviders_(vpnProvider1, vpnProvider2) {
        // Show Extension VPNs before Arc VPNs.
        if (vpnProvider1.type < vpnProvider2.type) {
            return -1;
        }
        if (vpnProvider1.type > vpnProvider2.type) {
            return 1;
        }
        // Show VPNs of the same type by lastLaunchTime.
        if (vpnProvider1.lastLaunchTime.internalValue >
            vpnProvider2.lastLaunchTime.internalValue) {
            return -1;
        }
        if (vpnProvider1.lastLaunchTime.internalValue <
            vpnProvider2.lastLaunchTime.internalValue) {
            return 1;
        }
        return 0;
    }
    wifiIsEnabled_(deviceStates) {
        const wifi = deviceStates[NetworkType.kWiFi];
        return !!wifi && wifi.deviceState === DeviceStateType.kEnabled;
    }
    shouldShowAddWiFiRow_(globalPolicy, managedNetworkAvailable, deviceStates) {
        return this.allowAddWiFiConnection_(globalPolicy, managedNetworkAvailable) &&
            this.wifiIsEnabled_(deviceStates);
    }
    allowAddWiFiConnection_(globalPolicy, managedNetworkAvailable) {
        if (!globalPolicy) {
            return true;
        }
        return !globalPolicy.allowOnlyPolicyWifiNetworksToConnect &&
            (!globalPolicy.allowOnlyPolicyWifiNetworksToConnectIfAvailable ||
                !managedNetworkAvailable);
    }
    allowAddConnection_(globalPolicy, managedNetworkAvailable) {
        if (!this.vpnIsProhibited_) {
            return true;
        }
        return this.allowAddWiFiConnection_(globalPolicy, managedNetworkAvailable);
    }
    shouldDisableVpnUi_() {
        if (this.vpnIsProhibited_) {
            return true;
        }
        if (!this.prefs) {
            return false;
        }
        const isVpnConfigProhibited = this.prefs.vpn_config_allowed && !this.prefs.vpn_config_allowed.value;
        const hasAlwaysOnVpnWithLockdown = this.prefs.arc && this.prefs.arc.vpn &&
            this.prefs.arc.vpn.always_on && this.prefs.arc.vpn.always_on.lockdown &&
            this.prefs.arc.vpn.always_on.lockdown.value;
        return isVpnConfigProhibited && hasAlwaysOnVpnWithLockdown;
    }
    getAddThirdPartyVpnLabel_(provider) {
        return this.i18n('internetAddThirdPartyVPN', provider.providerName || '');
    }
    /**
     * Handles UI requests to connect to a network.
     * TODO(stevenjb): Handle Cellular activation, etc.
     */
    async onNetworkConnect_(event) {
        const networkState = event.detail.networkState;
        const type = networkState.type;
        const displayName = OncMojo.getNetworkStateDisplayNameUnsafe(networkState);
        if (!event.detail.bypassConnectionDialog && type === NetworkType.kTether &&
            !networkState.typeState.tether.hasConnectedToHost) {
            const params = new URLSearchParams();
            params.append('guid', networkState.guid);
            params.append('type', OncMojo.getNetworkTypeString(type));
            params.append('name', displayName);
            params.append('showConfigure', true.toString());
            Router.getInstance().navigateTo(routes.NETWORK_DETAIL, params);
            return;
        }
        if (OncMojo.networkTypeHasConfigurationFlow(type) &&
            (!OncMojo.isNetworkConnectable(networkState) ||
                !!networkState.errorState)) {
            this.showConfig_(true /* configAndConnect */, type, networkState.guid, displayName);
            return;
        }
        const response = await this.networkConfig_.startConnect(networkState.guid);
        switch (response.result) {
            case StartConnectResult.kSuccess:
                return;
            case StartConnectResult.kInvalidGuid:
            case StartConnectResult.kInvalidState:
            case StartConnectResult.kCanceled:
                // TODO(stevenjb/khorimoto): Consider handling these cases.
                return;
            case StartConnectResult.kNotConfigured:
                if (OncMojo.networkTypeHasConfigurationFlow(type)) {
                    this.showConfig_(true /* configAndConnect */, type, networkState.guid, displayName);
                }
                return;
            case StartConnectResult.kBlocked:
            // This shouldn't happen, the UI should prevent this, fall through and
            // show the error.
            case StartConnectResult.kUnknown:
                console.warn('startConnect failed for: ' + networkState.guid +
                    ' Error: ' + response.message);
                return;
        }
        assertNotReached();
    }
    /**
     * Handles UI requests to add new APN.
     */
    onCreateCustomApnClicked_() {
        if (this.isCreateCustomApnButtonDisabled_) {
            return;
        }
        const apnSubpage = castExists(this.shadowRoot.querySelector('#apnSubpage'));
        apnSubpage.openApnDetailDialogInCreateMode();
    }
    onShowPasspointDetails_(event) {
        this.passpointSubscription_ = event.detail;
        const params = new URLSearchParams();
        params.append('id', this.passpointSubscription_.id);
        Router.getInstance().navigateTo(routes.PASSPOINT_DETAIL, params);
    }
    getPasspointSubscriptionName_(subscription) {
        if (!subscription) {
            return '';
        }
        if (subscription.friendlyName && subscription.friendlyName !== '') {
            return subscription.friendlyName;
        }
        return subscription.domains[0];
    }
    showHotspotSpinner_() {
        if (!this.hotspotInfo) {
            return false;
        }
        return this.hotspotInfo.state === HotspotState.kEnabling ||
            this.hotspotInfo.state === HotspotState.kDisabling;
    }
}
customElements.define(SettingsInternetPageElement.is, SettingsInternetPageElement);
