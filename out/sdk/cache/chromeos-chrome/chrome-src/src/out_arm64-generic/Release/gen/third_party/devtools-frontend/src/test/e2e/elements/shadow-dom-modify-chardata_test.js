"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async function () {
    (0, mocha_extensions_js_1.it)('is able to update shadow dom tree structure upon typing', async () => {
        await (0, helper_js_1.goToResource)('elements/shadow-dom-modify-chardata.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, settings_helpers_js_1.togglePreferenceInSettingsTab)('Show user agent shadow DOM');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        const tree = await (0, helper_js_1.waitForAria)('Page DOM');
        chai_1.assert.include(await tree.evaluate(e => e.textContent), '<div>​</div>​');
        const input = await target.$('#input1');
        await input?.type('Bar');
        await (0, helper_js_1.waitForElementWithTextContent)('Bar', tree);
        chai_1.assert.include(await tree.evaluate(e => e.textContent), '<div>​Bar​</div>​');
    });
});
//# sourceMappingURL=shadow-dom-modify-chardata_test.js.map