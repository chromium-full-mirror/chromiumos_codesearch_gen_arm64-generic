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
const quick_open_helpers_js_1 = require("../helpers/quick_open-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const OVERRIDES_FILESYSTEM_SELECTOR = '[aria-label="overrides, fs"]';
async function waitForOverrideContentMenuItemIsEnabled(requestName) {
    await (0, helper_js_1.waitForFunction)(async () => {
        await (0, network_helpers_js_1.selectRequestByName)(requestName, { button: 'right' });
        const menuItem = await (0, helper_js_1.waitForAria)('Override content');
        const isDisabled = await (0, helper_js_1.hasClass)(menuItem, 'soft-context-menu-disabled');
        if (!isDisabled) {
            return true;
        }
        await (0, helper_js_1.pressKey)('Escape');
        return false;
    });
}
(0, mocha_extensions_js_1.describe)('Overrides panel', async function () {
    afterEach(async () => {
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, helper_js_1.click)('[aria-label="Overrides"]');
        await (0, helper_js_1.click)('[aria-label="Clear configuration"]');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.ENABLE_OVERRIDES_SELECTOR);
    });
    (0, mocha_extensions_js_1.it)('can create multiple new files', async () => {
        await (0, helper_js_1.goToResource)('empty.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.enableLocalOverrides)();
        await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)(OVERRIDES_FILESYSTEM_SELECTOR, 'New file');
        await (0, helper_js_1.waitFor)('[aria-label="NewFile, file"]');
        await (0, helper_js_1.typeText)('foo\n');
        await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)(OVERRIDES_FILESYSTEM_SELECTOR, 'New file');
        await (0, helper_js_1.waitFor)('[aria-label="NewFile, file"]');
        await (0, helper_js_1.typeText)('bar\n');
        await (0, helper_js_1.waitFor)('[aria-label="bar, file"]');
        const treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
        const treeItemNames = await Promise.all(treeItems.map(x => x.evaluate(y => y.textContent)));
        chai_1.assert.deepEqual(treeItemNames, ['bar', 'foo']);
    });
    (0, mocha_extensions_js_1.it)('can save fetch request for overrides via network panel', async () => {
        await (0, helper_js_1.step)('enable overrides', async () => {
            await (0, helper_js_1.goToResource)('network/fetch-json.html');
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, sources_helpers_js_1.enableLocalOverrides)();
        });
        await (0, helper_js_1.step)('can create content overrides via request\'s context menu', async () => {
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
        });
        await (0, helper_js_1.step)('should not show fetch request in the Sources > Page Tree', async () => {
            const pageTree = await (0, helper_js_1.waitForAria)('Page');
            await pageTree.click();
            const treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
            const treeItemNames = (await Promise.all(treeItems.map(x => x.evaluate(y => y.textContent))));
            chai_1.assert.isFalse(treeItemNames?.includes('coffees.json'));
        });
        await (0, helper_js_1.step)('should show overidden fetch request in Quick Open', async () => {
            await (0, quick_open_helpers_js_1.typeIntoQuickOpen)('coffees.json');
            const list = await (0, quick_open_helpers_js_1.readQuickOpenResults)();
            chai_1.assert.deepEqual(list, ['coffees.json']);
        });
    });
    (0, mocha_extensions_js_1.it)('can save XHR request for overrides via network panel', async () => {
        await (0, helper_js_1.step)('enable overrides', async () => {
            await (0, helper_js_1.goToResource)('network/xhr-json.html');
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, sources_helpers_js_1.enableLocalOverrides)();
        });
        await (0, helper_js_1.step)('can create content overrides via request\'s context menu', async () => {
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
        });
        await (0, helper_js_1.step)('should not show xhr request in the Sources > Page Tree', async () => {
            const pageTree = await (0, helper_js_1.waitForAria)('Page');
            await pageTree.click();
            const treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
            const treeItemNames = (await Promise.all(treeItems.map(x => x.evaluate(y => y.textContent))));
            chai_1.assert.isFalse(treeItemNames?.includes('coffees.json'));
        });
        await (0, helper_js_1.step)('should show overidden xhr request in Quick Open', async () => {
            await (0, quick_open_helpers_js_1.typeIntoQuickOpen)('coffees.json');
            const list = await (0, quick_open_helpers_js_1.readQuickOpenResults)();
            chai_1.assert.deepEqual(list, ['coffees.json']);
        });
    });
    (0, mocha_extensions_js_1.it)('can always override content via the Network panel', async () => {
        await (0, helper_js_1.step)('can override without local overrides folder set up', async () => {
            await (0, helper_js_1.goToResource)('network/fetch-json.html');
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            // File permission pop up
            const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
            await (0, helper_js_1.click)('.infobar-main-row .infobar-button', { root: infoBar });
            // Open & close the file in the Sources panel
            const fileTab = await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
            chai_1.assert.isNotNull(fileTab);
            await (0, helper_js_1.click)('aria/Close coffees.json');
        });
        await (0, helper_js_1.step)('can open the overridden file in the Sources panel if it exists', async () => {
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            // No file permission pop up
            const popups = await (0, helper_js_1.$$)('aria/Select a folder to store override files in.', undefined, 'aria');
            chai_1.assert.strictEqual(popups.length, 0);
            // Open & close the file in the Sources panel
            const fileTab = await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
            chai_1.assert.isNotNull(fileTab);
            await (0, helper_js_1.click)('aria/Close coffees.json');
        });
        await (0, helper_js_1.step)('can enable the local overrides setting and override content', async () => {
            // Disable Local overrides
            await (0, helper_js_1.click)('aria/Enable Local Overrides');
            // Navigate to files
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            // No file permission pop up
            const popups = await (0, helper_js_1.$$)('aria/Select a folder to store override files in.', undefined, 'aria');
            chai_1.assert.strictEqual(popups.length, 0);
            // Open & close the file in the Sources panel
            const fileTab = await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
            chai_1.assert.isNotNull(fileTab);
            await (0, helper_js_1.click)('aria/Close coffees.json');
        });
    });
    (0, mocha_extensions_js_1.it)('overrides indicator on the Network panel title', async () => {
        await (0, helper_js_1.step)('no indicator when overrides setting is disabled', async () => {
            await (0, helper_js_1.goToResource)('network/fetch-json.html');
            await (0, network_helpers_js_1.openNetworkTab)();
            const networkPanel = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected');
            const icons = await networkPanel.$$('.tabbed-pane-header-tab-icon');
            chai_1.assert.strictEqual(icons.length, 0);
        });
        await (0, helper_js_1.step)('shows indicator when overrides setting is enabled', async () => {
            // Set up & enable overrides
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            // File permission pop up
            const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
            await (0, helper_js_1.click)('.infobar-main-row .infobar-button', { root: infoBar });
            await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
            await (0, network_helpers_js_1.openNetworkTab)();
            await (0, network_helpers_js_1.setCacheDisabled)(false);
            const networkPanel = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected');
            const icons = await networkPanel.$$('.tabbed-pane-header-tab-icon');
            const iconTitleElement = await icons[0].$('aria/Requests may be overridden locally, see the Sources panel');
            chai_1.assert.strictEqual(icons.length, 1);
            chai_1.assert.isNotNull(iconTitleElement);
        });
        await (0, helper_js_1.step)('no indicator after clearing overrides configuration', async () => {
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
            await (0, helper_js_1.click)('aria/Clear configuration');
            await (0, network_helpers_js_1.openNetworkTab)();
            await (0, network_helpers_js_1.setCacheDisabled)(false);
            const networkPanel = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected');
            const icons = await networkPanel.$$('.tabbed-pane-header-tab-icon');
            chai_1.assert.strictEqual(icons.length, 0);
        });
        await (0, helper_js_1.step)('shows indicator after enabling override in Overrides tab', async () => {
            await (0, helper_js_1.click)('aria/Sources');
            await (0, helper_js_1.click)('aria/Select folder for overrides');
            await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)(OVERRIDES_FILESYSTEM_SELECTOR, 'New file');
            await (0, helper_js_1.waitFor)('[aria-label="NewFile, file"]');
            await (0, network_helpers_js_1.openNetworkTab)();
            await (0, network_helpers_js_1.setCacheDisabled)(false);
            const networkPanel = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected');
            const icons = await networkPanel.$$('.tabbed-pane-header-tab-icon');
            const iconTitleElement = await icons[0].$('aria/Requests may be overridden locally, see the Sources panel');
            chai_1.assert.strictEqual(icons.length, 1);
            chai_1.assert.isNotNull(iconTitleElement);
        });
    });
    (0, mocha_extensions_js_1.it)('can show all overrides in the Sources panel', async () => {
        await (0, helper_js_1.step)('when overrides setting is disabled', async () => {
            await (0, helper_js_1.goToResource)('network/fetch-json.html');
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Show all overrides');
            // In the Sources panel
            await (0, helper_js_1.waitForAria)('Select folder for overrides');
            const assertElements = await (0, helper_js_1.$$)('Select folder for overrides', undefined, 'aria');
            chai_1.assert.strictEqual(assertElements.length, 1);
        });
        await (0, helper_js_1.step)('when overrides setting is enabled', async () => {
            // Set up & enable overrides in the Sources panel
            await (0, helper_js_1.click)('aria/Select folder for overrides');
            await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)(OVERRIDES_FILESYSTEM_SELECTOR, 'New file');
            await (0, network_helpers_js_1.openNetworkTab)();
            await (0, network_helpers_js_1.selectRequestByName)('coffees.json', { button: 'right' });
            await (0, helper_js_1.click)('aria/Show all overrides');
            // In the Sources panel
            await (0, helper_js_1.waitForAria)('Enable Local Overrides');
            const assertElements = await (0, helper_js_1.$$)('Enable Local Overrides', undefined, 'aria');
            chai_1.assert.strictEqual(assertElements.length, 1);
        });
    });
    (0, mocha_extensions_js_1.it)('has correct context menu for overrides files', async () => {
        await (0, helper_js_1.goToResource)('network/fetch-json.html');
        await (0, network_helpers_js_1.openNetworkTab)();
        await waitForOverrideContentMenuItemIsEnabled('coffees.json');
        await (0, helper_js_1.click)('aria/Override content');
        // File permission pop up
        const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
        await (0, helper_js_1.click)('.infobar-main-row .infobar-button', { root: infoBar });
        // Open the file in the Sources panel
        const fileTab = await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
        await fileTab.click({ button: 'right' });
        const assertShowAllElements = await (0, helper_js_1.$$)('Show all overrides', undefined, 'aria');
        const assertAddFolderElements = await (0, helper_js_1.$$)('Add folder to workspace', undefined, 'aria');
        const assertOverrideContentElements = await (0, helper_js_1.$$)('Override content', undefined, 'aria');
        const assertOpenInElements = await (0, helper_js_1.$$)('Open in containing folder', undefined, 'aria');
        chai_1.assert.strictEqual(assertShowAllElements.length, 0);
        chai_1.assert.strictEqual(assertAddFolderElements.length, 0);
        chai_1.assert.strictEqual(assertOverrideContentElements.length, 0);
        chai_1.assert.strictEqual(assertOpenInElements.length, 1);
    });
    (0, mocha_extensions_js_1.it)('has correct context menu for main overrides folder', async () => {
        await (0, helper_js_1.goToResource)('network/fetch-json.html');
        await (0, network_helpers_js_1.openNetworkTab)();
        await waitForOverrideContentMenuItemIsEnabled('coffees.json');
        await (0, helper_js_1.click)('aria/Override content');
        // File permission pop up
        const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
        await (0, helper_js_1.click)('.infobar-main-row .infobar-button', { root: infoBar });
        // Open the main folder in the Sources panel
        await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
        const folderTab = await (0, helper_js_1.waitFor)('.navigator-folder-tree-item');
        await folderTab.click({ button: 'right' });
        const assertAddFolderElements = await (0, helper_js_1.$$)('Add folder to workspace', undefined, 'aria');
        const assertRemoveFolderElements = await (0, helper_js_1.$$)('Remove folder from workspace', undefined, 'aria');
        const assertDeleteElements = await (0, helper_js_1.$$)('Delete', undefined, 'aria');
        chai_1.assert.strictEqual(assertAddFolderElements.length, 0);
        chai_1.assert.strictEqual(assertRemoveFolderElements.length, 0);
        chai_1.assert.strictEqual(assertDeleteElements.length, 0);
    });
    (0, mocha_extensions_js_1.it)('has correct context menu for sub overrides folder', async () => {
        await (0, helper_js_1.goToResource)('network/fetch-json.html');
        await (0, network_helpers_js_1.openNetworkTab)();
        await waitForOverrideContentMenuItemIsEnabled('coffees.json');
        await (0, helper_js_1.click)('aria/Override content');
        // File permission pop up
        const infoBar = await (0, helper_js_1.waitForAria)('Select a folder to store override files in.');
        await (0, helper_js_1.click)('.infobar-main-row .infobar-button', { root: infoBar });
        // Open the sub folder in the Sources panel
        await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
        const subfolderTab = await (0, helper_js_1.waitFor)('[role="group"] > .navigator-folder-tree-item');
        await subfolderTab.click({ button: 'right' });
        const assertAddFolderElements = await (0, helper_js_1.$$)('Add folder to workspace', undefined, 'aria');
        const assertRemoveFolderElements = await (0, helper_js_1.$$)('Remove folder from workspace', undefined, 'aria');
        const assertDeleteElements = await (0, helper_js_1.$$)('Delete', undefined, 'aria');
        chai_1.assert.strictEqual(assertAddFolderElements.length, 0);
        chai_1.assert.strictEqual(assertRemoveFolderElements.length, 0);
        chai_1.assert.strictEqual(assertDeleteElements.length, 1);
    });
    (0, mocha_extensions_js_1.it)('show redirect dialog when override content of source mapped js file', async () => {
        await (0, helper_js_1.goToResource)('sources/sourcemap-origin.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.enableLocalOverrides)();
        await (0, network_helpers_js_1.openNetworkTab)();
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(4);
        await waitForOverrideContentMenuItemIsEnabled('sourcemap-origin.min.js');
        await (0, helper_js_1.click)('aria/Open in Sources panel');
        // Actual file > Has override content
        const file = await (0, helper_js_1.waitFor)('[aria-label="sourcemap-origin.min.js"]');
        await file.click({ button: 'right' });
        await (0, helper_js_1.click)('aria/Close');
        // Source mapped file > Show redirect confirmation dialog
        const mappedfile = await (0, helper_js_1.waitFor)('[aria-label="sourcemap-origin.js, file"]');
        await mappedfile.click({ button: 'right' });
        await (0, helper_js_1.click)('aria/Override content');
        const p = await (0, helper_js_1.waitFor)('.dimmed-pane');
        const dialog = await p.waitForSelector('>>>> [role="dialog"]');
        const okButton = await dialog?.waitForSelector('>>> .primary-button');
        await okButton?.click();
        await (0, helper_js_1.waitFor)('[aria-label="Close sourcemap-origin.min.js"]');
    });
    (0, mocha_extensions_js_1.it)('show redirect dialog when override content of source mapped css file', async () => {
        await (0, helper_js_1.goToResource)('sources/sourcemap-origin.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.enableLocalOverrides)();
        await (0, network_helpers_js_1.openNetworkTab)();
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(4);
        await waitForOverrideContentMenuItemIsEnabled('sourcemap-origin.css');
        await (0, helper_js_1.click)('aria/Open in Sources panel');
        // Actual file > Has override content
        const file = await (0, helper_js_1.waitFor)('[aria-label="sourcemap-origin.css"]');
        await file.click({ button: 'right' });
        await (0, helper_js_1.click)('aria/Close');
        // Source mapped file > Show redirect confirmation dialog
        const mappedfile = await (0, helper_js_1.waitFor)('[aria-label="sourcemap-origin.scss, file"]');
        await mappedfile.click({ button: 'right' });
        await (0, helper_js_1.click)('aria/Override content');
        const p = await (0, helper_js_1.waitFor)('.dimmed-pane');
        const dialog = await p.waitForSelector('>>>> [role="dialog"]');
        const okButton = await dialog?.waitForSelector('>>> .primary-button');
        await okButton?.click();
        await (0, helper_js_1.waitFor)('[aria-label="Close sourcemap-origin.css"]');
    });
});
(0, mocha_extensions_js_1.describe)('Overrides panel', () => {
    (0, mocha_extensions_js_1.it)('appends correct overrides context menu for Sources > Page file', async () => {
        await (0, helper_js_1.goToResource)('elements/elements-panel-styles.html');
        await (0, network_helpers_js_1.openNetworkTab)();
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await waitForOverrideContentMenuItemIsEnabled('elements-panel-styles.css');
        await (0, helper_js_1.click)('aria/Open in Sources panel');
        // Open the file in the Sources panel
        const file = await (0, helper_js_1.waitFor)('[aria-label="elements-panel-styles.css, file"]');
        await file.click({ button: 'right' });
        const assertShowAllElements = await (0, helper_js_1.$$)('Show all overrides', undefined, 'aria');
        const assertOverridesContentElements = await (0, helper_js_1.$$)('Override content', undefined, 'aria');
        chai_1.assert.strictEqual(assertShowAllElements.length, 0);
        chai_1.assert.strictEqual(assertOverridesContentElements.length, 1);
    });
});
(0, mocha_extensions_js_1.describe)('Overrides panel > Delete context menus', () => {
    beforeEach(async () => {
        // set up 3 overriden files - .header, json, custom js
        await (0, helper_js_1.goToResource)('network/fetch-json.html');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, sources_helpers_js_1.enableLocalOverrides)();
        await (0, helper_js_1.step)('add a content override file', async () => {
            await (0, network_helpers_js_1.openNetworkTab)();
            await waitForOverrideContentMenuItemIsEnabled('coffees.json');
            await (0, helper_js_1.click)('aria/Override content');
        });
        await (0, helper_js_1.step)('add a custom override file', async () => {
            const subfolderTab = await (0, helper_js_1.waitFor)('[role="group"] > .navigator-folder-tree-item');
            await subfolderTab.click({ button: 'right' });
            await (0, helper_js_1.click)('aria/New file');
            await (0, helper_js_1.waitFor)('[aria-label="NewFile, file"]');
            await (0, helper_js_1.typeText)('foo.js\n');
        });
        await (0, helper_js_1.step)('add a header override file', async () => {
            await (0, network_helpers_js_1.openNetworkTab)();
            await (0, network_helpers_js_1.selectRequestByName)('coffees.json', { button: 'right' });
            await (0, helper_js_1.click)('aria/Override headers');
            await (0, helper_js_1.waitFor)('[title="Reveal header override definitions"]');
        });
    });
    afterEach(async () => {
        await (0, helper_js_1.click)('[aria-label="Clear configuration"]');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.ENABLE_OVERRIDES_SELECTOR);
    });
    (0, mocha_extensions_js_1.it)('delete all files from sub folder', async () => {
        await (0, helper_js_1.step)('files exist in Sources panel', async () => {
            await (0, network_helpers_js_1.selectRequestByName)('coffees.json', { button: 'right' });
            await (0, helper_js_1.click)('aria/Show all overrides');
            await (0, helper_js_1.waitFor)('[aria-label=".headers, file"]');
            await (0, helper_js_1.waitFor)('[aria-label="coffees.json, file"]');
            await (0, helper_js_1.waitFor)('[aria-label="foo.js, file"]');
        });
        await (0, helper_js_1.step)('delete all files', async () => {
            const subfolderTab = await (0, helper_js_1.waitFor)('[role="group"] > .navigator-folder-tree-item');
            await subfolderTab.click({ button: 'right' });
            await (0, helper_js_1.click)('aria/Delete');
            await (0, helper_js_1.waitFor)('[role="dialog"]');
            await (0, helper_js_1.click)('aria/OK');
            await (0, helper_js_1.waitForNone)('[role="dialog"]');
            const treeItems = await (0, helper_js_1.$$)('.navigator-file-tree-item');
            chai_1.assert.strictEqual(treeItems.length, 0);
        });
    });
});
//# sourceMappingURL=overrides_test.js.map