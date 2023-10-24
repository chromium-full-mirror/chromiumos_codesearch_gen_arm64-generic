// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines the actions to update keyboard backlight settings.
 */
export var KeyboardBacklightActionName;
(function (KeyboardBacklightActionName) {
    KeyboardBacklightActionName["SET_CURRENT_BACKLIGHT_STATE"] = "set_current_backlight_state";
    KeyboardBacklightActionName["SET_SHOULD_SHOW_NUDGE"] = "set_should_show_nudge";
    KeyboardBacklightActionName["SET_WALLPAPER_COLOR"] = "set_wallpaper_color";
})(KeyboardBacklightActionName || (KeyboardBacklightActionName = {}));
/**
 * Sets the current value of the backlight state.
 */
export function setCurrentBacklightStateAction(currentBacklightState) {
    return {
        name: KeyboardBacklightActionName.SET_CURRENT_BACKLIGHT_STATE,
        currentBacklightState,
    };
}
export function setShouldShowNudgeAction(shouldShowNudge) {
    return {
        name: KeyboardBacklightActionName.SET_SHOULD_SHOW_NUDGE,
        shouldShowNudge,
    };
}
/**
 * Sets the current value of the wallpaper extracted color.
 */
export function setWallpaperColorAction(wallpaperColor) {
    return {
        name: KeyboardBacklightActionName.SET_WALLPAPER_COLOR,
        wallpaperColor,
    };
}
