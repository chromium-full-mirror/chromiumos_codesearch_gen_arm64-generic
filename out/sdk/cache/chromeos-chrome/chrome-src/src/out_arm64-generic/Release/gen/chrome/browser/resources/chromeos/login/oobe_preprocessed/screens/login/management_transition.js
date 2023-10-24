// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design management
 * transition screen.
 */

import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


const ManagementTransitionUIState = {
  PROGRESS: 'progress',
  ERROR: 'error',
};

/**
 * Possible transition types. Must be in the same order as
 * ArcSupervisionTransition enum values.
 * @enum {number}
 */
const ARC_SUPERVISION_TRANSITION = {
  NO_TRANSITION: 0,
  CHILD_TO_REGULAR: 1,
  REGULAR_TO_CHILD: 2,
  UNMANAGED_TO_MANAGED: 3,
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const ManagementTransitionScreenBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

class ManagementTransitionScreen extends ManagementTransitionScreenBase {
  static get is() {
    return 'management-transition-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2018 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  paper-progress {
    --paper-progress-active-color: var(--cros-slider-color-active);
    --paper-progress-container-color: var(--cros-slider-track-color-active);
    --paper-progress-secondary-color: var(--cros-slider-color-active);
    height: 3px;
    width: 100%;
  }

  :host-context(.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-sys-primary);
    --paper-progress-container-color: var(--cros-sys-primary_container);
    --paper-progress-secondary-color: var(--cros-sys-primary);
  }

</style>
<oobe-adaptive-dialog id="managementTransitionDialog" role="dialog"
    aria-label$="[[getDialogTitle_(locale, arcTransition_, managementEntity_)]]"
    for-step="progress">
  <iron-icon slot="icon" icon="oobe-32:enterprise" aria-hidden="true"
    hidden="[[isChildTransition_(arcTransition_)]]">
  </iron-icon>
  <iron-icon slot="icon" src="images/supervision_icon.png"
    aria-hidden="true" hidden="[[!isChildTransition_(arcTransition_)]]">
  </iron-icon>
  <h1 slot="title">
    [[getDialogTitle_(locale, arcTransition_, managementEntity_)]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'managementTransitionIntroMessage')]]
  </div>
  <div slot="content" class="flex layout vertical center-justified"
      aria-live="off">
    <paper-progress class="slow" aria-hidden="true" indeterminate>
    </paper-progress>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="managementTransitionErrorDialog" role="dialog"
    aria-label$="[[i18nDynamic(locale,'managementTransitionErrorTitle')]]"
    for-step="error">
  <iron-icon slot="icon" icon="oobe-32:enterprise" aria-hidden="true"
    hidden="[[isChildTransition_(arcTransition_)]]">
  </iron-icon>
  <iron-icon slot="icon" src="images/supervision_icon.png"
    aria-hidden="true" hidden="[[!isChildTransition_(arcTransition_)]]">
  </iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'managementTransitionErrorTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'managementTransitionErrorMessage')]]
  </div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="accept-button" on-click="onAcceptAndContinue_"
        text-key="managementTransitionErrorButton" class="focus-on-show"
        inverse>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Property that determines transition direction.
       */
      arcTransition_: Number,
      /**
       * String that represents management entity for the user. Can be domain or
       * admin name.
       */
      managementEntity_: String,
    };
  }

  constructor() {
    super();
    this.managementEntity_ = '';
    this.arcTransition_ = ARC_SUPERVISION_TRANSITION.NO_TRANSITION;
  }

  defaultUIStep() {
    return ManagementTransitionUIState.PROGRESS;
  }

  get UI_STEPS() {
    return ManagementTransitionUIState;
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return ['showStep'];
  }
  // clang-format on

  ready() {
    super.ready();
    this.initializeLoginScreen('ManagementTransitionScreen');
  }

  onBeforeShow(data) {
    this.setArcTransition(data['arcTransition']);
    this.setManagementEntity(data['managementEntity']);
  }

  /**
   * Switches between different steps.
   * @param {string} step the steps to show
   */
  showStep(step) {
    this.setUIStep(step);
  }

  /**
   * Sets arc transition type.
   * @param {number} arc_transition enum element indicating transition type
   */
  setArcTransition(arc_transition) {
    switch (arc_transition) {
      case ARC_SUPERVISION_TRANSITION.CHILD_TO_REGULAR:
      case ARC_SUPERVISION_TRANSITION.REGULAR_TO_CHILD:
      case ARC_SUPERVISION_TRANSITION.UNMANAGED_TO_MANAGED:
        this.arcTransition_ = arc_transition;
        break;
      case ARC_SUPERVISION_TRANSITION.NO_TRANSITION:
        console.error(
            'Screen should not appear for ARC_SUPERIVISION_TRANSITION.NO_TRANSITION');
        break;
      default:
        console.error('Not handled transition type: ' + arc_transition);
    }
  }

  setManagementEntity(management_entity) {
    this.managementEntity_ = management_entity;
  }

  /** @private */
  getDialogTitle_(locale, arcTransition, managementEntity) {
    switch (arcTransition) {
      case ARC_SUPERVISION_TRANSITION.CHILD_TO_REGULAR:
        return this.i18n('removingSupervisionTitle');
      case ARC_SUPERVISION_TRANSITION.REGULAR_TO_CHILD:
        return this.i18n('addingSupervisionTitle');
      case ARC_SUPERVISION_TRANSITION.UNMANAGED_TO_MANAGED:
        if (managementEntity) {
          return this.i18n('addingManagementTitle', managementEntity);
        } else {
          return this.i18n('addingManagementTitleUnknownAdmin');
        }
    }
  }

  /** @private */
  isChildTransition_(arcTransition) {
    return arcTransition != ARC_SUPERVISION_TRANSITION.UNMANAGED_TO_MANAGED;
  }

  /**
   * On-tap event handler for OK button.
   *
   * @private
   */
  onAcceptAndContinue_() {
    this.userActed(['finish-management-transition']);
  }
}

customElements.define(
    ManagementTransitionScreen.is, ManagementTransitionScreen);
