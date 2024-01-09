// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { tabHasMediaAlerts } from './tab_search_utils.js';
import { TabAlertState } from './tabs.mojom-webui.js';
export var TabItemType;
(function (TabItemType) {
    TabItemType[TabItemType["OPEN_TAB"] = 1] = "OPEN_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB"] = 2] = "RECENTLY_CLOSED_TAB";
    TabItemType[TabItemType["RECENTLY_CLOSED_TAB_GROUP"] = 3] = "RECENTLY_CLOSED_TAB_GROUP";
})(TabItemType || (TabItemType = {}));
export class ItemData {
    constructor() {
        this.highlightRanges = {};
    }
}
/**
 * TabData contains tabSearch.mojom.Tab and data derived from it.
 * It makes tabSearch.mojom.Tab immutable and works well for closure compiler
 * type checking.
 */
export class TabData extends ItemData {
    constructor(tab, type, hostname) {
        super();
        this.tab = tab;
        this.type = type;
        this.hostname = hostname;
    }
}
export class TabGroupData extends ItemData {
    constructor(tabGroup) {
        super();
        this.tabGroup = tabGroup;
        this.type = TabItemType.RECENTLY_CLOSED_TAB_GROUP;
    }
}
/**
 * Converts a token to a string by combining the high and low values as strings
 * with a hashtag as the separator.
 */
export function tokenToString(token) {
    return `${token.high.toString()}#${token.low.toString()}`;
}
export function tokenEquals(a, b) {
    return a.high === b.high && a.low === b.low;
}
function titleAndAlertAriaLabel(tabData) {
    const tabTitle = tabData.tab.title;
    if (tabData.type === TabItemType.OPEN_TAB &&
        tabHasMediaAlerts(tabData.tab)) {
        // GetTabAlertStatesForContents adds alert indicators in the order of their
        // priority. Only relevant media alerts are sent over mojo so the first
        // element in alertStates will be the highest priority media alert to
        // display.
        const alert = tabData.tab.alertStates[0];
        switch (alert) {
            case TabAlertState.kMediaRecording:
                return loadTimeData.getStringF('mediaRecording', tabTitle);
            case TabAlertState.kAudioRecording:
                return loadTimeData.getStringF('audioRecording', tabTitle);
            case TabAlertState.kVideoRecording:
                return loadTimeData.getStringF('videoRecording', tabTitle);
            case TabAlertState.kAudioPlaying:
                return loadTimeData.getStringF('audioPlaying', tabTitle);
            case TabAlertState.kAudioMuting:
                return loadTimeData.getStringF('audioMuting', tabTitle);
            default:
                return tabTitle;
        }
    }
    return tabTitle;
}
export function ariaLabel(itemData) {
    if (itemData instanceof TabGroupData &&
        itemData.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP) {
        const tabGroup = itemData.tabGroup;
        const tabCountText = loadTimeData.getStringF(tabGroup.tabCount === 1 ? 'oneTab' : 'tabCount', tabGroup.tabCount);
        return `${tabGroup.title} ${tabCountText} ${tabGroup.lastActiveElapsedText} ${itemData.a11yTypeText}`;
    }
    if (itemData instanceof TabData) {
        const tabData = itemData;
        const groupTitleOrEmpty = tabData.tabGroup ? tabData.tabGroup.title : '';
        const titleAndAlerts = titleAndAlertAriaLabel(tabData);
        return `${titleAndAlerts} ${groupTitleOrEmpty} ${tabData.hostname} ${tabData.tab.lastActiveElapsedText} ${tabData.a11yTypeText}`;
    }
    throw new Error('Invalid data provided.');
}
