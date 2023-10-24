// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { TriState } from './app_management.mojom-webui.js';
export function createPermission(permissionType, value, isManaged) {
    return {
        permissionType,
        value,
        isManaged,
    };
}
export function createTriStatePermissionValue(value) {
    return { tristateValue: value };
}
export function getTriStatePermissionValue(permissionValue) {
    assert(isTriStateValue(permissionValue));
    return permissionValue.tristateValue;
}
export function createBoolPermissionValue(value) {
    return { boolValue: value };
}
export function getBoolPermissionValue(permissionValue) {
    assert(isBoolValue(permissionValue));
    return permissionValue.boolValue;
}
export function isTriStateValue(permissionValue) {
    return permissionValue['tristateValue'] !== undefined &&
        permissionValue['boolValue'] === undefined;
}
export function isBoolValue(permissionValue) {
    return permissionValue['boolValue'] !== undefined &&
        permissionValue['tristateValue'] === undefined;
}
export function createBoolPermission(permissionType, value, isManaged) {
    return createPermission(permissionType, createBoolPermissionValue(value), isManaged);
}
export function createTriStatePermission(permissionType, value, isManaged) {
    return createPermission(permissionType, createTriStatePermissionValue(value), isManaged);
}
export function isPermissionEnabled(permissionValue) {
    if (isBoolValue(permissionValue)) {
        return getBoolPermissionValue(permissionValue);
    }
    if (isTriStateValue(permissionValue)) {
        return getTriStatePermissionValue(permissionValue) === TriState.kAllow;
    }
    assertNotReached();
}
