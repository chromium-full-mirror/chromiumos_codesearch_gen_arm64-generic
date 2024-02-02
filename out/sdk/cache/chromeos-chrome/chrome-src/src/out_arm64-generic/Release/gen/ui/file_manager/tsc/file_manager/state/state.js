// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { DialogType } from '../common/js/shared_types.js';
import { RootType, VolumeType } from '../common/js/volume_manager_types.js';
export { DialogType } from '../common/js/shared_types.js';
export var EntryType;
(function (EntryType) {
    // Entries from the FileSystem API.
    EntryType["FS_API"] = "FS_API";
    // The root of a volume is an Entry from the FileSystem API, but it aggregates
    // more data from the volume.
    EntryType["VOLUME_ROOT"] = "VOLUME_ROOT";
    // A directory-like entry to aggregate other entries.
    EntryType["ENTRY_LIST"] = "ENTRY_LIST";
    // Placeholder that is replaced for another entry, for Crostini/GuestOS.
    EntryType["PLACEHOLDER"] = "PLACEHOLDER";
    // Root for the Trash.
    EntryType["TRASH"] = "TRASH";
    // Root for the Recent.
    EntryType["RECENT"] = "RECENT";
})(EntryType || (EntryType = {}));
/**
 * The status of a property, for properties that have their state updated via
 * asynchronous steps.
 */
export var PropStatus;
(function (PropStatus) {
    PropStatus["STARTED"] = "STARTED";
    // Finished:
    PropStatus["SUCCESS"] = "SUCCESS";
    PropStatus["ERROR"] = "ERROR";
})(PropStatus || (PropStatus = {}));
/**
 * Task type is the source of the task, or what type of the app is this type
 * from. It has to match the `taskType` returned in the FileManagerPrivate.
 *
 * For more details see //chrome/browser/ash/file_manager/file_tasks.h
 */
export var FileTaskType;
(function (FileTaskType) {
    FileTaskType["UNKNOWN"] = "";
    // The task is from a chrome app/extension that has File Browser Handler in
    // its manifest.
    FileTaskType["FILE"] = "file";
    // The task is from a chrome app/extension that has File Handler in its
    // manifest.
    FileTaskType["APP"] = "app";
    // The task is from an Android app.
    FileTaskType["ARC"] = "arc";
    // The task is from a Crostini app.
    FileTaskType["CROSTINI"] = "crostini";
    // The task is from a Parallels app.
    FileTaskType["PLUGIN_VM"] = "pluginvm";
    // The task is from a Web app/PWA/SWA.
    FileTaskType["WEB"] = "web";
})(FileTaskType || (FileTaskType = {}));
/**
 * Enumeration of all supported search locations. If new location is added,
 * please update this enum.
 */
export var SearchLocation;
(function (SearchLocation) {
    SearchLocation["EVERYWHERE"] = "everywhere";
    SearchLocation["ROOT_FOLDER"] = "root_folder";
    SearchLocation["THIS_FOLDER"] = "this_folder";
})(SearchLocation || (SearchLocation = {}));
/**
 * Enumeration of all supported how-recent time spans.
 */
export var SearchRecency;
(function (SearchRecency) {
    SearchRecency["ANYTIME"] = "anytime";
    SearchRecency["TODAY"] = "today";
    SearchRecency["YESTERDAY"] = "yesterday";
    SearchRecency["LAST_WEEK"] = "last_week";
    SearchRecency["LAST_MONTH"] = "last_month";
    SearchRecency["LAST_YEAR"] = "last_year";
})(SearchRecency || (SearchRecency = {}));
/**
 * Used to group volumes in the navigation tree.
 * Sections:
 *      - TOP: Recents, Shortcuts.
 *      - MY_FILES: My Files (which includes Downloads, Crostini and Arc++ as
 *                  its children).
 *      - TRASH: trash.
 *      - GOOGLE_DRIVE: Just Google Drive.
 *      - ODFS: Just ODFS.
 *      - CLOUD: All other cloud: SMBs, FSPs and Documents Providers.
 *      - ANDROID_APPS: ANDROID picker apps.
 *      - REMOVABLE: Archives, MTPs, Media Views and Removables.
 */
export var NavigationSection;
(function (NavigationSection) {
    NavigationSection["TOP"] = "top";
    NavigationSection["MY_FILES"] = "my_files";
    NavigationSection["GOOGLE_DRIVE"] = "google_drive";
    NavigationSection["ODFS"] = "odfs";
    NavigationSection["CLOUD"] = "cloud";
    NavigationSection["TRASH"] = "trash";
    NavigationSection["ANDROID_APPS"] = "android_apps";
    NavigationSection["REMOVABLE"] = "removable";
})(NavigationSection || (NavigationSection = {}));
export var NavigationType;
(function (NavigationType) {
    NavigationType["SHORTCUT"] = "shortcut";
    NavigationType["VOLUME"] = "volume";
    NavigationType["RECENT"] = "recent";
    NavigationType["CROSTINI"] = "crostini";
    NavigationType["GUEST_OS"] = "guest_os";
    NavigationType["ENTRY_LIST"] = "entry_list";
    NavigationType["DRIVE"] = "drive";
    NavigationType["ANDROID_APPS"] = "android_apps";
    NavigationType["TRASH"] = "trash";
    // Materialized view is used for Recent and in the future for Search.
    NavigationType["MATERIALIZED_VIEW"] = "materialized_view";
})(NavigationType || (NavigationType = {}));
