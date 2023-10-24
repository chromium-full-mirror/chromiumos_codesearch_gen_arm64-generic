// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Must be kept in sync with the C++ enum of the same name (see
 * chrome/browser/preloading/preloading_prefs.h).
 */
export var NetworkPredictionOptions;
(function (NetworkPredictionOptions) {
    NetworkPredictionOptions[NetworkPredictionOptions["STANDARD"] = 0] = "STANDARD";
    NetworkPredictionOptions[NetworkPredictionOptions["WIFI_ONLY_DEPRECATED"] = 1] = "WIFI_ONLY_DEPRECATED";
    NetworkPredictionOptions[NetworkPredictionOptions["DISABLED"] = 2] = "DISABLED";
    NetworkPredictionOptions[NetworkPredictionOptions["EXTENDED"] = 3] = "EXTENDED";
    NetworkPredictionOptions[NetworkPredictionOptions["DEFAULT"] = 1] = "DEFAULT";
})(NetworkPredictionOptions || (NetworkPredictionOptions = {}));
