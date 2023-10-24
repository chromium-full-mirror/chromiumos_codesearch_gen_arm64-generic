// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying encryption migration screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {afterNextRender, dom, flush, html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OOBE_UI_STATE, SCREEN_GAIA_SIGNIN} from '../../components/display_manager_types.js';


/**
 * Enum for the UI states corresponding to sub steps inside migration screen.
 * These values must be kept in sync with
 * EncryptionMigrationScreenView::UIState in C++ code and the order of the
 * enum must be the same.
 * @enum {string}
 */
var EncryptionMigrationUIState = {
  INITIAL: 'initial',
  READY: 'ready',
  MIGRATING: 'migrating',
  MIGRATION_FAILED: 'migration-failed',
  NOT_ENOUGH_SPACE: 'not-enough-space',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const EncryptionMigrationBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior],
    PolymerElement);

class EncryptionMigration extends EncryptionMigrationBase {
  static get is() {
    return 'encryption-migration-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2017 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  paper-progress {
    --paper-progress-active-color: var(--google-blue-500);
    height: 3px;
    margin-bottom: 28px;
    width: 100%;
  }

  :host-context(.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-sys-primary);
    --paper-progress-container-color: var(--cros-sys-primary_container);
  }

  [slot='content'] div {
    color: var(--oobe-text-color);
  }

  div.warning {
    color: var(--google-red-600);
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-modal-dialog-header-font-size);
    font-weight: var(--oobe-modal-dialog-header-font-weight);
    line-height: var(--oobe-encryption-migration-warning-line-height);
    padding-bottom: 8px;
  }

  .message-container {
    border: 1px solid var(--google-grey-200);
    border-radius: 8px;
    padding: 24px;
  }
