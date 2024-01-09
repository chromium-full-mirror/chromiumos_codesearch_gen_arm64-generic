// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AppManagementStore } from 'chrome://os-settings/os_settings.js';
import { AppType, PageHandlerReceiver, PermissionType, TriState, WindowMode } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { InstallReason, InstallSource } from 'chrome://resources/cr_components/app_management/constants.js';
import { createBoolPermission, createTriStatePermission, getTriStatePermissionValue } from 'chrome://resources/cr_components/app_management/permission_util.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PromiseResolver } from 'chrome://resources/js/promise_resolver.js';
export class FakePageHandler {
    static createWebPermissions(options) {
        const permissionTypes = [
            PermissionType.kLocation,
            PermissionType.kNotifications,
            PermissionType.kMicrophone,
            PermissionType.kCamera,
        ];
        const permissions = {};
        for (const permissionType of permissionTypes) {
            let permissionValue = TriState.kAllow;
            let isManaged = false;
            if (options && options[permissionType]) {
                const opts = options[permissionType];
                permissionValue = opts.value ? getTriStatePermissionValue(opts.value) :
                    permissionValue;
                isManaged = opts.isManaged || isManaged;
            }
            permissions[permissionType] =
                createTriStatePermission(permissionType, permissionValue, isManaged);
        }
        return permissions;
    }
    static createArcPermissions(optIds) {
        const permissionTypes = optIds || [
            PermissionType.kCamera,
            PermissionType.kLocation,
            PermissionType.kMicrophone,
            PermissionType.kNotifications,
            PermissionType.kContacts,
            PermissionType.kStorage,
        ];
        const permissions = {};
        for (const permissionType of permissionTypes) {
            permissions[permissionType] =
                createBoolPermission(permissionType, true, /*is_managed=*/ false);
        }
        return permissions;
    }
    static createPermissions(appType) {
        switch (appType) {
            case (AppType.kWeb):
                return FakePageHandler.createWebPermissions();
            case (AppType.kArc):
                return FakePageHandler.createArcPermissions();
            default:
                return {};
        }
    }
    static createApp(id, optConfig) {
        const app = {
            id: id,
            type: AppType.kWeb,
            title: 'App Title',
            description: '',
            version: '5.1',
            size: '9.0MB',
            isPinned: false,
            isPolicyPinned: false,
            installReason: InstallReason.kUser,
            permissions: {},
            hideMoreSettings: false,
            hidePinToShelf: false,
            isPreferredApp: false,
            windowMode: WindowMode.kWindow,
            hideWindowMode: false,
            resizeLocked: false,
            hideResizeLocked: true,
            supportedLinks: [],
            runOnOsLogin: undefined,
            fileHandlingState: undefined,
            installSource: InstallSource.kUnknown,
            appSize: '',
            dataSize: '',
            publisherId: '',
            formattedOrigin: '',
            scopeExtensions: [],
            supportedLocales: [],
        };
        if (optConfig) {
            Object.assign(app, optConfig);
        }
        // Only create default permissions if none were provided in the config.
        if (!optConfig || optConfig.permissions === undefined) {
            app.permissions = FakePageHandler.createPermissions(app.type);
        }
        return app;
    }
    guid;
    overlappingAppIds;
    page;
    apps_;
    receiver_;
    resolverMap_;
    constructor(page) {
        this.receiver_ = new PageHandlerReceiver(this);
        this.guid = 0;
        this.overlappingAppIds = [];
        this.page = page;
        this.apps_ = [];
        this.resolverMap_ = new Map();
        this.resolverMap_.set('setPreferredApp', new PromiseResolver());
        this.resolverMap_.set('getOverlappingPreferredApps', new PromiseResolver());
        this.resolverMap_.set('setAppLocale', new PromiseResolver());
    }
    getResolver_(methodName) {
        const method = this.resolverMap_.get(methodName);
        assert(method, `Method '${methodName}' not found.`);
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
    getRemote() {
        return this.receiver_.$.bindNewPipeAndPassRemote();
    }
    async flushPipesForTesting() {
        await this.page.$.flushForTesting();
    }
    async getApps() {
        return { apps: this.apps_ };
    }
    async getApp(_appId) {
        assertNotReached();
    }
    async getSubAppToParentMap() {
        return { subAppToParentMap: {} };
    }
    async getExtensionAppPermissionMessages(_appId) {
        return { messages: [] };
    }
    setApps(appList) {
        this.apps_ = appList;
    }
    setPinned(appId, isPinned) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        const newApp = { ...app, isPinned };
        this.page.onAppChanged(newApp);
    }
    setPermission(appId, permission) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        // Check that the app had a previous value for the given permission
        assert(app.permissions[permission.permissionType]);
        const newPermissions = { ...app.permissions };
        newPermissions[permission.permissionType] = permission;
        const newApp = { ...app, permissions: newPermissions };
        this.page.onAppChanged(newApp);
    }
    setResizeLocked(appId, resizeLocked) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        const newApp = { ...app, resizeLocked };
        this.page.onAppChanged(newApp);
    }
    setHideResizeLocked(appId, hideResizeLocked) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        const newApp = { ...app, hideResizeLocked };
        this.page.onAppChanged(newApp);
    }
    uninstall(appId) {
        this.page.onAppRemoved(appId);
    }
    setPreferredApp(appId, isPreferredApp) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        const newApp = { ...app, isPreferredApp };
        this.page.onAppChanged(newApp);
        this.methodCalled('setPreferredApp');
    }
    openNativeSettings(_appId) { }
    updateAppSize(_appId) { }
    setWindowMode(_appId, _windowMode) {
        assertNotReached();
    }
    setAppLocale(appId, localeTag) {
        const app = AppManagementStore.getInstance().data.apps[appId];
        assert(app);
        const newApp = {
            ...app,
            selectedLocale: { localeTag, displayName: '', nativeDisplayName: '' },
        };
        this.page.onAppChanged(newApp);
        this.methodCalled('setAppLocale');
    }
    setRunOnOsLoginMode(_appId, _runOnOsLoginMode) {
        assertNotReached();
    }
    setFileHandlingEnabled(_appId, _fileHandlingEnabled) {
        assertNotReached();
    }
    showDefaultAppAssociationsUi() {
        assertNotReached();
    }
    async getOverlappingPreferredApps(_appId) {
        this.methodCalled('getOverlappingPreferredApps');
        if (!this.overlappingAppIds) {
            return { appIds: [] };
        }
        return { appIds: this.overlappingAppIds };
    }
    openStorePage(_appId) { }
    async addApp(optId, optConfig) {
        optId = optId || String(this.guid++);
        const app = FakePageHandler.createApp(optId, optConfig);
        this.page.onAppAdded(app);
        await this.flushPipesForTesting();
        return app;
    }
    /**
     * Takes an app id and an object mapping app fields to the values they
     * should be changed to, and dispatches an action to carry out these
     * changes.
     */
    async changeApp(id, changes) {
        this.page.onAppChanged(FakePageHandler.createApp(id, changes));
        await this.flushPipesForTesting();
    }
}
