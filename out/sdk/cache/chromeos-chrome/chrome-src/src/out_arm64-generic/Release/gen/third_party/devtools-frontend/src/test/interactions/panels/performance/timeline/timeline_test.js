"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Performance panel', function () {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/basic.html');
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, mocha_extensions_js_1.itScreenshot)('loads a trace file and renders it in the timeline', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=basic');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline.png', 3);
    });
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1478133] renders correctly the Bottom Up datagrid', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-BottomUp');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/bottomUp.png', 3);
    });
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1478133] renders correctly the Call Tree datagrid', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-CallTree');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/callTree.png', 3);
    });
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1478133] renders correctly the Event Log datagrid', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-EventLog');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        // This value is obtained by waiting for the scroll of the datagrid to be completed
        const TOP_OFFSET = 2938;
        const scrollableDatagrid = await (0, helper_js_1.waitFor)('.data-container');
        // Wait for the scroll of the datagrid to be done before taking a screenshot
        await (0, helper_js_1.waitForFunction)(async () => {
            const scrollablePosition = await scrollableDatagrid.evaluate(el => {
                return el.scrollTop;
            });
            return scrollablePosition === TOP_OFFSET;
        });
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/eventLog.png', 4);
    });
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1478133] renders correctly the datagrid in the split widget of Bottom Up', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-BottomUp');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, helper_js_1.click)('[aria-label="Show Heaviest stack"]');
        const rows = await datagrid.$$('.data-grid-data-grid-node');
        // The trace one-second-interaction contains more than 3 rows in the bottom up tree
        // so it is safe to click the third one
        if (rows.length >= 3) {
            await rows[2].click();
        }
        else {
            throw new Error('There are less than three rows with the class \'data-grid-data-grid-node\'');
        }
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/splitWidgetBottomUp.png', 3);
    });
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1478133] renders correctly the datagrid in the split widget of Call Tree', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-CallTree');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, helper_js_1.click)('[aria-label="Show Heaviest stack"]');
        const rows = await datagrid.$$('.data-grid-data-grid-node');
        // The trace one-second-interaction contains more than 3 rows in the call tree
        // so it is safe to click the third one
        if (rows.length >= 3) {
            await rows[2].click();
        }
        else {
            throw new Error('There are less than three rows with the class \'data-grid-data-grid-node\'');
        }
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/splitWidgetCallTree.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the timeline correctly when scrolling', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        const virtualScrollBar = await (0, helper_js_1.waitFor)('div.chart-viewport-v-scroll.always-show-scrollbar');
        await virtualScrollBar.evaluate(el => {
            el.scrollTop = 200;
        });
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline_canvas_scrolldown.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('loads a cpuprofile and renders it in non-node mode', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=node-fibonacci-website');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/cpu-profile.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('loads a cpuprofile and renders it in node mode with default track source set to new engine', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=node-fibonacci-website&isNode=true&threadTracksSource=new');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/cpu-profile-node-new-engine.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('loads a cpuprofile and renders it in node mode with default track source set to old engine', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=node-fibonacci-website&isNode=true&threadTracksSource=old');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/cpu-profile-node-old-engine.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('candy stripes long tasks', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-long-task-candystripe.png', 2);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders screenshots in the frames track', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=web-dev&flamechart-force-expand=frames');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        // With some changes made to timeline-details-view it passes with a diff of 1.98 so reduce it to 1.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-web-dev-screenshot-frames.png', 1);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders correctly with the OLD_ENGINE ThreadTracksSource', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=web-dev&threadTracksSource=old');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-web-dev-old-engine.png', 1);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders correctly with the NEW_ENGINE ThreadTracksSource', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=web-dev&threadTracksSource=new');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-web-dev-new-engine.png', 1);
    });
    (0, mocha_extensions_js_1.itScreenshot)('supports the network track being expanded and then clicked', async function () {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=web-dev');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Click to expand the network track.
        await frontend.mouse.click(27, 131);
        await (0, helper_js_1.timeout)(100); // cannot await for DOM as this is a purely canvas change.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-expand-network-panel.png', 1);
        // Click to select a network event.
        await frontend.mouse.click(104, 144);
        await (0, helper_js_1.timeout)(100); // cannot await for DOM as this is a purely canvas change.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-expand-network-panel-and-select-event.png', 1);
    });
});
//# sourceMappingURL=timeline_test.js.map