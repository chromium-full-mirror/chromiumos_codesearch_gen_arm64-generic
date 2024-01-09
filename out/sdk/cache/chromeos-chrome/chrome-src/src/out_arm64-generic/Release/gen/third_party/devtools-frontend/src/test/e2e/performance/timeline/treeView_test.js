"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../shared/mocha-extensions.js");
const performance_helpers_js_1 = require("../../helpers/performance-helpers.js");
async function expandAndCheckActivityTree(frontend, expectedActivities) {
    let index = 0;
    let parentItem = undefined;
    let result = false;
    do {
        result = await (0, helper_js_1.waitForFunction)(async () => {
            if (parentItem) {
                parentItem.evaluate(e => e.scrollIntoView());
            }
            const treeItem = await (0, helper_js_1.$)('.data-grid-data-grid-node.selected.revealed .activity-name');
            if (!treeItem) {
                return false;
            }
            const treeItemText = await treeItem.evaluate(el => el.innerText);
            if (expectedActivities[index] === treeItemText) {
                parentItem = treeItem;
                return true;
            }
            return false;
        });
        index++;
        await frontend.keyboard.press('ArrowRight');
        await frontend.keyboard.press('ArrowDown');
    } while (index < expectedActivities.length);
    return result;
}
async function validateTreeParentActivities(expectedActivities) {
    return await (0, helper_js_1.waitForFunction)(async () => {
        let result = true;
        const treeItems = await (0, helper_js_1.$$)('.data-grid-data-grid-node.parent.revealed .activity-name');
        if (!treeItems || expectedActivities.length !== treeItems.length) {
            return false;
        }
        for (let i = 0; i < treeItems.length; i++) {
            const treeItem = treeItems[i];
            const treeItemText = await treeItem.evaluate(el => el.innerText);
            if (expectedActivities.filter(el => el === treeItemText).length === 0) {
                result = false;
                break;
            }
        }
        return result;
    });
}
(0, mocha_extensions_js_1.describe)('The Performance tool, Bottom-up panel', async function () {
    // These tests have lots of waiting which might take more time to execute
    if (this.timeout() !== 0) {
        this.timeout(20000);
    }
    beforeEach(async () => {
        await (0, helper_js_1.step)('navigate to the Performance tab and upload performance profile', async () => {
            await (0, performance_helpers_js_1.navigateToPerformanceTab)('empty');
            const uploadProfileHandle = await (0, helper_js_1.waitFor)('input[type=file]');
            chai_1.assert.isNotNull(uploadProfileHandle, 'unable to upload the performance profile');
            await uploadProfileHandle.uploadFile('test/e2e/resources/performance/timeline/treeView-test-trace.json');
        });
    });
    (0, mocha_extensions_js_1.it)('match case button is working as expected', async () => {
        const expectedActivities = ['h2', 'H2', 'h2_with_suffix'];
        await (0, helper_js_1.step)('navigate to the Bottom Up tab', async () => {
            await (0, performance_helpers_js_1.navigateToBottomUpTab)();
        });
        await (0, helper_js_1.step)('click on the "Match Case" button and validate activities', async () => {
            const timelineTree = await (0, helper_js_1.$)('.timeline-tree-view');
            const rootActivity = await (0, helper_js_1.waitForElementWithTextContent)(expectedActivities[0], timelineTree);
            if (!rootActivity) {
                chai_1.assert.fail(`Could not find ${expectedActivities[0]} in frontend.`);
            }
            await (0, performance_helpers_js_1.toggleCaseSensitive)();
            await (0, performance_helpers_js_1.setFilter)('H2');
            chai_1.assert.isTrue(await validateTreeParentActivities(['H2']), 'Tree does not contain expected activities');
        });
    });
    (0, mocha_extensions_js_1.it)('regex button is working as expected', async () => {
        const expectedActivities = ['h2', 'H2', 'h2_with_suffix'];
        await (0, helper_js_1.step)('navigate to the Bottom Up tab', async () => {
            await (0, performance_helpers_js_1.navigateToBottomUpTab)();
        });
        await (0, helper_js_1.step)('click on the "Regex Button" and validate activities', async () => {
            const timelineTree = await (0, helper_js_1.$)('.timeline-tree-view');
            const rootActivity = await (0, helper_js_1.waitForElementWithTextContent)(expectedActivities[0], timelineTree);
            if (!rootActivity) {
                chai_1.assert.fail(`Could not find ${expectedActivities[0]} in frontend.`);
            }
            await (0, performance_helpers_js_1.toggleRegExButtonBottomUp)();
            await (0, performance_helpers_js_1.setFilter)('h2$');
            chai_1.assert.isTrue(await validateTreeParentActivities(['h2', 'H2']), 'Tree does not contain expected activities');
        });
    });
    (0, mocha_extensions_js_1.it)('match whole word is working as expected', async () => {
        const expectedActivities = ['h2', 'H2'];
        await (0, helper_js_1.step)('navigate to the Bottom Up tab', async () => {
            await (0, performance_helpers_js_1.navigateToBottomUpTab)();
        });
        await (0, helper_js_1.step)('click on the "Match whole word" and validate activities', async () => {
            const timelineTree = await (0, helper_js_1.$)('.timeline-tree-view');
            const rootActivity = await (0, helper_js_1.waitForElementWithTextContent)(expectedActivities[0], timelineTree);
            if (!rootActivity) {
                chai_1.assert.fail(`Could not find ${expectedActivities[0]} in frontend.`);
            }
            await (0, performance_helpers_js_1.toggleMatchWholeWordButtonBottomUp)();
            await (0, performance_helpers_js_1.setFilter)('function');
            chai_1.assert.isTrue(await validateTreeParentActivities(['Function Call']), 'Tree does not contain expected activities');
        });
    });
    (0, mocha_extensions_js_1.it)('simple filter is working as expected', async () => {
        const expectedActivities = ['h2', 'H2', 'h2_with_suffix'];
        await (0, helper_js_1.step)('navigate to the Bottom Up tab', async () => {
            await (0, performance_helpers_js_1.navigateToBottomUpTab)();
        });
        await (0, helper_js_1.step)('validate activities', async () => {
            const timelineTree = await (0, helper_js_1.$)('.timeline-tree-view');
            const rootActivity = await (0, helper_js_1.waitForElementWithTextContent)(expectedActivities[0], timelineTree);
            if (!rootActivity) {
                chai_1.assert.fail(`Could not find ${expectedActivities[0]} in frontend.`);
            }
            await (0, performance_helpers_js_1.setFilter)('h2');
            chai_1.assert.isTrue(await validateTreeParentActivities(expectedActivities), 'Tree does not contain expected activities');
        });
    });
    (0, mocha_extensions_js_1.it)('filtered results keep context', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const expectedActivities = ['h2_with_suffix', 'container2', 'Function Call', 'Timer Fired'];
        await (0, helper_js_1.step)('navigate to the Bottom Up tab', async () => {
            await (0, performance_helpers_js_1.navigateToBottomUpTab)();
        });
        await (0, helper_js_1.step)('validate that top level activities have the right context', async () => {
            const timelineTree = await (0, helper_js_1.$)('.timeline-tree-view');
            await (0, performance_helpers_js_1.toggleRegExButtonBottomUp)();
            await (0, performance_helpers_js_1.toggleCaseSensitive)();
            await (0, performance_helpers_js_1.setFilter)('h2_');
            const rootActivity = await (0, helper_js_1.waitForElementWithTextContent)(expectedActivities[0], timelineTree);
            if (!rootActivity) {
                chai_1.assert.fail(`Could not find ${expectedActivities[0]} in frontend.`);
            }
            await rootActivity.click();
            chai_1.assert.isTrue(await expandAndCheckActivityTree(frontend, expectedActivities), 'Tree does not contain expected activities');
        });
    });
});
//# sourceMappingURL=treeView_test.js.map