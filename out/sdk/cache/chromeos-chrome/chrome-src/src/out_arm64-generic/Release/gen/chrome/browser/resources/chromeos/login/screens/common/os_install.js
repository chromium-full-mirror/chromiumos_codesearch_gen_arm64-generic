// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for OS install screen.
 */

import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/dialogs/oobe_modal_dialog.js';

import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {afterNextRender, html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';

const OsInstallScreenState = {
  INTRO: 'intro',
  IN_PROGRESS: 'in-progress',
  FAILED: 'failed',
  NO_DESTINATION_DEVICE_FOUND: 'no-destination-device-found',
  SUCCESS: 'success',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const OsInstallScreenElementBase = mixinBehaviors(
    [
      OobeI18nBehavior,
      OobeDialogHostBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

/**
 * @polymer
 */
class OsInstall extends OsInstallScreenElementBase {
  static get is() {
    return 'os-install-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  a {
    width: fit-content;
  }
  ul {
    list-style-position: outside;
    padding-inline-start: 20px;
  }
  ul li::marker {
    color: var(--cros-color-secondary);
    font-size: 18px;
  }
  :host-context(.jelly-enabled) ul li::marker {
    color: var(--cros-sys-on_surface);
  }
  li:not(:last-child) {
    margin-bottom: 14px;
  }
  #serviceLogsDialog {
    --oobe-modal-dialog-content-slot-padding-bottom: 0;
    --oobe-modal-dialog-content-slot-padding-end: 0;
    --oobe-modal-dialog-content-slot-padding-start: 0;
    --oobe-modal-dialog-title-slot-padding-bottom: 16px;
    --oobe-modal-dialog-width: 512px;
  }
  #serviceLogsFrame {
    padding-inline-end: 20px;
    padding-inline-start: 20px;
  }
  .intro-content {
    color: var(--oobe-header-text-color);
  }
  .intro-footer {
    color: var(--cros-color-primary);
  }
  :host-context(.jelly-enabled) .intro-footer {
    color: var(--oobe-header-text-color);
  }
</style>

<oobe-adaptive-dialog id="osInstallDialogIntro"
    role="dialog" for-step="intro"
    aria-label$="[[i18nDynamic(
        locale, 'osInstallDialogIntroTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title" id="osInstallDialogIntroTitleId">
    [[i18nDynamic(locale, 'osInstallDialogIntroTitle')]]</h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'osInstallDialogIntroSubtitle')]]
  </div>
  <div slot="content" class="flex layout vertical center-justified">
    <p class="intro-content">
      [[i18nDynamic(locale, 'osInstallDialogIntroBody0')]]
    </p>
    <p class="intro-content">
      [[i18nDynamic(locale, 'osInstallDialogIntroBody1')]]
    </p>
    <p class="intro-footer">
      [[i18nDynamic(locale, 'osInstallDialogIntroFooter')]]
    </p>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="osInstallExitButton" on-click="onBack_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button class="focus-on-show" id="osInstallIntroNextButton"
        inverse on-click="onIntroNextButtonPressed_">
      <div slot="text">
        [[i18nDynamic(locale, 'osInstallDialogIntroNextButton')]]
      </div>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-modal-dialog id="osInstallDialogConfirm" ignore-popstate>
  <div slot="title" id="osInstallDialogConfirmTitleId">
    [[i18nDynamic(locale, 'osInstallDialogConfirmTitle')]]
  </div>
  <span slot="content"
      inner-h-t-m-l="[[i18nAdvancedDynamic(
        locale, 'osInstallDialogConfirmBody')]]">
  </span>
  <div slot="buttons">
    <oobe-text-button id="closeConfirmDialogButton"
        on-click="onCloseConfirmDialogButtonPressed_"
        text-key="oobeModalDialogClose">
    </oobe-text-button>
    <oobe-text-button
        text-key="osInstallDialogConfirmNextButton"
        id="osInstallConfirmNextButton"
        inverse on-click="onConfirmNextButtonPressed_"></oobe-text-button>
  </div>
</oobe-modal-dialog>

