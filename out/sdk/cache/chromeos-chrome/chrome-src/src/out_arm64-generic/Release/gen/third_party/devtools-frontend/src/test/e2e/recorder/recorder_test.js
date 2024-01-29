"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable rulesdir/es_modules_import */
const chai_1 = require("chai");
const helper_js_1 = require("../../../test/shared/helper.js");
const mocha_extensions_js_1 = require("../../../test/shared/mocha-extensions.js");
const snapshots_js_1 = require("../../../test/shared/snapshots.js");
const helpers_js_1 = require("./helpers.js");
(0, mocha_extensions_js_1.describe)('Recorder', function () {
    if (this.timeout() !== 0) {
        this.timeout(5000);
    }
    (0, mocha_extensions_js_1.it)('should capture the initial page as the url of the first section', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture clicks on buttons', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#test');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture multiple clicks with duration', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        const element = await target.waitForSelector('#test');
        (0, helper_js_1.assertNotNullOrUndefined)(element);
        const point = await element.clickablePoint();
        await target.mouse.move(point.x, point.y);
        await target.mouse.down();
        await new Promise(resolve => setTimeout(resolve, 350));
        await target.mouse.up();
        await target.mouse.down();
        await new Promise(resolve => setTimeout(resolve, 350));
        await target.mouse.up();
        const recording = await (0, helpers_js_1.stopRecording)();
        const steps = recording.steps.slice(2);
        chai_1.assert.strictEqual(steps.length, 2);
        for (const step of steps) {
            (0, helper_js_1.assertNotNullOrUndefined)(step);
            chai_1.assert.strictEqual(step.type, 'click');
            chai_1.assert.isTrue('duration' in step && step.duration && step.duration > 350);
        }
    });
    (0, mocha_extensions_js_1.it)('should capture non-primary clicks and double clicks', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#mouse-button', { button: 'middle' });
        await target.click('#mouse-button', { button: 'right' });
        await target.click('#mouse-button', { button: 'forward' });
        await target.click('#mouse-button', { button: 'back' });
        await target.click('#mouse-button', { clickCount: 1 });
        await target.click('#mouse-button', { clickCount: 2 });
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture clicks on input buttons', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#reset');
        await target.click('#submit');
        await target.click('#button');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture clicks on buttons with custom selector attribute', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html', {
            selectorAttribute: 'data-devtools-test',
        });
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#selector-attribute');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture Enter key presses on buttons', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        const button = await target.waitForSelector('#test');
        await button?.press('Enter');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should not capture synthetic events', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#synthetic');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture implicit form submissions', async () => {
        await (0, helpers_js_1.startRecording)('recorder/form.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#name');
        await target.type('#name', 'test');
        await target.keyboard.down('Enter');
        await target.waitForFunction(() => {
            return window.location.href.endsWith('form.html?name=test');
        });
        await target.keyboard.up('Enter');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture clicks on submit buttons inside of forms as click steps', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#form-button');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should build an ARIA selector for the parent element that is interactive', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#span');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should fall back to a css selector if an element does not have an accessible and interactive parent', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#span2');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should create an aria selector even if the element is within a shadow root', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('pierce/#inner-span');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should record clicks on shadow DOM elements with slots containing text nodes only', async () => {
        await (0, helpers_js_1.startRecording)('recorder/shadow-text-node.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('custom-button');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should record interactions with elements within iframes', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.mainFrame().childFrames()[0].click('#in-iframe');
        await target.mainFrame().childFrames()[0].childFrames()[0].click('aria/Inner iframe button');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should wait for navigations in the generated scripts', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('aria/Page 2');
        await target.waitForFunction(() => {
            return window.location.href.endsWith('recorder2.html');
        });
        await target.waitForSelector('aria/Back to Page 1');
        await (0, helper_js_1.waitForFunction)(async () => {
            const recording = await (0, helpers_js_1.getCurrentRecording)();
            return recording.steps.length >= 3;
        });
        await target.bringToFront();
        await target.click('aria/Back to Page 1');
        await target.waitForFunction(() => {
            return window.location.href.endsWith('recorder.html');
        });
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    // TODO: remove flakiness from recording network conditions.
    mocha_extensions_js_1.it.skip('[crbug.com/1224832]: should also record network conditions', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html', {
            networkCondition: 'Fast 3G',
        });
        const { frontend, target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#test');
        await frontend.bringToFront();
        await (0, helpers_js_1.changeNetworkConditions)('Slow 3G');
        await (0, helpers_js_1.openRecorderPanel)();
        await target.bringToFront();
        await target.click('#test');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture keyboard events on inputs', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.keyboard.press('Tab');
        await target.keyboard.type('1');
        await target.keyboard.press('Tab');
        await target.keyboard.type('2');
        // TODO(alexrudenko): for some reason the headless test does not flush the buffer
        // when recording is stopped.
        await target.evaluate(() => document.querySelector('#two').blur());
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    // Blocking Chromium PINS roll
    mocha_extensions_js_1.it.skip('[crbug.com/1482078] should capture keyboard events on non-text inputs', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html', { untrustedEvents: true });
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        const color = await target.waitForSelector('#color');
        (0, helper_js_1.assertNotNullOrUndefined)(color);
        await color.click();
        // Imitating an input event.
        await color.evaluate(el => {
            const element = el;
            element.value = '#333333';
            element.dispatchEvent(new Event('input', { bubbles: true }));
        });
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should capture navigation without change', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.keyboard.press('Tab');
        await target.keyboard.down('Shift');
        await target.keyboard.press('Tab');
        await target.keyboard.up('Shift');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    // skipped until we figure out why the keyup for Enter is not recorded in
    // 1% of the runs.
    mocha_extensions_js_1.it.skip('[crbug.com/1473597] should capture a change that causes navigation without blur or change', async () => {
        await (0, helpers_js_1.startRecording)('recorder/programmatic-navigation-on-keydown.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.waitForSelector('input');
        await target.keyboard.press('1');
        await target.keyboard.press('Enter', { delay: 50 });
        await (0, helper_js_1.waitForFunction)(async () => {
            const controller = await (0, helpers_js_1.getRecordingController)();
            return controller.evaluate(c => c.getCurrentRecordingForTesting()?.flow.steps.length === 5);
        });
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should associate events with right navigations', async () => {
        await (0, helpers_js_1.startRecording)('recorder/multiple-navigations.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('button');
        await target.waitForFunction(() => {
            return window.location.href.endsWith('input.html');
        });
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should work for select elements', async () => {
        await (0, helpers_js_1.startRecording)('recorder/select.html', { untrustedEvents: true });
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#select');
        await target.select('#select', 'O2');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should work for checkbox elements', async () => {
        await (0, helpers_js_1.startRecording)('recorder/checkbox.html', { untrustedEvents: true });
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#checkbox');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should work for elements modified on mousedown', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html', { untrustedEvents: true });
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#to-be-modified');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should record OOPIF interactions', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helpers_js_1.startRecording)('recorder/oopif.html', { untrustedEvents: true });
        await target.bringToFront();
        const frame = target.frames().find(frame => frame.url().endsWith('iframe1.html'));
        const link = await frame?.waitForSelector('aria/To iframe 2');
        const frame2Promise = target.waitForFrame(frame => frame.url().endsWith('iframe2.html'));
        await link?.click();
        const frame2 = await frame2Promise;
        await frame2?.waitForSelector('aria/To iframe 1');
        // Preventive timeout because apparently out-of-process targets might trigger late events that
        // cause handled errors in DevTools.
        await new Promise(resolve => setTimeout(resolve, 250));
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    // Flaky on Mac
    mocha_extensions_js_1.it.skipOnPlatforms(['mac'], '[crbug.com/1480253] should capture and store screenshots for every section', async () => {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        await target.bringToFront();
        await (0, helpers_js_1.raf)(target);
        await (0, helpers_js_1.stopRecording)();
        await (0, helper_js_1.waitFor)('.section .screenshot');
    });
    // Flaky test
    mocha_extensions_js_1.it.skip('[crbug.com/1443423]: should record interactions with popups', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html', { untrustedEvents: true });
        const { target, browser } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        const openPopupButton = await target.waitForSelector('aria/Open Popup');
        // Popups are separate targets so Recorder is only able to learn about them
        // after a while. To allow no-flaky testing, we need to synchronise with the
        // frontend here.
        const recorderHandledPopup = (0, helpers_js_1.onRecorderAttachedToTarget)();
        await openPopupButton?.click();
        await (0, helper_js_1.waitForFunction)(async () => {
            const controller = await (0, helpers_js_1.getRecordingController)();
            return controller.evaluate(c => {
                const steps = c.getCurrentRecordingForTesting()?.flow.steps;
                return steps?.length === 3 && steps[1].assertedEvents?.length === 1;
            });
        });
        const popupTarget = await browser.waitForTarget(target => target.url().endsWith('popup.html'));
        const popupPage = await popupTarget.page();
        await popupPage?.bringToFront();
        await recorderHandledPopup;
        const buttonInPopup = await popupPage?.waitForSelector('aria/Button in Popup');
        await buttonInPopup?.click();
        await (0, helper_js_1.waitForFunction)(async () => {
            const controller = await (0, helpers_js_1.getRecordingController)();
            return controller.evaluate(c => c.getCurrentRecordingForTesting()?.flow.steps.length === 4);
        });
        await popupPage?.close();
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should break out shifts in text controls', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.keyboard.press('Tab');
        await target.keyboard.type('1');
        await target.keyboard.press('Shift');
        await target.keyboard.type('d');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should work with contiguous inputs', async () => {
        await (0, helpers_js_1.startRecording)('recorder/input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        // Focus the first input in the contiguous line of inputs.
        await target.waitForSelector('#contiguous-field-1');
        await target.focus('#contiguous-field-1');
        // This should type into `#contiguous-field-1` and `#contiguous-field-2` due
        // to the in-page script.
        await target.keyboard.type('somethingworks');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should work with shadow inputs', async () => {
        await (0, helpers_js_1.startRecording)('recorder/shadow-input.html');
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('custom-input');
        await target.keyboard.type('works');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should edit while recording', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.bringToFront();
        const steps = await (0, helper_js_1.waitForFunction)(async () => {
            const steps = await frontend.$$('pierce/devtools-step-view');
            return steps.length === 3 ? steps : undefined;
        });
        const lastStep = steps.pop();
        if (!lastStep) {
            throw new Error('Step is not found.');
        }
        await lastStep.click({ button: 'right' });
        const removeStep = await (0, helper_js_1.waitForAria)('Remove step[role="menuitem"]');
        await removeStep.click();
        await target.bringToFront();
        await target.click('#test');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should edit the type while recording', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
        await target.bringToFront();
        await target.click('#test');
        await frontend.bringToFront();
        const steps = await (0, helper_js_1.waitForFunction)(async () => {
            const steps = await frontend.$$('pierce/devtools-step-view');
            return steps.length === 5 ? steps : undefined;
        });
        const step = steps.pop();
        (0, helper_js_1.assertNotNullOrUndefined)(step);
        const title = await step.waitForSelector(':scope >>>> .main-title');
        (0, helper_js_1.assertNotNullOrUndefined)(title);
        await title.click();
        const input = await step.waitForSelector(':scope >>>> devtools-recorder-step-editor >>>> div:nth-of-type(1) > devtools-suggestion-input');
        (0, helper_js_1.assertNotNullOrUndefined)(input);
        await input.focus();
        const eventPromise = step.evaluate(element => {
            return new Promise(resolve => {
                element.addEventListener('stepchanged', (event) => {
                    resolve(event.newStep);
                }, { once: true });
            });
        });
        await frontend.keyboard.type('emulateNetworkConditions');
        await frontend.keyboard.press('Enter');
        (0, snapshots_js_1.assertMatchesJSONSnapshot)(await eventPromise);
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.it)('should add an assertion through the button', async () => {
        await (0, helpers_js_1.startRecording)('recorder/recorder.html');
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        await frontend.bringToFront();
        // Find the button.
        const button = await (0, helper_js_1.waitForFunction)(async () => {
            return frontend.$('pierce/.add-assertion-button');
        });
        if (!button) {
            throw new Error('Add assertion button not found.');
        }
        // Add an assertion.
        await button.click();
        await (0, helper_js_1.renderCoordinatorQueueEmpty)();
        // Get the latest step.
        const step = await frontend.$('pierce/.section:last-child devtools-step-view:last-of-type');
        if (!step) {
            throw new Error('Could not find step.');
        }
        // Check that it's expanded.
        if (!(await step.$('pierce/devtools-timeline-section.expanded'))) {
            throw new Error('Last step is not open.');
        }
        // Check that it's the correct step.
        chai_1.assert.strictEqual(await step.$eval('pierce/.main-title', element => element.textContent), 'Wait for element');
        const recording = await (0, helpers_js_1.stopRecording)();
        (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
    });
    (0, mocha_extensions_js_1.describe)('Shortcuts', () => {
        (0, mocha_extensions_js_1.it)('should not open create a new recording while recording', async () => {
            await (0, helpers_js_1.startRecordingViaShortcut)('recorder/recorder.html');
            const controller = await (0, helpers_js_1.getRecordingController)();
            await controller.evaluate(element => {
                return element.handleActions('chrome-recorder.create-recording');
            });
            const page = await controller.evaluate(element => {
                return element.getCurrentPageForTesting();
            });
            chai_1.assert.isTrue(page !== 'CreateRecordingPage');
            await (0, helpers_js_1.stopRecording)();
        });
        (0, mocha_extensions_js_1.it)('should start with keyboard shortcut while on the create page', async () => {
            await (0, helpers_js_1.fillCreateRecordingForm)('recorder/recorder.html');
            await (0, helpers_js_1.startOrStopRecordingShortcut)();
            const recording = (await (0, helpers_js_1.stopRecording)());
            (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
        });
        (0, mocha_extensions_js_1.it)('should stop with keyboard shortcut without recording it', async () => {
            await (0, helpers_js_1.startRecordingViaShortcut)('recorder/recorder.html');
            const recording = (await (0, helpers_js_1.startOrStopRecordingShortcut)());
            (0, helpers_js_1.assertRecordingMatchesSnapshot)({ ...recording, title: 'Test recording' });
        });
        (0, mocha_extensions_js_1.it)('should stop recording with shortcut on the target', async () => {
            await (0, helpers_js_1.startRecording)('recorder/recorder.html');
            const { target } = (0, helper_js_1.getBrowserAndPages)();
            await target.bringToFront();
            await target.keyboard.down('e');
            await target.keyboard.up('e');
            const recording = (await (0, helpers_js_1.startOrStopRecordingShortcut)('page'));
            (0, helpers_js_1.assertRecordingMatchesSnapshot)(recording);
        });
    });
});
//# sourceMappingURL=recorder_test.js.map