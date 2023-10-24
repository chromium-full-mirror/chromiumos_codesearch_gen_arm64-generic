// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export { AppType, InstallReason, InstallSource, OptionalBool, RunOnOsLoginMode, WindowMode } from './app_management.mojom-webui.js';
/**
 * The number of apps displayed in app list in the main view before expanding.
 */
export const NUMBER_OF_APPS_DISPLAYED_DEFAULT = 4;
// Enumeration of the different subpage types within the app management page.
export var PageType;
(function (PageType) {
    PageType[PageType["MAIN"] = 0] = "MAIN";
    PageType[PageType["DETAIL"] = 1] = "DETAIL";
})(PageType || (PageType = {}));
// This histogram is also declared and used at chrome/browser/ui/webui/settings/
// chromeos/app_management/app_management_uma.h.
export const AppManagementEntryPointsHistogramName = 'AppManagement.EntryPoints';
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var AppManagementEntryPoint;
(function (AppManagementEntryPoint) {
    AppManagementEntryPoint[AppManagementEntryPoint["APP_LIST_CONTEXT_MENU_APP_INFO_ARC"] = 0] = "APP_LIST_CONTEXT_MENU_APP_INFO_ARC";
    AppManagementEntryPoint[AppManagementEntryPoint["APP_LIST_CONTEXT_MENU_APP_INFO_CHROME_APP"] = 1] = "APP_LIST_CONTEXT_MENU_APP_INFO_CHROME_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["APP_LIST_CONTEXT_MENU_APP_INFO_WEB_APP"] = 2] = "APP_LIST_CONTEXT_MENU_APP_INFO_WEB_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["SHELF_CONTEXT_MENU_APP_INFO_ARC"] = 3] = "SHELF_CONTEXT_MENU_APP_INFO_ARC";
    AppManagementEntryPoint[AppManagementEntryPoint["SHELF_CONTEXT_MENU_APP_INFO_CHROME_APP"] = 4] = "SHELF_CONTEXT_MENU_APP_INFO_CHROME_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["SHELF_CONTEXT_MENU_APP_INFO_WEB_APP"] = 5] = "SHELF_CONTEXT_MENU_APP_INFO_WEB_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["MAIN_VIEW_ARC"] = 6] = "MAIN_VIEW_ARC";
    AppManagementEntryPoint[AppManagementEntryPoint["MAIN_VIEW_CHROME_APP"] = 7] = "MAIN_VIEW_CHROME_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["MAIN_VIEW_WEB_APP"] = 8] = "MAIN_VIEW_WEB_APP";
    AppManagementEntryPoint[AppManagementEntryPoint["OS_SETTINGS_MAIN_PAGE"] = 9] = "OS_SETTINGS_MAIN_PAGE";
    AppManagementEntryPoint[AppManagementEntryPoint["MAIN_VIEW_PLUGIN_VM"] = 10] = "MAIN_VIEW_PLUGIN_VM";
    AppManagementEntryPoint[AppManagementEntryPoint["D_BUS_SERVICE_PLUGIN_VM"] = 11] = "D_BUS_SERVICE_PLUGIN_VM";
    AppManagementEntryPoint[AppManagementEntryPoint["MAIN_VIEW_BOREALIS"] = 12] = "MAIN_VIEW_BOREALIS";
})(AppManagementEntryPoint || (AppManagementEntryPoint = {}));
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var AppManagementUserAction;
(function (AppManagementUserAction) {
    AppManagementUserAction[AppManagementUserAction["VIEW_OPENED"] = 0] = "VIEW_OPENED";
    AppManagementUserAction[AppManagementUserAction["NATIVE_SETTINGS_OPENED"] = 1] = "NATIVE_SETTINGS_OPENED";
    AppManagementUserAction[AppManagementUserAction["UNINSTALL_DIALOG_LAUNCHED"] = 2] = "UNINSTALL_DIALOG_LAUNCHED";
    AppManagementUserAction[AppManagementUserAction["PIN_TO_SHELF_TURNED_ON"] = 3] = "PIN_TO_SHELF_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["PIN_TO_SHELF_TURNED_OFF"] = 4] = "PIN_TO_SHELF_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["NOTIFICATIONS_TURNED_ON"] = 5] = "NOTIFICATIONS_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["NOTIFICATIONS_TURNED_OFF"] = 6] = "NOTIFICATIONS_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["LOCATION_TURNED_ON"] = 7] = "LOCATION_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["LOCATION_TURNED_OFF"] = 8] = "LOCATION_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["CAMERA_TURNED_ON"] = 9] = "CAMERA_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["CAMERA_TURNED_OFF"] = 10] = "CAMERA_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["MICROPHONE_TURNED_ON"] = 11] = "MICROPHONE_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["MICROPHONE_TURNED_OFF"] = 12] = "MICROPHONE_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["CONTACTS_TURNED_ON"] = 13] = "CONTACTS_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["CONTACTS_TURNED_OFF"] = 14] = "CONTACTS_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["STORAGE_TURNED_ON"] = 15] = "STORAGE_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["STORAGE_TURNED_OFF"] = 16] = "STORAGE_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["PRINTING_TURNED_ON"] = 17] = "PRINTING_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["PRINTING_TURNED_OFF"] = 18] = "PRINTING_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["RESIZE_LOCK_TURNED_ON"] = 19] = "RESIZE_LOCK_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["RESIZE_LOCK_TURNED_OFF"] = 20] = "RESIZE_LOCK_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["PREFERRED_APP_TURNED_ON"] = 21] = "PREFERRED_APP_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["PREFERRED_APP_TURNED_OFF"] = 22] = "PREFERRED_APP_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["SUPPORTED_LINKS_LIST_SHOWN"] = 23] = "SUPPORTED_LINKS_LIST_SHOWN";
    AppManagementUserAction[AppManagementUserAction["OVERLAPPING_APPS_DIALOG_SHOWN"] = 24] = "OVERLAPPING_APPS_DIALOG_SHOWN";
    AppManagementUserAction[AppManagementUserAction["WINDOW_MODE_CHANGED_TO_BROWSER"] = 25] = "WINDOW_MODE_CHANGED_TO_BROWSER";
    AppManagementUserAction[AppManagementUserAction["WINDOW_MODE_CHANGED_TO_WINDOW"] = 26] = "WINDOW_MODE_CHANGED_TO_WINDOW";
    AppManagementUserAction[AppManagementUserAction["RUN_ON_OS_LOGIN_MODE_TURNED_ON"] = 27] = "RUN_ON_OS_LOGIN_MODE_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["RUN_ON_OS_LOGIN_MODE_TURNED_OFF"] = 28] = "RUN_ON_OS_LOGIN_MODE_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["FILE_HANDLING_TURNED_ON"] = 29] = "FILE_HANDLING_TURNED_ON";
    AppManagementUserAction[AppManagementUserAction["FILE_HANDLING_TURNED_OFF"] = 30] = "FILE_HANDLING_TURNED_OFF";
    AppManagementUserAction[AppManagementUserAction["FILE_HANDLING_OVERFLOW_SHOWN"] = 31] = "FILE_HANDLING_OVERFLOW_SHOWN";
})(AppManagementUserAction || (AppManagementUserAction = {}));
