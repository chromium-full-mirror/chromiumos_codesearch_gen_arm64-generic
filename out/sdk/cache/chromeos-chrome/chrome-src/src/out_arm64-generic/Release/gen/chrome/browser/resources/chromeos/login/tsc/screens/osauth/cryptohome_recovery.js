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
import { getTemplate } from './cryptohome_recovery.html.js';
// eslint-disable-next-line @typescript-eslint/naming-convention
var CryptohomeRecoveryUIState;
(function (CryptohomeRecoveryUIState) {
    CryptohomeRecoveryUIState["LOADING"] = "loading";
    CryptohomeRecoveryUIState["DONE"] = "done";
    CryptohomeRecoveryUIState["ERROR"] = "error";
    CryptohomeRecoveryUIState["REAUTH_NOTIFICATION"] = "reauth-notification";
})(CryptohomeRecoveryUIState || (CryptohomeRecoveryUIState = {}));
const CryptohomeRecoveryBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
class CryptohomeRecovery extends CryptohomeRecoveryBase {
    static get is() {
        return 'cryptohome-recovery-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether the page is being rendered in dark mode.
             */
            isDarkModeActive: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the buttons on the screen are disabled. Prevents sending double
             * requests.
             */
            disabled: {
                type: Boolean,
                value: false,
            },
        };
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return CryptohomeRecoveryUIState.LOADING;
    }
    get UI_STEPS() {
        return CryptohomeRecoveryUIState;
    }
    get EXTERNAL_API() {
        return [
            'onRecoverySucceeded',
            'onRecoveryFailed',
            'showReauthNotification',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('CryptohomeRecoveryScreen');
    }
    /**
     * Invoked just before being shown.
     */
    onBeforeShow() {
        this.reset();
    }
    reset() {
        this.setUIStep(CryptohomeRecoveryUIState.LOADING);
        this.disabled = false;
    }
    /**
     * Called when Cryptohome recovery succeeded.
     */
    onRecoverySucceeded() {
        this.setUIStep(CryptohomeRecoveryUIState.DONE);
        this.disabled = false;
    }
    /**
     * Called when Cryptohome recovery failed.
     */
    onRecoveryFailed() {
        this.setUIStep(CryptohomeRecoveryUIState.ERROR);
        this.disabled = false;
    }
    /**
     * Shows a reauth required message when there's no reauth proof token.
     */
    showReauthNotification() {
        this.setUIStep(CryptohomeRecoveryUIState.REAUTH_NOTIFICATION);
        this.disabled = false;
    }
    /**
     * Enter old password button click handler.
     */
    onGoToManualRecovery() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('enter-old-password');
    }
    /**
     * Retry button click handler.
     */
    onRetry() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('retry');
    }
    /**
     * Done button click handler.
     */
    onDone() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('done');
    }
    /**
     * Click handler for the next button on the reauth notification screen.
     */
    onReauthButtonClicked() {
        if (this.disabled) {
            return;
        }
        this.disabled = true;
        this.userActed('reauth');
    }
}
customElements.define(CryptohomeRecovery.is, CryptohomeRecovery);
