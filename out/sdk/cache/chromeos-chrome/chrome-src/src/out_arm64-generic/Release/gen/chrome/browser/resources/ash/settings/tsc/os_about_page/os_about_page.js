// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-about-page' contains version and OS related
 * information.
 */
import 'chrome://resources/ash/common/cr_elements/localized_link/localized_link.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../icons.html.js';
import '../os_settings_page/os_settings_animated_pages.js';
import '../os_settings_page/os_settings_subpage.js';
import '../os_settings_page/settings_card.js';
import '../settings_shared.css.js';
import '../os_settings_icons.html.js';
import '../os_reset_page/os_powerwash_dialog.js';
import './eol_offer_section.js';
import './update_warning_dialog.js';
import '../crostini_page/crostini_settings_card.js';
import { LifetimeBrowserProxyImpl } from '/shared/settings/lifetime_browser_proxy.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isCrostiniSupported, isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Section } from '../mojom-webui/routes.mojom-webui.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { AboutPageBrowserProxyImpl, browserChannelToI18nId, UpdateStatus } from './about_page_browser_proxy.js';
import { getTemplate } from './os_about_page.html.js';
const OsAboutPageBase = DeepLinkingMixin(RouteOriginMixin(I18nMixin(WebUiListenerMixin(PolymerElement))));
export class OsAboutPageElement extends OsAboutPageBase {
    static get is() {
        return 'os-about-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            section_: {
                type: Number,
                value: Section.kAboutChromeOs,
                readOnly: true,
            },
            /**
             * Whether the about page is being rendered in dark mode.
             */
            isDarkModeActive_: {
                type: Boolean,
                value: false,
            },
            currentUpdateStatusEvent_: {
                type: Object,
                value: {
                    message: '',
                    progress: 0,
                    rollback: false,
                    powerwash: false,
                    status: UpdateStatus.UPDATED,
                },
            },
            /**
             * Whether the browser/ChromeOS is managed by their organization
             * through enterprise policies.
             */
            isManaged_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isManaged');
                },
            },
            /**
             * The domain of the organization managing the device.
             */
            deviceManager_: {
                type: String,
                value() {
                    return loadTimeData.getString('deviceManager');
                },
            },
            hasCheckedForUpdates_: {
                type: Boolean,
                value: false,
            },
            currentChannel_: String,
            targetChannel_: String,
            isLts_: {
                type: Boolean,
                value: false,
            },
            regulatoryInfo_: Object,
            hasEndOfLife_: {
                type: Boolean,
                value: false,
            },
            showEolIncentive_: {
                type: Boolean,
                value: false,
            },
            shouldShowOfferText_: {
                type: Boolean,
                value: false,
            },
            hasDeferredUpdate_: {
                type: Boolean,
                value: false,
            },
            eolMessageWithMonthAndYear_: {
                type: String,
                value: '',
            },
            hasInternetConnection_: {
                type: Boolean,
                value: false,
            },
            firmwareUpdateCount_: {
                type: Number,
                value: 0,
            },
            showCrostiniLicense_: {
                type: Boolean,
                value: false,
            },
            showUpdateStatus_: {
                type: Boolean,
                value: false,
            },
            showButtonContainer_: Boolean,
            showRelaunch_: {
                type: Boolean,
                value: false,
                computed: 'computeShowRelaunch_(currentUpdateStatusEvent_)',
            },
            showCheckUpdates_: {
                type: Boolean,
                computed: 'computeShowCheckUpdates_(' +
                    'currentUpdateStatusEvent_, hasCheckedForUpdates_, hasEndOfLife_)',
            },
            showUpdateWarningDialog_: {
                type: Boolean,
                value: false,
            },
            showTPMFirmwareUpdateLineItem_: {
                type: Boolean,
                value: false,
            },
            showTPMFirmwareUpdateDialog_: Boolean,
            updateInfo_: Object,
            /**
             * Whether the deep link to the check for OS update setting was unable
             * to be shown.
             */
            isPendingOsUpdateDeepLink_: {
                type: Boolean,
                value: false,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kCheckForOsUpdate,
                    Setting.kSeeWhatsNew,
                    Setting.kGetHelpWithChromeOs,
                    Setting.kReportAnIssue,
                    Setting.kTermsOfService,
                    Setting.kDiagnostics,
                    Setting.kFirmwareUpdates,
                ]),
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value() {
                    return isRevampWayfindingEnabled();
                },
                readOnly: true,
            },
            rowIcons_: {
                type: Object,
                value() {
                    if (isRevampWayfindingEnabled()) {
                        return {
                            powerWash: 'os-settings:startup',
                            releaseNotes: 'os-settings:about-release-notes',
                            help: 'os-settings:about-help',
                            feedback: 'os-settings:about-feedback',
                            diagnostics: 'os-settings:about-diagnostics',
                            firmwareUpdates: 'os-settings:about-firmware-updates',
                            additionalDetails: 'os-settings:about-additional-details',
                        };
                    }
                    return {
                        powerWash: '',
                        releaseNotes: '',
                        help: '',
                        feedback: '',
                        diagnostics: '',
                        firmwareUpdates: '',
                        additionalDetails: '',
                    };
                },
            },
        };
    }
    static get observers() {
        return [
            'updateShowUpdateStatus_(hasEndOfLife_, currentUpdateStatusEvent_,' +
                'hasCheckedForUpdates_)',
            'updateShowButtonContainer_(showRelaunch_, showCheckUpdates_)',
            'handleCrostiniEnabledChanged_(prefs.crostini.enabled.value)',
        ];
    }
    constructor() {
        super();
        /** RouteOriginMixin override */
        this.route = routes.ABOUT;
        this.aboutBrowserProxy_ = AboutPageBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.aboutBrowserProxy_.pageReady();
        this.addEventListener('target-channel-changed', (e) => {
            this.targetChannel_ = e.detail;
        });
        this.aboutBrowserProxy_.getChannelInfo().then(info => {
            this.currentChannel_ = info.currentChannel;
            this.targetChannel_ = info.targetChannel;
            this.isLts_ = info.isLts;
            this.startListening_();
        });
        this.aboutBrowserProxy_.getRegulatoryInfo().then(info => {
            this.regulatoryInfo_ = info;
        });
        this.aboutBrowserProxy_.getEndOfLifeInfo().then(result => {
            this.hasEndOfLife_ = !!result.hasEndOfLife;
            this.eolMessageWithMonthAndYear_ = result.aboutPageEndOfLifeMessage || '';
            this.showEolIncentive_ = !!result.shouldShowEndOfLifeIncentive;
            this.shouldShowOfferText_ = !!result.shouldShowOfferText;
        });
        this.aboutBrowserProxy_.checkInternetConnection().then(result => {
            this.hasInternetConnection_ = result;
        });
        this.aboutBrowserProxy_.getFirmwareUpdateCount().then(result => {
            this.firmwareUpdateCount_ = result;
        });
        if (Router.getInstance().getQueryParameters().get('checkForUpdate') ===
            'true') {
            this.onCheckUpdatesClick_();
        }
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.ABOUT_DETAILED_BUILD_INFO, '#detailedBuildInfoTrigger');
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        // Does not apply to this page.
        if (newRoute !== this.route) {
            return;
        }
        this.attemptDeepLink().then(result => {
            if (!result.deepLinkShown && result.pendingSettingId) {
                // Only the check for OS update is expected to fail deep link when
                // awaiting the check for update.
                assert(result.pendingSettingId === Setting.kCheckForOsUpdate);
                this.isPendingOsUpdateDeepLink_ = true;
            }
        });
    }
    startListening_() {
        this.addWebUiListener('update-status-changed', this.onUpdateStatusChanged_.bind(this));
        this.aboutBrowserProxy_.refreshUpdateStatus();
        this.addWebUiListener('tpm-firmware-update-status-changed', this.onTpmFirmwareUpdateStatusChanged_.bind(this));
        this.aboutBrowserProxy_.refreshTpmFirmwareUpdateStatus();
    }
    onUpdateStatusChanged_(event) {
        if (event.status === UpdateStatus.CHECKING) {
            this.hasCheckedForUpdates_ = true;
        }
        else if (event.status === UpdateStatus.NEED_PERMISSION_TO_UPDATE) {
            this.showUpdateWarningDialog_ = true;
            this.updateInfo_ = { version: event.version, size: event.size };
        }
        this.hasDeferredUpdate_ = (event.status === UpdateStatus.DEFERRED);
        this.currentUpdateStatusEvent_ = event;
    }
    onLearnMoreClick_(event) {
        // Stop the propagation of events, so that clicking on links inside
        // actionable items won't trigger action.
        event.stopPropagation();
    }
    onProductLicenseOtherClicked_(event) {
        // Prevent the default link click behavior
        event.detail.event.preventDefault();
        // Programmatically open license.
        this.aboutBrowserProxy_.openProductLicenseOther();
    }
    onReleaseNotesClick_() {
        this.aboutBrowserProxy_.launchReleaseNotes();
    }
    onHelpClick_() {
        this.aboutBrowserProxy_.openOsHelpPage();
    }
    onDiagnosticsClick_() {
        this.aboutBrowserProxy_.openDiagnostics();
        recordSettingChange(Setting.kDiagnostics);
    }
    onFirmwareUpdatesClick_() {
        this.aboutBrowserProxy_.openFirmwareUpdatesPage();
        recordSettingChange(Setting.kFirmwareUpdates);
    }
    onRelaunchClick_() {
        recordSettingChange();
        LifetimeBrowserProxyImpl.getInstance().relaunch();
    }
    updateShowUpdateStatus_() {
        // Do not show the "updated" status or error states from a previous update
        // attempt if we haven't checked yet or the update warning dialog is shown
        // to user.
        if ((this.currentUpdateStatusEvent_.status === UpdateStatus.UPDATED ||
            this.currentUpdateStatusEvent_.status ===
                UpdateStatus.FAILED_DOWNLOAD ||
            this.currentUpdateStatusEvent_.status === UpdateStatus.FAILED_HTTP ||
            this.currentUpdateStatusEvent_.status ===
                UpdateStatus.DISABLED_BY_ADMIN) &&
            (!this.hasCheckedForUpdates_ || this.showUpdateWarningDialog_)) {
            this.showUpdateStatus_ = false;
            return;
        }
        // Do not show "updated" status if the device is end of life.
        if (this.hasEndOfLife_) {
            this.showUpdateStatus_ = false;
            return;
        }
        this.showUpdateStatus_ =
            this.currentUpdateStatusEvent_.status !== UpdateStatus.DISABLED;
    }
    /**
     * Hide the button container if all buttons are hidden, otherwise the
     * container displays an unwanted border (see separator class).
     */
    updateShowButtonContainer_() {
        this.showButtonContainer_ = this.showRelaunch_ || this.showCheckUpdates_;
        // Check if we have yet to focus the check for update button.
        if (!this.isPendingOsUpdateDeepLink_) {
            return;
        }
        this.showDeepLink(Setting.kCheckForOsUpdate).then(result => {
            if (result.deepLinkShown) {
                this.isPendingOsUpdateDeepLink_ = false;
            }
        });
    }
    computeShowRelaunch_() {
        return this.checkStatus_(UpdateStatus.NEARLY_UPDATED);
    }
    shouldShowLearnMoreLink_() {
        return this.currentUpdateStatusEvent_.status === UpdateStatus.FAILED;
    }
    shouldShowFirmwareUpdatesBadge_() {
        return this.firmwareUpdateCount_ > 0;
    }
    getUpdateStatusMessage_() {
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.CHECKING:
            case UpdateStatus.NEED_PERMISSION_TO_UPDATE:
                return this.i18nAdvanced('aboutUpgradeCheckStarted');
            case UpdateStatus.NEARLY_UPDATED:
                if (this.currentChannel_ !== this.targetChannel_) {
                    return this.i18nAdvanced('aboutUpgradeSuccessChannelSwitch');
                }
                if (this.currentUpdateStatusEvent_.rollback) {
                    return this.i18nAdvanced('aboutRollbackSuccess', {
                        substitutions: [this.deviceManager_],
                    });
                }
                return this.i18nAdvanced('aboutUpgradeRelaunch');
            case UpdateStatus.UPDATED:
                return this.i18nAdvanced('aboutUpgradeUpToDate');
            case UpdateStatus.UPDATING:
                assert(typeof this.currentUpdateStatusEvent_.progress === 'number');
                const progressPercent = this.currentUpdateStatusEvent_.progress + '%';
                if (this.currentChannel_ !== this.targetChannel_) {
                    return this.i18nAdvanced('aboutUpgradeUpdatingChannelSwitch', {
                        substitutions: [
                            this.i18nAdvanced(browserChannelToI18nId(this.targetChannel_, this.isLts_))
                                .toString(),
                            progressPercent,
                        ],
                    });
                }
                if (this.currentUpdateStatusEvent_.rollback) {
                    return this.i18nAdvanced('aboutRollbackInProgress', {
                        substitutions: [this.deviceManager_, progressPercent],
                    });
                }
                if (this.currentUpdateStatusEvent_.progress > 0) {
                    // NOTE(dbeam): some platforms (i.e. Mac) always send 0% while
                    // updating (they don't support incremental upgrade progress). Though
                    // it's certainly quite possible to validly end up here with 0% on
                    // platforms that support incremental progress, nobody really likes
                    // seeing that they're 0% done with something.
                    return this.i18nAdvanced('aboutUpgradeUpdatingPercent', {
                        substitutions: [progressPercent],
                    });
                }
                return this.i18nAdvanced('aboutUpgradeUpdating');
            case UpdateStatus.FAILED_HTTP:
                return this.i18nAdvanced('aboutUpgradeTryAgain');
            case UpdateStatus.FAILED_DOWNLOAD:
                return this.i18nAdvanced('aboutUpgradeDownloadError');
            case UpdateStatus.DISABLED_BY_ADMIN:
                return this.i18nAdvanced('aboutUpgradeAdministrator');
            case UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED:
                return this.i18nAdvanced('aboutUpdateToRollbackVersionDisallowed');
            case UpdateStatus.DEFERRED:
                return this.i18nAdvanced('aboutUpgradeNotUpToDate');
            default:
                let result = '';
                const message = this.currentUpdateStatusEvent_.message;
                if (message) {
                    result += message;
                }
                const connectMessage = this.currentUpdateStatusEvent_.connectionTypes;
                if (connectMessage) {
                    result += `<div>${connectMessage}</div>`;
                }
                return sanitizeInnerHtml(result, { tags: ['br', 'pre'] });
        }
    }
    getUpdateStatusIcon_() {
        // If Chrome OS has reached end of life, display a special icon and
        // ignore UpdateStatus.
        if (this.hasEndOfLife_) {
            return 'os-settings:end-of-life';
        }
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.DISABLED_BY_ADMIN:
                return 'cr20:domain';
            case UpdateStatus.FAILED_DOWNLOAD:
            case UpdateStatus.FAILED_HTTP:
            case UpdateStatus.FAILED:
                return this.isRevampWayfindingEnabled_ ?
                    'os-settings:about-update-error' :
                    'cr:error-outline';
            case UpdateStatus.UPDATED:
            case UpdateStatus.NEARLY_UPDATED:
                // TODO(crbug.com/986596): Don't use browser icons here. Fork them.
                return this.isRevampWayfindingEnabled_ ?
                    'os-settings:about-update-complete' :
                    'settings:check-circle';
            case UpdateStatus.DEFERRED:
            case UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED:
                return this.isRevampWayfindingEnabled_ ?
                    'os-settings:about-update-warning' :
                    'cr:warning';
            default:
                return null;
        }
    }
    getFirmwareUpdatesIcon_() {
        if (this.firmwareUpdateCount_ === 0) {
            return '';
        }
        const maxBadgeId = 9;
        // If the number of firmware updates is > 9, then we want to show
        // the 9 badge.
        const updateBadgeId = Math.min(this.firmwareUpdateCount_, maxBadgeId);
        return `os-settings:counter-${updateBadgeId}`;
    }
    getThrobberSrcIfUpdating_() {
        if (this.hasEndOfLife_) {
            return null;
        }
        switch (this.currentUpdateStatusEvent_.status) {
            case UpdateStatus.CHECKING:
            case UpdateStatus.UPDATING:
                return this.isDarkModeActive_ ?
                    'chrome://resources/images/throbber_small_dark.svg' :
                    'chrome://resources/images/throbber_small.svg';
            default:
                return null;
        }
    }
    checkStatus_(status) {
        return this.currentUpdateStatusEvent_.status === status;
    }
    onManagementPageClick_() {
        window.open('chrome://management');
    }
    isPowerwash_() {
        return !!this.currentUpdateStatusEvent_.powerwash;
    }
    onDetailedBuildInfoClick_() {
        Router.getInstance().navigateTo(routes.ABOUT_DETAILED_BUILD_INFO);
    }
    getRelaunchButtonText_() {
        if (this.checkStatus_(UpdateStatus.NEARLY_UPDATED)) {
            return this.i18n(this.isPowerwash_() ? 'aboutRelaunchAndPowerwash' : 'aboutRelaunch');
        }
        return '';
    }
    onCheckUpdatesClick_() {
        this.onUpdateStatusChanged_({ status: UpdateStatus.CHECKING });
        this.aboutBrowserProxy_.requestUpdate();
        this.$.updateStatusMessageInner.focus();
    }
    onApplyDeferredUpdateClick_() {
        this.aboutBrowserProxy_.applyDeferredUpdate();
        this.$.updateStatusMessageInner.focus();
    }
    onApplyAndSetAutoUpdateClick_() {
        this.aboutBrowserProxy_.setConsumerAutoUpdate(true);
        this.onApplyDeferredUpdateClick_();
    }
    computeShowCheckUpdates_() {
        // Disable update button if the device is end of life.
        if (this.hasEndOfLife_) {
            return false;
        }
        // Enable the update button if we are in a stale 'updated' status or
        // update has failed. Disable it otherwise.
        const staleUpdatedStatus = !this.hasCheckedForUpdates_ && this.checkStatus_(UpdateStatus.UPDATED);
        return staleUpdatedStatus || this.checkStatus_(UpdateStatus.FAILED) ||
            this.checkStatus_(UpdateStatus.FAILED_HTTP) ||
            this.checkStatus_(UpdateStatus.FAILED_DOWNLOAD) ||
            this.checkStatus_(UpdateStatus.DISABLED_BY_ADMIN) ||
            this.checkStatus_(UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED);
    }
    /**
     * @param showCrostiniLicense True if Crostini is enabled and
     * Crostini UI is allowed.
     */
    getAboutProductOsLicense_(showCrostiniLicense) {
        return showCrostiniLicense ?
            this.i18nAdvanced('aboutProductOsWithLinuxLicense') :
            this.i18nAdvanced('aboutProductOsLicense');
    }
    /**
     * @param enabled True if Crostini is enabled.
     */
    handleCrostiniEnabledChanged_(enabled) {
        this.showCrostiniLicense_ = enabled && isCrostiniSupported();
    }
    shouldShowSafetyInfo_() {
        return loadTimeData.getBoolean('shouldShowSafetyInfo');
    }
    shouldShowRegulatoryInfo_() {
        return this.regulatoryInfo_ !== null;
    }
    shouldShowRegulatoryOrSafetyInfo_() {
        return this.shouldShowSafetyInfo_() || this.shouldShowRegulatoryInfo_();
    }
    onUpdateWarningDialogClose_() {
        this.showUpdateWarningDialog_ = false;
        // Shows 'check for updates' button in case that the user cancels the
        // dialog and then intends to check for update again.
        this.hasCheckedForUpdates_ = false;
    }
    onTpmFirmwareUpdateStatusChanged_(event) {
        this.showTPMFirmwareUpdateLineItem_ = event.updateAvailable;
    }
    onTpmFirmwareUpdateClick_() {
        this.showTPMFirmwareUpdateDialog_ = true;
    }
    onPowerwashDialogClose_() {
        this.showTPMFirmwareUpdateDialog_ = false;
    }
    onProductLogoClick_() {
        this.$.productLogo.animate({
            transform: ['none', 'rotate(-10turn)'],
        }, {
            duration: 500,
            easing: 'cubic-bezier(1, 0, 0, 1)',
        });
    }
    // 
    shouldShowIcons_() {
        if (this.hasEndOfLife_) {
            return true;
        }
        return this.showUpdateStatus_;
    }
    getShowReleaseNotesSublabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('aboutShowReleaseNotesDescription') :
            null;
    }
    getHelpUsingChromeOsSublabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('aboutGetHelpDescription') :
            null;
    }
    getReportIssueSublabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('aboutSendFeedbackDescription') :
            null;
    }
    getDiagnosticsSublabel_() {
        return this.isRevampWayfindingEnabled_ ?
            this.i18n('aboutDiagnosticseDescription') :
            null;
    }
    getFirmwareSublabel_() {
        if (this.isRevampWayfindingEnabled_) {
            return this.firmwareUpdateCount_ > 0 ?
                this.i18n('aboutFirmwareUpdateAvailableDescription') :
                this.i18n('aboutFirmwareUpToDateDescription');
        }
        return null;
    }
}
customElements.define(OsAboutPageElement.is, OsAboutPageElement);
