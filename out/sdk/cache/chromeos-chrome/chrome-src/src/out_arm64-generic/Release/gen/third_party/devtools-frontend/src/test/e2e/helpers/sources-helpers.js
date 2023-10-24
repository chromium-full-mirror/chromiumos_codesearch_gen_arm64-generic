"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.executionLineHighlighted = exports.getNonBreakableLines = exports.getBreakpointDecorators = exports.checkBreakpointDidNotActivate = exports.disableInlineBreakpointForLine = exports.enableInlineBreakpointForLine = exports.isBreakpointSet = exports.addLogpointForLine = exports.removeBreakpointForLine = exports.addBreakpointForLine = exports.getToolbarText = exports.waitForHighlightedLine = exports.getOpenSources = exports.getBreakpointHitLocation = exports.getSelectedSource = exports.openSourceCodeEditorForFile = exports.openFileInEditor = exports.openOverridesSubPane = exports.createNewSnippet = exports.openSnippetsSubPane = exports.createNewRecording = exports.openRecorderSubPane = exports.openFileInSourcesPanel = exports.openSourcesPanel = exports.waitForSourcesPanel = exports.doubleClickSourceTreeItem = exports.getLineNumberElement = exports.toggleDebuggerSidebar = exports.toggleNavigatorSidebar = exports.BREAKPOINT_ITEM_SELECTOR = exports.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR = exports.ENABLE_OVERRIDES_SELECTOR = exports.OVERRIDES_TAB_SELECTOR = exports.MORE_TABS_SELECTOR = exports.DEBUGGER_PAUSED_EVENT = exports.TURNED_ON_PAUSE_BUTTON_SELECTOR = exports.TURNED_OFF_PAUSE_BUTTON_SELECTOR = exports.STEP_OUT_BUTTON = exports.STEP_OVER_BUTTON = exports.STEP_INTO_BUTTON = exports.SELECTED_THREAD_SELECTOR = exports.THREADS_SELECTOR = exports.SCOPE_LOCAL_VALUES_SELECTOR = exports.CODE_LINE_SELECTOR = exports.CODE_LINE_COLUMN_SELECTOR = exports.PAUSE_INDICATOR_SELECTOR = exports.SOURCES_LINES_SELECTOR = exports.RESUME_BUTTON = exports.PAUSE_BUTTON = exports.ACTIVE_LINE = void 0;
exports.isPrettyPrinted = exports.waitForLines = exports.retrieveCodeMirrorEditorContent = exports.WasmLocationLabels = exports.enableLocalOverrides = exports.refreshDevToolsAndRemoveBackendState = exports.addSelectedTextToWatches = exports.evaluateSelectedTextInConsole = exports.runSnippet = exports.getWatchExpressionsValues = exports.getPausedMessages = exports.getValuesForScope = exports.getScopeNames = exports.typeIntoSourcesAndSave = exports.inspectMemory = exports.clickOnContextMenu = exports.openNestedWorkerFile = exports.stepOut = exports.stepOver = exports.stepIn = exports.stepThroughTheCode = exports.readIgnoreListedSources = exports.readSourcesTreeView = exports.expandFileTree = exports.expandSourceTreeItem = exports.createSelectorsForWorkerFile = exports.isEqualOrAbbreviation = exports.reloadPageAndWaitForSourceFile = exports.captureAddedSourceFiles = exports.waitForSourceFiles = exports.waitForStackTopMatch = exports.retrieveTopCallFrameWithoutResuming = exports.retrieveTopCallFrameScriptLocation = exports.switchToCallFrame = exports.getCallFrameLocations = exports.getCallFrameNames = void 0;
const chai_1 = require("chai");
const fs = require("fs");
const path = require("path");
const test_runner_config_js_1 = require("../../conductor/test_runner_config.js");
const helper_js_1 = require("../../shared/helper.js");
exports.ACTIVE_LINE = '.CodeMirror-activeline > pre > span';
exports.PAUSE_BUTTON = '[aria-label="Pause script execution"]';
exports.RESUME_BUTTON = '[aria-label="Resume script execution"]';
exports.SOURCES_LINES_SELECTOR = '.CodeMirror-code > div';
exports.PAUSE_INDICATOR_SELECTOR = '.paused-status';
exports.CODE_LINE_COLUMN_SELECTOR = '.cm-lineNumbers';
exports.CODE_LINE_SELECTOR = '.cm-lineNumbers .cm-gutterElement';
exports.SCOPE_LOCAL_VALUES_SELECTOR = 'li[aria-label="Local"] + ol';
exports.THREADS_SELECTOR = '[aria-label="Threads"]';
exports.SELECTED_THREAD_SELECTOR = 'div.thread-item.selected > div.thread-item-title';
exports.STEP_INTO_BUTTON = '[aria-label="Step into next function call"]';
exports.STEP_OVER_BUTTON = '[aria-label="Step over next function call"]';
exports.STEP_OUT_BUTTON = '[aria-label="Step out of current function"]';
exports.TURNED_OFF_PAUSE_BUTTON_SELECTOR = 'button.toolbar-state-off';
exports.TURNED_ON_PAUSE_BUTTON_SELECTOR = 'button.toolbar-state-on';
exports.DEBUGGER_PAUSED_EVENT = 'DevTools.DebuggerPaused';
const WATCH_EXPRESSION_VALUE_SELECTOR = '.watch-expression-tree-item .object-value-string.value';
exports.MORE_TABS_SELECTOR = '[aria-label="More tabs"]';
exports.OVERRIDES_TAB_SELECTOR = '[aria-label="Overrides"]';
exports.ENABLE_OVERRIDES_SELECTOR = '[aria-label="Select folder for overrides"]';
const CLEAR_CONFIGURATION_SELECTOR = '[aria-label="Clear configuration"]';
exports.PAUSE_ON_UNCAUGHT_EXCEPTION_SELECTOR = '.pause-on-uncaught-exceptions';
exports.BREAKPOINT_ITEM_SELECTOR = '.breakpoint-item';
async function toggleNavigatorSidebar(frontend) {
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.down('Shift');
    await frontend.keyboard.press('y');
    await frontend.keyboard.up('Shift');
    await frontend.keyboard.up(modifierKey);
}
exports.toggleNavigatorSidebar = toggleNavigatorSidebar;
async function toggleDebuggerSidebar(frontend) {
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.down('Shift');
    await frontend.keyboard.press('h');
    await frontend.keyboard.up('Shift');
    await frontend.keyboard.up(modifierKey);
}
exports.toggleDebuggerSidebar = toggleDebuggerSidebar;
async function getLineNumberElement(lineNumber) {
    const visibleLines = await (0, helper_js_1.$$)(exports.CODE_LINE_SELECTOR);
    for (let i = 0; i < visibleLines.length; i++) {
        const lineValue = await visibleLines[i].evaluate(node => node.textContent);
        if (lineValue === `${lineNumber}`) {
            return visibleLines[i];
        }
    }
    return null;
}
exports.getLineNumberElement = getLineNumberElement;
async function doubleClickSourceTreeItem(selector) {
    await (0, helper_js_1.click)(selector, { clickOptions: { clickCount: 2, offset: { x: 40, y: 10 } } });
}
exports.doubleClickSourceTreeItem = doubleClickSourceTreeItem;
async function waitForSourcesPanel() {
    // Wait for the navigation panel to show up
    await (0, helper_js_1.waitFor)('.navigator-file-tree-item');
}
exports.waitForSourcesPanel = waitForSourcesPanel;
async function openSourcesPanel() {
    // Locate the button for switching to the sources tab.
    await (0, helper_js_1.click)('#tab-sources');
    await waitForSourcesPanel();
}
exports.openSourcesPanel = openSourcesPanel;
async function openFileInSourcesPanel(testInput) {
    await (0, helper_js_1.goToResource)(`sources/${testInput}`);
    await openSourcesPanel();
}
exports.openFileInSourcesPanel = openFileInSourcesPanel;
async function openRecorderSubPane() {
    const root = await (0, helper_js_1.waitFor)('.navigator-tabbed-pane');
    await (0, helper_js_1.waitFor)('[aria-label="More tabs"]', root);
    await (0, helper_js_1.click)('[aria-label="More tabs"]', { root });
    await (0, helper_js_1.waitFor)('[aria-label="Recordings"]');
    await (0, helper_js_1.click)('[aria-label="Recordings"]');
    await (0, helper_js_1.waitFor)('[aria-label="Add recording"]');
}
exports.openRecorderSubPane = openRecorderSubPane;
async function createNewRecording(recordingName) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.click)('[aria-label="Add recording"]');
    await (0, helper_js_1.waitFor)('[aria-label^="Recording"]');
    await (0, helper_js_1.typeText)(recordingName);
    await frontend.keyboard.press('Enter');
}
exports.createNewRecording = createNewRecording;
async function openSnippetsSubPane() {
    const root = await (0, helper_js_1.waitFor)('.navigator-tabbed-pane');
    await (0, helper_js_1.waitFor)('[aria-label="More tabs"]', root);
    await (0, helper_js_1.click)('[aria-label="More tabs"]', { root });
    await (0, helper_js_1.waitFor)('[aria-label="Snippets"]');
    await (0, helper_js_1.click)('[aria-label="Snippets"]');
    await (0, helper_js_1.waitFor)('[aria-label="New snippet"]');
}
exports.openSnippetsSubPane = openSnippetsSubPane;
/**
 * Creates a new snippet, optionally pre-filling it with the provided content.
 * `snippetName` must not contain spaces or special characters, otherwise
 * `createNewSnippet` will time out.
 * DevTools uses the escaped snippet name for the ARIA label. `createNewSnippet`
 * doesn't mirror the escaping so it won't be able to wait for the snippet
 * entry in the navigation tree to appear.
 */
