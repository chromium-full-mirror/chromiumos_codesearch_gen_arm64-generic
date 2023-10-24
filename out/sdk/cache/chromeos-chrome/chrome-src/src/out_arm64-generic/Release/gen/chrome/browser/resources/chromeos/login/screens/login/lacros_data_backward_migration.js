// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for lacros data backward migration screen.
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
const LacrosDataBackwardMigrationScreenElementBase = mixinBehaviors(
    [
      OobeDialogHostBehavior,
      OobeI18nBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

/** @polymer */
class LacrosDataBackwardMigrationScreen extends
    LacrosDataBackwardMigrationScreenElementBase {
  static get is() {
    return 'lacros-data-backward-migration-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog id="progressDialog" for-step="progress" id="dialog"
                      role="dialog">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'lacrosDataBackwardMigrationTitle')]]
  </h1>
  <paper-progress slot="progress" min="0" max="100"
      value="[[progressValue_]]">
  </paper-progress>
  <div slot="subtitle">
    <p role="status" aria-live="polite">
      [[i18nDynamic(locale, 'lacrosDataBackwardMigrationSubtitle',
      progressValue_)]]
    </p>
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:update-boot-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="errorDialog" for-step="error" role="dialog"
                      footer-shrinkable>
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'lacrosDataBackwardMigrationErrorTitle')]]
  </h1>
  <div slot="subtitle">
    <p>
      [[i18nDynamic(locale, 'lacrosDataBackwardMigrationErrorSubtitle')]]
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
                      text-key="lacrosDataBackwardMigrationErrorCancelButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      progressValue_: {
        type: Number,
        value: 0,
      },
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
      'setFailureStatus',
    ];
  }

  /**
   * Called when the migration failed.
  */
  setFailureStatus() {
    this.setUIStep('error');
  }

  /**
   * Called to update the progress of data migration.
   * @param {number} progress Percentage of data copied so far.
   */
  setProgressValue(progress) {
    this.progressValue_ = progress;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('LacrosDataBackwardMigrationScreen');
  }

  onCancelButtonClicked_() {
    this.userActed('cancel');
  }
}

customElements.define(
    LacrosDataBackwardMigrationScreen.is, LacrosDataBackwardMigrationScreen);
