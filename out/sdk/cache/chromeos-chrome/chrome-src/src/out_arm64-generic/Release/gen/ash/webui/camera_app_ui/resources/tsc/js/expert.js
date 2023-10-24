// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as localStorage from './models/local_storage.js';
import * as state from './state.js';
import { LocalStorageKey } from './type.js';
export var ExpertOption;
(function (ExpertOption) {
    ExpertOption["CUSTOM_VIDEO_PARAMETERS"] = "custom-video-parameters";
    ExpertOption["ENABLE_FPS_PICKER_FOR_BUILTIN"] = "enable-fps-picker-for-builtin";
    ExpertOption["ENABLE_FULL_SIZED_VIDEO_SNAPSHOT"] = "enable-full-sized-video-snapshot";
    ExpertOption["ENABLE_MULTISTREAM_RECORDING"] = "enable-multistream-recording";
    ExpertOption["ENABLE_MULTISTREAM_RECORDING_CHROME"] = "enable-multistream-recording-chrome";
    ExpertOption["ENABLE_PTZ_FOR_BUILTIN"] = "enable-ptz-for-builtin";
    ExpertOption["EXPERT"] = "expert";
    ExpertOption["PRINT_PERFORMANCE_LOGS"] = "print-performance-logs";
    ExpertOption["SAVE_METADATA"] = "save-metadata";
    ExpertOption["SHOW_ALL_RESOLUTIONS"] = "show-all-resolutions";
    ExpertOption["SHOW_METADATA"] = "show-metadata";
})(ExpertOption || (ExpertOption = {}));
/**
 * Enables or disables expert mode.
 *
 * @param enable Whether to enable or disable expert mode.
 */
export function setExpertMode(enable) {
    state.set(ExpertOption.EXPERT, enable);
    localStorage.set(LocalStorageKey.EXPERT_MODE, enable);
}
/**
 * Toggles expert mode.
 */
export function toggleExpertMode() {
    // TODO(b/231535710): When toggle expert mode, also check the state of all
    // options under expert mode
    const newState = !state.get(ExpertOption.EXPERT);
    setExpertMode(newState);
}
/**
 * Get state value for expert mode and expert options.
 *
 * @param option Option state to be checked.
 */
export function isEnabled(option) {
    if (!state.get(ExpertOption.EXPERT)) {
        return false;
    }
    return state.get(option);
}
/**
 * Adds observer function to be called on expert options.
 *
 * @param option Option state to be observed.
 * @param observer Observer function called with newly changed value.
 */
export function addObserver(option, observer) {
    // Notify when isEnabled() value for option is changed
    state.addObserver(option, observer);
    state.addObserver(ExpertOption.EXPERT, (val, perfInfo) => {
        // When Expert value changes, isEnabled() value will only change when
        // the option value is true, otherwise, isEnabled() is always false
        if (state.get(option)) {
            observer(val, perfInfo);
        }
    });
}
