// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import 'chrome://settings/lazy_load.js';
import { webUIListenerCallback } from 'chrome://resources/js/cr.js';
// 
import { flush } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
// 
// 
import { loadTimeData } from 'chrome://settings/settings.js';
// 
import { pageVisibility, ProfileInfoBrowserProxyImpl, Router, routes, StatusAction, SyncBrowserProxyImpl } from 'chrome://settings/settings.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
// 
import { simulateSyncStatus } from './sync_test_util.js';
// 
import { TestProfileInfoBrowserProxy } from './test_profile_info_browser_proxy.js';
import { TestSyncBrowserProxy } from './test_sync_browser_proxy.js';
// clang-format on
let peoplePage;
let profileInfoBrowserProxy;
let syncBrowserProxy;
suite('ProfileInfoTests', function () {
    suiteSetup(function () {
        // 
        loadTimeData.overrideValues({
            // Account Manager is tested in people_page_test_cros.js
            isAccountManagerEnabled: false,
        });
        // 
    });
    setup(async function () {
        profileInfoBrowserProxy = new TestProfileInfoBrowserProxy();
        ProfileInfoBrowserProxyImpl.setInstance(profileInfoBrowserProxy);
        syncBrowserProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(syncBrowserProxy);
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        peoplePage = document.createElement('settings-people-page');
        peoplePage.pageVisibility = pageVisibility;
        document.body.appendChild(peoplePage);
        await syncBrowserProxy.whenCalled('getSyncStatus');
        await profileInfoBrowserProxy.whenCalled('getProfileInfo');
        flush();
    });
    teardown(function () {
        peoplePage.remove();
    });
    test('GetProfileInfo', function () {
        assertEquals(profileInfoBrowserProxy.fakeProfileInfo.name, peoplePage.shadowRoot.querySelector('#profile-name').textContent.trim());
        const bg = peoplePage.shadowRoot.querySelector('#profile-icon').style.backgroundImage;
        assertTrue(bg.includes(profileInfoBrowserProxy.fakeProfileInfo.iconUrl));
        const iconDataUrl = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEA' +
            'LAAAAAABAAEAAAICTAEAOw==';
        webUIListenerCallback('profile-info-changed', { name: 'pushedName', iconUrl: iconDataUrl });
        flush();
        assertEquals('pushedName', peoplePage.shadowRoot.querySelector('#profile-name').textContent.trim());
        const newBg = peoplePage.shadowRoot.querySelector('#profile-icon').style.backgroundImage;
        assertTrue(newBg.includes(iconDataUrl));
    });
});
// 
suite('SyncSettings', function () {
    setup(async function () {
        syncBrowserProxy = new TestSyncBrowserProxy();
        SyncBrowserProxyImpl.setInstance(syncBrowserProxy);
        profileInfoBrowserProxy = new TestProfileInfoBrowserProxy();
        ProfileInfoBrowserProxyImpl.setInstance(profileInfoBrowserProxy);
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        peoplePage = document.createElement('settings-people-page');
        peoplePage.pageVisibility = pageVisibility;
        document.body.appendChild(peoplePage);
        await syncBrowserProxy.whenCalled('getSyncStatus');
        flush();
    });
    teardown(function () {
        peoplePage.remove();
    });
    test('ShowCorrectSyncRow', function () {
        assertTrue(!!peoplePage.shadowRoot.querySelector('#sync-setup'));
        assertFalse(!!peoplePage.shadowRoot.querySelector('#sync-status'));
        // Make sures the subpage opens even when logged out or has errors.
        simulateSyncStatus({
            signedIn: false,
            statusAction: StatusAction.REAUTHENTICATE,
        });
        peoplePage.shadowRoot.querySelector('#sync-setup').click();
        flush();
        assertEquals(Router.getInstance().getCurrentRoute(), routes.SYNC);
    });
});
