// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ThemeActionName } from './theme_actions.js';
export function darkModeEnabledReducer(state, action, _) {
    switch (action.name) {
        case ThemeActionName.SET_DARK_MODE_ENABLED:
            return action.enabled;
        default:
            return state;
    }
}
export function colorModeAutoScheduleEnabledReducer(state, action, _) {
    switch (action.name) {
        case ThemeActionName.SET_COLOR_MODE_AUTO_SCHEDULE_ENABLED:
            return action.enabled;
        default:
            return state;
    }
}
export function colorSchemeSelectedReducer(state, action, _) {
    switch (action.name) {
        case ThemeActionName.SET_COLOR_SCHEME:
            return action.colorScheme;
        default:
            return state;
    }
}
export function sampleColorSchemesReducer(state, action, _) {
    switch (action.name) {
        case ThemeActionName.SET_SAMPLE_COLOR_SCHEMES:
            return action.sampleColorSchemes;
        default:
            return state;
    }
}
export function staticColorSelectedReducer(state, action, _) {
    switch (action.name) {
        case ThemeActionName.SET_STATIC_COLOR:
            return action.staticColor;
        default:
            return state;
    }
}
export const themeReducers = {
    colorModeAutoScheduleEnabled: colorModeAutoScheduleEnabledReducer,
    darkModeEnabled: darkModeEnabledReducer,
    colorSchemeSelected: colorSchemeSelectedReducer,
    sampleColorSchemes: sampleColorSchemesReducer,
    staticColorSelected: staticColorSelectedReducer,
};
