// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { BrowserProxy as AppManagementComponentBrowserProxy } from 'chrome://resources/cr_components/app_management/browser_proxy.js';
// Export this module instance that is bundled locally.
export { AppManagementComponentBrowserProxy };
let instance = null;
export class AppManagementBrowserProxy {
    static getInstance() {
        return instance || (instance = new AppManagementBrowserProxy());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    constructor() {
        this.handler = AppManagementComponentBrowserProxy.getInstance().handler;
        this.callbackRouter =
            AppManagementComponentBrowserProxy.getInstance().callbackRouter;
    }
}
