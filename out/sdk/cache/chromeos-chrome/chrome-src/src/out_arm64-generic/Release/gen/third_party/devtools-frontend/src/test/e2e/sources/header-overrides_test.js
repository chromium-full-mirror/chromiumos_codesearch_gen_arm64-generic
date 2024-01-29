"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const context_menu_helpers_js_1 = require("../helpers/context-menu-helpers.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const ENABLE_OVERRIDES_SELECTOR = '[aria-label="Select folder for overrides"]';
const OVERRIDES_FILESYSTEM_SELECTOR = '[aria-label="overrides, fs"]';
const FILE_TREE_HEADERS_FILE_SELECTOR = '[aria-label=".headers, file"] .tree-element-title';
const NETWORK_VIEW_SELECTOR = '.network-item-view';
const HEADERS_TAB_SELECTOR = '[aria-label=Headers][role="tab"]';
const ACTIVE_HEADERS_TAB_SELECTOR = '[aria-label=Headers][role=tab][aria-selected=true]';
const RESPONSE_HEADERS_SELECTOR = '[aria-label="Response Headers"]';
const HEADER_ROW_SELECTOR = '.row';
async function createHeaderOverride() {
    await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)(OVERRIDES_FILESYSTEM_SELECTOR, 'New file');
    await (0, helper_js_1.waitFor)('.being-edited');
    await (0, helper_js_1.typeText)('.headers\n');
    await (0, helper_js_1.click)('.add-block');
    await (0, helper_js_1.waitFor)('.editable.apply-to');
    await (0, helper_js_1.typeText)('*.html\n');
    await (0, helper_js_1.typeText)('aaa\n');
    await (0, helper_js_1.typeText)('bbb');
    const title = await (0, helper_js_1.waitFor)(FILE_TREE_HEADERS_FILE_SELECTOR);
    let labelText = await title?.evaluate(el => el.textContent);
    chai_1.assert.strictEqual(labelText, '*.headers');
    await (0, helper_js_1.pressKey)('Tab');
    await (0, helper_js_1.waitForFunction)(async () => {
        labelText = await title?.evaluate(el => el.textContent);
        return labelText === '.headers';
    });
}
async function openHeadersTab() {
    const networkView = await (0, helper_js_1.waitFor)(NETWORK_VIEW_SELECTOR);
    await (0, helper_js_1.click)(HEADERS_TAB_SELECTOR, {
        root: networkView,
    });
    await (0, helper_js_1.waitFor)(ACTIVE_HEADERS_TAB_SELECTOR, networkView);
}
async function editorTabHasPurpleDot() {
    const tabHeaderIcon = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab-icon devtools-icon');
    return await tabHeaderIcon?.evaluate(node => node.classList.contains('dot') && node.classList.contains('purple'));
}
async function fileTreeEntryIsSelectedAndHasPurpleDot() {
    const element = await (0, helper_js_1.activeElement)();
    const title = await element.evaluate(e => e.getAttribute('title')) || '';
    chai_1.assert.match(title, /\/test\/e2e\/resources\/network\/\.headers$/);
    const fileTreeIcon = await (0, helper_js_1.waitFor)('.navigator-file-tree-item devtools-icon', element);
    return await fileTreeIcon?.evaluate(node => node.classList.contains('dot') && node.classList.contains('purple'));
}
async function editHeaderItem(newValue, previousValue) {
    let focusedTextContent = await (0, helper_js_1.activeElementTextContent)();
    chai_1.assert.strictEqual(focusedTextContent, previousValue);
    await (0, helper_js_1.pasteText)(newValue);
    focusedTextContent = await (0, helper_js_1.activeElementTextContent)();
    chai_1.assert.strictEqual(focusedTextContent, newValue);
    await (0, helper_js_1.pressKey)('Tab');
}
(0, mocha_extensions_js_1.describe)('The Overrides Panel', async function () {
    this.timeout(10000);
    afterEach(async () => {
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.openOverridesSubPane)();
        await (0, helper_js_1.click)('[aria-label="Clear configuration"]');
        await (0, helper_js_1.waitFor)(ENABLE_OVERRIDES_SELECTOR);
    });
    // Skip until flake is fixed
    mocha_extensions_js_1.it.skip('[crbug.com/1432925]: can create header overrides', async () => {
        await (0, helper_js_1.goToResource)('empty.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.enableLocalOverrides)();
        await createHeaderOverride();
        await (0, helper_js_1.click)('#tab-network');
        await (0, helper_js_1.waitFor)('.network-log-grid');
        await (0, helper_js_1.goToResource)('network/hello.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        await (0, network_helpers_js_1.selectRequestByName)('hello.html');
        await openHeadersTab();
        const responseHeaderSection = await (0, helper_js_1.waitFor)(RESPONSE_HEADERS_SELECTOR);
        const row = await (0, helper_js_1.waitFor)(HEADER_ROW_SELECTOR, responseHeaderSection);
        chai_1.assert.deepStrictEqual(await (0, network_helpers_js_1.getTextFromHeadersRow)(row), ['aaa:', 'bbb']);
    });
    // Skip until flake is fixed
    mocha_extensions_js_1.it.skip('[crbug.com/1432925]: can override headers via network panel', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('hello.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        await (0, network_helpers_js_1.selectRequestByName)('hello.html');
        await openHeadersTab();
        await (0, helper_js_1.click)('.enable-editing');
        await (0, helper_js_1.click)('[aria-label="Select a folder to store override files in."] button');
        await (0, helper_js_1.click)('.add-header-button');
        await (0, helper_js_1.waitFor)('.row.header-overridden.header-editable');
        await editHeaderItem('foo', 'header-name');
        await editHeaderItem('bar', 'header value');
        await (0, helper_js_1.waitFor)('[title="Refresh the page/request for these changes to take effect"]');
        await (0, helper_js_1.click)('[title="Reveal header override definitions"]');
        chai_1.assert.isTrue(await editorTabHasPurpleDot());
        chai_1.assert.isTrue(await fileTreeEntryIsSelectedAndHasPurpleDot());
        await (0, network_helpers_js_1.navigateToNetworkTab)('hello.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        await (0, network_helpers_js_1.selectRequestByName)('hello.html');
        await openHeadersTab();
        const responseHeaderSection = await (0, helper_js_1.waitFor)(RESPONSE_HEADERS_SELECTOR);
        const row = await (0, helper_js_1.waitFor)('.row.header-overridden.header-editable', responseHeaderSection);
        chai_1.assert.deepStrictEqual(await (0, network_helpers_js_1.getTextFromHeadersRow)(row), ['foo:', 'bar']);
        await (0, helper_js_1.click)('[title="Reveal header override definitions"]');
        chai_1.assert.isTrue(await editorTabHasPurpleDot());
        chai_1.assert.isTrue(await fileTreeEntryIsSelectedAndHasPurpleDot());
        await (0, helper_js_1.goToResource)('pages/hello-world.html');
        await (0, helper_js_1.waitForFunction)(async () => {
            return (await editorTabHasPurpleDot()) === false && (await fileTreeEntryIsSelectedAndHasPurpleDot()) === false;
        });
    });
});
//# sourceMappingURL=header-overrides_test.js.map