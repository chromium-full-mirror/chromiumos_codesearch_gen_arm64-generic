// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A helper object used from the "About" section to interact with
 * the browser.
 */
/**
 * Enumeration of all possible update statuses. The string literals must match
 * the ones defined at |AboutHandler::UpdateStatusToString|.
 * @enum {string}
 */
export var UpdateStatus;
(function (UpdateStatus) {
    UpdateStatus["CHECKING"] = "checking";
    UpdateStatus["UPDATING"] = "updating";
    UpdateStatus["NEARLY_UPDATED"] = "nearly_updated";
    UpdateStatus["UPDATED"] = "updated";
    UpdateStatus["FAILED"] = "failed";
    UpdateStatus["FAILED_HTTP"] = "failed_http";
    UpdateStatus["FAILED_DOWNLOAD"] = "failed_download";
    UpdateStatus["DISABLED"] = "disabled";
    UpdateStatus["DISABLED_BY_ADMIN"] = "disabled_by_admin";
    UpdateStatus["NEED_PERMISSION_TO_UPDATE"] = "need_permission_to_update";
})(UpdateStatus || (UpdateStatus = {}));
export class AboutPageBrowserProxyImpl {
    pageReady() {
        chrome.send('aboutPageReady');
    }
    refreshUpdateStatus() {
        chrome.send('refreshUpdateStatus');
    }
    // 
    openHelpPage() {
        chrome.send('openHelpPage');
    }
    // 
    static getInstance() {
        return instance || (instance = new AboutPageBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
