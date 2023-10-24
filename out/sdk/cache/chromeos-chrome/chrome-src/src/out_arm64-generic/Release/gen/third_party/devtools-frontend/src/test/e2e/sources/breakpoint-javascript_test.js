"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const quick_open_helpers_js_1 = require("../helpers/quick_open-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
async function waitForTopCallFrameChanged(previousCallFrame, updatedCallFrame) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const actualTopCallFrame = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
        chai_1.assert.isTrue(actualTopCallFrame === previousCallFrame || actualTopCallFrame === updatedCallFrame);
        return actualTopCallFrame === updatedCallFrame;
    });
}
async function assertScriptLocation(expectedLocation) {
    const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
    if (!scriptLocation) {
        chai_1.assert.fail('Unable to retrieve script location for call frame');
    }
    chai_1.assert.isTrue((0, sources_helpers_js_1.isEqualOrAbbreviation)(scriptLocation, expectedLocation));
}
(0, mocha_extensions_js_1.describe)('The Sources Tab', async function () {
    const CLICK_BREAKPOINT_SCRIPT = 'click-breakpoint.js';
    const CLICK_BREAKPOINT_HTML = 'click-breakpoint.html';
    // Some of these tests that use instrumentation breakpoints
    // can be slower on mac and windows. Increaese the timeout for them.
    if (this.timeout() !== 0) {
        this.timeout(10000);
    }
    (0, mocha_extensions_js_1.it)('sets and hits breakpoints in JavaScript', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        const scriptEvaluation = target.evaluate('f2();');
        const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
        chai_1.assert.deepEqual(scriptLocation, `${CLICK_BREAKPOINT_SCRIPT}:4`);
        const breakpointLocation = await (0, sources_helpers_js_1.getBreakpointHitLocation)();
        chai_1.assert.deepEqual(breakpointLocation, scriptLocation);
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await scriptEvaluation;
    });
    (0, mocha_extensions_js_1.it)('can disable and re-enable breakpoints in JavaScript', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
        // After adding a breakpoint, we expect the script to pause. Resume afterwards.
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        await testScriptPauseAndResume();
        // Disable breakpoint. This time, we should not pause but be able to
        // run the script until the end.
        await (0, helper_js_1.click)(`[aria-label="${CLICK_BREAKPOINT_SCRIPT}"] [aria-label="checked"] input`);
        await target.evaluate('f2();');
        // Re-enable breakpoint. Again, we should expect a pause and resume to finish the script.
        await (0, helper_js_1.click)(`[aria-label="${CLICK_BREAKPOINT_SCRIPT}"] [aria-label="unchecked"] input`);
        await testScriptPauseAndResume();
        async function testScriptPauseAndResume() {
            const scriptEvaluation = target.evaluate('f2();');
            const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
            chai_1.assert.deepEqual(scriptLocation, `${CLICK_BREAKPOINT_SCRIPT}:4`);
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
            await scriptEvaluation;
        }
    });
    (0, mocha_extensions_js_1.it)('can set and remove breakpoints in JavaScript', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        // Hover over breakpoint.
        await (0, helper_js_1.hover)(`[aria-label="${CLICK_BREAKPOINT_SCRIPT}"] [aria-label="checked"]`);
        // Remove breakpoint.
        await (0, helper_js_1.click)(`[aria-label="${CLICK_BREAKPOINT_SCRIPT}"] [aria-label="Remove breakpoint"]`);
        // Running the function should not pause anywhere.
        await target.evaluate('f2();');
    });
    (0, mocha_extensions_js_1.it)('doesn\'t synchronize breakpoints between scripts and source-mapped scripts', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Navigate to page with sourceURL annotation and set breakpoint in line 2.
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-conflict.js', 'breakpoint-conflict-source-url.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 2);
        // Navigate to page with sourceMappingURL annotation and check that breakpoint did not sync.
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-conflict.js', 'breakpoint-conflict-source-map.html');
        chai_1.assert.isFalse(await (0, sources_helpers_js_1.isBreakpointSet)(2), 'Breakpoint found on line 2 which shouldn\'t be there');
    });
    (0, mocha_extensions_js_1.it)('stops at each breakpoint on resume (using F8) on target', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to page', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
        });
        await (0, helper_js_1.step)('add a breakpoint to line No.3, 4, and 9', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 3);
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 9);
        });
        let scriptEvaluation;
        await (0, helper_js_1.step)('trigger evaluation of script', async () => {
            scriptEvaluation = target.evaluate('f2();');
        });
        await (0, helper_js_1.step)('wait for pause and check if we stopped at line 3', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameWithoutResuming)();
            chai_1.assert.deepEqual(scriptLocation, `${CLICK_BREAKPOINT_SCRIPT}:3`);
        });
        await (0, helper_js_1.step)('resume and wait until we have hit the next breakpoint (3->4)', async () => {
            await target.keyboard.press('F8');
            await waitForTopCallFrameChanged(`${CLICK_BREAKPOINT_SCRIPT}:3`, `${CLICK_BREAKPOINT_SCRIPT}:4`);
        });
        await (0, helper_js_1.step)('resume and wait until we have hit the next breakpoint (4->9)', async () => {
            await target.keyboard.press('F8');
            await waitForTopCallFrameChanged(`${CLICK_BREAKPOINT_SCRIPT}:4`, `${CLICK_BREAKPOINT_SCRIPT}:9`);
        });
        await (0, helper_js_1.step)('resume and wait until script finishes execution', async () => {
            await frontend.keyboard.press('F8');
            await scriptEvaluation;
        });
    });
    (0, mocha_extensions_js_1.it)('can hit a breakpoint on the main thread on a fresh DevTools', async () => {
        await (0, helper_js_1.enableExperiment)('instrumentationBreakpoints');
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to a page and open the Sources tab', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-hit-on-first-load.js', 'breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('add a breakpoint to the beginning of the script', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 1);
        });
        await (0, helper_js_1.step)('Navigate to a different site to refresh devtools and remove back-end state', async () => {
            await (0, sources_helpers_js_1.refreshDevToolsAndRemoveBackendState)(target);
        });
        await (0, helper_js_1.step)('Navigate back to test page', () => {
            void (0, helper_js_1.goToResource)('sources/breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('wait for pause and check if we stopped at line 1', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            await assertScriptLocation('breakpoint-hit-on-first-load.js:1');
        });
        await (0, helper_js_1.step)('Resume', async () => {
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        });
    });
    // Skip test for now to land unrelated changes that will fail this test. Inline scripts without source
    // urls are currently not correctly handled.
    mocha_extensions_js_1.it.skip('[crbug.com/1229541] can hit a breakpoint in an inline script on the main thread on a fresh DevTools', async () => {
        await (0, helper_js_1.enableExperiment)('instrumentationBreakpoints');
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to a page and open the Sources tab', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-hit-on-first-load.html', 'breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('add a breakpoint to the beginning of the inline script', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 9);
        });
        await (0, helper_js_1.step)('Navigate to a different site to refresh devtools and remove back-end state', async () => {
            await (0, sources_helpers_js_1.refreshDevToolsAndRemoveBackendState)(target);
        });
        await (0, helper_js_1.step)('Navigate back to test page', () => {
            void (0, helper_js_1.goToResource)('sources/breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('wait for pause and check if we stopped at line 9', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            await assertScriptLocation('breakpoint-hit-on-first-load.html:9');
        });
        await (0, helper_js_1.step)('Resume', async () => {
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        });
    });
    (0, mocha_extensions_js_1.it)('can hit a breakpoint in an inline script with sourceURL comment on the main thread on a fresh DevTools', async () => {
        await (0, helper_js_1.enableExperiment)('instrumentationBreakpoints');
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to a page and open the Sources tab', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('breakpoint-hit-on-first-load.html', 'breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('open the hello.js file (inline script)', async () => {
            await (0, quick_open_helpers_js_1.openFileQuickOpen)();
            await frontend.keyboard.type('hello.js');
            const firstItemTitle = await (0, quick_open_helpers_js_1.getMenuItemTitleAtPosition)(0);
            const firstItem = await (0, quick_open_helpers_js_1.getMenuItemAtPosition)(0);
            chai_1.assert.strictEqual(firstItemTitle, 'hello.js');
            await (0, helper_js_1.clickElement)(firstItem);
        });
        await (0, helper_js_1.step)('add a breakpoint to the beginning of the inline script with sourceURL', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 2);
        });
        await (0, helper_js_1.step)('Navigate to a different site to refresh devtools and remove back-end state', async () => {
            await (0, sources_helpers_js_1.refreshDevToolsAndRemoveBackendState)(target);
        });
        await (0, helper_js_1.step)('Navigate back to test page', () => {
            void (0, helper_js_1.goToResource)('sources/breakpoint-hit-on-first-load.html');
        });
        await (0, helper_js_1.step)('wait for pause and check if we stopped at line 2', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            await assertScriptLocation('hello.js:2');
        });
        await (0, helper_js_1.step)('Resume', async () => {
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        });
    });
    (0, mocha_extensions_js_1.describe)('The breakpoint edit dialog', () => {
        (0, mocha_extensions_js_1.it)('shows up on Ctrl/Meta + click if no breakpoint was set', async () => {
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
            const lineNumberColumn = await (0, helper_js_1.waitFor)(sources_helpers_js_1.CODE_LINE_COLUMN_SELECTOR);
            await (0, helper_js_1.withControlOrMetaKey)(async () => {
                await (0, helper_js_1.click)('text/4', { root: lineNumberColumn });
            });
            await (0, helper_js_1.waitFor)('.sources-edit-breakpoint-dialog');
        });
        (0, mocha_extensions_js_1.it)('shows up on Ctrl/Meta + click if breakpoint was already set', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openSourceCodeEditorForFile)(CLICK_BREAKPOINT_SCRIPT, CLICK_BREAKPOINT_HTML);
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
            const lineNumberColumn = await (0, helper_js_1.waitFor)(sources_helpers_js_1.CODE_LINE_COLUMN_SELECTOR);
            await (0, helper_js_1.withControlOrMetaKey)(async () => {
                await (0, helper_js_1.click)('text/4', { root: lineNumberColumn });
            });
            await (0, helper_js_1.waitFor)('.sources-edit-breakpoint-dialog');
        });
    });
});
//# sourceMappingURL=breakpoint-javascript_test.js.map