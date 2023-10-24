"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('FlameChart', function () {
    // TODO(crbug.com/1492405): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/basic.html');
    async function getCoordinatesForEntry(entryIndex) {
        const perfPanel = await (0, helper_js_1.waitFor)('.vbox.panel.timeline');
        return await perfPanel.evaluate((element, entryIndex) => {
            const panelWidget = element;
            const panel = panelWidget.__widget;
            const mainFlameChart = panel.getFlameChart().getMainFlameChart();
            const eventCoordinates = mainFlameChart.entryIndexToCoordinates(entryIndex);
            if (!eventCoordinates) {
                throw new Error('Coordinates were not found');
            }
            const { x, y } = eventCoordinates;
            return { x, y };
        }, entryIndex);
    }
    it('shows the details of an entry when selected on the timeline', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/basic.html?trace=simple-js-program');
        await (0, helper_js_1.waitFor)('.timeline-flamechart');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Add some margin to the coordinates so that we don't click right
        // in the entry's border.
        const margin = 3;
        // Click on an entry on the timings track first.
        const indexForTimingEntry = 10;
        const { x: timingEntryX, y: timingEntryY } = await getCoordinatesForEntry(indexForTimingEntry);
        await frontend.mouse.click(timingEntryX + margin, timingEntryY + margin);
        const timingTitleHandle = await (0, helper_js_1.waitFor)('.timeline-details-chip-title');
        const timingTitle = await timingTitleHandle.evaluate(element => element.innerHTML);
        chai_1.assert.isTrue(timingTitle.includes('label1'));
        // Now click on an entry on the main thread track and ensure details
        // are visible.
        const indexForMainEntry = 19285;
        const { x: mainEntryX, y: mainEntryY } = await getCoordinatesForEntry(indexForMainEntry);
        await frontend.mouse.click(mainEntryX + margin, mainEntryY + margin);
        const mainEntryTitles1 = await (0, helper_js_1.waitForMany)('.timeline-details-chip-title', 2);
        let mainEntryNameHandle = mainEntryTitles1[0];
        let mainEntryName = await mainEntryNameHandle.evaluate(element => element.innerHTML);
        chai_1.assert.isTrue(mainEntryName.includes('Task'));
        const piechartTitleHandle = mainEntryTitles1[1];
        const piechartTitle = await piechartTitleHandle.evaluate(element => element.innerHTML);
        chai_1.assert.isTrue(piechartTitle.includes('Aggregated Time'));
        // Ensure details are still visible after some time.
        await new Promise(res => setTimeout(res, 200));
        const mainEntryTitles2 = await (0, helper_js_1.waitForMany)('.timeline-details-chip-title', 2);
        mainEntryNameHandle = mainEntryTitles2[0];
        mainEntryName = await mainEntryNameHandle.evaluate(element => element.innerHTML);
        chai_1.assert.isTrue(mainEntryName.includes('Task'));
    });
});
//# sourceMappingURL=timeline_selection_test.js.map