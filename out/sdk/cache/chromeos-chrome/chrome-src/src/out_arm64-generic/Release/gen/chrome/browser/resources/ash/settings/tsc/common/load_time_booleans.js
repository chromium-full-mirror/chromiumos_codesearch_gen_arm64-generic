// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Getters for loadTimeData booleans used throughout CrOS Settings.
 * Export them as functions so they reload the values when overridden in tests.
 * Organize the getter functions by their respective pages.
 */
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
// General
export function isGuest() {
    return loadTimeData.getBoolean('isGuest');
}
export function isChild() {
    return loadTimeData.getBoolean('isChild');
}
export function isRevampWayfindingEnabled() {
    return loadTimeData.getBoolean('isRevampWayfindingEnabled');
}
// Apps page
export function androidAppsVisible() {
    return loadTimeData.getBoolean('androidAppsVisible');
}
export function isArcVmEnabled() {
    return loadTimeData.getBoolean('isArcVmEnabled');
}
export function isPlayStoreAvailable() {
    return loadTimeData.getBoolean('isPlayStoreAvailable');
}
export function isPluginVmAvailable() {
    return loadTimeData.getBoolean('isPluginVmAvailable');
}
// Crostini page
export function isCrostiniAllowed() {
    return loadTimeData.getBoolean('isCrostiniAllowed');
}
export function isCrostiniSupported() {
    return loadTimeData.getBoolean('isCrostiniSupported');
}
// Device page
export function isExternalStorageEnabled() {
    return loadTimeData.getBoolean('isExternalStorageEnabled');
}
export function isInputDeviceSettingsSplitEnabled() {
    return loadTimeData.getBoolean('enableInputDeviceSettingsSplit');
}
// Kerberos page
export function isKerberosEnabled() {
    return loadTimeData.getBoolean('isKerberosEnabled');
}
// People page
export function isAccountManagerEnabled() {
    return loadTimeData.getBoolean('isAccountManagerEnabled');
}
// Reset page
export function isPowerwashAllowed() {
    return loadTimeData.getBoolean('allowPowerwash');
}
// Reset page
export function isSanitizeAllowed() {
    return loadTimeData.getBoolean('allowSanitize');
}
// Search page
export function isAssistantAllowed() {
    return loadTimeData.getBoolean('isAssistantAllowed');
}
export function shouldShowQuickAnswersSettings() {
    return loadTimeData.getBoolean('shouldShowQuickAnswersSettings');
}
// System preferences page
export function shouldShowStartup() {
    return loadTimeData.getBoolean('shouldShowStartup');
}
export function shouldShowMultitasking() {
    return loadTimeData.getBoolean('shouldShowMultitasking');
}
