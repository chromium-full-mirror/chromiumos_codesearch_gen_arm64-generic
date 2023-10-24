// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for lacros data migration screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_slide.js';

import {assert} from '//resources/ash/common/assert.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const LacrosDataMigrationScreenElementBase = mixinBehaviors(
    [
      OobeDialogHostBehavior,
      OobeI18nBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

class LacrosDataMigrationScreen extends LacrosDataMigrationScreenElementBase {
  static get is() {
    return 'lacros-data-migration-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  <!-- TODO(crbug.com/1296174): merge following with other copies. -->
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
</style>
<oobe-adaptive-dialog id="progressDialog" for-step="progress" id="dialog"
                      role="dialog">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'lacrosDataMigrationTitle')]]</h1>
  <paper-progress slot="progress" min="0" max="100"
      value="[[progressValue_]]">
  </paper-progress>
  <div slot="subtitle">
    <p role="status" aria-live="polite">
      [[i18nDynamic(locale, 'lacrosDataMigrationSubtitle', progressValue_)]]
    </p>
    <p hidden="[[!canSkip_]]">
      [[i18nDynamic(locale, 'lacrosDataMigrationSkipSuggestion')]]
    </p>
  </div>
  <div slot="content" class="flex layout vertical center center-justified"
       hidden="[[lowBatteryStatus_]]" id="updating">
    <iron-icon icon="oobe-illos:update-boot-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div hidden="[[!lowBatteryStatus_]]" class="slide-view"
       slot="content", id="lowBattery">
    <oobe-slide is-warning>
      <iron-icon slot="slide-img" icon="oobe-illos:update-charge-illo"
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

  <!-- Skip button -->
  <div slot="bottom-buttons" class="flex layout horizontal end-justified">
    <oobe-text-button id="skipButton"  hidden="[[!canSkip_]]"
        on-click="onSkipButtonClicked_"
        text-key="lacrosDataMigrationSkipButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="errorDialog" for-step="error" role="dialog"
                      footer-shrinkable>
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'lacrosDataMigrationErrorTitle')]]
  </h1>
  <div slot="subtitle" id="lowDiskSpaceError"
       hidden="[[!requiredSizeStr_]]">
    <p>
      [[i18nDynamic(locale, 'lacrosDataMigrationErrorLowDiskSpace',
                    requiredSizeStr_)]]
    </p>
  </div>
  <div slot="subtitle" id="genericError" hidden="[[requiredSizeStr_]]">
    <p>
      [[i18nDynamic(locale, 'lacrosDataMigrationErrorSubtitle')]]
    </p>
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>

  <!-- Cancel button -->
  <div slot="bottom-buttons" class="layout horizontal end-justified">
    <oobe-text-button id="cancelButton"
                      on-click="onCancelButtonClicked_"
                      text-key="lacrosDataMigrationErrorCancelButton">
    </oobe-text-button>
    <oobe-text-button id="gotoFilesButton"
                      on-click="onGotoFilesButtonClicked_"
                      text-key="lacrosDataMigrationErrorGotoFilesButton"
                      hidden="[[!showGotoFiles_]]"
                      inverse>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  constructor() {
    super();
    this.progressValue_ = 0;
    this.canSkip_ = false;
    this.lowBatteryStatus_ = false;
    this.requiredSizeStr_ = '';
    this.showGotoFiles_ = false;
  }

  static get properties() {
    return {
      progressValue_: {type: Number},

      canSkip_: {type: Boolean},
      lowBatteryStatus_: {type: Boolean},
      requiredSizeStr_: {type: String},
      showGotoFiles_: {type: Boolean},
    };
  }

  defaultUIStep() {
    return 'progress';
  }

  get UI_STEPS() {
    return {
      PROGRESS: 'progress',
      ERROR: 'error',
    };
  }

  get EXTERNAL_API() {
    return [
      'setProgressValue',
      'showSkipButton',
      'setLowBatteryStatus',
      'setFailureStatus',
    ];
  }

  /**
   * Called when the migration failed.
   * @param {string} requiredSizeStr The extra space that users need to free up
   *     to run the migration formatted into a string. Maybe empty, if the
   *     failure is not caused by low disk space.
   * @param {boolean} showGotoFiles If true, displays the "goto files" button.
   */
  setFailureStatus(requiredSizeStr, showGotoFiles) {
    this.requiredSizeStr_ = requiredSizeStr;
    this.showGotoFiles_ = showGotoFiles;
    this.setUIStep('error');
  }

  /**
   * Called to update the progress of data migration.
   * @param {number} progress Percentage of data copied so far.
   */
  setProgressValue(progress) {
    this.progressValue_ = progress;
  }

  /**
   * Called to make the skip button visible.
   */
  showSkipButton() {
    this.canSkip_ = true;
  }

  /**
   * Called on updating low battery status.
   * @param {boolean} status Whether or not low-battery UI should
   *   show. Specifically, if battery is low and no charger is connected.
   */
  setLowBatteryStatus(status) {
    this.lowBatteryStatus_ = status;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('LacrosDataMigrationScreen');
  }

  onSkipButtonClicked_() {
    assert(this.canSkip_);
    this.userActed('skip');
  }

  onCancelButtonClicked_() {
    this.userActed('cancel');
  }

  onGotoFilesButtonClicked_() {
    this.userActed('gotoFiles');
  }
}

customElements.define(LacrosDataMigrationScreen.is, LacrosDataMigrationScreen);
