// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { emptyState as emptyAmbientState } from './ambient/ambient_state.js';
import { emptyState as emptyKeyboardBacklightState } from './keyboard_backlight/keyboard_backlight_state.js';
import { emptyState as emptyThemeState } from './theme/theme_state.js';
import { emptyState as emptyUserState } from './user/user_state.js';
import { emptyState as emptyWallpaperState } from './wallpaper/wallpaper_state.js';
export function emptyState() {
    return {
        error: null,
        ambient: emptyAmbientState(),
        keyboardBacklight: emptyKeyboardBacklightState(),
        theme: emptyThemeState(),
        user: emptyUserState(),
        wallpaper: emptyWallpaperState(),
    };
}
