// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';

/**
 * Type of the password for setting up for the user.
 * @enum {string}
 */
const PasswordType = {
  LOCAL_PASSWORD: 'local-password',
  GAIA_PASSWORD: 'gaia-password',
};

/**
 * UI mode for the dialog.
 * @enum {string}
 */
const PasswordSelectionState = {
  SELECTION: 'selection',
  PROGRESS: 'progress',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const PasswordSelectionBase = mixinBehaviors(
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
class PasswordSelection extends PasswordSelectionBase {
  static get is() {
    return 'password-selection-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!-- Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file. -->

<style include="oobe-dialog-host-styles cr-card-radio-group-styles
    cros-color-overrides">
@media screen and (max-width: 920px) {
  :host {
    --radio-button-height: 155px;
  }
}

.card-icon {
  height: 32px;
  width: 32px;
}
</style>

<oobe-adaptive-dialog role="presentation" aria-live="polite"
    for-step="selection">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'passwordSelectionTitle')]]
  </h1>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <cr-radio-group id="userType" selected="{{selectedPasswordType}}">
      <cr-card-radio-button id="localPasswordButton" class="flex"
          name="[[passwordTypeEnum_.LOCAL_PASSWORD]]">
        <div class="card-container">
          <iron-icon icon="oobe-32:password" class="card-icon">
          </iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'localPasswordSelectionLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="childButton" class="flex"
          name="[[passwordTypeEnum_.GAIA_PASSWORD]]">
        <div class="card-container">
          <iron-icon icon="oobe-32:google-g" class="card-icon">
          </iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'gaiaPasswordSelectionLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
    </cr-radio-group>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" on-click="onBackClicked_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton" class="focus-on-show"
        on-click="onNextClicked_" disabled="[[!selectedPasswordType]]">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-loading-dialog id="password-selection-progress" role="dialog"
    for-step="progress" title-key="gaiaLoading">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
</oobe-loading-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * The currently selected password type.
       */
      selectedPasswordType: {
        type: String,
      },

      /**
       * Enum values for `selectedPasswordType`.
       * @private {PasswordType}
       */
      passwordTypeEnum_: {
        readOnly: true,
        type: Object,
        value: PasswordType,
      },
    };
  }

  /** @override */
  ready() {
    super.ready();

    this.initializeLoginScreen('PasswordSelectionScreen');
  }
  get EXTERNAL_API() {
    return [
      'showProgress',
      'showPasswordChoice',
    ];
  }

  get UI_STEPS() {
    return PasswordSelectionState;
  }

  defaultUIStep() {
    return PasswordSelectionState.PROGRESS;
  }

  // Invoked just before being shown. Contains all the data for the screen.
  onBeforeShow(data) {
    this.selectedPasswordType = PasswordType.LOCAL_PASSWORD;
  }

  showProgress() {
    this.setUIStep(PasswordSelectionState.PROGRESS);
  }

  showPasswordChoice() {
    this.setUIStep(PasswordSelectionState.SELECTION);
  }

  onBackClicked_() {
    this.userActed('back');
  }

  onNextClicked_() {
    this.userActed(this.selectedPasswordType);
  }
}

customElements.define(PasswordSelection.is, PasswordSelection);
