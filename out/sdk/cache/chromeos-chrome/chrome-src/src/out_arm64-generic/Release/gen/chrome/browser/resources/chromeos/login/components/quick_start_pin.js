// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying the PIN on the QuickStart screen
 */


import { assert } from '//resources/ash/common/assert.js';
import { html, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

class QuickStartPin extends PolymerElement {
  static get is() {
    return 'quick-start-pin';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style>
  :host {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;
  }

  div {
    width: 80px;
    height: 80px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 8px;
    gap: 8px;

    background: #F8F9FA;
    border-radius: 16px;

    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #202124;
  }
</style>

<div id="digit0">[[digit0_]]</div>
<div id="digit1">[[digit1_]]</div>
<div id="digit2">[[digit2_]]</div>
<div id="digit3">[[digit3_]]</div>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      // PIN provided externally.
      pin: {
        type: String,
        value: '0000',
      },
      // Digits extracted internally.
      digit0_: {
        type: String,
        computed: 'extractDigits(pin, 0)',
      },
      digit1_: {
        type: String,
        computed: 'extractDigits(pin, 1)',
      },
      digit2_: {
        type: String,
        computed: 'extractDigits(pin, 2)',
      },
      digit3_: {
        type: String,
        computed: 'extractDigits(pin, 3)',
      },
    };
  }

  extractDigits(pin, position) {
    assert(pin.length === 4, 'PIN must be 4 digits long!');
    assert(position >= 0 && position <= 3);
    return pin[position];
  }
}

customElements.define(QuickStartPin.is, QuickStartPin);
