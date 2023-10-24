// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert, assertExists } from './assert.js';
/**
 * The GA library URL in trusted type.
 */
const gaLibraryURL = (() => {
    const staticUrlPolicy = assertExists(window.trustedTypes).createPolicy('ga-js-static', {
        createScriptURL: (_url) => '../js/lib/analytics.js',
    });
    return staticUrlPolicy.createScriptURL('');
})();
const SCHEMA_VERSION = '3';
/**
 * All dimensions for GA metrics.
 *
 * The following two documents should also be updated when the dimensions is
 * updated.
 *
 * * Camera App PDD (Privacy Design Document): go/cca-metrics-pdd.
 * * CCA GA Events & Dimensions sheet: go/cca-metrics-schema.
 */
export var GaMetricDimension;
(function (GaMetricDimension) {
    GaMetricDimension[GaMetricDimension["BOARD"] = 1] = "BOARD";
    GaMetricDimension[GaMetricDimension["OS_VERSION"] = 2] = "OS_VERSION";
    // Obsolete 'sound' state.
    // SOUND = 3,
    GaMetricDimension[GaMetricDimension["MIRROR"] = 4] = "MIRROR";
    GaMetricDimension[GaMetricDimension["GRID"] = 5] = "GRID";
    GaMetricDimension[GaMetricDimension["TIMER"] = 6] = "TIMER";
    GaMetricDimension[GaMetricDimension["MICROPHONE"] = 7] = "MICROPHONE";
    GaMetricDimension[GaMetricDimension["MAXIMIZED"] = 8] = "MAXIMIZED";
    GaMetricDimension[GaMetricDimension["TALL_ORIENTATION"] = 9] = "TALL_ORIENTATION";
    GaMetricDimension[GaMetricDimension["RESOLUTION"] = 10] = "RESOLUTION";
    GaMetricDimension[GaMetricDimension["FPS"] = 11] = "FPS";
    GaMetricDimension[GaMetricDimension["INTENT_RESULT"] = 12] = "INTENT_RESULT";
    GaMetricDimension[GaMetricDimension["SHOULD_HANDLE_RESULT"] = 13] = "SHOULD_HANDLE_RESULT";
    GaMetricDimension[GaMetricDimension["SHOULD_DOWN_SCALE"] = 14] = "SHOULD_DOWN_SCALE";
    GaMetricDimension[GaMetricDimension["IS_SECURE"] = 15] = "IS_SECURE";
    GaMetricDimension[GaMetricDimension["ERROR_NAME"] = 16] = "ERROR_NAME";
    GaMetricDimension[GaMetricDimension["FILENAME"] = 17] = "FILENAME";
    GaMetricDimension[GaMetricDimension["FUNC_NAME"] = 18] = "FUNC_NAME";
    GaMetricDimension[GaMetricDimension["LINE_NO"] = 19] = "LINE_NO";
    GaMetricDimension[GaMetricDimension["COL_NO"] = 20] = "COL_NO";
    GaMetricDimension[GaMetricDimension["SHUTTER_TYPE"] = 21] = "SHUTTER_TYPE";
    GaMetricDimension[GaMetricDimension["IS_VIDEO_SNAPSHOT"] = 22] = "IS_VIDEO_SNAPSHOT";
    GaMetricDimension[GaMetricDimension["EVER_PAUSED"] = 23] = "EVER_PAUSED";
    GaMetricDimension[GaMetricDimension["SUPPORT_PAN"] = 24] = "SUPPORT_PAN";
    GaMetricDimension[GaMetricDimension["SUPPORT_TILT"] = 25] = "SUPPORT_TILT";
    GaMetricDimension[GaMetricDimension["SUPPORT_ZOOM"] = 26] = "SUPPORT_ZOOM";
    // Obsolete
    // DOC_RESULT = 27,
    GaMetricDimension[GaMetricDimension["RECORD_TYPE"] = 28] = "RECORD_TYPE";
    GaMetricDimension[GaMetricDimension["GIF_RESULT"] = 29] = "GIF_RESULT";
    GaMetricDimension[GaMetricDimension["DURATION"] = 30] = "DURATION";
    GaMetricDimension[GaMetricDimension["SCHEMA_VERSION"] = 31] = "SCHEMA_VERSION";
    GaMetricDimension[GaMetricDimension["LAUNCH_TYPE"] = 32] = "LAUNCH_TYPE";
    GaMetricDimension[GaMetricDimension["DOC_FIX_TYPE"] = 33] = "DOC_FIX_TYPE";
    GaMetricDimension[GaMetricDimension["RESOLUTION_LEVEL"] = 34] = "RESOLUTION_LEVEL";
    GaMetricDimension[GaMetricDimension["ASPECT_RATIO_SET"] = 35] = "ASPECT_RATIO_SET";
    GaMetricDimension[GaMetricDimension["DOC_PAGE_COUNT"] = 36] = "DOC_PAGE_COUNT";
    GaMetricDimension[GaMetricDimension["TIME_LAPSE_SPEED"] = 37] = "TIME_LAPSE_SPEED";
    GaMetricDimension[GaMetricDimension["IS_TEST_IMAGE"] = 38] = "IS_TEST_IMAGE";
    GaMetricDimension[GaMetricDimension["DEVICE_PIXEL_RATIO"] = 39] = "DEVICE_PIXEL_RATIO";
    GaMetricDimension[GaMetricDimension["CAMERA_MODULE_ID"] = 40] = "CAMERA_MODULE_ID";
})(GaMetricDimension || (GaMetricDimension = {}));
export var Ga4MetricDimension;
(function (Ga4MetricDimension) {
    Ga4MetricDimension["ASPECT_RATIO_SET"] = "aspect_ratio_set";
    Ga4MetricDimension["BOARD"] = "board";
    Ga4MetricDimension["BROWSER_VERSION"] = "browser_version";
    Ga4MetricDimension["CAMERA_MODULE_ID"] = "camera_module_id";
    Ga4MetricDimension["COL_NO"] = "col_no";
    Ga4MetricDimension["DEVICE_PIXEL_RATIO"] = "device_pixel_ratio";
    Ga4MetricDimension["DOC_FIX_TYPE"] = "doc_fix_type";
    Ga4MetricDimension["DOC_PAGE_COUNT"] = "doc_page_count";
    Ga4MetricDimension["DURATION"] = "duration";
    Ga4MetricDimension["ERROR_NAME"] = "error_name";
    Ga4MetricDimension["EVENT_CATEGORY"] = "event_category";
    Ga4MetricDimension["EVENT_LABEL"] = "event_label";
    Ga4MetricDimension["EVER_PAUSED"] = "ever_paused";
    Ga4MetricDimension["FILENAME"] = "filename";
    Ga4MetricDimension["FPS"] = "fps";
    Ga4MetricDimension["FUNC_NAME"] = "func_name";
    Ga4MetricDimension["GIF_RESULT"] = "gif_result";
    Ga4MetricDimension["GRID"] = "grid";
    Ga4MetricDimension["INTENT_RESULT"] = "intent_result";
    Ga4MetricDimension["IS_SECURE"] = "is_secure";
    Ga4MetricDimension["IS_TEST_IMAGE"] = "is_test_image";
    Ga4MetricDimension["IS_VIDEO_SNAPSHOT"] = "is_video_snapshot";
    Ga4MetricDimension["LANGUAGE"] = "language";
    Ga4MetricDimension["LAUNCH_TYPE"] = "launch_type";
    Ga4MetricDimension["LINE_NO"] = "line_no";
    Ga4MetricDimension["MAXIMIZED"] = "maximized";
    Ga4MetricDimension["MEMORY_USAGE"] = "memory_usage";
    Ga4MetricDimension["MICROPHONE"] = "microphone";
    Ga4MetricDimension["MIRROR"] = "mirror";
    Ga4MetricDimension["OS_VERSION"] = "os_version";
    Ga4MetricDimension["RECORD_TYPE"] = "record_type";
    Ga4MetricDimension["RESOLUTION"] = "resolution";
    Ga4MetricDimension["RESOLUTION_LEVEL"] = "resolution_level";
    Ga4MetricDimension["SCHEMA_VERSION"] = "schema_version";
    Ga4MetricDimension["SCREEN_RESOLUTION"] = "screen_resolution";
    Ga4MetricDimension["SESSION_BEHAVIOR"] = "session_behavior";
    Ga4MetricDimension["SESSION_LENGTH"] = "session_length";
    Ga4MetricDimension["SHOULD_DOWN_SCALE"] = "should_down_scale";
    Ga4MetricDimension["SHOULD_HANDLE_RESULT"] = "should_handle_result";
    Ga4MetricDimension["SHUTTER_TYPE"] = "shutter_type";
    Ga4MetricDimension["SUPPORT_PAN"] = "support_pan";
    Ga4MetricDimension["SUPPORT_TILT"] = "support_tilt";
    Ga4MetricDimension["SUPPORT_ZOOM"] = "support_zoom";
    Ga4MetricDimension["TALL_ORIENTATION"] = "tall_orientation";
    Ga4MetricDimension["TIME_LAPSE_SPEED"] = "time_lapse_speed";
    Ga4MetricDimension["TIMER"] = "timer";
})(Ga4MetricDimension || (Ga4MetricDimension = {}));
let gaBaseDimensions = null;
/**
 * Initializes GA for sending metrics.
 *
 * @param initParams The parameters to initialize GA.
 * @param initParams.id The GA tracker ID to send events.
 * @param initParams.baseDimensions The base dimensions that will be sent in
 * every event.
 * @param initParams.clientId The client ID for the current client for GA.
 * @param setClientId The callback to store client id for GA.
 */
