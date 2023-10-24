"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
function createSelectorsForFile(domainName, folderName, fileName) {
    const rootSelector = '.navigator-frame-tree-item[aria-label="top, frame"]';
    const domainSelector = `${rootSelector} + ol > [aria-label="${domainName}, domain"]`;
    const folderSelector = `${domainSelector} + ol > [aria-label^="${folderName}, "]`;
    const fileSelector = `${folderSelector} + ol > [aria-label="${fileName}, file"]`;
    return {
        rootSelector,
        domainSelector,
        folderSelector,
        fileSelector,
    };
}
(0, mocha_extensions_js_1.describe)('The Sources Tab', () => {
    (0, mocha_extensions_js_1.it)('resolves relative sourceURL annotations correctly', async () => {
        const domainName = `localhost:${(0, helper_js_1.getTestServerPort)()}`;
        await (0, sources_helpers_js_1.openFileInSourcesPanel)('sourceurl.html');
        await (0, sources_helpers_js_1.expandFileTree)(createSelectorsForFile(domainName, 'test/e2e/resources/sources', 'eval.js'));
        await (0, sources_helpers_js_1.expandFileTree)(createSelectorsForFile(domainName, 'test/e2e/resources/sources', 'inline.js'));
    });
    (0, mocha_extensions_js_1.it)('retains absolute webpack:/// and webpack-internal:/// sourceURL annotations', async () => {
        await (0, sources_helpers_js_1.openFileInSourcesPanel)('sourceurl.html');
        await (0, sources_helpers_js_1.expandFileTree)(createSelectorsForFile('webpack://', 'src', 'index.js'));
        await (0, sources_helpers_js_1.expandFileTree)(createSelectorsForFile('webpack-internal://', '(webpack-dev-server)', 'generated.js'));
    });
});
//# sourceMappingURL=sourceurl_test.js.map