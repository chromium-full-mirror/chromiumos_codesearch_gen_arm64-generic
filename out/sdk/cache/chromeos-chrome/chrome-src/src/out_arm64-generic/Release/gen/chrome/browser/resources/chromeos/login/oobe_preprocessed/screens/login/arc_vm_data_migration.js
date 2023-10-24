// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for ARCVM /data migration screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_icons.html.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';

// Keep in sync with ArcVmDataMigrationScreenView::UIState.
var ArcVmDataMigrationUIState = {
  LOADING: 'loading',
  WELCOME: 'welcome',
  RESUM: 'resume',
  PROGRESS: 'progress',
  SUCCESS: 'success',
  FAILURE: 'failure',
};

// Keep in sync with kUserAction* in arc_vm_data_migration_screen.cc.
var ArcVmDataMigrationUserAction = {
  SKIP: 'skip',
  UPDATE: 'update',
  RESUME: 'resume',
  FINISH: 'finish',
  REPORT: 'report',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const ArcVmDataMigrationScreenElementBase = mixinBehaviors(
    [
      OobeDialogHostBehavior,
      OobeI18nBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

class ArcVmDataMigrationScreen extends ArcVmDataMigrationScreenElementBase {
  static get is() {
    return 'arc-vm-data-migration-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  #description-body {
    margin: 8px 0 8px 0;
  }
  div.warning {
    padding-bottom: 19px;
    padding-top: 21px;
  }
  .warning-message {
    margin-inline-start: 20px;
  }
  paper-progress {
    --paper-progress-active-color: var(--cros-color-prominent);
    --paper-progress-secondary-color: var(--cros-color-prominent-dark);
    margin-bottom: 20px;
    margin-top: 20px;
  }

  :host-context(.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-sys-primary);
    --paper-progress-container-color: var(--cros-sys-primary_container);
    --paper-progress-secondary-color: var(--cros-color-prominent-dark);
  }
</style>

<oobe-loading-dialog id="loading-dialog" for-step="loading" role="dialog"
    title-key="loadingDialogTitle">
  <iron-icon slot="icon"
             icon="oobe-32:arc-vm-data-migration-icon"
             aria-hidden="true">
  </iron-icon>
</oobe-loading-dialog>

<oobe-adaptive-dialog id="welcome-dialog" for-step="welcome" role="dialog">
  <iron-icon slot="icon"
             icon="oobe-32:arc-vm-data-migration-icon"
             aria-hidden="true">
  </iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'welcomeScreenTitle')]]</h1>
  <div slot="content" class="landscape-header-aligned">
    <div id="description-header">
      <b>[[i18nDynamic(locale, 'welcomeScreenDescriptionHeader')]]</b>
    </div>
    <div id="description-body">
      <p>[[i18nDynamic(locale, 'welcomeScreenUpdateDescription')]]</p>
      <p>
        [[i18nDynamic(locale, 'welcomeScreenBlockingBehaviorDescription')]]
        [[i18nDynamic(locale, 'connectToChargerMessage')]]
      </p>
    </div>
    <div class="message-container">
      <div class="warning" hidden="[[hasEnoughFreeDiskSpace]]">
        <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
        <span class="warning-message">
          [[i18nDynamic(locale, 'notEnoughFreeDiskSpaceMessage',
                        requiredFreeDiskSpaceInString)]]
        </span>
      </div>
      <div class="warning" hidden="[[hasEnoughBattery]]">
        <iron-icon icon="oobe-32:warning"></iron-icon>
        <span class="warning-message">
          [[i18nDynamic(locale, 'notEnoughBatteryMessage',
                        minimumBatteryPercent)]]
        </span>
      </div>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skip-button"
        on-click="onSkipButtonClicked_"
        text-key="skipButtonLabel">
    </oobe-text-button>
    <oobe-next-button inverse id="update-button"
        disabled="[[shouldDisableUpdateButton_(hasEnoughFreeDiskSpace,
                                               hasEnoughBattery)]]"
        on-click="onUpdateButtonClicked_"
        text-key="updateButtonLabel">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="resume-dialog" for-step="resume" role="dialog">
  <iron-icon slot="icon"
             icon="oobe-32:arc-vm-data-migration-icon"
             aria-hidden="true">
  </iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'resumeScreenTitle')]]</h1>
  <div slot="content" class="landscape-header-aligned">
    <div id="description-header">
      <b>[[i18nDynamic(locale, 'resumeScreenDescriptionHeader')]]</b>
    </div>
    <div id="description-body">
      [[i18nDynamic(locale, 'resumeScreenDescriptionBody')]]
      [[i18nDynamic(locale, 'connectToChargerMessage')]]
    </div>
    <div class="message-container">
      <div class="warning" hidden="[[hasEnoughBattery]]">
        <iron-icon icon="oobe-32:warning"></iron-icon>
        <span class="warning-message">
          [[i18nDynamic(locale, 'notEnoughBatteryMessage',
                        minimumBatteryPercent)]]
        </span>
      </div>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button inverse id="resume-button"
        disabled="[[!hasEnoughBattery]]"
        on-click="onResumeButtonClicked_"
        text-key="resumeButtonLabel">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="progress-dialog" for-step="progress" role="dialog">
  <iron-icon slot="icon"
             icon="oobe-32:arc-vm-data-migration-icon"
             aria-hidden="true">
  </iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'progressScreenTitle')]]</h1>
  <div slot="subtitle" class="progress">
    <div id="progress-message"
         hidden="[[isProgressIndeterminate_(migrationProgress)]]">
      [[i18nDynamic(locale, 'progressScreenSubtitle',
          migrationProgress, estimatedRemainingTimeInString)]]
    </div>
    <paper-progress slot="progress" id="migration-progress"
        value="[[migrationProgress]]"
        max="100"
        step="0.1"
        indeterminate="[[isProgressIndeterminate_(migrationProgress)]]">
    </paper-progress>
    <div id="progress-screen-connect-to-charger-message">
      [[i18nDynamic(locale, 'connectToChargerMessage')]]
    </div>
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:update-no-waiting-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="success-dialog" for-step="success" role="dialog">
  <iron-icon slot="icon" icon="oobe-32:checkmark"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'successScreenTitle')]]</h1>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:arc-vm-data-migration-success-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button inverse id="finish-button"
        on-click="onFinishButtonClicked_"
        text-key="finishButtonLabel">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="failure-dialog" for-step="failure" role="dialog">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'failureScreenTitle')]]</h1>
  <div slot="subtitle" class="failure">
    <p>[[i18nDynamic(locale, 'failureScreenDescription')]]</p>
    <p>[[i18nDynamic(locale, 'failureScreenAskFeedbackReport')]]</p>
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="report-button"
        on-click="onReportButtonClicked_"
        text-key="reportButtonLabel">
    </oobe-text-button>
    <oobe-text-button inverse id="finish-button"
        on-click="onFinishButtonClicked_"
        text-key="finishButtonLabel">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      hasEnoughFreeDiskSpace: Boolean,
      requiredFreeDiskSpaceInString: String,
      minimumBatteryPercent: Number,
      hasEnoughBattery: Boolean,
      isConnectedToCharger: Boolean,
      migrationProgress: Number,
      estimatedRemainingTimeInString: String,
    };
  }

  constructor() {
    super();
    this.hasEnoughFreeDiskSpace = true;
    this.requiredFreeDiskSpaceInString = '';
    this.minimumBatteryPercent = 0;
    this.hasEnoughBattery = true;
    this.isConnectedToCharger = true;
    this.migrationProgress = -1;
    this.estimatedRemainingTimeInString = '';
  }

  defaultUIStep() {
    return ArcVmDataMigrationUIState.LOADING;
  }

  get UI_STEPS() {
    return ArcVmDataMigrationUIState;
  }

  get EXTERNAL_API() {
    return [
      'setUIState',
      'setRequiredFreeDiskSpace',
      'setMinimumBatteryPercent',
      'setBatteryState',
      'setMigrationProgress',
      'setEstimatedRemainingTime',
    ];
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('ArcVmDataMigrationScreen');
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.MIGRATION;
  }

  setUIState(state) {
    this.setUIStep(Object.values(ArcVmDataMigrationUIState)[state]);
  }

  setRequiredFreeDiskSpace(requiredFreeDiskSpaceInString) {
    this.hasEnoughFreeDiskSpace = false;
    this.requiredFreeDiskSpaceInString = requiredFreeDiskSpaceInString;
  }

  setMinimumBatteryPercent(minimumBatteryPercent) {
    this.minimumBatteryPercent = Math.floor(minimumBatteryPercent);
  }

  setBatteryState(hasEnoughBattery, isConnectedToCharger) {
    this.hasEnoughBattery = hasEnoughBattery;
    this.isConnectedToCharger = isConnectedToCharger;
  }

  setMigrationProgress(migrationProgress) {
    this.migrationProgress = Math.floor(migrationProgress);
  }

  setEstimatedRemainingTime(estimatedRemainingTimeInString) {
    this.estimatedRemainingTimeInString = estimatedRemainingTimeInString;
  }

  shouldDisableUpdateButton_(hasEnoughFreeDiskSpace, hasEnoughBattery) {
    return !hasEnoughFreeDiskSpace || !hasEnoughBattery;
  }

  isProgressIndeterminate_(migrationProgress) {
    return migrationProgress < 0;
  }

  onSkipButtonClicked_() {
    this.userActed(ArcVmDataMigrationUserAction.SKIP);
  }

  onUpdateButtonClicked_() {
    this.userActed(ArcVmDataMigrationUserAction.UPDATE);
  }

  onResumeButtonClicked_() {
    this.userActed(ArcVmDataMigrationUserAction.RESUME);
  }

  onFinishButtonClicked_() {
    this.userActed(ArcVmDataMigrationUserAction.FINISH);
  }

  onReportButtonClicked_() {
    this.userActed(ArcVmDataMigrationUserAction.REPORT);
  }
}

customElements.define(ArcVmDataMigrationScreen.is, ArcVmDataMigrationScreen);
