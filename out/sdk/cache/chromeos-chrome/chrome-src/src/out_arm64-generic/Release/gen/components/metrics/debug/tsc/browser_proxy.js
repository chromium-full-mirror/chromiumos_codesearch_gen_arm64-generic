// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { sendWithPromise } from 'chrome://resources/js/cr.js';
export class MetricsInternalsBrowserProxyImpl {
    getUmaLogData(includeLogProtoData) {
        return sendWithPromise('fetchUmaLogsData', includeLogProtoData);
    }
    fetchVariationsSummary() {
        return sendWithPromise('fetchVariationsSummary');
    }
    fetchUmaSummary() {
        return sendWithPromise('fetchUmaSummary');
    }
    isUsingMetricsServiceObserver() {
        return sendWithPromise('isUsingMetricsServiceObserver');
    }
    static getInstance() {
        return instance || (instance = new MetricsInternalsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
