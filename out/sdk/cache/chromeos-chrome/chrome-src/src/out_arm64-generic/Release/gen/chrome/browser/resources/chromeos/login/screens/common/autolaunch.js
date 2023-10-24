// Copyright 2013 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Oobe reset screen implementation.
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



/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const AutolaunchBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, OobeDialogHostBehavior],
    PolymerElement);

/**
 * @polymer
 */
class Autolaunch extends AutolaunchBase {
  static get is() {
    return 'autolaunch-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->

<style include="oobe-dialog-host-styles">
  #appName {
    color: var(--oobe-text-color);
    font-size: var(--oobe-autolaunch-app-name-font-size);
  }
</style>
<oobe-adaptive-dialog id="autolaunch" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'autolaunchTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:alert"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'demoSetupProgressScreenTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'autolaunchWarning')]]
  </p>
  <div id="footer" slot="content">
    <img id="appIcon" src="[[appIconUrl_]]" alt="">
    <div id="appName">[[appName_]]</div>
  </div>
  <div slot="bottom-buttons" class="layout horizontal end-justified">
    <oobe-text-button id="cancelButton" on-click="onCancel_"
        text-key="autolaunchCancelButton" class="focus-on-show">
    </oobe-text-button>
    <oobe-text-button id="confirmButton" on-click="onConfirm_"
        text-key="autolaunchConfirmButton" inverse>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      appName_: {type: String},
      appIconUrl_: {type: String},
    };
  }

  constructor() {
    super();
    this.appName_ = '';
    this.appIconUrl_ = '';
  }

  /** Overridden from LoginScreenBehavior. */
  // clang-format off
  get EXTERNAL_API() {
    return [
      'updateApp',
    ];
  }
  // clang-format on

  ready() {
    super.ready();
    this.initializeLoginScreen('AutolaunchScreen');
  }

  onConfirm_() {
    this.userActed('confirm');
  }

  onCancel_() {
    this.userActed('cancel');
  }

  /**
   * Event handler invoked when the page is shown and ready.
   */
  onBeforeShow() {
    chrome.send('autolaunchVisible');
  }

  /**
   * Cancels the reset and drops the user back to the login screen.
   */
  cancel() {
    this.userActed('cancel');
  }

  /**
   * Sets app to be displayed in the auto-launch warning.
   * @param {!Object} app An dictionary with app info.
   */
  updateApp(app) {
    this.appName_ = app.appName;
    if (app.appIconUrl && app.appIconUrl.length) {
      this.appIconUrl_ = app.appIconUrl;
    }
  }
}

customElements.define(Autolaunch.is, Autolaunch);
