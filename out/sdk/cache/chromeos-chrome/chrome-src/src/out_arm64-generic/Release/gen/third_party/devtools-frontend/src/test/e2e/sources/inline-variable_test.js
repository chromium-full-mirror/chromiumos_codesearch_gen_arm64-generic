"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
async function retrieveCodeMirrorEditorContent() {
    const editor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
    return editor.evaluate(node => [...node.querySelectorAll('.cm-line')].map(node => node.textContent || '') || []);
}
(0, mocha_extensions_js_1.describe)('Sources Tab', async function () {
    (0, mocha_extensions_js_1.it)('shows correct inline variable at definition', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('inline-variable.js', 'inline-variable.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 3);
        const scriptEvaluation = target.evaluate('simple(41);');
        await (0, helper_js_1.waitFor)('.cm-line > .cm-variableValues');
        const contents = await retrieveCodeMirrorEditorContent();
        chai_1.assert.strictEqual(contents[0], 'function simple(a) {a = 41');
        chai_1.assert.strictEqual(contents[1], '  let x = a + 1;x = 42');
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        await scriptEvaluation;
    });
});
//# sourceMappingURL=inline-variable_test.js.map