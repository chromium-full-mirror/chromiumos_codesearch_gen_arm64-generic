// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'os-settings-sync-subpage' is the settings page containing sync settings.
 */
import '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import '//resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/ash/common/cr_elements/cr_input/cr_input.js';
import '//resources/ash/common/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/ash/common/cr_elements/icons.html.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '//resources/ash/common/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
// 
import './os_sync_encryption_options.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { WebUiListenerMixin } from '//resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PageStatus, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { RouteOriginMixin } from '../common/route_origin_mixin.js';
import { Router, routes } from '../router.js';
import { getTemplate } from './os_sync_subpage.html.js';
const OsSettingsSyncSubpageElementBase = RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
export class OsSettingsSyncSubpageElement extends OsSettingsSyncSubpageElementBase {
    static get is() {
        return 'os-settings-sync-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            pageStatusEnum_: {
                type: Object,
                value: PageStatus,
                readOnly: true,
            },
            /**
             * The current page status. Defaults to |CONFIGURE| such that the
             * searching algorithm can search useful content when the page is not
             * visible to the user.
             */
            pageStatus_: {
                type: String,
                value: PageStatus.CONFIGURE,
            },
            /**
             * The current sync preferences, supplied by SyncBrowserProxy.
             */
            syncPrefs: Object,
            syncStatus: Object,
            dataEncrypted_: {
                type: Boolean,
                computed: 'computeDataEncrypted_(syncPrefs.encryptAllData)',
            },
            encryptionExpanded_: {
                type: Boolean,
                value: false,
            },
            /** If true, override |encryptionExpanded_| to be true. */
            forceEncryptionExpanded: {
                type: Boolean,
                value: false,
            },
            /**
             * The existing passphrase input field value.
             */
            existingPassphrase_: {
                type: String,
                value: '',
            },
            /*
             * Whether enter existing passphrase UI should be shown.
             */
            showExistingPassphraseBelowAccount_: {
                type: Boolean,
                value: false,
                computed: 'computeShowExistingPassphraseBelowAccount_(' +
                    'syncStatus.signedIn, syncPrefs.passphraseRequired)',
            },
            signedIn_: {
                type: Boolean,
                value: true,
                computed: 'computeSignedIn_(syncStatus.signedIn)',
            },
            syncDisabledByAdmin_: {
                type: Boolean,
                value: false,
                computed: 'computeSyncDisabledByAdmin_(syncStatus.managed)',
            },
            syncSectionDisabled_: {
                type: Boolean,
                value: false,
                computed: 'computeSyncSectionDisabled_(' +
                    'syncStatus.signedIn, syncStatus.disabled, ' +
                    'syncStatus.hasError, syncStatus.statusAction, ' +
                    'syncPrefs.trustedVaultKeysRequired)',
            },
            enterPassphraseLabel_: {
                type: String,
                computed: 'computeEnterPassphraseLabel_(syncPrefs.encryptAllData,' +
                    'syncPrefs.explicitPassphraseTime)',
            },
            existingPassphraseLabel_: {
                type: String,
                computed: 'computeExistingPassphraseLabel_(syncPrefs.encryptAllData,' +
                    'syncPrefs.explicitPassphraseTime)',
            },
            /**
             * Whether to show the new UI for OS Sync Settings
             * which include sublabel and Apps toggle
             * shared between Ash and Lacros.
             */
            showSyncSettingsRevamp_: {
                type: Boolean,
                value: loadTimeData.getBoolean('showSyncSettingsRevamp'),
                readOnly: true,
            },
        };
    }
    static get observers() {
        return [
            'expandEncryptionIfNeeded_(dataEncrypted_, forceEncryptionExpanded)',
        ];
    }
    constructor() {
        super();
        this.browserProxy_ = SyncBrowserProxyImpl.getInstance();
        /** RouteOriginMixin override */
        this.route = routes.SYNC;
        /**
         * The beforeunload callback is used to show the 'Leave site' dialog. This
         * makes sure that the user has the chance to go back and confirm the sync
         * opt-in before leaving.
         *
         * This property is non-null if the user is currently navigated on the sync
         * settings route.
         */
        this.beforeunloadCallback_ = null;
        /**
         * The unload callback is used to cancel the sync setup when the user hits
         * the browser back button after arriving on the page.
         * Note = Cases like closing the tab or reloading don't need to be handled;
         * because they are already caught in |PeopleHandler::~PeopleHandler|
         * from the C++ code.
         */
        this.unloadCallback_ = null;
        /**
         * Whether the initial layout for collapsible sections has been computed. It
         * is computed only once; the first time the sync status is updated.
         */
        this.collapsibleSectionsInitialized_ = false;
        /**
         * Whether the user decided to abort sync.
         */
        this.didAbort_ = true;
        /**
         * Whether the user confirmed the cancellation of sync.
         */
        this.setupCancelConfirmed_ = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('page-status-changed', this.handlePageStatusChanged_.bind(this));
        this.addWebUiListener('sync-prefs-changed', this.handleSyncPrefsChanged_.bind(this));
        const router = Router.getInstance();
        if (router.currentRoute === this.route) {
            this.onNavigateToPage_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const router = Router.getInstance();
        if (routes.SYNC.contains(router.currentRoute)) {
            this.onNavigateAwayFromPage_();
        }
        if (this.beforeunloadCallback_) {
            window.removeEventListener('beforeunload', this.beforeunloadCallback_);
            this.beforeunloadCallback_ = null;
        }
        if (this.unloadCallback_) {
            window.removeEventListener('unload', this.unloadCallback_);
            this.unloadCallback_ = null;
        }
    }
    ready() {
        super.ready();
        this.addFocusConfig(routes.OS_SYNC, '#syncAdvancedRow');
    }
    getEncryptionOptions() {
        return this.shadowRoot.querySelector('os-settings-sync-encryption-options');
    }
    getPersonalizationOptions() {
        // 
        // 
        return this.shadowRoot.querySelector('os-settings-personalization-options');
        // 
    }
    showActivityControls_() {
        // Should be hidden in OS settings.
        return false;
    }
    computeSignedIn_() {
        return !!this.syncStatus.signedIn;
    }
    computeSyncSectionDisabled_() {
        return this.syncStatus !== undefined &&
            (!this.syncStatus.signedIn || !!this.syncStatus.disabled ||
                (!!this.syncStatus.hasError &&
                    this.syncStatus.statusAction !== StatusAction.ENTER_PASSPHRASE &&
                    this.syncStatus.statusAction !==
                        StatusAction.RETRIEVE_TRUSTED_VAULT_KEYS));
    }
    computeSyncDisabledByAdmin_() {
        return this.syncStatus !== undefined && !!this.syncStatus.managed;
    }
    currentRouteChanged(newRoute, oldRoute) {
        super.currentRouteChanged(newRoute, oldRoute);
        if (newRoute === this.route) {
            this.onNavigateToPage_();
            return;
        }
        if (routes.SYNC.contains(newRoute)) {
            return;
        }
        const searchParams = Router.getInstance().getQueryParameters().get('search');
        if (searchParams) {
            // User navigated away via searching. Cancel sync without showing
            // confirmation dialog.
            this.onNavigateAwayFromPage_();
            return;
        }
        this.onNavigateAwayFromPage_();
    }
    isStatus_(expectedPageStatus) {
        return expectedPageStatus === this.pageStatus_;
    }
    onNavigateToPage_() {
        assert(Router.getInstance().currentRoute === this.route);
        if (this.beforeunloadCallback_) {
            return;
        }
        this.collapsibleSectionsInitialized_ = false;
        // Display loading page until the settings have been retrieved.
        this.pageStatus_ = PageStatus.SPINNER;
        this.browserProxy_.didNavigateToSyncPage();
        this.beforeunloadCallback_ = event => {
            // When the user tries to leave the sync setup, show the 'Leave site'
            // dialog.
            if (this.syncStatus && this.syncStatus.firstSetupInProgress) {
                event.preventDefault();
                chrome.metricsPrivate.recordUserAction('Signin_Signin_AbortAdvancedSyncSettings');
            }
        };
        window.addEventListener('beforeunload', this.beforeunloadCallback_);
        this.unloadCallback_ = this.onNavigateAwayFromPage_.bind(this);
        window.addEventListener('unload', this.unloadCallback_);
    }
    onNavigateAwayFromPage_() {
        if (!this.beforeunloadCallback_) {
            return;
        }
        // Reset the status to CONFIGURE such that the searching algorithm can
        // search useful content when the page is not visible to the user.
        this.pageStatus_ = PageStatus.CONFIGURE;
        this.browserProxy_.didNavigateAwayFromSyncPage(this.didAbort_);
        window.removeEventListener('beforeunload', this.beforeunloadCallback_);
        this.beforeunloadCallback_ = null;
        if (this.unloadCallback_) {
            window.removeEventListener('unload', this.unloadCallback_);
            this.unloadCallback_ = null;
        }
    }
    /**
     * Handler for when the sync preferences are updated.
     */
    handleSyncPrefsChanged_(syncPrefs) {
        this.syncPrefs = syncPrefs;
        this.pageStatus_ = PageStatus.CONFIGURE;
    }
    onManageChromeBrowserSyncClick_() {
        chrome.send('OpenBrowserSyncSettings');
    }
    getManageSyncedDataSubtitle_() {
        if (this.showSyncSettingsRevamp_) {
            return this.i18n('manageSyncedDataSubtitle');
        }
        return '';
    }
    getSyncAdvancedTitle_() {
        if (this.showSyncSettingsRevamp_) {
            return this.i18n('syncAdvancedDevicePageTitle');
        }
        return this.i18n('syncAdvancedPageTitle');
    }
    onSyncDashboardLinkClick_() {
        window.open(loadTimeData.getString('syncDashboardUrl'));
    }
    computeDataEncrypted_() {
        return !!this.syncPrefs && this.syncPrefs.encryptAllData;
    }
    computeEnterPassphraseLabel_() {
        if (!this.syncPrefs || !this.syncPrefs.encryptAllData) {
            return window.trustedTypes.emptyHTML;
        }
        if (!this.syncPrefs.explicitPassphraseTime) {
            // TODO(crbug.com/1207432): There's no reason why this dateless label
            // shouldn't link to 'syncErrorsHelpUrl' like the other one.
            return this.i18nAdvanced('enterPassphraseLabel');
        }
        return this.i18nAdvanced('enterPassphraseLabelWithDate', {
            tags: ['a'],
            substitutions: [
                loadTimeData.getString('syncErrorsHelpUrl'),
                this.syncPrefs.explicitPassphraseTime,
            ],
        });
    }
    computeExistingPassphraseLabel_() {
        if (!this.syncPrefs || !this.syncPrefs.encryptAllData) {
            return window.trustedTypes.emptyHTML;
        }
        if (!this.syncPrefs.explicitPassphraseTime) {
            return this.i18nAdvanced('existingPassphraseLabel');
        }
        return this.i18nAdvanced('existingPassphraseLabelWithDate', {
            substitutions: [this.syncPrefs.explicitPassphraseTime],
        });
    }
    /**
     * Whether the encryption dropdown should be expanded by default.
     */
    expandEncryptionIfNeeded_() {
        // Force the dropdown to expand.
        if (this.forceEncryptionExpanded) {
            this.forceEncryptionExpanded = false;
            this.encryptionExpanded_ = true;
            return;
        }
        this.encryptionExpanded_ = this.dataEncrypted_;
    }
    onResetSyncClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events as the |cr-expand-button|
            // prevents the default which will prevent the navigation to the link.
            event.stopPropagation();
        }
    }
    /**
     * Sends the user-entered existing password to re-enable sync.
     */
    onSubmitExistingPassphraseClick_(e) {
        if (e.type === 'keypress' && e.key !== 'Enter') {
            return;
        }
        this.browserProxy_.setDecryptionPassphrase(this.existingPassphrase_)
            .then(sucessfullySet => this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(sucessfullySet)));
        this.existingPassphrase_ = '';
    }
    onPassphraseChanged_(e) {
        this.handlePageStatusChanged_(this.computePageStatusAfterPassphraseChange_(e.detail.didChange));
    }
    computePageStatusAfterPassphraseChange_(successfullyChanged) {
        if (!successfullyChanged) {
            return PageStatus.PASSPHRASE_FAILED;
        }
        // Stay on the setup page if the user hasn't approved sync settings yet.
        // Otherwise, close sync setup.
        return this.syncStatus && this.syncStatus.firstSetupInProgress ?
            PageStatus.CONFIGURE :
            PageStatus.DONE;
    }
    /**
     * Called when the page status updates.
     */
    handlePageStatusChanged_(pageStatus) {
        const router = Router.getInstance();
        switch (pageStatus) {
            case PageStatus.SPINNER:
            case PageStatus.CONFIGURE:
                this.pageStatus_ = pageStatus;
                return;
            case PageStatus.DONE:
                if (router.currentRoute === routes.SYNC) {
                    router.navigateTo(routes.OS_PEOPLE);
                }
                return;
            case PageStatus.PASSPHRASE_FAILED:
                if (this.pageStatus_ === PageStatus.CONFIGURE && this.syncPrefs &&
                    this.syncPrefs.passphraseRequired) {
                    const passphraseInput = this.shadowRoot.querySelector('#existingPassphraseInput');
                    passphraseInput.invalid = true;
                    passphraseInput.focusInput();
                }
                return;
            default:
                assertNotReached();
        }
    }
    onLearnMoreClick_(event) {
        if (event.target.tagName === 'A') {
            // Stop the propagation of events, so that clicking on links inside
            // checkboxes or radio buttons won't change the value.
            event.stopPropagation();
        }
    }
    computeShowExistingPassphraseBelowAccount_() {
        return this.syncStatus !== undefined && !!this.syncStatus.signedIn &&
            this.syncPrefs !== undefined && !!this.syncPrefs.passphraseRequired;
    }
    onSyncAdvancedClick_() {
        const router = Router.getInstance();
        router.navigateTo(routes.OS_SYNC);
    }
    /**
     * Focuses the passphrase input element if it is available and the page is
     * visible.
     */
    focusPassphraseInput_() {
        const passphraseInput = this.shadowRoot.querySelector('#existingPassphraseInput');
        const router = Router.getInstance();
        if (passphraseInput && router.currentRoute === routes.SYNC) {
            passphraseInput.focus();
        }
    }
}
customElements.define(OsSettingsSyncSubpageElement.is, OsSettingsSyncSubpageElement);