function initGa(initParams, setClientId) {
    // GA initialization function which is copied and inlined from
    // https://developers.google.com/analytics/devguides/collection/analyticsjs.
    window.GoogleAnalyticsObject = 'ga';
    // Creates an initial ga() function.
    // The queued commands will be executed once analytics.js loads.
    //
    // The type of .ga on Window doesn't include undefined, but since this part
    // is setup code for ga, it's possible to have a undefined case here. Disable
    // eslint which would think the condition is always true.
    //
    // The type assertion is also needed since this part of invariant is
    // maintained by ga itself, and all our usage only use the function call
    // interface.
    /* eslint-disable
         @typescript-eslint/strict-boolean-expressions,
         @typescript-eslint/consistent-type-assertions */
    window.ga = window.ga || ((...args) => {
        (window.ga.q = window.ga.q || []).push(args);
    });
    /* eslint-enable
         @typescript-eslint/strict-boolean-expressions,
         @typescript-eslint/consistent-type-assertions */
    window.ga.l = Date.now();
    const a = document.createElement('script');
    const m = document.getElementsByTagName('script')[0];
    a.async = true;
    // TypeScript doesn't support setting .src to TrustedScriptURL yet.
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    a.src = gaLibraryURL;
    assert(m.parentNode !== null);
    m.parentNode.insertBefore(a, m);
    const { id, baseDimensions, clientId } = initParams;
    gaBaseDimensions = baseDimensions;
    window.ga('create', id, {
        storage: 'none',
        clientId: clientId,
    });
    window.ga((tracker) => {
        assert(tracker !== undefined);
        setClientId(tracker.get('clientId'));
    });
    // By default GA uses a fake image and sets its source to the target URL to
    // record metrics. Since requesting remote image violates the policy of
    // a platform app, use navigator.sendBeacon() instead.
    window.ga('set', 'transport', 'beacon');
    // By default GA only accepts "http://" and "https://" protocol. Bypass the
    // check here since we are "chrome-extension://".
    window.ga('set', 'checkProtocolTask', null);
    // GA automatically derives geographical data from the IP address. Truncate
    // the IP address to avoid violating privacy policy.
    window.ga('set', 'anonymizeIp', true);
}
/**
 * `ga4Enabled` and `measurementProtocolUrl` are used in tests.
 */
