// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_menu_selector/cr_menu_selector.js';
import 'chrome://resources/cr_elements/cr_nav_menu_item_style.css.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import './icons.html.js';
import { HelpBubbleMixin } from 'chrome://resources/cr_components/help_bubble/help_bubble_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PasswordManagerImpl } from './password_manager_proxy.js';
import { Page, RouteObserverMixin, Router, UrlParam } from './router.js';
import { getTemplate } from './side_bar.html.js';
/**
 * Represents different referrers when navigating to the Password Check page.
 *
 * These values are persisted to logs. Entries should not be renumbered and
 * numeric values should never be reused.
 *
 * Needs to stay in sync with PasswordCheckReferrer in enums.xml and
 * password_check_referrer.h.
 */
var PasswordCheckReferrer;
(function (PasswordCheckReferrer) {
    PasswordCheckReferrer[PasswordCheckReferrer["SAFETY_CHECK"] = 0] = "SAFETY_CHECK";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_SETTINGS"] = 1] = "PASSWORD_SETTINGS";
    PasswordCheckReferrer[PasswordCheckReferrer["PHISH_GUARD_DIALOG"] = 2] = "PHISH_GUARD_DIALOG";
    PasswordCheckReferrer[PasswordCheckReferrer["PASSWORD_BREACH_DIALOG"] = 3] = "PASSWORD_BREACH_DIALOG";
    // Must be last.
    PasswordCheckReferrer[PasswordCheckReferrer["COUNT"] = 4] = "COUNT";
})(PasswordCheckReferrer || (PasswordCheckReferrer = {}));
const PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID = 'PasswordManagerUI::kSettingsMenuItemElementId';
const PasswordManagerSideBarElementBase = HelpBubbleMixin(RouteObserverMixin(PolymerElement));
export class PasswordManagerSideBarElement extends PasswordManagerSideBarElementBase {
    constructor() {
        super(...arguments);
        this.insecureCredentialsChangedListener_ = null;
    }
    static get is() {
        return 'password-manager-side-bar';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            // The id of the currently selected page.
            selectedPage_: String,
            // The count of compromised passwords currently known to the password
            // manager.
            compromisedPasswords_: Number,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.insecureCredentialsChangedListener_ = insecureCredentials => {
            const compromisedTypes = [
                chrome.passwordsPrivate.CompromiseType.LEAKED,
                chrome.passwordsPrivate.CompromiseType.PHISHED,
            ];
            this.compromisedPasswords_ =
                insecureCredentials
                    .filter(cred => {
                    return !cred.compromisedInfo.isMuted &&
                        cred.compromisedInfo.compromiseTypes.some(type => {
                            return compromisedTypes.includes(type);
                        });
                })
                    .length;
            this.registerHelpBubble(PASSWORD_MANAGER_SETTINGS_MENU_ITEM_ELEMENT_ID, this.$.settings);
        };
        PasswordManagerImpl.getInstance().getInsecureCredentials().then(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().addInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        assert(this.insecureCredentialsChangedListener_);
        PasswordManagerImpl.getInstance().removeInsecureCredentialsListener(this.insecureCredentialsChangedListener_);
        this.insecureCredentialsChangedListener_ = null;
    }
    currentRouteChanged(route, _) {
        this.selectedPage_ = route.page;
    }
    onSelectorActivate_(event) {
        Router.getInstance().navigateTo(event.detail.selected);
        if (event.detail.selected === Page.CHECKUP) {
            const params = new URLSearchParams();
            params.set(UrlParam.START_CHECK, 'true');
            Router.getInstance().updateRouterParams(params);
            chrome.metricsPrivate.recordEnumerationValue('PasswordManager.BulkCheck.PasswordCheckReferrer', PasswordCheckReferrer.PASSWORD_SETTINGS, PasswordCheckReferrer.COUNT);
        }
        this.dispatchEvent(new CustomEvent('close-drawer', { bubbles: true, composed: true }));
    }
    getSelectedPage_() {
        switch (this.selectedPage_) {
            case Page.CHECKUP_DETAILS:
                return Page.CHECKUP;
            case Page.PASSWORD_DETAILS:
                return Page.PASSWORDS;
            default:
                return this.selectedPage_;
        }
    }
    /**
     * Prevent clicks on sidebar items from navigating. These are only links for
     * accessibility purposes, taps are handled separately by <iron-selector>.
     */
    onItemClick_(e) {
        e.preventDefault();
    }
    getCompromisedPasswordsBadge_() {
        if (this.compromisedPasswords_ > 99) {
            return '99+';
        }
        return String(this.compromisedPasswords_);
    }
}
customElements.define(PasswordManagerSideBarElement.is, PasswordManagerSideBarElement);
