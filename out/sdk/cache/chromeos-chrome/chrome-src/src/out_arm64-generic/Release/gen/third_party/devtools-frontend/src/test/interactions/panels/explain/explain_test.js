"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
const shared_js_1 = require("../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('ConsoleInsight', function () {
    (0, shared_js_1.preloadForCodeCoverage)('console_insight/static.html');
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders initial state', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await (0, helper_js_1.waitFor)('.consent-button');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(await (0, helper_js_1.waitFor)('devtools-console-insight'), 'explain/console_insight.png', 3);
    });
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders the state after consent', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await (0, helper_js_1.click)('.consent-button');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(await (0, helper_js_1.waitFor)('devtools-console-insight'), 'explain/console_insight_after_consent.png', 3);
    });
});
//# sourceMappingURL=explain_test.js.map