</style>
<oobe-adaptive-dialog for-step="initial"></oobe-adaptive-dialog>
<oobe-adaptive-dialog id="ready-dialog" role="dialog" for-step="ready"
    aria-label$="[[i18nDynamic(locale, 'migrationReadyTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'migrationReadyTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'migrationReadyDescription')]]
  </div>
  <div slot="content" class="content-centered"
      hidden="[[!isEnoughBattery]]">
    <iron-icon icon="oobe-illos:encryption-migration-illo"
          class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="content" class="landscape-header-aligned"
      aria-live="polite" hidden="[[isEnoughBattery]]">
    <div class="message-container">
      <div class="warning">
        [[computeBatteryWarningLabel_(locale, batteryPercent)]]
      </div>
      <template is="dom-if" if="[[isCharging]]">
        <div>[[i18nDynamic(locale,'migrationChargingLabel')]]</div>
      </template>
      <template is="dom-if" if="[[!isCharging]]">
        <div>[[i18nDynamic(locale,'migrationAskChargeMessage')]]</div>
      </template>
      <div>
        [[computeNecessaryBatteryLevelLabel_(locale,
                                            necessaryBatteryPercent)]]
      </div>
    </div>
  </div>
  <div slot="bottom-buttons" hidden="[[isResuming]]">
    <oobe-text-button border id="skip-button" on-click="onSkip_"
        hidden="[[isSkipHidden_()]]" text-key="migrationButtonSkip">
    </oobe-text-button>
    <oobe-text-button inverse id="upgrade-button" on-click="onUpgrade_"
        disabled="[[isUpdateDisabled_(isEnoughBattery, isSkipped)]]"
        text-key="migrationButtonUpdate"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="migrating-dialog" role="dialog"
    for-step="migrating"
    aria-label$="[[i18nDynamic(locale, 'migrationMigratingTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'migrationMigratingTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'migrationMigratingDescription')]]
  </div>
  <div slot="content" class="flex layout vertical center-justified">
    <paper-progress id="migration-progress"
        value="[[progress]]" max="1" step="0.001"
        indeterminate="[[isProgressIndeterminate_(progress)]]">
    </paper-progress>
    <template is="dom-if" if="[[!isProgressIndeterminate_(progress)]]">
      <div aria-live="polite">
        [[computeProgressLabel_(locale, progress)]]
      </div>
    </template>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="error-dialog" role="dialog"
    for-step="migration-failed"
    aria-label$="[[i18nDynamic(locale, 'migrationFailedTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'migrationFailedTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'migrationFailedSubtitle')]]
  </div>
  <div slot="content" class="landscape-header-aligned">
    <div>[[i18nDynamic(locale,'migrationFailedMessage')]]</div>
  </div>
  <div slot="bottom-buttons">

    <oobe-text-button inverse id="restart-button"
        on-click="onRestartOnFailure_" text-key="migrationButtonRestart">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="insufficient-space-dialog" role="dialog"
    for-step="not-enough-space"
    aria-label$="[[i18nDynamic(locale, 'migrationReadyTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'migrationReadyTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'migrationReadyDescription')]]
  </div>
  <div slot="content" class="landscape-header-aligned"
      aria-live="polite">
    <div class="message-container">
      <div class="warning">
        [[i18nDynamic(locale,'migrationNospaceWarningLabel')]]
      </div>
      <div>[[i18nDynamic(locale,'migrationAskFreeSpaceMessage')]]</div>
      <div>
        [[computeAvailableSpaceLabel_(locale, availableSpaceInString)]]
      </div>
      <div>
        [[computeNecessarySpaceLabel_(locale, necessarySpaceInString)]]
      </div>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button inverse id="insufficient-space-skip-button"
        hidden="[[isResuming]]"
        on-click="onSkip_" text-key="migrationButtonContinue">
    </oobe-text-button>
    <oobe-text-button inverse id="insufficient-space-restart-button"
        hidden="[[!isResuming]]"
        on-click="onRestartOnLowStorage_"
        text-key="migrationButtonRestart">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Current migration progress in range [0, 1]. Negative value means that
       * the progress is unknown.
       */
      progress: Number,

      /**
       * Whether the current migration is resuming the previous one.
       */
      isResuming: Boolean,

      /**
       * Battery level.
       */
      batteryPercent: Number,

      /**
       * Necessary battery level to start migration in percent.
       */
      necessaryBatteryPercent: Number,

      /**
       * True if the battery level is enough to start migration.
       */
      isEnoughBattery: Boolean,

      /**
       * True if the device is charging.
       */
      isCharging: Boolean,

      /**
       * True if the migration was skipped.
       */
      isSkipped: Boolean,

      /**
       * Formatted string of the current available space size.
       */
      availableSpaceInString: String,

      /**
       * Formatted string of the necessary space size for migration.
       */
      necessarySpaceInString: String,
    };
  }

  constructor() {
    super();
    this.progress = -1;
    this.isResuming = false;
    this.batteryPercent = 0;
    this.necessaryBatteryPercent = 0;
    this.isEnoughBattery = true;
    this.isCharging = false;
    this.isSkipped = false;
    this.availableSpaceInString = '';
    this.necessarySpaceInString = '';
  }

  get UI_STEPS() {
    return EncryptionMigrationUIState;
  }

  defaultUIStep() {
    return EncryptionMigrationUIState.INITIAL;
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.MIGRATION;
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return [
      'setUIState',
      'setMigrationProgress',
      'setIsResuming',
      'setBatteryState',
      'setNecessaryBatteryPercent',
      'setSpaceInfoInString',
    ];
  }
  // clang-format on

  ready() {
    super.ready();
    this.initializeLoginScreen('EncryptionMigrationScreen');
  }

  /**
   * Updates the migration screen by specifying a state which corresponds
   * to a sub step in the migration process.
   * @param {number} state The UI state to identify a sub step in migration.
   */
  setUIState(state) {
    this.setUIStep(Object.values(EncryptionMigrationUIState)[state]);
  }

  /**
   * Updates the migration progress.
   * @param {number} progress The progress of migration in range [0, 1].
   */
  setMigrationProgress(progress) {
    this.progress = progress;
  }

  /**
   * Updates the migration screen based on whether the migration process
   * is resuming the previous one.
   * @param {boolean} isResuming
   */
  setIsResuming(isResuming) {
    this.isResuming = isResuming;
  }

  /**
   * Updates battery level of the device.
   * @param {number} batteryPercent Battery level in percent.
   * @param {boolean} isEnoughBattery True if the battery is enough.
   * @param {boolean} isCharging True if the device is connected to power.
   */
  setBatteryState(batteryPercent, isEnoughBattery, isCharging) {
    this.batteryPercent = Math.floor(batteryPercent);
    this.isEnoughBattery = isEnoughBattery;
    this.isCharging = isCharging;
  }

  /**
   * Update the necessary battery percent to start migration in the UI.
   * @param {number} necessaryBatteryPercent Necessary battery level.
   */
  setNecessaryBatteryPercent(necessaryBatteryPercent) {
    this.necessaryBatteryPercent = necessaryBatteryPercent;
  }

  /**
   * Updates the string representation of available space size and necessary
   * space size.
   * @param {string} availableSpaceSize
   * @param {string} necessarySpaceSize
   */
  setSpaceInfoInString(availableSpaceSize, necessarySpaceSize) {
    this.availableSpaceInString = availableSpaceSize;
    this.necessarySpaceInString = necessarySpaceSize;
  }

  /**
   * Returns true if the current migration progress is unknown.
   * @param {number} progress
   * @private
   */
  isProgressIndeterminate_(progress) {
    return progress < 0;
  }

  /**
   * Returns true if the 'Update' button should be disabled.
   * @param {boolean} isEnoughBattery
   * @param {boolean} isSkipped
   * @private
   */
  isUpdateDisabled_(isEnoughBattery, isSkipped) {
    return !isEnoughBattery || isSkipped;
  }

  /**
   * Returns true if the 'Skip' button on the initial screen should be hidden.
   * @return {boolean}
   */
  isSkipHidden_() {
    // TODO(fukino): Instead of checking the board name here to behave
    // differently, it's recommended to add a command-line flag to Chrome and
    // make session_manager pass it based on a feature-based USE flag which is
    // set in the appropriate board overlays.
    // https://goo.gl/BbBkzg.
    return this.i18n('migrationBoardName').startsWith('kevin');
  }

  /**
   * Computes the label shown under progress bar.
   * @param {string} locale
   * @param {number} progress
   * @return {string}
   * @private
   */
  computeProgressLabel_(locale, progress) {
    return this.i18n('migrationProgressLabel', Math.floor(progress * 100));
  }

  /**
   * Computes the warning label when battery level is not enough.
   * @param {string} locale
   * @param {number} batteryPercent
   * @return {string}
   * @private
   */
  computeBatteryWarningLabel_(locale, batteryPercent) {
    return this.i18n('migrationBatteryWarningLabel', batteryPercent);
  }

  /**
   * Computes the label to show the necessary battery level for migration.
   * @param {string} locale
   * @param {number} necessaryBatteryPercent
   * @return {string}
   * @private
   */
  computeNecessaryBatteryLevelLabel_(locale, necessaryBatteryPercent) {
    return this.i18n(
        'migrationNecessaryBatteryLevelLabel', necessaryBatteryPercent);
  }

  /**
   * Computes the label to show the current available space.
   * @param {string} locale
   * @param {string} availableSpaceInString
   * @return {string}
   * @private
   */
  computeAvailableSpaceLabel_(locale, availableSpaceInString) {
    return this.i18n('migrationAvailableSpaceLabel', availableSpaceInString);
  }

  /**
   * Computes the label to show the necessary space to start migration.
   * @param {string} locale
   * @param {string} necessarySpaceInString
   * @return {string}
   * @private
   */
  computeNecessarySpaceLabel_(locale, necessarySpaceInString) {
    return this.i18n('migrationNecessarySpaceLabel', necessarySpaceInString);
  }

  /**
   * Handles tap on UPGRADE button.
   * @private
   */
  onUpgrade_() {
    // TODO(crbug.com/1133705) Move the logic from handler to screen object and
    // use userActed call.
    this.userActed('startMigration');
  }

  /**
   * Handles tap on SKIP button.
   * @private
   */
  onSkip_() {
    this.isSkipped = true;
    this.userActed('skipMigration');
  }

  /**
   * Handles tap on RESTART button.
   * @private
   */
  onRestartOnLowStorage_() {
    this.userActed('requestRestartOnLowStorage');
  }

  /**
   * Handles tap on RESTART button on the migration failure screen.
   * @private
   */
  onRestartOnFailure_() {
    this.userActed('requestRestartOnFailure');
  }

  /**
   * Handles tap on REPORT AN ISSUE button.
   * @private
   */
  onReportAnIssue_() {
    this.userActed('openFeedbackDialog');
  }
}

customElements.define(EncryptionMigration.is, EncryptionMigration);
