// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for touchpad scroll screen.
 */
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/oobe_display_size_selector.js';
import '../../components/oobe_icons.html.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './display_size.html.js';
export const DisplaySizeScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * Enum to represent steps on the display size screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 */
var DisplaySizeStep;
(function (DisplaySizeStep) {
    DisplaySizeStep["OVERVIEW"] = "overview";
})(DisplaySizeStep || (DisplaySizeStep = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["NEXT"] = "next";
    UserAction["RETURN"] = "return";
})(UserAction || (UserAction = {}));
class DisplaySizeScreen extends DisplaySizeScreenElementBase {
    static get is() {
        return 'display-size-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            shouldShowReturn_: {
                type: Boolean,
                value: false,
            },
        };
    }
    get UI_STEPS() {
        return DisplaySizeStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return DisplaySizeStep.OVERVIEW;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('DisplaySizeScreen');
    }
    /**
     * @param {DisplaySizeScreenData} data Screen init payload.
     */
    onBeforeShow(data) {
        this.shadowRoot.querySelector('#sizeSelector')
            .init(data['availableSizes'], data['currentSize']);
        this.shouldShowReturn_ = data['shouldShowReturn'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.CHOOBE;
    }
    onNextClicked_() {
        this.userActed([
            UserAction.NEXT,
            this.shadowRoot.querySelector('#sizeSelector').getSelectedSize(),
        ]);
    }
    onReturnClicked_() {
        this.userActed([
            UserAction.RETURN,
            this.shadowRoot.querySelector('#sizeSelector').getSelectedSize(),
        ]);
    }
}
customElements.define(DisplaySizeScreen.is, DisplaySizeScreen);
