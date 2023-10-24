// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/** @fileoverview Handles metrics for the settings pages. */
/**
 * Contains all possible recorded interactions across privacy settings pages.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SettingsPrivacyElementInteractions enum in
 * histograms/enums.xml
 */
export var PrivacyElementInteractions;
(function (PrivacyElementInteractions) {
    PrivacyElementInteractions[PrivacyElementInteractions["SYNC_AND_GOOGLE_SERVICES"] = 0] = "SYNC_AND_GOOGLE_SERVICES";
    PrivacyElementInteractions[PrivacyElementInteractions["CHROME_SIGN_IN"] = 1] = "CHROME_SIGN_IN";
    PrivacyElementInteractions[PrivacyElementInteractions["DO_NOT_TRACK"] = 2] = "DO_NOT_TRACK";
    PrivacyElementInteractions[PrivacyElementInteractions["PAYMENT_METHOD"] = 3] = "PAYMENT_METHOD";
    PrivacyElementInteractions[PrivacyElementInteractions["NETWORK_PREDICTION"] = 4] = "NETWORK_PREDICTION";
    PrivacyElementInteractions[PrivacyElementInteractions["MANAGE_CERTIFICATES"] = 5] = "MANAGE_CERTIFICATES";
    PrivacyElementInteractions[PrivacyElementInteractions["SAFE_BROWSING"] = 6] = "SAFE_BROWSING";
    PrivacyElementInteractions[PrivacyElementInteractions["PASSWORD_CHECK"] = 7] = "PASSWORD_CHECK";
    PrivacyElementInteractions[PrivacyElementInteractions["IMPROVE_SECURITY"] = 8] = "IMPROVE_SECURITY";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIES_ALL"] = 9] = "COOKIES_ALL";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIES_INCOGNITO"] = 10] = "COOKIES_INCOGNITO";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIES_THIRD"] = 11] = "COOKIES_THIRD";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIES_BLOCK"] = 12] = "COOKIES_BLOCK";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIES_SESSION"] = 13] = "COOKIES_SESSION";
    PrivacyElementInteractions[PrivacyElementInteractions["SITE_DATA_REMOVE_ALL"] = 14] = "SITE_DATA_REMOVE_ALL";
    PrivacyElementInteractions[PrivacyElementInteractions["SITE_DATA_REMOVE_FILTERED"] = 15] = "SITE_DATA_REMOVE_FILTERED";
    PrivacyElementInteractions[PrivacyElementInteractions["SITE_DATA_REMOVE_SITE"] = 16] = "SITE_DATA_REMOVE_SITE";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIE_DETAILS_REMOVE_ALL"] = 17] = "COOKIE_DETAILS_REMOVE_ALL";
    PrivacyElementInteractions[PrivacyElementInteractions["COOKIE_DETAILS_REMOVE_ITEM"] = 18] = "COOKIE_DETAILS_REMOVE_ITEM";
    PrivacyElementInteractions[PrivacyElementInteractions["SITE_DETAILS_CLEAR_DATA"] = 19] = "SITE_DETAILS_CLEAR_DATA";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_ALLOW"] = 20] = "THIRD_PARTY_COOKIES_ALLOW";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO"] = 21] = "THIRD_PARTY_COOKIES_BLOCK_IN_INCOGNITO";
    PrivacyElementInteractions[PrivacyElementInteractions["THIRD_PARTY_COOKIES_BLOCK"] = 22] = "THIRD_PARTY_COOKIES_BLOCK";
    PrivacyElementInteractions[PrivacyElementInteractions["BLOCK_ALL_THIRD_PARTY_COOKIES"] = 23] = "BLOCK_ALL_THIRD_PARTY_COOKIES";
    // Max value should be updated whenever new entries are added.
    PrivacyElementInteractions[PrivacyElementInteractions["MAX_VALUE"] = 24] = "MAX_VALUE";
})(PrivacyElementInteractions || (PrivacyElementInteractions = {}));
/**
 * Contains all safety check interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyCheckInteractions enum in
 * histograms/enums.xml
 */
