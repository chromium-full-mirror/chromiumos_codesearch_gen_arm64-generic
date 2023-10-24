// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const RESULTS_PER_PAGE = 150;
/**
 * Amount of time between pageviews that we consider a 'break' in browsing,
 * measured in milliseconds.
 */
export const BROWSING_GAP_TIME = 15 * 60 * 1000;
/**
 * Histogram buckets for UMA tracking of which view is being shown to the user.
 * Keep this in sync with the HistoryPageView enum in histograms.xml.
 * This enum is append-only.
 */
export var HistoryPageViewHistogram;
(function (HistoryPageViewHistogram) {
    HistoryPageViewHistogram[HistoryPageViewHistogram["HISTORY"] = 0] = "HISTORY";
    HistoryPageViewHistogram[HistoryPageViewHistogram["DEPRECATED_GROUPED_WEEK"] = 1] = "DEPRECATED_GROUPED_WEEK";
    HistoryPageViewHistogram[HistoryPageViewHistogram["DEPRECATED_GROUPED_MONTH"] = 2] = "DEPRECATED_GROUPED_MONTH";
    HistoryPageViewHistogram[HistoryPageViewHistogram["SYNCED_TABS"] = 3] = "SYNCED_TABS";
    HistoryPageViewHistogram[HistoryPageViewHistogram["SIGNIN_PROMO"] = 4] = "SIGNIN_PROMO";
    HistoryPageViewHistogram[HistoryPageViewHistogram["JOURNEYS"] = 5] = "JOURNEYS";
    HistoryPageViewHistogram[HistoryPageViewHistogram["END"] = 6] = "END";
})(HistoryPageViewHistogram || (HistoryPageViewHistogram = {}));
export const SYNCED_TABS_HISTOGRAM_NAME = 'HistoryPage.OtherDevicesMenu';
/**
 * Histogram buckets for UMA tracking of synced tabs. Keep in sync with
 * chrome/browser/ui/webui/foreign_session_handler.h. These values are persisted
 * to logs. Entries should not be renumbered and numeric values should never be
 * reused.
 */
export var SyncedTabsHistogram;
(function (SyncedTabsHistogram) {
    SyncedTabsHistogram[SyncedTabsHistogram["INITIALIZED"] = 0] = "INITIALIZED";
    SyncedTabsHistogram[SyncedTabsHistogram["SHOW_MENU_DEPRECATED"] = 1] = "SHOW_MENU_DEPRECATED";
    SyncedTabsHistogram[SyncedTabsHistogram["LINK_CLICKED"] = 2] = "LINK_CLICKED";
    SyncedTabsHistogram[SyncedTabsHistogram["LINK_RIGHT_CLICKED"] = 3] = "LINK_RIGHT_CLICKED";
    SyncedTabsHistogram[SyncedTabsHistogram["SESSION_NAME_RIGHT_CLICKED_DEPRECATED"] = 4] = "SESSION_NAME_RIGHT_CLICKED_DEPRECATED";
    SyncedTabsHistogram[SyncedTabsHistogram["SHOW_SESSION_MENU"] = 5] = "SHOW_SESSION_MENU";
    SyncedTabsHistogram[SyncedTabsHistogram["COLLAPSE_SESSION"] = 6] = "COLLAPSE_SESSION";
    SyncedTabsHistogram[SyncedTabsHistogram["EXPAND_SESSION"] = 7] = "EXPAND_SESSION";
    SyncedTabsHistogram[SyncedTabsHistogram["OPEN_ALL"] = 8] = "OPEN_ALL";
    SyncedTabsHistogram[SyncedTabsHistogram["HAS_FOREIGN_DATA"] = 9] = "HAS_FOREIGN_DATA";
    SyncedTabsHistogram[SyncedTabsHistogram["HIDE_FOR_NOW"] = 10] = "HIDE_FOR_NOW";
    SyncedTabsHistogram[SyncedTabsHistogram["OPENED_LINK_VIA_CONTEXT_MENU"] = 11] = "OPENED_LINK_VIA_CONTEXT_MENU";
    SyncedTabsHistogram[SyncedTabsHistogram["LIMIT"] = 12] = "LIMIT"; // Should always be the last one.
})(SyncedTabsHistogram || (SyncedTabsHistogram = {}));
