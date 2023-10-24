// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Enable developer features screen implementation.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/action_link.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';


/**
 * Possible UI states of the enable debugging screen.
 * These values must be kept in sync with EnableDebuggingScreenHandler::UIState
 * in C++ code and the order of the enum must be the same.
 * @enum {string}
 */
const EnableDebuggingState = {
  ERROR: 'error',
  NONE: 'none',
  REMOVE_PROTECTION: 'remove-protection',
  SETUP: 'setup',
  WAIT: 'wait',
  DONE: 'done',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const EnableDebuggingBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   removeProtectionProceedButton:  OobeTextButton,
 *   password:  CrInputElement,
 *   okButton:  OobeTextButton,
 *   errorOkButton: OobeTextButton
 * }}
 */
 EnableDebuggingBase.$;

/**
 * @polymer
 */
class EnableDebugging extends EnableDebuggingBase {
  static get is() {
    return 'enable-debugging-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2014 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  #password-note {
    color: var(--cros-color-secondary);
    font-size: var(--oobe-enable-debugging-font-size);
  }

  :host-context(.jelly-enabled)
    cr-input#password,
    cr-input#passwordRepeat {
      --cr-input-background-color: var(--cros-sys-input_field_on_shaded);
  }

  :host-context(.jelly-enabled) #password-note {
    color: var(--oobe-subheader-text-color);
  }
</style>
<oobe-adaptive-dialog id="removeProtectionDialog" role="dialog"
    for-step="remove-protection"
    aria-label$="[[i18nDynamic(locale,
                  'enableDebuggingScreenAccessibleTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableDebuggingScreenTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'enableDebuggingRemveRootfsMessage')]]
    <a id="help-link" class="oobe-local-link" is="action-link"
        on-click="onHelpLinkClicked_">
      [[i18nDynamic(locale, 'enableDebuggingLearnMore')]]
    </a>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="removeProtectionCancelButton"
        text-key="enableDebuggingCancelButton" on-click="cancel">
    </oobe-text-button>
    <oobe-text-button id="removeProtectionProceedButton" inverse
        text-key="enableDebuggingRemoveButton" class="focus-on-show"
        on-click="onRemoveButtonClicked_">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="setupDialog" for-step="setup" role="dialog"
    aria-label$="[[i18nDynamic(locale,
                'enableDebuggingScreenAccessibleTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableDebuggingScreenTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'enableDebuggingSetupMessage')]]
  </div>
  <div slot="content" class="landscape-vertical-centered">
    <cr-input id="password" type="password" value="{{password_}}"
              placeholder="[[i18nDynamic(locale,
                            'enableDebuggingPasswordLabel')]]"
              class="focus-on-show">
    </cr-input>
    <cr-input id="passwordRepeat" type="password"
        value="{{passwordRepeat_}}"
        placeholder="[[i18nDynamic(locale,
                    'enableDebuggingConfirmPasswordLabel')]]">
    </cr-input>
    <div id="password-note">
      [[i18nDynamic(locale, 'enableDebuggingPasswordLengthNote')]]
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="setupCancelButton"
        text-key="enableDebuggingCancelButton" on-click="cancel">
    </oobe-text-button>
    <oobe-text-button id="enableButton" inverse
        text-key="enableDebuggingEnableButton"
        on-click="onEnableButtonClicked_"
        for-step="setup" disabled="[[!passwordsMatch_]]">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-loading-dialog id="waitDialog" for-step="wait"
    title-key="enableDebuggingScreenTitle"
    aria-label$="[[i18nDynamic(locale,
                'enableDebuggingScreenAccessibleTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
</oobe-loading-dialog>

<oobe-adaptive-dialog id="doneDialog" role="dialog" for-step="done"
    aria-label$="[[i18nDynamic(locale,
                'enableDebuggingScreenAccessibleTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableDebuggingScreenTitle')]]
  </h1>
  <div slot="subtitle" id="done-details">
    [[i18nDynamic(locale, 'enableDebuggingDoneMessage')]]
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <img class="success-icon" aria-hidden="true"
        src="chrome://theme/IDR_ENABLE_DEBUGGING_SUCCESS">
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="okButton" inverse class="focus-on-show"
        text-key="enableDebuggingOKButton" on-click="onOKButtonClicked_">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="errorDialog" role="dialog" for-step="error"
    aria-label$="[[i18nDynamic(locale,
                'enableDebuggingScreenAccessibleTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableDebuggingErrorTitle')]]
  </h1>
  <div slot="subtitle" id="error-details">
    [[i18nDynamic(locale, 'enableDebuggingErrorMessage')]]
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon id="iconArea" icon="oobe-illos:error-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="errorOkButton" inverse class="focus-on-show"
        text-key="enableDebuggingOKButton" on-click="onOKButtonClicked_">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  get EXTERNAL_API() {
    return ['updateState'];
  }

  static get properties() {
    return {
      /**
       * Current value of password input field.
       */
      password_: {type: String, value: ''},

      /**
       * Current value of repeat password input field.
       */
      passwordRepeat_: {type: String, value: ''},

      /**
       * Whether password input fields are matching.
       */
      passwordsMatch_: {
        type: Boolean,
        computed: 'computePasswordsMatch_(password_, passwordRepeat_)',
      },
    };
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('EnableDebuggingScreen');
  }

  defaultUIStep() {
    return EnableDebuggingState.NONE;
  }

  get UI_STEPS() {
    return EnableDebuggingState;
  }

  /**
   * Returns a control which should receive an initial focus.
   */
  get defaultControl() {
    if (this.uiStep == EnableDebuggingState.REMOVE_PROTECTION) {
      return this.$.removeProtectionProceedButton;
    } else if (this.uiStep == EnableDebuggingState.SETUP) {
      return this.$.password;
    } else if (this.uiStep == EnableDebuggingState.DONE) {
      return this.$.okButton;
    } else if (this.uiStep == EnableDebuggingState.ERROR) {
      return this.$.errorOkButton;
    } else {
      return null;
    }
  }

  /**
   * Cancels the enable debugging screen and drops the user back to the
   * network settings.
   */
  cancel() {
    this.userActed('cancel');
  }

  /**
   * Update UI for corresponding state of the screen.
   * @param {number} state
   */
  updateState(state) {
    // Use `state + 1` as index to locate the corresponding EnableDebuggingState
    this.setUIStep(Object.values(EnableDebuggingState)[state + 1]);

    if (this.defaultControl) {
      this.defaultControl.focus();
    }
  }

  computePasswordsMatch_(password, password2) {
    return (password.length == 0 && password2.length == 0) ||
        (password == password2 && password.length >= 4);
  }

  onHelpLinkClicked_() {
    this.userActed('learnMore');
  }

  onRemoveButtonClicked_() {
    this.userActed('removeRootFSProtection');
  }

  onEnableButtonClicked_() {
    this.userActed(['setup', this.password_]);
    this.password_ = '';
    this.passwordRepeat_ = '';
  }

  onOKButtonClicked_() {
    this.userActed('done');
  }
}

customElements.define(EnableDebugging.is, EnableDebugging);
