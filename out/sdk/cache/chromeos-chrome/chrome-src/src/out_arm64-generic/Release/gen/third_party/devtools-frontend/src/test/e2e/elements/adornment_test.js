"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
const prepareElementsTab = async () => {
    await (0, elements_helpers_js_1.waitForElementsStyleSection)();
    await (0, elements_helpers_js_1.waitForContentOfSelectedElementsNode)('<body>\u200B');
    await (0, elements_helpers_js_1.expandSelectedNodeRecursively)();
};
(0, mocha_extensions_js_1.describe)('Adornment in the Elements Tab', async function () {
    // This test relies on the context menu which takes a while to appear, so we bump the timeout a bit.
    if (this.timeout() > 0) {
        this.timeout(20000);
    }
    (0, mocha_extensions_js_1.it)('displays grid and flex adorners', async () => {
        await (0, helper_js_1.goToResource)('elements/adornment.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'grid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'grid', isActive: false },
            { textContent: 'flex', isActive: false },
            { textContent: 'flex', isActive: false },
        ]);
    });
    (0, mocha_extensions_js_1.it)('displays scroll-snap adorners', async () => {
        await (0, helper_js_1.goToResource)('elements/adornment-scroll-snap.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'scroll-snap', isActive: false },
        ]);
    });
    (0, mocha_extensions_js_1.it)('displays media adorner for video and audio elements', async () => {
        // Note that this test simulates several property value editing, with delay between each keystrokes.
        // If this test become flaky in the future, it is likely that we will have to increase the timeout.
        await (0, helper_js_1.goToResource)('elements/adornment-media.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'media', isActive: false },
            { textContent: 'media', isActive: false },
        ]);
        // Select the first video element.
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForAdornerOnSelectedNode)('media');
        // Remove the video element.
        await (0, elements_helpers_js_1.editCSSProperty)('video', 'display', 'none');
        // Select the second audio element.
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForAdornerOnSelectedNode)('media');
    });
    (0, mocha_extensions_js_1.it)('displays container query adorners', async () => {
        await (0, helper_js_1.goToResource)('elements/adornment-container-query.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'container', isActive: false },
        ]);
    });
    (0, mocha_extensions_js_1.it)('can toggle adorners', async () => {
        await (0, helper_js_1.goToResource)('elements/adornment.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'grid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'grid', isActive: false },
            { textContent: 'flex', isActive: false },
            { textContent: 'flex', isActive: false },
        ]);
        // Toggle both grid adorners on and try to select them with the active selector
        await (0, helper_js_1.click)(elements_helpers_js_1.INACTIVE_GRID_ADORNER_SELECTOR);
        await (0, helper_js_1.click)(elements_helpers_js_1.INACTIVE_GRID_ADORNER_SELECTOR);
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'grid', isActive: true },
            { textContent: 'subgrid', isActive: true },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'subgrid', isActive: false },
            { textContent: 'grid', isActive: false },
            { textContent: 'flex', isActive: false },
            { textContent: 'flex', isActive: false },
        ]);
    });
    (0, mocha_extensions_js_1.it)('does not display adorners on shadow roots when their parents are grid or flex containers', async () => {
        await (0, helper_js_1.goToResource)('elements/adornment-shadow.html');
        await prepareElementsTab();
        await (0, elements_helpers_js_1.waitForAdorners)([
            { textContent: 'grid', isActive: false },
            { textContent: 'flex', isActive: false },
        ]);
    });
    (0, mocha_extensions_js_1.it)('updates when display properties change', async () => {
        // Note that this test simulates several property value editing, like a user would type, with delay between
        // keystrokes. So if this test became flaky in the future, we'd likely have to increase the timeout.
        await (0, helper_js_1.goToResource)('elements/adornment.html');
        await prepareElementsTab();
        // Select the first element.
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press('ArrowDown');
        await (0, elements_helpers_js_1.waitForAdornerOnSelectedNode)('grid');
        await (0, elements_helpers_js_1.editCSSProperty)('.grid', 'display', 'flex');
        await (0, elements_helpers_js_1.waitForAdornerOnSelectedNode)('flex');
        await (0, elements_helpers_js_1.editCSSProperty)('.grid', 'display', 'inline-grid');
        await (0, elements_helpers_js_1.waitForAdornerOnSelectedNode)('grid');
    });
});
//# sourceMappingURL=adornment_test.js.map