export var SafetyCheckInteractions;
(function (SafetyCheckInteractions) {
    SafetyCheckInteractions[SafetyCheckInteractions["RUN_SAFETY_CHECK"] = 0] = "RUN_SAFETY_CHECK";
    SafetyCheckInteractions[SafetyCheckInteractions["UPDATES_RELAUNCH"] = 1] = "UPDATES_RELAUNCH";
    SafetyCheckInteractions[SafetyCheckInteractions["PASSWORDS_MANAGE_COMPROMISED_PASSWORDS"] = 2] = "PASSWORDS_MANAGE_COMPROMISED_PASSWORDS";
    SafetyCheckInteractions[SafetyCheckInteractions["SAFE_BROWSING_MANAGE"] = 3] = "SAFE_BROWSING_MANAGE";
    SafetyCheckInteractions[SafetyCheckInteractions["EXTENSIONS_REVIEW"] = 4] = "EXTENSIONS_REVIEW";
    // Deprecated in https://crbug.com/1407233.
    SafetyCheckInteractions[SafetyCheckInteractions["CHROME_CLEANER_REBOOT"] = 5] = "CHROME_CLEANER_REBOOT";
    // Deprecated in https://crbug.com/1407233.
    SafetyCheckInteractions[SafetyCheckInteractions["CHROME_CLEANER_REVIEW_INFECTED_STATE"] = 6] = "CHROME_CLEANER_REVIEW_INFECTED_STATE";
    SafetyCheckInteractions[SafetyCheckInteractions["PASSWORDS_CARET_NAVIGATION"] = 7] = "PASSWORDS_CARET_NAVIGATION";
    SafetyCheckInteractions[SafetyCheckInteractions["SAFE_BROWSING_CARET_NAVIGATION"] = 8] = "SAFE_BROWSING_CARET_NAVIGATION";
    SafetyCheckInteractions[SafetyCheckInteractions["EXTENSIONS_CARET_NAVIGATION"] = 9] = "EXTENSIONS_CARET_NAVIGATION";
    // Deprecated in https://crbug.com/1407233.
    SafetyCheckInteractions[SafetyCheckInteractions["CHROME_CLEANER_CARET_NAVIGATION"] = 10] = "CHROME_CLEANER_CARET_NAVIGATION";
    SafetyCheckInteractions[SafetyCheckInteractions["PASSWORDS_MANAGE_WEAK_PASSWORDS"] = 11] = "PASSWORDS_MANAGE_WEAK_PASSWORDS";
    SafetyCheckInteractions[SafetyCheckInteractions["UNUSED_SITE_PERMISSIONS_REVIEW"] = 12] = "UNUSED_SITE_PERMISSIONS_REVIEW";
    // Max value should be updated whenever new entries are added.
    SafetyCheckInteractions[SafetyCheckInteractions["MAX_VALUE"] = 13] = "MAX_VALUE";
})(SafetyCheckInteractions || (SafetyCheckInteractions = {}));
/**
 * Contains all safety check notifications module interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the SafetyCheckNotificationsModuleInteractions enum
 * in histograms/enums.xml
 */
export var SafetyCheckNotificationsModuleInteractions;
(function (SafetyCheckNotificationsModuleInteractions) {
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["BLOCK"] = 0] = "BLOCK";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["BLOCK_ALL"] = 1] = "BLOCK_ALL";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["IGNORE"] = 2] = "IGNORE";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["MINIMIZE"] = 3] = "MINIMIZE";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["RESET"] = 4] = "RESET";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["UNDO_BLOCK"] = 5] = "UNDO_BLOCK";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["UNDO_IGNORE"] = 6] = "UNDO_IGNORE";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["UNDO_RESET"] = 7] = "UNDO_RESET";
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["OPEN_REVIEW_UI"] = 8] = "OPEN_REVIEW_UI";
    // Max value should be updated whenever new entries are added.
    SafetyCheckNotificationsModuleInteractions[SafetyCheckNotificationsModuleInteractions["MAX_VALUE"] = 9] = "MAX_VALUE";
})(SafetyCheckNotificationsModuleInteractions || (SafetyCheckNotificationsModuleInteractions = {}));
/**
 * Contains all safety check unused site permissions module interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the
 * SafetyChecUnusedSitePermissionsModuleInteractions enum in
 * histograms/enums.xml
 */
export var SafetyCheckUnusedSitePermissionsModuleInteractions;
(function (SafetyCheckUnusedSitePermissionsModuleInteractions) {
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["OPEN_REVIEW_UI"] = 0] = "OPEN_REVIEW_UI";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["ALLOW_AGAIN"] = 1] = "ALLOW_AGAIN";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["ACKNOWLEDGE_ALL"] = 2] = "ACKNOWLEDGE_ALL";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["UNDO_ALLOW_AGAIN"] = 3] = "UNDO_ALLOW_AGAIN";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["UNDO_ACKNOWLEDGE_ALL"] = 4] = "UNDO_ACKNOWLEDGE_ALL";
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["MINIMIZE"] = 5] = "MINIMIZE";
    // Max value should be updated whenever new entries are added.
    SafetyCheckUnusedSitePermissionsModuleInteractions[SafetyCheckUnusedSitePermissionsModuleInteractions["MAX_VALUE"] = 6] = "MAX_VALUE";
})(SafetyCheckUnusedSitePermissionsModuleInteractions || (SafetyCheckUnusedSitePermissionsModuleInteractions = {}));
/**
 * Contains all safe browsing interactions.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with the UserAction in safe_browsing_settings_metrics.h.
 */
