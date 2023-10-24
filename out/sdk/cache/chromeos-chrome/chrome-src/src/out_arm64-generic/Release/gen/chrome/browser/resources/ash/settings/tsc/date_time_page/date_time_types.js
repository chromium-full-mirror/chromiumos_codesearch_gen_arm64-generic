// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Describes values of
 * prefs.generated.resolve_timezone_by_geolocation_method_short. Must be kept
 * in sync with TimeZoneResolverManager::TimeZoneResolveMethod enum.
 */
export var TimeZoneAutoDetectMethod;
(function (TimeZoneAutoDetectMethod) {
    TimeZoneAutoDetectMethod[TimeZoneAutoDetectMethod["DISABLED"] = 0] = "DISABLED";
    TimeZoneAutoDetectMethod[TimeZoneAutoDetectMethod["IP_ONLY"] = 1] = "IP_ONLY";
    TimeZoneAutoDetectMethod[TimeZoneAutoDetectMethod["SEND_WIFI_ACCESS_POINTS"] = 2] = "SEND_WIFI_ACCESS_POINTS";
    TimeZoneAutoDetectMethod[TimeZoneAutoDetectMethod["SEND_ALL_LOCATION_INFO"] = 3] = "SEND_ALL_LOCATION_INFO";
})(TimeZoneAutoDetectMethod || (TimeZoneAutoDetectMethod = {}));
