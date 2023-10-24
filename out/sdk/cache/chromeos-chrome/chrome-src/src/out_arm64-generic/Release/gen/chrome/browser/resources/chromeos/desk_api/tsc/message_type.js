// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enum of the Request type that will be sent to the extension.
 */
export var RequestType;
(function (RequestType) {
    RequestType["LAUNCH_DESK"] = "LaunchDesk";
    RequestType["REMOVE_DESK"] = "RemoveDesk";
    RequestType["SET_WINDOW_PROPERTIES"] = "SetWindowProperties";
    RequestType["GET_ACTIVE_DESK"] = "GetActiveDesk";
    RequestType["SWITCH_DESK"] = "SwitchDesk";
    RequestType["GET_DESK_BY_ID"] = "GetDeskByID";
})(RequestType || (RequestType = {}));
/**
 * Enum of the Response type that will be sent to the extension.
 */
export var ResponseType;
(function (ResponseType) {
    ResponseType["OPERATION_SUCCESS"] = "OperationSuccess";
    ResponseType["OPERATION_FAILURE"] = "OperationFailure";
})(ResponseType || (ResponseType = {}));
/**
 * Enum of desk events type.
 */
export var EventType;
(function (EventType) {
    EventType["DESK_ADDED"] = "DeskAdded";
    EventType["DESK_REMOVED"] = "DeskRemoved";
    EventType["DESK_SWITCHED"] = "DeskSwitched";
    EventType["DESK_UNDONE"] = "DeskUndone";
})(EventType || (EventType = {}));
