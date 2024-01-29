// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for the security token PIN dialog shown during
 * sign-in.
 */

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/ash/common/quick_unlock/pin_keyboard.js';
import '//resources/cr_elements/icons.html.js';
import './oobe_icons.html.js';
import './buttons/oobe_back_button.js';
import './buttons/oobe_next_button.js';
import './common_styles/oobe_common_styles.css.js';
import './common_styles/oobe_dialog_host_styles.css.js';
import './dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeDialogHostBehavior} from './behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from './behaviors/oobe_i18n_behavior.js';
import {OobeTypes} from './oobe_types.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 */
const SecurityTokenPinBase =
    mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior], PolymerElement);

/**
 * @polymer
 */
export class SecurityTokenPin extends SecurityTokenPinBase {
  static get is() {
    return 'security-token-pin';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2019 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  #pinKeyboardContainer {
    margin-top: 30px;
    position: relative;
  }

  #pinKeyboard {
    --pin-keyboard-pin-input-width: 192px;
    --pin-keyboard-input-letter-spacing: 13px;
    --pin-keyboard-number-color: var(--cros-text-color-primary);
    --cr-icon-button-margin-start: 5px;
  }

  :host-context(.jelly-enabled) #pinKeyboard {
    --pin-keyboard-number-color: var(--oobe-text-color);
  }

  #errorContainer {
    color: var(--cros-icon-color-red);
    font-size: 12px;
    padding: 4px 0 0;
    text-align: center;
    width: 100%;
  }

  :host-context(.jelly-enabled) #errorContainer {
    color: var(--cros-sys-error);
    font-family: var(--oobe-security-token-pin-font-family);
    font-size: var(--oobe-security-token-pin-font-size);
    font-weight: var(--oobe-security-token-pin-font-weight);
    line-height: var(--oobe-security-token-pin-line-height);
  }

  #errorIcon {
    --iron-icon-width: 20px;
    --iron-icon-height: 20px;
    margin-inline-end: 3px;
  }

  /* Allows to hide the element while still consuming the space that it needs. */
  [invisible] {
    visibility: hidden;
  }

  :host-context(.jelly-enabled) iron-icon[icon='cr:error-outline'] {
    color: var(--cros-sys-error);
  }
