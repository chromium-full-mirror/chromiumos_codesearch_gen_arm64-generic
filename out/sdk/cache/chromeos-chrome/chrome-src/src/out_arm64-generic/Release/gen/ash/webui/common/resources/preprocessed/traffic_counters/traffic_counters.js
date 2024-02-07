// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/network/network_shared.css.js';
import 'chrome://resources/ash/common/i18n_behavior.js';
import 'chrome://resources/ash/common/network/onc_mojo.js';
import { OncMojo } from '../network/onc_mojo.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { getTemplate } from './traffic_counters.html.js';
import { TrafficCountersAdapter } from './traffic_counters_adapter.js';
/**
 * @fileoverview Polymer element for a container used in displaying network
 * traffic information.
 */
/**
 * Image file name corresponding to network type.
 */
var TechnologyIcons;
(function (TechnologyIcons) {
    TechnologyIcons["CELLULAR"] = "cellular_0.svg";
    TechnologyIcons["ETHERNET"] = "ethernet.svg";
    TechnologyIcons["VPN"] = "vpn.svg";
    TechnologyIcons["WIFI"] = "wifi_0.svg";
})(TechnologyIcons || (TechnologyIcons = {}));
/**
 * Helper function to create a Network object.
 */
function createNetwork(guid, name, type, counters, lastResetTime) {
    return {
        guid: guid,
        name: name,
        type: type,
        counters: counters,
        lastResetTime: lastResetTime,
    };
}
/**
 * Replacer function used to handle the bigint type.
 */
function replacer(_key, value) {
    return typeof value === 'bigint' ? value.toString() : value;
}
/**
 * Converts a mojo time to JS. TODO(b/200327630)
 */
function convertMojoTimeToJS(mojoTime) {
    // The JS Date() is based off of the number of milliseconds since the
    // UNIX epoch (1970-01-01 00::00:00 UTC), while |internalValue| of the
    // base::Time (represented in mojom.Time) represents the number of
    // microseconds since the Windows FILETIME epoch (1601-01-01 00:00:00 UTC).
    // This computes the final JS time by computing the epoch delta and the
    // conversion from microseconds to milliseconds.
    const windowsEpoch = Date.UTC(1601, 0, 1, 0, 0, 0, 0);
    const unixEpoch = Date.UTC(1970, 0, 1, 0, 0, 0, 0);
    // |epochDeltaInMs| equals to base::Time::kTimeToMicrosecondsOffset.
    const epochDeltaInMs = unixEpoch - windowsEpoch;
    const timeInMs = Number(mojoTime.internalValue) / 1000;
    return new Date(timeInMs - epochDeltaInMs);
}
const TrafficCountersElementBase = I18nMixin(PolymerElement);
export class TrafficCountersElement extends TrafficCountersElementBase {
    static get is() {
        return 'traffic-counters';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Information about networks.
             */
            networks_: { type: Array, value: [] },
        };
    }
    constructor() {
        super();
        /**
         * Expanded state per network type.
         */
        this.typeExpanded_ = [];
        /**
         * Adapter to access traffic counters functionality.
         */
        this.trafficCountersAdapter_ = new TrafficCountersAdapter();
    }
    /**
     * Handles requests to request traffic counters.
     */
    async onRequestTrafficCountersClick_() {
        await this.fetchTrafficCountersForActiveNetworks_();
    }
    /**
     * Handles requests to reset traffic counters.
     */
    async onResetTrafficCountersClick_(event) {
        const network = event.model.network;
        await this.trafficCountersAdapter_.resetTrafficCountersForNetwork(network.guid);
        const trafficCounters = await this.trafficCountersAdapter_.requestTrafficCountersForNetwork(network.guid);
        const lastResetTime = await this.trafficCountersAdapter_.requestLastResetTimeForNetwork(network.guid);
        const foundIdx = this.networks_.findIndex(n => n.guid === network.guid);
        if (foundIdx === -1) {
            return;
        }
        this.splice('networks_', foundIdx, 1, createNetwork(network.guid, network.name, network.type, trafficCounters, lastResetTime));
    }
    /**
     * Requests traffic counters for networks.
     */
    async fetchTrafficCountersForActiveNetworks_() {
        const networks = await this.trafficCountersAdapter_
            .requestTrafficCountersForActiveNetworks();
        this.networks_ = networks;
        return this.networks_;
    }
    getNetworkTypeString_(type) {
        return this.i18n('OncType' + OncMojo.getNetworkTypeString(type));
    }
    getNetworkTypeIcon_(type) {
        switch (type) {
            case NetworkType.kEthernet:
                return TechnologyIcons.ETHERNET;
            case NetworkType.kWiFi:
                return TechnologyIcons.WIFI;
            case NetworkType.kVPN:
                return TechnologyIcons.VPN;
            case NetworkType.kTether:
            case NetworkType.kMobile:
            case NetworkType.kCellular:
                return TechnologyIcons.CELLULAR;
            default:
                return '';
        }
    }
    getTypeExpanded_(type) {
        if (this.typeExpanded_[type] === undefined) {
            this.set('typeExpanded.' + type, false);
            return false;
        }
        return this.typeExpanded_[type];
    }
    /**
     * Helper function to toggle the expanded properties when the network
     * container is toggled.
     */
    onToggleExpanded_(event) {
        const type = event.model.network.type;
        this.set('typeExpanded.' + type, !this.typeExpanded_[type]);
    }
    countersToString_(counters) {
        // '\t' describes the number of white space characters to use as white space
        // while forming the JSON string.
        return JSON.stringify(counters, replacer, '\t');
    }
    lastResetTimeString_(network) {
        if (network.lastResetTime === null || network.lastResetTime === undefined) {
            return '';
        }
        return convertMojoTimeToJS(network.lastResetTime).toLocaleString();
    }
}
customElements.define(TrafficCountersElement.is, TrafficCountersElement);
