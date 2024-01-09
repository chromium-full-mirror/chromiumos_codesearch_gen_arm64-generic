// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for theme selection screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_screens_list.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './choobe.html.js';
export const ChoobeScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
var ChoobeStep;
(function (ChoobeStep) {
    ChoobeStep["OVERVIEW"] = "overview";
})(ChoobeStep || (ChoobeStep = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["SKIP"] = "choobeSkip";
    UserAction["NEXT"] = "choobeSelect";
})(UserAction || (UserAction = {}));
class ChoobeScreen extends ChoobeScreenElementBase {
    static get is() {
        return 'choobe-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            numberOfSelectedScreens_: {
                type: Number,
                value: 0,
            },
        };
    }
    get UI_STEPS() {
        return ChoobeStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return ChoobeStep.OVERVIEW;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ChoobeScreen');
    }
    onBeforeShow(data) {
        if ('screens' in data) {
            this.shadowRoot.querySelector('#screensList').init(data['screens']);
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.CHOOBE;
    }
    onNextClicked_() {
        const screenSelected = this.shadowRoot.querySelector('#screensList').getScreenSelected();
        this.userActed([UserAction.NEXT, screenSelected]);
    }
    onSkip_() {
        this.userActed(UserAction.SKIP);
    }
    canProceed_() {
        return this.numberOfSelectedScreens_ > 0;
    }
}
customElements.define(ChoobeScreen.is, ChoobeScreen);
