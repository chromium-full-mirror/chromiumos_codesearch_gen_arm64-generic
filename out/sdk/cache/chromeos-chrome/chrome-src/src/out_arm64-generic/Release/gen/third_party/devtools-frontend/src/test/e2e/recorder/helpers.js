"use strict";
// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.raf = exports.toggleCodeView = exports.replayShortcut = exports.startRecordingViaShortcut = exports.fillCreateRecordingForm = exports.startOrStopRecordingShortcut = exports.getCurrentRecording = exports.setupRecorderWithScriptAndReplay = exports.setupRecorderWithScript = exports.clickSelectButtonItem = exports.assertRecordingMatchesSnapshot = exports.stopRecording = exports.startRecording = exports.openRecorderPanel = exports.changeNetworkConditions = exports.createAndStartRecording = exports.enableAndOpenRecorderPanel = exports.enableUntrustedEventMode = exports.onReplayFinished = exports.onRecorderAttachedToTarget = exports.onRecordingStateChanged = exports.getRecordingController = void 0;
const settings_helpers_js_1 = require("../../../test/e2e/helpers/settings-helpers.js");
const helper_js_1 = require("../../../test/shared/helper.js");
const snapshots_js_1 = require("../../../test/shared/snapshots.js");
const RECORDER_CONTROLLER_TAG_NAME = 'devtools-recorder-controller';
const TEST_RECORDING_NAME = 'New Recording';
const ControlOrMeta = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
async function getRecordingController() {
    return (await (0, helper_js_1.waitFor)(RECORDER_CONTROLLER_TAG_NAME));
}
exports.getRecordingController = getRecordingController;
async function onRecordingStateChanged() {
    const view = await getRecordingController();
    return view.evaluate(el => {
        return new Promise(resolve => {
            el.addEventListener('recordingstatechanged', (event) => resolve(event.recording), { once: true });
        });
    });
}
exports.onRecordingStateChanged = onRecordingStateChanged;
async function onRecorderAttachedToTarget() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    return frontend.evaluate(() => {
        return new Promise(resolve => {
            window.addEventListener('recorderAttachedToTarget', resolve, {
                once: true,
            });
        });
    });
}
exports.onRecorderAttachedToTarget = onRecorderAttachedToTarget;
async function onReplayFinished() {
    const view = await getRecordingController();
    return view.evaluate(el => {
        return new Promise(resolve => {
            el.addEventListener('replayfinished', resolve, { once: true });
        });
    });
}
exports.onReplayFinished = onReplayFinished;
async function enableUntrustedEventMode() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.evaluate(`(async () => {
    // TODO: have an explicit UI setting or perhaps a special event to configure this
    // instead of having a global setting.
    const Common = await import('./core/common/common.js');
    Common.Settings.Settings.instance().createSetting('untrusted-recorder-events', true);
  })()`);
}
exports.enableUntrustedEventMode = enableUntrustedEventMode;
async function enableAndOpenRecorderPanel(path) {
    await (0, helper_js_1.goToResource)(path);
    await (0, settings_helpers_js_1.openPanelViaMoreTools)('Recorder');
    await (0, helper_js_1.waitFor)(RECORDER_CONTROLLER_TAG_NAME);
}
exports.enableAndOpenRecorderPanel = enableAndOpenRecorderPanel;
async function createRecording(name, selectorAttribute) {
    const newRecordingButton = await (0, helper_js_1.waitForAria)('Create a new recording');
    await newRecordingButton.click();
    const input = await (0, helper_js_1.waitForAria)('RECORDING NAME');
    await input.type(name);
    if (selectorAttribute) {
        const input = await (0, helper_js_1.waitForAria)('SELECTOR ATTRIBUTE Learn more');
        await input.type(selectorAttribute);
    }
}
async function createAndStartRecording(name, selectorAttribute) {
    await createRecording(name, selectorAttribute);
    const onRecordingStarted = onRecordingStateChanged();
    await (0, helper_js_1.click)('devtools-control-button');
    await (0, helper_js_1.waitFor)('devtools-recording-view');
    await onRecordingStarted;
}
exports.createAndStartRecording = createAndStartRecording;
async function changeNetworkConditions(condition) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.waitForSelector('pierce/#tab-network');
    await frontend.click('pierce/#tab-network');
    await frontend.waitForSelector('pierce/[aria-label="Throttling"]');
    await frontend.select('pierce/[aria-label="Throttling"] select', condition);
}
exports.changeNetworkConditions = changeNetworkConditions;
async function openRecorderPanel() {
    await (0, helper_js_1.click)('[aria-label="Recorder"]');
    await (0, helper_js_1.waitFor)('devtools-recording-view');
}
exports.openRecorderPanel = openRecorderPanel;
async function startRecording(path, options = {
    networkCondition: '',
    untrustedEvents: false,
}) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    if (options.networkCondition) {
        await changeNetworkConditions(options.networkCondition);
    }
    await enableAndOpenRecorderPanel(path);
    if (options.untrustedEvents) {
        await enableUntrustedEventMode();
    }
    await createAndStartRecording(TEST_RECORDING_NAME, options.selectorAttribute);
}
exports.startRecording = startRecording;
async function stopRecording() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    await raf(frontend);
    const onRecordingStopped = onRecordingStateChanged();
    await (0, helper_js_1.click)('aria/End recording');
    return await onRecordingStopped;
}
exports.stopRecording = stopRecording;
const preprocessRecording = (recording, options = {}) => {
    let value = JSON.stringify(recording).replaceAll(`:${(0, helper_js_1.getTestServerPort)()}`, ':<test-port>');
    value = value.replaceAll('\u200b', '');
    if (!options.offsets) {
        value = value.replaceAll(/,?"(?:offsetY|offsetX)":[0-9]+(?:\.[0-9]+)?/g, '');
    }
    return JSON.parse(value.trim());
};
const assertRecordingMatchesSnapshot = (recording, options = {}) => {
    (0, snapshots_js_1.assertMatchesJSONSnapshot)(preprocessRecording(recording, options));
};
exports.assertRecordingMatchesSnapshot = assertRecordingMatchesSnapshot;
async function setCode(flow) {
    const view = await getRecordingController();
    await view.evaluate((el, flow) => {
        el.dispatchEvent(new CustomEvent('setrecording', { detail: flow }));
    }, flow);
}
async function waitForDialogAnimationEnd(root) {
    const ANIMATION_TIMEOUT = 2000;
    const dialog = await (0, helper_js_1.waitFor)('dialog[open]', root);
    const animationPromise = dialog.evaluate((dialog) => {
        return new Promise(resolve => {
            dialog.addEventListener('animationend', () => resolve(), { once: true });
        });
    });
    await Promise.race([animationPromise, (0, helper_js_1.timeout)(ANIMATION_TIMEOUT)]);
}
async function clickSelectButtonItem(itemLabel, root) {
    const selectMenu = await (0, helper_js_1.waitFor)(root);
    const selectMenuButton = await (0, helper_js_1.waitFor)('devtools-select-menu-button', selectMenu);
    const selectMenuButtonArrow = await (0, helper_js_1.waitFor)('#arrow', selectMenuButton);
    const animationEndPromise = waitForDialogAnimationEnd();
    await (0, helper_js_1.clickElement)(selectMenuButtonArrow);
    await animationEndPromise;
    const selectMenuItems = await selectMenu.$$('pierce/devtools-menu-item');
    const selectMenuItemIndex = await Promise
        .all(selectMenuItems.map(selectMenuItem => selectMenuItem.evaluate(element => element.textContent?.trim())))
        .then(elements => elements.findIndex(elementText => elementText === itemLabel));
    if (selectMenuItemIndex === -1) {
        throw new Error(`Select menu item for label "${itemLabel}" is not found in "${root}"`);
    }
    await (0, helper_js_1.clickElement)(selectMenuItems[selectMenuItemIndex]);
}
exports.clickSelectButtonItem = clickSelectButtonItem;
async function setupRecorderWithScript(script, path = 'recorder/recorder.html') {
    await enableAndOpenRecorderPanel(path);
    await createAndStartRecording(script.title);
    await stopRecording();
    await setCode(JSON.stringify(script));
}
exports.setupRecorderWithScript = setupRecorderWithScript;
async function setupRecorderWithScriptAndReplay(script, path = 'recorder/recorder.html') {
    await setupRecorderWithScript(script, path);
    const onceFinished = onReplayFinished();
    await clickSelectButtonItem('Normal (Default)', 'devtools-replay-button');
    await onceFinished;
}
exports.setupRecorderWithScriptAndReplay = setupRecorderWithScriptAndReplay;
async function getCurrentRecording() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    const controller = await (0, helper_js_1.$)(RECORDER_CONTROLLER_TAG_NAME);
    const recording = (await controller?.evaluate(el => JSON.stringify(el.getUserFlow())));
    return JSON.parse(recording);
}
exports.getCurrentRecording = getCurrentRecording;
async function startOrStopRecordingShortcut(execute = 'frontend') {
    const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
    const executeOn = execute === 'frontend' ? frontend : target;
    const onRecordingStarted = onRecordingStateChanged();
    await executeOn.bringToFront();
    await executeOn.keyboard.down(ControlOrMeta);
    await executeOn.keyboard.down('e');
    await executeOn.keyboard.up(ControlOrMeta);
    await executeOn.keyboard.up('e');
    await (0, helper_js_1.waitFor)('devtools-recording-view');
    return await onRecordingStarted;
}
exports.startOrStopRecordingShortcut = startOrStopRecordingShortcut;
async function fillCreateRecordingForm(path) {
    await enableAndOpenRecorderPanel(path);
    await createRecording(TEST_RECORDING_NAME);
}
exports.fillCreateRecordingForm = fillCreateRecordingForm;
async function startRecordingViaShortcut(path) {
    await enableAndOpenRecorderPanel(path);
    await startOrStopRecordingShortcut();
}
exports.startRecordingViaShortcut = startRecordingViaShortcut;
async function replayShortcut() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    await frontend.keyboard.down(ControlOrMeta);
    await frontend.keyboard.down('Enter');
    await frontend.keyboard.up(ControlOrMeta);
    await frontend.keyboard.up('Enter');
}
exports.replayShortcut = replayShortcut;
async function toggleCodeView() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await frontend.bringToFront();
    await frontend.keyboard.down(ControlOrMeta);
    await frontend.keyboard.down('b');
    await frontend.keyboard.up(ControlOrMeta);
    await frontend.keyboard.up('b');
}
exports.toggleCodeView = toggleCodeView;
async function raf(page) {
    await page.evaluate(() => {
        return new Promise(resolve => window.requestAnimationFrame(resolve));
    });
}
exports.raf = raf;
//# sourceMappingURL=helpers.js.map