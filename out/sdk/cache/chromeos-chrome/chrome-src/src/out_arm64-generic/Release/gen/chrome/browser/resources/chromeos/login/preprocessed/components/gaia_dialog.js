// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element to handle Gaia authentication (Gaia webview,
 * action buttons, back button events, Gaia dialog beign shown, SAML UI).
 * Encapsulates authenticator.js and SAML notice handling.
 *
 * Events:
 *   identifierentered: Fired after user types their email.
 *   loadabort: Fired on the webview error.
 *   ready: Fired when the webview (not necessarily Gaia) is loaded first time.
 *   showview: Message from Gaia meaning Gaia UI is ready to be shown.
 *   startenrollment: User action to start enterprise enrollment.
 *   closesaml: User closes the dialog on the SAML page.
 *   backcancel: User presses back button when there is no history in Gaia page.
 */

import '//resources/cr_elements/cr_icon_button/cr_icon_button.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import './buttons/oobe_back_button.js';
import './buttons/oobe_text_button.js';
import './common_styles/oobe_common_styles.css.js';
import './common_styles/oobe_dialog_host_styles.css.js';
import './dialogs/oobe_content_dialog.js';
import './quick_start_entry_point.js';

import {sendWithPromise} from '//resources/ash/common/cr.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {Authenticator, AuthFlow} from '../../../gaia_auth_host/authenticator.js';

import {OobeDialogHostBehavior} from './behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from './behaviors/oobe_i18n_behavior.js';
import {OobeTypes} from './oobe_types.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const GaiaDialogBase =
    mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior], PolymerElement);

const CHROMEOS_GAIA_PASSWORD_METRIC = 'ChromeOS.Gaia.PasswordFlow';

/**
 * @polymer
 */
class GaiaDialog extends GaiaDialogBase {
  static get is() {
    return 'gaia-dialog';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cr-shared-style">
  #saml-back-button {
    --cr-icon-button-margin-end: 0;
    --cr-icon-button-margin-start: 0;
  }

  #saml-notice-container,
  #saml-footer-container {
    align-items: center;
    background: white;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.17);
    display: flex;
    min-height: 0;
  }

  #saml-notice-container {
    border-bottom: 1px solid var(--cros-sys-separator);
    height: 44px;
  }

  #saml-footer-container {
    border-top: 1px solid var(--cros-sys-separator);
    height: 58px;
  }

  #saml-notice-recording-indicator {
    padding-inline-end: 10px;
    padding-inline-start: 10px;
  }

  #signin-frame {
    display: flex;
    overflow: hidden;
    /* Position relative is needed for proper size calculation of
      * ::before element which is responsible for scrolling shadow.
      **/
    position: relative;
  }

  #signin-frame-container {
    z-index: 10;
  }

  /* WebviewScrollShadowsHelper */
  #signin-frame-container:not([hideshadows]) #signin-frame.can-scroll:not(.is-scrolled):not(.scrolled-to-bottom)::before,
  #signin-frame-container:not([hideshadows]) #signin-frame.can-scroll.is-scrolled:not(.scrolled-to-bottom)::before,
  #signin-frame-container:not([hideshadows]) #signin-frame.is-scrolled.scrolled-to-bottom::before {
    content: '';
    height: 100%;
    opacity: 0.3;
    pointer-events: none;
    position: absolute;
    width: 100%;

    /* Variables that are used for displaying scroll shadows. */
    --scroll-shadow-bottom-bg:
        linear-gradient(0deg, var(--google-grey-400) 0, transparent 8px);
    --scroll-shadow-top-bg:
        linear-gradient(180deg, var(--google-grey-400) 0, transparent 8px);
  }

  #signin-frame-container:not([hideshadows]) #signin-frame.can-scroll:not(.is-scrolled):not(.scrolled-to-bottom)::before {
    background: var(--scroll-shadow-bottom-bg);
  }

  #signin-frame-container:not([hideshadows]) #signin-frame.can-scroll.is-scrolled:not(.scrolled-to-bottom)::before {
    background: var(--scroll-shadow-bottom-bg), var(--scroll-shadow-top-bg);
  }

  #signin-frame-container:not([hideshadows]) #signin-frame.is-scrolled.scrolled-to-bottom::before {
    background: var(--scroll-shadow-top-bg);
  }

  #sshWarning {
    color: var(--cros-sys-error);
    text-align: center;
  }

  #change-account {
    padding-inline-end: 8px;
    padding-inline-start: 8px;
  }
