// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/history_clusters/clusters.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import './history_list.js';
import './history_toolbar.js';
import './query_manager.js';
import './shared_style.css.js';
import './side_bar.js';
import './strings.m.js';
import { FindShortcutMixin } from 'chrome://resources/cr_elements/find_shortcut_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { EventTracker } from 'chrome://resources/js/event_tracker.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getTrustedScriptURL } from 'chrome://resources/js/static_types.js';
import { hasKeyModifiers } from 'chrome://resources/js/util_ts.js';
import { IronA11yAnnouncer } from 'chrome://resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { IronScrollTargetBehavior } from 'chrome://resources/polymer/v3_0/iron-scroll-target-behavior/iron-scroll-target-behavior.js';
import { mixinBehaviors, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './app.html.js';
import { BrowserServiceImpl } from './browser_service.js';
import { HistoryPageViewHistogram } from './constants.js';
import { Page, TABBED_PAGES } from './router.js';
let lazyLoadPromise = null;
export function ensureLazyLoaded() {
    if (!lazyLoadPromise) {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = getTrustedScriptURL `./lazy_load.js`;
        document.body.appendChild(script);
        lazyLoadPromise = Promise.all([
            customElements.whenDefined('history-synced-device-manager'),
            customElements.whenDefined('cr-action-menu'),
            customElements.whenDefined('cr-button'),
            customElements.whenDefined('cr-checkbox'),
            customElements.whenDefined('cr-dialog'),
            customElements.whenDefined('cr-drawer'),
            customElements.whenDefined('cr-icon-button'),
            customElements.whenDefined('cr-toolbar-selection-overlay'),
        ]);
    }
    return lazyLoadPromise;
}
// Adds click/auxclick listeners for any link on the page. If the link points
// to a chrome: or file: url, then calls into the browser to do the
// navigation. Note: This method is *not* re-entrant. Every call to it, will
// re-add listeners on |document|. It's up to callers to ensure this is only
// called once.
export function listenForPrivilegedLinkClicks() {
    ['click', 'auxclick'].forEach(function (eventName) {
        document.addEventListener(eventName, function (evt) {
            const e = evt;
            // Ignore buttons other than left and middle.
            if (e.button > 1 || e.defaultPrevented) {
                return;
            }
            const eventPath = e.composedPath();
            let anchor = null;
            if (eventPath) {
                for (let i = 0; i < eventPath.length; i++) {
                    const element = eventPath[i];
                    if (element.tagName === 'A' && element.href) {
                        anchor = element;
                        break;
                    }
                }
            }
            // Fallback if Event.path is not available.
            let el = e.target;
            if (!anchor && el.nodeType === Node.ELEMENT_NODE &&
                el.webkitMatchesSelector('A, A *')) {
                while (el.tagName !== 'A') {
                    el = el.parentElement;
                }
                anchor = el;
            }
            if (!anchor) {
                return;
            }
            if ((anchor.protocol === 'file:' || anchor.protocol === 'about:') &&
                (e.button === 0 || e.button === 1)) {
                BrowserServiceImpl.getInstance().navigateToUrl(anchor.href, anchor.target, e);
                e.preventDefault();
            }
        });
    });
}
const HistoryAppElementBase = mixinBehaviors([IronScrollTargetBehavior], FindShortcutMixin(WebUiListenerMixin(PolymerElement)));
export class HistoryAppElement extends HistoryAppElementBase {
    static get is() {
        return 'history-app';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The id of the currently selected page.
            selectedPage_: {
                type: String,
                observer: 'selectedPageChanged_',
            },
            queryResult_: Object,
            // Updated on synced-device-manager attach by chrome.sending
            // 'otherDevicesInitialized'.
            isUserSignedIn_: Boolean,
            pendingDelete_: Boolean,
            toolbarShadow_: {
                type: Boolean,
                reflectToAttribute: true,
                notify: true,
            },
            queryState_: Object,
            // True if the window is narrow enough for the page to have a drawer.
            hasDrawer_: {
                type: Boolean,
                observer: 'hasDrawerChanged_',
            },
            footerInfo: {
                type: Object,
                value() {
                    return {
                        managed: loadTimeData.getBoolean('isManaged'),
                        otherFormsOfHistory: false,
                    };
                },
            },
            historyClustersEnabled_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isHistoryClustersEnabled'),
            },
            historyClustersVisible_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('isHistoryClustersVisible'),
            },
            historyClustersPath_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('renameJourneys') ? 'grouped' : 'journeys',
            },
            showHistoryClusters_: {
                type: Boolean,
                computed: 'computeShowHistoryClusters_(historyClustersEnabled_, historyClustersVisible_)',
                reflectToAttribute: true,
            },
            // The index of the currently selected tab.
            selectedTab_: {
                type: Number,
                observer: 'selectedTabChanged_',
            },
            tabsIcons_: {
                type: Array,
                value: () => ['images/list.svg', 'chrome://resources/images/icon_journeys.svg'],
            },
            tabsNames_: {
                type: Array,
                value: () => {
                    return [
                        loadTimeData.getString('historyListTabLabel'),
                        loadTimeData.getString('historyClustersTabLabel'),
                    ];
                },
            },
        };
    }
    constructor() {
        super();
        this.browserService_ = null;
        this.eventTracker_ = new EventTracker();
        this.isUserSignedIn_ = loadTimeData.getBoolean('isUserSignedIn');
        this.historyClustersViewStartTime_ = null;
        this.queryResult_ = {
            info: undefined,
            results: undefined,
            sessionList: undefined,
        };
        listenForPrivilegedLinkClicks();
    }
    connectedCallback() {
        super.connectedCallback();
        this.eventTracker_.add(document, 'keydown', (e) => this.onKeyDown_(e));
        this.eventTracker_.add(document, 'visibilitychange', this.onVisibilityChange_.bind(this));
        this.addWebUiListener('sign-in-state-changed', (signedIn) => this.onSignInStateChanged_(signedIn));
        this.addWebUiListener('has-other-forms-changed', (hasOtherForms) => this.onHasOtherFormsChanged_(hasOtherForms));
        this.addWebUiListener('foreign-sessions-changed', (sessionList) => this.setForeignSessions_(sessionList));
        this.browserService_ = BrowserServiceImpl.getInstance();
        this.shadowRoot.querySelector('history-query-manager').initialize();
        this.browserService_.getForeignSessions().then(sessionList => this.setForeignSessions_(sessionList));
    }
    ready() {
        super.ready();
        this.addEventListener('cr-toolbar-menu-click', this.onCrToolbarMenuClick_);
        this.addEventListener('delete-selected', this.deleteSelected);
        this.addEventListener('history-checkbox-select', this.checkboxSelected);
        this.addEventListener('history-close-drawer', this.closeDrawer_);
        this.addEventListener('history-view-changed', this.historyViewChanged_);
        this.addEventListener('unselect-all', this.unselectAll);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.eventTracker_.removeAll();
    }
    fire_(eventName, detail) {
        this.dispatchEvent(new CustomEvent(eventName, { bubbles: true, composed: true, detail }));
    }
    computeShowHistoryClusters_() {
        return this.historyClustersEnabled_ && this.historyClustersVisible_;
    }
    historyClustersSelected_(_selectedPage, _showHistoryClusters) {
        return this.selectedPage_ === Page.HISTORY_CLUSTERS &&
            this.showHistoryClusters_;
    }
    onFirstRender_() {
        setTimeout(() => {
            this.browserService_.recordTime('History.ResultsRenderedTime', window.performance.now());
        });
        // Focus the search field on load. Done here to ensure the history page
        // is rendered before we try to take focus.
        const searchField = this.$.toolbar.searchField;
        if (!searchField.narrow) {
            searchField.getSearchInput().focus();
        }
        // Lazily load the remainder of the UI.
        ensureLazyLoaded().then(function () {
            requestIdleCallback(function () {
                // https://github.com/microsoft/TypeScript/issues/13569
                document.fonts.load('bold 12px Roboto');
            });
        });
    }
    /** Overridden from IronScrollTargetBehavior */
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    _scrollHandler() {
        if (this.scrollTarget) {
            // When the tabs are visible, show the toolbar shadow for the synced
            // devices page only.
            this.toolbarShadow_ = this.scrollTarget.scrollTop !== 0 &&
                (!this.showHistoryClusters_ ||
                    this.syncedTabsSelected_(this.selectedPage_));
        }
    }
    onCrToolbarMenuClick_() {
        this.$.drawer.get().toggle();
    }
    /**
     * Listens for history-item being selected or deselected (through checkbox)
     * and changes the view of the top toolbar.
     */
    checkboxSelected() {
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    selectOrUnselectAll() {
        this.$.history.selectOrUnselectAll();
        this.$.toolbar.count = this.$.history.getSelectedItemCount();
    }
    /**
     * Listens for call to cancel selection and loops through all items to set
     * checkbox to be unselected.
     */
    unselectAll() {
        this.$.history.unselectAllItems();
        this.$.toolbar.count = 0;
    }
    deleteSelected() {
        this.$.history.deleteSelectedWithPrompt();
    }
    onQueryFinished_() {
        this.$.history.historyResult(this.queryResult_.info, this.queryResult_.results);
        if (document.body.classList.contains('loading')) {
            document.body.classList.remove('loading');
            this.onFirstRender_();
        }
    }
    onKeyDown_(e) {
        if ((e.key === 'Delete' || e.key === 'Backspace') && !hasKeyModifiers(e)) {
            this.onDeleteCommand_();
            return;
        }
        if (e.key === 'a' && !e.altKey && !e.shiftKey) {
            let hasTriggerModifier = e.ctrlKey && !e.metaKey;
            // 
            if (hasTriggerModifier && this.onSelectAllCommand_()) {
                e.preventDefault();
            }
        }
        if (e.key === 'Escape') {
            this.unselectAll();
            IronA11yAnnouncer.requestAvailability();
            this.fire_('iron-announce', { text: loadTimeData.getString('itemsUnselected') });
            e.preventDefault();
        }
    }
    onVisibilityChange_() {
        if (this.selectedPage_ !== Page.HISTORY_CLUSTERS) {
            return;
        }
        if (document.visibilityState === 'hidden') {
            this.recordHistoryClustersDuration_();
        }
        else if (document.visibilityState === 'visible' &&
            this.historyClustersViewStartTime_ === null) {
            // Restart the timer if the user switches back to the History tab.
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    onDeleteCommand_() {
        if (this.$.toolbar.count === 0 || this.pendingDelete_) {
            return;
        }
        this.deleteSelected();
    }
    /**
     * @return Whether the command was actually triggered.
     */
    onSelectAllCommand_() {
        if (this.$.toolbar.searchField.isSearchFocused() ||
            this.syncedTabsSelected_(this.selectedPage_) ||
            this.historyClustersSelected_(this.selectedPage_, this.showHistoryClusters_)) {
            return false;
        }
        this.selectOrUnselectAll();
        return true;
    }
    /**
     * @param sessionList Array of objects describing the sessions from other
     *     devices.
     */
    setForeignSessions_(sessionList) {
        this.set('queryResult_.sessionList', sessionList);
    }
    /**
     * Update sign in state of synced device manager after user logs in or out.
     */
    onSignInStateChanged_(isUserSignedIn) {
        this.isUserSignedIn_ = isUserSignedIn;
    }
    /**
     * Update sign in state of synced device manager after user logs in or out.
     */
    onHasOtherFormsChanged_(hasOtherForms) {
        this.set('footerInfo.otherFormsOfHistory', hasOtherForms);
    }
    syncedTabsSelected_(_selectedPage) {
        return this.selectedPage_ === Page.SYNCED_TABS;
    }
    /**
     * @return Whether a loading spinner should be shown (implies the
     *     backend is querying a new search term).
     */
    shouldShowSpinner_(querying, incremental, searchTerm) {
        return querying && !incremental && searchTerm !== '';
    }
    selectedPageChanged_(newPage, oldPage) {
        this.unselectAll();
        this.historyViewChanged_();
        this.maybeUpdateSelectedHistoryTab_();
        if (oldPage === Page.HISTORY_CLUSTERS &&
            newPage !== Page.HISTORY_CLUSTERS) {
            this.recordHistoryClustersDuration_();
        }
        if (newPage === Page.HISTORY_CLUSTERS) {
            this.historyClustersViewStartTime_ = new Date();
        }
    }
    updateScrollTarget_() {
        const topLevelIronPages = this.$['content'];
        const lowerLevelIronPages = this.$['tabs-content'];
        const topLevelHistoryPage = this.$['tabs-container'];
        if (topLevelIronPages.selectedItem &&
            topLevelIronPages.selectedItem === topLevelHistoryPage) {
            // The top-level History page has another inner IronPages element that
            // can toggle between different pages. If this is the case, set the
            // scroll target to the currently selected inner tab.
            this.scrollTarget = lowerLevelIronPages.selectedItem;
        }
        else if (topLevelIronPages.selectedItem) {
            this.scrollTarget = topLevelIronPages.selectedItem;
        }
        else {
            this.scrollTarget = null;
        }
    }
    selectedTabChanged_() {
        // Change in the currently selected tab requires change in the currently
        // selected page.
        this.selectedPage_ = TABBED_PAGES[this.selectedTab_];
    }
    maybeUpdateSelectedHistoryTab_() {
        // Change in the currently selected page may require change in the currently
        // selected tab.
        if (TABBED_PAGES.includes(this.selectedPage_)) {
            this.selectedTab_ = TABBED_PAGES.indexOf(this.selectedPage_);
        }
    }
    historyViewChanged_() {
        // This allows the synced-device-manager to render so that it can be set
        // as the scroll target.
        requestAnimationFrame(() => {
            this._scrollHandler();
        });
        this.recordHistoryPageView_();
    }
    // Records the history clusters page duration.
    recordHistoryClustersDuration_() {
        assert(this.historyClustersViewStartTime_ !== null);
        const duration = new Date().getTime() - this.historyClustersViewStartTime_.getTime();
        this.browserService_.recordLongTime('History.Clusters.WebUISessionDuration', duration);
        this.historyClustersViewStartTime_ = null;
    }
    hasDrawerChanged_() {
        const drawer = this.$.drawer.getIfExists();
        if (!this.hasDrawer_ && drawer && drawer.open) {
            drawer.cancel();
        }
    }
    /**
     * This computed binding is needed to make the iron-pages selector update
     * when <synced-device-manager> or <history-clusters> is instantiated for the
     * first time. Otherwise the fallback selection will continue to be used after
     * the corresponding item is added as a child of iron-pages.
     */
    getSelectedPage_(selectedPage, _items) {
        return selectedPage;
    }
    closeDrawer_() {
        const drawer = this.$.drawer.get();
        if (drawer && drawer.open) {
            drawer.close();
        }
    }
    recordHistoryPageView_() {
        let histogramValue = HistoryPageViewHistogram.END;
        switch (this.selectedPage_) {
            case Page.HISTORY_CLUSTERS:
                histogramValue = HistoryPageViewHistogram.JOURNEYS;
                break;
            case Page.SYNCED_TABS:
                histogramValue = this.isUserSignedIn_ ?
                    HistoryPageViewHistogram.SYNCED_TABS :
                    HistoryPageViewHistogram.SIGNIN_PROMO;
                break;
            default:
                histogramValue = HistoryPageViewHistogram.HISTORY;
                break;
        }
        this.browserService_.recordHistogram('History.HistoryPageView', histogramValue, HistoryPageViewHistogram.END);
    }
    // Override FindShortcutMixin methods.
    handleFindShortcut(modalContextOpen) {
        if (modalContextOpen) {
            return false;
        }
        this.$.toolbar.searchField.showAndFocus();
        return true;
    }
    // Override FindShortcutMixin methods.
    searchInputHasFocus() {
        return this.$.toolbar.searchField.isSearchFocused();
    }
    setHasDrawerForTesting(enabled) {
        this.hasDrawer_ = enabled;
    }
}
customElements.define(HistoryAppElement.is, HistoryAppElement);
