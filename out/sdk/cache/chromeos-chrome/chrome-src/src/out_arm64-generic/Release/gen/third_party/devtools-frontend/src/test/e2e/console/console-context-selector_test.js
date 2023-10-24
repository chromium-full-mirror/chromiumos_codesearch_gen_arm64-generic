"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async () => {
    (0, mocha_extensions_js_1.it)('context selector', async () => {
        await (0, helper_js_1.goToResource)('console/context-selector.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.evaluate('setup()');
        let contextSelectorButton = await (0, helper_js_1.waitFor)('[aria-label="JavaScript context: top"]');
        async function waitForMenuItemWithText(text) {
            const result = await (0, helper_js_1.waitForFunction)(async () => {
                for (const menuItem of await (0, helper_js_1.waitForMany)('[role=menuitem]', 1)) {
                    if (await (0, helper_js_1.$textContent)(text, menuItem)) {
                        return menuItem;
                    }
                }
                return null;
            });
            (0, helper_js_1.assertNotNullOrUndefined)(result);
            return result;
        }
        const FRAME_CONTEXT_LABEL = 'myframe (context-selector-inner.html)';
        await (0, helper_js_1.step)('switch to the iframe context', async () => {
            await contextSelectorButton.press('Enter');
            const frameMenuItem = await waitForMenuItemWithText(FRAME_CONTEXT_LABEL);
            await (0, helper_js_1.clickElement)(frameMenuItem);
            await (0, helper_js_1.pressKey)('Enter');
            contextSelectorButton = await (0, helper_js_1.waitFor)(`[aria-label="JavaScript context: ${FRAME_CONTEXT_LABEL}"]`);
        });
        await (0, helper_js_1.step)('pause in main frame', async () => {
            void target.evaluate('pauseInMain()');
            await (0, helper_js_1.waitFor)('#tab-sources[aria-selected="true"]');
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)('[aria-label="JavaScript context: top"]');
            await contextSelectorButton.press('Enter');
            chai_1.assert.isTrue(await (0, helper_js_1.hasClass)(await waitForMenuItemWithText(FRAME_CONTEXT_LABEL), 'disabled'));
            await (0, helper_js_1.pressKey)('Escape');
        });
        await (0, helper_js_1.step)('resume in main frame', async () => {
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)('[aria-label="JavaScript context: top"]');
            await contextSelectorButton.press('Enter');
            chai_1.assert.isFalse(await (0, helper_js_1.hasClass)(await waitForMenuItemWithText(FRAME_CONTEXT_LABEL), 'disabled'));
            await (0, helper_js_1.pressKey)('Escape');
        });
        const WORKER_CONTEXT_LABEL = '⚙ worker-pause.js';
        await (0, helper_js_1.step)('pause in worker', async () => {
            void target.evaluate('pauseInWorker()');
            await (0, helper_js_1.waitFor)('#tab-sources[aria-selected="true"]');
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)(`[aria-label="JavaScript context: ${WORKER_CONTEXT_LABEL}"]`);
            await contextSelectorButton.press('Enter');
            chai_1.assert.isFalse(await (0, helper_js_1.hasClass)((await waitForMenuItemWithText('top')), 'disabled'));
            chai_1.assert.isFalse(await (0, helper_js_1.hasClass)((await waitForMenuItemWithText(FRAME_CONTEXT_LABEL)), 'disabled'));
            await (0, helper_js_1.pressKey)('Escape');
        });
        await (0, helper_js_1.step)('resume in worker', async () => {
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)(`[aria-label="JavaScript context: ${WORKER_CONTEXT_LABEL}"]`);
        });
        await (0, helper_js_1.step)('pause in the iframe', async () => {
            void target.evaluate('pauseInIframe()');
            await (0, helper_js_1.waitFor)('#tab-sources[aria-selected="true"]');
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)(`[aria-label="JavaScript context: ${FRAME_CONTEXT_LABEL}"]`);
            await contextSelectorButton.press('Enter');
            chai_1.assert.isTrue(await (0, helper_js_1.hasClass)((await waitForMenuItemWithText('top')), 'disabled'));
            await (0, helper_js_1.pressKey)('Escape');
        });
        await (0, helper_js_1.step)('resume in the iframe', async () => {
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            contextSelectorButton = await (0, helper_js_1.waitFor)(`[aria-label="JavaScript context: ${FRAME_CONTEXT_LABEL}"]`);
            await contextSelectorButton.press('Enter');
            chai_1.assert.isFalse(await (0, helper_js_1.hasClass)((await waitForMenuItemWithText('top')), 'disabled'));
            await (0, helper_js_1.pressKey)('Escape');
        });
    });
});
//# sourceMappingURL=console-context-selector_test.js.map