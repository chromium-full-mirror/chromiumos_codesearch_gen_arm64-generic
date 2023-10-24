"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const puppeteer_state_js_1 = require("../../conductor/puppeteer-state.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const performance_helpers_js_1 = require("../helpers/performance-helpers.js");
async function waitForChangedConcurrency(lastConcurrency) {
    const { target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
    return (0, helper_js_1.waitForFunction)(async () => {
        const newConcurrency = await target.evaluate('navigator.hardwareConcurrency');
        if (newConcurrency !== lastConcurrency) {
            return newConcurrency;
        }
        return undefined;
    });
}
(0, mocha_extensions_js_1.describe)('The Performance panel', () => {
    (0, mocha_extensions_js_1.it)('can emulate navigator.hardwareConcurrency', async () => {
        await (0, performance_helpers_js_1.navigateToPerformanceTab)('empty');
        await (0, performance_helpers_js_1.openCaptureSettings)('.timeline-settings-pane');
        let concurrency = await waitForChangedConcurrency(undefined);
        // Wait for the checkbox to load
        const toggle = await (0, helper_js_1.waitForAria)('Hardware concurrency');
        await (0, helper_js_1.waitForFunction)(() => toggle.evaluate((e) => {
            if (e.disabled) {
                return false;
            }
            e.click();
            return true;
        }));
        // Check for the warning icon on the tab header
        const tabHeader = await (0, helper_js_1.waitForAria)('Performance');
        const tabIcon = await (0, helper_js_1.waitFor)('devtools-icon', tabHeader);
        {
            const tooltipText = await tabIcon.evaluate(e => e.getAttribute('title'));
            chai_1.assert.deepEqual(tooltipText, 'Hardware concurrency override is enabled');
        }
        // Check that the warning is shown on the settings gear:
        const gear = await (0, helper_js_1.waitForAria)('- Hardware concurrency override is enabled');
        const gearColor = await gear.evaluate(e => e.firstElementChild && getComputedStyle(e.firstElementChild).getPropertyValue('background-color'));
        chai_1.assert.deepEqual(gearColor, 'rgb(220, 54, 46)');
        // Check that the concurrency input shows the correct value:
        const input = await (0, helper_js_1.waitFor)('input[aria-label="Override the value reported by navigator.hardwareConcurrency on the page"]');
        const initialValue = Number(await input.evaluate(input => {
            return input.value;
        }));
        chai_1.assert.deepEqual(initialValue, concurrency);
        // Check setting a different value works:
        await input.click({ clickCount: 3 });
        await input.type(`${initialValue + 1}`);
        concurrency = await waitForChangedConcurrency(concurrency);
        chai_1.assert.deepEqual(concurrency, initialValue + 1);
        // Check that the warning is shown when exceeding the default value:
        const warning = await (0, helper_js_1.waitForAria)('Exceeding the default value may degrade system performance.');
        await (0, helper_js_1.waitForFunction)(async () => await warning.evaluate(e => getComputedStyle(e).visibility) === 'visible');
        // Check that resetting the value works:
        const button = await (0, helper_js_1.waitForAria)('Reset to the default value');
        (0, helper_js_1.assertNotNullOrUndefined)(button);
        await button.click();
        concurrency = await waitForChangedConcurrency(concurrency);
        chai_1.assert.deepEqual(concurrency, initialValue);
    });
});
//# sourceMappingURL=emulate-hardware-concurrency_test.js.map