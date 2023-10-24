// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'site-entry' is an element representing a single eTLD+1 site entity.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import '../settings_shared.css.js';
import '../site_favicon.js';
import { FocusRowMixin } from 'chrome://resources/cr_elements/focus_row_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BaseMixin } from '../base_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { Router } from '../router.js';
import { AllSitesAction2, SortMethod } from './constants.js';
import { getTemplate } from './site_entry.html.js';
import { SiteSettingsMixin } from './site_settings_mixin.js';
const SiteEntryElementBase = FocusRowMixin(BaseMixin(SiteSettingsMixin(I18nMixin(PolymerElement))));
export class SiteEntryElement extends SiteEntryElementBase {
    constructor() {
        super(...arguments);
        this.button_ = null;
        this.eventTracker_ = new EventTracker();
    }
    static get is() {
        return 'site-entry';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * An object representing a group of sites with the same eTLD+1.
             */
            siteGroup: {
                type: Object,
                observer: 'onSiteGroupChanged_',
            },
            /**
             * The name to display beside the icon. If grouped_() is true, it will be
             * the eTLD+1 for all the origins. For Isolated Web Apps instead of
             * displaying the origin, the short name of the app will be displayed.
             * Otherwise, it will return the host.
             */
            displayName_: String,
            /**
             * The string to display when there is a non-zero number of cookies.
             */
            cookieString_: String,
            /**
             * The first party set info for a site including owner and members count.
             */
            fpsMembershipLabel_: {
                type: String,
                value: '',
            },
            /**
             * Mock preference used to power managed policy icon for first party sets.
             */
            fpsEnterprisePref_: Object,
            /**
             * Whether site entry is shown with a first party set filter search.
             */
            isFpsFiltered: Boolean,
            /**
             * The position of this site-entry in its parent list.
             */
            listIndex: {
                type: Number,
                value: -1,
            },
            /**
             * The string to display showing the overall usage of this site-entry.
             */
            overallUsageString_: String,
            /**
             * An array containing the strings to display showing the individual disk
             * usage for each origin in |siteGroup|.
             */
            originUsages_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * An array containing the strings to display showing the individual
             * cookies number for each origin in |siteGroup|.
             */
            cookiesNum_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * The selected sort method.
             */
            sortMethod: { type: String, observer: 'updateOrigins_' },
        };
    }
    static get observers() {
        return [
            'updateFpsMembershipLabel_(siteGroup.fpsNumMembers, siteGroup.fpsOwner)',
            'updatePolicyPref_(siteGroup.fpsEnterpriseManaged)',
            'updateFocus_(siteGroup.fpsOwner)',
        ];
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.button_) {
            this.eventTracker_.remove(this.button_, 'keydown');
        }
    }
    onButtonKeydown_(e) {
        if (e.shiftKey && e.key === 'Tab') {
            this.focus();
        }
    }
    /**
     * Whether the list of origins displayed in this site-entry is a group of
     * eTLD+1 origins or not.
     * @param siteGroup The eTLD+1 group of origins.
     */
    grouped_(siteGroup) {
        if (!siteGroup) {
            return false;
        }
        if (siteGroup.origins.length > 1 ||
            siteGroup.numCookies > siteGroup.origins[0].numCookies ||
            siteGroup.origins.some(o => o.isPartitioned)) {
            return true;
        }
        return false;
    }
    /**
     * Returns a user-friendly name for the siteGroup.
     * @param siteGroup The group of origins.
     * @return The user-friendly name.
     */
    siteGroupRepresentation_(siteGroup) {
        if (!siteGroup) {
            return '';
        }
        return siteGroup.displayName;
    }
    /**
     * @param siteGroup The eTLD+1 group of origins.
     */
    onSiteGroupChanged_(siteGroup) {
        // Update the button listener.
        if (this.button_) {
            this.eventTracker_.remove(this.button_, 'keydown');
        }
        this.button_ =
            this.shadowRoot.querySelector('#toggleButton *:not([hidden])');
        assert(this.button_);
        this.eventTracker_.add(this.button_, 'keydown', (e) => this.onButtonKeydown_(e));
        if (!this.grouped_(siteGroup)) {
            // Ensure ungrouped |siteGroup|s do not get stuck in an opened state.
            const collapseChild = this.$.originList.getIfExists();
            if (collapseChild && collapseChild.opened) {
                this.toggleCollapsible_();
            }
        }
        if (!siteGroup) {
            return;
        }
        this.calculateUsageInfo_(siteGroup);
        this.getCookieNumString_(siteGroup.numCookies).then(string => {
            this.cookieString_ = string;
        });
        this.updateOrigins_(this.sortMethod);
        this.displayName_ = this.siteGroupRepresentation_(siteGroup);
    }
    /**
     * Returns any non-HTTPS scheme/protocol for the siteGroup that only contains
     * one origin. Otherwise, returns a empty string.
     * @param siteGroup The eTLD+1 group of origins.
     * @return The scheme if non-HTTPS, or empty string if HTTPS.
     */
    siteGroupScheme_(siteGroup) {
        if (!siteGroup || (this.grouped_(siteGroup))) {
            return '';
        }
        return this.originScheme_(siteGroup.origins[0]);
    }
    /**
     * Returns any non-HTTPS scheme/protocol for the origin. Otherwise, returns
     * an empty string.
     * @return The scheme if non-HTTPS, or empty string if HTTPS.
     */
    originScheme_(origin) {
        const url = this.toUrl(origin.origin);
        const scheme = url.protocol.replace(new RegExp(':*$'), '');
        const HTTPS_SCHEME = 'https';
        if (scheme === HTTPS_SCHEME) {
            return '';
        }
        return scheme;
    }
    /**
     * Get an appropriate favicon that represents this group of eTLD+1 sites as a
     * whole.
     * @param siteGroup The eTLD+1 group of origins.
     * @return URL that is used for fetching the favicon
     */
    getSiteGroupIcon_(siteGroup) {
        const origins = siteGroup.origins;
        assert(origins);
        assert(origins.length >= 1);
        if (origins.length === 1) {
            return origins[0].origin;
        }
        // If we can find a origin with format "www.etld+1", use the favicon of this
        // origin. Otherwise find the origin with largest storage, and use the
        // number of cookies as a tie breaker.
        for (const originInfo of origins) {
            if (siteGroup.etldPlus1 &&
                this.toUrl(originInfo.origin).host ===
                    'www.' + siteGroup.etldPlus1) {
                return originInfo.origin;
            }
        }
        const getMaxStorage = (max, originInfo) => {
            return (max.usage > originInfo.usage ||
                (max.usage === originInfo.usage &&
                    max.numCookies > originInfo.numCookies) ?
                max :
                originInfo);
        };
        return origins.reduce(getMaxStorage, origins[0]).origin;
    }
    /**
     * Calculates the amount of disk storage used by the given eTLD+1.
     * Also updates the corresponding display strings.
     * @param siteGroup The eTLD+1 group of origins.
     */
    calculateUsageInfo_(siteGroup) {
        let overallUsage = 0;
        siteGroup.origins.forEach(originInfo => {
            overallUsage += originInfo.usage;
        });
        this.browserProxy.getFormattedBytes(overallUsage).then(string => {
            this.overallUsageString_ = string;
        });
    }
    isFpsMember_() {
        return !!this.siteGroup && this.siteGroup.fpsOwner !== undefined;
    }
    /**
     * Evaluates whether the three dot menu should be shown for the site entry.
     * @returns True if site group is a first party set member and filter by
     * first party set owner is not applied.
     */
    shouldShowOverflowMenu() {
        return this.isFpsMember_() && !this.isFpsFiltered;
    }
    /**
     * Get display string for number of cookies.
     */
    getCookieNumString_(numCookies) {
        if (numCookies === 0) {
            return Promise.resolve('');
        }
        return this.browserProxy.getNumCookiesString(numCookies);
    }
    /**
     * Updates the display string for FPS information of owner and member count.
     * @param fpsNumMembers The number of members in the first party set.
     * @param fpsOwner The eTLD+1 for the first party set owner.
     */
    updateFpsMembershipLabel_() {
        if (!this.siteGroup.fpsOwner) {
            this.fpsMembershipLabel_ = '';
        }
        else {
            this.browserProxy
                .getFpsMembershipLabel(this.siteGroup.fpsNumMembers, this.siteGroup.fpsOwner)
                .then(label => this.fpsMembershipLabel_ = label);
        }
    }
    /**
     * Evaluates whether the policy icon should be shown.
     * @returns True when `this.siteGroup.fpsEnterpriseManaged` is true,
     * otherwise false.
     */
    shouldShowPolicyPrefIndicator_() {
        return !!this.siteGroup.fpsEnterpriseManaged;
    }
    /**
     * Updates `fpsEnterprisePref_` based on `siteGroup.fpsEnterpriseManaged`.
     */
    updatePolicyPref_() {
        this.fpsEnterprisePref_ = this.siteGroup.fpsEnterpriseManaged ?
            Object.assign({
                enforcement: chrome.settingsPrivate.Enforcement.ENFORCED,
                controlledBy: chrome.settingsPrivate.ControlledBy.DEVICE_POLICY,
            }) :
            Object.assign({
                enforcement: undefined,
                controlledBy: undefined,
            });
    }
    updateFocus_() {
        // TODO(crbug.com/1378720): Re-focusing a changed entry (such as when an
        // entry is removed from list) happens before the entry elements have been
        // updated (e.g. different buttons shown / hidden). This causes the
        // focusRowMixin to incorrectly identify an element which is about to be
        // hidden / removed as a valid focus target.
        const isCurrentlyFocused = this.isFocused;
        afterNextRender(this, () => {
            if (isCurrentlyFocused) {
                (this.shouldShowOverflowMenu() ?
                    this.$$('#fpsOverflowMenuButton') :
                    this.$$('#removeSiteButton')).focus();
            }
        });
    }
    /**
     * Array binding for the |originUsages_| array for use in the HTML.
     * @param change The change record for the array.
     * @param index The index of the array item.
     */
    originUsagesItem_(change, index) {
        return change.base[index];
    }
    /**
     * Array binding for the |cookiesNum_| array for use in the HTML.
     * @param change The change record for the array.
     * @param index The index of the array item.
     */
    originCookiesItem_(change, index) {
        return change.base[index];
    }
    /**
     * Navigates to the corresponding Site Details page for the given origin.
     * @param origin The origin to navigate to the Site Details page for it.
     */
    navigateToSiteDetails_(origin) {
        this.fire('site-entry-selected', { item: this.siteGroup, index: this.listIndex });
        Router.getInstance().navigateTo(routes.SITE_SETTINGS_SITE_DETAILS, new URLSearchParams('site=' + origin));
    }
    /**
     * A handler for selecting a site (by clicking on the origin).
     */
    onOriginClick_(e) {
        if (this.siteGroup.origins[e.model.index].isPartitioned) {
            return;
        }
        this.navigateToSiteDetails_(this.siteGroup.origins[e.model.index].origin);
        this.browserProxy.recordAction(AllSitesAction2.ENTER_SITE_DETAILS);
        chrome.metricsPrivate.recordUserAction('AllSites_EnterSiteDetails');
    }
    /**
     * A handler for clicking on a site-entry heading. This will either show a
     * list of origins or directly navigates to Site Details if there is only one.
     */
    onSiteEntryClick_() {
        // Individual origins don't expand - just go straight to Site Details.
        if (!this.grouped_(this.siteGroup)) {
            this.navigateToSiteDetails_(this.siteGroup.origins[0].origin);
            this.browserProxy.recordAction(AllSitesAction2.ENTER_SITE_DETAILS);
            chrome.metricsPrivate.recordUserAction('AllSites_EnterSiteDetails');
            return;
        }
        this.toggleCollapsible_();
        // Make sure the expanded origins can be viewed without further scrolling
        // (in case |this| is already at the bottom of the viewport).
        this.scrollIntoViewIfNeeded();
    }
    /**
     * Toggles open and closed the list of origins if there is more than one.
     */
    toggleCollapsible_() {
        const collapseChild = this.$.originList.get();
        collapseChild.toggle();
        this.$.toggleButton.setAttribute('aria-expanded', collapseChild.opened ? 'true' : 'false');
        this.$.expandIcon.setAttribute('aria-expanded', collapseChild.opened ? 'true' : 'false');
        this.$.expandIcon.toggleClass('icon-expand-more');
        this.$.expandIcon.toggleClass('icon-expand-less');
        this.fire('iron-resize');
    }
    /**
     * Fires a custom event when the menu button is clicked. Sends the details
     * of the site entry item and where the menu should appear.
     */
    showOverflowMenu_(e) {
        this.fire('open-menu', {
            target: e.target,
            index: this.listIndex,
            item: this.siteGroup,
            origin: e.target.dataset['origin'],
            isPartitioned: e.target.dataset['partitioned'],
            actionScope: e.target.dataset['context'],
        });
    }
    onRemove_(e) {
        this.fire('remove-site', {
            target: e.target,
            index: this.listIndex,
            item: this.siteGroup,
            origin: e.target.dataset['origin'],
            isPartitioned: e.target.dataset['partitioned'] !== undefined,
            actionScope: e.target.dataset['context'],
        });
    }
    /**
     * Returns the correct class to apply depending on this site-entry's position
     * in a list.
     */
    getClassForIndex_(index) {
        return index > 0 ? 'hr' : '';
    }
    getSubpageLabel_(target) {
        return this.i18n('siteSettingsSiteDetailsSubpageAccessibilityLabel', target);
    }
    getRemoveOriginButtonTitle_(origin) {
        return this.i18n('siteSettingsCookieRemoveSite', this.originRepresentation(origin));
    }
    getMoreActionsLabel_() {
        return this.i18n('firstPartySetsMoreActionsTitle', this.siteGroup.displayName);
    }
    /**
     * Update the order and data display text for origins.
     */
    updateOrigins_(sortMethod) {
        if (!sortMethod || !this.siteGroup || !this.grouped_(this.siteGroup)) {
            return;
        }
        const origins = this.siteGroup.origins.slice();
        origins.sort(this.sortFunction_(sortMethod));
        this.set('siteGroup.origins', origins);
        this.originUsages_ = new Array(origins.length);
        origins.forEach((originInfo, i) => {
            this.browserProxy.getFormattedBytes(originInfo.usage).then((string) => {
                this.set(`originUsages_.${i}`, string);
            });
        });
        this.cookiesNum_ = new Array(this.siteGroup.origins.length);
        origins.forEach((originInfo, i) => {
            this.getCookieNumString_(originInfo.numCookies).then((string) => {
                this.set(`cookiesNum_.${i}`, string);
            });
        });
    }
    /**
     * Sort functions for sorting origins based on selected method.
     */
    sortFunction_(sortMethod) {
        if (sortMethod === SortMethod.MOST_VISITED) {
            return (origin1, origin2) => {
                return (origin1.isPartitioned ? 1 : 0) -
                    (origin2.isPartitioned ? 1 : 0) ||
                    origin2.engagement - origin1.engagement;
            };
        }
        else if (sortMethod === SortMethod.STORAGE) {
            return (origin1, origin2) => {
                return (origin1.isPartitioned ? 1 : 0) -
                    (origin2.isPartitioned ? 1 : 0) ||
                    origin2.usage - origin1.usage ||
                    origin2.numCookies - origin1.numCookies;
            };
        }
        else if (sortMethod === SortMethod.NAME) {
            return (origin1, origin2) => {
                return (origin1.isPartitioned ? 1 : 0) -
                    (origin2.isPartitioned ? 1 : 0) ||
                    origin1.origin.localeCompare(origin2.origin);
            };
        }
        assertNotReached();
    }
    /**
     * Get extension id description string for an extension |siteGroup|.
     */
    extensionIdDescription_(siteGroup) {
        const id = this.originRepresentation(siteGroup.origins[0].origin);
        return loadTimeData.getStringF('siteSettingsExtensionIdDescription', id);
    }
    /**
     * Check if the given |siteGroup| is an extension.
     */
    isExtension_(siteGroup) {
        return this.siteGroupScheme_(siteGroup) === 'chrome-extension';
    }
}
customElements.define(SiteEntryElement.is, SiteEntryElement);
