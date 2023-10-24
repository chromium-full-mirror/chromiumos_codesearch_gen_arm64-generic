// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
// WARNING: Keep synced with
// chrome/browser/ui/webui/password_manager/sync_handler.cc.
export var TrustedVaultBannerState;
(function (TrustedVaultBannerState) {
    TrustedVaultBannerState[TrustedVaultBannerState["NOT_SHOWN"] = 0] = "NOT_SHOWN";
    TrustedVaultBannerState[TrustedVaultBannerState["OFFER_OPT_IN"] = 1] = "OFFER_OPT_IN";
    TrustedVaultBannerState[TrustedVaultBannerState["OPTED_IN"] = 2] = "OPTED_IN";
})(TrustedVaultBannerState || (TrustedVaultBannerState = {}));
export class SyncBrowserProxyImpl {
    getTrustedVaultBannerState() {
        return sendWithPromise('GetSyncTrustedVaultBannerState');
    }
    getSyncInfo() {
        return sendWithPromise('GetSyncInfo');
    }
    getAccountInfo() {
        return sendWithPromise('GetAccountInfo');
    }
    static getInstance() {
        return instance || (instance = new SyncBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
