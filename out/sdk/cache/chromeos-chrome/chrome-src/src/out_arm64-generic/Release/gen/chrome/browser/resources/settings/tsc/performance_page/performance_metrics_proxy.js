// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// This must be kept in sync with BatterySaverModeState in
// components/performance_manager/public/user_tuning/prefs.h
export var BatterySaverModeState;
(function (BatterySaverModeState) {
    BatterySaverModeState[BatterySaverModeState["DISABLED"] = 0] = "DISABLED";
    BatterySaverModeState[BatterySaverModeState["ENABLED_BELOW_THRESHOLD"] = 1] = "ENABLED_BELOW_THRESHOLD";
    BatterySaverModeState[BatterySaverModeState["ENABLED_ON_BATTERY"] = 2] = "ENABLED_ON_BATTERY";
    BatterySaverModeState[BatterySaverModeState["ENABLED"] = 3] = "ENABLED";
    // Must be last.
    BatterySaverModeState[BatterySaverModeState["COUNT"] = 4] = "COUNT";
})(BatterySaverModeState || (BatterySaverModeState = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
export var HighEfficiencyModeExceptionListAction;
(function (HighEfficiencyModeExceptionListAction) {
    HighEfficiencyModeExceptionListAction[HighEfficiencyModeExceptionListAction["ADD_MANUAL"] = 0] = "ADD_MANUAL";
    HighEfficiencyModeExceptionListAction[HighEfficiencyModeExceptionListAction["EDIT"] = 1] = "EDIT";
    HighEfficiencyModeExceptionListAction[HighEfficiencyModeExceptionListAction["REMOVE"] = 2] = "REMOVE";
    HighEfficiencyModeExceptionListAction[HighEfficiencyModeExceptionListAction["ADD_FROM_CURRENT"] = 3] = "ADD_FROM_CURRENT";
    // Must be last.
    HighEfficiencyModeExceptionListAction[HighEfficiencyModeExceptionListAction["COUNT"] = 4] = "COUNT";
})(HighEfficiencyModeExceptionListAction || (HighEfficiencyModeExceptionListAction = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// This must be kept in sync with HighEfficiencyModeState in
// components/performance_manager/public/user_tuning/prefs.h
export var HighEfficiencyModeState;
(function (HighEfficiencyModeState) {
    HighEfficiencyModeState[HighEfficiencyModeState["DISABLED"] = 0] = "DISABLED";
    HighEfficiencyModeState[HighEfficiencyModeState["ENABLED"] = 1] = "ENABLED";
    HighEfficiencyModeState[HighEfficiencyModeState["ENABLED_ON_TIMER"] = 2] = "ENABLED_ON_TIMER";
    // Must be last.
    HighEfficiencyModeState[HighEfficiencyModeState["COUNT"] = 3] = "COUNT";
})(HighEfficiencyModeState || (HighEfficiencyModeState = {}));
export class PerformanceMetricsProxyImpl {
    recordBatterySaverModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.BatterySaver.SettingsChangeMode', state, BatterySaverModeState.COUNT);
    }
    recordHighEfficiencyModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.HighEfficiency.SettingsChangeMode2', state, HighEfficiencyModeState.COUNT);
    }
    recordExceptionListAction(action) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.HighEfficiency.SettingsChangeExceptionList', action, HighEfficiencyModeExceptionListAction.COUNT);
    }
    static getInstance() {
        return instance || (instance = new PerformanceMetricsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
