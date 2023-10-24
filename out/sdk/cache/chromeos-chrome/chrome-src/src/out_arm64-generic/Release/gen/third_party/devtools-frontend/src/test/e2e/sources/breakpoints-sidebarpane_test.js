"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const helper_js_1 = require("../../shared/helper.js");
const BREAKPOINT_VIEW_COMPONENT = 'devtools-breakpoint-view';
const FIRST_BREAKPOINT_ITEM_SELECTOR = '[data-first-breakpoint]';
const BREAKPOINT_ITEM_SELECTOR = '.breakpoint-item';
const LOCATION_SELECTOR = '.location';
const GROUP_HEADER_TITLE_SELECTOR = '.group-header-title';
const CODE_SNIPPET_SELECTOR = '.code-snippet';
async function extractTextContentIfConnected(element) {
    return element.evaluate(element => element.isConnected ? element.textContent : null);
}
(0, mocha_extensions_js_1.describe)('The Breakpoints Sidebar', () => {
    (0, mocha_extensions_js_1.describe)('for source mapped files', () => {
        (0, mocha_extensions_js_1.it)('correctly shows the breakpoint location on reload', async () => {
            const testBreakpointContent = async (expectedFileName, expectedLineNumber) => {
                await checkFileGroupName(expectedFileName);
                await checkLineNumber(BREAKPOINT_ITEM_SELECTOR, expectedLineNumber);
            };
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            const setBreakpointLine = 14;
            const expectedResolvedLineNumber = 17;
            const originalSource = 'reload-breakpoints-with-source-maps-source1.js';
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(originalSource, 'reload-breakpoints-with-source-maps.html');
            // Set a breakpoint on the original source.
            const breakpointLineHandle = await (0, sources_helpers_js_1.getLineNumberElement)(setBreakpointLine);
            (0, helper_js_1.assertNotNullOrUndefined)(breakpointLineHandle);
            await (0, helper_js_1.clickElement)(breakpointLineHandle);
            await (0, helper_js_1.waitForFunction)(async () => await (0, sources_helpers_js_1.isBreakpointSet)(expectedResolvedLineNumber));
            // Check if the breakpoint sidebar correctly shows the original source breakpoint.
            await testBreakpointContent(originalSource, expectedResolvedLineNumber);
            // Check if the breakpoint is correctly restored after reloading.
            await target.reload();
            await testBreakpointContent(originalSource, expectedResolvedLineNumber);
        });
    });
    (0, mocha_extensions_js_1.describe)('for JS files', () => {
        const expectedLocations = [3, 4, 9];
        const fileName = 'click-breakpoint.js';
        beforeEach(async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(fileName, 'click-breakpoint.html');
            for (const location of expectedLocations) {
                await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, location);
            }
            await (0, helper_js_1.waitForMany)(BREAKPOINT_ITEM_SELECTOR, 3);
        });
        (0, mocha_extensions_js_1.it)('shows the correct location', async () => {
            for (let i = 0; i < expectedLocations.length; ++i) {
                const selector = `${BREAKPOINT_ITEM_SELECTOR}:nth-of-type(${i + 1})`;
                await checkLineNumber(selector, expectedLocations[i]);
            }
        });
        (0, mocha_extensions_js_1.it)('shows the correct file name', async () => {
            await checkFileGroupName(fileName);
        });
        (0, mocha_extensions_js_1.it)('shows the correct code snippets', async () => {
            const breakpointItems = await (0, helper_js_1.waitForMany)(BREAKPOINT_ITEM_SELECTOR, 3);
            const actualCodeSnippets = await Promise.all(breakpointItems.map(async (breakpoint) => {
                const codeSnippetHandle = await (0, helper_js_1.waitFor)(CODE_SNIPPET_SELECTOR, breakpoint);
                const content = await extractTextContentIfConnected(codeSnippetHandle);
                (0, helper_js_1.assertNotNullOrUndefined)(content);
                return content;
            }));
            const sourceContent = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            const expectedCodeSnippets = expectedLocations.map(line => sourceContent[line - 1]);
            chai_1.assert.deepStrictEqual(actualCodeSnippets, expectedCodeSnippets);
        });
    });
    (0, mocha_extensions_js_1.describe)('for wasm files', () => {
        (0, mocha_extensions_js_1.it)('shows the correct code snippets', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('memory.wasm', 'wasm/memory.html');
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, '0x037');
            const codeSnippetHandle = await (0, helper_js_1.waitFor)(`${BREAKPOINT_ITEM_SELECTOR} ${CODE_SNIPPET_SELECTOR}`);
            const actualCodeSnippet = await extractTextContentIfConnected(codeSnippetHandle);
            (0, helper_js_1.assertNotNullOrUndefined)(actualCodeSnippet);
            const sourceContent = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            const expectedCodeSnippet = sourceContent[4];
            chai_1.assert.deepStrictEqual(actualCodeSnippet, expectedCodeSnippet);
        });
    });
    (0, mocha_extensions_js_1.it)('will keep the focus on breakpoint items whose location has changed after disabling', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-on-comment.js', 'breakpoint-on-comment.html');
        // Set a breakpoint on a comment and expect it to slide.
        const originalBreakpointLine = 3;
        const slidBreakpointLine = 5;
        const breakpointLine = await (0, sources_helpers_js_1.getLineNumberElement)(originalBreakpointLine);
        (0, helper_js_1.assertNotNullOrUndefined)(breakpointLine);
        await (0, helper_js_1.clickElement)(breakpointLine);
        await (0, helper_js_1.waitForFunction)(async () => await (0, sources_helpers_js_1.isBreakpointSet)(slidBreakpointLine));
        const breakpointView = await (0, helper_js_1.$)(BREAKPOINT_VIEW_COMPONENT);
        (0, helper_js_1.assertNotNullOrUndefined)(breakpointView);
        // Click on the first breakpoint item to 1. disable and 2. focus.
        const breakpointItem = await (0, helper_js_1.waitFor)(FIRST_BREAKPOINT_ITEM_SELECTOR, breakpointView);
        (0, helper_js_1.assertNotNullOrUndefined)(breakpointItem);
        const checkbox = await breakpointItem.$('input');
        (0, helper_js_1.assertNotNullOrUndefined)(checkbox);
        await (0, helper_js_1.clickElement)(checkbox);
        // Wait until the click has propagated: the line is updated with the new location.
        await (0, helper_js_1.waitForFunction)(async () => await (0, sources_helpers_js_1.isBreakpointSet)(originalBreakpointLine));
        let breakpointItemTextContent = null;
        await (0, helper_js_1.waitForFunction)(async () => {
            const updatedBreakpointItem = await (0, helper_js_1.waitFor)(FIRST_BREAKPOINT_ITEM_SELECTOR, breakpointView);
            breakpointItemTextContent = await extractTextContentIfConnected(updatedBreakpointItem);
            const location = await (0, helper_js_1.waitFor)(LOCATION_SELECTOR, updatedBreakpointItem);
            const locationString = await extractTextContentIfConnected(location);
            return locationString === `${originalBreakpointLine}`;
        });
        // Check that the breakpoint item still has focus although the ui location has changed.
        (0, helper_js_1.assertNotNullOrUndefined)(breakpointItemTextContent);
        const focusedTextContent = await (0, helper_js_1.activeElementTextContent)();
        chai_1.assert.strictEqual(focusedTextContent, breakpointItemTextContent);
    });
});
async function checkFileGroupName(expectedFileName) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const titleHandle = await (0, helper_js_1.waitFor)(GROUP_HEADER_TITLE_SELECTOR);
        const actualFileName = await extractTextContentIfConnected(titleHandle);
        return actualFileName && (0, sources_helpers_js_1.isEqualOrAbbreviation)(actualFileName, expectedFileName);
    });
}
async function checkLineNumber(breakpointItemSelector, expectedLineNumber) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const breakpointItem = await (0, helper_js_1.waitFor)(breakpointItemSelector);
        const locationHandle = await (0, helper_js_1.waitFor)(LOCATION_SELECTOR, breakpointItem);
        const content = await extractTextContentIfConnected(locationHandle);
        return content && expectedLineNumber === parseInt(content, 10);
    });
}
//# sourceMappingURL=breakpoints-sidebarpane_test.js.map