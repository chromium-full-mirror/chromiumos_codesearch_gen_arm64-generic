"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async function () {
    (0, mocha_extensions_js_1.it)('is cleared via the console.clear() method', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        await (0, console_helpers_js_1.focusConsolePrompt)();
        // eslint-disable-next-line no-console
        await target.evaluate(() => console.log('target'));
        await (0, helper_js_1.step)('enter 1 in console', async () => {
            await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)(frontend, '1;');
        });
        await (0, helper_js_1.step)('enter 2 in console', async () => {
            await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)(frontend, '2;');
        });
        await (0, helper_js_1.step)('enter 3 in console', async () => {
            await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)(frontend, '3;');
        });
        await (0, helper_js_1.step)('Check the evaluation results from console', async () => {
            const evaluateResults = await frontend.evaluate(() => {
                return Array.from(document.querySelectorAll('.console-user-command-result')).map(node => node.textContent);
            });
            chai_1.assert.deepEqual(evaluateResults, ['1', '2', '3'], 'did not find expected output in the console');
        });
        await (0, helper_js_1.step)('enter console.clear() in console', async () => {
            await (0, console_helpers_js_1.typeIntoConsole)(frontend, 'console.clear();');
        });
        await (0, helper_js_1.step)('wait for the console to be cleared', async () => {
            await frontend.waitForFunction(() => {
                return document.querySelectorAll('.console-user-command-result').length === 1;
            });
        });
        await (0, helper_js_1.step)('check that the remaining text in the console is correct', async () => {
            const clearResult = await frontend.evaluate(() => {
                const result = document.querySelector('.console-user-command-result');
                if (!result) {
                    chai_1.assert.fail('Could not find user command result in the DOM.');
                }
                return result.textContent;
            });
            chai_1.assert.strictEqual(clearResult, 'undefined', 'the result of clear was not undefined');
        });
        // Check that the sidebar is also cleared.
        await (0, helper_js_1.click)('[aria-label="Show console sidebar"]');
        const sideBar = await (0, helper_js_1.waitFor)('div[slot="insertion-point-sidebar"]');
        const entries = await (0, helper_js_1.$$)('li', sideBar);
        const entriesText = await Promise.all(entries.map(e => e.evaluate(e => e.textContent)));
        chai_1.assert.deepStrictEqual(entriesText, [
            '1 message',
            '<other>1',
            '1 user message',
            '<other>1',
            'No errors',
            'No warnings',
            '1 info',
            '<other>1',
            'No verbose',
        ]);
    });
});
//# sourceMappingURL=console-clear_test.js.map