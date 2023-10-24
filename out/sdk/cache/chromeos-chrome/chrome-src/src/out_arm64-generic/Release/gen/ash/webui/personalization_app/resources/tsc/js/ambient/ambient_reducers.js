// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { AmbientActionName } from './ambient_actions.js';
export function albumsReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_ALBUMS:
            return action.albums;
        case AmbientActionName.SET_ALBUM_SELECTED:
            if (!state) {
                return state;
            }
            // An albums in AmbientState.albums is mutated by setting checked
            // to True/False, have to return a copy of albums state so that
            // Polymer knows there is an update.
            return [...state];
        default:
            return state;
    }
}
export function ambientModeEnabledReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_AMBIENT_MODE_ENABLED:
            return action.enabled;
        default:
            return state;
    }
}
export function ambientThemeReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_AMBIENT_THEME:
            return action.ambientTheme;
        default:
            return state;
    }
}
export function previewsReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_PREVIEWS:
            return action.previews;
        default:
            return state;
    }
}
export function screenSaverDurationReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_SCREEN_SAVER_DURATION:
            return action.minutes;
        default:
            return state;
    }
}
export function temperatureUnitReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_TEMPERATURE_UNIT:
            return action.temperatureUnit;
        default:
            return state;
    }
}
export function topicSourceReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_TOPIC_SOURCE:
            return action.topicSource;
        default:
            return state;
    }
}
export function ambientUiVisibilityReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_AMBIENT_UI_VISIBILITY:
            return action.ambientUiVisibility;
        default:
            return state;
    }
}
export function shouldShowTimeOfDayBannerReducer(state, action, _) {
    switch (action.name) {
        case AmbientActionName.SET_SHOULD_SHOW_TIME_OF_DAY_BANNER:
            return action.shouldShowTimeOfDayBanner;
        default:
            return state;
    }
}
export const ambientReducers = {
    albums: albumsReducer,
    ambientModeEnabled: ambientModeEnabledReducer,
    ambientTheme: ambientThemeReducer,
    duration: screenSaverDurationReducer,
    previews: previewsReducer,
    temperatureUnit: temperatureUnitReducer,
    topicSource: topicSourceReducer,
    ambientUiVisibility: ambientUiVisibilityReducer,
    shouldShowTimeOfDayBanner: shouldShowTimeOfDayBannerReducer,
};
