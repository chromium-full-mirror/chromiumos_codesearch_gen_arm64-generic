// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/cr_elements/cr_button/cr_button.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import { CrInputElement } from '//resources/cr_elements/cr_input/cr_input.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { addSubmitListener } from '../../login_ui_tools.js';
import { getTemplate } from './saml_confirm_password.html.js';
var SamlConfirmPasswordState;
(function (SamlConfirmPasswordState) {
    SamlConfirmPasswordState["PASSWORD"] = "password";
    SamlConfirmPasswordState["PROGRESS"] = "progress";
})(SamlConfirmPasswordState || (SamlConfirmPasswordState = {}));
const SamlConfirmPasswordBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
class SamlConfirmPassword extends SamlConfirmPasswordBase {
    static get is() {
        return 'saml-confirm-password-element';
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
            isManualInput: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return ['showPasswordStep'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return SamlConfirmPasswordState.PROGRESS;
    }
    get UI_STEPS() {
        return SamlConfirmPasswordState;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ConfirmSamlPasswordScreen');
        addSubmitListener(this.getPasswordInput(), this.submit.bind(this));
        addSubmitListener(this.getConfirmPasswordInput(), this.submit.bind(this));
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.SAML_PASSWORD_CONFIRM;
    }
    /**
     * Event handler that is invoked just before the screen is shown.
     * @param data Screen init payload
     */
    onBeforeShow(data) {
        this.reset();
        this.email = data['email'];
        this.isManualInput = data['manualPasswordInput'];
    }
    showPasswordStep(retry) {
        if (retry) {
            this.reset();
            this.getPasswordInput().invalid = true;
        }
        this.setUIStep(SamlConfirmPasswordState.PASSWORD);
    }
    resetFields() {
        const passwordInput = this.getPasswordInput();
        passwordInput.invalid = false;
        passwordInput.value = '';
        if (this.isManualInput) {
            const confirmPasswordInput = this.getConfirmPasswordInput();
            confirmPasswordInput.invalid = false;
            confirmPasswordInput.value = '';
        }
    }
    reset() {
        const cancelConfirmDialog = this.getCancelConfirmDialog();
        if (cancelConfirmDialog.open) {
            cancelConfirmDialog.hideDialog();
        }
        this.resetFields();
    }
    onCancel() {
        this.getCancelConfirmDialog().showDialog();
    }
    onCancelNo() {
        this.getCancelConfirmDialog().hideDialog();
    }
    onCancelYes() {
        this.getCancelConfirmDialog().hideDialog();
        this.userActed('cancel');
    }
    submit() {
        const passwordInput = this.getPasswordInput();
        if (!passwordInput.validate()) {
            return;
        }
        if (this.isManualInput) {
            // When using manual password entry, both passwords must match.
            const confirmPasswordInput = this.getConfirmPasswordInput();
            if (!confirmPasswordInput.validate()) {
                return;
            }
            if (confirmPasswordInput.value != passwordInput.value) {
                passwordInput.invalid = true;
                confirmPasswordInput.invalid = true;
                return;
            }
        }
        this.setUIStep(SamlConfirmPasswordState.PROGRESS);
        this.userActed(['inputPassword', passwordInput.value]);
        this.resetFields();
    }
    subtitleText(locale, manual) {
        const key = manual ? 'manualPasswordTitle' : 'confirmPasswordTitle';
        return this.i18nDynamic(locale, key);
    }
    passwordPlaceholder(locale, manual) {
        const key = manual ? 'manualPasswordInputLabel' : 'confirmPasswordLabel';
        return this.i18nDynamic(locale, key);
    }
    passwordErrorText(locale, manual) {
        const key = manual ? 'manualPasswordMismatch' : 'confirmPasswordIncorrectPassword';
        return this.i18nDynamic(locale, key);
    }
    getPasswordInput() {
        const passwordInput = this.shadowRoot?.querySelector('#passwordInput');
        assert(passwordInput instanceof CrInputElement);
        return passwordInput;
    }
    getConfirmPasswordInput() {
        const confirmPasswordInput = this.shadowRoot?.querySelector('#confirmPasswordInput');
        assert(confirmPasswordInput instanceof CrInputElement);
        return confirmPasswordInput;
    }
    getCancelConfirmDialog() {
        const cancelConfirmDialog = this.shadowRoot?.querySelector('#cancelConfirmDlg');
        assert(cancelConfirmDialog instanceof OobeModalDialog);
        return cancelConfirmDialog;
    }
}
customElements.define(SamlConfirmPassword.is, SamlConfirmPassword);
