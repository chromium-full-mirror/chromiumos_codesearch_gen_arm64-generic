"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
const SIMPLE_PAGE_REQUEST_NUMBER = 10;
const SIMPLE_PAGE_URL = `requests.html?num=${SIMPLE_PAGE_REQUEST_NUMBER}`;
(0, mocha_extensions_js_1.describe)('The Network Tab', async function () {
    // The tests here tend to take time because they wait for requests to appear in the request panel.
    this.timeout(5000);
    beforeEach(async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('empty.html');
        await (0, network_helpers_js_1.setCacheDisabled)(true);
        await (0, network_helpers_js_1.setPersistLog)(false);
    });
    (0, mocha_extensions_js_1.it)('displays requests', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)(SIMPLE_PAGE_URL);
        // Wait for all the requests to be displayed + 1 to account for the page itself.
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(SIMPLE_PAGE_REQUEST_NUMBER + 1);
        const expectedNames = [];
        for (let i = 0; i < SIMPLE_PAGE_REQUEST_NUMBER; i++) {
            expectedNames.push(`image.svg?id=${i}`);
        }
        expectedNames.push(SIMPLE_PAGE_URL);
        const names = (await (0, network_helpers_js_1.getAllRequestNames)()).sort();
        chai_1.assert.deepStrictEqual(names, expectedNames, 'The right request names should appear in the list');
    });
    (0, mocha_extensions_js_1.it)('can select requests', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)(SIMPLE_PAGE_URL);
        let selected = await (0, network_helpers_js_1.getSelectedRequestName)();
        chai_1.assert.isNull(selected, 'No request should be selected by default');
        await (0, network_helpers_js_1.selectRequestByName)(SIMPLE_PAGE_URL);
        await (0, network_helpers_js_1.waitForSelectedRequestChange)(selected);
        selected = await (0, network_helpers_js_1.getSelectedRequestName)();
        chai_1.assert.strictEqual(selected, SIMPLE_PAGE_URL, 'Selecting the first request should work');
        const lastRequestName = `image.svg?id=${SIMPLE_PAGE_REQUEST_NUMBER - 1}`;
        await (0, network_helpers_js_1.selectRequestByName)(lastRequestName);
        await (0, network_helpers_js_1.waitForSelectedRequestChange)(selected);
        selected = await (0, network_helpers_js_1.getSelectedRequestName)();
        chai_1.assert.strictEqual(selected, lastRequestName, 'Selecting the last request should work');
    });
    (0, mocha_extensions_js_1.it)('can persist requests', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)(SIMPLE_PAGE_URL);
        // Wait for all the requests to be displayed + 1 to account for the page itself, and get their names.
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(SIMPLE_PAGE_REQUEST_NUMBER + 1);
        const firstPageRequestNames = (await (0, network_helpers_js_1.getAllRequestNames)()).sort();
        await (0, network_helpers_js_1.setPersistLog)(true);
        // Navigate to a new page, and wait for the same requests to still be there.
        await (0, helper_js_1.goTo)('about:blank');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(SIMPLE_PAGE_REQUEST_NUMBER + 1);
        let secondPageRequestNames = [];
        await (0, helper_js_1.waitForFunction)(async () => {
            secondPageRequestNames = await (0, network_helpers_js_1.getAllRequestNames)();
            return secondPageRequestNames.length === SIMPLE_PAGE_REQUEST_NUMBER + 1;
        });
        secondPageRequestNames.sort();
        chai_1.assert.deepStrictEqual(secondPageRequestNames, firstPageRequestNames, 'The requests were persisted');
    });
    (0, mocha_extensions_js_1.it)('should continue receiving new requests after timeline filter is cleared', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('infinite-requests.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.setTimeWindow)();
        // After the time filter is set, only visible request is the html page.
        chai_1.assert.strictEqual(await (0, network_helpers_js_1.getNumberOfRequests)(), 1);
        await (0, network_helpers_js_1.clearTimeWindow)();
        const numberOfRequestsAfterFilter = await (0, network_helpers_js_1.getNumberOfRequests)();
        // Time filter is cleared so the number of requests must be greater than 1.
        chai_1.assert.isTrue(numberOfRequestsAfterFilter > 1);
        // After some time we expect new requests to come so it must be
        // that the number of requests increased.
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(numberOfRequestsAfterFilter + 1);
    });
});
//# sourceMappingURL=network_test.js.map