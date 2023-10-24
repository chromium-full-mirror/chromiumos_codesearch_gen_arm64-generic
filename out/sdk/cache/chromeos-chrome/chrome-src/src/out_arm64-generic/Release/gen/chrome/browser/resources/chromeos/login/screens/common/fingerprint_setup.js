// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design Fingerprint
 * Enrollment screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/ash/common/quick_unlock/fingerprint_progress.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {I18nBehavior} from '//resources/ash/common/i18n_behavior.js';
import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {afterNextRender, dom, flush, html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';
import {OOBE_UI_STATE, SCREEN_GAIA_SIGNIN} from '../../components/display_manager_types.js';
import {OobeCrLottie} from '../../components/oobe_cr_lottie.js';


/**
 * These values must be kept in sync with the values in
 * third_party/cros_system_api/dbus/service_constants.h.
 * @enum {number}
 */
var FingerprintResultType = {
  SUCCESS: 0,
  PARTIAL: 1,
  INSUFFICIENT: 2,
  SENSOR_DIRTY: 3,
  TOO_SLOW: 4,
  TOO_FAST: 5,
  IMMOBILE: 6,
};

/**
 * UI mode for the dialog.
 * @enum {string}
 */
const FingerprintUIState = {
  START: 'start',
  PROGRESS: 'progress',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const FingerprintSetupBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   setupFingerprint:  OobeAdaptiveDialog,
 *   arc:  FingerprintProgressElement,
 * }}
 */
FingerprintSetupBase.$;

/**
 * @polymer
 */
