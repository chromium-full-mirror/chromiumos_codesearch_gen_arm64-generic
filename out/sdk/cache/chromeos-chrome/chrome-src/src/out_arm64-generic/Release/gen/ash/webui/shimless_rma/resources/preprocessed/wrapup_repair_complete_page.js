// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import './base_page.js';
import './shimless_rma_fonts_css.js';
import './shimless_rma_shared_css.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {PowerCableStateObserverInterface, PowerCableStateObserverReceiver, RmadErrorCode, ShimlessRmaServiceInterface, ShutdownMethod} from './shimless_rma_types.js';
import {executeThenTransitionState, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'wrapup-repair-complete-page' is the main landing page for the shimless rma
 * process.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const WrapupRepairCompletePageBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/**
 * Supported options for finishing RMA.
 * @enum {string}
 */
const FinishRmaOption = {
  SHUTDOWN: 'shutdown',
  REBOOT: 'reboot',
};

/** @polymer */
export class WrapupRepairCompletePage extends WrapupRepairCompletePageBase {
  static get is() {
    return 'wrapup-repair-complete-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared shimless-fonts">
  #logsDialog::part(dialog) {
    width: 512px;
  }

  #logsDialog::part(wrapper) {
    height: 480px;
  }

  #logsDialog [slot=button-container] {
    padding-bottom: 24px;
    padding-top: 24px;
  }

  #logsDialog [slot=title] {
    align-items: center;
    display: flex;
    font-size: 15px;
    height: 32px;
    justify-content: center;
    padding: 0 24px 0 24px;
  }

  #buttonContainer {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding-inline-end: 24px;
    width: 100%;
  }

  .button-card {
    align-items: center;
    border-radius: 8px;
    box-shadow: var(--cros-elevation-1-shadow);
    height: 120px;
    justify-content: start;
    padding: 0;
    width: 100%;
  }

  .button-card:focus {
    outline: rgba(var(--google-blue-600-rgb), .4) solid 2px;
  }

  #diagnosticsButton {
    margin-bottom: 16px;
  }

  #rmaLogButton {
    margin-bottom: 16px;
  }

  :host([plugged-in_]) #batteryCutButton {
    opacity: 0.38;
  }

  :host([plugged-in_]) #batteryCutButton .button-label {
    color: var(--cros-text-color-disabled);
  }

  :host([plugged-in_]) #batteryCutButton .button-description {
    color: var(--cros-text-color-disabled);
  }

  :host([plugged-in_]) #batteryCutoffInfoIcon {
    color: var(--cros-icon-color-secondary);
  }

  :host([all-buttons-disabled]) .button-card {
    color: var(--cros-icon-color-secondary);
    opacity: 0.38;
  }

  :host([all-buttons-disabled]) .button-label,
  :host([all-buttons-disabled]) .button-description {
    color: var(--cros-text-color-disabled);
  }

  .button-label {
    color: var(--shimless-button-label-text-color);
    font-family: var(--shimless-button-label-font-family);
    font-size: var(--shimless-button-label-font-size);
    font-weight: var(--shimless-medium-font-weight);
    line-height: var(--shimless-button-label-line-height);
    margin-bottom: 5px;
  }

  .button-description {
    color: var(--shimless-instructions-text-color);
    font-family: var(--shimless-instructions-font-family);
    font-size: var(--shimless-instructions-font-size);
    font-weight: var(--shimless-regular-font-weight);
    line-height: var(--shimless-instructions-line-height);
    padding-inline-end: 24px;
  }

  .button-icon {
    height: 48px;
    min-width: 48px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
  }

  #batteryCutoffInfoIcon {
    margin-inline-end: 8px;
  }

  .log {
    white-space: pre-line;
  }

  #navigationButtonWrapper {
    bottom: 6px;
    left: 6px;
    position: fixed;
  }

  .navigation-button {
    background-color: rgba(0, 0, 0, 0.06);
    border: 0;
    box-sizing: content-box;
    color: var(--shimless-shutdown-buttons-text-color);
    font-weight: var(--shimless-regular-font-weight);
    height: 20px;
    padding-inline-end: 8px;
    padding-inline-start: 8px;
  }

  #shutDownButton {
    margin-inline-end: 8px;
  }

  #rebootButton[disabled],
  #shutDownButton[disabled] {
    opacity: var(--cr-disabled-opacity);
  }

  .navigation-icon {
    fill: var(--cros-icon-color-primary);
    height: 20px;
    padding-inline-end: 8px;
    width: 20px;
  }

  #logSaveAttemptButtonContainer {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  #logSavedIconText {
    align-items: center;
    display: flex;
  }

  #connectUsbIcon {
    color: var(--cros-icon-color-secondary);
  }

  #connectUsbInstructions {
    color: var(--cros-text-color-primary);
  }
