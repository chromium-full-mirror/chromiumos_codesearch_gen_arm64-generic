// Copyright 2016 The Chromium Authors
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
import {loadTimeData} from 'chrome://resources/js/load_time_data.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


const USER_ACTION_ACCEPT_UPDATE_OVER_CELLUAR = 'update-accept-cellular';
const USER_ACTION_REJECT_UPDATE_OVER_CELLUAR = 'update-reject-cellular';
const USER_ACTION_CANCEL_UPDATE_SHORTCUT = 'cancel-update';
const USER_ACTION_OPT_OUT_INFO_NEXT = 'opt-out-info-next';

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
 * Enum for the UI states corresponding to sub steps inside update screen.
 * These values must be kept in sync with string constants in
 * update_screen_handler.cc.
 * @enum {string}
 */
const UpdateUIState = {
  CHECKING: 'checking',
  CHECKING_SOFTWARE: 'checking-software',
  UPDATE: 'update',
  RESTART: 'restart',
  REBOOT: 'reboot',
  CELLULAR: 'cellular',
  OPT_OUT_INFO: 'opt-out-info',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const UpdateBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   betterUpdatePercent:  HTMLDivElement,
 *   betterUpdateTimeleft:  HTMLDivElement,
 * }}
 */
UpdateBase.$;

/** @polymer */
class Update extends UpdateBase {
  static get is() {
    return 'update-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2016 The Chromium Authors
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
</style>
<oobe-adaptive-dialog for-step="cellular" tabindex="0"
    aria-live="polite" footer-shrinkable
    id="cellular-permission-dialog">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nRecursive(locale, 'updateOverCellularPromptTitle',
                    'productName')]]
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
    <oobe-back-button id="cellular-permission-back" inverse
        on-click="onBackClicked_"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="cellular-permission-next" inverse
        on-click="onNextClicked_"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog footer-shrinkable id="checking-for-updates-dialog"
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
<oobe-loading-dialog id="checking-update" for-step="checking-software"
    title-key="gettingDeviceReadyTitle">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>
<oobe-adaptive-dialog footer-shrinkable id="update-in-progress-dialog"
    for-step="update" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'updateStatusTitle')]]
  </h1>
  <div slot="subtitle">
    <span id="betterUpdatePercent">[[updateStatusMessagePercent]]</span>
    <span> | </span>
    <span id="betterUpdateTimeleft">
      [[updateStatusMessageTimeLeft]]
    </span>
  </div>
  <paper-progress slot="progress" id="update-progress"
      value="[[betterUpdateProgressValue]]">
  </paper-progress>
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
        <div slot="title">[[getUpdateSlideTitle_(locale, isOptOutEnabled)]]
        </div>
        <div slot="text">[[getUpdateSlideText_(locale, isOptOutEnabled)]]
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
</oobe-adaptive-dialog>
<oobe-loading-dialog id="restarting-dialog"
    title-key="updateCompeletedRebootingMsg" for-step="restart">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>
