// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/managed_footnote/managed_footnote.js';
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_icons.css.js';
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_nav_menu_item_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import 'chrome://resources/polymer/v3_0/paper-styles/color.js';
import './shared_icons.html.js';
import './shared_vars.css.js';
import './strings.m.js';
import { BrowserProxyImpl } from 'chrome://resources/cr_components/history_clusters/browser_proxy.js';
import { MetricsProxyImpl } from 'chrome://resources/cr_components/history_clusters/metrics_proxy.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserServiceImpl } from './browser_service.js';
import { Page, TABBED_PAGES } from './router.js';
import { getTemplate } from './side_bar.html.js';
export class HistorySideBarElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.guestSession_ = loadTimeData.getBoolean('isGuestSession');
    }
    static get is() {
        return 'history-side-bar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            footerInfo: Object,
            historyClustersEnabled: Boolean,
            historyClustersVisible: {
                type: Boolean,
                notify: true,
            },
            /* The id of the currently selected page. */
            selectedPage: {
                type: String,
                notify: true,
            },
            /* The index of the currently selected tab. */
            selectedTab: {
                type: Number,
                notify: true,
            },
            guestSession_: Boolean,
            historyClustersVisibleManagedByPolicy_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isHistoryClustersVisibleManagedByPolicy');
                },
            },
            renameJourneys_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('renameJourneys'),
            },
            /**
             * Used to display notices for profile sign-in status and managed status.
             */
            showFooter_: {
                type: Boolean,
                computed: 'computeShowFooter_(' +
                    'footerInfo.otherFormsOfHistory, footerInfo.managed)',
            },
            showHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowHistoryClusters_(' +
                    'historyClustersEnabled, historyClustersVisible)',
            },
            showToggleHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowToggleHistoryClusters_(' +
                    'historyClustersEnabled, historyClustersVisibleManagedByPolicy_, ' +
                    'renameJourneys_)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', e => this.onKeydown_(e));
    }
    onKeydown_(e) {
        if (e.key === ' ') {
            e.composedPath()[0].click();
        }
    }
    onSelectorActivate_() {
        this.dispatchEvent(new CustomEvent('history-close-drawer', { bubbles: true, composed: true }));
    }
    /**
     * Relocates the user to the clear browsing data section of the settings page.
     */
    onClearBrowsingDataClick_(e) {
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordAction('InitClearBrowsingData');
        browserService.openClearBrowsingData();
        this.$['cbd-ripple'].upAction();
        e.preventDefault();
    }
    computeClearBrowsingDataTabIndex_() {
        return this.guestSession_ ? '-1' : '';
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onItemClick_(e) {
        e.preventDefault();
    }
    /**
     * @returns The url to navigate to when the history menu item is clicked. It
     *     reflects the currently selected tab.
     */
    getHistoryItemHref_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            '/' + Page.HISTORY_CLUSTERS :
            '/';
    }
    /**
     * @returns The path that determines if the history menu item is selected. It
     *     reflects the currently selected tab.
     */
    getHistoryItemPath_() {
        return this.showHistoryClusters_ &&
            TABBED_PAGES[this.selectedTab] === Page.HISTORY_CLUSTERS ?
            Page.HISTORY_CLUSTERS :
            Page.HISTORY;
    }
    getToggleHistoryClustersItemIcon_() {
        return `history:journeys-${this.historyClustersVisible ? 'off' : 'on'}`;
    }
    getToggleHistoryClustersItemLabel_() {
        return loadTimeData.getString(this.historyClustersVisible ? 'disableHistoryClusters' :
            'enableHistoryClusters');
    }
    onToggleHistoryClustersClick_() {
        MetricsProxyImpl.getInstance().recordToggledVisibility(!this.historyClustersVisible);
        BrowserProxyImpl.getInstance()
            .handler.toggleVisibility(!this.historyClustersVisible)
            .then(({ visible }) => {
            this.historyClustersVisible = visible;
            this.selectedTab = TABBED_PAGES.indexOf(visible ? Page.HISTORY_CLUSTERS : Page.HISTORY);
        });
        this.$['thc-ripple'].upAction();
    }
    onToggleHistoryClustersKeydown_(e) {
        // Handle 'Enter' keypress because the menu item is missing href attribute.
        if (e.key === 'Enter') {
            this.onToggleHistoryClustersClick_();
        }
    }
    onToggleHistoryClustersMousedown_(e) {
        // The menu item steals the focus on mousedown event because it is given a
        // tabindex="0" so that it is focusable in sequential keyboard navigation.
        e.preventDefault();
    }
    computeShowFooter_(includeOtherFormsOfBrowsingHistory, managed) {
        return includeOtherFormsOfBrowsingHistory || managed;
    }
    computeShowHistoryClusters_() {
        return this.historyClustersEnabled && this.historyClustersVisible;
    }
    computeShowToggleHistoryClusters_() {
        return this.historyClustersEnabled &&
            !this.historyClustersVisibleManagedByPolicy_ && !this.renameJourneys_;
    }
}
customElements.define(HistorySideBarElement.is, HistorySideBarElement);
