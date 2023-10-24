// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design offline login.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_dialog/cr_dialog.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '../../components/gaia_header.js';
import '../../components/gaia_input_form.js';
import '../../components/gaia_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeContentDialog} from '../../components/dialogs/oobe_content_dialog.js';


const DEFAULT_EMAIL_DOMAIN = '@gmail.com';
const INPUT_EMAIL_PATTERN =
    '^[a-zA-Z0-9.!#$%&\'*+=?^_`\\{\\|\\}~\\-]+(@[^\\s@]+)?$';

const LOGIN_SECTION = {
  EMAIL: 'emailSection',
  PASSWORD: 'passwordSection',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const OfflineLoginBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @typedef {{
 *   emailInput: CrInputElement,
 *   passwordInput: CrInputElement,
 *   dialog: OobeContentDialog,
 *   forgotPasswordDlg: CrDialogElement,
 *   onlineRequiredDialog: CrDialogElement,
 * }}
 */
OfflineLoginBase.$;

/**
 * @polymer
 */
class OfflineLogin extends OfflineLoginBase {
  static get is() {
    return 'offline-login-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2015 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  Offline UI for the Login flow.
  Contains two cards with a slide transition between them:
    1. Email input form.
    2. Password input form.

  Example:
    <offline-login-element></offline-login-element>

  Attributes:
    'showEnterpriseMessage' - If the "manged by" message should be shown.
    'manager' - The entity (email or domain) the device is managed by.
    'emailDomain' - autocomplete domain for the email input.

  Events:
    'authCompleted' - fired when user enters login and password. Fires with an
                      argument |credentials| which contains.
                      |credentials| = { 'useOffline': true,
                                        'email': <email>,
                                        'password': <typed password> }
                      If user did not type domain |email| will be added by
                      "@gmail.com" or by 'emailDomain' if it is set.
  Methods:
    'focus' - focuses current screen (email input or password input);
    'setEmail' - accepts an argument |email|. If |email| is empty it sets
                 current screen to the email input, otherwise it sets current
                 screen to password input and shows error that previously
                 entered password is incorrect.
-->
<style include="cr-shared-style oobe-dialog-host-styles cros-color-overrides">
  :host {
    --offline-login-dialog-width: 100%;
    --offline-login-animation-margin: 50%;
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
    position: relative;
  }

  #forgotPasswordDlg::part(dialog) {
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: var(--oobe-default-font-size);
    font-weight: var(--oobe-default-font-weight);
    line-height: var(--oobe-default-line-height);
    width: 384px;
  }

  cr-input {
    --cr-input-padding-start: 0px;
  }

  :host-context(.jelly-enabled) cr-input#emailInput, cr-input#passwordInput {
    --cr-input-background-color: var(--cros-sys-input_field_on_shaded);
  }

  /* icon, title, subtitle styles must approximate current Gaia style. */

  #icon {
    height: 32px;
    margin: 60px 64px 0 64px;
  }

  #title-container {
    padding-top: 20px;
  }

  h1 {
    color: var(--oobe-header-text-color);
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-header-font-size);
    font-weight: var(--oobe-header-font-weight);
    line-height: var(--oobe-header-line-height);
    margin: 0;
  }

  #subtitle-container {
    padding-top: 8px;
  }

  #subtitle-container * {
    color: var(--oobe-subheader-text-color);
    line-height: var(--subtitle-line-height);
    margin: 0;
  }

  /** ******** Animations ******* */

  /*
   * Normally, only e-mail section is animated, pushing password section to
   * the right outside of visible area.
   */

  /* Fixed window over sliding content in #animation-inner-container. */
  #animation-outer-container {
    overflow: hidden;
    width: var(--offline-login-dialog-width);
  }

  #animation-inner-container {
    width: calc(2 * var(--offline-login-dialog-width));
  }

  .section {
    --section-padding: var(--oobe-dialog-content-padding);
    --section-width: var(--offline-login-animation-margin);
    animation-duration: 700ms;
    box-sizing: border-box;
    display: none;
    /*
     * For sliding to work correctly we need fixed size of moving objects.
     */
    max-width: var(--section-width);
    min-width: var(--section-width);
    padding: 0 var(--section-padding);
  }

  @keyframes show-from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes show-from-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes hide-to-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  @keyframes hide-to-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  oobe-content-dialog[selected='emailSection'] #email-section,
  oobe-content-dialog[selected='passwordSection'] #password-section {
    display: block;
  }

  /*
   * When dialog first appears, no animation needed.
   * Dialog always starts with e-mail section visible, so only "show"
   * animation depends on |animation-in-progress| attribute.
   */
  oobe-content-dialog[animation-in-progress] .section {
    animation-name: show-from-left;
  }

  oobe-content-dialog[selected='passwordSection'] .section {
    animation-name: hide-to-left;
  }

  :host([rtl]) oobe-content-dialog[animation-in-progress] .section {
    animation-name: show-from-right;
  }

  :host([rtl]) oobe-content-dialog[selected='passwordSection'] .section {
    animation-name: hide-to-right;
  }

  /** During animation all sections should be visible. */
  oobe-content-dialog[animation-in-progress] .section {
    display: block;
  }

  #forgotPasswordDlg cr-button.action-button {
    border-radius: var(--oobe-button-radius);
    font-family: var(--oobe-button-font-family);
    font-size: var(--oobe-button-font-size);
    font-weight: var(--oobe-button-font-weight);
    line-height: var(--oobe-button-line-height);
  }
