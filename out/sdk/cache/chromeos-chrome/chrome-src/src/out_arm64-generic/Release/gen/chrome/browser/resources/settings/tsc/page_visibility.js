// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
/**
 * Dictionary defining page visibility.
 */
export let pageVisibility;
if (loadTimeData.getBoolean('isGuest')) {
    // "if not chromeos" and "if chromeos" in two completely separate blocks
    // to work around closure compiler.
    // 
    // 
    pageVisibility = {
        ai: false,
        autofill: false,
        people: false,
        onStartup: false,
        reset: false,
        safetyCheck: false,
        safetyHub: false,
        appearance: {
            setTheme: false,
            homeButton: false,
            hoverCardImages: false,
            bookmarksBar: false,
            pageZoom: false,
            sidePanel: false,
        },
        advancedSettings: true,
        privacy: {
            searchPrediction: false,
            networkPrediction: false,
        },
        downloads: true,
        a11y: true,
        extensions: false,
        getMostChrome: false,
        languages: true,
        performance: false,
    };
    // 
}
export function setPageVisibilityForTesting(testVisibility) {
    pageVisibility = testVisibility;
}
