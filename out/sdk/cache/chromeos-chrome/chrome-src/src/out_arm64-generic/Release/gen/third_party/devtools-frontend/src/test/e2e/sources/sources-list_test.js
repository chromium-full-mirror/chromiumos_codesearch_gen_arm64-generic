"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Sources Tab', async () => {
    (0, mocha_extensions_js_1.it)('can show JavaScript files after dynamic loading', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openFileInSourcesPanel)('dynamic-loading-javascript.html');
        // Load the JavaScript files by executing the function in `dynamic-loading.html`
        const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(2, async () => {
            await target.evaluate('go();');
        });
        chai_1.assert.deepEqual(capturedFileNames, [
            '/test/e2e/resources/sources/minified-sourcecode.js',
            '/test/e2e/resources/sources/evalSourceURL.js',
        ]);
    });
    (0, mocha_extensions_js_1.it)('can show CSS files after dynamic loading', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openFileInSourcesPanel)('dynamic-loading-css.html');
        const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(1, async () => {
            // Load the CSS file by executing the function in `dynamic-loading-css.html`
            await target.evaluate('go();');
            // We must focus the target page, as Chrome does not actually fetch the
            // css file if the tab is not focused
            await target.bringToFront();
            await frontend.bringToFront();
        });
        chai_1.assert.deepEqual(capturedFileNames, [
            '/test/e2e/resources/sources/dynamic.css',
        ]);
    });
    (0, mocha_extensions_js_1.it)('populates sources even if it the Sources Tab was not open at refresh', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.goToResource)('pages/hello-world.html');
        await (0, elements_helpers_js_1.navigateToElementsTab)();
        const capturedFileNames = await (0, sources_helpers_js_1.captureAddedSourceFiles)(1, async () => {
            await target.reload({ waitUntil: 'networkidle0' });
            await (0, sources_helpers_js_1.openSourcesPanel)();
        });
        chai_1.assert.deepEqual(capturedFileNames, ['/test/e2e/resources/pages/hello-world.html']);
    });
});
//# sourceMappingURL=sources-list_test.js.map