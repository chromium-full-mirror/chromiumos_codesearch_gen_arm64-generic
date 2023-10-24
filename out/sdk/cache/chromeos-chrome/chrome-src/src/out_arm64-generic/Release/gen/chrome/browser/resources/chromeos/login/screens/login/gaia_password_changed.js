// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for GAIA password changed screen.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';

import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';
import {addSubmitListener} from '../../login_ui_tools.js';


/**
 * UI mode for the dialog.
 * @enum {string}
 */
const GaiaPasswordChangedUIState = {
  PASSWORD: 'password',
  FORGOT: 'forgot',
  RECOVERY: 'setup-recovery',
  PROGRESS: 'progress',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const GaiaPasswordChangedBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   oldPasswordInput:  CrInputElement,
 *   oldPasswordInput2:  CrInputElement,
 *   cancel:  OobeTextButton,
 *   tryAgain:  OobeTextButton,
 *   proceedAnyway:  OobeTextButton,
 * }}
 */
GaiaPasswordChangedBase.$;

/**
 * @polymer
 */
class GaiaPasswordChanged extends GaiaPasswordChangedBase {
  static get is() {
    return 'gaia-password-changed-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2015 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<!--
  Password changed UI for the Gaia flow.
  Contains cards with a transition between them:
    1. Old password input form
    2. Warning about data loss
    3. Spinner with notice "Please wait"

  Example:
    <gaia-password-changed-element id="gaia-password-changed" hidden>
    </gaia-password-changed-element>

  Methods:
    'reset'      - reset element, sets in on the first screen and enables
                   buttons.
-->
<style include="oobe-dialog-host-styles cros-color-overrides">
  #oldPasswordInput2 {
    padding-top: 16px;
  }

  :host-context([orientation=vertical]) #oldPasswordInput2 {
    padding-top: 24px;
    text-align: initial;
    width: calc(var(--oobe-adaptive-dialog-width) - 48px
        - 2 * var(--oobe-adaptive-dialog-content-padding));
  }

  :host-context(.jelly-enabled)
    cr-input#oldPasswordInput2,
    cr-input#oldPasswordInput {
    --cr-input-background-color: var(--cros-sys-input_field_on_shaded);
  }
</style>

