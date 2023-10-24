// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertExists } from './assert.js';
import * as Comlink from './lib/comlink.js';
import * as loadTimeData from './models/load_time_data.js';
import * as localStorage from './models/local_storage.js';
import { ChromeHelper } from './mojo/chrome_helper.js';
import * as state from './state.js';
import { State } from './state.js';
import { LocalStorageKey, Mode, } from './type.js';
import { Ga4MetricDimension, GaMetricDimension, getGaHelper, } from './untrusted_scripts.js';
import { WaitableEvent } from './waitable_event.js';
/**
 * The tracker ID of the GA metrics and the measurement ID of GA4 events. Make
 * sure to set `PRODUCTION` to `false` when developing/debugging metrics. See
 * Debugging section in go/cros-camera:dd:cca-ga-migration.
 */
const PRODUCTION = true;
const GA_ID = PRODUCTION ? 'UA-134822711-1' : 'UA-134822711-2';
const GA4_ID = PRODUCTION ? 'G-TRQS261G6E' : 'G-J03LBPJBGD';
const GA4_API_SECRET = PRODUCTION ? '0Ir88y9HQtiwnchvaIzZ3Q' : 'WE_zBPUQTGefdXpHl25-ig';
const ready = new WaitableEvent();
/**
 * Sends the event to GA backend.
 *
 * @param event The event to send.
 * @param dimensions Optional object contains dimension information.
 */
function sendEvent(event, dimensions = new Map()) {
    if (event.eventValue !== undefined && !Number.isInteger(event.eventValue)) {
        // Round the duration here since GA expects that the value is an
        // integer. Reference:
        // https://support.google.com/analytics/answer/1033068
        event.eventValue = Math.round(event.eventValue);
    }
    // No caller use the returned promise since metrics sending should not block
    // the code.
    void (async () => {
        await ready.wait();
        if (await checkCanSendMetrics()) {
            await Promise.all([
                sendGaEvent(event, dimensions),
                sendGa4Event(event, dimensions),
            ]);
        }
    })();
}
async function sendGaEvent(baseEvent, dimensions) {
    const gaHelper = await getGaHelper();
    await gaHelper.sendGaEvent({ baseEvent, dimensions });
}
async function sendGa4Event(baseEvent, dimensions) {
    const params = {};
    if (baseEvent.eventCategory !== undefined) {
        params.event_category = baseEvent.eventCategory;
    }
    if (baseEvent.eventLabel !== undefined) {
        params.event_label = baseEvent.eventLabel;
    }
    if (baseEvent.eventValue !== undefined) {
        params.value = baseEvent.eventValue;
    }
    for (const [gaKey, value] of dimensions) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const ga4Key = GaMetricDimension[gaKey].toLowerCase();
        params[ga4Key] = value;
    }
    const gaHelper = await getGaHelper();
    const name = baseEvent.eventAction.replaceAll('-', '_');
    await gaHelper.sendGa4Event({ name, eventParams: params });
}
/**
 * Sets if the metrics is enabled. Note that the metrics will only be sent if it
 * is enabled AND the logging consent option is enabled in OS settings.
 *
 * @param enabled True if the metrics is enabled.
 */
export async function setEnabled(enabled) {
    await ready.wait();
    const gaHelper = await getGaHelper();
    await Promise.all([
        gaHelper.setGaEnabled(GA_ID, enabled),
        gaHelper.setGa4Enabled(enabled),
    ]);
}
/**
 * Initializes GA and GA4 with parameters like property ID, client ID, and
 * custom dimensions from `loadTimeData`.
 */
