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
(0, mocha_extensions_js_1.describe)('Sources Tab', () => {
    (0, mocha_extensions_js_1.it)('pauses the script when clicking the "Pause" button', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to page', async () => {
            await (0, helper_js_1.goToResource)('sources/infinity-loop.html');
        });
        await (0, helper_js_1.step)('kick off the infinity loop', async () => {
            await target.evaluate('setTimeout(loop, 0)');
        });
        await (0, helper_js_1.step)('wait for the marker console message to show up', async () => {
            await (0, console_helpers_js_1.navigateToConsoleTab)();
            await (0, console_helpers_js_1.waitForLastConsoleMessageToHaveContent)('Console marker the test can wait for');
        });
        await (0, helper_js_1.step)('click the pause button', async () => {
            await (0, sources_helpers_js_1.openSourcesPanel)();
            await (0, helper_js_1.click)(sources_helpers_js_1.PAUSE_BUTTON);
        });
        await (0, helper_js_1.step)('wait for the pause in the loop function', async () => {
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            await (0, sources_helpers_js_1.executionLineHighlighted)();
            chai_1.assert.deepStrictEqual(await (0, sources_helpers_js_1.getOpenSources)(), ['infinity-loop.html']);
        });
    });
});
//# sourceMappingURL=pause-button_test.js.map