</style>
<link rel="stylesheet" href="oobe_popup_overlay.css">
<!-- As this dialog have pre-loading logic that require access to elements,
      dialog is marked as no-lazy. -->
<oobe-content-dialog role="dialog" id="gaiaDialog" no-lazy
    no-buttons$="[[isSamlSsoVisible]]" fullscreen$="[[isSamlSsoVisible]]"
    isGaia$="[[!isSamlSsoVisible]]">
  <div slot="content" id="signin-frame-container"
      hideshadows$="[[isPopUpOverlayVisible_]]"
      class="flex layout vertical">
    <div id="saml-notice-container" class="layout horizontal center"
        hidden$="[[!isSamlSsoVisible]]">
      <cr-icon-button id="saml-back-button" iron-icon="cr:arrow-back"
          on-click="close_" hidden="[[isSamlBackButtonHidden_]]">
      </cr-icon-button>
      <div class="flex layout horizontal center-justified">
        <span id="saml-notice-recording-indicator"
            hidden$="[[!videoEnabled]]">
          <img src="chrome://theme/IDR_TAB_RECORDING_INDICATOR">
        </span>
        <span id="saml-notice-message">
          [[getSamlNoticeMessage_(locale, videoEnabled, authDomain)]]
        </span>
      </div>
    </div>
    <h3 id="sshWarning" hidden>
      [[i18nDynamic(locale, 'sshWarningLogin')]]
    </h3>
    <webview id="signin-frame" class="flex" name="[[webviewName]]">
    </webview>
    <div id="saml-footer-container" hidden="[[!isDefaultSsoProvider]]"
        class="layout horizontal end-justified">
      <div>[[i18nDynamic(locale, 'samlChangeProviderMessage')]]</div>
      <oobe-text-button id="change-account"
          text-key="samlChangeProviderButton"
          on-click="onChangeSigninProviderClicked_">
      </oobe-text-button>
    </div>
  </div>
  <div slot="back-navigation" hidden$="[[navigationHidden]]">
    <oobe-back-button id="signin-back-button"
        disabled="[[!navigationEnabled]]"
        hidden="[[isBackButtonHidden(navigationHidden,
                                     hideBackButtonIfCantGoBack, canGoBack)]]"
        on-click="onBackButtonClicked_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons" hidden$="[[navigationHidden]]">
    <div hidden="[[!isDefaultNavigationShown_(canGoBack,
        gaiaDialogButtonsType)]]" class="flex layout horizontal">
      <quick-start-entry-point
        id="quick-start-signin-button"
        on-click="onQuickStartClicked_"
        hidden="[[!isQuickStartEnabled_]]"
        quick-start-text-key="signinScreenQuickStart">
      </quick-start-entry-point>
      <oobe-text-button id="secondary-action-button"
          label-for-aria="[[secondaryActionButtonLabel_]]"
          on-click="onSecondaryActionButtonClicked_"
          hidden$="[[!secondaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        secondaryActionButtonEnabled_)]]">
        <div slot="text">[[secondaryActionButtonLabel_]]</div>
      </oobe-text-button>
      <oobe-text-button id="primary-action-button"
          label-for-aria="[[primaryActionButtonLabel_]]"
          on-click="onPrimaryActionButtonClicked_"
          hidden$="[[!primaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        primaryActionButtonEnabled_)]]"
          inverse>
        <div slot="text">[[primaryActionButtonLabel_]]</div>
      </oobe-text-button>
    </div>
    <div hidden="[[!isEnterpriseNavigationShown_(canGoBack,
        gaiaDialogButtonsType)]]">
      <oobe-text-button id="enterprise-navigation-kiosk"
          text-key="kioskEnrollmentButton"
          on-click="onKioskButtonClicked_"
          hidden$="[[!primaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        primaryActionButtonEnabled_)]]">
      </oobe-text-button>
      <oobe-text-button id="enterprise-navigation-enterprise"
          text-key="enterpriseEnrollmentButton"
          on-click="onEnterpriseButtonClicked_"
          hidden$="[[!primaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        primaryActionButtonEnabled_)]]"
          inverse>
      </oobe-text-button>
    </div>
    <div hidden="[[!isKioskNavigationShown_(canGoBack,
        gaiaDialogButtonsType)]]">
      <oobe-text-button id="kiosk-navigation-enterprise"
          text-key="enterpriseEnrollmentButton"
          on-click="onEnterpriseButtonClicked_"
          hidden$="[[!primaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        primaryActionButtonEnabled_)]]">
      </oobe-text-button>
      <oobe-text-button id="kiosk-navigation-kiosk"
          text-key="kioskEnrollmentButton"
          on-click="onKioskButtonClicked_"
          hidden$="[[!primaryActionButtonLabel_]]"
          disabled="[[!isButtonEnabled_(navigationEnabled,
                                        primaryActionButtonEnabled_)]]"
          inverse>
      </oobe-text-button>
    </div>
  </div>
