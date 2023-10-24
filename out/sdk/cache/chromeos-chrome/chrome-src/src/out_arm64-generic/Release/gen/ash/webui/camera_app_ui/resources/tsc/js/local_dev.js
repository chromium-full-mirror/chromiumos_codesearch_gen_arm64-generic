// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const overridableKey = Symbol();
const overrideMap = new Map();
/**
 * Marks a function as overridable by local dev with `setOverride`.
 */
export function overridableFunction(func) {
    return Object.assign(function wrapper(...args) {
        if (overrideMap.has(wrapper)) {
            // We guarantee that the overrideMap stores the same type as the original
            // function by the setOverride.
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            return overrideMap.get(wrapper)(...args);
        }
        return func(...args);
    }, { [overridableKey]: true });
}
/**
 * Override a function previously marked as `overridableFunction`.
 */
export function setOverride(original, target) {
    overrideMap.set(original, target);
}
