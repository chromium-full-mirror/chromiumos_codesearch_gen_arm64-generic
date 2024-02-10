// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';

import {html, PolymerElement} from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';

// A <select> element that shows a text input when the "custom" field is
// selected.
export class SelectCustom extends PolymerElement {
  ready() {
    super.ready();
    // Hide custom input.
    this.shadowRoot.querySelector('.hidden-input').hidden = true;

    // Set default value of select to the first option.
    this.selectValue = this.selectElements[0].value;
  }

  static get is() {
    return 'select-custom';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<style>
  .form-item,
  .form-item-custom {
    align-items: center;
    border-bottom: none;
    display: flex;
    font-size: 1rem;
    padding: 0 0 8px 0;
  }

  .form-item>label {
    flex: 1;
    font-size: 1;
  }

  .form-item>select {
    background: inherit;
    border: 2px solid #666;
    border-radius: .25rem;
    flex: 2;
    padding: .1rem;
  }

  .form-item-custom>label {
    flex: 3;
    font-size: 1;
  }

  .form-item-custom>select {
    background: inherit;
    border: 2px solid #666;
    border-radius: .25rem;
    flex: 2;
    min-width: 0;
    padding: .1rem;
  }

  .form-item-custom>input {
    background: inherit;
    border: 2px solid #666;
    border-radius: .25rem;
    flex: 4;
    padding: .1rem;
  }
</style>
<div class$="[[formItemStyle]]">
  <label for="[[selectid]]">[[displayLabel]]</label>
  <select id="[[selectid]]" on-change="onSelectChange">
    <template is="dom-repeat" items="[[selectElements]]">
      <option value="[[item.value]]"> [[item.displayText]] </option>
    </template>
    <template is="dom-if" if="[[!noCustomInput]]">
      <option value="custom">Custom</option>
    </template>
  </select>
  <input class="hidden-input" type="text" on-change="onInputChange">
</div><!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      selectElements: {type: Array},
      selectValue:
          {type: String, notify: true, observer: 'onSelectValueChange'},
      formItemStyle: {type: String, value: 'form-item'},
      displayLabel: {type: String},
      selectid: {type: String},
      noCustomInput: {type: Boolean, value: false},
      customSelected:
          {type: Boolean, value: false, notify: true, reflectToAttribute: true},
    };
  }

  // Shows a hidden input element when the "custom" option is chosen from the
  // select. The function is triggered by the on-change event for the
  // <select> element.
  onSelectChange(event) {
    const customInput = this.shadowRoot.querySelector('.hidden-input');
    this.customSelected = event.target.value === 'custom';
    customInput.hidden = !this.customSelected;
    this.formItemStyle = this.customSelected ? 'form-item-custom' : 'form-item';
    if (this.customSelected) {
      // Stores the text in the custom input in this.selectValue.
      this.onInputChange();
    } else {
      const select = this.shadowRoot.querySelector('#' + this.selectid);
      this.selectValue = this.selectElements[select.selectedIndex].value;
    }
  }

  // When the custom input field changes (on-change event), store the value in
  // this.selectValue.
  onInputChange() {
    if (this.customSelected) {
      const customInput = this.shadowRoot.querySelector('.hidden-input');
      this.selectValue = customInput.value;
    }
  }

  // When this.selectValue changes, update the value of the <select> element.
  // This is to ensure the visually selected element matches this.selectValue
  // when it is modified in parent polymer components.
  onSelectValueChange() {
    if (!this.customSelected) {
      this.shadowRoot.querySelector('#' + this.selectid).value =
          this.selectValue;
    }
  }
}
customElements.define(SelectCustom.is, SelectCustom);