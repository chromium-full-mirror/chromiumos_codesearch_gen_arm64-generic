// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/auth_setup/set_local_password_input.js';
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_shared_style.css.js';
import '//resources/ash/common/cr_elements/cr_button/cr_button.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_back_button.js';
import { SetLocalPasswordInputElement } from '//resources/ash/common/auth_setup/set_local_password_input.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './local_password_setup.html.js';
/**
 * UI mode for the dialog.
 */
var LocalPasswordSetupState;
(function (LocalPasswordSetupState) {
    LocalPasswordSetupState["PASSWORD"] = "password";
    LocalPasswordSetupState["PROGRESS"] = "progress";
})(LocalPasswordSetupState || (LocalPasswordSetupState = {}));
const LocalPasswordSetupBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class LocalPasswordSetup extends LocalPasswordSetupBase {
    static get is() {
        return 'local-password-setup-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             */
            backButtonVisible: {
                type: Boolean,
            },
        };
    }
    constructor() {
        super();
        this.backButtonVisible = true;
    }
    get EXTERNAL_API() {
        return ['showLocalPasswordSetupFailure'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return LocalPasswordSetupState.PASSWORD;
    }
    get UI_STEPS() {
        return LocalPasswordSetupState;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('LocalPasswordSetupScreen');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    /**
     * Event handler that is invoked just before the screen is shown.
     * @param data Screen initial payload
     */
    onBeforeShow(data) {
        this.reset();
        this.backButtonVisible = data['showBackButton'];
    }
    showLocalPasswordSetupFailure() {
        // TODO(b/304963851): Show setup failed message, likely allowing user to
        // retry.
    }
    reset() {
        const passwordInput = this.shadowRoot?.querySelector('#passwordInput');
        if (passwordInput instanceof SetLocalPasswordInputElement) {
            passwordInput.reset();
        }
    }
    getPasswordInput() {
        const passwordInput = this.shadowRoot?.querySelector('#passwordInput');
        assert(passwordInput instanceof SetLocalPasswordInputElement);
        return passwordInput;
    }
    onBackClicked() {
        if (!this.backButtonVisible) {
            return;
        }
        this.userActed([
            'back',
            this.getPasswordInput().value,
        ]);
    }
    async onSubmit() {
        await this.getPasswordInput().validate();
        this.setUIStep(LocalPasswordSetupState.PROGRESS);
        this.userActed([
            'inputPassword',
            this.getPasswordInput().value,
        ]);
    }
    onDoneClicked() {
        this.userActed(['done']);
    }
    titleText(_locale, isRecoveryFlow) {
        const key = isRecoveryFlow ? 'localPasswordResetTitle' : 'localPasswordSetupTitle';
        return this.i18n(key);
    }
}
customElements.define(LocalPasswordSetup.is, LocalPasswordSetup);
