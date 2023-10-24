"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources Tab', async () => {
    const fileName = 'with-sourcemap.ll';
    (0, mocha_extensions_js_1.it)('can add breakpoint for a sourcemapped wasm module', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(fileName, 'wasm/wasm-with-sourcemap.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 5);
        const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameScriptLocation)('main();', target);
        chai_1.assert.deepEqual(scriptLocation, `${fileName}:5`);
    });
    (0, mocha_extensions_js_1.it)('hits two breakpoints that are set and activated separately', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to a page and open the Sources tab', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(fileName, 'wasm/wasm-with-sourcemap.html');
        });
        await (0, helper_js_1.step)('add a breakpoint to line No.5', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 5);
        });
        await (0, helper_js_1.step)('reload the page', async () => {
            await (0, sources_helpers_js_1.reloadPageAndWaitForSourceFile)(target, fileName);
        });
        await (0, helper_js_1.step)('open original source file', async () => {
            await (0, sources_helpers_js_1.openFileInEditor)(fileName);
        });
        await (0, helper_js_1.waitForFunction)(async () => await (0, sources_helpers_js_1.isBreakpointSet)(5));
        await (0, helper_js_1.step)('check that the code has paused on the breakpoint at the correct script location', async () => {
            await (0, helper_js_1.waitForFunction)(async () => {
                const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
                return scriptLocation === `${fileName}:5`;
            });
        });
        await (0, helper_js_1.step)('resume script execution', async () => {
            await frontend.keyboard.press('F8');
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.TURNED_OFF_PAUSE_BUTTON_SELECTOR);
        });
        await (0, helper_js_1.step)('remove the breakpoint from the fifth line', async () => {
            await (0, sources_helpers_js_1.removeBreakpointForLine)(frontend, '5');
        });
        await (0, helper_js_1.step)('reload the page', async () => {
            await (0, sources_helpers_js_1.reloadPageAndWaitForSourceFile)(target, fileName);
        });
        await (0, helper_js_1.step)('open original source file', async () => {
            await (0, sources_helpers_js_1.openFileInEditor)(fileName);
        });
        await (0, helper_js_1.waitForFunction)(async () => !(await (0, sources_helpers_js_1.isBreakpointSet)(5)));
        await (0, sources_helpers_js_1.checkBreakpointDidNotActivate)();
        await (0, helper_js_1.step)('add a breakpoint to line No.6', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 6);
        });
        await (0, helper_js_1.step)('reload the page', async () => {
            await (0, sources_helpers_js_1.reloadPageAndWaitForSourceFile)(target, fileName);
        });
        await (0, helper_js_1.waitForFunction)(async () => await (0, sources_helpers_js_1.isBreakpointSet)(6));
        await (0, helper_js_1.step)('check that the code has paused on the breakpoint at the correct script location', async () => {
            await (0, helper_js_1.waitForFunction)(async () => {
                const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
                return scriptLocation === `${fileName}:6`;
            });
        });
    });
});
//# sourceMappingURL=can-break-with-wasm-sourcemaps_test.js.map