</style>
<oobe-adaptive-dialog class="gaia-dialog" role="dialog" id="dialog"
    aria-describedby="description"
    aria-label$="[[i18nDynamic(locale, 'securityTokenPinDialogTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:lock"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'securityTokenPinDialogTitle')]]
  </h1>
  <div slot="subtitle" id="subtitle">
    <span id="description" hidden="[[processingCompletion_]]">
      [[i18nDynamic(locale, 'securityTokenPinDialogSubtitle')]]
    </span>
  </div>
  <paper-progress slot="progress" id="progress"
      hidden="[[!processingCompletion_]]"
      indeterminate="[[processingCompletion_]]">
  </paper-progress>
  <div slot="content" class="content-centered">
    <div id="pinKeyboardContainer" hidden="[[processingCompletion_]]">
      <pin-keyboard id="pinKeyboard" allow-non-digit
          has-error="[[isErrorLabelVisible_(parameters, userEdited_)]]"
          aria-label="[[getLabel_(parameters, userEdited_)]]"
          on-pin-change="onPinChange_" on-submit="onSubmit_"
          disabled="[[!canEdit_]]">
        <div id="errorContainer" role="alert" problem
            invisible$="[[!isLabelVisible_(parameters, userEdited_)]]">
          <iron-icon id="errorIcon" icon="cr:error-outline"></iron-icon>
          <span id="error">[[getLabel_(parameters, userEdited_)]]</span>
        </div>
      </pin-keyboard>
    </div>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="back" on-click="onBackClicked_">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="submit" on-click="onSubmit_"
        disabled="[[!canSubmit_]]"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Contains the OobeTypes.SecurityTokenPinDialogParameters object. It can
       * be null when our element isn't used.
       *
       * Changing this field resets the dialog state. (Please note that, due to
       * the Polymer's limitation, only assigning a new object is observed;
       * changing just a subproperty won't work.)
       */
      parameters: {
        type: Object,
        observer: 'onParametersChanged_',
      },

      /**
       * Whether the current state is the wait for the processing completion
       * (i.e., the backend is verifying the entered PIN).
       * @private
       */
      processingCompletion_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the input is currently non-empty.
       * @private
       */
      hasValue_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the user has made changes in the input field since the dialog
       * was initialized or reset.
       * @private
       */
      userEdited_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the user can change the value in the input field.
       * @private
       */
      canEdit_: {
        type: Boolean,
        computed:
            'computeCanEdit_(parameters.enableUserInput, processingCompletion_)',
      },

      /**
       * Whether the user can submit a login request.
       * @private
       */
      canSubmit_: {
        type: Boolean,
        computed: 'computeCanSubmit_(parameters.enableUserInput, ' +
            'hasValue_, processingCompletion_)',
      },
    };
  }

  focus() {
    // Note: setting the focus synchronously, to avoid flakiness in tests due to
    // racing between the asynchronous caret positioning and the PIN characters
    // input.
    this.$.pinKeyboard.focusInputSynchronously();
  }

  /**
   * Computes the value of the canEdit_ property.
   * @param {boolean} enableUserInput
   * @param {boolean} processingCompletion
   * @return {boolean}
   * @private
   */
  computeCanEdit_(enableUserInput, processingCompletion) {
    return enableUserInput && !processingCompletion;
  }

  /**
   * Computes the value of the canSubmit_ property.
   * @param {boolean} enableUserInput
   * @param {boolean} hasValue
   * @param {boolean} processingCompletion
   * @return {boolean}
   * @private
   */
  computeCanSubmit_(enableUserInput, hasValue, processingCompletion) {
    return enableUserInput && hasValue && !processingCompletion;
  }

  /**
   * Invoked when the "Back" button is clicked.
   * @private
   */
  onBackClicked_() {
    this.dispatchEvent(
        new CustomEvent('cancel', {bubbles: true, composed: true}));
  }

  /**
   * Invoked when the "Next" button is clicked or Enter is pressed.
   * @private
   */
  onSubmit_() {
    if (!this.canSubmit_) {
      // Disallow submitting when it's not allowed or while proceeding the
      // previous submission.
      return;
    }
    this.processingCompletion_ = true;
    this.dispatchEvent(new CustomEvent(
        'completed',
        {bubbles: true, composed: true, detail: this.$.pinKeyboard.value}));
  }

  /**
   * Observer that is called when the |parameters| property gets changed.
   * @private
   */
  onParametersChanged_() {
    // Reset the dialog to the initial state.
    this.$.pinKeyboard.value = '';
    this.processingCompletion_ = false;
    this.hasValue_ = false;
    this.userEdited_ = false;

    this.focus();
  }

  /**
   * Observer that is called when the user changes the PIN input field.
   * @param {!CustomEvent<{pin: string}>} e
   * @private
   */
  onPinChange_(e) {
    this.hasValue_ = e.detail.pin.length > 0;
    this.userEdited_ = true;
  }

  /**
   * Returns whether the error label should be shown.
   * @param {OobeTypes.SecurityTokenPinDialogParameters} parameters
   * @param {boolean} userEdited
   * @return {boolean}
   * @private
   */
  isErrorLabelVisible_(parameters, userEdited) {
    return parameters && parameters.hasError && !userEdited;
  }

  /**
   * Returns whether the PIN attempts left count should be shown.
   * @param {OobeTypes.SecurityTokenPinDialogParameters} parameters
   * @return {boolean}
   * @private
   */
  isAttemptsLeftVisible_(parameters) {
    return parameters && parameters.formattedAttemptsLeft !== '';
  }

  /**
   * Returns whether there is a visible label for the PIN input field
   * @param {OobeTypes.SecurityTokenPinDialogParameters} parameters
   * @param {boolean} userEdited
   * @return {boolean}
   * @private
   */
  isLabelVisible_(parameters, userEdited) {
    return this.isErrorLabelVisible_(parameters, userEdited) ||
        this.isAttemptsLeftVisible_(parameters);
  }

  /**
   * Returns the label to be used for the PIN input field.
   * @param {OobeTypes.SecurityTokenPinDialogParameters} parameters
   * @param {boolean} userEdited
   * @return {string}
   * @private
   */
  getLabel_(parameters, userEdited) {
    if (!this.isLabelVisible_(parameters, userEdited)) {
      // Neither error nor the number of left attempts are to be displayed.
      return '';
    }
    if (!this.isErrorLabelVisible_(parameters, userEdited) &&
        this.isAttemptsLeftVisible_(parameters)) {
      // There's no error, but the number of left attempts has to be displayed.
      return parameters.formattedAttemptsLeft;
    }
    return parameters.formattedError;
  }
}

customElements.define(SecurityTokenPin.is, SecurityTokenPin);
