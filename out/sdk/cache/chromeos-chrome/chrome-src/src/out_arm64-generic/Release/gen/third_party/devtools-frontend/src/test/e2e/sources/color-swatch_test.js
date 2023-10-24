"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const context_menu_helpers_js_1 = require("../helpers/context-menu-helpers.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('Color swatches in the sources panel', () => {
    (0, mocha_extensions_js_1.it)('allows changing the color format', async () => {
        await (0, sources_helpers_js_1.openFileInSourcesPanel)('inline-css.html');
        await (0, sources_helpers_js_1.openFileInEditor)('inline-css.html');
        const editor = await (0, helper_js_1.waitForAria)('Code editor');
        (0, helper_js_1.assertNotNullOrUndefined)(editor);
        await (0, helper_js_1.waitForFunction)(() => (0, helper_js_1.$textContent)('red', editor));
        await (0, elements_helpers_js_1.shiftClickColorSwatch)(editor, 0);
        const menu = await (0, context_menu_helpers_js_1.waitForSoftContextMenu)();
        await (0, helper_js_1.click)('[aria-label="#f00"]', { root: menu });
        await (0, helper_js_1.waitForFunction)(() => (0, helper_js_1.$textContent)('#f00', editor));
    });
});
//# sourceMappingURL=color-swatch_test.js.map