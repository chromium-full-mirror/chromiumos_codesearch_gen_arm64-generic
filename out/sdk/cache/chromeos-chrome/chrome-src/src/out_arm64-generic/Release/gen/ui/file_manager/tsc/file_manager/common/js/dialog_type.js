// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * List of dialog types.
 *
 * Keep this in sync with FileManagerDialog::GetDialogTypeAsString, except
 * FULL_PAGE which is specific to this code.
 */
export var DialogType;
(function (DialogType) {
    DialogType["SELECT_FOLDER"] = "folder";
    DialogType["SELECT_UPLOAD_FOLDER"] = "upload-folder";
    DialogType["SELECT_SAVEAS_FILE"] = "saveas-file";
    DialogType["SELECT_OPEN_FILE"] = "open-file";
    DialogType["SELECT_OPEN_MULTI_FILE"] = "open-multi-file";
    DialogType["FULL_PAGE"] = "full-page";
})(DialogType || (DialogType = {}));
export function isModal(type) {
    return type == DialogType.SELECT_FOLDER ||
        type == DialogType.SELECT_UPLOAD_FOLDER ||
        type == DialogType.SELECT_SAVEAS_FILE ||
        type == DialogType.SELECT_OPEN_FILE ||
        type == DialogType.SELECT_OPEN_MULTI_FILE;
}
export function isFolderDialogType(type) {
    return type == DialogType.SELECT_FOLDER ||
        type == DialogType.SELECT_UPLOAD_FOLDER;
}
