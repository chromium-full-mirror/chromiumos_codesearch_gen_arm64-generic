// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export class FakeDisplaySettingsProvider {
    tabletModeObservers = [];
    displayConfigurationObservers = [];
    isTabletMode = false;
    internalDisplayHistogram = new Map();
    externalDisplayHistogram = new Map();
    displayHistogram = new Map();
    // Implement DisplaySettingsProviderInterface.
    observeTabletMode(observer) {
        this.tabletModeObservers.push(observer);
        this.notifyTabletModeChanged();
        return Promise.resolve({ isTabletMode: this.isTabletMode });
    }
    // Implement DisplaySettingsProviderInterface.
    observeDisplayConfiguration(observer) {
        this.displayConfigurationObservers.push(observer);
        return Promise.resolve();
    }
    notifyTabletModeChanged() {
        for (const observer of this.tabletModeObservers) {
            observer.onTabletModeChanged(this.isTabletMode);
        }
    }
    setTabletMode(isTabletMode) {
        this.isTabletMode = isTabletMode;
        this.notifyTabletModeChanged();
    }
    getIsTabletMode() {
        return this.isTabletMode;
    }
    // Implement DisplaySettingsProviderInterface.
    recordChangingDisplaySettings(type, value) {
        let histogram;
        if (value.isInternalDisplay === undefined) {
            histogram = this.displayHistogram;
        }
        else if (value.isInternalDisplay) {
            histogram = this.internalDisplayHistogram;
        }
        else {
            histogram = this.externalDisplayHistogram;
        }
        histogram.set(type, (histogram.get(type) || 0) + 1);
    }
    getInternalDisplayHistogram() {
        return this.internalDisplayHistogram;
    }
    getExternalDisplayHistogram() {
        return this.externalDisplayHistogram;
    }
    getDisplayHistogram() {
        return this.displayHistogram;
    }
}
