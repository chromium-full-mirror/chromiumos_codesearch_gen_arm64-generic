// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-sync-account-section' is the settings page containing sign-in
 * settings.
 */
import '//resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '/shared/settings/people_page/profile_info_browser_proxy.js';
import '../icons.html.js';
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '../settings_shared.css.js';
import { WebUiListenerMixin } from '//resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from '//resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { loadTimeData } from '../i18n_setup.js';
import { Router } from '../router.js';
import { getTemplate } from './sync_account_control.html.js';
export const MAX_SIGNIN_PROMO_IMPRESSION = 10;
const SettingsSyncAccountControlElementBase = WebUiListenerMixin(PrefsMixin(PolymerElement));
export class SettingsSyncAccountControlElement extends SettingsSyncAccountControlElementBase {
    constructor() {
        super(...arguments);
        this.syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-sync-account-control';
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
            /**
             * The current sync status, supplied by parent element.
             */
            syncStatus: Object,
            // String to be used as a title when the promo has an account.
            promoLabelWithAccount: String,
            // String to be used as title of the promo has no account.
            promoLabelWithNoAccount: String,
            // String to be used as a subtitle when the promo has an account.
            promoSecondaryLabelWithAccount: String,
            // String to be used as subtitle of the promo has no account.
            promoSecondaryLabelWithNoAccount: String,
            /**
             * Proxy variable for syncStatus.signedIn to shield observer from being
             * triggered multiple times whenever syncStatus changes.
             */
            signedIn_: {
                type: Boolean,
                computed: 'computeSignedIn_(syncStatus.signedIn)',
                observer: 'onSignedInChanged_',
            },
            storedAccounts_: Object,
            shownAccount_: Object,
            showingPromo: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // This property should be set by the parent only and should not change
            // after the element is created.
            embeddedInSubpage: {
                type: Boolean,
                reflectToAttribute: true,
            },
            // This property should be set by the parent only and should not change
            // after the element is created.
            hideButtons: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            shouldShowAvatarRow_: {
                type: Boolean,
                value: false,
                computed: 'computeShouldShowAvatarRow_(storedAccounts_, syncStatus,' +
                    'storedAccounts_.length, syncStatus.signedIn)',
                observer: 'onShouldShowAvatarRowChange_',
            },
            subLabel_: {
                type: String,
                computed: 'computeSubLabel_(promoSecondaryLabelWithAccount,' +
                    'promoSecondaryLabelWithNoAccount, shownAccount_)',
            },
            showSetupButtons_: {
                type: Boolean,
                computed: 'computeShowSetupButtons_(' +
                    'hideButtons, syncStatus.firstSetupInProgress)',
            },
        };
    }
    static get observers() {
        return [
            'onShownAccountShouldChange_(storedAccounts_, syncStatus)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.syncBrowserProxy_.getStoredAccounts().then(this.handleStoredAccounts_.bind(this));
        this.addWebUiListener('stored-accounts-updated', this.handleStoredAccounts_.bind(this));
    }
    /**
     * Records Signin_Impression_FromSettings user action.
     */
    recordImpressionUserActions_() {
        assert(!this.syncStatus.signedIn);
        chrome.metricsPrivate.recordUserAction('Signin_Impression_FromSettings');
    }
    computeSignedIn_() {
        return !!this.syncStatus && !!this.syncStatus.signedIn;
    }
    onSignedInChanged_() {
        if (this.embeddedInSubpage) {
            this.showingPromo = true;
            return;
        }
        if (!this.showingPromo && !this.syncStatus.signedIn &&
            this.syncBrowserProxy_.getPromoImpressionCount() <
                MAX_SIGNIN_PROMO_IMPRESSION) {
            this.showingPromo = true;
            this.syncBrowserProxy_.incrementPromoImpressionCount();
        }
        else {
            // Turn off the promo if the user is signed in.
            this.showingPromo = false;
        }
        if (!this.syncStatus.signedIn && this.shownAccount_ !== undefined) {
            this.recordImpressionUserActions_();
        }
    }
    getLabel_(labelWithAccount, labelWithNoAccount) {
        return this.shownAccount_ ? labelWithAccount : labelWithNoAccount;
    }
    computeSubLabel_() {
        return this.getLabel_(this.promoSecondaryLabelWithAccount, this.promoSecondaryLabelWithNoAccount);
    }
    getSubstituteLabel_(label, name) {
        return loadTimeData.substituteString(label, name);
    }
    getAccountLabel_(label, account) {
        if (this.syncStatus.firstSetupInProgress) {
            return this.syncStatus.statusText || account;
        }
        return this.syncStatus.signedIn && !this.syncStatus.hasError &&
            !this.syncStatus.disabled ?
            loadTimeData.substituteString(label, account) :
            account;
    }
    getAccountImageSrc_(image) {
        // image can be undefined if the account has not set an avatar photo.
        return image || 'chrome://theme/IDR_PROFILE_AVATAR_PLACEHOLDER_LARGE';
    }
    /**
     * @return The CSS class of the sync icon.
     */
    getSyncIconStyle_() {
        if (this.syncStatus.disabled) {
            return 'sync-disabled';
        }
        if (!this.syncStatus.hasError) {
            return 'sync';
        }
        // Specific error cases below.
        if (this.syncStatus.hasUnrecoverableError) {
            return 'sync-problem';
        }
        if (this.syncStatus.statusAction === StatusAction.REAUTHENTICATE) {
            return 'sync-paused';
        }
        return 'sync-problem';
    }
    /**
     * Returned value must match one of iron-icon's settings:(*) icon name.
     */
    getSyncIcon_() {
        switch (this.getSyncIconStyle_()) {
            case 'sync-problem':
                return 'settings:sync-problem';
            case 'sync-paused':
                return 'settings:sync-disabled';
            default:
                return 'cr:sync';
        }
    }
    getAvatarRowTitle_(accountName, syncErrorLabel, syncPasswordsOnlyErrorLabel, authErrorLabel, disabledLabel) {
        if (this.syncStatus.disabled) {
            return disabledLabel;
        }
        if (!this.syncStatus.hasError) {
            return accountName;
        }
        // Specific error cases below.
        if (this.syncStatus.hasUnrecoverableError) {
            return syncErrorLabel;
        }
        if (this.syncStatus.statusAction === StatusAction.REAUTHENTICATE) {
            return authErrorLabel;
        }
        if (this.syncStatus.hasPasswordsOnlyError) {
            return syncPasswordsOnlyErrorLabel;
        }
        return syncErrorLabel;
    }
    /**
     * Determines if the sync button should be disabled in response to
     * either a first setup flow or chrome sign-in being disabled.
     */
    shouldDisableSyncButton_() {
        if (this.hideButtons || this.prefs === undefined) {
            return this.computeShowSetupButtons_();
        }
        return !!this.syncStatus.firstSetupInProgress ||
            !this.getPref('signin.allowed_on_next_startup').value;
    }
    shouldShowTurnOffButton_() {
        // 
        if (this.syncStatus.domain) {
            // Chrome OS cannot delete the user's profile like other platforms, so
            // hide the turn off sync button for enterprise users who are not
            // allowed to sign out.
            return false;
        }
        // 
        return !this.hideButtons && !this.showSetupButtons_ &&
            !!this.syncStatus.signedIn;
    }
    shouldShowErrorActionButton_() {
        if (this.embeddedInSubpage &&
            this.syncStatus.statusAction === StatusAction.ENTER_PASSPHRASE) {
            // In a subpage the passphrase button is not required.
            return false;
        }
        return !this.hideButtons && !this.showSetupButtons_ &&
            !!this.syncStatus.signedIn && !!this.syncStatus.hasError &&
            this.syncStatus.statusAction !== StatusAction.NO_ACTION;
    }
    shouldAllowAccountSwitch_() {
        // 
        return !this.syncStatus.signedIn &&
            (!loadTimeData.getBoolean('turnOffSyncAllowedForManagedProfiles') ||
                !this.syncStatus.domain);
    }
    handleStoredAccounts_(accounts) {
        this.storedAccounts_ = accounts;
    }
    computeShouldShowAvatarRow_() {
        if (this.storedAccounts_ === undefined || this.syncStatus === undefined) {
            return false;
        }
        return this.syncStatus.signedIn || this.storedAccounts_.length > 0;
    }
    onErrorButtonClick_() {
        const router = Router.getInstance();
        const routes = router.getRoutes();
        switch (this.syncStatus.statusAction) {
            // 
            case StatusAction.UPGRADE_CLIENT:
                router.navigateTo(routes.ABOUT);
                break;
            case StatusAction.RETRIEVE_TRUSTED_VAULT_KEYS:
                this.syncBrowserProxy_.startKeyRetrieval();
                break;
            case StatusAction.ENTER_PASSPHRASE:
            case StatusAction.CONFIRM_SYNC_SETTINGS:
            default:
                router.navigateTo(routes.SYNC);
        }
    }
    onSigninClick_() {
        // 
        // 
        // Chrome OS is always signed-in, so just turn on sync.
        this.syncBrowserProxy_.turnOnSync();
        // 
        // Need to close here since one menu item also triggers this function.
        const actionMenu = this.shadowRoot.querySelector('cr-action-menu');
        if (actionMenu) {
            actionMenu.close();
        }
    }
    // 
    onSyncButtonClick_() {
        assert(this.shownAccount_);
        assert(this.storedAccounts_.length > 0);
        const isDefaultPromoAccount = (this.shownAccount_.email === this.storedAccounts_[0].email);
        this.syncBrowserProxy_.startSyncingWithEmail(this.shownAccount_.email, isDefaultPromoAccount);
    }
    onTurnOffButtonClick_() {
        /* This will route to people_page's disconnect dialog. */
        const router = Router.getInstance();
        router.navigateTo(router.getRoutes().SIGN_OUT);
    }
    onMenuButtonClick_() {
        const actionMenu = this.shadowRoot.querySelector('cr-action-menu');
        assert(actionMenu);
        const anchor = this.shadowRoot.querySelector('#dropdown-arrow');
        assert(anchor);
        actionMenu.showAt(anchor);
    }
    onShouldShowAvatarRowChange_() {
        // Close dropdown when avatar-row hides, so if it appears again, the menu
        // won't be open by default.
        const actionMenu = this.shadowRoot.querySelector('cr-action-menu');
        if (!this.shouldShowAvatarRow_ && actionMenu && actionMenu.open) {
            actionMenu.close();
        }
    }
    onAccountClick_(e) {
        this.shownAccount_ = e.model.item;
        this.shadowRoot.querySelector('cr-action-menu').close();
    }
    onShownAccountShouldChange_() {
        if (this.storedAccounts_ === undefined || this.syncStatus === undefined) {
            return;
        }
        if (this.syncStatus.signedIn) {
            for (let i = 0; i < this.storedAccounts_.length; i++) {
                if (this.storedAccounts_[i].email ===
                    this.syncStatus.signedInUsername) {
                    this.shownAccount_ = this.storedAccounts_[i];
                    return;
                }
            }
        }
        else {
            const firstStoredAccount = (this.storedAccounts_.length > 0) ? this.storedAccounts_[0] : null;
            // Sign-in impressions should be recorded in the following cases:
            // 1. When the promo is first shown, i.e. when |shownAccount_| is
            //   initialized;
            // 2. When the impression account state changes, i.e. promo impression
            //   state changes (WithAccount -> WithNoAccount) or
            //   (WithNoAccount -> WithAccount).
            const shouldRecordImpression = (this.shownAccount_ === undefined) ||
                (!this.shownAccount_ && firstStoredAccount) ||
                (this.shownAccount_ && !firstStoredAccount);
            this.shownAccount_ = firstStoredAccount;
            if (shouldRecordImpression) {
                this.recordImpressionUserActions_();
            }
        }
    }
    computeShowSetupButtons_() {
        return !this.hideButtons && !!this.syncStatus.firstSetupInProgress;
    }
    onSetupCancel_() {
        this.dispatchEvent(new CustomEvent('sync-setup-done', { bubbles: true, composed: true, detail: false }));
    }
    onSetupConfirm_() {
        this.dispatchEvent(new CustomEvent('sync-setup-done', { bubbles: true, composed: true, detail: true }));
    }
}
customElements.define(SettingsSyncAccountControlElement.is, SettingsSyncAccountControlElement);
