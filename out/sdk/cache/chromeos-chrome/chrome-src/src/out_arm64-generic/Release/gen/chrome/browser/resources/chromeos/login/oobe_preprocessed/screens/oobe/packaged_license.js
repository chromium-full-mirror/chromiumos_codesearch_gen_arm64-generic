// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for Packaged License screen.
 */

import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {afterNextRender, html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const PackagedLicenseScreenBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @typedef {{
 *   packagedLicenseDialog:  OobeAdaptiveDialog,
 * }}
 */
PackagedLicenseScreenBase.$;

/**
 * @polymer
 */
class PackagedLicenseScreen extends PackagedLicenseScreenBase {
  static get is() {
    return 'packaged-license-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2019 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog id="packagedLicenseDialog"
    aria-label$="[[i18nDynamic(locale, 'oobePackagedLicenseTitle')]]"
    role="dialog">
  <iron-icon slot="icon" icon="oobe-32:enterprise"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'oobePackagedLicenseTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'oobePackagedLicenseSubtitleP1')]]
  </p>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'oobePackagedLicenseSubtitleP2')]]
  </p>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:enrollment-complete-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="dont-enroll-button"
        text-key="oobePackagedLicenseDontEnroll"
        on-click="onDontEnrollButtonPressed_"></oobe-text-button>
    <oobe-text-button id="enroll-button"
        text-key="oobePackagedLicenseEnroll" class="focus-on-show"
        inverse on-click="onEnrollButtonPressed_"></oobe-text-button>
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
    this.initializeLoginScreen('PackagedLicenseScreen');
  }

  /**
   * Returns the control which should receive initial focus.
   */
  get defaultControl() {
    return this.$.packagedLicenseDialog;
  }

  /**
   * On-tap event handler for Don't Enroll button.
   * @private
   */
  onDontEnrollButtonPressed_() {
    this.userActed('dont-enroll');
  }

  /**
   * On-tap event handler for Enroll button.
   * @private
   */
  onEnrollButtonPressed_() {
    this.userActed('enroll');
  }
}

customElements.define(PackagedLicenseScreen.is, PackagedLicenseScreen);
