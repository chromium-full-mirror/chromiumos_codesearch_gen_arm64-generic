"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const lighthouse_helpers_js_1 = require("../helpers/lighthouse-helpers.js");
(0, mocha_extensions_js_1.describe)('The Lighthouse start view', async () => {
    (0, mocha_extensions_js_1.it)('shows a button to generate a new report', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('empty.html');
        const disabled = await (0, lighthouse_helpers_js_1.isGenerateReportButtonDisabled)();
        const helpText = await (0, lighthouse_helpers_js_1.getHelpText)();
        chai_1.assert.isFalse(disabled, 'The Generate Report button should not be disabled');
        chai_1.assert.strictEqual(helpText, '');
    });
    (0, mocha_extensions_js_1.it)('disables the start button when no categories are selected', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('empty.html');
        await (0, lighthouse_helpers_js_1.selectCategories)([]);
        const disabled = await (0, lighthouse_helpers_js_1.isGenerateReportButtonDisabled)();
        const helpText = await (0, lighthouse_helpers_js_1.getHelpText)();
        chai_1.assert.isTrue(disabled, 'The Generate Report button should be disabled');
        chai_1.assert.strictEqual(helpText, 'At least one category must be selected.');
    });
    (0, mocha_extensions_js_1.it)('enables the start button if only one category is selected', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('empty.html');
        await (0, lighthouse_helpers_js_1.selectCategories)(['performance']);
        const disabled = await (0, lighthouse_helpers_js_1.isGenerateReportButtonDisabled)();
        const helpText = await (0, lighthouse_helpers_js_1.getHelpText)();
        chai_1.assert.isFalse(disabled, 'The Generate Report button should be enabled');
        chai_1.assert.strictEqual(helpText, '');
    });
    // Flaky test.
    mocha_extensions_js_1.it.skipOnPlatforms(['mac'], '[crbug.com/1484942]: disables the start button for internal pages', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)();
        await (0, helper_js_1.goTo)('about:blank');
        const disabled = await (0, lighthouse_helpers_js_1.isGenerateReportButtonDisabled)();
        const helpText = await (0, lighthouse_helpers_js_1.getHelpText)();
        chai_1.assert.isTrue(disabled, 'The Generate Report button should be disabled');
        chai_1.assert.strictEqual(helpText, 'Can only audit pages on HTTP or HTTPS. Navigate to a different page.');
    });
    // Broken on non-debug runs
    mocha_extensions_js_1.it.skip('[crbug.com/1057948] shows generate report button even when navigating to an unreachable page', async () => {
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('empty.html');
        await (0, helper_js_1.goToResource)('network/unreachable.rawresponse');
        const disabled = await (0, lighthouse_helpers_js_1.isGenerateReportButtonDisabled)();
        chai_1.assert.isTrue(disabled, 'The Generate Report button should be disabled');
    });
    (0, mocha_extensions_js_1.it)('displays warning if important data may affect performance', async () => {
        // e2e tests in application/ create websql and indexeddb items and don't clean up after themselves
        await (0, lighthouse_helpers_js_1.clearSiteData)();
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('empty.html');
        let warningElem = await (0, helper_js_1.waitFor)('.lighthouse-warning-text.hidden');
        const warningText1 = await warningElem.evaluate(node => node.textContent?.trim());
        chai_1.assert.strictEqual(warningText1, '');
        await (0, lighthouse_helpers_js_1.navigateToLighthouseTab)('lighthouse/lighthouse-storage.html');
        // Wait for storage state to lazily update
        await (0, lighthouse_helpers_js_1.waitForStorageUsage)(quota => quota > 0);
        warningElem = await (0, helper_js_1.waitFor)('.lighthouse-warning-text:not(.hidden)');
        const expected = 'There may be stored data affecting loading performance in this location: IndexedDB. Audit this page in an incognito window to prevent those resources from affecting your scores.';
        const warningText2 = await warningElem.evaluate(node => node.textContent?.trim());
        chai_1.assert.strictEqual(warningText2, expected);
    });
});
//# sourceMappingURL=start-view_test.js.map