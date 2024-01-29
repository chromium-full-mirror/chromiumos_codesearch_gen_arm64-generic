// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './password_selection.html.js';
/**
 * Type of the password for setting up for the user.
 */
var PasswordType;
(function (PasswordType) {
    PasswordType["LOCAL_PASSWORD"] = "local-password";
    PasswordType["GAIA_PASSWORD"] = "gaia-password";
})(PasswordType || (PasswordType = {}));
/**
 * UI mode for the dialog.
 */
var PasswordSelectionState;
(function (PasswordSelectionState) {
    PasswordSelectionState["SELECTION"] = "selection";
    PasswordSelectionState["PROGRESS"] = "progress";
})(PasswordSelectionState || (PasswordSelectionState = {}));
const PasswordSelectionBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class PasswordSelection extends PasswordSelectionBase {
    static get is() {
        return 'password-selection-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The currently selected password type.
             */
            selectedPasswordType: {
                type: String,
            },
            /**
             * Enum values for `selectedPasswordType`.
             *  {PasswordType}
             */
            passwordTypeEnum: {
                readOnly: true,
                type: Object,
                value: PasswordType,
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('PasswordSelectionScreen');
    }
    get EXTERNAL_API() {
        return [
            'showProgress',
            'showPasswordChoice',
        ];
    }
    get UI_STEPS() {
        return PasswordSelectionState;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return PasswordSelectionState.PROGRESS;
    }
    // Invoked just before being shown. Contains all the data for the screen.
    onBeforeShow() {
        this.selectedPasswordType = PasswordType.LOCAL_PASSWORD;
    }
    showProgress() {
        this.setUIStep(PasswordSelectionState.PROGRESS);
    }
    showPasswordChoice() {
        this.setUIStep(PasswordSelectionState.SELECTION);
    }
    onBackClicked() {
        this.userActed('back');
    }
    onNextClicked() {
        this.userActed(this.selectedPasswordType);
    }
}
customElements.define(PasswordSelection.is, PasswordSelection);
