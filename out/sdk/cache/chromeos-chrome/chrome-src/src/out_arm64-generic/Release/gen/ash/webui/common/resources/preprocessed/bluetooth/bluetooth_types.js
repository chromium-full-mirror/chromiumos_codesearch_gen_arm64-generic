// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export var ButtonState;
(function (ButtonState) {
    ButtonState[ButtonState["ENABLED"] = 1] = "ENABLED";
    ButtonState[ButtonState["DISABLED"] = 2] = "DISABLED";
    ButtonState[ButtonState["HIDDEN"] = 3] = "HIDDEN";
})(ButtonState || (ButtonState = {}));
export var ButtonName;
(function (ButtonName) {
    ButtonName[ButtonName["CANCEL"] = 1] = "CANCEL";
    ButtonName[ButtonName["PAIR"] = 2] = "PAIR";
})(ButtonName || (ButtonName = {}));
/**
 * Device pairing authentication type. During device pairing, a device might
 * require additional authentication before pairing can be completed. This
 * is used to define which type of authentication is required.
 */
export var PairingAuthType;
(function (PairingAuthType) {
    PairingAuthType[PairingAuthType["NONE"] = 1] = "NONE";
    PairingAuthType[PairingAuthType["REQUEST_PIN_CODE"] = 2] = "REQUEST_PIN_CODE";
    PairingAuthType[PairingAuthType["REQUEST_PASSKEY"] = 3] = "REQUEST_PASSKEY";
    PairingAuthType[PairingAuthType["DISPLAY_PIN_CODE"] = 4] = "DISPLAY_PIN_CODE";
    PairingAuthType[PairingAuthType["DISPLAY_PASSKEY"] = 5] = "DISPLAY_PASSKEY";
    PairingAuthType[PairingAuthType["CONFIRM_PASSKEY"] = 6] = "CONFIRM_PASSKEY";
    PairingAuthType[PairingAuthType["AUTHORIZE_PAIRING"] = 7] = "AUTHORIZE_PAIRING";
})(PairingAuthType || (PairingAuthType = {}));
export var DeviceItemState;
(function (DeviceItemState) {
    DeviceItemState[DeviceItemState["DEFAULT"] = 1] = "DEFAULT";
    DeviceItemState[DeviceItemState["PAIRING"] = 2] = "PAIRING";
    DeviceItemState[DeviceItemState["FAILED"] = 3] = "FAILED";
})(DeviceItemState || (DeviceItemState = {}));
export var BatteryType;
(function (BatteryType) {
    BatteryType[BatteryType["DEFAULT"] = 1] = "DEFAULT";
    BatteryType[BatteryType["LEFT_BUD"] = 2] = "LEFT_BUD";
    BatteryType[BatteryType["CASE"] = 3] = "CASE";
    BatteryType[BatteryType["RIGHT_BUD"] = 4] = "RIGHT_BUD";
})(BatteryType || (BatteryType = {}));
