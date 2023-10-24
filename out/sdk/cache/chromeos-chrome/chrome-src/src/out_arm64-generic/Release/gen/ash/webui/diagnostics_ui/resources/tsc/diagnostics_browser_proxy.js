// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used by the Diagnostics App UI in chromeos/ to
 * provide access to the SessionLogHandler which invokes functions that only
 * exist in chrome/.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
import { getNavigationViewForPageId } from './diagnostics_utils.js';
export class DiagnosticsBrowserProxyImpl {
    constructor() {
        // View which 'recordNavigation' is leaving.
        this.previousView = null;
    }
    initialize() {
        chrome.send('initialize');
    }
    recordNavigation(currentView) {
        // First time the function is called will be when the UI is initializing
        // which does not trigger a message as navigation has not occurred.
        if (this.previousView === null) {
            this.previousView = getNavigationViewForPageId(currentView);
            return;
        }
        const currentViewId = getNavigationViewForPageId(currentView);
        chrome.send('recordNavigation', [this.previousView, currentViewId]);
        this.previousView = currentViewId;
    }
    saveSessionLog() {
        return sendWithPromise('saveSessionLog');
    }
    getPluralString(name, count) {
        return sendWithPromise('getPluralString', name, count);
    }
    // The singleton instance_ can be replaced with a test version of this wrapper
    // during testing.
    static getInstance() {
        return browserProxy || (browserProxy = new DiagnosticsBrowserProxyImpl());
    }
    static setInstance(obj) {
        browserProxy = obj;
    }
}
let browserProxy = null;
