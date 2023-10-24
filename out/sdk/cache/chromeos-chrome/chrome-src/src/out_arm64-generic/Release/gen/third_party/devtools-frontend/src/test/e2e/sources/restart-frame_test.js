"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
(0, mocha_extensions_js_1.describe)('Sources Tab', () => {
    (0, mocha_extensions_js_1.it)('can restart a call stack frame', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.step)('navigate to page', async () => {
            await (0, helper_js_1.goToResource)('sources/restart-frame.html');
        });
        await (0, helper_js_1.step)('wait for the page to stop on the "debugger" statement', async () => {
            target.evaluate('foo();');
            await (0, helper_js_1.waitFor)(sources_helpers_js_1.PAUSE_INDICATOR_SELECTOR);
            const callFrameNames = await (0, sources_helpers_js_1.getCallFrameNames)();
            chai_1.assert.deepStrictEqual(callFrameNames.slice(0, 3), ['baz', 'bar', 'foo']);
        });
        await (0, helper_js_1.step)('restart frame "bar"', async () => {
            await (0, sources_helpers_js_1.clickOnContextMenu)('.call-frame-item[aria-posinset="2"]', 'Restart frame'); // Aria indices are 1-based.
        });
        await (0, helper_js_1.step)('wait for the page to stop in "bar"', async () => {
            await (0, helper_js_1.waitForFunction)(async () => {
                const callFrameNames = await (0, sources_helpers_js_1.getCallFrameNames)();
                return callFrameNames[0] === 'bar' && callFrameNames[1] === 'foo';
            });
        });
    });
});
//# sourceMappingURL=restart-frame_test.js.map