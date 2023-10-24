// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './os_feedback_shared_css.js';
import './file_attachment.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/policy/cr_tooltip_icon.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {FEEDBACK_LEGAL_HELP_URL, FEEDBACK_PRIVACY_POLICY_URL, FEEDBACK_TERMS_OF_SERVICE_URL} from './feedback_constants.js';
import {FeedbackFlowState} from './feedback_flow.js';
import {AttachedFile, FeedbackAppPreSubmitAction, FeedbackContext, FeedbackServiceProviderInterface, Report} from './feedback_types.js';
import {showScrollingEffects} from './feedback_utils.js';
import {getFeedbackServiceProvider} from './mojo_interface_provider.js';

/**
 * @fileoverview
 * 'share-data-page' is the second page of the feedback tool. It allows users to
 * choose what data to send with the feedback report.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const ShareDataPageElementBase = mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class ShareDataPageElement extends ShareDataPageElementBase {
  static get is() {
    return 'share-data-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="os-feedback-shared">
  :host-context(body.jelly-enabled) #privacyNote {
    font: var(--cros-body-2-font);
  }

  :host-context(body.jelly-enabled) #screenshotCheckLabel {
    font: var(--cros-button-2-font);
  }

  :host-context(body.jelly-enabled) .checkbox-label {
    font: var(--cros-body-2-font);
  }

  :host-context(body.jelly-enabled) cr-dialog [slot=body] {
    font: var(--cros-body-1-font);
  }

  ::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 4px;
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--cros-app-scrollbar-color);
    border-radius: 4px;
  }

  :host-context(body.jelly-enabled) .card-frame {
    background-color: var(--cros-sys-app_base);
    border: none;
    border-radius: 12px;
  }

  :host-context(body.jelly-enabled) #screenshotContainer {
    margin-inline-end: 16px;
  }

  :host-context(body.jelly-enabled) #screenshotImage {
    border-radius: 0 12px 12px 0;
  }

  .privacy-note {
    color: var(--cros-color-secondary);
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    margin-bottom: 20px;
    text-align: left;
  }

  #attachFilesLabelContainer {
    align-items: center;
    display: inline-flex;
  }

  #attachFilesIcon {
    --iron-icon-fill-color: var(--cros-icon-color-secondary);
    display: inline-block;
    height: 20px;
    margin-bottom: 8px;
    margin-inline-start: 6px;
    width: 20px;
  }

  #attachFiles {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  #attachFilesContainer {
    display: flex;
    flex-direction: row;
  }

  .card-frame {
    align-items: center;
    border: 1px solid var(--cros-separator-color);
    border-radius: 4px;
    display: flex;
  }

  #screenshotContainer {
    align-items: center;
    box-sizing: border-box;
    height: 48px;
    margin-inline-end: 12px;
    width: 50%;
  }

  #screenshotContainer > button {
    cursor: pointer;
  }

  #screenshotImage {
    border-radius: 0 4px 4px 0;
    display: block;
    height: 46px;
    transition: all 250ms ease;
    width: 68px;
  }

  #screenshotImage:hover {
    opacity: 0.7;
  }

  #addFileContainer {
    align-items: center;
    box-sizing: border-box;
    height: 48px;
    margin-inline-start: 12px;
    width: 50%;
  }

  .md-select {
    --md-select-side-padding: 16px;
    height: 32px;
    margin-bottom: 8px;
    width: 248px;
  }

  #shareDiagnosticData {
    margin-bottom: 20px;
  }

  .checkbox-field-container {
    align-items: start;
    display: flex;
    margin-bottom: 8px;
  }

  #pageUrl {
    display: flex;
    margin-bottom: 8px;
    white-space: nowrap;
  }

  #pageUrlLabel {
    display: flex;
    max-width: 488px;
    white-space: nowrap;
  }

  #tooltipContent {
    white-space: normal;
    word-wrap: break-word
  }

  .disabled-input-text {
    color: var(--cros-text-color-disabled);
  }

  #screenshotCheckbox {
    margin-inline-end: 10px;
    margin-inline-start: 12px;
    width: 156px;
  }

  #screenshotCheckLabel {
    flex: 1;
    font-weight: 400;
    line-height: 20px;
    margin-inline-end: 12px;
  }

  #imageButton {
    background: none;
    border: none;
    height: 48px;
    padding: 0;
    width: 68px;
  }

  #userConsent {
    display: flex;
    margin-bottom: 20px;
  }

  h2 {
    margin: 0 0 8px 0;
  }

  .checkbox-label {
    color: var(--cros-text-color-primary);
    font-size: 13px;
    line-height: 20px;
    margin-top: -2px;
  }

  cr-dialog::part(dialog) {
    width: 400px;
  }

  cr-dialog [slot=body] {
    color: var(--cros-text-color-primary);
    font-family: var(--feedback-roboto-font-family);
    font-size: 15px;
    font-weight: var(--feedback-regular-font-weight);
    line-height: 22px;
    padding-inline-end: 24px;
    padding-inline-start: 24px;
  }

  cr-dialog [slot=body] {
    white-space: pre-line;
  }

  #content {
    width: 520px;
  }

  cr-checkbox {
    align-items: flex-start;
    padding-top: 2px;
  }
</style>
<div id="container">
  <div id="header">
    <h1 class="page-title">[[i18n('pageTitle')]]</h1>
  </div>
  <div id="shadowElevation"></div>
  <div id="content" on-scroll="onContainerScroll_">
    <!-- Attach files -->
    <div id="attachFiles">
      <div id="attachFilesLabelContainer">
        <h2 id="attachFilesLabel">[[i18n('attachFilesLabel')]]</h2>
        <iron-icon icon="os-feedback:info" id="attachFilesIcon"
            class="focusable" tabindex="0"
            aria-labelledby="attachFilesTooltipContent">
        </iron-icon>
        <paper-tooltip for="attachFilesIcon" position="top" offset="0" fit-to-visible-bounds>
          <div id="attachFilesTooltipContent">
            [[i18n('attachFileLabelTooltip')]]
          </div>
        </paper-tooltip>
      </div>
      <div id="attachFilesContainer">
        <!-- Attach a screenshot -->
        <div id="screenshotContainer" class="card-frame">
          <cr-checkbox id="screenshotCheckbox"
              disabled="[[!hasScreenshot_(screenshotUrl)]]">
            <div id="screenshotCheckLabel" class="checkbox-label">[[i18n('attachScreenshotLabel')]]</div>
          </cr-checkbox>
          <button id="imageButton" class="focusable" on-click="handleScreenshotClick_">
            <img id="screenshotImage" src="[[screenshotUrl]]">
          </button>
        </div>
        <!-- Attach a file -->
        <div id="addFileContainer" class="card-frame"
            hidden$="[[!isUserLoggedIn_(feedbackContext)]]">
          <file-attachment></file-attachment>
        </div>
      </div>
    </div>
    <!-- User e-mail -->
    <div id="userEmail" class="text-field-container"
        hidden$="[[!hasEmail_(feedbackContext)]]">
      <h2 id="userEmailLabel">[[i18n('userEmailLabel')]]</h2>
      <select id="userEmailDropDown" class="md-select"
          aria-label="[[i18n('userEmailAriaLabel')]]">
        <option value$="[[feedbackContext.email]]" class="email-dropdown">
          [[feedbackContext.email]]
        </option>
        <option id="anonymousUser" value="" class="email-dropdown">
          [[i18n('anonymousUser')]]
        </option>
      </select>
    </div>
    <!-- User consent -->
    <div id="userConsent" class="checkbox-field-container"
        hidden$="[[!hasEmail_(feedbackContext)]]">
      <cr-checkbox id="userConsentCheckbox" aria-labelledby="userConsentLabel">
        <div id="userConsentLabel" class="checkbox-label">[[i18n('userConsentLabel')]]</div>
      </cr-checkbox>
    </div>
    <!-- Diagnostic data -->
    <div id="shareDiagnosticData">
      <h2 id="shareDiagnosticDataLabel">[[i18n('shareDiagnosticDataLabel')]]</h2>
      <!-- URL -->
      <div id="pageUrl" class="checkbox-field-container" hidden="[[!feedbackContext.pageUrl.url]]">
        <cr-checkbox id="pageUrlCheckbox" aria-labelledby="pageUrlLabel" checked>
          <div id="pageUrlLabel" class="checkbox-label">[[i18n('sharePageUrlLabel')]]&nbsp;
            <a href="[[feedbackContext.pageUrl.url]]" class="overflow-text" id="pageUrlText" target="_blank">
              [[feedbackContext.pageUrl.url]]
            </a>
            <paper-tooltip for="pageUrlText" fitToVisibleBounds>
              <div id="tooltipContent">[[feedbackContext.pageUrl.url]]</div>
            </paper-tooltip>
          </div>
        </cr-checkbox>
      </div>
      <!-- Autofill Metadata (Googler Internal Only) -->
      <div id="autofillCheckboxContainer" class="checkbox-field-container"
          hidden="[[!shouldShowAutofillCheckbox]]">
        <cr-checkbox id="autofillCheckbox"
            aria-labelledby="autofillCheckboxLabel" checked>
          <div id="autofillCheckboxLabel"
            inner-h-t-m-l="[[autofillCheckboxLabel_]]" class="checkbox-label">
          </div>
        </cr-checkbox>
      </div>
      <!-- System Information -->
      <div id="sysInfoContainer" class="checkbox-field-container">
        <cr-checkbox id="sysInfoCheckbox" aria-labelledby="sysInfoCheckboxLabel"
            checked="[[checkSysInfoAndMetrics_(feedbackContext.fromSettingsSearch)]]">
          <div id="sysInfoCheckboxLabel" inner-h-t-m-l="[[sysInfoCheckboxLabel_]]"
              class="checkbox-label"></div>
        </cr-checkbox>
      </div>
      <!-- Assistant Logs (Googler Internal Only) -->
      <div id="assistantLogsContainer" class="checkbox-field-container"
          hidden="[[!shouldShowAssistantCheckbox]]">
        <cr-checkbox id="assiatantLogsCheckbox" aria-labelledby="assistantLogsLabel" checked>
          <div id="assistantLogsLabel" class="checkbox-label" inner-h-t-m-l="[[assistantLogsCheckboxLabel_]]"></div>
        </cr-checkbox>
      </div>
      <!-- Bluetooth Logs (Googler Internal Only) -->
      <div id="bluetoothCheckboxContainer" class="checkbox-field-container"
          hidden="[[!shouldShowBluetoothCheckbox]]">
        <cr-checkbox id="bluetoothLogsCheckbox" aria-labelledby="bluetoothInfoLabel" checked>
          <div id="bluetoothInfoLabel" class="checkbox-label"
              inner-h-t-m-l="[[bluetoothLogsCheckboxLabel_]]"></div>
        </cr-checkbox>
      </div>
      <!-- Link Cross Device Doogfood Feedback (Googler Internal Only) -->
      <div id="linkCrossDeviceDogfoodFeedbackCheckboxContainer" class="checkbox-field-container"
          hidden="[[!shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox]]">
        <cr-checkbox id="linkCrossDeviceDogfoodFeedbackCheckbox" aria-labelledby="linkCrossDeviceDogfoodFeedbackInfoLabel" checked>
          <div id="linkCrossDeviceDogfoodFeedbackInfoLabel" class="checkbox-label"
              inner-h-t-m-l="[[linkCrossDeviceDogfoodFeedbackCheckboxLabel_]]"></div>
        </cr-checkbox>
      </div>
      <!-- Performance trace -->
      <div id="performanceTraceContainer" class="checkbox-field-container"
          hidden="[[!shouldShowPerformanceTraceCheckbox_(feedbackContext)]]">
        <cr-checkbox id="performanceTraceCheckbox"
            aria-labelledby="performanceTraceCheckboxLabel" checked>
          <div id="performanceTraceCheckboxLabel" class="checkbox-label"
              inner-h-t-m-l="[[performanceTraceCheckboxLabel_]]">
          </div>
        </cr-checkbox>
      </div>
    </div>
    <!-- Privacy note -->
    <div id="privacyNote" inner-h-t-m-l="[[privacyNote_]]"
        class="privacy-note">
    </div>
    <div id="shareWithPartnerNote" class="privacy-note">
      [[i18n('mayBeShareWithPartnerNote')]]</div>
    <div id="shadowShield"></div>
  </div>
  <div id="separator"></div>
  <div id="navButtons">
    <cr-button id="buttonBack" class="cancel-button"
        on-click="handleBackButtonClicked_">
      [[i18n('backButtonLabel')]]
    </cr-button>
    <cr-button id="buttonSend" class="action-button"
        on-click="handleSendButtonClicked_">
        [[i18n('sendButtonLabel')]]
    </cr-button>
  </div>
</div>
<dialog id="screenshotDialog" aria-label="[[i18n('previewScreenshotDialogLabel')]]">
  <div id="toolbar" class="dialog-toolbar">
    <cr-button id="closeDialogButton"
        class="close-dialog-button"
        title="[[i18n('dialogBackButtonAriaLabel')]]"
        aria-label="[[i18n('dialogBackButtonAriaLabel')]]"
        on-click="handleScreenshotDialogCloseClick_">
      <iron-icon id="backArrow" class="dialog-back-arrow"
          icon="cr:arrow-back"></iron-icon>
    </cr-button>
    <div id="dialogTitle">[[i18n('attachScreenshotLabel')]]</div>
  </div>
  <div id="mainPanel" class="dialog-main-panel">
    <div id="innerContentPanel" class="dialog-content-panel">
      <img src="[[screenshotUrl]]" class="image-preview">
    </div>
  </div>
</dialog>
<cr-dialog id="bluetoothDialog">
  <div slot="body">
    [[i18n('bluetoothLogsMessage')]]
  </div>
  <div slot="button-container">
    <cr-button id="bluetoothDialogDoneButton" class="action-button"
        on-click="handleCloseBluetoothDialogClicked_">
      [[i18n('buttonDone')]]
    </cr-button>
  </div>
</cr-dialog>
<cr-dialog id="linkCrossDeviceDogfoodFeedbackDialog">
  <div slot="body">
    [[i18n('linkCrossDeviceDogfoodFeedbackMessage')]]
  </div>
  <div slot="button-container">
    <cr-button id="linkCrossDeviceDogfoodFeedbackDialogDoneButton" class="action-button"
        on-click="handleCloseLinkCrossDeviceDogfoodFeedbackDialogClicked_">
      [[i18n('buttonDone')]]
    </cr-button>
  </div>
</cr-dialog>
<cr-dialog id="assistantDialog">
  <div slot="body">
    [[i18n('assistantLogsMessage')]]
  </div>
  <div slot="button-container">
    <cr-button id="assistantDialogDoneButton" class="action-button"
        on-click="handleCloseAssistantDialogClicked_">
      [[i18n('buttonDone')]]
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      feedbackContext: {
        type: FeedbackContext,
        readOnly: false,
        notify: true,
        observer: ShareDataPageElement.prototype.onFeedbackContextChanged_,
      },

      screenshotUrl: {type: String, readOnly: false, notify: true},
      shouldShowBluetoothCheckbox:
          {type: Boolean, readOnly: false, notify: true},
      shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox:
          {type: Boolean, readOnly: false, notify: true},
      shouldShowAssistantCheckbox:
          {type: Boolean, readOnly: false, notify: true},
      shouldShowAutofillCheckbox:
          {type: Boolean, readOnly: false, notify: true},
    };
  }

  constructor() {
    super();

    /**
     * @type {!FeedbackContext}
     */
    this.feedbackContext;

    /**
     * @type {string}
     */
    this.screenshotUrl;

    /**
     * @type {boolean}
     */
    this.shouldShowBluetoothCheckbox;

    /**
     * @type {boolean}
     */
    this.shouldShowLinkCrossDeviceDogfoodFeedbackCheckbox;

    /**
     * @type {boolean}
     */
    this.shouldShowAssistantCheckbox;

    /**
     * @type {boolean}
     */
    this.shouldShowAutofillCheckbox;

    /**
     * @type {string}
     * @protected
     */
    this.sysInfoCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.performanceTraceCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.assistantLogsCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.autofillCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.bluetoothLogsCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.linkCrossDeviceDogfoodFeedbackCheckboxLabel_;

    /**
     * @type {string}
     * @protected
     */
    this.privacyNote_;

    /** @private {!FeedbackServiceProviderInterface} */
    this.feedbackServiceProvider_ = getFeedbackServiceProvider();
  }

  ready() {
    super.ready();
    this.setPrivacyNote_();
    this.setSysInfoCheckboxLabelAndAttributes_();
    this.setPerformanceTraceCheckboxLabel_();
    this.setAssistantLogsCheckboxLabelAndAttributes_();
    this.setBluetoothLogsCheckboxLabelAndAttributes_();
    this.setLinkCrossDeviceDogfoodFeedbackCheckboxLabelAndAttributes_();
    this.setAutofillCheckboxLabelAndAttributes_();
    // Set the aria description works the best for screen reader.
    // It reads the description when the checkbox is focused, and when it is
    // checked and unchecked.
    this.$.screenshotCheckbox.ariaDescription =
        this.i18n('attachScreenshotCheckboxAriaLabel');
    this.$.imageButton.ariaLabel = this.i18n(
        'previewImageAriaLabel', this.$.screenshotCheckLabel.textContent);

    // Set up event listener for email change to retarget |this| to be the
    // ShareDataPageElement's context.
    this.$.userEmailDropDown.addEventListener(
        'change', this.handleUserEmailDropDownChanged_.bind(this));
  }

  /**
   * @return {boolean}
   * @protected
   */
  hasEmail_() {
    return (this.feedbackContext !== null && !!this.feedbackContext.email);
  }

  /**
   * If feedback app has been requested from settings search, we do not need to
   * collect system info and metrics data by default.
   *
   * @return {boolean}
   * @protected
   */
  checkSysInfoAndMetrics_() {
    if (!this.feedbackContext) {
      return true;
    }
    return !this.feedbackContext.fromSettingsSearch;
  }

  /**
   * @return {boolean}
   * @protected
   */
  shouldShowPerformanceTraceCheckbox_() {
    return (
        this.feedbackContext !== null && this.feedbackContext.traceId !== 0);
  }

  /** Focus on the screenshot checkbox when entering the page. */
  focusScreenshotCheckbox() {
    this.$.screenshotCheckbox.focus();
  }

  /**
   * @return {boolean}
   * @protected
   */
  hasScreenshot_() {
    return !!this.screenshotUrl;
  }

  /** @protected */
  handleScreenshotClick_() {
    this.$.screenshotDialog.showModal();
    this.feedbackServiceProvider_.recordPreSubmitAction(
        FeedbackAppPreSubmitAction.kViewedScreenshot);
  }

  /** @protected */
  handleScreenshotDialogCloseClick_() {
    this.$.screenshotDialog.close();
  }

  /** @protected */
  handleUserEmailDropDownChanged_() {
    const email = this.$.userEmailDropDown.value;
    const consentCheckbox = this.$.userConsentCheckbox;

    // Update UI and state of #userConsentCheckbox base on if report will be
    // anonymous.
    if (email === '') {
      consentCheckbox.disabled = true;
      consentCheckbox.checked = false;
      this.$.userConsentLabel.classList.add('disabled-input-text');
    } else {
      consentCheckbox.disabled = false;
      this.$.userConsentLabel.classList.remove('disabled-input-text');
    }
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenMetricsDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.feedbackServiceProvider_.openMetricsDialog();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenSystemInfoDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.feedbackServiceProvider_.openSystemInfoDialog();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenAutofillMetadataDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.feedbackServiceProvider_.openAutofillDialog(
        this.feedbackContext.autofillMetadata || '');
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenBluetoothLogsInfoDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.getElement_('#bluetoothDialog').showModal();
    this.getElement_('#bluetoothDialogDoneButton').focus();
  }

  /** @protected */
  handleCloseBluetoothDialogClicked_() {
    this.getElement_('#bluetoothDialog').close();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenLinkCrossDeviceDogfoodFeedbackInfoDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.getElement_('#linkCrossDeviceDogfoodFeedbackDialog').showModal();
    this.getElement_('#linkCrossDeviceDogfoodFeedbackDialogDoneButton').focus();
  }

  /** @protected */
  handleCloseLinkCrossDeviceDogfoodFeedbackDialogClicked_() {
    this.getElement_('#linkCrossDeviceDogfoodFeedbackDialog').close();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleOpenAssistantLogsDialog_(e) {
    // The default behavior of clicking on an anchor tag
    // with href="#" is a scroll to the top of the page.
    // This link opens a dialog, so we want to prevent
    // this default behavior.
    e.preventDefault();

    this.getElement_('#assistantDialog').showModal();
    this.getElement_('#assistantDialogDoneButton').focus();
  }

  /** @protected */
  handleCloseAssistantDialogClicked_() {
    this.getElement_('#assistantDialog').close();
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleBackButtonClicked_(e) {
    e.stopPropagation();

    this.dispatchEvent(new CustomEvent('go-back-click', {
      composed: true,
      bubbles: true,
      detail: {currentState: FeedbackFlowState.SHARE_DATA},
    }));
  }

  /**
   * @param {!Event} e
   * @protected
   */
  handleSendButtonClicked_(e) {
    this.getElement_('#buttonSend').disabled = true;

    e.stopPropagation();

    this.createReport_().then(report => {
      this.dispatchEvent(new CustomEvent('continue-click', {
        composed: true,
        bubbles: true,
        detail: {currentState: FeedbackFlowState.SHARE_DATA, report: report},
      }));
    });
  }

  /**
   * @param {string} selector
   * @return {Element}
   * @private
   */
  getElement_(selector) {
    return this.shadowRoot.querySelector(selector);
  }

  /**
   * @return {!Promise<!Report>}
   * @private
   */
  async createReport_() {
    /* @type {!Report} */
    const report = /** @type {!Report} */ ({
      feedbackContext: {},
      description: null,
      includeSystemLogsAndHistograms:
          this.getElement_('#sysInfoCheckbox').checked,
      includeScreenshot: this.getElement_('#screenshotCheckbox').checked &&
          !!this.getElement_('#screenshotImage').src,
      contactUserConsentGranted:
          this.getElement_('#userConsentCheckbox').checked,
    });

    report.attachedFile =
        await this.getElement_('file-attachment').getAttachedFile();

    const email = this.getElement_('#userEmailDropDown').value;
    if (email) {
      report.feedbackContext.email = email;
    }

    // Ensure consent granted is false when email not provided.
    if (!email) {
      report.contactUserConsentGranted = false;
    }

    if (this.getElement_('#pageUrlCheckbox').checked) {
      report.feedbackContext.pageUrl = {
        url: this.getElement_('#pageUrlText').textContent.trim(),
      };
    }

    if (this.feedbackContext.extraDiagnostics &&
        this.getElement_('#sysInfoCheckbox').checked) {
      report.feedbackContext.extraDiagnostics =
          this.feedbackContext.extraDiagnostics;
    }

    if (this.feedbackContext.categoryTag) {
      report.feedbackContext.categoryTag = this.feedbackContext.categoryTag;
    }

    const isLinkCrossDeviceIssue =
        !this.getElement_('#linkCrossDeviceDogfoodFeedbackCheckboxContainer')
             .hidden &&
        this.getElement_('#linkCrossDeviceDogfoodFeedbackCheckbox').checked;

    if (!this.getElement_('#bluetoothCheckboxContainer').hidden &&
        this.getElement_('#bluetoothLogsCheckbox').checked) {
      report.feedbackContext.categoryTag = isLinkCrossDeviceIssue ?
          'linkCrossDeviceDogfoodFeedbackWithBluetoothLogs' :
          'BluetoothReportWithLogs';
      report.sendBluetoothLogs = true;
    } else {
      if (isLinkCrossDeviceIssue) {
        report.feedbackContext.categoryTag =
            'linkCrossDeviceDogfoodFeedbackWithoutBluetoothLogs';
      }
      report.sendBluetoothLogs = false;
    }

    if (this.feedbackContext.fromAutofill &&
        !this.getElement_('#autofillCheckboxContainer').hidden &&
        this.getElement_('#autofillCheckbox').checked) {
      report.includeAutofillMetadata = true;
      report.feedbackContext.autofillMetadata =
          this.feedbackContext.autofillMetadata;
    } else {
      report.includeAutofillMetadata = false;
      report.feedbackContext.autofillMetadata = '';
    }

    if (this.getElement_('#performanceTraceCheckbox').checked) {
      report.feedbackContext.traceId = this.feedbackContext.traceId;
    } else {
      report.feedbackContext.traceId = 0;
    }

    report.feedbackContext.fromAssistant = this.feedbackContext.fromAssistant;

    report.feedbackContext.assistantDebugInfoAllowed =
        this.feedbackContext.fromAssistant &&
        !this.getElement_('#assistantLogsContainer').hidden &&
        this.getElement_('#assiatantLogsCheckbox').checked;

    return report;
  }

  /**
   * When starting a new report, the send report button should be
   * re-enabled.
   */
  reEnableSendReportButton() {
    this.getElement_('#buttonSend').disabled = false;
  }

  /**
   * Make the link clickable and open it in a new window
   * @param {!string} linkSelector
   * @param {!string} linkUrl
   * @private
   */
  openLinkInNewWindow_(linkSelector, linkUrl) {
    const linkElement = this.shadowRoot.querySelector(linkSelector);
    if (linkElement) {
      linkElement.setAttribute('href', linkUrl);
      linkElement.setAttribute('target', '_blank');
    }
  }

  /**
   * When the feedback app is launched from OOBE or the login screen, the
   * categoryTag is set to "Login".
   * @returns {boolean} True if the categoryTag is not equal to Login.
   * @protected
   */
  isUserLoggedIn_() {
    return this.feedbackContext?.categoryTag !== 'Login';
  }

  /** @private */
  setPrivacyNote_() {
    if (this.isUserLoggedIn_()) {
      this.setPrivacyNoteForLoggedInUsers_();
    } else {
      this.setPrivacyNoteForLoggedOutUsers_();
    }
  }

  /** @private */
  setPrivacyNoteForLoggedOutUsers_() {
    this.privacyNote_ = this.i18nAdvanced('privacyNoteLoggedOut', {
      substitutions: [
        FEEDBACK_PRIVACY_POLICY_URL,
        FEEDBACK_TERMS_OF_SERVICE_URL,
        FEEDBACK_LEGAL_HELP_URL,
      ],
    });
  }

  /** @private */
  setPrivacyNoteForLoggedInUsers_() {
    this.privacyNote_ = this.i18nAdvanced('privacyNote', {attrs: ['id']});

    this.openLinkInNewWindow_('#legalHelpPageUrl', FEEDBACK_LEGAL_HELP_URL);
    this.openLinkInNewWindow_('#privacyPolicyUrl', FEEDBACK_PRIVACY_POLICY_URL);
    this.openLinkInNewWindow_(
        '#termsOfServiceUrl', FEEDBACK_TERMS_OF_SERVICE_URL);
  }

  /** @private */
  setSysInfoCheckboxLabelAndAttributes_() {
    this.sysInfoCheckboxLabel_ = this.i18nAdvanced(
        'includeSystemInfoAndMetricsCheckboxLabel', {attrs: ['id']});

    const sysInfoLink = this.shadowRoot.querySelector('#sysInfoLink');
    // Setting href causes <a> tag to display as link.
    sysInfoLink.setAttribute('href', '#');
    sysInfoLink.addEventListener('click', (e) => {
      this.handleOpenSystemInfoDialog_(e);
      this.feedbackServiceProvider_.recordPreSubmitAction(
          FeedbackAppPreSubmitAction.kViewedSystemAndAppInfo);
    });

    const histogramsLink = this.shadowRoot.querySelector('#histogramsLink');
    histogramsLink.setAttribute('href', '#');
    histogramsLink.addEventListener('click', (e) => {
      this.handleOpenMetricsDialog_(e);
      this.feedbackServiceProvider_.recordPreSubmitAction(
          FeedbackAppPreSubmitAction.kViewedMetrics);
    });
  }

  /** @private */
  setAutofillCheckboxLabelAndAttributes_() {
    this.autofillCheckboxLabel_ =
        this.i18nAdvanced('includeAutofillCheckboxLabel', {attrs: ['id']});

    const assistantLogsLink = this.getElement_('#autofillMetadataUrl');
    // Setting href causes <a> tag to display as link.
    assistantLogsLink.setAttribute('href', '#');
    assistantLogsLink.addEventListener('click', (e) => {
      this.handleOpenAutofillMetadataDialog_(e);
      this.feedbackServiceProvider_.recordPreSubmitAction(
          FeedbackAppPreSubmitAction.kViewedAutofillMetadata);
    });
  }

  /** @private */
  setPerformanceTraceCheckboxLabel_() {
    this.performanceTraceCheckboxLabel_ = this.i18nAdvanced(
        'includePerformanceTraceCheckboxLabel', {attrs: ['id']});
  }

  /** @private */
  setAssistantLogsCheckboxLabelAndAttributes_() {
    this.assistantLogsCheckboxLabel_ =
        this.i18nAdvanced('includeAssistantLogsCheckboxLabel', {attrs: ['id']});

    const assistantLogsLink = this.getElement_('#assistantLogsLink');
    // Setting href causes <a> tag to display as link.
    assistantLogsLink.setAttribute('href', '#');
    assistantLogsLink.addEventListener(
        'click', (e) => void this.handleOpenAssistantLogsDialog_(e));
  }

  /** @private */
  setBluetoothLogsCheckboxLabelAndAttributes_() {
    this.bluetoothLogsCheckboxLabel_ =
        this.i18nAdvanced('bluetoothLogsInfo', {attrs: ['id']});

    const bluetoothLogsLink =
        this.shadowRoot.querySelector('#bluetoothLogsInfoLink');
    // Setting href causes <a> tag to display as link.
    bluetoothLogsLink.setAttribute('href', '#');
    bluetoothLogsLink.addEventListener(
        'click', (e) => void this.handleOpenBluetoothLogsInfoDialog_(e));
  }

  /** @private */
  setLinkCrossDeviceDogfoodFeedbackCheckboxLabelAndAttributes_() {
    this.linkCrossDeviceDogfoodFeedbackCheckboxLabel_ = this.i18nAdvanced(
        'linkCrossDeviceDogfoodFeedbackInfo', {attrs: ['id']});

    const linkCrossDeviceDogfoodFeedbackLink = this.shadowRoot.querySelector(
        '#linkCrossDeviceDogfoodFeedbackInfoLink');

    // Setting href causes <a> tag to display as link.
    linkCrossDeviceDogfoodFeedbackLink.setAttribute('href', '#');
    linkCrossDeviceDogfoodFeedbackLink.addEventListener(
        'click',
        (e) =>
            void this.handleOpenLinkCrossDeviceDogfoodFeedbackInfoDialog_(e));
  }

  /** @private */
  onFeedbackContextChanged_() {
    // We can only set up the hyperlink for the performance trace checkbox once
    // we receive the trace id.
    if (this.feedbackContext !== null && this.feedbackContext.traceId !== 0) {
      this.openLinkInNewWindow_(
          '#performanceTraceLink',
          `chrome://slow_trace/tracing.zip#${this.feedbackContext.traceId}`);
    }
    // Update the privacy note when the feedback context changed.
    this.setPrivacyNote_();
  }

  /**
   * @param {!Event} event
   * @protected
   */
  onContainerScroll_(event) {
    showScrollingEffects(event, this);
  }
}

customElements.define(ShareDataPageElement.is, ShareDataPageElement);
