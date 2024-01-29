// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { addSubmitListener } from '../../login_ui_tools.js';
import { getTemplate } from './enter_old_password.html.js';
/**
 * UI mode for the dialog.
 */
var EnterOldPasswordUiState;
(function (EnterOldPasswordUiState) {
    EnterOldPasswordUiState["PASSWORD"] = "password";
    EnterOldPasswordUiState["PROGRESS"] = "progress";
})(EnterOldPasswordUiState || (EnterOldPasswordUiState = {}));
const EnterOldPasswordBase = mixinBehaviors([
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class EnterOldPassword extends EnterOldPasswordBase {
    static get is() {
        return 'enter-old-password-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            password: {
                type: String,
                value: '',
            },
            passwordInvalid: {
                type: Boolean,
                value: false,
            },
            disabled: {
                type: Boolean,
                value: false,
            },
            passwordInput: Object,
        };
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return EnterOldPasswordUiState.PASSWORD;
    }
    get UI_STEPS() {
        return EnterOldPasswordUiState;
    }
    /** Overridden from LoginScreenBehavior. */
    get EXTERNAL_API() {
        return [
            'showWrongPasswordError',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('EnterOldPasswordScreen');
        const oldpasswordInput = this.shadowRoot?.querySelector('#oldPasswordInput');
        assert(oldpasswordInput instanceof CrInputElement);
        this.passwordInput = oldpasswordInput;
        addSubmitListener(this.passwordInput, this.submit.bind(this));
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.PASSWORD_CHANGED;
    }
    /**
     * Invoked just before being shown.
     */
    onBeforeShow() {
        this.reset();
    }
    reset() {
        this.setUIStep(EnterOldPasswordUiState.PASSWORD);
        this.clearPassword();
        this.disabled = false;
    }
    /**
     * Called when Screen fails to authenticate with
     * provided password.
     */
    showWrongPasswordError() {
        this.clearPassword();
        this.disabled = false;
        this.passwordInvalid = true;
        this.setUIStep(EnterOldPasswordUiState.PASSWORD);
    }
    submit() {
        if (this.disabled) {
            return;
        }
        if (!this.passwordInput.validate()) {
            return;
        }
        this.setUIStep(EnterOldPasswordUiState.PROGRESS);
        this.disabled = true;
        this.userActed(['submit', this.passwordInput.value]);
    }
    onForgotPasswordClicked() {
        if (this.disabled) {
            return;
        }
        this.userActed('forgot');
    }
    onAnimationFinish() {
        this.focus();
    }
    clearPassword() {
        this.password = '';
        this.passwordInvalid = false;
    }
}
customElements.define(EnterOldPassword.is, EnterOldPassword);
