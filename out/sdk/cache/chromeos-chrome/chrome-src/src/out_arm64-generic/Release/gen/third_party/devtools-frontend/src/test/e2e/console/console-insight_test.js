"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const helper_js_1 = require("../../shared/helper.js");
const mocha_extensions_js_1 = require("../../shared/mocha-extensions.js");
const console_helpers_js_1 = require("../helpers/console-helpers.js");
(0, mocha_extensions_js_1.describe)('ConsoleInsight', async function () {
    const CLICK_TARGET_SELECTOR = '.console-message-text';
    const EXPLAIN_LABEL = 'Explain this error';
    async function mockAida(response) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.bringToFront();
        await frontend.evaluateOnNewDocument(`
      globalThis.doAidaConversationForTesting = (data, cb) => {
        cb({"response": JSON.stringify(${JSON.stringify(response)})});
      }
    `);
        await frontend.goto(frontend.url() + '&enableAida=true', {
            waitUntil: 'networkidle0',
        });
        await frontend.evaluate(`(async () => {
      const Root = await import('./core/root/root.js');
      Root.Runtime.experiments.setEnabled('consoleInsights', true);
    })()`);
        await frontend.goto(frontend.url() + '&enableAida=true');
    }
    (0, mocha_extensions_js_1.it)('shows an insight for a console message', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await mockAida([
            { 'textChunk': { 'text': 'test' } },
        ]);
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        await target.evaluate(() => {
            console.error(new Error('Unexpected error'));
        });
        await (0, console_helpers_js_1.clickOnContextMenu)(CLICK_TARGET_SELECTOR, EXPLAIN_LABEL);
        await (0, helper_js_1.waitFor)('devtools-console-insight', undefined, undefined, 'pierce');
    });
    (0, mocha_extensions_js_1.it)('does not show context menu if AIDA is not available', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await mockAida(null);
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        await target.evaluate(() => {
            console.error(new Error('Unexpected error'));
        });
        await (0, helper_js_1.click)(CLICK_TARGET_SELECTOR, { clickOptions: { button: 'right' } });
        const menu = await (0, helper_js_1.waitFor)('.soft-context-menu', undefined, undefined, 'pierce');
        const items = await menu.$$('.soft-context-menu-item');
        const texts = await Promise.all(items.map(item => item.evaluate(e => e.innerText)));
        (0, chai_1.assert)(!texts.some(item => item.toLowerCase().startsWith(EXPLAIN_LABEL)), 'Context menu shows the explain option');
    });
    (0, mocha_extensions_js_1.it)('gets console message texts', async () => {
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helper_js_1.click)(console_helpers_js_1.CONSOLE_TAB_SELECTOR);
        const tests = [
            {
                script: 'console.warn(\'Text warning\');',
                expectedWithStackTrace: 'Text warning',
            },
            {
                script: 'console.warn(new Error(\'Error in a warning\'));',
                expectedWithStackTrace: 'Error: Error in a warning\n    at <anonymous>:1:1',
            },
            {
                script: 'console.warn(\'Text warning\', new Error(\'Error\'));',
                expectedWithStackTrace: 'Text warning Error: Error\n    at <anonymous>:1:1',
            },
            {
                script: 'console.warn(new Error(\'Error with newline \\n in a warning\'));',
                expectedWithStackTrace: 'Error: Error with newline \n in a warning\n    at <anonymous>:1:1',
            },
            {
                script: 'console.warn(\'Warning\', new Error(\'Error 1\'), new Error(\'Error 2\'));',
                expectedWithStackTrace: 'Warning Error: Error 1\n    at <anonymous>:1:1 Error: Error 2\n    at <anonymous>:1:1',
            },
            {
                script: 'const warning = \'warning\'; console.warn(\'%s with substitution.\', warning);',
                expectedWithStackTrace: 'warning with substitution.',
            },
            {
                script: 'console.warn("%cWarning with style", \'background-color: darkblue; color: white; font-style: italic; border: 5px solid hotpink; font-size: 2em;\');',
                expectedWithStackTrace: 'Warning with style',
            },
            {
                script: 'console.warn(\'\x1B[41;93;4mHello ANSI escape seq\x1B[m\');',
                expectedWithStackTrace: 'Hello ANSI escape seq',
            },
            {
                script: 'console.warn(\'Warning\', 1, null, undefined, {}, [], true, \'str\', 1.4, document.body);',
                expectedWithStackTrace: 'Warning 1 null undefined {} [] true str 1.4 null',
            },
            {
                script: 'console.error(\'Text error\');',
                expectedWithStackTrace: 'Text error',
            },
            {
                script: 'console.error(new Error(\'Error in an error\'));',
                expectedWithStackTrace: 'Error: Error in an error\n    at <anonymous>:1:1',
            },
            {
                script: 'console.error(\'Text error\', new Error(\'Error\'));',
                expectedWithStackTrace: 'Text error Error: Error\n    at <anonymous>:1:1',
            },
            {
                script: 'console.error(\'Text error\', new Error(\'Error 1\'), new Error(\'Error 2\'));',
                expectedWithStackTrace: 'Text error Error: Error 1\n    at <anonymous>:1:1 Error: Error 2\n    at <anonymous>:1:1',
            },
            {
                script: 'console.error({ test: \'not an error\' });',
                expectedWithStackTrace: '{test: \'not an error\'}',
            },
            {
                script: 'console.error(\'%s with substitution.\', \'error\');',
                expectedWithStackTrace: 'error with substitution.',
            },
            {
                script: 'console.error("%cError with style", \'border: 5px solid hotpink;\');',
                expectedWithStackTrace: 'Error with style',
            },
            {
                script: 'console.error(\'\x1B[41;93;4mHello ANSI escape seq\x1B[m\');',
                expectedWithStackTrace: 'Hello ANSI escape seq',
            },
            {
                script: 'console.error(new Error(\'\'))',
                expectedWithStackTrace: 'Error\n    at <anonymous>:1:1',
            },
            {
                script: 'throw new Error(\'Uncaught error\')',
                expectedWithStackTrace: 'Uncaught Error: Uncaught error\n    at <anonymous>:1:1',
            },
        ];
        await target.setContent(`
      <script>
        ${tests.map(test => test.script).join('\n')}
      </script>
    `);
        let messages = [];
        while (messages.length !== tests.length) {
            messages = await frontend.$$('pierce/.console-message-wrapper');
        }
        const messageGetter = async (consoleModule, consoleElement) => {
            const consoleViewMessage = consoleModule.ConsoleViewMessage.getMessageForElement(consoleElement);
            const message = consoleViewMessage?.toMessageTextString() || '';
            // Replace dynamic line and column numbers in stacktraces with ':1:1'.
            return message.replace(/:\d+:\d+/gi, ':1:1');
        };
        const consoleModule = (await frontend.evaluateHandle('import(\'./panels/console/console.js\')'));
        for (let testIdx = 0; testIdx < messages.length; testIdx++) {
            const messageWithStacktrace = await frontend.evaluate(messageGetter, consoleModule, messages[testIdx], true);
            chai_1.assert.deepStrictEqual(messageWithStacktrace, tests[testIdx].expectedWithStackTrace);
        }
    });
});
//# sourceMappingURL=console-insight_test.js.map