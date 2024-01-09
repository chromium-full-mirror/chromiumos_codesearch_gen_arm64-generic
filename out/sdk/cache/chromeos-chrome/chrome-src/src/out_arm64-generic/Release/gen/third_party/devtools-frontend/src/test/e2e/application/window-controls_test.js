"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const application_helpers_js_1 = require("../helpers/application-helpers.js");
const TEST_HTML_FILE = 'window-controls';
async function assertChecked(checkbox, expected) {
    const checked = await checkbox.evaluate(el => el.checked);
    chai_1.assert.strictEqual(checked, expected);
}
(0, mocha_extensions_js_1.describe)('The Window Controls Overlay', async () => {
    (0, mocha_extensions_js_1.it)('shows emulation controls when manifest with property display_overide is present', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, application_helpers_js_1.navigateToApplicationTab)(target, TEST_HTML_FILE);
        const windowControlsCheckbox = await (await (0, helper_js_1.waitFor)('[title="Emulate the Window Controls Overlay on"]')).toElement('input');
        const controlsDropDown = await (0, helper_js_1.waitFor)('.chrome-select');
        // Verify dropdown options
        const options = await controlsDropDown.$$('option');
        const values = await Promise.all(options.map(option => option.evaluate(el => el.value)));
        chai_1.assert.deepStrictEqual(values, ['Windows', 'Mac', 'Linux']);
        // Verify selecting an option
        void (0, helper_js_1.selectOption)(await controlsDropDown.toElement('select'), 'Linux');
        const selectedOption = await controlsDropDown.evaluate(input => input.value);
        chai_1.assert.strictEqual(selectedOption, 'Linux');
        // Verify clicking the checkbox
        await assertChecked(windowControlsCheckbox, false);
        await windowControlsCheckbox.click();
        await assertChecked(windowControlsCheckbox, true);
    });
});
//# sourceMappingURL=window-controls_test.js.map