// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { appNotificationHandlerMojom } from 'chrome://os-settings/os_settings.js';
import { PermissionType } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
const { AppNotificationsObserverRemote } = appNotificationHandlerMojom;
export class FakeAppNotificationHandler {
    resolverMap_;
    appNotificationsObserverRemote_;
    isQuietModeEnabled_;
    lastUpdatedAppId_;
    lastUpdatedAppPermission_;
    apps_;
    constructor() {
        this.resolverMap_ = new Map();
        this.appNotificationsObserverRemote_ = new AppNotificationsObserverRemote();
        this.isQuietModeEnabled_ = false;
        this.lastUpdatedAppId_ = '-1';
        this.lastUpdatedAppPermission_ = {
            permissionType: PermissionType.kUnknown,
            isManaged: false,
            value: {},
        };
        this.apps_ = [];
        this.resetForTest();
    }
    resetForTest() {
        if (this.appNotificationsObserverRemote_) {
            this.appNotificationsObserverRemote_ =
                new AppNotificationsObserverRemote();
        }
        this.apps_ = [];
        this.isQuietModeEnabled_ = false;
        this.lastUpdatedAppId_ = '-1';
        this.lastUpdatedAppPermission_ = {
            permissionType: PermissionType.kUnknown,
            isManaged: false,
            value: {},
        };
        this.resolverMap_.set('addObserver', new PromiseResolver());
        this.resolverMap_.set('getQuietMode', new PromiseResolver());
        this.resolverMap_.set('setQuietMode', new PromiseResolver());
        this.resolverMap_.set('setNotificationPermission', new PromiseResolver());
        this.resolverMap_.set('getApps', new PromiseResolver());
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
        return this.appNotificationsObserverRemote_;
    }
    getCurrentQuietModeState() {
        return this.isQuietModeEnabled_;
    }
    getLastUpdatedAppId() {
        return this.lastUpdatedAppId_;
    }
    getLastUpdatedPermission() {
        return this.lastUpdatedAppPermission_;
    }
    // appNotificationHandler methods
    addObserver(remote) {
        this.appNotificationsObserverRemote_ = remote;
        this.methodCalled('addObserver');
        return Promise.resolve();
    }
    getQuietMode() {
        this.methodCalled('getQuietMode');
        return Promise.resolve({ enabled: this.isQuietModeEnabled_ });
    }
    setQuietMode(enabled) {
        this.isQuietModeEnabled_ = enabled;
        this.methodCalled('setQuietMode');
        return Promise.resolve({ success: true });
    }
    openBrowserNotificationSettings() {
        this.methodCalled('openBrowserNotificationSettings');
    }
    setNotificationPermission(id, permission) {
        this.lastUpdatedAppId_ = id;
        this.lastUpdatedAppPermission_ = permission;
        this.methodCalled('setNotificationPermission');
        return Promise.resolve({ success: true });
    }
    getApps() {
        this.methodCalled('getApps');
        return Promise.resolve({ apps: this.apps_ });
    }
}
