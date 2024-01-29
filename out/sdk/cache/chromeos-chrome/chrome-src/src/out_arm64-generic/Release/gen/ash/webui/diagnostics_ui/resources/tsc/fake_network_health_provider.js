// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeObservables } from 'chrome://resources/ash/common/fake_observables.js';
import { assert } from 'chrome://resources/js/assert.js';
// Method names.
export const ON_NETWORK_LIST_CHANGED_METHOD_NAME = 'NetworkListObserver_onNetworkListChanged';
const ON_NETWORK_STATE_CHANGED_METHOD_NAME = 'NetworkStateObserver_onNetworkStateChanged';
export class FakeNetworkHealthProvider {
    constructor() {
        this.observables = new FakeObservables();
        this.observeNetworkListPromise = null;
        this.observeNetworkStatePromise = null;
        this.registerObservables();
    }
    /**
     * Implements NetworkHealthProviderInterface.ObserveNetworkList.
     */
    observeNetworkList(remote) {
        this.observeNetworkListPromise =
            this.observe(ON_NETWORK_LIST_CHANGED_METHOD_NAME, (networkGuidInfo) => {
                remote.onNetworkListChanged(networkGuidInfo.networkGuids, networkGuidInfo.activeGuid);
            });
    }
    /**
     * Implements NetworkHealthProviderInterface.ObserveNetwork.
     * The guid argument is used to observe a specific network identified
     * by |guid| within a group of observers.
     */
    observeNetwork(remote, guid) {
        this.observeNetworkStatePromise = this.observeWithArg(ON_NETWORK_STATE_CHANGED_METHOD_NAME, guid, (network) => {
            remote.onNetworkStateChanged(
            /** @type {!Network} */ (network));
        });
    }
    // Sets the values that will be observed from observeNetworkList.
    setFakeNetworkGuidInfo(networkGuidInfoList) {
        this.observables.setObservableData(ON_NETWORK_LIST_CHANGED_METHOD_NAME, networkGuidInfoList);
    }
    setFakeNetworkState(guid, networkStateList) {
        this.observables.setObservableDataForArg(ON_NETWORK_STATE_CHANGED_METHOD_NAME, guid, networkStateList);
    }
    // Returns the promise for the most recent network list observation.
    getObserveNetworkListPromiseForTesting() {
        assert(this.observeNetworkListPromise);
        return this.observeNetworkListPromise;
    }
    // Returns the promise for the most recent network state observation.
    getObserveNetworkStatePromiseForTesting() {
        assert(this.observeNetworkStatePromise);
        return this.observeNetworkStatePromise;
    }
    // Causes the network list observer to fire.
    triggerNetworkListObserver() {
        this.observables.trigger(ON_NETWORK_LIST_CHANGED_METHOD_NAME);
    }
    // Make the observable fire automatically on provided interval.
    startTriggerInterval(methodName, intervalMs) {
        this.observables.startTriggerOnInterval(methodName, intervalMs);
    }
    // Stop automatically triggering observables.
    stopTriggerIntervals() {
        this.observables.stopAllTriggerIntervals();
    }
    registerObservables() {
        this.observables.register(ON_NETWORK_LIST_CHANGED_METHOD_NAME);
        this.observables.registerObservableWithArg(ON_NETWORK_STATE_CHANGED_METHOD_NAME);
    }
    // Disables all observers and resets provider to its initial state.
    reset() {
        this.observables.stopAllTriggerIntervals();
        this.observables = new FakeObservables();
        this.registerObservables();
    }
    // Sets up an observer for methodName.
    observe(methodName, callback) {
        return new Promise((resolve) => {
            this.observables.observe(methodName, callback);
            this.observables.trigger(methodName);
            resolve();
        });
    }
    // Sets up an observer for a methodName that takes an additional arg.
    observeWithArg(methodName, arg, callback) {
        return new Promise((resolve) => {
            this.observables.observeWithArg(methodName, arg, callback);
            this.observables.triggerWithArg(methodName, arg);
            resolve();
        });
    }
}
