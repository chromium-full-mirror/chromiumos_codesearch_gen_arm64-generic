// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { fakeAllNetworksAvailable, fakeBatteryChargeStatus, fakeBatteryHealth, fakeBatteryInfo, fakeCellularNetwork, fakeCpuUsage, fakeEthernetNetwork, fakeKeyboards, fakeMemoryUsage, fakeSystemInfo, fakeTouchDevices, fakeWifiNetwork } from './fake_data.js';
import { FakeInputDataProvider } from './fake_input_data_provider.js';
import { FakeNetworkHealthProvider } from './fake_network_health_provider.js';
import { FakeSystemDataProvider } from './fake_system_data_provider.js';
import { FakeSystemRoutineController } from './fake_system_routine_controller.js';
import { InputDataProvider } from './input_data_provider.mojom-webui.js';
import { NetworkHealthProvider } from './network_health_provider.mojom-webui.js';
import { SystemDataProvider } from './system_data_provider.mojom-webui.js';
import { SystemRoutineController } from './system_routine_controller.mojom-webui.js';
/**
 * @fileoverview
 * Provides singleton access to mojo interfaces with the ability
 * to override them with test/fake implementations.
 */
/**
 * If true this will replace all providers with fakes.
 */
const useFakeProviders = false;
let systemDataProvider = null;
let systemRoutineController = null;
let networkHealthProvider = null;
let inputDataProvider = null;
export function setSystemDataProviderForTesting(testProvider) {
    systemDataProvider = testProvider;
}
/**
 * Create a FakeSystemDataProvider with reasonable fake data.
 */
function setupFakeSystemDataProvider() {
    const provider = new FakeSystemDataProvider();
    provider.setFakeBatteryChargeStatus(fakeBatteryChargeStatus);
    provider.setFakeBatteryHealth(fakeBatteryHealth);
    provider.setFakeBatteryInfo(fakeBatteryInfo);
    provider.setFakeCpuUsage(fakeCpuUsage);
    provider.setFakeMemoryUsage(fakeMemoryUsage);
    provider.setFakeSystemInfo(fakeSystemInfo);
    setSystemDataProviderForTesting(provider);
}
export function getSystemDataProvider() {
    if (!systemDataProvider) {
        if (useFakeProviders) {
            setupFakeSystemDataProvider();
        }
        else {
            systemDataProvider = SystemDataProvider.getRemote();
        }
    }
    assert(!!systemDataProvider);
    return systemDataProvider;
}
export function setSystemRoutineControllerForTesting(testController) {
    systemRoutineController = testController;
}
/**
 * Create a FakeSystemRoutineController with reasonable fake data.
 */
function setupFakeSystemRoutineController() {
    const controller = new FakeSystemRoutineController();
    // Enable all routines by default.
    controller.setFakeSupportedRoutines(controller.getAllRoutines());
    setSystemRoutineControllerForTesting(controller);
}
export function getSystemRoutineController() {
    if (!systemRoutineController) {
        if (useFakeProviders) {
            setupFakeSystemRoutineController();
        }
        else {
            systemRoutineController = SystemRoutineController.getRemote();
        }
    }
    assert(!!systemRoutineController);
    return systemRoutineController;
}
export function setNetworkHealthProviderForTesting(testProvider) {
    networkHealthProvider = testProvider;
}
/**
 * Create a FakeNetworkHealthProvider with reasonable fake data.
 */
function setupFakeNetworkHealthProvider() {
    const provider = new FakeNetworkHealthProvider();
    // The fake provides a stable state with all networks connected.
    provider.setFakeNetworkGuidInfo([fakeAllNetworksAvailable]);
    provider.setFakeNetworkState('ethernetGuid', [fakeEthernetNetwork]);
    provider.setFakeNetworkState('wifiGuid', [fakeWifiNetwork]);
    provider.setFakeNetworkState('cellularGuid', [fakeCellularNetwork]);
    setNetworkHealthProviderForTesting(provider);
}
export function getNetworkHealthProvider() {
    if (!networkHealthProvider) {
        if (useFakeProviders) {
            setupFakeNetworkHealthProvider();
        }
        else {
            networkHealthProvider = NetworkHealthProvider.getRemote();
        }
    }
    assert(!!networkHealthProvider);
    return networkHealthProvider;
}
// Creates a FakeInputDataProvider with fake devices setup.
function setupFakeInputDataProvider() {
    const provider = new FakeInputDataProvider();
    provider.setFakeConnectedDevices(fakeKeyboards, fakeTouchDevices);
    setInputDataProviderForTesting(provider);
}
export function setInputDataProviderForTesting(testProvider) {
    inputDataProvider = testProvider;
}
export function getInputDataProvider() {
    if (!inputDataProvider) {
        if (useFakeProviders) {
            setupFakeInputDataProvider();
        }
        else {
            inputDataProvider = InputDataProvider.getRemote();
        }
    }
    assert(!!inputDataProvider);
    return inputDataProvider;
}
