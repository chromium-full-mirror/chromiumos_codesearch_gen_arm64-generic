// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * All possible contentSettingsTypes that we currently support configuring in
 * the UI. Both top-level categories and content settings that represent
 * individual permissions under Site Details should appear here.
 * This should be kept in sync with the |kContentSettingsTypeGroupNames| array
 * in chrome/browser/ui/webui/settings/site_settings_helper.cc. See
 * chrome/browser/resources/settings/site_settings_page/site_settings_page_util
 * for translations.
 */
export var ContentSettingsTypes;
(function (ContentSettingsTypes) {
    ContentSettingsTypes["ADS"] = "ads";
    ContentSettingsTypes["ANTI_ABUSE"] = "anti-abuse";
    ContentSettingsTypes["AR"] = "ar";
    ContentSettingsTypes["AUTO_PICTURE_IN_PICTURE"] = "auto-picture-in-picture";
    ContentSettingsTypes["AUTOMATIC_DOWNLOADS"] = "multiple-automatic-downloads";
    ContentSettingsTypes["BACKGROUND_SYNC"] = "background-sync";
    ContentSettingsTypes["BLUETOOTH_DEVICES"] = "bluetooth-devices";
    ContentSettingsTypes["BLUETOOTH_SCANNING"] = "bluetooth-scanning";
    ContentSettingsTypes["CAMERA"] = "media-stream-camera";
    ContentSettingsTypes["CLIPBOARD"] = "clipboard";
    ContentSettingsTypes["COOKIES"] = "cookies";
    ContentSettingsTypes["FEDERATED_IDENTITY_API"] = "federated-identity-api";
    ContentSettingsTypes["FILE_SYSTEM_WRITE"] = "file-system-write";
    ContentSettingsTypes["GEOLOCATION"] = "location";
    ContentSettingsTypes["HID_DEVICES"] = "hid-devices";
    ContentSettingsTypes["IDLE_DETECTION"] = "idle-detection";
    ContentSettingsTypes["IMAGES"] = "images";
    ContentSettingsTypes["JAVASCRIPT"] = "javascript";
    ContentSettingsTypes["LOCAL_FONTS"] = "local-fonts";
    ContentSettingsTypes["MIC"] = "media-stream-mic";
    ContentSettingsTypes["MIDI"] = "midi";
    ContentSettingsTypes["MIDI_DEVICES"] = "midi-sysex";
    ContentSettingsTypes["MIXEDSCRIPT"] = "mixed-script";
    ContentSettingsTypes["NOTIFICATIONS"] = "notifications";
    ContentSettingsTypes["PAYMENT_HANDLER"] = "payment-handler";
    ContentSettingsTypes["POPUPS"] = "popups";
    ContentSettingsTypes["PRIVATE_NETWORK_DEVICES"] = "private-network-devices";
    ContentSettingsTypes["PROTECTED_CONTENT"] = "protected-content";
    ContentSettingsTypes["PROTOCOL_HANDLERS"] = "register-protocol-handler";
    ContentSettingsTypes["SENSORS"] = "sensors";
    ContentSettingsTypes["SERIAL_PORTS"] = "serial-ports";
    ContentSettingsTypes["SOUND"] = "sound";
    ContentSettingsTypes["STORAGE_ACCESS"] = "storage-access";
    ContentSettingsTypes["USB_DEVICES"] = "usb-devices";
    ContentSettingsTypes["VR"] = "vr";
    ContentSettingsTypes["WINDOW_MANAGEMENT"] = "window-placement";
    ContentSettingsTypes["ZOOM_LEVELS"] = "zoom-levels";
    // The following items are not in the C++ kContentSettingsTypeGroupNames, but
    // are used everywhere where ContentSettingsTypes is used in JS.
    ContentSettingsTypes["PDF_DOCUMENTS"] = "pdfDocuments";
    ContentSettingsTypes["SITE_DATA"] = "site-data";
})(ContentSettingsTypes || (ContentSettingsTypes = {}));
/**
 * Contains the possible string values for a given ContentSettingsTypes.
 * This should be kept in sync with the |ContentSetting| enum in
 * components/content_settings/core/common/content_settings.h
 */
