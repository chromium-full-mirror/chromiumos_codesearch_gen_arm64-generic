// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * `home-url-input` is a single-line text field intending to be used with
 * prefs.homepage
 */
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/policy/cr_policy_pref_indicator.js';
import { CrPolicyPrefMixin } from '/shared/settings/controls/cr_policy_pref_mixin.js';
import { PrefControlMixin } from '/shared/settings/controls/pref_control_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AppearanceBrowserProxyImpl } from './appearance_browser_proxy.js';
import { getTemplate } from './home_url_input.html.js';
const HomeUrlInputElementBase = CrPolicyPrefMixin(PrefControlMixin(PolymerElement));
export class HomeUrlInputElement extends HomeUrlInputElementBase {
    static get is() {
        return 'home-url-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The preference object to control.
             */
            pref: { observer: 'prefChanged_' },
            /* Set to true to disable editing the input. */
            disabled: { type: Boolean, value: false, reflectToAttribute: true },
            canTab: Boolean,
            invalid: { type: Boolean, value: false },
            /* The current value of the input, reflected to/from |pref|. */
            value: {
                type: String,
                value: '',
                notify: true,
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = AppearanceBrowserProxyImpl.getInstance();
        this.noExtensionIndicator = true; // Prevent double indicator.
    }
    /**
     * Focuses the 'input' element.
     */
    focus() {
        this.$.input.focus();
    }
    /**
     * Polymer changed observer for |pref|.
     */
    prefChanged_() {
        if (!this.pref) {
            return;
        }
        this.setInputValueFromPref_();
    }
    setInputValueFromPref_() {
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        this.value = this.pref.value;
    }
    /**
     * Gets a tab index for this control if it can be tabbed to.
     */
    getTabindex_(canTab) {
        return canTab ? 0 : -1;
    }
    /**
     * Change event handler for cr-input. Updates the pref value.
     * settings-input uses the change event because it is fired by the Enter key.
     */
    onChange_() {
        if (this.invalid) {
            this.resetValue_();
            return;
        }
        assert(this.pref.type === chrome.settingsPrivate.PrefType.URL);
        this.set('pref.value', this.value);
    }
    resetValue_() {
        this.invalid = false;
        this.setInputValueFromPref_();
        this.$.input.blur();
    }
    /**
     * Keydown handler to specify enter-key and escape-key interactions.
     */
    onKeydown_(event) {
        // If pressed enter when input is invalid, do not trigger on-change.
        if (event.key === 'Enter' && this.invalid) {
            event.preventDefault();
        }
        else if (event.key === 'Escape') {
            this.resetValue_();
        }
        this.stopKeyEventPropagation_(event);
    }
    /**
     * This function prevents unwanted change of selection of the containing
     * cr-radio-group, when the user traverses the input with arrow keys.
     */
    stopKeyEventPropagation_(e) {
        e.stopPropagation();
    }
    /** @return Whether the element should be disabled. */
    isDisabled_(disabled) {
        return disabled || this.isPrefEnforced();
    }
    validate_() {
        if (this.value === '') {
            this.invalid = false;
            return;
        }
        this.browserProxy_.validateStartupPage(this.value).then(isValid => {
            this.invalid = !isValid;
        });
    }
}
customElements.define(HomeUrlInputElement.is, HomeUrlInputElement);
