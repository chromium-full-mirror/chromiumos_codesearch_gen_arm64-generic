// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './cryptohome_recovery_setup.html.js';
/**
 * UI mode for the dialog.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
var CryptohomeRecoverySetupUIState;
(function (CryptohomeRecoverySetupUIState) {
    CryptohomeRecoverySetupUIState["LOADING"] = "loading";
    CryptohomeRecoverySetupUIState["ERROR"] = "error";
})(CryptohomeRecoverySetupUIState || (CryptohomeRecoverySetupUIState = {}));
const CryptohomeRecoverySetupBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
class CryptohomeRecoverySetup extends CryptohomeRecoverySetupBase {
    static get is() {
        return 'cryptohome-recovery-setup-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return CryptohomeRecoverySetupUIState.LOADING;
    }
    get UI_STEPS() {
        return CryptohomeRecoverySetupUIState;
    }
    get EXTERNAL_API() {
        return [
            'setLoadingState',
            'onSetupFailed',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('CryptohomeRecoverySetupScreen');
    }
    reset() {
        this.setUIStep(CryptohomeRecoverySetupUIState.LOADING);
    }
    /**
     * Called to show the spinner in the UI.
     */
    setLoadingState() {
        this.setUIStep(CryptohomeRecoverySetupUIState.LOADING);
    }
    /**
     * Called when Cryptohome recovery setup failed.
     */
    onSetupFailed() {
        this.setUIStep(CryptohomeRecoverySetupUIState.ERROR);
    }
    /**
     * Skip button click handler.
     */
    onSkip() {
        this.userActed('skip');
    }
    /**
     * Retry button click handler.
     */
    onRetry() {
        this.userActed('retry');
    }
}
customElements.define(CryptohomeRecoverySetup.is, CryptohomeRecoverySetup);
