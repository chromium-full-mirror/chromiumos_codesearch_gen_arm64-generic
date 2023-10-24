"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Layout shifts track', function () {
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    const urlForTest = 'performance_panel/track_example.html?track=LayoutShifts&fileName=cls-single-frame';
    (0, mocha_extensions_js_1.itScreenshot)('renders the layout shifts track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/layout_shifts_track.png', 2);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/layout_shifts_track_dark_mode.png', 2);
    });
});
//# sourceMappingURL=layout_shifts_track_test.js.map