// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var BluetoothUiSurface;
(function (BluetoothUiSurface) {
    BluetoothUiSurface[BluetoothUiSurface["SETTINGS_DEVICE_LIST_SUBPAGE"] = 0] = "SETTINGS_DEVICE_LIST_SUBPAGE";
    BluetoothUiSurface[BluetoothUiSurface["SETTINGS_DEVICE_DETAIL_SUBPAGE"] = 1] = "SETTINGS_DEVICE_DETAIL_SUBPAGE";
    BluetoothUiSurface[BluetoothUiSurface["SETTINGS_PAIRING_DIALOG"] = 2] = "SETTINGS_PAIRING_DIALOG";
    BluetoothUiSurface[BluetoothUiSurface["BLUETOOTH_QUICK_SETTINGS"] = 3] = "BLUETOOTH_QUICK_SETTINGS";
    BluetoothUiSurface[BluetoothUiSurface["PAIRING_DIALOG"] = 4] = "PAIRING_DIALOG";
    // [Deprecated] PAIRED_NOTIFICATION: 5,
    BluetoothUiSurface[BluetoothUiSurface["CONNECTION_TOAST"] = 6] = "CONNECTION_TOAST";
    BluetoothUiSurface[BluetoothUiSurface["DISCONNECTED_TOAST"] = 7] = "DISCONNECTED_TOAST";
    BluetoothUiSurface[BluetoothUiSurface["OOBE_HID_DETECTION"] = 8] = "OOBE_HID_DETECTION";
    BluetoothUiSurface[BluetoothUiSurface["PAIRED_TOAST"] = 9] = "PAIRED_TOAST";
})(BluetoothUiSurface || (BluetoothUiSurface = {}));
/**
 * Records metric indicating that |uiSurface| was displayed to the user.
 */
export function recordBluetoothUiSurfaceMetrics(uiSurface) {
    chrome.metricsPrivate.recordEnumerationValue('Bluetooth.ChromeOS.UiSurfaceDisplayed', uiSurface, Object.keys(BluetoothUiSurface).length);
}
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var FastPairSavedDevicesUiEvent;
(function (FastPairSavedDevicesUiEvent) {
    FastPairSavedDevicesUiEvent[FastPairSavedDevicesUiEvent["SETTINGS_SAVED_DEVICE_LIST_SUBPAGE_SHOWN"] = 0] = "SETTINGS_SAVED_DEVICE_LIST_SUBPAGE_SHOWN";
    FastPairSavedDevicesUiEvent[FastPairSavedDevicesUiEvent["SETTINGS_SAVED_DEVICE_LIST_HAS_DEVICES"] = 1] = "SETTINGS_SAVED_DEVICE_LIST_HAS_DEVICES";
    FastPairSavedDevicesUiEvent[FastPairSavedDevicesUiEvent["SETTINGS_SAVED_DEVICE_LIST_REMOVE_DIALOG"] = 2] = "SETTINGS_SAVED_DEVICE_LIST_REMOVE_DIALOG";
    FastPairSavedDevicesUiEvent[FastPairSavedDevicesUiEvent["SETTINGS_SAVED_DEVICE_LIST_REMOVE"] = 3] = "SETTINGS_SAVED_DEVICE_LIST_REMOVE";
})(FastPairSavedDevicesUiEvent || (FastPairSavedDevicesUiEvent = {}));
/**
 * Records metric indicating that |uiEvent| was displayed to the user.
 */
export function recordSavedDevicesUiEventMetrics(uiEvent) {
    chrome.metricsPrivate.recordEnumerationValue('Bluetooth.ChromeOS.FastPair.SavedDevices.UiEvent', uiEvent, Object.keys(FastPairSavedDevicesUiEvent).length);
}
