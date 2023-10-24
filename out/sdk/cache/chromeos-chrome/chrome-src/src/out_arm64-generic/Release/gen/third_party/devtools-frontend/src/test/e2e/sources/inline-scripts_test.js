"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources Tab', () => {
    // Skip this test until the flakiness is fixed.
    mocha_extensions_js_1.it.skip('[crbug.com/1466450]: sets the breakpoint in the first script for multiple inline scripts', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('inline-scripts.html', 'inline-scripts.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 4);
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 11);
        target.reload();
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
        let names = await (0, sources_helpers_js_1.getCallFrameNames)();
        chai_1.assert.strictEqual(names[0], 'f1');
        await (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON);
        names = await (0, sources_helpers_js_1.getCallFrameNames)();
        chai_1.assert.strictEqual(names[0], 'f4');
    });
});
//# sourceMappingURL=inline-scripts_test.js.map