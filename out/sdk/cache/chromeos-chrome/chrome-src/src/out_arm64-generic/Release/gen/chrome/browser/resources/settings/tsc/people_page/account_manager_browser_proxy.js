// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Stripped down fork of
 * c/b/r/ash/settings/os_people_page/account_manager_browser_proxy.js.
 * Re-uses the same WebUI message handler class.
 */
// clang-format off
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class AccountManagerBrowserProxyImpl {
    getAccounts() {
        return sendWithPromise('getAccounts');
    }
    static getInstance() {
        return instance || (instance = new AccountManagerBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
