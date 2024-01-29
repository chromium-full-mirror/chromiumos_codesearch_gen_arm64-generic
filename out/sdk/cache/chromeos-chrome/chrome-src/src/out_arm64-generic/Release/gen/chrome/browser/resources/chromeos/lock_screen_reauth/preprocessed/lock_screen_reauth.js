// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview An UI component to let user init online re-auth flow on
 * the lock screen.
 */

import 'chrome://resources/ash/common/cr.m.js';
import 'chrome://resources/ash/common/event_target.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import './components/buttons/oobe_text_button.js';
import './components/oobe_icons.html.js';
import './components/oobe_illo_icons.html.js';
import './gaia_action_buttons/gaia_action_buttons.js';
import '//resources/cr_elements/policy/cr_tooltip_icon.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';

import {assert} from 'chrome://resources/ash/common/assert.js';
import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {sendWithPromise} from 'chrome://resources/js/cr.js';
import {loadTimeData} from 'chrome://resources/js/load_time_data.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {Authenticator, AuthFlow, AuthMode, AuthParams, SUPPORTED_PARAMS} from '../../gaia_auth_host/authenticator.js';

const clearDataType = {
  appcache: true,
  cache: true,
  cookies: true,
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const LockReauthBase = mixinBehaviors([I18nBehavior], PolymerElement);

/**
 * @polymer
 */
class LockReauth extends LockReauthBase {
  static get is() {
    return 'lock-reauth';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!-- TODO(b/259386106): reduce duplication with login screen code -->
<style>
  :host {
    --lock-screen-reauth-dialog-buttons-horizontal-padding: 40px;
    --lock-screen-reauth-dialog-buttons-vertical-padding: 25px;
    --lock-screen-reauth-dialog-content-padding: 40px;
    --lock-screen-reauth-dialog-icon-size: 32px;
    --lock-screen-reauth-dialog-text-line-height: 18px;
    --lock-screen-reauth-dialog-title-top-padding: 40px;
    --lock-screen-reauth-back-button-height: calc(
        var(--lock-screen-reauth-dialog-buttons-vertical-padding) +
        var(--cr-button-height));
    --lock-screen-reauth-dialog-header-top-padding: calc(
        var(--lock-screen-reauth-dialog-content-padding) +
        var(--lock-screen-reauth-back-button-height));
    height: 100%;
    left: 0;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  :host-context([orientation=horizontal]) {
    --button-alignment: flex-end;
    --lock-screen-reauth-dialog-content-direction: row;
    --lock-screen-reauth-dialog-item-alignment: unset;
    --lock-screen-reauth-dialog-title-top-padding: 40px;
    --lock-screen-reauth-text-alignment: start;
    --lock-screen-reauth-dialog-content-top-padding: calc(
        var(--lock-screen-reauth-dialog-header-top-padding) +
        var(--lock-screen-reauth-dialog-title-top-padding) +
        var(--lock-screen-reauth-dialog-icon-size));
    /* Header takes 40% of the width remaining after applying padding */
    --lock-screen-reauth-dialog-header-width: clamp(302px,
    calc(0.4 * (var(--lock-screen-reauth-dialog-width) -
    4 * var(--lock-screen-reauth-dialog-content-padding))), 346px);
    --lock-screen-reauth-dialog-content-width: calc(
        var(--lock-screen-reauth-dialog-width) -
        4 * var(--lock-screen-reauth-dialog-content-padding) -
        var(--lock-screen-reauth-dialog-header-width));
  }

  :host-context([orientation=vertical]) {
    --button-alignment: center;
    --lock-screen-reauth-dialog-content-direction: column;
    --lock-screen-reauth-dialog-content-top-padding:
        var(--lock-screen-reauth-dialog-buttons-vertical-padding);
    --lock-screen-reauth-dialog-item-alignment: center;
    --lock-screen-reauth-dialog-title-top-padding: 15px;
    --lock-screen-reauth-text-alignment: center;
    --lock-screen-reauth-dialog-content-width: calc(
        var(--lock-screen-reauth-dialog-width) -
        2 * var(--lock-screen-reauth-dialog-content-padding));
    /* Header takes 70% of the width remaining after applying padding */
    --lock-screen-reauth-dialog-header-width: clamp(346px,
    calc(0.7 * (var(--lock-screen-reauth-dialog-width) -
    2 * var(--lock-screen-reauth-dialog-content-padding))), 520px);
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .main-container {
    align-items: var(--lock-screen-reauth-dialog-item-alignment);
    display: flex;
    flex: 1;
    flex-direction: var(--lock-screen-reauth-dialog-content-direction);
  }

  #body {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    width: 100%;
  }

  #samlContainer {
    /* #FFFFFF */
    background: rgb(255, 255, 255);
    /* #000000 */
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.17);
    display: flex;
  }

  #samlHeader {
    display: flex;
    flex-grow: 1;
    height: 44px;
    justify-content: flex-end;
    text-align: center;
  }

  #samlHeader[saml-notice-message] {
    /* #FFFFFF */
    background: white;
  }

  #samlNoticeMessage {
    /* #6a6a6a */
    color: rgb(106, 106, 106);
    flex: 1;
    font-size: 13px;
    padding-top: 15px;
  }

  #saml-footer-container {
    align-items: center;
    background: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.17);
     /* #6a6a6a */
    color: rgb(106, 106, 106);
    display: flex;
    height: 58px;
    justify-content: flex-end;
    min-height: 0;
  }

  #saml-close-button {
    --cr-icon-button-margin-end: 0;
    --cr-icon-button-margin-start: 0;
  }

  #signin-frame {
    flex: 1;
    height: 100%;
    width: 100%;
  }

  #change-account {
    margin: 0 4px;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
  }

  #policyCertIndicator {
    color: rgb(106, 106, 106);
    display: flex;
    padding-inline-start: 15px;
  }

  #policyCertIcon {
    height: 20px;
    padding-top: 8px;
    width: 20px;
  }

  .title-icon {
    /* #1a73e8 */
    --iron-icon-fill-color: rgb(26, 115, 232);
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
    align-self: var(--lock-screen-reauth-dialog-item-alignment);
  }

  .header {
    display: flex;
    flex-direction: column;
    padding-bottom: var(--lock-screen-reauth-dialog-content-padding);
    padding-inline-end: var(--lock-screen-reauth-dialog-content-padding);
    padding-inline-start:
      var(--lock-screen-reauth-dialog-content-padding);
    padding-top: var(--lock-screen-reauth-dialog-header-top-padding);
    width: var(--lock-screen-reauth-dialog-header-width);
  }

  .title {
    color: var(--cros-text-color-primary);
    font-size: 28px;
    font-weight: 400;
    margin: 0;
    padding-top: var(--lock-screen-reauth-dialog-title-top-padding);
    text-align: var(--lock-screen-reauth-text-alignment);
  }

  .subtitle {
    color: var(--cros-text-color-secondary);
    font-size: 13px;
    font-weight: 400;
    line-height: var(--lock-screen-reauth-dialog-text-line-height);
    margin: 0;
    overflow-wrap: break-word;
    padding-top: 15px;
    text-align: var(--lock-screen-reauth-text-alignment);
  }

  .illustration-container {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 0;
    padding-inline-end: var(--lock-screen-reauth-dialog-content-padding);
    padding-inline-start:
      var(--lock-screen-reauth-dialog-content-padding);
    width: var(--lock-screen-reauth-dialog-content-width);
  }

  .illustration {
    height: 100%;
    max-width: 500px;
    object-fit: contain;
    width: 100%;
  }

  .button-container {
    display: flex;
    flex-shrink: 0;
    justify-content: var(--button-alignment);
    min-height: var(--cr-button-height);
    padding-bottom:
      var(--lock-screen-reauth-dialog-buttons-vertical-padding);
    padding-inline-end:
      var(--lock-screen-reauth-dialog-buttons-horizontal-padding);
    padding-inline-start:
      var(--lock-screen-reauth-dialog-buttons-horizontal-padding);
    padding-top:
      var(--lock-screen-reauth-dialog-buttons-vertical-padding);
    z-index: 1;
  }

  [hidden] {
    display: none !important;
  }

  .input-container {
    border: 0;
    flex: 2;
    padding-bottom: 0;
    padding-inline-end: var(--lock-screen-reauth-dialog-content-padding);
    padding-inline-start:
      var(--lock-screen-reauth-dialog-content-padding);
    padding-top: var(--lock-screen-reauth-dialog-content-top-padding);
    width: var(--lock-screen-reauth-dialog-content-width);
  }

  cr-input {
    --cr-input-border-radius: 4px 4px 0 0;
    --cr-input-min-height: 32px;
    max-width: 560px;
    padding-bottom: 8px;
  }

  cr-button {
    border-radius: 16px;
  }

  :host-context([dir=rtl]) #arrowForward {
    transform: rotate(180deg);
  }