class FingerprintSetup extends FingerprintSetupBase {
  static get is() {
    return 'fingerprint-setup-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2018 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="oobe-dialog-host-styles">
  #sensorLocationContainer {
    height: 100%;
    overflow-y: hidden;
    width: 100%;
  }
</style>
<oobe-adaptive-dialog id="setupFingerprint" role="dialog" for-step="start"
    footer-shrinkable>
  <h1 slot="title" hidden="[[isChildAccount_]]" aria-live="polite">
    [[i18nDynamic(locale, 'setupFingerprintScreenTitle')]]
  </h1>
  <h1 slot="title" hidden="[[!isChildAccount_]]" aria-live="polite">
    [[i18nDynamic(locale, 'setupFingerprintScreenTitleForChild')]]
  </h1>
  <p slot="subtitle" hidden="[[isChildAccount_]]">
    [[i18nDynamic(locale, 'setupFingerprintScreenDescription')]]
  </p>
  <p slot="subtitle" hidden="[[!isChildAccount_]]">
    [[i18nDynamic(locale, 'setupFingerprintScreenDescriptionForChild')]]
  </p>
  <iron-icon slot="icon" icon="oobe-32:fingerprint"></iron-icon>
  <div slot="content" class="flex layout vertical center center-justified">
    <div id="sensorLocationContainer" class="oobe-illustration">
      <oobe-cr-lottie id="scannerLocationLottie"
          animation-url="fingerprint_scanner_animation.json">
      </oobe-cr-lottie>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipStart"
        text-key="skipFingerprintSetup"
        on-click="onSkipOnStart_" class="focus-on-show">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="startFingerprintEnroll" role="dialog"
    for-step="progress" footer-shrinkable
    aria-label$="[[i18nDynamic(locale, 'enrollmentProgressScreenTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:fingerprint"></iron-icon>
  <h1 slot="title" hidden="[[complete_]]">
    [[i18nDynamic(locale, 'enrollmentProgressScreenTitle')]]
  </h1>
  <h1 slot="title" hidden="[[!complete_]]">
    [[i18nDynamic(locale, 'setupFingerprintEnrollmentSuccessTitle')]]
  </h1>
  <div slot="subtitle" hidden="[[!complete_]]">
    <div hidden="[[isChildAccount_]]">
      [[i18nDynamic(locale,
          'setupFingerprintEnrollmentSuccessDescription')]]
    </div>
    <div hidden="[[!isChildAccount_]]">
      [[i18nDynamic(locale,
          'setupFingerprintEnrollmentSuccessDescriptionForChild')]]
    </div>
  </div>
  <div slot="subtitle" hidden="[[!isProblemImmobile_(scanResult_)]]">
    <div hidden="[[isChildAccount_]]">
      [[i18nDynamic(locale, 'setupFingerprintScanMoveFinger')]]
    </div>
    <div hidden="[[!isChildAccount_]]">
      [[i18nDynamic(locale, 'setupFingerprintScanMoveFingerForChild')]]
    </div>
  </div>
  <div slot="subtitle" hidden="[[!isProblemOther_(scanResult_)]]">
    [[i18nDynamic(locale, 'setupFingerprintScanTryAgain')]]
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <fingerprint-progress id="arc" dynamic="[[isDynamicColor_]]"
        autoplay>
    </fingerprint-progress>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipProgress"
        on-click="onSkipInProgress_" class="focus-on-show"
        text-key="skipFingerprintSetup"
        hidden="[[complete_]]">
    </oobe-text-button>
    <oobe-text-button id="addAnotherFinger"
        text-key="fingerprintSetupAddAnother"
        hidden="[[!isAnotherButtonVisible_(percentComplete_,
            canAddFinger)]]"
        on-click="onAddAnother_">
    </oobe-text-button>
    <oobe-text-button id="done"
        hidden="[[!complete_]]"
        text-key="fingerprintSetupDone"
        on-click="onDone_" class="focus-on-show" inverse>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * The percentage of completion that has been received during setup.
       * The value within [0, 100] represents the percent of enrollment
       * completion.
       */
      percentComplete_: {
        type: Number,
        value: 0,
        observer: 'onProgressChanged_',
      },

      /**
       * Is current finger enrollment complete?
       */
      complete_: {
        type: Boolean,
        value: false,
        computed: 'enrollIsComplete_(percentComplete_)',
      },

      /**
       * Can we add another finger?
       */
      canAddFinger: {
        type: Boolean,
        value: true,
      },

      /**
       * The result of fingerprint enrollment scan.
       * @private
       */
      scanResult_: {
        type: Number,
        value: FingerprintResultType.SUCCESS,
      },

      /**
       * Indicates whether user is a child account.
       */
      isChildAccount_: {
        type: Boolean,
        value: false,
      },

      /**
       * Indicates whether Jelly is enabled.
       */
      isDynamicColor_: {
        type: Boolean,
        value: loadTimeData.getBoolean('isOobeJellyEnabled'),
      },
    };
  }

  constructor() {
    super();
  }

  /** @override */
  get EXTERNAL_API() {
    return ['onEnrollScanDone', 'enableAddAnotherFinger'];
  }

  get UI_STEPS() {
    return FingerprintUIState;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('FingerprintSetupScreen');
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  /** @override */
  defaultUIStep() {
    return FingerprintUIState.START;
  }

  onBeforeShow(data) {
    this.isChildAccount_ = data['isChildAccount'];
    this.setAnimationState_(true);
  }

  onBeforeHide() {
    this.setAnimationState_(false);
  }

  /**
   * Called when a fingerprint enroll scan result is received.
   * @param {FingerprintResultType} scanResult Result of the enroll scan.
   * @param {boolean} isComplete Whether fingerprint enrollment is complete.
   * @param {number} percentComplete Percentage of completion of the enrollment.
   */
  onEnrollScanDone(scanResult, isComplete, percentComplete) {
    this.setUIStep(FingerprintUIState.PROGRESS);
    this.$.arc.reset();

    this.percentComplete_ = percentComplete;
    this.scanResult_ = scanResult;
  }

  /**
   * Enable/disable add another finger.
   * @param {boolean} enable True if add another fingerprint is enabled.
   */
  enableAddAnotherFinger(enable) {
    this.canAddFinger = enable;
  }

  /**
   * Check whether Add Another button should be shown.
   * @return {boolean}
   * @private
   */
  isAnotherButtonVisible_(percentComplete, canAddFinger) {
    return percentComplete >= 100 && canAddFinger;
  }

  /**
   * This is 'on-tap' event handler for 'Skip' button for 'START' step.
   * @private
   */
  onSkipOnStart_(e) {
    this.userActed('setup-skipped-on-start');
  }

  /**
   * This is 'on-tap' event handler for 'Skip' button for 'PROGRESS' step.
   * @private
   */
  onSkipInProgress_(e) {
    this.userActed('setup-skipped-in-flow');
  }

  /**
   * Enable/disable lottie animation.
   * @param {boolean} playing True if animation should be playing.
   */
  setAnimationState_(playing) {
    const lottieElement = /** @type{OobeCrLottie} */ (
        this.$.setupFingerprint.querySelector('#scannerLocationLottie'));
    lottieElement.playing = playing;
    this.$.arc.setPlay(playing);
  }

  /**
   * This is 'on-tap' event handler for 'Done' button.
   * @private
   */
  onDone_(e) {
    this.userActed('setup-done');
  }

  /**
   * This is 'on-tap' event handler for 'Add another' button.
   * @private
   */
  onAddAnother_(e) {
    this.percentComplete_ = 0;
    this.userActed('add-another-finger');
  }

  /**
   * Check whether fingerprint enrollment is in progress.
   * @return {boolean}
   * @private
   */
  enrollIsComplete_(percent) {
    return percent >= 100;
  }

  /**
   * Check whether fingerprint scan problem is IMMOBILE.
   * @return {boolean}
   * @private
   */
  isProblemImmobile_(scan_result) {
    return scan_result === FingerprintResultType.IMMOBILE;
  }

  /**
   * Check whether fingerprint scan problem is other than IMMOBILE.
   * @return {boolean}
   * @private
   */
  isProblemOther_(scan_result) {
    return scan_result != FingerprintResultType.SUCCESS &&
        scan_result != FingerprintResultType.IMMOBILE;
  }

  /**
   * Observer for percentComplete_.
   * @private
   */
  onProgressChanged_(newValue, oldValue) {
    // Start a new enrollment, so reset all enrollment related states.
    if (newValue === 0) {
      this.$.arc.reset();
      this.scanResult_ = FingerprintResultType.SUCCESS;
      return;
    }

    this.$.arc.setProgress(oldValue, newValue, newValue === 100);
  }
}

customElements.define(FingerprintSetup.is, FingerprintSetup);