export var ContentSetting;
(function (ContentSetting) {
    ContentSetting["DEFAULT"] = "default";
    ContentSetting["ALLOW"] = "allow";
    ContentSetting["BLOCK"] = "block";
    ContentSetting["ASK"] = "ask";
    ContentSetting["SESSION_ONLY"] = "session_only";
    ContentSetting["IMPORTANT_CONTENT"] = "detect_important_content";
})(ContentSetting || (ContentSetting = {}));
/**
 * All possible ChooserTypes that we currently support configuring in the UI.
 * This should be kept in sync with the |kChooserTypeGroupNames| array in
 * chrome/browser/ui/webui/settings/site_settings_helper.cc
 */
export var ChooserType;
(function (ChooserType) {
    ChooserType["NONE"] = "";
    ChooserType["USB_DEVICES"] = "usb-devices-data";
    ChooserType["SERIAL_PORTS"] = "serial-ports-data";
    ChooserType["HID_DEVICES"] = "hid-devices-data";
    ChooserType["BLUETOOTH_DEVICES"] = "bluetooth-devices-data";
    ChooserType["PRIVATE_NETWORK_DEVICES"] = "private-network-devices-data";
})(ChooserType || (ChooserType = {}));
/**
 * Possible preference settings for the profile.cookie_controls_mode pref.
 * This should be kept in sync with the |CookieControlsMode| enum in
 * components/content_settings/core/browser/cookie_settings.h
 */
export var CookieControlsMode;
(function (CookieControlsMode) {
    CookieControlsMode[CookieControlsMode["OFF"] = 0] = "OFF";
    CookieControlsMode[CookieControlsMode["BLOCK_THIRD_PARTY"] = 1] = "BLOCK_THIRD_PARTY";
    CookieControlsMode[CookieControlsMode["INCOGNITO_ONLY"] = 2] = "INCOGNITO_ONLY";
})(CookieControlsMode || (CookieControlsMode = {}));
/**
 * Contains the possible sources of a ContentSetting.
 * This should be kept in sync with the |SiteSettingSource| enum in
 * chrome/browser/ui/webui/settings/site_settings_helper.h
 */
export var SiteSettingSource;
(function (SiteSettingSource) {
    SiteSettingSource["ADS_FILTER_BLACKLIST"] = "ads-filter-blacklist";
    SiteSettingSource["ALLOWLIST"] = "allowlist";
    SiteSettingSource["DEFAULT"] = "default";
    SiteSettingSource["EMBARGO"] = "embargo";
    SiteSettingSource["EXTENSION"] = "extension";
    SiteSettingSource["HOSTED_APP"] = "HostedApp";
    SiteSettingSource["INSECURE_ORIGIN"] = "insecure-origin";
    SiteSettingSource["KILL_SWITCH"] = "kill-switch";
    SiteSettingSource["POLICY"] = "policy";
    SiteSettingSource["PREFERENCE"] = "preference";
})(SiteSettingSource || (SiteSettingSource = {}));
/**
 * Enumeration of states for the notification and geolocation default setting
 * generated pref. Must be kept in sync with the SettingsState enum in:
 * chrome/browser/content_settings/generated_permission_prompting_behavior_pref.h
 */
export var SettingsState;
(function (SettingsState) {
    SettingsState[SettingsState["LOUD"] = 0] = "LOUD";
    SettingsState[SettingsState["QUIET"] = 1] = "QUIET";
    SettingsState[SettingsState["CPSS"] = 2] = "CPSS";
    SettingsState[SettingsState["BLOCK"] = 3] = "BLOCK";
})(SettingsState || (SettingsState = {}));
/**
 * An invalid subtype value.
 */
