// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility functions and enums for password sharing metrics.
 */
/**
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export var PasswordSharingActions;
(function (PasswordSharingActions) {
    // LINT.IfChange
    PasswordSharingActions[PasswordSharingActions["PASSWORD_DETAILS_SHARE_BUTTON_CLICKED"] = 0] = "PASSWORD_DETAILS_SHARE_BUTTON_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_GOT_IT_CLICKED"] = 1] = "NOT_FAMILY_MEMBER_GOT_IT_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED"] = 2] = "NOT_FAMILY_MEMBER_CREATE_FAMILY_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED"] = 3] = "NO_OTHER_FAMILY_MEMBERS_GOT_IT_CLICKED";
    PasswordSharingActions[PasswordSharingActions["NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED"] = 4] = "NO_OTHER_FAMILY_MEMBERS_INVITE_LINK_CLICKED";
    PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_TRY_AGAIN_CLICKED"] = 5] = "ERROR_DIALOG_TRY_AGAIN_CLICKED";
    PasswordSharingActions[PasswordSharingActions["ERROR_DIALOG_CANCELED"] = 6] = "ERROR_DIALOG_CANCELED";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_ONE_MEMBER"] = 7] = "FAMILY_PICKER_SHARE_WITH_ONE_MEMBER";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS"] = 8] = "FAMILY_PICKER_SHARE_WITH_MULTIPLE_MEMBERS";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_CANCELED"] = 9] = "FAMILY_PICKER_CANCELED";
    PasswordSharingActions[PasswordSharingActions["FAMILY_PICKER_VIEW_FAMILY_CLICKED"] = 10] = "FAMILY_PICKER_VIEW_FAMILY_CLICKED";
    PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_SHARING_CANCELED"] = 11] = "CONFIRMATION_DIALOG_SHARING_CANCELED";
    /*  Deprecated in M122 (b/317798360).
    CONFIRMATION_DIALOG_LEARN_MORE_CLICKED = 12,
    */
    PasswordSharingActions[PasswordSharingActions["CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED"] = 13] = "CONFIRMATION_DIALOG_CHANGE_PASSWORD_CLICKED";
    PasswordSharingActions[PasswordSharingActions["DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED"] = 14] = "DIALOG_HEADER_HELP_ICON_BUTTON_CLICKED";
    // Must be last.
    PasswordSharingActions[PasswordSharingActions["COUNT"] = 15] = "COUNT";
    // LINT.ThenChange(//tools/metrics/histograms/metadata/password/enums.xml)
})(PasswordSharingActions || (PasswordSharingActions = {}));
export function recordPasswordSharingInteraction(interaction) {
    chrome.metricsPrivate.recordEnumerationValue('PasswordManager.PasswordSharingDesktop.UserAction', interaction, PasswordSharingActions.COUNT);
}
