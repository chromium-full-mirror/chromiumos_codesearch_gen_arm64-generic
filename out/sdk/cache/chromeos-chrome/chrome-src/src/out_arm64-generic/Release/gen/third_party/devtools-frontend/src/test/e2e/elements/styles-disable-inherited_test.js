"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async function () {
    (0, mocha_extensions_js_1.it)('does not break further style inspection if inherited style property was disabled', async () => {
        await (0, helper_js_1.goToResource)('elements/styles-disable-inherited.html');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        const elementsContentPanel = await (0, helper_js_1.waitFor)('#elements-content');
        await (0, helper_js_1.click)('text/nested', {
            root: elementsContentPanel,
        });
        await (0, elements_helpers_js_1.waitForElementsStyleSection)();
        await (0, elements_helpers_js_1.checkStyleAttributes)(['display: block;', 'font-weight: bold;']);
        await (0, helper_js_1.click)('text/container', {
            root: elementsContentPanel,
        });
        await (0, elements_helpers_js_1.uncheckStylesPaneCheckbox)('font-weight bold');
        await (0, helper_js_1.click)('text/nested', {
            root: elementsContentPanel,
        });
        await (0, elements_helpers_js_1.checkStyleAttributes)(['display: block;']);
    });
});
//# sourceMappingURL=styles-disable-inherited_test.js.map