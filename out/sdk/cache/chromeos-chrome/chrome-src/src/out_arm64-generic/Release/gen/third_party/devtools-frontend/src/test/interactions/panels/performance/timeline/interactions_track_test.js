"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Interactions track', function () {
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    const urlForTest = 'performance_panel/track_example.html?track=Interactions&fileName=slow-interaction-button-click&windowStart=337944700&windowEnd=337945100';
    (0, mocha_extensions_js_1.itScreenshot)('renders the interactions track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(
        // The start and end times come from the timestamps of the first and last
        // interaction in the given trace file, and then subtracting/adding a
        // small amount to make them appear on screen nicely for the screenshot.
        `${urlForTest}`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/interactions_track.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the interactions track collapsed correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/interactions_track_collapsed.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('candy stripes events over 200ms', async () => {
        await (0, shared_js_1.loadComponentDocExample)(
        // The start and end times come from the timestamps of the first and last
        // interaction in the given trace file, and then subtracting/adding a
        // small amount to make them appear on screen nicely for the screenshot.
        'performance_panel/track_example.html?track=Interactions&fileName=one-second-interaction&windowStart=141251500&windowEnd=141253000');
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/interactions_track_long_interactions.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and expanded)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/interactions_track_expanded_dark_mode.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and collapsed)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/interactions_track_collapsed_dark_mode.png', 3);
    });
});
//# sourceMappingURL=interactions_track_test.js.map