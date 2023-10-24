"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const SNIPPETS_TAB_SELECTOR = '[aria-label="Snippets"]';
(0, mocha_extensions_js_1.describe)('Snippets', async function () {
    (0, mocha_extensions_js_1.it)('with special characters in their name can be deleted', async () => {
        await (0, helper_js_1.goToResource)('empty.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)(sources_helpers_js_1.MORE_TABS_SELECTOR);
        await (0, helper_js_1.click)(SNIPPETS_TAB_SELECTOR);
        await (0, helper_js_1.click)('[aria-label="New snippet"]');
        await (0, helper_js_1.typeText)('file@name\n');
        let treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
        const treeItemNames = await Promise.all(treeItems.map(x => x.evaluate(y => y.textContent)));
        chai_1.assert.deepEqual(treeItemNames, ['file@name']);
        await (0, sources_helpers_js_1.clickOnContextMenu)('[aria-label="file@name, file"]', 'Remove');
        treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
        chai_1.assert.strictEqual(treeItems.length, 0);
    });
});
//# sourceMappingURL=snippets_test.js.map