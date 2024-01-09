"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('View transition pseudo styles on inspector stylesheet', async () => {
    (0, mocha_extensions_js_1.it)('should add view transition pseudo styles on inspector stylesheet when a view transition pseudo is added', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/view-transition.html');
        await target.bringToFront();
        await target.evaluate('startFirstViewTransition()');
        await frontend.bringToFront();
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('::view-transition');
        await (0, elements_helpers_js_1.waitForExactStyleRule)('::view-transition');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('::view-transition-old(root)');
        await (0, elements_helpers_js_1.waitForExactStyleRule)('::view-transition-old(root)');
    });
    // Flaking on multiple bots on CQ.
    mocha_extensions_js_1.it.skip('[crbug.com/1512610] should not add view transition pseudo styles if inspector stylesheet already has view transition pseudo styles', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/view-transition.html');
        await target.bringToFront();
        await target.evaluate('startFirstViewTransition()');
        await frontend.bringToFront();
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('::view-transition');
        await (0, elements_helpers_js_1.waitForExactStyleRule)('::view-transition');
        await target.bringToFront();
        await target.evaluate('startNextViewTransition()');
        await frontend.bringToFront();
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('::view-transition');
        await (0, elements_helpers_js_1.waitForExactStyleRule)('::view-transition');
        const displayedRules = await (0, elements_helpers_js_1.getDisplayedStyleRules)();
        chai_1.assert.strictEqual(displayedRules.filter(rule => rule.selectorText === '::view-transition').length, 1);
    });
});
//# sourceMappingURL=add-view-transition-pseudo-styles_test.js.map