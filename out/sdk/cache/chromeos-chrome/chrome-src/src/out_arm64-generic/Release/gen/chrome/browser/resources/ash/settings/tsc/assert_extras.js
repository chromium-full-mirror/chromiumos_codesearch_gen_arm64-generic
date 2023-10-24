// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview TypeScript helper functions that aid in type assertions,
 * type narrowing, etc.
 */
import { assert, assertInstanceof, assertNotReached } from 'chrome://resources/js/assert.js';
/**
 * @param arg An argument to check for existence.
 * @throws If |arg| is undefined or null.
 */
export function assertExists(arg, message = `Expected ${arg} to be defined.`) {
    assert(arg !== undefined && arg !== null, message);
}
/**
 * Ensures that `value` can't exist at both compile time and run time.
 *
 * This is useful for checking that all cases of a type are checked, such as
 * enums in switch statements:
 *
 * ```
 * declare const val: Enum.A|Enum.B;
 * switch (val) {
 *   case Enum.A:
 *   case Enum.B:
 *     break;
 *   default:
 *     assertExhaustive(val);
 * }
 * ```
 *
 * or with manual type checks:
 *
 * ```
 * declare const val: string|number;
 * if (typeof val === 'string') {
 *   // ...
 * } else if (typeof val === 'number') {
 *   // ...
 * } else {
 *   assertExhaustive(val);
 * }
 * ```
 *
 * @param value The value to be checked.
 * @param message An optional message to throw with the error.
 */
export function assertExhaustive(value, message = `Unexpected value ${value}.`) {
    assertNotReached(message);
}
/**
 * @param arg A argument to check the type of.
 * @return |arg| with the type narrowed to |type|
 * @throws If |arg| is not an instance of |type|
 */
export function cast(arg, type, message) {
    assertInstanceof(arg, type, message);
    return arg;
}
/**
 * @param arg A argument to check for existence.
 * @return |arg| with the type narrowed as non-nullable.
 * @throws If |arg| is undefined or null.
 */
export function castExists(arg, message) {
    assertExists(arg, message);
    return arg;
}