</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('repairCompletedTitleText')]]</h1>
    <div class="instructions">
      [[i18n('repairCompletedDescriptionText')]]
    </div>
    <div id="navigationButtonWrapper">
      <cr-button id="shutDownButton" class="navigation-button"
          on-click="onShutDownButtonClick_"
          disabled="[[disableShutdownButtons_(shutdownButtonsDisabled_,
              allButtonsDisabled)]]">
        <iron-icon icon="shimless-icon:shutdown" class="navigation-icon">
        </iron-icon>
        [[i18n('repairCompleteShutDownButtonText')]]
      </cr-button>
      <cr-button id="rebootButton" class="navigation-button"
          on-click="onRebootButtonClick_"
          disabled="[[disableShutdownButtons_(shutdownButtonsDisabled_,
              allButtonsDisabled)]]">
        <iron-icon icon="shimless-icon:reboot" class="navigation-icon">
        </iron-icon>
        [[i18n('repairCompleteRebootButtonText')]]
      </cr-button>
    </div>
  </div>
  <div slot="right-pane">
    <div id="buttonContainer">
      <cr-button id="diagnosticsButton" class="button-card"
        on-click="onDiagnosticsButtonClick_" disabled="[[allButtonsDisabled]]">
        <iron-icon icon$="[[getDiagnosticsIcon_(allButtonsDisabled)]]"
            class="button-icon">
        </iron-icon>
        <div class="button-text">
          <div class="button-label">
            <span>[[i18n('repairCompletedDiagnosticsButtonText')]]</span>
          </div>
          <div class="button-description">
            [[i18n('repairCompletedDiagnosticsDescriptionText')]]
          </div>
        </div>
      </cr-button>
      <cr-button id="rmaLogButton" class="button-card"
          on-click="onRmaLogButtonClick_" disabled="[[allButtonsDisabled]]">
        <iron-icon icon$="[[getRmaLogIcon_(allButtonsDisabled)]]"
            class="button-icon">
        </iron-icon>
        <div class="button-text">
          <div class="button-label">
            <span>[[i18n('repairCompletedLogsButtonText')]]</span>
          </div>
          <div class="button-description">
            [[i18n('repairCompletedLogsDescriptionText')]]
          </div>
        </div>
      </cr-button>
      <div id="batteryCutoffTooltipWrapper">
        <cr-button id="batteryCutButton" class="button-card"
            on-click="onBatteryCutButtonClick_"
            disabled$="[[disableBatteryCutButton_(pluggedIn_,
            allButtonsDisabled)]]">
          <iron-icon id="batteryCutoffIcon"
              icon$="[[getBatteryCutoffIcon_(allButtonsDisabled)]]"
              class="button-icon">
          </iron-icon>
          <div class="button-text">
            <div class="button-label">
              <span>[[i18n('repairCompletedShutoffButtonText')]]</span>
            </div>
            <div class="button-description">
              [[getRepairCompletedShutoffText_(pluggedIn_)]]
            </div>
          </div>
        </cr-button>
      </div>
    </div>
  </div>
</base-page>

