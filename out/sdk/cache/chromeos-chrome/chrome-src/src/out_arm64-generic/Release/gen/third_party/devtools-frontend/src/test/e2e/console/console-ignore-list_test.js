"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const settings_helpers_js_1 = require("../helpers/settings-helpers.js");
(0, mocha_extensions_js_1.describe)('Ignore list', async function () {
    (0, mocha_extensions_js_1.it)('can be toggled on and off in console stack trace', async function () {
        await (0, settings_helpers_js_1.setIgnoreListPattern)('thirdparty');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.goToResource)('../resources/sources/multi-files.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await target.evaluate('wrapper(() => {console.trace("test");});');
        await (0, helper_js_1.waitFor)('.stack-preview-container:not(.show-hidden-rows)');
        const minimized = [
            '(anonymous) @ (index):1',
            '(anonymous) @ (index):1',
            'Show 2 more frames',
        ];
        const full = [
            '(anonymous) @ (index):1',
            'innercall @ multi-files-thirdparty.js:8',
            'callfunc @ multi-files-thirdparty.js:16',
            '(anonymous) @ (index):1',
            'Show less',
        ];
        chai_1.assert.deepEqual((await (0, helper_js_1.getVisibleTextContents)('.stack-preview-container tr'))
            .map(value => value ? (0, helper_js_1.replacePuppeteerUrl)(value) : value), minimized);
        await (0, helper_js_1.click)('.show-all-link .link');
        await (0, helper_js_1.waitFor)('.stack-preview-container.show-hidden-rows');
        await (0, helper_js_1.waitForVisible)('.show-less-link');
        chai_1.assert.deepEqual((await (0, helper_js_1.getVisibleTextContents)('.stack-preview-container tr'))
            .map(value => value ? (0, helper_js_1.replacePuppeteerUrl)(value) : value), full);
        await (0, helper_js_1.click)('.show-less-link .link');
        await (0, helper_js_1.waitFor)('.stack-preview-container:not(.show-hidden-rows)');
        chai_1.assert.deepEqual((await (0, helper_js_1.getVisibleTextContents)('.stack-preview-container tr'))
            .map(value => value ? (0, helper_js_1.replacePuppeteerUrl)(value) : value), minimized);
    });
});
//# sourceMappingURL=console-ignore-list_test.js.map