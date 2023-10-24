"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const goToResourceAndWaitForStyleSection = async (path) => {
    await (0, helper_js_1.goToResource)(path);
    await (0, elements_helpers_js_1.waitForElementsStyleSection)();
    await (0, elements_helpers_js_1.waitForPartialContentOfSelectedElementsNode)('<body>\u200B');
};
(0, mocha_extensions_js_1.describe)('CSS hints in the Styles panel', async () => {
    (0, mocha_extensions_js_1.it)('can detect inactive CSS', async () => {
        await goToResourceAndWaitForStyleSection('elements/inactive-css-page.html');
        await (0, elements_helpers_js_1.waitForStyleRule)('body');
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('wrapper');
        await (0, elements_helpers_js_1.waitForStyleRule)('#wrapper');
        const propertiesWithHints = await (0, elements_helpers_js_1.getPropertiesWithHints)();
        chai_1.assert.deepEqual(propertiesWithHints, ['align-content']);
    });
    (0, mocha_extensions_js_1.it)('does not show authoring hint when property value is invalid', async () => {
        await goToResourceAndWaitForStyleSection('elements/inactive-css-with-invalid-value.html');
        await (0, elements_helpers_js_1.waitForStyleRule)('body');
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('wrapper');
        await (0, elements_helpers_js_1.waitForStyleRule)('#wrapper');
        const propertiesWithHints = await (0, elements_helpers_js_1.getPropertiesWithHints)();
        chai_1.assert.deepEqual(propertiesWithHints, []);
    });
    (0, mocha_extensions_js_1.it)('updates the hint if the styles are edited', async () => {
        await goToResourceAndWaitForStyleSection('elements/inactive-css-page.html');
        await (0, elements_helpers_js_1.waitForStyleRule)('body');
        await (0, elements_helpers_js_1.waitForAndClickTreeElementWithPartialText)('wrapper');
        await (0, elements_helpers_js_1.waitForStyleRule)('#wrapper');
        chai_1.assert.deepEqual(await (0, elements_helpers_js_1.getPropertiesWithHints)(), ['align-content']);
        await (0, elements_helpers_js_1.focusCSSPropertyValue)('#wrapper', 'flex-wrap');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.type('wrap', { delay: 100 });
        await frontend.keyboard.press('Enter');
        await (0, helper_js_1.waitForFunction)(async () => {
            const propertiesWithHints = await (0, elements_helpers_js_1.getPropertiesWithHints)();
            return propertiesWithHints.length === 0;
        });
    });
});
//# sourceMappingURL=css-hints_test.js.map