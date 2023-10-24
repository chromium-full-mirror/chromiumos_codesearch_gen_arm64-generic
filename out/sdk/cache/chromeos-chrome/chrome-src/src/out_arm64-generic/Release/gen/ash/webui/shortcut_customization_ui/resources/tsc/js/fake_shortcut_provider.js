// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { FakeMethodResolver } from 'chrome://resources/ash/common/fake_method_resolver.js';
import { FakeObservables } from 'chrome://resources/ash/common/fake_observables.js';
import { assert } from 'chrome://resources/js/assert.js';
import { AcceleratorConfigResult, AcceleratorSource } from './shortcut_types.js';
/**
 * @fileoverview
 * Implements a fake version of the FakeShortcutProvider mojo interface.
 */
// Method names.
const ON_ACCELERATORS_UPDATED_METHOD_NAME = 'AcceleratorsUpdatedObserver_OnAcceleratorsUpdated';
const ON_POLICY_UPDATED_METHOD_NAME = 'PolicyUpdatedObserver_OnCustomizationPolicyUpdated';
export class FakeShortcutProvider {
    constructor() {
        this.observables = new FakeObservables();
        this.acceleratorsUpdatedRemote = null;
        this.acceleratorsUpdatedPromise = null;
        this.policyUpdateRemote = null;
        this.policyUpdatedPromise = null;
        this.restoreDefaultCallCount = 0;
        this.preventProcessingAcceleratorsCallCount = 0;
        this.addAcceleratorCallCount = 0;
        this.removeAcceleratorCallCount = 0;
        this.methods = new FakeMethodResolver();
        // Setup method resolvers.
        this.methods.register('getAccelerators');
        this.methods.register('getAcceleratorLayoutInfos');
        this.methods.register('isMutable');
        this.methods.register('isCustomizationAllowedByPolicy');
        this.methods.register('hasLauncherButton');
        this.methods.register('addAccelerator');
        this.methods.register('replaceAccelerator');
        this.methods.register('removeAccelerator');
        this.methods.register('restoreDefault');
        this.methods.register('restoreAllDefaults');
        this.methods.register('addObserver');
        this.methods.register('addPolicyObserver');
        this.methods.register('preventProcessingAccelerators');
        this.methods.register('getConflictAccelerator');
        this.methods.register('getDefaultAcceleratorsForId');
        this.methods.register('recordUserAction');
        this.methods.register('recordMainCategoryNavigation');
        this.registerObservables();
    }
    registerObservables() {
        this.observables.register(ON_ACCELERATORS_UPDATED_METHOD_NAME);
        this.observables.register(ON_POLICY_UPDATED_METHOD_NAME);
    }
    // Disable all observers and reset provider to initial state.
    reset() {
        this.restoreDefaultCallCount = 0;
        this.preventProcessingAcceleratorsCallCount = 0;
        this.addAcceleratorCallCount = 0;
        this.removeAcceleratorCallCount = 0;
        this.observables = new FakeObservables();
        this.registerObservables();
    }
    triggerOnAcceleratorUpdated() {
        this.observables.trigger(ON_ACCELERATORS_UPDATED_METHOD_NAME);
    }
    getAcceleratorLayoutInfos() {
        return this.methods.resolveMethod('getAcceleratorLayoutInfos');
    }
    getAccelerators() {
        return this.methods.resolveMethod('getAccelerators');
    }
    isMutable(source) {
        this.methods.setResult('isMutable', { isMutable: source !== AcceleratorSource.kBrowser });
        return this.methods.resolveMethod('isMutable');
    }
    isCustomizationAllowedByPolicy() {
        return this.methods.resolveMethod('isCustomizationAllowedByPolicy');
    }
    hasLauncherButton() {
        return this.methods.resolveMethod('hasLauncherButton');
    }
    addObserver(observer) {
        this.acceleratorsUpdatedPromise = this.observe(ON_ACCELERATORS_UPDATED_METHOD_NAME, (config) => {
            observer.onAcceleratorsUpdated(config);
        });
    }
    addPolicyObserver(observer) {
        this.policyUpdatedPromise =
            this.observe(ON_POLICY_UPDATED_METHOD_NAME, () => {
                observer.onCustomizationPolicyUpdated();
            });
    }
    getAcceleratorsUpdatedPromiseForTesting() {
        assert(this.acceleratorsUpdatedPromise);
        return this.acceleratorsUpdatedPromise;
    }
    getPolicyUpdatedPromiseForTesting() {
        assert(this.policyUpdatedPromise);
        return this.policyUpdatedPromise;
    }
    // Set the value that will be retuned when `onAcceleratorsUpdated()` is
    // called.
    setFakeAcceleratorsUpdated(config) {
        this.observables.setObservableData(ON_ACCELERATORS_UPDATED_METHOD_NAME, config);
    }
    setFakePolicyUpdated() {
        this.observables.setObservableData(ON_POLICY_UPDATED_METHOD_NAME, [true]);
    }
    addAccelerator(_source, _actionId, _accelerator) {
        ++this.addAcceleratorCallCount;
        return this.methods.resolveMethod('addAccelerator');
    }
    replaceAccelerator(_source, _actionId, _old_accelerator, _new_accelerator) {
        // Always return kSuccess in this fake.
        return this.methods.resolveMethod('replaceAccelerator');
    }
    removeAccelerator() {
        // Always return kSuccess in this fake.
        ++this.removeAcceleratorCallCount;
        return this.methods.resolveMethod('removeAccelerator');
    }
    restoreDefault(_source, _actionId) {
        ++this.restoreDefaultCallCount;
        return this.methods.resolveMethod('restoreDefault');
    }
    restoreAllDefaults() {
        // Always return kSuccess in this fake.
        const result = { result: AcceleratorConfigResult.kSuccess };
        this.methods.setResult('restoreAllDefaults', { result });
        return this.methods.resolveMethod('restoreAllDefaults');
    }
    recordUserAction(userAction) {
        this.lastRecordedUserAction = userAction;
    }
    getLatestRecordedAction() {
        return this.lastRecordedUserAction;
    }
    recordMainCategoryNavigation(category) {
        this.lastRecordedMainCategory = category;
    }
    getLatestMainCategoryNavigated() {
        return this.lastRecordedMainCategory;
    }
    preventProcessingAccelerators(_preventProcessingAccelerators) {
        ++this.preventProcessingAcceleratorsCallCount;
        return this.methods.resolveMethod('preventProcessingAccelerators');
    }
    getConflictAccelerator(_source, _actionId, _accelerator) {
        return this.methods.resolveMethod('getConflictAccelerator');
    }
    getDefaultAcceleratorsForId(_actionId) {
        return this.methods.resolveMethod('getDefaultAcceleratorsForId');
    }
    /**
     * Set the config result that will be returned when calling
     * `getConflictAccelerator()`.
     */
    setFakeGetConflictAccelerator(result) {
        this.methods.setResult('getConflictAccelerator', { result });
    }
    /**
     * Set the default accelerators that will be returned when calling
     * `getDefaultAcceleratorsForId()`.
     */
    setFakeGetDefaultAcceleratorsForId(accelerators) {
        this.methods.setResult('getDefaultAcceleratorsForId', { accelerators });
    }
    /**
     * Sets the value that will be returned when calling
     * getAccelerators().
     */
    setFakeAcceleratorConfig(config) {
        this.methods.setResult('getAccelerators', { config });
    }
    /**
     * Sets the value that will be returned when calling
     * getAcceleratorLayoutInfos().
     */
    setFakeAcceleratorLayoutInfos(layoutInfos) {
        this.methods.setResult('getAcceleratorLayoutInfos', { layoutInfos });
    }
    getRestoreDefaultCallCount() {
        return this.restoreDefaultCallCount;
    }
    getPreventProcessingAcceleratorsCallCount() {
        return this.preventProcessingAcceleratorsCallCount;
    }
    getAddAcceleratorCallCount() {
        return this.addAcceleratorCallCount;
    }
    getRemoveAcceleratorCallCount() {
        return this.removeAcceleratorCallCount;
    }
    setFakeHasLauncherButton(hasLauncherButton) {
        this.methods.setResult('hasLauncherButton', { hasLauncherButton });
    }
    setFakeAddAcceleratorResult(result) {
        this.methods.setResult('addAccelerator', { result });
    }
    setFakeReplaceAcceleratorResult(result) {
        this.methods.setResult('replaceAccelerator', { result });
    }
    setFakeRestoreDefaultResult(result) {
        this.methods.setResult('restoreDefault', { result });
    }
    setFakeRemoveAcceleratorResult(result) {
        this.methods.setResult('removeAccelerator', { result });
    }
    setFakeIsCustomizationAllowedByPolicy(isCustomizationAllowedByPolicy) {
        this.methods.setResult('isCustomizationAllowedByPolicy', { isCustomizationAllowedByPolicy });
    }
    // Sets up an observer for methodName.
    observe(methodName, callback) {
        return new Promise((resolve) => {
            this.observables.observe(methodName, callback);
            resolve();
        });
    }
}
