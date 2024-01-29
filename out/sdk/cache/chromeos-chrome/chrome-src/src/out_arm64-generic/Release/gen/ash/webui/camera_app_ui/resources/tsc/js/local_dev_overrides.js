// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
 * This file contains overrides that are used by `cca.py dev` and `cca.py
 * bundle`. This file is type checked when building Chrome, but the output are
 * not included in built Chrome to save space. All larger override should be
 * placed here.
 */
import { assertNotReached } from './assert.js';
import * as localDev from './local_dev.js';
import { getCameraDirectory, getObjectURL } from './models/file_system.js';
import { ChromeHelper, getInstanceImpl } from './mojo/chrome_helper.js';
import { ScreenState, StorageMonitorStatus, } from './mojo/type.js';
import { expandPath } from './util.js';
export class ChromeHelperFake extends ChromeHelper {
    // This class contains methods that overrides ChromeHelper, and async-ness
    // should follow the ChromeHelper class. We can manually write
    // Promise.resolve(...) instead but it's more verbose without much gain.
    /* eslint-disable @typescript-eslint/require-await */
    async initTabletModeMonitor(_onChange) {
        return false;
    }
    async initScreenStateMonitor(_onChange) {
        return ScreenState.kOn;
    }
    async initExternalScreenMonitor(_onChange) {
        return false;
    }
    async isTabletMode() {
        return false;
    }
    async initCameraWindowController() {
        /* Do nothing. */
    }
    startTracing(_event) {
        /* Do nothing. */
    }
    stopTracing(_event) {
        /* Do nothing. */
    }
    async openFileInGallery(name) {
        const cameraDir = getCameraDirectory();
        const file = await cameraDir.getFile(name);
        if (file === null) {
            return;
        }
        const objectURL = await getObjectURL(file);
        const newTabWindow = window.open(objectURL, '_blank');
        newTabWindow?.addEventListener('load', () => {
            // The unload handler is fired immediately since the window.open
            // triggered unload event on the initial empty page. See
            // https://stackoverflow.com/q/7476660
            newTabWindow?.addEventListener('unload', () => {
                URL.revokeObjectURL(objectURL);
            });
        });
    }
    openFeedbackDialog(_placeholder) {
        alert('Feedback dialog.');
    }
    openUrlInBrowser(url) {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
    async finish(_intentId) {
        /* Do nothing. */
    }
    async appendData(_intentId, _data) {
        /* Do nothing. */
    }
    async clearData(_intentId) {
        /* Do nothing. */
    }
    async isMetricsAndCrashReportingEnabled() {
        return false;
    }
    sendNewCaptureBroadcast(_args) {
        /* Do nothing. */
    }
    notifyTote(_format, _name) {
        /* Do nothing. */
    }
    async monitorFileDeletion(_name, _callback) {
        /* Do nothing. */
    }
    async isDocumentScannerSupported() {
        return false;
    }
    async checkDocumentModeReadiness() {
        return false;
    }
    async scanDocumentCorners(_blob) {
        return null;
    }
    async convertToDocument(_blob, _corners, _rotation, _mimeType) {
        assertNotReached();
    }
    async convertToPdf(_jpegBlobs) {
        assertNotReached();
    }
    maybeTriggerSurvey() {
        /* Do nothing. */
    }
    async startMonitorStorage(_onChange) {
        return StorageMonitorStatus.kNormal;
    }
    stopMonitorStorage() {
        /* Do nothing. */
    }
    openStorageManagement() {
        /* Do nothing. */
    }
    openWifiDialog(_config) {
        /* Do nothing. */
    }
}
localDev.setOverride(getInstanceImpl, () => new ChromeHelperFake());
// This file is included from /views/main.html, so remove the last two parts in
// URL to get the base path.
const basePath = window.location.pathname.split('/').slice(0, -2).join('/');
localDev.setOverride(expandPath, (path) => {
    return basePath + path;
});
