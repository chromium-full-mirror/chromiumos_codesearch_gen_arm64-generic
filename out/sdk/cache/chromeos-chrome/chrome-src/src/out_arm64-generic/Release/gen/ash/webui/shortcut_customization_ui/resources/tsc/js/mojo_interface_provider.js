// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { AcceleratorConfigurationProvider } from '../mojom-webui/shortcut_customization.mojom-webui.js';
import { fakeAcceleratorConfig, fakeLayoutInfo } from './fake_data.js';
import { FakeShortcutProvider } from './fake_shortcut_provider.js';
/**
 * @fileoverview
 * Provides singleton access to mojo interfaces with the ability
 * to override them with test/fake implementations.
 */
let shortcutProvider = null;
/**
 * When true, this variable forces the app to use the fake provider.
 * This variable is intended to be manually set by developers for the
 * purposes of debugging.
 */
export let useFakeProvider = false;
export function setShortcutProviderForTesting(testProvider) {
    shortcutProvider = testProvider;
}
export function setUseFakeProviderForTesting(useFake) {
    useFakeProvider = useFake;
}
/**
 * Sets up a FakeShortcutProvider to be used at runtime.
 * TODO(zentaro): Remove once mojo bindings are implemented.
 */
export function setupFakeShortcutProvider() {
    // Create provider.
    const provider = new FakeShortcutProvider();
    // Setup accelerator config.
    provider.setFakeAcceleratorConfig(fakeAcceleratorConfig);
    // Setup accelerator layout info.
    provider.setFakeAcceleratorLayoutInfos(fakeLayoutInfo);
    // Set the fake provider.
    setShortcutProviderForTesting(provider);
    return provider;
}
/**
 * This wrapper is used to bridge the gap from the fake provider to the
 * real provider until all methods are implemented.
 * TODO(cambickel): Remove once all mojo bindings are implemented.
 */
export class ShortcutProviderWrapper {
    constructor(fakeProvider) {
        this.remote = AcceleratorConfigurationProvider.getRemote();
        this.fakeProvider = fakeProvider;
    }
    getAcceleratorLayoutInfos() {
        return this.remote.getAcceleratorLayoutInfos();
    }
    getAccelerators() {
        return this.remote.getAccelerators();
    }
    isMutable(source) {
        return this.remote.isMutable(source);
    }
    isCustomizationAllowedByPolicy() {
        return this.remote.isCustomizationAllowedByPolicy();
    }
    hasLauncherButton() {
        return this.remote.hasLauncherButton();
    }
    addAccelerator(source, action, accelerator) {
        return this.remote.addAccelerator(source, action, accelerator);
    }
    removeAccelerator(source, action, accelerator) {
        return this.remote.removeAccelerator(source, action, accelerator);
    }
    replaceAccelerator(source, action, oldAccelerator, newAccelerator) {
        return this.remote.replaceAccelerator(source, action, oldAccelerator, newAccelerator);
    }
    addObserver(observer) {
        return this.remote.addObserver(observer);
    }
    addPolicyObserver(observer) {
        return this.remote.addPolicyObserver(observer);
    }
    restoreDefault(source, actionId) {
        return this.remote.restoreDefault(source, actionId);
    }
    restoreAllDefaults() {
        return this.remote.restoreAllDefaults();
    }
    preventProcessingAccelerators(preventProcessingAccelerators) {
        return this.remote.preventProcessingAccelerators(preventProcessingAccelerators);
    }
    getConflictAccelerator(source, action, accelerator) {
        return this.remote.getConflictAccelerator(source, action, accelerator);
    }
    getDefaultAcceleratorsForId(action) {
        return this.remote.getDefaultAcceleratorsForId(action);
    }
    recordUserAction(userAction) {
        this.remote.recordUserAction(userAction);
    }
    recordMainCategoryNavigation(category) {
        this.remote.recordMainCategoryNavigation(category);
    }
    recordEditDialogCompletedActions(completed_actions) {
        this.remote.recordEditDialogCompletedActions(completed_actions);
    }
    recordAddOrEditSubactions(isAdd, subactions) {
        this.remote.recordAddOrEditSubactions(isAdd, subactions);
    }
}
export function getShortcutProvider() {
    if (!shortcutProvider) {
        const fakeProvider = setupFakeShortcutProvider();
        if (useFakeProvider) {
            setShortcutProviderForTesting(fakeProvider);
        }
        else {
            shortcutProvider = new ShortcutProviderWrapper(fakeProvider);
        }
    }
    assert(!!shortcutProvider);
    return shortcutProvider;
}
