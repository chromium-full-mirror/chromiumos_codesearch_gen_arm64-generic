// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
export class AppearanceBrowserProxyImpl {
    getDefaultZoom() {
        return chrome.settingsPrivate.getDefaultZoom();
    }
    getThemeInfo(themeId) {
        return chrome.management.get(themeId);
    }
    isChildAccount() {
        return loadTimeData.getBoolean('isChildAccount');
    }
    recordHoverCardImagesEnabledChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.HoverCards.ImagePreview.Enabled', enabled);
    }
    useDefaultTheme() {
        chrome.send('useDefaultTheme');
    }
    // 
    validateStartupPage(url) {
        return sendWithPromise('validateStartupPage', url);
    }
    static getInstance() {
        return instance || (instance = new AppearanceBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
