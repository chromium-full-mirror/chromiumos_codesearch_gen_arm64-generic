"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
async function checkboxIsChecked(element) {
    return await element.evaluate(node => node.checked);
}
async function isVisible(element, container) {
    const elementBox = JSON.parse(await element.evaluate(e => JSON.stringify(e.getBoundingClientRect())));
    const containerBox = JSON.parse(await container.evaluate(e => JSON.stringify(e.getBoundingClientRect())));
    return elementBox.top <= containerBox.top ? containerBox.top - elementBox.top <= elementBox.height :
        elementBox.bottom - containerBox.bottom <= elementBox.height;
}
(0, mocha_extensions_js_1.describe)('The Network request blocking panel', () => {
    beforeEach(async () => {
        await (0, settings_helpers_js_1.openPanelViaMoreTools)('Network request blocking');
        for (let i = 0; i < 20; i++) {
            const plusButton = await (0, helper_js_1.waitForAria)('Add network request blocking pattern');
            await plusButton.click();
            const inputField = await (0, helper_js_1.waitFor)('.blocked-url-edit-value > input');
            await inputField.type(i.toString());
            const addButton = await (0, helper_js_1.waitForAria)('Add');
            await addButton.click();
        }
        const networkRequestBlockingCheckbox = await (await (0, helper_js_1.waitForAria)('Enable network request blocking')).toElement('input');
        (0, chai_1.expect)(await checkboxIsChecked(networkRequestBlockingCheckbox)).to.equal(true);
        await networkRequestBlockingCheckbox.click();
        (0, chai_1.expect)(await checkboxIsChecked(networkRequestBlockingCheckbox)).to.equal(false);
    });
    (0, mocha_extensions_js_1.it)('prohibits unchecking patterns when blocking is disabled', async () => {
        await (0, helper_js_1.waitForAriaNone)('Edit');
        await (0, helper_js_1.waitForAriaNone)('Remove');
        const firstListItem = await (0, helper_js_1.waitFor)('.blocked-url');
        const firstCheckbox = await (await (0, helper_js_1.waitFor)('.widget > .list > .list-item > .blocked-url > .blocked-url-checkbox')).toElement('input');
        (0, chai_1.expect)(await checkboxIsChecked(firstCheckbox)).to.equal(true);
        await firstListItem.click();
        (0, chai_1.expect)(await checkboxIsChecked(firstCheckbox)).to.equal(true);
    });
    (0, mocha_extensions_js_1.it)('allows scrolling the pattern list when blocking is disabled', async () => {
        const list = await (0, helper_js_1.waitFor)('.list');
        const lastListItem = await (0, helper_js_1.waitForElementWithTextContent)('19');
        // TODO: this is not completely fair way to scroll but mouseWheel does not
        // seem to work here in the new-headless on Windows and Linux.
        await lastListItem.scrollIntoView();
        await (0, helper_js_1.waitForFunction)(() => isVisible(lastListItem, list));
    });
});
//# sourceMappingURL=network-request-blocking-panel_test.js.map