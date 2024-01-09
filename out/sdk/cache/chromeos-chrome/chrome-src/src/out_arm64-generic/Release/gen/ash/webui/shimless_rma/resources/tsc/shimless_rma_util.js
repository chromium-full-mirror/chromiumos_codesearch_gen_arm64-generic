// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { CLICK_NEXT_BUTTON, createCustomEvent, DISABLE_ALL_BUTTONS, DISABLE_NEXT_BUTTON, ENABLE_ALL_BUTTONS, TRANSITION_STATE } from './events.js';
function makeElementTabbable(element) {
    element.setAttribute('tabindex', '0');
}
function removeElementFromKeyboardNavigation(element) {
    element.setAttribute('tabindex', '-1');
}
/**
 * Disables the next button from being clicked.
 */
export function disableNextButton(element) {
    element.dispatchEvent(createCustomEvent(DISABLE_NEXT_BUTTON, true));
}
/**
 * Enables the next button to be clicked.
 */
export function enableNextButton(element) {
    element.dispatchEvent(createCustomEvent(DISABLE_NEXT_BUTTON, false));
}
/**
 * Disables all inputs on the page.
 */
export function disableAllButtons(element, showBusyStateOverlay) {
    element.dispatchEvent(createCustomEvent(DISABLE_ALL_BUTTONS, { showBusyStateOverlay }));
}
/**
 * Enables all inputs on the page.
 */
export function enableAllButtons(element) {
    element.dispatchEvent(createCustomEvent(ENABLE_ALL_BUTTONS, {}));
}
/**
 * Dispatches an event captured by shimless_rma.js that will execute `fn`,
 * process the result, then transition to the next state.
 */
export function executeThenTransitionState(element, fn) {
    element.dispatchEvent(createCustomEvent(TRANSITION_STATE, fn));
}
/**
 * Dispatches an event to click the next button.
 */
export function dispatchNextButtonClick(element) {
    element.dispatchEvent(createCustomEvent(CLICK_NEXT_BUTTON, {}));
}
/**
 * Make the first non-disabled component in the list tabbable
 * and remove the remaining components from keyboard navigation.
 */
export function modifyTabbableElement(element, isFirstClickableComponent) {
    isFirstClickableComponent ? makeElementTabbable(element) :
        removeElementFromKeyboardNavigation(element);
}
/**
 * Sets the focus on the page title.
 */
export function focusPageTitle(element) {
    const pageTitle = element.shadowRoot.querySelector('h1');
    assert(pageTitle);
    afterNextRender(element, () => {
        pageTitle.focus();
    });
}
/**
 * @returns whether the "Compliance Check" flag is enabled.
 */
export function isComplianceCheckEnabled() {
    return loadTimeData.getBoolean('complianceCheckEnabled');
}
/**
 * @returns whether the "SKU description" flag is enabled.
 */
export function isSkuDescriptionEnabled() {
    return loadTimeData.getBoolean('skuDescriptionEnabled');
}
