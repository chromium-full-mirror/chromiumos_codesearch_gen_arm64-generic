"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const shared_js_1 = require("../../../../test/interactions/helpers/shared.js");
const helper_js_1 = require("../../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../../test/shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
(0, mocha_extensions_js_1.describe)('Shortcut dialog screenshot tests', () => {
    (0, shared_js_1.preloadForCodeCoverage)('shortcut_dialog/basic.html');
    (0, mocha_extensions_js_1.itScreenshot)('renders the shortcut dialog button', async () => {
        await (0, shared_js_1.loadComponentDocExample)('shortcut_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'shortcut_dialog/shortcut_dialog_closed.png');
    });
    (0, mocha_extensions_js_1.itScreenshot)('renders the shortcut dialog', async () => {
        await (0, shared_js_1.loadComponentDocExample)('shortcut_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        const showButton = await (0, helper_js_1.waitFor)('devtools-button', container);
        const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await showButton.click();
        await animationEndPromise;
        // Have a larger threshold here: the font rendering is slightly different on CQ.
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'shortcut_dialog/shortcut_dialog_open.png', 3);
    });
    (0, mocha_extensions_js_1.itScreenshot)('click the close button and close the shortcut dialog', async () => {
        await (0, shared_js_1.loadComponentDocExample)('shortcut_dialog/basic.html');
        const container = await (0, helper_js_1.waitFor)('#container');
        const showButton = await (0, helper_js_1.waitFor)('devtools-button', container);
        const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
        await showButton.click();
        await animationEndPromise;
        const dialog = await (0, helper_js_1.waitFor)('devtools-dialog');
        const closeButton = await (0, helper_js_1.waitFor)('devtools-button', dialog);
        await closeButton.click();
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'shortcut_dialog/shortcut_dialog_closed_after_open.png');
    });
});
//# sourceMappingURL=ShortcutDialog_test.js.map