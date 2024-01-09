"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const chai_1 = require("chai");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const emulation_helpers_js_1 = require("../helpers/emulation-helpers.js");
const ZENBOOK_VERTICAL_SPANNED_WIDTH = '1706';
const ZENBOOK_VERTICAL_WIDTH = '853';
(0, mocha_extensions_js_1.describe)('Test the Device Posture API support', async () => {
    beforeEach(async function () {
        await (0, emulation_helpers_js_1.startEmulationWithDualScreenPage)();
    });
    (0, mocha_extensions_js_1.it)('User can change the posture of a foldable device', async () => {
        await (0, emulation_helpers_js_1.selectFoldableDevice)();
        let widthSingle = await (0, emulation_helpers_js_1.getWidthOfDevice)();
        (0, chai_1.assert)(widthSingle === ZENBOOK_VERTICAL_WIDTH);
        await (0, emulation_helpers_js_1.clickDevicePosture)('Folded');
        const widthDual = await (0, emulation_helpers_js_1.getWidthOfDevice)();
        (0, chai_1.assert)(widthDual === ZENBOOK_VERTICAL_SPANNED_WIDTH);
        await (0, emulation_helpers_js_1.clickDevicePosture)('Continuous');
        widthSingle = await (0, emulation_helpers_js_1.getWidthOfDevice)();
        (0, chai_1.assert)(widthSingle === ZENBOOK_VERTICAL_WIDTH);
    });
    (0, mocha_extensions_js_1.it)('User may not change the posture for a non-foldable screen device', async () => {
        await (0, emulation_helpers_js_1.selectNonDualScreenDevice)();
        // posture dropdown should not be found
        const dropdown = await (0, emulation_helpers_js_1.getDevicePostureDropDown)();
        const element = dropdown.asElement();
        const hidden = element ? element.evaluate(x => x.classList.contains('hidden')) : false;
        (0, chai_1.assert)(hidden);
    });
});
//# sourceMappingURL=foldable-device_test.js.map