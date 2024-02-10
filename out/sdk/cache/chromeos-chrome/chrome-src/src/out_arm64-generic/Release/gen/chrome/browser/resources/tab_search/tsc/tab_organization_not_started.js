// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import './strings.m.js';
import './tab_organization_not_started_image.js';
import './tab_organization_shared_style.css.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './tab_organization_not_started.html.js';
import { TabSearchSyncBrowserProxyImpl } from './tab_search_sync_browser_proxy.js';
var SyncState;
(function (SyncState) {
    SyncState[SyncState["SIGNED_OUT"] = 0] = "SIGNED_OUT";
    SyncState[SyncState["UNSYNCED"] = 1] = "UNSYNCED";
    SyncState[SyncState["UNSYNCED_HISTORY"] = 2] = "UNSYNCED_HISTORY";
    SyncState[SyncState["SYNC_PAUSED"] = 3] = "SYNC_PAUSED";
    SyncState[SyncState["SYNCED"] = 4] = "SYNCED";
})(SyncState || (SyncState = {}));
const TabOrganizationNotStartedElementBase = WebUiListenerMixin(PolymerElement);
// Not started state for the tab organization UI.
export class TabOrganizationNotStartedElement extends TabOrganizationNotStartedElementBase {
    constructor() {
        super(...arguments);
        this.syncBrowserProxy_ = TabSearchSyncBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'tab-organization-not-started';
    }
    static get properties() {
        return {
            showFre: Boolean,
            account_: Object,
            sync_: Object,
        };
    }
    static get template() {
        return getTemplate();
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncBrowserProxy_.getAccountInfo().then(this.setAccount_.bind(this));
        this.addWebUiListener('account-info-changed', this.setAccount_.bind(this));
        this.syncBrowserProxy_.getSyncInfo().then(this.setSync_.bind(this));
        this.addWebUiListener('sync-info-changed', this.setSync_.bind(this));
    }
    announceHeader() {
        this.$.header.textContent = '';
        this.$.header.textContent = this.getTitle_();
    }
    setAccount_(account) {
        this.account_ = account;
    }
    setSync_(sync) {
        this.sync_ = sync;
    }
    getSyncState_() {
        if (!this.account_) {
            return SyncState.SIGNED_OUT;
        }
        else if (!this.sync_?.syncing) {
            return SyncState.UNSYNCED;
        }
        else if (this.sync_.paused) {
            return SyncState.SYNC_PAUSED;
        }
        else if (!this.sync_.syncingHistory) {
            return SyncState.UNSYNCED_HISTORY;
        }
        else {
            return SyncState.SYNCED;
        }
    }
    getTitle_() {
        if (this.showFre) {
            return loadTimeData.getString('notStartedTitleFRE');
        }
        else {
            return loadTimeData.getString('notStartedTitle');
        }
    }
    getBody_() {
        switch (this.getSyncState_()) {
            case SyncState.SIGNED_OUT:
                return loadTimeData.getString('notStartedBodySignedOut');
            case SyncState.UNSYNCED:
                return loadTimeData.getString('notStartedBodyUnsynced');
            case SyncState.SYNC_PAUSED:
                return loadTimeData.getString('notStartedBodySyncPaused');
            case SyncState.UNSYNCED_HISTORY:
                return loadTimeData.getString('notStartedBodyUnsyncedHistory');
            case SyncState.SYNCED: {
                if (this.showFre) {
                    return loadTimeData.getString('notStartedBodyFRE');
                }
                else {
                    return loadTimeData.getString('notStartedBody');
                }
            }
        }
    }
    shouldShowBodyLink_() {
        return this.getSyncState_() === SyncState.SYNCED && this.showFre;
    }
    shouldShowAccountInfo_() {
        return !!this.account_ &&
            (!this.sync_ || !this.sync_.syncing || this.sync_.paused ||
                !this.sync_.syncingHistory);
    }
    getAccountImageSrc_(image) {
        // image can be undefined if the account has not set an avatar photo.
        return image || 'chrome://theme/IDR_PROFILE_AVATAR_PLACEHOLDER_LARGE';
    }
    getButtonAriaLabel_() {
        switch (this.getSyncState_()) {
            case SyncState.SIGNED_OUT:
            case SyncState.UNSYNCED:
                return loadTimeData.getString('notStartedButtonUnsyncedAriaLabel');
            case SyncState.SYNC_PAUSED:
                return loadTimeData.getString('notStartedButtonSyncPausedAriaLabel');
            case SyncState.UNSYNCED_HISTORY:
                return loadTimeData.getString('notStartedButtonUnsyncedHistoryAriaLabel');
            case SyncState.SYNCED:
                if (this.showFre) {
                    return loadTimeData.getString('notStartedButtonFREAriaLabel');
                }
                else {
                    return loadTimeData.getString('notStartedButtonAriaLabel');
                }
        }
    }
    getButtonText_() {
        switch (this.getSyncState_()) {
            case SyncState.SIGNED_OUT:
            case SyncState.UNSYNCED:
                return loadTimeData.getString('notStartedButtonUnsynced');
            case SyncState.SYNC_PAUSED:
                return loadTimeData.getString('notStartedButtonSyncPaused');
            case SyncState.UNSYNCED_HISTORY:
                return loadTimeData.getString('notStartedButtonUnsyncedHistory');
            case SyncState.SYNCED:
                if (this.showFre) {
                    return loadTimeData.getString('notStartedButtonFRE');
                }
                else {
                    return loadTimeData.getString('notStartedButton');
                }
        }
    }
    onButtonClick_() {
        switch (this.getSyncState_()) {
            case SyncState.SIGNED_OUT:
            case SyncState.UNSYNCED:
                this.dispatchEvent(new CustomEvent('sync-click', { bubbles: true, composed: true }));
                break;
            case SyncState.SYNC_PAUSED:
                this.dispatchEvent(new CustomEvent('sign-in-click', { bubbles: true, composed: true }));
                break;
            case SyncState.UNSYNCED_HISTORY:
                this.dispatchEvent(new CustomEvent('settings-click', { bubbles: true, composed: true }));
                break;
            case SyncState.SYNCED:
                // Start a tab organization
                this.dispatchEvent(new CustomEvent('organize-tabs-click', { bubbles: true, composed: true }));
                break;
        }
    }
    onLinkClick_() {
        this.dispatchEvent(new CustomEvent('learn-more-click', {
            bubbles: true,
            composed: true,
        }));
    }
    onLinkKeyDown_(event) {
        if (event.key === 'Enter') {
            this.onLinkClick_();
        }
    }
}
customElements.define(TabOrganizationNotStartedElement.is, TabOrganizationNotStartedElement);
