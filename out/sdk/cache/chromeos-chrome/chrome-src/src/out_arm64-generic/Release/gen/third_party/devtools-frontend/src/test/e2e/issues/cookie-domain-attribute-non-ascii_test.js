"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const issues_helpers_js_1 = require("../helpers/issues-helpers.js");
(0, mocha_extensions_js_1.describe)('Cookie domain attribute should not contain non-ASCII characters issue', async () => {
    afterEach(async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        const cookies = await target.cookies();
        await target.deleteCookie(...cookies);
    });
    (0, mocha_extensions_js_1.it)('should display an issue when a cookie has a domain attribute with non-ASCII characters', async () => {
        await (0, issues_helpers_js_1.navigateToIssuesTab)();
        await (0, helper_js_1.goToResource)('empty.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.evaluate(async () => {
            const img = document.createElement('img');
            const done = new Promise(c => {
                img.onerror = c;
            });
            img.src = './issues/cookie-domain-non-ascii.rawresponse';
            document.body.appendChild(img);
            await done;
        });
        await (0, issues_helpers_js_1.navigateToIssuesTab)();
        await (0, issues_helpers_js_1.expandIssue)();
        const issueElement = await (0, issues_helpers_js_1.getIssueByTitle)('Ensure cookie `Domain` attribute values only contain ASCII characters');
        (0, helper_js_1.assertNotNullOrUndefined)(issueElement);
        const section = await (0, issues_helpers_js_1.getResourcesElement)('1 Raw Set-Cookie header', issueElement, '.affected-resource-label');
        await (0, issues_helpers_js_1.ensureResourceSectionIsExpanded)(section);
        const expectedTableRows = [
            ['tasty_cookie=yum; Domain=öxample.com'],
        ];
        await (0, issues_helpers_js_1.waitForTableFromResourceSectionContents)(section.content, expectedTableRows);
    });
});
//# sourceMappingURL=cookie-domain-attribute-non-ascii_test.js.map