export var SafeBrowsingInteractions;
(function (SafeBrowsingInteractions) {
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_SHOWED"] = 0] = "SAFE_BROWSING_SHOWED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED"] = 1] = "SAFE_BROWSING_ENHANCED_PROTECTION_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_STANDARD_PROTECTION_CLICKED"] = 2] = "SAFE_BROWSING_STANDARD_PROTECTION_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED"] = 3] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED"] = 4] = "SAFE_BROWSING_ENHANCED_PROTECTION_EXPAND_ARROW_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED"] = 5] = "SAFE_BROWSING_STANDARD_PROTECTION_EXPAND_ARROW_CLICKED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED"] = 6] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_CONFIRMED";
    SafeBrowsingInteractions[SafeBrowsingInteractions["SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED"] = 7] = "SAFE_BROWSING_DISABLE_SAFE_BROWSING_DIALOG_DENIED";
    // Max value should be updated whenever new entries are added.
    SafeBrowsingInteractions[SafeBrowsingInteractions["MAX_VALUE"] = 8] = "MAX_VALUE";
})(SafeBrowsingInteractions || (SafeBrowsingInteractions = {}));
/**
 * All Privacy guide interactions with metrics.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideInteractions in emus.xml and
 * PrivacyGuideInteractions in privacy_guide/privacy_guide.h.
 */
export var PrivacyGuideInteractions;
(function (PrivacyGuideInteractions) {
    PrivacyGuideInteractions[PrivacyGuideInteractions["WELCOME_NEXT_BUTTON"] = 0] = "WELCOME_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["MSBB_NEXT_BUTTON"] = 1] = "MSBB_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["HISTORY_SYNC_NEXT_BUTTON"] = 2] = "HISTORY_SYNC_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SAFE_BROWSING_NEXT_BUTTON"] = 3] = "SAFE_BROWSING_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["COOKIES_NEXT_BUTTON"] = 4] = "COOKIES_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["COMPLETION_NEXT_BUTTON"] = 5] = "COMPLETION_NEXT_BUTTON";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SETTINGS_LINK_ROW_ENTRY"] = 6] = "SETTINGS_LINK_ROW_ENTRY";
    PrivacyGuideInteractions[PrivacyGuideInteractions["PROMO_ENTRY"] = 7] = "PROMO_ENTRY";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SWAA_COMPLETION_LINK"] = 8] = "SWAA_COMPLETION_LINK";
    PrivacyGuideInteractions[PrivacyGuideInteractions["PRIVACY_SANDBOX_COMPLETION_LINK"] = 9] = "PRIVACY_SANDBOX_COMPLETION_LINK";
    PrivacyGuideInteractions[PrivacyGuideInteractions["SEARCH_SUGGESTIONS_NEXT_BUTTON"] = 10] = "SEARCH_SUGGESTIONS_NEXT_BUTTON";
    // Max value should be updated whenever new entries are added.
    PrivacyGuideInteractions[PrivacyGuideInteractions["MAX_VALUE"] = 11] = "MAX_VALUE";
})(PrivacyGuideInteractions || (PrivacyGuideInteractions = {}));
/**
 * This enum covers all possible combinations of the start and end
 * settings states for each Privacy guide fragment, allowing metrics to see if
 * users change their settings inside of Privacy guide or not. The format is
 * settingAtStart-To-settingAtEnd.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideSettingsStates in enums.xml and
 * PrivacyGuideSettingsStates in privacy_guide/privacy_guide.h.
 */
