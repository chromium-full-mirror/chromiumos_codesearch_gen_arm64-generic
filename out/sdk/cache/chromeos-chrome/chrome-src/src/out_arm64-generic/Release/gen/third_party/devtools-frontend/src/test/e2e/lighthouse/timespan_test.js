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
(0, mocha_extensions_js_1.describe)('Timespan', async function () {
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
    (0, mocha_extensions_js_1.it)('successfully returns a Lighthouse report for user interactions', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/hello.html');
        await (0, lighthouse_helpers_js_1.registerServiceWorker)();
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1364257
        await (0, lighthouse_helpers_js_1.selectDevice)('desktop');
        await (0, lighthouse_helpers_js_1.selectMode)('timespan');
        await (0, lighthouse_helpers_js_1.setThrottlingMethod)('simulate');
        let numNavigations = 0;
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        target.on('framenavigated', () => ++numNavigations);
        await (0, lighthouse_helpers_js_1.clickStartButton)();
        await (0, lighthouse_helpers_js_1.waitForTimespanStarted)();
        await target.bringToFront();
        await target.click('button');
        await target.click('button');
        await target.click('button');
        // Wait for content to be painted so that the INP event gets emitted.
        // If we don't do this, `frontend.bringToFront()` can disable paints on the target page before INP is emitted.
        await target.evaluate(() => {
            return new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        });
        await frontend.bringToFront();
        await (0, lighthouse_helpers_js_1.endTimespan)();
        const { lhr, artifacts, reportEl } = await (0, lighthouse_helpers_js_1.waitForResult)();
        chai_1.assert.strictEqual(numNavigations, 0);
        chai_1.assert.strictEqual(lhr.gatherMode, 'timespan');
        // Even though the dropdown is set to "simulate", throttling method should be overriden to "devtools".
        chai_1.assert.strictEqual(lhr.configSettings.throttlingMethod, 'devtools');
        const { innerWidth, innerHeight, devicePixelRatio } = artifacts.ViewportDimensions;
        // TODO: Figure out why outerHeight can be different depending on OS
        chai_1.assert.strictEqual(innerHeight, 720);
        chai_1.assert.strictEqual(innerWidth, 1280);
        chai_1.assert.strictEqual(devicePixelRatio, 1);
        const { auditResults, erroredAudits, failedAudits } = (0, lighthouse_helpers_js_1.getAuditsBreakdown)(lhr);
        chai_1.assert.strictEqual(auditResults.length, 47);
        chai_1.assert.deepStrictEqual(erroredAudits, []);
        chai_1.assert.deepStrictEqual(failedAudits.map(audit => audit.id), []);
        // Ensure the timespan captured the user interaction.
        const interactionAudit = lhr.audits['interaction-to-next-paint'];
        chai_1.assert.ok(interactionAudit.score);
        chai_1.assert.ok(interactionAudit.numericValue);
        chai_1.assert.strictEqual(interactionAudit.scoreDisplayMode, 'numeric');
        // Trace was collected in timespan mode.
        // Timespan mode can only do DevTools throttling so the text will be "View Trace".
        const viewTraceButton = await (0, helper_js_1.$textContent)('View Trace', reportEl);
        if (!viewTraceButton) {
            throw new Error('Could not find view trace button');
        }
        // Ensure service worker is not cleared in timespan mode.
        chai_1.assert.strictEqual(await (0, lighthouse_helpers_js_1.getServiceWorkerCount)(), 1);
    });
});
//# sourceMappingURL=timespan_test.js.map