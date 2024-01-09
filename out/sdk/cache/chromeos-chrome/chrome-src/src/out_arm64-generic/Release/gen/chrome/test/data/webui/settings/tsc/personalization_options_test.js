// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/lazy_load.js';
import { flush } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CrSettingsPrefs, loadTimeData, PrivacyPageBrowserProxyImpl, Router, routes, StatusAction, SyncBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { isChildVisible, isVisible } from 'chrome://webui-test/test_util.js';
// 
import { TestPrivacyPageBrowserProxy } from './test_privacy_page_browser_proxy.js';
import { TestSyncBrowserProxy } from './test_sync_browser_proxy.js';
// clang-format on
suite('AllBuilds', function () {
    let testBrowserProxy;
    let syncBrowserProxy;
    let customPageVisibility;
    let testElement;
    let settingsPrefs;
    suiteSetup(function () {
        loadTimeData.overrideValues({
            // TODO(crbug.com/1459031): Remove the tests for "driveSuggest" when
            // the setting is completely removed.
            driveSuggestAvailable: true,
            driveSuggestNoSetting: false,
            driveSuggestNoSyncRequirement: false,
            signinAvailable: true,
            changePriceEmailNotificationsEnabled: true,
        });
        settingsPrefs = document.createElement('settings-prefs');
        return CrSettingsPrefs.initialized;
    });
    function buildTestElement() {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        testElement = document.createElement('settings-personalization-options');
        testElement.prefs = settingsPrefs.prefs;
        testElement.set('prefs.page_content_collection.enabled.value', false);
        testElement.pageVisibility = customPageVisibility;
        document.body.appendChild(testElement);
        flush();
    }
    setup(function () {
        testBrowserProxy = new TestPrivacyPageBrowserProxy();
        PrivacyPageBrowserProxyImpl.setInstance(testBrowserProxy);
        syncBrowserProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(syncBrowserProxy);
        buildTestElement();
    });
    teardown(function () {
        testElement.remove();
    });
    test('DriveSearchSuggestControl', function () {
        assertFalse(isChildVisible(testElement, '#driveSuggestControl'));
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(isChildVisible(testElement, '#driveSuggestControl'));
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.REAUTHENTICATE,
        };
        flush();
        assertFalse(isChildVisible(testElement, '#driveSuggestControl'));
    });
    test('DriveSearchSuggestControlDeprecated', function () {
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertTrue(isChildVisible(testElement, '#driveSuggestControl'));
        loadTimeData.overrideValues({ 'driveSuggestNoSetting': false });
        buildTestElement();
        assertFalse(isChildVisible(testElement, '#driveSuggestControl'));
    });
    test('DriveSearchSuggestControlNoSyncRequirement', function () {
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.REAUTHENTICATE,
        };
        flush();
        assertFalse(isChildVisible(testElement, '#driveSuggestControl'));
        loadTimeData.overrideValues({ 'driveSuggestNoSyncRequirement': true });
        buildTestElement();
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.REAUTHENTICATE,
        };
        flush();
        assertTrue(isChildVisible(testElement, '#driveSuggestControl'));
    });
    // 
    test('priceEmailNotificationsToggleHidden', function () {
        loadTimeData.overrideValues({ 'changePriceEmailNotificationsEnabled': false });
        buildTestElement(); // Rebuild the element after modifying loadTimeData.
        assertFalse(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
        testElement.syncStatus = {
            signedIn: true,
            statusAction: StatusAction.NO_ACTION,
        };
        flush();
        assertFalse(!!testElement.shadowRoot.querySelector('#priceEmailNotificationsToggle'));
    });
    test('pageContentRow', function () {
        const pageContentRow = testElement.shadowRoot.querySelector('#pageContentRow');
        // TODO(crbug/1476887): Remove visibility check once crbug/1476887 launched.
        assertTrue(isVisible(pageContentRow));
        // The sublabel is dynamic based on the setting state.
        testElement.set('prefs.page_content_collection.enabled.value', true);
        const row = testElement.shadowRoot.querySelector('#pageContentRow');
        assertEquals(loadTimeData.getString('pageContentLinkRowSublabelOn'), row.subLabel);
        testElement.set('prefs.page_content_collection.enabled.value', false);
        assertEquals(loadTimeData.getString('pageContentLinkRowSublabelOff'), row.subLabel);
        // A click on the row navigates to the page content page.
        pageContentRow.click();
        assertEquals(routes.PAGE_CONTENT, Router.getInstance().getCurrentRoute());
    });
});
// TODO(crbug/1476887): Remove once crbug/1476887 launched.
suite('PageContentSettingOff', function () {
    let testElement;
    suiteSetup(function () {
        loadTimeData.overrideValues({
            enablePageContentSetting: false,
        });
    });
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        testElement = document.createElement('settings-personalization-options');
        document.body.appendChild(testElement);
        flush();
    });
    teardown(function () {
        testElement.remove();
    });
    test('pageContentRowNotVisible', function () {
        assertFalse(isVisible(testElement.shadowRoot.querySelector('#pageContentRow')));
    });
});
// 
