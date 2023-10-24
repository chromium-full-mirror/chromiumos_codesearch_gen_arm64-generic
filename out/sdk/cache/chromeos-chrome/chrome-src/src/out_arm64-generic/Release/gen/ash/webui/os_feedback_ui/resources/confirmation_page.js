// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './help_resources_icons.js';
import './os_feedback_shared_css.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/cr_elements/chromeos/cros_color_overrides.css.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {FeedbackFlowState} from './feedback_flow.js';
import {FeedbackAppPostSubmitAction, FeedbackServiceProviderInterface, SendReportStatus} from './feedback_types.js';
import {showScrollingEffects} from './feedback_utils.js';
import {getFeedbackServiceProvider} from './mojo_interface_provider.js';

/**
 * @fileoverview
 * 'confirmation-page' is the last step of the feedback tool.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const ConfirmationPageElementBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

export class ConfirmationPageElement extends ConfirmationPageElementBase {
  static get is() {
    return 'confirmation-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="os-feedback-shared cros-color-overrides">
  :host {
    --cr-icon-button-margin-start: 20px;
    --cr-section-vertical-padding: 11px;
    --iron-icon-height: 40px;
  }

  :host-context(body.jelly-enabled) .label {
    font: var(--cros-button-1-font);
  }

  :host-context(body.jelly-enabled) .sub-label {
    font: var(--cros-button-2-font);
  }

  :host-context(body.jelly-enabled) cr-link-row {
    background-color: var(--cros-sys-app_base);
    border: none;
    border-radius: 16px;
  }

  cr-link-row {
    --cr-link-row-icon-width: 40px;
    border: 1px solid var(--cros-separator-color);
    border-radius: 4px;
    box-sizing: border-box;
    margin: 12px 0 0 0;
  }

  #buttonDone {
    display: flex;
    height: 32px;
    padding: 6px 16px;
    width: 63px;
  }

  #help-resources {
    display: flex;
    flex-direction: column;
  }

  #helpResourcesLabel {
    margin: 24px 0 12px 0;
  }

  .label {
    color: var(--cros-text-color-primary);
    font-family: var(--feedback-roboto-font-family);
    font-size: 14px;
    font-weight: var(--feedback-medium-font-weight);
    line-height: 20px;
  }

  .sub-label {
    color: var(--cros-text-color-secondary);
    font-family: var(--feedback-roboto-font-family);
    font-size: 13px;
    font-weight: var(--feedback-regular-font-weight);
    line-height: 20px;
  }

  #helpResourcesLabel {
    color: var(--cros-text-color-secondary);
    font-family: var(--feedback-google-sans-font-family);
    font-size: 15px;
    font-weight: var(--feedback-medium-font-weight);
    line-height: 22px;
    margin: 24px 0 0;
  }

  cr-link-row::part(icon) {
    --cr-icon-button-fill-color: var(--cros-icon-color-primary);
  }

  cr-link-row::part(icon):focus-visible {
    box-shadow: none;
    outline: 2px solid var(--cros-focus-ring-color);
  }

  .page-title:focus {
    outline: none;
  }
</style>
<div id="container">
  <div id="header">
    <h1 id="pageTitle" class="page-title" tabindex="-1">[[getTitle_(sendReportStatus)]]</h1>
  </div>
  <div id="shadowElevation"></div>
  <div id="content" on-scroll="onContainerScroll_">
    <div id="message" class="sub-label">[[getMessage_(sendReportStatus)]]</div>
    <div id="helpResources">
      <h2 id="helpResourcesLabel">[[i18n('helpResourcesLabel')]]</h2>
      <cr-link-row id="explore" start-icon="help-resources:explore"
          external using-slotted-label
          button-aria-description=""
          on-click="handleLinkClicked_">
          <span slot="label" class="label">[[i18n('exploreAppLabel')]]</span>
          <span slot="sub-label"
              class="sub-label">[[i18n('exploreAppDescription')]]
          </span>
      </cr-link-row>
      <cr-link-row id="diagnostics" start-icon="help-resources:diagnostics"
          external using-slotted-label
          button-aria-description=""
          on-click="handleLinkClicked_">
          <span slot="label" class="label">[[i18n('diagnosticsAppLabel')]]</span>
          <span slot="sub-label"
              class="sub-label">[[i18n('diagnosticsAppDescription')]]
          </span>
      </cr-link-row>
      <cr-link-row id="chromebookCommunity"
          start-icon="help-resources2:chromebook-community"
          hidden="[[hideCommunityLink_(sendReportStatus, isUserLoggedIn)]]" external using-slotted-label
          button-aria-description=""
          on-click="handleLinkClicked_">
          <span slot="label" class="label">[[i18n('askCommunityLabel')]]</span>
          <span slot="sub-label"
              class="sub-label">[[i18n('askCommunityDescription')]]
          </span>
      </cr-link-row>
    </div>
    <div id="shadowShield"></div>
  </div>
  <div id="separator"></div>
  <div id="navButtons">
    <cr-button id="buttonNewReport" class="cancel-button"
        on-click="handleBackButtonClicked_">
      <span>[[i18n('buttonNewReport')]]</span>
    </cr-button>
    <cr-button id="buttonDone" class="action-button"
      on-click="handleDoneButtonClicked_">[[i18n('buttonDone')]]</cr-button>
  </div>
</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      sendReportStatus: {type: SendReportStatus, readOnly: false, notify: true},
      isUserLoggedIn: {type: Boolean, readOnly: false, notify: true},
    };
  }

  constructor() {
    super();

    /**
     * The status of sending the report.
     * @type {?SendReportStatus}
     */
    this.sendReportStatus;

    /** @private {!FeedbackServiceProviderInterface} */
    this.feedbackServiceProvider_ = getFeedbackServiceProvider();
    /**
     * Whether this is the first action taken by the user after sending
     * feedback.
     * @type {boolean}
     */
    this.isFirstAction = true;

    /**
     * Whether the user has logged in (not on oobe or on the login screen).
     * @type {boolean}
     */
    this.isUserLoggedIn;
  }

  /** @override */
  ready() {
    super.ready();
    window.addEventListener('beforeunload', event => {
      this.handleEmitMetrics_(FeedbackAppPostSubmitAction.kCloseFeedbackApp);
    });
  }

  /**
   * The page shows different information when the device is offline.
   * @returns {boolean}
   * @private
   */
  isOffline_() {
    return this.sendReportStatus === SendReportStatus.kDelayed;
  }

  /**
   * Hide the community link when offline or the user is not logged in.
   * @returns {boolean}
   * @protected
   */
  hideCommunityLink_() {
    return this.isOffline_() || !this.isUserLoggedIn;
  }

  /**
   * @returns {string}
   * @protected
   */
  getTitle_() {
    if (this.isOffline_()) {
      return this.i18n('confirmationTitleOffline');
    }
    return this.i18n('confirmationTitleOnline');
  }

  /**
   * @returns {string}
   * @protected
   */
  getMessage_() {
    if (this.isOffline_()) {
      return this.i18n('thankYouNoteOffline');
    }
    return this.i18n('thankYouNoteOnline');
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
      detail: {currentState: FeedbackFlowState.CONFIRMATION},
    }));
    this.handleEmitMetrics_(FeedbackAppPostSubmitAction.kSendNewReport);
  }

  /**
   * Close the app when user clicks the done button.
   * @protected
   */
  handleDoneButtonClicked_() {
    this.handleEmitMetrics_(FeedbackAppPostSubmitAction.kClickDoneButton);
    window.close();
  }

  /**
   * Open links, including SWA app link and web link.
   * @param {!Event} e
   * @protected
   */
  handleLinkClicked_(e) {
    e.stopPropagation();

    switch (e.currentTarget.id) {
      case 'diagnostics':
        this.feedbackServiceProvider_.openDiagnosticsApp();
        this.handleEmitMetrics_(
            FeedbackAppPostSubmitAction.kOpenDiagnosticsApp);
        break;
      case 'explore':
        this.feedbackServiceProvider_.openExploreApp();
        this.handleEmitMetrics_(FeedbackAppPostSubmitAction.kOpenExploreApp);
        break;
      case 'chromebookCommunity':
        // If app locale is not available, default to en.
        window.open(
            `https://support.google.com/chromebook/?hl=${
                this.i18n('language') || 'en'}#topic=3399709`,
            '_blank');
        this.handleEmitMetrics_(
            FeedbackAppPostSubmitAction.kOpenChromebookCommunity);
        break;
      default:
        console.warn('unexpected caller id: ', e.currentTarget.id);
    }
  }

  handleEmitMetrics_(action) {
    if (this.isFirstAction) {
      this.isFirstAction = false;
      this.feedbackServiceProvider_.recordPostSubmitAction(action);
    }
  }

  focusPageTitle() {
    this.shadowRoot.querySelector('#pageTitle').focus();
  }

  /**
   * @param {!Event} event
   * @protected
   */
  onContainerScroll_(event) {
    showScrollingEffects(event, this);
  }
}

customElements.define(ConfirmationPageElement.is, ConfirmationPageElement);
