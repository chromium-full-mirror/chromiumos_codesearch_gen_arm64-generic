// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Note: The handle* functions below are called internally on promise
// resolution, unlike the other return* functions, which are called
// asynchronously by the host.
// clang-format off
// 
import './strings.m.js';
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getRequiredElement } from 'chrome://resources/js/util_ts.js';
// 
import { addWebUiListener } from 'chrome://resources/js/cr.js';
// 
// 
import { $ } from 'chrome://resources/js/util_ts.js';
// 
// clang-format on
/**
 * Promise resolution handler for variations list and command line equivalent.
 */
function handleVariationInfo({ variationsList, variationsCmd }) {
    getRequiredElement('variations-section').hidden = !variationsList.length;
    for (const item of variationsList) {
        getRequiredElement('variations-list')
            .appendChild(document.createTextNode(item));
        getRequiredElement('variations-list')
            .appendChild(document.createElement('br'));
    }
    if (variationsCmd) {
        getRequiredElement('variations-cmd-section').hidden = !variationsCmd;
        getRequiredElement('variations-cmd').textContent = variationsCmd;
    }
}
/**
 * Promise resolution handler for the executable and profile paths to display.
 * @param execPath The executable path to display.
 * @param profilePath The profile path to display.
 */
function handlePathInfo({ execPath, profilePath }) {
    getRequiredElement('executable_path').textContent = execPath;
    getRequiredElement('profile_path').textContent = profilePath;
}
// 
// 
/**
 * Callback from the backend with the ChromeOS platform version to display.
 * @param platformVersion The platform version to display.
 */
function returnPlatformVersion(platformVersion) {
    getRequiredElement('platform_version').textContent = platformVersion;
}
/**
 * Callback from the backend with the firmware version to display.
 */
function returnFirmwareVersion(firmwareVersion) {
    getRequiredElement('firmware_version').textContent = firmwareVersion;
}
/**
 * Callback from the backend with the ARC Android SDK version to display.
 * @param arcAndroidSdkVersion The ARC Android SDK version to display,
 *     already localized.
 */
function returnArcAndArcAndroidSdkVersions(arcAndroidSdkVersion) {
    getRequiredElement('arc_holder').hidden = false;
    getRequiredElement('arc_and_arc_android_sdk_versions').textContent =
        arcAndroidSdkVersion;
}
/**
 * Callback from chromeosInfoPrivate with the value of the customization ID.
 */
function returnCustomizationId(response) {
    if (!response['customizationId']) {
        return;
    }
    getRequiredElement('customization_id_holder').hidden = false;
    getRequiredElement('customization_id').textContent =
        response['customizationId'];
}
// 
// 
/**
 * Callback from the backend to inform if Lacros is enabled or not.
 * @param enabled True if it is enabled.
 */
function returnLacrosEnabled(enabled) {
    getRequiredElement('os-link-container').hidden = !enabled;
    const crosUrlRedirectButton = $('os-link-href');
    if (crosUrlRedirectButton) {
        crosUrlRedirectButton.onclick = crosUrlVersionRedirect;
    }
}
/**
 * Called when the user clicks on the os-link-href button.
 */
function crosUrlVersionRedirect() {
    chrome.send('crosUrlVersionRedirect');
}
// 
function copyToClipboard() {
    navigator.clipboard.writeText(getRequiredElement('copy-content').innerText)
        .then(announceCopy);
}
function announceCopy() {
    const messagesDiv = getRequiredElement('messages');
    messagesDiv.innerHTML = window.trustedTypes.emptyHTML;
    // 
    const div = document.createElement('div');
    div.innerText = loadTimeData.getString('copy_notice');
    messagesDiv.append(div);
}
// 
/* All the work we do onload. */
function initialize() {
    // 
    // 
    addWebUiListener('return-platform-version', returnPlatformVersion);
    addWebUiListener('return-firmware-version', returnFirmwareVersion);
    addWebUiListener('return-arc-and-arc-android-sdk-versions', returnArcAndArcAndroidSdkVersions);
    getRequiredElement('arc_holder').hidden = true;
    chrome.chromeosInfoPrivate.get(['customizationId'])
        .then(returnCustomizationId);
    // 
    // 
    addWebUiListener('return-lacros-enabled', returnLacrosEnabled);
    // 
    // 
    chrome.send('requestVersionInfo');
    const includeVariationsCmd = location.search.includes('show-variations-cmd');
    sendWithPromise('requestVariationInfo', includeVariationsCmd)
        .then(handleVariationInfo);
    sendWithPromise('requestPathInfo').then(handlePathInfo);
    if (getRequiredElement('variations-seed').textContent !== '') {
        getRequiredElement('variations-seed-section').hidden = false;
    }
    if (getRequiredElement('sanitizer').textContent !== '') {
        getRequiredElement('sanitizer-section').hidden = false;
    }
    getRequiredElement('copy-to-clipboard')
        .addEventListener('click', copyToClipboard);
    // 
}
document.addEventListener('DOMContentLoaded', initialize);
