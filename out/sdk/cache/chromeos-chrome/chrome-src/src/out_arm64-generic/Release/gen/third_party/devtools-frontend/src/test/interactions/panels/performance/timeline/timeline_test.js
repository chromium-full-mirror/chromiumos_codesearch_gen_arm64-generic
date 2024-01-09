"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Performance panel', function () {
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/basic.html');
    (0, mocha_extensions_js_1.itScreenshot)('loads a trace file and renders it in the timeline', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=basic');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders correctly the Bottom Up datagrid', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-BottomUp');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, helper_js_1.waitForFunction)(async () => {
            const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
            const height = await datagrid.evaluate(elem => elem.clientHeight);
            return height > 150;
        });
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/bottomUp.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders correctly the Call Tree datagrid', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=one-second-interaction');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        await (0, helper_js_1.waitFor)('div.tabbed-pane');
        await (0, helper_js_1.click)('#tab-CallTree');
        const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
        await (0, helper_js_1.waitForFunction)(async () => {
            const datagrid = await (0, helper_js_1.waitFor)('.timeline-tree-view');
            const height = await datagrid.evaluate(elem => elem.clientHeight);
            return height > 150;
        });
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(datagrid, 'performance/callTree.png', 3);
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
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=node-fibonacci-website&isNode=true');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/cpu-profile-node-new-engine.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('loads a cpuprofile and renders it in node mode with default track source set to old engine', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=node-fibonacci-website&isNode=true');
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
    // Flaky test
    mocha_extensions_js_1.itScreenshot.skip('[crbug.com/1511265]: renders screenshots in the frames track', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=web-dev-with-commit&flamechart-force-expand=frames');
        const panel = await (0, helper_js_1.waitFor)('body');
        await (0, helper_js_1.waitForFunction)(async () => {
            const mainFlameChart = await (0, helper_js_1.waitFor)('.timeline-flamechart');
            const height = await mainFlameChart.evaluate(elem => elem.clientHeight);
            return height > 500;
        });
        // With some changes made to timeline-details-view it passes with a diff of 1.98 so reduce it to 1.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(panel, 'performance/timeline-web-dev-screenshot-frames.png', 1);
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
    it('renders the window range bounds correctly when loading multiple profiles', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?cpuprofile=basic');
        let timingTitleHandle = await (0, helper_js_1.waitFor)('.timeline-details-chip-title');
        let timingTitle = await timingTitleHandle.evaluate(element => element.innerHTML);
        chai_1.assert.isTrue(timingTitle.includes('0 – 2.38'));
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // load another profile and ensure the time range is updated correctly.
        await frontend.evaluate(`(async () => {
      await loadFromFile('node-fibonacci-website.cpuprofile.gz');
    })()`);
        await (0, helper_js_1.waitForFunction)(async () => {
            timingTitleHandle = await (0, helper_js_1.waitFor)('.timeline-details-chip-title');
            timingTitle = await timingTitleHandle.evaluate(element => element.innerHTML);
            return timingTitle.includes('0 – 2.66');
        });
    });
});
//# sourceMappingURL=timeline_test.js.map