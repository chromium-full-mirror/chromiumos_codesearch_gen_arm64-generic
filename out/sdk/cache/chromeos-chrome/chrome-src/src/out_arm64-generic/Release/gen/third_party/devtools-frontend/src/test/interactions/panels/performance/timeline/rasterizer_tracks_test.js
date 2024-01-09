"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Rasterizer tracks', function () {
    // TODO(crbug.com/1472155): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    // Times here are so that we zoom into the panel a bit rather than have a screenshot with loads of whitespace.
    const urlForTest = 'performance_panel/track_example.html?track=Raster&fileName=web-dev&windowStart=1020034883.047&windowEnd=1020035150.961';
    (0, mocha_extensions_js_1.itScreenshot)('renders all the tracks correctly expanded', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/rasterizer_tracks_expanded.png', 4);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders all the tracks correctly in collapsed mode', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/rasterizer_tracks_collapsed.png', 4);
    });
});
//# sourceMappingURL=rasterizer_tracks_test.js.map