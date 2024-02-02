// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { displaySettingsProviderMojom } from 'chrome://os-settings/os_settings.js';
export class FakeDisplaySettingsProvider {
    tabletModeObservers = [];
    displayConfigurationObservers = [];
    isTabletMode = false;
    internalDisplayHistogram = new Map();
    externalDisplayHistogram = new Map();
    displayHistogram = new Map();
    // First key indicates internal or external display. Second key indicates the
    // orientation. The value indicates the histogram count.
    displayOrientationHistogram = new Map();
    // First key indicates internal or external display. Second key indicates the
    // night light status. The value indicates the histogram count.
    displayNightLightStatusHistogram = new Map();
    // First key indicates internal or external display. Second key indicates the
    // night light schedule. The value indicates the histogram count.
    displayNightLightScheduleHistogram = new Map();
    // The key is the mirror mode status. The value indicates the histogram count.
    displayMirrorModeStatusHistogram = new Map();
    // The key is the unified mode status. The value indicates the histogram
    // count.
    displayUnifiedModeStatusHistogram = new Map();
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
        if (type ===
            displaySettingsProviderMojom.DisplaySettingsType.kOrientation &&
            value.isInternalDisplay !== undefined &&
            value.orientation !== undefined) {
            const orientationHistogram = this.getDisplayOrientationHistogram(value.isInternalDisplay);
            orientationHistogram.set(value.orientation, (orientationHistogram.get(value.orientation) || 0) + 1);
            this.displayOrientationHistogram.set(value.isInternalDisplay, orientationHistogram);
        }
        else if (type === displaySettingsProviderMojom.DisplaySettingsType.kNightLight &&
            value.isInternalDisplay !== undefined &&
            value.nightLightStatus !== undefined) {
            const nightLightStatusHistogram = this.getDisplayNightLightStatusHistogram(value.isInternalDisplay);
            nightLightStatusHistogram.set(value.nightLightStatus, (nightLightStatusHistogram.get(value.nightLightStatus) || 0) + 1);
            this.displayNightLightStatusHistogram.set(value.isInternalDisplay, nightLightStatusHistogram);
        }
        else if (type ===
            displaySettingsProviderMojom.DisplaySettingsType
                .kNightLightSchedule &&
            value.isInternalDisplay !== undefined &&
            value.nightLightSchedule !== undefined) {
            const nightLightScheduleHistogram = this.getDisplayNightLightScheduleHistogram(value.isInternalDisplay);
            nightLightScheduleHistogram.set(value.nightLightSchedule, (nightLightScheduleHistogram.get(value.nightLightSchedule) || 0) + 1);
            this.displayNightLightScheduleHistogram.set(value.isInternalDisplay, nightLightScheduleHistogram);
        }
        else if (type === displaySettingsProviderMojom.DisplaySettingsType.kMirrorMode &&
            value.isInternalDisplay === undefined &&
            value.mirrorModeStatus !== undefined) {
            this.displayMirrorModeStatusHistogram.set(value.mirrorModeStatus, (this.displayMirrorModeStatusHistogram.get(value.mirrorModeStatus) ||
                0) +
                1);
        }
        else if (type ===
            displaySettingsProviderMojom.DisplaySettingsType.kUnifiedMode &&
            value.isInternalDisplay === undefined &&
            value.unifiedModeStatus !== undefined) {
            this.displayUnifiedModeStatusHistogram.set(value.unifiedModeStatus, (this.displayUnifiedModeStatusHistogram.get(value.unifiedModeStatus) ||
                0) +
                1);
        }
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
    getDisplayOrientationHistogram(isInternalDisplay) {
        return this.displayOrientationHistogram.get(isInternalDisplay) ||
            new Map();
    }
    getDisplayNightLightStatusHistogram(isInternalDisplay) {
        return this.displayNightLightStatusHistogram.get(isInternalDisplay) ||
            new Map();
    }
    getDisplayNightLightScheduleHistogram(isInternalDisplay) {
        return this.displayNightLightScheduleHistogram.get(isInternalDisplay) ||
            new Map();
    }
    getDisplayMirrorModeStatusHistogram() {
        return this.displayMirrorModeStatusHistogram;
    }
    getDisplayUnifiedModeStatusHistogram() {
        return this.displayUnifiedModeStatusHistogram;
    }
}
