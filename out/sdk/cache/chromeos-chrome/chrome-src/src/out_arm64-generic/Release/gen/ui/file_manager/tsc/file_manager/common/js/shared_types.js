// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview The types and enums in this file are used in integration tests.
 * For this reason we don't want additional imports in here to avoid cascading
 * importing files.
 */
/** Paths that can be handled by the dialog opener in native code. */
export var AllowedPaths;
(function (AllowedPaths) {
    AllowedPaths["NATIVE_PATH"] = "nativePath";
    AllowedPaths["ANY_PATH"] = "anyPath";
    AllowedPaths["ANY_PATH_OR_URL"] = "anyPathOrUrl";
})(AllowedPaths || (AllowedPaths = {}));
/** The type of each volume. */
export var VolumeType;
(function (VolumeType) {
    VolumeType["TESTING"] = "testing";
    VolumeType["DRIVE"] = "drive";
    VolumeType["DOWNLOADS"] = "downloads";
    VolumeType["REMOVABLE"] = "removable";
    VolumeType["ARCHIVE"] = "archive";
    VolumeType["MTP"] = "mtp";
    VolumeType["PROVIDED"] = "provided";
    VolumeType["MEDIA_VIEW"] = "media_view";
    VolumeType["DOCUMENTS_PROVIDER"] = "documents_provider";
    VolumeType["CROSTINI"] = "crostini";
    VolumeType["GUEST_OS"] = "guest_os";
    VolumeType["ANDROID_FILES"] = "android_files";
    VolumeType["MY_FILES"] = "my_files";
    VolumeType["SMB"] = "smb";
    VolumeType["SYSTEM_INTERNAL"] = "system_internal";
    VolumeType["TRASH"] = "trash";
})(VolumeType || (VolumeType = {}));
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
/**
 * FilesAppState is used in 2 ways:
 *
 * 1. Persist in the localStorage the some state, like current directory,
 * sorting column options, etc.
 *
 * 2. To open a new window:
 * 2.1, Requests to open a new window set part of these options to configure the
 * how the new window should behave.
 * 2.2  When the Files app extension is restarted, the background page retrieves
 * the last state from localStorage for each opened window and re-spawn the
 * windows with their state.
 */
export class FilesAppState {
}
/**
 * Stats collected about Metadata handling for tests.
 */
export class MetadataStats {
    constructor() {
        /** Total of entries fulfilled from cache. */
        this.fromCache = 0;
        /** Total of entries that requested to backends. */
        this.fullFetch = 0;
        /** Total of entries that called to invalidate. */
        this.invalidateCount = 0;
        /** Total of entries that called to clear. */
        this.clearCacheCount = 0;
        /** Total of calls to function clearAllCache. */
        this.clearAllCount = 0;
    }
}
