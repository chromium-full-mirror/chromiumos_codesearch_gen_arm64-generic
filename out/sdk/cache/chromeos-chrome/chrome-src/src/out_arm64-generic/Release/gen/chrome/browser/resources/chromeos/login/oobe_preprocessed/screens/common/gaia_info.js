// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

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
const GaiaInfoScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @enum {string}
 */
const GaiaInfoStep = {
  OVERVIEW: 'overview',
};

/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  BACK: 'back',
  NEXT: 'next',
};

/**
 * @polymer
 */
class GaiaInfoScreen extends GaiaInfoScreenElementBase {
  static get is() {
    return 'gaia-info-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles">
    #gaiaInfoAnimation {
      width: 100%;
      height: 100%;
      overflow-y: hidden;
    }
</style>

<oobe-adaptive-dialog id="gaiaInfoDialog" role="dialog"
    for-step="overview" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title" id="gaia-info-title">
    [[i18nDynamic(locale, 'gaiaInfoScreenTitle')]]
  </h1>
  <span inner-h-t-m-l=
      "[[i18nAdvancedDynamic(locale, 'gaiaInfoScreenDescription')]]"
      slot="subtitle">
  </span>
  <div slot="content" class="flex layout vertical center center-justified">
    <oobe-cr-lottie id="gaiaInfoAnimation"
        animation-url="animations/gaia_info.json">
    </oobe-cr-lottie>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" on-click="onBackClicked_"
        hidden="[[!isBackButtonVisible_]]">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton" class="focus-on-show"
      on-click="onNextClicked_">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {};
  }

  get UI_STEPS() {
    return GaiaInfoStep;
  }

  onBeforeShow() {
    this.setAnimationPlaying_(true);
  }

  onBeforeHide() {
    this.setAnimationPlaying_(false);
  }

  defaultUIStep() {
    return GaiaInfoStep.OVERVIEW;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('GaiaInfoScreen');
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.GAIA_INFO;
  }

  onNextClicked_() {
    this.userActed(UserAction.NEXT);
  }

  onBackClicked_() {
    this.userActed(UserAction.BACK);
  }

  setAnimationPlaying_(enabled) {
    this.$.gaiaInfoAnimation.playing = enabled;
  }
}

customElements.define(GaiaInfoScreen.is, GaiaInfoScreen);
