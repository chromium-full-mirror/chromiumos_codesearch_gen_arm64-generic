// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
const RETRY_INTERVAL_MILLISECONDS = 0.2 * 1000;
const RETRY_TIMEOUT_MILLISECONDS = 10 * 1000;
const SATISFACTION_MILLISECONDS = 1 * 1000;
export function hasProperty(obj, prop) {
    return prop in obj;
}
export function hasBooleanProperty(obj, prop) {
    return hasProperty(obj, prop) && typeof obj[prop] === 'boolean';
}
export function hasStringProperty(obj, prop) {
    return hasProperty(obj, prop) && typeof obj[prop] === 'string';
}
export function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
// Repeatedly evaluates a lazy |value| until it evaluates without throwing an
// exception, or if a timeout is exceeded.
export async function retry(value, timeoutMilliseconds = RETRY_TIMEOUT_MILLISECONDS) {
    while (true) {
        try {
            const val = value();
            return val;
        }
        catch (err) {
            if (timeoutMilliseconds <= 0) {
                throw err;
            }
        }
        const sleepMilliseconds = Math.min(RETRY_INTERVAL_MILLISECONDS, timeoutMilliseconds);
        await sleep(sleepMilliseconds);
        timeoutMilliseconds -= sleepMilliseconds;
    }
}
// Repeatedly evaluates a lazy |value| until it evaluates without throwing an
// exception to something !== null, or if a timeout is exceeded.
export async function retryUntilSome(value, timeoutMilliseconds = RETRY_TIMEOUT_MILLISECONDS) {
    return await retry(() => {
        const val = value();
        assertTrue(val !== null);
        return val;
    }, timeoutMilliseconds);
}
// Repeatedly evaluates a lazy |property| until it holds or a timeout is
// exceeded.
export async function assertAsync(property, timeoutMilliseconds = RETRY_TIMEOUT_MILLISECONDS) {
    return await retry(() => assertTrue(property()), timeoutMilliseconds);
}
// Repeatedly asserts that a |property| holds for a (short) duration.
export async function assertForDuration(property, satisfactionMilliseconds = SATISFACTION_MILLISECONDS) {
    while (true) {
        assertTrue(property());
        if (satisfactionMilliseconds <= 0) {
            return;
        }
        const sleepMilliseconds = Math.min(RETRY_INTERVAL_MILLISECONDS, satisfactionMilliseconds);
        await sleep(sleepMilliseconds);
        satisfactionMilliseconds -= sleepMilliseconds;
    }
}
// Finds an element that is nested inside shadow roots using a sequence of
// query selectors. The first query is run from |root|. Subsequent queries are
// run within the |shadowRoot| of the previous result. Returns |null| if any of
// the queries did not yield a result.
export function querySelectorShadow(root, selectors) {
    assertTrue(selectors.length > 0);
    const initSelectors = selectors.slice(0, selectors.length - 1);
    const lastSelector = selectors[selectors.length - 1];
    assertTrue(lastSelector !== undefined);
    for (const selector of initSelectors) {
        const el = root.querySelector(selector);
        if (el === null || el.shadowRoot === null) {
            return null;
        }
        root = el.shadowRoot;
    }
    return root.querySelector(lastSelector);
}
/**
 * Clears the document body HTML.
 */
export function clearBody() {
    document.body.innerHTML = window.trustedTypes.emptyHTML;
}
