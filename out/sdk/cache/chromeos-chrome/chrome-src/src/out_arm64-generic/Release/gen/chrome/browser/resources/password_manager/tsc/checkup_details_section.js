// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import 'chrome://resources/cr_elements/cr_expand_button/cr_expand_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import './shared_style.css.js';
import './checkup_list_item.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PluralStringProxyImpl } from 'chrome://resources/js/plural_string_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './checkup_details_section.html.js';
import { PasswordCheckInteraction, PasswordManagerImpl } from './password_manager_proxy.js';
import { CheckupSubpage, Page, RouteObserverMixin, Router } from './router.js';
export class ReusedPasswordInfo {
    constructor(credentials) {
        this.credentials = credentials;
    }
    async init() {
        this.title = await PluralStringProxyImpl.getInstance().getPluralString('numberOfPasswordReuse', this.credentials.length);
    }
}
const CheckupDetailsSectionElementBase = PrefsMixin(I18nMixin(RouteObserverMixin(PolymerElement)));
export class CheckupDetailsSectionElement extends CheckupDetailsSectionElementBase {
    constructor() {
        super(...arguments);
        this.groups_ = [];
        this.insecureCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'checkup-details-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            pageTitle_: String,
            insecurityType_: {
                type: String,
                observer: 'updateShownCredentials_',
            },
            allInsecureCredentials_: {
                type: Array,
                observer: 'updateShownCredentials_',
            },
            shownInsecureCredentials_: {
                type: Array,
                observer: 'onCredentialsChanged_',
            },
            credentialsWithReusedPassword_: {
                type: Array,
            },
            /**
             * The ids of insecure credentials for which user clicked "Change
             * Password" button
             */
            clickedChangePasswordIds_: {
                type: Object,
                value: new Set(),
            },
            isMutingDisabled_: {
                type: Boolean,
                computed: 'computeIsMutingDisabled_(' +
                    'prefs.profile.password_dismiss_compromised_alert.value)',
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        const updateGroups = () => {
            PasswordManagerImpl.getInstance().getCredentialGroups().then(groups => this.groups_ = groups);
        };
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            this.allInsecureCredentials_ = insecureCredentials;
            updateGroups();
        };
        updateGroups();
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
    }
    currentRouteChanged(route, oldRoute) {
        if (route.page !== Page.CHECKUP_DETAILS) {
            return;
        }
        this.insecurityType_ = route.details;
        // Focus back button when it's not direct navigation.
        if (oldRoute !== undefined) {
            this.$.backButton.focus();
        }
    }
    navigateBack_() {
        Router.getInstance().navigateTo(Page.CHECKUP);
    }
    async updateShownCredentials_() {
        if (!this.insecurityType_ || !this.allInsecureCredentials_) {
            return;
        }
        const insecureCredentialsForThisType = this.allInsecureCredentials_.filter(cred => cred.compromisedInfo.compromiseTypes.some(type => {
            return this.getInsecurityType_().includes(type);
        }));
        const insuecureCredentialsSorter = (lhs, rhs) => {
            if ((this.getCurrentGroup_(lhs.id)?.name || '') >
                (this.getCurrentGroup_(rhs.id)?.name || '')) {
                return 1;
            }
            return -1;
        };
        if (this.isCompromisedType()) {
            // Compromised credentials can be muted. Show muted credentials
            // separately.
            this.mutedCompromisedCredentials_ = insecureCredentialsForThisType.filter(cred => cred.compromisedInfo.isMuted);
            this.shownInsecureCredentials_ = insecureCredentialsForThisType.filter(cred => !cred.compromisedInfo.isMuted);
        }
        else {
            insecureCredentialsForThisType.sort(insuecureCredentialsSorter);
            this.shownInsecureCredentials_ = insecureCredentialsForThisType;
        }
        if (this.isReusedType()) {
            const allReusedCredentials = await PasswordManagerImpl.getInstance()
                .getCredentialsWithReusedPassword();
            this.credentialsWithReusedPassword_ =
                await Promise.all(allReusedCredentials.map(async (credentials) => {
                    const reuseInfo = new ReusedPasswordInfo(credentials.entries.sort(insuecureCredentialsSorter));
                    await reuseInfo.init();
                    return reuseInfo;
                }));
            this.credentialsWithReusedPassword_.sort((lhs, rhs) => (lhs.credentials.length > rhs.credentials.length ? -1 : 1));
        }
    }
    async onCredentialsChanged_() {
        assert(this.insecurityType_);
        this.pageTitle_ = await PluralStringProxyImpl.getInstance().getPluralString(this.insecurityType_.concat('Passwords'), this.shownInsecureCredentials_.length);
    }
    getInsecurityType_() {
        assert(this.insecurityType_);
        switch (this.insecurityType_) {
            case CheckupSubpage.COMPROMISED:
                return [
                    chrome.passwordsPrivate.CompromiseType.LEAKED,
                    chrome.passwordsPrivate.CompromiseType.PHISHED,
                ];
            case CheckupSubpage.REUSED:
                return [chrome.passwordsPrivate.CompromiseType.REUSED];
            case CheckupSubpage.WEAK:
                return [chrome.passwordsPrivate.CompromiseType.WEAK];
        }
    }
    getSubTitle_() {
        assert(this.insecurityType_);
        return this.i18n(`${this.insecurityType_}PasswordsTitle`);
    }
    getDescription_() {
        assert(this.insecurityType_);
        return this.i18n(`${this.insecurityType_}PasswordsDescription`);
    }
    isCompromisedType() {
        return this.insecurityType_ === CheckupSubpage.COMPROMISED;
    }
    isReusedType() {
        return this.insecurityType_ === CheckupSubpage.REUSED;
    }
    onMoreActionsClick_(event) {
        const target = event.detail.target;
        this.$.moreActionsMenu.showAt(target);
        this.activeListItem_ =
            event.detail.listItem;
    }
    onMenuShowPasswordClick_() {
        this.activeListItem_?.showHidePassword();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.SHOW_PASSWORD);
    }
    async onMenuEditPasswordClick_() {
        this.activeListItem_?.showEditDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.EDIT_PASSWORD);
    }
    async onMenuDeletePasswordClick_() {
        this.activeListItem_?.showDeleteDialog();
        this.$.moreActionsMenu.close();
        this.activeListItem_ = null;
    }
    getShowHideTitle_() {
        return this.activeListItem_?.getShowHideButtonLabel() || '';
    }
    computeIsMutingDisabled_() {
        return !this.getPref('profile.password_dismiss_compromised_alert').value;
    }
    getMuteUnmuteLabel_() {
        return this.activeListItem_?.item.compromisedInfo?.isMuted === true ?
            this.i18n('unmuteCompromisedPassword') :
            this.i18n('muteCompromisedPassword');
    }
    onMenuMuteUnmuteClick_() {
        assert(this.activeListItem_);
        if (this.activeListItem_.item.compromisedInfo?.isMuted === true) {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.UNMUTE_PASSWORD);
            PasswordManagerImpl.getInstance().unmuteInsecureCredential(this.activeListItem_.item);
        }
        else {
            PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.MUTE_PASSWORD);
            PasswordManagerImpl.getInstance().muteInsecureCredential(this.activeListItem_.item);
        }
        this.$.moreActionsMenu.close();
    }
    getCurrentGroup_(id) {
        return this.groups_.find(group => group.entries.some(entry => entry.id === id));
    }
    onChangePasswordClick_(event) {
        this.clickedChangePasswordIds_.add(event.detail);
        this.notifyPath('clickedChangePasswordIds_.size');
        PasswordManagerImpl.getInstance().recordPasswordCheckInteraction(PasswordCheckInteraction.CHANGE_PASSWORD);
    }
    clickedChangePassword_(item) {
        return this.clickedChangePasswordIds_.has(item.id);
    }
}
customElements.define(CheckupDetailsSectionElement.is, CheckupDetailsSectionElement);
