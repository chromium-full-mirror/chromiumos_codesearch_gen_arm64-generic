// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Class that provides the functionality for interacting with traffic counters.
 */
import { MojoInterfaceProviderImpl } from '../network/mojo_interface_provider.js';
import { FilterType, NO_LIMIT } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js';
import { NetworkType } from 'chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js';
/** Default traffic counter reset day. */
const kDefaultResetDay = 1;
/**
 * Helper function to create a Network object.
 */
function createNetwork(guid, name, type, counters, lastResetTime, friendlyDate, autoReset, userSpecifiedResetDay) {
    return {
        guid: guid,
        name: name,
        type: type,
        counters: counters,
        lastResetTime: lastResetTime,
        friendlyDate: friendlyDate,
        autoReset: autoReset,
        userSpecifiedResetDay: userSpecifiedResetDay,
    };
}
export class TrafficCountersAdapter {
    constructor() {
        /**
         * Network Config mojo remote.
         */
        this.networkConfig_ =
            MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();
    }
    /**
     * Requests traffic counters for active networks.
     */
    async requestTrafficCountersForActiveNetworks() {
        const filter = {
            filter: FilterType.kActive,
            networkType: NetworkType.kAll,
            limit: NO_LIMIT,
        };
        const networks = [];
        const networkStateList = await this.networkConfig_.getNetworkStateList(filter);
        for (const networkState of networkStateList.result) {
            const trafficCounters = await this.requestTrafficCountersForNetwork(networkState.guid);
            const lastResetTime = await this.requestLastResetTimeForNetwork(networkState.guid);
            const friendlyDate = await this.requestFriendlyDateForNetwork(networkState.guid);
            const autoReset = await this.requestEnableAutoResetBooleanForNetwork(networkState.guid);
            const userSpecifiedResetDay = await this.requestUserSpecifiedResetDayForNetwork(networkState.guid);
            networks.push(createNetwork(networkState.guid, networkState.name, networkState.type, trafficCounters, lastResetTime, friendlyDate, autoReset, userSpecifiedResetDay));
        }
        return networks;
    }
    /**
     * Resets traffic counters for the given network.
     */
    async resetTrafficCountersForNetwork(guid) {
        await this.networkConfig_.resetTrafficCounters(guid);
    }
    /**
     * Requests traffic counters for the given network.
     */
    async requestTrafficCountersForNetwork(guid) {
        const trafficCountersObj = await this.networkConfig_.requestTrafficCounters(guid);
        return trafficCountersObj.trafficCounters;
    }
    /**
     * Requests last reset time for the given network.
     */
    async requestLastResetTimeForNetwork(guid) {
        const managedPropertiesPromise = await this.networkConfig_.getManagedProperties(guid);
        if (!managedPropertiesPromise || !managedPropertiesPromise.result) {
            return null;
        }
        return managedPropertiesPromise.result.trafficCounterProperties
            .lastResetTime ||
            null;
    }
    /**
     * Requests a reader friendly date, corresponding to the last reset time,
     * for the given network.
     */
    async requestFriendlyDateForNetwork(guid) {
        const managedPropertiesPromise = await this.networkConfig_.getManagedProperties(guid);
        if (!managedPropertiesPromise || !managedPropertiesPromise.result) {
            return null;
        }
        return managedPropertiesPromise.result.trafficCounterProperties
            .friendlyDate ||
            null;
    }
    /**
     * Requests enable traffic counters auto reset boolean for the given network.
     */
    async requestEnableAutoResetBooleanForNetwork(guid) {
        const managedPropertiesPromise = await this.networkConfig_.getManagedProperties(guid);
        if (!managedPropertiesPromise || !managedPropertiesPromise.result) {
            return false;
        }
        return managedPropertiesPromise.result.trafficCounterProperties.autoReset;
    }
    /**
     * Requests user specified reset day for the given network.
     */
    async requestUserSpecifiedResetDayForNetwork(guid) {
        const managedPropertiesPromise = await this.networkConfig_.getManagedProperties(guid);
        if (!managedPropertiesPromise || !managedPropertiesPromise.result) {
            return kDefaultResetDay;
        }
        return managedPropertiesPromise.result.trafficCounterProperties
            .userSpecifiedResetDay;
    }
    /**
     * Sets values for auto reset.
     */
    async setTrafficCountersAutoResetForNetwork(guid, autoReset, resetDay) {
        await this.networkConfig_.setTrafficCountersAutoReset(guid, autoReset, resetDay);
    }
}