<oobe-loading-dialog id="osInstallDialogInProgress"
    role="dialog" for-step="in-progress"
    subtitle-key="osInstallDialogInProgressSubtitle"
    title-key="osInstallDialogInProgressTitle"
    aria-label$="[[i18nDynamic(locale, 'osInstallDialogInProgressTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>

<oobe-adaptive-dialog id="osInstallDialogError"
    role="dialog" for-step="failed,no-destination-device-found"
    aria-label$="[[i18nDynamic(locale, 'osInstallDialogErrorTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:warning"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'osInstallDialogErrorTitle')]]</h1>
  <div slot="subtitle" for-step="no-destination-device-found"
      id="osInstallDialogErrorNoDestSubtitleId">
    [[i18nDynamic(locale, 'osInstallDialogErrorNoDestSubtitle')]]
  </div>
  <div slot="content" for-step="no-destination-device-found"
      class="flex layout vertical center-justified">
    <span inner-h-t-m-l="[[getErrorNoDestContentHtml_(locale)]]"></span>
    <a id="noDestLogsLink" is="action-link" class="oobe-local-link"
        on-click="onServiceLogsLinkClicked_">
      [[i18nDynamic(locale, 'osInstallDialogErrorViewLogs')]]
    </a>
  </div>
  <div slot="subtitle" for-step="failed">
    <span inner-h-t-m-l="[[getErrorFailedSubtitleHtml_(locale)]]"></span>
    <a id="serviceLogsLink" is="action-link" class="oobe-local-link"
        on-click="onServiceLogsLinkClicked_">
      [[i18nDynamic(locale, 'osInstallDialogErrorViewLogs')]]
    </a>
  </div>
  <div slot="content" for-step="failed"
      class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:error-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button
        text-key="osInstallDialogSendFeedback"
        id="osInstallErrorSendFeedbackButton"
        on-click="onErrorSendFeedbackButtonPressed_"></oobe-text-button>
    <oobe-text-button
        text-key="osInstallDialogShutdownButton" class="focus-on-show"
        id="osInstallErrorShutdownButton"
        inverse on-click="onErrorShutdownButtonPressed_"></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="osInstallDialogSuccess"
    role="dialog" for-step="success"
    aria-label$="[[i18nDynamic(locale, 'osInstallDialogSuccessTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'osInstallDialogSuccessTitle')]]
  </h1>
  <div slot="subtitle" id="osInstallDialogSuccessSubtitile">
      [[osInstallDialogSuccessSubtitile_]]</div>
  <div slot="content" class="flex layout vertical center center-justified">
    <iron-icon icon="oobe-illos:os-install-illo"
        class="illustration-jelly">
    </iron-icon>
  </div>
</oobe-adaptive-dialog>

<oobe-modal-dialog id="serviceLogsDialog" ignore-popstate
    on-close="focusLogsLink_" on-cancel="focusLogsLink_">
  <div slot="title">
    [[i18nDynamic(locale, 'osInstallDialogServiceLogsTitle')]]
  </div>
  <webview slot="content" id="serviceLogsFrame" role="document"
      allowTransparency class="focus-on-show flex oobe-tos-webview">
  </webview>
  <oobe-text-button id="closeServiceLogsDialog" slot="buttons" inverse
      on-click="hideServiceLogsDialog_" text-key="oobeModalDialogClose">
  </oobe-text-button>