</style>
<oobe-content-dialog role="dialog" selected$="[[activeSection]]"
    id="dialog" no-footer-padding
    animation-in-progress$="[[animationInProgress]]">
  <div slot="content">
    <img id="icon" src="chrome://theme/IDR_LOGO_GOOGLE_COLOR_90" alt="">
  </div>
  <div id="animation-outer-container" slot="content">
    <div id="animation-inner-container" class="flex layout horizontal">
      <div id="email-section" class="section"
          on-animationend="onSlideAnimationEnd_">
        <div id="title-container" class="layout vertical end-justified">
          <h1>[[i18nDynamic(locale, 'loginWelcomeMessage')]]</h1>
        </div>
        <div id="subtitle-container">
          <div id="managedBy" class="enterprise-info"
              hidden$="[[!manager]]">
              [[i18nDynamic(locale, 'enterpriseInfoMessage', manager)]]
          </div>
        </div>
        <gaia-input-form id="email-input-form"
            on-submit="onNextButtonClicked_" disabled="[[disabled]]">
          <cr-input slot="inputs" id="emailInput" value="{{email_}}"
              required error-message="[[i18nDynamic(
                  locale, 'offlineLoginInvalidEmail')]]"
              placeholder="[[i18nDynamic(locale, 'offlineLoginEmail')]]">
            <span slot="inline-suffix">[[displayDomain_]]</span>
          </cr-input>
        </gaia-input-form>
      </div>
      <div id="password-section" class="section">
        <div id="title-container" class="layout vertical end-justified">
          <gaia-header id="passwordHeader" email="[[fullEmail_]]">
          </gaia-header>
        </div>
        <div id="subtitle-container">
        </div>
        <gaia-input-form id="password-input-form"
            on-submit="onNextButtonClicked_" disabled="[[disabled]]">
          <cr-input slot="inputs" id="passwordInput" value="{{password_}}"
              type="password" required error-message="[[i18nDynamic(
                  locale, 'offlineLoginInvalidPassword')]]"
              placeholder="[[i18nDynamic(locale, 'offlineLoginPassword')]]">
          </cr-input>
          <gaia-button on-click="onForgotPasswordClicked_" link>
            [[i18nDynamic(locale, 'offlineLoginForgotPasswordBtn')]]
          </gaia-button>
        </gaia-input-form>
      </div>
    </div>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" disabled="[[disabled]]"
        on-click="onBackButtonClicked_"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton" disabled="[[disabled]]"
        on-click="onNextButtonClicked_"></oobe-next-button>
  </div>
</oobe-content-dialog>
<cr-dialog id="forgotPasswordDlg"
    on-close="onDialogOverlayClosed_">
  <div slot="body">
    [[i18nDynamic(locale, 'offlineLoginForgotPasswordDlg')]]
  </div>
  <div slot="button-container">
    <cr-button autofocus on-click="onForgotPasswordCloseTap_"
        class="action-button">
      [[i18nDynamic(locale, 'offlineLoginCloseBtn')]]
    </cr-button>
  </div>
