// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from './assert.js';
import { ExpertOption } from './expert.js';
import { Mode, PerfEvent, ViewName, } from './type.js';
export var State;
(function (State) {
    State["CAMERA_CONFIGURING"] = "camera-configuring";
    State["DOC_MODE_REVIEWING"] = "doc-mode-reviewing";
    State["ENABLE_GIF_RECORDING"] = "enable-gif-recording";
    State["ENABLE_PTZ"] = "enable-ptz";
    State["ENABLE_SCAN_BARCODE"] = "enable-scan-barcode";
    State["FPS_30"] = "fps-30";
    State["FPS_60"] = "fps-60";
    State["GRID"] = "grid";
    /* eslint-disable @typescript-eslint/naming-convention */
    State["GRID_3x3"] = "grid-3x3";
    State["GRID_4x4"] = "grid-4x4";
    /* eslint-enable @typescript-eslint/naming-convention */
    State["GRID_GOLDEN"] = "grid-golden";
    State["HAS_BACK_CAMERA"] = "has-back-camera";
    State["HAS_FRONT_CAMERA"] = "has-front-camera";
    State["HAS_PAN_SUPPORT"] = "has-pan-support";
    State["HAS_TILT_SUPPORT"] = "has-tilt-support";
    State["HAS_ZOOM_SUPPORT"] = "has-zoom-support";
    // Hides all toasts, nudges and tooltips for tests that relies on visual and
    // might be affected by these UIs appearing at incorrect timing.
    State["HIDE_FLOATING_UI_FOR_TESTING"] = "hide-floating-ui-for-testing";
    State["INTENT"] = "intent";
    State["KEYBOARD_NAVIGATION"] = "keyboard-navigation";
    State["MAX_WND"] = "max-wnd";
    State["MIC"] = "mic";
    State["MIRROR"] = "mirror";
    State["MULTI_CAMERA"] = "multi-camera";
    State["PLAYING_RESULT_VIDEO"] = "playing-result-video";
    State["RECORD_TYPE_GIF"] = "record-type-gif";
    State["RECORD_TYPE_NORMAL"] = "record-type-normal";
    State["RECORD_TYPE_TIME_LAPSE"] = "record-type-time-lapse";
    // Starts/Ends when start/stop event of MediaRecorder is triggered.
    State["RECORDING"] = "recording";
    // Binds with paused state of MediaRecorder.
    State["RECORDING_PAUSED"] = "recording-paused";
    // Controls appearance of paused/resumed UI.
    State["RECORDING_UI_PAUSED"] = "recording-ui-paused";
    State["SHOULD_HANDLE_INTENT_RESULT"] = "should-handle-intent-result";
    State["SHOW_GIF_RECORDING_OPTION"] = "show-gif-recording-option";
    State["SHUTTER_PROGRESSING"] = "shutter-progressing";
    State["SNAPSHOTTING"] = "snapshotting";
    State["STREAMING"] = "streaming";
    State["SUSPEND"] = "suspend";
    State["TABLET"] = "tablet";
    State["TABLET_LANDSCAPE"] = "tablet-landscape";
    State["TAKING"] = "taking";
    State["TALL"] = "tall";
    State["TIMER"] = "timer";
    State["TIMER_10SEC"] = "timer-10s";
    State["TIMER_3SEC"] = "timer-3s";
    State["USE_FAKE_CAMERA"] = "use-fake-camera";
})(State || (State = {}));
// All the string enum types that can be accepted by |get| / |set|.
const stateEnums = [ExpertOption, Mode, PerfEvent, State, ViewName];
const stateValues = new Set(stateEnums.flatMap((s) => Object.values(s)));
/**
 * Asserts input string is valid state.
 */
export function assertState(s) {
    // This is to workaround current TypeScript limitation on Set.has.
    // See https://github.com/microsoft/TypeScript/issues/26255
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    assert(stateValues.has(s), `No such state: ${s}`);
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return s;
}
const allObservers = new Map();
/**
 * Adds observer function to be called on any state change.
 *
 * @param state State to be observed.
 * @param observer Observer function called with newly changed value.
 */
export function addObserver(state, observer) {
    let observers = allObservers.get(state);
    if (observers === undefined) {
        observers = new Set();
        allObservers.set(state, observers);
    }
    observers.add(observer);
}
/**
 * Adds observer function to be called when the state value is changed to true.
 * Returns the wrapped observer in case it needs to be removed later.
 *
 * @param state State to be observed.
 * @param observer Observer function called with newly changed value.
 */
export function addEnabledStateObserver(state, observer) {
    const wrappedObserver = (val, perfInfo) => {
        if (val) {
            observer(val, perfInfo);
        }
    };
    addObserver(state, wrappedObserver);
    return wrappedObserver;
}
/**
 * Adds one-time observer function to be called on any state change.
 *
 * @param state State to be observed.
 * @param observer Observer function called with newly changed value.
 */
export function addOneTimeObserver(state, observer) {
    const wrappedObserver = (...args) => {
        observer(...args);
        removeObserver(state, wrappedObserver);
    };
    addObserver(state, wrappedObserver);
}
/**
 * Removes observer function to be called on state change.
 *
 * @param state State to remove observer from.
 * @param observer Observer function to be removed.
 * @return Whether the observer is in the set and is removed successfully or
 *     not.
 */
export function removeObserver(state, observer) {
    const observers = allObservers.get(state);
    if (observers === undefined) {
        return false;
    }
    return observers.delete(observer);
}
/**
 * Gets if the specified state is on or off.
 *
 * @param state State to be checked.
 * @return Whether the state is on or off.
 */
export function get(state) {
    return document.body.classList.contains(state);
}
/**
 * Sets the specified state on or off. Optionally, pass the information for
 * performance measurement.
 *
 * @param state State to be set.
 * @param val True to set the state on, false otherwise.
 * @param perfInfo Optional information of this state for performance
 *     measurement.
 */
export function set(state, val, perfInfo = {}) {
    const oldVal = get(state);
    if (oldVal === val) {
        return;
    }
    document.body.classList.toggle(state, val);
    const observers = allObservers.get(state) ?? [];
    for (const observer of observers) {
        observer(val, perfInfo);
    }
}
