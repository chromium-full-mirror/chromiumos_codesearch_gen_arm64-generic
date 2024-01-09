// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TabAlertState } from 'chrome://tab-search.top-chrome/tab_search.js';
export const SAMPLE_WINDOW_HEIGHT = 448;
export function createTab(overrides) {
    return Object.assign({
        active: false,
        alertStates: [],
        index: 0,
        isDefaultFavicon: false,
        lastActiveElapsedText: '',
        lastActiveTimeTicks: { internalValue: BigInt(0) },
        pinned: false,
        showIcon: false,
        tabId: 1,
        title: 'Example',
        url: { url: 'https://www.example.com' },
    }, overrides);
}
export const SAMPLE_WINDOW_DATA_WITH_MEDIA_TAB = [{
        active: true,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                active: false,
                alertStates: [TabAlertState.kMediaRecording],
                index: 0,
                tabId: 1,
                title: 'Meet',
                url: { url: 'https://meet.google.com/' },
                lastActiveTimeTicks: { internalValue: BigInt(4) },
            }),
            createTab({
                active: false,
                index: 1,
                tabId: 2,
                title: 'Google',
                url: { url: 'https://www.google.com' },
                lastActiveTimeTicks: { internalValue: BigInt(5) },
            }),
            createTab({
                active: false,
                index: 2,
                tabId: 3,
                title: 'Example',
                url: { url: 'https://www.example.com' },
                lastActiveTimeTicks: { internalValue: BigInt(3) },
            }),
        ],
    }];
export const SAMPLE_WINDOW_DATA = [
    {
        active: true,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                title: 'Google',
                url: { url: 'https://www.google.com' },
                lastActiveTimeTicks: { internalValue: BigInt(5) },
            }),
            createTab({
                index: 1,
                tabId: 5,
                title: 'Amazon',
                url: { url: 'https://www.amazon.com' },
                lastActiveTimeTicks: { internalValue: BigInt(4) },
            }),
            createTab({
                index: 2,
                tabId: 6,
                title: 'Apple',
                url: { url: 'https://www.apple.com' },
                lastActiveTimeTicks: { internalValue: BigInt(3) },
            }),
        ],
    },
    {
        active: false,
        height: SAMPLE_WINDOW_HEIGHT,
        tabs: [
            createTab({
                index: 0,
                tabId: 2,
                title: 'Bing',
                url: { url: 'https://www.bing.com/' },
                lastActiveTimeTicks: { internalValue: BigInt(2) },
            }),
            createTab({
                index: 1,
                tabId: 3,
                title: 'Yahoo',
                url: { url: 'https://www.yahoo.com' },
                lastActiveTimeTicks: { internalValue: BigInt(1) },
            }),
            createTab({
                index: 2,
                tabId: 4,
                title: 'Apple',
                url: { url: 'https://www.apple.com/' },
            }),
        ],
    },
];
export const SAMPLE_RECENTLY_CLOSED_DATA = [
    {
        tabId: 100,
        title: 'PayPal',
        url: { url: 'https://www.paypal.com' },
        lastActiveTime: { internalValue: BigInt(11) },
        lastActiveElapsedText: '',
    },
    {
        tabId: 101,
        title: 'Stripe',
        url: { url: 'https://www.stripe.com' },
        lastActiveTime: { internalValue: BigInt(12) },
        lastActiveElapsedText: '',
    },
];
export function createProfileData(overrides) {
    return Object.assign({
        windows: SAMPLE_WINDOW_DATA,
        tabGroups: [],
        recentlyClosedTabGroups: [],
        recentlyClosedTabs: [],
        recentlyClosedSectionExpanded: false,
    }, overrides || {});
}
export function sampleSiteNames(count) {
    return Array.from({ length: count }, (_, i) => (i + 1).toString());
}
/**
 * Generates sample tabs based on some given site names.
 * @param hasIndex Whether the items have an index property.
 */
export function generateSampleTabsFromSiteNames(siteNames, hasIndex = true) {
    return siteNames.map((siteName, i) => {
        return createTab({
            tabId: i + 1,
            title: siteName,
            url: { url: 'https://www.' + siteName.toLowerCase() + '.com' },
            lastActiveTimeTicks: { internalValue: BigInt(siteNames.length - i) },
            index: hasIndex ? i : 0,
        });
    });
}
export function generateSampleRecentlyClosedTabsFromSiteNames(siteNames) {
    return siteNames.map((siteName, i) => {
        return {
            tabId: i + 1,
            title: siteName,
            url: { url: 'https://www.' + siteName.toLowerCase() + '.com' },
            lastActiveTimeTicks: { internalValue: BigInt(siteNames.length - i) },
            lastActiveTime: { internalValue: BigInt(siteNames.length - i) },
            lastActiveElapsedText: '',
        };
    });
}
export function generateSampleRecentlyClosedTabs(titlePrefix, count, groupId) {
    return Array.from({ length: count }, (_, i) => {
        const tabId = i + 1;
        const tab = {
            tabId,
            title: `${titlePrefix} ${tabId}`,
            url: { url: `https://www.sampletab.com?q=${tabId}` },
            lastActiveTime: { internalValue: BigInt(count - i) },
            lastActiveElapsedText: '',
        };
        if (groupId !== undefined) {
            tab.groupId = groupId;
        }
        return tab;
    });
}
/**
 * Generates profile data for a window with a series of tabs.
 */
export function generateSampleDataFromSiteNames(siteNames) {
    return {
        windows: [{
                active: true,
                height: SAMPLE_WINDOW_HEIGHT,
                tabs: generateSampleTabsFromSiteNames(siteNames),
            }],
        recentlyClosedTabs: [],
        tabGroups: [],
        recentlyClosedTabGroups: [],
        recentlyClosedSectionExpanded: false,
    };
}
export function sampleToken(high, low) {
    const token = { high, low };
    Object.freeze(token);
    return token;
}