let ga4Enabled = true;
let measurementProtocolUrl = 'https://www.google-analytics.com/mp/collect';
let ga4Config = null;
/**
 * Initializes GA4 for sending metrics.
 *
 * @param initParams The parameters to initialize GA4.
 * @param initParams.apiSecret The API secret to send events via Measurement
 * Protocol.
 * @param initParams.baseParams The event parameters that will be sent in every
 * event.
 * @param initParams.clientId The client ID for the current client for GA4.
 * @param initParams.measurementId The GA4 measurement ID.
 * @param initParams.sessionId The session ID in every event.
 * @param setClientId The callback to store client id for GA4.
 */
function initGa4(initParams, setClientId) {
    let { clientId, sessionId } = initParams;
    if (clientId === undefined || clientId === '') {
        clientId = generateGa4ClientId();
    }
    setClientId(clientId);
    if (sessionId === undefined || sessionId === '') {
        sessionId = generateGa4SessionId();
    }
    ga4Config = {
        ...initParams,
        clientId,
        sessionId,
    };
}
function generateGa4ClientId() {
    const randomNumber = Math.round(Math.random() * 0x7fffffff);
    const timestamp = Math.round(Date.now() / 1000);
    return `${randomNumber}.${timestamp}`;
}
function generateGa4SessionId() {
    return String(Date.now());
}
/**
 * Sends an "end_session" event when CCA is closed or refreshed.
 */
function registerGa4EndSessionEvent() {
    window.addEventListener('unload', () => {
        sendGa4Event({
            name: 'end_session',
            eventParams: {
                [Ga4MetricDimension.SESSION_LENGTH]: window.performance.now().toFixed(),
            },
            beacon: true,
        });
    });
}
let memoryEventDimensions = null;
/**
 * Sends a "memory_usage" event when CCA is closed or refreshed.
 */
