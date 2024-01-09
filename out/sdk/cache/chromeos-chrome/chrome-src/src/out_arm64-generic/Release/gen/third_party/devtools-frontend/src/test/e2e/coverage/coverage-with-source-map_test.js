"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const coverage_helpers_js_1 = require("../helpers/coverage-helpers.js");
(0, mocha_extensions_js_1.describe)('Coverage Panel', function () {
    // This test takes longer than usual because as we need to wait for the coverage data to be loaded and datagrid expanded.
    this.timeout(20000);
    beforeEach(async () => {
        await (0, coverage_helpers_js_1.waitForTheCoveragePanelToLoad)();
        await (0, coverage_helpers_js_1.startInstrumentingCoverage)();
        await (0, helper_js_1.goToResource)('coverage/with-source-map.html');
        const resultsElement = await (0, helper_js_1.waitFor)('.coverage-results');
        await (0, helper_js_1.click)('#tab-coverage'); // Make sure the focus is on the coverage tab.
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press('Enter'); // Focus on coverage view
        await (0, helper_js_1.waitFor)('.data-grid-data-grid-node.revealed.parent', resultsElement); // wait for the parent node to be loaded
        await frontend.keyboard.press('ArrowDown'); // select the parent node
        await (0, helper_js_1.waitFor)('.data-grid-data-grid-node.revealed.parent.selected', resultsElement); // wait for the first item to be selected
        await frontend.keyboard.press('ArrowRight'); // expand
        await (0, helper_js_1.waitFor)('.data-grid-data-grid-node.revealed.parent.selected.expanded', resultsElement); // wait for the first item to be expanded
        await (0, helper_js_1.waitFor)('.data-grid-data-grid-node:not(.parent)', resultsElement); // wait for children to be loaded
    });
    // Flakily has navigation errors in the "beforeEach".
    mocha_extensions_js_1.it.skip('[crbug.com/1508272] Shows coverage data for sources if a script has source map', async () => {
        const URL_PREFIX = `https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/coverage`;
        const expected = [
            {
                'total': '1 445',
                'unused': '783',
                'url': `${URL_PREFIX}/with-source-map.js`,
            },
            {
                'total': '897',
                'unused': '531',
                'url': `${URL_PREFIX}/webpack/bootstrap.js`,
            },
            {
                'total': '335',
                'unused': '147',
                'url': `${URL_PREFIX}/src/script.ts`,
            },
            {
                'total': '120',
                'unused': '66',
                'url': `${URL_PREFIX}/src/users.ts`,
            },
            {
                'total': '42',
                'unused': '39',
                'url': `${URL_PREFIX}/src/animal.ts`,
            },
        ];
        chai_1.assert.deepEqual(await (0, coverage_helpers_js_1.getCoverageData)(5), expected);
    });
    (0, mocha_extensions_js_1.it)('Can update and sort the coverage information for sources', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.evaluate(() => {
            const buttonToExecuteCode = document.querySelector('#first-button');
            buttonToExecuteCode.click();
        });
        const URL_PREFIX = `https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/coverage`;
        const result = await (0, coverage_helpers_js_1.getCoverageData)(6);
        result.pop(); // remove the last item, which is the coverage for the eval code
        const expected = [
            {
                'total': '1 445',
                'unused': '682',
                'url': `${URL_PREFIX}/with-source-map.js`,
            },
            {
                'total': '897',
                'unused': '531',
                'url': `${URL_PREFIX}/webpack/bootstrap.js`,
            },
            {
                'total': '335',
                'unused': '84',
                'url': `${URL_PREFIX}/src/script.ts`,
            },
            {
                'total': '42',
                'unused': '39',
                'url': `${URL_PREFIX}/src/animal.ts`,
            },
            // Some code in users.ts file has been executed, so the unused lines are now less than animal.ts
            {
                'total': '120',
                'unused': '28',
                'url': `${URL_PREFIX}/src/users.ts`,
            },
        ];
        chai_1.assert.deepEqual(result, expected);
    });
});
//# sourceMappingURL=coverage-with-source-map_test.js.map