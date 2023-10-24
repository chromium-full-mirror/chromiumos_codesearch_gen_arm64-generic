"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Performance panel overview/minimap', function () {
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/overview.html');
    (0, mocha_extensions_js_1.itScreenshot)('renders the overview', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/overview.html?trace=web-dev');
        const pane = await (0, helper_js_1.waitFor)('.container #timeline-overview-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(pane, 'performance/timeline-overview.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('shows a red bar for a long task', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/overview.html?trace=one-second-interaction');
        const pane = await (0, helper_js_1.waitFor)('.container #timeline-overview-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(pane, 'performance/timeline-overview-long-task-red-bar.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('shows network requests in the overview', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/overview.html?trace=many-requests');
        const pane = await (0, helper_js_1.waitFor)('.container #timeline-overview-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(pane, 'performance/timeline-overview-busy-network.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('shows the resizers in the overview', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/overview.html?trace=one-second-interaction&windowStart=141251500&windowEnd=141253500');
        const pane = await (0, helper_js_1.waitFor)('.container #timeline-overview-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(pane, 'performance/timeline-overview-resizers.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('shows the memory usage', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/overview.html?trace=web-dev');
        const pane = await (0, helper_js_1.waitFor)('.container-with-memory #timeline-overview-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(pane, 'performance/timeline-overview-memory.png', 3);
    });
});
//# sourceMappingURL=overview_test.js.map