"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async function () {
    (0, mocha_extensions_js_1.it)('search is performed as the user types when the "searchAsYouType" setting is enabled', async () => {
        await (0, settings_helpers_js_1.togglePreferenceInSettingsTab)('Search as you type', true);
        await (0, elements_helpers_js_1.summonAndWaitForSearchBox)();
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.type('html');
        await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 1');
    });
    (0, mocha_extensions_js_1.it)('search is closed on reload', async () => {
        await (0, elements_helpers_js_1.summonAndWaitForSearchBox)();
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.type('html');
        await frontend.keyboard.press('Enter');
        await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 1');
        await (0, helper_js_1.waitForNone)(`${elements_helpers_js_1.SEARCH_BOX_SELECTOR}.hidden`);
        await target.reload();
        await (0, helper_js_1.waitFor)(`${elements_helpers_js_1.SEARCH_BOX_SELECTOR}.hidden`);
    });
    (0, mocha_extensions_js_1.describe)('when searchAsYouType setting is disabled', () => {
        beforeEach(async () => {
            await (0, settings_helpers_js_1.togglePreferenceInSettingsTab)('Search as you type', false);
            await new Promise(r => setTimeout(r, 1000));
        });
        (0, mocha_extensions_js_1.it)('search is only performed when Enter is pressed', async () => {
            await (0, helper_js_1.goToResource)('elements/elements-search-test.html');
            await (0, elements_helpers_js_1.waitForSelectedNodeToBeExpanded)();
            await (0, elements_helpers_js_1.summonAndWaitForSearchBox)();
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.keyboard.type('one');
            // Wait a bit in case the search results are fetched, otherwise the assertion might always pass.
            await (0, helper_js_1.timeout)(200);
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('');
            await frontend.keyboard.press('Enter');
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 1');
        });
        (0, mocha_extensions_js_1.it)('search should jump to next match when Enter is pressed when the input is not changed', async () => {
            await (0, helper_js_1.goToResource)('elements/elements-search-test.html');
            await (0, elements_helpers_js_1.waitForSelectedNodeToBeExpanded)();
            await (0, elements_helpers_js_1.summonAndWaitForSearchBox)();
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.keyboard.type('two');
            await frontend.keyboard.press('Enter');
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 2');
            await frontend.keyboard.press('Enter');
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('2 of 2');
        });
        (0, mocha_extensions_js_1.it)('search should be performed with the new query when the input is changed and Enter is pressed', async () => {
            await (0, helper_js_1.goToResource)('elements/elements-search-test.html');
            await (0, elements_helpers_js_1.waitForSelectedNodeToBeExpanded)();
            await (0, elements_helpers_js_1.summonAndWaitForSearchBox)();
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.keyboard.type('one');
            await frontend.keyboard.press('Enter');
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 1');
            await frontend.keyboard.press('Backspace');
            await frontend.keyboard.press('Backspace');
            await frontend.keyboard.press('Backspace');
            await frontend.keyboard.type('two');
            await frontend.keyboard.press('Enter');
            await (0, elements_helpers_js_1.assertSearchResultMatchesText)('1 of 2');
        });
    });
});
//# sourceMappingURL=search-elements_test.js.map