// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for TPM error screen.
 */
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './tpm_error.html.js';
/**
 * UI state for the dialog.
 */
var TpmUiState;
(function (TpmUiState) {
    TpmUiState["DEFAULT"] = "default";
    TpmUiState["TPM_OWNED"] = "tpm-owned";
    TpmUiState["DBUS_ERROR"] = "dbus-error";
})(TpmUiState || (TpmUiState = {}));
export const TPMErrorMessageElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
// eslint-disable-next-line @typescript-eslint/naming-convention
export class TPMErrorMessage extends TPMErrorMessageElementBase {
    static get is() {
        return 'tpm-error-message-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('TPMErrorMessageScreen');
    }
    get EXTERNAL_API() {
        return [
            'setStep',
        ];
    }
    get UI_STEPS() {
        return TpmUiState;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return TpmUiState.DEFAULT;
    }
    setStep(step) {
        this.setUIStep(step);
    }
    onRestartClicked() {
        this.userActed('reboot-system');
    }
    get defaultControl() {
        return this.shadowRoot.querySelector('#errorDialog');
    }
}
customElements.define(TPMErrorMessage.is, TPMErrorMessage);
