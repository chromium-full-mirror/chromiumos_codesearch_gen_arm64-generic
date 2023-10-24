// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Enable Kiosk
 * screen.
 */

import '//resources/cr_elements/icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


/**
 * UI mode for the dialog.
 * @enum {string}
 */
const EnableKioskMode = {
  CONFIRM: 'confirm',
  SUCCESS: 'success',
  ERROR: 'error',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const EnableKioskBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @polymer
 */
class EnableKiosk extends EnableKioskBase {
  static get is() {
    return 'enable-kiosk-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2019 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles"></style>

<oobe-adaptive-dialog id="dialog" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'kioskEnableWarningText')]]"
    footer-shrinkable>
  <h1 slot="title">
    [[i18nDynamic(locale, 'kioskEnableWarningText')]]
  </h1>
  <span slot="subtitle" hidden="[[!eq_(state_, 'confirm')]]">
    [[i18nDynamic(locale,'kioskEnableWarningDetails')]]
  </span>
  <span slot="subtitle" hidden="[[!eq_(state_, 'success')]]">
    [[i18nDynamic(locale,'kioskEnableSuccessMsg')]]
  </span>
  <span slot="subtitle" hidden="[[!eq_(state_, 'error')]]">
    [[i18nDynamic(locale,'kioskEnableErrorMsg')]]
  </span>
  <div slot="content" class="flex layout center-justified vertical">
    <img src="chrome://theme/IDR_RESET_WARNING" class="oobe-illustration">
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="enable" hidden="[[!eq_(state_, 'confirm')]]"
        inverse on-click="onEnableButton_" text-key="kioskEnableButton">
    </oobe-text-button>
    <oobe-text-button id="close" class="focus-on-show" inverse
        text-key="[[primaryButtonTextKey_(state_)]]"
        on-click="closeDialog_"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Current dialog state
       * @private
       */
      state_: {
        type: String,
        value: EnableKioskMode.CONFIRM,
      },
    };
  }

  constructor() {
    super();
  }

  get EXTERNAL_API() {
    return  ['onCompleted'];
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('KioskEnableScreen');
  }

  /** Called after resources are updated. */
  updateLocalizedContent() {
    this.i18nUpdateLocale();
  }

  /** Called when dialog is shown */
  onBeforeShow() {
    this.state_ = EnableKioskMode.CONFIRM;
  }

  /**
   * "Enable" button handler
   * @private
   */
  onEnableButton_(event) {
    this.userActed('enable');
  }

  /**
   * "Cancel" / "Ok" button handler
   * @private
   */
  closeDialog_(event) {
    this.userActed('close');
  }

  onCompleted(success) {
    this.state_ = success ? EnableKioskMode.SUCCESS : EnableKioskMode.ERROR;
  }

  /**
   * Simple equality comparison function.
   * @private
   */
  eq_(one, another) {
    return one === another;
  }

  /**
   *
   * @private
   */
  primaryButtonTextKey_(state) {
    if (state === EnableKioskMode.CONFIRM) {
      return 'kioskOKButton';
    }
    return 'kioskCancelButton';
  }
}

customElements.define(EnableKiosk.is, EnableKiosk);
