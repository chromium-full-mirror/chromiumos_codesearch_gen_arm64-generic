// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from '//resources/js/assert.js';
/**
 * Queries |selector| on |root| and returns the first matching element. Throws
 * exception if there is no resulting element or if element is not of type
 * |type|.
 */
export function strictQuery(selector, root, type) {
    const element = root.querySelector(selector);
    assert(element, 'Queried element is not defined.');
    assert(element instanceof type, 'Queried element is not an instance of type T.');
    return element;
}
