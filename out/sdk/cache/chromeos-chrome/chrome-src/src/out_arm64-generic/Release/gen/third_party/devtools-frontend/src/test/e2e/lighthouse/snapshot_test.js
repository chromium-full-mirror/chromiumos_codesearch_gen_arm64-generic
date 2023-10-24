"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const lighthouse_helpers_js_1 = require("../helpers/lighthouse-helpers.js");
// This test will fail (by default) in headful mode, as the target page never gets painted.
// To resolve this when debugging, just make sure the target page is visible during the lighthouse run.
(0, mocha_extensions_js_1.describe)('Snapshot', async function () {
    // The tests in this suite are particularly slow
    if (this.timeout() !== 0) {
        this.timeout(60_000);
    }
    beforeEach(() => {
        // https://github.com/GoogleChrome/lighthouse/issues/14572
        (0, events_js_1.expectError)(/Request CacheStorage\.requestCacheNames failed/);
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1357791
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
        (0, events_js_1.expectError)(/Protocol Error: the message with wrong session id/);
    });
    it('successfully returns a Lighthouse report for the page state', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
        await (0, lighthouse_helpers_js_1.registerServiceWorker)();
        const { target } = await (0, helper_js_1.getBrowserAndPages)();
        await target.evaluate(() => {
            const makeTextFieldBtn = document.querySelector('button');
            if (!makeTextFieldBtn) {
                throw new Error('Button not found');
            }
            makeTextFieldBtn.click();
            makeTextFieldBtn.click();
            makeTextFieldBtn.click();
        });
        let numNavigations = 0;
        target.on('framenavigated', () => ++numNavigations);
        await (0, lighthouse_helpers_js_1.selectMode)('snapshot');
        await (0, lighthouse_helpers_js_1.clickStartButton)();
        const { lhr, artifacts, reportEl } = await (0, lighthouse_helpers_js_1.waitForResult)();
        chai_1.assert.strictEqual(numNavigations, 0);
        chai_1.assert.strictEqual(lhr.gatherMode, 'snapshot');
        chai_1.assert.deepStrictEqual(artifacts.ViewportDimensions, {
            innerHeight: 823,
            innerWidth: 412,
            outerHeight: 823,
            outerWidth: 412,
            devicePixelRatio: 1.75,
        });
        const { auditResults, erroredAudits, failedAudits } = (0, lighthouse_helpers_js_1.getAuditsBreakdown)(lhr);
        chai_1.assert.strictEqual(auditResults.length, 88);
        chai_1.assert.deepStrictEqual(erroredAudits, []);
        chai_1.assert.deepStrictEqual(failedAudits.map(audit => audit.id), [
            'document-title',
            'html-has-lang',
            'label',
            'meta-description',
            'tap-targets',
        ]);
        // These a11y violations are not present on initial page load.
        chai_1.assert.strictEqual(lhr.audits['label'].details.items.length, 3);
        // No trace was collected in snapshot mode.
        const viewTrace = await (0, helper_js_1.$textContent)('View Trace', reportEl);
        chai_1.assert.strictEqual(viewTrace, null);
        const viewOriginalTrace = await (0, helper_js_1.$textContent)('View Original Trace', reportEl);
        chai_1.assert.strictEqual(viewOriginalTrace, null);
        // Ensure service worker is not cleared in snapshot mode.
        chai_1.assert.strictEqual(await (0, lighthouse_helpers_js_1.getServiceWorkerCount)(), 1);
    });
});
//# sourceMappingURL=snapshot_test.js.map