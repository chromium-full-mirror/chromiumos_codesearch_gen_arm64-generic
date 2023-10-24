"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const shared_js_1 = require("../../../../test/interactions/helpers/shared.js");
const helper_js_1 = require("../../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../../test/shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
async function openDialog(dialogNumber) {
    await (0, shared_js_1.loadComponentDocExample)('dialog/basic.html');
    const dialog = await (0, helper_js_1.waitFor)(`#dialog-${dialogNumber}`);
    const animationEndPromise = (0, screenshots_js_1.waitForDialogAnimationEnd)();
    await dialog.evaluate((element) => {
        const dialog = element;
        void dialog.setDialogVisible(true);
    });
    await animationEndPromise;
    return await (0, helper_js_1.waitFor)('dialog', dialog);
}
(0, mocha_extensions_js_1.describe)('dialog screenshots test', () => {
    (0, shared_js_1.preloadForCodeCoverage)('dialog/basic.html');
    (0, mocha_extensions_js_1.describe)('dialog is positioned properly', () => {
        (0, mocha_extensions_js_1.itScreenshot)('renders the dialog at the top left properly', async () => {
            await openDialog(1);
            const container = await (0, helper_js_1.waitFor)('#container-1');
            await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'dialog/top-left-open.png');
        });
        (0, mocha_extensions_js_1.itScreenshot)('renders a dialog at the bottom with automatic horizontal alignment properly', async () => {
            await openDialog(5);
            const container = await (0, helper_js_1.waitFor)('#container-5');
            await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'dialog/bottom-auto-open.png');
        });
        (0, mocha_extensions_js_1.itScreenshot)('renders the dialog at the bottom center properly', async () => {
            await openDialog(7);
            const container = await (0, helper_js_1.waitFor)('#container-7');
            await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'dialog/bottom-center-open.png');
        });
        (0, mocha_extensions_js_1.itScreenshot)('renders a dialog for super narrow origin at the top with automatic horizontal alignment properly', async () => {
            await openDialog(20);
            const container = await (0, helper_js_1.waitFor)('#container-20');
            await (0, screenshots_js_1.assertElementScreenshotUnchanged)(container, 'dialog/narrow-top-auto-open.png');
        });
    });
});
(0, mocha_extensions_js_1.describe)('dialog interactions test', () => {
    (0, shared_js_1.preloadForCodeCoverage)('dialog/basic.html');
    it('keeps the dialog open when moving the cursor is moved inside the hitarea', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await openDialog(2);
        const container = await (0, helper_js_1.waitFor)('#dialog-2');
        const hitArea = await container.evaluate((element) => {
            const dialog = element;
            const bounds = dialog.getBoundingClientRect();
            // Values need to be extracted here as the bounding rect itself
            // can't be transferred from the page side to the test runner side.
            return {
                x: bounds.x,
                y: bounds.y,
                width: bounds.width,
                height: bounds.height,
            };
        });
        if (!hitArea) {
            throw new Error('Unable to locate dialog');
        }
        // Make sure moving the mouse to a position inside the boundaries of the hit area doesn't
        // close the dialog.
        await frontend.mouse.move(hitArea.x + hitArea.width / 2, hitArea.y + hitArea.height / 2);
        await (0, helper_js_1.waitFor)('devtools-dialog[open]');
    });
    it('closes the dialog when moving the cursor outside its boundaries', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const dialog = await openDialog(2);
        const dialogPosition = await dialog.boundingBox();
        if (!dialogPosition) {
            throw new Error('Unable to locate dialog');
        }
        // Make sure moving the mouse to a position inside the boundaries doesn't
        // close the dialog.
        await frontend.mouse.move(dialogPosition.x + dialogPosition.width / 2, dialogPosition.y + dialogPosition.height / 2);
        await (0, helper_js_1.waitFor)('devtools-dialog[open]');
        // Move the mouse outside the dialog's boundaries.
        await frontend.mouse.move(0, 0);
        await (0, helper_js_1.waitFor)('devtools-dialog:not([open])');
    });
});
//# sourceMappingURL=Dialog_test.js.map