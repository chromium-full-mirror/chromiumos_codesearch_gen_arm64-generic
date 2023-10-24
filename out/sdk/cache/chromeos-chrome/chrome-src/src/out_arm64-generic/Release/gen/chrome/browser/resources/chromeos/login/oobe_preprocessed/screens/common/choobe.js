// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for theme selection screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';
import {OobeScreensList} from '../../components/oobe_screens_list.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const ChoobeScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);


const ChoobeStep = {
  OVERVIEW: 'overview',
};

/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  SKIP: 'choobeSkip',
  NEXT: 'choobeSelect',
};

/**
 * @polymer
 */
class ChoobeScreen extends ChoobeScreenElementBase {
  static get is() {
    return 'choobe-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="oobe-dialog-host-styles">
</style>
<oobe-adaptive-dialog id="choobeDialog" role="presentation"
      for-step="overview">
    <iron-icon slot="icon" icon="oobe-32:choobe-icon"></iron-icon>
    <h1 slot="title" id="choobe-title">
      [[i18nDynamic(locale, 'choobeScreenTitle')]]
    </h1>
    <div slot="subtitle" id="choobe-subtitle">
      [[i18nDynamic(locale, 'choobeScreenDescription')]]
    </div>
    <div slot="content" class="layout vertical landscape-vertical-centered">
      <oobe-screens-list id="screensList"
              selected-screens-count="{{numberOfSelectedScreens_}}">
      </oobe-screens-list>
    </div>
    <div slot="bottom-buttons">
        <oobe-text-button id="skipButton"
            text-key="choobeScreenSkip" on-click="onSkip_" border>
        </oobe-text-button>
        <oobe-next-button id="nextButton" on-click="onNextClicked_"
            disabled="[[!canProceed_(numberOfSelectedScreens_)]]">
        </oobe-next-button>
    </div>
</oobe-adaptive-dialog><!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      numberOfSelectedScreens_: {
        type: Number,
        value: 0,
      },
    };
  }

  get UI_STEPS() {
    return ChoobeStep;
  }

  defaultUIStep() {
    return ChoobeStep.OVERVIEW;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('ChoobeScreen');
  }

  onBeforeShow(data) {
    if ('screens' in data) {
      this.$.screensList.init(data['screens']);
    }
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.CHOOBE;
  }

  onNextClicked_() {
    const screenSelected = this.$.screensList.getScreenSelected();
    this.userActed([UserAction.NEXT, screenSelected]);
  }

  onSkip_() {
    this.userActed(UserAction.SKIP);
  }

  canProceed_() {
    return this.numberOfSelectedScreens_ > 0;
  }
}
customElements.define(ChoobeScreen.is, ChoobeScreen);