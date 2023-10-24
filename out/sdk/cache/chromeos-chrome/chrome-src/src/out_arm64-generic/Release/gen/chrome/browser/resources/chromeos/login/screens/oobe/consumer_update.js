// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design Update screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/oobe_cr_lottie.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_carousel.js';
import '../../components/oobe_slide.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const ConsumerUpdateScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

const UNREACHABLE_PERCENT = 1000;
// Thresholds which are used to determine when update status announcement should
// take place. Last element is not reachable to simplify implementation.
const PERCENT_THRESHOLDS = [
  0,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  95,
  98,
  99,
  100,
  UNREACHABLE_PERCENT,
];

/**
 * Enum to represent steps on the consumer update screen.
 * @enum {string}
 */
const ConsumerUpdateStep = {
  CHECKING: 'checking',
  UPDATE: 'update',
  RESTART: 'restart',
  REBOOT: 'reboot',
  CELLULAR: 'cellular',
};


/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  BACK: 'back',
  SKIP: 'skip-consumer-update',
  DECLINE_CELLULAR: 'consumer-update-reject-cellular',
  ACCEPT_CELLULAR: 'consumer-update-accept-cellular',
};

/**
 * @typedef {{
 *   betterUpdatePercent:  HTMLDivElement,
 *   betterUpdateTimeleft:  HTMLDivElement,
 * }}
 */
ConsumerUpdateScreenElementBase.$;

/**
 * @polymer
 */
class ConsumerUpdateScreen extends ConsumerUpdateScreenElementBase {
  static get is() {
    return 'consumer-update-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  .progress-message {
    color: var(--oobe-subheader-text-color);
    margin-top: 32px;
  }

  .update-illustration {
    height: 264px;
    width: 264px;
  }

  .slide-view {
    border: 1px solid var(--google-grey-200);
    border-radius: 16px;
    height: 380px;
    margin: auto;
    overflow: hidden;
    width: 380px;
  }

  :host-context(.jelly-enabled) .slide-view {
    /* TODO(b/289793104): Define new size for the carousel/slide. */
    border: none;
    border-radius: 20px;
  }

  #checkingAnimation {
    height: 300px;
    width: 334px;
  }

  :host-context(.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-sys-primary);
    --paper-progress-container-color: var(--cros-sys-primary_container);
  }

  div[slot="subtitle"] p {
    margin-top: 0;
  }
