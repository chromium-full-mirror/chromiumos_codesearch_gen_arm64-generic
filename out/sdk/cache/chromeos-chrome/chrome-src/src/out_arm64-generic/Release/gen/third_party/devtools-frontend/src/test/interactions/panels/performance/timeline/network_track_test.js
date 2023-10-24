"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Network track', function () {
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    const urlForTest = 'performance_panel/track_example.html?track=Network&fileName=cls-cluster-max-timeout';
    (0, mocha_extensions_js_1.itScreenshot)('renders the expanded Network track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/network_track_expanded.png', 4, {
            captureBeyondViewport: true,
        });
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the collapsed Network track correctly', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/network_track_collapsed.png', 4);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and expanded)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/network_track_expanded_dark_mode.png', 4, {
            captureBeyondViewport: true,
        });
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the track (dark mode and collapsed)', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=false&darkMode=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/network_track_collapsed_dark_mode.png', 4);
    });
});
//# sourceMappingURL=network_track_test.js.map