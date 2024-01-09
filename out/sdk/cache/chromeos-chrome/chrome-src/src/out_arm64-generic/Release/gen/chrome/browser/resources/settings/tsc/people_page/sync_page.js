// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/js/util.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_link_row/cr_link_row.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/cr_elements/cr_expand_button/cr_expand_button.js';
import '//resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import './sync_account_control.js';
import './sync_encryption_options.js';
import '../privacy_page/personalization_options.js';
import '../settings_shared.css.js';
import '../settings_vars.css.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from '//resources/js/assert.js';
import { focusWithoutInk } from '//resources/js/focus_without_ink.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PageStatus, StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
// 
import { RouteObserverMixin, Router } from '../router.js';
// 
import { getTemplate } from './sync_page.html.js';
/**
 * @fileoverview
 * 'settings-sync-page' is the settings page containing sync settings.
 */
const SettingsSyncPageElementBase = RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));
export class SettingsSyncPageElement extends SettingsSyncPageElementBase {
    static get is() {
        return 'settings-sync-page';
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
            focusConfig: {
                type: Object,
                observer: 'onFocusConfigChange_',
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
             * Dictionary defining page visibility.
             * TODO(dpapad): Restore the type information here
             * (PrivacyPageVisibility), when this file is no longer shared with
             * chrome://os-settings.
             */
            pageVisibility: Object,
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
            // 
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
            // 
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
        if (router.getCurrentRoute() === router.getRoutes().SYNC) {
            this.onNavigateToPage_();
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        const router = Router.getInstance();
        if (router.getRoutes().SYNC.contains(router.getCurrentRoute())) {
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
    // 
    getEncryptionOptions() {
        return this.shadowRoot.querySelector('settings-sync-encryption-options');
    }
    getPersonalizationOptions() {
        return this.shadowRoot.querySelector('settings-personalization-options');
    }
    // 
    computeSignedIn_() {
        return !!this.syncStatus.signedIn;
    }
    // 
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
    onFocusConfigChange_() {
        this.focusConfig.set(Router.getInstance().getRoutes().SYNC_ADVANCED.path, () => {
            const toFocus = this.shadowRoot.querySelector('#sync-advanced-row');
            assert(toFocus);
            focusWithoutInk(toFocus);
        });
    }
    // 
    currentRouteChanged() {
        const router = Router.getInstance();
        if (router.getCurrentRoute() === router.getRoutes().SYNC) {
            this.onNavigateToPage_();
            return;
        }
        if (router.getRoutes().SYNC.contains(router.getCurrentRoute())) {
            return;
        }
        const searchParams = Router.getInstance().getQueryParameters().get('search');
        if (searchParams) {
            // User navigated away via searching. Cancel sync without showing
            // confirmation dialog.
            this.onNavigateAwayFromPage_();
            return;
        }
        // 
        this.onNavigateAwayFromPage_();
    }
    isStatus_(expectedPageStatus) {
        return expectedPageStatus === this.pageStatus_;
    }
    onNavigateToPage_() {
        const router = Router.getInstance();
        assert(router.getCurrentRoute() === router.getRoutes().SYNC);
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
    onActivityControlsClick_() {
        chrome.metricsPrivate.recordUserAction('Sync_OpenActivityControlsPage');
        this.browserProxy_.openActivityControlsUrl();
        window.open(loadTimeData.getString('activityControlsUrl'));
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
                if (router.getCurrentRoute() === router.getRoutes().SYNC) {
                    router.navigateTo(router.getRoutes().PEOPLE);
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
    shouldShowSyncAccountControl_() {
        // 
        return false;
        // 
        // 
    }
    computeShowExistingPassphraseBelowAccount_() {
        return this.syncStatus !== undefined && !!this.syncStatus.signedIn &&
            this.syncPrefs !== undefined && !!this.syncPrefs.passphraseRequired;
    }
    onSyncAdvancedClick_() {
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().SYNC_ADVANCED);
    }
    /**
     * @param e The event passed from settings-sync-account-control.
     */
    onSyncSetupDone_(e) {
        if (e.detail) {
            this.didAbort_ = false;
            chrome.metricsPrivate.recordUserAction('Signin_Signin_ConfirmAdvancedSyncSettings');
        }
        else {
            this.setupCancelConfirmed_ = true;
            chrome.metricsPrivate.recordUserAction('Signin_Signin_CancelAdvancedSyncSettings');
        }
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().BASIC);
    }
    /**
     * Focuses the passphrase input element if it is available and the page is
     * visible.
     */
    focusPassphraseInput_() {
        const passphraseInput = this.shadowRoot.querySelector('#existingPassphraseInput');
        const router = Router.getInstance();
        if (passphraseInput &&
            router.getCurrentRoute() === router.getRoutes().SYNC) {
            passphraseInput.focus();
        }
    }
}
customElements.define(SettingsSyncPageElement.is, SettingsSyncPageElement);
