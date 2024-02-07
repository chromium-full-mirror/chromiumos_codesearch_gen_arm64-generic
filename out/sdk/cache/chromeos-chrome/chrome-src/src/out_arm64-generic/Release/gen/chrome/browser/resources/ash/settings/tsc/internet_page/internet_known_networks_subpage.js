// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-internet-known-networks' is the settings subpage listing the
 * known networks for a type (currently always WiFi).
 */
import 'chrome://resources/ash/common/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import './internet_shared.css.js';
import { MojoConnectivityProvider } from 'chrome://resources/ash/common/connectivity/mojo_connectivity_provider.js';
import { CrPolicyNetworkBehaviorMojo } from 'chrome://resources/ash/common/network/cr_policy_network_behavior_mojo.js';
import { MojoInterfaceProviderImpl } from 'chrome://resources/ash/common/network/mojo_interface_provider.js';
import { NetworkListenerBehavior } from 'chrome://resources/ash/common/network/network_listener_behavior.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { FilterType, NO_LIMIT } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { getTemplate } from './internet_known_networks_subpage.html.js';
import { PasspointListenerMixin } from './passpoint_listener_mixin.js';
const SettingsInternetKnownNetworksPageElementBase = mixinBehaviors([
    NetworkListenerBehavior,
    CrPolicyNetworkBehaviorMojo,
], PasspointListenerMixin(DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)))));
export class SettingsInternetKnownNetworksPageElement extends SettingsInternetKnownNetworksPageElementBase {
    static get is() {
        return 'settings-internet-known-networks-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The type of networks to list.
             */
            networkType: {
                type: Number,
                observer: 'networkTypeChanged_',
            },
            /**
             * List of all network state data for the network type.
             */
            networkStateList_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * List of all the passpoint subscriptions available.
             */
            passpointSubscriptionsList_: {
                type: Array,
                notify: true,
                value() {
                    return [];
                },
            },
            showAddPreferred_: Boolean,
            showRemovePreferred_: Boolean,
            /**
             * We always show 'Forget' since we do not know whether or not to enable
             * it until we fetch the managed properties, and we do not want an empty
             * menu.
             */
            enableForget_: Boolean,
            /**
             * Contains the settingId of any deep link that wasn't able to be shown,
             * null otherwise.
             */
            pendingSettingId_: {
                type: Number,
                value: null,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kPreferWifiNetwork,
                    Setting.kForgetWifiNetwork,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.selectedGuid_ = '';
        this.selectedSubscriptionId_ = '';
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
        if (this.isPasspointSettingsEnabled) {
            this.passpointService_ =
                MojoConnectivityProvider.getInstance().getPasspointService();
        }
    }
    /**
     * RouteObserverMixin override
     */
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.KNOWN_NETWORKS) {
            return;
        }
        this.attemptDeepLink().then(result => {
            if (!result.deepLinkShown && result.pendingSettingId) {
                // Store any deep link settingId that wasn't shown so we can try again
                // in refreshNetworks.
                this.pendingSettingId_ = result.pendingSettingId;
            }
        });
        this.refreshSubscriptions_();
    }
    /** CrosNetworkConfigObserver impl */
    onNetworkStateListChanged() {
        this.refreshNetworks_();
    }
    /** CrosNetworkConfigObserver impl */
    onNetworkStateChanged(network) {
        // Force refresh the networks if we are missing the network state properties
        // or the signal strength is one (WiFi network signal strength is non-zero
        // by convention) since these could indicate the network is not active and
        // would not independently trigger a list update.
        if (!network ||
            (network.type === NetworkType.kWiFi &&
                (!network.typeState.wifi?.signalStrength ||
                    network.typeState.wifi?.signalStrength === 1))) {
            this.refreshNetworks_();
        }
    }
    networkTypeChanged_() {
        this.refreshNetworks_();
    }
    /**
     * Requests the list of network states from Chrome. Updates networkStates
     * once the results are returned from Chrome.
     */
    async refreshNetworks_() {
        if (this.networkType === undefined) {
            return;
        }
        const filter = {
            filter: FilterType.kConfigured,
            limit: NO_LIMIT,
            networkType: this.networkType,
        };
        const response = await this.networkConfig_.getNetworkStateList(filter);
        this.networkStateList_ = response.result;
        // Check if we have yet to focus a deep-linked element.
        if (!this.pendingSettingId_) {
            return;
        }
        const result = await this.showDeepLink(this.pendingSettingId_);
        if (result.deepLinkShown) {
            this.pendingSettingId_ = null;
        }
    }
    async refreshSubscriptions_() {
        if (!this.isPasspointSettingsEnabled ||
            this.networkType !== NetworkType.kWiFi) {
            this.passpointSubscriptionsList_ = [];
            return;
        }
        const response = await this.passpointService_.listPasspointSubscriptions();
        this.passpointSubscriptionsList_ = response.result;
    }
    networkIsPreferred_(networkState) {
        // Currently we treat NetworkStateProperties.Priority as a boolean.
        return networkState.priority > 0;
    }
    networkIsNotPreferred_(networkState) {
        return networkState.priority === 0;
    }
    havePreferred_() {
        return this.networkStateList_.find(state => this.networkIsPreferred_(state)) !== undefined;
    }
    haveNotPreferred_() {
        return this.networkStateList_.find(state => this.networkIsNotPreferred_(state)) !== undefined;
    }
    getNetworkDisplayName_(networkState) {
        return OncMojo.getNetworkStateDisplayNameUnsafe(networkState);
    }
    shouldShowPasspointSection_(subscriptionsList) {
        return this.networkType === NetworkType.kWiFi &&
            this.isPasspointSettingsEnabled && subscriptionsList.length > 0;
    }
    getSubscriptionDisplayName_(subscription) {
        if (subscription.friendlyName && subscription.friendlyName !== '') {
            return subscription.friendlyName;
        }
        return subscription.domains[0];
    }
    getEnterpriseIconAriaLabel_(networkState) {
        return loadTimeData.getStringF('networkA11yManagedByAdministrator', this.getNetworkDisplayName_(networkState));
    }
    async onMenuButtonClick_(event) {
        const button = event.target;
        const networkState = event.model.item;
        this.selectedGuid_ = networkState.guid;
        // We need to make a round trip to Chrome in order to retrieve the managed
        // properties for the network. The delay is not noticeable (~5ms) and is
        // preferable to initiating a query for every known network at load time.
        const response = await this.networkConfig_.getManagedProperties(this.selectedGuid_);
        const properties = response.result;
        if (!properties) {
            console.warn('Properties not found for: ' + this.selectedGuid_);
            return;
        }
        if (properties.priority &&
            this.isNetworkPolicyEnforced(properties.priority)) {
            this.showAddPreferred_ = false;
            this.showRemovePreferred_ = false;
        }
        else {
            const preferred = this.networkIsPreferred_(networkState);
            this.showAddPreferred_ = !preferred;
            this.showRemovePreferred_ = preferred;
        }
        this.enableForget_ = !this.isPolicySource(networkState.source);
        this.$.dotsMenu.showAt(button);
        event.stopPropagation();
    }
    getMenuButtonTitle_(networkState) {
        return loadTimeData.getStringF('knownNetworksMenuButtonTitle', this.getNetworkDisplayName_(networkState));
    }
    async setProperties_(config) {
        recordSettingChange();
        const response = await this.networkConfig_.setProperties(this.selectedGuid_, config);
        if (!response.success) {
            console.warn('Unable to set properties for: ' + this.selectedGuid_ + ': ' +
                JSON.stringify(config));
        }
    }
    onRemovePreferredClick_() {
        assertExists(this.networkType);
        const config = OncMojo.getDefaultConfigProperties(this.networkType);
        config.priority = { value: 0 };
        this.setProperties_(config);
        this.$.dotsMenu.close();
    }
    onAddPreferredClick_() {
        assertExists(this.networkType);
        const config = OncMojo.getDefaultConfigProperties(this.networkType);
        config.priority = { value: 1 };
        this.setProperties_(config);
        this.$.dotsMenu.close();
    }
    async onForgetClick_() {
        if (this.networkType === NetworkType.kWiFi) {
            recordSettingChange(Setting.kForgetWifiNetwork);
        }
        else {
            recordSettingChange();
        }
        this.$.dotsMenu.close();
        const response = await this.networkConfig_.forgetNetwork(this.selectedGuid_);
        if (!response.success) {
            console.warn('Forget network failed for: ' + this.selectedGuid_);
        }
    }
    /**
     * Fires a 'show-detail' event with an item containing a |networkStateList_|
     * entry in the event model.
     */
    fireShowDetails_(event) {
        const networkState = event.model.item;
        const showDetailEvent = new CustomEvent('show-detail', { bubbles: true, composed: true, detail: networkState });
        this.dispatchEvent(showDetailEvent);
        event.stopPropagation();
    }
    onSubscriptionListItemClick_(event) {
        const showPasspointEvent = new CustomEvent('show-passpoint-detail', { bubbles: true, composed: true, detail: event.model.item });
        this.dispatchEvent(showPasspointEvent);
        event.stopPropagation();
    }
    /**
     * Make sure events in embedded components do not propagate to onDetailsClick_.
     */
    doNothing_(event) {
        event.stopPropagation();
    }
    onSubscriptionMenuButtonClick_(event) {
        const button = event.target;
        this.selectedSubscriptionId_ = event.model.item.id;
        this.$.subscriptionDotsMenu.showAt(button);
        event.stopPropagation();
    }
    getSubscriptionMenuButtonTitle_(subscription) {
        return this.i18n('knownNetworksMenuButtonTitle', this.getSubscriptionDisplayName_(subscription));
    }
    async onSubscriptionForgetClick_() {
        this.$.subscriptionDotsMenu.close();
        const response = await this.passpointService_.deletePasspointSubscription(this.selectedSubscriptionId_);
        if (!response.success) {
            console.warn('Forget subscription failed for: ' + this.selectedSubscriptionId_);
        }
        this.selectedSubscriptionId_ = '';
    }
    async onPasspointSubscriptionAdded(subscription) {
        this.push('passpointSubscriptionsList_', subscription);
    }
    onPasspointSubscriptionRemoved(subscription) {
        const list = this.passpointSubscriptionsList_.filter((sub) => {
            return sub.id !== subscription.id;
        });
        this.passpointSubscriptionsList_ = list;
    }
}
customElements.define(SettingsInternetKnownNetworksPageElement.is, SettingsInternetKnownNetworksPageElement);
