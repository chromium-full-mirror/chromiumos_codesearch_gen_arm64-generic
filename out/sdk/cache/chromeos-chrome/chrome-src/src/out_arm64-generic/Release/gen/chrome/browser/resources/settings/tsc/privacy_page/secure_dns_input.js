// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview `secure-dns-input` is a single-line text field that is used
 * with the secure DNS setting to configure custom servers. It is based on
 * `home-url-input`.
 */
import 'chrome://resources/cr_elements/cr_textarea/cr_textarea.js';
// 
import 'chrome://resources/cr_elements/chromeos/cros_color_overrides.css.js';
import { PrivacyPageBrowserProxyImpl } from '/shared/settings/privacy_page/privacy_page_browser_proxy.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './secure_dns_input.html.js';
export class SecureDnsInputElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.browserProxy_ = PrivacyPageBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'secure-dns-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /*
             * The value of the input field.
             */
            value: String,
            /*
             * Whether |errorText| should be displayed beneath the input field.
             */
            showError_: { type: Boolean, computed: 'isInvalid_(errorText_)' },
            /**
             * The error text to display beneath the input field when |showError_| is
             * true.
             */
            errorText_: { type: String, value: '' },
        };
    }
    onKeyPress_(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            this.validate();
        }
    }
    /**
     * This function ensures that while the user is entering input, especially
     * after pressing Enter, the input is not prematurely marked as invalid.
     */
    onInput_() {
        this.errorText_ = '';
    }
    /**
     * When the custom input field loses focus, validate the current value and
     * trigger an event with the result. If the value is valid, also attempt a
     * test query. Show an error message if the tested value is still the most
     * recent value, is non-empty, and was either invalid or failed the test
     * query.
     */
    async validate() {
        this.errorText_ = '';
        const valueToValidate = this.value;
        const valid = await this.browserProxy_.isValidConfig(valueToValidate);
        const successfulProbe = valid && await this.browserProxy_.probeConfig(valueToValidate);
        // If there was an invalid template or no template can successfully
        // answer a probe query, show an error as long as the input field value
        // hasn't changed and is non-empty.
        if (valueToValidate === this.value && this.value !== '' &&
            !successfulProbe) {
            this.errorText_ = loadTimeData.getString(valid ? 'secureDnsCustomConnectionError' :
                'secureDnsCustomFormatError');
        }
        this.dispatchEvent(new CustomEvent('value-update', {
            bubbles: true,
            composed: true,
            detail: { isValid: valid, text: valueToValidate },
        }));
    }
    /**
     * Focus the custom dns input field.
     */
    focus() {
        this.$.input.focusInput();
    }
    /**
     * @return whether an error is being shown.
     */
    isInvalid_() {
        return this.errorText_.length > 0;
    }
}
customElements.define(SecureDnsInputElement.is, SecureDnsInputElement);
