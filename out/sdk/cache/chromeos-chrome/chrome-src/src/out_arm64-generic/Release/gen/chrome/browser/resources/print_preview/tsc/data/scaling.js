// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Must be kept in sync with the C++ ScalingType enum in
 * printing/print_job_constants.h.
 */
export var ScalingType;
(function (ScalingType) {
    ScalingType[ScalingType["DEFAULT"] = 0] = "DEFAULT";
    ScalingType[ScalingType["FIT_TO_PAGE"] = 1] = "FIT_TO_PAGE";
    ScalingType[ScalingType["FIT_TO_PAPER"] = 2] = "FIT_TO_PAPER";
    ScalingType[ScalingType["CUSTOM"] = 3] = "CUSTOM";
})(ScalingType || (ScalingType = {}));
