// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { ColorScheme } from '../color_scheme.mojom-webui.js';
import { StaticColor } from '../personalization_app.mojom-webui.js';
import { Paths } from './personalization_router_element.js';
// Numerical values are used for metrics; do not change or reuse values. These
// enum values map to Paths enum string values from
// personalization_router_element.ts.
var MetricsPath;
(function (MetricsPath) {
    MetricsPath[MetricsPath["AMBIENT"] = 0] = "AMBIENT";
    MetricsPath[MetricsPath["AMBIENT_ALBUMS"] = 1] = "AMBIENT_ALBUMS";
    MetricsPath[MetricsPath["WALLPAPER_COLLECTION_IMAGES"] = 2] = "WALLPAPER_COLLECTION_IMAGES";
    MetricsPath[MetricsPath["WALLPAPER"] = 3] = "WALLPAPER";
    MetricsPath[MetricsPath["WALLPAPER_GOOGLE_PHOTO_COLLECTION"] = 4] = "WALLPAPER_GOOGLE_PHOTO_COLLECTION";
    MetricsPath[MetricsPath["WALLPAPER_LOCAL_COLLECTION"] = 5] = "WALLPAPER_LOCAL_COLLECTION";
    MetricsPath[MetricsPath["ROOT"] = 6] = "ROOT";
    MetricsPath[MetricsPath["USER"] = 7] = "USER";
    MetricsPath[MetricsPath["WALLPAPER_SEA_PEN_COLLECTION"] = 8] = "WALLPAPER_SEA_PEN_COLLECTION";
    MetricsPath[MetricsPath["MAX_VALUE"] = 8] = "MAX_VALUE";
})(MetricsPath || (MetricsPath = {}));
function toMetricsEnum(path) {
    switch (path) {
        case Paths.AMBIENT:
            return MetricsPath.AMBIENT;
        case Paths.AMBIENT_ALBUMS:
            return MetricsPath.AMBIENT_ALBUMS;
        case Paths.COLLECTION_IMAGES:
            return MetricsPath.WALLPAPER_COLLECTION_IMAGES;
        case Paths.COLLECTIONS:
            return MetricsPath.WALLPAPER;
        case Paths.GOOGLE_PHOTOS_COLLECTION:
            return MetricsPath.WALLPAPER_GOOGLE_PHOTO_COLLECTION;
        case Paths.LOCAL_COLLECTION:
            return MetricsPath.WALLPAPER_LOCAL_COLLECTION;
        case Paths.ROOT:
            return MetricsPath.ROOT;
        case Paths.USER:
            return MetricsPath.USER;
        case Paths.SEA_PEN_COLLECTION:
            return MetricsPath.WALLPAPER_SEA_PEN_COLLECTION;
    }
}
export function logPersonalizationPathUMA(path) {
    const metricsPath = toMetricsEnum(path);
    assert(metricsPath <= MetricsPath.MAX_VALUE);
    chrome.metricsPrivate.recordEnumerationValue("Ash.Personalization.Path" /* HistogramName.PATH */, metricsPath, MetricsPath.MAX_VALUE + 1);
}
export function logAmbientModeOptInUMA() {
    chrome.metricsPrivate.recordBoolean("Ash.Personalization.AmbientMode.OptIn" /* HistogramName.AMBIENT_OPTIN */, true);
}
export function logGooglePhotosPreviewsLoadTime() {
    // Get elapsed time in ms since the page initialized.
    const timeMs = Math.round(performance.now());
    console.debug("Ash.Personalization.Ambient.GooglePhotosPreviewsLoadTime" /* HistogramName.AMBIENT_PERFORMANCE_GOOGLE_PHOTOS_PREVIEWS */, timeMs);
    chrome.metricsPrivate.recordTime("Ash.Personalization.Ambient.GooglePhotosPreviewsLoadTime" /* HistogramName.AMBIENT_PERFORMANCE_GOOGLE_PHOTOS_PREVIEWS */, timeMs);
}
export function logKeyboardBacklightOpenZoneCustomizationUMA() {
    chrome.metricsPrivate.recordBoolean("Ash.Personalization.KeyboardBacklight.OpenZoneCustomization" /* HistogramName.KEYBOARD_BACKLIGHT_OPEN_ZONE_CUSTOMIZATION */, true);
}
export function logDynamicColorToggleButtonClick(enabled) {
    chrome.metricsPrivate.recordBoolean("Ash.Personalization.DynamicColor.ToggleButton" /* HistogramName.DYNAMIC_COLOR_TOGGLE_BUTTON */, enabled);
}
export function logDynamicColorStaticColorButtonClick(color) {
    chrome.metricsPrivate.recordEnumerationValue("Ash.Personalization.DynamicColor.StaticColorButton" /* HistogramName.DYNAMIC_COLOR_STATIC_COLOR_BUTTON */, color, StaticColor.MAX_VALUE);
}
export function logDynamicColorColorSchemeButtonClick(color) {
    chrome.metricsPrivate.recordEnumerationValue("Ash.Personalization.DynamicColor.ColorSchemeButton" /* HistogramName.DYNAMIC_COLOR_COLOR_SCHEME_BUTTON */, color, ColorScheme.MAX_VALUE);
}
