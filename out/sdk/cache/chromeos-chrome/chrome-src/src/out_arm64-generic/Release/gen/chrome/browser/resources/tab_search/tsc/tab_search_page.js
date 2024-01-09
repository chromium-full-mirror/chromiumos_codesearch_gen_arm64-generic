// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/mwb_element_shared_style.css.js';
import 'chrome://resources/cr_elements/mwb_shared_style.css.js';
import 'chrome://resources/cr_elements/mwb_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import './infinite_list.js';
import './tab_search_group_item.js';
import './tab_search_item.js';
import './title_item.js';
import './strings.m.js';
import { ColorChangeUpdater } from '//resources/cr_components/color_change_listener/colors_css_updater.js';
import { CrSearchFieldMixin } from 'chrome://resources/cr_elements/cr_search_field/cr_search_field_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { MetricsReporterImpl } from 'chrome://resources/js/metrics_reporter/metrics_reporter.js';
import { listenOnce } from 'chrome://resources/js/util.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { fuzzySearch } from './fuzzy_search.js';
import { NO_SELECTION, selectorNavigationKeys } from './infinite_list.js';
import { ariaLabel, TabData, TabGroupData, TabItemType, tokenEquals, tokenToString } from './tab_data.js';
import { TabSearchApiProxyImpl } from './tab_search_api_proxy.js';
import { getTemplate } from './tab_search_page.html.js';
import { tabHasMediaAlerts } from './tab_search_utils.js';
import { TitleItem } from './title_item.js';
// The minimum number of list items we allow viewing regardless of browser
// height. Includes a half row that hints to the user the capability to scroll.
const MINIMUM_AVAILABLE_HEIGHT_LIST_ITEM_COUNT = 5.5;
const TabSearchSearchFieldBase = CrSearchFieldMixin(PolymerElement);
/**
 * These values are persisted to logs and should not be renumbered or re-used.
 * See tools/metrics/histograms/enums.xml.
 */
