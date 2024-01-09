// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for theme selection screen.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/cr_card_radio_group_styles.css.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './theme_selection.html.js';
const ThemeSelectionScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * Enum to represent steps on the theme selection screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 */
var ThemeSelectionStep;
(function (ThemeSelectionStep) {
    ThemeSelectionStep["OVERVIEW"] = "overview";
})(ThemeSelectionStep || (ThemeSelectionStep = {}));
/**
 * Available themes. The values should be in sync with the enum
 * defined in theme_selection_screen.h
 */
var SelectedTheme;
(function (SelectedTheme) {
    SelectedTheme[SelectedTheme["AUTO"] = 0] = "AUTO";
    SelectedTheme[SelectedTheme["DARK"] = 1] = "DARK";
    SelectedTheme[SelectedTheme["LIGHT"] = 2] = "LIGHT";
})(SelectedTheme || (SelectedTheme = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["SELECT"] = "select";
    UserAction["NEXT"] = "next";
    UserAction["RETURN"] = "return";
})(UserAction || (UserAction = {}));
class ThemeSelectionScreen extends ThemeSelectionScreenElementBase {
    static get is() {
        return 'theme-selection-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Indicates selected theme
             */
            selectedTheme: { type: String, value: 'auto', observer: 'onThemeChanged_' },
            /**
             * Indicates if the device is used in tablet mode
             */
            isInTabletMode_: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the button to return to CHOOBE screen should be shown.
             */
            shouldShowReturn_: {
                type: Boolean,
                value: false,
            },
        };
    }
    get UI_STEPS() {
        return ThemeSelectionStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return ThemeSelectionStep.OVERVIEW;
    }
    /**
     * Updates "device in tablet mode" state when tablet mode is changed.
     * Overridden from LoginScreenBehavior.
     * @param isInTabletMode True when in tablet mode.
     */
    setTabletModeState(isInTabletMode) {
        this.isInTabletMode_ = isInTabletMode;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ThemeSelectionScreen');
    }
    /**
     * @param data Screen init payload.
     */
    onBeforeShow(data) {
        this.selectedTheme = data.selectedTheme;
        this.shouldShowReturn_ = data['shouldShowReturn'];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.THEME_SELECTION;
    }
    onNextClicked_() {
        this.userActed(UserAction.NEXT);
    }
    onThemeChanged_(themeSelect, oldTheme) {
        if (oldTheme === undefined) {
            return;
        }
        if (themeSelect === 'auto') {
            this.userActed([UserAction.SELECT, SelectedTheme.AUTO]);
        }
        if (themeSelect === 'light') {
            this.userActed([UserAction.SELECT, SelectedTheme.LIGHT]);
        }
        if (themeSelect === 'dark') {
            this.userActed([UserAction.SELECT, SelectedTheme.DARK]);
        }
    }
    onReturnClicked_() {
        this.userActed(UserAction.RETURN);
    }
}
customElements.define(ThemeSelectionScreen.is, ThemeSelectionScreen);
