// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Test suite for app-management-window-mode-item. */
import 'chrome://resources/cr_components/app_management/window_mode_item.js';
import { BrowserProxy } from 'chrome://resources/cr_components/app_management/browser_proxy.js';
import { assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { isVisible } from 'chrome://webui-test/test_util.js';
import { createTestApp, TestAppManagementBrowserProxy } from './app_management_test_support.js';
suite('AppManagementWindowModeItemTest', function () {
    let windowModeItem;
    let testProxy;
    setup(async function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        testProxy = new TestAppManagementBrowserProxy();
        BrowserProxy.setInstance(testProxy);
    });
    async function setupWindowModeItem(app) {
        windowModeItem = document.createElement('app-management-window-mode-item');
        windowModeItem.app = app;
        windowModeItem.windowModeLabel = 'Test Window Mode Label';
        document.body.appendChild(windowModeItem);
        await flushTasks();
    }
    test('Window Mode Item IS visible when `hideWindowMode` is true', async function () {
        const app = createTestApp('app');
        app.hideWindowMode = false;
        await setupWindowModeItem(app);
        assertTrue(isVisible(windowModeItem));
    });
    test('Window Mode Item is NOT visible when `hideWindowMode` is true', async function () {
        const app = createTestApp('app');
        app.hideWindowMode = true;
        await setupWindowModeItem(app);
        assertFalse(isVisible(windowModeItem));
    });
});
