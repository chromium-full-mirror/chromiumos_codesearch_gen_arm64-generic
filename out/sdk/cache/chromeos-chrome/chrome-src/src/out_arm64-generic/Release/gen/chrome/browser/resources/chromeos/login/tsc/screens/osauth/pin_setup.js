// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import { SetupPinKeyboardElement } from '//resources/ash/common/quick_unlock/setup_pin_keyboard.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './pin_setup.html.js';
var PinSetupState;
(function (PinSetupState) {
    PinSetupState["START"] = "start";
    PinSetupState["CONFIRM"] = "confirm";
    PinSetupState["DONE"] = "done";
})(PinSetupState || (PinSetupState = {}));
const PinSetupBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
class PinSetup extends PinSetupBase {
    static get is() {
        return 'pin-setup-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Flag from <setup-pin-keyboard>.
             */
            enableSubmit: {
                type: Boolean,
                value: false,
            },
            /**
             * Flag from <setup-pin-keyboard>.
             */
            isConfirmStep: {
                type: Boolean,
                value: false,
                observer: 'onIsConfirmStepChanged',
            },
            /** QuickUnlockPrivate API token. */
            authToken: {
                type: String,
            },
            /**
             * Interface for chrome.quickUnlockPrivate calls. May be overridden by
             * tests.
             */
            quickUnlockPrivate: {
                type: Object,
                value: chrome.quickUnlockPrivate,
            },
            /**
             * Should be true when device has support for PIN login.
             */
            hasLoginSupport: {
                type: Boolean,
                value: false,
            },
            /**
             * Indicates whether user is a child account.
             */
            isChildAccount: {
                type: Boolean,
                value: false,
            },
        };
    }
    get EXTERNAL_API() {
        return ['setHasLoginSupport'];
    }
    get UI_STEPS() {
        return PinSetupState;
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('PinSetupScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return PinSetupState.START;
    }
    getPinKeyboard() {
        const pinKeyboard = this.shadowRoot?.querySelector('#pinKeyboard');
        assert(pinKeyboard instanceof SetupPinKeyboardElement);
        return pinKeyboard;
    }
    onBeforeShow(data) {
        this.getPinKeyboard().resetState();
        this.authToken = data.auth_token;
        this.isChildAccount = data.is_child_account;
    }
    /**
     * Configures message on the final page depending on whether the PIN can
     *  be used to log in.
     */
    setHasLoginSupport(hasLoginSupport) {
        this.hasLoginSupport = hasLoginSupport;
    }
    onIsConfirmStepChanged() {
        if (this.isConfirmStep) {
            this.setUIStep(PinSetupState.CONFIRM);
        }
    }
    onPinSubmit() {
        this.getPinKeyboard().doSubmit();
    }
    onSetPinDone() {
        this.setUIStep(PinSetupState.DONE);
    }
    onSkipButton() {
        this.authToken = '';
        this.getPinKeyboard().resetState();
        if (this.uiStep === PinSetupState.CONFIRM) {
            this.userActed('skip-button-in-flow');
        }
        else {
            this.userActed('skip-button-on-start');
        }
    }
    onBackButton() {
        this.getPinKeyboard().resetState();
        this.setUIStep(PinSetupState.START);
    }
    onNextButton() {
        this.onPinSubmit();
    }
    onDoneButton() {
        this.authToken = '';
        this.getPinKeyboard().resetState();
        this.userActed('done-button');
    }
}
customElements.define(PinSetup.is, PinSetup);
