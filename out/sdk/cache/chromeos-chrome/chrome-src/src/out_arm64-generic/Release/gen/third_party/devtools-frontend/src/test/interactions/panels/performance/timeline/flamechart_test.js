"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('FlameChart', function () {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/flamechart.html');
    async function getFlameChartContainerWhenReady(selector) {
        // The container element exists immediately, but we want to wait for the
        // flamechart widget to expand and fill the space.
        await (0, helper_js_1.waitForFunction)(async () => {
            const container = await (0, helper_js_1.waitFor)(`${selector} > .vbox`);
            const hasHeight = await container.evaluate(elem => elem.offsetHeight > 150);
            return hasHeight;
        });
        const flameChart = await (0, helper_js_1.waitFor)(selector);
        return flameChart;
    }
    (0, mocha_extensions_js_1.itScreenshot)('renders some events onto the timeline', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/flamechart.html');
        const flameChart = await getFlameChartContainerWhenReady('#container1');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/flame_chart_1.png', 1);
    });
    (0, mocha_extensions_js_1.itScreenshot)('can add decorations to events', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/flamechart.html');
        const flameChart = await getFlameChartContainerWhenReady('#container2');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/flame_chart_candystripe.png', 0.5);
    });
});
//# sourceMappingURL=flamechart_test.js.map