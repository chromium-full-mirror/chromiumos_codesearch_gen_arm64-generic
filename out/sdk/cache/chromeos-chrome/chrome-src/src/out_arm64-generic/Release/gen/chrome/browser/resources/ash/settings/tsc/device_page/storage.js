// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../settings_shared.css.js';
import './storage_external.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { isCrostiniSupported, isExternalStorageEnabled } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Router, routes } from '../router.js';
import { DevicePageBrowserProxyImpl, StorageSpaceState } from './device_page_browser_proxy.js';
import { getTemplate } from './storage.html.js';
const SettingsStorageElementBase = RouteOriginMixin(WebUiListenerMixin(PolymerElement));
export class SettingsStorageElement extends SettingsStorageElementBase {
    static get is() {
        return 'settings-storage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            showCrostiniStorage_: {
                type: Boolean,
                value: false,
            },
            isDriveEnabled_: {
                type: Boolean,
                value: true,
            },
            isEphemeralUser_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isCryptohomeDataEphemeral');
                },
            },
            isExternalStorageEnabled_: {
                type: Boolean,
                value: () => {
                    return isExternalStorageEnabled();
                },
            },
            showOtherUsers_: {
                type: Boolean,
                // Initialize showOtherUsers_ to false if the user is ephemeral.
                value() {
                    return !loadTimeData.getBoolean('isCryptohomeDataEphemeral');
                },
            },
            sizeStat_: Object,
        };
    }
    static get observers() {
        return [
            'handleCrostiniEnabledChanged_(prefs.crostini.enabled.value)',
            'handleDriveDisabledChanged_(prefs.gdata.disabled.value)',
        ];
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.STORAGE;
        /**
         * Timer ID for periodic update.
         */
        this.updateTimerId_ = -1;
        this.browserProxy_ = DevicePageBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('storage-size-stat-changed', (sizeStat) => this.handleSizeStatChanged_(sizeStat));
        this.addWebUiListener('storage-my-files-size-changed', (size) => this.handleMyFilesSizeChanged_(size));
        this.addWebUiListener('storage-browsing-data-size-changed', (size) => this.handleBrowsingDataSizeChanged_(size));
        this.addWebUiListener('storage-apps-size-changed', (size) => this.handleAppsSizeChanged_(size));
        this.addWebUiListener('storage-drive-offline-size-changed', (size) => this.handleDriveOfflineSizeChanged_(size));
        this.addWebUiListener('storage-crostini-size-changed', (size) => this.handleCrostiniSizeChanged_(size));
        if (this.showOtherUsers_) {
            this.addWebUiListener('storage-other-users-size-changed', (size, noOtherUsers) => this.handleOtherUsersSizeChanged_(size, noOtherUsers));
            this.addWebUiListener('storage-system-size-changed', (size) => this.handleSystemSizeChanged_(size));
        }
    }
    ready() {
        super.ready();
        const r = routes;
        this.addFocusConfig(r.CROSTINI_DETAILS, '#crostiniSize');
        this.addFocusConfig(r.ACCOUNTS, '#otherUsersSize');
        this.addFocusConfig(r.EXTERNAL_STORAGE_PREFERENCES, '#externalStoragePreferences');
        this.addFocusConfig(r.APP_MANAGEMENT, '#appsSize');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute !== this.route) {
            return;
        }
        this.onPageShown_();
    }
    onPageShown_() {
        // Updating storage information can be expensive (e.g. computing directory
        // sizes recursively), so we delay this operation until the page is shown.
        this.browserProxy_.updateStorageInfo();
        // We update the storage usage periodically when the overlay is visible.
        this.startPeriodicUpdate_();
    }
    /**
     * Handler for tapping the "My files" item.
     */
    onMyFilesClick_() {
        this.browserProxy_.openMyFiles();
    }
    /**
     * Handler for tapping the "Browsing data" item.
     */
    onBrowsingDataClick_() {
        this.browserProxy_.openBrowsingDataSettings();
    }
    /**
     * Handler for tapping the "Apps and Extensions" item.
     */
    onAppsClick_() {
        Router.getInstance().navigateTo(routes.APP_MANAGEMENT, 
        /* dynamicParams= */ undefined, /* removeSearch= */ true);
    }
    /**
     * Handler for tapping the "Offline files" item.
     */
    onDriveOfflineClick_() {
        Router.getInstance().navigateTo(routes.GOOGLE_DRIVE, 
        /* dynamicParams= */ undefined, /* removeSearch= */ true);
    }
    /**
     * Handler for tapping the "Linux storage" item.
     */
    onCrostiniClick_() {
        Router.getInstance().navigateTo(routes.CROSTINI_DETAILS, /* dynamicParams= */ undefined, 
        /* removeSearch= */ true);
    }
    /**
     * Handler for tapping the "Other users" item.
     */
    onOtherUsersClick_() {
        Router.getInstance().navigateTo(routes.ACCOUNTS, 
        /* dynamicParams= */ undefined, /* removeSearch= */ true);
    }
    /**
     * Handler for tapping the "External storage preferences" item.
     */
    onExternalStoragePreferencesClick_() {
        Router.getInstance().navigateTo(routes.EXTERNAL_STORAGE_PREFERENCES);
    }
    handleSizeStatChanged_(sizeStat) {
        this.sizeStat_ = sizeStat;
        this.$.inUseLabelArea.style.width = (sizeStat.usedRatio * 100) + '%';
        this.$.availableLabelArea.style.width =
            ((1 - sizeStat.usedRatio) * 100) + '%';
    }
    /**
     * @param size Formatted string representing the size of My files.
     */
    handleMyFilesSizeChanged_(size) {
        this.$.myFilesSize.subLabel = size;
    }
    /**
     * @param size Formatted string representing the size of Browsing data.
     */
    handleBrowsingDataSizeChanged_(size) {
        this.$.browsingDataSize.subLabel = size;
    }
    /**
     * @param size Formatted string representing the size of Apps and
     *     extensions storage.
     */
    handleAppsSizeChanged_(size) {
        this.shadowRoot.querySelector('#appsSize').subLabel =
            size;
    }
    /**
     * @param size Formatted string representing the size of pinned files in
     *     Google Drive.
     */
    handleDriveOfflineSizeChanged_(size) {
        if (!this.shouldShowOfflineFilesRow_()) {
            return;
        }
        this.shadowRoot.querySelector('#driveOfflineSize').subLabel = size;
    }
    /**
     * @param size Formatted string representing the size of Crostini storage.
     */
    handleCrostiniSizeChanged_(size) {
        if (this.showCrostiniStorage_) {
            this.shadowRoot.querySelector('#crostiniSize').subLabel = size;
        }
    }
    /**
     * @param size Formatted string representing the size of Other users.
     * @param noOtherUsers True if there is no other registered users
     *     on the device.
     */
    handleOtherUsersSizeChanged_(size, noOtherUsers) {
        if (this.isEphemeralUser_ || noOtherUsers) {
            this.showOtherUsers_ = false;
            return;
        }
        this.showOtherUsers_ = true;
        this.shadowRoot.querySelector('#otherUsersSize').subLabel = size;
    }
    /**
     * @param size Formatted string representing the System size.
     */
    handleSystemSizeChanged_(size) {
        this.shadowRoot.getElementById('systemSizeSubLabel').innerText = size;
    }
    /**
     * @param enabled True if Crostini is enabled.
     */
    handleCrostiniEnabledChanged_(enabled) {
        this.showCrostiniStorage_ = enabled && isCrostiniSupported();
    }
    /**
     * Handles showing or hiding the Offline files row if Drive is disabled.
     */
    handleDriveDisabledChanged_(disabled) {
        this.isDriveEnabled_ = !disabled;
    }
    /**
     * Whether to show the Offline files row or not.
     */
    shouldShowOfflineFilesRow_() {
        return this.isDriveEnabled_;
    }
    /**
     * Starts periodic update for storage usage.
     */
    startPeriodicUpdate_() {
        // We update the storage usage every 5 seconds.
        if (this.updateTimerId_ === -1) {
            this.updateTimerId_ = window.setInterval(() => {
                if (Router.getInstance().currentRoute !== routes.STORAGE) {
                    this.stopPeriodicUpdate_();
                    return;
                }
                this.browserProxy_.updateStorageInfo();
            }, 5000);
        }
    }
    /**
     * Stops periodic update for storage usage.
     */
    stopPeriodicUpdate_() {
        if (this.updateTimerId_ !== -1) {
            window.clearInterval(this.updateTimerId_);
            this.updateTimerId_ = -1;
        }
    }
    /**
     * Returns true if the remaining space is low, but not critically low.
     * @param spaceState Status about the remaining space.
     */
    isSpaceLow_(spaceState) {
        return spaceState === StorageSpaceState.LOW;
    }
    /**
     * Returns true if the remaining space is critically low.
     * @param spaceState Status about the remaining space.
     */
    isSpaceCriticallyLow_(spaceState) {
        return spaceState === StorageSpaceState.CRITICALLY_LOW;
    }
    /**
     * Computes class name of the bar based on the remaining space size.
     * @param spaceState Status about the remaining space.
     */
    getBarClass_(spaceState) {
        switch (spaceState) {
            case StorageSpaceState.LOW:
                return 'space-low';
            case StorageSpaceState.CRITICALLY_LOW:
                return 'space-critically-low';
            default:
                return '';
        }
    }
}
customElements.define(SettingsStorageElement.is, SettingsStorageElement);
