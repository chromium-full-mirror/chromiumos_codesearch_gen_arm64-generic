// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { MetaKey, ModifierKey, SixPackShortcutModifier } from './input_device_settings_types.js';
class FakeMethodState {
    constructor() {
        this.result = undefined;
    }
    resolveMethod() {
        const promise = new Promise((resolve) => {
            resolve(this.result);
        });
        return promise;
    }
    getResult() {
        return this.result;
    }
    setResult(result) {
        this.result = result;
    }
}
/**
 * Manages a map of fake async methods, their resolvers and the fake
 * return value they will produce.
 */
export class FakeMethodResolver {
    constructor() {
        this.methodMap = new Map();
    }
    register(methodName) {
        this.methodMap.set(methodName, new FakeMethodState());
    }
    getResult(methodName) {
        return this.getState(methodName).getResult();
    }
    setResult(methodName, result) {
        this.getState(methodName).setResult(result);
    }
    resolveMethod(methodName) {
        return this.getState(methodName).resolveMethod();
    }
    getState(methodName) {
        const state = this.methodMap.get(methodName);
        assert(!!state, `Method '${methodName}' not found.`);
        return state;
    }
}
export class FakeInputDeviceSettingsProvider {
    constructor() {
        this.methods = new FakeMethodResolver();
        this.keyboardObservers = [];
        this.pointingStickObservers = [];
        this.mouseObservers = [];
        this.touchpadObservers = [];
        this.stylusObservers = [];
        this.graphicsTabletObservers = [];
        this.buttonPressObservers = [];
        this.observedIds = [];
        this.callCounts_ = {
            setGraphicsTabletSettings: 0,
            setMouseSettings: 0,
        };
        // Setup method resolvers.
        this.methods.register('fakeKeyboards');
        this.methods.register('fakeTouchpads');
        this.methods.register('fakeMice');
        this.methods.register('fakePointingSticks');
        this.methods.register('fakeStyluses');
        this.methods.register('fakeGraphicsTablets');
        this.methods.register('fakeMouseButtonActions');
        this.methods.register('fakeGraphicsTabletButtonActions');
    }
    setFakeKeyboards(keyboards) {
        this.methods.setResult('fakeKeyboards', keyboards);
        this.notifyKeboardListUpdated();
    }
    getConnectedKeyboardSettings() {
        return this.methods.resolveMethod('fakeKeyboards');
    }
    setFakeTouchpads(touchpads) {
        this.methods.setResult('fakeTouchpads', touchpads);
        this.notifyTouchpadListUpdated();
    }
    getConnectedTouchpadSettings() {
        return this.methods.resolveMethod('fakeTouchpads');
    }
    setFakeMice(mice) {
        this.methods.setResult('fakeMice', mice);
        this.notifyMouseListUpdated();
    }
    getConnectedMouseSettings() {
        return this.methods.resolveMethod('fakeMice');
    }
    setFakePointingSticks(pointingSticks) {
        this.methods.setResult('fakePointingSticks', pointingSticks);
        this.notifyPointingStickListUpdated();
    }
    getConnectedPointingStickSettings() {
        return this.methods.resolveMethod('fakePointingSticks');
    }
    setFakeStyluses(styluses) {
        this.methods.setResult('fakeStyluses', styluses);
    }
    getConnectedStylusSettings() {
        return this.methods.resolveMethod('fakeStyluses');
    }
    setFakeGraphicsTablets(graphicsTablets) {
        this.methods.setResult('fakeGraphicsTablets', graphicsTablets);
        this.notifyGraphicsTabletListUpdated();
    }
    getConnectedGraphicsTabletSettings() {
        return this.methods.resolveMethod('fakeGraphicsTablets');
    }
    restoreDefaultKeyboardRemappings(id) {
        const keyboards = this.methods.getResult('fakeKeyboards');
        for (const keyboard of keyboards) {
            if (keyboard.id === id) {
                keyboard.settings.modifierRemappings =
                    keyboard.metaKey === MetaKey.kCommand ? {
                        [ModifierKey.kControl]: ModifierKey.kMeta,
                        [ModifierKey.kMeta]: ModifierKey.kControl,
                    } :
                        {};
                keyboard.settings.sixPackKeyRemappings = {
                    pageDown: SixPackShortcutModifier.kSearch,
                    pageUp: SixPackShortcutModifier.kSearch,
                    del: SixPackShortcutModifier.kSearch,
                    insert: SixPackShortcutModifier.kSearch,
                    home: SixPackShortcutModifier.kSearch,
                    end: SixPackShortcutModifier.kSearch,
                };
            }
        }
        this.methods.setResult('fakeKeyboards', keyboards);
        this.notifyKeboardListUpdated();
    }
    setKeyboardSettings(id, settings) {
        const keyboards = this.methods.getResult('fakeKeyboards');
        for (const keyboard of keyboards) {
            if (keyboard.id === id) {
                keyboard.settings = settings;
            }
        }
        this.methods.setResult('fakeKeyboards', keyboards);
    }
    setMouseSettings(id, settings) {
        const mice = this.methods.getResult('fakeMice');
        for (const mouse of mice) {
            if (mouse.id === id) {
                mouse.settings = settings;
            }
        }
        this.methods.setResult('fakeMice', mice);
        this.notifyMouseListUpdated();
        this.callCounts_.setMouseSettings++;
    }
    getSetMouseSettingsCallCount() {
        return this.callCounts_.setMouseSettings;
    }
    setTouchpadSettings(id, settings) {
        const touchpads = this.methods.getResult('fakeTouchpads');
        for (const touchpad of touchpads) {
            if (touchpad.id === id) {
                touchpad.settings = settings;
            }
        }
        this.methods.setResult('fakeTouchpads', touchpads);
    }
    setPointingStickSettings(id, settings) {
        const pointingSticks = this.methods.getResult('fakePointingSticks');
        for (const pointingStick of pointingSticks) {
            if (pointingStick.id === id) {
                pointingStick.settings = settings;
            }
        }
        this.methods.setResult('fakePointingSticks', pointingSticks);
    }
    setGraphicsTabletSettings(id, settings) {
        const graphicsTablets = this.methods.getResult('fakeGraphicsTablets');
        for (const graphicsTablet of graphicsTablets) {
            if (graphicsTablet.id === id) {
                graphicsTablet.settings = settings;
            }
        }
        this.methods.setResult('fakeGraphicsTablets', graphicsTablets);
        this.notifyGraphicsTabletListUpdated();
        this.callCounts_.setGraphicsTabletSettings++;
    }
    getSetGraphicsTabletSettingsCallCount() {
        return this.callCounts_.setGraphicsTabletSettings;
    }
    notifyKeboardListUpdated() {
        const keyboards = this.methods.getResult('fakeKeyboards');
        // Make a deep copy to notify the functions observing keyboard settings.
        const keyboardsClone = !keyboards ? keyboards : JSON.parse(JSON.stringify(keyboards));
        for (const observer of this.keyboardObservers) {
            observer.onKeyboardListUpdated(keyboardsClone);
        }
    }
    notifyTouchpadListUpdated() {
        const touchpads = this.methods.getResult('fakeTouchpads');
        for (const observer of this.touchpadObservers) {
            observer.onTouchpadListUpdated(touchpads);
        }
    }
    notifyMouseListUpdated() {
        const mice = this.methods.getResult('fakeMice');
        for (const observer of this.mouseObservers) {
            observer.onMouseListUpdated(mice);
        }
    }
    notifyPointingStickListUpdated() {
        const pointingSticks = this.methods.getResult('fakePointingSticks');
        for (const observer of this.pointingStickObservers) {
            observer.onPointingStickListUpdated(pointingSticks);
        }
    }
    notifyStylusListUpdated() {
        const styluses = this.methods.getResult('fakeStyluses');
        for (const observer of this.stylusObservers) {
            observer.onStylusListUpdated(styluses);
        }
    }
    notifyGraphicsTabletListUpdated() {
        const graphicsTablets = this.methods.getResult('fakeGraphicsTablets');
        for (const observer of this.graphicsTabletObservers) {
            observer.onGraphicsTabletListUpdated(graphicsTablets);
        }
    }
    observeKeyboardSettings(observer) {
        this.keyboardObservers.push(observer);
        this.notifyKeboardListUpdated();
    }
    observeTouchpadSettings(observer) {
        this.touchpadObservers.push(observer);
        this.notifyTouchpadListUpdated();
    }
    observeMouseSettings(observer) {
        this.mouseObservers.push(observer);
        this.notifyMouseListUpdated();
    }
    observePointingStickSettings(observer) {
        this.pointingStickObservers.push(observer);
        this.notifyPointingStickListUpdated();
    }
    observeStylusSettings(observer) {
        this.stylusObservers.push(observer);
        this.notifyStylusListUpdated();
    }
    observeGraphicsTabletSettings(observer) {
        this.graphicsTabletObservers.push(observer);
        this.notifyGraphicsTabletListUpdated();
    }
    observeButtonPresses(observer) {
        this.buttonPressObservers.push(observer);
    }
    getActionsForMouseButtonCustomization() {
        return this.methods.resolveMethod('fakeMouseButtonActions');
    }
    setFakeActionsForMouseButtonCustomization(actionChoices) {
        this.methods.setResult('fakeMouseButtonActions', { options: actionChoices });
    }
    getActionsForGraphicsTabletButtonCustomization() {
        return this.methods.resolveMethod('fakeGraphicsTabletButtonActions');
    }
    setFakeActionsForGraphicsTabletButtonCustomization(actionChoices) {
        this.methods.setResult('fakeGraphicsTabletButtonActions', { options: actionChoices });
    }
    startObserving(id) {
        if (this.observedIds.includes(id)) {
            return;
        }
        this.observedIds.push(id);
    }
    stopObserving() {
        this.observedIds = [];
    }
    getObservedDevices() {
        return this.observedIds;
    }
    sendButtonPress(button) {
        for (const observer of this.buttonPressObservers) {
            observer.onButtonPressed(button);
        }
    }
}