<cr-dialog id="logsDialog" close-text="close" on-cancel="closeLogsDialog_">
  <div slot="title">
    [[i18n('rmaLogsTitleText')]]
  </div>
  <div slot="body">
    <div class="log">[[log_]]</div>
  </div>
  <div id="saveLogButtonContainer" class="dialog-footer" slot="button-container"
      hidden="[[!shouldShowSaveToUsbButton_(usbLogState_)]]">
    <cr-button id="closeLogDialogButton" on-click="closeLogsDialog_">
      [[i18n('rmaLogsCancelButtonText')]]
    </cr-button>
    <cr-button id="saveLogDialogButton" class="text-button action-button"
        on-click="onSaveLogClick_">
      [[i18n('rmaLogsSaveToUsbButtonText')]]
    </cr-button>
  </div>
  <div id="logSaveAttemptButtonContainer" class="dialog-footer"
        slot="button-container"
        hidden="[[!shouldShowLogSaveAttemptContainer_(usbLogState_)]]">
    <div id="logSavedIconText">
      <iron-icon id="verificationIcon" class="small-icon"
          icon="[[getSaveLogResultIcon_(usbLogState_)]]">
      </iron-icon>
      <span id="logSavedStatusText">[[logSavedStatusText_]]</span>
    </div>
    <cr-button id="logRetryDialogButton" class="text-button action-button"
        on-click="retrySaveLogs_"
        hidden="[[!shouldShowRetryButton_(usbLogState_)]]">
        [[i18n('retryButtonLabel')]]
    </cr-button>
    <cr-button id="logSaveDoneDialogButton" class="text-button action-button"
        on-click="closeLogsDialog_">
      [[i18n('doneButtonLabel')]]
    </cr-button>
  </div>
  <div id="logConnectUsbMessageContainer" class="dialog-footer"
        slot="button-container"
        hidden="[[!shouldShowLogUsbMessageContainer_(usbLogState_)]]">
    <div id="logSavedIconText">
      <iron-icon id="connectUsbIcon" class="small-icon"
          icon="shimless-icon:warning"></iron-icon>
      <span id="connectUsbInstructions" class="instructions">
        [[i18n('rmaLogsMissingUsbMessageText')]]
      </span>
    </div>
  </div>
</cr-dialog>

<cr-dialog id="powerwashDialog" close-text="close">
  <div slot="title">
    [[i18n('powerwashDialogTitle')]]
  </div>
  <div slot="body">
    [[getPowerwashDescriptionString_(selectedFinishRmaOption_)]]
  </div>
  <div class="dialog-footer" slot="button-container">
    <cr-button id="closePowerwashDialogButton" on-click="closePowerwashDialog_">
      [[i18n('cancelButtonLabel')]]
    </cr-button>
    <cr-button id="powerwashButton" class="text-button action-button"
        on-click="onPowerwashButtonClick_">
      [[i18n('powerwashDialogPowerwashButton')]]
    </cr-button>
  </div>
</cr-dialog>

