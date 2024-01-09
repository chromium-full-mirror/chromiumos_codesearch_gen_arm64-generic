"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async function () {
    (0, mocha_extensions_js_1.it)('is able to update shadow dom tree structure upon typing', async () => {
        await (0, helper_js_1.goToResource)('elements/shadow-dom-modify-chardata.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, settings_helpers_js_1.togglePreferenceInSettingsTab)('Show user agent shadow DOM');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        const tree = await (0, helper_js_1.waitForAria)('Page DOM');
        chai_1.assert.include(await tree.evaluate(e => e.textContent), '<div>​</div>​');
        const input = await target.$('#input1');
        await input?.type('Bar');
        await (0, helper_js_1.waitForElementWithTextContent)('Bar', tree);
        chai_1.assert.include(await tree.evaluate(e => e.textContent), '<div>​Bar​</div>​');
    });
    (0, mocha_extensions_js_1.it)('shows the documentURL for <iframe> documents', async () => {
        await (0, helper_js_1.goToResource)('elements/iframe-documenturl.html');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        // Check to make sure we have the correct node selected after opening a file
        await (0, elements_helpers_js_1.waitForContentOfSelectedElementsNode)('<body>\u200B');
        // Navigate to the <iframe> child node.
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForContentOfSelectedElementsNode)('<iframe src=\u200B"shadow-dom-modify-chardata.html">\u200B…\u200B</iframe>\u200B');
        // Open the iframe (shows new nodes, but does not alter the selected node)
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForChildrenOfSelectedElementNode)();
        await (0, elements_helpers_js_1.waitForContentOfSelectedElementsNode)('<iframe src=\u200B"shadow-dom-modify-chardata.html">\u200B');
        // Check that the #document tree node properly reflects the document URL.
        await frontend.keyboard.press('ArrowRight');
        await (0, elements_helpers_js_1.waitForPartialContentOfSelectedElementsNode)('#document');
        chai_1.assert.match(await (0, elements_helpers_js_1.getContentOfSelectedNode)(), /#document \(https?:\/\/.*\/test\/e2e\/resources\/elements\/shadow-dom-modify-chardata.html\)/);
    });
});
//# sourceMappingURL=elements-tree_test.js.map