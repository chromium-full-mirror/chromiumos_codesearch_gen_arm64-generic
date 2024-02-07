// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_radio_button/cr_card_radio_button.js';
import '//resources/ash/common/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_illo_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/cr_card_radio_group_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/oobe_cr_lottie.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './gaia_info.html.js';
export const GaiaInfoScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
var GaiaInfoStep;
(function (GaiaInfoStep) {
    GaiaInfoStep["OVERVIEW"] = "overview";
})(GaiaInfoStep || (GaiaInfoStep = {}));
var UserCreationFlowType;
(function (UserCreationFlowType) {
    UserCreationFlowType["MANUAL"] = "manual";
    UserCreationFlowType["QUICKSTART"] = "quickstart";
})(UserCreationFlowType || (UserCreationFlowType = {}));
var UserAction;
(function (UserAction) {
    UserAction["BACK"] = "back";
    UserAction["MANUAL"] = "manual";
    UserAction["QUICKSTART"] = "quickstart";
})(UserAction || (UserAction = {}));
export class GaiaInfoScreen extends GaiaInfoScreenElementBase {
    static get is() {
        return 'gaia-info-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The currently selected flow type.
             */
            selectedFlowType_: {
                type: String,
                value: '',
            },
            /**
             * Whether Quick start feature is enabled. If it's enabled the quick start
             * button will be shown in the gaia info screen.
             */
            isQuickStartVisible_: {
                type: Boolean,
                value: false,
            },
        };
    }
    get EXTERNAL_API() {
        return ['setQuickStartVisible'];
    }
    get UI_STEPS() {
        return GaiaInfoStep;
    }
    onBeforeShow() {
        this.selectedFlowType_ = '';
        this.setAnimationPlaying_(true);
    }
    onBeforeHide() {
        this.setAnimationPlaying_(false);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return GaiaInfoStep.OVERVIEW;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('GaiaInfoScreen');
    }
    setQuickStartVisible() {
        this.isQuickStartVisible_ = true;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.GAIA_INFO;
    }
    onNextClicked_() {
        if (this.isQuickStartVisible_ &&
            this.selectedFlowType_ == UserCreationFlowType.QUICKSTART) {
            this.userActed(UserAction.QUICKSTART);
        }
        else {
            this.userActed(UserAction.MANUAL);
        }
    }
    onBackClicked_() {
        this.userActed(UserAction.BACK);
    }
    isNextButtonEnabled_(isQuickStartVisible, selectedFlowType) {
        return (!isQuickStartVisible) || selectedFlowType !== '';
    }
    setAnimationPlaying_(play) {
        const gaiaInfoAnimation = this.shadowRoot.querySelector('#gaiaInfoAnimation');
        if (gaiaInfoAnimation) {
            gaiaInfoAnimation.playing = play;
        }
    }
}
customElements.define(GaiaInfoScreen.is, GaiaInfoScreen);
