"use strict";
// Copyright 2021 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
/* eslint-disable no-console */
(0, mocha_extensions_js_1.describe)('The Console\'s errors', () => {
    (0, mocha_extensions_js_1.it)('picks up custom exception names ending with \'Error\' and symbolizes stack traces according to source maps', async () => {
        await (0, helper_js_1.goToResource)('sources/error-with-sourcemap.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await (0, console_helpers_js_1.showVerboseMessages)();
        await (0, helper_js_1.waitForFunction)(async () => {
            const messages = await (0, console_helpers_js_1.getStructuredConsoleMessages)();
            if (messages.length !== 1) {
                return false;
            }
            const [{ message }] = messages;
            return /^MyError.*error-with-sourcemap.ts:6/.test(message.replace('\n', ''));
        });
    });
    (0, mocha_extensions_js_1.it)('correctly symbolizes stack traces with async frames for anonymous functions', async () => {
        await (0, helper_js_1.goToResource)('console/error-with-async-frame.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await (0, console_helpers_js_1.showVerboseMessages)();
        await (0, helper_js_1.waitForFunction)(async () => {
            const messages = await (0, console_helpers_js_1.getStructuredConsoleMessages)();
            if (messages.length !== 1) {
                return false;
            }
            const [{ message }] = messages;
            return message === `Error
    at foo (async.js:2:46)
    at async async.js:3:21`;
        });
    });
    (0, mocha_extensions_js_1.it)('shows errors to load a resource', async () => {
        await (0, helper_js_1.goToResource)('console/resource-errors.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await (0, console_helpers_js_1.showVerboseMessages)();
        await (0, console_helpers_js_1.waitForConsoleMessagesToBeNonEmpty)(5);
        const messages = await (0, console_helpers_js_1.getStructuredConsoleMessages)();
        messages.sort((m1, m2) => m1.message.localeCompare(m2.message));
        chai_1.assert.deepEqual(messages, [
            {
                message: `GET https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/non-existent-xhr 404 (Not Found)`,
                messageClasses: 'console-message',
                repeatCount: null,
                source: 'resource-errors.html:20',
                stackPreview: `
loadXHR @ resource-errors.html:20
step2 @ resource-errors.html:12
error (async)
performActions @ resource-errors.html:7
(anonymous) @ resource-errors.html:30`,
                wrapperClasses: 'console-message-wrapper console-error-level',
            },
            {
                message: `GET https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/missing.css net::ERR_ABORTED 404 (Not Found)`,
                messageClasses: 'console-message',
                repeatCount: null,
                source: 'resource-errors-iframe.html:3',
                stackPreview: null,
                wrapperClasses: 'console-message-wrapper console-error-level',
            },
            {
                message: `GET https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/non-existent-iframe.html 404 (Not Found)`,
                messageClasses: 'console-message',
                repeatCount: null,
                source: 'resource-errors-iframe.html:8',
                stackPreview: null,
                wrapperClasses: 'console-message-wrapper console-error-level',
            },
            {
                message: `GET https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/non-existent-script.js net::ERR_ABORTED 404 (Not Found)`,
                messageClasses: 'console-message',
                repeatCount: null,
                source: 'resource-errors-iframe.html:4',
                stackPreview: null,
                wrapperClasses: 'console-message-wrapper console-error-level',
            },
            {
                message: 'GET unknown-scheme://foo net::ERR_UNKNOWN_URL_SCHEME',
                messageClasses: 'console-message',
                repeatCount: null,
                source: 'unknown-scheme://foo:1',
                stackPreview: `
Image (async)
performActions @ resource-errors.html:8
(anonymous) @ resource-errors.html:30`,
                wrapperClasses: 'console-message-wrapper console-error-level',
            },
        ]);
    });
});
//# sourceMappingURL=console-errors_test.js.map