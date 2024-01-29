// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import './strings.m.js';
import './password_list_item.js';
import './dialogs/add_password_dialog.js';
import './dialogs/auth_timed_out_dialog.js';
import './dialogs/move_passwords_dialog.js';
import './user_utils_mixin.js';
import './promo_cards/promo_card.js';
import './promo_cards/promo_cards_browser_proxy.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { focusWithoutInk } from 'chrome://resources/js/focus_without_ink.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MoveToAccountStoreTrigger } from './dialogs/move_passwords_dialog.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { getTemplate } from './passwords_section.html.js';
import { PromoCardId } from './promo_cards/promo_card.js';
import { PromoCardsProxyImpl } from './promo_cards/promo_cards_browser_proxy.js';
import { Page, RouteObserverMixin, Router, UrlParam } from './router.js';
import { UserUtilMixin } from './user_utils_mixin.js';
const PasswordsSectionElementBase = PrefsMixin(UserUtilMixin(RouteObserverMixin(I18nMixin(PolymerElement))));
export class PasswordsSectionElement extends PasswordsSectionElementBase {
    constructor() {
        super(...arguments);
        this.groups_ = [];
        this.setSavedPasswordsListener_ = null;
    }
    static get is() {
        return 'passwords-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            focusConfig: {
                type: Object,
                observer: 'focusConfigChanged_',
            },
            /**
             * Password groups displayed in the UI.
             */
            groups_: {
                type: Array,
                value: () => [],
                observer: 'onGroupsChanged_',
            },
            /** Filter on the saved passwords and exceptions. */
            searchTerm_: {
                type: String,
                value: '',
            },
            shownGroupsCount_: {
                type: Number,
                value: 0,
                observer: 'announceSearchResults_',
            },
            showAddPasswordDialog_: Boolean,
            showAuthTimedOutDialog_: Boolean,
            showMovePasswordsDialog_: Boolean,
            movePasswordsText_: String,
            importPasswordsText_: {
                type: String,
                computed: 'computeImportPasswordsText_(isAccountStoreUser, ' +
                    'isSyncingPasswords, accountEmail)',
            },
            passwordsOnDevice_: {
                type: Array,
                computed: 'computePasswordsOnDevice_(groups_)',
            },
            showMovePasswords_: {
                type: Boolean,
                computed: 'computeShowMovePasswords_(isAccountStoreUser, ' +
                    'passwordsOnDevice_, searchTerm_)',
            },
            showPasswordsDescription_: {
                type: Boolean,
                computed: 'computeShowPasswordsDescription_(groups_, searchTerm_)',
            },
            promoCard_: {
                type: Object,
                value: null,
            },
            passwordManagerDisabled_: {
                type: Boolean,
                computed: 'computePasswordManagerDisabled_(' +
                    'prefs.credentials_enable_service.enforcement, ' +
                    'prefs.credentials_enable_service.value)',
            },
            enableButterOnDesktopFollowup_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableButterOnDesktopFollowup');
                },
            },
            shouldShowPromoCard_: {
                type: Boolean,
                computed: 'computeShouldShowPromoCard_(' +
                    'promoCard_, isAccountStoreUser, passwordsOnDevice_)',
            },
            /**
             * The element to return focus to, when moving from details page to
             * passwords page.
             */
            activeListItem_: { type: Object, value: null },
        };
    }
    static get observers() {
        return [
            'updateImportPasswordsLink_(importPasswordsText_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groups_ = groups);
        };
        this.setSavedPasswordsListener_ = _passwordList => {
            if (_passwordList.length === 0 &&
                this.promoCard_?.id === PromoCardId.CHECKUP) {
                this.promoCard_ = null;
            }
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().addSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        PromoCardsProxyImpl.getInstance().getAvailablePromoCard().then(promo => this.promoCard_ = promo);
        this.authTimedOutListener_ = this.onAuthTimedOut_.bind(this);
        window.addEventListener('auth-timed-out', this.authTimedOutListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.setSavedPasswordsListener_);
        PasswordManagerImpl.getInstance().removeSavedPasswordListChangedListener(this.setSavedPasswordsListener_);
        this.setSavedPasswordsListener_ = null;
        assert(this.authTimedOutListener_);
        window.removeEventListener('hashchange', this.authTimedOutListener_);
        this.authTimedOutListener_ = null;
    }
    currentRouteChanged(newRoute) {
        const searchTerm = newRoute.queryParameters.get(UrlParam.SEARCH_TERM) || '';
        if (searchTerm !== this.searchTerm_) {
            this.searchTerm_ = searchTerm;
        }
    }
    focusFirstResult() {
        if (!this.searchTerm_) {
            // If search term is empty don't do anything.
            return;
        }
        const result = this.shadowRoot.querySelector('password-list-item');
        if (result) {
            result.focus();
        }
    }
    hideGroupsList_() {
        return this.groups_.filter(this.groupFilter_()).length === 0;
    }
    groupFilter_() {
        const term = this.searchTerm_.trim().toLowerCase();
        // Group is matching if:
        // * group name includes term,
        // * any credential's username within a group includes a term,
        // * any credential within a group includes a term in a domain.
        return group => group.name.toLowerCase().includes(term) ||
            group.entries.some(credential => credential.username.toLowerCase().includes(term) ||
                credential.affiliatedDomains?.some(domain => domain.name.toLowerCase().includes(term)));
    }
    async announceSearchResults_() {
        if (!this.searchTerm_.trim()) {
            return;
        }
        const searchResult = await PluralStringProxyImpl.getInstance().getPluralString('searchResults', this.shownGroupsCount_);
        getAnnouncerInstance().announce(searchResult);
    }
    onAddPasswordClick_() {
        this.showAddPasswordDialog_ = true;
    }
    onAddPasswordDialogClose_() {
        this.showAddPasswordDialog_ = false;
    }
    onAuthTimedOut_() {
        this.showAuthTimedOutDialog_ = true;
    }
    onAuthTimedOutDialogClose_() {
        this.showAuthTimedOutDialog_ = false;
    }
    computePasswordsOnDevice_() {
        const localStorage = [
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE_AND_ACCOUNT,
            chrome.passwordsPrivate.PasswordStoreSet.DEVICE,
        ];
        return this.groups_.map(group => group.entries)
            .flat()
            .filter(entry => localStorage.includes(entry.storedIn));
    }
    computeShowMovePasswords_() {
        // Should not show the old entry to move passwords if followup for the
        // butter on desktop feature is enabled.
        if (this.enableButterOnDesktopFollowup_) {
            return false;
        }
        return this.computePasswordsOnDevice_().length > 0 &&
            this.isAccountStoreUser && !this.searchTerm_;
    }
    async onGroupsChanged_() {
        this.movePasswordsText_ =
            await PluralStringProxyImpl.getInstance().getPluralString('movePasswords', this.computePasswordsOnDevice_().length);
    }
    getMovePasswordsText_() {
        return sanitizeInnerHtml(this.movePasswordsText_);
    }
    onMovePasswordsClicked_(e) {
        e.preventDefault();
        this.showMovePasswordsDialog_ = true;
    }
    onMovePasswordsDialogClose_() {
        this.showMovePasswordsDialog_ = false;
    }
    showImportPasswordsOption_() {
        if (!this.groups_ || this.passwordManagerDisabled_) {
            return false;
        }
        return this.groups_.length === 0;
    }
    computeImportPasswordsText_() {
        if (this.isAccountStoreUser) {
            return this.i18nAdvanced('emptyStateImportAccountStore');
        }
        if (this.isSyncingPasswords) {
            return this.i18nAdvanced('emptyStateImportSyncing', {
                substitutions: [
                    this.i18n('localPasswordManager'),
                    this.accountEmail,
                ],
            });
        }
        return this.i18nAdvanced('emptyStateImportDevice');
    }
    updateImportPasswordsLink_() {
        const importLink = this.$.importPasswords.querySelector('a');
        // Add an event listener to the import link, points to the import flow.
        assert(importLink);
        importLink.addEventListener('click', (event) => {
            // The action is triggered from a dummy anchor element poining to "#".
            // For that case preventing the default behaviour is required here.
            event.preventDefault();
            const params = new URLSearchParams();
            params.set(UrlParam.START_IMPORT, 'true');
            Router.getInstance().navigateTo(Page.SETTINGS, null, params);
        });
    }
    onPromoClosed_() {
        this.promoCard_ = null;
    }
    computePasswordManagerDisabled_() {
        const pref = this.getPref('credentials_enable_service');
        return pref.enforcement === chrome.settingsPrivate.Enforcement.ENFORCED &&
            !pref.value;
    }
    computeShowPasswordsDescription_() {
        return !this.searchTerm_ && this.groups_.length > 0;
    }
    showNoPasswordsFound_() {
        return this.hideGroupsList_() && this.groups_.length > 0;
    }
    getMovePasswordsDialogTrigger_() {
        return MoveToAccountStoreTrigger
            .EXPLICITLY_TRIGGERED_FOR_MULTIPLE_PASSWORDS_IN_SETTINGS;
    }
    onPasswordDetailsShown_(e) {
        this.activeListItem_ = e.detail;
    }
    focusConfigChanged_(_newConfig, oldConfig) {
        // focusConfig is set only once on the parent, so this observer should
        // only fire once.
        assert(!oldConfig);
        this.focusConfig.set(Page.PASSWORD_DETAILS, () => {
            if (!this.activeListItem_) {
                return;
            }
            focusWithoutInk(this.activeListItem_);
        });
    }
    computeSortFunction_(searchTerm) {
        // Keep current order when not searching.
        if (!searchTerm) {
            return null;
        }
        // Always show group with matching name in the top, fallback to alphabetical
        // order when matching type is the same.
        return function (a, b) {
            const doesNameMatchA = a.name.toLowerCase().includes(searchTerm);
            const doesNameMatchB = b.name.toLowerCase().includes(searchTerm);
            if (doesNameMatchA === doesNameMatchB) {
                return a.name.localeCompare(b.name);
            }
            return doesNameMatchA ? -1 : 1;
        };
    }
    computeShouldShowPromoCard_() {
        if (!this.promoCard_) {
            return false;
        }
        if (this.promoCard_.id !== PromoCardId.MOVE_PASSWORDS) {
            return true;
        }
        // Check if there are local passwords and they can be moved to account.
        if (this.computePasswordsOnDevice_().length === 0 ||
            !this.isAccountStoreUser) {
            return false;
        }
        return true;
    }
}
customElements.define(PasswordsSectionElement.is, PasswordsSectionElement);
