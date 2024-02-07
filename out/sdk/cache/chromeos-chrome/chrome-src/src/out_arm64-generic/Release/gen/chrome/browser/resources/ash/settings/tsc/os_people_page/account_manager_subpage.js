// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-account-manager-subpage' is the settings subpage containing
 * controls to list, add and delete Secondary Google Accounts.
 */
import 'chrome://resources/ash/common/cr_elements/localized_link/localized_link.js';
import 'chrome://resources/ash/common/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_tooltip_icon.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/ash/common/cr_elements/web_ui_listener_mixin.js';
import { assertInstanceof } from 'chrome://resources/js/assert.js';
import { getImage } from 'chrome://resources/js/icon.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertExists } from '../assert_extras.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isChild } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { ParentalControlsBrowserProxyImpl } from '../parental_controls_page/parental_controls_browser_proxy.js';
import { routes } from '../router.js';
import { AccountManagerBrowserProxyImpl } from './account_manager_browser_proxy.js';
import { getTemplate } from './account_manager_subpage.html.js';
const SettingsAccountManagerSubpageElementBase = RouteObserverMixin(WebUiListenerMixin(I18nMixin(DeepLinkingMixin(PolymerElement))));
export class SettingsAccountManagerSubpageElement extends SettingsAccountManagerSubpageElementBase {
    static get is() {
        return 'settings-account-manager-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            accounts_: {
                type: Array,
                value() {
                    return [];
                },
            },
            /**
             * Primary / Device account.
             */
            deviceAccount_: Object,
            /**
             * The targeted account for menu operations.
             */
            actionMenuAccount_: Object,
            isChildUser_: {
                type: Boolean,
                value() {
                    return isChild();
                },
            },
            isDeviceAccountManaged_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isDeviceAccountManaged');
                },
                readOnly: true,
            },
            /**
             * @return true if secondary account sign-ins are allowed, false
             *  otherwise.
             */
            isSecondaryGoogleAccountSigninAllowed_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('secondaryGoogleAccountSigninAllowed');
                },
            },
            /**
             * @return true if `kArcAccountRestrictionsEnabled` feature is
             * enabled, false otherwise.
             */
            isArcAccountRestrictionsEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('arcAccountRestrictionsEnabled');
                },
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kAddAccount,
                    Setting.kRemoveAccount,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = AccountManagerBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('accounts-changed', this.refreshAccounts_.bind(this));
    }
    ready() {
        super.ready();
        this.refreshAccounts_();
    }
    currentRouteChanged(newRoute) {
        if (newRoute !== routes.ACCOUNT_MANAGER) {
            return;
        }
        this.attemptDeepLink();
    }
    getAccountManagerDescription_() {
        if (this.isChildUser_ && this.isSecondaryGoogleAccountSigninAllowed_) {
            return loadTimeData.getString('accountManagerChildDescription');
        }
        return loadTimeData.getString('accountManagerDescription');
    }
    getAddAccountLabel_() {
        if (this.isChildUser_ && this.isSecondaryGoogleAccountSigninAllowed_) {
            return loadTimeData.getString('addSchoolAccountLabel');
        }
        return loadTimeData.getString('addAccountLabel');
    }
    /**
     * @return accounts list header (e.g. 'Secondary accounts' for
     * regular users or 'School accounts' for child users).
     */
    getAccountListHeader_() {
        return this.isChildUser_ ?
            loadTimeData.getString('accountListHeaderChild') :
            loadTimeData.getString('accountListHeader');
    }
    getAccountListDescription_() {
        return this.isChildUser_ ?
            loadTimeData.getString('accountListChildDescription') :
            loadTimeData.getString('accountListDescription');
    }
    getSecondaryAccountsDisabledUserMessage_() {
        return this.isChildUser_ ?
            this.i18n('accountManagerSecondaryAccountsDisabledChildText') :
            this.i18n('accountManagerSecondaryAccountsDisabledText');
    }
    getAccountListHeaderClass_() {
        return this.isArcAccountRestrictionsEnabled_ ?
            'account-list-header-description with-padding' :
            'account-list-header-description';
    }
    /**
     * @return a CSS image-set for multiple scale factors.
     */
    getIconImageSet_(iconUrl) {
        return getImage(iconUrl);
    }
    addAccount_() {
        recordSettingChange(Setting.kAddAccount, { intValue: this.accounts_.length + 1 });
        this.browserProxy_.addAccount();
    }
    shouldShowReauthenticationButton_(account) {
        // Device account re-authentication cannot be handled in-session, primarily
        // because the user may have changed their password (leading to an LST
        // invalidation) and we do not have a mechanism to change the cryptohome
        // password in-session.
        return !account.isDeviceAccount && !account.isSignedIn;
    }
    /**
     * @return true if managed badge should be shown next to the device
     * account picture.
     */
    shouldShowManagedBadge_() {
        return this.isDeviceAccountManaged_ && !this.isChildUser_;
    }
    getManagedAccountTooltipIcon_() {
        if (this.isChildUser_) {
            return 'cr20:kite';
        }
        if (this.isDeviceAccountManaged_) {
            return 'cr20:domain';
        }
        return '';
    }
    getManagementDescription_() {
        if (this.isChildUser_) {
            return loadTimeData.getString('accountManagerManagementDescription');
        }
        if (!this.deviceAccount_) {
            return '';
        }
        assertExists(this.deviceAccount_.organization);
        if (!this.deviceAccount_.organization) {
            if (this.isDeviceAccountManaged_) {
                console.error('The device account is managed, but the organization is not set.');
            }
            return '';
        }
        // Format: 'This account is managed by
        //          <a target="_blank" href="chrome://management">google.com</a>'.
        // Where href will be set by <localized-link>.
        return loadTimeData.getStringF('accountManagerManagementDescription', this.deviceAccount_.organization);
    }
    getAccountManagerSignedOutName_(unmigrated) {
        return this.i18n(unmigrated ? 'accountManagerUnmigratedAccountName' :
            'accountManagerSignedOutAccountName');
    }
    getAccountManagerSignedOutLabel_(unmigrated) {
        return this.i18n(unmigrated ? 'accountManagerMigrationLabel' :
            'accountManagerReauthenticationLabel');
    }
    getAccountManagerSignedOutTitle_(account) {
        const label = account.unmigrated ? 'accountManagerMigrationTooltip' :
            'accountManagerReauthenticationTooltip';
        return loadTimeData.getStringF(label, account.email);
    }
    getMoreActionsTitle_(account) {
        return loadTimeData.getStringF('accountManagerMoreActionsTooltip', account.email);
    }
    getSecondaryAccounts_() {
        return this.accounts_.filter(account => !account.isDeviceAccount);
    }
    onReauthenticationClick_(event) {
        if (event.model.item.unmigrated) {
            this.browserProxy_.migrateAccount(event.model.item.email);
        }
        else {
            this.browserProxy_.reauthenticateAccount(event.model.item.email);
        }
    }
    onManagedIconClick_() {
        if (this.isChildUser_) {
            ParentalControlsBrowserProxyImpl.getInstance().launchFamilyLinkSettings();
        }
    }
    async refreshAccounts_() {
        const accounts = await this.browserProxy_.getAccounts();
        this.set('accounts_', accounts);
        const deviceAccount = accounts.find(account => account.isDeviceAccount);
        if (!deviceAccount) {
            console.error('Cannot find device account.');
            return;
        }
        this.deviceAccount_ = deviceAccount;
    }
    onAccountActionsMenuButtonClick_(event) {
        this.actionMenuAccount_ = event.model.item;
        assertInstanceof(event.target, HTMLElement);
        this.shadowRoot.querySelector('cr-action-menu').showAt(event.target);
    }
    /**
     * If Lacros is not enabled, removes the account pointed to by
     * |this.actionMenuAccount_|.
     * If Lacros is enabled, shows a warning dialog that the user needs to
     * confirm before removing the account.
     */
    onRemoveAccountClick_() {
        this.shadowRoot.querySelector('cr-action-menu').close();
        assertExists(this.actionMenuAccount_);
        if (loadTimeData.getBoolean('lacrosEnabled') &&
            this.actionMenuAccount_.isManaged) {
            this.$.removeConfirmationDialog.showModal();
        }
        else {
            this.browserProxy_.removeAccount(this.actionMenuAccount_);
            this.actionMenuAccount_ = null;
            this.shadowRoot.querySelector('#add-account-button').focus();
        }
    }
    /**
     * The user chooses not to remove the account after seeing the warning
     * dialog, and taps the cancel button.
     */
    onRemoveAccountDialogCancelClick_() {
        this.actionMenuAccount_ = null;
        this.$.removeConfirmationDialog.cancel();
        this.shadowRoot.querySelector('#add-account-button').focus();
    }
    /**
     * After seeing the warning dialog, the user chooses to removes the account
     * pointed to by |this.actionMenuAccount_|, and taps the remove button.
     */
    onRemoveAccountDialogRemoveClick_() {
        assertExists(this.actionMenuAccount_);
        this.browserProxy_.removeAccount(this.actionMenuAccount_);
        this.actionMenuAccount_ = null;
        this.$.removeConfirmationDialog.close();
        this.shadowRoot.querySelector('#add-account-button').focus();
    }
    /**
     * Get the test for button that changes ARC availability.
     */
    getChangeArcAvailabilityLabel_() {
        if (!this.actionMenuAccount_) {
            return '';
        }
        return this.actionMenuAccount_.isAvailableInArc ?
            this.i18n('accountStopUsingInArcButtonLabel') :
            this.i18n('accountUseInArcButtonLabel');
    }
    /**
     * Change ARC availability for |this.actionMenuAccount_|.
     * Closes the 'More actions' menu and focuses the 'More actions' button for
     * |this.actionMenuAccount_|.
     */
    onChangeArcAvailability_() {
        assertExists(this.actionMenuAccount_);
        this.shadowRoot.querySelector('cr-action-menu').close();
        const newArcAvailability = !this.actionMenuAccount_.isAvailableInArc;
        this.browserProxy_.changeArcAvailability(this.actionMenuAccount_, newArcAvailability);
        const actionMenuAccountIndex = this.shadowRoot.querySelector('#account-list').items
            .indexOf(this.actionMenuAccount_);
        if (actionMenuAccountIndex >= 0) {
            // Focus 'More actions' button for the current account.
            this.shadowRoot
                .querySelectorAll('.icon-more-vert')[actionMenuAccountIndex]
                .focus();
        }
        else {
            console.error('Couldn\'t find active account in the list: ', this.actionMenuAccount_);
            this.shadowRoot.querySelector('#add-account-button').focus();
        }
        this.actionMenuAccount_ = null;
    }
}
customElements.define(SettingsAccountManagerSubpageElement.is, SettingsAccountManagerSubpageElement);
