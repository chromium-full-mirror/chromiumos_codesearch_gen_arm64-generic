"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('ColorPicker', () => {
    (0, mocha_extensions_js_1.it)('scrolls to the bottom when previewing palettes', async () => {
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/css-variables-many.html');
        const swatch = await (0, helper_js_1.waitForFunction)(() => (0, elements_helpers_js_1.getColorSwatch)(/* parent*/ undefined, 0));
        await (0, helper_js_1.clickElement)(swatch);
        const panel = await (0, helper_js_1.waitFor)('.palette-panel');
        await (0, helper_js_1.click)('.spectrum-palette-switcher');
        await (0, helper_js_1.waitForFunction)(() => panel.isIntersectingViewport({ threshold: 1 }));
        const palette = await (0, helper_js_1.waitForFunction)(async () => await (0, helper_js_1.$textContent)('CSS Variables') ?? undefined);
        // Need to wait for the spectrum overlay to disappear (i.e., finish its transition) for it to not eat our next click
        const overlay = await (0, helper_js_1.$)('.spectrum-overlay');
        (0, helper_js_1.assertNotNullOrUndefined)(overlay);
        await (0, helper_js_1.prepareWaitForEvent)(overlay, 'transitionend');
        await (0, helper_js_1.clickElement)(palette);
        await (0, helper_js_1.waitForEvent)(overlay, 'transitionend');
        await (0, helper_js_1.click)('.spectrum-palette-switcher');
        await (0, helper_js_1.waitForFunction)(() => panel.isIntersectingViewport({ threshold: 1 }));
    });
});
//# sourceMappingURL=color-picker_test.js.map