// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Message definitions passed over the HelpApp privileged/unprivileged pipe.
 */
/** Enum for message types. */
export var Message;
(function (Message) {
    Message["OPEN_FEEDBACK_DIALOG"] = "open-feedback-dialog";
    Message["SHOW_PARENTAL_CONTROLS"] = "show-parental-controls";
    Message["TRIGGER_WELCOME_TIP_CALL_TO_ACTION"] = "trigger-welcome-tip-call-to-action";
    Message["ADD_OR_UPDATE_SEARCH_INDEX"] = "add-or-update-search-index";
    Message["CLEAR_SEARCH_INDEX"] = "clear-search-index";
    Message["FIND_IN_SEARCH_INDEX"] = "find-in-search-index";
    Message["CLOSE_BACKGROUND_PAGE"] = "close-background-page";
    Message["UPDATE_LAUNCHER_SEARCH_INDEX"] = "update-launcher-search-index";
    Message["LAUNCH_MICROSOFT_365_SETUP"] = "launch-microsoft-365-setup";
    Message["MAYBE_SHOW_DISCOVER_NOTIFICATION"] = "maybe-show-discover-notification";
    Message["MAYBE_SHOW_RELEASE_NOTES_NOTIFICATION"] = "maybe-show-release-notes-notification";
    Message["GET_DEVICE_INFO"] = "get-device-info";
    Message["OPEN_URL_IN_BROWSER_AND_TRIGGER_INSTALL_DIALOG"] = "open-url-in-browser-and-trigger-install-dialog";
})(Message || (Message = {}));
