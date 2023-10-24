// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for drive pinning screen.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

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
const DrivePinningScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * Enum to represent steps on the drive pinning screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 * @enum {string}
 */
const DrivePinningStep = {
  OVERVIEW: 'overview',
};


/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  ACCEPT: 'driveNext',
  RETURN: 'return',
};

/**
 * @polymer
 */
class DrivePinningScreen extends DrivePinningScreenElementBase {
  static get is() {
    return 'drive-pinning-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles cros-color-overrides">
  #toggleRow {
    border-top: 1px solid var(--cros-sys-separator);
    color: var(--cros-bg-color);
    margin-top: 24px;
  }

  .toggle-subtitle {
    color: var(--cros-text-color-secondary);
  }

  :host-context(.jelly-enabled) .toggle-subtitle {
    color: var(--oobe-subheader-text-color);
    font-family: var(--oobe-drive-pinning-subtitle-font-family);
    font-size: var(--oobe-drive-pinning-subtitle-font-size);
    font-weight: var(--oobe-drive-pinning-subtitle-font-weight);
    line-height: var(--oobe-drive-pinning-subtitle-line-height);
  }

  .toggle-title {
    color: var(--cros-text-color-primary);
  }

  :host-context(.jelly-enabled) .toggle-title {
    color: var(--oobe-subheader-text-color);
    font-family: var(--oobe-drive-pinning-title-font-family);
    font-size: var(--oobe-drive-pinning-title-font-size);
    font-weight: var(--oobe-drive-pinning-title-font-weight);
    line-height: var(--oobe-drive-pinning-title-line-height);
  }

  #drivePinningToggle {
    margin-left: 16px;
    margin-right: 24px;
  }

  #drivePinningOptionLabel,
  #drivePinningToggle {
    margin-top: 16px;
  }

  #deviceDescription {
    margin-top: 0px;
  }
</style>
<oobe-adaptive-dialog id="drivePinningDialogue" role="dialog"
    for-step="overview">
    <iron-icon slot="icon" icon="oobe-32:drive"></iron-icon>
    <h1 slot="title">
        [[i18nDynamic(locale, 'DevicePinningScreenTitle')]]
    </h1>
    <div slot="subtitle">
        <p id="deviceDescription">
            [[i18nDynamic(locale, 'DevicePinningScreenDescription')]]
        </p>
         <!-- Toggle row -->
        <div class="layout horizontal center"
            id="toggleRow">
            <div id="drivePinningOptionLabel" class="flex layout vertical"
                    aria-hidden="true">
                <div class="toggle-title">
                    [[i18nDynamic(locale, 'DevicePinningScreenToggleTitle')]]
                </div>
                <div id="spaceInformation" class="toggle-subtitle">
                    [[getSpaceDescription_(locale, requiredSpace_, freeSpace_)]]
                </div>
            </div>
            <cr-toggle id="drivePinningToggle"
                    checked="{{enableDrivePinning_}}"
                    aria-checked="[[enableDrivePinning_]]"
                    aria-labelledby="DrivePinningOptionLabel">
            </cr-toggle>
        </div>
    </div>
    <div slot="content"  class="flex layout vertical center-justified center">
        <iron-icon icon="oobe-illos:drive-sync-illo"
            class="illustration-jelly">
        </iron-icon>
    </div>
    <div slot="bottom-buttons">
        <oobe-text-button id="returnButton" text-key="choobeReturnButton"
                hidden="[[!shouldShowReturn_]]" on-click="onReturnClicked_">
        </oobe-text-button>
        <oobe-next-button id="nextButton" class="focus-on-show"
                on-click="onNextButtonClicked_">
        </oobe-next-button>
    </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Available free space in the disk.
       * @private {String}
       */
      freeSpace_: {
        type: String,
      },

      /**
       * Required space by the drive for pinning.
       * @private {String}
       */
      requiredSpace_: {
        type: String,
      },

      enableDrivePinning_: {
        type: Boolean,
        value: true,
      },

      /**
       * Whether the button to return to CHOOBE screen should be shown.
       * @private
       */
      shouldShowReturn_: {
        type: Boolean,
        value: false,
      },
    };
  }

  get EXTERNAL_API() {
    return ['setRequiredSpaceInfo'];
  }

  get UI_STEPS() {
    return DrivePinningStep;
  }

  defaultUIStep() {
    return DrivePinningStep.OVERVIEW;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('DrivePinningScreen');
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  onBeforeShow(data) {
    this.shouldShowReturn_ = data['shouldShowReturn'];
  }


  getSpaceDescription_(locale, requiredSpace, freeSpace) {
    if (requiredSpace && freeSpace) {
      return this.i18nDynamic(
          locale, 'DevicePinningScreenToggleSubtitle', requiredSpace,
          freeSpace);
    }
    return '';
  }

  /**
   * Set the required space and free space information.
   */
  setRequiredSpaceInfo(requiredSpace, freeSpace) {
    this.requiredSpace_ = requiredSpace;
    this.freeSpace_ = freeSpace;
  }

  onNextButtonClicked_() {
    this.userActed([UserAction.ACCEPT, this.enableDrivePinning_]);
  }

  onReturnClicked_() {
    this.userActed([UserAction.RETURN, this.enableDrivePinning_]);
  }
}

customElements.define(DrivePinningScreen.is, DrivePinningScreen);
