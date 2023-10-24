// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Provides the implementation for Desk API.
 */
export class DeskApiImpl {
    launchDesk(options, callback) {
        if (typeof chrome.wmDesksPrivate.launchDesk !== 'function') {
            throw new Error('launchDesk is not supported in this version.');
        }
        chrome.wmDesksPrivate.launchDesk(options, callback);
    }
    removeDesk(deskUuid, options, callback) {
        if (typeof chrome.wmDesksPrivate.removeDesk !== 'function') {
            throw new Error('removeDesk is not supported in this version.');
        }
        chrome.wmDesksPrivate.removeDesk(deskUuid, options, callback);
    }
    setWindowProperties(windowId, windowProperties, callback) {
        if (typeof chrome.wmDesksPrivate.setWindowProperties !== 'function') {
            throw new Error('setWindowProperties is not supported in this version.');
        }
        chrome.wmDesksPrivate.setWindowProperties(windowId, windowProperties, callback);
    }
    getActiveDesk(callback) {
        if (typeof chrome.wmDesksPrivate.getActiveDesk !== 'function') {
            throw new Error('getActiveDesk is not supported in this version.');
        }
        chrome.wmDesksPrivate.getActiveDesk(callback);
    }
    switchDesk(deskId, callback) {
        if (typeof chrome.wmDesksPrivate.switchDesk !== 'function') {
            throw new Error('switchDesk is not supported in this version.');
        }
        chrome.wmDesksPrivate.switchDesk(deskId, callback);
    }
    getDeskById(deskId, callback) {
        if (typeof chrome.wmDesksPrivate.getDeskByID !== 'function') {
            throw new Error('getDeskByID is not supported in this version.');
        }
        chrome.wmDesksPrivate.getDeskByID(deskId, callback);
    }
    addDeskAddedListener(callback) {
        if (!chrome.wmDesksPrivate.OnDeskAdded) {
            throw new Error('OnDeskAdded is not supported in this version.');
        }
        chrome.wmDesksPrivate.OnDeskAdded.addListener(callback);
    }
    addDeskRemovedListener(callback) {
        if (!chrome.wmDesksPrivate.OnDeskRemoved) {
            throw new Error('OnDeskRemoved is not supported in this version.');
        }
        chrome.wmDesksPrivate.OnDeskRemoved.addListener(callback);
    }
    addDeskSwitchedListener(callback) {
        if (!chrome.wmDesksPrivate.OnDeskSwitched) {
            throw new Error('OnDeskSwitched is not supported in this version.');
        }
        chrome.wmDesksPrivate.OnDeskSwitched.addListener(callback);
    }
}
