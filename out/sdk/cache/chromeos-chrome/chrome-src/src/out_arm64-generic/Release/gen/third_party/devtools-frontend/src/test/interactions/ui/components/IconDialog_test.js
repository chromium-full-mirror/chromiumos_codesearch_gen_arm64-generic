"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const shared_js_1 = require("../../../../test/interactions/helpers/shared.js");
const helper_js_1 = require("../../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../../test/shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
(0, mocha_extensions_js_1.describe)('IconDialog screenshot tests', () => {
    (0, shared_js_1.preloadForCodeCoverage)('icon_dialog/basic.html');
    (0, mocha_extensions_js_1.itScreenshot)('renders the icon dialog button', async () => {
        await (0, shared_js_1.loadComponentDocExample)('icon_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'icon_dialog/icon_dialog_closed.png');
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the icon dialog', async () => {
        await (0, shared_js_1.loadComponentDocExample)('icon_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        const icon = await (0, helper_js_1.waitFor)('devtools-icon', container);
        const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await icon.click();
        await animationEndPromise;
        // Have a larger threshold here: the font rendering is slightly different on CQ.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'icon_dialog/icon_dialog_open.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('click the close button and close the icon dialog', async () => {
        await (0, shared_js_1.loadComponentDocExample)('icon_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        const icon = await (0, helper_js_1.waitFor)('devtools-icon', container);
        const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await icon.click();
        await animationEndPromise;
        const dialog = await (0, helper_js_1.waitFor)('devtools-dialog');
        const closeButton = await (0, helper_js_1.waitFor)('devtools-icon', dialog);
        await closeButton.click();
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'icon_dialog/icon_dialog_closed_after_open.png');
    });
});
//# sourceMappingURL=IconDialog_test.js.map