// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class AccountManagerBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new AccountManagerBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getAccounts() {
        return sendWithPromise('getAccounts');
    }
    addAccount() {
        chrome.send('addAccount');
    }
    reauthenticateAccount(accountEmail) {
        chrome.send('reauthenticateAccount', [accountEmail]);
    }
    migrateAccount(accountEmail) {
        chrome.send('migrateAccount', [accountEmail]);
    }
    removeAccount(account) {
        chrome.send('removeAccount', [account]);
    }
    changeArcAvailability(account, isAvailableInArc) {
        chrome.send('changeArcAvailability', [account, isAvailableInArc]);
    }
}
