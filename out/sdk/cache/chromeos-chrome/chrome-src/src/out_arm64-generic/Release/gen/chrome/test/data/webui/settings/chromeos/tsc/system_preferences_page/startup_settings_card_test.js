// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://os-settings/os_settings.js';
import { Router, routes, settingMojom } from 'chrome://os-settings/os_settings.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { flushTasks, waitAfterNextRender } from 'chrome://webui-test/polymer_test_util.js';
suite('<startup-settings-card>', () => {
    let startupSettingsCard;
    function getFakePrefs() {
        return {
            settings: {
                restore_apps_and_pages: {
                    key: 'settings.restore_apps_and_pages',
                    type: chrome.settingsPrivate.PrefType.NUMBER,
                    value: 1,
                },
            },
        };
    }
    async function createCardElement() {
        startupSettingsCard = document.createElement('startup-settings-card');
        startupSettingsCard.prefs = getFakePrefs();
        document.body.appendChild(startupSettingsCard);
        await flushTasks();
    }
    function getOnStartupDropdown() {
        const onStartupDropdown = startupSettingsCard.shadowRoot
            .querySelector('#onStartupDropdown');
        assertTrue(!!onStartupDropdown);
        return onStartupDropdown;
    }
    teardown(() => {
        startupSettingsCard.remove();
    });
    test('On startup dropdown menu updates pref value', async () => {
        await createCardElement();
        const onStartupDropdown = getOnStartupDropdown();
        const innerSelect = onStartupDropdown.$.dropdownMenu;
        innerSelect.value = '1';
        innerSelect.dispatchEvent(new CustomEvent('change'));
        assertEquals(1, startupSettingsCard.get('prefs.settings.restore_apps_and_pages.value'));
        innerSelect.value = '2';
        innerSelect.dispatchEvent(new CustomEvent('change'));
        assertEquals(2, startupSettingsCard.get('prefs.settings.restore_apps_and_pages.value'));
        innerSelect.value = '3';
        innerSelect.dispatchEvent(new CustomEvent('change'));
        assertEquals(3, startupSettingsCard.get('prefs.settings.restore_apps_and_pages.value'));
    });
    test('kRestoreAppsAndPages setting is deep-linkable', async () => {
        await createCardElement();
        const setting = settingMojom.Setting.kRestoreAppsAndPages;
        const params = new URLSearchParams();
        params.append('settingId', setting.toString());
        Router.getInstance().navigateTo(routes.SYSTEM_PREFERENCES, params);
        const deepLinkElement = startupSettingsCard.shadowRoot.querySelector('#onStartupDropdown');
        assertTrue(!!deepLinkElement);
        await waitAfterNextRender(deepLinkElement);
        assertEquals(deepLinkElement, startupSettingsCard.shadowRoot.activeElement, `Element should be focused for settingId=${setting}.'`);
    });
});
