// Copyright 2014 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Enable developer features screen implementation.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/action_link.css.js';
import '//resources/ash/common/cr_elements/cr_input/cr_input.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './enable_debugging.html.js';
/**
 * Possible UI states of the enable debugging screen.
 * These values must be kept in sync with EnableDebuggingScreenHandler::UIState
 * in C++ code and the order of the enum must be the same.
 */
var EnableDebuggingState;
(function (EnableDebuggingState) {
    EnableDebuggingState["ERROR"] = "error";
    EnableDebuggingState["NONE"] = "none";
    EnableDebuggingState["REMOVE_PROTECTION"] = "remove-protection";
    EnableDebuggingState["SETUP"] = "setup";
    EnableDebuggingState["WAIT"] = "wait";
    EnableDebuggingState["DONE"] = "done";
})(EnableDebuggingState || (EnableDebuggingState = {}));
const EnableDebuggingBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class EnableDebugging extends EnableDebuggingBase {
    static get is() {
        return 'enable-debugging-element';
    }
    static get template() {
        return getTemplate();
    }
    get EXTERNAL_API() {
        return ['updateState'];
    }
    static get properties() {
        return {
            /**
             * Current value of password input field.
             */
            password_: { type: String, value: '' },
            /**
             * Current value of repeat password input field.
             */
            passwordRepeat_: { type: String, value: '' },
            /**
             * Whether password input fields are matching.
             */
            passwordsMatch_: {
                type: Boolean,
                computed: 'computePasswordsMatch_(password_, passwordRepeat_)',
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('EnableDebuggingScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return EnableDebuggingState.NONE;
    }
    get UI_STEPS() {
        return EnableDebuggingState;
    }
    /**
     * Returns a control which should receive an initial focus.
     */
    get defaultControl() {
        if (this.uiStep == EnableDebuggingState.REMOVE_PROTECTION) {
            return this.shadowRoot.querySelector('#removeProtectionProceedButton');
        }
        else if (this.uiStep == EnableDebuggingState.SETUP) {
            return this.shadowRoot.querySelector('#password');
        }
        else if (this.uiStep == EnableDebuggingState.DONE) {
            return this.shadowRoot.querySelector('#okButton');
        }
        else if (this.uiStep == EnableDebuggingState.ERROR) {
            return this.shadowRoot.querySelector('#errorOkButton');
        }
        else {
            return null;
        }
    }
    /**
     * Cancels the enable debugging screen and drops the user back to the
     * network settings.
     */
    cancel() {
        this.userActed('cancel');
    }
    /**
     * Update UI for corresponding state of the screen.
     */
    updateState(state) {
        // Use `state + 1` as index to locate the corresponding EnableDebuggingState
        this.setUIStep(Object.values(EnableDebuggingState)[state + 1]);
        if (this.defaultControl) {
            this.defaultControl.focus();
        }
    }
    computePasswordsMatch_(password, password2) {
        return (password.length == 0 && password2.length == 0) ||
            (password == password2 && password.length >= 4);
    }
    onHelpLinkClicked_() {
        this.userActed('learnMore');
    }
    onRemoveButtonClicked_() {
        this.userActed('removeRootFSProtection');
    }
    onEnableButtonClicked_() {
        this.userActed(['setup', this.password_]);
        this.password_ = '';
        this.passwordRepeat_ = '';
    }
    onOkButtonClicked_() {
        this.userActed('done');
    }
}
customElements.define(EnableDebugging.is, EnableDebugging);
