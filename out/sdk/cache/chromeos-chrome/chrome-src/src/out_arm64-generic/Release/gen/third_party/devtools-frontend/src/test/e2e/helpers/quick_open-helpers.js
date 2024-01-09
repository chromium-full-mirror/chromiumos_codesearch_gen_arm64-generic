"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeIntoQuickOpen = exports.getSelectedItemText = exports.closeDrawer = exports.getMenuItemTitleAtPosition = exports.getMenuItemAtPosition = exports.getAvailableSnippets = exports.showSnippetsAutocompletion = exports.openGoToLineQuickOpen = exports.runCommandWithQuickOpen = exports.openFileWithQuickOpen = exports.readQuickOpenResults = exports.openFileQuickOpen = exports.openCommandMenu = exports.QUICK_OPEN_SELECTOR = void 0;
const helper_js_1 = require("../../shared/helper.js");
const sources_helpers_js_1 = require("./sources-helpers.js");
exports.QUICK_OPEN_SELECTOR = '[aria-label="Quick open"]';
const QUICK_OPEN_ITEMS_SELECTOR = '.filtered-list-widget-item-wrapper';
const QUICK_OPEN_ITEM_TITLE_SELECTOR = '.filtered-list-widget-title';
const QUICK_OPEN_SELECTED_ITEM_SELECTOR = `${QUICK_OPEN_ITEMS_SELECTOR}.selected`;
const openCommandMenu = async () => {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    switch (helper_js_1.platform) {
        case 'mac':
            await frontend.keyboard.down('Meta');
            await frontend.keyboard.down('Shift');
            break;
        case 'linux':
        case 'win32':
            await frontend.keyboard.down('Control');
            await frontend.keyboard.down('Shift');
            break;
    }
    await frontend.keyboard.press('P');
    switch (helper_js_1.platform) {
        case 'mac':
            await frontend.keyboard.up('Meta');
            await frontend.keyboard.up('Shift');
            break;
        case 'linux':
        case 'win32':
            await frontend.keyboard.up('Control');
            await frontend.keyboard.up('Shift');
            break;
    }
    await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
};
exports.openCommandMenu = openCommandMenu;
const openFileQuickOpen = async () => {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.press('P');
    await frontend.keyboard.up(modifierKey);
    await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
};
exports.openFileQuickOpen = openFileQuickOpen;
async function readQuickOpenResults() {
    const items = await (0, helper_js_1.$$)('.filtered-list-widget-title');
    return await Promise.all(items.map(element => element.evaluate(el => el.textContent)));
}
exports.readQuickOpenResults = readQuickOpenResults;
const openFileWithQuickOpen = async (sourceFile, filePosition = 0) => {
    await (0, sources_helpers_js_1.waitForSourceFiles)("source-file-loaded" /* SourceFileEvents.SourceFileLoaded */, files => files.some(f => f.endsWith(sourceFile)), async () => {
        await (0, exports.openFileQuickOpen)();
        await typeIntoQuickOpen(sourceFile);
        const firstItem = await getMenuItemAtPosition(filePosition);
        await firstItem.click();
    });
};
exports.openFileWithQuickOpen = openFileWithQuickOpen;
async function runCommandWithQuickOpen(command) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, exports.openCommandMenu)();
    await frontend.keyboard.type(command);
    await frontend.keyboard.press('Enter');
}
exports.runCommandWithQuickOpen = runCommandWithQuickOpen;
const openGoToLineQuickOpen = async () => {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.keyboard.down('Control');
    await frontend.keyboard.press('G');
    await frontend.keyboard.up('Control');
    await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
};
exports.openGoToLineQuickOpen = openGoToLineQuickOpen;
const showSnippetsAutocompletion = async () => {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    // Clear the `>` character, as snippets use a `!` instead
    await frontend.keyboard.press('Backspace');
    await (0, helper_js_1.typeText)('!');
};
exports.showSnippetsAutocompletion = showSnippetsAutocompletion;
async function getAvailableSnippets() {
    const quickOpenElement = await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
    const snippetsDOMElements = await (0, helper_js_1.$$)(QUICK_OPEN_ITEMS_SELECTOR, quickOpenElement);
    const snippets = await Promise.all(snippetsDOMElements.map(elem => elem.evaluate(elem => elem.textContent)));
    return snippets;
}
exports.getAvailableSnippets = getAvailableSnippets;
async function getMenuItemAtPosition(position) {
    const quickOpenElement = await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
    await (0, helper_js_1.waitFor)(QUICK_OPEN_ITEM_TITLE_SELECTOR);
    const itemsHandles = await (0, helper_js_1.$$)(QUICK_OPEN_ITEMS_SELECTOR, quickOpenElement);
    const item = itemsHandles[position];
    if (!item) {
        assert.fail(`Quick open: could not find item at position: ${position}.`);
    }
    return item;
}
exports.getMenuItemAtPosition = getMenuItemAtPosition;
async function getMenuItemTitleAtPosition(position) {
    const quickOpenElement = await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
    await (0, helper_js_1.waitFor)(QUICK_OPEN_ITEM_TITLE_SELECTOR);
    const itemsHandles = await (0, helper_js_1.$$)(QUICK_OPEN_ITEM_TITLE_SELECTOR, quickOpenElement);
    const item = itemsHandles[position];
    if (!item) {
        assert.fail(`Quick open: could not find item at position: ${position}.`);
    }
    const title = await item.evaluate(elem => elem.textContent);
    return title;
}
exports.getMenuItemTitleAtPosition = getMenuItemTitleAtPosition;
const closeDrawer = async () => {
    await (0, helper_js_1.click)('[aria-label="Close drawer"]');
};
exports.closeDrawer = closeDrawer;
const getSelectedItemText = async () => {
    const quickOpenElement = await (0, helper_js_1.waitFor)(exports.QUICK_OPEN_SELECTOR);
    const selectedRow = await (0, helper_js_1.waitFor)(QUICK_OPEN_SELECTED_ITEM_SELECTOR, quickOpenElement);
    const textContent = await selectedRow.getProperty('textContent');
    if (!textContent) {
        assert.fail('Quick open: could not get selected item textContent');
    }
    return await textContent.jsonValue();
};
exports.getSelectedItemText = getSelectedItemText;
async function typeIntoQuickOpen(query, expectEmptyResults) {
    await (0, exports.openFileQuickOpen)();
    const prompt = await (0, helper_js_1.waitFor)('[aria-label="Quick open prompt"]');
    await prompt.type(query);
    if (expectEmptyResults) {
        await (0, helper_js_1.waitFor)('.filtered-list-widget :not(.hidden).not-found-text');
    }
    else {
        // Because each highlighted character is in its own div, we can count the highlighted
        // characters in one item to see that the list reflects the full query.
        const highlightSelector = new Array(query.length).fill('.highlight').join(' ~ ');
        await (0, helper_js_1.waitFor)('.filtered-list-widget-title ' + highlightSelector);
    }
}
exports.typeIntoQuickOpen = typeIntoQuickOpen;
//# sourceMappingURL=quick_open-helpers.js.map