// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enum for the state of `scanning-app`.
 */
export var AppState;
(function (AppState) {
    AppState[AppState["GETTING_SCANNERS"] = 0] = "GETTING_SCANNERS";
    AppState[AppState["GOT_SCANNERS"] = 1] = "GOT_SCANNERS";
    AppState[AppState["GETTING_CAPS"] = 2] = "GETTING_CAPS";
    AppState[AppState["SETTING_SAVED_SETTINGS"] = 3] = "SETTING_SAVED_SETTINGS";
    AppState[AppState["READY"] = 4] = "READY";
    AppState[AppState["SCANNING"] = 5] = "SCANNING";
    AppState[AppState["DONE"] = 6] = "DONE";
    AppState[AppState["CANCELING"] = 7] = "CANCELING";
    AppState[AppState["NO_SCANNERS"] = 8] = "NO_SCANNERS";
    AppState[AppState["MULTI_PAGE_NEXT_ACTION"] = 9] = "MULTI_PAGE_NEXT_ACTION";
    AppState[AppState["MULTI_PAGE_SCANNING"] = 10] = "MULTI_PAGE_SCANNING";
    AppState[AppState["MULTI_PAGE_CANCELING"] = 11] = "MULTI_PAGE_CANCELING";
})(AppState || (AppState = {}));
/**
 * Enum for the action taken after a completed scan. These values are persisted
 * to logs. Entries should not be renumbered and numeric values should never be
 * reused. These values must be kept in sync with the ScanCompleteAction enum in
 * /ash/webui/scanning/scanning_uma.h.
 */
export var ScanCompleteAction;
(function (ScanCompleteAction) {
    ScanCompleteAction[ScanCompleteAction["DONE_BUTTON_CLICKED"] = 0] = "DONE_BUTTON_CLICKED";
    ScanCompleteAction[ScanCompleteAction["FILES_APP_OPENED"] = 1] = "FILES_APP_OPENED";
    ScanCompleteAction[ScanCompleteAction["MEDIA_APP_OPENED"] = 2] = "MEDIA_APP_OPENED";
})(ScanCompleteAction || (ScanCompleteAction = {}));
/**
 * Maximum number of scanners allowed in saved scan settings.
 */
export const MAX_NUM_SAVED_SCANNERS = 20;
