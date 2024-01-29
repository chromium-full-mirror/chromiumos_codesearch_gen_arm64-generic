// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design offline login.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '../../components/gaia_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/dialogs/oobe_content_dialog.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './offline_login.html.js';
const DEFAULT_EMAIL_DOMAIN = '@gmail.com';
const INPUT_EMAIL_PATTERN = '^[a-zA-Z0-9.!#$%&\'*+=?^_`\\{\\|\\}~\\-]+(@[^\\s@]+)?$';
var LoginSection;
(function (LoginSection) {
    LoginSection["EMAIL"] = "emailSection";
    LoginSection["PASSWORD"] = "passwordSection";
})(LoginSection || (LoginSection = {}));
const OfflineLoginBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class OfflineLogin extends OfflineLoginBase {
    static get is() {
        return 'offline-login-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                value: false,
            },
            /**
             * Domain manager.
             */
            manager: {
                type: String,
                value: '',
            },
            /**
             * E-mail domain including initial '@' sign.
             */
            emailDomain: {
                type: String,
                value: '',
            },
            /**
             * |domain| or empty string, depending on |email_| value.
             */
            displayDomain: {
                type: String,
                computed: 'computeDomain(emailDomain, email)',
            },
            /**
             * Current value of e-mail input field.
             */
            email: {
                type: String,
                value: '',
            },
            /**
             * Current value of password input field.
             */
            password: {
                type: String,
                value: '',
            },
            /**
             * Proper e-mail with domain, displayed on password page.
             */
            fullEmail: {
                type: String,
                value: '',
            },
            activeSection: {
                type: String,
                value: LoginSection.EMAIL,
            },
            animationInProgress: {
                type: Boolean,
                value: false,
            },
        };
    }
    get EXTERNAL_API() {
        return [
            'reset',
            'proceedToPasswordPage',
            'showOnlineRequiredDialog',
            'showPasswordMismatchMessage',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('OfflineLoginScreen');
    }
    connectedCallback() {
        super.connectedCallback();
        const rtl = document.querySelector('html[dir=rtl]') != null;
        if (rtl) {
            this.setAttribute('rtl', '');
        }
    }
    focus() {
        if (this.isEmailSectionActive()) {
            this.shadowRoot.querySelector('#emailInput').focusInput();
        }
        else {
            this.shadowRoot.querySelector('#passwordInput').focusInput();
        }
    }
    back() {
        this.switchToEmailCard(true /* animated */);
    }
    cancel() {
        if (this.disabled) {
            return;
        }
        this.onBackButtonClicked();
    }
    onBeforeShow(params) {
        this.reset();
        if ('enterpriseDomainManager' in params) {
            this.manager = params['enterpriseDomainManager'];
        }
        if ('emailDomain' in params) {
            this.emailDomain = '@' + params['emailDomain'];
        }
        this.shadowRoot.querySelector('#emailInput').pattern =
            INPUT_EMAIL_PATTERN;
        if (!this.email) {
            this.switchToEmailCard(false /* animated */);
        }
    }
    reset() {
        this.animationInProgress = false;
        this.disabled = false;
        this.emailDomain = '';
        this.manager = '';
        this.email = '';
        this.fullEmail = '';
        this.shadowRoot.querySelector('#emailInput').invalid =
            false;
        this.shadowRoot.querySelector('#passwordInput').invalid =
            false;
        this.activeSection = LoginSection.EMAIL;
    }
    proceedToPasswordPage() {
        this.switchToPasswordCard(true /* animated */);
    }
    showOnlineRequiredDialog() {
        this.disabled = true;
        this.shadowRoot.querySelector('#onlineRequiredDialog').showModal();
    }
    onForgotPasswordClicked() {
        this.disabled = true;
        this.shadowRoot.querySelector('#forgotPasswordDlg').showModal();
    }
    onForgotPasswordCloseClicked() {
        this.shadowRoot.querySelector('#forgotPasswordDlg').close();
    }
    onOnlineRequiredDialogCloseClicked() {
        this.shadowRoot.querySelector('#onlineRequiredDialog').close();
        this.userActed('cancel');
    }
    onDialogOverlayClosed() {
        this.disabled = false;
    }
    isEmailSectionActive() {
        return this.activeSection == LoginSection.EMAIL;
    }
    switchToEmailCard(animated) {
        this.shadowRoot.querySelector('#emailInput').invalid =
            false;
        this.shadowRoot.querySelector('#passwordInput').invalid =
            false;
        this.password = '';
        if (this.isEmailSectionActive()) {
            return;
        }
        this.animationInProgress = animated;
        this.disabled = animated;
        this.activeSection = LoginSection.EMAIL;
    }
    switchToPasswordCard(animated) {
        if (!this.isEmailSectionActive()) {
            return;
        }
        this.animationInProgress = animated;
        this.disabled = animated;
        this.activeSection = LoginSection.PASSWORD;
    }
    onSlideAnimationEnd() {
        this.animationInProgress = false;
        this.disabled = false;
        this.focus();
    }
    onEmailSubmitted() {
        if (this.shadowRoot.querySelector('#emailInput').validate()) {
            this.fullEmail = this.computeFullEmail(this.email);
            this.userActed(['email-submitted', this.fullEmail]);
        }
        else {
            this.shadowRoot.querySelector('#emailInput').focusInput();
        }
    }
    onPasswordSubmitted() {
        if (!this.shadowRoot.querySelector('#passwordInput').validate()) {
            return;
        }
        this.email = this.fullEmail;
        this.userActed(['complete-authentication', this.email, this.password]);
        this.disabled = true;
    }
    onBackButtonClicked() {
        if (!this.isEmailSectionActive()) {
            this.switchToEmailCard(true);
        }
        else {
            this.userActed('cancel');
        }
    }
    onNextButtonClicked() {
        if (this.isEmailSectionActive()) {
            this.onEmailSubmitted();
            return;
        }
        this.onPasswordSubmitted();
    }
    computeDomain(domain, email) {
        if (email && email.indexOf('@') !== -1) {
            return '';
        }
        return domain;
    }
    computeFullEmail(email) {
        if (email.indexOf('@') === -1) {
            if (this.emailDomain) {
                email = email + this.emailDomain;
            }
            else {
                email = email + DEFAULT_EMAIL_DOMAIN;
            }
        }
        return email;
    }
    showPasswordMismatchMessage() {
        this.shadowRoot.querySelector('#passwordInput').invalid =
            true;
        this.disabled = false;
        this.shadowRoot.querySelector('#passwordInput').focusInput();
    }
    setEmailForTest(email) {
        this.email = email;
    }
    onKeyDown(e) {
        if (e.keyCode != 13 || this.disabled) {
            return;
        }
        this.onNextButtonClicked();
    }
}
customElements.define(OfflineLogin.is, OfflineLogin);
