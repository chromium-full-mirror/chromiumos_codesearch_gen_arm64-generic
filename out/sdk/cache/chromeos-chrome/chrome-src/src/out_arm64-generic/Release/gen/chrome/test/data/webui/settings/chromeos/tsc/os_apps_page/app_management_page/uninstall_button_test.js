// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Test suite for app-management-uninstall-button. */
import 'chrome://os-settings/os_settings.js';
import 'chrome://os-settings/lazy_load.js';
import { InstallReason } from 'chrome://resources/cr_components/app_management/app_management.mojom-webui.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { createApp, setupFakeHandler } from '../../app_management/test_util.js';
suite('AppManagementUninstallButtonTest', () => {
    let uninstallButton;
    let fakeHandler;
    setup(async function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        fakeHandler = setupFakeHandler();
    });
    async function setupUninstallButton(app) {
        uninstallButton = document.createElement('app-management-uninstall-button');
        uninstallButton.app = app;
        document.body.appendChild(uninstallButton);
        await flushTasks();
    }
    test('Click uninstall', async () => {
        const app = createApp('some test app id');
        app.installReason = InstallReason.kUser;
        setupUninstallButton(app);
        const clickable = uninstallButton.shadowRoot.querySelector('#uninstallButton');
        assertTrue(!!clickable);
        clickable.click();
        assertEquals(await fakeHandler.whenCalled('uninstall'), 'some test app id');
    });
    test('Disabled by policy', async () => {
        const app = createApp('app');
        app.installReason = InstallReason.kPolicy;
        await setupUninstallButton(app);
        const clickable = uninstallButton.shadowRoot.querySelector('#uninstallButton');
        assertTrue(!!clickable);
        clickable.click();
        // Disabled by policy, clicking should not remove app.
        assertEquals(fakeHandler.getCallCount('uninstall'), 0);
    });
    test('System app, button hidden', async () => {
        const app = createApp('app');
        app.installReason = InstallReason.kSystem;
        await setupUninstallButton(app);
        assertFalse(!!uninstallButton.shadowRoot.querySelector('#uninstallButton'));
    });
    test('User can delete app installed from command line argument', async () => {
        const app = createApp('test id for command line app');
        app.installReason = InstallReason.kCommandLine;
        await setupUninstallButton(app);
        uninstallButton.shadowRoot.querySelector('#uninstallButton').click();
        assertEquals(await fakeHandler.whenCalled('uninstall'), 'test id for command line app');
    });
});
