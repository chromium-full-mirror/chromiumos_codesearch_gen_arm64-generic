"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
/**
 * Skipping this test for now as it only works on non-headless chrome.
 */
mocha_extensions_js_1.describe.skip('[crbug.com/1399414]: Element has violating properties', async function () {
    beforeEach(async function () {
        await (0, helper_js_1.enableExperiment)('highlightErrorsElementsPanel');
        await (0, elements_helpers_js_1.goToResourceAndWaitForStyleSection)('elements/form-with-issues.html');
        await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
    });
    (0, mocha_extensions_js_1.it)('tag is highlighted on input without name nor id', async () => {
        const elements = await (0, helper_js_1.waitForMany)('.violating-element', 2);
        const violatingElementOrAttr = await elements[0].evaluate(node => node.textContent);
        chai_1.assert.strictEqual(violatingElementOrAttr, 'input');
    });
    (0, mocha_extensions_js_1.it)('autocomplete attribute is highlighted when empty.', async () => {
        const elements = await (0, helper_js_1.waitForMany)('.violating-element', 2);
        const violatingElementOrAttr = await elements[1].evaluate(node => node.textContent);
        chai_1.assert.strictEqual(violatingElementOrAttr, 'autocomplete');
    });
    (0, mocha_extensions_js_1.it)('navigate to issues panel on hover', async () => {
        const elements = await (0, helper_js_1.waitForMany)('.violating-element', 2);
        const violatingElementOrAttr = elements[0];
        await violatingElementOrAttr.hover();
        const popupParent = await (0, helper_js_1.waitFor)('div.vbox.flex-auto.no-pointer-events');
        const popupText = await popupParent.evaluate(async (node) => {
            if (!node.shadowRoot) {
                throw new Error('Node shadow root not found.');
            }
            const popup = node.shadowRoot.querySelector('div.widget.has-padding');
            if (!popup) {
                throw new Error('Popup not found.');
            }
            return popup.textContent;
        });
        chai_1.assert.strictEqual(popupText, 'View issue:A form field element should have an id or name attribute');
        // Open the issue panel and look for the title;
        await (0, helper_js_1.click)('div.widget.has-padding a');
        const highlitedIssue = await (0, helper_js_1.waitFor)('.issue .header .title');
        const issueTitle = await highlitedIssue.evaluate(async (node) => node.textContent);
        chai_1.assert.strictEqual(issueTitle, 'A form field element should have an id or name attribute');
    });
});
//# sourceMappingURL=violating-element-and-attributes_test.js.map