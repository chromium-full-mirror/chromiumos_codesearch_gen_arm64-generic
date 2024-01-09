"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const issues_helpers_js_1 = require("../helpers/issues-helpers.js");
(0, mocha_extensions_js_1.describe)('Cookie Deprecation Metadata issue', async () => {
    beforeEach(async () => {
        await (0, helper_js_1.goToResource)('empty.html');
    });
    (0, mocha_extensions_js_1.it)('should display correct information', async () => {
        await (0, issues_helpers_js_1.navigateToIssuesTab)();
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        frontend.evaluate(() => {
            const issue = {
                'code': 'CookieDeprecationMetadataIssue',
                'details': {
                    'cookieDeprecationMetadataIssueDetails': {
                        'allowedSites': ['example_1.test'],
                    },
                },
            };
            // @ts-ignore
            window.addIssueForTest(issue);
            const issue2 = {
                'code': 'CookieDeprecationMetadataIssue',
                'details': {
                    'cookieDeprecationMetadataIssueDetails': {
                        'allowedSites': ['example_2.test'],
                    },
                },
            };
            // @ts-ignore
            window.addIssueForTest(issue2);
        });
        await (0, issues_helpers_js_1.expandIssue)();
        const issueElement = await (0, issues_helpers_js_1.getIssueByTitle)('Third-party websites are allowed to read cookies on this page');
        (0, helper_js_1.assertNotNullOrUndefined)(issueElement);
        const section = await (0, issues_helpers_js_1.getResourcesElement)('2 websites allowed to access cookies', issueElement);
        await (0, issues_helpers_js_1.ensureResourceSectionIsExpanded)(section);
        const expectedTableRows = [
            ['example_1.test'],
            ['example_2.test'],
        ];
        await (0, issues_helpers_js_1.waitForTableFromResourceSectionContents)(section.content, expectedTableRows);
    });
});
//# sourceMappingURL=cookie-deprecation-metadata-issues_test.js.map