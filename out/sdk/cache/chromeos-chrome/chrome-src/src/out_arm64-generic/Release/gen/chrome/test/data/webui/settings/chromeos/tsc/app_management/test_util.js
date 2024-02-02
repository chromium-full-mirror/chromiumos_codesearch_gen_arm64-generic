// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AppManagementBrowserProxy, AppManagementComponentBrowserProxy } from 'chrome://os-settings/os_settings.js';
import { PageCallbackRouter } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { isVisible } from 'chrome://webui-test/test_util.js';
import { FakePageHandler } from './fake_page_handler.js';
import { TestAppManagementStore } from './test_store.js';
export class TestAppManagementBrowserProxy extends TestBrowserProxy {
    callbackRouter;
    handler;
    constructor(handler) {
        super(['recordEnumerationValue']);
        this.handler = handler;
        this.callbackRouter = new PageCallbackRouter();
    }
    recordEnumerationValue(metricName, value, enumSize) {
        this.methodCalled('recordEnumerationValue', metricName, value, enumSize);
    }
}
export let fakeComponentBrowserProxy = null;
/**
 * Create an app for testing purpose.
 */
export function createApp(id, config) {
    return FakePageHandler.createApp(id, config);
}
export function setupFakeHandler() {
    const browserProxy = AppManagementBrowserProxy.getInstance();
    const fakeHandler = new FakePageHandler(browserProxy.callbackRouter.$.bindNewPipeAndPassRemote());
    browserProxy.handler = fakeHandler.getRemote();
    fakeComponentBrowserProxy = new TestAppManagementBrowserProxy(fakeHandler);
    AppManagementComponentBrowserProxy.setInstance(fakeComponentBrowserProxy);
    return fakeHandler;
}
/**
 * Replace the app management store instance with a new, empty
 * TestAppManagementStore.
 */
export function replaceStore() {
    const store = new TestAppManagementStore({ selectedAppId: null });
    store.setReducersEnabled(true);
    store.replaceSingleton();
    return store;
}
export function isHidden(element) {
    return !isVisible(element);
}
/**
 * Replace the current body of the test with a new element.
 */
export function replaceBody(element) {
    window.history.replaceState({}, '', '/');
    document.body.appendChild(element);
}
export function getPermissionItemByType(view, permissionType) {
    const element = view.shadowRoot.querySelector('[permission-type=' + permissionType + ']');
    assertTrue(!!element);
    return element;
}
export function getPermissionToggleByType(view, permissionType) {
    const toggleRowElement = getPermissionItemByType(view, permissionType)
        .shadowRoot.querySelector('app-management-toggle-row');
    assertTrue(!!toggleRowElement);
    return toggleRowElement;
}
export function getPermissionCrToggleByType(view, permissionType) {
    const toggleElement = getPermissionToggleByType(view, permissionType)
        .shadowRoot.querySelector('cr-toggle');
    assertTrue(!!toggleElement);
    return toggleElement;
}
export function isHiddenByDomIf(element) {
    // Happens when the dom-if is false and the element is not rendered.
    if (!element) {
        return true;
    }
    // Happens when the dom-if was showing the element and has hidden the element
    // after a state change
    if (element.style.display === 'none') {
        return true;
    }
    // The element is rendered and display !== 'none'
    return false;
}
