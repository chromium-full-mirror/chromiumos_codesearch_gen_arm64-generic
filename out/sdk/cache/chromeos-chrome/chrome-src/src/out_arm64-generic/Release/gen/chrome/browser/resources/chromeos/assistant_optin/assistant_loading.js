// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design assistant
 * loading screen.
 *
 * Event 'reload' will be fired when the user click the retry button.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '../components/buttons/oobe_text_button.js';
import '../components/common_styles/oobe_dialog_host_styles.css.js';
import '../components/dialogs/oobe_adaptive_dialog.js';
import '../components/dialogs/oobe_content_dialog.js';
import './assistant_icons.html.js';
import './assistant_common_styles.css.js';

import {afterNextRender, html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {MultiStepBehavior} from '../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior} from '../components/behaviors/oobe_i18n_behavior.js';

import {BrowserProxy, BrowserProxyImpl} from './browser_proxy.js';


const AssistantLoadingUIState = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

/**
 * @constructor
 * @extends {PolymerElement}
 */
const AssistantLoadingBase =
    mixinBehaviors([OobeI18nBehavior, MultiStepBehavior], PolymerElement);

/**
 * @polymer
 */
class AssistantLoading extends AssistantLoadingBase {
  static get is() {
    return 'assistant-loading';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2018 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles assistant-common-styles">
  #retry-button {
    margin-inline-end: 0;
  }

  paper-progress {
    --paper-progress-active-color: var(--cros-slider-color-active);
    --paper-progress-container-color: var(--cros-slider-track-color-active);
    --paper-progress-secondary-color: var(--cros-slider-color-active);
    display: block;
    height: 4px;
    padding: 12px 0 0 0;
    width: 100%;
  }
</style>
<oobe-content-dialog id="loading-dialog" role="dialog" for-step="loading"
    no-buttons>
  <div slot="content" class="flex layout vertical center-justified">
    <div id="loading-content" class="content">
      <div>
        [[i18nDynamic(locale, 'assistantOptinLoading')]]
      </div>
      <paper-progress class="slow" indeterminate></paper-progress>
    </div>
  </div>
</oobe-content-dialog>
<oobe-adaptive-dialog id="error-dialog" role="dialog" hide-shadow
    for-step="error">
  <iron-icon slot="icon" icon="assistant-32:assistant"
      aria-label$="[[i18nDynamic(locale, 'assistantLogo')]]">
  </iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'assistantOptinLoadErrorTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'assistantOptinLoadErrorMessage')]]
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skip-button" on-click="onSkipTap_"
        disabled="[[buttonsDisabled]]" text-key="assistantOptinSkipButton">
    </oobe-text-button>
    <oobe-text-button id="retry-button" inverse on-click="onRetryTap_"
        disabled="[[buttonsDisabled]]" text-key="assistantOptinRetryButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Buttons are disabled when the page content is loading.
       */
      buttonsDisabled: {
        type: Boolean,
        value: true,
      },
    };
  }

  constructor() {
    super();

    this.UI_STEPS = AssistantLoadingUIState;

    /**
     * Whether an error occurs while the page is loading.
     * @type {boolean}
     * @private
     */
    this.loadingError_ = false;

    /**
     * Timeout ID for loading animation.
     * @type {number}
     * @private
     */
    this.animationTimeout_ = null;

    /**
     * Timeout ID for loading (will fire an error).
     * @type {number}
     * @private
     */
    this.loadingTimeout_ = null;

    /** @private {?BrowserProxy} */
    this.browserProxy_ = BrowserProxyImpl.getInstance();
  }

  defaultUIStep() {
    return AssistantLoadingUIState.LOADED;
  }


  /**
   * On-tap event handler for retry button.
   *
   * @private
   */
  onRetryTap_() {
    this.dispatchEvent(
        new CustomEvent('reload', {bubbles: true, composed: true}));
  }

  /**
   * On-tap event handler for skip button.
   *
   * @private
   */
  onSkipTap_() {
    if (this.buttonsDisabled) {
      return;
    }
    this.buttonsDisabled = true;
    this.browserProxy_.flowFinished();
  }

  /**
   * Reloads the page.
   */
  reloadPage() {
    window.clearTimeout(this.animationTimeout_);
    window.clearTimeout(this.loadingTimeout_);
    this.setUIStep(AssistantLoadingUIState.LOADED);
    this.buttonsDisabled = true;
    this.animationTimeout_ = window.setTimeout(
        () => this.setUIStep(AssistantLoadingUIState.LOADING), 500);
    this.loadingTimeout_ =
        window.setTimeout(() => this.onLoadingTimeout(), 15000);
  }

  /**
   * Handles event when page content cannot be loaded.
   */
  onErrorOccurred(details) {
    this.loadingError_ = true;
    window.clearTimeout(this.animationTimeout_);
    window.clearTimeout(this.loadingTimeout_);
    this.setUIStep(AssistantLoadingUIState.ERROR);

    this.buttonsDisabled = false;
    this.$['retry-button'].focus();
  }

  /**
   * Handles event when all the page content has been loaded.
   */
  onPageLoaded() {
    window.clearTimeout(this.animationTimeout_);
    window.clearTimeout(this.loadingTimeout_);
    this.setUIStep(AssistantLoadingUIState.LOADED);
  }

  /**
   * Called when the loading timeout is triggered.
   */
  onLoadingTimeout() {
    this.browserProxy_.timeout();
    this.onErrorOccurred();
  }

  /**
   * Signal from host to show the screen.
   */
  onShow() {
    this.reloadPage();
    afterNextRender(this, () => this.$['loading-dialog'].focus());
  }
}

customElements.define(AssistantLoading.is, AssistantLoading);
