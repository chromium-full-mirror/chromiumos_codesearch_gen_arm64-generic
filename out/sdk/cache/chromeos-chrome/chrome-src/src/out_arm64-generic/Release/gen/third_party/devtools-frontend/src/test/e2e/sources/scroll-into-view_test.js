"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources tab', async () => {
    (0, mocha_extensions_js_1.it)('should also scroll horizontally when stopping', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        // We need to disable the automatic pretty printing
        // so that we can check whether the Sources panel
        // correctly scrolls horizontally upon stopping.
        await (0, helper_js_1.disableExperiment)('sourcesPrettyPrint');
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('scroll-into-view.js', 'scroll-into-view.html');
        const scriptEvaluation = target.evaluate('funcWithLongLines()');
        await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
        const scrollLeft = await (0, helper_js_1.waitForFunction)(async () => {
            const scroller = await (0, helper_js_1.$)('.cm-editor > .cm-scroller');
            return await scroller.evaluate(e => e.scrollLeft);
        });
        chai_1.assert.isAbove(scrollLeft, 0);
        await Promise.all([
            (0, helper_js_1.click)(sources_helpers_js_1.RESUME_BUTTON),
            scriptEvaluation,
        ]);
    });
});
//# sourceMappingURL=scroll-into-view_test.js.map