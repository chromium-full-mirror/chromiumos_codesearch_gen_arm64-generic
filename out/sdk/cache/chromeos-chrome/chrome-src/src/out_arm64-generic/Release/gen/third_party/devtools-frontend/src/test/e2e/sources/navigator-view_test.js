"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const context_menu_helpers_js_1 = require("../helpers/context-menu-helpers.js");
const quick_open_helpers_js_1 = require("../helpers/quick_open-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources panel', async () => {
    (0, mocha_extensions_js_1.describe)('contains a Navigator view', () => {
        (0, mocha_extensions_js_1.describe)('with a Page tab', () => {
            (0, mocha_extensions_js_1.it)('which offers a context menu option "Search in all files" for top frames', async () => {
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('index.html', 'navigation/index.html');
                await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)('[aria-label="top, frame"]', 'Search in all files');
                const element = await (0, helper_js_1.waitFor)('[aria-label="Search Query"]');
                const value = await element.evaluate(input => input.value);
                chai_1.assert.strictEqual(value, '');
            });
            (0, mocha_extensions_js_1.it)('which offers a context menu option "Search in folder" for folders', async () => {
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('index.html', 'navigation/index.html');
                await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)('[aria-label="test/e2e/resources/sources/navigation, nw-folder"]', 'Search in folder');
                const element = await (0, helper_js_1.waitFor)('[aria-label="Search Query"]');
                const value = await element.evaluate(input => input.value);
                chai_1.assert.strictEqual(value, 'file:test/e2e/resources/sources/navigation');
            });
            (0, mocha_extensions_js_1.it)('which automatically reveals the correct file (by default)', async () => {
                // Navigate without opening a file, while displaying the 'Page' tree.
                await (0, sources_helpers_js_1.openFileInSourcesPanel)('navigation/index.html');
                // Open file via the command menu.
                await (0, quick_open_helpers_js_1.openFileWithQuickOpen)('index.html');
                // Wait for the file to be selected in the 'Page' tree.
                await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-label="index.html, file"][aria-selected="true"]');
            });
            (0, mocha_extensions_js_1.it)('which does not automatically reveal newly opened files when the setting is disabled', async () => {
                // Navigate and open minified-errors.html.
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-errors.html', 'minified-errors.html');
                // Wait for the file to be selected in the 'Page' tree.
                await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-label="minified-errors.html, file"][aria-selected="true"]');
                // Disable the automatic reveal feature.
                await (0, quick_open_helpers_js_1.runCommandWithQuickOpen)('Do not automatically reveal files in sidebar');
                // Open another file via the command menu.
                await (0, quick_open_helpers_js_1.openFileWithQuickOpen)('minified-errors.js');
                // Check that the selected item in the tree is still minified-errors.html.
                const selectedTreeItem = await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-selected="true"]');
                const selectedTreeItemText = await selectedTreeItem.evaluate(node => node.textContent);
                chai_1.assert.strictEqual(selectedTreeItemText, 'minified-errors.html');
            });
            (0, mocha_extensions_js_1.it)('which reveals the correct file via the "Reveal in navigator sidebar" context menu option (in the code editor)', async () => {
                // Navigate and wait for 'index.html' to load, switch to 'Snippets' view.
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('index.html', 'navigation/index.html');
                await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab[aria-label="index.html"][aria-selected="true"]');
                await (0, sources_helpers_js_1.openSnippetsSubPane)();
                // Manually reveal the file in the sidebar.
                await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)('[aria-label="Code editor"]', 'Reveal in navigator sidebar');
                // Wait for the file to be selected in the 'Page' tree.
                await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-label="index.html, file"][aria-selected="true"]');
            });
            (0, mocha_extensions_js_1.it)('which reveals the correct file via the "Reveal in navigator sidebar" context menu option (in the tab header)', async () => {
                // Navigate and wait for 'index.html' to load, switch to 'Snippets' view.
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('index.html', 'navigation/index.html');
                await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab[aria-label="index.html"][aria-selected="true"]');
                await (0, sources_helpers_js_1.openSnippetsSubPane)();
                // Manually reveal the file in the sidebar.
                await (0, context_menu_helpers_js_1.openSoftContextMenuAndClickOnItem)('.tabbed-pane-header-tab[aria-label="index.html"][aria-selected="true"]', 'Reveal in navigator sidebar');
                // Wait for the file to be selected in the 'Page' tree.
                await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-label="index.html, file"][aria-selected="true"]');
            });
            (0, mocha_extensions_js_1.it)('which reveals the correct file via the "Reveal active file in navigator sidebar" command', async () => {
                // Navigate and wait for 'index.html' to load, switch to 'Snippets' view.
                await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('index.html', 'navigation/index.html');
                await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab[aria-label="index.html"][aria-selected="true"]');
                await (0, sources_helpers_js_1.openSnippetsSubPane)();
                // Manually reveal the file in the sidebar.
                await (0, quick_open_helpers_js_1.runCommandWithQuickOpen)('Reveal active file in navigator sidebar');
                // Wait for the file to be selected in the 'Page' tree.
                await (0, helper_js_1.waitFor)('.navigator-file-tree-item[aria-label="index.html, file"][aria-selected="true"]');
            });
        });
        (0, mocha_extensions_js_1.it)('which does not automatically reveal when opening a file', async () => {
            // Navigate without opening a file, close the navigator view.
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openFileInSourcesPanel)('navigation/index.html');
            await (0, sources_helpers_js_1.toggleNavigatorSidebar)(frontend);
            // Open file via the command menu.
            await (0, quick_open_helpers_js_1.openFileWithQuickOpen)('index.html');
            // Check that the navigator view is still hidden.
            await (0, helper_js_1.waitForNone)('.navigator-tabbed-pane');
        });
        (0, mocha_extensions_js_1.it)('which can be toggled via Ctrl+Shift+Y shortcut keyboard shortcut', async () => {
            // Open 'Sources' panel and make sure that the navigator view is not collapsed in initial state.
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, helper_js_1.waitFor)('.navigator-tabbed-pane');
            // Collapse navigator view.
            await (0, sources_helpers_js_1.toggleNavigatorSidebar)(frontend);
            await (0, helper_js_1.waitForNone)('.navigator-tabbed-pane');
            // Expand navigator view.
            await (0, sources_helpers_js_1.toggleNavigatorSidebar)(frontend);
            await (0, helper_js_1.waitFor)('.navigator-tabbed-pane');
        });
    });
});
//# sourceMappingURL=navigator-view_test.js.map