// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * The reason a page was closed. Keep in sync with NearbyShareDialogUI.
 */
export var CloseReason;
(function (CloseReason) {
    CloseReason[CloseReason["UNKNOWN"] = 0] = "UNKNOWN";
    CloseReason[CloseReason["TRANSFER_STARTED"] = 1] = "TRANSFER_STARTED";
    CloseReason[CloseReason["TRANSFER_SUCCEEDED"] = 2] = "TRANSFER_SUCCEEDED";
    CloseReason[CloseReason["CANCELLED"] = 3] = "CANCELLED";
    CloseReason[CloseReason["REJECTED"] = 4] = "REJECTED";
})(CloseReason || (CloseReason = {}));
