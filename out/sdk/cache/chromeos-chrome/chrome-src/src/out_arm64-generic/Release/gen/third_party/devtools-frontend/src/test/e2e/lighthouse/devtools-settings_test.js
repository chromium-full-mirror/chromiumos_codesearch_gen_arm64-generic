"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const path = require("path");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const emulation_helpers_js_1 = require("../helpers/emulation-helpers.js");
const lighthouse_helpers_js_1 = require("../helpers/lighthouse-helpers.js");
// This test will fail (by default) in headful mode, as the target page never gets painted.
// To resolve this when debugging, just make sure the target page is visible during the lighthouse run.
const IPAD_MINI_LANDSCAPE_VIEWPORT_DIMENSIONS = {
    innerHeight: 768,
    innerWidth: 1024,
    outerHeight: 768,
    outerWidth: 1024,
    devicePixelRatio: 2,
};
(0, mocha_extensions_js_1.describe)('DevTools', function () {
    // The tests in this suite are particularly slow
    if (this.timeout() !== 0) {
        this.timeout(60_000);
    }
    beforeEach(async () => {
        // https://github.com/GoogleChrome/lighthouse/issues/14572
        (0, events_js_1.expectError)(/Request CacheStorage\.requestCacheNames failed/);
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1357791
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
    });
    (0, mocha_extensions_js_1.describe)('request blocking', () => {
        // Start blocking *.css
        // Ideally this would be done with UI manipulation, but it'd be less reliable AND
        // the designated tests in network-request-blocking-panel_test.ts are skipped by default due to flakiness.
        beforeEach(async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.evaluate(`(async () => {
        const SDK = await import('./core/sdk/sdk.js');
        const networkManager = SDK.NetworkManager.MultitargetNetworkManager.instance();
        networkManager.setBlockingEnabled(true);
        networkManager.setBlockedPatterns([{enabled: true, url: '*.css'}]);
      })()`);
        });
        // Reset request blocking state
        afterEach(async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.evaluate(`(async () => {
        const SDK = await import('./core/sdk/sdk.js');
        const networkManager = SDK.NetworkManager.MultitargetNetworkManager.instance();
        networkManager.setBlockingEnabled(false);
        networkManager.setBlockedPatterns([]);
      })()`);
        });
        (0, mocha_extensions_js_1.it)('is respected during a lighthouse run', async () => {
            await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
            await (0, lighthouse_helpers_js_1.selectCategories)(['performance']);
            await (0, lighthouse_helpers_js_1.clickStartButton)();
            const { lhr } = await (0, lighthouse_helpers_js_1.waitForResult)();
            const requests = lhr.audits['network-requests'].details.items;
            const trimmedRequests = requests.map((item) => {
                return {
                    url: typeof item.url === 'string' && path.basename(item.url),
                    statusCode: item.statusCode,
                };
            });
            chai_1.assert.deepEqual(trimmedRequests, [
                { url: 'hello.html', statusCode: 200 },
                { url: 'basic.css', statusCode: -1 }, // statuCode === -1 means the request failed
            ]);
        });
    });
    (0, mocha_extensions_js_1.describe)('device emulation', () => {
        beforeEach(async function () {
            await (0, emulation_helpers_js_1.reloadDockableFrontEnd)();
            await (0, helper_js_1.waitFor)('.tabbed-pane-left-toolbar');
            await (0, emulation_helpers_js_1.openDeviceToolbar)();
        });
        (0, mocha_extensions_js_1.it)('is restored after a lighthouse run', async () => {
            // Use iPad Mini in landscape mode and custom zoom.
            await (0, emulation_helpers_js_1.selectDevice)('iPad Mini');
            const rotateButton = await (0, helper_js_1.waitForAria)('Rotate');
            await rotateButton.click();
            const zoomButton = await (0, helper_js_1.waitForAria)('Zoom');
            await zoomButton.click();
            const zoom75 = await (0, helper_js_1.waitForElementWithTextContent)('75%');
            await zoom75.click();
            chai_1.assert.deepStrictEqual(await (0, lighthouse_helpers_js_1.getTargetViewport)(), IPAD_MINI_LANDSCAPE_VIEWPORT_DIMENSIONS);
            await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
            await (0, lighthouse_helpers_js_1.selectCategories)(['performance']);
            await (0, lighthouse_helpers_js_1.clickStartButton)();
            const { artifacts } = await (0, lighthouse_helpers_js_1.waitForResult)();
            chai_1.assert.deepStrictEqual(artifacts.ViewportDimensions, {
                innerHeight: 823,
                innerWidth: 412,
                outerHeight: 823,
                outerWidth: 412,
                devicePixelRatio: 1.75,
            });
            const zoomText = await zoomButton.evaluate(zoomButtonEl => zoomButtonEl.textContent);
            chai_1.assert.strictEqual(zoomText, '75%');
            chai_1.assert.deepStrictEqual(await (0, lighthouse_helpers_js_1.getTargetViewport)(), IPAD_MINI_LANDSCAPE_VIEWPORT_DIMENSIONS);
        });
    });
});
//# sourceMappingURL=devtools-settings_test.js.map