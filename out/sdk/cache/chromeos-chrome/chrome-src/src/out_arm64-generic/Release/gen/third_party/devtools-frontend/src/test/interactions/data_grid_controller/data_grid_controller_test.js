"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const context_menu_helpers_js_1 = require("../../e2e/helpers/context-menu-helpers.js");
const datagrid_helpers_js_1 = require("../../e2e/helpers/datagrid-helpers.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const shared_js_1 = require("../helpers/shared.js");
async function activateContextMenuOnColumnHeader(headerText) {
    const dataGridController = await (0, datagrid_helpers_js_1.getDataGridController)();
    const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)(dataGridController);
    return await (0, helper_js_1.click)(`pierceShadowText/${headerText}`, {
        root: dataGrid,
        clickOptions: {
            button: 'right',
        },
    });
}
async function activateContextMenuOnBodyCell(cellText) {
    const dataGridController = await (0, datagrid_helpers_js_1.getDataGridController)();
    const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)(dataGridController);
    return await (0, helper_js_1.click)(`pierceShadowText/${cellText}`, {
        root: dataGrid,
        clickOptions: {
            button: 'right',
        },
    });
}
async function waitForFirstBodyCellText(cellText) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)();
        const firstBodyCell = await (0, helper_js_1.$)('tbody td', dataGrid);
        const text = firstBodyCell && await firstBodyCell.evaluate(cell => cell.innerText);
        return text === cellText;
    });
}
(0, mocha_extensions_js_1.describe)('data grid controller', () => {
    (0, shared_js_1.preloadForCodeCoverage)('data_grid_controller/basic.html');
    (0, mocha_extensions_js_1.it)('lets the user right click on a header to show the context menu', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/basic.html');
        await activateContextMenuOnColumnHeader('Key');
        const contextMenu = await (0, helper_js_1.$)('.soft-context-menu');
        chai_1.assert.isNotNull(contextMenu);
        await (0, context_menu_helpers_js_1.assertTopLevelContextMenuItemsText)(['Value', (0, context_menu_helpers_js_1.platformSpecificTextForSubMenuEntryItem)('Sort By'), 'Reset Columns']);
    });
    (0, mocha_extensions_js_1.it)('lists the hideable columns in the context menu and lets the user click to toggle the visibility', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/basic.html');
        await activateContextMenuOnColumnHeader('Key');
        const contextMenu = await (0, helper_js_1.$)('.soft-context-menu');
        chai_1.assert.isNotNull(contextMenu);
        await (0, helper_js_1.click)('[aria-label="Value, checked"]');
        const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)();
        await (0, helper_js_1.waitForFunction)(async () => {
            const hiddenCells = await (0, helper_js_1.$$)('tbody td.hidden', dataGrid);
            return hiddenCells.length === 3;
        });
        const renderedText = await (0, datagrid_helpers_js_1.getInnerTextOfDataGridCells)(dataGrid, 3);
        chai_1.assert.deepEqual([
            ['Bravo'],
            ['Alpha'],
            ['Charlie'],
        ], renderedText);
    });
    (0, mocha_extensions_js_1.it)('lists sortable columns in a sub-menu and lets the user click to sort', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/basic.html');
        await activateContextMenuOnColumnHeader('Key');
        const contextMenu = await (0, helper_js_1.$)('.soft-context-menu');
        if (!contextMenu) {
            chai_1.assert.fail('Could not find context menu.');
        }
        const sortBy = await (0, context_menu_helpers_js_1.findSubMenuEntryItem)('Sort By', true);
        await sortBy.hover();
        const keyColumnSort = await (0, helper_js_1.waitFor)('[aria-label="Key"]');
        await keyColumnSort.click();
        await waitForFirstBodyCellText('Alpha');
        const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)();
        const renderedText = await (0, datagrid_helpers_js_1.getInnerTextOfDataGridCells)(dataGrid, 3);
        chai_1.assert.deepEqual([
            ['Alpha', 'Letter A'],
            ['Bravo', 'Letter B'],
            ['Charlie', 'Letter C'],
        ], renderedText);
    });
    (0, mocha_extensions_js_1.it)('lets the user click on a column header to sort it', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/basic.html');
        const dataGrid = await (0, datagrid_helpers_js_1.getDataGrid)();
        // Wait until 3 rows have appeared.
        await (0, datagrid_helpers_js_1.getInnerTextOfDataGridCells)(dataGrid, 3);
        // Sort and wait for the first row to be as expected.
        await (0, helper_js_1.click)('th[data-grid-header-cell="key"]');
        await waitForFirstBodyCellText('Alpha');
        const renderedText = await (0, datagrid_helpers_js_1.getInnerTextOfDataGridCells)(dataGrid, 3);
        chai_1.assert.deepEqual([
            ['Alpha', 'Letter A'],
            ['Bravo', 'Letter B'],
            ['Charlie', 'Letter C'],
        ], renderedText);
    });
    (0, mocha_extensions_js_1.it)('lists sort by and header options when right clicking on a body row', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/basic.html');
        await activateContextMenuOnBodyCell('Bravo');
        await (0, context_menu_helpers_js_1.assertTopLevelContextMenuItemsText)([
            (0, context_menu_helpers_js_1.platformSpecificTextForSubMenuEntryItem)('Sort By'),
            (0, context_menu_helpers_js_1.platformSpecificTextForSubMenuEntryItem)('Header Options'),
        ]);
        await (0, context_menu_helpers_js_1.assertSubMenuItemsText)('Header Options', ['Value', 'Reset Columns']);
        await (0, context_menu_helpers_js_1.assertSubMenuItemsText)('Sort By', ['Key', 'Value']);
    });
    (0, mocha_extensions_js_1.it)('allows the parent to add custom context menu items', async () => {
        await (0, shared_js_1.loadComponentDocExample)('data_grid_controller/custom-context-menu-items.html');
        await activateContextMenuOnBodyCell('Bravo');
        await (0, context_menu_helpers_js_1.assertTopLevelContextMenuItemsText)([
            (0, context_menu_helpers_js_1.platformSpecificTextForSubMenuEntryItem)('Sort By'),
            (0, context_menu_helpers_js_1.platformSpecificTextForSubMenuEntryItem)('Header Options'),
            'Hello World',
        ]);
    });
});
//# sourceMappingURL=data_grid_controller_test.js.map