// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class AccessibilityBrowserProxyImpl {
    openTrackpadGesturesSettings() {
        chrome.send('openTrackpadGesturesSettings');
    }
    recordOverscrollHistoryNavigationChanged(enabled) {
        chrome.metricsPrivate.recordBoolean('Settings.OverscrollHistoryNavigation.Enabled', enabled);
    }
    // 
    getScreenReaderState() {
        return sendWithPromise('getScreenReaderState');
    }
    static getInstance() {
        return instance || (instance = new AccessibilityBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
