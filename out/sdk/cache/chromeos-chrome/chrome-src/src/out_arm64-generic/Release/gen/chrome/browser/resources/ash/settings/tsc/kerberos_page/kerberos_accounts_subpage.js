// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-kerberos-accounts-subpage' is the settings subpage containing
 * controls to list, add and delete Kerberos Accounts.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_toast/cr_toast.js';
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../settings_shared.css.js';
import './kerberos_add_account_dialog.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { getImage } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { cast, castExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { Router, routes } from '../router.js';
import { KerberosAccountsBrowserProxyImpl, KerberosErrorType } from './kerberos_accounts_browser_proxy.js';
import { getTemplate } from './kerberos_accounts_subpage.html.js';
const SettingsKerberosAccountsSubpageElementBase = DeepLinkingMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement))));
export class SettingsKerberosAccountsSubpageElement extends SettingsKerberosAccountsSubpageElementBase {
    static get is() {
        return 'settings-kerberos-accounts-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of Accounts.
             */
            accounts_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * Whether dark mode is currently active.
             */
            isDarkModeActive_: {
                type: Boolean,
                value: false,
            },
            /**
             * The targeted account for menu and other operations.
             */
            selectedAccount_: Object,
            showAddAccountDialog_: Boolean,
            addAccountsAllowed_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('kerberosAddAccountsAllowed');
                },
            },
            accountToastText_: {
                type: String,
                value: '',
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kAddKerberosTicketV2,
                    Setting.kRemoveKerberosTicketV2,
                    Setting.kSetActiveKerberosTicketV2,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = KerberosAccountsBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('kerberos-accounts-changed', this.refreshAccounts_.bind(this));
    }
    ready() {
        super.ready();
        // Grab account list and - when done - pop up the reauthentication dialog if
        // there is a kerberos_reauth param.
        this.refreshAccounts_().then(() => {
            const queryParams = Router.getInstance().getQueryParameters();
            const reauthPrincipal = queryParams.get('kerberos_reauth');
            const reauthAccount = this.accounts_.find(account => {
                return account.principalName === reauthPrincipal;
            });
            if (reauthAccount) {
                this.selectedAccount_ = reauthAccount;
                this.showAddAccountDialog_ = true;
            }
        });
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.KERBEROS_ACCOUNTS_V2) {
            return;
        }
        this.attemptDeepLink();
    }
    /**
     * @return The icon to use for the error badge.
     */
    getErrorBadgeIcon_() {
        return this.isDarkModeActive_ ?
            'chrome://os-settings/images/error_badge_dark.svg' :
            'chrome://os-settings/images/error_badge.svg';
    }
    getIconImageSet_(iconUrl) {
        return getImage(iconUrl);
    }
    onAddAccountClick_() {
        this.selectedAccount_ = null;
        this.showAddAccountDialog_ = true;
    }
    onReauthenticationClick_(event) {
        this.selectedAccount_ = event.model.item;
        this.showAddAccountDialog_ = true;
    }
    onAddAccountDialogClosed_() {
        if (this.shadowRoot.querySelector('kerberos-add-account-dialog')
            .accountWasRefreshed) {
            this.showToast_('kerberosAccountsAccountRefreshedTip');
        }
        this.showAddAccountDialog_ = false;
        // In case it was opened by the 'Refresh now' action menu.
        this.closeActionMenu_();
    }
    refreshAccounts_() {
        return this.browserProxy_.getAccounts().then(accounts => {
            this.accounts_ = accounts;
        });
    }
    /**
     * Opens the Account actions menu.
     */
    onAccountActionsMenuButtonClick_(event) {
        this.selectedAccount_ = event.model.item;
        const target = cast(event.target, HTMLElement);
        this.shadowRoot.querySelector('cr-action-menu').showAt(target);
    }
    /**
     * Closes action menu and resets action menu model.
     */
    closeActionMenu_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
        this.selectedAccount_ = null;
    }
    /**
     * Removes |this.selectedAccount_|.
     */
    onRemoveAccountClick_() {
        this.browserProxy_.removeAccount(castExists(this.selectedAccount_))
            .then(error => {
            if (error === KerberosErrorType.NONE) {
                this.showToast_('kerberosAccountsAccountRemovedTip');
            }
            else {
                console.error('Unexpected error removing account: ' + error);
            }
        });
        recordSettingChange();
        this.closeActionMenu_();
    }
    /**
     * Sets |this.selectedAccount_| as active Kerberos account.
     */
    onSetAsActiveAccountClick_() {
        this.browserProxy_.setAsActiveAccount(castExists(this.selectedAccount_));
        recordSettingChange();
        this.closeActionMenu_();
    }
    /**
     * Opens the reauth dialog for |this.selectedAccount_|.
     */
    onRefreshNowClick_() {
        this.showAddAccountDialog_ = true;
    }
    /**
     * Pops up a toast with localized text |label|.
     * @param label Name of the localized label string.
     */
    showToast_(label) {
        this.accountToastText_ = this.i18n(label);
        this.shadowRoot.querySelector('#account-toast').show();
    }
}
customElements.define(SettingsKerberosAccountsSubpageElement.is, SettingsKerberosAccountsSubpageElement);
