// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for GAIA password changed screen.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-media-query/iron-media-query.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { CrInputElement } from '//resources/ash/common/cr_elements/cr_input/cr_input.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { addSubmitListener } from '../../login_ui_tools.js';
import { getTemplate } from './gaia_password_changed.html.js';
/**
 * UI mode for the dialog.
 */
var GaiaPasswordChangedUiState;
(function (GaiaPasswordChangedUiState) {
    GaiaPasswordChangedUiState["PASSWORD"] = "password";
    GaiaPasswordChangedUiState["FORGOT"] = "forgot";
    GaiaPasswordChangedUiState["RECOVERY"] = "setup-recovery";
    GaiaPasswordChangedUiState["PROGRESS"] = "progress";
})(GaiaPasswordChangedUiState || (GaiaPasswordChangedUiState = {}));
const GaiaPasswordChangedBase = mixinBehaviors([
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class GaiaPasswordChanged extends GaiaPasswordChangedBase {
    static get is() {
        return 'gaia-password-changed-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            email: {
                type: String,
                value: '',
            },
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
        return GaiaPasswordChangedUiState.PASSWORD;
    }
    get UI_STEPS() {
        return GaiaPasswordChangedUiState;
    }
    // clang-format off
    get EXTERNAL_API() {
        return [
            'showWrongPasswordError',
            'suggestRecovery',
        ];
    }
    // clang-format on
    ready() {
        super.ready();
        this.initializeLoginScreen('GaiaPasswordChangedScreen');
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
     * Invoked just before being shown. Contains all the data for the screen.
     */
    onBeforeShow(data) {
        this.reset();
        this.email = data.email;
        this.passwordInvalid = data.showError;
    }
    reset() {
        this.setUIStep(GaiaPasswordChangedUiState.PASSWORD);
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
        this.setUIStep(GaiaPasswordChangedUiState.PASSWORD);
    }
    /**
     * Called when password was successfully updated
     * and it is possible to set up recovery for the user.
     */
    suggestRecovery() {
        this.disabled = false;
        this.setUIStep(GaiaPasswordChangedUiState.RECOVERY);
    }
    /**
     * Returns the subtitle message for the data loss warning screen.
     * @param locale The i18n locale.
     * @param email The email address that the user is trying to recover.
     * @return The translated subtitle message.
     */
    getDataLossWarningSubtitleMessage(locale, email) {
        return this.i18nAdvancedDynamic(locale, 'dataLossWarningSubtitle', { substitutions: [email] });
    }
    submit() {
        if (this.disabled) {
            return;
        }
        if (!this.passwordInput.validate()) {
            return;
        }
        this.setUIStep(GaiaPasswordChangedUiState.PROGRESS);
        this.disabled = true;
        this.userActed(['migrate-user-data', this.passwordInput.value]);
    }
    onForgotPasswordClicked() {
        if (this.disabled) {
            return;
        }
        this.setUIStep(GaiaPasswordChangedUiState.FORGOT);
        this.clearPassword();
    }
    onBackButtonClicked() {
        this.setUIStep(GaiaPasswordChangedUiState.PASSWORD);
    }
    onAnimationFinish() {
        this.focus();
    }
    clearPassword() {
        this.password = '';
        this.passwordInvalid = false;
    }
    onProceedClicked() {
        if (this.disabled) {
            return;
        }
        this.setUIStep(GaiaPasswordChangedUiState.PROGRESS);
        this.disabled = true;
        this.clearPassword();
        this.userActed('resync');
    }
    onNoRecovery() {
        if (this.disabled) {
            return;
        }
        this.setUIStep(GaiaPasswordChangedUiState.PROGRESS);
        this.disabled = true;
        this.clearPassword();
        this.userActed('no-recovery');
    }
    onSetRecovery() {
        if (this.disabled) {
            return;
        }
        this.setUIStep(GaiaPasswordChangedUiState.PROGRESS);
        this.disabled = true;
        this.clearPassword();
        this.userActed('setup-recovery');
    }
    onCancel() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('cancel');
    }
}
customElements.define(GaiaPasswordChanged.is, GaiaPasswordChanged);
