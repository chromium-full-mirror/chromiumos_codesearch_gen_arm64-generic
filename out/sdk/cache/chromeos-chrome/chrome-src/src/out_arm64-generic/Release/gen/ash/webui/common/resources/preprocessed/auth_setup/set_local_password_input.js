// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import './auth_setup_icons.html.js';
import { CrInputElement } from 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assertInstanceof, assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PasswordComplexity, PasswordFactorEditor } from 'chrome://resources/mojo/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom-webui.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './set_local_password_input.html.js';
const LocalPasswordInputElementBase = I18nMixin(PolymerElement);
var FirstInputValidity;
(function (FirstInputValidity) {
    FirstInputValidity[FirstInputValidity["OK"] = 0] = "OK";
    FirstInputValidity[FirstInputValidity["TOO_SHORT"] = 1] = "TOO_SHORT";
})(FirstInputValidity || (FirstInputValidity = {}));
var ConfirmInputValidity;
(function (ConfirmInputValidity) {
    ConfirmInputValidity[ConfirmInputValidity["OK"] = 0] = "OK";
    ConfirmInputValidity[ConfirmInputValidity["NO_MATCH"] = 1] = "NO_MATCH";
})(ConfirmInputValidity || (ConfirmInputValidity = {}));
/**
 * @fileoverview 'set-local-password-input' is a component that consists of two
 * input fields: The first input field to ask for a new password, and a second
 * input field for confirmation.
 *
 * The element does not affect a password change itself. Instead, it makes the
 * password value that the user has entered available to parent elements via
 * the read-only |value| property. |value| is non-null only after validation
 * was successful and the user hasn't changed the first or confirm input
 * since the last validation.
 *
 * Validation triggers automatically when one of the input fields loses focus
 * or the user presses <Enter> in one of those fields, and parent elements can
 * explicitly request validation by calling |validate|. The element calls into
 * the PasswordFactorEditor mojo service for validation, so it can only be used
 * in WebUIs in which this mojo service is available.
 *
 * When the user presses <Enter> in the confirmation input field and validation
 * passes, then the 'set-local-password-input' element dispatches a "submit"
 * event.
 *
 * TODO(b/309430756): Reuse ShowPasswordMixin here.
 */
