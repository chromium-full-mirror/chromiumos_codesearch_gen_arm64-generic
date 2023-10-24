"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async () => {
    (0, mocha_extensions_js_1.it)('shows OOPIF frame error inline', async () => {
        await (0, helper_js_1.goToResource)('elements/page-error.html');
        await (0, elements_helpers_js_1.waitForElementsStyleSection)();
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        await (0, elements_helpers_js_1.waitForElementWithPartialText)('<iframe src=');
        await (0, elements_helpers_js_1.waitForElementWithPartialText)('404 - File not found');
    });
});
//# sourceMappingURL=oopif-elements_test.js.map