<oobe-adaptive-dialog role="dialog" for-step="password" id="passwordStep"
    single-column="[[isCryptohomeRecoveryUIFlowEnabled_]]">
  <template is="dom-if" if="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    <iron-icon slot="icon" icon="oobe-32:avatar"></iron-icon>
    <h1 slot="title">[[email]]</h1>
    <p slot="subtitle">
      [[i18nDynamic(locale, 'passwordChangedTitle')]]
    </p>
  </template>
  <template is="dom-if" if="[[isCryptohomeRecoveryUIFlowEnabled_]]">
    <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
    <h1 slot="title">
      [[i18nDynamic(locale,'recoverLocalDataTitle')]]
    </h1>
    <div slot="subtitle">
      [[i18nDynamic(locale, 'recoverLocalDataSubtitle')]]
    </div>
  </template>
  <cr-input slot="subtitle" type="password" id="oldPasswordInput2"
      hidden="[[!isCryptohomeRecoveryUIFlowEnabled_]]" required
      value="{{password_}}" invalid="{{passwordInvalid_}}"
      class="focus-on-show"
      placeholder="[[i18nDynamic(locale, 'oldPasswordHint')]]"
      error-message="[[i18nDynamic(locale, 'oldPasswordIncorrect')]]">
  </cr-input>
  <div slot="content" class="landscape-vertical-centered"
      hidden="[[isCryptohomeRecoveryUIFlowEnabled_]]">
    <cr-input type="password" id="oldPasswordInput" required
        value="{{password_}}" invalid="{{passwordInvalid_}}"
        class="focus-on-show"
        placeholder="[[i18nDynamic(locale, 'oldPasswordHint')]]"
        error-message="[[i18nDynamic(locale, 'oldPasswordIncorrect')]]">
    </cr-input>
    <gaia-button id="forgotPasswordLink"
        on-click="onForgotPasswordClicked_" link>
      [[i18nDynamic(locale,'forgotOldPasswordButtonText')]]
    </gaia-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="forgotPasswordButton"
        on-click="onForgotPasswordClicked_"
        text-key="forgotOldPasswordButton"
        hidden="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-text-button>
    <oobe-text-button id="cancel" on-click="onCancel_"
        text-key="cancel" hidden="[[isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-text-button>
    <oobe-next-button id="next" on-click="submit_" inverse>
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog role="dialog" for-step="forgot" id="forgotPassword"
    aria-label$="[[getForgotPasswordLabel_(locale,
        isCryptohomeRecoveryUIFlowEnabled_)]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <template is="dom-if" if="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    <h1 slot="title">[[email]]</h1>
    <p slot="subtitle">
      [[i18nDynamic(locale, 'passwordChangedProceedAnywayTitle')]]
    </p>
  </template>
  <template is="dom-if" if="[[isCryptohomeRecoveryUIFlowEnabled_]]">
    <h1 slot="title">
      [[i18nDynamic(locale,'dataLossWarningTitle')]]
    </h1>
    <div slot="subtitle"
      inner-h-t-m-l="[[getDataLossWarningSubtitleMessage_(locale, email)]]">
    </div>
    <div slot="content" class="flex layout vertical center
        center-justified">
      <iron-icon icon="oobe-illos:data-loss-illo"
          class="illustration-jelly">
      </iron-icon>
    </div>
  </template>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" on-click="onBackButtonClicked_"
        hidden="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="cancelForgot" on-click="onCancel_"
        class="focus-on-show" text-key="cancel"
        hidden="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-text-button>
    <oobe-text-button id="tryAgain" on-click="onTryAgainClicked_"
        class="focus-on-show" text-key="passwordChangedTryAgain"
        hidden="[[isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-text-button>
    <oobe-text-button id="proceedAnyway" on-click="onProceedClicked_"
        text-key="proceedAnywayButton"
        inverse="[[!isCryptohomeRecoveryUIFlowEnabled_]]">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="dialog" role="dialog" for-step="setup-recovery">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'recoveryOptInTitle')]]</h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'recoveryOptInSubtitle')]]
  </div>
  <div slot="content" class="flex layout vertical center
    center-justified">
    <iron-icon icon="oobe-illos:smart-lock-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipButton" on-click="onNoRecovery_"
        text-key="recoveryOptInNoButton">
    </oobe-text-button>
    <oobe-text-button id="enableButton" inverse on-click="onSetRecovery_"
        text-key="recoveryOptInEnableButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-loading-dialog id="progress" role="dialog" for-step="progress"
    title-key="gaiaLoading">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      email: {
        type: String,
        value: '',
      },

      password_: {
        type: String,
        value: '',
      },

      passwordInvalid_: {
        type: Boolean,
        value: false,
      },

      disabled: {
        type: Boolean,
        value: false,
      },

      passwordInput_: Object,

      isCryptohomeRecoveryUIFlowEnabled_: {
        type: Boolean,
        value: loadTimeData.getBoolean('isCryptohomeRecoveryUIFlowEnabled'),
      },
    };
  }

  defaultUIStep() {
    return GaiaPasswordChangedUIState.PASSWORD;
  }

  get UI_STEPS() {
    return GaiaPasswordChangedUIState;
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return [
      'showWrongPasswordError',
      'suggestRecovery',
    ];
  }
  // clang-format on

  /**
   * @override
   */
  ready() {
    super.ready();
    this.initializeLoginScreen('GaiaPasswordChangedScreen');

    this.passwordInput_ = this.isCryptohomeRecoveryUIFlowEnabled_ ?
        this.$.oldPasswordInput2 :
        this.$.oldPasswordInput;
    addSubmitListener(this.passwordInput_, this.submit_.bind(this));
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.PASSWORD_CHANGED;
  }

  // Invoked just before being shown. Contains all the data for the screen.
  onBeforeShow(data) {
    this.reset();
    this.email = data && 'email' in data && data.email;
    this.passwordInvalid_ = data && 'showError' in data && data.showError;
    if (this.isCryptohomeRecoveryUIFlowEnabled_) {
      this.$.tryAgain.textKey = 'oldPasswordHint';
      this.$.proceedAnyway.textKey = 'continueAndDeleteDataButton';
    }
  }

  reset() {
    this.setUIStep(GaiaPasswordChangedUIState.PASSWORD);
    this.clearPassword();
    this.disabled = false;
  }

  /**
   * Called when Screen fails to authenticate with
   * provided password.
   */
  showWrongPasswordError() {
    this.clearPassword();
    this.disabled = false;
    this.passwordInvalid_ = true;
    this.setUIStep(GaiaPasswordChangedUIState.PASSWORD);
  }

  /**
   * Called when password was successfully updated
   * and it is possible to set up recovery for the user.
   */
  suggestRecovery() {
    this.disabled = false;
    this.setUIStep(GaiaPasswordChangedUIState.RECOVERY);
  }

  /**
   * Returns the label for the forgot password dialog.
   * @param {string} locale The i18n locale.
   * @returns {string} The translated label text.
   */
  getForgotPasswordLabel_(locale) {
    if (this.isCryptohomeRecoveryUIFlowEnabled_) {
      return this.i18nDynamic(locale, 'dataLossWarningTitle');
    }
    return '';
  }

  /**
   * Returns the subtitle message for the data loss warning screen.
   * @param {string} locale The i18n locale.
   * @param {string} email The email address that the user is trying to recover.
   * @returns {string} The translated subtitle message.
   */
  getDataLossWarningSubtitleMessage_(locale, email) {
    return this.i18nAdvancedDynamic(
        locale, 'dataLossWarningSubtitle', {substitutions: [email]});
  }

  /**
   * @private
   */
  submit_() {
    if (this.disabled) {
      return;
    }
    if (!this.passwordInput_.validate()) {
      return;
    }
    this.setUIStep(GaiaPasswordChangedUIState.PROGRESS);
    this.disabled = true;
    this.userActed(['migrate-user-data', this.passwordInput_.value]);
  }

  /** @private */
  onForgotPasswordClicked_() {
    if (this.disabled) {
      return;
    }
    this.setUIStep(GaiaPasswordChangedUIState.FORGOT);
    this.clearPassword();
  }

  /** @private */
  onTryAgainClicked_() {
    this.setUIStep(GaiaPasswordChangedUIState.PASSWORD);
  }

  /** @private */
  onBackButtonClicked_() {
    this.setUIStep(GaiaPasswordChangedUIState.PASSWORD);
  }

  /** @private */
  onAnimationFinish_() {
    this.focus();
  }

  clearPassword() {
    this.password_ = '';
    this.passwordInvalid_ = false;
  }

  /** @private */
  onProceedClicked_() {
    if (this.disabled) {
      return;
    }
    this.setUIStep(GaiaPasswordChangedUIState.PROGRESS);
    this.disabled = true;
    this.clearPassword();
    this.userActed('resync');
  }

  onNoRecovery_() {
    if (this.disabled) {
      return;
    }
    this.setUIStep(GaiaPasswordChangedUIState.PROGRESS);
    this.disabled = true;
    this.clearPassword();
    this.userActed('no-recovery');
  }

  onSetRecovery_() {
    if (this.disabled) {
      return;
    }
    this.setUIStep(GaiaPasswordChangedUIState.PROGRESS);
    this.disabled = true;
    this.clearPassword();
    this.userActed('setup-recovery');
  }

  /** @private */
  onCancel_() {
    if (this.disabled) {
      return;
    }
    this.disabled = true;
    this.userActed('cancel');
  }
}

customElements.define(GaiaPasswordChanged.is, GaiaPasswordChanged);
