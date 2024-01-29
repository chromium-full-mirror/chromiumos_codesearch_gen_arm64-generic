// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Message definitions passed over the MediaApp privileged/unprivileged pipe.
 */
/** Enum for message types. */
export var Message;
(function (Message) {
    Message["DELETE_FILE"] = "delete-file";
    Message["EDIT_IN_PHOTOS"] = "edit-in-photos";
    Message["IFRAME_READY"] = "iframe-ready";
    Message["IS_FILE_ARC_WRITABLE"] = "is-file-arc-writable";
    Message["IS_FILE_BROWSER_WRITABLE"] = "is-file-browser-writable";
    Message["LOAD_EXTRA_FILES"] = "load-extra-files";
    Message["LOAD_FILES"] = "load-files";
    Message["MAYBE_TRIGGER_PDF_HATS"] = "maybe-trigger-pdf-hats";
    Message["NAVIGATE"] = "navigate";
    Message["NOTIFY_CURRENT_FILE"] = "notify-current-file";
    Message["OPEN_ALLOWED_FILE"] = "open-allowed-file";
    Message["OPEN_FEEDBACK_DIALOG"] = "open-feedback-dialog";
    Message["OPEN_FILES_WITH_PICKER"] = "open-files-with-picker";
    Message["OPEN_IN_SANDBOXED_VIEWER"] = "open-in-sandboxed-viewer";
    Message["OVERWRITE_FILE"] = "overwrite-file";
    Message["RELOAD_MAIN_FRAME"] = "reload-main-frame";
    Message["RENAME_FILE"] = "rename-file";
    Message["REQUEST_SAVE_FILE"] = "request-save-file";
    Message["SAVE_AS"] = "save-as";
    Message["TOGGLE_BROWSER_FULLSCREEN_MODE"] = "toggle-browser-fullscreen-mode";
})(Message || (Message = {}));
/** Enum for results of renaming a file. */
export var RenameResult;
(function (RenameResult) {
    RenameResult[RenameResult["FILE_NO_LONGER_IN_LAST_OPENED_DIRECTORY"] = -1] = "FILE_NO_LONGER_IN_LAST_OPENED_DIRECTORY";
    RenameResult[RenameResult["SUCCESS"] = 0] = "SUCCESS";
    RenameResult[RenameResult["FILE_EXISTS"] = 1] = "FILE_EXISTS";
})(RenameResult || (RenameResult = {}));
