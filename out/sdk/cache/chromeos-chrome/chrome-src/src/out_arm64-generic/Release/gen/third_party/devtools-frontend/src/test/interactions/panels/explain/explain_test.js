"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../../shared/helper.js");
const mocha_extensions_js_1 = require("../../../shared/mocha-extensions.js");
const screenshots_js_1 = require("../../../shared/screenshots.js");
const shared_js_1 = require("../../helpers/shared.js");
(0, mocha_extensions_js_1.describe)('ConsoleInsight', function () {
    (0, shared_js_1.preloadForCodeCoverage)('console_insight/static.html');
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders initial state', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await (0, helper_js_1.waitFor)('.refine-button');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(await (0, helper_js_1.waitFor)('devtools-console-insight'), 'explain/console_insight.png', 3);
    });
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders refined state', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await (0, helper_js_1.click)('.refine-button');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(await (0, helper_js_1.waitFor)('devtools-console-insight'), 'explain/console_insight_refined.png', 3);
    });
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders tooltip', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await (0, helper_js_1.hover)('.info');
        await (0, screenshots_js_1.assertElementScreenshotUnchanged)(await (0, helper_js_1.waitFor)('[data-devtools-glass-pane]'), 'explain/console_insight_info.png', 3);
    });
    async function isElementFocused(selector) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        return await frontend.evaluate(selector => {
            const getActiveElement = (root) => {
                if (!root) {
                    return null;
                }
                if ('shadowRoot' in root && root.shadowRoot?.activeElement) {
                    return getActiveElement(root.shadowRoot?.activeElement);
                }
                return root;
            };
            const element = getActiveElement(document.activeElement);
            if (!element) {
                return false;
            }
            return element.matches(selector) ||
                /* button inside devtools-button */ element.getRootNode().host?.matches(selector);
        }, selector);
    }
    async function tabToInfo() {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        while (!(await isElementFocused('.info'))) {
            await frontend.keyboard.press('Tab');
            await (0, helper_js_1.raf)(frontend);
        }
    }
    // eslint-disable-next-line rulesdir/ban_screenshot_test_outside_perf_panel
    (0, mocha_extensions_js_1.itScreenshot)('renders tooltip via keyboard', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await tabToInfo();
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press(' ');
        (0, chai_1.assert)(await isElementFocused('[role=document]'));
    });
    (0, mocha_extensions_js_1.it)('can navigate within the tooltip using keyboard', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await tabToInfo();
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press(' ');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('[role=document]'));
        await frontend.keyboard.press('Tab');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('x-link'));
        await frontend.keyboard.press('Tab');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('x-link'));
        await frontend.keyboard.press('Tab');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('x-link'));
        await frontend.keyboard.press('Tab');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('x-link'));
    });
    (0, mocha_extensions_js_1.it)('can close the tooltip using keyboard', async () => {
        await (0, shared_js_1.loadComponentDocExample)('console_insight/static.html');
        await tabToInfo();
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.keyboard.press(' ');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('[role=document]'));
        chai_1.assert.notOk(await isElementFocused('.info'));
        await frontend.keyboard.press('Escape');
        await (0, helper_js_1.raf)(frontend);
        (0, chai_1.assert)(await isElementFocused('.info'));
    });
});
//# sourceMappingURL=explain_test.js.map