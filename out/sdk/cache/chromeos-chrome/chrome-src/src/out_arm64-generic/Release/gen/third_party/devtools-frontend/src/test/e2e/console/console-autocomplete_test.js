"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async () => {
    (0, mocha_extensions_js_1.beforeEach)(async () => {
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        await (0, console_helpers_js_1.focusConsolePrompt)();
    });
    afterEach(async () => {
        // Make sure we don't close DevTools while there is an outstanding
        // Runtime.evaluate CDP request, which causes an error. crbug.com/1134579.
        await (0, sources_helpers_js_1.openSourcesPanel)();
    });
    // See the comments in console-repl-mode_test to see why this is necessary.
    async function autocompleteTest(prefix, suffix) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.typeText)('let object = {aaa:1, bbb:2}; let map = new Map([["somekey", 5], ["some other key", 42]])');
        await frontend.keyboard.press('Enter');
        // Wait for the console to be usable again.
        await frontend.waitForFunction(() => {
            return document.querySelectorAll('.console-user-command-result').length === 1;
        });
        const appearPromise = (0, helper_js_1.waitFor)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await (0, helper_js_1.typeText)(prefix);
        await appearPromise;
        const disappearPromise = (0, helper_js_1.waitForNone)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await frontend.keyboard.press('Escape');
        await disappearPromise;
        const appearPromise2 = (0, helper_js_1.waitFor)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await (0, helper_js_1.typeText)(suffix);
        await appearPromise2;
        // The first auto-suggest result is evaluated and generates a preview, which
        // we wait for so that we don't end the test/navigate with an open
        // Runtime.evaluate CDP request, which causes an error. crbug.com/1134579.
        await (0, helper_js_1.waitFor)('.console-eager-inner-preview > span');
    }
    (0, mocha_extensions_js_1.it)('triggers autocompletion for `object.`', async () => {
        await autocompleteTest('object', '.');
    });
    (0, mocha_extensions_js_1.it)('triggers autocompletion for `object?.`', async () => {
        await autocompleteTest('object', '?.');
    });
    (0, mocha_extensions_js_1.it)('triggers autocompletion for `object[`', async () => {
        await autocompleteTest('object', '[');
    });
    (0, mocha_extensions_js_1.it)('triggers autocompletion for `map.get(`', async () => {
        await autocompleteTest('map.get', '(');
    });
    (0, mocha_extensions_js_1.it)('triggers autocompletion for `foo.#my`', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.typeText)('class Foo {#myPrivateField = 1}; let foo = new Foo');
        await frontend.keyboard.press('Enter');
        // Wait for the console to be usable again.
        await frontend.waitForFunction(() => {
            return document.querySelectorAll('.console-user-command-result').length === 1;
        });
        const appearPromise = (0, helper_js_1.waitFor)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await (0, helper_js_1.typeText)('foo');
        await appearPromise;
        const disappearPromise = (0, helper_js_1.waitForNone)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await frontend.keyboard.press('Escape');
        await disappearPromise;
        const appearPromise2 = (0, helper_js_1.waitFor)(console_helpers_js_1.CONSOLE_TOOLTIP_SELECTOR);
        await (0, helper_js_1.typeText)('.#my');
        await appearPromise2;
    });
});
//# sourceMappingURL=console-autocomplete_test.js.map