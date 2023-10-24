"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
const checkCommandResult = (0, console_helpers_js_1.checkCommandResultFunction)(0);
(0, mocha_extensions_js_1.describe)('The Console Tab', async function () {
    beforeEach(async () => {
        await (0, helper_js_1.goToResource)('../resources/console/command-line-api-getEventListeners.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
    });
    (0, mocha_extensions_js_1.it)('inner listeners are displayed correctly', async () => {
        await checkCommandResult('innerListeners();', '{keydown: Array(2), wheel: Array(1)}');
    });
    (0, mocha_extensions_js_1.it)('inner listeners are displayed correctly after removal', async () => {
        await checkCommandResult('removeInnerListeners(); getEventListeners(innerElement());', '{keydown: Array(1)}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for an element', async () => {
        await checkCommandResult('getEventListeners(document.getElementById("outer"));', '{mousemove: Array(1), mousedown: Array(1), keydown: Array(1), keyup: Array(1)}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for a button', async () => {
        await checkCommandResult('getEventListeners(document.getElementById("button"));', '{click: Array(1), mouseover: Array(1)}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for a window', async () => {
        await checkCommandResult('getEventListeners(window);', '{popstate: Array(1)}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for an empty element', async () => {
        await checkCommandResult('getEventListeners(document.getElementById("empty"));', '{}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for an invalid element', async () => {
        await checkCommandResult('getEventListeners(document.getElementById("invalid"));', '{}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for an empty map', async () => {
        await checkCommandResult('getEventListeners({});', '{}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for a null value', async () => {
        await checkCommandResult('getEventListeners(null);', '{}');
    });
    (0, mocha_extensions_js_1.it)('Event listeners are gotten correctly for an undefined value', async () => {
        await checkCommandResult('getEventListeners(undefined);', '{}');
    });
});
//# sourceMappingURL=command-line-api-getEventListeners_test.js.map