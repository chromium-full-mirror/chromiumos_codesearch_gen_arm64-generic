// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './shared_style.css.js';
import './prefs/pref_toggle_button.js';
import './user_utils_mixin.js';
import '/shared/settings/controls/extension_controlled_indicator.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { RouteObserverMixin, Router, UrlParam } from './router.js';
import { getTemplate } from './settings_section.html.js';
import { SyncBrowserProxyImpl, TrustedVaultBannerState } from './sync_browser_proxy.js';
import { UserUtilMixin } from './user_utils_mixin.js';
const PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID = 'PasswordManagerUI::kAddShortcutElementId';
const PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID = 'PasswordManagerUI::kAddShortcutCustomEventId';
const SettingsSectionElementBase = HelpBubbleMixin(RouteObserverMixin(PrefsMixin(UserUtilMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));
export class SettingsSectionElement extends SettingsSectionElementBase {
    constructor() {
        super(...arguments);
        this.setBlockedSitesListListener_ = null;
        this.setCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'settings-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** An array of blocked sites to display. */
            blockedSites_: {
                type: Array,
                value: () => [],
            },
            // 
            hasPasswordsToExport_: {
                type: Boolean,
                value: false,
            },
            // 
            hasPasskeys_: {
                type: Boolean,
                value: false,
            },
            passwordManagerDisabled_: {
                type: Boolean,
                computed: 'computePasswordManagerDisabled_(' +
                    'prefs.credentials_enable_service.enforcement, ' +
                    'prefs.credentials_enable_service.value)',
            },
            /** The visibility state of the trusted vault banner. */
            trustedVaultBannerState_: {
                type: Object,
                value: TrustedVaultBannerState.NOT_SHOWN,
            },
            canAddShortcut_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('canAddShortcut');
                },
            },
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
        };
    }
    ready() {
        super.ready();
        chrome.metricsPrivate.recordBoolean('PasswordManager.OpenedAsShortcut', window.matchMedia('(display-mode: standalone)').matches);
    }
    connectedCallback() {
        super.connectedCallback();
        this.setBlockedSitesListListener_ = blockedSites => {
            this.blockedSites_ = blockedSites;
        };
        PasswordManagerImpl.getInstance().getBlockedSitesList().then(blockedSites => this.blockedSites_ = blockedSites);
        PasswordManagerImpl.getInstance().addBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.setCredentialsChangedListener_ =
            (passwords) => {
                this.hasPasswordsToExport_ = passwords.length > 0;
            };
        PasswordManagerImpl.getInstance().getSavedPasswordList().then(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        const trustedVaultStateChanged = (state) => {
            this.trustedVaultBannerState_ = state;
        };
        const syncBrowserProxy = SyncBrowserProxyImpl.getInstance();
        syncBrowserProxy.getTrustedVaultBannerState().then(trustedVaultStateChanged);
        this.addWebUiListener('trusted-vault-banner-state-changed', trustedVaultStateChanged);
        // 
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setBlockedSitesListListener_);
        PasswordManagerImpl.getInstance().removeBlockedSitesListChangedListener(this.setBlockedSitesListListener_);
        this.setBlockedSitesListListener_ = null;
        assert(this.setCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setCredentialsChangedListener_);
        this.setCredentialsChangedListener_ = null;
    }
    currentRouteChanged(route) {
        const param = route.queryParameters.get(UrlParam.START_IMPORT) || '';
        if (param === 'true') {
            const importer = this.shadowRoot.querySelector('passwords-importer');
            assert(importer);
            importer.launchImport();
            const params = new URLSearchParams();
            Router.getInstance().updateRouterParams(params);
        }
    }
    onShortcutBannerDomChanged_() {
        const addShortcutBanner = this.root.querySelector('#addShortcutBanner');
        if (addShortcutBanner) {
            this.registerHelpBubble(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, addShortcutBanner);
        }
    }
    onAddShortcutClick_() {
        this.notifyHelpBubbleAnchorCustomEvent(PASSWORD_MANAGER_ADD_SHORTCUT_ELEMENT_ID, PASSWORD_MANAGER_ADD_SHORTCUT_CUSTOM_EVENT_ID);
        // TODO(crbug.com/1358448): Record metrics on all entry points usage.
        // TODO(crbug.com/1358448): Hide the button for users after the shortcut is
        // installed.
        PasswordManagerImpl.getInstance().showAddShortcutDialog();
    }
    /**
     * Fires an event that should delete the blocked password entry.
     */
    onRemoveBlockedSiteClick_(event) {
        PasswordManagerImpl.getInstance().removeBlockedSite(event.model.item.id);
    }
    // 
    onTrustedVaultBannerClick_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultLearnMoreUrl'));
                break;
            case TrustedVaultBannerState.OFFER_OPT_IN:
                OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('trustedVaultOptInUrl'));
                break;
            case TrustedVaultBannerState.NOT_SHOWN:
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerTitle_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    getTrustedVaultBannerDescription_() {
        switch (this.trustedVaultBannerState_) {
            case TrustedVaultBannerState.OPTED_IN:
                return this.i18n('trustedVaultBannerSubLabelOptedIn');
            case TrustedVaultBannerState.OFFER_OPT_IN:
                return this.i18n('trustedVaultBannerSubLabelOfferOptIn');
            case TrustedVaultBannerState.NOT_SHOWN:
                return '';
            default:
                assertNotReached();
        }
    }
    shouldHideTrustedVaultBanner_() {
        return this.trustedVaultBannerState_ === TrustedVaultBannerState.NOT_SHOWN;
    }
    getAriaLabelForBlockedSite_(blockedSite) {
        return this.i18n('removeBlockedAriaDescription', blockedSite.urls.shown);
    }
    changeAccountStorageOptIn_() {
        if (this.isOptedInForAccountStorage) {
            this.optOutFromAccountStorage();
        }
        else {
            this.optInForAccountStorage();
        }
    }
    getToggleSubLabelForAccountStorageOptIn_(accountEmail) {
        if (this.enableButterOnDesktopFollowup_) {
            return this.i18n('accountStorageToggleSubLabel', accountEmail);
        }
        return accountEmail;
    }
    // 
    computePasswordManagerDisabled_() {
        const pref = this.getPref('credentials_enable_service');
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !pref.value;
    }
}
customElements.define(SettingsSectionElement.is, SettingsSectionElement);
