// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NoteAppLockScreenSupport } from 'chrome://os-settings/os_settings.js';
import { assert } from 'chrome://resources/js/assert.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestDevicePageBrowserProxy extends TestBrowserProxy {
    acIdleBehavior;
    batteryIdleBehavior;
    lastHighlightedDisplayId = '-1';
    lidClosedBehavior;
    powerSourceId = '-1';
    androidAppsReceived_ = false;
    noteTakingApps_ = [];
    hasHapticTouchpad_ = true;
    hasKeyboard_ = true;
    hasMouse_ = true;
    hasPointingStick_ = true;
    hasTouchpad_ = true;
    onNoteTakingAppsUpdated_;
    constructor() {
        super([
            'requestNoteTakingApps',
            'requestPowerManagementSettings',
            'setPreferredNoteTakingApp',
            'setPreferredNoteTakingAppEnabledOnLockScreen',
            'showKeyboardShortcutViewer',
            'showPlayStore',
            'updatePowerStatus',
        ]);
    }
    set hasMouse(hasMouse) {
        this.hasMouse_ = hasMouse;
        webUIListenerCallback('has-mouse-changed', this.hasMouse_);
    }
    set hasTouchpad(hasTouchpad) {
        this.hasTouchpad_ = hasTouchpad;
        webUIListenerCallback('has-touchpad-changed', this.hasTouchpad_);
    }
    set hasPointingStick(hasPointingStick) {
        this.hasPointingStick_ = hasPointingStick;
        webUIListenerCallback('has-pointing-stick-changed', this.hasPointingStick_);
    }
    set hasHapticTouchpad(hasHapticTouchpad) {
        this.hasHapticTouchpad_ = hasHapticTouchpad;
        webUIListenerCallback('has-haptic-touchpad-changed', this.hasHapticTouchpad_);
    }
    initializePointers() {
        webUIListenerCallback('has-mouse-changed', this.hasMouse_);
        webUIListenerCallback('has-touchpad-changed', this.hasTouchpad_);
        webUIListenerCallback('has-pointing-stick-changed', this.hasPointingStick_);
        webUIListenerCallback('has-haptic-touchpad-changed', this.hasHapticTouchpad_);
    }
    initializeStylus() {
        // Enable stylus.
        webUIListenerCallback('has-stylus-changed', true);
    }
    initializeKeyboard() { }
    initializeKeyboardWatcher() {
        webUIListenerCallback('has-hardware-keyboard', this.hasKeyboard_);
    }
    showKeyboardShortcutViewer() {
        this.methodCalled('showKeyboardShortcutViewer');
    }
    updateAndroidEnabled() { }
    updatePowerStatus() {
        this.methodCalled('updatePowerStatus');
    }
    setPowerSource(powerSourceId) {
        this.powerSourceId = powerSourceId;
    }
    requestPowerManagementSettings() {
        this.methodCalled('requestPowerManagementSettings');
    }
    setIdleBehavior(behavior, whenOnAc) {
        if (whenOnAc) {
            this.acIdleBehavior = behavior;
        }
        else {
            this.batteryIdleBehavior = behavior;
        }
    }
    setLidClosedBehavior(behavior) {
        this.lidClosedBehavior = behavior;
    }
    setNoteTakingAppsUpdatedCallback(callback) {
        this.onNoteTakingAppsUpdated_ = callback;
    }
    requestNoteTakingApps() {
        this.methodCalled('requestNoteTakingApps');
    }
    setPreferredNoteTakingApp(appId) {
        this.methodCalled('setPreferredNoteTakingApp');
        let changed = false;
        this.noteTakingApps_.forEach((app) => {
            changed = changed || app.preferred !== (app.value === appId);
            app.preferred = app.value === appId;
        });
        if (changed) {
            this.scheduleLockScreenAppsUpdated_();
        }
    }
    setPreferredNoteTakingAppEnabledOnLockScreen(enabled) {
        this.methodCalled('setPreferredNoteTakingAppEnabledOnLockScreen');
        this.noteTakingApps_.forEach((app) => {
            if (enabled) {
                if (app.preferred) {
                    assertEquals(NoteAppLockScreenSupport.SUPPORTED, app.lockScreenSupport);
                }
                if (app.lockScreenSupport === NoteAppLockScreenSupport.SUPPORTED) {
                    app.lockScreenSupport = NoteAppLockScreenSupport.ENABLED;
                }
            }
            else {
                if (app.preferred) {
                    assertEquals(NoteAppLockScreenSupport.ENABLED, app.lockScreenSupport);
                }
                if (app.lockScreenSupport === NoteAppLockScreenSupport.ENABLED) {
                    app.lockScreenSupport = NoteAppLockScreenSupport.SUPPORTED;
                }
            }
        });
        this.scheduleLockScreenAppsUpdated_();
    }
    highlightDisplay(id) {
        this.lastHighlightedDisplayId = id;
    }
    dragDisplayDelta() { }
    openMyFiles() { }
    openBrowsingDataSettings() { }
    setAdaptiveCharging() { }
    setExternalStoragesUpdatedCallback() { }
    updateExternalStorages() { }
    updateStorageInfo() { }
    // Test interface:
    /**
     * Sets whether the app list contains Android apps.
     * @param received Whether the list of Android note-taking apps was received.
     */
    setAndroidAppsReceived(received) {
        this.androidAppsReceived_ = received;
        this.scheduleLockScreenAppsUpdated_();
    }
    /**
     * @return App id of the app currently selected as preferred.
     */
    getPreferredNoteTakingAppId() {
        const app = this.noteTakingApps_.find((existing) => {
            return existing.preferred;
        });
        return app ? app.value : '';
    }
    /**
     * @return The lock screen support state of the app currently selected as
     *     preferred.
     */
    getPreferredAppLockScreenState() {
        const app = this.noteTakingApps_.find((existing) => {
            return existing.preferred;
        });
        return app?.lockScreenSupport;
    }
    /**
     * Sets the current list of known note taking apps.
     * @param apps The list of apps to set.
     */
    setNoteTakingApps(apps) {
        this.noteTakingApps_ = apps;
        this.scheduleLockScreenAppsUpdated_();
    }
    /**
     * Adds an app to the list of known note-taking apps.
     */
    addNoteTakingApp(app) {
        const appAlreadyExists = this.noteTakingApps_.find((existing) => {
            return existing.value === app.value;
        });
        assert(!appAlreadyExists);
        this.noteTakingApps_.push(app);
        this.scheduleLockScreenAppsUpdated_();
    }
    /**
     * Invokes the registered note taking apps update callback.
     */
    scheduleLockScreenAppsUpdated_() {
        this.onNoteTakingAppsUpdated_(this.noteTakingApps_.map((app) => {
            return Object.assign({}, app);
        }), !this.androidAppsReceived_);
    }
    showPlayStore(url) {
        this.methodCalled(this.showPlayStore.name, url);
    }
}
