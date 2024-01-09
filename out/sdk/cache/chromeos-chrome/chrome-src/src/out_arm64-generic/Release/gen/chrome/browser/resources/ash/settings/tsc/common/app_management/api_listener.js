// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { createInitialState } from 'chrome://resources/cr_components/app_management/util.js';
import { addApp, changeApp, removeApp } from './actions.js';
import { AppManagementBrowserProxy } from './browser_proxy.js';
import { AppManagementStore } from './store.js';
let initialized = false;
export async function initStoreAndListeners() {
    if (initialized) {
        return;
    }
    initialized = true;
    // Call two async functions and wait for both of them.
    const getAppsPromise = AppManagementBrowserProxy.getInstance().handler.getApps();
    const getSubAppToParentMapPromise = AppManagementBrowserProxy.getInstance().handler.getSubAppToParentMap();
    const responses = await Promise.all([getAppsPromise, getSubAppToParentMapPromise]);
    const { apps: initialApps } = responses[0];
    const { subAppToParentMap: initialSubAppToParentMap } = responses[1];
    const initialState = createInitialState(initialApps, initialSubAppToParentMap);
    AppManagementStore.getInstance().init(initialState);
    const callbackRouter = AppManagementBrowserProxy.getInstance().callbackRouter;
    callbackRouter.onAppAdded.addListener(onAppAdded);
    callbackRouter.onAppChanged.addListener(onAppChanged);
    callbackRouter.onAppRemoved.addListener(onAppRemoved);
}
function dispatch(action) {
    AppManagementStore.getInstance().dispatch(action);
}
function onAppAdded(app) {
    dispatch(addApp(app));
}
function onAppChanged(app) {
    dispatch(changeApp(app));
}
function onAppRemoved(appId) {
    dispatch(removeApp(appId));
}
