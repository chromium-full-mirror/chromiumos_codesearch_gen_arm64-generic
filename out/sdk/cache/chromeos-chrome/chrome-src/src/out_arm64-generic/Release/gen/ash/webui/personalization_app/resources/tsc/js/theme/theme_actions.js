// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines the actions to change theme state.
 */
export var ThemeActionName;
(function (ThemeActionName) {
    ThemeActionName["SET_DARK_MODE_ENABLED"] = "set_dark_mode_enabled";
    ThemeActionName["SET_COLOR_MODE_AUTO_SCHEDULE_ENABLED"] = "set_color_mode_auto_schedule_enabled";
    ThemeActionName["SET_COLOR_SCHEME"] = "set_color_scheme";
    ThemeActionName["SET_SAMPLE_COLOR_SCHEMES"] = "set_sample_color_schemes";
    ThemeActionName["SET_STATIC_COLOR"] = "set_static_color";
})(ThemeActionName || (ThemeActionName = {}));
export function setDarkModeEnabledAction(enabled) {
    return { name: ThemeActionName.SET_DARK_MODE_ENABLED, enabled };
}
export function setColorModeAutoScheduleEnabledAction(enabled) {
    return { name: ThemeActionName.SET_COLOR_MODE_AUTO_SCHEDULE_ENABLED, enabled };
}
export function setColorSchemeAction(colorScheme) {
    return { name: ThemeActionName.SET_COLOR_SCHEME, colorScheme };
}
export function setSampleColorSchemesAction(sampleColorSchemes) {
    return { name: ThemeActionName.SET_SAMPLE_COLOR_SCHEMES, sampleColorSchemes };
}
export function setStaticColorAction(staticColor) {
    return { name: ThemeActionName.SET_STATIC_COLOR, staticColor };
}
