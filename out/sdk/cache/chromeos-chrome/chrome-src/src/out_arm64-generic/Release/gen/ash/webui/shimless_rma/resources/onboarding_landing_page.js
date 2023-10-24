// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import './shimless_rma_shared_css.js';
import './base_page.js';
import './icons.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {getShimlessRmaService} from './mojo_interface_provider.js';
import {HardwareVerificationStatusObserverInterface, HardwareVerificationStatusObserverReceiver, ShimlessRmaServiceInterface, StateResult} from './shimless_rma_types.js';
import {enableNextButton, executeThenTransitionState, focusPageTitle} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'onboarding-landing-page' is the main landing page for the shimless rma
 * process.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const OnboardingLandingPageBase =
    mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class OnboardingLandingPage extends OnboardingLandingPageBase {
  static get is() {
    return 'onboarding-landing-page';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared">
  #nextButtonCaret {
    margin-inline-start: 5px;
  }

  #navigationButtonWrapper {
    bottom: var(--header-footer-height);
    position: absolute;
  }

  #getStartedButton {
    margin-inline-end: 8px;
  }

  #unqualifiedComponentsLink {
    color: var(--cros-link-color);
  }

  .button-spinner {
    height: 20px;
    margin-inline-start: 5px;
    width: 20px;
  }

  iron-icon[icon='shimless-icon:warning'] {
    fill: var(--cros-icon-color-warning);
  }
</style>

<base-page>
  <div slot="left-pane">
    <h1 tabindex="-1">[[i18n('welcomeTitleText')]]</h1>
    <div class="instructions">[[i18n('beginRmaWarningText')]]</div>
    <div id="verificationMessage" class="icon-message">
      <paper-spinner-lite id="busyIcon" class="small-spinner"
          hidden$="[[!verificationInProgress_]]" active>
      </paper-spinner-lite>
      <iron-icon id="verificationIcon"
        icon$="[[getVerificationIcon_(isCompliant_)]]"
        hidden$="[[verificationInProgress_]]" class="small-icon">
      </iron-icon>
      <div aria-live="polite">
        <span hidden$="[[!verificationInProgress_]]" class="instructions">
          [[i18n('validatingComponentsText')]]
        </span>
        <span hidden$="[[verificationInProgress_]]" class="instructions">
          <span hidden$="[[!isCompliant_]]">
            [[i18n('validatedComponentsSuccessText')]]
          </span>
          <span inner-h-t-m-l="[[verificationFailedMessage_]]"
              hidden$="[[isCompliant_]]" class="instructions">
          </span>
        </span>
      </div>
    </div>
    <div id="navigationButtonWrapper">
      <cr-button id="getStartedButton" class="action-button"
          on-click="onGetStartedButtonClicked_"
          disabled="[[isGetStartedButtonDisabled_(verificationInProgress_,
          allButtonsDisabled)]]">
        [[i18n('getStartedButtonLabel')]]
        <paper-spinner-lite class="button-spinner"
            hidden$="[[!getStartedButtonClicked]]" active>
        </paper-spinner-lite>
      </cr-button>
      <cr-button id="landingExit" class="pill"
          on-click="onLandingExitButtonClicked_"
          disabled="[[allButtonsDisabled]]">
        <span id="exitButtonLabel">
          [[i18n('exitButtonLabel')]]
        </span>
        <paper-spinner-lite class="button-spinner"
            hidden$="[[!confirmExitButtonClicked]]" active>
        </paper-spinner-lite>
      </cr-button>
    </div>
  </div>
  <div slot="right-pane">
    <div class="illustration-wrapper" aria-hidden="true">
      <img class="illustration" src="illustrations/repair_start.svg"
          alt="[[i18n('repairStartAltText')]]">
    </div>
  </div>
</base-page>