export async function initMetrics() {
    const board = assertExists(/^(x86-)?(\w*)/.exec(loadTimeData.getBoard()))[0];
    const isTestImage = loadTimeData.getIsTestImage();
    const gaHelper = await getGaHelper();
    function initGa() {
        const baseDimensions = new Map([
            [GaMetricDimension.BOARD, board],
            [GaMetricDimension.IS_TEST_IMAGE, boolToIntString(isTestImage)],
        ]);
        const clientId = localStorage.getString(LocalStorageKey.GA_USER_ID);
        function setClientId(id) {
            localStorage.set(LocalStorageKey.GA_USER_ID, id);
        }
        return gaHelper.initGa({
            id: GA_ID,
            clientId,
            baseDimensions,
        }, Comlink.proxy(setClientId));
    }
    function initGa4() {
        const baseParams = {
            [Ga4MetricDimension.BOARD]: board,
            [Ga4MetricDimension.IS_TEST_IMAGE]: boolToIntString(isTestImage),
            [Ga4MetricDimension.BROWSER_VERSION]: loadTimeData.getBrowserVersion(),
        };
        const clientId = localStorage.getString(LocalStorageKey.GA4_CLIENT_ID);
        function setClientId(id) {
            localStorage.set(LocalStorageKey.GA4_CLIENT_ID, id);
        }
        return gaHelper.initGa4({
            apiSecret: GA4_API_SECRET,
            baseParams,
            clientId,
            measurementId: GA4_ID,
        }, Comlink.proxy(setClientId));
    }
    // GA_IDs are refreshed every 90 days cycle according to GA_ID_REFRESH_TIME.
    // If GA_ID_REFRESH_TIME does not exist or is outdated, updates
    // GA_ID_REFRESH_TIME and removes outdated GA_USER_ID and GA4_CLIENT_ID to
    // have the new IDs.
    const timeNow = Date.now();
    const dayInMs = 1000 * 60 * 60 * 24;
    let refreshTime = localStorage.getNumber(LocalStorageKey.GA_ID_REFRESH_TIME);
    // Assign the first |refreshTime| uniformly in today+[1,90] days.
    // This solves an initial launch problem by avoiding that all Chromebooks do a
    // synchronized refresh 90 days after launch.
    if (refreshTime === 0) {
        const randomInt = Math.floor(Math.random() * 90) + 1;
        refreshTime = timeNow + randomInt * dayInMs;
    }
    else if (refreshTime <= timeNow) {
        localStorage.remove(LocalStorageKey.GA_USER_ID);
        localStorage.remove(LocalStorageKey.GA4_CLIENT_ID);
        const cycle = 90 * dayInMs;
        const cycleCount = Math.floor((timeNow - refreshTime) / cycle) + 1;
        refreshTime += cycle * cycleCount;
    }
    localStorage.set(LocalStorageKey.GA_ID_REFRESH_TIME, refreshTime);
    await Promise.all([initGa(), initGa4()]);
    // TODO(b/286511762): Monitor consent option to enable/disable sending
    // metrics. Since end_session event is sent when the window is unloaded, we
    // don't have time to read the value from `checkCanSendMetrics()`. Currently,
    // we check the consent option on register instead of send.
    if (await checkCanSendMetrics()) {
        await Promise.all([
            gaHelper.registerGa4EndSessionEvent(),
            gaHelper.registerGa4MemoryUsageEvent(),
        ]);
    }
    ready.signal();
}
/**
 * Types of different ways to launch CCA.
 */
export var LaunchType;
(function (LaunchType) {
    LaunchType["ASSISTANT"] = "assistant";
    LaunchType["DEFAULT"] = "default";
})(LaunchType || (LaunchType = {}));
/**
 * Sends launch type event.
 */
export function sendLaunchEvent({ launchType }) {
    sendEvent({
        eventCategory: 'launch',
        eventAction: 'start',
        eventLabel: '',
    }, new Map([
        [GaMetricDimension.LAUNCH_TYPE, launchType],
    ]));
}
/**
 * Types of intent result dimension.
 */
export var IntentResultType;
(function (IntentResultType) {
    IntentResultType["CANCELED"] = "canceled";
    IntentResultType["CONFIRMED"] = "confirmed";
    IntentResultType["NOT_INTENT"] = "";
})(IntentResultType || (IntentResultType = {}));
/**
 * Types of gif recording result dimension.
 */
