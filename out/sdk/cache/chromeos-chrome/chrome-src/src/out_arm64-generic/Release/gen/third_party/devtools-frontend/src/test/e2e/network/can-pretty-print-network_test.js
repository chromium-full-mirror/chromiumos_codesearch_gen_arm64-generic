"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const PRETTY_PRINT_BUTTON = '[aria-label="Pretty print"]';
describe('The Network Tab', function () {
    it('can pretty print an inline json subtype file', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('code-with-json-subtype-request.html');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(2);
        await (0, network_helpers_js_1.selectRequestByName)('json-subtype-ld.rawresponse');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('#tab-headersComponent', {
            root: networkView,
        });
        await (0, helper_js_1.click)('[aria-label=Response][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Response][role=tab][aria-selected=true]', networkView);
        const editor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
        await (0, helper_js_1.step)('can pretty-print a json subtype', async () => {
            const textFromResponse = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            const expectedTextFromResponse = [
                '{',
                '    "Keys": [',
                '        {',
                '            "Key1": "Value1",',
                '            "Key2": "Value2",',
                '            "Key3": true',
                '        },',
                '        {',
                '            "Key1": "Value1",',
                '            "Key2": "Value2",',
                '            "Key3": false',
                '        }',
                '    ]',
                '}',
            ];
            chai_1.assert.deepStrictEqual(textFromResponse, expectedTextFromResponse);
        });
        await (0, helper_js_1.step)('can highlight the pretty-printed text', async () => {
            chai_1.assert.isTrue(await (0, sources_helpers_js_1.isPrettyPrinted)());
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, '"Value1"', '.token-string'));
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, 'true', '.token-atom'));
        });
        await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
        await (0, helper_js_1.step)('can un-pretty-print a json subtype', async () => {
            const actualNotPrettyText = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            const expectedNotPrettyText = '{"Keys": [{"Key1": "Value1","Key2": "Value2","Key3": true},{"Key1": "Value1","Key2": "Value2","Key3": false}]},';
            chai_1.assert.strictEqual(expectedNotPrettyText, actualNotPrettyText.toString());
        });
        await (0, helper_js_1.step)('can highlight the un-pretty-printed text', async () => {
            chai_1.assert.isFalse(await (0, sources_helpers_js_1.isPrettyPrinted)());
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, '"Value1"', '.token-string'));
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, 'true', '.token-atom'));
        });
    });
    it('can pretty print when there is only one json or json subtype file', async () => {
        await (0, network_helpers_js_1.navigateToNetworkTab)('json-subtype-ld.rawresponse');
        await (0, network_helpers_js_1.waitForSomeRequestsToAppear)(1);
        await (0, network_helpers_js_1.selectRequestByName)('json-subtype-ld.rawresponse');
        const networkView = await (0, helper_js_1.waitFor)('.network-item-view');
        await (0, helper_js_1.click)('#tab-headersComponent', {
            root: networkView,
        });
        await (0, helper_js_1.click)('[aria-label=Response][role="tab"]', {
            root: networkView,
        });
        await (0, helper_js_1.waitFor)('[aria-label=Response][role=tab][aria-selected=true]', networkView);
        const editor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
        await (0, helper_js_1.step)('can pretty-print a json subtype', async () => {
            const textFromResponse = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            const expectedTextFromResponse = [
                '{',
                '    "Keys": [',
                '        {',
                '            "Key1": "Value1",',
                '            "Key2": "Value2",',
                '            "Key3": true',
                '        },',
                '        {',
                '            "Key1": "Value1",',
                '            "Key2": "Value2",',
                '            "Key3": false',
                '        }',
                '    ]',
                '}',
            ];
            chai_1.assert.deepStrictEqual(textFromResponse, expectedTextFromResponse);
        });
        await (0, helper_js_1.step)('can highlight the pretty-printed text', async () => {
            chai_1.assert.isTrue(await (0, sources_helpers_js_1.isPrettyPrinted)());
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, '"Value1"', '.token-string'));
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, 'true', '.token-atom'));
        });
    });
});
//# sourceMappingURL=can-pretty-print-network_test.js.map