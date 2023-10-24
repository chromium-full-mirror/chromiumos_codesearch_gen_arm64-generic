// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { KeyboardBacklightActionName } from './keyboard_backlight_actions.js';
export function currentBacklightStateReducer(state, action, _) {
    switch (action.name) {
        case KeyboardBacklightActionName.SET_CURRENT_BACKLIGHT_STATE:
            return action.currentBacklightState;
        default:
            return state;
    }
}
export function shouldShowNudgeReducer(state, action, _) {
    switch (action.name) {
        case KeyboardBacklightActionName.SET_SHOULD_SHOW_NUDGE:
            return action.shouldShowNudge;
        default:
            return state;
    }
}
export function wallpaperColorReducer(state, action, _) {
    switch (action.name) {
        case KeyboardBacklightActionName.SET_WALLPAPER_COLOR:
            return action.wallpaperColor;
        default:
            return state;
    }
}
export const keyboardBacklightReducers = {
    currentBacklightState: currentBacklightStateReducer,
    shouldShowNudge: shouldShowNudgeReducer,
    wallpaperColor: wallpaperColorReducer,
};