</style>
<oobe-adaptive-dialog id="consumerUpdateCellularDialog"
    for-step="cellular" tabindex="0"
    aria-live="polite" footer-shrinkable>
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'consumerUpdateScreenCellularTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'updateOverCellularPromptMessage')]]
  </p>
  <div slot="content" class="flex layout vertical center-justified center">
    <iron-icon icon="oobe-illos:updating-illo"
        class="update-illustration  illustration-jelly">
    </iron-icon>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="updateCellularBackButton" on-click="onBackClicked_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="declineButton"
        text-key="consumerUpdateScreenSkipButton"
        on-click="onDeclineCellularClicked_"
        border>
    </oobe-text-button>
    <oobe-text-button id="acceptButton" inverse
        text-key="consumerUpdateScreenAcceptButton"
        on-click="onAcceptCellularClicked_"
        border>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog footer-shrinkable id="consumerUpdateCheckingDialog"
    for-step="checking" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'checkingForUpdates')]]
  </h1>
  <paper-progress slot="progress" id="checking-progress" indeterminate>
  </paper-progress>
  <div slot="content" class="flex layout vertical center-justified center">
    <oobe-cr-lottie id="checkingAnimation"
        animation-url="animations/checking_for_update.json">
    </oobe-cr-lottie>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog footer-shrinkable id="consumerUpdateInProgressDialog"
    for-step="update" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:update-progress"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'consumerUpdateScreenInProgressTitle')]]
  </h1>
  <div slot="subtitle">
    <p>[[i18nDynamic(locale, 'consumerUpdateScreenInProgressSubtitle')]]</p>
    <p>[[i18nDynamic(locale,
                    'consumerUpdateScreenInProgressAdditionalSubtitle')]]</p>
    <span id="betterUpdatePercent">[[updateStatusMessagePercent]]</span>
    <span> | </span>
    <span id="betterUpdateTimeleft">
      [[updateStatusMessageTimeLeft]]
    </span>
    <paper-progress id="update-progress" value="[[betterUpdateProgressValue]]">
    </paper-progress>
  </div>
  <div hidden="[[!showLowBatteryWarning]]" id="battery-warning"
      class="slide-view" slot="content">
    <oobe-slide is-warning>
      <iron-icon slot="slide-img"  icon="oobe-illos:update-charge-illo"
          class="illustration-jelly">
      </iron-icon>
      <div slot="title">
        [[i18nDynamic(locale, 'batteryWarningTitle')]]
      </div>
      <div slot="text">
        [[i18nDynamic(locale, 'batteryWarningText')]]
      </div>
    </oobe-slide>
  </div>
  <div hidden="[[showLowBatteryWarning]]" id="carousel" class="slide-view"
      slot="content">
    <oobe-carousel slide-duration-in-seconds=5
        auto-transition="[[getAutoTransition_(uiStep, autoTransition)]]"
        slide-label="slideLabel"
        selected-button-label="slideSelectedButtonLabel"
        unselected-button-label="slideUnselectedButtonLabel">
      <oobe-slide slot="slides">
        <iron-icon slot="slide-img" icon="oobe-illos:update-no-waiting-illo"
            class="illustration-jelly">
        </iron-icon>
        <div slot="title">
          [[i18nDynamic(locale, 'slideUpdateAdditionalSettingsTitle')]]
        </div>
        <div slot="text">
          [[i18nDynamic(locale, 'slideUpdateAdditionalSettingsText')]]
        </div>
      </oobe-slide>
      <oobe-slide slot="slides">
        <iron-icon slot="slide-img" icon="oobe-illos:update-antivirus-illo"
            class="illustration-jelly">
        </iron-icon>
        <div slot="title">
          [[i18nDynamic(locale, 'slideAntivirusTitle')]]
        </div>
        <div slot="text">
          [[i18nDynamic(locale, 'slideAntivirusText')]]
        </div>
      </oobe-slide>
      <oobe-slide slot="slides">
        <iron-icon slot="slide-img" icon="oobe-illos:update-apps-illo"
            class="illustration-jelly">
        </iron-icon>
        <div slot="title">[[i18nDynamic(locale, 'slideAppsTitle')]]</div>
        <div slot="text">[[i18nDynamic(locale, 'slideAppsText')]]</div>
      </oobe-slide>
      <oobe-slide slot="slides">
        <iron-icon slot="slide-img" icon="oobe-illos:google-account-illo"
            class="illustration-jelly">
        </iron-icon>
        <div slot="title">
          [[i18nDynamic(locale, 'slideAccountTitle')]]
        </div>
        <div slot="text">
          [[i18nDynamic(locale, 'slideAccountText')]]
        </div>
      </oobe-slide>
    </oobe-carousel>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipButton" hidden="[[isUpdateMandatory]]"
        text-key="consumerUpdateScreenSkipButton" on-click="onSkip_" border>
    </oobe-text-button>
</div>
</oobe-adaptive-dialog>
<oobe-loading-dialog id="consumerUpdateRestartingDialog"
    title-key="updateCompeletedRebootingMsg" for-step="restart">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>
