// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Radio band related to channel frequency.
export var ChannelBand;
(function (ChannelBand) {
    ChannelBand[ChannelBand["UNKNOWN"] = 0] = "UNKNOWN";
    /** 5Ghz radio band. */
    ChannelBand[ChannelBand["FIVE_GHZ"] = 1] = "FIVE_GHZ";
    /** 2.4Ghz radio band. */
    ChannelBand[ChannelBand["TWO_DOT_FOUR_GHZ"] = 2] = "TWO_DOT_FOUR_GHZ";
})(ChannelBand || (ChannelBand = {}));
/**
 * Type alias for ash::diagnostics::metrics::NavigationView to support message
 * handler logic and metric recording. Enum values need to be kept in sync with
 * "ash/webui/diagnostics_ui/diagnostics_metrics_message_handler.h".
 */
export var NavigationView;
(function (NavigationView) {
    NavigationView[NavigationView["SYSTEM"] = 0] = "SYSTEM";
    NavigationView[NavigationView["CONNECTIVITY"] = 1] = "CONNECTIVITY";
    NavigationView[NavigationView["INPUT"] = 2] = "INPUT";
    NavigationView[NavigationView["MAX_VALUE"] = 3] = "MAX_VALUE";
})(NavigationView || (NavigationView = {}));
