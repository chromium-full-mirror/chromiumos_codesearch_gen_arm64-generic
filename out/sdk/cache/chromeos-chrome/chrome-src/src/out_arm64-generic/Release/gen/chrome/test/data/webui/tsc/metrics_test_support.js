// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** Tracks metrics calls to verify metric logging in tests. */
export class MetricsTracker {
    histogramMap_ = new Map();
    count(metricName, value) {
        return this.get_(metricName)
            .filter(v => value === undefined || v === value)
            .length;
    }
    record(metricName, value) {
        this.get_(metricName).push(value);
    }
    get_(metricName) {
        if (!this.histogramMap_.has(metricName)) {
            this.histogramMap_.set(metricName, []);
        }
        return this.histogramMap_.get(metricName);
    }
}
/**
 * Installs interceptors to metrics logging calls and forwards them to the
 * returned |MetricsTracker| object.
 * @return {!MetricsTracker}
 */
export function fakeMetricsPrivate() {
    const metrics = new MetricsTracker();
    chrome.metricsPrivate.recordUserAction = (m) => metrics.record(m, 0);
    chrome.metricsPrivate.recordSparseValueWithHashMetricName = (m, v) => metrics.record(m, v);
    chrome.metricsPrivate.recordSparseValueWithPersistentHash = (m, v) => metrics.record(m, v);
    chrome.metricsPrivate.recordBoolean = (m, v) => metrics.record(m, v);
    chrome.metricsPrivate.recordValue = (m, v) => metrics.record(m.metricName, v);
    chrome.metricsPrivate.recordEnumerationValue = (m, v) => metrics.record(m, v);
    chrome.metricsPrivate.recordSmallCount = (m, v) => metrics.record(m, v);
    return metrics;
}
