"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const context_menu_helpers_js_1 = require("../helpers/context-menu-helpers.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('The Elements tab', async function () {
    (0, mocha_extensions_js_1.it)('does not break when switching panels while editing as HTML', async () => {
        await (0, helper_js_1.goToResource)('elements/switch-panels-while-editing-as-html.html');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
        const elementsContentPanel = await (0, helper_js_1.waitFor)('#elements-content');
        const selectedNode = await (0, helper_js_1.waitForElementWithTextContent)('Inspected Node', elementsContentPanel);
        await selectedNode.click({ button: 'right' });
        const editAsHTMLOption = await (0, context_menu_helpers_js_1.findSubMenuEntryItem)('Edit as HTML', false);
        await editAsHTMLOption.click();
        await (0, helper_js_1.waitFor)('.elements-disclosure devtools-text-editor');
        await (0, sources_helpers_js_1.openSourcesPanel)();
        await (0, elements_helpers_js_1.navigateToElementsTab)();
        await (0, helper_js_1.waitForNone)('.elements-disclosure devtools-text-editor');
    });
});
//# sourceMappingURL=switch-panels-while-editing-as-html_test.js.map