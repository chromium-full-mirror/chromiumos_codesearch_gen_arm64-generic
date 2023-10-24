// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertInstanceof } from './assert.js';
/**
 * Gets an element matching CSS selector under the target element and checks its
 * type.
 *
 * @param target The target root element to execute the CSS selector from.
 * @param selector The CSS selector.
 * @param ctor The expected element type.
 */
export function getFrom(target, selector, ctor) {
    return assertInstanceof(target.querySelector(selector), ctor);
}
/**
 * Gets all elements matching CSS selector under the target element and asserts
 * their type to be specific type.
 *
 * @param target The target root element to execute the CSS selector from.
 * @param selector The CSS selector.
 * @param ctor The expected element type.
 */
export function getAllFrom(target, selector, ctor) {
    const elements = target.querySelectorAll(selector);
    for (const el of elements) {
        assertInstanceof(el, ctor);
    }
    // TypeScript can't deduce that if all elements pass the assertInstanceof
    // check, then the `NodeListOf<Element>` (which is the original type of
    // `elements`) is actually a `NodeListOf<T>`, so we need to manually cast it
    // here.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return elements;
}
/**
 * If an element matching CSS selector exists under the target, check its type
 * and return, otherwise return null.
 *
 * @param target The target root element to execute the CSS selector from.
 * @param selector The CSS selector.
 * @param ctor The expected element type.
 */
export function getFromIfExists(target, selector, ctor) {
    const element = target.querySelector(selector);
    return element instanceof Element ? assertInstanceof(element, ctor) : null;
}
/**
 * Gets an element in document matching CSS selector and checks its type.
 *
 * @param selector The CSS selector.
 * @param ctor The expected element type.
 */
export function get(selector, ctor) {
    return getFrom(document, selector, ctor);
}
/**
 * Gets all elements in document matching CSS selector and asserts their type to
 * be specific type.
 *
 * @param selector The CSS selector.
 * @param ctor The expected element type.
 */
export function getAll(selector, ctor) {
    return getAllFrom(document, selector, ctor);
}
