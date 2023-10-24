// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * This enum is tied directly to a UMA enum defined in
 * //tools/metrics/histograms/enums.xml and should always reflect it (do not
 * change one without changing the other).
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 */
export var WallpaperGooglePhotosSource;
(function (WallpaperGooglePhotosSource) {
    WallpaperGooglePhotosSource[WallpaperGooglePhotosSource["PHOTOS"] = 0] = "PHOTOS";
    WallpaperGooglePhotosSource[WallpaperGooglePhotosSource["ALBUMS"] = 1] = "ALBUMS";
    WallpaperGooglePhotosSource[WallpaperGooglePhotosSource["OWNED_ALBUMS"] = 2] = "OWNED_ALBUMS";
    WallpaperGooglePhotosSource[WallpaperGooglePhotosSource["SHARED_ALBUMS"] = 3] = "SHARED_ALBUMS";
    WallpaperGooglePhotosSource[WallpaperGooglePhotosSource["NUM_SOURCES"] = 4] = "NUM_SOURCES";
})(WallpaperGooglePhotosSource || (WallpaperGooglePhotosSource = {}));
const WallpaperGooglePhotosSourceHistogramName = 'Ash.Wallpaper.GooglePhotos.Source2';
/**
 * Records the section of the Wallpaper app from which a new Google Photos
 * wallpaper is selected.
 */
export function recordWallpaperGooglePhotosSourceUMA(source) {
    assert(source < WallpaperGooglePhotosSource.NUM_SOURCES);
    chrome.metricsPrivate.recordEnumerationValue(WallpaperGooglePhotosSourceHistogramName, source, WallpaperGooglePhotosSource.NUM_SOURCES);
}
