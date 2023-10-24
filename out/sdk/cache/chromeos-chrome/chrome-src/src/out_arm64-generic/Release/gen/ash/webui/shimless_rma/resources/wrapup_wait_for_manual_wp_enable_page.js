// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './shimless_rma_shared_css.js';
import './base_page.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {HardwareWriteProtectionStateObserverInterface, HardwareWriteProtectionStateObserverReceiver, ShimlessRmaServiceInterface, StateResult} from './shimless_rma_types.js';
import {disableNextButton, enableNextButton, executeThenTransitionState, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'wrapup-wait-for-manual-wp-enable-page' wait for the manual HWWP enable to be
 * completed.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const WrapupWaitForManualWpEnablePageBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class WrapupWaitForManualWpEnablePage extends
    WrapupWaitForManualWpEnablePageBase {
  static get is() {
    return 'wrapup-wait-for-manual-wp-enable-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('manuallyEnableWpTitleText')]]</h1>
    <div id="manuallyEnableHwwpInstructions" class="instructions">
      [[i18n('manuallyEnableWpInstructionsText')]]
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`;
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();
    /**
     * Receiver responsible for observing hardware write protection state.
     * @private {
     *  ?HardwareWriteProtectionStateObserverReceiver}
     */
    this.hardwareWriteProtectionStateObserverReceiver_ =
        new HardwareWriteProtectionStateObserverReceiver(
            /**
             * @type {!HardwareWriteProtectionStateObserverInterface}
             */
            (this));

    this.shimlessRmaService_.observeHardwareWriteProtectionState(
        this.hardwareWriteProtectionStateObserverReceiver_.$
            .bindNewPipeAndPassRemote());
  }

  /** @override */
  ready() {
    super.ready();

    focusPageTitle(this);
  }

  /**
   * @param {boolean} enabled
   */
  onHardwareWriteProtectionStateChanged(enabled) {
    if (enabled) {
      executeThenTransitionState(
          this, () => this.shimlessRmaService_.writeProtectManuallyEnabled());
    }
  }
}

customElements.define(
    WrapupWaitForManualWpEnablePage.is, WrapupWaitForManualWpEnablePage);
