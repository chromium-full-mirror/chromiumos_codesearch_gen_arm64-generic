// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Implementation that accesses the private API.
 */
export class AutofillManagerImpl {
    getAccountInfo() {
        return chrome.autofillPrivate.getAccountInfo();
    }
    setPersonalDataManagerListener(listener) {
        chrome.autofillPrivate.onPersonalDataChanged.addListener(listener);
    }
    removePersonalDataManagerListener(listener) {
        chrome.autofillPrivate.onPersonalDataChanged.removeListener(listener);
    }
    getAddressList() {
        return chrome.autofillPrivate.getAddressList();
    }
    saveAddress(address) {
        chrome.autofillPrivate.saveAddress(address);
    }
    removeAddress(guid) {
        chrome.autofillPrivate.removeEntry(guid);
    }
    setAutofillSyncToggleEnabled(enabled) {
        chrome.autofillPrivate.setAutofillSyncToggleEnabled(enabled);
    }
    static getInstance() {
        return instance || (instance = new AutofillManagerImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
