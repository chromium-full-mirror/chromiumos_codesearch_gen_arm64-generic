// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Constants used in Switch Access.
 */
/** When an action is performed, how the menu should respond. */
export var ActionResponse;
(function (ActionResponse) {
    ActionResponse[ActionResponse["NO_ACTION_TAKEN"] = -1] = "NO_ACTION_TAKEN";
    ActionResponse[ActionResponse["REMAIN_OPEN"] = 0] = "REMAIN_OPEN";
    ActionResponse[ActionResponse["CLOSE_MENU"] = 1] = "CLOSE_MENU";
    ActionResponse[ActionResponse["EXIT_SUBMENU"] = 2] = "EXIT_SUBMENU";
    ActionResponse[ActionResponse["RELOAD_MENU"] = 3] = "RELOAD_MENU";
    ActionResponse[ActionResponse["OPEN_TEXT_NAVIGATION_MENU"] = 4] = "OPEN_TEXT_NAVIGATION_MENU";
})(ActionResponse || (ActionResponse = {}));
/**
 * The types of error or unexpected state that can be encountered by Switch
 * Access.
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["UNKNOWN"] = 0] = "UNKNOWN";
    ErrorType[ErrorType["PREFERENCE_TYPE"] = 1] = "PREFERENCE_TYPE";
    ErrorType[ErrorType["UNTRANSLATED_STRING"] = 2] = "UNTRANSLATED_STRING";
    ErrorType[ErrorType["INVALID_COLOR"] = 3] = "INVALID_COLOR";
    ErrorType[ErrorType["NEXT_UNDEFINED"] = 4] = "NEXT_UNDEFINED";
    ErrorType[ErrorType["PREVIOUS_UNDEFINED"] = 5] = "PREVIOUS_UNDEFINED";
    ErrorType[ErrorType["NULL_CHILD"] = 6] = "NULL_CHILD";
    ErrorType[ErrorType["NO_CHILDREN"] = 7] = "NO_CHILDREN";
    ErrorType[ErrorType["MALFORMED_DESKTOP"] = 8] = "MALFORMED_DESKTOP";
    ErrorType[ErrorType["MISSING_LOCATION"] = 9] = "MISSING_LOCATION";
    ErrorType[ErrorType["MISSING_KEYBOARD"] = 10] = "MISSING_KEYBOARD";
    ErrorType[ErrorType["ROW_TOO_SHORT"] = 11] = "ROW_TOO_SHORT";
    ErrorType[ErrorType["MISSING_BASE_NODE"] = 12] = "MISSING_BASE_NODE";
    ErrorType[ErrorType["NEXT_INVALID"] = 13] = "NEXT_INVALID";
    ErrorType[ErrorType["PREVIOUS_INVALID"] = 14] = "PREVIOUS_INVALID";
    ErrorType[ErrorType["INVALID_SELECTION_BOUNDS"] = 15] = "INVALID_SELECTION_BOUNDS";
    ErrorType[ErrorType["UNINITIALIZED"] = 16] = "UNINITIALIZED";
    ErrorType[ErrorType["DUPLICATE_INITIALIZATION"] = 17] = "DUPLICATE_INITIALIZATION";
})(ErrorType || (ErrorType = {}));
/** The different types of menus and sub-menus that can be shown. */
export var MenuType;
(function (MenuType) {
    MenuType[MenuType["MAIN_MENU"] = 0] = "MAIN_MENU";
    MenuType[MenuType["TEXT_NAVIGATION"] = 1] = "TEXT_NAVIGATION";
    MenuType[MenuType["POINT_SCAN_MENU"] = 2] = "POINT_SCAN_MENU";
})(MenuType || (MenuType = {}));
/**
 * The modes of interaction the user can select for how to interact with the
 * device.
 */
export var Mode;
(function (Mode) {
    Mode[Mode["ITEM_SCAN"] = 0] = "ITEM_SCAN";
    Mode[Mode["POINT_SCAN"] = 1] = "POINT_SCAN";
})(Mode || (Mode = {}));
