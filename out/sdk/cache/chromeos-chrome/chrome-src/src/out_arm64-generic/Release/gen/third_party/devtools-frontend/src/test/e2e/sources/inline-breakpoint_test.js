"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
// These tests are ported from the web test:
// https://crsrc.org/c/third_party/blink/web_tests/http/tests/devtools/sources/debugger/source-frame-inline-breakpoint-decorations.js;drc=74dacd13f4b89f64ebe1aa99d4b5d80480a8d3b4
(0, mocha_extensions_js_1.describe)('The Sources Tab', () => {
    (0, mocha_extensions_js_1.beforeEach)(async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-decorations.js', 'breakpoint-decorations.html');
    });
    /**
     * @param line 1-based line number
     * @returns the text of the line but for every inline breakpoint decorator we add a '@' or '%' for
     *          enabled or disabled breakpoints respectively.
     */
    async function getLineDecorationDescriptor(line) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        return frontend.$eval(`pierce/.cm-content > :nth-child(${line})`, contentEl => [...contentEl.childNodes]
            .map(lineSegment => {
            if (lineSegment instanceof HTMLElement &&
                lineSegment.classList.contains('cm-inlineBreakpoint')) {
                return lineSegment.classList.contains('cm-inlineBreakpoint-disabled') ? '%' : '@';
            }
            return lineSegment.textContent;
        })
            .join(''));
    }
    async function checkLineDecorationDescriptor(line, expected) {
        await (0, helper_js_1.waitForFunction)(async () => {
            return await getLineDecorationDescriptor(line) === expected;
        });
    }
    (0, mocha_extensions_js_1.it)('shows inline decorations when setting a breakpoint on a line with multiple locations', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 3);
        await checkLineDecorationDescriptor(3, '    var p = @Promise.%resolve().%then(() => console.%log(42)%)');
    });
    (0, mocha_extensions_js_1.it)('shows no inline decorations when setting a breakpoint on a line with a single location', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 5);
        await checkLineDecorationDescriptor(5, '    return p;');
    });
    (0, mocha_extensions_js_1.it)('removes the breakpoint when the last inline breakpoint is disabled', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 3);
        await checkLineDecorationDescriptor(3, '    var p = @Promise.%resolve().%then(() => console.%log(42)%)');
        await (0, sources_helpers_js_1.disableInlineBreakpointForLine)(3, 1, true);
        await checkLineDecorationDescriptor(3, '    var p = Promise.resolve().then(() => console.log(42))');
    });
    (0, mocha_extensions_js_1.it)('can enable/disable inline breakpoints by clicking on the decorations', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 3);
        await (0, helper_js_1.step)('click the second inline breakpoint', async () => {
            await checkLineDecorationDescriptor(3, '    var p = @Promise.%resolve().%then(() => console.%log(42)%)');
            await (0, sources_helpers_js_1.enableInlineBreakpointForLine)(3, 2);
            await checkLineDecorationDescriptor(3, '    var p = @Promise.@resolve().%then(() => console.%log(42)%)');
        });
        await (0, helper_js_1.step)('click the first inline breakpoint', async () => {
            await (0, sources_helpers_js_1.disableInlineBreakpointForLine)(3, 1);
            await checkLineDecorationDescriptor(3, '    var p = %Promise.@resolve().%then(() => console.%log(42)%)');
        });
    });
});
//# sourceMappingURL=inline-breakpoint_test.js.map