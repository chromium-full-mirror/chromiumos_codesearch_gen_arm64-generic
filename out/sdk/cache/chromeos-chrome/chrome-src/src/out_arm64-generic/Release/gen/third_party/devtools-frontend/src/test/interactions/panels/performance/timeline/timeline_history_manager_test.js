"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../../shared/screenshots.js");
const shared_js_1 = require("../../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('Timeline History Manager tracks', function () {
    // TODO(crbug.com/1472155): Improve perf panel trace load speed to
    // prevent timeout bump.
    this.timeout(20_000);
    (0, shared_js_1.preloadForCodeCoverage)('performance_panel/timeline_history_manager.html');
    (0, mocha_extensions_js_1.itScreenshot)('renders minimap for parsed profiles in the HistoryManager', async () => {
        await (0, shared_js_1.loadComponentDocExample)('performance_panel/timeline_history_manager.html');
        const dropDown = await (0, helper_js_1.waitFor)('.drop-down');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(dropDown, 'performance/history_dropdown.png', 1);
    });
});
//# sourceMappingURL=timeline_history_manager_test.js.map