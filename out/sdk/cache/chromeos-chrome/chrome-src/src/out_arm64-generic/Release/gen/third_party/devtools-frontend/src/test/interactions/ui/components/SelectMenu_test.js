"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const shared_js_1 = require("../../../../test/interactions/helpers/shared.js");
const helper_js_1 = require("../../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../../test/shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
async function getFocusedItemValue() {
    const focusedItem = await (0, helper_js_1.waitFor)('devtools-menu-item:focus');
    return await focusedItem.evaluate((item) => item.value);
}
async function getSelectMenu(options = {}) {
    await (0, shared_js_1.loadComponentDocExample)('select_menu/basic.html');
    if (options.placeholderSelector) {
        const placeholder = await (0, helper_js_1.waitFor)(options.placeholderSelector);
        return await (0, helper_js_1.waitFor)('devtools-select-menu', placeholder);
    }
    return await (0, helper_js_1.waitFor)('devtools-select-menu');
}
async function openMenu(options = {}) {
    const selectMenu = await getSelectMenu(options);
    const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
    await (0, helper_js_1.click)('button', {
        root: selectMenu,
    });
    await animationEndPromise;
    return await (0, helper_js_1.waitFor)('dialog[open]');
}
async function testScreenshotOnPlaceholder(placeholderSelector, screenshot) {
    const dialog = await (0, helper_js_1.waitFor)(placeholderSelector);
    const selectMenu = await (0, helper_js_1.waitFor)('devtools-select-menu', dialog);
    const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
    await (0, helper_js_1.click)('button', {
        root: selectMenu,
    });
    await animationEndPromise;
    await (0, screenshots_js_1.assertElementScreenshotUnchanged)(dialog, screenshot);
}
(0, mocha_extensions_js_1.describe)('SelectMenu', () => {
    (0, shared_js_1.preloadForCodeCoverage)('select_menu/basic.html');
    (0, mocha_extensions_js_1.it)('shows the button to open the menu', async () => {
        const selectMenu = await getSelectMenu();
        const button = await (0, helper_js_1.$)('button', selectMenu);
        chai_1.assert.isNotNull(button);
    });
    (0, mocha_extensions_js_1.it)('opens the menu when the button is clicked', async () => {
        const selectMenu = await getSelectMenu();
        const openDialog = await (0, helper_js_1.$)('dialog[open]', selectMenu);
        chai_1.assert.isNull(openDialog);
        await (0, helper_js_1.click)('button');
        await (0, helper_js_1.waitFor)('dialog[open]');
    });
    (0, mocha_extensions_js_1.it)('changes focus across menu\'s items using keyboard arrows', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // First, test navigation on a menu without groups.
        await openMenu();
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '2');
        await frontend.keyboard.press('ArrowUp');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('Escape');
        // Next, test navigation on a menu with groups.
        await openMenu({ placeholderSelector: '#place-holder-4' });
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('ArrowUp');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '2');
        await frontend.keyboard.press('ArrowUp');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
    });
    (0, mocha_extensions_js_1.it)('focuses the first item when pressing the right arrow key ', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // First, test navigation on a menu without groups.
        await openMenu();
        await frontend.keyboard.press('ArrowRight');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('Escape');
        // Next, test navigation on a menu with groups.
        await openMenu({ placeholderSelector: '#place-holder-4' });
        await frontend.keyboard.press('ArrowRight');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
    });
    (0, mocha_extensions_js_1.it)('focuses the last item when pressing the up arrow key ', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // First, test navigation on a menu without groups.
        await openMenu();
        await frontend.keyboard.press('ArrowUp');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '4');
        await frontend.keyboard.press('Escape');
        // Next, test navigation on a menu with groups.
        await openMenu({ placeholderSelector: '#place-holder-4' });
        await frontend.keyboard.press('ArrowUp');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '4');
    });
    (0, mocha_extensions_js_1.it)('changes focus across menu\'s items using the HOME and END keys', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // First, test navigation on a menu without groups.
        await openMenu();
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('End');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '4');
        await frontend.keyboard.press('Home');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('Escape');
        // Next, test navigation on a menu with groups.
        await openMenu({ placeholderSelector: '#place-holder-4' });
        await frontend.keyboard.press('ArrowDown');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
        await frontend.keyboard.press('End');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '4');
        await frontend.keyboard.press('Home');
        chai_1.assert.strictEqual(await getFocusedItemValue(), '1');
    });
    (0, mocha_extensions_js_1.it)('opens a menu using the UP and DOWN keys appropriately', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, shared_js_1.loadComponentDocExample)('select_menu/basic.html');
        // Focus the first select menu, which deploys downwards and open it using the
        // down arrow key.
        await frontend.keyboard.press('Tab');
        await frontend.keyboard.press('ArrowDown');
        await (0, helper_js_1.waitFor)('dialog[open]');
        await frontend.keyboard.press('Escape');
        const placeHolder1 = await (0, helper_js_1.waitFor)('#place-holder-1');
        await (0, helper_js_1.waitFor)('dialog:not([open])', placeHolder1);
        // Focus the second select menu, which deploys upwards and open it using the
        // up arrow key.
        await frontend.keyboard.press('Tab');
        await frontend.keyboard.press('ArrowUp');
        await (0, helper_js_1.waitFor)('dialog[open]');
    });
    (0, mocha_extensions_js_1.it)('can close a menu with ESC and open it again using the keyboard', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, shared_js_1.loadComponentDocExample)('select_menu/basic.html');
        // Focus the first select menu, which deploys downwards and open it using the
        // down arrow key.
        await frontend.keyboard.press('Tab');
        await frontend.keyboard.press('ArrowDown');
        const placeHolder1 = await (0, helper_js_1.waitFor)('#place-holder-1');
        await (0, helper_js_1.waitFor)('dialog[open]', placeHolder1);
        await frontend.keyboard.press('Escape');
        await (0, helper_js_1.waitFor)('dialog:not([open])', placeHolder1);
        // Wait until the focus is set on the button that opens the menu.
        await (0, helper_js_1.waitForFunction)(async () => {
            const activeElementHandle = await (0, helper_js_1.activeElement)();
            const activeElementName = await activeElementHandle.evaluate(e => e.tagName);
            return activeElementName === 'BUTTON';
        });
        await frontend.keyboard.press('ArrowDown');
        await (0, helper_js_1.waitFor)('dialog[open]');
    });
    (0, mocha_extensions_js_1.it)('triggers a selectmenuselected event when clicking an item from the menu', async () => {
        await openMenu();
        const item = await (0, helper_js_1.waitFor)('devtools-select-menu > devtools-menu-item:nth-child(1)');
        const itemText = await item.evaluate((itemText) => itemText.innerText.trim());
        await (0, helper_js_1.clickElement)(item);
        // Element containing the selected item's text.
        const result = await (0, helper_js_1.waitFor)('#place-holder-1 > div');
        const resultText = await result.evaluate((result) => result.innerText.trim());
        chai_1.assert.strictEqual(resultText, `Selected option: ${itemText}`);
    });
    (0, mocha_extensions_js_1.it)('triggers a selectmenuselected event using the enter key', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await openMenu();
        await frontend.keyboard.press('ArrowDown');
        const focusedItem = await (0, helper_js_1.waitFor)('devtools-menu-item:focus');
        const itemText = await focusedItem.evaluate((item) => item.innerText.trim());
        await frontend.keyboard.press('Enter');
        // Element containing the selected item's text.
        const result = await (0, helper_js_1.waitFor)('#place-holder-1 > div');
        const resultText = await result.evaluate((result) => result.innerText.trim());
        chai_1.assert.strictEqual(resultText, `Selected option: ${itemText}`);
    });
    (0, mocha_extensions_js_1.it)('closes the dialog by clicking it', async () => {
        const dialog = await openMenu();
        await (0, helper_js_1.clickElement)(dialog);
        await (0, helper_js_1.waitFor)('dialog:not([open])');
    });
    (0, mocha_extensions_js_1.it)('closes the dialog using the esc key', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await openMenu();
        await frontend.keyboard.press('Escape');
        await (0, helper_js_1.waitFor)('dialog:not([open])');
    });
    (0, mocha_extensions_js_1.it)('renders a menu in its correct position (top or bottom)', async () => {
        await getSelectMenu();
        // Open the first (regular) menu
        const placeHolder1 = await (0, helper_js_1.waitFor)('#place-holder-1');
        let animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await (0, helper_js_1.click)('button', {
            root: placeHolder1,
        });
        await animationEndPromise;
        const regularMenuWrapper = await (0, helper_js_1.waitFor)('devtools-select-menu', placeHolder1);
        const regularDialog = await (0, helper_js_1.waitFor)('dialog[open]', placeHolder1);
        const regularDialogTopBound = await regularDialog.evaluate((dialog) => dialog.getBoundingClientRect().top);
        const regularMenuWrapperBottomBound = await regularMenuWrapper.evaluate((menu) => menu.getBoundingClientRect().bottom);
        chai_1.assert.strictEqual(regularDialogTopBound, regularMenuWrapperBottomBound);
        // Close the first menu
        await (0, helper_js_1.clickElement)(regularDialog);
        await (0, helper_js_1.waitFor)('dialog:not([open])', placeHolder1);
        // Open the second (inverted) menu
        const placeHolder2 = await (0, helper_js_1.waitFor)('#place-holder-2');
        const invertedButton = await (0, helper_js_1.waitFor)('button', placeHolder2);
        animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await (0, helper_js_1.clickElement)(invertedButton);
        await animationEndPromise;
        const invertedMenuWrapper = await (0, helper_js_1.waitFor)('devtools-select-menu', placeHolder2);
        const invertedDialog = await (0, helper_js_1.waitFor)('dialog[open]', placeHolder2);
        const invertedDialogBottomBound = await invertedDialog.evaluate((dialog) => dialog.getBoundingClientRect().bottom);
        const invertedMenuWrapperTopBound = await invertedMenuWrapper.evaluate((menu) => menu.getBoundingClientRect().top);
        chai_1.assert.strictEqual(invertedDialogBottomBound, invertedMenuWrapperTopBound);
    });
    (0, mocha_extensions_js_1.it)('does not open on click if it\'s disabled', async () => {
        await getSelectMenu();
        const selectMenuWrapper = await (0, helper_js_1.waitFor)('#place-holder-6');
        const selectMenu = await (0, helper_js_1.waitFor)('devtools-select-menu', selectMenuWrapper);
        const selectMenuButton = await (0, helper_js_1.waitFor)('devtools-select-menu-button', selectMenu);
        await (0, helper_js_1.clickElement)(selectMenuButton);
        await (0, helper_js_1.waitForNone)('dialog[open]');
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders a menu with a connector', async () => {
        await (0, shared_js_1.loadComponentDocExample)('select_menu/basic.html');
        await testScreenshotOnPlaceholder('#place-holder-3', 'select_menu/select_menu_with_connector.png');
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders a menu with groups', async () => {
        await (0, shared_js_1.loadComponentDocExample)('select_menu/basic.html');
        await testScreenshotOnPlaceholder('#place-holder-4', 'select_menu/select_menu_with_groups.png');
    });
});
//# sourceMappingURL=SelectMenu_test.js.map