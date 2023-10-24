// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { addWebUiListener } from 'chrome://resources/js/cr.js';
/**
 * Enumeration for device state about remaining space.
 * These values must be kept in sync with
 * StorageManagerHandler::StorageSpaceState in C++ code.
 */
export var StorageSpaceState;
(function (StorageSpaceState) {
    StorageSpaceState[StorageSpaceState["NORMAL"] = 0] = "NORMAL";
    StorageSpaceState[StorageSpaceState["LOW"] = 1] = "LOW";
    StorageSpaceState[StorageSpaceState["CRITICALLY_LOW"] = 2] = "CRITICALLY_LOW";
})(StorageSpaceState || (StorageSpaceState = {}));
let systemDisplayApi = null;
export function setDisplayApiForTesting(testDisplayApi) {
    systemDisplayApi = testDisplayApi;
}
export function getDisplayApi() {
    if (!systemDisplayApi) {
        systemDisplayApi = chrome.system.display;
    }
    return systemDisplayApi;
}
/**
 * Mirrors ash::settings::PowerHandler::IdleBehavior.
 */
export var IdleBehavior;
(function (IdleBehavior) {
    IdleBehavior[IdleBehavior["DISPLAY_OFF_SLEEP"] = 0] = "DISPLAY_OFF_SLEEP";
    IdleBehavior[IdleBehavior["DISPLAY_OFF"] = 1] = "DISPLAY_OFF";
    IdleBehavior[IdleBehavior["DISPLAY_ON"] = 2] = "DISPLAY_ON";
    IdleBehavior[IdleBehavior["SHUT_DOWN"] = 3] = "SHUT_DOWN";
    IdleBehavior[IdleBehavior["STOP_SESSION"] = 4] = "STOP_SESSION";
})(IdleBehavior || (IdleBehavior = {}));
/**
 * Mirrors chromeos::PowerPolicyController::Action.
 */
export var LidClosedBehavior;
(function (LidClosedBehavior) {
    LidClosedBehavior[LidClosedBehavior["SUSPEND"] = 0] = "SUSPEND";
    LidClosedBehavior[LidClosedBehavior["STOP_SESSION"] = 1] = "STOP_SESSION";
    LidClosedBehavior[LidClosedBehavior["SHUT_DOWN"] = 2] = "SHUT_DOWN";
    LidClosedBehavior[LidClosedBehavior["DO_NOTHING"] = 3] = "DO_NOTHING";
})(LidClosedBehavior || (LidClosedBehavior = {}));
/**
 * A note app's availability for running as note handler app from lock screen.
 * Mirrors `ash::LockScreenAppSupport`.
 */
export var NoteAppLockScreenSupport;
(function (NoteAppLockScreenSupport) {
    NoteAppLockScreenSupport[NoteAppLockScreenSupport["NOT_SUPPORTED"] = 0] = "NOT_SUPPORTED";
    NoteAppLockScreenSupport[NoteAppLockScreenSupport["NOT_ALLOWED_BY_POLICY"] = 1] = "NOT_ALLOWED_BY_POLICY";
    NoteAppLockScreenSupport[NoteAppLockScreenSupport["SUPPORTED"] = 2] = "SUPPORTED";
    NoteAppLockScreenSupport[NoteAppLockScreenSupport["ENABLED"] = 3] = "ENABLED";
})(NoteAppLockScreenSupport || (NoteAppLockScreenSupport = {}));
let instance = null;
export class DevicePageBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new DevicePageBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    initializePointers() {
        chrome.send('initializePointerSettings');
    }
    initializeStylus() {
        chrome.send('initializeStylusSettings');
    }
    initializeKeyboard() {
        chrome.send('initializeKeyboardSettings');
    }
    showKeyboardShortcutViewer() {
        chrome.send('showKeyboardShortcutViewer');
    }
    initializeKeyboardWatcher() {
        chrome.send('initializeKeyboardWatcher');
    }
    updateAndroidEnabled() {
        chrome.send('updateAndroidEnabled');
    }
    updatePowerStatus() {
        chrome.send('updatePowerStatus');
    }
    setPowerSource(powerSourceId) {
        chrome.send('setPowerSource', [powerSourceId]);
    }
    requestPowerManagementSettings() {
        chrome.send('requestPowerManagementSettings');
    }
    setIdleBehavior(behavior, whenOnAc) {
        chrome.send('setIdleBehavior', [behavior, whenOnAc]);
    }
    setAdaptiveCharging(enabled) {
        chrome.send('setAdaptiveCharging', [enabled]);
    }
    setLidClosedBehavior(behavior) {
        chrome.send('setLidClosedBehavior', [behavior]);
    }
    setNoteTakingAppsUpdatedCallback(callback) {
        addWebUiListener('onNoteTakingAppsUpdated', callback);
    }
    showPlayStore(url) {
        chrome.send('showPlayStoreApps', [url]);
    }
    requestNoteTakingApps() {
        chrome.send('requestNoteTakingApps');
    }
    setPreferredNoteTakingApp(appId) {
        chrome.send('setPreferredNoteTakingApp', [appId]);
    }
    setPreferredNoteTakingAppEnabledOnLockScreen(enabled) {
        chrome.send('setPreferredNoteTakingAppEnabledOnLockScreen', [enabled]);
    }
    updateExternalStorages() {
        chrome.send('updateExternalStorages');
    }
    setExternalStoragesUpdatedCallback(callback) {
        addWebUiListener('onExternalStoragesUpdated', callback);
    }
    highlightDisplay(id) {
        chrome.send('highlightDisplay', [id]);
    }
    dragDisplayDelta(displayId, deltaX, deltaY) {
        chrome.send('dragDisplayDelta', [displayId, deltaX, deltaY]);
    }
    updateStorageInfo() {
        chrome.send('updateStorageInfo');
    }
    openMyFiles() {
        chrome.send('openMyFiles');
    }
    openBrowsingDataSettings() {
        chrome.send('openBrowsingDataSettings');
    }
}