</oobe-content-dialog>
<div class="popup-overlay"
    hidden="[[!isPopUpOverlayVisible_]]">
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Whether SAML page uses camera.
       */
      videoEnabled: {
        type: Boolean,
        value: false,
        notify: true,
      },

      /**
       * Current auth flow. See AuthFlow
       */
      authFlow: {
        type: Number,
        value: 0,
        notify: true,
      },

      /**
       * Type of bottom buttons.
       */
      gaiaDialogButtonsType: {
        type: String,
        value: OobeTypes.GaiaDialogButtonsType.DEFAULT,
      },

      /**
       * Whether the dialog can be closed.
       */
      isClosable: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether SAML IdP page is shown
       */
      isSamlSsoVisible: {
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
       * Whether to hide back button if form can't go back.
       */
      hideBackButtonIfCantGoBack: {
        type: Boolean,
        value: false,
      },

      /**
       * Used to display SAML notice.
       * @private
       */
      authDomain: {
        type: String,
        value: '',
        notify: true,
      },

      /**
       * Controls navigation buttons enable state.
       */
      navigationEnabled: {
        type: Boolean,
        value: true,
        notify: true,
      },

      /**
       * Controls navigation buttons visibility.
       */
      navigationHidden: {
        type: Boolean,
        value: false,
      },

      /* Defines name of the webview. Useful for tests. To find Guestview for
       * the JSChecker.
       */
      webviewName: {
        type: String,
      },

      /**
       * Controls label on the primary action button.
       * @private
       */
      primaryActionButtonLabel_: {
        type: String,
        value: null,
      },

      /**
       * Controls availability of the primary action button.
       * @private
       */
      primaryActionButtonEnabled_: {
        type: Boolean,
        value: false,
      },

      /**
       * Controls label on the secondary action button.
       * @private
       */
      secondaryActionButtonLabel_: {
        type: String,
        value: null,
      },

      /**
       * Controls availability of the secondary action button.
       * @private
       */
      secondaryActionButtonEnabled_: {
        type: Boolean,
        value: false,
      },

      /**
       * True if Gaia indicates that it can go back (e.g. on the password page)
       */
      canGoBack: {
        type: Boolean,
        value: false,
        notify: true,
      },

      /**
       * Whether a pop-up overlay should be shown. This overlay is necessary
       * when GAIA shows an overlay within their iframe. It covers the parts
       * of the screen that would otherwise not show an overlay.
       * @private
       */
      isPopUpOverlayVisible_: {
        type: Boolean,
        computed: 'showOverlay_(navigationEnabled, isSamlSsoVisible)',
      },

      isSamlBackButtonHidden_: {
        type: Boolean,
        computed: 'isSamlBackButtonHidden(isDefaultSsoProvider, isClosable)',
      },

      /**
       * Whether Quick start feature is enabled. If it's enabled the quick start
       * button will be shown in the signin screen.
       * @type {boolean}
       * @private
       */
      isQuickStartEnabled_: Boolean,
    };
  }

  constructor() {
    super();
    /**
     * Emulate click on the primary action button when it is visible and
     * enabled.
     * @type {boolean}
     * @private
     */
    this.clickPrimaryActionButtonForTesting_ = false;

    /**
     * @type {!Authenticator|undefined}
     * @private
     */
    this.authenticator_ = undefined;

    this.isQuickStartEnabled_ = false;
  }

  getAuthenticator() {
    return this.authenticator_;
  }

  /** @override */
  ready() {
    super.ready();
    const webview = /** @type {!WebView} */ (this.$['signin-frame']);
    this.authenticator_ = new Authenticator(webview);
    /**
     * Event listeners for the events triggered by the authenticator.
     */
    const authenticatorEventListeners = {
      // Note for the lowercase of fired events.
      'identifierEntered': (e) => {
        this.dispatchEvent(new CustomEvent(
            'identifierentered',
            {bubbles: true, composed: true, detail: e.detail}));
      },
      'loadAbort': (e) => {
        this.dispatchEvent(new CustomEvent(
            'webviewerror', {bubbles: true, composed: true, detail: e.detail}));
      },
      'ready': (e) => {
        this.dispatchEvent(new CustomEvent(
            'ready', {bubbles: true, composed: true, detail: e.detail}));
      },
      'showView': (e) => {
        this.dispatchEvent(new CustomEvent(
            'showview', {bubbles: true, composed: true, detail: e.detail}));
      },
      'menuItemClicked': (e) => {
        if (e.detail == 'ee') {
          this.dispatchEvent(new CustomEvent(
              'startenrollment', {bubbles: true, composed: true}));
        }
      },
      'backButton': (e) => {
        this.canGoBack = !!e.detail;
        this.getFrame().focus();
      },

      'setPrimaryActionEnabled': (e) => {
        this.primaryActionButtonEnabled_ = e.detail;
        this.maybeClickPrimaryActionButtonForTesting_();
      },
      'setPrimaryActionLabel': (e) => {
        this.primaryActionButtonLabel_ = e.detail;
        this.maybeClickPrimaryActionButtonForTesting_();
      },
      'setSecondaryActionEnabled': (e) => {
        this.secondaryActionButtonEnabled_ = e.detail;
      },
      'setSecondaryActionLabel': (e) => {
        this.secondaryActionButtonLabel_ = e.detail;
      },
      'setAllActionsEnabled': (e) => {
        this.primaryActionButtonEnabled_ = e.detail;
        this.secondaryActionButtonEnabled_ = e.detail;
        this.maybeClickPrimaryActionButtonForTesting_();
      },
      'videoEnabledChange': (e) => {
        this.videoEnabled = e.detail.newValue;
      },
      'authFlowChange': (e) => {
        this.authFlow = e.detail.newValue;
      },
      'authDomainChange': (e) => {
        this.authDomain = e.detail.newValue;
      },
      'dialogShown': (e) => {
        this.navigationEnabled = false;
        chrome.send('enableShelfButtons', [false]);
      },
      'dialogHidden': (e) => {
        this.navigationEnabled = true;
        chrome.send('enableShelfButtons', [true]);
      },
      'exit': (e) => {
        this.dispatchEvent(new CustomEvent(
            'exit', {bubbles: true, composed: true, detail: e.detail}));
      },
      'removeUserByEmail': (e) => {
        this.dispatchEvent(new CustomEvent(
            'removeuserbyemail',
            {bubbles: true, composed: true, detail: e.detail}));
      },
      'apiPasswordAdded': (e) => {
        // Only record the metric for Gaia flow without 3rd-party SAML IdP.
        if (this.authFlow !== AuthFlow.DEFAULT) {
          return;
        }
        chrome.send(
            'metricsHandler:recordBooleanHistogram',
            [CHROMEOS_GAIA_PASSWORD_METRIC, false]);
        chrome.send('passwordEntered');
      },
      'authCompleted': (e) => {
        // Only record the metric for Gaia flow without 3rd-party SAML IdP.
        if (this.authFlow === AuthFlow.DEFAULT) {
          chrome.send(
              'metricsHandler:recordBooleanHistogram',
              [CHROMEOS_GAIA_PASSWORD_METRIC, true]);
        }
        this.dispatchEvent(new CustomEvent(
            'authcompleted',
            {bubbles: true, composed: true, detail: e.detail}));
      },
    };

    for (const eventName in authenticatorEventListeners) {
      this.authenticator_.addEventListener(
          eventName, authenticatorEventListeners[eventName].bind(this));
    }

    sendWithPromise('getIsSshConfigured')
        .then(this.updateSshWarningVisibility.bind(this));
  }

  updateSshWarningVisibility(show) {
    this.$.sshWarning.hidden = !show;
  }

  show() {
    this.navigationEnabled = true;
    chrome.send('enableShelfButtons', [true]);
    this.getFrame().focus();
  }

  getFrame() {
    // Note: Can't use |this.$|, since it returns cached references to elements
    // originally present in DOM, while the signin-frame is  dynamically
    // recreated (see Authenticator.setWebviewPartition()).
    return this.shadowRoot.querySelector('#signin-frame');
  }

  clickPrimaryButtonForTesting() {
    this.clickPrimaryActionButtonForTesting_ = true;
    this.maybeClickPrimaryActionButtonForTesting_();
  }

  maybeClickPrimaryActionButtonForTesting_() {
    if (!this.clickPrimaryActionButtonForTesting_) {
      return;
    }

    const button = this.$['primary-action-button'];
    if (button.hidden || button.disabled) {
      return;
    }

    this.clickPrimaryActionButtonForTesting_ = false;
    button.click();
  }

  /* @private */
  getSamlNoticeMessage_(locale, videoEnabled, authDomain) {
    if (videoEnabled) {
      return this.i18n('samlNoticeWithVideo', authDomain);
    }
    return this.i18n('samlNotice', authDomain);
  }

  /* @private */
  close_() {
    this.dispatchEvent(
        new CustomEvent('closesaml', {bubbles: true, composed: true}));
  }

  /* @private */
  onChangeSigninProviderClicked_() {
    this.dispatchEvent(new CustomEvent(
        'changesigninprovider', {bubbles: true, composed: true}));
  }

  /* @private */
  onBackButtonClicked_() {
    if (this.canGoBack) {
      this.getFrame().back();
      return;
    }
    this.dispatchEvent(
        new CustomEvent('backcancel', {bubbles: true, composed: true}));
  }

  /**
   * Handles clicks on Quick start button.
   * @private
   */
  onQuickStartClicked_() {
    this.dispatchEvent(new CustomEvent(
        'quick-start-clicked', {bubbles: true, composed: true}));
  }

  /**
   * Handles clicks on "PrimaryAction" button.
   * @private
   */
  onPrimaryActionButtonClicked_() {
    this.authenticator_.sendMessageToWebview('primaryActionHit');
  }

  /**
   * Handles clicks on "SecondaryAction" button.
   * @private
   */
  onSecondaryActionButtonClicked_() {
    this.authenticator_.sendMessageToWebview('secondaryActionHit');
  }

  /**
   * Handles clicks on Kiosk enrollment button.
   * @private
   */
  onKioskButtonClicked_() {
    this.setLicenseType_(OobeTypes.LicenseType.KIOSK);
    this.onPrimaryActionButtonClicked_();
  }

  /**
   * Handles clicks on Kiosk enrollment button.
   * @private
   */
  onEnterpriseButtonClicked_() {
    this.setLicenseType_(OobeTypes.LicenseType.ENTERPRISE);
    this.onPrimaryActionButtonClicked_();
  }

  /**
   * @param {number} licenseType - license to use.
   * @private
   */
  setLicenseType_(licenseType) {
    this.dispatchEvent(new CustomEvent(
        'licensetypeselected',
        {bubbles: true, composed: true, detail: licenseType}));
  }

  /**
   * Whether the button is enabled.
   * @param {boolean} navigationEnabled - whether navigation in general is
   * enabled.
   * @param {boolean} buttonEnabled - whether a specific button is enabled.
   * @private
   */
  isButtonEnabled_(navigationEnabled, buttonEnabled) {
    return navigationEnabled && buttonEnabled;
  }

  /**
   * Whether the back button is hidden.
   * @param {boolean} navigationHidden - whether navigation in general is hidden
   * @param {boolean} hideBackButtonIfCantGoBack - whether it should be hidden.
   * @param {boolean} canGoBack - whether the form can go back.
   * @private
   */
  isBackButtonHidden(navigationHidden, hideBackButtonIfCantGoBack, canGoBack) {
    return navigationHidden || (hideBackButtonIfCantGoBack && !canGoBack);
  }

  /**
   * Whether the back button on SAML screen is hidden.
   * @param {boolean} isDefaultSsoProvider - whether it is default SAML page.
   * @param {boolean} isClosable - whether the form can be closed.
   * @private
   */
  isSamlBackButtonHidden(isDefaultSsoProvider, isClosable) {
    return isDefaultSsoProvider && !isClosable;
  }

  /**
   * Whether popup overlay should be open.
   * @param {boolean} navigationEnabled
   * @param {boolean} isSamlSsoVisible
   * @return {boolean}
   */
  showOverlay_(navigationEnabled, isSamlSsoVisible) {
    return !navigationEnabled || isSamlSsoVisible;
  }

  /**
   * Whether default navigation (original, as gaia has) is shown.
   * @param {boolean} canGoBack
   * @param {string} gaiaDialogButtonsType
   * @return {boolean}
   * @private
   */
  isDefaultNavigationShown_(canGoBack, gaiaDialogButtonsType) {
    return !canGoBack ||
        gaiaDialogButtonsType == OobeTypes.GaiaDialogButtonsType.DEFAULT;
  }

  /**
   * Whether Enterprise navigation is shown. Two buttons: primary for
   * Enterprise enrollment and secondary for Kiosk enrollment.
   * @param {boolean} canGoBack
   * @param {string} gaiaDialogButtonsType
   * @return {boolean}
   * @private
   */
  isEnterpriseNavigationShown_(canGoBack, gaiaDialogButtonsType) {
    return canGoBack &&
        gaiaDialogButtonsType ==
        OobeTypes.GaiaDialogButtonsType.ENTERPRISE_PREFERRED;
  }

  /**
   * Whether Kiosk navigation is shown. Two buttons: primary for
   * Kiosk enrollment and secondary for Enterprise enrollment.
   * @param {boolean} canGoBack
   * @param {string} gaiaDialogButtonsType
   * @return {boolean}
   * @private
   */
  isKioskNavigationShown_(canGoBack, gaiaDialogButtonsType) {
    return canGoBack &&
        gaiaDialogButtonsType ==
        OobeTypes.GaiaDialogButtonsType.KIOSK_PREFERRED;
  }
}

customElements.define(GaiaDialog.is, GaiaDialog);
