"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderHtmlInIframe = exports.interceptNextFileSave = exports.registerServiceWorker = exports.getServiceWorkerCount = exports.getTargetViewport = exports.getAuditsBreakdown = exports.endTimespan = exports.waitForTimespanStarted = exports.waitForStorageUsage = exports.clearSiteData = exports.openStorageView = exports.getHelpText = exports.isGenerateReportButtonDisabled = exports.clickStartButton = exports.setThrottlingMethod = exports.setToolbarCheckboxWithText = exports.selectDevice = exports.selectMode = exports.selectRadioOption = exports.selectCategories = exports.waitForResult = exports.navigateToLighthouseTab = void 0;
const helper_js_1 = require("../../shared/helper.js");
const application_helpers_js_1 = require("./application-helpers.js");
const chai_1 = require("chai");
async function navigateToLighthouseTab(path) {
    let lighthouseTabButton = await (0, helper_js_1.$)('#tab-lighthouse');
    // Lighthouse tab can be hidden if the frontend is in a dockable state.
    if (!lighthouseTabButton) {
        const moreTabsButton = await (0, helper_js_1.waitForAria)('More tabs');
        await moreTabsButton.click();
        lighthouseTabButton = await (0, helper_js_1.waitForElementWithTextContent)('Lighthouse');
    }
    await lighthouseTabButton.click();
    await (0, helper_js_1.waitFor)('.view-container > .lighthouse');
    const { target, frontend } = (0, helper_js_1.getBrowserAndPages)();
    if (path) {
        await target.bringToFront();
        await (0, helper_js_1.goToResource)(path);
        await frontend.bringToFront();
    }
    return (0, helper_js_1.waitFor)('.lighthouse-start-view');
}
exports.navigateToLighthouseTab = navigateToLighthouseTab;
// Instead of watching the worker or controller/panel internals, we wait for the Lighthouse renderer
// to create the new report DOM. And we pull the LHR and artifacts off the lh-root node.
async function waitForResult() {
    const { target, frontend } = await (0, helper_js_1.getBrowserAndPages)();
    // Ensure the target page is in front so the Lighthouse run can finish.
    await target.bringToFront();
    await (0, helper_js_1.waitForFunction)(() => {
        return frontend.evaluate(`(async () => {
      const Lighthouse = await import('./panels/lighthouse/lighthouse.js');
      return Lighthouse.LighthousePanel.LighthousePanel.instance().reportSelector.hasItems();
    })()`);
    });
    // Bring the DT frontend back in front to render the Lighthouse report.
    await frontend.bringToFront();
    const reportEl = await (0, helper_js_1.waitFor)('.lh-root');
    const result = await reportEl.evaluate(elem => {
        // @ts-expect-error we installed this obj on a DOM element
        const lhr = elem._lighthouseResultForTesting;
        // @ts-expect-error we installed this obj on a DOM element
        const artifacts = elem._lighthouseArtifactsForTesting;
        // Delete so any subsequent runs don't accidentally reuse this.
        // @ts-expect-error
        delete elem._lighthouseResultForTesting;
        // @ts-expect-error
        delete elem._lighthouseArtifactsForTesting;
        return { lhr, artifacts };
    });
    return { ...result, reportEl };
}
exports.waitForResult = waitForResult;
/**
 * Set the category checkboxes
 * @param selectedCategoryIds One of 'performance'|'accessibility'|'best-practices'|'seo'|'pwa'|'lighthouse-plugin-publisher-ads'
 */