function registerGa4MemoryUsageEvent() {
    window.addEventListener('unload', () => {
        if (memoryEventDimensions !== null) {
            const { memoryUsage, sessionBehavior } = memoryEventDimensions;
            sendGa4Event({
                name: 'memory_usage',
                eventParams: {
                    [Ga4MetricDimension.MEMORY_USAGE]: String(memoryUsage),
                    [Ga4MetricDimension.SESSION_BEHAVIOR]: String(sessionBehavior),
                },
                beacon: true,
            });
        }
    });
}
/**
 * Updates the memory usage and session behavior value which will be sent at the
 * end of the session.
 *
 * @param updatedValue New updated dimensions value to be set.
 */
function updateMemoryUsageEventDimensions(updatedValue) {
    memoryEventDimensions = updatedValue;
}
/**
 * Sends an event to GA.
 *
 * @param params The parameters object.
 * @param params.baseEvent The basic event properties.
 * @param params.dimensions Custom dimensions of the event.
 */
function sendGaEvent({ baseEvent, dimensions }) {
    assert(gaBaseDimensions !== null);
    const event = { ...baseEvent };
    const mergedDimensions = [
        ...gaBaseDimensions,
        ...dimensions,
        [GaMetricDimension.DEVICE_PIXEL_RATIO, getDevicePixelRatio()],
        [GaMetricDimension.OS_VERSION, getOsVersion()],
        [GaMetricDimension.SCHEMA_VERSION, SCHEMA_VERSION],
    ];
    for (const [key, value] of mergedDimensions) {
        event[`dimension${key}`] = value;
    }
    window.ga('send', 'event', event);
}
/**
 * Sends an event to GA4.
 *
 * @param params The parameters object.
 * @param params.name The name of the event.
 * @param params.eventParams The event parameters (custom dimensions) of the
 *     event.
 * @param params.beacon Send the event via `navigator.sendBeacon`.
 */
function sendGa4Event({ name, eventParams, beacon = false, }) {
    if (!ga4Enabled) {
        return;
    }
    const { apiSecret, baseParams, clientId, measurementId, sessionId } = assertExists(ga4Config);
    const params = {
        ...baseParams,
        ...eventParams,
        [Ga4MetricDimension.DEVICE_PIXEL_RATIO]: getDevicePixelRatio(),
        [Ga4MetricDimension.LANGUAGE]: navigator.language,
        [Ga4MetricDimension.OS_VERSION]: getOsVersion(),
        [Ga4MetricDimension.SCHEMA_VERSION]: SCHEMA_VERSION,
        [Ga4MetricDimension.SCREEN_RESOLUTION]: getScreenResolution(),
        // Set '1' here as it's enough for GA4 to generate the metrics for n-day
        // active users and we don't want to reimplement how gtag.js calculate the
        // engagement time for each event.
        // See
        // https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports.
        ['engagement_time_msec']: '1',
        // Send this to create a session in GA4.
        // See
        // https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events?client_type=gtag#recommended_parameters_for_reports.
        ['session_id']: sessionId,
    };
    const url = `${measurementProtocolUrl}?measurement_id=${measurementId}&api_secret=${apiSecret}`;
    const body = JSON.stringify({
        ['client_id']: clientId,
        events: [{ name, params }],
    });
    if (beacon) {
        navigator.sendBeacon(url, body);
    }
    else {
        void fetch(url, { method: 'POST', body });
    }
}
/**
 * Sets if GA can send metrics.
 *
 * @param id The GA tracker ID.
 * @param enabled True if the metrics is enabled.
 */
function setGaEnabled(id, enabled) {
    window[`ga-disable-${id}`] = !enabled;
}
/**
 * Sets if GA4 can send metrics.
 *
 * @param enabled True if the metrics is enabled.
 */
function setGa4Enabled(enabled) {
    ga4Enabled = enabled;
}
function getDevicePixelRatio() {
    return window.devicePixelRatio.toFixed(2);
}
function getOsVersion() {
    return navigator.appVersion.match(/CrOS\s+\S+\s+([\d.]+)/)?.[1] ?? '';
}
function getScreenResolution() {
    const { width, height } = window.screen;
    return `${width}x${height}`;
}
/**
 * Change the URL that measurement protocol used to send events. This should
 * be only called in tests.
 */
function setMeasurementProtocolUrl(url) {
    measurementProtocolUrl = url;
}
export { initGa, initGa4, registerGa4EndSessionEvent, registerGa4MemoryUsageEvent, sendGaEvent, sendGa4Event, setGaEnabled, setGa4Enabled, setMeasurementProtocolUrl, updateMemoryUsageEventDimensions, };