export var GifResultType;
(function (GifResultType) {
    GifResultType[GifResultType["NOT_GIF_RESULT"] = 0] = "NOT_GIF_RESULT";
    GifResultType[GifResultType["RETAKE"] = 1] = "RETAKE";
    GifResultType[GifResultType["SHARE"] = 2] = "SHARE";
    GifResultType[GifResultType["SAVE"] = 3] = "SAVE";
})(GifResultType || (GifResultType = {}));
/**
 * Types of recording in video mode.
 */
export var RecordType;
(function (RecordType) {
    RecordType[RecordType["NOT_RECORDING"] = 0] = "NOT_RECORDING";
    RecordType[RecordType["NORMAL_VIDEO"] = 1] = "NORMAL_VIDEO";
    RecordType[RecordType["GIF"] = 2] = "GIF";
    RecordType[RecordType["TIME_LAPSE"] = 3] = "TIME_LAPSE";
})(RecordType || (RecordType = {}));
/**
 * Types of different ways to trigger shutter button.
 */
export var ShutterType;
(function (ShutterType) {
    ShutterType["ASSISTANT"] = "assistant";
    ShutterType["KEYBOARD"] = "keyboard";
    ShutterType["MOUSE"] = "mouse";
    ShutterType["TOUCH"] = "touch";
    ShutterType["UNKNOWN"] = "unknown";
    ShutterType["VOLUME_KEY"] = "volume-key";
})(ShutterType || (ShutterType = {}));
/**
 * Sends capture type event.
 */
export function sendCaptureEvent({ facing, duration = 0, resolution, intentResult = IntentResultType.NOT_INTENT, shutterType, isVideoSnapshot = false, everPaused = false, recordType = RecordType.NOT_RECORDING, gifResult = GifResultType.NOT_GIF_RESULT, resolutionLevel, aspectRatioSet, timeLapseSpeed = 0, }) {
    function condState(states, cond, strict = false) {
        // Return the first existing state among the given states only if
        // there is no gate condition or the condition is met.
        const prerequisite = cond === undefined || state.get(cond);
        if (!prerequisite) {
            return strict ? '' : 'n/a';
        }
        return states.find((s) => state.get(s)) ?? 'n/a';
    }
    sendEvent({
        eventCategory: 'capture',
        eventAction: condState(Object.values(Mode)),
        eventLabel: facing,
        eventValue: duration,
    }, new Map([
        // Skips 3rd dimension for obsolete 'sound' state.
        [GaMetricDimension.MIRROR, condState([State.MIRROR])],
        [
            GaMetricDimension.GRID,
            condState([State.GRID_3x3, State.GRID_4x4, State.GRID_GOLDEN], State.GRID),
        ],
        [
            GaMetricDimension.TIMER,
            condState([State.TIMER_3SEC, State.TIMER_10SEC], State.TIMER),
        ],
        [
            GaMetricDimension.MICROPHONE,
            condState([State.MIC], Mode.VIDEO, true),
        ],
        [GaMetricDimension.MAXIMIZED, condState([State.MAX_WND])],
        [GaMetricDimension.TALL_ORIENTATION, condState([State.TALL])],
        [GaMetricDimension.RESOLUTION, resolution.toString()],
        [
            GaMetricDimension.FPS,
            condState([State.FPS_30, State.FPS_60], Mode.VIDEO, true),
        ],
        [GaMetricDimension.INTENT_RESULT, intentResult],
        [GaMetricDimension.SHUTTER_TYPE, shutterType],
        [GaMetricDimension.IS_VIDEO_SNAPSHOT, boolToIntString(isVideoSnapshot)],
        [GaMetricDimension.EVER_PAUSED, boolToIntString(everPaused)],
        [GaMetricDimension.RECORD_TYPE, String(recordType)],
        [GaMetricDimension.GIF_RESULT, String(gifResult)],
        [GaMetricDimension.DURATION, String(duration)],
        [GaMetricDimension.RESOLUTION_LEVEL, resolutionLevel],
        [GaMetricDimension.ASPECT_RATIO_SET, String(aspectRatioSet)],
        [GaMetricDimension.TIME_LAPSE_SPEED, String(timeLapseSpeed)],
    ]));
}
/**
 * Sends perf type event.
 */
