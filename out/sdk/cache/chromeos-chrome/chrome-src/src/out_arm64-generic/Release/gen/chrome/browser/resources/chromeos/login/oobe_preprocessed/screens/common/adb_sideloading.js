// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying ARC ADB sideloading screen.
 */

import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';

/**
 * UI mode for the dialog.
 * @enum {string}
 */
const AdbSideloadingState = {
  ERROR: 'error',
  SETUP: 'setup',
};

/**
 * The constants need to be synced with EnableAdbSideloadingScreenView::UIState
 * @enum {number}
 */
const ADB_SIDELOADING_SCREEN_STATE = {
  ERROR: 1,
  SETUP: 2,
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const AdbSideloadingBase = mixinBehaviors([OobeI18nBehavior,
  LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @polymer
 */
class AdbSideloading extends AdbSideloadingBase {
  static get is() {
    return 'adb-sideloading-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2019 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles"></style>

<!-- Dialog for normal confirmation -->
<oobe-adaptive-dialog id="enableAdbSideloadDialog" role="dialog"
    for-step="setup" footer-shrinkable
    aria-label$="[[i18nDynamic(locale, 'enableAdbSideloadingSetupTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableAdbSideloadingSetupTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'enableAdbSideloadingSetupMessage')]]
    <a on-click="onLearnMoreTap_" class="oobe-local-link"
        is="action-link">
      [[i18nDynamic(locale, 'enableAdbSideloadingLearnMore')]]
    </a>
  </p>
  <div slot="content" class="flex layout vertical center center-justified">
    <img srcset="images/arc_sideloading_illustration.svg"
        class="oobe-illustration">
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button border on-click="onCancelTap_"
        text-key="enableAdbSideloadingCancelButton"
        id="enable-adb-sideloading-cancel-button"></oobe-text-button>
    <oobe-text-button inverse on-click="onEnableTap_" class="focus-on-show"
        text-key="enableAdbSideloadingConfirmButton"
        id="enable-adb-sideloading-ok-button"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<!-- Dialog for error -->
<oobe-adaptive-dialog id="enableAdbSideloadErrorDialog" role="dialog"
    for-step="error" footer-shrinkable
    aria-label$="[[i18nDynamic(locale, 'enableAdbSideloadingSetupTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'enableAdbSideloadingErrorTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'enableAdbSideloadingErrorMessage')]]
    <a on-click="onLearnMoreTap_" class="oobe-local-link" is="action-link">
      [[i18nDynamic(locale, 'enableAdbSideloadingLearnMore')]]
    </a>
  </p>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button inverse on-click="onCancelTap_" class="focus-on-show"
        text-key="enableAdbSideloadingOkButton"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  constructor() {
    super();
  }

  get EXTERNAL_API() {
    return ['setScreenState'];
  }

  get UI_STEPS() {
    return AdbSideloadingState;
  }

  defaultUIStep() {
    return AdbSideloadingState.SETUP;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('EnableAdbSideloadingScreen');
  }

  /*
   * Executed on language change.
   */
  updateLocalizedContent() {
    this.i18nUpdateLocale();
  }

  onBeforeShow(data) {
    this.setScreenState(ADB_SIDELOADING_SCREEN_STATE.SETUP);
  }

  /**
   * Sets UI state for the dialog to show corresponding content.
   * @param {ADB_SIDELOADING_SCREEN_STATE} state
   */
  setScreenState(state) {
    if (state == ADB_SIDELOADING_SCREEN_STATE.ERROR) {
      this.setUIStep(AdbSideloadingState.ERROR);
    } else if (state == ADB_SIDELOADING_SCREEN_STATE.SETUP) {
      this.setUIStep(AdbSideloadingState.SETUP);
    }
  }

  /**
   * On-tap event handler for enable button.
   *
   * @private
   */
  onEnableTap_() {
    this.userActed('enable-pressed');
  }

  /**
   * On-tap event handler for cancel button.
   *
   * @private
   */
  onCancelTap_() {
    this.userActed('cancel-pressed');
  }

  /**
   * On-tap event handler for learn more link.
   *
   * @private
   */
  onLearnMoreTap_() {
    this.userActed('learn-more-link');
  }
}

customElements.define(AdbSideloading.is, AdbSideloading);
