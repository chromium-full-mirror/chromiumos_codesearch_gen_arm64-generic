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
export var MemorySaverModeExceptionListAction;
(function (MemorySaverModeExceptionListAction) {
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["ADD_MANUAL"] = 0] = "ADD_MANUAL";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["EDIT"] = 1] = "EDIT";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["REMOVE"] = 2] = "REMOVE";
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["ADD_FROM_CURRENT"] = 3] = "ADD_FROM_CURRENT";
    // Must be last.
    MemorySaverModeExceptionListAction[MemorySaverModeExceptionListAction["COUNT"] = 4] = "COUNT";
})(MemorySaverModeExceptionListAction || (MemorySaverModeExceptionListAction = {}));
// These values are persisted to logs. Entries should not be renumbered and
// numeric values should never be reused.
// This must be kept in sync with MemorySaverModeState in
// components/performance_manager/public/user_tuning/prefs.h
export var MemorySaverModeState;
(function (MemorySaverModeState) {
    MemorySaverModeState[MemorySaverModeState["DISABLED"] = 0] = "DISABLED";
    MemorySaverModeState[MemorySaverModeState["ENABLED"] = 1] = "ENABLED";
    MemorySaverModeState[MemorySaverModeState["ENABLED_ON_TIMER"] = 2] = "ENABLED_ON_TIMER";
    // Must be last.
    MemorySaverModeState[MemorySaverModeState["COUNT"] = 3] = "COUNT";
})(MemorySaverModeState || (MemorySaverModeState = {}));
export class PerformanceMetricsProxyImpl {
    recordBatterySaverModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.BatterySaver.SettingsChangeMode', state, BatterySaverModeState.COUNT);
    }
    recordMemorySaverModeChanged(state) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.MemorySaver.SettingsChangeMode', state, MemorySaverModeState.COUNT);
    }
    recordExceptionListAction(action) {
        chrome.metricsPrivate.recordEnumerationValue('PerformanceControls.MemorySaver.SettingsChangeExceptionList', action, MemorySaverModeExceptionListAction.COUNT);
    }
    static getInstance() {
        return instance || (instance = new PerformanceMetricsProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
