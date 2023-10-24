// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Constants used for logging the pin unlock setup uma.
 */
/**
 * Name of the pin unlock setup uma histogram.
 */
const PIN_UNLOCK_UMA_HISTOGRAM_NAME = 'Settings.PinUnlockSetup';
/**
 * Stages the user can enter while setting up pin unlock.
 */
export var LockScreenProgress;
(function (LockScreenProgress) {
    LockScreenProgress[LockScreenProgress["START_SCREEN_LOCK"] = 0] = "START_SCREEN_LOCK";
    LockScreenProgress[LockScreenProgress["ENTER_PASSWORD_CORRECTLY"] = 1] = "ENTER_PASSWORD_CORRECTLY";
    LockScreenProgress[LockScreenProgress["CHOOSE_PIN_OR_PASSWORD"] = 2] = "CHOOSE_PIN_OR_PASSWORD";
    LockScreenProgress[LockScreenProgress["ENTER_PIN"] = 3] = "ENTER_PIN";
    LockScreenProgress[LockScreenProgress["CONFIRM_PIN"] = 4] = "CONFIRM_PIN";
})(LockScreenProgress || (LockScreenProgress = {}));
const LOCK_SCREEN_PROGRESS_BUCKET_NUMBER = LockScreenProgress.CONFIRM_PIN + 1;
/**
 * Helper function to send the progress of the pin setup to be recorded in the
 * histogram.
 */
export function recordLockScreenProgress(currentProgress) {
    if (currentProgress >= LOCK_SCREEN_PROGRESS_BUCKET_NUMBER) {
        console.error(`Expected an enumeration value lower than ${LOCK_SCREEN_PROGRESS_BUCKET_NUMBER}, got ${currentProgress}.`);
        return;
    }
    chrome.send('metricsHandler:recordInHistogram', [
        PIN_UNLOCK_UMA_HISTOGRAM_NAME,
        currentProgress,
        LOCK_SCREEN_PROGRESS_BUCKET_NUMBER,
    ]);
}