async function createNewSnippet(snippetName, content) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.click)('[aria-label="New snippet"]');
    await (0, helper_js_1.waitFor)('[aria-label^="Script snippet"]');
    await (0, helper_js_1.typeText)(snippetName);
    await frontend.keyboard.press('Enter');
    await (0, helper_js_1.waitFor)(`[aria-label*="${snippetName}"]`);
    if (content) {
        await (0, helper_js_1.pasteText)(content);
        await (0, helper_js_1.pressKey)('s', { control: true });
    }
}
exports.createNewSnippet = createNewSnippet;
async function openOverridesSubPane() {
    const root = await (0, helper_js_1.waitFor)('.navigator-tabbed-pane');
    await (0, helper_js_1.waitFor)('[aria-label="More tabs"]', root);
    await (0, helper_js_1.click)('[aria-label="More tabs"]', { root });
    await (0, helper_js_1.waitFor)('[aria-label="Overrides"]');
    await (0, helper_js_1.click)('[aria-label="Overrides"]');
    await (0, helper_js_1.waitFor)('[aria-label="Overrides panel"]');
}
exports.openOverridesSubPane = openOverridesSubPane;
async function openFileInEditor(sourceFile) {
    await waitForSourceFiles("source-file-loaded" /* SourceFileEvents.SourceFileLoaded */, files => files.some(f => f.endsWith(sourceFile)), 
    // Open a particular file in the editor
    () => doubleClickSourceTreeItem(`[aria-label="${sourceFile}, file"]`));
}
exports.openFileInEditor = openFileInEditor;
async function openSourceCodeEditorForFile(sourceFile, testInput) {
    await openFileInSourcesPanel(testInput);
    await openFileInEditor(sourceFile);
}
exports.openSourceCodeEditorForFile = openSourceCodeEditorForFile;
async function getSelectedSource() {
    const sourceTabPane = await (0, helper_js_1.waitFor)('#sources-panel-sources-view .tabbed-pane');
    const sourceTabs = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tab.selected', sourceTabPane);
    return sourceTabs.evaluate(node => node.getAttribute('aria-label'));
}
exports.getSelectedSource = getSelectedSource;
async function getBreakpointHitLocation() {
    const breakpointHitHandle = await (0, helper_js_1.waitFor)('.breakpoint-item.hit');
    const locationHandle = await (0, helper_js_1.waitFor)('.location', breakpointHitHandle);
    const locationText = await locationHandle.evaluate(location => location.textContent);
    const groupHandle = await breakpointHitHandle.evaluateHandle(x => x.parentElement);
    const groupHeaderTitleHandle = await (0, helper_js_1.waitFor)('.group-header-title', groupHandle);
    const groupHeaderTitle = await groupHeaderTitleHandle?.evaluate(header => header.textContent);
    return `${groupHeaderTitle}:${locationText}`;
}
exports.getBreakpointHitLocation = getBreakpointHitLocation;
async function getOpenSources() {
    const sourceTabPane = await (0, helper_js_1.waitFor)('#sources-panel-sources-view .tabbed-pane');
    const sourceTabs = await (0, helper_js_1.waitFor)('.tabbed-pane-header-tabs', sourceTabPane);
    const openSources = await sourceTabs.$$eval('.tabbed-pane-header-tab', nodes => nodes.map(n => n.getAttribute('aria-label')));
    return openSources;
}
exports.getOpenSources = getOpenSources;
async function waitForHighlightedLine(lineNumber) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const selectedLine = await (0, helper_js_1.waitFor)('.cm-highlightedLine');
        const currentlySelectedLineNumber = await selectedLine.evaluate(line => {
            return [...line.parentElement?.childNodes || []].indexOf(line);
        });
        const lineNumbers = await (0, helper_js_1.waitFor)('.cm-lineNumbers');
        const text = await lineNumbers.evaluate((node, lineNumber) => node.childNodes[lineNumber].textContent, currentlySelectedLineNumber + 1);
        return Number(text) === lineNumber;
    });
}
exports.waitForHighlightedLine = waitForHighlightedLine;
async function getToolbarText() {
    const toolbar = await (0, helper_js_1.waitFor)('.sources-toolbar');
    if (!toolbar) {
        return [];
    }
    const textNodes = await (0, helper_js_1.$$)('.toolbar-text', toolbar);
    return Promise.all(textNodes.map(node => node.evaluate(node => node.textContent, node)));
}
exports.getToolbarText = getToolbarText;
async function addBreakpointForLine(frontend, index) {
    const breakpointLine = await getLineNumberElement(index);
    (0, helper_js_1.assertNotNullOrUndefined)(breakpointLine);
    await (0, helper_js_1.waitForFunction)(async () => !(await isBreakpointSet(index)));
    await (0, helper_js_1.clickElement)(breakpointLine);
    await (0, helper_js_1.waitForFunction)(async () => await isBreakpointSet(index));
}
exports.addBreakpointForLine = addBreakpointForLine;
async function removeBreakpointForLine(frontend, index) {
    const breakpointLine = await getLineNumberElement(index);
    (0, helper_js_1.assertNotNullOrUndefined)(breakpointLine);
    await (0, helper_js_1.waitForFunction)(async () => await isBreakpointSet(index));
    await (0, helper_js_1.clickElement)(breakpointLine);
    await (0, helper_js_1.waitForFunction)(async () => !(await isBreakpointSet(index)));
}
exports.removeBreakpointForLine = removeBreakpointForLine;
async function addLogpointForLine(index, condition) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const breakpointLine = await getLineNumberElement(index);
    (0, helper_js_1.assertNotNullOrUndefined)(breakpointLine);
    await (0, helper_js_1.waitForFunction)(async () => !(await isBreakpointSet(index)));
    await (0, helper_js_1.clickElement)(breakpointLine, { clickOptions: { button: 'right' } });
    await (0, helper_js_1.click)('aria/Add logpoint…');
    const editDialog = await (0, helper_js_1.waitFor)('.sources-edit-breakpoint-dialog');
    const conditionEditor = await (0, helper_js_1.waitForAria)('Code editor', editDialog);
    await conditionEditor.focus();
    await (0, helper_js_1.typeText)(condition);
    await frontend.keyboard.press('Enter');
    await (0, helper_js_1.waitForFunction)(async () => await isBreakpointSet(index));
}
exports.addLogpointForLine = addLogpointForLine;
async function isBreakpointSet(lineNumber) {
    const lineNumberElement = await getLineNumberElement(lineNumber);
    const breakpointLineParentClasses = await lineNumberElement?.evaluate(n => n.className);
    return breakpointLineParentClasses?.includes('cm-breakpoint');
}
exports.isBreakpointSet = isBreakpointSet;
/**
 * @param lineNumber 1-based line number
 * @param index 1-based index of the inline breakpoint in the given line
 */
