// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertNotReached } from '../assert.js';
import { reportError } from '../error.js';
import { Point } from '../geometry.js';
import * as localDev from '../local_dev.js';
import { ErrorLevel, ErrorType, MimeType, } from '../type.js';
import { windowController } from '../window_controller.js';
import { CameraAppHelper, CameraIntentAction, DocumentOutputFormat, ExternalScreenMonitorCallbackRouter, FileMonitorResult, Rotation, ScreenStateMonitorCallbackRouter, StorageMonitorCallbackRouter, StorageMonitorStatus, TabletModeMonitorCallbackRouter, } from './type.js';
import { wrapEndpoint } from './util.js';
/**
 * The singleton instance of ChromeHelper. Initialized by the first
 * invocation of getInstance().
 */
let instance = null;
/**
 * Forces casting type from Uint8Array to number[].
 */
function castToNumberArray(data) {
    // This cast is to workaround that the generated mojo binding only accepts
    // number[], but actually can be passed Uint8Array (which also supports
    // indexing via [] and length).
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return data;
}
/**
 * Casts from rotation degrees to mojo rotation.
 */
function castToMojoRotation(rotation) {
    switch (rotation) {
        case 0:
            return Rotation.ROTATION_0;
        case 90:
            return Rotation.ROTATION_90;
        case 180:
            return Rotation.ROTATION_180;
        case 270:
            return Rotation.ROTATION_270;
        default:
            assertNotReached(`Invalid rotation ${rotation}`);
    }
}
export class ChromeHelper {
    /**
     * Creates a new instance of ChromeHelper if it is not set. Returns the
     *     existing instance.
     *
     * @return The singleton instance.
     */
    static getInstance() {
        if (instance === null) {
            instance = getInstanceImpl();
        }
        return instance;
    }
}
export const getInstanceImpl = localDev.overridableFunction(() => new ChromeHelperImpl());
/**
 * Communicates with Chrome.
 */