<cr-dialog id="unqualifiedComponentsDialog" on-cancel="closeDialog_"
    ignore-popstate>
  <div slot="title">[[i18n('unqualifiedComponentsTitle')]]</div>
  <div slot="body" id="dialogBody">[[componentsList_]]</div>
  <div class="dialog-footer" slot="button-container">
    <cr-button class="action-button" on-click="closeDialog_">
      [[i18n('okButtonLabel')]]
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
      allButtonsDisabled: Boolean,

      /**
       * List of unqualified components from rmad service, not i18n.
       * @protected
       */
      componentsList_: {
        type: String,
        value: '',
      },

      /** @protected */
      verificationInProgress_: {
        type: Boolean,
        value: true,
      },

      /**
       * isCompliant_ is not valid until verificationInProgress_ is false.
       * @protected
       */
      isCompliant_: {
        type: Boolean,
        value: false,
      },

      /**
       * After the Get Started button is clicked, true until the next state is
       * processed. It is set back to false by shimless_rma.js.
       */
      getStartedButtonClicked: {
        type: Boolean,
        value: false,
      },

      /**
       * After the exit button is clicked, true until the next state is
       * processed. It is set back to false by shimless_rma.js.
       */
      confirmExitButtonClicked: {
        type: Boolean,
        value: false,
      },

      /** @protected */
      verificationFailedMessage_: {
        type: String,
        value: '',
      },
    };
  }

  constructor() {
    super();
    /** @private {ShimlessRmaServiceInterface} */
    this.shimlessRmaService_ = getShimlessRmaService();
    /** @protected {?HardwareVerificationStatusObserverReceiver} */
    this.hwVerificationObserverReceiver_ =
        new HardwareVerificationStatusObserverReceiver(
            /**
             * @type {!HardwareVerificationStatusObserverInterface}
             */
            (this));

    this.shimlessRmaService_.observeHardwareVerificationStatus(
        this.hwVerificationObserverReceiver_.$.bindNewPipeAndPassRemote());
  }

  /** @override */
  ready() {
    super.ready();

    focusPageTitle(this);
  }

  /** @return {!Promise<{stateResult: !StateResult}>} */
  onNextButtonClick() {
    if (!this.verificationInProgress_) {
      return this.shimlessRmaService_.beginFinalization();
    }

    return Promise.reject(new Error('Hardware verification is not complete.'));
  }

  /** @protected */
  onGetStartedButtonClicked_(e) {
    e.preventDefault();

    this.getStartedButtonClicked = true;

    executeThenTransitionState(this, () => {
      if (!this.verificationInProgress_) {
        return this.shimlessRmaService_.beginFinalization();
      }

      return Promise.reject(
          new Error('Hardware verification is not complete.'));
    });
  }

  /**
   * @protected
   */
  onLandingExitButtonClicked_(e) {
    e.preventDefault();

    this.dispatchEvent(new CustomEvent(
        'click-exit-button',
        {
          bubbles: true,
          composed: true,
        },
        ));
  }

  /**
   * @return {string}
   * @protected
   */
  getVerificationIcon_() {
    return this.isCompliant_ ? 'shimless-icon:check' : 'shimless-icon:warning';
  }

  /**
   * Implements
   * HardwareVerificationStatusObserver.onHardwareVerificationResult()
   * @param {boolean} isCompliant
   * @param {string} errorMessage
   */
  onHardwareVerificationResult(isCompliant, errorMessage) {
    this.isCompliant_ = isCompliant;
    this.verificationInProgress_ = false;

    if (!this.isCompliant_) {
      this.componentsList_ = errorMessage;
      this.setVerificationFailedMessage_();
    }
  }

  /** @private */
  setVerificationFailedMessage_() {
    this.verificationFailedMessage_ =
        this.i18nAdvanced('validatedComponentsFailText', {attrs: ['id']});
    const linkElement =
        this.shadowRoot.querySelector('#unqualifiedComponentsLink');
    linkElement.setAttribute('href', '#');
    linkElement.addEventListener(
        'click',
        () => this.shadowRoot.querySelector('#unqualifiedComponentsDialog')
                  .showModal());
  }

  /** @private */
  closeDialog_() {
    this.shadowRoot.querySelector('#unqualifiedComponentsDialog').close();
  }

  /** @protected */
  isGetStartedButtonDisabled_() {
    return this.verificationInProgress_ || this.allButtonsDisabled;
  }
}

customElements.define(OnboardingLandingPage.is, OnboardingLandingPage);
