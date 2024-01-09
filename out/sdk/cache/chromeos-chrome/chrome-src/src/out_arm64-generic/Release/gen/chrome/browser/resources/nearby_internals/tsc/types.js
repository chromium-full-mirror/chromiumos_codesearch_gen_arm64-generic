// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Enum of values to use for the feature select dropdown. If a new feature is
 * added, add it here.
 */
export var FeatureValues;
(function (FeatureValues) {
    FeatureValues[FeatureValues["NEARBY_SHARE"] = 0] = "NEARBY_SHARE";
    FeatureValues[FeatureValues["NEARBY_CONNECTIONS"] = 1] = "NEARBY_CONNECTIONS";
    FeatureValues[FeatureValues["NEARBY_PRESENCE"] = 2] = "NEARBY_PRESENCE";
    FeatureValues[FeatureValues["FAST_PAIR"] = 3] = "FAST_PAIR";
    FeatureValues[FeatureValues["PUSH_NOTIFICATION"] = 4] = "PUSH_NOTIFICATION";
})(FeatureValues || (FeatureValues = {}));
/**
 * Enum of values to use for the action select dropdown. If a new action is
 * added, add it here.
 */
export var ActionValues;
(function (ActionValues) {
    ActionValues[ActionValues["START_SCAN"] = 0] = "START_SCAN";
    ActionValues[ActionValues["STOP_SCAN"] = 1] = "STOP_SCAN";
    ActionValues[ActionValues["SYNC_CREDENTIALS"] = 2] = "SYNC_CREDENTIALS";
    ActionValues[ActionValues["FIRST_TIME_FLOW"] = 3] = "FIRST_TIME_FLOW";
    ActionValues[ActionValues["RESET_NEARBY_SHARE"] = 4] = "RESET_NEARBY_SHARE";
    ActionValues[ActionValues["ADD_PUSH_NOTIFICATION_CLIENT"] = 5] = "ADD_PUSH_NOTIFICATION_CLIENT";
    ActionValues[ActionValues["SHOW_RECEIVED_NOTIFICATION"] = 6] = "SHOW_RECEIVED_NOTIFICATION";
})(ActionValues || (ActionValues = {}));
/**
 * Severity enum based on LogMessage format. Needs to stay in sync with the
 * NearbyInternalsLogsHandler.
 */
export var Severity;
(function (Severity) {
    Severity[Severity["VERBOSE"] = -1] = "VERBOSE";
    Severity[Severity["INFO"] = 0] = "INFO";
    Severity[Severity["WARNING"] = 1] = "WARNING";
    Severity[Severity["ERROR"] = 2] = "ERROR";
})(Severity || (Severity = {}));
/**
 * RPC enum based on the HTTP request/response object. Needs to stay in sync
 * with the NearbyInternalsHttpHandler C++ code, defined in
 * chrome/browser/ui/webui/nearby_internals/nearby_internals_http_handler.cc.
 */
export var Rpc;
(function (Rpc) {
    Rpc[Rpc["CERTIFICATE"] = 0] = "CERTIFICATE";
    Rpc[Rpc["CONTACT"] = 1] = "CONTACT";
    Rpc[Rpc["DEVICE"] = 2] = "DEVICE";
    Rpc[Rpc["DEVICE_STATE"] = 3] = "DEVICE_STATE";
})(Rpc || (Rpc = {}));
/**
 * Direction enum based on the HTTP request/response object. Needs to stay in
 * sync with the NearbyInternalsHttpHandler C++ code, defined in
 * chrome/browser/ui/webui/nearby_internals/nearby_internals_http_handler.cc.
 */
export var Direction;
(function (Direction) {
    Direction[Direction["REQUEST"] = 0] = "REQUEST";
    Direction[Direction["RESPONSE"] = 1] = "RESPONSE";
})(Direction || (Direction = {}));
/**
 * ShareTargetDiscoveryChange enum for display when ShareTarget is lost or
 * discovered.
 */
export var ShareTargetDiscoveryChange;
(function (ShareTargetDiscoveryChange) {
    ShareTargetDiscoveryChange[ShareTargetDiscoveryChange["DISCOVERED"] = 0] = "DISCOVERED";
    ShareTargetDiscoveryChange[ShareTargetDiscoveryChange["LOST"] = 1] = "LOST";
})(ShareTargetDiscoveryChange || (ShareTargetDiscoveryChange = {}));
