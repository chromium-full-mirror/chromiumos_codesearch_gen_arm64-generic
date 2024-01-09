// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function addApp(app) {
    return {
        name: 'add-app',
        app,
    };
}
export function changeApp(app) {
    return {
        name: 'change-app',
        app,
    };
}
export function removeApp(id) {
    return {
        name: 'remove-app',
        id,
    };
}
export function updateSelectedAppId(appId) {
    return {
        name: 'update-selected-app-id',
        value: appId,
    };
}
export function updateSubAppToParentAppId(appId, parentAppId) {
    return {
        name: 'update-sub-app-to-parent-app-id',
        subApp: appId,
        parent: parentAppId,
    };
}
