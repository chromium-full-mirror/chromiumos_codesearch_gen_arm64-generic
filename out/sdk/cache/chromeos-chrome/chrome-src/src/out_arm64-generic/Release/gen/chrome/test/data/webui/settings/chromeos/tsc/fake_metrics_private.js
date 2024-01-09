// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FALSE_COUNT = 0;
const TRUE_COUNT = 1;
export class FakeMetricsPrivate {
    collectedMetrics;
    constructor() {
        this.collectedMetrics = new Map();
    }
    recordSparseValueWithPersistentHash(_metricName, _value) { }
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
}
