"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const elements_helpers_js_1 = require("../helpers/elements-helpers.js");
(0, mocha_extensions_js_1.describe)('The Classes pane', async () => {
    (0, mocha_1.beforeEach)(async function () {
        await (0, helper_js_1.goToResource)('elements/simple-styled-page.html');
        await (0, elements_helpers_js_1.toggleClassesPane)();
    });
    (0, mocha_extensions_js_1.it)('can add a class to the element', async () => {
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('foo');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['foo']);
    });
    (0, mocha_extensions_js_1.it)('can add multiple classes at once', async () => {
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('foo bar');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['foo', 'bar']);
    });
    (0, mocha_extensions_js_1.it)('can toggle classes', async () => {
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('on off');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['on', 'off']);
        await (0, elements_helpers_js_1.toggleClassesPaneCheckbox)('off');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['on']);
        await (0, elements_helpers_js_1.toggleClassesPaneCheckbox)('off');
        await (0, elements_helpers_js_1.toggleClassesPaneCheckbox)('on');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['off']);
    });
    (0, mocha_extensions_js_1.it)('removes the previewed classes on ESC', async () => {
        // Allow win64 bot to settle.
        await (0, helper_js_1.timeout)(200);
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('foo');
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('bar', 'Escape', false);
        await (0, elements_helpers_js_1.typeInClassesPaneInput)('baz');
        await (0, elements_helpers_js_1.assertSelectedNodeClasses)(['foo', 'baz']);
    });
});
//# sourceMappingURL=classes-pane_test.js.map