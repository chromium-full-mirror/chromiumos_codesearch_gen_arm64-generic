// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element wrapping gaia styled button for login/oobe.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import { html, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
/**
 * @constructor
 * @extends {PolymerElement}
 */
const GaiaButtonBase = mixinBehaviors([], PolymerElement);
/**
 * @typedef {{
 *   button: CrButtonElement,
 * }}
 */
GaiaButtonBase.$;
/** @polymer */
class GaiaButton extends GaiaButtonBase {
    static get is() {
        return 'gaia-button';
    }
    static get template() {
        return html `<!--_html_template_start_-->
<!--
Copyright 2015 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<!--
  Material design buttons that mimic GAIA's buttons.

  Example:
    <gaia-button link></gaia-button>

  Attributes:
    'link' - there are two kinds of button: regular blue button and a button
             that looks more like a link.
    'disabled' - button is disabled when the attribute is set.
-->
<style include="cros-color-overrides">
  :host {
    display: inline-block;
  }

  cr-button#button {
    --cr-button-height: var(--oobe-button-height);
    border-radius: var(--oobe-button-radius);
    font-family: var(--oobe-button-font-family);
    font-size: var(--oobe-button-font-size);
    font-weight: var(--oobe-button-font-weight);
    line-height: var(--oobe-button-line-height);
  }

  :host([link]) cr-button:focus {
    background-color: var(--cros-button-active-shadow-color-ambient-primary);
  }

  :host-context(.focus-outline-visible):host([link]) cr-button:focus {
    font-weight: 500;
  }

  :host([link]) cr-button[disabled] {
    color: var(--cros-color-disabled);
  }
</style>
<cr-button id="button" disabled="[[disabled]]" on-click="onClick_"
    noink$="[[link]]">
  <slot></slot>
</cr-button>
<!--_html_template_end_-->`;
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflectToAttribute: true,
                value: false,
            },
            link: {
                type: Boolean,
                reflectToAttribute: true,
                observer: 'onLinkChanged_',
                value: false,
            },
        };
    }
    focus() {
        this.$.button.focus();
    }
    /**
     * @private
     */
    onLinkChanged_() {
        this.$.button.classList.toggle('action-button', !this.link);
    }
    /**
     * @param {!Event} e
     * @private
     */
    onClick_(e) {
        if (this.disabled) {
            e.stopPropagation();
        }
    }
}
customElements.define(GaiaButton.is, GaiaButton);
