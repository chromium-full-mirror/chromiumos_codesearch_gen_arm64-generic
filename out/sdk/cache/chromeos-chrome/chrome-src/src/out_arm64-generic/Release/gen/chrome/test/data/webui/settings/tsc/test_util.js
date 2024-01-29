// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { ChooserType, ContentSetting, ContentSettingProvider, ContentSettingsTypes, SiteSettingSource } from 'chrome://settings/lazy_load.js';
import { Router } from 'chrome://settings/settings.js';
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
// clang-format on
/**
 * Helper to create an object containing a ContentSettingsType key to array or
 * object value. This is a convenience function that can eventually be
 * replaced with ES6 computed properties.
 * @param contentType The ContentSettingsType to use as the key.
 * @param value The value to map to |contentType|.
 */
export function createContentSettingTypeToValuePair(contentType, value) {
    return { setting: contentType, value: value };
}
/**
 * Helper to create a mock DefaultContentSetting.
 * @param override An object with a subset of the properties of
 *     DefaultContentSetting. Properties defined in |override| will
 *     overwrite the defaults in this function's return value.
 */
export function createDefaultContentSetting(override) {
    return Object.assign({
        setting: ContentSetting.ASK,
        source: ContentSettingProvider.PREFERENCE,
    }, override || {});
}
/**
 * Helper to create a mock RawSiteException.
 * @param origin The origin to use for this RawSiteException.
 * @param override An object with a subset of the properties of
 *     RawSiteException. Properties defined in |override| will overwrite the
 *     defaults in this function's return value.
 */
export function createRawSiteException(origin, override) {
    return Object.assign({
        embeddingOrigin: origin,
        incognito: false,
        origin: origin,
        displayName: '',
        setting: ContentSetting.ALLOW,
        source: SiteSettingSource.PREFERENCE,
        isEmbargoed: false,
        type: '',
    }, override || {});
}
/**
 * Helper to create a mock RawChooserException.
 * @param chooserType The chooser exception type.
 * @param sites A list of SiteExceptions corresponding to the chooser exception.
 * @param override An object with a subset of the properties of
 *     RawChooserException. Properties defined in |override| will overwrite
 *     the defaults in this function's return value.
 */
export function createRawChooserException(chooserType, sites, override) {
    return Object.assign({
        chooserType: chooserType,
        displayName: '',
        object: {},
        sites: sites,
    }, override || {});
}
/**
 * Helper to create a mock SiteSettingsPref.
 * @param defaultsList A list of DefaultContentSettings and the content settings
 *     they apply to, which will overwrite the defaults in the SiteSettingsPref
 *     returned by this function.
 * @param exceptionsList A list of RawSiteExceptions and the content settings
 *     they apply to, which will overwrite the exceptions in the
 *     SiteSettingsPref returned by this function.
 * @param chooserExceptionsList A list of RawChooserExceptions and the chooser
 *     type that they apply to, which will overwrite the exceptions in the
 *     SiteSettingsPref returned by this function.
 */
export function createSiteSettingsPrefs(defaultsList, exceptionsList, chooserExceptionsList = []) {
    // These test defaults reflect the actual defaults assigned to each
    // ContentSettingType, but keeping these in sync shouldn't matter for tests.
    const defaults = {};
    for (const type in ContentSettingsTypes) {
        defaults[ContentSettingsTypes[type]] =
            createDefaultContentSetting({});
    }
    defaults[ContentSettingsTypes.ANTI_ABUSE].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.COOKIES].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.IMAGES].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.JAVASCRIPT].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.JAVASCRIPT_JIT].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.SOUND].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.POPUPS].setting = ContentSetting.BLOCK;
    defaults[ContentSettingsTypes.PROTOCOL_HANDLERS].setting =
        ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.BACKGROUND_SYNC].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.ADS].setting = ContentSetting.BLOCK;
    defaults[ContentSettingsTypes.SENSORS].setting = ContentSetting.ALLOW;
    defaults[ContentSettingsTypes.USB_DEVICES].setting = ContentSetting.ASK;
    defaultsList.forEach((override) => {
        defaults[override.setting] = override.value;
    });
    const chooserExceptions = {};
    const exceptions = {};
    for (const t in ContentSettingsTypes) {
        const type = t;
        chooserExceptions[ContentSettingsTypes[type]] = [];
        exceptions[ContentSettingsTypes[type]] = [];
    }
    exceptionsList.forEach(override => {
        exceptions[override.setting] = override.value;
    });
    chooserExceptionsList.forEach(override => {
        chooserExceptions[override.setting] = override.value;
    });
    return {
        chooserExceptions: chooserExceptions,
        defaults: defaults,
        exceptions: exceptions,
    };
}
/**
 * Creates a groupingKey that maps to the given id. This will not
 * have the same internal format as the groupingKey returned by
 * SiteSettingsHelper.
 * @param id An id that can uniquely represent a SiteGroup.
 */