<oobe-adaptive-dialog footer-shrinkable id="consumerUpdateCompleteDialog"
    for-step="reboot" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'updateCompeletedMsg')]]
  </h1>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * True if update is forced.
       */
      isUpdateMandatory: {
        type: Boolean,
        value: true,
      },

      /**
       * Shows battery warning message during Downloading stage.
       */
      showLowBatteryWarning: {
        type: Boolean,
        value: false,
      },

      /**
       * Message like "3% complete".
       */
      updateStatusMessagePercent: {
        type: String,
        value: '',
      },

      /**
       * Message like "About 5 minutes left".
       */
      updateStatusMessageTimeLeft: {
        type: String,
        value: '',
      },

      /**
       * Progress bar percent that is used in BetterUpdate version of the
       * screen.
       */
      betterUpdateProgressValue: {
        type: Number,
        value: 0,
      },

      /**
       * Whether auto-transition is enabled or not.
       */
      autoTransition: {
        type: Boolean,
        value: true,
      },

      /**
       * Index of threshold that has been already achieved.
       */
      thresholdIndex: {
        type: Number,
        value: 0,
      },

    };
  }

  static get observers() {
    return ['playAnimation_(uiStep)'];
  }

  get EXTERNAL_API() {
    return [
      'setIsUpdateMandatory',
      'showLowBatteryWarningMessage',
      'setUpdateState',
      'setUpdateStatus',
      'setAutoTransition',
    ];
  }

  get UI_STEPS() {
    return ConsumerUpdateStep;
  }

  defaultUIStep() {
    return ConsumerUpdateStep.CHECKING;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('ConsumerUpdateScreen');
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  /**
   * Shows or hides skip button while update in progress.
   * @param {boolean} visible Is skip button visible?
   */
  setIsUpdateMandatory(visible) {
    this.isUpdateMandatory = visible;
  }

  /**
   * Decline to use cellular data.
   */
  onDeclineCellularClicked_() {
    this.userActed(UserAction.DECLINE_CELLULAR);
  }

  /**
   * Accept to use cellular data.
   */
  onAcceptCellularClicked_() {
    this.userActed(UserAction.ACCEPT_CELLULAR);
  }

  onSkip_() {
    this.userActed(UserAction.SKIP);
  }

  /**
   * Shows or hides battery warning message.
   * @param {boolean} visible Is message visible?
   */
  showLowBatteryWarningMessage(visible) {
    this.showLowBatteryWarning = visible;
  }

  /**
   * Sets which dialog should be shown.
   * @param {ConsumerUpdateStep} value Current update state.
   */
  setUpdateState(value) {
    this.setUIStep(value);
  }

  /**
   * Sets percent to be shown in progress bar.
   * @param {number} percent Current progress
   * @param {string} messagePercent Message describing current progress.
   * @param {string} messageTimeLeft Message describing time left.
   */
  setUpdateStatus(percent, messagePercent, messageTimeLeft) {
    // Sets aria-live polite on percent and timeleft container every time
    // new threshold has been achieved otherwise do not initiate spoken
    // feedback update by setting aria-live off.
    if (percent >= PERCENT_THRESHOLDS[this.thresholdIndex]) {
      while (percent >= PERCENT_THRESHOLDS[this.thresholdIndex]) {
        this.thresholdIndex = this.thresholdIndex + 1;
      }
      this.$.betterUpdatePercent.setAttribute('aria-live', 'polite');
      this.$.betterUpdateTimeleft.setAttribute('aria-live', 'polite');
    } else {
      this.$.betterUpdateTimeleft.setAttribute('aria-live', 'off');
      this.$.betterUpdatePercent.setAttribute('aria-live', 'off');
    }
    this.betterUpdateProgressValue = percent;
    this.updateStatusMessagePercent = messagePercent;
    this.updateStatusMessageTimeLeft = messageTimeLeft;
  }

  /**
   * Sets whether carousel should auto transit slides.
   */
  setAutoTransition(value) {
    this.autoTransition = value;
  }

  /**
   * Gets whether carousel should auto transit slides.
   * @private
   * @param {ConsumerUpdateStep} step Which UIState is shown now.
   * @param {boolean} autoTransition Is auto transition allowed.
   */
  getAutoTransition_(step, autoTransition) {
    return step == ConsumerUpdateStep.UPDATE && autoTransition;
  }

  onBackClicked_() {
    this.userActed(UserAction.BACK);
  }

  /**
   * @private
   * @param {ConsumerUpdateStep} uiStep which UIState is shown now.
   */
  playAnimation_(uiStep) {
    this.$.checkingAnimation.playing = (uiStep === ConsumerUpdateStep.CHECKING);
  }
}
customElements.define(ConsumerUpdateScreen.is, ConsumerUpdateScreen);