</style>
<div class="content-wrapper" hidden="[[!isVerifyUser_]]" role="dialog"
    aria-modal="true" id="verifyAccountScreen"
    aria-label="$i18n{loginWelcomeMessage}">
  <div class="main-container">
    <div class="header">
      <iron-icon class="title-icon" icon="oobe-32:avatar"></iron-icon>
      <div class="title">
        $i18n{loginWelcomeMessage}
      </div>
      <div class="subtitle">
        $i18n{lockScreenReauthSubtitile}
      </div>
    </div>
    <div class="illustration-container">
      <iron-icon icon="oobe-illos:encryption-migration-illo"
          class="illustration">
      </iron-icon>
    </div>
  </div>
  <div class="flex layout horizontal button-container">
    <cr-button id="cancelButtonVerifyScreen" class="cancel-button"
        on-click="onCloseTap_">
      $i18n{lockScreenCancelButton}
    </cr-button>
    <cr-button id="nextButtonVerifyScreen" class="action-button"
        on-click="onVerify_">
      $i18n{lockScreenVerifyButton}
    </cr-button>
  </div>
</div>

<div class="content-wrapper" hidden="[[!isErrorDisplayed_]]" role="dialog"
    aria-modal="true" id="errorScreen"
    aria-label="$i18n{loginWelcomeMessageWithError}">
  <div class="main-container">
    <div class="header">
      <iron-icon class="title-icon" icon="oobe-32:warning"></iron-icon>
      <div class="title">
        $i18n{loginWelcomeMessageWithError}
      </div>
      <div class="subtitle">
        <div>$i18n{lockScreenReauthSubtitile1WithError}</div>
        <div>$i18n{lockScreenReauthSubtitile2WithError}</div>
      </div>
    </div>
    <div class="illustration-container">
      <iron-icon icon="oobe-illos:error-illo" class="illustration">
      </iron-icon>
    </div>
  </div>
  <div class="flex layout horizontal button-container">
    <cr-button id="cancelButtonErrorScreen" class="cancel-button"
        on-click="onCloseTap_">
      $i18n{lockScreenCancelButton}
    </cr-button>
    <cr-button id="nextButton" class="action-button" on-click="onVerify_">
      $i18n{lockScreenVerifyAgainButton}
    </cr-button>
  </div>
