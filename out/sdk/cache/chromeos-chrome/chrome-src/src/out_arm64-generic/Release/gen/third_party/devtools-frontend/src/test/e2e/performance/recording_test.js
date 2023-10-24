"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const performance_helpers_js_1 = require("../helpers/performance-helpers.js");
(0, mocha_extensions_js_1.describe)('The Performance panel', () => {
    (0, mocha_extensions_js_1.it)('supports the user manually starting and stopping a recording', async () => {
        await (0, performance_helpers_js_1.navigateToPerformanceTab)('empty');
        await (0, performance_helpers_js_1.startRecording)();
        await (0, performance_helpers_js_1.stopRecording)();
        await (0, helper_js_1.waitForFunction)(async () => {
            const totalTime = await (0, performance_helpers_js_1.getTotalTimeFromSummary)();
            return totalTime > 0;
        });
    });
    (0, mocha_extensions_js_1.it)('can reload and record a trace', async () => {
        await (0, performance_helpers_js_1.navigateToPerformanceTab)('fake-website');
        await (0, performance_helpers_js_1.reloadAndRecord)();
        await (0, helper_js_1.waitForFunction)(async () => {
            const totalTime = await (0, performance_helpers_js_1.getTotalTimeFromSummary)();
            return totalTime > 0;
        });
    });
});
//# sourceMappingURL=recording_test.js.map