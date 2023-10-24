// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import './print_preview_shared.css.js';
import './print_preview_vars.css.js';
import './settings_section.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { InputMixin } from './input_mixin.js';
import { getTemplate } from './number_settings_section.html.js';
const PrintPreviewNumberSettingsSectionElementBase = WebUiListenerMixin(InputMixin(PolymerElement));
export class PrintPreviewNumberSettingsSectionElement extends PrintPreviewNumberSettingsSectionElementBase {
    static get is() {
        return 'print-preview-number-settings-section';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            inputString_: {
                type: String,
                notify: true,
                observer: 'onInputStringChanged_',
            },
            inputValid: {
                type: Boolean,
                notify: true,
                reflectToAttribute: true,
                value: true,
            },
            currentValue: {
                type: String,
                notify: true,
                observer: 'onCurrentValueChanged_',
            },
            defaultValue: String,
            maxValue: Number,
            minValue: Number,
            inputLabel: String,
            inputAriaLabel: String,
            hintMessage: String,
            disabled: Boolean,
            errorMessage_: {
                type: String,
                computed: 'computeErrorMessage_(hintMessage, inputValid)',
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('input-change', e => this.onInputChangeEvent_(e));
    }
    /** @return The cr-input field element for InputBehavior. */
    getInput() {
        return this.$.userValue;
    }
    /**
     * @param e Contains the new input value.
     */
    onInputChangeEvent_(e) {
        this.inputString_ = e.detail;
    }
    /**
     * @return Whether the input should be disabled.
     */
    getDisabled_() {
        return this.disabled && this.inputValid;
    }
    onKeydown_(e) {
        if (['.', 'e', 'E', '-', '+'].includes(e.key)) {
            e.preventDefault();
            return;
        }
        if (e.key === 'Enter') {
            this.onBlur_();
        }
    }
    onBlur_() {
        if (this.inputString_ === '') {
            this.set('inputString_', this.defaultValue);
        }
        if (this.$.userValue.value === '') {
            this.$.userValue.value = this.defaultValue;
        }
    }
    onInputStringChanged_() {
        this.inputValid = this.computeValid_();
        this.currentValue = this.inputString_;
    }
    onCurrentValueChanged_() {
        this.inputString_ = this.currentValue;
        this.resetString();
    }
    /**
     * @return Whether input value represented by inputString_ is
     *     valid and non-empty, so that it can be used to update the setting.
     */
    computeValid_() {
        // Make sure value updates first, in case inputString_ was updated by JS.
        this.$.userValue.value = this.inputString_;
        return !this.$.userValue.invalid;
    }
    computeErrorMessage_() {
        return this.inputValid ? '' : this.hintMessage;
    }
}
customElements.define(PrintPreviewNumberSettingsSectionElement.is, PrintPreviewNumberSettingsSectionElement);
