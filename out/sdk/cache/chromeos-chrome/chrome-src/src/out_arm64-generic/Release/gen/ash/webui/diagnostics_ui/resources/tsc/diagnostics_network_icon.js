// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'diagnostics-network-icon' is a wrapper for 'network-icon' to ensure the
 * correct icon displayed based on network type, state, and technology.
 * @see //ash/webui/common/resources/network/network_icon.js
 */
import 'chrome://resources/ash/common/network/network_icon.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './diagnostics_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { SecurityType as MojomSecurityType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { ConnectionStateType as MojomConnectionStateType, NetworkType as MojomNetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './diagnostics_network_icon.html.js';
import { getNetworkType } from './diagnostics_utils.js';
import { NetworkState, NetworkType, SecurityType } from './network_health_provider.mojom-webui.js';
/**
 * Type alias for network_config ConnectionStateType enum.
 */
export const ConnectionStateType = MojomConnectionStateType;
/**
 * Type alias for network_config NetworkType enum.
 */
export const CrosNetworkType = MojomNetworkType;
/**
 * Type alias for network_config SecurityType enum.
 */
export const CrosSecurityType = MojomSecurityType;
function convertNetworkStateToCrosNetworkState(state) {
    switch (state) {
        case NetworkState.kOnline:
            return ConnectionStateType.kOnline;
        case NetworkState.kConnected:
            return ConnectionStateType.kConnected;
        case NetworkState.kPortal:
            return ConnectionStateType.kPortal;
        case NetworkState.kConnecting:
            return ConnectionStateType.kConnecting;
        case NetworkState.kNotConnected:
        // kDisabled is a device state which is merged with kNotConnected.
        case NetworkState.kDisabled:
            return ConnectionStateType.kNotConnected;
    }
    assertNotReached();
}
function convertNetworkTypeToCrosNetworkType(type) {
    switch (type) {
        case NetworkType.kEthernet:
            return CrosNetworkType.kEthernet;
        case NetworkType.kWiFi:
            return CrosNetworkType.kWiFi;
        case NetworkType.kCellular:
            return CrosNetworkType.kCellular;
        default:
            assertNotReached();
    }
}
/**
 * Helper function to get the required properties to display a cellular network
 * icon.
 */
function getCellularTypeState(network) {
    assert(network.type === NetworkType.kCellular);
    // Default type properties for cellular.
    const defaultCellularTypeStateProperties = {
        networkTechnology: '',
        roaming: false,
        signalStrength: 0,
        simLocked: false,
    };
    let typeState = { cellular: defaultCellularTypeStateProperties };
    if (!network?.typeProperties?.cellular) {
        return typeState;
    }
    // Override type properties if data is available.
    const networkTechnology = network.typeProperties.cellular.networkTechnology;
    const roaming = network.typeProperties.cellular.roaming;
    const signalStrength = network.typeProperties.cellular.signalStrength;
    const simLocked = network.typeProperties.cellular.simLocked;
    assert(networkTechnology);
    assert(roaming);
    assert(signalStrength);
    assert(simLocked);
    typeState = {
        cellular: { networkTechnology, roaming, signalStrength, simLocked },
    };
    return typeState;
}
/**
 * Helper function to get the required properties to display a wifi network
 * icon.
 */
function getWifiTypeState(network) {
    const defaultWifiTypeStateProperties = {
        security: CrosSecurityType.kNone,
        signalStrength: 0,
    };
    let typeState = { wifi: defaultWifiTypeStateProperties };
    if (!network?.typeProperties?.wifi) {
        return typeState;
    }
    // Override type properties if data is available.
    const signalStrength = network.typeProperties.wifi.signalStrength;
    const securityType = network.typeProperties.wifi.security;
    if (signalStrength) {
        typeState = { wifi: { security: typeState.wifi.security, signalStrength } };
    }
    if (securityType) {
        const security = convertSecurityTypeToCrosSecurityType(securityType);
        typeState = {
            wifi: { security, signalStrength: typeState.wifi.signalStrength },
        };
    }
    return typeState;
}
/**
 * Helper function to get the typeState required for a given `network.type`
 * to display `network-icon` correctly.
 */
function getTypeState(network) {
    switch (network.type) {
        case NetworkType.kEthernet:
            return null;
        case NetworkType.kCellular:
            return getCellularTypeState(network);
        case NetworkType.kWiFi:
            return getWifiTypeState(network);
    }
    assertNotReached();
}
function convertSecurityTypeToCrosSecurityType(type) {
    switch (type) {
        case SecurityType.kNone:
            return CrosSecurityType.kNone;
        case SecurityType.kWep8021x:
            return CrosSecurityType.kWep8021x;
        case SecurityType.kWepPsk:
            return CrosSecurityType.kWepPsk;
        case SecurityType.kWpaEap:
            return CrosSecurityType.kWpaEap;
        case SecurityType.kWpaPsk:
            return CrosSecurityType.kWpaPsk;
    }
    assertNotReached();
}
/**
 * Adapter to convert network data to fit data required for network-icon.
 */
export function networkToNetworkStateAdapter(network) {
    const type = convertNetworkTypeToCrosNetworkType(network.type);
    const connectionState = convertNetworkStateToCrosNetworkState(network.state);
    const guid = network.observerGuid;
    const typeState = getTypeState(network);
    return { guid, connectionState, type, typeState };
}
const DiagnosticsNetworkIconBase = I18nMixin(PolymerElement);
export class DiagnosticsNetworkIconElement extends DiagnosticsNetworkIconBase {
    static get is() {
        return 'diagnostics-network-icon';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            network: {
                type: Object,
            },
        };
    }
    computeNetworkState() {
        // Block should only be entered when element is being initialized.
        if (!this.network) {
            return null;
        }
        return networkToNetworkStateAdapter(this.network);
    }
    computeShouldDisplaySpinner() {
        if (!this.network) {
            return false;
        }
        return this.network.state === NetworkState.kConnecting;
    }
    computeSpinnerAriaLabel() {
        if (!this.network) {
            return '';
        }
        const networkType = getNetworkType(this.network.type);
        return this.i18nDynamic(navigator.language, 'networkIconLabelConnecting', networkType);
    }
}
customElements.define(DiagnosticsNetworkIconElement.is, DiagnosticsNetworkIconElement);
