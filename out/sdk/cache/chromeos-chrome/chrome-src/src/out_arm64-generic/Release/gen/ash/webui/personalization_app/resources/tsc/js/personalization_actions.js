// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines the actions to change state.
 */
export var PersonalizationActionName;
(function (PersonalizationActionName) {
    PersonalizationActionName["DISMISS_ERROR"] = "dismiss_error";
    PersonalizationActionName["SET_ERROR"] = "set_error";
})(PersonalizationActionName || (PersonalizationActionName = {}));
/**
 * Dismiss the current error if there is any.
 * @param id if non-null, the current error is only dismissed if it matches.
 * @param fromUser whether the dismiss action originated from the user.
 */
export function dismissErrorAction(id, fromUser) {
    return { id, fromUser, name: PersonalizationActionName.DISMISS_ERROR };
}
/** Sets the current error. */
export function setErrorAction(error) {
    return { error, name: PersonalizationActionName.SET_ERROR };
}
