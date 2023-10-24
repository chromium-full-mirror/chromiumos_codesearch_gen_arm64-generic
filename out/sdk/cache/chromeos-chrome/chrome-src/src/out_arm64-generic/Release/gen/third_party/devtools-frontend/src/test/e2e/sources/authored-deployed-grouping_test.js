"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const groupedExpectedTree = [
    'Authored',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.js',
    'Deployed',
    'top',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers-sourcemap.html',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
];
const groupedRedundantExpectedTree = [
    'Authored',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.js',
    'Deployed',
    'top',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'redundant-worker-sourcemap.html',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
];
const defaultExpectedTree = [
    'top',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers-sourcemap.html',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'localhost:XXXX',
    'test/e2e/resources/sources',
];
const folderlessExpectedTree = [
    'top',
    'multi-workers-sourcemap.html',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'test/e2e/resources/sources',
    'multi-workers.min.js',
];
const folderlessGroupedExpectedTree = [
    'Authored',
    'test/e2e/resources/sources',
    'multi-workers.js',
    'Deployed',
    'top',
    'multi-workers-sourcemap.html',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
    'multi-workers.min.js',
];
(0, mocha_extensions_js_1.describe)('Source Panel grouping', async function () {
    const targetPage = 'sources/multi-workers-sourcemap.html';
    const scriptFile = 'multi-workers.min.js';
    function workerFileSelectors(workerIndex) {
        return (0, sources_helpers_js_1.createSelectorsForWorkerFile)(scriptFile, 'test/e2e/resources/sources', scriptFile, workerIndex);
    }
    async function validateNavigationTree() {
        await (0, helper_js_1.step)('Ensure 10 workers exist', async () => {
            await (0, helper_js_1.waitFor)(workerFileSelectors(10).rootSelector);
        });
    }
    async function validateNavigationTreeNoSourcemaps() {
        await (0, helper_js_1.waitFor)((0, sources_helpers_js_1.createSelectorsForWorkerFile)('multi-workers.js', 'test/e2e/resources/sources', 'multi-workers.js', 10)
            .rootSelector);
    }
    const authoredMenuText = 'Group by Authored/Deployed';
    const folderMenuText = 'Group by folder';
    async function enableGroupByAuthored(noAuthored) {
        await (0, helper_js_1.click)('[aria-label="More options"]');
        await (0, helper_js_1.click)(`[aria-label="${authoredMenuText}, unchecked"]`);
        await (0, helper_js_1.waitForNone)('.soft-context-menu');
        await (0, helper_js_1.waitFor)('.navigator-deployed-tree-item');
        if (noAuthored) {
            // This happens when loading the non-sourcemapped version
            await validateNavigationTreeNoSourcemaps();
        }
        else {
            await (0, helper_js_1.waitFor)('.navigator-authored-tree-item');
            await validateNavigationTree();
        }
    }
    async function disableGroupByAuthored() {
        await (0, helper_js_1.click)('[aria-label="More options"]');
        await (0, helper_js_1.click)(`[aria-label="${authoredMenuText}, checked"]`);
        await (0, helper_js_1.waitForNone)('.soft-context-menu');
        await (0, helper_js_1.waitForNone)('.navigator-deployed-tree-item');
        await (0, helper_js_1.waitForNone)('.navigator-authored-tree-item');
        await validateNavigationTree();
    }
    async function enableGroupByFolder() {
        await (0, helper_js_1.click)('[aria-label="More options"]');
        await (0, helper_js_1.click)(`[aria-label="${folderMenuText}, unchecked"]`);
        await (0, helper_js_1.waitForNone)('.soft-context-menu');
        await (0, helper_js_1.waitFor)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await validateNavigationTree();
    }
    async function disableGroupByFolder() {
        await (0, helper_js_1.click)('[aria-label="More options"]');
        await (0, helper_js_1.click)(`[aria-label="${folderMenuText}, checked"]`);
        await (0, helper_js_1.waitForNone)('.soft-context-menu');
        await (0, helper_js_1.waitForNone)('[aria-label="test/e2e/resources/sources, nw-folder"]:not(.is-from-source-map)');
        await validateNavigationTree();
    }
    (0, mocha_extensions_js_1.it)('can enable and disable group by authored/deployed', async () => {
        // Have the target load the page.
        await (0, helper_js_1.goToResource)(targetPage);
        await (0, sources_helpers_js_1.openSourcesPanel)();
        // Switch to grouped
        await enableGroupByAuthored();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), groupedExpectedTree);
        // Switch back
        await disableGroupByAuthored();
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), defaultExpectedTree);
        // And switch to grouped again...
        await enableGroupByAuthored();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), groupedExpectedTree);
    });
    (0, mocha_extensions_js_1.it)('can handle authored script in page and worker', async () => {
        // Have the target load the page.
        await (0, helper_js_1.goToResource)('sources/redundant-worker-sourcemap.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        // Switch to grouped
        await enableGroupByAuthored();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), groupedRedundantExpectedTree);
    });
    // The localhost domain is getting renamed, which breaks this test.
    // TODO(crbug.com/1327683): Enable this once the domain displays correctly.
    mocha_extensions_js_1.it.skip('[crbug.com/1327683] can load new page with group by authored/deployed', async () => {
        // Have the target load the non-sourcemapped page.
        await (0, helper_js_1.goToResource)('sources/multi-workers.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await validateNavigationTreeNoSourcemaps();
        // Switch to grouped
        await enableGroupByAuthored(true);
        // Reload the page.
        await (0, helper_js_1.goToResource)(targetPage);
        // Validate source tree
        await validateNavigationTree();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), groupedExpectedTree);
    });
    // Flaky on Mac
    mocha_extensions_js_1.it.skipOnPlatforms(['mac'], '[crbug.com/1481690] can mix group by authored/deployed and group by folder', async () => {
        // Have the target load the page.
        await (0, helper_js_1.goToResource)(targetPage);
        await (0, sources_helpers_js_1.openSourcesPanel)();
        // Switch to folderless
        await disableGroupByFolder();
        await (0, sources_helpers_js_1.expandSourceTreeItem)(workerFileSelectors(6).rootSelector);
        await (0, sources_helpers_js_1.expandSourceTreeItem)(workerFileSelectors(6).rootSelector + ' + ol > [aria-label="test/e2e/resources/sources, nw-folder"]');
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), folderlessExpectedTree);
        // Switch to group by authored, folderless
        await enableGroupByAuthored();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandSourceTreeItem)(workerFileSelectors(6).rootSelector);
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), folderlessGroupedExpectedTree);
        // Reenable folders
        await enableGroupByFolder();
        await (0, sources_helpers_js_1.expandSourceTreeItem)('[aria-label="test/e2e/resources/sources, nw-folder"]');
        await (0, sources_helpers_js_1.expandFileTree)(workerFileSelectors(6));
        chai_1.assert.deepEqual(await (0, sources_helpers_js_1.readSourcesTreeView)(), groupedExpectedTree);
    });
});
//# sourceMappingURL=authored-deployed-grouping_test.js.map