export function sendPerfEvent({ event, duration, perfInfo = {} }) {
    const resolution = perfInfo.resolution ?? '';
    const facing = perfInfo.facing ?? '';
    sendEvent({
        eventCategory: 'perf',
        eventAction: event,
        eventLabel: facing,
        eventValue: duration,
    }, new Map([
        [GaMetricDimension.RESOLUTION, `${resolution}`],
    ]));
}
/**
 * Sends intent type event.
 */
export function sendIntentEvent({ intent, result }) {
    const { mode, shouldHandleResult, shouldDownScale, isSecure } = intent;
    sendEvent({
        eventCategory: 'intent',
        eventAction: mode,
        eventLabel: result,
    }, new Map([
        [GaMetricDimension.INTENT_RESULT, result],
        [
            GaMetricDimension.SHOULD_HANDLE_RESULT,
            boolToIntString(shouldHandleResult),
        ],
        [GaMetricDimension.SHOULD_DOWN_SCALE, boolToIntString(shouldDownScale)],
        [GaMetricDimension.IS_SECURE, boolToIntString(isSecure)],
    ]));
}
/**
 * Sends error type event.
 */
export function sendErrorEvent({ type, level, errorName, fileName, funcName, lineNo, colNo }) {
    sendEvent({
        eventCategory: 'error',
        eventAction: type,
        eventLabel: level,
    }, new Map([
        [GaMetricDimension.ERROR_NAME, errorName],
        [GaMetricDimension.FILENAME, fileName],
        [GaMetricDimension.FUNC_NAME, funcName],
        [GaMetricDimension.LINE_NO, lineNo],
        [GaMetricDimension.COL_NO, colNo],
    ]));
}
/**
 * Sends the barcode enabled event.
 */
export function sendBarcodeEnabledEvent() {
    sendEvent({
        eventCategory: 'barcode',
        eventAction: 'enable',
    });
}
/**
 * Types of the decoded barcode content.
 */
export var BarcodeContentType;
(function (BarcodeContentType) {
    BarcodeContentType["TEXT"] = "text";
    BarcodeContentType["URL"] = "url";
})(BarcodeContentType || (BarcodeContentType = {}));
/**
 * Sends the barcode detected event.
 */
export function sendBarcodeDetectedEvent({ contentType }) {
    sendEvent({
        eventCategory: 'barcode',
        eventAction: 'detect',
        eventLabel: contentType,
    });
}
/**
 * Sends the open ptz panel event.
 */
export function sendOpenPTZPanelEvent(capabilities) {
    sendEvent({
        eventCategory: 'ptz',
        eventAction: 'open-panel',
    }, new Map([
        [GaMetricDimension.SUPPORT_PAN, boolToIntString(capabilities.pan)],
        [GaMetricDimension.SUPPORT_TILT, boolToIntString(capabilities.tilt)],
        [GaMetricDimension.SUPPORT_ZOOM, boolToIntString(capabilities.zoom)],
    ]));
}
export var DocScanFixType;
(function (DocScanFixType) {
    DocScanFixType[DocScanFixType["NONE"] = 0] = "NONE";
    DocScanFixType[DocScanFixType["CORNER"] = 1] = "CORNER";
    DocScanFixType[DocScanFixType["ROTATION"] = 2] = "ROTATION";
})(DocScanFixType || (DocScanFixType = {}));
export var DocScanResultActionType;
(function (DocScanResultActionType) {
    DocScanResultActionType["CANCEL"] = "cancel";
    DocScanResultActionType["SAVE_AS_PDF"] = "save-as-pdf";
    DocScanResultActionType["SAVE_AS_PHOTO"] = "save-as-photo";
    DocScanResultActionType["SHARE"] = "share";
})(DocScanResultActionType || (DocScanResultActionType = {}));
/**
 * Sends document scanning result event. The actions will either remove all
 * pages (cancel) or generate a file from pages (save/share).
 */
