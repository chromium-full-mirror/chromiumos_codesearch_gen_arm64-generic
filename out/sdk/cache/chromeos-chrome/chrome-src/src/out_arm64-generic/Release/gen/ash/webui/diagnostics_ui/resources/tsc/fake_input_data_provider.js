// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
/**
 * @fileoverview
 * Implements a fake version of the InputDataProvider Mojo interface.
 */
export class FakeInputDataProvider {
    constructor() {
        this.methods = new FakeMethodResolver();
        this.observers = [];
        this.keyboards = [];
        this.keyboardObservers = [];
        this.touchDevices = [];
        this.moveAppToTestingScreenCalled = 0;
        this.moveAppBackToPreviousScreenCalled = 0;
        this.a11yTouchPassthroughState = false;
        this.registerMethods();
    }
    // Resets provider to its internal state.
    reset() {
        this.methods = new FakeMethodResolver();
        this.observers = [];
        this.keyboards = [];
        this.touchDevices = [];
        this.moveAppToTestingScreenCalled = 0;
        this.moveAppBackToPreviousScreenCalled = 0;
        this.a11yTouchPassthroughState = false;
        this.registerMethods();
    }
    // Setup method resolvers.
    registerMethods() {
        this.methods.register('getConnectedDevices');
        this.methods.register('observeKeyEvents');
        this.methods.register('observeTabletMode');
        this.methods.register('observeLidState');
    }
    getConnectedDevices() {
        return this.methods.resolveMethod('getConnectedDevices');
    }
    /**
     * Registers an observer for key events on the specific device.
     * @param id The ID of the keyboard to observe
     */
    observeKeyEvents(id, remote) {
        if (!this.keyboardObservers[id]) {
            return;
        }
        this.keyboardObservers[id].push(remote);
    }
    observeInternalDisplayPowerState(remote) {
        this.internalDisplayPowerStateObserver = remote;
    }
    /**
     * Sets the internal display power state to be on.
     */
    setInternalDisplayPowerOn() {
        this.internalDisplayPowerStateObserver.onInternalDisplayPowerStateChanged(true);
    }
    /**
     * Sets the internal display power state to be off.
     */
    setInternalDisplayPowerOff() {
        this.internalDisplayPowerStateObserver.onInternalDisplayPowerStateChanged(false);
    }
    /**
     * Mock registering observer returning isTabletMode as false.
     */
    setStartWithLidClosed() {
        this.methods.setResult('observeLidState', { isLidOpen: false });
    }
    /**
     * Mock registering observer returning isTabletMode as true.
     */
    setStartWithLidOpen() {
        this.methods.setResult('observeLidState', { isLidOpen: true });
    }
    /**
     * Registers an observer for tablet mode changes and returns current tablet
     * mode.
     */
    observeLidState(remote) {
        this.lidStateObserver = remote;
        return this.methods.resolveMethod('observeLidState');
    }
    setLidStateOpen() {
        this.lidStateObserver.onLidStateChanged(true);
    }
    setLidStateClosed() {
        this.lidStateObserver.onLidStateChanged(false);
    }
    /**
     * Registers an observer for tablet mode changes and returns current tablet
     * mode.
     */
    observeTabletMode(remote) {
        this.tabletModeObserver = remote;
        return this.methods.resolveMethod('observeTabletMode');
    }
    /**
     * Mock starting tablet mode.
     */
    startTabletMode() {
        this.tabletModeObserver.onTabletModeChanged(true);
    }
    /**
     * Mock ending tablet mode.
     */
    endTabletMode() {
        this.tabletModeObserver.onTabletModeChanged(false);
    }
    /**
     * Mock registering observer returning isTabletMode as false.
     */
    setStartTesterWithClamshellMode() {
        this.methods.setResult('observeTabletMode', { isTabletMode: false });
    }
    /**
     * Mock registering observer returning isTabletMode as true.
     */
    setStartTesterWithTabletMode() {
        this.methods.setResult('observeTabletMode', { isTabletMode: true });
    }
    /**
     * Sets the values that will be returned when calling getConnectedDevices(),
     * but does not notify connected device observers of the changes.
     */
    setFakeConnectedDevices(keyboards, touchDevices) {
        this.keyboards = keyboards;
        this.touchDevices = touchDevices;
        this.methods.setResult('getConnectedDevices', { keyboards: [...keyboards], touchDevices: [...touchDevices] });
    }
    // Registers an observer for the set of connected devices.
    observeConnectedDevices(remote) {
        this.observers.push(remote);
    }
    /**
     * Fakes the connection of a keyboard to the system, notifying observers
     * appropriately.
     */
    addFakeConnectedKeyboard(keyboard) {
        this.keyboards.push(keyboard);
        this.keyboardObservers[keyboard.id] = [];
        this.methods.setResult('getConnectedDevices', {
            keyboards: [...this.keyboards],
            touchDevices: [...this.touchDevices],
        });
        for (const observer of this.observers) {
            observer.onKeyboardConnected(keyboard);
        }
    }
    /**
     * Fakes the disconnection of a keyboard from the system, notifying observers
     * appropriately.
     * @param id The ID of the keyboard to remove
     */
    removeFakeConnectedKeyboardById(id) {
        this.keyboards = this.keyboards.filter((device) => device.id !== id);
        delete this.keyboardObservers[id];
        for (const observer of this.observers) {
            observer.onKeyboardDisconnected(id);
        }
    }
    /**
     * Fakes the connection of a touch device to the system, notifying observers
     * appropriately.
     */
    addFakeConnectedTouchDevice(touchDevice) {
        this.touchDevices.push(touchDevice);
        this.methods.setResult('getConnectedDevices', { keyboards: this.keyboards, touchDevices: this.touchDevices });
        for (const observer of this.observers) {
            observer.onTouchDeviceConnected(touchDevice);
        }
    }
    /**
     * Fakes the disconnection of a touch device from the system, notifying
     * observers appropriately.
     * @param id The ID of the touch device to remove
     */
    removeFakeConnectedTouchDeviceById(id) {
        this.touchDevices = this.touchDevices.filter((device) => device.id !== id);
        for (const observer of this.observers) {
            observer.onTouchDeviceDisconnected(id);
        }
    }
    /**
     * Fakes the function to move the Diagnostics app to the testing touchscreen.
     */
    moveAppToTestingScreen() {
        this.moveAppToTestingScreenCalled++;
    }
    /**
     * Returns the number of times moveAppToTestingScreen function is called.
     */
    getMoveAppToTestingScreenCalled() {
        return this.moveAppToTestingScreenCalled;
    }
    /**
     * Fakes the function to move the Diagnostics app back to previous screen.
     */
    moveAppBackToPreviousScreen() {
        this.moveAppBackToPreviousScreenCalled++;
    }
    /**
     * Returns the number of times moveAppBackToPreviousScreen function is called.
     */
    getMoveAppBackToPreviousScreenCalled() {
        return this.moveAppBackToPreviousScreenCalled;
    }
    /*
     * Fake function to enable/disable A11y touch exploration passthough.
     */
    setA11yTouchPassthrough(enabled) {
        this.a11yTouchPassthroughState = enabled;
    }
    /**
     * Get the current state of A11y touch passthrough.
     */
    getA11yTouchPassthroughState() {
        return this.a11yTouchPassthroughState;
    }
}
