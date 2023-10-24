// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { FakeObservables } from 'chrome://resources/ash/common/fake_observables.js';
import { assert } from 'chrome://resources/js/assert.js';
export class FakeSystemDataProvider {
    constructor() {
        this.methods = new FakeMethodResolver();
        this.observables = new FakeObservables();
        this.observeBatteryChargeStatusPromise = null;
        this.observeBatteryHealthPromise = null;
        this.observeCpuUsagePromise = null;
        this.observeMemoryUsagePromise = null;
        this.registerMethods();
        this.registerObservables();
    }
    getSystemInfo() {
        return this.methods.resolveMethod('getSystemInfo');
    }
    // Sets the value that will be returned when calling getSystemInfo().
    setFakeSystemInfo(systemInfo) {
        this.methods.setResult('getSystemInfo', { systemInfo });
    }
    // Implements SystemDataProviderInterface.GetBatteryInfo.
    getBatteryInfo() {
        return this.methods.resolveMethod('getBatteryInfo');
    }
    // Sets the value that will be returned when calling getBatteryInfo().
    setFakeBatteryInfo(batteryInfo) {
        this.methods.setResult('getBatteryInfo', { batteryInfo });
    }
    // Implements SystemDataProviderInterface.ObserveBatteryChargeStatus.
    observeBatteryChargeStatus(remote) {
        this.observeBatteryChargeStatusPromise = this.observe('BatteryChargeStatusObserver_onBatteryChargeStatusUpdated', (batteryChargeStatus) => {
            remote.onBatteryChargeStatusUpdated(
            /** @type {!BatteryChargeStatus} */ (batteryChargeStatus));
        });
    }
    // Returns the promise for the most recent battery charge status observation.
    getObserveBatteryChargeStatusPromiseForTesting() {
        assert(this.observeBatteryChargeStatusPromise);
        return this.observeBatteryChargeStatusPromise;
    }
    /**
     * Sets the values that will observed from observeBatteryChargeStatus.
     */
    setFakeBatteryChargeStatus(batteryChargeStatusList) {
        this.observables.setObservableData('BatteryChargeStatusObserver_onBatteryChargeStatusUpdated', batteryChargeStatusList);
    }
    // Causes the battery charge status observer to fire.
    triggerBatteryChargeStatusObserver() {
        this.observables.trigger('BatteryChargeStatusObserver_onBatteryChargeStatusUpdated');
    }
    // Implements SystemDataProviderInterface.ObserveBatteryHealth.
    observeBatteryHealth(remote) {
        this.observeBatteryHealthPromise = this.observe('BatteryHealthObserver_onBatteryHealthUpdated', (batteryHealth) => {
            remote.onBatteryHealthUpdated(
            /** @type {!BatteryHealth} */ (batteryHealth));
        });
    }
    // Returns the promise for the most recent battery health observation.
    getObserveBatteryHealthPromiseForTesting() {
        assert(this.observeBatteryHealthPromise);
        return this.observeBatteryHealthPromise;
    }
    // Sets the values that will observed from observeBatteryHealth.
    setFakeBatteryHealth(batteryHealthList) {
        this.observables.setObservableData('BatteryHealthObserver_onBatteryHealthUpdated', batteryHealthList);
    }
    // Causes the battery health observer to fire.
    triggerBatteryHealthObserver() {
        this.observables.trigger('BatteryHealthObserver_onBatteryHealthUpdated');
    }
    // Implements SystemDataProviderInterface.ObserveCpuUsage.
    observeCpuUsage(remote) {
        this.observeCpuUsagePromise =
            this.observe('CpuUsageObserver_onCpuUsageUpdated', (cpuUsage) => {
                remote.onCpuUsageUpdated(
                /** @type {!CpuUsage} */ (cpuUsage));
            });
    }
    // Returns the promise for the most recent cpu usage observation.
    getObserveCpuUsagePromiseForTesting() {
        assert(this.observeCpuUsagePromise);
        return this.observeCpuUsagePromise;
    }
    // Sets the values that will observed from observeCpuUsage.
    setFakeCpuUsage(cpuUsageList) {
        this.observables.setObservableData('CpuUsageObserver_onCpuUsageUpdated', cpuUsageList);
    }
    // Causes the CPU usage observer to fire.
    triggerCpuUsageObserver() {
        this.observables.trigger('CpuUsageObserver_onCpuUsageUpdated');
    }
    // Implements SystemDataProviderInterface.ObserveMemoryUsage.
    observeMemoryUsage(remote) {
        this.observeCpuUsagePromise = this.observe('MemoryUsageObserver_onMemoryUsageUpdated', (memoryUsage) => {
            remote.onMemoryUsageUpdated(
            /** @type {!MemoryUsage} */ (memoryUsage));
        });
    }
    // Returns the promise for the most recent memory usage observation.
    getObserveMemoryUsagePromiseForTesting() {
        assert(this.observeCpuUsagePromise);
        return this.observeCpuUsagePromise;
    }
    // Sets the values that will observed from ObserveCpuUsage.
    setFakeMemoryUsage(memoryUsageList) {
        this.observables.setObservableData('MemoryUsageObserver_onMemoryUsageUpdated', memoryUsageList);
    }
    // Causes the memory usage observer to fire.
    triggerMemoryUsageObserver() {
        this.observables.trigger('MemoryUsageObserver_onMemoryUsageUpdated');
    }
    // Make the observables fire automatically on various intervals.
    startTriggerIntervals() {
        this.observables.startTriggerOnInterval('CpuUsageObserver_onCpuUsageUpdated', 1000);
        this.observables.startTriggerOnInterval('MemoryUsageObserver_onMemoryUsageUpdated', 5000);
        this.observables.startTriggerOnInterval('BatteryHealthObserver_onBatteryHealthUpdated', 30000);
        this.observables.startTriggerOnInterval('BatteryChargeStatusObserver_onBatteryChargeStatusUpdated', 30000);
    }
    // Stop automatically triggering observables.
    stopTriggerIntervals() {
        this.observables.stopAllTriggerIntervals();
    }
    // Setup method resolvers.
    registerMethods() {
        this.methods.register('getSystemInfo');
        this.methods.register('getBatteryInfo');
    }
    // Setup observables.
    registerObservables() {
        this.observables.register('BatteryChargeStatusObserver_onBatteryChargeStatusUpdated');
        this.observables.register('BatteryHealthObserver_onBatteryHealthUpdated');
        this.observables.register('CpuUsageObserver_onCpuUsageUpdated');
        this.observables.register('MemoryUsageObserver_onMemoryUsageUpdated');
    }
    // Disables all observers and resets provider to its initial state.
    reset() {
        this.observables.stopAllTriggerIntervals();
        this.methods = new FakeMethodResolver();
        this.observables = new FakeObservables();
        this.registerMethods();
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
}
