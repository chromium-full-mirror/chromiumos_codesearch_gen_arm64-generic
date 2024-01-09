"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources panel', async () => {
    (0, mocha_extensions_js_1.describe)('contains a debugger sidebar', () => {
        (0, mocha_extensions_js_1.it)('which can be toggled via Ctrl+Shift+H shortcut keyboard', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await (0, sources_helpers_js_1.openSourcesPanel)();
            // Make sure that the debug sidebar is not collapsed in initial state
            await (0, helper_js_1.waitFor)('.scripts-debug-toolbar');
            //  Collapse debug sidebar
            await (0, sources_helpers_js_1.toggleDebuggerSidebar)(frontend);
            await (0, helper_js_1.waitForNone)('.scripts-debug-toolbar');
            // Expand debug sidebar
            await (0, sources_helpers_js_1.toggleDebuggerSidebar)(frontend);
            await (0, helper_js_1.waitFor)('.scripts-debug-toolbar');
        });
    });
});
//# sourceMappingURL=debugger-sidebar_test.js.map