export class SetLocalPasswordInputElement extends LocalPasswordInputElementBase {
    static get is() {
        return 'set-local-password-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The password value that the user has entered. Non-null only if the
             * |validate| method has been called and validation has passed.
             */
            value: {
                type: String,
                computed: 'computeValue(firstInputValidity_, confirmInputValidity_)',
            },
            /**
             * This is here to make this element usable in OOBE, where the locale
             * can change dynamically. This attribute replicates the functionality of
             * OobeI18nBehavior.
             */
            locale: {
                type: String,
                value: '',
            },
            /**
             * Aria label to apply to the first input.
             */
            firstInputAriaLabel: {
                type: String,
                value: null,
            },
            firstInputValidity_: {
                type: String,
                value: null,
            },
            confirmInputValidity_: {
                type: String,
                value: null,
            },
            isFirstPasswordVisible_: {
                type: Boolean,
                value: false,
            },
            isConfirmPasswordVisible_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        // See comment at the |locale| attribute for why this is here.
        this.classList.add('i18n-dynamic');
    }
    ready() {
        super.ready();
        // Dynamic checks to make sure that our static type declaration about named
        // elements in the shadow DOM are actually true.
        assertInstanceof(this.$.firstInput, CrInputElement);
        assertInstanceof(this.$.confirmInput, CrInputElement);
    }
    focus() {
        this.$.firstInput.focus();
    }
    // See comment at the |locale| attribute for why this is here.
    i18nUpdateLocale() {
        this.locale = loadTimeData.getString('app_locale');
    }
    // Computes the value of firstInputValidity_ based on the value of the first
    // input field. Note that, since this function is async, it can happen that a
    // user changes the value of the input field in-between the moment when this
    // method is called and when it returns. In that case, firstInputValidity_
    // will still be null.
    async validateFirstInput() {
        if (this.firstInputValidity_ !== null) {
            return;
        }
        const value = this.$.firstInput.value;
        const { complexity } = await PasswordFactorEditor.getRemote().checkLocalPasswordComplexity(value);
        // Abort validation if the user has changed the input value while we were
        // waiting for the async function call above to return.
        if (value !== this.$.firstInput.value) {
            return;
        }
        switch (complexity) {
            case PasswordComplexity.kOk:
                this.firstInputValidity_ = FirstInputValidity.OK;
                break;
            case PasswordComplexity.kTooShort:
                this.firstInputValidity_ = FirstInputValidity.TOO_SHORT;
                break;
            default:
                assertNotReached();
        }
    }
    validateConfirmInput() {
        // Confirm input validation is only applicable if the first input field is
        // known to be valid.
        if (this.firstInputValidity_ !== FirstInputValidity.OK) {
            this.confirmInputValidity_ = null;
            return;
        }
        if (this.$.firstInput.value !== this.$.confirmInput.value) {
            this.confirmInputValidity_ = ConfirmInputValidity.NO_MATCH;
            return;
        }
        this.confirmInputValidity_ = ConfirmInputValidity.OK;
    }
    async validate() {
        await this.validateFirstInput();
        if (this.showFirstInputError()) {
            this.$.firstInput.focus();
            return;
        }
        this.validateConfirmInput();
        if (this.showConfirmInputError()) {
            this.$.confirmInput.focus();
            return;
        }
    }
    reset() {
        this.$.firstInput.value = '';
        this.$.confirmInput.value = '';
        this.firstInputValidity_ = null;
        this.confirmInputValidity_ = null;
    }
    computeValue() {
        if (this.firstInputValidity_ !== FirstInputValidity.OK) {
            return null;
        }
        if (this.confirmInputValidity_ !== ConfirmInputValidity.OK) {
            return null;
        }
        return this.$.firstInput.value;
    }
    onInput(ev) {
        if (ev.target === this.$.firstInput) {
            this.firstInputValidity_ = null;
            this.confirmInputValidity_ = null;
            return;
        }
        if (ev.target === this.$.confirmInput) {
            this.confirmInputValidity_ = null;
            return;
        }
        assertNotReached();
    }
    async onKeyup(ev) {
        if (ev.key !== 'Enter') {
            return;
        }
        if (ev.target === this.$.firstInput) {
            ev.stopPropagation();
            await this.validateFirstInput();
            if (!this.showFirstInputError()) {
                this.$.confirmInput.focus();
            }
            return;
        }
        if (ev.target === this.$.confirmInput) {
            ev.stopPropagation();
            await this.validateFirstInput();
            this.validateConfirmInput();
            if (typeof this.value === 'string') {
                this.dispatchEvent(new CustomEvent('submit', { bubbles: true }));
            }
            return;
        }
        assertNotReached();
    }
    async onBlur(ev) {
        if (ev.target === this.$.firstInput) {
            ev.stopPropagation();
            await this.validateFirstInput();
            return;
        }
        if (ev.target === this.$.confirmInput) {
            ev.stopPropagation();
            await this.validateFirstInput();
            this.validateConfirmInput();
            return;
        }
        assertNotReached();
    }
    showFirstInputError() {
        switch (this.firstInputValidity_) {
            case FirstInputValidity.TOO_SHORT:
                return true;
            case null:
            case FirstInputValidity.OK:
                return false;
        }
    }
    showConfirmInputError() {
        switch (this.confirmInputValidity_) {
            case ConfirmInputValidity.NO_MATCH:
                return true;
            case null:
            case ConfirmInputValidity.OK:
                return false;
        }
    }
    getPasswordInputType(isVisible) {
        return isVisible ? 'text' : 'password';
    }
    getShowHideButtonLabel(isVisible) {
        return isVisible ? loadTimeData.getString('hidePassword') :
            loadTimeData.getString('showPassword');
    }
    getShowHideButtonIcon(isVisible) {
        return isVisible ? 'auth-setup:visibility-off' : 'auth-setup:visibility';
    }
    /**
     * Handlers for showing/hiding the passwords. These methods should be
     * attached to on-click event of show/hide password button.
     */
    onFirstShowHidePasswordButtonClick() {
        this.isFirstPasswordVisible_ = !this.isFirstPasswordVisible_;
    }
    onConfirmShowHidePasswordButtonClick() {
        this.isConfirmPasswordVisible_ = !this.isConfirmPasswordVisible_;
    }
}
customElements.define(SetLocalPasswordInputElement.is, SetLocalPasswordInputElement);
