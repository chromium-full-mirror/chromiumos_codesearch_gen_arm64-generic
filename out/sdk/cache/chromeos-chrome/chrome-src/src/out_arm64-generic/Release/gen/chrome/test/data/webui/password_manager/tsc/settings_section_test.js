// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://password-manager/password_manager.js';
import { OpenWindowProxyImpl, PasswordManagerImpl, SyncBrowserProxyImpl, TrustedVaultBannerState } from 'chrome://password-manager/password_manager.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { flush } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { TestOpenWindowProxy } from 'chrome://webui-test/test_open_window_proxy.js';
import { isVisible } from 'chrome://webui-test/test_util.js';
import { TestPasswordManagerProxy } from './test_password_manager_proxy.js';
import { TestSyncBrowserProxy } from './test_sync_browser_proxy.js';
import { createBlockedSiteEntry, createCredentialGroup, createPasswordEntry, makePasswordManagerPrefs } from './test_util.js';
// clang-format off
// 
// clang-format on
/**
 * Helper method that validates a that elements in the exception list match
 * the expected data.
 * @param nodes The nodes that will be checked.
 * @param blockedSiteList The expected data.
 */
function assertBlockedSiteList(nodes, blockedSiteList) {
    assertEquals(blockedSiteList.length, nodes.length);
    for (let index = 0; index < blockedSiteList.length; ++index) {
        const node = nodes[index];
        const blockedSite = blockedSiteList[index];
        assertEquals(blockedSite.urls.shown, node.textContent.trim());
    }
}
suite('SettingsSectionTest', function () {
    let passwordManager;
    let openWindowProxy;
    let syncProxy;
    // 
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        passwordManager = new TestPasswordManagerProxy();
        PasswordManagerImpl.setInstance(passwordManager);
        openWindowProxy = new TestOpenWindowProxy();
        OpenWindowProxyImpl.setInstance(openWindowProxy);
        syncProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(syncProxy);
        // 
    });
    test('pref value displayed in the UI', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        settings.prefs.credentials_enable_service.value = false;
        document.body.appendChild(settings);
        await flushTasks();
        assertFalse(settings.$.passwordToggle.checked);
        assertTrue(settings.$.autosigninToggle.checked);
    });
    test('clicking the toggle updates corresponding pref', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        document.body.appendChild(settings);
        await flushTasks();
        assertTrue(settings.getPref('credentials_enable_service').value);
        assertTrue(settings.$.passwordToggle.checked);
        settings.$.passwordToggle.click();
        assertFalse(settings.getPref('credentials_enable_service').value);
        assertFalse(settings.$.passwordToggle.checked);
    });
    test('enforcement disables toggle', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        settings.prefs.credentials_enable_service.enforcement =
            chrome.settingsPrivate.Enforcement.ENFORCED;
        document.body.appendChild(settings);
        await flushTasks();
        assertTrue(settings.getPref('credentials_enable_service').value);
        assertTrue(settings.$.passwordToggle.checked);
        settings.$.passwordToggle.click();
        assertTrue(settings.getPref('credentials_enable_service').value);
    });
    test('extension control includes icon', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        settings.prefs.credentials_enable_service.extensionId = 'test';
        settings.prefs.credentials_enable_service.controlledByName =
            'test extension';
        document.body.appendChild(settings);
        await flushTasks();
        assertTrue(settings.$.passwordToggle.checked);
        assertTrue(!!settings.shadowRoot.querySelector('extension-controlled-indicator'));
    });
    test('no extension control icon by default', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        document.body.appendChild(settings);
        await flushTasks();
        assertTrue(settings.$.passwordToggle.checked);
        settings.$.passwordToggle.click();
        assertFalse(!!settings.$.passwordToggle.shadowRoot.querySelector('extension-controlled-indicator'));
    });
    test('pref updated externally', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        document.body.appendChild(settings);
        await flushTasks();
        assertTrue(settings.$.autosigninToggle.checked);
        settings.set('prefs.credentials_enable_autosignin.value', false);
        assertFalse(settings.$.autosigninToggle.checked);
    });
    // 
    test('settings section shows blockedSites', async function () {
        passwordManager.data.blockedSites = [
            createBlockedSiteEntry('test.com', 0),
            createBlockedSiteEntry('test2.com', 1),
        ];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        await passwordManager.whenCalled('getBlockedSitesList');
        assertTrue(isVisible(settings.$.blockedSitesList));
        assertBlockedSiteList(settings.$.blockedSitesList.querySelectorAll('.blocked-site-content'), passwordManager.data.blockedSites);
    });
    test('blockedSites can be deleted', async function () {
        const blockedId = 1;
        passwordManager.data.blockedSites =
            [createBlockedSiteEntry('test.com', blockedId)];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        await passwordManager.whenCalled('getBlockedSitesList');
        assertTrue(isVisible(settings.$.blockedSitesList));
        settings.$.blockedSitesList
            .querySelector('#removeBlockedValueButton').click();
        const removedId = await passwordManager.whenCalled('removeBlockedSite');
        assertEquals(blockedId, removedId);
    });
    test('blockedSites listener updates the list', async function () {
        passwordManager.data.blockedSites = [createBlockedSiteEntry('test.com', 1)];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        await passwordManager.whenCalled('getBlockedSitesList');
        // Check that only one entry is shown.
        assertTrue(isVisible(settings.$.blockedSitesList));
        assertEquals(settings.$.blockedSitesList
            .querySelectorAll('.blocked-site-content')
            .length, 1);
        passwordManager.data.blockedSites.push(createBlockedSiteEntry('test2.com', 2));
        passwordManager.listeners.blockedSitesListChangedListener(passwordManager.data.blockedSites);
        await flushTasks();
        // Check that two entries are shown.
        assertTrue(isVisible(settings.$.blockedSitesList));
        assertEquals(settings.$.blockedSitesList
            .querySelectorAll('.blocked-site-content')
            .length, 2);
    });
    // Add Shortcut banner is shown and clickable.
    test('showAddShortcutBanner', async function () {
        loadTimeData.overrideValues({ canAddShortcut: true });
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        const addShortcutBanner = settings.shadowRoot.querySelector('#addShortcutBanner');
        assertTrue(!!addShortcutBanner);
        assertTrue(isVisible(addShortcutBanner));
        addShortcutBanner.click();
        await passwordManager.whenCalled('showAddShortcutDialog');
    });
    // Add Shortcut banner is shown and clickable.
    test('addShortcutBanner hidden', async function () {
        loadTimeData.overrideValues({ canAddShortcut: false });
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        assertFalse(!!settings.shadowRoot.querySelector('#addShortcutBanner'));
    });
    test('import hidden when policy disabled', async function () {
        const settings = document.createElement('settings-section');
        settings.prefs = makePasswordManagerPrefs();
        settings.prefs.credentials_enable_service.value = false;
        settings.prefs.credentials_enable_service.enforcement =
            chrome.settingsPrivate.Enforcement.ENFORCED;
        document.body.appendChild(settings);
        await flushTasks();
        assertFalse(!!settings.shadowRoot.querySelector('passwords-importer'));
    });
    test('Password exporter element', async function () {
        // Exporter should not be present if there are no saved passwords.
        passwordManager.data.passwords = [];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await passwordManager.whenCalled('getSavedPasswordList');
        assertFalse(!!settings.shadowRoot.querySelector('passwords-exporter'));
        // Exporter should appear when saved passwords are observed.
        passwordManager.data.passwords.push(createPasswordEntry({ username: 'user1', id: 1 }));
        passwordManager.listeners.savedPasswordListChangedListener(passwordManager.data.passwords);
        flush();
        assertTrue(!!settings.shadowRoot.querySelector('passwords-exporter'));
    });
    test('trustedVaultBannerVisibilityChangesWithState', async function () {
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        webUIListenerCallback('trusted-vault-banner-state-changed', TrustedVaultBannerState.NOT_SHOWN);
        flush();
        assertTrue(settings.$.trustedVaultBanner.hidden);
        webUIListenerCallback('trusted-vault-banner-state-changed', TrustedVaultBannerState.OFFER_OPT_IN);
        flush();
        assertFalse(settings.$.trustedVaultBanner.hidden);
        assertEquals(settings.i18n('trustedVaultBannerSubLabelOfferOptIn'), settings.$.trustedVaultBanner.subLabel);
        webUIListenerCallback('trusted-vault-banner-state-changed', TrustedVaultBannerState.OPTED_IN);
        flush();
        assertFalse(settings.$.trustedVaultBanner.hidden);
        assertEquals(settings.i18n('trustedVaultBannerSubLabelOptedIn'), settings.$.trustedVaultBanner.subLabel);
    });
    test('trustedVaultBannerOpensOptInPage', async function () {
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        webUIListenerCallback('trusted-vault-banner-state-changed', TrustedVaultBannerState.OFFER_OPT_IN);
        flush();
        assertFalse(settings.$.trustedVaultBanner.hidden);
        settings.$.trustedVaultBanner.click();
        const url = await openWindowProxy.whenCalled('openUrl');
        assertEquals(url, loadTimeData.getString('trustedVaultOptInUrl'));
    });
    test('trustedVaultBannerOpensLearnMorePage', async function () {
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        webUIListenerCallback('trusted-vault-banner-state-changed', TrustedVaultBannerState.OPTED_IN);
        flush();
        assertFalse(settings.$.trustedVaultBanner.hidden);
        settings.$.trustedVaultBanner.click();
        const url = await openWindowProxy.whenCalled('openUrl');
        assertEquals(url, loadTimeData.getString('trustedVaultLearnMoreUrl'));
    });
    test('account storage toggle when feature is available', async function () {
        passwordManager.data.isOptedInAccountStorage = false;
        syncProxy.accountInfo = {
            email: 'testemail@gmail.com',
        };
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: true,
            isSyncingPasswords: false,
        };
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await syncProxy.whenCalled('getSyncInfo');
        await syncProxy.whenCalled('getAccountInfo');
        await flushTasks();
        await flushTasks();
        const accountStorageToggle = settings.shadowRoot.querySelector('#accountStorageToggle');
        assertTrue(!!accountStorageToggle);
        assertFalse(accountStorageToggle.hasAttribute('checked'));
        accountStorageToggle.click();
        // Toggle should not change until authentication succeeds.
        await passwordManager.whenCalled('optInForAccountStorage');
        assertFalse(accountStorageToggle.hasAttribute('checked'));
        // Assert that password section subscribed as a listener to opt in state and
        // opt out from account storage.
        assertTrue(!!passwordManager.listeners.accountStorageOptInStateListener);
        passwordManager.data.isOptedInAccountStorage = true;
        // Imitate listener notification after successful identification.
        passwordManager.listeners.accountStorageOptInStateListener(true);
        await flushTasks();
        assertTrue(accountStorageToggle.checked);
    });
    // Tests that account storage toggle is not shown, if it should not be shown.
    test('account storage pref toggle when feature is unavailable', async function () {
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: false,
            isSyncingPasswords: false,
        };
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await syncProxy.whenCalled('getSyncInfo');
        await flushTasks();
        assertFalse(!!settings.shadowRoot.querySelector('#accountStorageToggle'));
    });
    // 
    test('iCloudKeychainToggleNotShown', async function () {
        // The control for iCloud Keychain should appear only on macOS.
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        flush();
        const element = settings.shadowRoot.querySelector('#createPasskeysInICloudKeychainRow');
        // 
        assertFalse(!!element);
        // 
        // 
    });
    test('blockedSites section hidden when no blocked sites', async function () {
        passwordManager.data.blockedSites = [];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await flushTasks();
        await passwordManager.whenCalled('getBlockedSitesList');
        assertFalse(isVisible(settings.$.blockedSitesList));
    });
    test('Move passwords to account button is visible', async function () {
        loadTimeData.overrideValues({ enableButterOnDesktopFollowup: true });
        passwordManager.data.isOptedInAccountStorage = true;
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: true,
            isSyncingPasswords: false,
        };
        const group = createCredentialGroup({
            name: 'test.com',
            credentials: [
                createPasswordEntry({
                    id: 0,
                    username: 'test1',
                    inProfileStore: true,
                    inAccountStore: false,
                }),
            ],
        });
        passwordManager.data.groups = [group];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await passwordManager.whenCalled('getSavedPasswordList');
        await flushTasks();
        assertTrue(!!settings.shadowRoot.getElementById('movePasswordsButton'));
    });
    test('Move passwords to account button is not visible', async function () {
        loadTimeData.overrideValues({ enableButterOnDesktopFollowup: true });
        passwordManager.data.isOptedInAccountStorage = true;
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: true,
            isSyncingPasswords: false,
        };
        const group = createCredentialGroup({
            name: 'test.com',
            credentials: [
                createPasswordEntry({
                    id: 0,
                    username: 'test1',
                    inProfileStore: false,
                    inAccountStore: true,
                }),
            ],
        });
        passwordManager.data.groups = [group];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await passwordManager.whenCalled('getSavedPasswordList');
        await flushTasks();
        assertFalse(!!settings.shadowRoot.getElementById('movePasswordsButton'));
    });
    test('Move passwords to account button not visible because feature disabled', async function () {
        loadTimeData.overrideValues({ enableButterOnDesktopFollowup: false });
        passwordManager.data.isOptedInAccountStorage = true;
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: true,
            isSyncingPasswords: false,
        };
        const group = createCredentialGroup({
            name: 'test.com',
            credentials: [
                createPasswordEntry({
                    id: 0,
                    username: 'test1',
                    inProfileStore: true,
                    inAccountStore: false,
                }),
            ],
        });
        passwordManager.data.groups = [group];
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await passwordManager.whenCalled('getSavedPasswordList');
        await flushTasks();
        assertFalse(!!settings.shadowRoot.getElementById('movePasswordsButton'));
    });
    test('clicking save passwords in account opens move passwords dialog', async function () {
        loadTimeData.overrideValues({ enableButterOnDesktopFollowup: true });
        passwordManager.data.isOptedInAccountStorage = true;
        syncProxy.syncInfo = {
            isEligibleForAccountStorage: true,
            isSyncingPasswords: false,
        };
        const group = createCredentialGroup({
            name: 'test.com',
            credentials: [
                createPasswordEntry({
                    id: 0,
                    username: 'test1',
                    inProfileStore: true,
                    inAccountStore: false,
                }),
            ],
        });
        passwordManager.data.groups = [group];
        passwordManager.setRequestCredentialsDetailsResponse(passwordManager.data.groups[0].entries);
        const settings = document.createElement('settings-section');
        document.body.appendChild(settings);
        await passwordManager.whenCalled('getSavedPasswordList');
        await flushTasks();
        const movePasswordsButton = settings.shadowRoot.getElementById('movePasswordsButton');
        assertTrue(!!movePasswordsButton);
        assertTrue(isVisible(movePasswordsButton));
        movePasswordsButton.click();
        await flushTasks();
        const moveDialog = settings.shadowRoot.querySelector('move-passwords-dialog');
        assertTrue(!!moveDialog);
        const dialog = moveDialog.shadowRoot.querySelector('#dialog');
        assertTrue(!!dialog);
    });
});
