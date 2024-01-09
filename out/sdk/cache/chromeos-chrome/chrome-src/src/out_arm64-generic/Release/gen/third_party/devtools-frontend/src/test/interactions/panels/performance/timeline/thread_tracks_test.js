"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Perf Panel Main Thread', function () {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/flamechart.html');
    (0, mocha_extensions_js_1.itScreenshot)('renders some events onto the timeline', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/main-thread-long-task-candy-stripe.png', 3);
    });
});
(0, mocha_extensions_js_1.describe)('Main thread by new engine', () => {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the main thread', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=react-hello-world&trackFilter=Main&windowStart=410167020.225&windowEnd=410167037.286';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/main-thread-track.png');
    });
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the main thread with candy stripes on long tasks', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=one-second-interaction&trackFilter=Main';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/main-thread-track-candy-stripe.png');
    });
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the main thread for sub frames', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=multiple-navigations-with-iframes&trackFilter=Frame&windowStart=643494141.125&windowEnd=643497093.297';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/iframe-main-thread-long-task-candy-stripe.png');
    });
});
(0, mocha_extensions_js_1.describe)('Rasterizer', function () {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the Raster track', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=web-dev&trackFilter=Raster&windowStart=1020034891.352&windowEnd=1020035181.509';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/rasterizer-track.png');
    });
});
(0, mocha_extensions_js_1.describe)('Workers', function () {
    // TODO(crbug.com/1472155): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the Worker track', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=two-workers&trackFilter=Worker&windowStart=107351290.697&windowEnd=107351401.004';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/worker-track.png', undefined, {
            captureBeyondViewport: true,
        });
    });
});
(0, mocha_extensions_js_1.describe)('ThreadPool', () => {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders the threadpool track', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=web-dev&trackFilter=Thread&windowStart=1020034891.352&windowEnd=1020035181.509';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/threadpool-track.png');
    });
});
(0, mocha_extensions_js_1.describe)('Other', () => {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/track_example.html');
    (0, mocha_extensions_js_1.itScreenshot)('correctly renders tracks for generic threads with no specific type', async () => {
        const urlForTest = 'performance_panel/track_example.html?track=Thread&fileName=web-dev&trackFilter=IOThread&windowStart=1020035010.258&windowEnd=1020035076.320';
        await (0, shared_js_1.loadComponentDocExample)(`${urlForTest}&expanded=true`);
        const flameChart = await (0, helper_js_1.waitFor)('.flame-chart-main-pane');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(flameChart, 'performance/other-thread.png');
    });
});
//# sourceMappingURL=thread_tracks_test.js.map