// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/ash/common/quick_unlock/setup_pin_keyboard.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';

import {assert, assertNotReached} from '//resources/ash/common/assert.js';
import {I18nBehavior} from '//resources/ash/common/i18n_behavior.js';
import {recordLockScreenProgress} from '//resources/ash/common/quick_unlock/lock_screen_constants.js';
import {dom, html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE, SCREEN_GAIA_SIGNIN} from '../../components/display_manager_types.js';
import {OobeTypes} from '../../components/oobe_types.js';


const PinSetupState = {
  START: 'start',
  CONFIRM: 'confirm',
  DONE: 'done',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const PinSetupBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @polymer
 */
class PinSetup extends PinSetupBase {

  static get is() {
    return 'pin-setup-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="cr-shared-style oobe-dialog-host-styles">
  setup-pin-keyboard {
    margin-top: 37px;
  }
</style>
<oobe-adaptive-dialog id="setup" role="dialog" for-step="start,confirm">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
  <h1 slot="title" for-step="start">
    <div hidden="[[isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupTitle1')]]
    </div>
    <div hidden="[[!isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupTitle1ForChild')]]
    </div>
  </h1>
  <h1 slot="title" for-step="confirm">
    <div hidden="[[isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupTitle2')]]
    </div>
    <div hidden="[[!isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupTitle2ForChild')]]
    </div>
  </h1>
  <div slot="subtitle" for-step="start">
    <div hidden="[[isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupSubtitle1')]]
    </div>
    <div hidden="[[!isChildAccount_]]">
      [[i18nDynamic(locale, 'discoverPinSetupSubtitle1ForChild')]]
    </div>
  </div>
  <div slot="content" class="flex-grow layout vertical center
      center-justified">
    <setup-pin-keyboard id="pinKeyboard"
        enable-submit="{{enableSubmit_}}"
        is-confirm-step="{{isConfirmStep_}}"
        on-pin-submit="onPinSubmit_"
        on-set-pin-done="onSetPinDone_"
        auth-token="[[authToken_]]"
        quick-unlock-private="[[quickUnlockPrivate_]]"
        class="focus-on-show"
        enable-placeholder>
    </setup-pin-keyboard>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" for-step="confirm"
        on-click="onBackButton_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="setupSkipButton" on-click="onSkipButton_"
        text-key="discoverPinSetupSkip"
        for-step="start, confirm">
    </oobe-text-button>
    <oobe-next-button inverse
        id="nextButton"
        disabled="[[!enableSubmit_]]"
        on-click="onNextButton_" class="focus-on-show"
        for-step="start, confirm"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="doneDialog" role="dialog" for-step="done"
    footer-shrinkable>
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
  <h1 slot="title" hidden="[[isChildAccount_]]">
    [[i18nDynamic(locale, 'discoverPinSetupTitle3')]]
  </h1>
  <h1 slot="title" hidden="[[!isChildAccount_]]">
    [[i18nDynamic(locale, 'discoverPinSetupTitle3ForChild')]]
  </h1>
  <div slot="subtitle">
    <div hidden="[[hasLoginSupport_]]">
      <div hidden="[[isChildAccount_]]">
        [[i18nDynamic(locale, 'discoverPinSetupSubtitle3NoLogin')]]
      </div>
      <div hidden="[[!isChildAccount_]]">
        [[i18nDynamic(locale, 'discoverPinSetupSubtitle3NoLoginForChild')]]
      </div>
    </div>
    <div hidden="[[!hasLoginSupport_]]">
      <div hidden="[[isChildAccount_]]">
        [[i18nDynamic(locale, 'discoverPinSetupSubtitle3WithLogin')]]
      </div>
      <div hidden="[[!isChildAccount_]]">
        [[i18nDynamic(locale,
            'discoverPinSetupSubtitle3WithLoginForChild')]]
      </div>
    </div>
  </div>
  <div slot="content" class="flex layout vertical center
      center-justified">
    <iron-icon icon="oobe-illos:pin-illustration-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="doneButton" inverse on-click="onDoneButton_"
        class="focus-on-show" text-key="discoverPinSetupDone">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Flag from <setup-pin-keyboard>.
       * @private
       */
      enableSubmit_: {
        type: Boolean,
        value: false,
      },

      /**
       * Flag from <setup-pin-keyboard>.
       * @private
       */
      isConfirmStep_: {
        type: Boolean,
        value: false,
        observer: 'onIsConfirmStepChanged_',
      },

      /** QuickUnlockPrivate API token. */
      authToken_: {
        type: String,
      },

      /**
       * Interface for chrome.quickUnlockPrivate calls. May be overridden by
       * tests.
       * @type {QuickUnlockPrivate}
       * @private
       */
      quickUnlockPrivate_: {type: Object, value: chrome.quickUnlockPrivate},

      /**
       * Should be true when device has support for PIN login.
       * @private
       */
      hasLoginSupport_: {
        type: Boolean,
        value: false,
      },

      /**
       * Indicates whether user is a child account.
       * @type {boolean}
       */
      isChildAccount_: {
        type: Boolean,
        value: false,
      },
    };
  }

  get EXTERNAL_API() {
    return ['setHasLoginSupport'];
  }

  get UI_STEPS() {
    return PinSetupState;
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('PinSetupScreen');
  }

  defaultUIStep() {
    return PinSetupState.START;
  }

  /**
   * @param {OobeTypes.PinSetupScreenParameters} data
   */
  onBeforeShow(data) {
    this.$.pinKeyboard.resetState();
    this.authToken_ = data.auth_token;
    this.isChildAccount_ = data.is_child_account;
  }

  /**
   * Configures message on the final page depending on whether the PIN can
   *  be used to log in.
   */
  setHasLoginSupport(hasLoginSupport) {
    this.hasLoginSupport_ = hasLoginSupport;
  }

  /** @private */
  onIsConfirmStepChanged_() {
    if (this.isConfirmStep_) {
      this.setUIStep(PinSetupState.CONFIRM);
    }
  }

  /** @private */
  onPinSubmit_() {
    this.$.pinKeyboard.doSubmit();
  }

  /** @private */
  onSetPinDone_() {
    this.setUIStep(PinSetupState.DONE);
  }

  /** @private */
  onSkipButton_() {
    this.authToken_ = '';
    this.$.pinKeyboard.resetState();
    if (this.uiStep === PinSetupState.CONFIRM) {
      this.userActed('skip-button-in-flow');
    } else {
      this.userActed('skip-button-on-start');
    }
  }

  /** @private */
  onBackButton_() {
    this.$.pinKeyboard.resetState();
    this.setUIStep(PinSetupState.START);
  }

  /** @private */
  onNextButton_() {
    this.onPinSubmit_();
  }

  /** @private */
  onDoneButton_() {
    this.authToken_ = '';
    this.$.pinKeyboard.resetState();
    this.userActed('done-button');
  }
}

customElements.define(PinSetup.is, PinSetup);
