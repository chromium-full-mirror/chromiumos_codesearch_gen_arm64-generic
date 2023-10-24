"use strict";
// Copyright 2020 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
Object.defineProperty(exports, "__esModule", { value: true });
exports.elementContainsTextWithSelector = exports.getTextFromHeadersRow = exports.clearTimeWindow = exports.setTimeWindow = exports.setCacheDisabled = exports.setPersistLog = exports.waitForSelectedRequestChange = exports.selectRequestByName = exports.getSelectedRequestName = exports.getNumberOfRequests = exports.getAllRequestNames = exports.waitForSomeRequestsToAppear = exports.navigateToNetworkTab = exports.openNetworkTab = exports.waitForNetworkTab = void 0;
const helper_js_1 = require("../../shared/helper.js");
const REQUEST_LIST_SELECTOR = '.network-log-grid tbody';
async function waitForNetworkTab() {
    // Make sure the network tab is shown on the screen
    await (0, helper_js_1.waitFor)('.network-log-grid');
}
exports.waitForNetworkTab = waitForNetworkTab;
async function openNetworkTab() {
    await (0, helper_js_1.click)('#tab-network');
    await waitForNetworkTab();
}
exports.openNetworkTab = openNetworkTab;
/**
 * Select the Network tab in DevTools
 */
async function navigateToNetworkTab(testName) {
    await (0, helper_js_1.goToResource)(`network/${testName}`);
    await openNetworkTab();
}
exports.navigateToNetworkTab = navigateToNetworkTab;
/**
 * Wait until a certain number of requests are shown in the request list.
 * @param numberOfRequests The expected number of requests to wait for.
 * @param selector Optional. The selector to use to get the list of requests.
 */
async function waitForSomeRequestsToAppear(numberOfRequests) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const requests = await getAllRequestNames();
        return requests.length >= numberOfRequests && Boolean(requests.map(name => name ? name.trim() : '').join(''));
    });
}
exports.waitForSomeRequestsToAppear = waitForSomeRequestsToAppear;
async function getAllRequestNames() {
    const requests = await (0, helper_js_1.$$)(REQUEST_LIST_SELECTOR + ' .name-column');
    return await Promise.all(requests.map(request => request.evaluate(r => r.childNodes[1].textContent)));
}
exports.getAllRequestNames = getAllRequestNames;
async function getNumberOfRequests() {
    return (await getAllRequestNames()).length;
}
exports.getNumberOfRequests = getNumberOfRequests;
async function getSelectedRequestName() {
    const request = await (0, helper_js_1.$)(REQUEST_LIST_SELECTOR + ' tr.selected .name-column');
    if (!request) {
        return null;
    }
    return await request.evaluate(node => {
        return node && node.childNodes[1].textContent;
    });
}
exports.getSelectedRequestName = getSelectedRequestName;
async function selectRequestByName(name, clickOptions) {
    const selector = REQUEST_LIST_SELECTOR + ' .name-column';
    const { frontend } = (0, helper_js_1.getBrowserAndPages)();
    // Finding he click position is done in a single frontend.evaluate call
    // to make sure the element still exists after finding the element.
    // If this were done outside of evaluate code, it would be possible for an
    // element to be removed from the dom between the $$(.selector) call and the
    // click(element) call.
    const rect = await frontend.evaluate((name, selector) => {
        const elements = document.querySelectorAll(selector);
        for (const element of elements) {
            if (element.childNodes[1].textContent === name) {
                const { left, top, width, height } = element.getBoundingClientRect();
                return { left, top, width, height };
            }
        }
        return null;
    }, name, selector);
    if (rect) {
        const x = rect.left + rect.width * 0.5;
        const y = rect.top + rect.height * 0.5;
        await frontend.mouse.click(x, y, clickOptions);
    }
}
exports.selectRequestByName = selectRequestByName;
async function waitForSelectedRequestChange(initialRequestName) {
    await (0, helper_js_1.waitForFunction)(async () => {
        const name = await getSelectedRequestName();
        return name !== initialRequestName;
    });
}
exports.waitForSelectedRequestChange = waitForSelectedRequestChange;
async function setPersistLog(persist) {
    await (0, helper_js_1.setCheckBox)('[title="Do not clear log on page reload / navigation"]', persist);
}
exports.setPersistLog = setPersistLog;
async function setCacheDisabled(disabled) {
    await (0, helper_js_1.setCheckBox)('[title^="Disable cache"]', disabled);
}
exports.setCacheDisabled = setCacheDisabled;
async function setTimeWindow() {
    const overviewGridCursorArea = await (0, helper_js_1.waitFor)('.overview-grid-cursor-area');
    await overviewGridCursorArea.click({ offset: { x: 0, y: 10 } });
}
exports.setTimeWindow = setTimeWindow;
async function clearTimeWindow() {
    const overviewGridCursorArea = await (0, helper_js_1.waitFor)('.overview-grid-cursor-area');
    await overviewGridCursorArea.click({ count: 2 });
}
exports.clearTimeWindow = clearTimeWindow;
async function getTextFromHeadersRow(row) {
    const headerNameElement = await (0, helper_js_1.waitFor)('.header-name', row);
    const headerNameText = await headerNameElement.evaluate(el => el.textContent || '');
    const headerValueElement = await (0, helper_js_1.waitFor)('.header-value', row);
    let headerValueText = (await headerValueElement.evaluate(el => el.textContent || '')).trim();
    if (headerValueText === '') {
        const headerValueEditableSpanComponent = await (0, helper_js_1.waitFor)('.header-value devtools-editable-span', row);
        const editableSpan = await (0, helper_js_1.waitFor)('.editable', headerValueEditableSpanComponent);
        headerValueText = (await editableSpan.evaluate(el => el.textContent || '')).trim();
    }
    return [headerNameText.trim(), headerValueText];
}
exports.getTextFromHeadersRow = getTextFromHeadersRow;
async function elementContainsTextWithSelector(element, textContent, selector) {
    const selectedElements = await element.evaluate((node, selector) => {
        return [...node.querySelectorAll(selector)].map(node => node.textContent || '') || [];
    }, selector);
    return selectedElements.includes(textContent);
}
exports.elementContainsTextWithSelector = elementContainsTextWithSelector;
//# sourceMappingURL=network-helpers.js.map