// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AppWindowWrapper } from './app_window_wrapper.js';
/**
 * @fileoverview
 * This file is checked via TS, so we suppress Closure checks.
 * @suppress {checkTypes}
*/
/**
 * Prefix for the file manager window ID.
 */
const FILES_ID_PREFIX = 'files#';
/**
 * Regexp matching a file manager window ID.
 */
export const FILES_ID_PATTERN = new RegExp('^' + FILES_ID_PREFIX + '(\\d*)$');
/**
 * Promise to serialize asynchronous calls.
 */
let initializationPromise = null;
export function setInitializationPromise(promise) {
    initializationPromise = promise;
}
/**
 * The returned promise will be resolved when the window is launched.
 */
export async function launchFileManager(appState) {
    // Serialize concurrent calls to launchFileManager.
    if (!initializationPromise) {
        throw new Error('Missing initializationPromise');
    }
    await initializationPromise;
    const appWindow = new AppWindowWrapper();
    // TODO: Remove `as FileAppsState` this type is an TS interface.
    await appWindow.launch(appState || {});
}
