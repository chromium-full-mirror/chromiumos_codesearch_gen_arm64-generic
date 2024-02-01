"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDistanceFromCategoryRow = exports.getSizesFromSelectedRow = exports.expandFocusedRow = exports.focusTableRow = exports.changeAllocationSampleViewViaDropdown = exports.changeViewViaDropdown = exports.waitForRetainerChain = exports.appearsInOrder = exports.waitUntilRetainerChainSatisfies = exports.assertRetainerChainSatisfies = exports.findSearchResult = exports.waitForSearchResultNumber = exports.setSearchFilter = exports.triggerLocalFindDialog = exports.setClassFilter = exports.getDataGridRows = exports.waitForNonEmptyHeapSnapshotData = exports.waitForHeapSnapshotData = exports.takeHeapSnapshot = exports.takeAllocationTimelineProfile = exports.takeAllocationProfile = exports.navigateToMemoryTab = exports.MEMORY_TAB_ID = void 0;
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const NEW_HEAP_SNAPSHOT_BUTTON = 'button[aria-label="Take heap snapshot"]';
const MEMORY_PANEL_CONTENT = 'div[aria-label="Memory panel"]';
const PROFILE_TREE_SIDEBAR = 'div.profiles-tree-sidebar';
exports.MEMORY_TAB_ID = '#tab-heap-profiler';
const CLASS_FILTER_INPUT = 'div[aria-placeholder="Class filter"]';
const SELECTED_RESULT = '#profile-views table.data tr.data-grid-data-grid-node.revealed.parent.selected';
async function navigateToMemoryTab() {
    await (0, helper_js_1.click)(exports.MEMORY_TAB_ID);
    await (0, helper_js_1.waitFor)(MEMORY_PANEL_CONTENT);
    await (0, helper_js_1.waitFor)(PROFILE_TREE_SIDEBAR);
}
exports.navigateToMemoryTab = navigateToMemoryTab;
async function takeAllocationProfile() {
    const radioButton = await (0, helper_js_1.$)('//label[text()="Allocation sampling"]', undefined, 'xpath');
    await (0, helper_js_1.clickElement)(radioButton);
    await (0, helper_js_1.click)('button[aria-label="Start heap profiling"]');
    await new Promise(r => setTimeout(r, 200));
    await (0, helper_js_1.click)('button[aria-label="Stop heap profiling"]');
    await (0, helper_js_1.waitForNone)('.heap-snapshot-sidebar-tree-item.wait');
    await (0, helper_js_1.waitFor)('.heap-snapshot-sidebar-tree-item.selected');
}
exports.takeAllocationProfile = takeAllocationProfile;
async function takeAllocationTimelineProfile({ recordStacks } = {
    recordStacks: false,
}) {
    const radioButton = await (0, helper_js_1.$)('//label[text()="Allocation instrumentation on timeline"]', undefined, 'xpath');
    await (0, helper_js_1.clickElement)(radioButton);
    if (recordStacks) {
        await (0, helper_js_1.click)('[title="Record stack traces of allocations (extra performance overhead)"]');
    }
    await (0, helper_js_1.click)('button[aria-label="Start recording heap profile"]');
    await new Promise(r => setTimeout(r, 200));
    await (0, helper_js_1.click)('button[aria-label="Stop recording heap profile"]');
    await (0, helper_js_1.waitForNone)('.heap-snapshot-sidebar-tree-item.wait');
    await (0, helper_js_1.waitFor)('.heap-snapshot-sidebar-tree-item.selected');
}
exports.takeAllocationTimelineProfile = takeAllocationTimelineProfile;
async function takeHeapSnapshot() {
    await (0, helper_js_1.click)(NEW_HEAP_SNAPSHOT_BUTTON);
    await (0, helper_js_1.waitForNone)('.heap-snapshot-sidebar-tree-item.wait');
    await (0, helper_js_1.waitFor)('.heap-snapshot-sidebar-tree-item.selected');
}
exports.takeHeapSnapshot = takeHeapSnapshot;
async function waitForHeapSnapshotData() {
    await (0, helper_js_1.waitFor)('#profile-views');
    await (0, helper_js_1.waitFor)('#profile-views .data-grid');
    const rowCountMatches = async () => {
        const rows = await getDataGridRows('#profile-views table.data');
        if (rows.length > 0) {
            return rows;
        }
        return undefined;
    };
    return await (0, helper_js_1.waitForFunction)(rowCountMatches);
}
exports.waitForHeapSnapshotData = waitForHeapSnapshotData;
async function waitForNonEmptyHeapSnapshotData() {
    const rows = await waitForHeapSnapshotData();
    chai_1.assert.isTrue(rows.length > 0);
}
exports.waitForNonEmptyHeapSnapshotData = waitForNonEmptyHeapSnapshotData;
async function getDataGridRows(selector) {
    // The grid in Memory Tab contains a tree
    const grid = await (0, helper_js_1.waitFor)(selector);
    return await (0, helper_js_1.$$)('.data-grid-data-grid-node', grid);
}
exports.getDataGridRows = getDataGridRows;
async function setClassFilter(text) {
    const classFilter = await (0, helper_js_1.waitFor)(CLASS_FILTER_INPUT);
    await classFilter.focus();
    void (0, helper_js_1.pasteText)(text);
}
exports.setClassFilter = setClassFilter;
async function triggerLocalFindDialog(frontend) {
    switch (helper_js_1.platform) {
        case 'mac':
            await frontend.keyboard.down('Meta');
            break;
        default:
            await frontend.keyboard.down('Control');
    }
    await frontend.keyboard.press('f');
    switch (helper_js_1.platform) {
        case 'mac':
            await frontend.keyboard.up('Meta');
            break;
        default:
            await frontend.keyboard.up('Control');
    }
}
exports.triggerLocalFindDialog = triggerLocalFindDialog;
async function setSearchFilter(text) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const grid = await (0, helper_js_1.waitFor)('#profile-views table.data');
    await grid.focus();
    await triggerLocalFindDialog(frontend);
    const SEARCH_QUERY = '[aria-label="Find"]';
    const inputElement = await (0, helper_js_1.waitFor)(SEARCH_QUERY);
    if (!inputElement) {
        chai_1.assert.fail('Unable to find search input field');
    }
    await inputElement.focus();
    await inputElement.type(text);
}
exports.setSearchFilter = setSearchFilter;
async function waitForSearchResultNumber(results) {
    const findMatch = async () => {
        const currentMatch = await (0, helper_js_1.waitFor)('label[for=\'search-input-field\']');
        const currentTextContent = currentMatch && await currentMatch.evaluate(el => el.textContent);
        if (currentTextContent && currentTextContent.endsWith(` ${results}`)) {
            return currentMatch;
        }
        return undefined;
    };
    return await (0, helper_js_1.waitForFunction)(findMatch);
}
exports.waitForSearchResultNumber = waitForSearchResultNumber;
async function findSearchResult(searchResult, pollIntrerval = 500) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const match = await (0, helper_js_1.waitFor)('#profile-views table.data');
    const matches = await (0, helper_js_1.waitFor)('label.search-results-matches');
    const matchesText = await matches.evaluate(async (element) => {
        return element.textContent;
    });
    if (matchesText === '1 of 1') {
        await (0, helper_js_1.waitForElementWithTextContent)(searchResult, match);
    }
    else {
        await (0, helper_js_1.waitForFunction)(async () => {
            const selectedBefore = await (0, helper_js_1.waitFor)(SELECTED_RESULT);
            await (0, helper_js_1.click)('[aria-label="Search next"]');
            // Wait until the click has taken effect by checking that the selected
            // result has changed. This is done to prevent the assertion afterwards
            // from happening before the next result is fully loaded.
            await (0, helper_js_1.waitForFunction)(async () => {
                const selectedAfter = await (0, helper_js_1.waitFor)(SELECTED_RESULT);
                return await frontend.evaluate((b, a) => {
                    return b !== a;
                }, selectedBefore, selectedAfter);
            });
            const result = Promise.race([
                (0, helper_js_1.waitForElementWithTextContent)(searchResult, match),
                new Promise(resolve => {
                    setTimeout(resolve, pollIntrerval, false);
                }),
            ]);
            return result;
        });
    }
}
exports.findSearchResult = findSearchResult;
const normalizRetainerName = (retainerName) => {
    // Retainers starting with `Window /` might have host information in their
    // name, including the port, so we need to strip that. We can't distinguish
    // Window from Window / either, because on Mac it is often just Window.
    if (retainerName.startsWith('Window /')) {
        return 'Window';
    }
    // Retainers including double-colons :: are names from the C++ implementation
    // exposed through V8's gn arg `cppgc_enable_object_names`; these should be
    // considered implementation details, so we normalize them.
    if (retainerName.includes('::')) {
        if (retainerName.startsWith('Detached')) {
            return 'Detached InternalNode';
        }
        return 'InternalNode';
    }
    return retainerName;
};
async function assertRetainerChainSatisfies(p) {
    // Give some time for the expansion to finish.
    const retainerGridElements = await getDataGridRows('.retaining-paths-view table.data');
    const retainerChain = [];
    for (let i = 0; i < retainerGridElements.length; ++i) {
        const retainer = retainerGridElements[i];
        const propertyName = await retainer.$eval('span.property-name', el => el.textContent);
        const rawRetainerClassName = await retainer.$eval('span.value', el => el.textContent);
        if (!propertyName) {
            chai_1.assert.fail('Could not get retainer name');
        }
        if (!rawRetainerClassName) {
            chai_1.assert.fail('Could not get retainer value');
        }
        const retainerClassName = normalizRetainerName(rawRetainerClassName);
        retainerChain.push({ propertyName, retainerClassName });
        if (await retainer.evaluate(el => !el.classList.contains('expanded'))) {
            // Only follow the shortest retainer chain to the end. This relies on
            // the retainer view behavior that auto-expands the shortest retaining
            // chain.
            break;
        }
    }
    return p(retainerChain);
}
exports.assertRetainerChainSatisfies = assertRetainerChainSatisfies;
async function waitUntilRetainerChainSatisfies(p) {
    await (0, helper_js_1.waitForFunction)(assertRetainerChainSatisfies.bind(null, p));
}
exports.waitUntilRetainerChainSatisfies = waitUntilRetainerChainSatisfies;
function appearsInOrder(targetArray, inputArray) {
    let i = 0;
    let j = 0;
    if (inputArray.length > targetArray.length) {
        return false;
    }
    if (inputArray === targetArray) {
        return true;
    }
    while (i < targetArray.length && j < inputArray.length) {
        if (inputArray[j] === targetArray[i]) {
            j++;
        }
        i++;
    }
    if (j === inputArray.length) {
        return true;
    }
    return false;
}
exports.appearsInOrder = appearsInOrder;
async function waitForRetainerChain(expectedRetainers) {
    await (0, helper_js_1.waitForFunction)(assertRetainerChainSatisfies.bind(null, retainerChain => {
        const actual = retainerChain.map(e => e.retainerClassName);
        return appearsInOrder(actual, expectedRetainers);
    }));
}
exports.waitForRetainerChain = waitForRetainerChain;
async function changeViewViaDropdown(newPerspective) {
    const perspectiveDropdownSelector = 'select[aria-label="Perspective"]';
    const dropdown = await (0, helper_js_1.waitFor)(perspectiveDropdownSelector);
    const optionToSelect = await (0, helper_js_1.waitForElementWithTextContent)(newPerspective, dropdown);
    const optionValue = await optionToSelect.evaluate(opt => opt.getAttribute('value'));
    if (!optionValue) {
        throw new Error(`Could not find heap snapshot perspective option: ${newPerspective}`);
    }
    await dropdown.select(optionValue);
}
exports.changeViewViaDropdown = changeViewViaDropdown;
async function changeAllocationSampleViewViaDropdown(newPerspective) {
    const perspectiveDropdownSelector = 'select[aria-label="Profile view mode"]';
    const dropdown = await (0, helper_js_1.waitFor)(perspectiveDropdownSelector);
    const optionToSelect = await (0, helper_js_1.waitForElementWithTextContent)(newPerspective, dropdown);
    const optionValue = await optionToSelect.evaluate(opt => opt.getAttribute('value'));
    if (!optionValue) {
        throw new Error(`Could not find heap snapshot perspective option: ${newPerspective}`);
    }
    await dropdown.select(optionValue);
}
exports.changeAllocationSampleViewViaDropdown = changeAllocationSampleViewViaDropdown;
async function focusTableRow(text) {
    const row = await (0, helper_js_1.waitFor)(`//span[text()="${text}"]/ancestor::tr`, undefined, undefined, 'xpath');
    // Click in a numeric cell, to avoid accidentally clicking a link.
    const cell = await (0, helper_js_1.waitFor)('.numeric-column', row);
    await (0, helper_js_1.clickElement)(cell);
}
exports.focusTableRow = focusTableRow;
async function expandFocusedRow() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.keyboard.press('ArrowRight');
    await (0, helper_js_1.waitFor)('.selected.data-grid-data-grid-node.expanded');
}
exports.expandFocusedRow = expandFocusedRow;
async function getSizesFromSelectedRow() {
    const row = await (0, helper_js_1.waitFor)('.selected.data-grid-data-grid-node');
    const numericData = await (0, helper_js_1.$$)('.numeric-column>.profile-multiple-values>span', row);
    chai_1.assert.strictEqual(numericData.length, 4);
    function readNumber(e) {
        return parseInt(e.textContent.replaceAll('\xa0', ''), 10);
    }
    const shallowSize = await numericData[0].evaluate(readNumber);
    const retainedSize = await numericData[2].evaluate(readNumber);
    chai_1.assert.isTrue(retainedSize >= shallowSize);
    return { shallowSize, retainedSize };
}
exports.getSizesFromSelectedRow = getSizesFromSelectedRow;
async function getDistanceFromCategoryRow(text) {
    const row = await (0, helper_js_1.waitFor)(`//td[text()="${text}"]/ancestor::tr`, undefined, undefined, 'xpath');
    const numericColumns = await (0, helper_js_1.$$)('.numeric-column', row);
    return await numericColumns[0].evaluate(e => parseInt(e.textContent, 10));
}
exports.getDistanceFromCategoryRow = getDistanceFromCategoryRow;
//# sourceMappingURL=memory-helpers.js.map