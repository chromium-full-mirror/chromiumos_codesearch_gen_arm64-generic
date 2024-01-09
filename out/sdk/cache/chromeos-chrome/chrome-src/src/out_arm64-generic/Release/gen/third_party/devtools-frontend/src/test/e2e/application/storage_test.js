"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const application_helpers_js_1 = require("../helpers/application-helpers.js");
// The parent suffix makes sure we wait for the Cookies item to have children before trying to click it.
const STORAGE_SELECTOR = '[aria-label="Storage"]';
const CLEAR_SITE_DATA_BUTTON_SELECTOR = '#storage-view-clear-button';
(0, mocha_extensions_js_1.describe)('The Application Tab', () => {
    (0, mocha_extensions_js_1.describe)('contains a Storage pane', function () {
        // The tests in this suite are particularly slow, as they perform a lot of actions
        this.timeout(20000);
        beforeEach(async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, application_helpers_js_1.navigateToApplicationTab)(target, 'storage-quota');
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(STORAGE_SELECTOR);
        });
        (0, mocha_extensions_js_1.it)('which clears storage correctly using the clear button', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await target.bringToFront();
            await target.evaluate(async () => {
                const array = [];
                for (let i = 0; i < 20000; i++) {
                    array.push(i % 10);
                }
                // @ts-ignore
                await new Promise(resolve => createDatabase(resolve, 'Database1'));
                // @ts-ignore
                await new Promise(resolve => createObjectStore(resolve, 'Database1', 'Store1', 'id', true));
                // @ts-ignore
                await new Promise(resolve => addIDBValue(resolve, 'Database1', 'Store1', { key: 1, value: array }, ''));
            });
            await (0, application_helpers_js_1.waitForQuotaUsage)(quota => quota > 800);
            // We may click too early. If the total quota exceeds 2999, some remaining
            // quota may show. Instead,
            // try to click another time, if necessary.
            await (0, helper_js_1.waitForFunction)(async () => {
                await (0, helper_js_1.click)(CLEAR_SITE_DATA_BUTTON_SELECTOR, { clickOptions: { delay: 250 } });
                const quota = await (0, application_helpers_js_1.getQuotaUsage)();
                return quota === 0;
            });
        });
        (0, mocha_extensions_js_1.it)('which reports storage correctly, including the pie chart legend', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await target.evaluate(async () => {
                const array = [];
                for (let i = 0; i < 20000; i++) {
                    array.push(i % 10);
                }
                // @ts-ignore
                await new Promise(resolve => createDatabase(resolve, 'Database1'));
                // @ts-ignore
                await new Promise(resolve => createObjectStore(resolve, 'Database1', 'Store1', 'id', true));
                // @ts-ignore
                await new Promise(resolve => addIDBValue(resolve, 'Database1', 'Store1', { key: 1, value: array }, ''));
            });
            await (0, application_helpers_js_1.waitForQuotaUsage)(quota => quota > 800);
            const rows = await (0, application_helpers_js_1.getPieChartLegendRows)();
            // Only assert that the legend entries are correct.
            chai_1.assert.strictEqual(rows.length, 2);
            chai_1.assert.strictEqual(rows[0][2], 'IndexedDB');
            chai_1.assert.strictEqual(rows[1][2], 'Total');
        });
    });
});
//# sourceMappingURL=storage_test.js.map