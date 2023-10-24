// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview
 * Material design square button for text-labelled buttons.
 * By default, text is blue, background is white.
 * |inverse| makes text white on a blue background.
 * Note, that slotted element must have separate DOM node (i.e. a separate div).
 *
 * Example:
 *  <oobe-icon-button inverse text-key="oobeOKButtonText">
 *  </oobe-icon-button>
 *
 * Button text can be also changed by specifying element for "text" slot, but
 * will have to define label-for-aria in such case.
 *
 * Attributes:
 *  'disabled' - button is disabled when the attribute is set.
 *  (See crbug.com/900640)
 *  'inverse' - makes text white and background blue.
 *  'text-key' - ID of localized string to be used as button text.
 *  'border' - adds border to the button.
 *  'label-for-aria' - accessibility label, override usual behavior
 *                     (string specified by text-key is used as aria-label).
 *                     Elements that use slot="text" must provide label-for-aria
 *                     value.
 *
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../common_styles/oobe_common_styles.css.js';
import '../oobe_vars/oobe_custom_vars.css.js';

import {html} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeBaseButton} from './oobe_base_button.js';


/** @polymer */
export class OobeTextButton extends OobeBaseButton {
  static get is() {
    return 'oobe-text-button';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2021 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="cr-shared-style oobe-common-styles cros-color-overrides">
  cr-button {
    /*
      TODO(https://crbug.com/1320715) Revise the color
      --border-color: var(--oobe-button-border-color);
    */
    --cr-button-height: var(--oobe-button-height);
    border-radius: var(--oobe-button-radius);
    margin: 0 4px;
  }
  :host ::slotted(*),
  .fallback {
    font-family: var(--oobe-button-font-family);
    font-size: var(--oobe-button-font-size);
    font-weight: var(--oobe-button-font-weight);
  }
  :host([disabled]) {
    pointer-events: none;
  }
</style>
<cr-button id="button" on-click="onClick_" disabled="[[disabled]]"
    inverse$="[[inverse]]" aria-label$="[[labelForAriaText_]]"
    border$="[[border]]">
  <div id="container"
      class="flex layout horizontal center center-justified self-stretch">
    <slot name="text">
      <template is="dom-if" if="[[textKey]]">
        <div class="fallback">[[i18nDynamic(locale, textKey)]]</div>
      </template>
    </slot>
  </div>
</cr-button>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      inverse: {
        type: Boolean,
        observer: 'onInverseChanged_',
      },

      border: Boolean,
    };
  }

  onInverseChanged_() {
    this.$.button.classList.toggle('action-button', this.inverse);
  }
}

customElements.define(OobeTextButton.is, OobeTextButton);