<cr-dialog id="batteryCutoffDialog" close-text="close" no-cancel>
  <div slot="body">
    [[i18n('repairCompletedBatteryCutoffCountdownDescription')]]
  </div>
  <div class="dialog-footer" slot="button-container">
    <cr-button id="closeBatteryCutoffDialogButton"
        on-click="onCutoffCancelClick_">
      [[i18n('cancelButtonLabel')]]
    </cr-button>
    <cr-button id="batteryCutoffShutdownButton"
        class="text-button action-button"
        on-click="onCutoffShutdownButtonClick_">
      [[i18n('repairCompletedBatteryCutoffShutdownButton')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Set by shimless_rma.js.
       * @type {boolean}
       */
      allButtonsDisabled: {
        reflectToAttribute: true,
        type: Boolean,
      },

      /**
       * Keeps the shutdown and reboot buttons disabled after the response from
       * the service to prevent successive shutdown or reboot attempts.
       * @protected {boolean}
       */
      shutdownButtonsDisabled_: {
        type: Boolean,
        value: false,
      },

      /**
       * @protected
       * Assume plugged in is true until first observation.
       */
      pluggedIn_: {
        reflectToAttribute: true,
        type: Boolean,
        value: true,
      },

      /** @protected */
      selectedFinishRmaOption_: {
        type: String,
        value: '',
      },

      /**
       * This variable needs to remain public because the unit tests need to
       * check its value.
       */
      batteryTimeoutID_: {
        type: Number,
        value: -1,
      },

      /**
       * This variable needs to remain public because the unit tests need to
       * set it to 0.
       */
      batteryTimeoutInMs_: {
        type: Number,
        value: 5000,
      },
    };
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();

    /** @private {!PowerCableStateObserverReceiver} */
    this.powerCableStateReceiver_ = new PowerCableStateObserverReceiver(
        /** @type {!PowerCableStateObserverInterface} */ (this));

    this.shimlessRmaService_.observePowerCableState(
        this.powerCableStateReceiver_.$.bindNewPipeAndPassRemote());
  }

  /** @override */
  ready() {
    super.ready();

    focusPageTitle(this);
  }

  /** @protected */
  onDiagnosticsButtonClick_() {
    this.shimlessRmaService_.launchDiagnostics();
  }

  /** @protected */
  onShutDownButtonClick_(e) {
    e.preventDefault();
    this.selectedFinishRmaOption_ = FinishRmaOption.SHUTDOWN;
    this.shimlessRmaService_.getPowerwashRequired().then((result) => {
      this.handlePowerwash_(result.powerwashRequired);
    });
  }

  /**
   * Handles the response to getPowerwashRequired from the backend.
   * @private
   */
  handlePowerwash_(powerwashRequired) {
    if (powerwashRequired) {
      const dialog = /** @type {!CrDialogElement} */ (
          this.shadowRoot.querySelector('#powerwashDialog'));
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      this.shutDownOrReboot_();
    }
  }

  /** @private */
  shutDownOrReboot_() {
    // Keeps the buttons disabled until the device is shutdown.
    this.shutdownButtonsDisabled_ = true;

    if (this.selectedFinishRmaOption_ === FinishRmaOption.SHUTDOWN) {
      this.endRmaAndShutdown_();
    } else {
      this.endRmaAndReboot_();
    }
  }

  /**
   * Sends a shutdown request to the backend.
   * @private
   */
  endRmaAndShutdown_() {
    executeThenTransitionState(
        this, () => this.shimlessRmaService_.endRma(ShutdownMethod.kShutdown));
  }

  /**
   * @return {string}
   * @protected
   */
  getPowerwashDescriptionString_() {
    return this.selectedFinishRmaOption_ === FinishRmaOption.SHUTDOWN ?
        this.i18n('powerwashDialogShutdownDescription') :
        this.i18n('powerwashDialogRebootDescription');
  }

  /** @protected */
  onPowerwashButtonClick_(e) {
    e.preventDefault();
    const dialog = /** @type {!CrDialogElement} */ (
      this.shadowRoot.querySelector('#powerwashDialog'));
    dialog.close();
    this.shutDownOrReboot_();
  }

  /** @protected */
  onRebootButtonClick_(e) {
    e.preventDefault();
    this.selectedFinishRmaOption_ = FinishRmaOption.REBOOT;
    this.shimlessRmaService_.getPowerwashRequired().then((result) => {
      this.handlePowerwash_(result.powerwashRequired);
    });
  }

  /**
   * Sends a reboot request to the backend.
   * @private
   */
  endRmaAndReboot_() {
    executeThenTransitionState(
        this, () => this.shimlessRmaService_.endRma(ShutdownMethod.kReboot));
  }

  /** @protected */
  onRmaLogButtonClick_() {
    this.dispatchEvent(new CustomEvent('open-logs-dialog', {
      bubbles: true,
      composed: true,
    }));
  }

  /** @protected */
  onBatteryCutButtonClick_() {
    const dialog = /** @type {!CrDialogElement} */ (
        this.shadowRoot.querySelector('#batteryCutoffDialog'));
    if (!dialog.open) {
      dialog.showModal();
    }

    // This is necessary because after the timeout "this" will be the window,
    // and not WrapupRepairCompletePage.
    const cutoffBattery = function(wrapupRepairCompletePage) {
      wrapupRepairCompletePage.shadowRoot.querySelector('#batteryCutoffDialog')
          .close();
      executeThenTransitionState(
          wrapupRepairCompletePage,
          () => wrapupRepairCompletePage.shimlessRmaService_.endRma(
              ShutdownMethod.kBatteryCutoff));
    };

    if (this.batteryTimeoutID_ === -1) {
      this.batteryTimeoutID_ =
          setTimeout(() => cutoffBattery(this), this.batteryTimeoutInMs_);
    }
  }

  /** @private */
  cutoffBattery_() {
    this.shadowRoot.querySelector('#batteryCutoffDialog').close();
    executeThenTransitionState(
        this,
        () => this.shimlessRmaService_.endRma(ShutdownMethod.kBatteryCutoff));
  }

  /** @protected */
  onCutoffShutdownButtonClick_() {
    this.cutoffBattery_();
  }

  /** @protected */
  closePowerwashDialog_() {
    this.shadowRoot.querySelector('#powerwashDialog').close();
  }

  /** @protected */
  onCutoffCancelClick_() {
    this.cancelBatteryCutoff_();
  }

  /** @private */
  cancelBatteryCutoff_() {
    const batteryCutoffDialog = /** @type {!CrDialogElement} */ (
        this.shadowRoot.querySelector('#batteryCutoffDialog'));
    batteryCutoffDialog.close();

    if (this.batteryTimeoutID_ !== -1) {
      clearTimeout(this.batteryTimeoutID_);
      this.batteryTimeoutID_ = -1;
    }
  }

  /**
   * Implements PowerCableStateObserver.onPowerCableStateChanged()
   * @param {boolean} pluggedIn
   */
  onPowerCableStateChanged(pluggedIn) {
    this.pluggedIn_ = pluggedIn;

    if (this.pluggedIn_) {
      this.cancelBatteryCutoff_();
    }

    const icon = /** @type {!HTMLElement}*/ (
        this.shadowRoot.querySelector('#batteryCutoffIcon'));
    icon.setAttribute(
        'icon',
        this.pluggedIn_ ? 'shimless-icon:battery-cutoff-disabled' :
                          'shimless-icon:battery-cutoff');
  }

  /**
   * @return {boolean}
   * @protected
   */
  disableBatteryCutButton_() {
    return this.pluggedIn_ || this.allButtonsDisabled;
  }

  /**
   * @return {string}
   * @protected
   */
  getDiagnosticsIcon_() {
    return this.allButtonsDisabled ? 'shimless-icon:diagnostics-disabled' :
                                     'shimless-icon:diagnostics';
  }

  /**
   * @return {string}
   * @protected
   */
  getRmaLogIcon_() {
    return this.allButtonsDisabled ? 'shimless-icon:rma-log-disabled' :
                                     'shimless-icon:rma-log';
  }

  /**
   * @return {string}
   * @protected
   */
  getBatteryCutoffIcon_() {
    return this.allButtonsDisabled ? 'shimless-icon:battery-cutoff-disabled' :
                                     'shimless-icon:battery-cutoff';
  }

  /**
   * @return {boolean}
   * @protected
   */
  disableShutdownButtons_() {
    return this.shutdownButtonsDisabled_ || this.allButtonsDisabled;
  }

  /**
   * @return {string}
   * @protected
   */
  getRepairCompletedShutoffText_() {
    return this.pluggedIn_ ?
        this.i18n('repairCompletedShutoffInstructionsText') :
        this.i18n('repairCompletedShutoffDescriptionText');
  }
}

customElements.define(WrapupRepairCompletePage.is, WrapupRepairCompletePage);
