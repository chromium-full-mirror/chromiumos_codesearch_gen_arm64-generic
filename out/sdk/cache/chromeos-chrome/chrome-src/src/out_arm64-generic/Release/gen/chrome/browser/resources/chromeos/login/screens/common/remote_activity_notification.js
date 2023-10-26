// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for remote activity notification screen.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const RemoteActivityNotificationBase = mixinBehaviors(
    [OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior],
    PolymerElement);

/**
 * @polymer
 */
class RemoteActivityNotification extends RemoteActivityNotificationBase {
  static get is() {
    return 'remote-activity-notification-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles"></style>
<oobe-adaptive-dialog role="dialog">
    <iron-icon slot="icon" icon="oobe-32:enterprise"></iron-icon>
    <h1 slot="title">
        [[i18nDynamic(locale, 'localStateNotificationTitle')]]
    </h1>
    <div slot="subtitle">
        [[i18nDynamic(locale, 'localStateNotificationDescription')]]
    </div>
    <div slot="content" class="flex layout vertical center center-justified">
        <iron-icon icon="oobe-illos:update-boot-illo" class="illustration-jelly">
        </iron-icon>
    </div>
    <div slot="bottom-buttons">
        <oobe-text-button inverse on-click="onContinueUsingDevice_" text-key="localStateCancelButtonLabel"
            id="cancelButton">
        </oobe-text-button>
    </div>
</oobe-adaptive-dialog><!--_html_template_end_-->`;
  }

  static get properties() {
    return {};
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('RemoteActivityNotificationScreen');
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.BLOCKING;
  }

  onContinueUsingDevice_() {
    this.userActed('continue-using-device');
  }
}

customElements.define(
    RemoteActivityNotification.is, RemoteActivityNotification);
