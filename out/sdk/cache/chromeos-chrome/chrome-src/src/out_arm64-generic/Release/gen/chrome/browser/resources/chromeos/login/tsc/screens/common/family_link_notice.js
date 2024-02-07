// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for Family Link Notice screen.
 */
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './family_link_notice.html.js';
export const FamilyLinkScreenElementBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class FamilyLinkNotice extends FamilyLinkScreenElementBase {
    static get is() {
        return 'family-link-notice-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * If the gaia account is newly created
             */
            isNewGaiaAccount_: {
                type: Boolean,
                value: false,
            },
            /**
             * The email address to be displayed
             */
            email_: {
                type: String,
                value: '',
            },
            /**
             * The enterprise domain to be displayed
             */
            domain_: {
                type: String,
                value: '',
            },
        };
    }
    get EXTERNAL_API() {
        return [
            'setDisplayEmail',
            'setDomain',
            'setIsNewGaiaAccount',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('FamilyLinkNoticeScreen');
    }
    /**
     * Returns default event target element.
     */
    get defaultControl() {
        return this.shadowRoot.querySelector('#familyLinkDialog');
    }
    /**
     * Sets email address.
     */
    setDisplayEmail(email) {
        this.email_ = email;
    }
    /**
     * Sets enterprise domain.
     */
    setDomain(domain) {
        this.domain_ = domain;
    }
    /**
     * Sets if the gaia account is newly created.
     */
    setIsNewGaiaAccount(isNewGaiaAccount) {
        this.isNewGaiaAccount_ = isNewGaiaAccount;
    }
    /**
     * Returns the title of the dialog based on if account is managed. Account is
     * managed when email or domain field is not empty and we show parental
     * controls is not eligible.
     */
    getDialogTitle_(locale, email, domain) {
        if (email || domain) {
            return this.i18nDynamic(locale, 'familyLinkDialogNotEligibleTitle');
        }
        else {
            return this.i18nDynamic(locale, 'familyLinkDialogTitle');
        }
    }
    /**
     * Formats and returns the subtitle of the dialog based on if account is
     * managed or if account is newly created. Account is managed when email or
     * domain field is not empty and we show parental controls is not eligible.
     */
    getDialogSubtitle_(locale, isNewGaiaAccount, email, domain) {
        if (email || domain) {
            return this.i18n('familyLinkDialogNotEligibleSubtitle', email, domain);
        }
        else {
            if (isNewGaiaAccount) {
                return this.i18nDynamic(locale, 'familyLinkDialogNewGaiaAccountSubtitle');
            }
            else {
                return this.i18nDynamic(locale, 'familyLinkDialogExistingGaiaAccountSubtitle');
            }
        }
    }
    /**
     * On-tap event handler for Continue button.
     *
     */
    onContinueButtonPressed_() {
        this.userActed('continue');
    }
}
customElements.define(FamilyLinkNotice.is, FamilyLinkNotice);