</div>

<div id="body" hidden="[[!isSigninFrameDisplayed_]]">
  <div id="samlContainer">
    <div id="policyCertIndicator"
        hidden="[[!policyProvidedTrustedAnchorsUsed_()]]">
      <cr-tooltip-icon id="policyCertIcon" icon-class="cr:domain"
          tooltip-text="[[i18nDynamic(locale,
              'policyProvidedCaCertsTooltipMessage', authDomain_)]]"
          icon-aria-label="[[i18nDynamic(locale,
              'policyProvidedCaCertsTooltipMessage', authDomain_)]]"
          tooltip-position="bottom">
      </cr-tooltip-icon>
    </div>
    <div id="samlHeader" saml-notice-message$="[[isSaml_]]">
      <span id="samlNoticeMessage" hidden="[[!isSaml_]]">
        [[i18n('samlNotice', authDomain_)]]
      </span>
      <cr-icon-button id="saml-close-button" iron-icon="cr:close"
          on-click="onCloseTap_" aria-label="$i18n{lockScreenCloseButton}">
      </cr-icon-button>
    </div>
  </div>
  <webview id="signin-frame" name="signin-frame" class="flex">
  </webview>
  <div id="saml-footer-container" hidden="[[!isDefaultSsoProvider]]"
     class="layout horizontal">
    <div>[[i18nDynamic(locale, 'samlChangeProviderMessage')]]</div>
    <oobe-text-button id="change-account"
        text-key="samlChangeProviderButton"
        on-click="onChangeSigninProviderClicked_">
    </oobe-text-button>
  </div>
  <div id="gaia-buttons" class="flex layout horizontal button-container"
      hidden="[[isSaml_]]">
    <div class="action-buttons">
      <gaia-action-buttons authenticator="[[authenticator_]]"
          rounded-button="True"
          on-set-focus-to-webview="setFocusToWebview_">
      </gaia-action-buttons>
    </div>
  </div>
</div>

