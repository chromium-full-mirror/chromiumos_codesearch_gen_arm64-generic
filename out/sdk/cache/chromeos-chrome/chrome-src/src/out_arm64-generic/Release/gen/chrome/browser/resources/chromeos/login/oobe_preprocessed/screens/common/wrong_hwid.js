// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview wrong HWID screen implementation.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_text_button.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE, SCREEN_GAIA_SIGNIN} from '../../components/display_manager_types.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const WrongHWIDBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @polymer
 */
class WrongHWID extends WrongHWIDBase {
  static get is() {
    return 'wrong-hwid-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog role="dialog">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'wrongHWIDScreenHeader')]]
  </h1>
  <p slot="content">
    <span inner-h-t-m-l="[[i18nAdvancedDynamic(locale, 
                          'wrongHWIDMessageFirstPart')]]"></span>
  </p>
  <p slot="content">
    [[i18nDynamic(locale, 'wrongHWIDMessageSecondPart')]]
  </p>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipButton" inverse
        text-key="wrongHWIDScreenSkipLink" on-click="onSkip_">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog><!--_html_template_end_-->`;
  }



  static get properties() {
    return {};
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('WrongHWIDMessageScreen');
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.WRONG_HWID_WARNING;
  }

  onSkip_() {
    this.userActed('skip-screen');
  }
}

customElements.define(WrongHWID.is, WrongHWID);