</oobe-modal-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Success step subtitile message.
       */
      osInstallDialogSuccessSubtitile_: {
        type: String,
        value: '',
      },
    };
  }

  constructor() {
    super();
  }

  get EXTERNAL_API() {
    return ['showStep', 'setServiceLogs', 'updateCountdownString'];
  }

  defaultUIStep() {
    return OsInstallScreenState.INTRO;
  }

  get UI_STEPS() {
    return OsInstallScreenState;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('OsInstallScreen');
  }

  /**
   * Set and show screen step.
   * @param {string} step screen step.
   */
  showStep(step) {
    this.setUIStep(step);
  }

  /**
   * This is the 'on-click' event handler for the 'back' button.
   * @private
   */
  onBack_() {
    this.userActed('os-install-exit');
  }

  onIntroNextButtonPressed_() {
    this.$.osInstallDialogConfirm.showDialog();
    this.$.closeConfirmDialogButton.focus();
  }

  onConfirmNextButtonPressed_() {
    this.$.osInstallDialogConfirm.hideDialog();
    this.userActed('os-install-confirm-next');
  }

  onErrorSendFeedbackButtonPressed_() {
    this.userActed('os-install-error-send-feedback');
  }

  onErrorShutdownButtonPressed_() {
    this.userActed('os-install-error-shutdown');
  }

  onSuccessRestartButtonPressed_() {
    this.userActed('os-install-success-restart');
  }

  onCloseConfirmDialogButtonPressed_() {
    this.$.osInstallDialogConfirm.hideDialog();
    this.$.osInstallIntroNextButton.focus();
  }

  /**
   * @param {string} locale
   * @return {string}
   * @private
   */
  getErrorNoDestContentHtml_(locale) {
    return this.i18nAdvanced('osInstallDialogErrorNoDestContent', {
      tags: ['p', 'ul', 'li'],
    });
  }

  /**
   * @param {string} locale
   * @return {string}
   * @private
   */
  getErrorFailedSubtitleHtml_(locale) {
    return this.i18nAdvanced('osInstallDialogErrorFailedSubtitle', {
      tags: ['p'],
    });
  }

  /**
   * Shows service logs.
   * @private
   */
  onServiceLogsLinkClicked_() {
    this.$.serviceLogsDialog.showDialog();
    this.$.closeServiceLogsDialog.focus();
  }

  /**
   * On-click event handler for close button of the service logs dialog.
   * @private
   */
  hideServiceLogsDialog_() {
    this.$.serviceLogsDialog.hideDialog();
    this.focusLogsLink_();
  }

  /**
   * @private
   */
  focusLogsLink_() {
    if (this.uiStep == OsInstallScreenState.NO_DESTINATION_DEVICE_FOUND) {
      afterNextRender(this, () => this.$.noDestLogsLink.focus());
    } else if (this.uiStep == OsInstallScreenState.FAILED) {
      afterNextRender(this, () => this.$.serviceLogsLink.focus());
    }
  }

  /**
   * @param {string} serviceLogs Logs to show as plain text.
   */
  setServiceLogs(serviceLogs) {
    this.$.serviceLogsFrame.src = 'data:text/html;charset=utf-8,' +
        encodeURIComponent('<style>' +
                           'body {' + this.getServiceLogsFontsStyling() +
                           '  color: RGBA(0,0,0,.87);' +
                           '  margin : 0;' +
                           '  padding : 0;' +
                           '  white-space: pre-wrap;' +
                           '}' +
                           '#logsContainer {' +
                           '  overflow: auto;' +
                           '  height: 99%;' +
                           '  padding-left: 16px;' +
                           '  padding-right: 16px;' +
                           '}' +
                           '#logsContainer::-webkit-scrollbar-thumb {' +
                           '  border-radius: 10px;' +
                           '}' +
                           '</style>' +
                           '<body><div id="logsContainer">' + serviceLogs +
                           '</div>' +
                           '</body>');
  }

  /**
   * @param {string} timeLeftMessage Countdown message on success step.
   */
  updateCountdownString(timeLeftMessage) {
    this.osInstallDialogSuccessSubtitile_ = timeLeftMessage;
  }

  /**
   * Generates fonts styling for the service log WebView based on OobeJelly
   * flag.
   * @return {string}
   * @private
   */
  getServiceLogsFontsStyling() {
    const isOobeJellyEnabled = loadTimeData.getBoolean('isOobeJellyEnabled');
    if (!isOobeJellyEnabled) {
      return '  font-family: Roboto, sans-serif;' +
          '  font-size: 14sp;';
    }
    // Those values correspond to the cros-body-1 token.
    return (
        '  font-family: Google Sans Text Regular, Google Sans, Roboto, sans-serif;' +
        '  font-size: 14px;' +
        '  font-weight: 400;' +
        '  line-height: 20px;');
  }
}

customElements.define(OsInstall.is, OsInstall);
