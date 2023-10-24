"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Auction Worklet tracks', function () {
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    const urlForTest = 'performance_panel/track_example.html?track=Other&fileName=fenced-frame-fledge&trackFilter=Worklet&windowStart=220391498.289&windowEnd=220391697.601';
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders all the worklet threads', async () => {
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/auction_worklets_expanded.png', 3);
    });
});
//# sourceMappingURL=auction_worklets_tracks_test.js.map