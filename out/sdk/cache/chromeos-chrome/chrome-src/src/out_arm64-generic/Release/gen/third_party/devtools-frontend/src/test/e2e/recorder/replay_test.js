"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable rulesdir/es_modules_import */
const chai_1 = require("chai");
const helper_js_1 = require("../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../test/shared/mocha-extensions.js");
const helpers_js_1 = require("./helpers.js");
(0, mocha_extensions_js_1.describe)('Recorder', function () {
    if (this.timeout() !== 0) {
        this.timeout(40000);
    }
    (0, mocha_extensions_js_1.describe)('Replay', () => {
        (0, mocha_extensions_js_1.it)('should navigate to the url of the first section', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`,
                    },
                ],
            });
            chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
        });
        (0, mocha_extensions_js_1.it)('should be able to replay click steps', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder.html`,
                    },
                    {
                        type: 'click',
                        selectors: ['a[href="recorder2.html"]'],
                        offsetX: 1,
                        offsetY: 1,
                        assertedEvents: [
                            {
                                type: 'navigation',
                                url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder.html`,
                            },
                        ],
                    },
                ],
            });
            chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
        });
        (0, mocha_extensions_js_1.it)('should be able to replay click steps on checkboxes', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/checkbox.html`,
                    },
                    {
                        type: 'click',
                        selectors: ['input'],
                        offsetX: 1,
                        offsetY: 1,
                    },
                ],
            });
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelector('input')?.checked), true);
        });
        (0, mocha_extensions_js_1.it)('should be able to replay keyboard events', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/input.html`,
                    },
                    { type: 'keyDown', target: 'main', key: 'Tab' },
                    { type: 'keyUp', target: 'main', key: 'Tab' },
                    { type: 'keyDown', target: 'main', key: '1' },
                    { type: 'keyUp', target: 'main', key: '1' },
                    { type: 'keyDown', target: 'main', key: 'Tab' },
                    { type: 'keyUp', target: 'main', key: 'Tab' },
                    { type: 'keyDown', target: 'main', key: '2' },
                    { type: 'keyUp', target: 'main', key: '2' },
                ],
            });
            const value = await target.$eval('#log', e => e.innerText.trim());
            chai_1.assert.strictEqual(value, ['one:1', 'two:2'].join('\n'));
        });
        (0, mocha_extensions_js_1.it)('should be able to replay events on select', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/select.html`,
                    },
                    {
                        type: 'change',
                        target: 'main',
                        selectors: ['aria/Select'],
                        value: 'O2',
                    },
                ],
            });
            const value = await target.$eval('#select', e => e.value);
            chai_1.assert.strictEqual(value, 'O2');
        });
        (0, mocha_extensions_js_1.it)('should be able to replay events on non text inputs', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/input.html`,
                    },
                    {
                        type: 'change',
                        target: 'main',
                        selectors: ['#color'],
                        value: '#333333',
                    },
                ],
            });
            const value = await target.$eval('#color', e => e.value);
            chai_1.assert.strictEqual(value, '#333333');
        });
        (0, mocha_extensions_js_1.it)('should be able to replay events with text selectors', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/iframe1.html`,
                    },
                    {
                        type: 'click',
                        target: 'main',
                        selectors: ['text/To'],
                        offsetX: 0,
                        offsetY: 0,
                    },
                ],
            });
            const frame = target.frames().find(frame => frame.url() === `${(0, helper_js_1.getResourcesPath)()}/recorder/iframe2.html`);
            chai_1.assert.ok(frame, 'Frame that the target page navigated to is not found');
        });
        (0, mocha_extensions_js_1.it)('should be able to replay events with xpath selectors', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/iframe1.html`,
                    },
                    {
                        type: 'click',
                        target: 'main',
                        selectors: ['xpath//html/body/a'],
                        offsetX: 0,
                        offsetY: 0,
                    },
                ],
            });
            const frame = target.frames().find(frame => frame.url() === `${(0, helper_js_1.getResourcesPath)()}/recorder/iframe2.html`);
            chai_1.assert.ok(frame, 'Frame that the target page navigated to is not found');
        });
        (0, mocha_extensions_js_1.it)('should be able to override the value in text inputs that have a value already', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/input.html`,
                    },
                    {
                        type: 'change',
                        target: 'main',
                        selectors: ['#prefilled'],
                        value: 'cba',
                    },
                ],
            });
            const value = await target.$eval('#prefilled', e => e.value);
            chai_1.assert.strictEqual(value, 'cba');
        });
        (0, mocha_extensions_js_1.it)('should be able to override the value in text inputs that are partially prefilled', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/input.html`,
                    },
                    {
                        type: 'change',
                        target: 'main',
                        selectors: ['#partially-prefilled'],
                        value: 'abcdef',
                    },
                ],
            });
            const value = await target.$eval('#partially-prefilled', e => e.value);
            chai_1.assert.strictEqual(value, 'abcdef');
        });
        (0, mocha_extensions_js_1.it)('should be able to replay viewport change', async () => {
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/select.html`,
                    },
                    {
                        type: 'setViewport',
                        width: 800,
                        height: 600,
                        isLandscape: false,
                        isMobile: false,
                        deviceScaleFactor: 1,
                        hasTouch: false,
                    },
                    {
                        type: 'waitForExpression',
                        expression: 'window.visualViewport?.width === 800 && window.visualViewport?.height === 600',
                    },
                ],
            });
        });
        (0, mocha_extensions_js_1.it)('should be able to replay scroll events', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/scroll.html`,
                    },
                    {
                        type: 'setViewport',
                        width: 800,
                        height: 600,
                        isLandscape: false,
                        isMobile: false,
                        deviceScaleFactor: 1,
                        hasTouch: false,
                    },
                    {
                        type: 'scroll',
                        target: 'main',
                        selectors: ['body > div:nth-child(1)'],
                        x: 0,
                        y: 40,
                    },
                    { type: 'scroll', target: 'main', x: 40, y: 40 },
                ],
            });
            chai_1.assert.strictEqual(await target.evaluate(() => window.pageXOffset), 40);
            chai_1.assert.strictEqual(await target.evaluate(() => window.pageYOffset), 40);
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelector('#overflow')?.scrollTop), 40);
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelector('#overflow')?.scrollLeft), 0);
        });
        (0, mocha_extensions_js_1.it)('should be able to scroll into view when needed', async () => {
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/scroll-into-view.html`,
                    },
                    {
                        type: 'click',
                        selectors: [['button']],
                        offsetX: 1,
                        offsetY: 1,
                    },
                ],
            });
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelector('button')?.innerText), 'clicked');
        });
        (0, mocha_extensions_js_1.it)('should be able to replay ARIA selectors on inputs', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/form.html`,
                    },
                    {
                        type: 'setViewport',
                        width: 800,
                        height: 600,
                        isLandscape: false,
                        isMobile: false,
                        deviceScaleFactor: 1,
                        hasTouch: false,
                    },
                    {
                        type: 'click',
                        target: 'main',
                        selectors: ['aria/Name:'],
                        offsetX: 1,
                        offsetY: 1,
                    },
                ],
            });
            chai_1.assert.strictEqual(await target.evaluate(() => document.activeElement?.id), 'name');
        });
        (0, mocha_extensions_js_1.it)('should be able to waitForElement', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/shadow-dynamic.html`,
                    },
                    {
                        type: 'waitForElement',
                        selectors: [['custom-element', 'button']],
                    },
                    {
                        type: 'click',
                        target: 'main',
                        selectors: [['custom-element', 'button']],
                        offsetX: 1,
                        offsetY: 1,
                    },
                    {
                        type: 'waitForElement',
                        selectors: [['custom-element', 'button']],
                        operator: '>=',
                        count: 2,
                    },
                ],
            });
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelectorAll('custom-element').length), 2);
        });
        (0, mocha_extensions_js_1.it)('should be able to waitForExpression', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/shadow-dynamic.html`,
                    },
                    {
                        type: 'click',
                        target: 'main',
                        selectors: [['custom-element', 'button']],
                        offsetX: 1,
                        offsetY: 1,
                    },
                    {
                        type: 'waitForExpression',
                        target: 'main',
                        expression: 'document.querySelectorAll("custom-element").length === 2',
                    },
                ],
            });
            chai_1.assert.strictEqual(await target.evaluate(() => document.querySelectorAll('custom-element').length), 2);
        });
        (0, mocha_extensions_js_1.it)('should show PerformancePanel if the MeasurePerformance SelectMenu is clicked for replay', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScript)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`,
                    },
                ],
            });
            const onceFinished = (0, helpers_js_1.onReplayFinished)();
            await (0, helper_js_1.click)('aria/Performance panel');
            await onceFinished;
            chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
            await (0, helper_js_1.waitFor)('[aria-label="Performance panel"]');
        });
        // Flaky
        mocha_extensions_js_1.it.skip('[crbug.com/1403915]: should be able to replay actions with popups', async () => {
            const { browser } = (0, helper_js_1.getBrowserAndPages)();
            const events = [];
            // We can't import 'puppeteer' here because its not listed in the tsconfig.json of
            // the test target.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const targetLifecycleHandler = (target, type) => {
                if (!target.url().endsWith('popup.html')) {
                    return;
                }
                events.push({ type, url: target.url() });
            };
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const targetCreatedHandler = (target) => targetLifecycleHandler(target, 'targetCreated');
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const targetDestroyedHandler = (target) => targetLifecycleHandler(target, 'targetDestroyed');
            browser.on('targetcreated', targetCreatedHandler);
            browser.on('targetdestroyed', targetDestroyedHandler);
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder.html`,
                        assertedEvents: [
                            {
                                title: '',
                                type: 'navigation',
                                url: 'https://<url>/test/e2e/resources/recorder/recorder.html',
                            },
                        ],
                    },
                    {
                        type: 'click',
                        selectors: [['aria/Open Popup'], ['#popup']],
                        target: 'main',
                        offsetX: 1,
                        offsetY: 1,
                    },
                    {
                        type: 'click',
                        selectors: [['aria/Button in Popup'], ['body > button']],
                        target: `${(0, helper_js_1.getResourcesPath)()}/recorder/popup.html`,
                        offsetX: 1,
                        offsetY: 1,
                    },
                    {
                        type: 'close',
                        target: `${(0, helper_js_1.getResourcesPath)()}/recorder/popup.html`,
                    },
                ],
            });
            chai_1.assert.deepEqual(events, [
                {
                    type: 'targetCreated',
                    url: `${(0, helper_js_1.getResourcesPath)()}/recorder/popup.html`,
                },
                {
                    type: 'targetDestroyed',
                    url: `${(0, helper_js_1.getResourcesPath)()}/recorder/popup.html`,
                },
            ]);
            browser.off('targetcreated', targetCreatedHandler);
            browser.off('targetdestroyed', targetDestroyedHandler);
        });
        (0, mocha_extensions_js_1.it)('should record interactions with OOPIFs', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/recorder/oopif.html`,
                        assertedEvents: [
                            {
                                title: '',
                                type: 'navigation',
                                url: `https://localhost:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/recorder/oopif.html`,
                            },
                        ],
                    },
                    {
                        type: 'click',
                        target: `https://devtools.oopif.test:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/recorder/iframe1.html`,
                        selectors: [['aria/To iframe 2'], ['body > a']],
                        offsetX: 1,
                        offsetY: 1,
                        assertedEvents: [
                            {
                                type: 'navigation',
                                title: '',
                                url: `https://devtools.oopif.test:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/recorder/iframe2.html`,
                            },
                        ],
                    },
                ],
            });
            const frame = target.frames().find(frame => frame.url() ===
                `https://devtools.oopif.test:${(0, helper_js_1.getTestServerPort)()}/test/e2e/resources/recorder/iframe2.html`);
            chai_1.assert.ok(frame, 'Frame that the target page navigated to is not found');
        });
        (0, mocha_extensions_js_1.it)('should replay when clicked on slow replay', async () => {
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await (0, helpers_js_1.setupRecorderWithScript)({
                title: 'Test Recording',
                steps: [
                    {
                        type: 'navigate',
                        url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder.html`,
                    },
                    {
                        type: 'click',
                        selectors: ['a[href="recorder2.html"]'],
                        offsetX: 1,
                        offsetY: 1,
                        assertedEvents: [
                            {
                                type: 'navigation',
                                url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder.html`,
                            },
                        ],
                    },
                ],
            });
            const onceFinished = (0, helpers_js_1.onReplayFinished)();
            await (0, helpers_js_1.clickSelectButtonItem)('Slow', 'devtools-replay-button');
            await onceFinished;
            chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
        });
    });
    (0, mocha_extensions_js_1.it)('should be able to start a replay with shortcut', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helpers_js_1.setupRecorderWithScript)({
            title: 'Test Recording',
            steps: [
                {
                    type: 'navigate',
                    url: `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`,
                },
            ],
        });
        const onceFinished = (0, helpers_js_1.onReplayFinished)();
        await (0, helpers_js_1.replayShortcut)();
        await onceFinished;
        chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
    });
    (0, mocha_extensions_js_1.it)('should be able to  navigate to a prerendered page', async () => {
        await (0, helpers_js_1.setupRecorderWithScriptAndReplay)({
            title: 'Test Recording',
            steps: [
                {
                    type: 'navigate',
                    url: `${(0, helper_js_1.getResourcesPath)()}/recorder/prerender.html`,
                },
                {
                    type: 'click',
                    selectors: ['a'],
                    offsetX: 1,
                    offsetY: 1,
                    assertedEvents: [
                        {
                            type: 'navigation',
                            url: `${(0, helper_js_1.getResourcesPath)()}/recorder/prerendered.html`,
                        },
                    ],
                },
                {
                    type: 'waitForExpression',
                    expression: 'document.querySelector("div").innerText === "true"',
                },
            ],
        });
    });
});
//# sourceMappingURL=replay_test.js.map