class ChromeHelperImpl extends ChromeHelper {
    constructor() {
        super(...arguments);
        /**
         * An interface remote that is used to communicate with Chrome.
         */
        this.remote = wrapEndpoint(CameraAppHelper.getRemote());
    }
    async initTabletModeMonitor(onChange) {
        const monitorCallbackRouter = wrapEndpoint(new TabletModeMonitorCallbackRouter());
        monitorCallbackRouter.update.addListener(onChange);
        const { isTabletMode } = await this.remote.setTabletMonitor(monitorCallbackRouter.$.bindNewPipeAndPassRemote());
        return isTabletMode;
    }
    async initScreenStateMonitor(onChange) {
        const monitorCallbackRouter = wrapEndpoint(new ScreenStateMonitorCallbackRouter());
        monitorCallbackRouter.update.addListener(onChange);
        const { initialState } = await this.remote.setScreenStateMonitor(monitorCallbackRouter.$.bindNewPipeAndPassRemote());
        return initialState;
    }
    async initExternalScreenMonitor(onChange) {
        const monitorCallbackRouter = wrapEndpoint(new ExternalScreenMonitorCallbackRouter());
        monitorCallbackRouter.update.addListener(onChange);
        const { hasExternalScreen } = await this.remote.setExternalScreenMonitor(monitorCallbackRouter.$.bindNewPipeAndPassRemote());
        return hasExternalScreen;
    }
    async isTabletMode() {
        const { isTabletMode } = await this.remote.isTabletMode();
        return isTabletMode;
    }
    async initCameraWindowController() {
        let { controller } = await this.remote.getWindowStateController();
        controller = wrapEndpoint(controller);
        await windowController.bind(controller);
    }
    startTracing(event) {
        this.remote.startPerfEventTrace(event);
    }
    stopTracing(event) {
        this.remote.stopPerfEventTrace(event);
    }
    openFileInGallery(name) {
        this.remote.openFileInGallery(name);
    }
    openFeedbackDialog(placeholder) {
        this.remote.openFeedbackDialog(placeholder);
    }
    openUrlInBrowser(url) {
        this.remote.openUrlInBrowser({ url: url });
    }
    async checkReturn(caller, value) {
        const { isSuccess } = await value;
        if (!isSuccess) {
            reportError(ErrorType.HANDLE_CAMERA_RESULT_FAILURE, ErrorLevel.ERROR, new Error(`Return not isSuccess from calling intent ${caller}.`));
        }
    }
    async finish(intentId) {
        const ret = this.remote.handleCameraResult(intentId, CameraIntentAction.FINISH, []);
        await this.checkReturn('finish()', ret);
    }
    async appendData(intentId, data) {
        const ret = this.remote.handleCameraResult(intentId, CameraIntentAction.APPEND_DATA, castToNumberArray(data));
        await this.checkReturn('appendData()', ret);
    }
    async clearData(intentId) {
        const ret = this.remote.handleCameraResult(intentId, CameraIntentAction.CLEAR_DATA, []);
        await this.checkReturn('clearData()', ret);
    }
    async isMetricsAndCrashReportingEnabled() {
        const { isEnabled } = await this.remote.isMetricsAndCrashReportingEnabled();
        return isEnabled;
    }
    sendNewCaptureBroadcast({ isVideo, name }) {
        this.remote.sendNewCaptureBroadcast(isVideo, name);
    }
    notifyTote(format, name) {
        this.remote.notifyTote(format, name);
    }
    async monitorFileDeletion(name, callback) {
        const { result } = await this.remote.monitorFileDeletion(name);
        switch (result) {
            case FileMonitorResult.kDeleted:
                callback();
                return;
            case FileMonitorResult.kCanceled:
                // Do nothing if it is canceled by another monitor call.
                return;
            case FileMonitorResult.kError:
                throw new Error('Error happens when monitoring file deletion');
            default:
                assertNotReached();
        }
    }
    async isDocumentScannerSupported() {
        const { isSupported } = await this.remote.isDocumentScannerSupported();
        return isSupported;
    }
    async checkDocumentModeReadiness() {
        const { isLoaded } = await this.remote.checkDocumentModeReadiness();
        return isLoaded;
    }
    async scanDocumentCorners(blob) {
        const buffer = new Uint8Array(await blob.arrayBuffer());
        const { corners } = await this.remote.scanDocumentCorners(castToNumberArray(buffer));
        if (corners.length === 0) {
            return null;
        }
        return corners.map(({ x, y }) => new Point(x, y));
    }
    async convertToDocument(blob, corners, rotation, mimeType) {
        assert(corners.length === 4, 'Unexpected amount of corners');
        const buffer = new Uint8Array(await blob.arrayBuffer());
        let outputFormat;
        if (mimeType === MimeType.JPEG) {
            outputFormat = DocumentOutputFormat.kJpeg;
        }
        else if (mimeType === MimeType.PDF) {
            outputFormat = DocumentOutputFormat.kPdf;
        }
        else {
            throw new Error(`Output mimetype unsupported: ${mimeType}`);
        }
        const { docData } = await this.remote.convertToDocument(castToNumberArray(buffer), corners, castToMojoRotation(rotation), outputFormat);
        return new Blob([new Uint8Array(docData)], { type: mimeType });
    }
    async convertToPdf(jpegBlobs) {
        const numArrays = await Promise.all(jpegBlobs.map(async (blob) => {
            const buffer = new Uint8Array(await blob.arrayBuffer());
            return castToNumberArray(buffer);
        }));
        const { pdfData } = await this.remote.convertToPdf(numArrays);
        return new Blob([new Uint8Array(pdfData)], { type: MimeType.PDF });
    }
    maybeTriggerSurvey() {
        this.remote.maybeTriggerSurvey();
    }
    async startMonitorStorage(onChange) {
        const storageCallbackRouter = wrapEndpoint(new StorageMonitorCallbackRouter());
        storageCallbackRouter.update.addListener((newStatus) => {
            if (newStatus === StorageMonitorStatus.kError) {
                throw new Error('Error occurred while monitoring storage.');
            }
            else if (newStatus !== StorageMonitorStatus.kCanceled) {
                onChange(newStatus);
            }
        });
        const { initialStatus } = await this.remote.startStorageMonitor(storageCallbackRouter.$.bindNewPipeAndPassRemote());
        // Should not get canceled status at initial time.
        if (initialStatus === StorageMonitorStatus.kError ||
            initialStatus === StorageMonitorStatus.kCanceled) {
            throw new Error('Failed to start storage monitoring.');
        }
        return initialStatus;
    }
    stopMonitorStorage() {
        this.remote.stopStorageMonitor();
    }
    openStorageManagement() {
        this.remote.openStorageManagement();
    }
    openWifiDialog(config) {
        this.remote.openWifiDialog(config);
    }
}
