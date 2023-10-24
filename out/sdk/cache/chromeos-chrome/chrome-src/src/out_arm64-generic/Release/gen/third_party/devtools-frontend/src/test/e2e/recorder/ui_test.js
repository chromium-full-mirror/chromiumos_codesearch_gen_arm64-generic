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
        this.timeout(5000);
    }
    async function assertStepList(expectedStepList) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const actualStepList = await frontend.$$eval('pierce/.step:not(.is-start-of-group) .action .main-title', actions => actions.map(e => e.innerText));
        chai_1.assert.deepEqual(actualStepList, expectedStepList);
    }
    async function record() {
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await frontend.bringToFront();
        await frontend.waitForSelector('pierce/.settings');
        await target.bringToFront();
        const element = await target.waitForSelector('a[href="recorder2.html"]');
        await element?.click();
        await frontend.bringToFront();
    }
    (0, mocha_extensions_js_1.describe)('UI', () => {
        beforeEach(async () => {
            await (0, helpers_js_1.enableAndOpenRecorderPanel)('recorder/recorder.html');
            await (0, helpers_js_1.createAndStartRecording)('Test');
        });
        (0, mocha_extensions_js_1.describe)('Record', () => {
            (0, mocha_extensions_js_1.it)('should record a simple flow', async () => {
                const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                await target.bringToFront();
                await frontend.bringToFront();
                await frontend.waitForSelector('pierce/.settings');
                await target.bringToFront();
                await target.click('#test');
                await frontend.bringToFront();
                await (0, helpers_js_1.stopRecording)();
                await assertStepList([
                    'Set viewport',
                    'Navigate',
                    'Click',
                ]);
            });
            (0, mocha_extensions_js_1.it)('should replay a simple flow', async () => {
                const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                await target.bringToFront();
                await frontend.bringToFront();
                await frontend.waitForSelector('pierce/.settings');
                await target.bringToFront();
                const element = await target.waitForSelector('a[href="recorder2.html"]');
                await element?.click();
                await frontend.bringToFront();
                await (0, helpers_js_1.stopRecording)();
                const steps = await frontend.$$eval('pierce/.step:not(.is-start-of-group) .action .main-title', actions => actions.map(e => e.innerText));
                chai_1.assert.deepEqual(steps, [
                    'Set viewport',
                    'Navigate',
                    'Click',
                ]);
                await target.goto('about:blank');
                // Wait for all steps to complete successfully
                const promise = (0, helper_js_1.waitForFunction)(async () => {
                    const successfulSteps = await frontend.$$eval('pierce/.step:not(.is-start-of-group).is-success .action .main-title', actions => actions.map(e => e.innerText));
                    return steps.length === successfulSteps.length;
                });
                await (0, helpers_js_1.clickSelectButtonItem)('Normal (Default)', 'devtools-replay-button');
                await target.bringToFront();
                await promise;
                chai_1.assert.strictEqual(target.url(), `${(0, helper_js_1.getResourcesPath)()}/recorder/recorder2.html`);
            });
            (0, mocha_extensions_js_1.it)('should rename a recording', async () => {
                const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                await target.bringToFront();
                await frontend.bringToFront();
                await frontend.waitForSelector('pierce/.settings');
                await target.bringToFront();
                await target.click('#test');
                await frontend.bringToFront();
                await (0, helpers_js_1.stopRecording)();
                const button = await (0, helper_js_1.waitForAria)('Edit title');
                await button.click();
                const input = (await frontend.waitForSelector('pierce/#title-input'));
                await input.type(' with Hello world', { delay: 50 });
                await input.evaluate(input => {
                    input.blur();
                });
                const recording = await (0, helpers_js_1.getCurrentRecording)();
                (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
            });
            (0, mocha_extensions_js_1.describe)('Selector picker', () => {
                async function pickSelectorsForQuery(query, frontend, target) {
                    await (0, helper_js_1.renderCoordinatorQueueEmpty)();
                    // Activate selector picker.
                    const picker = await frontend.waitForSelector('pierce/.selector-picker');
                    (0, helper_js_1.assertNotNullOrUndefined)(picker);
                    await picker.click();
                    // Click element and wait for selector picking to stop.
                    await target.bringToFront();
                    const element = await target.waitForSelector(query);
                    (0, helper_js_1.assertNotNullOrUndefined)(element);
                    await element.click();
                }
                async function expandStep(frontend, index) {
                    await frontend.bringToFront();
                    // TODO(crbug.com/1411283): figure out why misclicks happen here.
                    await (0, helper_js_1.waitForAnimationFrame)();
                    await (0, helper_js_1.click)(`.step[data-step-index="${index}"] .action`);
                    await (0, helper_js_1.waitFor)('.expanded');
                }
                // Flaky test
                mocha_extensions_js_1.it.skip('[crbug.com/1443421]: should select through the selector picker', async () => {
                    const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                    await frontend.bringToFront();
                    await frontend.waitForSelector('pierce/.settings');
                    await target.bringToFront();
                    const element = await target.waitForSelector('a[href="recorder2.html"]');
                    await element?.click();
                    await (0, helpers_js_1.stopRecording)();
                    await expandStep(frontend, 2);
                    await pickSelectorsForQuery('#test-button', frontend, target);
                    const recording = await (0, helpers_js_1.getCurrentRecording)();
                    (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
                });
                // Flaky test
                mocha_extensions_js_1.it.skip('[crbug.com/1443421]: should select through the selector picker twice', async () => {
                    const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                    await frontend.bringToFront();
                    await frontend.waitForSelector('pierce/.settings');
                    await target.bringToFront();
                    const element = await target.waitForSelector('a[href="recorder2.html"]');
                    await element?.click();
                    await (0, helpers_js_1.stopRecording)();
                    await expandStep(frontend, 2);
                    await pickSelectorsForQuery('#test-button', frontend, target);
                    let recording = await (0, helpers_js_1.getCurrentRecording)();
                    (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
                    await pickSelectorsForQuery('a[href="recorder.html"]', frontend, target);
                    recording = await (0, helpers_js_1.getCurrentRecording)();
                    (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
                });
                // Flaky test
                mocha_extensions_js_1.it.skip('[crbug.com/1443421]: should select through the selector picker during recording', async () => {
                    const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                    await frontend.bringToFront();
                    await frontend.waitForSelector('pierce/.settings');
                    await target.bringToFront();
                    const element = await target.waitForSelector('a[href="recorder2.html"]');
                    await element?.click();
                    await expandStep(frontend, 2);
                    await pickSelectorsForQuery('#test-button', frontend, target);
                    await (0, helpers_js_1.stopRecording)();
                    const recording = await (0, helpers_js_1.getCurrentRecording)();
                    (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
                });
            });
        });
        (0, mocha_extensions_js_1.describe)('Settings', () => {
            (0, mocha_extensions_js_1.it)('should change network settings', async () => {
                const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
                await frontend.bringToFront();
                await frontend.waitForSelector('pierce/.settings');
                await target.bringToFront();
                await target.click('#test');
                await frontend.bringToFront();
                await (0, helpers_js_1.stopRecording)();
                await (0, helper_js_1.click)('aria/Edit replay settings');
                await (0, helper_js_1.waitForAnimationFrame)();
                const selectMenu = await (0, helper_js_1.click)('.editable-setting devtools-select-menu');
                await (0, helper_js_1.waitForAnimationFrame)();
                await (0, helper_js_1.click)('devtools-menu-item:nth-child(3)', { root: selectMenu });
                await (0, helper_js_1.waitForAnimationFrame)();
                const recording = await (0, helpers_js_1.getCurrentRecording)();
                (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
            });
            (0, mocha_extensions_js_1.it)('should change the user flow timeout', async () => {
                await record();
                await (0, helpers_js_1.stopRecording)();
                await assertStepList([
                    'Set viewport',
                    'Navigate',
                    'Click',
                ]);
                const button = await (0, helper_js_1.waitForAria)('Edit replay settings');
                await button.click();
                const input = await (0, helper_js_1.waitForAria)('Timeout');
                // Clear the default value.
                await input.evaluate((el) => {
                    el.value = '';
                });
                await input.type('2000');
                await button.click();
                const recording = await (0, helpers_js_1.getCurrentRecording)();
                if (typeof recording !== 'object' || recording === null) {
                    throw new Error('Recording is corrupted');
                }
                chai_1.assert.strictEqual(recording.timeout, 2000);
            });
        });
        (0, mocha_extensions_js_1.describe)('Shortcuts', () => {
            (0, mocha_extensions_js_1.it)('should toggle code view with shortcut', async () => {
                let noSplitView = await (0, helper_js_1.waitForNone)('devtools-split-view');
                chai_1.assert.isTrue(noSplitView);
                await (0, helpers_js_1.toggleCodeView)();
                const splitView = await (0, helper_js_1.waitFor)('devtools-split-view');
                chai_1.assert.isOk(splitView);
                await (0, helpers_js_1.toggleCodeView)();
                noSplitView = await (0, helper_js_1.waitForNone)('devtools-split-view');
                chai_1.assert.isTrue(noSplitView);
            });
        });
    });
    (0, mocha_extensions_js_1.describe)('Header', () => {
        beforeEach(async () => {
            await (0, helpers_js_1.enableAndOpenRecorderPanel)('recorder/recorder.html');
        });
        (0, mocha_extensions_js_1.describe)('Shortcut Dialog', () => {
            (0, mocha_extensions_js_1.it)('should open the shortcut dialog', async () => {
                const { frontend } = (0, helper_js_1.getBrowserAndPages)();
                await frontend.bringToFront();
                const shortcutDialog = await (0, helper_js_1.waitFor)('devtools-shortcut-dialog');
                await (0, helper_js_1.click)('devtools-button', { root: shortcutDialog });
                const dialog = await (0, helper_js_1.waitFor)('devtools-dialog', shortcutDialog);
                chai_1.assert.isOk(dialog);
                const shortcuts = await (0, helper_js_1.$$)('.keybinds-list-item', dialog);
                chai_1.assert.lengthOf(shortcuts, 4);
            });
        });
    });
    (0, mocha_extensions_js_1.describe)('Recording list', () => {
        beforeEach(async () => {
            await (0, helpers_js_1.enableAndOpenRecorderPanel)('recorder/recorder.html');
            await (0, helpers_js_1.createAndStartRecording)('Test');
        });
        (0, mocha_extensions_js_1.it)('can delete a recording from the list', async () => {
            const { frontend } = (0, helper_js_1.getBrowserAndPages)();
            await frontend.bringToFront();
            await (0, helpers_js_1.stopRecording)();
            await frontend.select('pierce/select', 'AllRecordingsPage');
            await (0, helper_js_1.click)('pierce/.delete-recording-button');
            await frontend.waitForSelector('pierce/devtools-start-view');
        });
    });
});
//# sourceMappingURL=ui_test.js.map