// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * Customize Chrome actions. This enum must match the numbering for
 * NTPCustomizeChromeSidePanelAction in enums.xml. These values are persisted
 * to logs. Entries should not be renumbered, removed or reused.
 *
 * MAX_VALUE should always be at the end to help get the current number of
 * buckets.
 */
export var CustomizeChromeAction;
(function (CustomizeChromeAction) {
    CustomizeChromeAction[CustomizeChromeAction["EDIT_THEME_CLICKED"] = 0] = "EDIT_THEME_CLICKED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_DEFAULT_CHROME_SELECTED"] = 1] = "CATEGORIES_DEFAULT_CHROME_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_UPLOAD_IMAGE_SELECTED"] = 2] = "CATEGORIES_UPLOAD_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_WALLPAPER_SEARCH_SELECTED"] = 3] = "CATEGORIES_WALLPAPER_SEARCH_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_PROMPT_SUBMITTED"] = 4] = "WALLPAPER_SEARCH_PROMPT_SUBMITTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED"] = 5] = "WALLPAPER_SEARCH_RESULT_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED"] = 6] = "WALLPAPER_SEARCH_HISTORY_IMAGE_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED"] = 7] = "CATEGORIES_FIRST_PARTY_COLLECTION_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["FIRST_PARTY_COLLECTION_THEME_SELECTED"] = 8] = "FIRST_PARTY_COLLECTION_THEME_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_THUMBS_UP_SELECTED"] = 9] = "WALLPAPER_SEARCH_THUMBS_UP_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED"] = 10] = "WALLPAPER_SEARCH_THUMBS_DOWN_SELECTED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED"] = 11] = "WALLPAPER_SEARCH_SUBJECT_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED"] = 12] = "WALLPAPER_SEARCH_STYLE_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED"] = 13] = "WALLPAPER_SEARCH_MOOD_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED"] = 14] = "WALLPAPER_SEARCH_COLOR_DESCRIPTOR_UPDATED";
    CustomizeChromeAction[CustomizeChromeAction["MAX_VALUE"] = 15] = "MAX_VALUE";
})(CustomizeChromeAction || (CustomizeChromeAction = {}));
export function recordCustomizeChromeAction(action) {
    chrome.metricsPrivate.recordEnumerationValue('NewTabPage.CustomizeChromeSidePanelAction', action, CustomizeChromeAction.MAX_VALUE);
}
