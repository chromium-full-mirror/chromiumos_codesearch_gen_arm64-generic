/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** Dispatches a new show snackbar event with the options. */
export function showSnackbar(options) {
    document.body.dispatchEvent(new CustomEvent('cros-show-snackbar', { detail: { options }, bubbles: true, composed: true }));
}
/** Dispatches a new close snackbar event. */
export function closeSnackbar() {
    document.body.dispatchEvent(new CustomEvent('cros-close-snackbar', { bubbles: true, composed: true }));
}
