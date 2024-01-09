// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { AboutPageBrowserProxyImpl, LifetimeBrowserProxyImpl, Route, Router } from 'chrome://settings/settings.js';
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
import { TestAboutPageBrowserProxy } from './test_about_page_browser_proxy.js';
import { TestLifetimeBrowserProxy } from './test_lifetime_browser_proxy.js';
// 
// 
// 
// 
// clang-format on
function setupRouter() {
    const routes = {
        ABOUT: new Route('/help'),
        ADVANCED: new Route('/advanced'),
        BASIC: new Route('/'),
    };
    Router.resetInstanceForTesting(new Router(routes));
    return routes;
}
// 
suite('AllBuilds', function () {
    let page;
    let aboutBrowserProxy;
    let lifetimeBrowserProxy;
    let testRoutes;
    setup(function () {
        loadTimeData.overrideValues({
            aboutObsoleteNowOrSoon: false,
            aboutObsoleteEndOfTheLine: false,
        });
        testRoutes = setupRouter();
        lifetimeBrowserProxy = new TestLifetimeBrowserProxy();
        LifetimeBrowserProxyImpl.setInstance(lifetimeBrowserProxy);
        aboutBrowserProxy = new TestAboutPageBrowserProxy();
        AboutPageBrowserProxyImpl.setInstance(aboutBrowserProxy);
        return initNewPage();
    });
    teardown(function () {
        page.remove();
    });
    function initNewPage() {
        aboutBrowserProxy.reset();
        lifetimeBrowserProxy.reset();
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        page = document.createElement('settings-about-page');
        Router.getInstance().navigateTo(testRoutes.ABOUT);
        document.body.appendChild(page);
        // 
        return Promise.resolve();
        // 
        // 
    }
    // 
    test('GetHelp', function () {
        assertTrue(!!page.shadowRoot.querySelector('#help'));
        page.shadowRoot.querySelector('#help').click();
        return aboutBrowserProxy.whenCalled('openHelpPage');
    });
});
// 