<div id="samlConfirmPasswordScreen" class="content-wrapper"
    hidden="[[!isConfirmPassword_]]">
  <div class="main-container">
    <div class="header">
      <iron-icon class="title-icon" icon="oobe-32:lock"></iron-icon>
      <div class="title">
        [[email_]]
      </div>
      <div class="subtitle" hidden="[[isManualInput_]]">
        $i18n{confirmPasswordSubtitle}
      </div>
      <div class="subtitle" hidden="[[!isManualInput_]]">
        $i18n{manualPasswordSubtitle}
      </div>
    </div>
    <div class="input-container">
      <cr-input type="password" id="passwordInput" required
          placeholder="[[passwordPlaceholder_(locale, isManualInput_)]]"
          error-message="[[passwordErrorText_(locale, isManualInput_)]]">
      </cr-input>
      <cr-input type="password" id="confirmPasswordInput" required
          placeholder="$i18n{confirmPasswordLabel}"
          error-message="$i18n{manualPasswordMismatch}"
          hidden="[[!isManualInput_]]">
      </cr-input>
    </div>
  </div>
  <div class="flex layout horizontal button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCloseTap_">
      $i18n{lockScreenCancelButton}
    </cr-button>
    <cr-button id="nextButtonSamlConfirmPassword" class="action-button"
        on-click="onConfirm_">
      $i18n{lockScreenNextButton}
      <iron-icon id="arrowForward" icon="oobe-20:button-arrow-forward">
      </iron-icon>
    </cr-button>
  </div>
</div>

