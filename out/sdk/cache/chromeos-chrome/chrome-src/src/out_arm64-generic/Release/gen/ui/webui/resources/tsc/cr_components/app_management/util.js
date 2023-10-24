// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PermissionType, TriState } from './app_management.mojom-webui.js';
import { BrowserProxy } from './browser_proxy.js';
import { AppManagementUserAction, AppType, OptionalBool } from './constants.js';
import { isBoolValue, isPermissionEnabled, isTriStateValue } from './permission_util.js';
export function createEmptyState() {
    return {
        apps: {},
        selectedAppId: null,
        subAppToParentAppId: {},
    };
}
export function createInitialState(apps, subAppToParentAppId) {
    const initialState = createEmptyState();
    for (const app of apps) {
        initialState.apps[app.id] = app;
    }
    initialState.subAppToParentAppId = subAppToParentAppId;
    return initialState;
}
export function getAppIcon(app) {
    return `chrome://app-icon/${app.id}/64`;
}
export function getPermissionValueBool(app, permissionType) {
    const permission = getPermission(app, permissionType);
    assert(permission);
    return isPermissionEnabled(permission.value);
}
/**
 * Returns the TriState value of a permission. If the permission value is not
 * already a TriState, it will be converted based on the boolean value.
 */
export function getPermissionValueAsTriState(app, permissionType) {
    const permission = getPermission(app, permissionType);
    assert(permission);
    if (isTriStateValue(permission.value)) {
        return permission.value.tristateValue;
    }
    if (isBoolValue(permission.value)) {
        return permission.value.boolValue ? TriState.kAllow : TriState.kBlock;
    }
    assertNotReached();
}
/**
 * Undefined is returned when the app does not request a permission.
 */
export function getPermission(app, permissionType) {
    return app.permissions[PermissionType[permissionType]];
}
export function getSelectedApp(state) {
    const selectedAppId = state.selectedAppId;
    return selectedAppId ? state.apps[selectedAppId] : null;
}
/**
 * Returns a list of all apps whose parent's app ID matches the selected app.
 */
export function getSubAppsOfSelectedApp(state) {
    const selectedAppId = state.selectedAppId;
    const result = selectedAppId ?
        Object.values(state.apps)
            .filter((app) => state.subAppToParentAppId[app.id] === selectedAppId) :
        [];
    return result;
}
/**
 * Returns the selected app's parent app or null.
 */
export function getParentApp(state) {
    const selectedAppId = state.selectedAppId;
    if (selectedAppId) {
        const parentAppId = state.subAppToParentAppId[selectedAppId];
        return parentAppId ? state.apps[parentAppId] : null;
    }
    return null;
}
/**
 * A comparator function to sort strings alphabetically.
 */
export function alphabeticalSort(a, b) {
    return a.localeCompare(b);
}
/**
 * Toggles an OptionalBool
 */
export function toggleOptionalBool(bool) {
    switch (bool) {
        case OptionalBool.kFalse:
            return OptionalBool.kTrue;
        case OptionalBool.kTrue:
            return OptionalBool.kFalse;
        default:
            assertNotReached();
    }
}
export function convertOptionalBoolToBool(optionalBool) {
    switch (optionalBool) {
        case OptionalBool.kTrue:
            return true;
        case OptionalBool.kFalse:
            return false;
        default:
            assertNotReached();
    }
}
function getUserActionHistogramNameForAppType(appType) {
    switch (appType) {
        case AppType.kArc:
            return 'AppManagement.AppDetailViews.ArcApp';
        case AppType.kChromeApp:
        case AppType.kStandaloneBrowser:
        case AppType.kStandaloneBrowserChromeApp:
            // TODO(https://crbug.com/1225848): Figure out appropriate behavior for
            // Lacros-hosted chrome-apps.
            return 'AppManagement.AppDetailViews.ChromeApp';
        case AppType.kWeb:
            return 'AppManagement.AppDetailViews.WebApp';
        case AppType.kPluginVm:
            return 'AppManagement.AppDetailViews.PluginVmApp';
        case AppType.kBorealis:
            return 'AppManagement.AppDetailViews.BorealisApp';
        default:
            assertNotReached();
    }
}
export function recordAppManagementUserAction(appType, userAction) {
    const histogram = getUserActionHistogramNameForAppType(appType);
    const enumLength = Object.keys(AppManagementUserAction).length;
    BrowserProxy.getInstance().recordEnumerationValue(histogram, userAction, enumLength);
}
/**
 * @param arg An argument to check for existence.
 * @throws If |arg| is undefined or null.
 */
export function assertExists(arg, message = `Expected ${arg} to be defined.`) {
    assert(arg !== undefined && arg !== null, message);
}
/**
 * @param arg A argument to check for existence.
 * @return |arg| with the type narrowed as non-nullable.
 * @throws If |arg| is undefined or null.
 */
export function castExists(arg, message) {
    assertExists(arg, message);
    return arg;
}
