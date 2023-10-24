"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources Tab', async () => {
    (0, mocha_extensions_js_1.it)('links to the correct origins for eval\'ed resources', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('call-to-foo.js', 'eval-origin.html');
        await (0, helper_js_1.waitFor)('.devtools-link[title$="foo.js:3"]');
    });
});
//# sourceMappingURL=eval_test.js.map