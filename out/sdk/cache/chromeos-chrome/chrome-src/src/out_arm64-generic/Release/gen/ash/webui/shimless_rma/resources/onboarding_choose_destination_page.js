// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './shimless_rma_shared_css.js';
import './base_page.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {ShimlessRmaServiceInterface, StateResult} from './shimless_rma_types.js';
import {disableNextButton, enableNextButton, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'onboarding-choose-destination-page' allows user to select between preparing
 * the device for return to the original owner or refurbishing for a new owner.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const OnboardingChooseDestinationPageBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class OnboardingChooseDestinationPageElement extends
    OnboardingChooseDestinationPageBase {
  static get is() {
    return 'onboarding-choose-destination-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
</style>

<base-page left-pane-only>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('chooseDestinationTitleText')]]</h1>
    <cr-radio-group
        id="chooseDestinationGroup"
        on-selected-changed="onDestinationSelectionChanged_"
        disabled="[[allButtonsDisabled]]">
      <cr-radio-button name="newOwner" id="destinationNewOwner"
          label="[[i18n('newOwnerText')]]">
        <div class="indented-description" aria-hidden="true">
          [[i18n('newOwnerDescriptionText')]]
        </div>
      </cr-radio-button>
      <cr-radio-button name="originalOwner" id="destinationOriginalOwner"
          label="[[i18n('sameOwnerText')]]">
      </cr-radio-button>
      <cr-radio-button name="notSureOwner" id="destinationNotSureOwner"
          label="[[i18n('notSureOwnerText')]]">
      </cr-radio-button>
    </cr-radio-group>
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

      /** @protected */
      destinationOwner_: {
        type: String,
        value: '',
      },
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

  /**
   * @param {!CustomEvent<{value: string}>} event
   * @protected
   */
  onDestinationSelectionChanged_(event) {
    this.destinationOwner_ = event.detail.value;
    const disabled = !this.destinationOwner_;
    if (disabled) {
      disableNextButton(this);
    } else {
      enableNextButton(this);
    }
  }

  /** @return {!Promise<!{stateResult: !StateResult}>} */
  onNextButtonClick() {
    if (this.destinationOwner_ === 'originalOwner') {
      return this.shimlessRmaService_.setSameOwner();
    } else if (
        this.destinationOwner_ === 'newOwner' ||
        this.destinationOwner_ === 'notSureOwner') {
      return this.shimlessRmaService_.setDifferentOwner();
    } else {
      return Promise.reject(new Error('No destination selected'));
    }
  }
}

customElements.define(
    OnboardingChooseDestinationPageElement.is,
    OnboardingChooseDestinationPageElement);
