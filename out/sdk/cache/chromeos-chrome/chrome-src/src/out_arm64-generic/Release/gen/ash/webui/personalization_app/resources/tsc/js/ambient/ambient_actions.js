// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Defines the actions to change ambient state.
 */
export var AmbientActionName;
(function (AmbientActionName) {
    AmbientActionName["SET_ALBUMS"] = "set_albums";
    AmbientActionName["SET_ALBUM_SELECTED"] = "set_album_selected";
    AmbientActionName["SET_AMBIENT_MODE_ENABLED"] = "set_ambient_mode_enabled";
    AmbientActionName["SET_AMBIENT_THEME"] = "set_ambient_theme";
    AmbientActionName["SET_PREVIEWS"] = "set_previews";
    AmbientActionName["SET_SCREEN_SAVER_DURATION"] = "set_screen_saver_duration";
    AmbientActionName["SET_TEMPERATURE_UNIT"] = "set_temperature_unit";
    AmbientActionName["SET_TOPIC_SOURCE"] = "set_topic_source";
    AmbientActionName["SET_AMBIENT_UI_VISIBILITY"] = "set_ambient_ui_visibility";
    AmbientActionName["SET_SHOULD_SHOW_TIME_OF_DAY_BANNER"] = "set_should_show_time_of_day_banner";
})(AmbientActionName || (AmbientActionName = {}));
/**
 * Sets the current value of the albums.
 */
export function setAlbumsAction(albums) {
    return { name: AmbientActionName.SET_ALBUMS, albums };
}
export function setAlbumSelectedAction() {
    return { name: AmbientActionName.SET_ALBUM_SELECTED };
}
/**
 * Sets the current value of the ambient mode pref.
 */
export function setAmbientModeEnabledAction(enabled) {
    return { name: AmbientActionName.SET_AMBIENT_MODE_ENABLED, enabled };
}
/**
 * Sets the current value of the ambient theme.
 */
export function setAmbientThemeAction(ambientTheme) {
    return { name: AmbientActionName.SET_AMBIENT_THEME, ambientTheme };
}
/**
 * Sets the current value of preview image URLs.
 */
export function setPreviewsAction(previews) {
    return { name: AmbientActionName.SET_PREVIEWS, previews };
}
/**
 * Sets the current value of the screen saver duration.
 */
export function setScreenSaverDurationAction(minutes) {
    return { name: AmbientActionName.SET_SCREEN_SAVER_DURATION, minutes };
}
/**
 * Sets the current value of the topic source.
 */
export function setTopicSourceAction(topicSource) {
    return { name: AmbientActionName.SET_TOPIC_SOURCE, topicSource };
}
/**
 * Sets the current value of the temperature unit.
 */
export function setTemperatureUnitAction(temperatureUnit) {
    return { name: AmbientActionName.SET_TEMPERATURE_UNIT, temperatureUnit };
}
/**
 * Sets the current state of Ambient UI visibility.
 */
export function setAmbientUiVisibilityAction(ambientUiVisibility) {
    return {
        name: AmbientActionName.SET_AMBIENT_UI_VISIBILITY,
        ambientUiVisibility,
    };
}
/**
 * Sets the boolean that determines whether to show the time of day banner.
 */
export function setShouldShowTimeOfDayBannerAction(shouldShowTimeOfDayBanner) {
    return {
        name: AmbientActionName.SET_SHOULD_SHOW_TIME_OF_DAY_BANNER,
        shouldShowTimeOfDayBanner,
    };
}
