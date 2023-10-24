"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const events_js_1 = require("../../conductor/events.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const application_helpers_js_1 = require("../helpers/application-helpers.js");
const datagrid_helpers_js_1 = require("../helpers/datagrid-helpers.js");
const SHARED_STORAGE_SELECTOR = '[aria-label="Shared storage"].parent';
let DOMAIN;
let DOMAIN_SELECTOR;
(0, mocha_extensions_js_1.describe)('The Application Tab', async () => {
    before(async () => {
        DOMAIN = `https://localhost:${(0, helper_js_1.getTestServerPort)()}`;
        DOMAIN_SELECTOR = `${SHARED_STORAGE_SELECTOR} + ol > [aria-label="${DOMAIN}"]`;
    });
    afterEach(async () => {
        (0, events_js_1.expectError)('Request CacheStorage.requestCacheNames failed. {"code":-32602,"message":"Invalid security origin"}');
    });
    // Failing test.
    mocha_extensions_js_1.it.skip('[crbug.com/1485830]: shows Shared Storage events', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to shared-storage resource and open Application tab', async () => {
            // Events are not recorded because tracking is not yet enabled.
            await (0, application_helpers_js_1.navigateToApplicationTab)(target, 'shared-storage');
        });
        await (0, helper_js_1.step)('open the events view', async () => {
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(SHARED_STORAGE_SELECTOR);
        });
        await (0, helper_js_1.step)('navigate to shared-storage resource so that events will be recorded', async () => {
            // Events are recorded because tracking is enabled.
            await (0, helper_js_1.goToResource)('application/shared-storage.html');
        });
        await (0, helper_js_1.step)('check that event values are correct and preview loads', async () => {
            const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)();
            const innerText = await (0, datagrid_helpers_js_1.getInnerTextOfDataGridCells)(dataGrid, 3, false);
            chai_1.assert.strictEqual(innerText[0][1], 'documentClear');
            chai_1.assert.strictEqual(innerText[0][2], DOMAIN);
            chai_1.assert.strictEqual(innerText[0][3], '{}');
            chai_1.assert.strictEqual(innerText[1][1], 'documentSet');
            chai_1.assert.strictEqual(innerText[1][2], DOMAIN);
            chai_1.assert.strictEqual(innerText[1][3], '{"key":"firstKey","value":"firstValue"}');
            chai_1.assert.strictEqual(innerText[2][1], 'documentAppend');
            chai_1.assert.strictEqual(innerText[2][2], DOMAIN);
            chai_1.assert.strictEqual(innerText[2][3], '{"key":"secondKey","value":"{\\"field\\":\\"complexValue\\",\\"primitive\\":2}"}');
            const rows = await (0, datagrid_helpers_js_1.getDataGridRows)(3, dataGrid, false);
            await (0, helper_js_1.clickElement)(rows[rows.length - 1][0]);
            const jsonView = await (0, helper_js_1.waitFor)('.json-view');
            const jsonViewText = await jsonView.evaluate(el => el.innerText);
            const accessTimeString = jsonViewText.substring('{accessTime: '.length, jsonViewText.indexOf(', accessType:'));
            chai_1.assert.strictEqual(jsonViewText, `{accessTime: ${accessTimeString}, accessType: "documentAppend", ownerOrigin: "${DOMAIN}",…}`);
        });
    });
    // Failing test.
    mocha_extensions_js_1.it.skip('[crbug.com/1485830]: shows Shared Storage metadata', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to shared-storage resource and open Application tab', async () => {
            await (0, application_helpers_js_1.navigateToApplicationTab)(target, 'shared-storage');
        });
        await (0, helper_js_1.step)('open the domain storage', async () => {
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(SHARED_STORAGE_SELECTOR);
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(DOMAIN_SELECTOR);
        });
        await (0, helper_js_1.step)('verify that metadata is correct', async () => {
            const fieldValues = await (0, application_helpers_js_1.getTrimmedTextContent)('devtools-report-value');
            const timeString = fieldValues[1];
            chai_1.assert.deepEqual(fieldValues, [DOMAIN, timeString, '2', '12']);
        });
    });
    // Failing test.
    mocha_extensions_js_1.it.skip('[crbug.com/1485830]: shows Shared Storage keys and values', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to shared-storage resource and open Application tab', async () => {
            await (0, application_helpers_js_1.navigateToApplicationTab)(target, 'shared-storage');
        });
        await (0, helper_js_1.step)('open the domain storage', async () => {
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(SHARED_STORAGE_SELECTOR);
            await (0, application_helpers_js_1.doubleClickSourceTreeItem)(DOMAIN_SELECTOR);
            await (0, helper_js_1.renderCoordinatorQueueEmpty)();
        });
        await (0, helper_js_1.step)('check that storage data values are correct', async () => {
            const dataGridRowValues = await (0, application_helpers_js_1.getStorageItemsData)(['key', 'value'], 2);
            chai_1.assert.deepEqual(dataGridRowValues, [
                {
                    key: 'firstKey',
                    value: 'firstValue',
                },
                {
                    key: 'secondKey',
                    value: '{"field":"complexValue","primitive":2}',
                },
            ]);
        });
        await (0, helper_js_1.step)('verify that preview loads', async () => {
            const dataGridNodes = await (0, helper_js_1.$$)('.data-grid-data-grid-node:not(.creation-node)');
            await (0, helper_js_1.clickElement)(dataGridNodes[dataGridNodes.length - 1]);
            const jsonView = await (0, helper_js_1.waitFor)('.json-view');
            const jsonViewText = await jsonView.evaluate(el => el.innerText);
            chai_1.assert.strictEqual(jsonViewText, '{key: "secondKey", value: "{"field":"complexValue","primitive":2}"}');
        });
    });
});
//# sourceMappingURL=shared-storage_test.js.map