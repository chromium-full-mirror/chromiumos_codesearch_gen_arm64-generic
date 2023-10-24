"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async () => {
    (0, mocha_extensions_js_1.it)('Does not crash if it fails to convert alert() argument to string', async () => {
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        target.reload();
        const result = (await (0, console_helpers_js_1.getConsoleMessages)('alert-toString-exception'))[0];
        chai_1.assert.strictEqual(result, 'Uncaught Exception in toString().');
    });
});
//# sourceMappingURL=alert-toString-exception_test.js.map