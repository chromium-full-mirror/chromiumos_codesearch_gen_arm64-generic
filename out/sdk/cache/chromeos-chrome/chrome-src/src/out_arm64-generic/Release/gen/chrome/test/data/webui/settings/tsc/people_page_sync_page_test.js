// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/lazy_load.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { flush } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
// 
import { PageStatus, Router, routes, StatusAction, SyncBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { waitBeforeNextRender } from 'chrome://webui-test/polymer_test_util.js';
// 
// 
import { getSyncAllPrefs, setupRouterWithSyncRoutes } from './sync_test_util.js';
import { TestSyncBrowserProxy } from './test_sync_browser_proxy.js';
// clang-format on
suite('SyncSettingsTests', function () {
    let syncPage;
    let browserProxy;
    let encryptionElement;
    let encryptionRadioGroup;
    let encryptWithGoogle;
    let encryptWithPassphrase;
    function setupSyncPage() {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        syncPage = document.createElement('settings-sync-page');
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().SYNC);
        // Preferences should exist for embedded
        // 'personalization_options.html'. We don't perform tests on them.
        syncPage.prefs = {
            profile: { password_manager_leak_detection: { value: true } },
            signin: {
                allowed_on_next_startup: { type: chrome.settingsPrivate.PrefType.BOOLEAN, value: true },
            },
            safebrowsing: { enabled: { value: true }, scout_reporting_enabled: { value: true } },
        };
        document.body.appendChild(syncPage);
        webUIListenerCallback('page-status-changed', PageStatus.CONFIGURE);
        assertFalse(syncPage.shadowRoot
            .querySelector('#' + PageStatus.CONFIGURE).hidden);
        assertTrue(syncPage.shadowRoot
            .querySelector('#' + PageStatus.SPINNER).hidden);
        // Start with Sync All with no encryption selected. Also, ensure
        // that this is not a supervised user, so that Sync Passphrase is
        // enabled.
        webUIListenerCallback('sync-prefs-changed', getSyncAllPrefs());
        syncPage.set('syncStatus', {
            signedIn: true,
            supervisedUser: false,
            statusAction: StatusAction.NO_ACTION,
        });
        flush();
    }
    suiteSetup(function () {
        loadTimeData.overrideValues({ signinAllowed: true });
    });
    setup(async function () {
        setupRouterWithSyncRoutes();
        browserProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(browserProxy);
        setupSyncPage();
        await waitBeforeNextRender(syncPage);
        encryptionElement =
            syncPage.shadowRoot.querySelector('settings-sync-encryption-options');
        assertTrue(!!encryptionElement);
        encryptionRadioGroup =
            encryptionElement.shadowRoot.querySelector('#encryptionRadioGroup');
        encryptWithGoogle = encryptionElement.shadowRoot.querySelector('cr-radio-button[name="encrypt-with-google"]');
        encryptWithPassphrase = encryptionElement.shadowRoot.querySelector('cr-radio-button[name="encrypt-with-passphrase"]');
        assertTrue(!!encryptionRadioGroup);
        assertTrue(!!encryptWithGoogle);
        assertTrue(!!encryptWithPassphrase);
    });
    teardown(function () {
        syncPage.remove();
    });
    // #######################
    // TESTS FOR ALL PLATFORMS
    // #######################
    test('NotifiesHandlerOfNavigation', async function () {
        await browserProxy.whenCalled('didNavigateToSyncPage');
        // Navigate away.
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().PEOPLE);
        await browserProxy.whenCalled('didNavigateAwayFromSyncPage');
        // Navigate back to the page.
        browserProxy.resetResolver('didNavigateToSyncPage');
        router.navigateTo(router.getRoutes().SYNC);
        await browserProxy.whenCalled('didNavigateToSyncPage');
        // Remove page element.
        browserProxy.resetResolver('didNavigateAwayFromSyncPage');
        syncPage.remove();
        await browserProxy.whenCalled('didNavigateAwayFromSyncPage');
        // Recreate page element.
        browserProxy.resetResolver('didNavigateToSyncPage');
        syncPage = document.createElement('settings-sync-page');
        router.navigateTo(router.getRoutes().SYNC);
        document.body.appendChild(syncPage);
        await browserProxy.whenCalled('didNavigateToSyncPage');
    });
    test('SyncSectionLayout_SignedIn', function () {
        const syncSection = syncPage.shadowRoot.querySelector('#sync-section');
        const otherItems = syncPage.shadowRoot.querySelector('#other-sync-items');
        syncPage.syncStatus = {
            signedIn: true,
            disabled: false,
            hasError: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertFalse(syncSection.hidden);
        assertTrue(syncPage.shadowRoot.querySelector('#sync-separator').hidden);
        assertTrue(otherItems.classList.contains('list-frame'));
        assertEquals(otherItems.querySelectorAll('cr-expand-button').length, 1);
        // 
        assertEquals(otherItems.querySelectorAll('cr-link-row').length, 3);
        // 
        // 
        // Test sync paused state.
        syncPage.syncStatus = {
            signedIn: true,
            disabled: false,
            hasError: true,
            statusAction: StatusAction.REAUTHENTICATE,
        };
        assertTrue(syncSection.hidden);
        assertFalse(syncPage.shadowRoot.querySelector('#sync-separator').hidden);
        // Test passphrase error state.
        syncPage.syncStatus = {
            signedIn: true,
            disabled: false,
            hasError: true,
            statusAction: StatusAction.ENTER_PASSPHRASE,
        };
        assertFalse(syncSection.hidden);
        assertTrue(syncPage.shadowRoot.querySelector('#sync-separator').hidden);
    });
    test('SyncSectionLayout_SignedOut', function () {
        const syncSection = syncPage.shadowRoot.querySelector('#sync-section');
        syncPage.syncStatus = {
            signedIn: false,
            disabled: false,
            hasError: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(syncSection.hidden);
        assertFalse(syncPage.shadowRoot.querySelector('#sync-separator').hidden);
    });
    test('SyncSectionLayout_SyncDisabled', function () {
        const syncSection = syncPage.shadowRoot.querySelector('#sync-section');
        syncPage.syncStatus = {
            signedIn: false,
            disabled: true,
            hasError: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(syncSection.hidden);
    });
    test('LoadingAndTimeout', function () {
        const configurePage = syncPage.shadowRoot.querySelector('#' + PageStatus.CONFIGURE);
        const spinnerPage = syncPage.shadowRoot.querySelector('#' + PageStatus.SPINNER);
        // NOTE: This isn't called in production, but the test suite starts the
        // tests with PageStatus.CONFIGURE.
        webUIListenerCallback('page-status-changed', PageStatus.SPINNER);
        assertTrue(configurePage.hidden);
        assertFalse(spinnerPage.hidden);
        webUIListenerCallback('page-status-changed', PageStatus.CONFIGURE);
        assertFalse(configurePage.hidden);
        assertTrue(spinnerPage.hidden);
        // Should remain on the CONFIGURE page even if the passphrase failed.
        webUIListenerCallback('page-status-changed', PageStatus.PASSPHRASE_FAILED);
        assertFalse(configurePage.hidden);
        assertTrue(spinnerPage.hidden);
    });
    test('EncryptionExpandButton', function () {
        const encryptionDescription = syncPage.shadowRoot.querySelector('#encryptionDescription');
        const encryptionCollapse = syncPage.$.encryptionCollapse;
        // No encryption with custom passphrase.
        assertFalse(encryptionCollapse.opened);
        encryptionDescription.click();
        assertTrue(encryptionCollapse.opened);
        // Push sync prefs with |prefs.encryptAllData| unchanged. The encryption
        // menu should not collapse.
        webUIListenerCallback('sync-prefs-changed', getSyncAllPrefs());
        flush();
        assertTrue(encryptionCollapse.opened);
        encryptionDescription.click();
        assertFalse(encryptionCollapse.opened);
        // Data encrypted with custom passphrase.
        // The encryption menu should be expanded.
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        assertTrue(encryptionCollapse.opened);
        // Clicking |reset Sync| does not change the expansion state.
        const link = encryptionDescription.querySelector('a[href]');
        assertTrue(!!link);
        link.target = '';
        link.href = '#';
        // Prevent the link from triggering a page navigation when tapped.
        // Breaks the test in Vulcanized mode.
        link.addEventListener('click', e => e.preventDefault());
        link.click();
        assertTrue(encryptionCollapse.opened);
    });
    test('RadioBoxesEnabledWhenUnencrypted', function () {
        // Verify that the encryption radio boxes are enabled.
        assertFalse(encryptionRadioGroup.disabled);
        assertEquals(encryptWithGoogle.getAttribute('aria-disabled'), 'false');
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'false');
        assertTrue(encryptWithGoogle.checked);
        // Select 'Encrypt with passphrase' to create a new passphrase.
        assertFalse(!!encryptionElement.shadowRoot.querySelector('#create-password-box'));
        encryptWithPassphrase.click();
        flush();
        assertTrue(!!encryptionElement.shadowRoot.querySelector('#create-password-box'));
        const saveNewPassphrase = encryptionElement.shadowRoot.querySelector('#saveNewPassphrase');
        assertTrue(!!saveNewPassphrase);
        // Test that a sync prefs update does not reset the selection.
        webUIListenerCallback('sync-prefs-changed', getSyncAllPrefs());
        flush();
        assertTrue(encryptWithPassphrase.checked);
    });
    test('ClickingLinkDoesNotChangeRadioValue', function () {
        assertFalse(encryptionRadioGroup.disabled);
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'false');
        assertFalse(encryptWithPassphrase.checked);
        const link = encryptWithPassphrase.querySelector('a[href]');
        assertTrue(!!link);
        // Suppress opening a new tab, since then the test will continue running
        // on a background tab (which has throttled timers) and will timeout.
        link.target = '';
        link.href = '#';
        // Prevent the link from triggering a page navigation when tapped.
        // Breaks the test in Vulcanized mode.
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
        link.click();
        assertFalse(encryptWithPassphrase.checked);
    });
    test('SaveButtonDisabledWhenPassphraseOrConfirmationEmpty', function () {
        encryptWithPassphrase.click();
        flush();
        assertTrue(!!encryptionElement.shadowRoot.querySelector('#create-password-box'));
        const saveNewPassphrase = encryptionElement.shadowRoot.querySelector('#saveNewPassphrase');
        const passphraseInput = encryptionElement.shadowRoot.querySelector('#passphraseInput');
        const passphraseConfirmationInput = encryptionElement.shadowRoot.querySelector('#passphraseConfirmationInput');
        passphraseInput.value = '';
        passphraseConfirmationInput.value = '';
        assertTrue(saveNewPassphrase.disabled);
        passphraseInput.value = 'foo';
        passphraseConfirmationInput.value = '';
        assertTrue(saveNewPassphrase.disabled);
        passphraseInput.value = 'foo';
        passphraseConfirmationInput.value = 'bar';
        assertFalse(saveNewPassphrase.disabled);
    });
    test('CreatingPassphraseMismatchedPassphrase', function () {
        encryptWithPassphrase.click();
        flush();
        assertTrue(!!encryptionElement.shadowRoot.querySelector('#create-password-box'));
        const saveNewPassphrase = encryptionElement.shadowRoot.querySelector('#saveNewPassphrase');
        assertTrue(!!saveNewPassphrase);
        const passphraseInput = encryptionElement.shadowRoot.querySelector('#passphraseInput');
        const passphraseConfirmationInput = encryptionElement.shadowRoot.querySelector('#passphraseConfirmationInput');
        passphraseInput.value = 'foo';
        passphraseConfirmationInput.value = 'bar';
        saveNewPassphrase.click();
        flush();
        assertFalse(passphraseInput.invalid);
        assertTrue(passphraseConfirmationInput.invalid);
    });
    test('CreatingPassphraseValidPassphrase', async function () {
        encryptWithPassphrase.click();
        flush();
        assertTrue(!!encryptionElement.shadowRoot.querySelector('#create-password-box'));
        const saveNewPassphrase = encryptionElement.shadowRoot.querySelector('#saveNewPassphrase');
        assertTrue(!!saveNewPassphrase);
        const passphraseInput = encryptionElement.shadowRoot.querySelector('#passphraseInput');
        const passphraseConfirmationInput = encryptionElement.shadowRoot.querySelector('#passphraseConfirmationInput');
        passphraseInput.value = 'foo';
        passphraseConfirmationInput.value = 'foo';
        browserProxy.encryptionPassphraseSuccess = true;
        saveNewPassphrase.click();
        const passphrase = await browserProxy.whenCalled('setEncryptionPassphrase');
        assertEquals('foo', passphrase);
        // Fake backend response.
        const newPrefs = getSyncAllPrefs();
        newPrefs.encryptAllData = true;
        webUIListenerCallback('sync-prefs-changed', newPrefs);
        flush();
        await waitBeforeNextRender(syncPage);
        // Need to re-retrieve this, as a different show passphrase radio
        // button is shown for custom passphrase users.
        encryptWithPassphrase = encryptionElement.shadowRoot.querySelector('cr-radio-button[name="encrypt-with-passphrase"]');
        // Assert that the radio boxes are disabled after encryption enabled.
        assertTrue(encryptionRadioGroup.disabled);
        assertEquals(-1, encryptWithGoogle.$.button.tabIndex);
        assertEquals(-1, encryptWithPassphrase.$.button.tabIndex);
    });
    test('RadioBoxesHiddenWhenPassphraseRequired', function () {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        assertTrue(syncPage.shadowRoot
            .querySelector('#encryptionDescription').hidden);
        assertEquals(encryptionElement.shadowRoot
            .querySelector('#encryptionRadioGroupContainer').style.display, 'none');
    });
    test('EnterPassphraseLabelWhenNoPassphraseTime', () => {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        const enterPassphraseLabel = syncPage.shadowRoot.querySelector('#enterPassphraseLabel');
        assertEquals('Your data is encrypted with your sync passphrase. Enter it to start' +
            ' sync.', enterPassphraseLabel.innerText);
    });
    test('EnterPassphraseLabelWhenHasPassphraseTime', () => {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        prefs.explicitPassphraseTime = 'Jan 01, 1970';
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        const enterPassphraseLabel = syncPage.shadowRoot.querySelector('#enterPassphraseLabel');
        assertEquals(`Your data was encrypted with your sync passphrase on ${prefs.explicitPassphraseTime}. Enter it to start sync.`, enterPassphraseLabel.innerText);
    });
    test('ExistingPassphraseSubmitButtonDisabledWhenExistingPassphraseEmpty', function () {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        const existingPassphraseInput = syncPage.shadowRoot.querySelector('#existingPassphraseInput');
        const submitExistingPassphrase = syncPage.shadowRoot.querySelector('#submitExistingPassphrase');
        existingPassphraseInput.value = '';
        assertTrue(submitExistingPassphrase.disabled);
        existingPassphraseInput.value = 'foo';
        assertFalse(submitExistingPassphrase.disabled);
    });
    test('EnterExistingWrongPassphrase', async function () {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        const existingPassphraseInput = syncPage.shadowRoot.querySelector('#existingPassphraseInput');
        assertTrue(!!existingPassphraseInput);
        existingPassphraseInput.value = 'wrong';
        browserProxy.decryptionPassphraseSuccess = false;
        const submitExistingPassphrase = syncPage.shadowRoot.querySelector('#submitExistingPassphrase');
        assertTrue(!!submitExistingPassphrase);
        submitExistingPassphrase.click();
        const passphrase = await browserProxy.whenCalled('setDecryptionPassphrase');
        assertEquals('wrong', passphrase);
        assertTrue(existingPassphraseInput.invalid);
    });
    test('EnterExistingCorrectPassphrase', async function () {
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        const existingPassphraseInput = syncPage.shadowRoot.querySelector('#existingPassphraseInput');
        assertTrue(!!existingPassphraseInput);
        existingPassphraseInput.value = 'right';
        browserProxy.decryptionPassphraseSuccess = true;
        const submitExistingPassphrase = syncPage.shadowRoot.querySelector('#submitExistingPassphrase');
        assertTrue(!!submitExistingPassphrase);
        submitExistingPassphrase.click();
        const passphrase = await browserProxy.whenCalled('setDecryptionPassphrase');
        assertEquals('right', passphrase);
        // Fake backend response.
        const newPrefs = getSyncAllPrefs();
        newPrefs.encryptAllData = true;
        webUIListenerCallback('sync-prefs-changed', newPrefs);
        flush();
        // Verify that the encryption radio boxes are shown but disabled.
        assertTrue(encryptionRadioGroup.disabled);
        assertEquals(-1, encryptWithGoogle.$.button.tabIndex);
        assertEquals(-1, encryptWithPassphrase.$.button.tabIndex);
        // Confirm that the page navigates away form the sync setup.
        await browserProxy.whenCalled('didNavigateAwayFromSyncPage');
        const router = Router.getInstance();
        assertEquals(router.getRoutes().PEOPLE, router.getCurrentRoute());
    });
    test('EnterExistingPassphraseDoesNotExistIfSignedOut', async function () {
        syncPage.syncStatus = {
            signedIn: false,
            disabled: false,
            hasError: true,
            statusAction: StatusAction.ENTER_PASSPHRASE,
        };
        const prefs = getSyncAllPrefs();
        prefs.encryptAllData = true;
        prefs.passphraseRequired = true;
        webUIListenerCallback('sync-prefs-changed', prefs);
        flush();
        assertFalse(!!syncPage.shadowRoot.querySelector('#existingPassphraseInput'));
    });
    test('SyncAdvancedRow', function () {
        flush();
        const syncAdvancedRow = syncPage.shadowRoot.querySelector('#sync-advanced-row');
        assertFalse(syncAdvancedRow.hidden);
        syncAdvancedRow.click();
        flush();
        assertEquals(routes.SYNC_ADVANCED.path, Router.getInstance().getCurrentRoute().path);
    });
    // This test checks whether the passphrase encryption options are
    // disabled. This is important for supervised accounts. Because sync
    // is required for supervision, passphrases should remain disabled.
    test('DisablingSyncPassphrase', function () {
        // We initialize a new SyncPrefs object for each case, because
        // otherwise the webUIListener doesn't update.
        // 1) Normal user (full data encryption allowed)
        // EXPECTED: encryptionOptions enabled
        const prefs1 = getSyncAllPrefs();
        prefs1.customPassphraseAllowed = true;
        webUIListenerCallback('sync-prefs-changed', prefs1);
        syncPage.syncStatus = {
            supervisedUser: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertFalse(encryptionRadioGroup.disabled);
        assertEquals(encryptWithGoogle.getAttribute('aria-disabled'), 'false');
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'false');
        // 2) Normal user (full data encryption not allowed)
        // customPassphraseAllowed is usually false only for supervised
        // users, but it's better to be check this case.
        // EXPECTED: encryptionOptions disabled
        const prefs2 = getSyncAllPrefs();
        prefs2.customPassphraseAllowed = false;
        webUIListenerCallback('sync-prefs-changed', prefs2);
        syncPage.syncStatus = {
            supervisedUser: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(encryptionRadioGroup.disabled);
        assertEquals(encryptWithGoogle.getAttribute('aria-disabled'), 'true');
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'true');
        // 3) Supervised user (full data encryption not allowed)
        // EXPECTED: encryptionOptions disabled
        const prefs3 = getSyncAllPrefs();
        prefs3.customPassphraseAllowed = false;
        webUIListenerCallback('sync-prefs-changed', prefs3);
        syncPage.syncStatus = {
            supervisedUser: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(encryptionRadioGroup.disabled);
        assertEquals(encryptWithGoogle.getAttribute('aria-disabled'), 'true');
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'true');
        // 4) Supervised user (full data encryption allowed)
        // This never happens in practice, but just to be safe.
        // EXPECTED: encryptionOptions disabled
        const prefs4 = getSyncAllPrefs();
        prefs4.customPassphraseAllowed = true;
        webUIListenerCallback('sync-prefs-changed', prefs4);
        syncPage.syncStatus = {
            supervisedUser: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(encryptionRadioGroup.disabled);
        assertEquals(encryptWithGoogle.getAttribute('aria-disabled'), 'true');
        assertEquals(encryptWithPassphrase.getAttribute('aria-disabled'), 'true');
    });
    // The sync dashboard is not accessible by supervised
    // users, so it should remain hidden.
    test('SyncDashboardHiddenFromSupervisedUsers', function () {
        const dashboardLink = syncPage.shadowRoot.querySelector('#syncDashboardLink');
        const prefs = getSyncAllPrefs();
        webUIListenerCallback('sync-prefs-changed', prefs);
        // Normal user
        syncPage.syncStatus = {
            supervisedUser: false,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertFalse(dashboardLink.hidden);
        // Supervised user
        syncPage.syncStatus = {
            supervisedUser: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(dashboardLink.hidden);
    });
    // ######################################
    // TESTS THAT ARE SKIPPED ON CHROMEOS ASH
    // ######################################
    // 
});