export var PrivacyGuideSettingsStates;
(function (PrivacyGuideSettingsStates) {
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_ON_TO_ON"] = 0] = "MSBB_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_ON_TO_OFF"] = 1] = "MSBB_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_OFF_TO_ON"] = 2] = "MSBB_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MSBB_OFF_TO_OFF"] = 3] = "MSBB_OFF_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO"] = 4] = "BLOCK_3P_INCOGNITO_TO_3P_INCOGNITO";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_INCOGNITO_TO_3P"] = 5] = "BLOCK_3P_INCOGNITO_TO_3P";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_TO_3P_INCOGNITO"] = 6] = "BLOCK_3P_TO_3P_INCOGNITO";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["BLOCK_3P_TO_3P"] = 7] = "BLOCK_3P_TO_3P";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_ON_TO_ON"] = 8] = "HISTORY_SYNC_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_ON_TO_OFF"] = 9] = "HISTORY_SYNC_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_OFF_TO_ON"] = 10] = "HISTORY_SYNC_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["HISTORY_SYNC_OFF_TO_OFF"] = 11] = "HISTORY_SYNC_OFF_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_ENHANCED_TO_ENHANCED"] = 12] = "SAFE_BROWSING_ENHANCED_TO_ENHANCED";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_ENHANCED_TO_STANDARD"] = 13] = "SAFE_BROWSING_ENHANCED_TO_STANDARD";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_STANDARD_TO_ENHANCED"] = 14] = "SAFE_BROWSING_STANDARD_TO_ENHANCED";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SAFE_BROWSING_STANDARD_TO_STANDARD"] = 15] = "SAFE_BROWSING_STANDARD_TO_STANDARD";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_ON_TO_ON"] = 16] = "SEARCH_SUGGESTIONS_ON_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_ON_TO_OFF"] = 17] = "SEARCH_SUGGESTIONS_ON_TO_OFF";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_OFF_TO_ON"] = 18] = "SEARCH_SUGGESTIONS_OFF_TO_ON";
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["SEARCH_SUGGESTIONS_OFF_TO_OFF"] = 19] = "SEARCH_SUGGESTIONS_OFF_TO_OFF";
    // Max value should be updated whenever new entries are added.
    PrivacyGuideSettingsStates[PrivacyGuideSettingsStates["MAX_VALUE"] = 20] = "MAX_VALUE";
})(PrivacyGuideSettingsStates || (PrivacyGuideSettingsStates = {}));
/**
 * This enum is used with metrics to record when a step in the privacy guide is
 * eligible to be shown and/or reached by the user.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Must be kept in sync with SettingsPrivacyGuideStepsEligibleAndReached in
 * emus.xml and PrivacyGuideStepsEligibleAndReached in
 * privacy_guide/privacy_guide.h.
 */
export var PrivacyGuideStepsEligibleAndReached;
(function (PrivacyGuideStepsEligibleAndReached) {
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["MSBB_ELIGIBLE"] = 0] = "MSBB_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["MSBB_REACHED"] = 1] = "MSBB_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["HISTORY_SYNC_ELIGIBLE"] = 2] = "HISTORY_SYNC_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["HISTORY_SYNC_REACHED"] = 3] = "HISTORY_SYNC_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SAFE_BROWSING_ELIGIBLE"] = 4] = "SAFE_BROWSING_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SAFE_BROWSING_REACHED"] = 5] = "SAFE_BROWSING_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COOKIES_ELIGIBLE"] = 6] = "COOKIES_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COOKIES_REACHED"] = 7] = "COOKIES_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COMPLETION_ELIGIBLE"] = 8] = "COMPLETION_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COMPLETION_REACHED"] = 9] = "COMPLETION_REACHED";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SEARCH_SUGGESTIONS_ELIGIBLE"] = 10] = "SEARCH_SUGGESTIONS_ELIGIBLE";
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["SEARCH_SUGGESTIONS_REACHED"] = 11] = "SEARCH_SUGGESTIONS_REACHED";
    // Leave this at the end.
    PrivacyGuideStepsEligibleAndReached[PrivacyGuideStepsEligibleAndReached["COUNT"] = 12] = "COUNT";
})(PrivacyGuideStepsEligibleAndReached || (PrivacyGuideStepsEligibleAndReached = {}));
/**
 * Contains the possible delete browsing data action types.
 * This should be kept in sync with the `DeleteBrowsingDataAction` enum in
 * components/browsing_data/core/browsing_data_utils.h
 */
