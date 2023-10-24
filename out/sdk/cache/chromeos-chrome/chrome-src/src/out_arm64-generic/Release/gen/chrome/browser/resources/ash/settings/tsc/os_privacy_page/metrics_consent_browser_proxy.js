// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Helper browser proxy for getting metrics and changing metrics
 * consent data.
 */
import { sendWithPromise } from 'chrome://resources/js/cr.js';
let instance = null;
export class MetricsConsentBrowserProxyImpl {
    static getInstance() {
        return instance || (instance = new MetricsConsentBrowserProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    getMetricsConsentState() {
        return sendWithPromise('getMetricsConsentState');
    }
    updateMetricsConsent(consent) {
        return sendWithPromise('updateMetricsConsent', { consent });
    }
}
