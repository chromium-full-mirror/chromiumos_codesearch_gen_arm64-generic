// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { SecureDnsMode, SecureDnsUiManagementMode } from 'chrome://os-settings/os_settings.js';
import { assertFalse } from 'chrome://webui-test/chai_assert.js';
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
// clang-format on
export class TestPrivacyPageBrowserProxy extends TestBrowserProxy {
    metricsReporting;
    secureDnsSetting;
    resolverList_;
    isValidConfigResults_ = {};
    probeConfigResults_ = {};
    constructor() {
        super([
            'getMetricsReporting',
            'setMetricsReportingEnabled',
            'showManageSslCertificates',
            'setBlockAutoplayEnabled',
            'getSecureDnsResolverList',
            'getSecureDnsSetting',
            'isValidConfig',
            'probeConfig',
        ]);
        this.metricsReporting = {
            enabled: true,
            managed: true,
        };
        this.secureDnsSetting = {
            mode: SecureDnsMode.AUTOMATIC,
            config: '',
            managementMode: SecureDnsUiManagementMode.NO_OVERRIDE,
            dohWithIdentifiersActive: false,
            configForDisplay: '',
        };
        this.resolverList_ = [{ name: 'Custom', value: 'custom', policy: '' }];
    }
    getMetricsReporting() {
        this.methodCalled('getMetricsReporting');
        return Promise.resolve(this.metricsReporting);
    }
    setMetricsReportingEnabled(enabled) {
        this.methodCalled('setMetricsReportingEnabled', enabled);
    }
    showManageSslCertificates() {
        this.methodCalled('showManageSslCertificates');
    }
    setBlockAutoplayEnabled(enabled) {
        this.methodCalled('setBlockAutoplayEnabled', enabled);
    }
    /**
     * Sets the resolver list that will be returned when getSecureDnsResolverList
     * is called.
     */
    setResolverList(resolverList) {
        this.resolverList_ = resolverList;
    }
    getSecureDnsResolverList() {
        this.methodCalled('getSecureDnsResolverList');
        return Promise.resolve(this.resolverList_);
    }
    getSecureDnsSetting() {
        this.methodCalled('getSecureDnsSetting');
        return Promise.resolve(this.secureDnsSetting);
    }
    /**
     * Sets the return value for the next isValidConfig call.
     */
    setIsValidConfigResult(entry, result) {
        this.isValidConfigResults_[entry] = result;
    }
    isValidConfig(entry) {
        this.methodCalled('isValidConfig', entry);
        // Prohibit unexpected validations.
        const result = this.isValidConfigResults_[entry];
        assertFalse(result === undefined);
        return Promise.resolve(result || false);
    }
    /**
     * Sets the return value for the next probeConfig call.
     */
    setProbeConfigResult(entry, result) {
        this.probeConfigResults_[entry] = result;
    }
    probeConfig(entry) {
        this.methodCalled('probeConfig', entry);
        // Prohibit unexpected probes.
        const result = this.probeConfigResults_[entry];
        assertFalse(result === undefined);
        return Promise.resolve(result || false);
    }
}
