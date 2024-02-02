// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Installs a mock object to replace window.chrome in a unit test.
 */
export function installMockChrome(mockChrome) {
    window.chrome = window.chrome || {};
    mockChrome.metricsPrivate = mockChrome.metricsPrivate || new MockMetrics();
    const chrome = window.chrome;
    const keys = Object.keys(mockChrome);
    for (const key of keys) {
        const value = mockChrome[key];
        const target = chrome[key] || value;
        Object.assign(target, value);
        // TS thinks the types on both sides are no compatible, hence the "any".
        chrome[key] = target;
    }
}
/**
 * Mocks out the chrome.fileManagerPrivate.onDirectoryChanged and getSizeStats
 * methods to be useful in unit tests.
 */
export class MockChromeFileManagerPrivateDirectoryChanged {
    constructor() {
        /**
         * Listeners attached to listen for directory changes.
         * */
        this.listeners_ = [];
        /**
         * Mocked out size stats to return when testing.
         */
        this.sizeStats_ = {};
        window.chrome = window.chrome || {};
        window.chrome.fileManagerPrivate = window.chrome.fileManagerPrivate || {};
        // @ts-ignore: The file_manager_private.d.ts don't allow to overwrite
        // `onDirectoryChanged`.
        window.chrome.fileManagerPrivate.onDirectoryChanged =
            window.chrome.fileManagerPrivate.onDirectoryChanged || {};
        window.chrome.fileManagerPrivate.onDirectoryChanged.addListener =
            this.addListener_.bind(this);
        window.chrome.fileManagerPrivate.onDirectoryChanged.removeListener =
            this.removeListener_.bind(this);
        window.chrome.fileManagerPrivate.getSizeStats =
            this.getSizeStats_.bind(this);
        window.chrome.fileManagerPrivate.getDriveQuotaMetadata =
            this.getDriveQuotaMetadata_.bind(this);
    }
    /**
     * Store a copy of the listener to emit changes to
     */
    addListener_(newListener) {
        this.listeners_.push(newListener);
    }
    removeListener_(listenerToRemove) {
        for (let i = 0; i < this.listeners_.length; i++) {
            if (this.listeners_[i] === listenerToRemove) {
                this.listeners_.splice(i, 1);
                return;
            }
        }
    }
    /**
     * Returns the stubbed out file stats for a directory change.
     * @param volumeId The underlying volumeId requesting size stats for.
     */
    getSizeStats_(volumeId, callback) {
        if (!this.sizeStats_[volumeId]) {
            callback(undefined);
            return;
        }
        callback(this.sizeStats_[volumeId]);
    }
    /**
     * Sets the size stats for the volumeId, to return when testing.
     */
    setVolumeSizeStats(volumeId, sizeStats) {
        this.sizeStats_[volumeId] = sizeStats;
    }
    /**
     * Remove the sizeStats for the volumeId which can emulate getSizeStats
     * returning back undefined.
     * @param volumeId The volumeId to unset.
     */
    unsetVolumeSizeStats(volumeId) {
        delete this.sizeStats_[volumeId];
    }
    /**
     * Returns the stubbed out drive quota metadata for a directory change.
     */
    getDriveQuotaMetadata_(_entry, callback) {
        callback(this.driveQuotaMetadata_);
    }
    /**
     * Sets the drive quota metadata to be returned when testing.
     */
    setDriveQuotaMetadata(driveQuotaMetadata) {
        this.driveQuotaMetadata_ = driveQuotaMetadata;
    }
    /**
     * Set the drive quota metadata to undefined to emulate getDriveQuotaMetadata_
     * returning back undefined.
     */
    unsetDriveQuotaMetadata() {
        this.driveQuotaMetadata_ = undefined;
    }
    /**
     * Invoke all the listeners attached to the
     * chrome.fileManagerPrivate.onDirectoryChanged method.
     */
    dispatchOnDirectoryChanged() {
        const event = new Event('fake-event');
        event.entry = 'fake-entry';
        for (const listener of this.listeners_) {
            listener(event);
        }
    }
}
/**
 * Mock for chrome.metricsPrivate.
 *
 * It records the method calls made to chrome.metricsPrivate.
 *
 * Typical usage:
 * const mockMetrics = new MockMetrics();
 *
 * // NOTE: installMockChrome() mocks metricsPrivate by default, which useful
 * when you don't want to check the calls to metrics.
 * installMockChrome({
 *   metricsPrivate: mockMetrics,
 * });
 *
 * // Run the code under test:
 * Then check the calls made to metrics private using either:
 * mockMetrics.apiCalls
 * mockMetrics.metricCalls
 */
export class MockMetrics {
    constructor() {
        /**
         * Maps the API name to every call which is an array of the call
         * arguments.
         *
         */
        this.apiCalls = {};
        /**
         * Maps the metric names to every call with its arguments, similar to
         * `apiCalls` but recorded by metric instead of API method.
         *
         */
        this.metricCalls = {};
        // The API has this enum which referenced in the code.
        // Inconsistent name here because of chrome.metricsPrivate.MetricType.
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.MetricTypeType = {
            'HISTOGRAM_LINEAR': 'HISTOGRAM_LINEAR',
        };
    }
    call(apiName, args) {
        console.log(apiName, args);
        this.apiCalls[apiName] = this.apiCalls[apiName] || [];
        this.apiCalls[apiName]?.push(args);
        if (args.length > 0) {
            let metricName = args[0];
            // Ignore the first position because it's the metric name.
            let metricArgs = args.slice(1);
            // Some APIs uses `metricName` instead of first argument.
            if (metricName.metricName) {
                metricArgs = [metricName, ...metricArgs];
                metricName = metricName.metricName;
            }
            this.metricCalls[metricName] = this.metricCalls[metricName] || [];
            this.metricCalls[metricName]?.push(metricArgs);
        }
    }
    recordMediumCount(...args) {
        this.call('recordMediumCount', args);
    }
    recordSmallCount(...args) {
        this.call('recordSmallCount', args);
    }
    recordTime(...args) {
        this.call('recordTime', args);
    }
    recordBoolean(...args) {
        this.call('recordBoolean', args);
    }
    recordUserAction(...args) {
        this.call('recordUserAction', args);
    }
    recordValue(...args) {
        this.call('recordValue', args);
    }
    recordInterval(...args) {
        this.call('recordInterval', args);
    }
    recordEnum(...args) {
        this.call('recordEnum', args);
    }
    // To make MockMetrics compatible with chrome.metricsPrivate.
    getHistogram(_name) {
        throw new Error('not implemented');
    }
    getIsCrashReportingEnabled() {
        throw new Error('not implemented');
    }
    getFieldTrial(_name) {
        throw new Error('not implemented');
    }
    getVariationParams(_name) {
        throw new Error('not implemented');
    }
    recordPercentage(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordCount(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordMediumTime(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordLongTime(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordSparseValueWithHashMetricName(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordSparseValueWithPersistentHash(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordSparseValue(_metricName, _value) {
        throw new Error('not implemented');
    }
    recordEnumerationValue(_metricName, _value, _enumSize) {
        throw new Error('not implemented');
    }
}
