// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './base_page.js';
import './shimless_rma_shared_css.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {ShimlessRmaServiceInterface} from './shimless_rma_types.js';
import {disableAllButtons, executeThenTransitionState, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'hardware-error-page' is displayed when an unexpected error blocks RMA from
 * continuing.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const HardwareErrorPageBase = mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class HardwareErrorPage extends HardwareErrorPageBase {
  static get is() {
    return 'hardware-error-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
    .large-icon {
      height: 200px;
      width: 300px;
    }

    #navigationButtonWrapper {
      bottom: var(--header-footer-height);
      position: absolute;
      right: var(--content-container-padding);
    }

    #errorMessageDiv {
      border-bottom: var(--cr-separator-line);
      margin-bottom: 16px;
    }

    #errorCode {
      text-align: end;
    }
  </style>
  <base-page>
    <div slot="left-pane">
      <h1 tabindex="-1">[[i18n('hardwareErrorTitle')]]</h1>
      <div id="errorMessageDiv" class="icon-message">
        <iron-icon icon="shimless-icon:warning" class="warning-icon small-icon">
        </iron-icon>
        <div class="instructions">[[i18n('hardwareErrorMessage')]]</div>
      </div>
      <div id="errorCode" class="instructions">
        [[getErrorCodeString_(errorCode)]]
      </div>
      <div id="navigationButtonWrapper">
        <cr-button id="shutDownButton" class="action-button"
            on-click="onShutDownButtonClicked_" disabled="[[allButtonsDisabled]]">
          [[i18n('hardwareErrorShutDownButton')]]
        </cr-button>
      </div>
    </div>
    <div slot="right-pane">
      <div class="illustration-wrapper" aria-hidden="true">
        <img class="illustration" src="illustrations/error.svg"
            alt="[[i18n('errorAltText')]]">
      </div>
    </div>
  </base-page>
<!--_html_template_end_-->`;
  }
  static get properties() {
    return {
      /**
       * Set by shimless_rma.js.
       * @type {boolean}
       */
      allButtonsDisabled: Boolean,

      /**
       * Set by shimless_rma.js.
       * @type {number}
       */
      errorCode: Number,
    };
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();
  }

  /** @override */
  ready() {
    super.ready();

    focusPageTitle(this);
  }

  /** @protected */
  onShutDownButtonClicked_() {
    this.shimlessRmaService_.shutDownAfterHardwareError();
    disableAllButtons(this, /* showBusyStateOverlay= */ true);
  }

  /**
   * @return {string}
   * @protected
   */
  getErrorCodeString_() {
    return this.i18n('hardwareErrorCode', this.errorCode);
  }
}

customElements.define(HardwareErrorPage.is, HardwareErrorPage);
