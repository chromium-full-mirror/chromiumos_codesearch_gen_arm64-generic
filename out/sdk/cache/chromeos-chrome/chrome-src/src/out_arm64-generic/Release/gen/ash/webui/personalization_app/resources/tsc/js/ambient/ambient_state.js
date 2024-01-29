// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export function emptyState() {
    return {
        albums: null,
        ambientModeEnabled: null,
        ambientTheme: null,
        duration: null,
        previews: null,
        temperatureUnit: null,
        topicSource: null,
        ambientUiVisibility: null,
        shouldShowTimeOfDayBanner: false,
        geolocationPermissionEnabled: null,
    };
}
