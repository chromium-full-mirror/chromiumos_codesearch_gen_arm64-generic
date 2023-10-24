// Copyright 2012 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for TPM error screen.
 */

import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';


/**
 * UI state for the dialog.
 * @enum {string}
 */
const tpmUIState = {
  DEFAULT: 'default',
  TPM_OWNED: 'tpm-owned',
  DBUS_ERROR: 'dbus-error',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const TPMErrorMessageElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   errorDialog:  OobeAdaptiveDialog,
 * }}
 */
TPMErrorMessageElementBase.$;

class TPMErrorMessage extends TPMErrorMessageElementBase {
  static get is() {
    return 'tpm-error-message-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->


<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog id="errorDialog" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'errorTpmFailureTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title" for-step="default">
    [[i18nDynamic(locale, 'errorTpmFailureTitle')]]
  </h1>
  <h1 slot="title" for-step="dbus-error">
    [[i18nDynamic(locale, 'errorTpmDbusErrorTitle')]]
  </h1>
  <p slot="subtitle" for-step="default,dbus-error">
    [[i18nDynamic(locale, 'errorTpmFailureReboot')]]
  </p>
  <div slot="content" for-step="default,dbus-error" class="flex layout
      vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <h1 slot="title" for-step="tpm-owned">
    [[i18nDynamic(locale, 'errorTPMOwnedTitle')]]
  </h1>
  <p slot="subtitle" for-step="tpm-owned">
    [[i18nDynamic(locale, 'errorTPMOwnedSubtitle')]]
  </p>
  <span slot="content" for-step="tpm-owned" class="flex layout
      vertical center center-justified"
      inner-h-t-m-l="[[i18nAdvancedDynamic(locale,
                          'errorTPMOwnedContent')]]"></span>
  <div slot="bottom-buttons">
    <oobe-text-button id="restartButton" inverse class="focus-on-show"
        text-key="errorTpmFailureRebootButton" on-click="onRestartTap_">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {}

  constructor() {
    super();
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('TPMErrorMessageScreen');
  }

  /** @override */
  get EXTERNAL_API() {
    return [
      'setStep',
    ];
  }

  get UI_STEPS() {
    return tpmUIState;
  }

  /**
   * @return {string}
   */
  defaultUIStep() {
    return tpmUIState.DEFAULT;
  }

  /**
   * @param {string} step
   */
  setStep(step) {
    this.setUIStep(step);
  }

  onRestartTap_() {
    this.userActed('reboot-system');
  }

  /**
   * @override
   */
  get defaultControl() {
    return this.$.errorDialog;
  }
}

customElements.define(TPMErrorMessage.is, TPMErrorMessage);
