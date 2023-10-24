"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_state_js_1 = require("../../conductor/puppeteer-state.js");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const performance_helpers_js_1 = require("../helpers/performance-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Performance panel', () => {
    // Test is failing on all platforms.
    mocha_extensions_js_1.it.skip('[crbug.com/1428866] can collect a line-level CPU profile and show it in the text editor', async () => {
        const { target } = (0, puppeteer_state_js_1.getBrowserAndPages)();
        await (0, performance_helpers_js_1.navigateToPerformanceTab)();
        await (0, performance_helpers_js_1.startRecording)();
        await target.evaluate(() => {
            (function () {
                const endTime = Date.now() + 100;
                let s = 0;
                while (Date.now() < endTime) {
                    s += Math.cos(s);
                }
                return s;
            })();
        });
        await (0, performance_helpers_js_1.stopRecording)();
        await (0, sources_helpers_js_1.openSourcesPanel)();
        const elements = await (0, helper_js_1.waitForMany)('.navigator-file-tree-item', 2);
        for (const element of elements) {
            const button = await element.$('.tree-element-title');
            (0, helper_js_1.assertNotNullOrUndefined)(button);
            await button.click();
        }
        await (0, helper_js_1.waitForMany)('.cm-performanceGutter .cm-gutterElement', 2);
    });
});
//# sourceMappingURL=timeline-js-line-level-profile-no-url-end-to-end_test.js.map