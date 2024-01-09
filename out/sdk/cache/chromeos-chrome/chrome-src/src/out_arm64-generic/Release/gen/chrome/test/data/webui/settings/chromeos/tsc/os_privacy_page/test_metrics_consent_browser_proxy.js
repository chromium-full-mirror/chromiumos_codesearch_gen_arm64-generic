// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export const DEVICE_METRICS_CONSENT_PREF_NAME = 'cros.metrics.reportingEnabled';
export class TestMetricsConsentBrowserProxy extends TestBrowserProxy {
    state_;
    constructor() {
        super([
            'getMetricsConsentState',
            'updateMetricsConsent',
        ]);
        this.state_ = {
            prefName: DEVICE_METRICS_CONSENT_PREF_NAME,
            isConfigurable: false,
        };
    }
    getMetricsConsentState() {
        this.methodCalled('getMetricsConsentState');
        return Promise.resolve(this.state_);
    }
    updateMetricsConsent(consent) {
        this.methodCalled('updateMetricsConsent');
        return Promise.resolve(consent);
    }
    setMetricsConsentState(prefName, isConfigurable) {
        this.state_.prefName = prefName;
        this.state_.isConfigurable = isConfigurable;
    }
}
