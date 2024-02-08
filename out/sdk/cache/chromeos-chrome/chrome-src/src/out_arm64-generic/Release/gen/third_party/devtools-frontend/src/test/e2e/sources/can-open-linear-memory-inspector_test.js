"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const cross_tool_helper_js_1 = require("../helpers/cross-tool-helper.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const LINEAR_MEMORY_INSPECTOR_TAB_SELECTOR = '#tab-linear-memory-inspector';
const LINEAR_MEMORY_INSPECTOR_TABBED_PANE_SELECTOR = cross_tool_helper_js_1.DRAWER_PANEL_SELECTOR + ' .tabbed-pane';
const LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR = '.tabbed-pane-header-tab';
const LINEAR_MEMORY_INSPECTOR_TAB_TITLE_SELECTOR = '.tabbed-pane-header-tab-title';
(0, mocha_extensions_js_1.describe)('Scope View', async () => {
    (0, mocha_extensions_js_1.it)('opens linear memory inspector', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        const breakpointLine = '0x039';
        const fileName = 'memory.wasm';
        await (0, helper_js_1.step)('navigate to a page and open the Sources tab', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('memory.wasm', 'wasm/memory.html');
        });
        await (0, helper_js_1.step)(`add a breakpoint to line No.${breakpointLine}`, async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, breakpointLine);
        });
        await (0, helper_js_1.step)('reload the page', async () => {
            await (0, sources_helpers_js_1.reloadPageAndWaitForSourceFile)(target, fileName);
        });
        await (0, helper_js_1.step)('expand the module scope', async () => {
            await (0, helper_js_1.click)('[aria-label="Module"]');
            await (0, helper_js_1.waitFor)('[aria-label="Module"][aria-expanded="true"]');
        });
        await (0, helper_js_1.step)('open linear memory inspector from context menu', async () => {
            await (0, helper_js_1.waitFor)('[data-object-property-name-for-test="memories"][aria-expanded="true"]');
            await (0, sources_helpers_js_1.inspectMemory)('$imports.memory');
        });
        await (0, helper_js_1.step)('check that linear memory inspector drawer is open', async () => {
            const drawerIsOpen = await (0, cross_tool_helper_js_1.checkIfTabExistsInDrawer)(LINEAR_MEMORY_INSPECTOR_TAB_SELECTOR);
            chai_1.assert.isTrue(drawerIsOpen);
        });
        await (0, helper_js_1.step)('check that opened linear memory inspector has correct title', async () => {
            const lmiTabbedPane = await (0, helper_js_1.waitFor)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_SELECTOR);
            const titleElement = await (0, helper_js_1.waitFor)(LINEAR_MEMORY_INSPECTOR_TAB_TITLE_SELECTOR, lmiTabbedPane);
            chai_1.assert.isNotNull(titleElement);
            const title = await frontend.evaluate(x => x.innerText, titleElement);
            chai_1.assert.strictEqual(title, 'Memory(100)');
        });
    });
    (0, mocha_extensions_js_1.it)('opens one linear memory inspector per ArrayBuffer', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to a page', async () => {
            await (0, helper_js_1.goToResource)('sources/memory-workers.rawresponse');
        });
        await (0, helper_js_1.step)('wait for debugging to start', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.RESUME_BUTTON);
        });
        await (0, helper_js_1.step)('open linear memory inspector from context menu', async () => {
            await (0, sources_helpers_js_1.inspectMemory)('sharedMem');
        });
        await (0, helper_js_1.step)('check that linear memory inspector drawer is open', async () => {
            const drawerIsOpen = await (0, cross_tool_helper_js_1.checkIfTabExistsInDrawer)(LINEAR_MEMORY_INSPECTOR_TAB_SELECTOR);
            chai_1.assert.isTrue(drawerIsOpen);
        });
        const lmiTabbedPane = await (0, helper_js_1.waitFor)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_SELECTOR);
        await (0, helper_js_1.step)('check that opened linear memory inspector has correct title', async () => {
            const titleElement = await (0, helper_js_1.waitFor)(LINEAR_MEMORY_INSPECTOR_TAB_TITLE_SELECTOR, lmiTabbedPane);
            chai_1.assert.isNotNull(titleElement);
            const title = await frontend.evaluate(x => x.innerText, titleElement);
            chai_1.assert.strictEqual(title, 'SharedArrayBuffer(16)');
        });
        // Save this as we will select it multiple times
        const sharedBufferTab = await (0, helper_js_1.$)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR, lmiTabbedPane);
        if (!sharedBufferTab) {
            // Throw here to satisfy TypeScript
            throw new Error('Failed to get tab');
        }
        await (0, helper_js_1.step)('open other buffer', async () => {
            await (0, sources_helpers_js_1.inspectMemory)('memory2');
            // Wait until two tabs are open
            await (0, helper_js_1.waitFor)(`${LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR} + ${LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR}`, lmiTabbedPane);
            // Shared buffer tab no longer active
            await (0, helper_js_1.waitForFunction)(() => {
                return sharedBufferTab.evaluate(e => e.getAttribute('aria-selected') === 'false');
            });
        });
        await (0, helper_js_1.step)('open first buffer again by way of its typed array', async () => {
            await (0, sources_helpers_js_1.inspectMemory)('sharedArray');
            // Shared buffer should be selected again
            await (0, helper_js_1.waitForFunction)(() => {
                return sharedBufferTab.evaluate(e => e.getAttribute('aria-selected') === 'true');
            });
            // There should only be two tabs
            await (0, helper_js_1.waitForFunction)(async () => {
                const tabs = await (0, helper_js_1.$$)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR, lmiTabbedPane);
                return tabs.length === 2;
            });
        });
        await (0, helper_js_1.step)('resume and pause in other worker (hitting a debugger statement)', async () => {
            // Continue execution in this worker.
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
            // Wait until we pause in the other worker.
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
            chai_1.assert.deepEqual(scriptLocation, 'memory-worker1.rawresponse:10');
        });
        await (0, helper_js_1.step)('open other buffer in other worker', async () => {
            await (0, sources_helpers_js_1.inspectMemory)('memory1');
            // Shared buffer tab no longer active
            await (0, helper_js_1.waitForFunction)(() => {
                return sharedBufferTab.evaluate(e => e.getAttribute('aria-selected') === 'false');
            });
            // Now there are three tabs
            await (0, helper_js_1.waitForFunction)(async () => {
                const tabs = await (0, helper_js_1.$$)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR, lmiTabbedPane);
                return tabs.length === 3;
            });
        });
        await (0, helper_js_1.step)('open shared buffer in other worker', async () => {
            await (0, sources_helpers_js_1.inspectMemory)('sharedArr');
            // Shared buffer tab active again
            await (0, helper_js_1.waitForFunction)(() => {
                return sharedBufferTab.evaluate(e => e.getAttribute('aria-selected') === 'true');
            });
            // Still three tabs
            await (0, helper_js_1.waitForFunction)(async () => {
                const tabs = await (0, helper_js_1.$$)(LINEAR_MEMORY_INSPECTOR_TABBED_PANE_TAB_SELECTOR, lmiTabbedPane);
                return tabs.length === 3;
            });
        });
    });
});
//# sourceMappingURL=can-open-linear-memory-inspector_test.js.map