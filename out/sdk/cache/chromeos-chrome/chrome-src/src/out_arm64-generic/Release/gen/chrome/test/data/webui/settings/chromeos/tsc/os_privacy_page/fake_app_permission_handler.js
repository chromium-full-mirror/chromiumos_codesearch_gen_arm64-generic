// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { appPermissionHandlerMojom } from 'chrome://os-settings/os_settings.js';
import { PermissionType, TriState } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { createApp } from './privacy_hub_app_permission_test_util.js';
const { AppPermissionsObserverRemote } = appPermissionHandlerMojom;
export class FakeAppPermissionHandler {
    resolverMap_;
    appPermissionsObserverRemote_;
    lastOpenedBrowserPermissionSettingsType_;
    lastUpdatedAppPermission_;
    nativeSettingsOpenedCount_;
    constructor() {
        this.resolverMap_ = new Map();
        this.resolverMap_.set('addObserver', new PromiseResolver());
        this.resolverMap_.set('getApps', new PromiseResolver());
        this.resolverMap_.set('getSystemAppsThatUseCamera', new PromiseResolver());
        this.resolverMap_.set('getSystemAppsThatUseMicrophone', new PromiseResolver());
        this.resolverMap_.set('openBrowserPermissionSettings', new PromiseResolver());
        this.resolverMap_.set('openNativeSettings', new PromiseResolver());
        this.resolverMap_.set('setPermission', new PromiseResolver());
        this.appPermissionsObserverRemote_ = new AppPermissionsObserverRemote();
        this.lastUpdatedAppPermission_ = {
            permissionType: PermissionType.kUnknown,
            isManaged: false,
            value: {},
        };
        this.lastOpenedBrowserPermissionSettingsType_ = PermissionType.kUnknown;
        this.nativeSettingsOpenedCount_ = 0;
    }
    getResolver_(methodName) {
        const method = this.resolverMap_.get(methodName);
        assertTrue(!!method, `Method '${methodName}' not found.`);
        return method;
    }
    methodCalled(methodName) {
        this.getResolver_(methodName).resolve();
    }
    async whenCalled(methodName) {
        await this.getResolver_(methodName).promise;
        // Support sequential calls to whenCalled by replacing the promise.
        this.resolverMap_.set(methodName, new PromiseResolver());
    }
    getObserverRemote() {
        return this.appPermissionsObserverRemote_;
    }
    getLastOpenedBrowserPermissionSettingsType() {
        return this.lastOpenedBrowserPermissionSettingsType_;
    }
    getLastUpdatedPermission() {
        return this.lastUpdatedAppPermission_;
    }
    getNativeSettingsOpenedCount() {
        return this.nativeSettingsOpenedCount_;
    }
    // appPermissionHandler methods.
    addObserver(remote) {
        this.appPermissionsObserverRemote_ = remote;
        this.methodCalled('addObserver');
        return Promise.resolve();
    }
    getApps() {
        this.methodCalled('getApps');
        return Promise.resolve({ apps: [] });
    }
    getSystemAppsThatUseCamera() {
        this.methodCalled('getSystemAppsThatUseCamera');
        return Promise.resolve({
            apps: [createApp('app1_id', 'app1_name', PermissionType.kCamera, TriState.kAllow)],
        });
    }
    getSystemAppsThatUseMicrophone() {
        this.methodCalled('getSystemAppsThatUseMicrophone');
        return Promise.resolve({
            apps: [createApp('app1_id', 'app1_name', PermissionType.kMicrophone, TriState.kAllow)],
        });
    }
    setPermission(id, permission) {
        assertTrue(!!id);
        this.lastUpdatedAppPermission_ = permission;
        this.methodCalled('setPermission');
        return Promise.resolve({ success: true });
    }
    openNativeSettings(id) {
        assertTrue(!!id);
        this.nativeSettingsOpenedCount_++;
        this.methodCalled('openNativeSettings');
        return Promise.resolve({ success: true });
    }
    openBrowserPermissionSettings(permissionType) {
        this.lastOpenedBrowserPermissionSettingsType_ = permissionType;
        this.methodCalled('openBrowserPermissionSettings');
        return Promise.resolve({ success: true });
    }
}