export var DeleteBrowsingDataAction;
(function (DeleteBrowsingDataAction) {
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["CLEAR_BROWSING_DATA_DIALOG"] = 0] = "CLEAR_BROWSING_DATA_DIALOG";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["CLEAR_BROWSING_DATA_ON_EXIT"] = 1] = "CLEAR_BROWSING_DATA_ON_EXIT";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["INCOGNITO_CLOSE_TABS"] = 2] = "INCOGNITO_CLOSE_TABS";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["COOKIES_IN_USE_DIALOG"] = 3] = "COOKIES_IN_USE_DIALOG";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["SITES_SETTINGS_PAGE"] = 4] = "SITES_SETTINGS_PAGE";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["HISTORY_PAGE_ENTRIES"] = 5] = "HISTORY_PAGE_ENTRIES";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["QUICK_DELETE"] = 6] = "QUICK_DELETE";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["PAGE_INFO_RESET_PERMISSIONS"] = 7] = "PAGE_INFO_RESET_PERMISSIONS";
    DeleteBrowsingDataAction[DeleteBrowsingDataAction["MAX_VALUE"] = 8] = "MAX_VALUE";
})(DeleteBrowsingDataAction || (DeleteBrowsingDataAction = {}));
export class MetricsBrowserProxyImpl {
    recordAction(action) {
        chrome.send('metricsHandler:recordAction', [action]);
    }
    recordSafetyCheckInteractionHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyCheck.Interactions',
            interaction,
            SafetyCheckInteractions.MAX_VALUE,
        ]);
    }
    recordSafetyCheckNotificationsListCountHistogram(suggestions) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyCheck.NotificationsListCount',
            suggestions,
            99 /*max value for Notification suggestions*/,
        ]);
    }
    recordSafetyCheckNotificationsModuleInteractionsHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyCheck.NotificationsModuleInteractions',
            interaction,
            SafetyCheckNotificationsModuleInteractions.MAX_VALUE,
        ]);
    }
    recordSafetyCheckNotificationsModuleEntryPointShown(visible) {
        chrome.send('metricsHandler:recordBooleanHistogram', [
            'Settings.SafetyCheck.NotificationsModuleEntryPointShown',
            visible,
        ]);
    }
    recordSafetyCheckUnusedSitePermissionsListCountHistogram(suggestions) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyCheck.UnusedSitePermissionsListCount',
            suggestions,
            99 /*max value for length of revoked permissions list*/,
        ]);
    }
    recordSafetyCheckUnusedSitePermissionsModuleInteractionsHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.SafetyCheck.UnusedSitePermissionsModuleInteractions',
            interaction,
            SafetyCheckUnusedSitePermissionsModuleInteractions.MAX_VALUE,
        ]);
    }
    recordSafetyCheckUnusedSitePermissionsModuleEntryPointShown(visible) {
        chrome.send('metricsHandler:recordBooleanHistogram', [
            'Settings.SafetyCheck.UnusedSitePermissionsModuleEntryPointShown',
            visible,
        ]);
    }
    recordSettingsPageHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyElementInteractions',
            interaction,
            PrivacyElementInteractions.MAX_VALUE,
        ]);
    }
    recordSafeBrowsingInteractionHistogram(interaction) {
        // TODO(crbug.com/1124491): Set the correct suffix for
        // SafeBrowsing.Settings.UserAction. Use the .Default suffix for now.
        chrome.send('metricsHandler:recordInHistogram', [
            'SafeBrowsing.Settings.UserAction.Default',
            interaction,
            SafeBrowsingInteractions.MAX_VALUE,
        ]);
    }
    recordPrivacyGuideNextNavigationHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.NextNavigation',
            interaction,
            PrivacyGuideInteractions.MAX_VALUE,
        ]);
    }
    recordPrivacyGuideEntryExitHistogram(interaction) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.EntryExit',
            interaction,
            PrivacyGuideInteractions.MAX_VALUE,
        ]);
    }
    recordPrivacyGuideSettingsStatesHistogram(state) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.SettingsStates',
            state,
            PrivacyGuideSettingsStates.MAX_VALUE,
        ]);
    }
    recordPrivacyGuideFlowLengthHistogram(steps) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.FlowLength', steps,
            5, /*max number of the settings related steps in privacy guide is 4*/
        ]);
    }
    recordPrivacyGuideStepsEligibleAndReachedHistogram(status) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Settings.PrivacyGuide.StepsEligibleAndReached',
            status,
            PrivacyGuideStepsEligibleAndReached.COUNT,
        ]);
    }
    recordDeleteBrowsingDataAction(action) {
        chrome.send('metricsHandler:recordInHistogram', [
            'Privacy.DeleteBrowsingData.Action',
            action,
            DeleteBrowsingDataAction.MAX_VALUE,
        ]);
    }
    static getInstance() {
        return instance || (instance = new MetricsBrowserProxyImpl());
    }
    static setInstance(obj) {
        instance = obj;
    }
}
let instance = null;