<oobe-adaptive-dialog footer-shrinkable id="better-update-complete-dialog"
    for-step="reboot" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'updateCompeletedMsg')]]
  </h1>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog footer-shrinkable id="opt-out-info-dialog"
    for-step="opt-out-info" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'noUpdateAvailableTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nRecursive(locale, 'noUpdateAvailableText', 'productName')]]
  </div>
  <div slot="content" class="flex layout vertical center-justified center">
    <iron-icon icon="oobe-illos:update-not-needed-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="opt-out-info-next" class="focus-on-show" inverse
        on-click="onOptOutInfoNext_"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * True if update is fully completed and manual action is required.
       */
      manualRebootNeeded: {
        type: Boolean,
        value: false,
      },

      /**
       * If update cancellation is allowed.
       */
      cancelAllowed: {
        type: Boolean,
        value: false,
      },

      /**
       * ID of the localized string for update cancellation message.
       */
      cancelHint: {
        type: String,
        value: 'cancelUpdateHint',
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

      /**
       * Whether a user can opt out from auto-updates.
       */
      isOptOutEnabled: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether to show the loading UI different for
       * checking update stage
       */
      isOobeSoftwareUpdateEnabled_: {
        type: Boolean,
        value() {
          return loadTimeData.getBoolean('isOobeSoftwareUpdateEnabled');
        },
      },
    };
  }

  static get observers() {
    return ['playAnimation_(uiStep)'];
  }

  defaultUIStep() {
    if (this.isOobeSoftwareUpdateEnabled_) {
      return UpdateUIState.CHECKING_SOFTWARE;
    } else {
      return UpdateUIState.CHECKING;
    }
  }

  get UI_STEPS() {
    return UpdateUIState;
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return ['setCancelUpdateShortcutEnabled',
            'showLowBatteryWarningMessage',
            'setUpdateState',
            'setUpdateStatus',
            'setAutoTransition',
          ];
  }
  // clang-format on


  ready() {
    super.ready();
    this.initializeLoginScreen('UpdateScreen');
  }

  /**
   * Event handler that is invoked just before the screen is shown.
   * @param {Object} data Screen init payload.
   */
  onBeforeShow(data) {
    if (data && 'is_opt_out_enabled' in data) {
      this.isOptOutEnabled = data['is_opt_out_enabled'];
    }
  }

  /**
   * Cancels the screen.
   */
  cancel() {
    this.userActed(USER_ACTION_CANCEL_UPDATE_SHORTCUT);
  }

  onBackClicked_() {
    this.userActed(USER_ACTION_REJECT_UPDATE_OVER_CELLUAR);
  }

  onNextClicked_() {
    this.userActed(USER_ACTION_ACCEPT_UPDATE_OVER_CELLUAR);
  }

  onOptOutInfoNext_() {
    this.userActed(USER_ACTION_OPT_OUT_INFO_NEXT);
  }

  /** @param {boolean} enabled */
  setCancelUpdateShortcutEnabled(enabled) {
    this.cancelAllowed = enabled;
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
   * @param {UpdateUIState} value Current update state.
   */
  setUpdateState(value) {
    if (value === 'checking' && this.isOobeSoftwareUpdateEnabled_) {
      this.setUIStep(UpdateUIState.CHECKING_SOFTWARE);
    } else {
      this.setUIStep(value);
    }
  }

  /**
   * Sets percent to be shown in progress bar.
   * @param {number} percent Current progress
   * @param {string} messagePercent Message describing current progress.
   * @param {string} messageTimeLeft Message describing time left.
   */
  setUpdateStatus(percent, messagePercent, messageTimeLeft) {
    // Sets aria-live polite on percent and timeleft container every time new
    // threshold has been achieved otherwise do not initiate spoken feedback
    // update by setting aria-live off.
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
   * @param {UpdateUIState} step Which UIState is shown now.
   * @param {boolean} autoTransition Is auto transition allowed.
   */
  getAutoTransition_(step, autoTransition) {
    return step == UpdateUIState.UPDATE && autoTransition;
  }

  /**
   * Computes the title of the first slide in carousel during update.
   * @param {string} locale
   * @param {boolean} isOptOutEnabled
   */
  getUpdateSlideTitle_(locale, isOptOutEnabled) {
    return this.i18n(
        isOptOutEnabled ? 'slideUpdateAdditionalSettingsTitle' :
                          'slideUpdateTitle');
  }

  /**
   * Computes the text of the first slide in carousel during update.
   * @param {string} locale
   * @param {boolean} isOptOutEnabled
   */
  getUpdateSlideText_(locale, isOptOutEnabled) {
    return this.i18n(
        isOptOutEnabled ? 'slideUpdateAdditionalSettingsText' :
                          'slideUpdateText');
  }

  /**
   * @private
   * @param {UpdateUIState} uiStep which UIState is shown now.
   */
  playAnimation_(uiStep) {
    this.$.checkingAnimation.playing = (uiStep === UpdateUIState.CHECKING);
  }
}

customElements.define(Update.is, Update);
