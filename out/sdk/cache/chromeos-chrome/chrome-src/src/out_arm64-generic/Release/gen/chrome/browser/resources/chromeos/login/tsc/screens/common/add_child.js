// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for add child screen.
 */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_radio_button/cr_card_radio_button.js';
import '//resources/ash/common/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/hd_iron_icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/cr_card_radio_group_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './add_child.html.js';
const AddChildScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * Sign in method for setting up the device for child.
 */
var AddChildSignInMethod;
(function (AddChildSignInMethod) {
    AddChildSignInMethod["CREATE"] = "create";
    AddChildSignInMethod["SIGNIN"] = "signin";
})(AddChildSignInMethod || (AddChildSignInMethod = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["CREATE"] = "child-account-create";
    UserAction["SIGNIN"] = "child-signin";
    UserAction["BACK"] = "child-back";
})(UserAction || (UserAction = {}));
/**
 * UI mode for the dialog.
 */
var AddChildUiStep;
(function (AddChildUiStep) {
    AddChildUiStep["OVERVIEW"] = "overview";
})(AddChildUiStep || (AddChildUiStep = {}));
export class AddChildScreen extends AddChildScreenElementBase {
    static get is() {
        return 'add-child-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The currently selected sign in method.
             */
            selectedSignInMethod: {
                type: String,
            },
        };
    }
    constructor() {
        super();
        this.selectedSignInMethod = '';
    }
    get EXTERNAL_API() {
        return [];
    }
    onBeforeShow() {
        this.selectedSignInMethod = '';
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('AddChildScreen');
    }
    get UI_STEPS() {
        return AddChildUiStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return AddChildUiStep.OVERVIEW;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.GAIA_SIGNIN;
    }
    cancel() {
        this.onBackClicked_();
    }
    onBackClicked_() {
        this.userActed(UserAction.BACK);
    }
    onNextClicked_() {
        if (this.selectedSignInMethod === AddChildSignInMethod.CREATE) {
            this.userActed(UserAction.CREATE);
        }
        else if (this.selectedSignInMethod === AddChildSignInMethod.SIGNIN) {
            this.userActed(UserAction.SIGNIN);
        }
    }
    onLearnMoreClicked_() {
        this.shadowRoot.querySelector('#learnMoreDialog')
            .showDialog();
    }
    focusLearnMoreLink_() {
        this.shadowRoot.querySelector('#learnMoreLink')
            .focus();
    }
}
customElements.define(AddChildScreen.is, AddChildScreen);
