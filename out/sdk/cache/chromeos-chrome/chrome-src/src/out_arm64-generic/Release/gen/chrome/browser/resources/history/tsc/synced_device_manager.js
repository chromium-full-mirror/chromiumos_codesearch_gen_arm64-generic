// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_lazy_render/cr_lazy_render.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './shared_style.css.js';
import './synced_device_card.js';
import './strings.m.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusGrid } from 'chrome://resources/js/focus_grid.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { Debouncer, microTask, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { BrowserServiceImpl } from './browser_service.js';
import { SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram } from './constants.js';
import { getTemplate } from './synced_device_manager.html.js';
export class HistorySyncedDeviceManagerElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.focusGrid_ = null;
        this.syncedDevices_ = [];
        this.fetchingSyncedTabs_ = false;
        this.actionMenuModel_ = null;
        this.guestSession_ = loadTimeData.getBoolean('isGuestSession');
        this.signInAllowed_ = loadTimeData.getBoolean('isSignInAllowed');
        this.debouncer_ = null;
    }
    static get is() {
        return 'history-synced-device-manager';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            sessionList: {
                type: Array,
                observer: 'updateSyncedDevices',
            },
            searchTerm: {
                type: String,
                observer: 'searchTermChanged',
            },
            /**
             * An array of synced devices with synced tab data.
             */
            syncedDevices_: Array,
            signInState: {
                type: Boolean,
                observer: 'signInStateChanged_',
            },
            guestSession_: Boolean,
            signInAllowed_: Boolean,
            fetchingSyncedTabs_: Boolean,
            hasSeenForeignData_: Boolean,
            /**
             * The session ID referring to the currently active action menu.
             */
            actionMenuModel_: String,
        };
    }
    ready() {
        super.ready();
        this.addEventListener('synced-device-card-open-menu', this.onOpenMenu_);
        this.addEventListener('update-focus-grid', this.updateFocusGrid_);
    }
    connectedCallback() {
        super.connectedCallback();
        this.focusGrid_ = new FocusGrid();
        // Update the sign in state.
        BrowserServiceImpl.getInstance().otherDevicesInitialized();
        BrowserServiceImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.INITIALIZED, SyncedTabsHistogram.LIMIT);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.focusGrid_.destroy();
    }
    configureSignInForTest(data) {
        this.signInState = data.signInState;
        this.signInAllowed_ = data.signInAllowed;
        this.guestSession_ = data.guestSession;
    }
    getContentScrollTarget() {
        return this;
    }
    createInternalDevice_(session) {
        let tabs = [];
        const separatorIndexes = [];
        for (let i = 0; i < session.windows.length; i++) {
            const windowId = session.windows[i].sessionId;
            const newTabs = session.windows[i].tabs;
            if (newTabs.length === 0) {
                continue;
            }
            newTabs.forEach(function (tab) {
                tab.windowId = windowId;
            });
            let windowAdded = false;
            if (!this.searchTerm) {
                // Add all the tabs if there is no search term.
                tabs = tabs.concat(newTabs);
                windowAdded = true;
            }
            else {
                const searchText = this.searchTerm.toLowerCase();
                for (let j = 0; j < newTabs.length; j++) {
                    const tab = newTabs[j];
                    if (tab.title.toLowerCase().indexOf(searchText) !== -1) {
                        tabs.push(tab);
                        windowAdded = true;
                    }
                }
            }
            if (windowAdded && i !== session.windows.length - 1) {
                separatorIndexes.push(tabs.length - 1);
            }
        }
        return {
            device: session.name,
            lastUpdateTime: '– ' + session.modifiedTime,
            opened: true,
            separatorIndexes: separatorIndexes,
            timestamp: session.timestamp,
            tabs: tabs,
            tag: session.tag,
        };
    }
    onTurnOnSyncClick_() {
        BrowserServiceImpl.getInstance().startTurnOnSyncFlow();
    }
    onOpenMenu_(e) {
        this.actionMenuModel_ = e.detail.tag;
        this.$.menu.get().showAt(e.detail.target);
        BrowserServiceImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.SHOW_SESSION_MENU, SyncedTabsHistogram.LIMIT);
    }
    onOpenAllClick_() {
        const menu = this.$.menu.getIfExists();
        assert(menu);
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.OPEN_ALL, SyncedTabsHistogram.LIMIT);
        assert(this.actionMenuModel_);
        browserService.openForeignSessionAllTabs(this.actionMenuModel_);
        this.actionMenuModel_ = null;
        menu.close();
    }
    updateFocusGrid_() {
        if (!this.focusGrid_) {
            return;
        }
        this.focusGrid_.destroy();
        this.debouncer_ = Debouncer.debounce(this.debouncer_, microTask, () => {
            const cards = this.shadowRoot.querySelectorAll('history-synced-device-card');
            Array.from(cards)
                .reduce((prev, cur) => prev.concat(cur.createFocusRows()), [])
                .forEach((row) => {
                this.focusGrid_.addRow(row);
            });
            this.focusGrid_.ensureRowActive(1);
        });
    }
    onDeleteSessionClick_() {
        const menu = this.$.menu.getIfExists();
        assert(menu);
        const browserService = BrowserServiceImpl.getInstance();
        browserService.recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.HIDE_FOR_NOW, SyncedTabsHistogram.LIMIT);
        assert(this.actionMenuModel_);
        browserService.deleteForeignSession(this.actionMenuModel_);
        this.actionMenuModel_ = null;
        menu.close();
    }
    clearSyncedDevicesForTest() {
        this.clearDisplayedSyncedDevices_();
    }
    clearDisplayedSyncedDevices_() {
        this.syncedDevices_ = [];
    }
    /**
     * Decide whether or not should display no synced tabs message.
     */
    showNoSyncedMessage(signInState, syncedDevicesLength, guestSession) {
        if (guestSession) {
            return true;
        }
        return signInState && syncedDevicesLength === 0;
    }
    /**
     * Shows the signin guide when the user is not signed in, signin is allowed
     * and not in a guest session.
     */
    showSignInGuide(signInState, guestSession, signInAllowed) {
        const show = !signInState && !guestSession && signInAllowed;
        if (show) {
            BrowserServiceImpl.getInstance().recordAction('Signin_Impression_FromRecentTabs');
        }
        return show;
    }
    /**
     * Decide what message should be displayed when user is logged in and there
     * are no synced tabs.
     */
    noSyncedTabsMessage() {
        let stringName = this.fetchingSyncedTabs_ ? 'loading' : 'noSyncedResults';
        if (this.searchTerm !== '') {
            stringName = 'noSearchResults';
        }
        return loadTimeData.getString(stringName);
    }
    /**
     * Replaces the currently displayed synced tabs with |sessionList|. It is
     * common for only a single session within the list to have changed, We try to
     * avoid doing extra work in this case. The logic could be more intelligent
     * about updating individual tabs rather than replacing whole sessions, but
     * this approach seems to have acceptable performance.
     */
    updateSyncedDevices(sessionList) {
        this.fetchingSyncedTabs_ = false;
        if (!sessionList) {
            return;
        }
        if (sessionList.length > 0 && !this.hasSeenForeignData_) {
            this.hasSeenForeignData_ = true;
            BrowserServiceImpl.getInstance().recordHistogram(SYNCED_TABS_HISTOGRAM_NAME, SyncedTabsHistogram.HAS_FOREIGN_DATA, SyncedTabsHistogram.LIMIT);
        }
        const devices = [];
        sessionList.forEach((session) => {
            const device = this.createInternalDevice_(session);
            if (device.tabs.length !== 0) {
                devices.push(device);
            }
        });
        this.syncedDevices_ = devices;
    }
    /**
     * Get called when user's sign in state changes, this will affect UI of synced
     * tabs page. Sign in promo gets displayed when user is signed out, and
     * different messages are shown when there are no synced tabs.
     */
    signInStateChanged_(_current, previous) {
        if (previous === undefined) {
            return;
        }
        this.dispatchEvent(new CustomEvent('history-view-changed', { bubbles: true, composed: true }));
        // User signed out, clear synced device list and show the sign in promo.
        if (!this.signInState) {
            this.clearDisplayedSyncedDevices_();
            return;
        }
        // User signed in, show the loading message when querying for synced
        // devices.
        this.fetchingSyncedTabs_ = true;
    }
    searchTermChanged() {
        this.clearDisplayedSyncedDevices_();
        this.updateSyncedDevices(this.sessionList);
    }
}
customElements.define(HistorySyncedDeviceManagerElement.is, HistorySyncedDeviceManagerElement);
