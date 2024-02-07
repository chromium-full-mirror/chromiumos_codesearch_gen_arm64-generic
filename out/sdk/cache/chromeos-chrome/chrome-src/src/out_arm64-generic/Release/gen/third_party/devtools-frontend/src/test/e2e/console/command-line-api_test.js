"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async () => {
    (0, mocha_extensions_js_1.describe)('provides a command line API', () => {
        beforeEach(async () => {
            await (0, helper_js_1.goToResource)('../resources/console/command-line-api.html');
            await (0, console_helpers_js_1.navigateToConsoleTab)();
        });
        (0, mocha_extensions_js_1.describe)('getEventListeners', () => {
            const checkCommandResult = (0, console_helpers_js_1.checkCommandResultFunction)(0);
            (0, mocha_extensions_js_1.it)('which yields inner listeners correctly', async () => {
                await checkCommandResult('innerListeners();', '{keydown: Array(2), wheel: Array(1)}');
            });
            (0, mocha_extensions_js_1.it)('which yields inner listeners correctly after removal', async () => {
                await checkCommandResult('removeInnerListeners(); getEventListeners(innerElement());', '{keydown: Array(1)}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for an element', async () => {
                await checkCommandResult('getEventListeners(document.getElementById("outer"));', '{mousemove: Array(1), mousedown: Array(1), keydown: Array(1), keyup: Array(1)}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for a button', async () => {
                await checkCommandResult('getEventListeners(document.getElementById("button"));', '{click: Array(1), mouseover: Array(1)}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for the window object', async () => {
                await checkCommandResult('getEventListeners(window);', '{popstate: Array(1)}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for an empty element', async () => {
                await checkCommandResult('getEventListeners(document.getElementById("empty"));', '{}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for an invalid element', async () => {
                await checkCommandResult('getEventListeners(document.getElementById("invalid"));', '{}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners for an empty object', async () => {
                await checkCommandResult('getEventListeners({});', '{}');
            });
            (0, mocha_extensions_js_1.it)('which yields the correct event listeners are for a null and undefined values', async () => {
                await checkCommandResult('getEventListeners(null);', '{}');
                await checkCommandResult('getEventListeners(undefined);', '{}');
            });
        });
    });
});
//# sourceMappingURL=command-line-api_test.js.map