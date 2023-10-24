// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design Demo Setup
 * screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/progress_list_item.js';

import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


/**
 * UI mode for the dialog.
 * @enum {string}
 */
const DemoSetupUIState = {
  PROGRESS: 'progress',
  ERROR: 'error',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const DemoSetupScreenBase = mixinBehaviors(
    [
      OobeI18nBehavior,
      OobeDialogHostBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

/**
 * @polymer
 */
class DemoSetupScreen extends DemoSetupScreenBase {
  static get is() {
    return 'demo-setup-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog id="demoSetupProgressDialog" role="dialog"
  aria-label$="[[i18nDynamic(locale, 'demoSetupProgressScreenTitle')]]"
  for-step="progress">
  <iron-icon slot="icon" icon="oobe-32:computer"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'demoSetupProgressScreenTitle')]]
  </h1>
  <div slot="content" class="landscape-header-aligned">
    <div id="demo-setup-steps" role="list">
      <progress-list-item text-key="demoSetupProgressStepDownload"
          hidden="[[!shouldShowStep_('downloadResources', setupSteps_)]]"
          active="[[stepIsActive_(
              'downloadResources', setupSteps_, currentStepIndex_)]]"
          completed="[[stepIsCompleted_(
              'downloadResources', setupSteps_, currentStepIndex_)]]">
      </progress-list-item>
      <progress-list-item text-key="demoSetupProgressStepEnroll"
          hidden="[[!shouldShowStep_('enrollment', setupSteps_)]]"
          active="[[stepIsActive_(
              'enrollment', setupSteps_, currentStepIndex_)]]"
          completed="[[stepIsCompleted_(
              'enrollment', setupSteps_, currentStepIndex_)]]">
      </progress-list-item>
    </div>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="demoSetupErrorDialog" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'demoSetupErrorScreenTitle')]]"
    for-step="error">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'demoSetupErrorScreenTitle')]]
  </h1>
  <div slot="subtitle" id="errorMessage">[[errorMessage_]]</div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="back-navigation">
    <oobe-back-button inverse on-click="onCloseClicked_" id="back"
        disabled="[[isPowerwashRequired_]]"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="retryButton" class="focus-on-show" inverse
        text-key="demoSetupErrorScreenRetryButtonLabel"
        on-click="onRetryClicked_" hidden="[[isPowerwashRequired_]]">
    </oobe-text-button>
    <oobe-text-button id="powerwashButton" class="focus-on-show" inverse
        text-key="demoSetupErrorScreenPowerwashButtonLabel"
        on-click="onPowerwashClicked_" hidden="[[!isPowerwashRequired_]]">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog><!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /** Object mapping step strings to step indices */
      setupSteps_: {
        type: Object,
        value() {
          return /** @type {!Object} */ (
              loadTimeData.getValue('demoSetupSteps'));
        },
      },

      /** Which step index is currently running in Demo Mode setup. */
      currentStepIndex_: {
        type: Number,
        value: -1,
      },

      /** Error message displayed on demoSetupErrorDialog screen. */
      errorMessage_: {
        type: String,
        value: '',
      },

      /** Whether powerwash is required in case of a setup error. */
      isPowerwashRequired_: {
        type: Boolean,
        value: false,
      },
    };
  }

  constructor() {
    super();
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('DemoSetupScreen');
  }

  defaultUIStep() {
    return DemoSetupUIState.PROGRESS;
  }

  get UI_STEPS() {
    return DemoSetupUIState;
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return ['setCurrentSetupStep',
            'onSetupSucceeded',
            'onSetupFailed'];
  }
  // clang-format on


  onBeforeShow() {
    this.reset();
  }

  /** Resets demo setup flow to the initial screen and starts setup. */
  reset() {
    this.setUIStep(DemoSetupUIState.PROGRESS);
    this.userActed('start-setup');
  }

  /** Called after resources are updated. */
  updateLocalizedContent() {
    this.i18nUpdateLocale();
  }

  /**
   * Called at the beginning of a setup step.
   * @param {string} currentStep The new step name.
   */
  setCurrentSetupStep(currentStep) {
    // If new step index not specified, remain unchanged.
    if (this.setupSteps_.hasOwnProperty(currentStep)) {
      this.currentStepIndex_ = this.setupSteps_[currentStep];
    }
  }

  /** Called when demo mode setup succeeded. */
  onSetupSucceeded() {
    this.errorMessage_ = '';
  }

  /**
   * Called when demo mode setup failed.
   * @param {string} message Error message to be displayed to the user.
   * @param {boolean} isPowerwashRequired Whether powerwash is required to
   *     recover from the error.
   */
  onSetupFailed(message, isPowerwashRequired) {
    this.errorMessage_ = message;
    this.isPowerwashRequired_ = isPowerwashRequired;
    this.setUIStep(DemoSetupUIState.ERROR);
  }

  /**
   * Retry button click handler.
   * @private
   */
  onRetryClicked_() {
    this.reset();
  }

  /**
   * Powerwash button click handler.
   * @private
   */
  onPowerwashClicked_() {
    this.userActed('powerwash');
  }

  /**
   * Close button click handler.
   * @private
   */
  onCloseClicked_() {
    // TODO(wzang): Remove this after crbug.com/900640 is fixed.
    if (this.isPowerwashRequired_) {
      return;
    }
    this.userActed('close-setup');
  }

  /**
   * Whether a given step should be rendered on the UI.
   * @param {string} stepName The name of the step (from the enum).
   * @param {!Object} setupSteps
   * @private
   */
  shouldShowStep_(stepName, setupSteps) {
    return setupSteps.hasOwnProperty(stepName);
  }

  /**
   * Whether a given step is active.
   * @param {string} stepName The name of the step (from the enum).
   * @param {!Object} setupSteps
   * @param {number} currentStepIndex
   * @private
   */
  stepIsActive_(stepName, setupSteps, currentStepIndex) {
    return currentStepIndex === setupSteps[stepName];
  }

  /**
   * Whether a given step is completed.
   * @param {string} stepName The name of the step (from the enum).
   * @param {!Object} setupSteps
   * @param {number} currentStepIndex
   * @private
   */
  stepIsCompleted_(stepName, setupSteps, currentStepIndex) {
    return currentStepIndex > setupSteps[stepName];
  }
}

customElements.define(DemoSetupScreen.is, DemoSetupScreen);
