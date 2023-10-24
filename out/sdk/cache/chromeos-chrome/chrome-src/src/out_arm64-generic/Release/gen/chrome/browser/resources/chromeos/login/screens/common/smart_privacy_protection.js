// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for smart privacy protection screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

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
const SmartPrivacyProtectionScreenElementBase = mixinBehaviors(
    [OobeDialogHostBehavior, OobeI18nBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @polymer
 */
class SmartPrivacyProtectionScreen extends
    SmartPrivacyProtectionScreenElementBase {
  static get is() {
    return 'smart-privacy-protection-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  .overview-list-item {
    border-bottom: 1px solid var(--cros-sys-separator);
    padding: 16px;
  }

  .overview-list-item-title {
    color: var(--oobe-header-text-color);
    font-size: var(--oobe-hid-item-title-font-size);
    font-weight: var(--oobe-hid-item-title-font-weight);
    line-height: var(--oobe-hid-item-title-line-height);
    margin-bottom: 4px;
  }

  .overview-list-item-icon {
    --iron-icon-fill-color: var(--google-blue-600);
    padding-inline-end: 16px;
  }

  :host-context(.jelly-enabled) .overview-list-item-icon {
    --iron-icon-fill-color: var(--cros-sys-primary);
  }

  .overview-list-item-description {
    padding-inline-end: 16px;
  }

  .content-footer {
    padding-top: 16px;
  }
</style>
  <oobe-adaptive-dialog role="dialog"
      aria-label$="[[i18nDynamic(locale,
          'smartPrivacyProtectionScreenTitle')]]">
    <iron-icon slot="icon" icon="cr:security"></iron-icon>
    <h1 slot="title">
      [[i18nDynamic(locale, 'smartPrivacyProtectionScreenTitle')]]
    </h1>
    <iron-icon slot="subtitle-illustration" class="illustration-jelly"
        icon="oobe-illos:kids-turn-illo" >
    </iron-icon>
    <div slot="content" class="landscape-header-aligned">
      <div id="quickDimSection" class="overview-list-item layout horizontal"
          hidden="[[!isQuickDimEnabled_]]">
        <iron-icon class="overview-list-item-icon" icon="oobe-24:lock">
        </iron-icon>
        <div class="flex layout vertical center-justified">
          <div role="heading" aria-level="2"
              class="overview-list-item-title">
            [[i18nDynamic(locale, 'smartPrivacyProtectionScreenLock')]]
          </div>
          <div class="overview-list-item-description">
            [[i18nDynamic(locale, 'smartPrivacyProtectionScreenLockDesc')]]
          </div>
        </div>
      </div>
      <div class="content-footer">
        [[i18nDynamic(locale, 'smartPrivacyProtectionContent')]]
      </div>
    </div>
    <div slot="bottom-buttons">
      <oobe-text-button id="noThanksButton"
          on-click="onNoThanksButtonClicked_"
          label-for-aria="[[i18nDynamic(locale,
              'smartPrivacyProtectionTurnOffButton')]]">
        <div slot="text">
          [[i18nDynamic(locale, 'smartPrivacyProtectionTurnOffButton')]]
        </div>
      </oobe-text-button>
      <oobe-text-button id="turnOnButton" inverse="[[!isMinorMode_]]"
          class="focus-on-show" on-click="onTurnOnButtonClicked_"
          label-for-aria="[[i18nDynamic(locale,
              'smartPrivacyProtectionTurnOnButton')]]">
        <div slot="text">
          [[i18nDynamic(locale, 'smartPrivacyProtectionTurnOnButton')]]
        </div>
      </oobe-text-button>
    </div>
  </oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * True screen lock is enabled.
       * @private
       */
      isQuickDimEnabled_: {
        type: Boolean,
        value() {
          return loadTimeData.getBoolean('isQuickDimEnabled');
        },
        readOnly: true,
      },

      /**
       * Indicates whether user is minor mode user (e.g. under age of 18).
       * @private
       */
      isMinorMode_: {
        type: Boolean,
        // TODO(dkuzmin): change the default value once appropriate capability
        // is available on C++ side.
        value: true,
      },
    };
  }

  get EXTERNAL_API() {
    return ['setIsMinorMode'];
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('SmartPrivacyProtectionScreen');
  }

  /**
   * Set the minor mode flag, which controls whether we could use nudge
   * techinuque on the UI.
   * @param {boolean} isMinorMode
   */
  setIsMinorMode(isMinorMode) {
    this.isMinorMode_ = isMinorMode;
  }

  onTurnOnButtonClicked_() {
    this.userActed('continue-feature-on');
  }

  onNoThanksButtonClicked_() {
    this.userActed('continue-feature-off');
  }
}

customElements.define(
    SmartPrivacyProtectionScreen.is, SmartPrivacyProtectionScreen);
