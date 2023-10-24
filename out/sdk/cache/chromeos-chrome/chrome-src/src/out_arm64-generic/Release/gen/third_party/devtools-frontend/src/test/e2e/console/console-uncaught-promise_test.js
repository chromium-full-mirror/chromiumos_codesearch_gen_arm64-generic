"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
(0, mocha_extensions_js_1.describe)('The Console Tab', async () => {
    (0, mocha_extensions_js_1.it)('is able to log uncaught promise rejections into console', async () => {
        await (0, helper_js_1.goToResource)('../resources/console/console-uncaught-promise.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest1();', `
        promiseTest1 @ console-uncaught-promise.html:3
        (anonymous) @ VM26:1
        Promise.then (async)
        promiseTest1 @ console-uncaught-promise.html:6
        (anonymous) @ VM26:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest2();', `
        promiseTest2 @ console-uncaught-promise.html:23
        (anonymous) @ VM44:1
        Promise.then (async)
        (anonymous) @ console-uncaught-promise.html:19
        Promise.catch (async)
        (anonymous) @ console-uncaught-promise.html:18
        Promise.catch (async)
        (anonymous) @ console-uncaught-promise.html:17
        Promise.catch (async)
        promiseTest2 @ console-uncaught-promise.html:16
        (anonymous) @ VM44:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest3();', `
        throwDOMException	@	console-uncaught-promise.html:39
        catcher	@	console-uncaught-promise.html:32
        Promise.catch (async)
        promiseTest3	@	console-uncaught-promise.html:31
        (anonymous)	@	VM66:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest4();', `
        promiseTest4	@	console-uncaught-promise.html:44
        (anonymous)	@	VM86:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest5();', `
        promiseTest5	@	console-uncaught-promise.html:48
        (anonymous)	@	VM104:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest6();', `
        promiseTest6	@	console-uncaught-promise.html:52
        (anonymous)	@	VM122:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest7();', `
        promiseTest7	@	console-uncaught-promise.html:56
        (anonymous)	@	VM138:1
      `, 2);
        await (0, console_helpers_js_1.checkCommandStacktrace)('await promiseTest8();', `
        promiseTest8	@	console-uncaught-promise.html:60
        (anonymous)	@	VM150:1
      `, 2);
        await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)((0, helper_js_1.getBrowserAndPages)().frontend, 'await promiseTest9();', 3);
        const lastMessages = (await (0, console_helpers_js_1.getCurrentConsoleMessages)()).slice(-2);
        chai_1.assert.include(lastMessages, 'A bad HTTP response code (404) was received when fetching the script.', 'Error message was not displayed correctly for promiseTest9');
        chai_1.assert.include(lastMessages, `Uncaught (in promise) TypeError: Failed to register a ServiceWorker for scope (\'https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/\') with script (\'https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/404\'): A bad HTTP response code (404) was received when fetching the script.`, 'Error message was not displayed correctly for promiseTest9');
    });
});
//# sourceMappingURL=console-uncaught-promise_test.js.map