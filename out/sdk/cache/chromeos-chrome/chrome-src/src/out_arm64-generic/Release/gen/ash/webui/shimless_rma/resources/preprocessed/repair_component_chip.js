// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import './shimless_rma_fonts_css.js';
import './shimless_rma_shared_css.js';
import './icons.js';
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';

import {I18nBehavior, I18nBehaviorInterface} from 'chrome://resources/ash/common/i18n_behavior.js';
import {html, mixinBehaviors, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {modifyTabbableElement} from './shimless_rma_util.js';

/**
 * @fileoverview
 * 'repair-component-chip' represents a single component chip that can be marked
 * as replaced.
 */

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {I18nBehaviorInterface}
 */
const RepairComponentChipBase = mixinBehaviors([I18nBehavior], PolymerElement);

/** @polymer */
export class RepairComponentChip extends RepairComponentChipBase {
  static get is() {
    return 'repair-component-chip';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style include="cr-shared-style shimless-rma-shared shimless-fonts">
  :host {
    padding: 2px;
  }

  :host([checked]) #componentButton {
    background-color: var(--google-blue-50);
  }

  :host([disabled]) #componentButton {
    opacity: 0.38;
  }

  :host([disabled]) #componentName {
    color: var(--cros-text-color-disabled);
  }

  :host([disabled]) #componentIdentifier {
    color: var(--cros-text-color-disabled);
  }

  :focus {
    outline: rgba(var(--google-blue-600-rgb), .4) solid 2px;
  }

  #componentButton {
    --vertical-padding: 24px;
    border: none;
    border-radius: 8px;
    box-shadow: var(--cros-elevation-2-shadow);
    height: calc((2 * var(--vertical-padding)) +
        var(--shimless-component-line-height) +
        var(--shimless-component-description-line-height));
    padding: 0;
    width: 100%;
  }

  #labelDiv {
    flex-basis: 155px;
    inset-inline-start: 0;
    padding-inline-start: 24px;
    position: absolute;
  }

  :host([checked]) #componentName,
  :host([checked]) #componentIdentifier {
    color: var(--google-blue-700);
  }

  #componentName {
    color: var(--shimless-component-text-color);
    font-family: var(--shimless-component-font-family);
    font-size: var(--shimless-component-font-size);
    font-weight: var(--shimless-medium-font-weight);
    line-height: var(--shimless-component-line-height);
  }

  #componentIdentifier {
    color: var(--shimless-component-description-text-color);
    font-family: var(--shimless-component-description-font-family);
    font-size: var(--shimless-component-description-font-size);
    font-weight: var(--shimless-regular-font-weight);
    line-height: var(--shimless-component-description-line-height);
  }

  iron-icon {
    margin-top: 6px;
  }

  .chip-icon {
    height: 20px;
    inset-inline-end: 16px;
    position: absolute;
    width: 20px;
  }

  :host([checked]) #checkIcon {
    color: var(--google-blue-700);
  }
</style>

<div id="componentButtonWrapper">
  <cr-button id="componentButton" disabled="[[disabled]]"
      on-click="onComponentButtonClicked_"
      aria-labelledby="componentName componentIdentifier"
      aria-pressed$="[[isAriaPressed_(checked)]]">
    <div id="labelDiv" aria-hidden="true">
      <span id="componentName">[[componentName]]</span>
      <div id="componentIdentifier">[[componentIdentifier]]</div>
    </div>
    <iron-icon id="checkIcon" class="chip-icon"
        icon="shimless-icon24:check-circle" hidden="[[!checked]]">
    </iron-icon>
    <iron-icon id="infoIcon" class="chip-icon" icon="shimless-icon:info"
        hidden="[[!disabled]]">
    </iron-icon>
  </cr-button>
</div>
<paper-tooltip for="componentButtonWrapper" hidden="[[!disabled]]"
    aria-hidden="true">
  [[i18n('undetectedComponentText')]]
</paper-tooltip>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /** @type {boolean} */
      disabled: {
        type: Boolean,
        value: false,
      },

      /** @type {boolean} */
      checked: {
        notify: true,
        reflectToAttribute: true,
        type: Boolean,
        value: false,
      },

      /** @type {string} */
      componentName: {type: String, value: ''},

      /** @type {string} */
      componentIdentifier: {type: String, value: ''},

      /** @type {number} */
      uniqueId: {
        reflectToAttribute: true,
        type: Number,
        value: '',
      },

      /** @type {boolean} */
      isFirstClickableComponent: {
        type: Boolean,
        value: false,
        observer:
            RepairComponentChip.prototype.onIsFirstClickableComponentChanged_,
      },

    };
  }

  /** @protected */
  onComponentButtonClicked_() {
    this.checked = !this.checked;

    // Notify the page that the component chip was clicked, so that the page can
    // put the focus on it.
    this.dispatchEvent(new CustomEvent('click-repair-component-button', {
      bubbles: true,
      composed: true,
      detail: this.uniqueId,
    }));
  }

  /** @private */
  onIsFirstClickableComponentChanged_() {
    // Tab should go to the first non-disabled component in the list,
    // not individual component.
    modifyTabbableElement(
        /** @type {!HTMLElement} */ (
            this.shadowRoot.querySelector('#componentButton')),
        this.isFirstClickableComponent);
  }

  /**
   * @return {string}
   * @protected
   */
  isAriaPressed_() {
    return this.checked.toString();
  }
}

customElements.define(RepairComponentChip.is, RepairComponentChip);
