/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * Returns a Promise that resolves after the given `event` has been triggered
 * on the `target`.
 */
export async function waitForEvent(target, event) {
    return new Promise(resolve => void target.addEventListener(event, resolve, { once: true, passive: true }));
}