export const INVALID_CATEGORY_SUBTYPE = '';
/**
 * Contains the possible record action types.
 * This should be kept in sync with the |AllSitesAction2| enum in
 * chrome/browser/ui/webui/settings/site_settings_handler.cc
 */
export var AllSitesAction2;
(function (AllSitesAction2) {
    AllSitesAction2[AllSitesAction2["LOAD_PAGE"] = 0] = "LOAD_PAGE";
    AllSitesAction2[AllSitesAction2["RESET_SITE_GROUP_PERMISSIONS"] = 1] = "RESET_SITE_GROUP_PERMISSIONS";
    AllSitesAction2[AllSitesAction2["RESET_ORIGIN_PERMISSIONS"] = 2] = "RESET_ORIGIN_PERMISSIONS";
    AllSitesAction2[AllSitesAction2["CLEAR_ALL_DATA"] = 3] = "CLEAR_ALL_DATA";
    AllSitesAction2[AllSitesAction2["CLEAR_SITE_GROUP_DATA"] = 4] = "CLEAR_SITE_GROUP_DATA";
    AllSitesAction2[AllSitesAction2["CLEAR_ORIGIN_DATA"] = 5] = "CLEAR_ORIGIN_DATA";
    AllSitesAction2[AllSitesAction2["ENTER_SITE_DETAILS"] = 6] = "ENTER_SITE_DETAILS";
    AllSitesAction2[AllSitesAction2["REMOVE_SITE_GROUP"] = 7] = "REMOVE_SITE_GROUP";
    AllSitesAction2[AllSitesAction2["REMOVE_ORIGIN"] = 8] = "REMOVE_ORIGIN";
    AllSitesAction2[AllSitesAction2["REMOVE_ORIGIN_PARTITIONED"] = 9] = "REMOVE_ORIGIN_PARTITIONED";
    AllSitesAction2[AllSitesAction2["FILTER_BY_FPS_OWNER"] = 10] = "FILTER_BY_FPS_OWNER";
    AllSitesAction2[AllSitesAction2["DELETE_FOR_ENTIRE_FPS"] = 11] = "DELETE_FOR_ENTIRE_FPS";
})(AllSitesAction2 || (AllSitesAction2 = {}));
/**
 * Contains the possible sort methods.
 */
export var SortMethod;
(function (SortMethod) {
    SortMethod["NAME"] = "name";
    SortMethod["MOST_VISITED"] = "most-visited";
    SortMethod["STORAGE"] = "data-stored";
})(SortMethod || (SortMethod = {}));
/**
 * Contains types of dialogs on the AllSites page,
 * used for logging userActions.
 */
export var AllSitesDialog;
(function (AllSitesDialog) {
    AllSitesDialog["CLEAR_DATA"] = "ClearData";
    AllSitesDialog["RESET_PERMISSIONS"] = "ResetPermissions";
})(AllSitesDialog || (AllSitesDialog = {}));
/**
 * String representation of the wildcard used for universal
 * match for SiteExceptions.
 */
export const SITE_EXCEPTION_WILDCARD = '*';
/**
 * Corresponds to the animation-duration CSS parameter defined in
 * chrome/browser/resources/settings/site_settings_page/site_review_shared.css.
 * Set to be slightly higher, as we want to ensure that the animation is
 * finished before updating the model for the right visual effect.
 */
export const MODEL_UPDATE_DELAY_MS = 300;
/**
 * Types of cookies exceptions based on the use of wildcard in the patterns:
 * - THIRD_PARTY: primary pattern is wildcard (third-party exception).
 * - SITE_DATA: primary pattern is set, secondary pattern is wildcard (site data
 * exceptions) or is set (only possible via extensions API).
 * - COMBINED: any pattern combination can be used.
 */
export var CookiesExceptionType;
(function (CookiesExceptionType) {
    CookiesExceptionType["THIRD_PARTY"] = "third-party";
    CookiesExceptionType["SITE_DATA"] = "site-data";
    CookiesExceptionType["COMBINED"] = "combined";
})(CookiesExceptionType || (CookiesExceptionType = {}));