async function selectCategories(selectedCategoryIds) {
    const startViewHandle = await (0, helper_js_1.waitFor)('.lighthouse-start-view');
    const checkboxHandles = await startViewHandle.$$('[is=dt-checkbox]');
    for (const checkboxHandle of checkboxHandles) {
        await checkboxHandle.evaluate((dtCheckboxElem, selectedCategoryIds) => {
            const elem = dtCheckboxElem;
            const categoryId = elem.getAttribute('data-lh-category') || '';
            elem.checkboxElement.checked = selectedCategoryIds.includes(categoryId);
            elem.checkboxElement.dispatchEvent(new Event('change')); // Need change event to update the backing setting.
        }, selectedCategoryIds);
    }
}
exports.selectCategories = selectCategories;
async function selectRadioOption(value, optionName) {
    const startViewHandle = await (0, helper_js_1.waitFor)('.lighthouse-start-view');
    await startViewHandle.$eval(`input[value="${value}"][name="${optionName}"]`, radioElem => {
        radioElem.checked = true;
        radioElem
            .dispatchEvent(new Event('change')); // Need change event to update the backing setting.
    });
}
exports.selectRadioOption = selectRadioOption;
async function selectMode(mode) {
    await selectRadioOption(mode, 'lighthouse.mode');
}
exports.selectMode = selectMode;
async function selectDevice(device) {
    await selectRadioOption(device, 'lighthouse.device_type');
}
exports.selectDevice = selectDevice;
async function setToolbarCheckboxWithText(enabled, textContext) {
    const toolbarHandle = await (0, helper_js_1.waitFor)('.lighthouse-settings-pane .toolbar');
    const label = await (0, helper_js_1.waitForElementWithTextContent)(textContext, toolbarHandle);
    await label.evaluate((label, enabled) => {
        const rootNode = label.getRootNode();
        const checkboxId = label.getAttribute('for');
        const checkboxElem = rootNode.getElementById(checkboxId);
        checkboxElem.checked = enabled;
        checkboxElem.dispatchEvent(new Event('change')); // Need change event to update the backing setting.
    }, enabled);
}
exports.setToolbarCheckboxWithText = setToolbarCheckboxWithText;
async function setThrottlingMethod(throttlingMethod) {
    const toolbarHandle = await (0, helper_js_1.waitFor)('.lighthouse-settings-pane .toolbar');
    await toolbarHandle.evaluate((toolbar, throttlingMethod) => {
        const selectElem = toolbar.shadowRoot?.querySelector('select');
        const optionElem = selectElem.querySelector(`option[value="${throttlingMethod}"]`);
        optionElem.selected = true;
        selectElem.dispatchEvent(new Event('change')); // Need change event to update the backing setting.
    }, throttlingMethod);
}
exports.setThrottlingMethod = setThrottlingMethod;
async function clickStartButton() {
    await (0, helper_js_1.click)('.lighthouse-start-view button');
}
exports.clickStartButton = clickStartButton;
async function isGenerateReportButtonDisabled() {
    const button = await (0, helper_js_1.waitFor)('.lighthouse-start-view .primary-button');
    return button.evaluate(element => element.disabled);
}
exports.isGenerateReportButtonDisabled = isGenerateReportButtonDisabled;
async function getHelpText() {
    const helpTextHandle = await (0, helper_js_1.waitFor)('.lighthouse-start-view .lighthouse-help-text');
    return helpTextHandle.evaluate(helpTextEl => helpTextEl.textContent);
}
exports.getHelpText = getHelpText;
async function openStorageView() {
    await (0, helper_js_1.click)('#tab-resources');
    const STORAGE_SELECTOR = '[aria-label="Storage"]';
    await (0, helper_js_1.waitFor)('.storage-group-list-item');
    await (0, helper_js_1.waitFor)(STORAGE_SELECTOR);
    await (0, helper_js_1.click)(STORAGE_SELECTOR);
}
exports.openStorageView = openStorageView;
async function clearSiteData() {
    await (0, helper_js_1.goToResource)('empty.html');
    await openStorageView();
    await (0, helper_js_1.waitForFunction)(async () => {
        await (0, helper_js_1.click)('#storage-view-clear-button');
        return (await (0, application_helpers_js_1.getQuotaUsage)()) === 0;
    });
}
exports.clearSiteData = clearSiteData;
async function waitForStorageUsage(p) {
    await openStorageView();
    await (0, application_helpers_js_1.waitForQuotaUsage)(p);
    await (0, helper_js_1.click)('#tab-lighthouse');
}
exports.waitForStorageUsage = waitForStorageUsage;
async function waitForTimespanStarted() {
    await (0, helper_js_1.waitForElementWithTextContent)('Timespan started, interact with the page');
}
exports.waitForTimespanStarted = waitForTimespanStarted;
async function endTimespan() {
    const endTimespanBtn = await (0, helper_js_1.waitForElementWithTextContent)('End timespan');
    await endTimespanBtn.click();
}
exports.endTimespan = endTimespan;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAuditsBreakdown(lhr, flakyAudits = []) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const auditResults = Object.values(lhr.audits);
    const irrelevantDisplayModes = new Set(['notApplicable', 'manual']);
    const applicableAudits = auditResults.filter(audit => !irrelevantDisplayModes.has(audit.scoreDisplayMode));
    const informativeAudits = applicableAudits.filter(audit => audit.scoreDisplayMode === 'informative');
    const erroredAudits = applicableAudits.filter(audit => audit.score === null && audit && !informativeAudits.includes(audit));
    // 0.5 is the minimum score before we consider an audit "failed"
    // https://github.com/GoogleChrome/lighthouse/blob/d956ec929d2b67028279f5e40d7e9a515a0b7404/report/renderer/util.js#L27
    const failedAudits = applicableAudits.filter(audit => audit.score !== null && audit.score < 0.5 && !flakyAudits.includes(audit.id));
    return { auditResults, erroredAudits, failedAudits };
}
exports.getAuditsBreakdown = getAuditsBreakdown;
async function getTargetViewport() {
    const { target } = await (0, helper_js_1.getBrowserAndPages)();
    return target.evaluate(() => ({
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
        outerWidth: window.outerWidth,
        outerHeight: window.outerHeight,
        devicePixelRatio: window.devicePixelRatio,
    }));
}
exports.getTargetViewport = getTargetViewport;
async function getServiceWorkerCount() {
    const { target } = await (0, helper_js_1.getBrowserAndPages)();
    return target.evaluate(async () => {
        return (await navigator.serviceWorker.getRegistrations()).length;
    });
}
exports.getServiceWorkerCount = getServiceWorkerCount;
async function registerServiceWorker() {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    await target.evaluate(async () => {
        // @ts-expect-error Custom function added to global scope.
        await window.registerServiceWorker();
    });
    chai_1.assert.strictEqual(await getServiceWorkerCount(), 1);
}
exports.registerServiceWorker = registerServiceWorker;
async function interceptNextFileSave() {
    const { frontend } = await (0, helper_js_1.getBrowserAndPages)();
    await frontend.evaluate(() => {
        // @ts-expect-error
        const original = InspectorFrontendHost.save;
        const nextFilePromise = new Promise(resolve => {
            // @ts-expect-error
            InspectorFrontendHost.save = (_, content) => {
                resolve(content);
            };
        });
        nextFilePromise.finally(() => {
            // @ts-expect-error
            InspectorFrontendHost.save = original;
        });
        // @ts-expect-error
        window.__nextFile = nextFilePromise;
    });
    // @ts-expect-error
    return () => frontend.evaluate(() => window.__nextFile);
}
exports.interceptNextFileSave = interceptNextFileSave;
async function renderHtmlInIframe(html) {
    const { target } = (0, helper_js_1.getBrowserAndPages)();
    return (await target.evaluateHandle(async (html) => {
        const iframe = document.createElement('iframe');
        iframe.srcdoc = html;
        document.documentElement.append(iframe);
        await new Promise(resolve => iframe.addEventListener('load', resolve));
        return iframe.contentDocument;
    }, html)).asElement();
}
exports.renderHtmlInIframe = renderHtmlInIframe;
//# sourceMappingURL=lighthouse-helpers.js.map