</cr-dialog>
<cr-dialog id="onlineRequiredDialog"
    on-close="onDialogOverlayClosed_">
  <div slot="title">
    [[i18nDynamic(locale, 'offlineLoginWarningTitle')]]
  </div>
  <div slot="body">
    [[i18nDynamic(locale, 'offlineLoginWarning', manager, email_)]]
  </div>
  <div slot="button-container">
    <cr-button autofocus on-click="onOnlineRequiredDialogCloseTap_"
        id="offlineWarningBackButton" class="action-button">
      [[i18nDynamic(locale, 'offlineLoginOkBtn')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false,
      },

      /**
       * Domain manager.
       * @type {?string}
       */
      manager: {
        type: String,
        value: '',
      },

      /**
       * E-mail domain including initial '@' sign.
       * @type {?string}
       */
      emailDomain: {
        type: String,
        value: '',
      },

      /**
       * |domain| or empty string, depending on |email_| value.
       */
      displayDomain_: {
        type: String,
        computed: 'computeDomain_(emailDomain, email_)',
      },

      /**
       * Current value of e-mail input field.
       */
      email_: {
        type: String,
        value: '',
      },

      /**
       * Current value of password input field.
       */
      password_: {
        type: String,
        value: '',
      },

      /**
       * Proper e-mail with domain, displayed on password page.
       */
      fullEmail_: {
        type: String,
        value: '',
      },

      activeSection: {
        type: String,
        value: LOGIN_SECTION.EMAIL,
      },

      animationInProgress: {
        type: Boolean,
        value: false,
      },
    };
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return ['reset',
            'proceedToPasswordPage',
            'showOnlineRequiredDialog',
            'showPasswordMismatchMessage',
          ];
  }
  // clang-format on

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('OfflineLoginScreen');
  }

  attached() {
    super.attached();
    if (this.isRTL_()) {
      this.setAttribute('rtl', '');
    }
  }

  focus() {
    if (this.isEmailSectionActive_()) {
      this.$.emailInput.focusInput();
    } else {
      this.$.passwordInput.focusInput();
    }
  }

  back() {
    this.switchToEmailCard(true /* animated */);
  }

  cancel() {
    if (this.disabled) {
      return;
    }
    this.onBackButtonClicked_();
  }

  /**
   *
   * @param {Object} params
   */
  onBeforeShow(params) {
    this.reset();
    if ('enterpriseDomainManager' in params) {
      this.manager = params['enterpriseDomainManager'];
    }
    if ('emailDomain' in params) {
      this.emailDomain = '@' + params['emailDomain'];
    }
    this.$.emailInput.pattern = INPUT_EMAIL_PATTERN;
    if (!this.email_) {
      this.switchToEmailCard(false /* animated */);
    }
  }

  reset() {
    this.animationInProgress = false;
    this.disabled = false;
    this.emailDomain = '';
    this.manager = '';
    this.email_ = '';
    this.fullEmail_ = '';
    this.$.emailInput.invalid = false;
    this.$.passwordInput.invalid = false;
    this.activeSection = LOGIN_SECTION.EMAIL;
  }

  proceedToPasswordPage() {
    this.switchToPasswordCard(true /* animated */);
  }

  showOnlineRequiredDialog() {
    this.disabled = true;
    this.$.onlineRequiredDialog.showModal();
  }

  onForgotPasswordClicked_() {
    this.disabled = true;
    this.$.forgotPasswordDlg.showModal();
  }

  onForgotPasswordCloseTap_() {
    this.$.forgotPasswordDlg.close();
  }

  onOnlineRequiredDialogCloseTap_() {
    this.$.onlineRequiredDialog.close();
    this.userActed('cancel');
  }

  onDialogOverlayClosed_() {
    this.disabled = false;
  }

  isRTL_() {
    return !!document.querySelector('html[dir=rtl]');
  }

  isEmailSectionActive_() {
    return this.activeSection == LOGIN_SECTION.EMAIL;
  }

  /**
   * @param {boolean} animated
   */
  switchToEmailCard(animated) {
    this.$.emailInput.invalid = false;
    this.$.passwordInput.invalid = false;
    this.password_ = '';
    if (this.isEmailSectionActive_()) {
      return;
    }

    this.animationInProgress = animated;
    this.disabled = animated;
    this.activeSection = LOGIN_SECTION.EMAIL;
  }

  /**
   * @param {boolean} animated
   */
  switchToPasswordCard(animated) {
    if (!this.isEmailSectionActive_()) {
      return;
    }

    this.animationInProgress = animated;
    this.disabled = animated;
    this.activeSection = LOGIN_SECTION.PASSWORD;
  }

  onSlideAnimationEnd_() {
    this.animationInProgress = false;
    this.disabled = false;
    this.focus();
  }

  onEmailSubmitted_() {
    if (this.$.emailInput.validate()) {
      this.fullEmail_ = this.computeFullEmail_(this.email_);
      this.userActed(['email-submitted', this.fullEmail_]);
    } else {
      this.$.emailInput.focusInput();
    }
  }

  onPasswordSubmitted_() {
    if (!this.$.passwordInput.validate()) {
      return;
    }
    this.email_ = this.fullEmail_;
    this.userActed(['complete-authentication', this.email_, this.password_]);
    this.disabled = true;
  }

  onBackButtonClicked_() {
    if (!this.isEmailSectionActive_()) {
      this.switchToEmailCard(true);
    } else {
      this.userActed('cancel');
    }
  }

  onNextButtonClicked_() {
    if (this.isEmailSectionActive_()) {
      this.onEmailSubmitted_();
      return;
    }
    this.onPasswordSubmitted_();
  }

  /**
   * @param {string} domain
   * @param {string} email
   */
  computeDomain_(domain, email) {
    if (email && email.indexOf('@') !== -1) {
      return '';
    }
    return domain;
  }

  /**
   * @param {string} email
   */
  computeFullEmail_(email) {
    if (email.indexOf('@') === -1) {
      if (this.emailDomain) {
        email = email + this.emailDomain;
      } else {
        email = email + DEFAULT_EMAIL_DOMAIN;
      }
    }
    return email;
  }

  showPasswordMismatchMessage() {
    this.$.passwordInput.invalid = true;
    this.disabled = false;
    this.$.passwordInput.focusInput();
  }

  /**
   * @param {string} email
   */
  setEmailForTest(email) {
    this.email_ = email;
  }
}

customElements.define(OfflineLogin.is, OfflineLogin);
