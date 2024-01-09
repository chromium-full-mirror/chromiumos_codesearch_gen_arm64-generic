"use strict";
// Copyright 2022 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const network_helpers_js_1 = require("../helpers/network-helpers.js");
const quick_open_helpers_js_1 = require("../helpers/quick_open-helpers.js");
const sources_helpers_js_1 = require("../helpers/sources-helpers.js");
const PRETTY_PRINT_BUTTON = '[aria-label="Pretty print"]';
const PRETTY_PRINTED_TOGGLE = 'devtools-text-editor.pretty-printed';
(0, mocha_extensions_js_1.describe)('The Sources Tab', function () {
    // The tests in this suite are particularly slow, as they perform a lot of actions
    if (this.timeout() > 0) {
        this.timeout(10000);
    }
    (0, mocha_extensions_js_1.it)('can pretty-print a JavaScript file inline', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-sourcecode.js', 'minified-sourcecode.html');
        await (0, helper_js_1.step)('can pretty-print successfully', async () => {
            await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
            await (0, helper_js_1.waitFor)(PRETTY_PRINTED_TOGGLE);
            const expectedLines = [
                '// Copyright 2020 The Chromium Authors. All rights reserved.',
                '// Use of this source code is governed by a BSD-style license that can be',
                '// found in the LICENSE file.',
                '// clang-format off',
                'const notFormatted = {',
                '    something: \'not-formatted\'',
                '};',
                'console.log(\'Test for correct line number\');',
                'function notFormattedFunction() {',
                '    console.log(\'second log\');',
                '    return {',
                '        field: 2 + 4',
                '    }',
                '}',
                ';notFormattedFunction();',
                '',
            ];
            const updatedTextContent = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            chai_1.assert.strictEqual(updatedTextContent.join('\n'), expectedLines.join('\n'));
        });
        await (0, helper_js_1.step)('can un-pretty-print successfully', async () => {
            await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
            await (0, helper_js_1.waitForNone)(PRETTY_PRINTED_TOGGLE);
            const expectedLines = [
                '// Copyright 2020 The Chromium Authors. All rights reserved.',
                '// Use of this source code is governed by a BSD-style license that can be',
                '// found in the LICENSE file.',
                '// clang-format off',
                'const notFormatted = {something: \'not-formatted\'};console.log(\'Test for correct line number\'); function notFormattedFunction() {',
                'console.log(\'second log\'); return {field: 2+4}};',
                'notFormattedFunction();',
                '',
            ];
            const updatedTextContent = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            chai_1.assert.strictEqual(updatedTextContent.join('\n'), expectedLines.join('\n'));
        });
    });
    (0, mocha_extensions_js_1.it)('can pretty print an inline json subtype file', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('json-subtype-ld.rawresponse', '../network/json-subtype-ld.rawresponse');
        const editor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
        await (0, helper_js_1.step)('can pretty-print a json subtype', async () => {
            const expectedPrettyLines = [
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
            const actualPrettyText = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            chai_1.assert.deepStrictEqual(expectedPrettyLines, actualPrettyText);
        });
        await (0, helper_js_1.step)('can highlight the pretty-printed text', async () => {
            chai_1.assert.isTrue(await (0, sources_helpers_js_1.isPrettyPrinted)());
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, '"Value1"', '.token-string'));
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, 'true', '.token-atom'));
        });
        await (0, helper_js_1.step)('can un-pretty-print a json subtype file', async () => {
            await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
            const expectedNotPrettyLines = '{"Keys": [{"Key1": "Value1","Key2": "Value2","Key3": true},{"Key1": "Value1","Key2": "Value2","Key3": false}]}';
            const actualNotPrettyText = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
            chai_1.assert.strictEqual(expectedNotPrettyLines, actualNotPrettyText.toString());
        });
        await (0, helper_js_1.step)('can highlight the un-pretty-printed text', async () => {
            chai_1.assert.isFalse(await (0, sources_helpers_js_1.isPrettyPrinted)());
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, '"Value1"', '.token-string'));
            chai_1.assert.isTrue(await (0, network_helpers_js_1.elementContainsTextWithSelector)(editor, 'true', '.token-atom'));
        });
    });
    (0, mocha_extensions_js_1.it)('can show error icons for pretty-printed file', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-errors.js', 'minified-errors.html');
        await (0, helper_js_1.step)('shows 3 separate errors when pretty-printed', async () => {
            await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
            await (0, helper_js_1.waitFor)(PRETTY_PRINTED_TOGGLE);
            await (0, helper_js_1.waitForFunction)(async () => {
                const icons = await (0, helper_js_1.$$)('devtools-icon.cm-messageIcon-error');
                return icons.length === 3;
            });
        });
        await (0, helper_js_1.step)('shows 2 separate errors when un-pretty-printed', async () => {
            await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
            await (0, helper_js_1.waitForNone)(PRETTY_PRINTED_TOGGLE);
            await (0, helper_js_1.waitForFunction)(async () => {
                const icons = await (0, helper_js_1.$$)('devtools-icon.cm-messageIcon-error');
                return icons.length === 2;
            });
        });
    });
    (0, mocha_extensions_js_1.it)('can add breakpoint for pretty-printed file', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-sourcecode.js', 'minified-sourcecode.html');
        await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
        await (0, helper_js_1.waitFor)(PRETTY_PRINTED_TOGGLE);
        // Set a breakpoint in line 6 of the pretty-printed view (which is the
        // line with the label "6" not the 6th line from the top).
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 6);
        const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameScriptLocation)('notFormattedFunction();', target);
        chai_1.assert.deepEqual(scriptLocation, 'minified-sourcecode.js:6');
    });
    (0, mocha_extensions_js_1.it)('can add breakpoint on minified source and then break correctly on pretty-printed source', async () => {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-sourcecode.js', 'minified-sourcecode.html');
        await (0, sources_helpers_js_1.addBreakpointForLine)(frontend, 6);
        await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
        await (0, helper_js_1.waitFor)(PRETTY_PRINTED_TOGGLE);
        const scriptLocation = await (0, sources_helpers_js_1.retrieveTopCallFrameScriptLocation)('notFormattedFunction();', target);
        chai_1.assert.deepEqual(scriptLocation, 'minified-sourcecode.js:6');
    });
    (0, mocha_extensions_js_1.it)('can go to line in a pretty-printed file', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-sourcecode.js', 'minified-sourcecode.html');
        await (0, helper_js_1.click)(PRETTY_PRINT_BUTTON);
        await (0, helper_js_1.waitFor)(PRETTY_PRINTED_TOGGLE);
        await (0, quick_open_helpers_js_1.openGoToLineQuickOpen)();
        await (0, helper_js_1.typeText)('6');
        await frontend.keyboard.press('Enter');
        await (0, sources_helpers_js_1.waitForHighlightedLine)(6);
    });
    (0, mocha_extensions_js_1.it)('does not automatically pretty-print authored code', async () => {
        await (0, sources_helpers_js_1.openSourceCodeEditorForFile)('minified-sourcecode-1.js', 'minified-sourcecode-1.html');
        const lines = await (0, sources_helpers_js_1.retrieveCodeMirrorEditorContent)();
        chai_1.assert.strictEqual(lines.length, 2);
    });
});
//# sourceMappingURL=can-pretty-print-sourcecode_test.js.map