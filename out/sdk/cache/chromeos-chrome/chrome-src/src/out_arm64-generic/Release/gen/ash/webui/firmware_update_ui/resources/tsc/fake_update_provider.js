// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeObservables } from 'chrome://resources/ash/common/fake_observables.js';
import { getUpdateController, setUseFakeProviders } from './mojo_interface_provider.js';
// Method names.
export const ON_UPDATE_LIST_CHANGED = 'UpdateObserver_onUpdateListChanged';
/**
 * @fileoverview
 * Implements a fake version of the UpdateProvider mojo interface.
 */
export class FakeUpdateProvider {
    constructor() {
        this.observables = new FakeObservables();
        this.observePeripheralUpdatesPromise = null;
        this.inflightUpdate = null;
        setUseFakeProviders(true);
        this.registerObservables();
    }
    /*
     * Implements UpdateProviderInterface.ObservePeripheralUpdates.
     */
    observePeripheralUpdates(remote) {
        this.observePeripheralUpdatesPromise = this.observe(ON_UPDATE_LIST_CHANGED, (firmwareUpdates) => {
            remote.onUpdateListChanged(firmwareUpdates);
        });
    }
    /*
     * Implements UpdateProviderInterface.FetchInProgressUpdate.
     */
    fetchInProgressUpdate() {
        return new Promise((resolve) => resolve({ update: this.inflightUpdate }));
    }
    /*
     * Implements UpdateProviderInterface.PrepareForUpdate.
     */
    prepareForUpdate(deviceId) {
        const controller = getUpdateController();
        controller
            .setDeviceIdForUpdateInProgress(deviceId);
        return new Promise((resolve) => resolve({ controller: controller }));
    }
    /**
     * Sets the values that will be observed from observePeripheralUpdates.
     */
    setFakeFirmwareUpdates(firmwareUpdates) {
        this.observables.setObservableData(ON_UPDATE_LIST_CHANGED, [firmwareUpdates]);
    }
    /**
     * Sets the inflight update.
     */
    setInflightUpdate(update) {
        this.inflightUpdate = update;
    }
    /**
     * Returns the promise for the most recent peripheral updates observation.
     */
    getObservePeripheralUpdatesPromiseForTesting() {
        return this.observePeripheralUpdatesPromise;
    }
    /**
     * Causes the device added observer to fire.
     */
    triggerDeviceAddedObserver() {
        this.observables.trigger(ON_UPDATE_LIST_CHANGED);
    }
    registerObservables() {
        this.observables.register(ON_UPDATE_LIST_CHANGED);
    }
    /**
     * Disables all observers and resets provider to its initial state.
     */
    reset() {
        this.observables = new FakeObservables();
        this.registerObservables();
    }
    /**
     * Sets up an observer for methodName.
     */
    observe(methodName, callback) {
        return new Promise((resolve) => {
            this.observables.observe(methodName, callback);
            this.observables.trigger(methodName);
            resolve();
        });
    }
}
