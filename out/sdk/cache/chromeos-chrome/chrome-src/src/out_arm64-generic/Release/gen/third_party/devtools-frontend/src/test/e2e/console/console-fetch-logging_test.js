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
    (0, mocha_extensions_js_1.it)('is able to log fetching when XMLHttpRequest Logging is enabled', async () => {
        await (0, helper_js_1.goToResource)('../resources/console/console-fetch-logging.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        await (0, console_helpers_js_1.toggleConsoleSetting)(console_helpers_js_1.LOG_XML_HTTP_REQUESTS_SELECTOR);
        const expectedResults = [
            `Fetch finished loading: GET "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/xhr-exists.html".`,
            `Fetch failed loading: GET "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/xhr-does-not-exist.html".`,
            `Fetch finished loading: POST "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/post-target.rawresponse".`,
            'Fetch failed loading: GET "http://localhost:8000/devtools/resources/xhr-exists.html".',
        ];
        await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)((0, helper_js_1.getBrowserAndPages)().frontend, 'await makeRequests();', 4, console_helpers_js_1.Level.Info);
        const result = await (0, console_helpers_js_1.getCurrentConsoleMessages)(false, console_helpers_js_1.Level.Info);
        chai_1.assert.deepStrictEqual(result.slice(0, -1), expectedResults, 'Fetching was not logged correctly');
    });
    (0, mocha_extensions_js_1.it)('does not log fetching when XMLHttpRequest Logging is disabled', async () => {
        await (0, helper_js_1.goToResource)('../resources/console/console-fetch-logging.html');
        await (0, console_helpers_js_1.navigateToConsoleTab)();
        const expectedResults = [
            `Fetch finished loading: GET "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/xhr-exists.html".`,
            `Fetch failed loading: GET "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/xhr-does-not-exist.html".`,
            `Fetch finished loading: POST "https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/console/post-target.rawresponse".`,
            'Fetch failed loading: GET "http://localhost:8000/devtools/resources/xhr-exists.html".',
        ];
        await (0, console_helpers_js_1.typeIntoConsoleAndWaitForResult)((0, helper_js_1.getBrowserAndPages)().frontend, 'await makeRequests();', 1, console_helpers_js_1.Level.Info);
        const result = await (0, console_helpers_js_1.getCurrentConsoleMessages)(false, console_helpers_js_1.Level.Info);
        // Check that fetching is not logged
        chai_1.assert.isEmpty(result.slice(0, -1).filter(value => expectedResults.includes(value)), 'Fetching was logged after it was turned off');
    });
});
//# sourceMappingURL=console-fetch-logging_test.js.map