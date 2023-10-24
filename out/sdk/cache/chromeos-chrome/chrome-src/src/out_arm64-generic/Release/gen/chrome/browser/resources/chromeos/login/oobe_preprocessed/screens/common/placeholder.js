// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const PlaceholderScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @polymer
 */
class PlaceholderScreen extends PlaceholderScreenElementBase {
  static get is() {
    return 'placeholder-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles">

/* Add styles here */

</style>
<oobe-adaptive-dialog role="dialog">
  <!-- Add HTML content here -->
  <h1 slot="title">
    Your title
  </h1>
  <div slot="subtitle">
    Your subtitle
  </div>
  <div slot="content" class="layout vertical">
    Your content
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton"
        on-click="onBackClicked_"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton"
        on-click="onNextClicked_"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {};
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('PlaceholderScreen');
  }

  /**
   * Next button click handler.
   * @private
   */
  onNextClicked_() {
    this.userActed('next');
  }

  /**
   * Back button click handler.
   * @private
   */
  onBackClicked_() {
    this.userActed('back');
  }
}

customElements.define(PlaceholderScreen.is, PlaceholderScreen);
