"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Animations track', function () {
    if (this.timeout() !== 0) {
        this.timeout(20000);
    }
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    const urlForTest = 'performance_panel/track_example.html?track=Animations&fileName=animation';
    (0, mocha_extensions_js_1.itScreenshot)('renders the expanded animations track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/animations_track_expanded.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the collapsed animations track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/animations_track_collapsed.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and expanded)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/animations_track_expanded_dark_mode.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and collapsed)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/animations_track_collapsed_dark_mode.png', 3);
    });
});
//# sourceMappingURL=animations_track_test.js.map