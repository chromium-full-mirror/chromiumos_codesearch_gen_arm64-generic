// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './base_page.js';
import './icons.html.js';
import './shimless_rma_shared.css.js';
import './strings.m.js';
import 'chrome://resources/ash/common/network/network_config.js';
import 'chrome://resources/ash/common/network/network_list.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { assert } from 'chrome://resources/js/assert.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { OncMojo } from 'chrome://resources/ash/common/network/onc_mojo.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { FilterType, NO_LIMIT, StartConnectResult } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { ConnectionStateType, NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getNetworkConfigService, getShimlessRmaService } from './mojo_interface_provider.js';
import { getTemplate } from './onboarding_network_page.html.js';
import { enableNextButton, focusPageTitle } from './shimless_rma_util.js';
import { createCustomEvent, SET_NEXT_BUTTON_LABEL } from './events.js';
/**
 * @fileoverview
 * 'onboarding-network-page' is the page where the user can choose to join a
 * network.
 */
const OnboardingNetworkPageBase = I18nMixin(PolymerElement);
export class OnboardingNetworkPage extends OnboardingNetworkPageBase {
    constructor() {
        super(...arguments);
        this.shimlessRmaService = getShimlessRmaService();
        this.networkConfig = getNetworkConfigService();
    }
    static get is() {
        return 'onboarding-network-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Set by shimless_rma.js.
             */
            allButtonsDisabled: Boolean,
            /**
             * Array of available networks
             */
            networks: {
                type: Array,
                value: [],
            },
            /**
             * Tracks whether network has configuration to be connected
             */
            enableConnect: {
                type: Boolean,
            },
            /**
             * The type of network to be configured as a string. May be set initially
             * or updated by network-config.
             */
            networkType: {
                type: String,
                value: '',
            },
            /**
             * WARNING: This string may contain malicious HTML and should not be used
             * for Polymer bindings in CSS code. For additional information see
             * b/286254915.
             *
             * The name of the network. May be set initially or updated by
             * network-config.
             */
            networkName: {
                type: String,
                value: '',
            },
            /**
             * The GUID when an existing network is being configured. This will be
             * empty when configuring a new network.
             */
            guid: {
                type: String,
                value: '',
            },
            /**
             * Tracks whether network shows connect button or disconnect button.
             */
            networkShowConnect: {
                type: Boolean,
            },
            /**
             * Set by network-config when a configuration error occurs.
             */
            error: {
                type: String,
                value: '',
            },
            /**
             * Set to true to when connected to at least one active network.
             */
            isOnline: {
                type: Boolean,
                value: false,
                observer: OnboardingNetworkPage.prototype.onIsOnlineChange,
            },
        };
    }
    ready() {
        super.ready();
        // Before displaying the available networks, track the pre-existing
        // configured networks.
        this.shimlessRmaService.trackConfiguredNetworks();
        this.refreshNetworks();
        enableNextButton(this);
        focusPageTitle(this);
    }
    /** CrosNetworkConfigObserver impl */
    onNetworkStateListChanged() {
        this.refreshNetworks();
    }
    async refreshNetworks() {
        const networkFilter = {
            filter: FilterType.kVisible,
            networkType: NetworkType.kAll,
            limit: NO_LIMIT,
        };
        const response = await this.networkConfig.getNetworkStateList(networkFilter);
        const networkIsWiFiOrEthernet = (n) => [NetworkType.kWiFi, NetworkType.kEthernet].includes(n.type);
        this.networks = response.result.filter(networkIsWiFiOrEthernet);
        this.isOnline = this.networks.some(n => OncMojo.connectionStateIsConnected(n.connectionState));
    }
    /**
     * Event triggered when a network list item is selected.
     */
    onNetworkSelected(event) {
        const networkState = event.detail;
        const type = networkState.type;
        const displayName = OncMojo.getNetworkStateDisplayNameUnsafe(networkState);
        this.networkShowConnect =
            (networkState.connectionState === ConnectionStateType.kNotConnected);
        if (!this.canAttemptConnection(networkState)) {
            this.showConfig(type, networkState.guid, displayName);
            return;
        }
        this.networkConfig.startConnect(networkState.guid).then((response) => {
            this.refreshNetworks();
            if (response.result === StartConnectResult.kUnknown) {
                console.error('startConnect failed for: ' + networkState.guid +
                    ' Error: ' + response.message);
                return;
            }
        });
    }
    /**
     * Determines whether or not it is possible to attempt a connection to the
     * provided network (e.g., whether it's possible to connect or configure the
     * network for connection).
     */
    canAttemptConnection(state) {
        if (state.connectionState !== ConnectionStateType.kNotConnected) {
            return false;
        }
        if (OncMojo.networkTypeHasConfigurationFlow(state.type) &&
            (!OncMojo.isNetworkConnectable(state) || !!state.errorState)) {
            return false;
        }
        return true;
    }
    showConfig(type, guid, name) {
        assert(type !== NetworkType.kCellular && type !== NetworkType.kTether);
        this.networkType = OncMojo.getNetworkTypeString(type);
        this.networkName = name || '';
        this.guid = guid || '';
        const networkConfig = this.shadowRoot.querySelector('#networkConfig');
        assert(networkConfig);
        networkConfig.init();
        const dialog = this.shadowRoot.querySelector('#dialog');
        assert(dialog);
        if (!dialog.open) {
            dialog.showModal();
        }
    }
    closeConfig() {
        const dialog = this.shadowRoot.querySelector('#dialog');
        assert(dialog);
        if (dialog.open) {
            dialog.close();
        }
        // Reset the network state properties.
        this.networkType = '';
        this.networkName = '';
        this.guid = '';
    }
    connectNetwork() {
        const networkConfig = this.shadowRoot.querySelector('#networkConfig');
        assert(networkConfig);
        networkConfig.connect();
    }
    disconnectNetwork() {
        this.networkConfig.startDisconnect(this.guid).then(response => {
            if (!response.success) {
                console.error('Disconnect failed for: ' + this.guid);
            }
        });
        this.closeConfig();
    }
    getError() {
        if (this.i18nExists(this.error)) {
            return this.i18n(this.error);
        }
        return this.i18n('networkErrorUnknown');
    }
    onPropertiesSet() {
        this.refreshNetworks();
    }
    onConfigClose() {
        this.closeConfig();
        this.refreshNetworks();
    }
    getDialogTitle() {
        if (this.networkName && !this.networkShowConnect) {
            return loadTimeData.getStringF('internetConfigName', this.networkName);
        }
        const type = this.i18n('OncType' + this.networkType);
        return this.i18n('internetJoinType', type);
    }
    onNextButtonClick() {
        return this.shimlessRmaService.networkSelectionComplete();
    }
    onIsOnlineChange() {
        this.dispatchEvent(createCustomEvent(SET_NEXT_BUTTON_LABEL, this.isOnline ? 'nextButtonLabel' : 'skipButtonLabel'));
    }
}
customElements.define(OnboardingNetworkPage.is, OnboardingNetworkPage);
