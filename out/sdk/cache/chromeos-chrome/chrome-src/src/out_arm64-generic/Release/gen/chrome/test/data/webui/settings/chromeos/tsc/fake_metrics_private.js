// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FALSE_COUNT = 0;
const TRUE_COUNT = 1;
const MetricTypeType = chrome.metricsPrivate.MetricTypeType;
export class FakeMetricsPrivate {
    // Mirroring chrome.metricsPrivate API members.
    /* eslint-disable @typescript-eslint/naming-convention */
    MetricTypeType = MetricTypeType;
    /* eslint-enable @typescript-eslint/naming-convention */
    collectedMetrics;
    constructor() {
        this.collectedMetrics = new Map();
    }
    recordEnumerationValue(metric, value, _enumSize) {
        const metricEntry = this.collectedMetrics.get(metric) || {};
        if (value in metricEntry) {
            metricEntry[value] += 1;
        }
        else {
            metricEntry[value] = 1;
        }
        this.collectedMetrics.set(metric, metricEntry);
    }
    countMetricValue(metric, value) {
        const metricEntry = this.collectedMetrics.get(metric);
        if (metricEntry) {
            if (value in metricEntry) {
                return metricEntry[value];
            }
        }
        return 0;
    }
    recordBoolean(metric, value) {
        const metricEntry = this.collectedMetrics.get(metric) ||
            { [TRUE_COUNT]: 0, [FALSE_COUNT]: 0 };
        if (value) {
            metricEntry[TRUE_COUNT] += 1;
        }
        else {
            metricEntry[FALSE_COUNT] += 1;
        }
        this.collectedMetrics.set(metric, metricEntry);
    }
    countBoolean(metric, value) {
        const metricEntry = this.collectedMetrics.get(metric);
        if (metricEntry) {
            if (value) {
                return metricEntry[TRUE_COUNT];
            }
            else {
                return metricEntry[FALSE_COUNT];
            }
        }
        else {
            return 0;
        }
    }
    // The methods below are unimplemented and only added to satisfy the
    // chrome.metricsPrivate interface during TS compilation.
    async getHistogram() {
        return { sum: 0, buckets: [{ min: 0, max: 0, count: 0 }] };
    }
    async getIsCrashReportingEnabled() {
        return true;
    }
    async getFieldTrial() {
        return '';
    }
    async getVariationParams() {
        return {};
    }
    recordUserAction(_name) { }
    recordPercentage(_metricName, _value) { }
    recordCount(_metricName, _value) { }
    recordSmallCount(_metricName, _value) { }
    recordMediumCount(_metricName, _value) { }
    recordTime(_metricName, _value) { }
    recordMediumTime(_metricName, _value) { }
    recordLongTime(_metricName, _value) { }
    recordSparseValueWithHashMetricName(_metricName, _value) { }
    recordSparseValueWithPersistentHash(_metricName, _value) { }
    recordSparseValue(_metricName, _value) { }
    recordValue(_metric, _value) { }
}
