// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-internet-detail' is the settings subpage containing details
 * for a network.
 */
import 'chrome://resources/ash/common/network/cr_policy_network_indicator_mojo.js';
import 'chrome://resources/ash/common/network/network_apnlist.js';
import 'chrome://resources/ash/common/network/network_choose_mobile.js';
import 'chrome://resources/ash/common/network/network_config_toggle.js';
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/ash/common/network/network_ip_config.js';
import 'chrome://resources/ash/common/network/network_nameservers.js';
import 'chrome://resources/ash/common/network/network_property_list_mojo.js';
import 'chrome://resources/ash/common/network/network_siminfo.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_toggle/cr_toggle.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import '/shared/settings/controls/controlled_button.js';
import '/shared/settings/controls/settings_toggle_button.js';
import './cellular_roaming_toggle_button.js';
import './internet_shared.css.js';
import './network_proxy_section.js';
import './passpoint_remove_dialog.js';
import './settings_traffic_counters.js';
import './tether_connection_dialog.js';
import { MojoConnectivityProvider } from 'chrome://resources/ash/common/connectivity/mojo_connectivity_provider.js';
import { getApnDisplayName, isActiveSim, processDeviceState } from 'chrome://resources/ash/common/network/cellular_utils.js';
import { CrPolicyNetworkBehaviorMojo } from 'chrome://resources/ash/common/network/cr_policy_network_behavior_mojo.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { ActivationStateType, HiddenSsidMode, MatchType, SecurityType, VpnType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { ConnectionStateType, DeviceStateType, IPConfigType, NetworkType, OncSource, PolicySource, PortalState } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { afterNextRender, flush, mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists, castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { OsSyncBrowserProxyImpl } from '../os_people_page/os_sync_browser_proxy.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './internet_detail_subpage.html.js';
import { InternetPageBrowserProxyImpl } from './internet_page_browser_proxy.js';
const SettingsInternetDetailPageElementBase = mixinBehaviors([
    NetworkListenerBehavior,
    CrPolicyNetworkBehaviorMojo,
], DeepLinkingMixin(PrefsMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
export class SettingsInternetDetailPageElement extends SettingsInternetDetailPageElementBase {
    static get is() {
        return 'settings-internet-detail-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** The network GUID to display details for. */
            guid: String,
            /**
             * Whether network configuration properties sections should be shown. The
             * advanced section is not controlled by this property.
             */
            showConfigurableSections_: {
                type: Boolean,
                value: true,
                computed: 'computeShowConfigurableSections_(deviceState_, managedProperties_)',
            },
            isWifiSyncEnabled_: Boolean,
            managedProperties_: {
                type: Object,
                observer: 'managedPropertiesChanged_',
            },
            deviceState_: {
                type: Object,
                value: null,
            },
            isSecondaryUser_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isSecondaryUser');
                },
                readOnly: true,
            },
            primaryUserEmail_: {
                type: String,
                value() {
                    return loadTimeData.getBoolean('isSecondaryUser') ?
                        loadTimeData.getString('primaryUserEmail') :
                        '';
                },
                readOnly: true,
            },
            /**
             * Whether the network has been lost (e.g., has gone out of range). A
             * network is considered to be lost when a OnNetworkStateListChanged
             * is signaled and the new network list does not contain the GUID of the
             * current network.
             */
            outOfRange_: {
                type: Boolean,
                value: false,
            },
            /**
             * Highest priority connected network or null.
             */
            defaultNetwork: {
                type: Object,
                value: null,
            },
            globalPolicy: Object,
            /**
             * Whether a managed network is available in the visible network list.
             */
            managedNetworkAvailable: {
                type: Boolean,
                value: false,
            },
            /**
             * The network AutoConnect state as a fake preference object.
             */
            autoConnectPref_: {
                type: Object,
                observer: 'autoConnectPrefChanged_',
                value() {
                    return {
                        key: 'fakeAutoConnectPref',
                        type: chrome.settingsPrivate.PrefType.BOOLEAN,
                        value: false,
                    };
                },
            },
            /**
             * The network hidden state as a fake preference object.
             */
            hiddenPref_: {
                type: Object,
                observer: 'hiddenPrefChanged_',
                value() {
                    return {
                        key: 'fakeHiddenPref',
                        type: chrome.settingsPrivate.PrefType.BOOLEAN,
                        value: false,
                    };
                },
            },
            /**
             * The always-on VPN state as a fake preference object.
             */
            alwaysOnVpn_: {
                type: Object,
                observer: 'alwaysOnVpnChanged_',
                value() {
                    return {
                        key: 'fakeAlwaysOnPref',
                        type: chrome.settingsPrivate.PrefType.BOOLEAN,
                        value: false,
                    };
                },
            },
            /**
             * This gets initialized to managedProperties_.metered.activeValue.
             * When this is changed from the UI, a change event will update the
             * property and setMojoNetworkProperties will be called.
             */
            meteredOverride_: {
                type: Boolean,
                value: false,
            },
            /**
             * The network preferred state.
             */
            preferNetwork_: {
                type: Boolean,
                value: false,
                observer: 'preferNetworkChanged_',
            },
            /**
             * The network IP Address.
             */
            ipAddress_: {
                type: String,
                value: '',
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
            showMeteredToggle_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('showMeteredToggle') &&
                        loadTimeData.getBoolean('showMeteredToggle');
                },
            },
            /**
             * Whether to show the Hidden toggle on configured wifi networks (flag).
             */
            showHiddenToggle_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('showHiddenToggle') &&
                        loadTimeData.getBoolean('showHiddenToggle');
                },
            },
            isTrafficCountersEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('trafficCountersEnabled') &&
                        loadTimeData.getBoolean('trafficCountersEnabled');
                },
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
            isApnRevampEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isApnRevampEnabled') &&
                        loadTimeData.getBoolean('isApnRevampEnabled');
                },
            },
            isSuppressTextMessagesEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isSuppressTextMessagesEnabled') &&
                        loadTimeData.getBoolean('isSuppressTextMessagesEnabled');
                },
            },
            isCellularCarrierLockEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isCellularCarrierLockEnabled') &&
                        loadTimeData.getBoolean('isCellularCarrierLockEnabled');
                },
            },
            isPasspointEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.valueExists('isPasspointEnabled') &&
                        loadTimeData.getBoolean('isPasspointEnabled');
                },
            },
            isPasspointSettingsEnabled_: {
                type: Boolean,
                readOnly: true,
                value() {
                    return loadTimeData.valueExists('isPasspointSettingsEnabled') &&
                        loadTimeData.getBoolean('isPasspointSettingsEnabled');
                },
            },
            passpointSubscription_: {
                type: Object,
                notify: true,
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
                },
            },
            advancedExpanded_: Boolean,
            networkExpanded_: Boolean,
            proxyExpanded_: Boolean,
            dataUsageExpanded_: Boolean,
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kConfigureEthernet,
                    Setting.kEthernetAutoConfigureIp,
                    Setting.kEthernetDns,
                    Setting.kEthernetProxy,
                    Setting.kDisconnectWifiNetwork,
                    Setting.kPreferWifiNetwork,
                    Setting.kForgetWifiNetwork,
                    Setting.kWifiAutoConfigureIp,
                    Setting.kWifiDns,
                    Setting.kWifiHidden,
                    Setting.kWifiProxy,
                    Setting.kWifiAutoConnectToNetwork,
                    Setting.kCellularSimLock,
                    Setting.kCellularRoaming,
                    Setting.kCellularApn,
                    Setting.kDisconnectCellularNetwork,
                    Setting.kCellularAutoConfigureIp,
                    Setting.kCellularDns,
                    Setting.kCellularProxy,
                    Setting.kCellularAutoConnectToNetwork,
                    Setting.kDisconnectTetherNetwork,
                    Setting.kWifiMetered,
                    Setting.kCellularMetered,
                ]),
            },
        };
    }
    static get observers() {
        return [
            'updateAlwaysOnVpnPrefValue_(prefs.arc.vpn.always_on.*)',
            'updateAlwaysOnVpnPrefEnforcement_(managedProperties_,' +
                'prefs.vpn_config_allowed.*)',
            'updateAutoConnectPref_(globalPolicy)',
            'autoConnectPrefChanged_(autoConnectPref_.*)',
            'alwaysOnVpnChanged_(alwaysOnVpn_.*)',
            'hiddenPrefChanged_(hiddenPref_.*)',
        ];
    }
    constructor() {
        super();
        this.CR_EXPAND_BUTTON_TAG = 'CR-EXPAND-BUTTON';
        this.didSetFocus_ = false;
        /**
         * Set to true to once the initial properties have been received. This
         * prevents setProperties from being called when setting default properties.
         */
        this.propertiesReceived_ = false;
        /**
         * Set in currentRouteChanged() if the showConfigure URL query
         * parameter is set to true. The dialog cannot be shown until the
         * network properties have been fetched in managedPropertiesChanged_().
         */
        this.shouldShowConfigureWhenNetworkLoaded_ = false;
        /**
         * Prevents re-saving incoming changes.
         */
        this.applyingChanges_ = false;
        /**
         * Flag, if true, indicating that the next deviceState_ update
         * should call deepLinkToSimLockElement_().
         */
        this.pendingSimLockDeepLink_ = false;
        this.browserProxy_ = InternetPageBrowserProxyImpl.getInstance();
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        if (this.isPasspointSettingsEnabled_) {
            this.passpointService_ =
                MojoConnectivityProvider.getInstance().getPasspointService();
        }
        this.osSyncBrowserProxy_ = OsSyncBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('os-sync-prefs-changed', this.handleOsSyncPrefsChanged_.bind(this));
        this.osSyncBrowserProxy_.sendOsSyncPrefsChanged();
    }
    afterRenderShowDeepLink_(settingId, elementCallback) {
        // Wait for element to load.
        afterNextRender(this, () => {
            const deepLinkElement = elementCallback();
            if (!deepLinkElement || deepLinkElement.hidden) {
                console.warn(`Element with deep link id ${settingId} not focusable.`);
                return;
            }
            this.showDeepLinkElement(deepLinkElement);
        });
    }
    /**
     * Overridden from DeepLinkingMixin.
     */
    beforeDeepLinkAttempt(settingId) {
        // Manually show the deep links for settings in shared elements.
        if (settingId === Setting.kCellularRoaming) {
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('cellular-roaming-toggle-button')
                .getCellularRoamingToggle());
            // Stop deep link attempt since we completed it manually.
            return false;
        }
        if (settingId === Setting.kCellularApn) {
            this.networkExpanded_ = true;
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-apnlist').getApnSelect());
            return false;
        }
        if (settingId === Setting.kEthernetAutoConfigureIp ||
            settingId === Setting.kWifiAutoConfigureIp ||
            settingId === Setting.kCellularAutoConfigureIp) {
            this.networkExpanded_ = true;
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-ip-config')
                .getAutoConfigIpToggle());
            return false;
        }
        if (settingId === Setting.kEthernetDns || settingId === Setting.kWifiDns ||
            settingId === Setting.kCellularDns) {
            this.networkExpanded_ = true;
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-nameservers')
                .getNameserverRadioButtons());
            return false;
        }
        if (settingId === Setting.kEthernetProxy ||
            settingId === Setting.kWifiProxy ||
            settingId === Setting.kCellularProxy) {
            this.proxyExpanded_ = true;
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-proxy-section')
                .getAllowSharedToggle());
            return false;
        }
        if (settingId === Setting.kWifiMetered ||
            settingId === Setting.kCellularMetered) {
            this.advancedExpanded_ = true;
            // Continue with automatically showing these deep links.
            return true;
        }
        if (settingId === Setting.kForgetWifiNetwork) {
            this.afterRenderShowDeepLink_(settingId, () => {
                const forgetButton = this.shadowRoot.getElementById('forgetButton');
                if (forgetButton && !forgetButton.hidden) {
                    return forgetButton;
                }
                // If forget button is hidden, show disconnect button instead.
                return this.shadowRoot.getElementById('connectDisconnect');
            });
            return false;
        }
        if (settingId === Setting.kCellularSimLock) {
            this.advancedExpanded_ = true;
            // If the page just loaded, deviceState_ will not be fully initialized
            // yet, so we won't know which SIM info element to focus. Set
            // pendingSimLockDeepLink_ to indicate that a SIM info element should be
            // focused next deviceState_ update.
            this.pendingSimLockDeepLink_ = true;
            return false;
        }
        // Otherwise, should continue with deep link attempt.
        return true;
    }
    /**
     * RouteObserverMixin override
     */
    currentRouteChanged(route, oldRoute) {
        if (route !== routes.NETWORK_DETAIL) {
            return;
        }
        const queryParams = Router.getInstance().getQueryParameters();
        const guid = queryParams.get('guid') || '';
        if (!guid) {
            console.warn('No guid specified for page:' + route);
            this.close();
        }
        this.shouldShowConfigureWhenNetworkLoaded_ =
            queryParams.get('showConfigure') === 'true';
        const type = queryParams.get('type') || 'WiFi';
        const name = queryParams.get('name') || type;
        this.init(guid, type, name);
        // If we are getting back from APN subpage set focus to the APN subpage
        // row.
        if (oldRoute === routes.APN &&
            Router.getInstance().lastRouteChangeWasPopstate()) {
            this.didSetFocus_ = true;
            afterNextRender(this, () => {
                const element = this.shadowRoot.getElementById('apnSubpageButton');
                if (element) {
                    element.focus();
                }
            });
        }
        this.attemptDeepLink();
    }
    /**
     * Handler for when os sync preferences are updated.
     */
    handleOsSyncPrefsChanged_(osSyncPrefs) {
        this.isWifiSyncEnabled_ =
            !!osSyncPrefs && osSyncPrefs.osWifiConfigurationsSynced;
    }
    init(guid, type, name) {
        this.guid = guid;
        // Set default properties until they are loaded.
        this.propertiesReceived_ = false;
        this.deviceState_ = null;
        this.managedProperties_ = OncMojo.getDefaultManagedProperties(OncMojo.getNetworkTypeFromString(type), this.guid, name);
        this.didSetFocus_ = false;
        this.getNetworkDetails_();
    }
    close() {
        // If the page is already closed, return early to avoid navigating backward
        // erroneously.
        if (!this.guid) {
            return;
        }
        this.guid = '';
        // Delay navigating to allow other subpages to load first.
        requestAnimationFrame(() => {
            // Clear network properties before navigating away to ensure that a future
            // navigation back to the details page does not show a flicker of
            // incorrect text. See https://crbug.com/905986.
            this.managedProperties_ = undefined;
            this.propertiesReceived_ = false;
            if (Router.getInstance().currentRoute === routes.NETWORK_DETAIL) {
                Router.getInstance().navigateToPreviousRoute();
            }
        });
    }
    /** CrosNetworkConfigObserver impl */
    onActiveNetworksChanged(networks) {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        // If the network was or is active, request an update.
        if (this.managedProperties_.connectionState !==
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
    onNetworkStateListChanged() {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        this.checkNetworkExists_();
    }
    /** CrosNetworkConfigObserver impl */
    onDeviceStateListChanged() {
        if (!this.guid || !this.managedProperties_) {
            return;
        }
        this.getDeviceState_();
    }
    managedPropertiesChanged_() {
        if (!this.managedProperties_) {
            return;
        }
        this.updateAutoConnectPref_();
        this.updateHiddenPref_();
        if (this.isSuppressTextMessagesEnabled_ &&
            this.isCellular_(this.managedProperties_) &&
            this.managedProperties_.typeProperties.cellular.allowTextMessages) {
            this.suppressTextMessagesOverride_ = !!OncMojo.getActiveValue(this.managedProperties_.typeProperties.cellular.allowTextMessages);
        }
        const metered = this.managedProperties_.metered;
        if (metered && metered.activeValue !== this.meteredOverride_) {
            this.meteredOverride_ = metered.activeValue;
        }
        const priority = this.managedProperties_.priority;
        if (priority) {
            const preferNetwork = priority.activeValue > 0;
            if (preferNetwork !== this.preferNetwork_) {
                this.preferNetwork_ = preferNetwork;
            }
        }
        // Set the IPAddress property to the IPv4 Address.
        const ipv4 = OncMojo.getIPConfigForType(this.managedProperties_, IPConfigType.kIPv4);
        this.ipAddress_ = (ipv4 && ipv4.ipAddress) || '';
        // Update the detail page title.
        const networkName = OncMojo.getNetworkNameUnsafe(this.managedProperties_);
        this.parentNode.pageTitle = networkName;
        flush();
        if (!this.didSetFocus_ &&
            !Router.getInstance().getQueryParameters().has('search') &&
            !this.getDeepLinkSettingId()) {
            // Unless the page was navigated to via search or has a deep linked
            // setting, focus a button once the initial state is set.
            this.didSetFocus_ = true;
            const button = this.shadowRoot.querySelector('#titleDiv .action-button:not([hidden])');
            if (button) {
                afterNextRender(this, () => button.focus());
            }
        }
        if (this.shouldShowConfigureWhenNetworkLoaded_ &&
            this.managedProperties_.type === NetworkType.kTether) {
            // Set |this.shouldShowConfigureWhenNetworkLoaded_| back to false to
            // ensure that the Tether dialog is only shown once.
            this.shouldShowConfigureWhenNetworkLoaded_ = false;
            // Async call to ensure dialog is stamped.
            setTimeout(() => this.showTetherDialog_());
        }
    }
    async getDeviceState_() {
        if (!this.managedProperties_) {
            return;
        }
        const type = this.managedProperties_.type;
        const response = await this.networkConfig_.getDeviceStateList();
        // If there is no GUID, the page was closed between requesting the device
        // state and receiving it. If this occurs, there is no need to process the
        // response. Note that if this subpage is reopened later, we'll request
        // this data again.
        if (!this.guid) {
            return;
        }
        const { deviceState, shouldGetNetworkDetails } = processDeviceState(type, response.result, this.deviceState_);
        this.deviceState_ = deviceState;
        if (shouldGetNetworkDetails) {
            this.getNetworkDetails_();
        }
        if (this.pendingSimLockDeepLink_) {
            this.pendingSimLockDeepLink_ = false;
            this.deepLinkToSimLockElement_();
        }
    }
    deepLinkToSimLockElement_() {
        const settingId = Setting.kCellularSimLock;
        const simLockStatus = this.deviceState_.simLockStatus;
        // In this rare case, element not focusable until after a second wait.
        // This is slightly preferable to requestAnimationFrame used within
        // network-siminfo to focus elements since it can be reproduced in
        // testing.
        afterNextRender(this, () => {
            if (simLockStatus && !!simLockStatus.lockType) {
                this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-siminfo').getUnlockButton());
                return;
            }
            this.afterRenderShowDeepLink_(settingId, () => this.shadowRoot.querySelector('network-siminfo').getSimLockToggle());
        });
    }
    autoConnectPrefChanged_() {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        config.autoConnect = { value: !!this.autoConnectPref_.value };
        this.setMojoNetworkProperties_(config);
    }
    hiddenPrefChanged_() {
        if (!this.propertiesReceived_) {
            return;
        }
        recordSettingChange(Setting.kWifiHidden, { boolValue: !!this.hiddenPref_.value });
        const config = this.getDefaultConfigProperties_();
        config.typeConfig.wifi.hiddenSsid = this.hiddenPref_.value ?
            HiddenSsidMode.kEnabled :
            HiddenSsidMode.kDisabled;
        this.setMojoNetworkProperties_(config);
    }
    getPolicyEnforcement_(policySource) {
        switch (policySource) {
            case PolicySource.kUserPolicyEnforced:
            case PolicySource.kDevicePolicyEnforced:
                return chrome.settingsPrivate.Enforcement.ENFORCED;
            case PolicySource.kUserPolicyRecommended:
            case PolicySource.kDevicePolicyRecommended:
                return chrome.settingsPrivate.Enforcement.RECOMMENDED;
            default:
                return undefined;
        }
    }
    getPolicyController_(policySource) {
        switch (policySource) {
            case PolicySource.kDevicePolicyEnforced:
            case PolicySource.kDevicePolicyRecommended:
                return chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
            case PolicySource.kUserPolicyEnforced:
            case PolicySource.kUserPolicyRecommended:
                return chrome.settingsPrivate.ControlledBy.USER_POLICY;
            default:
                return undefined;
        }
    }
    /**
     * Updates auto-connect pref value.
     */
    updateAutoConnectPref_() {
        if (!this.managedProperties_) {
            return;
        }
        const autoConnect = OncMojo.getManagedAutoConnect(this.managedProperties_);
        if (!autoConnect) {
            return;
        }
        let enforcement;
        let controlledBy;
        if (this.globalPolicy &&
            this.globalPolicy.allowOnlyPolicyNetworksToAutoconnect) {
            enforcement = chrome.settingsPrivate.Enforcement.ENFORCED;
            controlledBy = chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
        }
        else {
            enforcement = this.getPolicyEnforcement_(autoConnect.policySource);
            controlledBy = this.getPolicyController_(autoConnect.policySource);
        }
        if (this.autoConnectPref_.value === autoConnect.activeValue &&
            enforcement === this.autoConnectPref_.enforcement &&
            controlledBy === this.autoConnectPref_.controlledBy) {
            return;
        }
        const newPrefValue = {
            key: 'fakeAutoConnectPref',
            value: autoConnect.activeValue,
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
        };
        if (enforcement) {
            newPrefValue.enforcement = enforcement;
            newPrefValue.controlledBy = controlledBy;
        }
        this.autoConnectPref_ = newPrefValue;
    }
    updateHiddenPref_() {
        if (!this.managedProperties_) {
            return;
        }
        if (this.managedProperties_.type !== NetworkType.kWiFi) {
            return;
        }
        const hidden = this.managedProperties_.typeProperties.wifi.hiddenSsid;
        if (!hidden) {
            return;
        }
        const enforcement = this.getPolicyEnforcement_(hidden.policySource);
        const controlledBy = this.getPolicyController_(hidden.policySource);
        if (this.hiddenPref_.value === hidden.activeValue &&
            enforcement === this.hiddenPref_.enforcement &&
            controlledBy === this.hiddenPref_.controlledBy) {
            return;
        }
        const newPrefValue = {
            key: 'fakeHiddenPref',
            value: hidden.activeValue,
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
        };
        if (enforcement) {
            newPrefValue.enforcement = enforcement;
            newPrefValue.controlledBy = controlledBy;
        }
        this.hiddenPref_ = newPrefValue;
    }
    suppressTextMessagesChanged_(e) {
        if (!this.isSuppressTextMessagesEnabled_ || !this.propertiesReceived_ ||
            !this.isCellular_(this.managedProperties_) ||
            !this.managedProperties_.typeProperties.cellular.allowTextMessages) {
            return;
        }
        const config = OncMojo.getDefaultConfigProperties(this.managedProperties_.type);
        config.typeConfig.cellular = {
            textMessageAllowState: {
                allowTextMessages: e.detail.value,
            },
            roaming: undefined,
            apn: undefined,
        };
        this.networkConfig_.setProperties(this.guid, config).then(response => {
            if (!response.success) {
                console.warn('Unable to set properties: ' + JSON.stringify(config));
            }
        });
    }
    meteredChanged_(e) {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        config.metered = { value: e.detail.value };
        this.setMojoNetworkProperties_(config);
    }
    preferNetworkChanged_() {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        config.priority = { value: this.preferNetwork_ ? 1 : 0 };
        this.setMojoNetworkProperties_(config);
    }
    async checkNetworkExists_() {
        const response = await this.networkConfig_.getNetworkState(this.guid);
        if (response.result) {
            // Don't update the state, a change event will trigger the update.
            return;
        }
        this.outOfRange_ = true;
        if (this.managedProperties_) {
            // Set the connection state since we won't receive an update for a non
            // existent network.
            this.managedProperties_.connectionState =
                ConnectionStateType.kNotConnected;
        }
    }
    async getNetworkDetails_() {
        assertExists(this.guid);
        if (this.isSecondaryUser_) {
            const response = await this.networkConfig_.getNetworkState(this.guid);
            this.getStateCallback_(response.result);
        }
        else {
            const response = await this.networkConfig_.getManagedProperties(this.guid);
            this.getPropertiesCallback_(response.result);
            if (this.isPasspointSettingsEnabled_ &&
                this.isPasspointWifi_(this.managedProperties_)) {
                const response = await this.passpointService_.getPasspointSubscription(this.managedProperties_.typeProperties.wifi.passpointId);
                this.passpointSubscription_ = response.result;
            }
        }
    }
    getPropertiesCallback_(properties) {
        // Details page was closed while request was in progress, ignore the result.
        if (!this.guid) {
            return;
        }
        if (!properties) {
            // Close the page if the network was removed and no longer exists.
            this.close();
            return;
        }
        this.updateManagedProperties_(properties);
        // Detail page should not be shown when Arc VPN is not connected.
        if (this.isArcVpn_(this.managedProperties_) &&
            !this.isConnectedState_(this.managedProperties_)) {
            this.guid = '';
            this.close();
        }
        this.propertiesReceived_ = true;
        this.outOfRange_ = false;
        if (!this.deviceState_) {
            this.getDeviceState_();
        }
    }
    updateManagedProperties_(properties) {
        this.applyingChanges_ = true;
        if (this.managedProperties_ &&
            this.managedProperties_.type === NetworkType.kCellular &&
            this.deviceState_ && this.deviceState_.scanning) {
            // Cellular properties may be invalid while scanning, so keep the existing
            // properties instead.
            properties.typeProperties.cellular =
                this.managedProperties_.typeProperties.cellular;
        }
        this.managedProperties_ = properties;
        afterNextRender(this, () => {
            this.applyingChanges_ = false;
        });
    }
    getStateCallback_(networkState) {
        if (!networkState) {
            // Edge case, may occur when disabling. Close this.
            this.close();
            return;
        }
        const managedProperties = OncMojo.getDefaultManagedProperties(networkState.type, networkState.guid, networkState.name);
        managedProperties.connectable = networkState.connectable;
        managedProperties.connectionState = networkState.connectionState;
        switch (networkState.type) {
            case NetworkType.kCellular:
                managedProperties.typeProperties.cellular.signalStrength =
                    networkState.typeState.cellular.signalStrength;
                managedProperties.typeProperties.cellular.simLocked =
                    networkState.typeState.cellular.simLocked;
                break;
            case NetworkType.kTether:
                managedProperties.typeProperties.tether.signalStrength =
                    networkState.typeState.tether.signalStrength;
                break;
            case NetworkType.kWiFi:
                managedProperties.typeProperties.wifi.signalStrength =
                    networkState.typeState.wifi.signalStrength;
                break;
        }
        this.updateManagedProperties_(managedProperties);
        this.propertiesReceived_ = true;
        this.outOfRange_ = false;
    }
    getNetworkState_(properties) {
        if (!properties) {
            return undefined;
        }
        return OncMojo.managedPropertiesToNetworkState(properties);
    }
    getDefaultConfigProperties_() {
        return OncMojo.getDefaultConfigProperties(this.managedProperties_.type);
    }
    async setMojoNetworkProperties_(config) {
        if (!this.propertiesReceived_ || !this.guid || this.applyingChanges_) {
            return;
        }
        recordSettingChange();
        const response = await this.networkConfig_.setProperties(this.guid, config);
        if (!response.success) {
            console.warn('Unable to set properties: ' + JSON.stringify(config));
            // An error typically indicates invalid input; request the properties
            // to update any invalid fields.
            this.getNetworkDetails_();
        }
    }
    getStateText_(managedProperties, propertiesReceived, outOfRange, deviceState) {
        if (!managedProperties || !propertiesReceived) {
            return '';
        }
        if (this.isOutOfRangeOrNotEnabled_(outOfRange, deviceState)) {
            return managedProperties.type === NetworkType.kTether ?
                this.i18n('tetherPhoneOutOfRange') :
                this.i18n('networkOutOfRange');
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
        if (this.isCellularCarrierLockEnabled_ &&
            this.isCarrierLockedActiveSim_(managedProperties, deviceState)) {
            return this.i18n('networkMobileProviderLocked');
        }
        return this.i18n(OncMojo.getConnectionStateString(managedProperties.connectionState));
    }
    getAutoConnectToggleLabel_(managedProperties) {
        return this.isCellular_(managedProperties) ?
            this.i18n('networkAutoConnectCellular') :
            this.i18n('networkAutoConnect');
    }
    isConnectedState_(managedProperties) {
        return !!managedProperties &&
            OncMojo.connectionStateIsConnected(managedProperties.connectionState);
    }
    isRestrictedConnectivity_(managedProperties) {
        return !!managedProperties &&
            OncMojo.isRestrictedConnectivity(managedProperties.portalState);
    }
    showConnectedState_(managedProperties) {
        return this.isConnectedState_(managedProperties) &&
            !this.isRestrictedConnectivity_(managedProperties);
    }
    showRestrictedConnectivity_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        // State must be connected and restricted.
        return this.isConnectedState_(managedProperties) &&
            this.isRestrictedConnectivity_(managedProperties);
    }
    isRemembered_(managedProperties) {
        return !!managedProperties && managedProperties.source !== OncSource.kNone;
    }
    isRememberedOrConnected_(managedProperties) {
        return this.isRemembered_(managedProperties) ||
            this.isConnectedState_(managedProperties);
    }
    isCellular_(managedProperties) {
        return !!managedProperties &&
            managedProperties.type === NetworkType.kCellular;
    }
    isTether_(managedProperties) {
        return !!managedProperties &&
            managedProperties.type === NetworkType.kTether;
    }
    isWireGuard_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        if (managedProperties.type !== NetworkType.kVPN) {
            return false;
        }
        if (!managedProperties.typeProperties.vpn) {
            return false;
        }
        return managedProperties.typeProperties.vpn.type === VpnType.kWireGuard;
    }
    isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable) {
        if (!managedProperties || !globalPolicy ||
            this.isPolicySource(managedProperties.source)) {
            return false;
        }
        if (managedProperties.type === NetworkType.kCellular &&
            !!globalPolicy.allowOnlyPolicyCellularNetworks) {
            return true;
        }
        if (managedProperties.type !== NetworkType.kWiFi) {
            return false;
        }
        const hexSsid = OncMojo.getActiveString(managedProperties.typeProperties.wifi.hexSsid);
        return !!globalPolicy.allowOnlyPolicyWifiNetworksToConnect ||
            (!!globalPolicy.allowOnlyPolicyWifiNetworksToConnectIfAvailable &&
                !!managedNetworkAvailable) ||
            (!!hexSsid && !!globalPolicy.blockedHexSsids &&
                globalPolicy.blockedHexSsids.includes(hexSsid));
    }
    shouldShowApnRow_() {
        return this.isApnRevampEnabled_ &&
            this.isCellular_(this.managedProperties_);
    }
    shouldShowApnList_() {
        return !this.isApnRevampEnabled_ &&
            this.isCellular_(this.managedProperties_);
    }
    shouldShowSuppressTextMessagesToggle_() {
        if (!this.isSuppressTextMessagesEnabled_ || !this.managedProperties_ ||
            !this.deviceState_) {
            return false;
        }
        const networkState = this.getNetworkState_(this.managedProperties_);
        if (!networkState) {
            return false;
        }
        // Only show the toggle for the active SIM with the flag enabled.
        return this.isCellular_(this.managedProperties_) &&
            isActiveSim(networkState, this.deviceState_);
    }
    showConnect_(managedProperties, globalPolicy, managedNetworkAvailable, deviceState) {
        if (!managedProperties) {
            return false;
        }
        if (this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            return false;
        }
        // TODO(lgcheng@) support connect Arc VPN from UI once Android support API
        // to initiate a VPN session.
        if (this.isArcVpn_(managedProperties)) {
            return false;
        }
        if (managedProperties.connectionState !==
            ConnectionStateType.kNotConnected) {
            return false;
        }
        if (deviceState && deviceState.deviceState !== DeviceStateType.kEnabled) {
            return false;
        }
        const isEthernet = managedProperties.type === NetworkType.kEthernet;
        // Note: Ethernet networks do not have an explicit "Connect" button in the
        // UI.
        return OncMojo.isNetworkConnectable(managedProperties) && !isEthernet;
    }
    showDisconnect_(managedProperties) {
        if (!managedProperties ||
            managedProperties.type === NetworkType.kEthernet) {
            return false;
        }
        return managedProperties.connectionState !==
            ConnectionStateType.kNotConnected;
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
    showForget_(managedProperties) {
        if (!managedProperties || this.isSecondaryUser_) {
            return false;
        }
        const type = managedProperties.type;
        if (type !== NetworkType.kWiFi && type !== NetworkType.kVPN) {
            return false;
        }
        if (this.isArcVpn_(managedProperties)) {
            return false;
        }
        return !this.isPolicySource(managedProperties.source) &&
            this.isRemembered_(managedProperties);
    }
    showActivate_(managedProperties) {
        if (!managedProperties || this.isSecondaryUser_) {
            return false;
        }
        if (!this.isCellular_(managedProperties)) {
            return false;
        }
        // Only show the Activate button for unactivated pSIM networks.
        if (managedProperties.typeProperties.cellular.eid) {
            return false;
        }
        const activation = managedProperties.typeProperties.cellular.activationState;
        return activation === ActivationStateType.kNotActivated ||
            activation === ActivationStateType.kPartiallyActivated;
    }
    showConfigure_(managedProperties, globalPolicy, managedNetworkAvailable) {
        if (!managedProperties || this.isSecondaryUser_) {
            return false;
        }
        if (this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            return false;
        }
        const type = managedProperties.type;
        if (type === NetworkType.kCellular || type === NetworkType.kTether) {
            return false;
        }
        if (type === NetworkType.kWiFi &&
            managedProperties.typeProperties.wifi.security ===
                SecurityType.kNone) {
            return false;
        }
        if (type === NetworkType.kWiFi &&
            (managedProperties.connectionState !==
                ConnectionStateType.kNotConnected)) {
            return false;
        }
        if (this.isPasspointSettingsEnabled_ &&
            this.isPasspointWifi_(managedProperties)) {
            // Passpoint networks are automatically configured using Passpoint
            // subscriptions. We don't want the user to change the configuration
            // (b/282114074).
            return false;
        }
        if (this.isArcVpn_(managedProperties) &&
            !this.isConnectedState_(managedProperties)) {
            return false;
        }
        return true;
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
    disableForget_(managedProperties, vpnConfigAllowed) {
        if (this.disabled_ || !managedProperties) {
            return true;
        }
        return managedProperties.type === NetworkType.kVPN && vpnConfigAllowed &&
            !vpnConfigAllowed.value;
    }
    disableConfigure_(managedProperties, vpnConfigAllowed) {
        if (this.disabled_ || !managedProperties) {
            return true;
        }
        if (managedProperties.type === NetworkType.kVPN && vpnConfigAllowed &&
            !vpnConfigAllowed.value) {
            return true;
        }
        return this.isPolicySource(managedProperties.source) &&
            !this.hasRecommendedFields_(managedProperties);
    }
    hasRecommendedFields_(managedProperties) {
        if (!managedProperties) {
            return false;
        }
        for (const value of Object.values(managedProperties)) {
            if (typeof value !== 'object' || value === null) {
                continue;
            }
            if ('activeValue' in value) {
                if (this.isNetworkPolicyRecommended(value)) {
                    return true;
                }
            }
            else if (this.hasRecommendedFields_(value)) {
                return true;
            }
        }
        return false;
    }
    showViewAccount_(managedProperties) {
        if (!managedProperties || this.isSecondaryUser_) {
            return false;
        }
        // Show either the 'Activate' or the 'View Account' button (Cellular only).
        if (!this.isCellular_(managedProperties) ||
            this.showActivate_(managedProperties)) {
            return false;
        }
        // If the network is eSIM, don't show.
        if (managedProperties.typeProperties.cellular.eid) {
            return false;
        }
        const paymentPortal = managedProperties.typeProperties.cellular.paymentPortal;
        if (!paymentPortal || !paymentPortal.url) {
            return false;
        }
        // Only show for connected networks or LTE networks with a valid MDN.
        if (!this.isConnectedState_(managedProperties)) {
            const technology = managedProperties.typeProperties.cellular.networkTechnology;
            if (technology !== 'LTE' && technology !== 'LTEAdvanced') {
                return false;
            }
            if (!managedProperties.typeProperties.cellular.mdn) {
                return false;
            }
        }
        return true;
    }
    enableConnect_(managedProperties, defaultNetwork, propertiesReceived, outOfRange, globalPolicy, managedNetworkAvailable, deviceState) {
        if (!this.showConnect_(managedProperties, globalPolicy, managedNetworkAvailable, deviceState)) {
            return false;
        }
        if (!propertiesReceived || outOfRange) {
            return false;
        }
        assertExists(managedProperties);
        if (managedProperties.type === NetworkType.kVPN && !defaultNetwork) {
            return false;
        }
        // Cannot connect to a network which is SIM locked; the user must first
        // unlock the SIM before attempting a connection.
        if (managedProperties.type === NetworkType.kCellular &&
            managedProperties.typeProperties.cellular.simLocked) {
            return false;
        }
        return true;
    }
    updateAlwaysOnVpnPrefValue_() {
        this.alwaysOnVpn_.value = this.prefs.arc && this.prefs.arc.vpn &&
            this.prefs.arc.vpn.always_on && this.prefs.arc.vpn.always_on.lockdown &&
            this.prefs.arc.vpn.always_on.lockdown.value;
    }
    getFakeVpnConfigPrefForEnforcement_() {
        const fakeAlwaysOnVpnEnforcementPref = {
            key: 'fakeAlwaysOnPref',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: false,
        };
        // Only mark VPN networks as enforced. This fake pref also controls the
        // policy indicator on the connect/disconnect buttons, so it shouldn't be
        // shown on non-VPN networks.
        if (this.managedProperties_ &&
            this.managedProperties_.type === NetworkType.kVPN && this.prefs &&
            this.prefs.vpn_config_allowed && !this.prefs.vpn_config_allowed.value) {
            fakeAlwaysOnVpnEnforcementPref.enforcement =
                chrome.settingsPrivate.Enforcement.ENFORCED;
            fakeAlwaysOnVpnEnforcementPref.controlledBy =
                this.prefs.vpn_config_allowed.controlledBy;
        }
        return fakeAlwaysOnVpnEnforcementPref;
    }
    updateAlwaysOnVpnPrefEnforcement_() {
        const prefForEnforcement = this.getFakeVpnConfigPrefForEnforcement_();
        this.alwaysOnVpn_.enforcement = prefForEnforcement.enforcement;
        this.alwaysOnVpn_.controlledBy = prefForEnforcement.controlledBy;
    }
    getTetherDialog_() {
        return castExists(this.shadowRoot.querySelector('#tetherDialog'));
    }
    getPasspointRemovalDialog_() {
        return castExists(this.shadowRoot.querySelector('#passpointRemovalDialog'));
    }
    handleConnectClick_() {
        assertExists(this.managedProperties_);
        if (this.managedProperties_.type === NetworkType.kTether &&
            (!this.managedProperties_.typeProperties.tether.hasConnectedToHost)) {
            this.showTetherDialog_();
            return;
        }
        this.fireNetworkConnect_(/*bypassDialog=*/ false);
    }
    onTetherConnect_() {
        this.getTetherDialog_().close();
        this.fireNetworkConnect_(/*bypassDialog=*/ true);
    }
    fireNetworkConnect_(bypassDialog) {
        assertExists(this.managedProperties_);
        const networkState = OncMojo.managedPropertiesToNetworkState(this.managedProperties_);
        const networkConnectEvent = new CustomEvent('network-connect', {
            bubbles: true,
            composed: true,
            detail: { networkState: networkState, bypassConnectionDialog: bypassDialog },
        });
        this.dispatchEvent(networkConnectEvent);
        recordSettingChange();
    }
    async handleDisconnectClick_() {
        recordSettingChange();
        const response = await this.networkConfig_.startDisconnect(this.guid);
        if (!response.success) {
            console.warn('Disconnect failed for: ' + this.guid);
        }
    }
    onConnectDisconnectClick_() {
        if (this.enableConnect_(this.managedProperties_, this.defaultNetwork, this.propertiesReceived_, this.outOfRange_, this.globalPolicy, this.managedNetworkAvailable, this.deviceState_)) {
            this.handleConnectClick_();
            return;
        }
        if (this.showDisconnect_(this.managedProperties_)) {
            this.handleDisconnectClick_();
            return;
        }
    }
    shouldConnectDisconnectButtonBeHidden_() {
        return !this.showConnect_(this.managedProperties_, this.globalPolicy, this.managedNetworkAvailable, this.deviceState_) &&
            !this.showDisconnect_(this.managedProperties_);
    }
    shouldConnectDisconnectButtonBeDisabled_() {
        if (this.disabled_) {
            return true;
        }
        if (this.enableConnect_(this.managedProperties_, this.defaultNetwork, this.propertiesReceived_, this.outOfRange_, this.globalPolicy, this.managedNetworkAvailable, this.deviceState_)) {
            return false;
        }
        if (this.showDisconnect_(this.managedProperties_)) {
            return false;
        }
        return true;
    }
    getConnectDisconnectButtonLabel_() {
        if (this.showConnect_(this.managedProperties_, this.globalPolicy, this.managedNetworkAvailable, this.deviceState_)) {
            return this.i18n('networkButtonConnect');
        }
        if (this.showDisconnect_(this.managedProperties_)) {
            return this.i18n('networkButtonDisconnect');
        }
        return '';
    }
    async onForgetClick_() {
        if (this.isPasspointWifi_(this.managedProperties_)) {
            // Ask user confirmation before removing a Passpoint Wi-Fi and the
            // associated subscription.
            this.getPasspointRemovalDialog_().open();
            return;
        }
        return this.forgetNetwork_();
    }
    async forgetNetwork_() {
        if (this.managedProperties_.type === NetworkType.kWiFi) {
            recordSettingChange(Setting.kForgetWifiNetwork);
        }
        else {
            recordSettingChange();
        }
        const response = await this.networkConfig_.forgetNetwork(this.guid);
        if (!response.success) {
            console.warn('Forget network failed for: ' + this.guid);
        }
        // A forgotten network no longer has a valid GUID, close the subpage.
        this.close();
    }
    onSigninClick_() {
        this.browserProxy_.showPortalSignin(this.guid);
    }
    onActivateClick_() {
        this.browserProxy_.showCellularSetupUi(this.guid);
    }
    onConfigureClick_() {
        if (this.managedProperties_ &&
            (this.isThirdPartyVpn_(this.managedProperties_) ||
                this.isArcVpn_(this.managedProperties_))) {
            this.browserProxy_.configureThirdPartyVpn(this.guid);
            recordSettingChange();
            return;
        }
        assertExists(this.managedProperties_);
        const showConfigEvent = new CustomEvent('show-config', {
            bubbles: true,
            composed: true,
            detail: {
                guid: this.guid,
                type: OncMojo.getNetworkTypeString(this.managedProperties_.type),
                name: OncMojo.getNetworkNameUnsafe(this.managedProperties_),
            },
        });
        this.dispatchEvent(showConfigEvent);
    }
    onViewAccountClick_() {
        this.browserProxy_.showCarrierAccountDetail(this.guid);
    }
    showTetherDialog_() {
        this.getTetherDialog_().open();
    }
    showHiddenNetworkWarning_() {
        return loadTimeData.getBoolean('showHiddenNetworkWarning') &&
            !!this.autoConnectPref_.value && !!this.managedProperties_ &&
            this.managedProperties_.type === NetworkType.kWiFi &&
            !!OncMojo.getActiveValue(this.managedProperties_.typeProperties.wifi.hiddenSsid);
    }
    /**
     * Event triggered for elements associated with network properties.
     */
    onNetworkPropertyChange_(e) {
        if (!this.propertiesReceived_) {
            return;
        }
        const field = e.detail.field;
        const value = e.detail.value;
        const config = this.getDefaultConfigProperties_();
        const valueType = typeof value;
        if (valueType !== 'string' && valueType !== 'number' &&
            valueType !== 'boolean' && !Array.isArray(value)) {
            console.warn('Unexpected property change event, Key: ' + field +
                ' Value: ' + JSON.stringify(value));
            return;
        }
        OncMojo.setConfigProperty(config, field, value);
        // Ensure that any required configuration properties for partial
        // configurations are set.
        const vpnConfig = config.typeConfig.vpn;
        if (vpnConfig) {
            if (vpnConfig.openVpn &&
                vpnConfig.openVpn.saveCredentials === undefined) {
                vpnConfig.openVpn.saveCredentials = false;
            }
            if (vpnConfig.l2tp && vpnConfig.l2tp.saveCredentials === undefined) {
                vpnConfig.l2tp.saveCredentials = false;
            }
        }
        this.setMojoNetworkProperties_(config);
    }
    onApnChange_(event) {
        if (!this.propertiesReceived_) {
            return;
        }
        const config = this.getDefaultConfigProperties_();
        const apn = event.detail;
        config.typeConfig
            .cellular = { apn, roaming: undefined, textMessageAllowState: undefined };
        this.setMojoNetworkProperties_(config);
    }
    getApnRowSubLabel_() {
        if (!this.isCellular_(this.managedProperties_) ||
            !this.managedProperties_.typeProperties.cellular.connectedApn) {
            return '';
        }
        return getApnDisplayName(this.i18n.bind(this), this.managedProperties_.typeProperties.cellular.connectedApn);
    }
    onApnRowClicked_() {
        if (!this.isCellular_(this.managedProperties_)) {
            console.error('APN row should only be visible when cellular is available.');
            return;
        }
        const params = new URLSearchParams();
        params.append('guid', this.guid);
        Router.getInstance().navigateTo(routes.APN, params);
    }
    /**
     * Event triggered when the IP Config or NameServers element changes.
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
    propertiesMissingOrBlockedByPolicy_() {
        return !this.managedProperties_ ||
            this.isBlockedByPolicy_(this.managedProperties_, this.globalPolicy, this.managedNetworkAvailable);
    }
    sharedString_(managedProperties) {
        if (!managedProperties.typeProperties.wifi) {
            return this.i18n('networkShared');
        }
        else if (managedProperties.typeProperties.wifi.isConfiguredByActiveUser) {
            return this.i18n('networkSharedOwner');
        }
        else {
            return this.i18n('networkSharedNotOwner');
        }
    }
    syncedString_(managedProperties) {
        if (!managedProperties.typeProperties.wifi) {
            return '';
        }
        else if (!managedProperties.typeProperties.wifi.isSyncable) {
            return this.i18nAdvanced('networkNotSynced').toString();
        }
        else if (managedProperties.source === OncSource.kUser) {
            return this.i18nAdvanced('networkSyncedUser').toString();
        }
        else {
            return this.i18nAdvanced('networkSyncedDevice').toString();
        }
    }
    /**
     * @return Returns 'continuation' class for shared networks.
     */
    messagesDividerClass_(name, managedProperties, globalPolicy, managedNetworkAvailable, isSecondaryUser, isWifiSyncEnabled, deviceState) {
        let first = '';
        if (this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            first = 'policy';
        }
        else if (isSecondaryUser) {
            first = 'secondary';
        }
        else if (this.showShared_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            first = 'shared';
        }
        else if (this.showSynced_(managedProperties, globalPolicy, managedNetworkAvailable, isWifiSyncEnabled)) {
            first = 'synced';
        }
        else if (this.isCellularCarrierLockEnabled_ &&
            this.isCarrierLockedActiveSim_(managedProperties, deviceState)) {
            first = 'carrierlocked';
        }
        return first === name ? 'continuation' : '';
    }
    showSynced_(managedProperties, _globalPolicy, _managedNetworkAvailable, isWifiSyncEnabled) {
        return !this.propertiesMissingOrBlockedByPolicy_() && isWifiSyncEnabled &&
            !!managedProperties.typeProperties.wifi;
    }
    showShared_(managedProperties, _globalPolicy, _managedNetworkAvailable) {
        return !this.propertiesMissingOrBlockedByPolicy_() &&
            (managedProperties.source === OncSource.kDevice ||
                managedProperties.source === OncSource.kDevicePolicy);
    }
    isCarrierLockedActiveSim_(managedProperties, deviceState) {
        if (!this.isCellularCarrierLockEnabled_) {
            return false;
        }
        if (!deviceState || deviceState.type !== NetworkType.kCellular) {
            return false;
        }
        if (!managedProperties) {
            return false;
        }
        const networkState = OncMojo.managedPropertiesToNetworkState(managedProperties);
        if (!isActiveSim(networkState, deviceState)) {
            return false;
        }
        const simLockStatus = deviceState.simLockStatus;
        if (!simLockStatus) {
            return false;
        }
        return simLockStatus.lockType === 'network-pin';
    }
    showAutoConnect_(managedProperties, globalPolicy, managedNetworkAvailable) {
        return !!managedProperties &&
            managedProperties.type !== NetworkType.kEthernet &&
            this.isRemembered_(managedProperties) &&
            !this.isArcVpn_(managedProperties) &&
            !this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable);
    }
    showHiddenNetworkToggle_() {
        if (!this.showHiddenToggle_) {
            return false;
        }
        if (!this.managedProperties_) {
            return false;
        }
        if (this.managedProperties_.type !== NetworkType.kWiFi) {
            return false;
        }
        if (!this.isRemembered_(this.managedProperties_)) {
            return false;
        }
        if (this.isBlockedByPolicy_(this.managedProperties_, this.globalPolicy, this.managedNetworkAvailable)) {
            return false;
        }
        return true;
    }
    showMetered_() {
        const managedProperties = this.managedProperties_;
        return this.showMeteredToggle_ && !!managedProperties &&
            this.isRemembered_(managedProperties) &&
            (managedProperties.type === NetworkType.kCellular ||
                managedProperties.type === NetworkType.kWiFi);
    }
    showAlwaysOnVpn_(managedProperties) {
        return this.isArcVpn_(managedProperties) && this.prefs.arc &&
            this.prefs.arc.vpn && this.prefs.arc.vpn.always_on &&
            this.prefs.arc.vpn.always_on.vpn_package &&
            OncMojo.getActiveValue(managedProperties.typeProperties.vpn.host) ===
                this.prefs.arc.vpn.always_on.vpn_package.value;
    }
    alwaysOnVpnChanged_() {
        if (this.prefs && this.prefs.arc && this.prefs.arc.vpn &&
            this.prefs.arc.vpn.always_on && this.prefs.arc.vpn.always_on.lockdown) {
            this.set('prefs.arc.vpn.always_on.lockdown.value', this.alwaysOnVpn_.value);
        }
    }
    showPreferNetwork_(managedProperties, globalPolicy, managedNetworkAvailable) {
        if (!managedProperties) {
            return false;
        }
        const type = managedProperties.type;
        if (type === NetworkType.kEthernet || type === NetworkType.kCellular ||
            this.isArcVpn_(managedProperties)) {
            return false;
        }
        return this.isRemembered_(managedProperties) &&
            !this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable);
    }
    shouldPreferNetworkToggleBeDisabled_() {
        return this.disabled_ ||
            this.isNetworkPolicyEnforced(this.managedProperties_.priority);
    }
    onPreferNetworkRowClicked_(event) {
        // Stop propagation because the toggle and policy indicator handle clicks
        // themselves.
        event.stopPropagation();
        const preferNetworkToggle = this.shadowRoot.querySelector('#preferNetworkToggle');
        if (!preferNetworkToggle || preferNetworkToggle.disabled) {
            return;
        }
        this.preferNetwork_ = !this.preferNetwork_;
    }
    hasVisibleFields_(fields) {
        for (let i = 0; i < fields.length; ++i) {
            const key = OncMojo.getManagedPropertyKey(fields[i]);
            const value = this.get(key, this.managedProperties_);
            if (value !== undefined && value !== null && value !== '') {
                return true;
            }
        }
        return false;
    }
    hasInfoFields_() {
        const editFieldTypes = this.getInfoEditFieldTypes_();
        const infoFields = this.getInfoFields_();
        return Object.keys(editFieldTypes).length > 0 ||
            this.hasVisibleFields_(infoFields);
    }
    getInfoFields_() {
        if (!this.managedProperties_) {
            return [];
        }
        const fields = [];
        switch (this.managedProperties_.type) {
            case NetworkType.kCellular:
                fields.push('cellular.servingOperator.name');
                break;
            case NetworkType.kTether:
                fields.push('tether.batteryPercentage', 'tether.signalStrength', 'tether.carrier');
                break;
            case NetworkType.kVPN:
                const vpnType = this.managedProperties_.typeProperties.vpn.type;
                switch (vpnType) {
                    case VpnType.kExtension:
                        fields.push('vpn.providerName');
                        break;
                    case VpnType.kArc:
                        fields.push('vpn.type');
                        fields.push('vpn.providerName');
                        break;
                    case VpnType.kOpenVPN:
                        fields.push('vpn.type', 'vpn.host', 'vpn.openVpn.username', 'vpn.openVpn.extraHosts');
                        break;
                    case VpnType.kL2TPIPsec:
                        fields.push('vpn.type', 'vpn.host', 'vpn.l2tp.username');
                        break;
                }
                break;
            case NetworkType.kWiFi:
                break;
        }
        if (OncMojo.isRestrictedConnectivity(this.managedProperties_.portalState)) {
            fields.push('portalState');
        }
        return fields;
    }
    /**
     * Provides the list of editable fields to <network-property-list>.
     * NOTE: Entries added to this list must be reflected in ConfigProperties in
     * chromeos.network_config.mojom and handled in the service implementation.
     * @return A dictionary of editable fields in the info section.
     */
    getInfoEditFieldTypes_() {
        if (!this.managedProperties_) {
            return {};
        }
        const editFields = {};
        const type = this.managedProperties_.type;
        if (type === NetworkType.kVPN) {
            const vpnType = this.managedProperties_.typeProperties.vpn.type;
            if (vpnType !== VpnType.kExtension) {
                editFields['vpn.host'] = 'String';
            }
            if (vpnType === VpnType.kOpenVPN) {
                editFields['vpn.openVpn.username'] = 'String';
                editFields['vpn.openVpn.extraHosts'] = 'StringArray';
            }
        }
        return editFields;
    }
    getAdvancedFields_() {
        if (!this.managedProperties_) {
            return [];
        }
        const fields = [];
        const type = this.managedProperties_.type;
        switch (type) {
            case NetworkType.kCellular:
                fields.push('cellular.activationState', 'cellular.networkTechnology');
                break;
            case NetworkType.kWiFi:
                fields.push('wifi.ssid', 'wifi.bssid', 'wifi.signalStrength', 'wifi.security', 'wifi.eap.outer', 'wifi.eap.inner', 'wifi.eap.domainSuffixMatch', 'wifi.eap.subjectAltNameMatch', 'wifi.eap.subjectMatch', 'wifi.eap.identity', 'wifi.eap.anonymousIdentity', 'wifi.frequency');
                break;
            case NetworkType.kVPN:
                const vpnType = this.managedProperties_.typeProperties.vpn.type;
                switch (vpnType) {
                    case VpnType.kOpenVPN:
                        if (this.isManagedByPolicy_()) {
                            fields.push('vpn.openVpn.auth', 'vpn.openVpn.cipher', 'vpn.openVpn.compressionAlgorithm', 'vpn.openVpn.tlsAuthContents', 'vpn.openVpn.keyDirection');
                        }
                        break;
                }
                break;
        }
        return fields;
    }
    getDeviceFields_() {
        if (!this.managedProperties_ ||
            this.managedProperties_.type !== NetworkType.kCellular) {
            return [];
        }
        const fields = [];
        const networkState = OncMojo.managedPropertiesToNetworkState(this.managedProperties_);
        if (isActiveSim(networkState, this.deviceState_)) {
            // These fields are only known for the SIM in the active slot.
            fields.push('cellular.homeProvider.name', 'cellular.homeProvider.country');
        }
        fields.push('cellular.firmwareRevision', 'cellular.hardwareRevision', 'cellular.esn', 'cellular.iccid', 'cellular.imei', 'cellular.meid', 'cellular.min');
        return fields;
    }
    showDataUsage_(managedProperties) {
        if (!this.isTrafficCountersEnabled_) {
            return false;
        }
        return !!managedProperties && this.guid !== '' &&
            this.isCellular_(managedProperties) &&
            this.isConnectedState_(managedProperties);
    }
    hasAdvancedSection_() {
        if (!this.managedProperties_ || !this.propertiesReceived_) {
            return false;
        }
        if (this.showMetered_()) {
            return true;
        }
        if (this.managedProperties_.type === NetworkType.kTether) {
            // These properties apply to the underlying WiFi network, not the Tether
            // network.
            return false;
        }
        return this.hasAdvancedFields_() || this.hasDeviceFields_();
    }
    hasAdvancedFields_() {
        return this.hasVisibleFields_(this.getAdvancedFields_());
    }
    hasDeviceFields_() {
        return this.hasVisibleFields_(this.getDeviceFields_());
    }
    hasNetworkSection_(managedProperties, globalPolicy, managedNetworkAvailable) {
        if (!managedProperties || managedProperties.type === NetworkType.kTether) {
            // These settings apply to the underlying WiFi network, not the Tether
            // network.
            return false;
        }
        if (this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            return false;
        }
        if (managedProperties.type === NetworkType.kCellular) {
            return true;
        }
        return this.isRememberedOrConnected_(managedProperties);
    }
    hasProxySection_(managedProperties, globalPolicy, managedNetworkAvailable) {
        if (!managedProperties || managedProperties.type === NetworkType.kTether) {
            // Proxy settings apply to the underlying WiFi network, not the Tether
            // network.
            return false;
        }
        if (this.isBlockedByPolicy_(managedProperties, globalPolicy, managedNetworkAvailable)) {
            return false;
        }
        return this.isRememberedOrConnected_(managedProperties);
    }
    isPasspointWifi_(managedProperties) {
        if (!this.isPasspointEnabled_) {
            return false;
        }
        return !!managedProperties &&
            managedProperties.type === NetworkType.kWiFi &&
            managedProperties.typeProperties.wifi.passpointId !== '' &&
            managedProperties.typeProperties.wifi.passpointMatchType !==
                MatchType.kNoMatch;
    }
    shouldShowPasspointProviderRow_(managedProperties) {
        return this.isPasspointSettingsEnabled_ &&
            this.isPasspointWifi_(managedProperties);
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
    onPasspointRowClicked_() {
        const showPasspointEvent = new CustomEvent('show-passpoint-detail', { bubbles: true, composed: true, detail: this.passpointSubscription_ });
        this.dispatchEvent(showPasspointEvent);
    }
    onPasspointRemovalDialogConfirm_() {
        this.getPasspointRemovalDialog_().close();
        if (this.isPasspointSettingsEnabled_) {
            // When Passpoint settings page is enabled, the removal dialog leads the
            // user to the subscription page.
            this.onPasspointRowClicked_();
            return;
        }
        this.forgetNetwork_();
    }
    showCellularChooseNetwork_(managedProperties) {
        return !!managedProperties &&
            managedProperties.type === NetworkType.kCellular &&
            managedProperties.typeProperties.cellular.supportNetworkScan;
    }
    showScanningSpinner_() {
        if (!this.managedProperties_ ||
            this.managedProperties_.type !== NetworkType.kCellular) {
            return false;
        }
        return !!this.deviceState_ && this.deviceState_.scanning;
    }
    showCellularSimUpdatedUi_(managedProperties) {
        return !!managedProperties &&
            managedProperties.type === NetworkType.kCellular &&
            managedProperties.typeProperties.cellular.family !== 'CDMA';
    }
    isArcVpn_(managedProperties) {
        return !!managedProperties && managedProperties.type === NetworkType.kVPN &&
            managedProperties.typeProperties.vpn.type === VpnType.kArc;
    }
    isThirdPartyVpn_(managedProperties) {
        return !!managedProperties && managedProperties.type === NetworkType.kVPN &&
            managedProperties.typeProperties.vpn.type === VpnType.kExtension;
    }
    showIpAddress_(ipAddress, managedProperties) {
        // Arc Vpn does not currently pass IP configuration to ChromeOS. IP address
        // property holds an internal IP address Android uses to talk to ChromeOS.
        // TODO(lgcheng@) Show correct IP address when we implement IP configuration
        // correctly.
        if (this.isArcVpn_(managedProperties)) {
            return false;
        }
        // Cellular IP addresses are shown under the network details section.
        if (this.isCellular_(managedProperties)) {
            return false;
        }
        return !!ipAddress && this.isConnectedState_(managedProperties);
    }
    isOutOfRangeOrNotEnabled_(outOfRange, deviceState) {
        return outOfRange ||
            (!!deviceState && deviceState.deviceState !== DeviceStateType.kEnabled);
    }
    computeShowConfigurableSections_() {
        if (!this.managedProperties_ || !this.deviceState_) {
            return true;
        }
        const networkState = OncMojo.managedPropertiesToNetworkState(this.managedProperties_);
        assertExists(networkState);
        if (networkState.type !== NetworkType.kCellular) {
            return true;
        }
        return isActiveSim(networkState, this.deviceState_);
    }
    computeDisabled_() {
        if (!this.deviceState_ ||
            this.deviceState_.type !== NetworkType.kCellular) {
            return false;
        }
        // If device is carrier locked, all the settings should be
        // disabled for non compatible SIMs.
        if (this.isCellularCarrierLockEnabled_ &&
            this.isCarrierLockedActiveSim_(this.managedProperties_, this.deviceState_)) {
            return true;
        }
        // If this is a cellular device and inhibited, state cannot be changed, so
        // the page's inputs should be disabled.
        return OncMojo.deviceIsInhibited(this.deviceState_);
    }
    shouldShowMacAddress_() {
        return !!this.getMacAddress_();
    }
    getMacAddress_() {
        if (!this.deviceState_) {
            return '';
        }
        // 00:00:00:00:00:00 is provided when device MAC address cannot be
        // retrieved.
        const MISSING_MAC_ADDRESS = '00:00:00:00:00:00';
        if (this.deviceState_ && this.deviceState_.macAddress &&
            this.deviceState_.macAddress !== MISSING_MAC_ADDRESS) {
            return this.deviceState_.macAddress;
        }
        return '';
    }
    isManagedByPolicy_() {
        return this.managedProperties_.source === OncSource.kUserPolicy ||
            this.managedProperties_.source === OncSource.kDevicePolicy;
    }
    isPortalState_(portalState) {
        return portalState === PortalState.kPortal ||
            portalState === PortalState.kProxyAuthRequired;
    }
}
customElements.define(SettingsInternetDetailPageElement.is, SettingsInternetDetailPageElement);
