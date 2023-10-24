// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'all-sites' is the polymer element for showing the list of all sites under
 * Site Settings.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../settings_shared.css.js';
import './all_sites_icons.html.js';
import './clear_storage_dialog_shared.css.js';
import './site_entry.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GlobalScrollTargetMixin } from '../global_scroll_target_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { DeleteBrowsingDataAction, MetricsBrowserProxyImpl } from '../metrics_browser_proxy.js';
import { routes } from '../route.js';
import { RouteObserverMixin, Router } from '../router.js';
import { getTemplate } from './all_sites.html.js';
import { AllSitesAction2, AllSitesDialog, ContentSetting, SortMethod } from './constants.js';
import { SiteSettingsMixin } from './site_settings_mixin.js';
const AllSitesElementBase = GlobalScrollTargetMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(SiteSettingsMixin(PolymerElement)))));
const FPS_RELATED_SEARCH_PREFIX = 'related:';
export class AllSitesElement extends AllSitesElementBase {
    constructor() {
        super(...arguments);
        this.metricsBrowserProxy = MetricsBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'all-sites';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // TODO(https://crbug.com/1037809): Refactor siteGroupMap to use an Object
            // instead of a Map so that it's observable by Polymer more naturally. As
            // it stands, one cannot use computed properties based off the value of
            // siteGroupMap nor can one use observable functions to listen to changes
            // to siteGroupMap.
            /**
             * Map containing sites to display in the widget, grouped into their
             * group names.
             */
            siteGroupMap: {
                type: Object,
                value() {
                    return new Map();
                },
            },
            /**
             * Filtered site group list.
             */
            filteredList_: {
                type: Array,
            },
            /**
             * Needed by GlobalScrollTargetMixin.
             */
            subpageRoute: {
                type: Object,
                value: routes.SITE_SETTINGS_ALL,
                readOnly: true,
            },
            /**
             * The search query entered into the All Sites search textbox. Used to
             * filter the All Sites list.
             */
            filter: {
                type: String,
                value: '',
                observer: 'forceListUpdate_',
            },
            /**
             * All possible sort methods.
             */
            sortMethods_: {
                type: Object,
                value: SortMethod,
                readOnly: true,
            },
            /**
             * Stores the last selected item in the All Sites list.
             */
            selectedItem_: Object,
            /**
             * Used to track the last-focused element across rows for the
             * FocusRowMixin.
             */
            lastFocused_: Object,
            /**
             * Used to track whether the list of row items has been blurred for the
             * FocusRowMixin.
             */
            listBlurred_: Boolean,
            actionMenuModel_: Object,
            /**
             * Used to determine if user is attempting to clear all site data
             * rather than a single site or origin's data.
             */
            clearAllData_: Boolean,
            /**
             * The selected sort method.
             */
            sortMethod_: String,
            /**
             * The total usage of all sites for this profile.
             */
            totalUsage_: {
                type: String,
                value: '0 B',
            },
        };
    }
    ready() {
        super.ready();
        this.addWebUiListener('onStorageListFetched', this.onStorageListFetched.bind(this));
        this.addEventListener('site-entry-selected', (e) => {
            this.selectedItem_ = e.detail;
        });
        this.addEventListener('open-menu', this.onOpenMenu_.bind(this));
        this.addEventListener('remove-site', this.onRemoveSite_.bind(this));
        const sortParam = Router.getInstance().getQueryParameters().get('sort');
        if (sortParam !== null &&
            Object.values(SortMethod).includes(sortParam)) {
            this.$.sortMethod.value = sortParam;
        }
        this.sortMethod_ = this.$.sortMethod.value;
    }
    connectedCallback() {
        super.connectedCallback();
        // Set scrollOffset so the iron-list scrolling accounts for the space the
        // title takes.
        afterNextRender(this, () => {
            this.$.allSitesList.scrollOffset = this.$.allSitesList.offsetTop;
        });
    }
    /**
     * Reload the site list when the all sites page is visited.
     *
     * RouteObserverBehavior
     */
    currentRouteChanged(currentRoute, oldRoute) {
        super.currentRouteChanged(currentRoute);
        if (currentRoute === routes.SITE_SETTINGS_ALL &&
            currentRoute !== oldRoute) {
            this.populateList_();
        }
    }
    /**
     * Retrieves a list of all known sites with site details.
     */
    populateList_() {
        this.browserProxy.getAllSites().then((response) => {
            // Create a new map to make an observable change.
            const newMap = new Map(this.siteGroupMap);
            response.forEach(siteGroup => {
                newMap.set(siteGroup.groupingKey, siteGroup);
            });
            this.siteGroupMap = newMap;
            this.forceListUpdate_();
        });
    }
    /**
     * Integrate sites using storage into the existing sites map, as there
     * may be overlap between the existing sites.
     * @param list The list of sites using storage.
     */
    onStorageListFetched(list) {
        // Create a new map to make an observable change.
        const newMap = new Map(this.siteGroupMap);
        list.forEach(storageSiteGroup => {
            newMap.set(storageSiteGroup.groupingKey, storageSiteGroup);
        });
        this.siteGroupMap = newMap;
        this.forceListUpdate_();
        this.focusOnLastSelectedEntry_();
    }
    /**
     * Update the total usage by all sites for this profile after updates
     * to the list
     */
    updateTotalUsage_() {
        let usageSum = 0;
        for (const siteGroup of this.filteredList_) {
            siteGroup.origins.forEach(origin => {
                usageSum += origin.usage;
            });
        }
        this.browserProxy.getFormattedBytes(usageSum).then(totalUsage => {
            this.totalUsage_ = totalUsage;
        });
    }
    /**
     * Filters the all sites list with the given search query text.
     * @param siteGroupMap The map of sites to filter.
     * @param searchQuery The filter text.
     */
    filterPopulatedList_(siteGroupMap, searchQuery) {
        const result = [];
        for (const [_groupingKey, siteGroup] of siteGroupMap) {
            if (this.isFpsFiltered_()) {
                const fpsOwnerFilter = this.filter.substring(this.filter.indexOf(':') + 1);
                // Checking `siteGroup.fpsOwner` to ensure that we're not matching with
                // site entries that are not a member of a first party set.
                if (siteGroup.fpsOwner && siteGroup.fpsOwner === fpsOwnerFilter) {
                    result.push(siteGroup);
                }
            }
            else {
                if (siteGroup.origins.find(originInfo => originInfo.origin.includes(searchQuery))) {
                    result.push(siteGroup);
                }
            }
        }
        return this.sortSiteGroupList_(result);
    }
    /**
     * Sorts the given SiteGroup list with the currently selected sort method.
     * @param siteGroupList The list of sites to sort.
     */
    sortSiteGroupList_(siteGroupList) {
        const sortMethod = this.$.sortMethod.value;
        if (!sortMethod) {
            return siteGroupList;
        }
        if (sortMethod === SortMethod.MOST_VISITED) {
            siteGroupList.sort(this.mostVisitedComparator_);
        }
        else if (sortMethod === SortMethod.STORAGE) {
            siteGroupList.sort(this.storageComparator_);
        }
        else if (sortMethod === SortMethod.NAME) {
            siteGroupList.sort(this.nameComparator_);
        }
        return siteGroupList;
    }
    /**
     * Comparator used to sort SiteGroups by the amount of engagement the user has
     * with the origins listed inside it. Note only the maximum engagement is used
     * for each SiteGroup (as opposed to the sum) in order to prevent domains with
     * higher numbers of origins from always floating to the top of the list.
     */
    mostVisitedComparator_(siteGroup1, siteGroup2) {
        const getMaxEngagement = (max, originInfo) => {
            return (max > originInfo.engagement) ? max : originInfo.engagement;
        };
        const score1 = siteGroup1.origins.reduce(getMaxEngagement, 0);
        const score2 = siteGroup2.origins.reduce(getMaxEngagement, 0);
        return score2 - score1;
    }
    /**
     * Comparator used to sort SiteGroups by the amount of storage they use. Note
     * this sorts in descending order.
     */
    storageComparator_(siteGroup1, siteGroup2) {
        const getOverallUsage = (siteGroup) => {
            let usage = 0;
            siteGroup.origins.forEach(originInfo => {
                usage += originInfo.usage;
            });
            return usage;
        };
        const siteGroup1Size = getOverallUsage(siteGroup1);
        const siteGroup2Size = getOverallUsage(siteGroup2);
        // Use the number of cookies as a tie breaker.
        return siteGroup2Size - siteGroup1Size ||
            siteGroup2.numCookies - siteGroup1.numCookies;
    }
    /**
     * Comparator used to sort SiteGroups by their eTLD+1 name (domain).
     */
    nameComparator_(siteGroup1, siteGroup2) {
        return siteGroup1.displayName.localeCompare(siteGroup2.displayName);
    }
    /**
     * Called when the user chooses a different sort method to the default.
     */
    onSortMethodChanged_() {
        this.sortMethod_ = this.$.sortMethod.value;
        this.filteredList_ = this.sortSiteGroupList_(this.filteredList_);
        // Force the iron-list to rerender its items, as the order has changed.
        this.$.allSitesList.fire('iron-resize');
    }
    /**
     * Forces the all sites list to update its list of items, taking into account
     * the search query and the sort method, then re-renders it.
     */
    forceListUpdate_() {
        this.filteredList_ =
            this.filterPopulatedList_(this.siteGroupMap, this.filter);
        this.updateTotalUsage_();
        this.$.allSitesList.fire('iron-resize');
    }
    forceListUpdateForTesting() {
        this.forceListUpdate_();
    }
    /**
     * @return Whether the |siteGroupMap| is empty.
     */
    siteGroupMapEmpty_() {
        return !this.siteGroupMap.size;
    }
    /**
     * @return Whether the |filteredList_| is empty due to searching.
     */
    noSearchResultFound_() {
        return !this.filteredList_.length && !this.siteGroupMapEmpty_();
    }
    /**
     * Focus on previously selected entry.
     */
    focusOnLastSelectedEntry_() {
        if (!this.selectedItem_ || this.siteGroupMap.size === 0) {
            return;
        }
        // Focus the site-entry to ensure the iron-list renders it, otherwise
        // the query selector will not be able to find it. Note the index is
        // used here instead of the item, in case the item was already removed.
        const index = Math.max(0, Math.min(this.selectedItem_.index, this.siteGroupMap.size));
        this.$.allSitesList.focusItem(index);
        this.selectedItem_ = null;
    }
    /**
     * Open the overflow menu and ensure that the item is visible in the scroll
     * pane when its menu is opened (it is possible to open off-screen items using
     * keyboard shortcuts).
     */
    onOpenMenu_(e) {
        const index = e.detail.index;
        const list = this.$.allSitesList;
        if (index < list.firstVisibleIndex || index > list.lastVisibleIndex) {
            list.scrollToIndex(index);
        }
        const target = e.detail.target;
        this.actionMenuModel_ = e.detail;
        this.$.menu.get().showAt(target);
    }
    shouldShowFpsLearnMore_() {
        return this.isFpsFiltered_() && this.filteredList_ &&
            this.filteredList_.length > 0;
    }
    onShowRelatedSites_() {
        this.browserProxy.recordAction(AllSitesAction2.FILTER_BY_FPS_OWNER);
        this.$.menu.get().close();
        const siteGroup = this.filteredList_[this.actionMenuModel_.index];
        const searchParams = new URLSearchParams('searchSubpage=' +
            encodeURIComponent(FPS_RELATED_SEARCH_PREFIX + siteGroup.fpsOwner));
        const currentRoute = Router.getInstance().getCurrentRoute();
        Router.getInstance().navigateTo(currentRoute, searchParams);
    }
    onRemoveSite_(e) {
        this.actionMenuModel_ = e.detail;
        this.$.confirmRemoveSite.get().showModal();
    }
    onRemove_() {
        this.$.confirmRemoveSite.get().showModal();
    }
    // Creates a placeholder origin used to hold cookies scoped at the eTLD+1
    // level.
    generatePlaceholderOrigin_(numCookies, origin, etldPlus1) {
        return {
            origin: etldPlus1 ? `http://${etldPlus1}/` : origin,
            engagement: 0,
            usage: 0,
            numCookies: numCookies,
            hasPermissionSettings: false,
            isInstalled: false,
            isPartitioned: false,
        };
    }
    onConfirmRemoveSite_(e) {
        const { index, actionScope, origin, isPartitioned } = this.actionMenuModel_;
        const siteGroupToUpdate = this.filteredList_[index];
        const updatedSiteGroup = {
            groupingKey: siteGroupToUpdate.groupingKey,
            displayName: siteGroupToUpdate.displayName,
            hasInstalledPWA: siteGroupToUpdate.hasInstalledPWA,
            numCookies: siteGroupToUpdate.numCookies,
            fpsOwner: siteGroupToUpdate.fpsOwner,
            fpsNumMembers: siteGroupToUpdate.fpsNumMembers,
            origins: [],
        };
        this.metricsBrowserProxy.recordDeleteBrowsingDataAction(DeleteBrowsingDataAction.SITES_SETTINGS_PAGE);
        if (actionScope === 'origin') {
            if (isPartitioned) {
                this.browserProxy.recordAction(AllSitesAction2.REMOVE_ORIGIN_PARTITIONED);
                this.browserProxy.clearPartitionedOriginDataAndCookies(this.toUrl(origin).href, siteGroupToUpdate.groupingKey);
            }
            else {
                this.browserProxy.recordAction(AllSitesAction2.REMOVE_ORIGIN);
                this.browserProxy.clearUnpartitionedOriginDataAndCookies(this.toUrl(origin).href);
                this.resetPermissionsForOrigin_(origin);
            }
            updatedSiteGroup.origins = siteGroupToUpdate.origins.filter(o => (o.isPartitioned !== isPartitioned || o.origin !== origin));
            updatedSiteGroup.hasInstalledPWA =
                updatedSiteGroup.origins.some(o => o.isInstalled);
            updatedSiteGroup.numCookies -=
                siteGroupToUpdate.origins
                    .find(o => o.isPartitioned === isPartitioned &&
                    o.origin === origin).numCookies;
            if (updatedSiteGroup.origins.length === 0 &&
                updatedSiteGroup.numCookies > 0) {
                const originPlaceHolder = this.generatePlaceholderOrigin_(updatedSiteGroup.numCookies, origin, updatedSiteGroup.etldPlus1);
                updatedSiteGroup.origins.push(originPlaceHolder);
            }
        }
        else {
            this.browserProxy.recordAction(AllSitesAction2.REMOVE_SITE_GROUP);
            this.browserProxy.clearSiteGroupDataAndCookies(siteGroupToUpdate.groupingKey);
            siteGroupToUpdate.origins.forEach(originEntry => {
                this.resetPermissionsForOrigin_(originEntry.origin);
            });
            if (updatedSiteGroup.fpsOwner) {
                this.decrementFpsNumMembers_(updatedSiteGroup.fpsOwner);
            }
        }
        this.updateSiteGroup_(index, updatedSiteGroup);
        this.$.allSitesList.fire('iron-resize');
        this.updateTotalUsage_();
        this.onCloseDialog_(e);
    }
    /**
     * Checks if a filter is applied.
     * @return True if a filter is applied.
     */
    isFiltered_() {
        return this.filter !== '';
    }
    /**
     * Checks if a first party set search filter is applied.
     * @return True if filter starts with `FPS_RELATED_SEARCH_PREFIX`.
     */
    isFpsFiltered_() {
        return this.filter.startsWith(FPS_RELATED_SEARCH_PREFIX);
    }
    getFpsLearnMoreLabel_() {
        const fpsOwner = this.filter.substring(this.filter.indexOf(':') + 1);
        return loadTimeData.getStringF('siteSettingsFirstPartySetsLearnMore', fpsOwner);
    }
    /**
     * Selects the appropriate string to display for clear button based on whether
     * a filter is applied.
     * @return The appropriate |clearAllButton| string based on whether a filter
     *     is applied.
     */
    getClearDataButtonString_() {
        const buttonStringId = this.isFiltered_() ?
            'siteSettingsDeleteDisplayedStorageLabel' :
            'siteSettingsDeleteAllStorageLabel';
        return this.i18n(buttonStringId);
    }
    /**
     * Selects the appropriate string to display for total usage based on whether
     * a filter is applied.
     * @return The appropriate |clearLabel| string based on whether a filter
     *     is applied.
     */
    getClearStorageDescription_() {
        const descriptionId = this.isFiltered_() ?
            'siteSettingsClearDisplayedStorageDescription' :
            'siteSettingsClearAllStorageDescription';
        return loadTimeData.substituteString(this.i18n(descriptionId), this.totalUsage_);
    }
    /**
     * Confirms the clearing of all storage data for all sites.
     */
    onConfirmClearAllData_(e) {
        e.preventDefault();
        this.clearAllData_ = true;
        const anyAppsInstalled = this.filteredList_.some(g => g.hasInstalledPWA);
        const scopes = [AllSitesDialog.CLEAR_DATA, 'All'];
        const installed = anyAppsInstalled ? 'Installed' : '';
        this.recordUserAction_([...scopes, installed, 'DialogOpened']);
        this.$.confirmClearAllData.get().showModal();
    }
    onCloseDialog_(e) {
        chrome.metricsPrivate.recordUserAction('AllSites_DialogClosed');
        e.target.closest('cr-dialog').close();
        this.actionMenuModel_ = null;
        this.$.menu.get().close();
    }
    getRemoveSiteTitle_() {
        if (this.actionMenuModel_ === null) {
            return '';
        }
        const originScoped = this.actionMenuModel_.actionScope === 'origin';
        const singleOriginSite = !originScoped && this.actionMenuModel_.item.origins.length === 1;
        if (this.actionMenuModel_.isPartitioned) {
            assert(originScoped);
            return loadTimeData.substituteString(this.i18n('siteSettingsRemoveSiteOriginPartitionedDialogTitle', this.originRepresentation(this.actionMenuModel_.origin), this.actionMenuModel_.item.displayName));
        }
        const numInstalledApps = this.actionMenuModel_.item.origins
            .filter(o => !originScoped || this.actionMenuModel_.origin === o.origin)
            .filter(o => o.isInstalled)
            .length;
        let messageId;
        if (originScoped || singleOriginSite) {
            if (numInstalledApps === 1) {
                messageId = 'siteSettingsRemoveSiteOriginAppDialogTitle';
            }
            else {
                assert(numInstalledApps === 0);
                messageId = 'siteSettingsRemoveSiteOriginDialogTitle';
            }
        }
        else {
            if (numInstalledApps > 1) {
                messageId = 'siteSettingsRemoveSiteGroupAppPluralDialogTitle';
            }
            else if (numInstalledApps === 1) {
                messageId = 'siteSettingsRemoveSiteGroupAppDialogTitle';
            }
            else {
                messageId = 'siteSettingsRemoveSiteGroupDialogTitle';
            }
        }
        let displayOrigin;
        if (originScoped) {
            displayOrigin = this.actionMenuModel_.origin;
        }
        else if (singleOriginSite) {
            displayOrigin = this.actionMenuModel_.item.origins[0].origin;
        }
        else {
            displayOrigin = this.actionMenuModel_.item.displayName;
        }
        return loadTimeData.substituteString(this.i18n(messageId), this.originRepresentation(displayOrigin));
    }
    getRemoveSiteLogoutBulletPoint_() {
        if (this.actionMenuModel_ === null) {
            return '';
        }
        const originScoped = this.actionMenuModel_.actionScope === 'origin';
        const singleOriginSite = !originScoped && this.actionMenuModel_.item.origins.length === 1;
        return originScoped || singleOriginSite ?
            this.i18n('siteSettingsRemoveSiteOriginLogout') :
            this.i18n('siteSettingsRemoveSiteGroupLogout');
    }
    showPermissionsBulletPoint_() {
        if (this.actionMenuModel_ === null) {
            return false;
        }
        // If the selected item if a site group, search all child origins for
        // permissions. If it is not, only look at the relevant origin.
        return this.actionMenuModel_.item.origins
            .filter(o => this.actionMenuModel_.actionScope !== 'origin' ||
            this.actionMenuModel_.origin === o.origin)
            .some(o => o.hasPermissionSettings);
    }
    /**
     * Selects the appropriate title to display for clear storage confirmation
     * dialog based on whether a filter is applied.
     * @return The appropriate title for clear storage confirmation dialog.
     */
    getClearAllStorageDialogTitle_() {
        const titleId = this.isFiltered_() ?
            'siteSettingsDeleteDisplayedStorageDialogTitle' :
            'siteSettingsDeleteAllStorageDialogTitle';
        return loadTimeData.substituteString(this.i18n(titleId), this.totalUsage_);
    }
    /**
     * Get the appropriate label for the clear data confirmation dialog, depending
     * on whether any apps are installed and/or filter is applied.
     * @return The appropriate description for clear data confirmation dialog.
     */
    getClearAllStorageDialogDescription_() {
        const anyAppsInstalled = this.filteredList_.some(g => g.hasInstalledPWA);
        let messageId;
        if (anyAppsInstalled) {
            messageId = this.isFiltered_() ?
                'siteSettingsDeleteDisplayedStorageConfirmationInstalled' :
                'siteSettingsDeleteAllStorageConfirmationInstalled';
        }
        else {
            messageId = this.isFiltered_() ?
                'siteSettingsDeleteDisplayedStorageConfirmation' :
                'siteSettingsDeleteAllStorageConfirmation';
        }
        return loadTimeData.substituteString(this.i18n(messageId), this.totalUsage_);
    }
    /**
     * Selects the appropriate string to display for the sign-out string in
     * confirmation popup based on whether a filter is applied.
     * @return The appropriate sign out confirmation string based on whether a
     *     filter is applied.
     */
    getClearAllStorageDialogSignOutLabel_() {
        const signOutLabelId = this.isFiltered_() ?
            'siteSettingsClearDisplayedStorageSignOut' :
            'siteSettingsClearAllStorageSignOut';
        return this.i18n(signOutLabelId);
    }
    recordUserAction_(scopes) {
        chrome.metricsPrivate.recordUserAction(['AllSites', ...scopes].filter(Boolean).join('_'));
    }
    /**
     * Decrements the number of fps members for a given owner eTLD+1 by 1.
     * @param fpsOwner The first party set owner.
     */
    decrementFpsNumMembers_(fpsOwner) {
        this.filteredList_.forEach((siteGroup, index) => {
            if (siteGroup.fpsOwner === fpsOwner) {
                this.set('filteredList_.' + index + '.fpsNumMembers', siteGroup.fpsNumMembers - 1);
            }
        });
    }
    /**
     * Resets all permission settings for a single origin.
     */
    resetPermissionsForOrigin_(origin) {
        this.browserProxy.setOriginPermissions(origin, null, ContentSetting.DEFAULT);
    }
    /**
     * Helper to remove data and cookies for a group.
     * @param index The index of the target siteGroup in filteredList_ that should
     *     be cleared.
     */
    clearDataForSiteGroupIndex_(index) {
        const siteGroupToUpdate = this.filteredList_[index];
        const updatedSiteGroup = {
            groupingKey: siteGroupToUpdate.groupingKey,
            displayName: siteGroupToUpdate.displayName,
            hasInstalledPWA: siteGroupToUpdate.hasInstalledPWA,
            numCookies: 0,
            fpsOwner: siteGroupToUpdate.fpsOwner,
            fpsNumMembers: siteGroupToUpdate.fpsNumMembers,
            origins: [],
        };
        this.browserProxy.clearSiteGroupDataAndCookies(siteGroupToUpdate.groupingKey);
        for (let i = 0; i < siteGroupToUpdate.origins.length; ++i) {
            const updatedOrigin = Object.assign({}, siteGroupToUpdate.origins[i]);
            if (updatedOrigin.hasPermissionSettings) {
                updatedOrigin.numCookies = 0;
                updatedOrigin.usage = 0;
                updatedSiteGroup.origins.push(updatedOrigin);
            }
        }
        this.updateSiteGroup_(index, updatedSiteGroup);
    }
    /**
     * Updates the UI after permissions have been reset or data/cookies
     * have been cleared
     * @param index The index of the target siteGroup in filteredList_ that should
     *     be updated.
     * @param updatedSiteGroup The SiteGroup object that represents the new state.
     */
    updateSiteGroup_(index, updatedSiteGroup) {
        if (updatedSiteGroup.origins.length > 0) {
            this.set('filteredList_.' + index, updatedSiteGroup);
            this.siteGroupMap.set(updatedSiteGroup.groupingKey, updatedSiteGroup);
        }
        else {
            this.splice('filteredList_', index, 1);
            this.siteGroupMap.delete(updatedSiteGroup.groupingKey);
        }
    }
    /**
     * Clear data and cookies for all sites.
     */
    onClearAllData_(e) {
        this.browserProxy.recordAction(AllSitesAction2.CLEAR_ALL_DATA);
        const scopes = [AllSitesDialog.CLEAR_DATA, 'All'];
        const anyAppsInstalled = this.filteredList_.some(g => g.hasInstalledPWA);
        const installed = anyAppsInstalled ? 'Installed' : '';
        this.recordUserAction_([...scopes, installed, 'Confirm']);
        this.metricsBrowserProxy.recordDeleteBrowsingDataAction(DeleteBrowsingDataAction.SITES_SETTINGS_PAGE);
        if (this.isFpsFiltered_()) {
            this.browserProxy.recordAction(AllSitesAction2.DELETE_FOR_ENTIRE_FPS);
        }
        for (let index = this.filteredList_.length - 1; index >= 0; index--) {
            this.clearDataForSiteGroupIndex_(index);
        }
        // Needed to update the filteredList_ for the "No sites found" text to
        // appear.
        this.forceListUpdate_();
        this.totalUsage_ = '0 B';
        this.onCloseDialog_(e);
    }
}
customElements.define(AllSitesElement.is, AllSitesElement);