export function sendDocScanResultEvent(action, fixType, fixCount, pageCount) {
    sendEvent({
        eventCategory: 'doc-scan',
        eventAction: action,
        eventValue: fixCount,
    }, new Map([
        [GaMetricDimension.DOC_FIX_TYPE, String(fixType)],
        [GaMetricDimension.DOC_PAGE_COUNT, String(pageCount)],
    ]));
}
export var DocScanActionType;
(function (DocScanActionType) {
    DocScanActionType["ADD_PAGE"] = "add-page";
    DocScanActionType["DELETE_PAGE"] = "delete-page";
    DocScanActionType["FIX"] = "fix";
})(DocScanActionType || (DocScanActionType = {}));
/**
 * Sends document scanning event.
 */
export function sendDocScanEvent(action) {
    sendEvent({
        eventCategory: 'doc-scan',
        eventAction: action,
    });
}
export var LowStorageActionType;
(function (LowStorageActionType) {
    LowStorageActionType["MANAGE_STORAGE_AUTO_STOP"] = "manage-storage-auto-stop";
    LowStorageActionType["MANAGE_STORAGE_CANNOT_START"] = "manage-storage-cannot-start";
    LowStorageActionType["SHOW_AUTO_STOP_DIALOG"] = "show-auto-stop-dialog";
    LowStorageActionType["SHOW_CANNOT_START_DIALOG"] = "show-cannot-start-dialog";
    LowStorageActionType["SHOW_WARNING_MSG"] = "show-warning-msg";
})(LowStorageActionType || (LowStorageActionType = {}));
/**
 * Sends low-storage handling event.
 */
export function sendLowStorageEvent(action) {
    sendEvent({
        eventCategory: 'low-storage',
        eventAction: action,
    });
}
function boolToIntString(b) {
    return b ? '1' : '0';
}
// The returned value reflects the logging consent option in OS settings.
async function checkCanSendMetrics() {
    return !PRODUCTION ||
        await ChromeHelper.getInstance().isMetricsAndCrashReportingEnabled();
}
/**
 * Set of Top 20 Popular Camera Peripherals' Module ID from
 * go/usb-popularity-study. Since 4 cameras of Sonix have the same module ids,
 * they are aggregated to `Cam_Sonix`.
 */
export class PopularCamPeripheralSet {
    constructor() {
        this.moduleIDSet = new Set([
            '046d:085b',
            '046d:0825',
            '0c45:636b',
            '0c45:6366',
            '046d:0843',
            '046d:082d',
            '046d:0892',
            '046d:08e5',
            '05a3:9331',
            '046d:085e',
            '046d:085c',
            '1b3f:2002',
            '1d6c:0103',
            '046d:082c',
            '1778:d021',
            '07ca:313a',
            '045e:0810', // LifeCamHD3000_Microsoft
        ]);
    }
    /**
     * Returns the original `moduleId` if it exists in `moduleIDSet`. If not,
     * returns 'others'.
     */
    getMaskedId(moduleId) {
        if (this.moduleIDSet.has(moduleId)) {
            return moduleId;
        }
        return 'others';
    }
}
const moduleIDSet = new PopularCamPeripheralSet();
/**
 * Sends camera opening event.
 *
 * @param moduleId Camera Module ID in the format of 8 digits hex string, such
 *     as abcd:1234.
 */
export function sendOpenCameraEvent(moduleId) {
    const newModuleId = moduleId === null ? 'MIPI' : moduleIDSet.getMaskedId(moduleId);
    sendEvent({
        eventCategory: 'open-camera',
        eventAction: 'open-camera',
    }, new Map([
        [GaMetricDimension.CAMERA_MODULE_ID, newModuleId],
    ]));
}
/**
 * Updates the memory usage and session behavior value to untrusted_ga_helpers.
 *
 * @param updatedValue Updated memory usage dimensions value to be updated.
 */
export function updateMemoryUsageEventDimensions(updatedValue) {
    // No caller uses the returned promise.
    void (async () => {
        const gaHelper = await getGaHelper();
        await gaHelper.updateMemoryUsageEventDimensions(updatedValue);
    })();
}