export function groupingKey(id) {
    // Base64 encode the id to make sure that if an eTLD+1 or origin is used
    // somewhere instead of a groupingKey, it won't accidentally have the
    // correct groupingKey value.
    return btoa(id);
}
/**
 * Helper to create a mock SiteGroup.
 * @param owningEntity The eTLD+1 or origin that owns this group.
 * @param displayName The user-visible group name.
 * @param originList A list of the origins with the same eTLD+1.
 * @param mockUsage The override initial usage value for each origin in the site
 *     group.
 */
export function createSiteGroup(owningEntity, displayName, originList, mockUsage) {
    if (mockUsage === undefined) {
        mockUsage = 0;
    }
    const originInfoList = originList.map((origin) => createOriginInfo(origin, { usage: mockUsage }));
    return {
        groupingKey: groupingKey(owningEntity.toString()),
        etldPlus1: typeof owningEntity === 'string' ? owningEntity : undefined,
        displayName,
        origins: originInfoList,
        numCookies: 0,
        hasInstalledPWA: false,
    };
}
export function createOriginInfo(origin, override) {
    return Object.assign({
        origin: origin,
        engagement: 0,
        usage: 0,
        numCookies: 0,
        hasPermissionSettings: false,
        isInstalled: false,
        isPartitioned: false,
    }, override || {});
}
/**
 * Helper to retrieve the category of a permission from the given
 * |chooserType|.
 * @param chooserType The chooser type of the permission.
 */
export function getContentSettingsTypeFromChooserType(chooserType) {
    switch (chooserType) {
        case ChooserType.HID_DEVICES:
            return ContentSettingsTypes.HID_DEVICES;
        case ChooserType.SERIAL_PORTS:
            return ContentSettingsTypes.SERIAL_PORTS;
        case ChooserType.USB_DEVICES:
            return ContentSettingsTypes.USB_DEVICES;
        case ChooserType.BLUETOOTH_DEVICES:
            return ContentSettingsTypes.BLUETOOTH_DEVICES;
        default:
            return null;
    }
}
export function setupPopstateListener() {
    window.addEventListener('popstate', function () {
        // On pop state, do not push the state onto the window.history again.
        const routerInstance = Router.getInstance();
        routerInstance.setCurrentRoute(routerInstance.getRouteForPath(window.location.pathname) ||
            routerInstance.getRoutes().BASIC, new URLSearchParams(window.location.search), true);
    });
}
/**
 * Helper to assert that a paper-tooltip element is visually hidden but still
 * accessible by screen readers.
 */
export function assertTooltipIsHidden(tooltip) {
    const tooltipStyle = window.getComputedStyle(tooltip);
    assertEquals('rect(0px, 0px, 0px, 0px)', tooltipStyle.clip);
    assertEquals('1px', tooltipStyle.height);
    assertEquals('1px', tooltipStyle.width);
    assertEquals('hidden', tooltipStyle.overflow);
}
/**
 * Helper to create a mock SiteException.
 * @param origin The origin to use for this SiteException.
 * @param override An object with a subset of the properties of
 *     SiteException. Properties defined in |override| will overwrite the
 *     defaults in this function's return value.
 */
export function createSiteException(origin, override) {
    return Object.assign({
        category: ContentSettingsTypes.USB_DEVICES,
        embeddingOrigin: origin,
        incognito: false,
        origin: origin,
        displayName: origin,
        setting: ContentSetting.DEFAULT,
        settingDetail: null,
        enforcement: null,
        controlledBy: chrome.settingsPrivate.ControlledBy.PRIMARY_USER,
        isEmbargoed: false,
    }, override || {});
}
/**
 * Helper to create a mock of a group of Storage Access Site Exceptions.
 * @param origin The origin to use for this group.
 * @param override An object with a subset of the properties of
 *     StorageAccessSiteException. Properties defined in |override| will
 * overwrite the defaults in this function's return value.
 */
export function createStorageAccessSiteException(origin, override, embeddingOrigin) {
    return Object.assign({
        origin: origin,
        displayName: origin,
        setting: ContentSetting.ALLOW,
        openDescription: '',
        closeDescription: '',
        exceptions: [createStorageAccessEmbeddingException(embeddingOrigin || 'google.com')],
    }, override || {});
}
/**
 * Helper to create a mock of an Storage Access embedding site exception.
 * @param embeddingOrigin The embedding origin to use for this SiteException.
 * @param override An object with a subset of the properties of
 *     StorageAccessEmbeddingException. Properties defined in |override| will
 * overwrite the defaults in this function's return value.
 */
export function createStorageAccessEmbeddingException(embeddingOrigin, override) {
    return Object.assign({
        embeddingOrigin: embeddingOrigin,
        embeddingDisplayName: embeddingOrigin,
        description: '',
        incognito: false,
    }, override || {});
}
/**
 * Helper to create a mock ChooserException.
 * @param chooserType The chooser exception type.
 * @param sites A list of SiteExceptions corresponding to the chooser exception.
 * @param override An object with a subset of the properties of
 *     ChooserException. Properties defined in |override| will overwrite
 *     the defaults in this function's return value.
 */
export function createChooserException(chooserType, sites, override) {
    return Object.assign({
        chooserType: chooserType,
        displayName: '',
        object: {},
        sites: sites,
    }, override || {});
}
