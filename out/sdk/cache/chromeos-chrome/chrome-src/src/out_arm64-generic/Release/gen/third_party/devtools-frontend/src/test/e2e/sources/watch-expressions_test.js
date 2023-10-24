"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('Watch Expression Pane', async () => {
    (0, mocha_extensions_js_1.it)('collapses children when editing', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourcesPanel)();
        // Create watch expression "Text"
        await (0, helper_js_1.click)('[aria-label="Watch"]');
        await (0, helper_js_1.click)('[aria-label="Add watch expression"]');
        await (0, helper_js_1.typeText)('Text');
        await frontend.keyboard.press('Enter');
        // Expand watch element
        const element = await (0, helper_js_1.waitFor)('.object-properties-section-root-element');
        await frontend.keyboard.press('ArrowRight');
        // Retrieve watch element and ensure that it is expanded
        const initialExpandCheck = await element.evaluate(e => e.classList.contains('expanded'));
        chai_1.assert.strictEqual(initialExpandCheck, true);
        // Begin editing and check that element is now collapsed.
        await frontend.keyboard.press('Enter');
        const editingExpandCheck = await element.evaluate(e => e.classList.contains('expanded'));
        chai_1.assert.strictEqual(editingExpandCheck, false);
        // Remove the watch so that it does not interfere with other tests.
        await frontend.keyboard.press('Escape');
        await frontend.keyboard.press('Delete');
    });
    (0, mocha_extensions_js_1.it)('deobfuscates variable names', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.enableExperiment)('evaluateExpressionsWithSourceMaps');
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('sourcemap-scopes-minified.js', 'sourcemap-scopes-minified.html');
        const breakLocationOuterRegExp = /sourcemap-scopes-minified\.js:2$/;
        const watchText = 'arg0+1';
        const watchValue = '11';
        await (0, helper_js_1.step)('Run to outer scope breakpoint', async () => {
            await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 2);
            void target.evaluate('foo(10);');
            const scriptLocation = await (0, sources_helpers_js_1.waitForStackTopMatch)(breakLocationOuterRegExp);
            chai_1.assert.match(scriptLocation, breakLocationOuterRegExp);
        });
        await (0, helper_js_1.step)('Create a watch expression', async () => {
            await (0, helper_js_1.click)('[aria-label="Watch"]');
            await (0, helper_js_1.click)('[aria-label="Add watch expression"]');
            await (0, helper_js_1.typeText)(watchText);
            await frontend.keyboard.press('Enter');
        });
        await (0, helper_js_1.step)('Check the value for the deobfuscated name', async () => {
            const element = await (0, helper_js_1.waitFor)('.watch-expression-title');
            const nameAndValue = await element.evaluate(e => e.textContent);
            chai_1.assert.strictEqual(nameAndValue, `${watchText}: ${watchValue}`);
        });
    });
});
//# sourceMappingURL=watch-expressions_test.js.map