<div class="content-wrapper" hidden="[[!isPasswordChanged_]]">
  <div class="main-container">
    <div class="header">
      <iron-icon class="title-icon" icon="oobe-32:lock"></iron-icon>
      <div class="title">
        $i18n{passwordChangedTitle}
      </div>
      <div class="subtitle">
        $i18n{passwordChangedSubtitle}
      </div>
    </div>
    <div class="input-container">
      <cr-input type="password" id="oldPasswordInput" required
          placeholder="$i18n{passwordChangedOldPasswordHint}"
          error-message="$i18n{passwordChangedIncorrectOldPassword}">
    </div>
  </div>
  <div class="flex layout horizontal button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCloseTap_">
      $i18n{lockScreenCancelButton}
    </cr-button>
    <cr-button id="nextButton" class="action-button" on-click="onNext_">
      $i18n{lockScreenNextButton}
      <iron-icon icon="oobe-20:button-arrow-forward"></iron-icon>
    </cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * User non-canonicalized email for display
       */
      email_: {
        type: String,
        value: '',
      },

      /**
       * Auth Domain property of the authenticator. Updated via events.
       */
      authDomain_: {
        type: String,
        value: '',
      },

      /**
       * Whether the ‘verify user’ screen is shown.
       */
      isVerifyUser_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the ‘verify user again’ screen is shown.
       */
      isErrorDisplayed_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the webview for online sign-in is shown.
       */
      isSigninFrameDisplayed_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the authenticator is currently showing SAML IdP page.
       * @private
       */
      isSaml_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether default SAML IdP is shown.
       */
      isDefaultSsoProvider: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether there is a failure to scrape the user's password.
       */
      isConfirmPassword_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether no password is scraped or multiple passwords are scraped.
       */
      isManualInput_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the user's password has changed.
       */
      isPasswordChanged_: {
        type: Boolean,
        value: false,
      },

      passwordConfirmAttempt_: {
        type: Number,
        value: 0,
      },

      passwordChangeAttempt_: {
        type: Number,
        value: 0,
      },
    };
  }

  constructor() {
    super();

    /**
     * Saved authenticator load params.
     * @type {?AuthParams}
     * @private
     */
    this.authenticatorParams_ = null;

    /**
     * The UI component that hosts IdP pages.
     * @type {!Authenticator|undefined}
     */
    this.authenticator_ = undefined;

    /**
     * Webview that view IdP page
     * @type {!WebView|undefined}
     * @private
     */
    this.signinFrame_ = undefined;

    /**
     * Gaia path which can serve as a fallback in reloading scenarios. Expected
     * to correspond to editable Gaia username page.
     * TODO(b/259181755): this should no longer be needed once we change the
     * implementation of the "Enter Google Account info" button to fully reload
     * the flow through cpp code.
     * @type {string}
     * @private
     */
    this.fallbackGaiaPath_ = '';
  }

  /** @override */
  ready() {
    super.ready();
    this.signinFrame_ = this.getSigninFrame_();
    this.authenticator_ = new Authenticator(this.signinFrame_);
    this.authenticator_.addEventListener('authDomainChange', (e) => {
      this.authDomain_ = e.detail.newValue;
    });
    this.authenticator_.addEventListener(
        'authCompleted', (e) => void this.onAuthCompletedMessage_(e));
    this.authenticator_.addEventListener(
        'loadAbort', (e) => void this.onLoadAbortMessage_(e.detail));
    this.authenticator_.addEventListener('getDeviceId', (e) => {
      sendWithPromise('getDeviceId')
          .then(deviceId => this.authenticator_.getDeviceIdResponse(deviceId));
    });
    this.authenticator_.addEventListener('authFlowChange', (e) => {
      this.isSaml_ = e.detail.newValue === AuthFlow.SAML;
    });
    chrome.send('initialize');
  }

  /** @private */
  resetState_() {
    this.isVerifyUser_ = false;
    this.isErrorDisplayed_ = false;
    this.isSaml_ = false;
    this.isSigninFrameDisplayed_ = false;
    this.isConfirmPassword_ = false;
    this.isManualInput_ = false;
    this.isPasswordChanged_ = false;
    this.authDomain_ = '';
  }

  /**
   * Set the orientation which will be used in styling webui.
   * @param {!Object} is_horizontal whether the orientation is horizontal or
   *  vertical.
   */
  setOrientation(is_horizontal) {
    if (is_horizontal) {
      document.documentElement.setAttribute('orientation', 'horizontal');
    } else {
      document.documentElement.setAttribute('orientation', 'vertical');
    }
  }

  /**
   * Set the width which will be used in styling webui.
   * @param {!Object} width the width of the dialog.
   */
  setWidth(width) {
    document.documentElement.style.setProperty(
        '--lock-screen-reauth-dialog-width', width + 'px');
  }

  /**
   * Loads the authentication parameters.
   * @param {!Object} data authenticator parameters bag.
   * @suppress {missingProperties}
   */
  loadAuthenticator(data) {
    assert(
        'webviewPartitionName' in data,
        'ERROR: missing webview partition name');
    this.authenticator_.setWebviewPartition(data.webviewPartitionName);
    this.fallbackGaiaPath_ = data.fallbackGaiaPath;

    const params = {};
    SUPPORTED_PARAMS.forEach(name => {
      if (data.hasOwnProperty(name)) {
        params[name] = data[name];
      }
    });

    params.enableGaiaActionButtons = data.enableGaiaActionButtons;
    this.authenticatorParams_ = /** @type {AuthParams} */ (params);
    this.email_ = data.email;
    this.isDefaultSsoProvider = data.doSamlRedirect;
    this.isSaml_ = this.isDefaultSsoProvider;
    if (data['doSamlRedirect']) {
      this.isVerifyUser_ = true;
    } else {
      this.doGaiaRedirect_();
    }
    chrome.send('authenticatorLoaded');
  }


  /**
   * This function is used when the wrong user is verified correctly
   * It reset authenticator state and display error message.
   */
  resetAuthenticator() {
    this.signinFrame_.clearData({since: 0}, clearDataType, () => {
      this.authenticator_.resetStates();
      this.isButtonsEnabled_ = true;
      this.isErrorDisplayed_ = true;
    });
  }

  /**
   * Reloads the page.
   */
  reloadAuthenticator() {
    this.signinFrame_.clearData({since: 0}, clearDataType, () => {
      this.authenticator_.resetStates();
    });
  }

  /**
   * @return {!WebView}
   * @private
   */
  getSigninFrame_() {
    // Note: Can't use |this.$|, since it returns cached references to elements
    // originally present in DOM, while the signin-frame is dynamically
    // recreated (see Authenticator.setWebviewPartition()).
    const signinFrame = this.shadowRoot.getElementById('signin-frame');
    assert(signinFrame);
    return /** @type {!WebView} */ (signinFrame);
  }

  /** @private */
  setFocusToWebview_() {
    this.signinFrame_.focus();
  }

  onAuthCompletedMessage_(e) {
    const credentials = e.detail;
    chrome.send('completeAuthentication', [
      credentials.gaiaId,
      credentials.email,
      credentials.password,
      credentials.scrapedSAMLPasswords,
      credentials.usingSAML,
      credentials.services,
      credentials.passwordAttributes,
    ]);
  }

  /**
   * Invoked when onLoadAbort message received.
   * @param {!Object} data  Additional information about error event like:
   *     {number} error_code Error code such as net::ERR_INTERNET_DISCONNECTED.
   *     {string} src The URL that failed to load.
   * @private
   */
  onLoadAbortMessage_(data) {
    chrome.send('webviewLoadAborted', [data.error_code]);
  }

  /**
   * Invoked when the user has successfully authenticated via SAML,
   * the Chrome Credentials Passing API was not used and the authenticator needs
   * the user to confirm the scraped password.
   * @param {number} passwordCount The number of passwords that were scraped.
   */
  showSamlConfirmPassword(passwordCount) {
    this.resetState_();
    /**
     * This statement override resetState_ calls.
     * Thus have to be AFTER resetState_.
     */
    this.isConfirmPassword_ = true;
    this.isManualInput_ = (passwordCount === 0);
    if (this.passwordConfirmAttempt_ > 0) {
      this.$.passwordInput.value = '';
      this.$.passwordInput.invalid = true;
    }
    this.passwordConfirmAttempt_++;
  }

  /**
   * Invoked when the user's password doesn't match his old password.
   * @private
   */
  passwordChanged() {
    this.resetState_();
    this.isPasswordChanged_ = true;
    this.passwordChangeAttempt_++;
    if (this.passwordChangeAttempt_ > 1) {
      this.$.oldPasswordInput.invalid = true;
    }
  }

  /** @private */
  onVerify_() {
    this.authenticator_.load(
        AuthMode.DEFAULT,
        /** @type {AuthParams} */ (this.authenticatorParams_));
    this.resetState_();
    /**
     * These statements override resetStates_ calls.
     * Thus have to be AFTER resetState_.
     */
    this.isSigninFrameDisplayed_ = true;
  }

  /** @private */
  onConfirm_() {
    if (!this.$.passwordInput.validate()) {
      return;
    }
    if (this.isManualInput_) {
      // When using manual password entry, both passwords must match.
      const confirmPasswordInput =
          this.shadowRoot.querySelector('#confirmPasswordInput');
      if (!confirmPasswordInput.validate()) {
        return;
      }

      if (confirmPasswordInput.value != this.$.passwordInput.value) {
        this.$.passwordInput.invalid = true;
        confirmPasswordInput.invalid = true;
        return;
      }
    }

    chrome.send('onPasswordTyped', [this.$.passwordInput.value]);
  }

  /** @private */
  onCloseTap_() {
    chrome.send('dialogClose');
  }

  /** @private */
  onNext_() {
    if (!this.$.oldPasswordInput.validate()) {
      this.$.oldPasswordInput.focusInput();
      return;
    }
    chrome.send('updateUserPassword', [this.$.oldPasswordInput.value]);
    this.$.oldPasswordInput.value = '';
  }

  /** @private */
  doGaiaRedirect_() {
    this.authenticator_.load(
        AuthMode.DEFAULT,
        /** @type {AuthParams} */ (this.authenticatorParams_));
    this.resetState_();
    /**
     * These statements override resetStates_ calls.
     * Thus have to be AFTER resetState_.
     */
    this.isSigninFrameDisplayed_ = true;
  }

  /** @private */
  passwordPlaceholder_(locale, isManualInput_) {
    return this.i18n(
        isManualInput_ ? 'manualPasswordInputLabel' : 'confirmPasswordLabel');
  }

  /** @private */
  passwordErrorText_(locale, isManualInput_) {
    return this.i18n(
        isManualInput_ ? 'manualPasswordMismatch' :
                         'passwordChangedIncorrectOldPassword');
  }

  /**
   * Invoked when "Enter Google Account info" button is pressed on SAML screen.
   * @private
   */
  onChangeSigninProviderClicked_() {
    this.authenticatorParams_.doSamlRedirect = false;
    this.authenticatorParams_.enableGaiaActionButtons = true;
    this.isDefaultSsoProvider = false;
    this.isSaml_ = false;
    // Replace Gaia path with a fallback path to land on Gaia username page.
    assert(
        this.fallbackGaiaPath_,
        'fallback Gaia path needed when trying to switch from SAML to Gaia');
    this.authenticatorParams_.gaiaPath = this.fallbackGaiaPath_;
    this.authenticator_.load(
        AuthMode.DEFAULT,
        /** @type {AuthParams} */ (this.authenticatorParams_));
  }

  /** @private */
  policyProvidedTrustedAnchorsUsed_() {
    return loadTimeData.getBoolean('policyProvidedCaCertsPresent');
  }
}

customElements.define(LockReauth.is, LockReauth);
