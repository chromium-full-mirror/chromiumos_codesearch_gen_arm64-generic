// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The opt-in status for saving devices to a user's account. Must be kept
 * in sync with nearby::fastpair::OptInStatus enum from
 * ash/quick_pair/proto/enums.proto.
 */
export var FastPairSavedDevicesOptInStatus;
(function (FastPairSavedDevicesOptInStatus) {
    FastPairSavedDevicesOptInStatus[FastPairSavedDevicesOptInStatus["STATUS_UKNOWN"] = 0] = "STATUS_UKNOWN";
    FastPairSavedDevicesOptInStatus[FastPairSavedDevicesOptInStatus["STATUS_OPTED_IN"] = 1] = "STATUS_OPTED_IN";
    FastPairSavedDevicesOptInStatus[FastPairSavedDevicesOptInStatus["STATUS_OPTED_OUT"] = 2] = "STATUS_OPTED_OUT";
    FastPairSavedDevicesOptInStatus[FastPairSavedDevicesOptInStatus["STATUS_ERROR_RETRIEVING_FROM_FOOTPRINTS_SERVER"] = 3] = "STATUS_ERROR_RETRIEVING_FROM_FOOTPRINTS_SERVER";
})(FastPairSavedDevicesOptInStatus || (FastPairSavedDevicesOptInStatus = {}));