export var TabSwitchAction;
(function (TabSwitchAction) {
    TabSwitchAction[TabSwitchAction["WITHOUT_SEARCH"] = 0] = "WITHOUT_SEARCH";
    TabSwitchAction[TabSwitchAction["WITH_SEARCH"] = 1] = "WITH_SEARCH";
})(TabSwitchAction || (TabSwitchAction = {}));
export class TabSearchPageElement extends TabSearchSearchFieldBase {
    static get is() {
        return 'tab-search-page';
    }
    static get properties() {
        return {
            /**
             * Text that describes the resulting tabs currently present in the list.
             */
            searchResultText_: {
                type: String,
                value: '',
            },
            shortcut_: {
                type: String,
                value: () => loadTimeData.getString('shortcutText'),
            },
            searchText_: {
                type: String,
                value: '',
            },
            availableHeight_: Number,
            filteredItems_: {
                type: Array,
                value: [],
            },
            /**
             * Options for fuzzy search. Controls how heavily weighted fields are
             * relative to each other in the scoring via field weights.
             */
            fuzzySearchOptions_: {
                type: Object,
                value: {
                    includeScore: true,
                    includeMatches: true,
                    ignoreLocation: false,
                    threshold: 0.0,
                    distance: 200,
                    keys: [
                        {
                            name: 'tab.title',
                            weight: 2,
                        },
                        {
                            name: 'hostname',
                            weight: 1,
                        },
                        {
                            name: 'tabGroup.title',
                            weight: 1.5,
                        },
                    ],
                },
            },
            moveActiveTabToBottom_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('moveActiveTabToBottom'),
            },
            recentlyClosedDefaultItemDisplayCount_: {
                type: Number,
                value: () => loadTimeData.getValue('recentlyClosedDefaultItemDisplayCount'),
            },
            tabOrganizationEnabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: () => loadTimeData.getBoolean('tabOrganizationEnabled'),
            },
        };
    }
    constructor() {
        super();
        this.apiProxy_ = TabSearchApiProxyImpl.getInstance();
        this.listenerIds_ = [];
        this.tabGroupsMap_ = new Map();
        this.recentlyClosedTabGroups_ = [];
        this.openTabs_ = [];
        this.recentlyClosedTabs_ = [];
        this.windowShownTimestamp_ = Date.now();
        this.filteredOpenTabsCount_ = 0;
        this.filteredMediaTabsCount_ = 0;
        this.initiallySelectedTabIndex_ = NO_SELECTION;
        ColorChangeUpdater.forDocument().start();
        this.documentVisibilityChangedListener_ = () => {
            if (document.visibilityState === 'visible') {
                this.windowShownTimestamp_ = Date.now();
                this.updateTabs_();
            }
            else {
                this.onDocumentHidden_();
            }
        };
        this.elementVisibilityChangedListener_ =
            new IntersectionObserver((entries, _observer) => {
                entries.forEach(entry => {
                    this.onElementVisibilityChanged_(entry.intersectionRatio > 0);
                });
            }, { root: document.documentElement });
        this.mediaTabsTitleItem_ =
            new TitleItem(loadTimeData.getString('mediaTabs'));
        this.openTabsTitleItem_ = new TitleItem(loadTimeData.getString('openTabs'));
        this.recentlyClosedTitleItem_ = new TitleItem(loadTimeData.getString('recentlyClosed'), true /*expandable*/, true /*expanded*/);
    }
    get metricsReporter() {
        if (!this.metricsReporter_) {
            this.metricsReporter_ = MetricsReporterImpl.getInstance();
        }
        return this.metricsReporter_;
    }
    ready() {
        super.ready();
        // Update option values for fuzzy search from feature params.
        this.fuzzySearchOptions_ = Object.assign({}, this.fuzzySearchOptions_, {
            useFuzzySearch: loadTimeData.getBoolean('useFuzzySearch'),
            ignoreLocation: loadTimeData.getBoolean('searchIgnoreLocation'),
            threshold: loadTimeData.getValue('searchThreshold'),
            distance: loadTimeData.getInteger('searchDistance'),
            keys: [
                {
                    name: 'tab.title',
                    weight: loadTimeData.getValue('searchTitleWeight'),
                },
                {
                    name: 'hostname',
                    weight: loadTimeData.getValue('searchHostnameWeight'),
                },
                {
                    name: 'tabGroup.title',
                    weight: loadTimeData.getValue('searchGroupTitleWeight'),
                },
            ],
        });
        this.useMetricsReporter_ = loadTimeData.getBoolean('useMetricsReporter');
    }
    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('visibilitychange', this.documentVisibilityChangedListener_);
        this.elementVisibilityChangedListener_.observe(this);
        const callbackRouter = this.apiProxy_.getCallbackRouter();
        this.listenerIds_.push(callbackRouter.tabsChanged.addListener(this.tabsChanged_.bind(this)), callbackRouter.tabUpdated.addListener(this.onTabUpdated_.bind(this)), callbackRouter.tabsRemoved.addListener(this.onTabsRemoved_.bind(this)));
        // If added in a visible state update current tabs.
        if (document.visibilityState === 'visible') {
            this.updateTabs_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.listenerIds_.forEach(id => this.apiProxy_.getCallbackRouter().removeListener(id));
        document.removeEventListener('visibilitychange', this.documentVisibilityChangedListener_);
        this.elementVisibilityChangedListener_.disconnect();
    }
    getSearchInput() {
        return this.$.searchInput;
    }
    /**
     * Do not schedule the timer from CrSearchFieldMixin to make search more
     * responsive.
     */
    onSearchTermInput() {
        this.hasSearchText = this.getSearchInput().value !== '';
        this.searchText_ = this.getSearchInput().value;
        // Reset the selected item whenever a search query is provided.
        // updateFilteredTabs_ will set the correct tab index for initial selection.
        const tabsList = this.$.tabsList;
        tabsList.selected = NO_SELECTION;
        this.updateFilteredTabs_();
        // http://crbug.com/1481787: Dispatch the search event to update the
        // internal value to make CrSearchFieldMixin function correctly.
        this.getSearchInput().dispatchEvent(new CustomEvent('search', { composed: true, detail: this.searchText_ }));
    }
    /**
     * @param name A property whose value is specified in pixels.
     */
    getStylePropertyPixelValue_(name) {
        const pxValue = getComputedStyle(this).getPropertyValue(name);
        assert(pxValue);
        return Number.parseInt(pxValue.trim().slice(0, -2), 10);
    }
    /**
     * Calculate the list's available height by subtracting the height used by
     * the search and feedback fields.
     */
    listMaxHeight_(height) {
        return Math.max(height - this.$.searchField.offsetHeight, Math.round(MINIMUM_AVAILABLE_HEIGHT_LIST_ITEM_COUNT *
            this.getStylePropertyPixelValue_('--mwb-item-height')));
    }
    onDocumentHidden_() {
        this.filteredItems_ = [];
        this.setValue('');
        this.$.searchInput.focus();
    }
    onElementVisibilityChanged_(visible) {
        if (visible) {
            this.$.tabsList.ensureAllDomItemsAvailable();
        }
    }
    updateTabs_() {
        const getTabsStartTimestamp = Date.now();
        if (this.useMetricsReporter_) {
            const isMarkOverlap = this.metricsReporter.hasLocalMark('TabListDataReceived');
            chrome.metricsPrivate.recordBoolean('Tabs.TabSearch.WebUI.TabListDataReceived2.IsOverlap', isMarkOverlap);
            if (!isMarkOverlap) {
                this.metricsReporter.mark('TabListDataReceived');
            }
        }
        this.apiProxy_.getProfileData().then(({ profileData }) => {
            chrome.metricsPrivate.recordTime('Tabs.TabSearch.WebUI.TabListDataReceived', Math.round(Date.now() - getTabsStartTimestamp));
            if (this.useMetricsReporter_) {
                // TODO(crbug.com/1269417): this is a side-by-side comparison of
                // metrics reporter histogram vs. old histogram. Cleanup when the
                // experiment ends.
                this.metricsReporter.measure('TabListDataReceived')
                    .then(e => this.metricsReporter.umaReportTime('Tabs.TabSearch.WebUI.TabListDataReceived2', e))
                    .then(() => this.metricsReporter.clearMark('TabListDataReceived'))
                    // Ignore silently if mark 'TabListDataReceived' is missing.
                    .catch(() => { });
            }
            // The infinite-list produces viewport-filled events whenever a data or
            // scroll position change triggers the the viewport fill logic.
            listenOnce(this.$.tabsList, 'viewport-filled', () => {
                // Push showUi() to the event loop to allow reflow to occur following
                // the DOM update.
                setTimeout(() => this.apiProxy_.showUi(), 0);
            });
            // TODO(crbug.com/c/1349350): Determine why no active window is reported
            // in some cases on ChromeOS and Linux.
            const activeWindow = profileData.windows.find((t) => t.active);
            this.availableHeight_ =
                activeWindow ? activeWindow.height : profileData.windows[0].height;
            this.tabsChanged_(profileData);
        });
    }
    onTabUpdated_(tabUpdateInfo) {
        const { tab, inActiveWindow } = tabUpdateInfo;
        const tabData = this.tabData_(tab, inActiveWindow, TabItemType.OPEN_TAB, this.tabGroupsMap_);
        // Replace the tab with the same tabId and trigger rerender.
        let foundTab = false;
        for (let i = 0; i < this.openTabs_.length && !foundTab; ++i) {
            if (this.openTabs_[i].tab.tabId === tab.tabId) {
                this.openTabs_[i] = tabData;
                this.updateFilteredTabs_();
                foundTab = true;
            }
        }
        // If the updated tab's id is not found in the existing open tabs, add it
        // to the list.
        if (!foundTab) {
            this.openTabs_.push(tabData);
            this.updateFilteredTabs_();
        }
        if (this.useMetricsReporter_) {
            this.metricsReporter.measure('TabUpdated')
                .then(e => this.metricsReporter.umaReportTime('Tabs.TabSearch.Mojo.TabUpdated', e))
                .then(() => this.metricsReporter.clearMark('TabUpdated'))
                // Ignore silently if mark 'TabUpdated' is missing.
                .catch(() => { });
        }
    }
    onTabsRemoved_(tabsRemovedInfo) {
        if (this.openTabs_.length === 0) {
            return;
        }
        const ids = new Set(tabsRemovedInfo.tabIds);
        // Splicing in descending index order to avoid affecting preceding indices
        // that are to be removed.
        for (let i = this.openTabs_.length - 1; i >= 0; i--) {
            if (ids.has(this.openTabs_[i].tab.tabId)) {
                this.openTabs_.splice(i, 1);
            }
        }
        tabsRemovedInfo.recentlyClosedTabs.forEach(tab => {
            this.recentlyClosedTabs_.unshift(this.tabData_(tab, false, TabItemType.RECENTLY_CLOSED_TAB, this.tabGroupsMap_));
        });
        this.updateFilteredTabs_();
    }
    /**
     * The selected item's index, or -1 if no item selected.
     */
    getSelectedIndex() {
        return this.$.tabsList.selected;
    }
    getA11ySearchResultText_() {
        // TODO(romanarora): Screen readers' list item number announcement will
        // not match as it counts the title items too. Investigate how to
        // programmatically control announcements to avoid this.
        const itemCount = this.selectableItemCount_();
        let text;
        if (this.searchText_.length > 0) {
            text = loadTimeData.getStringF(itemCount === 1 ? 'a11yFoundTabFor' : 'a11yFoundTabsFor', itemCount, this.searchText_);
        }
        else {
            text = loadTimeData.getStringF(itemCount === 1 ? 'a11yFoundTab' : 'a11yFoundTabs', itemCount);
        }
        return text;
    }
    /**
     * @return The number of selectable list items, excludes non
     *     selectable items such as section title items.
     */
    selectableItemCount_() {
        return this.filteredItems_.reduce((acc, item) => {
            return acc + (item instanceof TitleItem ? 0 : 1);
        }, 0);
    }
    onItemClick_(e) {
        const tabItem = e.model.item;
        this.tabItemAction_(tabItem, e.model.index);
    }
    recordMetricsForAction(action, tabIndex) {
        const withSearch = !!this.searchText_;
        if (action === 'SwitchTab') {
            chrome.metricsPrivate.recordEnumerationValue('Tabs.TabSearch.WebUI.TabSwitchAction', withSearch ? TabSwitchAction.WITH_SEARCH :
                TabSwitchAction.WITHOUT_SEARCH, Object.keys(TabSwitchAction).length);
        }
        chrome.metricsPrivate.recordSmallCount(withSearch ? `Tabs.TabSearch.WebUI.IndexOf${action}InFilteredList` :
            `Tabs.TabSearch.WebUI.IndexOf${action}InUnfilteredList`, tabIndex);
    }
    /**
     * Trigger the click/press action associated with the given Tab item type.
     */
    tabItemAction_(itemData, tabIndex) {
        const state = this.searchText_ ? 'Filtered' : 'Unfiltered';
        let action;
        switch (itemData.type) {
            case TabItemType.OPEN_TAB:
                if (this.useMetricsReporter_) {
                    const isMarkOverlap = this.metricsReporter.hasLocalMark('SwitchToTab');
                    chrome.metricsPrivate.recordBoolean('Tabs.TabSearch.Mojo.SwitchToTab.IsOverlap', isMarkOverlap);
                    if (!isMarkOverlap) {
                        this.metricsReporter.mark('SwitchToTab');
                    }
                }
                this.recordMetricsForAction('SwitchTab', tabIndex);
                this.apiProxy_.switchToTab({ tabId: itemData.tab.tabId });
                action = 'SwitchTab';
                break;
            case TabItemType.RECENTLY_CLOSED_TAB:
                this.apiProxy_.openRecentlyClosedEntry(itemData.tab.tabId, !!this.searchText_, true, tabIndex - this.filteredOpenTabsCount_);
                action = 'OpenRecentlyClosedEntry';
                break;
            case TabItemType.RECENTLY_CLOSED_TAB_GROUP:
                this.apiProxy_.openRecentlyClosedEntry(itemData.tabGroup
                    .sessionId, !!this.searchText_, false, tabIndex - this.filteredOpenTabsCount_);
                action = 'OpenRecentlyClosedEntry';
                break;
            default:
                throw new Error('ItemData is of invalid type.');
        }
        chrome.metricsPrivate.recordTime(`Tabs.TabSearch.WebUI.TimeTo${action}In${state}List`, Math.round(Date.now() - this.windowShownTimestamp_));
    }
    onItemClose_(e) {
        performance.mark('tab_search:close_tab:metric_begin');
        const tabId = e.model.item.tab.tabId;
        const tabIndex = e.model.index;
        this.recordMetricsForAction('CloseTab', tabIndex);
        this.apiProxy_.closeTab(tabId);
        this.announceA11y_(loadTimeData.getString('a11yTabClosed'));
        listenOnce(this.$.tabsList, 'iron-items-changed', () => {
            performance.mark('tab_search:close_tab:metric_end');
        });
    }
    onItemKeyDown_(e) {
        if (e.key !== 'Enter' && e.key !== ' ') {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        const itemData = e.model.item;
        this.tabItemAction_(itemData, e.model.index);
    }
    tabsChanged_(profileData) {
        this.tabGroupsMap_ = profileData.tabGroups.reduce((map, tabGroup) => {
            map.set(tokenToString(tabGroup.id), tabGroup);
            return map;
        }, new Map());
        this.openTabs_ = profileData.windows.reduce((acc, { active, tabs }) => acc.concat(tabs.map(tab => this.tabData_(tab, active, TabItemType.OPEN_TAB, this.tabGroupsMap_))), []);
        this.recentlyClosedTabs_ = profileData.recentlyClosedTabs.map(tab => this.tabData_(tab, false, TabItemType.RECENTLY_CLOSED_TAB, this.tabGroupsMap_));
        this.recentlyClosedTabGroups_ =
            profileData.recentlyClosedTabGroups.map(tabGroup => {
                const tabGroupData = new TabGroupData(tabGroup);
                tabGroupData.a11yTypeText =
                    loadTimeData.getString('a11yRecentlyClosedTabGroup');
                return tabGroupData;
            });
        this.recentlyClosedTitleItem_.expanded =
            profileData.recentlyClosedSectionExpanded;
        this.$.tabsList.setAttribute('expanded-list', profileData.recentlyClosedSectionExpanded.toString());
        this.updateFilteredTabs_();
    }
    onItemFocus_(e) {
        // Ensure that when a TabSearchItem receives focus, it becomes the selected
        // item in the list.
        this.$.tabsList.selected = e.model.index;
    }
    onTitleExpandChanged_(e) {
        // Instead of relying on two-way binding to update the `expanded` property,
        // we update the value directly as the `expanded-changed` event takes place
        // before a two way bound property update and we need the TitleItem
        // instance to reflect the updated state prior to calling the
        // updateFilteredTabs_ function.
        const expanded = e.detail.value;
        const titleItem = e.model.item;
        titleItem.expanded = expanded;
        this.apiProxy_.saveRecentlyClosedExpandedPref(expanded);
        this.$.tabsList.setAttribute('expanded-list', expanded.toString());
        this.updateFilteredTabs_();
        // If a section's title item is the last visible element in the list and the
        // list's height is at its maximum, it will not be evident to the user that
        // on expanding the section there are now section tab items available. By
        // ensuring the first element of the section is visible, we can avoid this
        // confusion.
        if (expanded) {
            this.$.tabsList.scrollIndexIntoView(this.filteredOpenTabsCount_);
        }
        e.stopPropagation();
    }
    /**
     * Handles key events when the search field has focus.
     */
    onSearchKeyDown_(e) {
        // In the event the search field has focus and the first item in the list is
        // selected and we receive a Shift+Tab navigation event, ensure All DOM
        // items are available so that the focus can transfer to the last item in
        // the list.
        if (e.shiftKey && e.key === 'Tab' && this.$.tabsList.selected === 0) {
            this.$.tabsList.ensureAllDomItemsAvailable();
            return;
        }
        // Do not interfere with the search field's management of text selection
        // that relies on the Shift key.
        if (e.shiftKey) {
            return;
        }
        if (this.getSelectedIndex() === -1) {
            // No tabs matching the search text criteria.
            return;
        }
        if (selectorNavigationKeys.includes(e.key)) {
            this.$.tabsList.navigate(e.key);
            e.stopPropagation();
            e.preventDefault();
        }
        else if (e.key === 'Enter') {
            const itemData = this.$.tabsList.selectedItem;
            this.tabItemAction_(itemData, this.getSelectedIndex());
            e.stopPropagation();
        }
    }
    announceA11y_(text) {
        IronA11yAnnouncer.requestAvailability();
        this.dispatchEvent(new CustomEvent('iron-announce', { bubbles: true, composed: true, detail: { text } }));
    }
    ariaLabel_(tabData) {
        return ariaLabel(tabData);
    }
    tabData_(tab, inActiveWindow, type, tabGroupsMap) {
        const tabData = new TabData(tab, type, new URL(tab.url.url).hostname);
        if (tab.groupId) {
            tabData.tabGroup = tabGroupsMap.get(tokenToString(tab.groupId));
        }
        if (type === TabItemType.OPEN_TAB) {
            tabData.inActiveWindow = inActiveWindow;
        }
        tabData.a11yTypeText = loadTimeData.getString(type === TabItemType.OPEN_TAB ? 'a11yOpenTab' :
            'a11yRecentlyClosedTab');
        return tabData;
    }
    getRecentlyClosedItemLastActiveTime_(itemData) {
        if (itemData.type === TabItemType.RECENTLY_CLOSED_TAB &&
            itemData instanceof TabData) {
            return itemData.tab.lastActiveTime;
        }
        if (itemData.type === TabItemType.RECENTLY_CLOSED_TAB_GROUP &&
            itemData instanceof TabGroupData) {
            return itemData.tabGroup.lastActiveTime;
        }
        throw new Error('ItemData provided is invalid.');
    }
    updateFilteredTabs_() {
        this.openTabs_.sort((a, b) => {
            const tabA = a.tab;
            const tabB = b.tab;
            // Move the active tab to the bottom of the list
            // because it's not likely users want to click on it.
            if (this.moveActiveTabToBottom_) {
                if (a.inActiveWindow && tabA.active) {
                    return 1;
                }
                if (b.inActiveWindow && tabB.active) {
                    return -1;
                }
            }
            return (tabB.lastActiveTimeTicks && tabA.lastActiveTimeTicks) ?
                Number(tabB.lastActiveTimeTicks.internalValue -
                    tabA.lastActiveTimeTicks.internalValue) :
                0;
        });
        let mediaTabs = [];
        // Audio & Video section will not be added when search criteria is applied.
        // Show media tabs in Open Tabs.
        if (this.searchText_.length === 0) {
            mediaTabs = this.openTabs_.filter(tabData => tabHasMediaAlerts(tabData.tab));
        }
        const filteredMediaTabs = fuzzySearch(this.searchText_, mediaTabs, this.fuzzySearchOptions_);
        let filteredOpenTabs = fuzzySearch(this.searchText_, this.openTabs_, this.fuzzySearchOptions_);
        // The MRU tab that is not the active tab is either the first tab in the
        // Audio and Video section (if it exists) or the first tab in the Open Tabs
        // section.
        if (filteredOpenTabs.length > 0) {
            this.initiallySelectedTabIndex_ =
                tabHasMediaAlerts(filteredOpenTabs[0].tab) ?
                    0 :
                    filteredMediaTabs.length;
        }
        if (this.searchText_.length === 0) {
            filteredOpenTabs = filteredOpenTabs.filter(tabData => !tabHasMediaAlerts(tabData.tab));
        }
        this.filteredOpenTabsCount_ =
            filteredOpenTabs.length + filteredMediaTabs.length;
        this.filteredMediaTabsCount_ = filteredMediaTabs.length;
        const recentlyClosedItems = [...this.recentlyClosedTabs_, ...this.recentlyClosedTabGroups_];
        recentlyClosedItems.sort((a, b) => {
            const aTime = this.getRecentlyClosedItemLastActiveTime_(a);
            const bTime = this.getRecentlyClosedItemLastActiveTime_(b);
            return (bTime && aTime) ?
                Number(bTime.internalValue - aTime.internalValue) :
                0;
        });
        let filteredRecentlyClosedItems = fuzzySearch(this.searchText_, recentlyClosedItems, this.fuzzySearchOptions_);
        // Limit the number of recently closed items to the default display count
        // when no search text has been specified. Filter out recently closed tabs
        // that belong to a recently closed tab group by default.
        const recentlyClosedTabGroupIds = this.recentlyClosedTabGroups_.reduce((acc, tabGroupData) => acc.concat(tabGroupData.tabGroup.id), []);
        if (!this.searchText_.length) {
            filteredRecentlyClosedItems =
                filteredRecentlyClosedItems
                    .filter(recentlyClosedItem => {
                    if (recentlyClosedItem instanceof TabGroupData) {
                        return true;
                    }
                    const recentlyClosedTab = recentlyClosedItem.tab;
                    return (!recentlyClosedTab.groupId ||
                        !recentlyClosedTabGroupIds.some(groupId => tokenEquals(groupId, recentlyClosedTab.groupId)));
                })
                    .slice(0, this.recentlyClosedDefaultItemDisplayCount_);
        }
        this.filteredItems_ =
            [
                [this.mediaTabsTitleItem_, filteredMediaTabs],
                [this.openTabsTitleItem_, filteredOpenTabs],
                [this.recentlyClosedTitleItem_, filteredRecentlyClosedItems],
            ]
                .reduce((acc, [sectionTitle, sectionItems]) => {
                if (sectionItems.length !== 0) {
                    acc.push(sectionTitle);
                    if (!sectionTitle.expandable ||
                        sectionTitle.expandable && sectionTitle.expanded) {
                        acc.push(...sectionItems);
                    }
                }
                return acc;
            }, []);
        this.searchResultText_ = this.getA11ySearchResultText_();
        // If there was no previously selected index, set the selected index to be
        // the tab index specified for initial selection; else retain the currently
        // selected index. If the list shrunk above the selected index, select the
        // last index in the list. If there are no matching results, set the
        // selected index value to none.
        const tabsList = this.$.tabsList;
        let selectedIndex = this.getSelectedIndex();
        if (selectedIndex === NO_SELECTION) {
            selectedIndex = this.initiallySelectedTabIndex_;
        }
        tabsList.selected =
            Math.min(Math.max(selectedIndex, 0), this.selectableItemCount_() - 1);
    }
    getSearchTextForTesting() {
        return this.searchText_;
    }
    getAvailableHeightForTesting() {
        return this.availableHeight_;
    }
    static get template() {
        return getTemplate();
    }
    onSelectedItemChanged_() {
        const item = this.$.tabsList.selectedItem;
        this.activeSelectionId_ = item ? item?.tab?.tabId : null;
    }
}
customElements.define(TabSearchPageElement.is, TabSearchPageElement);
