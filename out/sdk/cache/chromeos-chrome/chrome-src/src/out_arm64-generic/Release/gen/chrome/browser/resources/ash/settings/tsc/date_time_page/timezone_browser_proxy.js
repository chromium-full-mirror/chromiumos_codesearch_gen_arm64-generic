// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview A helper object used by the time zone subpage page. */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class TimeZoneBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new TimeZoneBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    showParentAccessForTimeZone() {
        chrome.send('handleShowParentAccessForTimeZone');
    }
    dateTimePageReady() {
        chrome.send('dateTimePageReady');
    }
    showSetDateTimeUi() {
        chrome.send('showSetDateTimeUI');
    }
    getTimeZones() {
        return sendWithPromise('getTimeZones');
    }
}
