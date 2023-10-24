// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * Given a |container| that has scrollable content, <div>'s before and after the
 * |container| are created with an attribute "scroll-border". These <div>'s are
 * updated to have an attribute "show" when there is more content in the
 * direction of the "scroll-border". Styling is left to the caller.
 *
 * Returns an |IntersectionObserver| so the caller can disconnect the observer
 * when needed.
 */
export function createScrollBorders(container, topBorder, bottomBorder, showAttribute) {
    const topProbe = document.createElement('div');
    container.prepend(topProbe);
    const bottomProbe = document.createElement('div');
    container.append(bottomProbe);
    const observer = new IntersectionObserver(entries => {
        entries.forEach(({ target, intersectionRatio }) => {
            const show = intersectionRatio === 0;
            if (target === topProbe) {
                topBorder.toggleAttribute(showAttribute, show);
            }
            else if (target === bottomProbe) {
                bottomBorder.toggleAttribute(showAttribute, show);
            }
        });
    }, { root: container });
    observer.observe(topProbe);
    observer.observe(bottomProbe);
    return observer;
}
/** Converts a String16 to a JavaScript String. */
export function decodeString16(str) {
    return str ? str.data.map(ch => String.fromCodePoint(ch)).join('') : '';
}
/** Converts a JavaScript String to a String16. */
export function mojoString16(str) {
    const array = new Array(str.length);
    for (let i = 0; i < str.length; ++i) {
        array[i] = str.charCodeAt(i);
    }
    return { data: array };
}
/**
 * Converts a time delta in milliseconds to TimeDelta.
 * @param timeDelta time delta in milliseconds
 */
export function mojoTimeDelta(timeDelta) {
    return { microseconds: BigInt(Math.floor(timeDelta * 1000)) };
}
/**
 * Converts a time ticks in milliseconds to TimeTicks.
 * @param timeTicks time ticks in milliseconds
 */
export function mojoTimeTicks(timeTicks) {
    return { internalValue: BigInt(Math.floor(timeTicks * 1000)) };
}
export function $$(element, selector) {
    return element.shadowRoot.querySelector(selector);
}
/**
 * Queries |selector| on |root| and returns the resulting element. Throws
 * exception if there is no resulting element or if element is not of type
 * |type|.
 */
export function strictQuery(root, selector, type) {
    const element = root.querySelector(selector);
    assert(element && element instanceof type);
    return element;
}
