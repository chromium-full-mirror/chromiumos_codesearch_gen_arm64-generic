// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'files-settings-card' is the card element containing files settings.
 */
import 'chrome://resources/ash/common/smb_shares/add_smb_share_dialog.js';
import 'chrome://resources/cr_components/localized_link/localized_link.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_toggle_button.js';
import '../controls/controlled_button.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import { SmbBrowserProxyImpl } from 'chrome://resources/ash/common/smb_shares/smb_browser_proxy.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExhaustive } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './files_settings_card.html.js';
import { OneDriveBrowserProxy } from './one_drive_browser_proxy.js';
const FilesSettingsCardElementBase = RouteOriginMixin(I18nMixin(DeepLinkingMixin(PrefsMixin(PolymerElement))));
export class FilesSettingsCardElement extends FilesSettingsCardElementBase {
    static get is() {
        return 'files-settings-card';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([]),
            },
            bulkPinningPrefEnabled_: Boolean,
            driveDisabled_: Boolean,
            isBulkPinningEnabled_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('enableDriveFsBulkPinning');
                },
                readOnly: true,
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
            /**
             * Indicates whether the user is connected to OneDrive or not.
             */
            oneDriveConnectionState_: {
                type: String,
                value: () => {
                    return "loading" /* OneDriveConnectionState.LOADING */;
                },
            },
            rowIcons_: {
                type: Object,
                value() {
                    if (isRevampWayfindingEnabled()) {
                        return {
                            googleDrive: 'os-settings:google-drive-revamp',
                            ms365: 'os-settings:ms365',
                            oneDrive: 'settings20:onedrive',
                            smbShares: 'os-settings:folder-shared',
                        };
                    }
                    return {
                        googleDrive: 'os-settings:google-drive',
                        ms365: '',
                        oneDrive: 'settings20:onedrive',
                        smbShares: '',
                    };
                },
            },
            shouldShowOneDriveSettings_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('showOneDriveSettings');
                },
                readOnly: true,
            },
            shouldShowOfficeSettings_: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('showOfficeSettings');
                },
                readOnly: true,
            },
            shouldShowAddSmbButton_: {
                type: Boolean,
                value: false,
            },
            shouldShowAddSmbDialog_: {
                type: Boolean,
                value: false,
            },
        };
    }
    static get observers() {
        return [
            /**
             * Observe the state of `prefs.gdata.disabled` if it gets changed from
             * another location (e.g. enterprise policy).
             */
            'updateDriveDisabled_(prefs.gdata.disabled.*)',
            'updateBulkPinningPrefEnabled_(prefs.drivefs.bulk_pinning_enabled.*)',
        ];
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = this.isRevampWayfindingEnabled_ ? routes.SYSTEM_PREFERENCES :
            routes.FILES;
        this.smbBrowserProxy_ = SmbBrowserProxyImpl.getInstance();
        if (this.shouldShowOneDriveSettings_) {
            this.oneDriveBrowserProxy_ = OneDriveBrowserProxy.getInstance();
        }
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.shouldShowOneDriveSettings_) {
            this.updateOneDriveEmail_();
            this.oneDriveBrowserProxy_.observer.onODFSMountOrUnmount.addListener(this.updateOneDriveEmail_.bind(this));
        }
    }
    ready() {
        super.ready();
        this.addEventListener('smb-successfully-mounted-once', this.smbSuccessfullyMountedOnce_.bind(this));
        this.smbBrowserProxy_.hasAnySmbMountedBefore().then((hasMountedBefore) => {
            this.shouldShowAddSmbButton_ = !hasMountedBefore;
        });
        this.addFocusConfig(routes.GOOGLE_DRIVE, '#googleDriveRow');
        this.addFocusConfig(routes.ONE_DRIVE, '#oneDriveRow');
        this.addFocusConfig(routes.OFFICE, '#officeRow');
        this.addFocusConfig(routes.SMB_SHARES, '#smbSharesRow');
    }
    currentRouteChanged(route, oldRoute) {
        super.currentRouteChanged(route, oldRoute);
        // Does not apply to this page.
        if (route !== this.route) {
            return;
        }
        this.attemptDeepLink();
    }
    updateOneDriveConnectionStateForTesting(oneDriveConnectionState) {
        this.oneDriveConnectionState_ = oneDriveConnectionState;
    }
    updateDriveDisabled_() {
        const disabled = this.getPref('gdata.disabled').value;
        this.driveDisabled_ = disabled;
    }
    updateBulkPinningPrefEnabled_() {
        const enabled = this.getPref('drivefs.bulk_pinning_enabled').value;
        this.bulkPinningPrefEnabled_ = enabled;
    }
    getGoogleDriveSubLabelInnerHtml_() {
        if (this.driveDisabled_) {
            return this.i18nAdvanced('googleDriveNotSignedInSublabel');
        }
        if (this.isBulkPinningEnabled_ && this.bulkPinningPrefEnabled_) {
            return this.i18nAdvanced('googleDriveFileSyncOnSublabel');
        }
        return (this.isBulkPinningEnabled_ && this.bulkPinningPrefEnabled_) ?
            this.i18nAdvanced('googleDriveFileSyncOnSublabel') :
            this.i18nAdvanced('googleDriveSignedInAs', { attrs: ['id'] });
    }
    computeOneDriveSignedInLabel_() {
        switch (this.oneDriveConnectionState_) {
            case "connected" /* OneDriveConnectionState.CONNECTED */:
                assert(this.oneDriveEmailAddress_);
                return this.i18n('oneDriveSignedInAs', this.oneDriveEmailAddress_);
            case "disconnected" /* OneDriveConnectionState.DISCONNECTED */:
                return this.i18n('oneDriveDisconnected');
            case "loading" /* OneDriveConnectionState.LOADING */:
                return this.i18n('oneDriveLoading');
            default:
                assertExhaustive(this.oneDriveConnectionState_);
        }
    }
    computeShowSmbLinkRow_() {
        if (!this.isRevampWayfindingEnabled_) {
            return true;
        }
        return !this.shouldShowAddSmbButton_;
    }
    async updateOneDriveEmail_() {
        this.oneDriveConnectionState_ = "loading" /* OneDriveConnectionState.LOADING */;
        const { email } = await this.oneDriveBrowserProxy_.handler.getUserEmailAddress();
        this.oneDriveEmailAddress_ = email;
        this.oneDriveConnectionState_ = email === null ?
            "disconnected" /* OneDriveConnectionState.DISCONNECTED */ :
            "connected" /* OneDriveConnectionState.CONNECTED */;
    }
    onClickGoogleDrive_() {
        Router.getInstance().navigateTo(routes.GOOGLE_DRIVE);
    }
    onClickOneDrive_() {
        Router.getInstance().navigateTo(routes.ONE_DRIVE);
    }
    onClickOffice_() {
        Router.getInstance().navigateTo(routes.OFFICE);
    }
    onClickSmbShares_() {
        Router.getInstance().navigateTo(routes.SMB_SHARES);
    }
    openAddSmbDialog_() {
        this.shouldShowAddSmbDialog_ = true;
    }
    closeAddSmbDialog_() {
        this.shouldShowAddSmbDialog_ = false;
    }
    smbSuccessfullyMountedOnce_() {
        // Do not show SMB button on the Files page if an SMB mounts.
        this.shouldShowAddSmbButton_ = false;
    }
}
customElements.define(FilesSettingsCardElement.is, FilesSettingsCardElement);
