// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines DeviceNameState and NameUpdateResult enum.
 */
/**
 * DeviceNameState stores information about the states of the device name.
 * Numerical values from this enum must stay in sync with the C++ enum in
 * device_name_store.h.
 */
export var DeviceNameState;
(function (DeviceNameState) {
    // We can modify the device name.
    DeviceNameState[DeviceNameState["CAN_BE_MODIFIED"] = 0] = "CAN_BE_MODIFIED";
    // We cannot modify the device name because of active policies.
    DeviceNameState[DeviceNameState["CANNOT_BE_MODIFIED_BECAUSE_OF_POLICIES"] = 1] = "CANNOT_BE_MODIFIED_BECAUSE_OF_POLICIES";
    // We cannot modify the device name because user is not device
    // owner.
    DeviceNameState[DeviceNameState["CANNOT_BE_MODIFIED_BECAUSE_NOT_DEVICE_OWNER"] = 2] = "CANNOT_BE_MODIFIED_BECAUSE_NOT_DEVICE_OWNER";
})(DeviceNameState || (DeviceNameState = {}));
/**
 * NameUpdateResult stores information about the result of the name update
 * attempt. Numerical values from this enum must stay in sync with the C++ enum
 * in device_name_store.h.
 */
export var SetDeviceNameResult;
(function (SetDeviceNameResult) {
    // Update was successful.
    SetDeviceNameResult[SetDeviceNameResult["UPDATE_SUCCESSFUL"] = 0] = "UPDATE_SUCCESSFUL";
    // Update was unsuccessful because it is prohibited by policy.
    SetDeviceNameResult[SetDeviceNameResult["ERROR_DUE_TO_POLICY"] = 1] = "ERROR_DUE_TO_POLICY";
    // Update was unsuccessful because user is not the device owner.
    SetDeviceNameResult[SetDeviceNameResult["ERROR_DUE_TO_NOT_DEVICE_OWNER"] = 2] = "ERROR_DUE_TO_NOT_DEVICE_OWNER";
    // Update was unsuccessful because user input an invalid name.
    SetDeviceNameResult[SetDeviceNameResult["ERROR_DUE_TO_INVALID_INPUT"] = 3] = "ERROR_DUE_TO_INVALID_INPUT";
})(SetDeviceNameResult || (SetDeviceNameResult = {}));
