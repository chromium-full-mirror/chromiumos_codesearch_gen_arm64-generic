"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable rulesdir/es_modules_import */
const chai_1 = require("chai");
const shared_js_1 = require("../../../../../test/interactions/helpers/shared.js");
const helper_js_1 = require("../../../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../../../test/shared/mocha-extensions.js");
const snapshots_js_1 = require("../../../../../test/shared/snapshots.js");
(0, mocha_extensions_js_1.describe)('Injected', () => {
    (0, shared_js_1.preloadForCodeCoverage)('recorder_injected/basic.html');
    beforeEach(async () => {
        await (0, shared_js_1.loadComponentDocExample)('recorder_injected/basic.html');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.evaluate(() => {
            window.DevToolsRecorder
                .startRecording({
                // We don't have the access to the actual bindings here. Therefore, the test assumes
                // that the markup is explicitly annotated with the following attributes.
                getAccessibleName: (element) => {
                    if (!('getAttribute' in element)) {
                        return '';
                    }
                    return element.getAttribute('aria-name') || '';
                },
                getAccessibleRole: (element) => {
                    if (!('getAttribute' in element)) {
                        return 'generic';
                    }
                    return element.getAttribute('aria-role') || '';
                },
            }, {
                debug: false,
                allowUntrustedEvents: true,
                selectorTypesToRecord: [
                    'xpath',
                    'css',
                    'text',
                    'aria',
                    'pierce',
                ],
            });
        });
    });
    afterEach(async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.evaluate(() => {
            window.DevToolsRecorder.stopRecording();
        });
    });
    (0, mocha_extensions_js_1.it)('should get selectors for an element', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const selectors = await frontend.evaluate(() => {
            const target = document.querySelector('#buttonNoARIA');
            if (!target) {
                throw new Error('#buttonNoARIA not found');
            }
            return window.DevToolsRecorder.recordingClientForTesting.getSelectors(target);
        });
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
    });
    (0, mocha_extensions_js_1.it)('should get selectors for elements with custom selector attributes', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const selectors = await frontend.evaluate(() => {
            const targets = [
                ...document.querySelectorAll('.custom-selector-attribute'),
                document.querySelector('#shadow-root-with-custom-selectors')?.shadowRoot?.querySelector('button'),
            ];
            return targets.map(window.DevToolsRecorder.recordingClientForTesting.getSelectors);
        });
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
    });
    (0, mocha_extensions_js_1.it)('should get selectors for shadow root elements', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const selectors = await frontend.evaluate(() => {
            const target = document.querySelector('main')
                ?.querySelector('shadow-css-selector-element')
                ?.shadowRoot?.querySelector('#insideShadowRoot');
            if (!target) {
                throw new Error('#insideShadowRoot is not found');
            }
            return window.DevToolsRecorder.recordingClientForTesting.getSelectors(target);
        });
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
    });
    (0, mocha_extensions_js_1.it)('should get an ARIA selector for shadow root elements', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const selectors = await frontend.evaluate(() => {
            const target = document.querySelector('[aria-role="main"]')
                ?.querySelector('shadow-aria-selector-element')
                ?.shadowRoot?.querySelector('button');
            if (!target) {
                throw new Error('button is not found');
            }
            return window.DevToolsRecorder.recordingClientForTesting.getSelectors(target);
        });
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
    });
    (0, mocha_extensions_js_1.it)('should not get an ARIA selector if the target element has no name or role', async () => {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const selectors = await frontend.evaluate(() => {
            const target = document.querySelector('#no-aria-name-or-role');
            if (!target) {
                throw new Error('button is not found');
            }
            return window.DevToolsRecorder.recordingClientForTesting.getSelectors(target);
        });
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
    });
    (0, mocha_extensions_js_1.describe)('CSS selectors', () => {
        (0, mocha_extensions_js_1.it)('should query CSS selectors', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            const results = await frontend.evaluate(() => {
                return [
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting(['[data-qa=custom-id]', '[data-testid=shadow\\ button]'])
                        .length,
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting(['[data-qa=custom-id]'])
                        .length,
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting('[data-qa=custom-id]')
                        .length,
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting('.doesnotexist')
                        .length,
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting(['[data-qa=custom-id]', '.doesnotexist'])
                        .length,
                    window.DevToolsRecorder.recordingClientForTesting
                        .queryCSSSelectorAllForTesting(['#notunique'])
                        .length,
                ];
            });
            chai_1.assert.deepStrictEqual(results, [1, 1, 1, 0, 0, 2]);
        });
        (0, mocha_extensions_js_1.it)('should return not-optimized CSS selectors for duplicate elements', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            const selector = await frontend.evaluate(() => {
                const target = document.querySelector('#notunique');
                if (!target) {
                    throw new Error('#notunique is not found');
                }
                return window.DevToolsRecorder.recordingClientForTesting.getCSSSelector(target);
            });
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selector);
        });
    });
    (0, mocha_extensions_js_1.describe)('Text selectors', () => {
        const getSelectorOfButtonWithLength = (length) => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            return frontend.evaluate(length => {
                const selector = `#buttonWithLength${length}`;
                const target = document.querySelector(selector);
                if (!target) {
                    throw new Error(`${selector} could not be found.`);
                }
                if (target.innerHTML.length !== length) {
                    throw new Error(`${selector} is not of length ${length}`);
                }
                return window.DevToolsRecorder.recordingClientForTesting.getTextSelector(target);
            }, length);
        };
        const MINIMUM_LENGTH = 12;
        const MAXIMUM_LENGTH = 64;
        const SAME_PREFIX_TEXT_LENGTH = 32;
        (0, mocha_extensions_js_1.it)('should return a text selector for elements < minimum length', async () => {
            const selectors = await getSelectorOfButtonWithLength(MINIMUM_LENGTH - 1);
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
        });
        (0, mocha_extensions_js_1.it)('should return a text selector for elements == minimum length', async () => {
            const selectors = await getSelectorOfButtonWithLength(MINIMUM_LENGTH);
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
        });
        (0, mocha_extensions_js_1.it)('should return a text selector for elements == maximum length', async () => {
            const selectors = await getSelectorOfButtonWithLength(MAXIMUM_LENGTH);
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
        });
        (0, mocha_extensions_js_1.it)('should not return a text selector for elements > maximum length', async () => {
            const selectors = await getSelectorOfButtonWithLength(MAXIMUM_LENGTH + 1);
            chai_1.assert.deepStrictEqual(selectors, undefined);
        });
        (0, mocha_extensions_js_1.it)('should return a text selector correctly with same prefix elements', async () => {
            let selectors = await getSelectorOfButtonWithLength(SAME_PREFIX_TEXT_LENGTH);
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors, { name: 'Smaller' });
            selectors = await getSelectorOfButtonWithLength(SAME_PREFIX_TEXT_LENGTH + 1);
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors, { name: 'Larger' });
        });
        (0, mocha_extensions_js_1.it)('should trim text selectors', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            const selectors = await frontend.evaluate(() => {
                const selector = '#buttonWithNewLines';
                const target = document.querySelector(selector);
                if (!target) {
                    throw new Error(`${selector} could not be found.`);
                }
                return window.DevToolsRecorder.recordingClientForTesting.getTextSelector(target);
            });
            (0, snapshots_js_1.assertMatchesJSONSnapshot)(selectors);
        });
    });
});
//# sourceMappingURL=injected_test.js.map