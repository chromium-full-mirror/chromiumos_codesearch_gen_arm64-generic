// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { UserActionRecorder } from './mojom-webui/user_action_recorder.mojom-webui.js';
let userActionRecorder = null;
export function setUserActionRecorderForTesting(testRecorder) {
    userActionRecorder = testRecorder;
}
function getRecorder() {
    if (userActionRecorder) {
        return userActionRecorder;
    }
    userActionRecorder = UserActionRecorder.getRemote();
    return userActionRecorder;
}
export function recordPageFocus() {
    getRecorder().recordPageFocus();
}
export function recordPageBlur() {
    getRecorder().recordPageBlur();
}
export function recordClick() {
    getRecorder().recordClick();
}
export function recordNavigation() {
    getRecorder().recordNavigation();
}
export function recordSearch() {
    getRecorder().recordSearch();
}
/**
 * All new code should pass a value for |setting| and, if applicable, |value|.
 * The zero-parameter version of this function is reserved for
 * legacy code which has not yet been converted.
 * TODO(b/263414450): make |setting| non-optional when migration is complete.
 */
export function recordSettingChange(setting, value) {
    if (setting === undefined) {
        getRecorder().recordSettingChange();
    }
    else {
        getRecorder().recordSettingChangeWithDetails(setting, value || null);
    }
}