async function enableInlineBreakpointForLine(line, index) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const decorationSelector = `pierce/.cm-content > :nth-child(${line}) > :nth-child(${index} of .cm-inlineBreakpoint)`;
    await (0, helper_js_1.click)(decorationSelector);
    await (0, helper_js_1.waitForFunction)(() => frontend.$eval(decorationSelector, element => !element.classList.contains('cm-inlineBreakpoint-disabled')));
}
exports.enableInlineBreakpointForLine = enableInlineBreakpointForLine;
/**
 * @param lineNumber 1-based line number
 * @param index 1-based index of the inline breakpoint in the given line
 * @param expectNoBreakpoint If we should wait for the line to not have any inline breakpoints after
 *                           the click instead of a disabled one.
 */
async function disableInlineBreakpointForLine(line, index, expectNoBreakpoint = false) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const decorationSelector = `pierce/.cm-content > :nth-child(${line}) > :nth-child(${index} of .cm-inlineBreakpoint)`;
    await (0, helper_js_1.click)(decorationSelector);
    if (expectNoBreakpoint) {
        await (0, helper_js_1.waitForFunction)(() => frontend.$$eval(`pierce/.cm-content > :nth-child(${line}) > .cm-inlineBreakpoint`, elements => elements.length === 0));
    }
    else {
        await (0, helper_js_1.waitForFunction)(() => frontend.$eval(decorationSelector, element => element.classList.contains('cm-inlineBreakpoint-disabled')));
    }
}
exports.disableInlineBreakpointForLine = disableInlineBreakpointForLine;
async function checkBreakpointDidNotActivate() {
    await (0, helper_js_1.step)('check that the script did not pause', async () => {
        // TODO(almuthanna): make sure this check happens at a point where the pause indicator appears if it was active
        const pauseIndicators = await (0, helper_js_1.$$)(exports.PAUSE_INDICATOR_SELECTOR);
        const breakpointIndicator = await Promise.all(pauseIndicators.map(elements => {
            return elements.evaluate(el => el.className);
        }));
        chai_1.assert.deepEqual(breakpointIndicator.length, 0, 'script had been paused');
    });
}
exports.checkBreakpointDidNotActivate = checkBreakpointDidNotActivate;
async function getBreakpointDecorators(disabledOnly = false) {
    const selector = `.cm-breakpoint${disabledOnly ? '-disabled' : ''}`;
    const breakpointDecorators = await (0, helper_js_1.$$)(selector);
    return await Promise.all(breakpointDecorators.map(breakpointDecorator => breakpointDecorator.evaluate(n => Number(n.textContent))));
}
exports.getBreakpointDecorators = getBreakpointDecorators;
async function getNonBreakableLines() {
    const selector = '.cm-nonBreakableLine';
    await (0, helper_js_1.waitFor)(selector);
    const unbreakableLines = await (0, helper_js_1.$$)(selector);
    return await Promise.all(unbreakableLines.map(unbreakableLine => unbreakableLine.evaluate(n => Number(n.textContent))));
}
exports.getNonBreakableLines = getNonBreakableLines;
async function executionLineHighlighted() {
    return await (0, helper_js_1.waitFor)('.cm-executionLine');
}
exports.executionLineHighlighted = executionLineHighlighted;
async function getCallFrameNames() {
    const selector = '.call-frame-item:not(.hidden) .call-frame-item-title';
    await (0, helper_js_1.waitFor)(selector);
    const items = await (0, helper_js_1.$$)(selector);
    const promises = items.map(handle => handle.evaluate(el => el.textContent));
    const results = [];
    for (const promise of promises) {
        results.push(await promise);
    }
    return results;
}
exports.getCallFrameNames = getCallFrameNames;
async function getCallFrameLocations() {
    const selector = '.call-frame-item:not(.hidden) .call-frame-location';
    await (0, helper_js_1.waitFor)(selector);
    const items = await (0, helper_js_1.$$)(selector);
    const promises = items.map(handle => handle.evaluate(el => el.textContent));
    const results = [];
    for (const promise of promises) {
        results.push(await promise);
    }
    return results;
}
exports.getCallFrameLocations = getCallFrameLocations;
async function switchToCallFrame(index) {
    const selector = `.call-frame-item[aria-posinset="${index}"]`;
    await (0, helper_js_1.click)(selector);
    await (0, helper_js_1.waitFor)(selector + '[aria-selected="true"]');
}
exports.switchToCallFrame = switchToCallFrame;
async function retrieveTopCallFrameScriptLocation(script, target) {
    // The script will run into a breakpoint, which means that it will not actually
    // finish the evaluation, until we continue executing.
    // Thus, we have to await it at a later point, while stepping through the code.
    const scriptEvaluation = target.evaluate(script);
    // Wait for the evaluation to be paused and shown in the UI
    // and retrieve the top level call frame script location name
    const scriptLocation = await retrieveTopCallFrameWithoutResuming();
    // Resume the evaluation
    await (0, helper_js_1.click)(exports.RESUME_BUTTON);
    // Make sure to await the context evaluate before asserting
    // Otherwise the Puppeteer process might crash on a failure assertion,
    // as its execution context is destroyed
    await scriptEvaluation;
    return scriptLocation;
}
exports.retrieveTopCallFrameScriptLocation = retrieveTopCallFrameScriptLocation;
async function retrieveTopCallFrameWithoutResuming() {
    // Wait for the evaluation to be paused and shown in the UI
    await (0, helper_js_1.waitFor)(exports.PAUSE_INDICATOR_SELECTOR);
    // Retrieve the top level call frame script location name
    const locationHandle = await (0, helper_js_1.waitFor)('.call-frame-location');
    const scriptLocation = await locationHandle.evaluate(location => location.textContent);
    return scriptLocation;
}
exports.retrieveTopCallFrameWithoutResuming = retrieveTopCallFrameWithoutResuming;
async function waitForStackTopMatch(matcher) {
    // The call stack is updated asynchronously, so let us wait until we see the correct one
    // (or report the last one we have seen before timeout).
    let stepLocation = '<no call stack>';
    await (0, helper_js_1.waitForFunctionWithTries)(async () => {
        stepLocation = await retrieveTopCallFrameWithoutResuming() ?? '<invalid>';
        return stepLocation?.match(matcher);
    }, { tries: 10 });
    return stepLocation;
}
exports.waitForStackTopMatch = waitForStackTopMatch;
let nextEventHandlerId = 0;
async function waitForSourceFiles(eventName, waitCondition, action) {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const eventHandlerId = nextEventHandlerId++;
    // Install new listener for the event
    await frontend.evaluate((eventName, eventHandlerId) => {
        if (!window.__sourceFileEvents) {
            window.__sourceFileEvents = new Map();
        }
        const handler = (event) => {
            const { detail } = event;
            if (!detail.includes('pptr:')) {
                window.__sourceFileEvents.get(eventHandlerId)?.files.push(detail);
            }
        };
        window.__sourceFileEvents.set(eventHandlerId, { files: [], handler });
        window.addEventListener(eventName, handler);
    }, eventName, eventHandlerId);
    const result = await action();
    await (0, helper_js_1.waitForFunction)(async () => {
        const files = await frontend.evaluate(eventHandlerId => window.__sourceFileEvents.get(eventHandlerId)?.files, eventHandlerId);
        (0, helper_js_1.assertNotNullOrUndefined)(files);
        return await waitCondition(files);
    });
    await frontend.evaluate((eventName, eventHandlerId) => {
        const handler = window.__sourceFileEvents.get(eventHandlerId);
        if (!handler) {
            throw new Error('handler unexpectandly unregistered');
        }
        window.__sourceFileEvents.delete(eventHandlerId);
        window.removeEventListener(eventName, handler.handler);
    }, eventName, eventHandlerId);
    return result;
}
exports.waitForSourceFiles = waitForSourceFiles;
async function captureAddedSourceFiles(count, action) {
    let capturedFileNames;
    await waitForSourceFiles("source-tree-file-added" /* SourceFileEvents.AddedToSourceTree */, files => {
        capturedFileNames = files;
        return files.length >= count;
    }, action);
    return capturedFileNames.map(f => new URL(`http://${f}`).pathname);
}
exports.captureAddedSourceFiles = captureAddedSourceFiles;
async function reloadPageAndWaitForSourceFile(target, sourceFile) {
    await waitForSourceFiles("source-file-loaded" /* SourceFileEvents.SourceFileLoaded */, files => files.some(f => f.endsWith(sourceFile)), () => target.reload());
}
exports.reloadPageAndWaitForSourceFile = reloadPageAndWaitForSourceFile;
function isEqualOrAbbreviation(abbreviated, full) {
    const split = abbreviated.split('…');
    if (split.length === 1) {
        return abbreviated === full;
    }
    chai_1.assert.lengthOf(split, 2);
    return full.startsWith(split[0]) && full.endsWith(split[1]);
}
exports.isEqualOrAbbreviation = isEqualOrAbbreviation;
function createSelectorsForWorkerFile(workerName, folderName, fileName, workerIndex = 1) {
    const rootSelector = new Array(workerIndex).fill(`[aria-label="${workerName}, worker"]`).join(' ~ ');
    const domainSelector = `${rootSelector} + ol > [aria-label="localhost:${(0, helper_js_1.getTestServerPort)()}, domain"]`;
    const folderSelector = `${domainSelector} + ol > [aria-label^="${folderName}, "]`;
    const fileSelector = `${folderSelector} + ol > [aria-label="${fileName}, file"]`;
    return {
        rootSelector,
        domainSelector,
        folderSelector,
        fileSelector,
    };
}
exports.createSelectorsForWorkerFile = createSelectorsForWorkerFile;
async function isExpanded(sourceTreeItem) {
    return await sourceTreeItem.evaluate(element => {
        return element.getAttribute('aria-expanded') === 'true';
    });
}
async function expandSourceTreeItem(selector) {
    // FIXME(crbug/1112692): Refactor test to remove the timeout.
    await (0, helper_js_1.timeout)(50);
    const sourceTreeItem = await (0, helper_js_1.waitFor)(selector);
    if (!await isExpanded(sourceTreeItem)) {
        // FIXME(crbug/1112692): Refactor test to remove the timeout.
        await (0, helper_js_1.timeout)(50);
        await doubleClickSourceTreeItem(selector);
    }
}
exports.expandSourceTreeItem = expandSourceTreeItem;
async function expandFileTree(selectors) {
    await expandSourceTreeItem(selectors.rootSelector);
    await expandSourceTreeItem(selectors.domainSelector);
    if (selectors.folderSelector) {
        await expandSourceTreeItem(selectors.folderSelector);
    }
    // FIXME(crbug/1112692): Refactor test to remove the timeout.
    await (0, helper_js_1.timeout)(50);
    return await (0, helper_js_1.waitFor)(selectors.fileSelector);
}
exports.expandFileTree = expandFileTree;
async function readSourcesTreeView() {
    const items = await (0, helper_js_1.$$)('.navigator-folder-tree-item,.navigator-file-tree-item');
    const promises = items.map(handle => handle.evaluate(el => el.textContent));
    const results = await Promise.all(promises);
    return results.map(item => item.replace(/localhost:[0-9]+/, 'localhost:XXXX'));
}
exports.readSourcesTreeView = readSourcesTreeView;
async function readIgnoreListedSources() {
    const items = await (0, helper_js_1.$$)('.navigator-folder-tree-item.is-ignore-listed,.navigator-file-tree-item.is-ignore-listed');
    const promises = items.map(handle => handle.evaluate(el => el.textContent));
    const results = await Promise.all(promises);
    return results.map(item => item.replace(/localhost:[0-9]+/, 'localhost:XXXX'));
}
exports.readIgnoreListedSources = readIgnoreListedSources;
async function hasPausedEvents(frontend) {
    const events = await (0, helper_js_1.getPendingEvents)(frontend, exports.DEBUGGER_PAUSED_EVENT);
    return Boolean(events && events.length);
}
async function stepThroughTheCode() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.getPendingEvents)(frontend, exports.DEBUGGER_PAUSED_EVENT);
    await frontend.keyboard.press('F9');
    await (0, helper_js_1.waitForFunction)(() => hasPausedEvents(frontend));
    await (0, helper_js_1.waitFor)(exports.PAUSE_INDICATOR_SELECTOR);
}
exports.stepThroughTheCode = stepThroughTheCode;
async function stepIn() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.getPendingEvents)(frontend, exports.DEBUGGER_PAUSED_EVENT);
    await frontend.keyboard.press('F11');
    await (0, helper_js_1.waitForFunction)(() => hasPausedEvents(frontend));
    await (0, helper_js_1.waitFor)(exports.PAUSE_INDICATOR_SELECTOR);
}
exports.stepIn = stepIn;
async function stepOver() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.getPendingEvents)(frontend, exports.DEBUGGER_PAUSED_EVENT);
    await frontend.keyboard.press('F10');
    await (0, helper_js_1.waitForFunction)(() => hasPausedEvents(frontend));
    await (0, helper_js_1.waitFor)(exports.PAUSE_INDICATOR_SELECTOR);
}
exports.stepOver = stepOver;
async function stepOut() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.getPendingEvents)(frontend, exports.DEBUGGER_PAUSED_EVENT);
    await frontend.keyboard.down('Shift');
    await frontend.keyboard.press('F11');
    await frontend.keyboard.up('Shift');
    await (0, helper_js_1.waitForFunction)(() => hasPausedEvents(frontend));
    await (0, helper_js_1.waitFor)(exports.PAUSE_INDICATOR_SELECTOR);
}
exports.stepOut = stepOut;
async function openNestedWorkerFile(selectors) {
    await expandFileTree(selectors);
    // FIXME(crbug/1112692): Refactor test to remove the timeout.
    await (0, helper_js_1.timeout)(50);
    await (0, helper_js_1.click)(selectors.fileSelector);
}
exports.openNestedWorkerFile = openNestedWorkerFile;
async function clickOnContextMenu(selector, label) {
    // Find the selected node, right click.
    await (0, helper_js_1.click)(selector, { clickOptions: { button: 'right' } });
    // Wait for the context menu option, and click it.
    const labelSelector = `.soft-context-menu > [aria-label="${label}"]`;
    await (0, helper_js_1.waitFor)(labelSelector);
    await (0, helper_js_1.click)(labelSelector);
}
exports.clickOnContextMenu = clickOnContextMenu;
async function inspectMemory(variableName) {
    await clickOnContextMenu(`[data-object-property-name-for-test="${variableName}"]`, 'Reveal in Memory Inspector panel');
}
exports.inspectMemory = inspectMemory;
async function typeIntoSourcesAndSave(text) {
    const pane = await (0, helper_js_1.waitFor)('.sources');
    await pane.type(text);
    await (0, helper_js_1.pressKey)('s', { control: true });
}
exports.typeIntoSourcesAndSave = typeIntoSourcesAndSave;
async function getScopeNames() {
    const scopeElements = await (0, helper_js_1.$$)('.scope-chain-sidebar-pane-section-title');
    const scopeNames = await Promise.all(scopeElements.map(nodes => nodes.evaluate(n => n.textContent)));
    return scopeNames;
}
exports.getScopeNames = getScopeNames;
async function getValuesForScope(scope, expandCount, waitForNoOfValues) {
    const scopeSelector = `[aria-label="${scope}"]`;
    await (0, helper_js_1.waitFor)(scopeSelector);
    for (let i = 0; i < expandCount; i++) {
        const unexpandedSelector = `${scopeSelector} + ol li[aria-expanded=false]`;
        await (0, helper_js_1.waitFor)(unexpandedSelector);
        await (0, helper_js_1.click)(unexpandedSelector);
    }
    const valueSelector = `${scopeSelector} + ol .name-and-value`;
    const valueSelectorElements = await (0, helper_js_1.waitForFunction)(async () => {
        const elements = await (0, helper_js_1.$$)(valueSelector);
        if (elements.length >= waitForNoOfValues) {
            return elements;
        }
        return undefined;
    });
    const values = await Promise.all(valueSelectorElements.map(elem => elem.evaluate(n => n.textContent)));
    return values;
}
exports.getValuesForScope = getValuesForScope;
async function getPausedMessages() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const messageElement = await frontend.waitForSelector('.paused-message');
    if (!messageElement) {
        chai_1.assert.fail('getPausedMessages: did not find .paused-message element.');
    }
    const statusMain = await (0, helper_js_1.waitFor)('.status-main', messageElement);
    const statusSub = await (0, helper_js_1.waitFor)('.status-sub', messageElement);
    return {
        statusMain: await statusMain.evaluate(x => x.textContent),
        statusSub: await statusSub.evaluate(x => x.textContent),
    };
}
exports.getPausedMessages = getPausedMessages;
async function getWatchExpressionsValues() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    await (0, helper_js_1.waitForFunction)(async () => {
        const expandedOption = await (0, helper_js_1.$)('[aria-label="Watch"].expanded');
        if (expandedOption) {
            return true;
        }
        await (0, helper_js_1.click)('[aria-label="Watch"]');
        // Wait for the click event to settle.
        await (0, helper_js_1.timeout)(100);
        return expandedOption !== null;
    });
    await frontend.keyboard.press('ArrowRight');
    const watchExpressionValue = await (0, helper_js_1.$)(WATCH_EXPRESSION_VALUE_SELECTOR);
    if (!watchExpressionValue) {
        return null;
    }
    const values = await (0, helper_js_1.$$)(WATCH_EXPRESSION_VALUE_SELECTOR);
    return await Promise.all(values.map(value => value.evaluate(element => element.innerText)));
}
exports.getWatchExpressionsValues = getWatchExpressionsValues;
async function runSnippet() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.press('Enter');
    await frontend.keyboard.up(modifierKey);
}
exports.runSnippet = runSnippet;
async function evaluateSelectedTextInConsole() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.down('Shift');
    await frontend.keyboard.press('E');
    await frontend.keyboard.up(modifierKey);
    await frontend.keyboard.up('Shift');
}
exports.evaluateSelectedTextInConsole = evaluateSelectedTextInConsole;
async function addSelectedTextToWatches() {
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    const modifierKey = helper_js_1.platform === 'mac' ? 'Meta' : 'Control';
    await frontend.keyboard.down(modifierKey);
    await frontend.keyboard.down('Shift');
    await frontend.keyboard.press('A');
    await frontend.keyboard.up(modifierKey);
    await frontend.keyboard.up('Shift');
}
exports.addSelectedTextToWatches = addSelectedTextToWatches;
async function refreshDevToolsAndRemoveBackendState(target) {
    // Navigate to a different site to make sure that back-end state will be removed.
    await target.goto('about:blank');
    await (0, helper_js_1.reloadDevTools)({ selectedPanel: { name: 'sources' } });
}
exports.refreshDevToolsAndRemoveBackendState = refreshDevToolsAndRemoveBackendState;
async function enableLocalOverrides() {
    await (0, helper_js_1.click)(exports.MORE_TABS_SELECTOR);
    await (0, helper_js_1.click)(exports.OVERRIDES_TAB_SELECTOR);
    await (0, helper_js_1.click)(exports.ENABLE_OVERRIDES_SELECTOR);
    await (0, helper_js_1.waitFor)(CLEAR_CONFIGURATION_SELECTOR);
}
exports.enableLocalOverrides = enableLocalOverrides;
class WasmLocationLabels {
    #mappings;
    #source;
    #wasm;
    constructor(source, wasm, mappings) {
        this.#mappings = mappings;
        this.#source = source;
        this.#wasm = wasm;
    }
    static load(source, wasm) {
        const testSuitePath = (0, test_runner_config_js_1.requireTestRunnerConfigSetting)('test-suite-path');
        const target = (0, test_runner_config_js_1.requireTestRunnerConfigSetting)('target');
        const mapFileName = path.join('out', target, testSuitePath, 'resources', `${wasm}.map.json`);
        const mapFile = JSON.parse(fs.readFileSync(mapFileName, { encoding: 'utf-8' }));
        const sourceFileName = path.join('out', target, testSuitePath, 'resources', source);
        const sourceFile = fs.readFileSync(sourceFileName, { encoding: 'utf-8' });
        const labels = new Map();
        for (const [index, line] of sourceFile.split('\n').entries()) {
            if (line.trim().startsWith(';;@')) {
                const label = line.trim().substr(3).trim();
                chai_1.assert.isFalse(labels.has(label), `Label ${label} must be unique`);
                labels.set(label, index + 1);
            }
        }
        const mappings = new Map();
        for (const m of mapFile) {
            const entry = mappings.get(m.source) ?? [];
            if (entry.length === 0) {
                mappings.set(m.source, entry);
            }
            const labelLine = m.originalLine;
            const labelColumn = m.originalColumn;
            const sourceLine = labels.get(`${m.source}:${labelLine}:${labelColumn}`);
            (0, helper_js_1.assertNotNullOrUndefined)(sourceLine);
            entry.push({
                label: m.source,
                moduleOffset: m.generatedColumn,
                bytecode: m.bytecodeOffset,
                sourceLine,
                labelLine,
                labelColumn,
            });
        }
        return new WasmLocationLabels(source, wasm, mappings);
    }
    async checkLocationForLabel(label) {
        const mappedLines = this.#mappings.get(label);
        (0, helper_js_1.assertNotNullOrUndefined)(mappedLines);
        const pauseLocation = await retrieveTopCallFrameWithoutResuming();
        const pausedLine = mappedLines.find(line => pauseLocation === `${path.basename(this.#wasm)}:0x${line.moduleOffset.toString(16)}` ||
            pauseLocation === `${path.basename(this.#source)}:${line.sourceLine}`);
        (0, helper_js_1.assertNotNullOrUndefined)(pausedLine);
        return pausedLine;
    }
    async addBreakpointsForLabelInSource(label) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const mappedLines = this.#mappings.get(label);
        (0, helper_js_1.assertNotNullOrUndefined)(mappedLines);
        await openFileInEditor(path.basename(this.#source));
        for (const line of mappedLines) {
            await addBreakpointForLine(frontend, line.sourceLine);
        }
    }
    async addBreakpointsForLabelInWasm(label) {
        const { frontend } = (0, helper_js_1.getBrowserAndPages)();
        const mappedLines = this.#mappings.get(label);
        (0, helper_js_1.assertNotNullOrUndefined)(mappedLines);
        await openFileInEditor(path.basename(this.#wasm));
        const visibleLines = await (0, helper_js_1.$$)(exports.CODE_LINE_SELECTOR);
        const lineNumbers = await Promise.all(visibleLines.map(line => line.evaluate(node => node.textContent)));
        const lineNumberLabels = new Map(lineNumbers.map(label => [Number(label), label]));
        for (const line of mappedLines) {
            const lineNumberLabel = lineNumberLabels.get(line.moduleOffset);
            (0, helper_js_1.assertNotNullOrUndefined)(lineNumberLabel);
            await addBreakpointForLine(frontend, lineNumberLabel);
        }
    }
    async setBreakpointInSourceAndRun(label, script) {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await this.addBreakpointsForLabelInSource(label);
        target.evaluate(script);
        await this.checkLocationForLabel(label);
    }
    async setBreakpointInWasmAndRun(label, script) {
        const { target } = (0, helper_js_1.getBrowserAndPages)();
        await this.addBreakpointsForLabelInWasm(label);
        target.evaluate(script);
        await this.checkLocationForLabel(label);
    }
    async continueAndCheckForLabel(label) {
        await (0, helper_js_1.click)(exports.RESUME_BUTTON);
        await this.checkLocationForLabel(label);
    }
    getMappingsForPlugin() {
        return Array.from(this.#mappings.values()).flat();
    }
}
exports.WasmLocationLabels = WasmLocationLabels;
async function retrieveCodeMirrorEditorContent() {
    const editor = await (0, helper_js_1.waitFor)('[aria-label="Code editor"]');
    return await editor.evaluate(node => [...node.querySelectorAll('.cm-line')].map(node => node.textContent || '') || []);
}
exports.retrieveCodeMirrorEditorContent = retrieveCodeMirrorEditorContent;
async function waitForLines(lineCount) {
    await (0, helper_js_1.waitFor)(new Array(lineCount).fill('.cm-line').join(' ~ '));
}
exports.waitForLines = waitForLines;
async function isPrettyPrinted() {
    const prettyButton = await (0, helper_js_1.waitFor)('[aria-label="Pretty print"]');
    const isPretty = await prettyButton.evaluate(e => e.ariaPressed);
    return isPretty === 'true';
}
exports.isPrettyPrinted = isPrettyPrinted;
//# sourceMappingURL=sources-helpers.js.map