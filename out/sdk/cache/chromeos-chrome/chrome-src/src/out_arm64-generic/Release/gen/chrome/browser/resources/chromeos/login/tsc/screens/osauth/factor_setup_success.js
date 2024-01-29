// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for signin fatal error.
 */
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './factor_setup_success.html.js';
const FactorSetupSuccessBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
// LINT.IfChange
/**
 * Set of modified factors, determine title/subtitle.
 */
var ModifiedFactors;
(function (ModifiedFactors) {
    ModifiedFactors["ONLINE_PASSWORD"] = "online";
    ModifiedFactors["LOCAL_PASSWORD"] = "local";
    ModifiedFactors["ONLINE_PASSWORD_AND_PIN"] = "online+pin";
    ModifiedFactors["LOCAL_PASSWORD_AND_PIN"] = "local+pin";
    ModifiedFactors["PIN"] = "pin";
})(ModifiedFactors || (ModifiedFactors = {}));
/**
 * Determines if factors were changed as a part of
 * initial setup (set) or during recovery (updated)
 */
var ChangeMode;
(function (ChangeMode) {
    ChangeMode["INITIAL_SETUP"] = "set";
    ChangeMode["RECOVERY_FLOW"] = "update";
})(ChangeMode || (ChangeMode = {}));
const ACTION_PROCEED = 'proceed';
export class FactorSetupSuccessScreen extends FactorSetupSuccessBase {
    static get is() {
        return 'factor-setup-success-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             */
            hasNextStep: {
                type: Boolean,
                value: true,
            },
            /**
             */
            factors: {
                type: String,
                value: ModifiedFactors.ONLINE_PASSWORD,
            },
            /**
             */
            changeMode: {
                type: String,
                value: ChangeMode.INITIAL_SETUP,
            },
        };
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('FactorSetupSuccessScreen');
    }
    /** Initial UI State for screen */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.BLOCKING;
    }
    /**
     * Invoked just before being shown. Contains all the data for the screen.
     */
    onBeforeShow(data) {
        this.factors = data['modifiedFactors'];
        this.changeMode = data['changeMode'];
        this.hasNextStep = this.changeMode === ChangeMode.INITIAL_SETUP;
    }
    getTitle(locale, factors, changeMode) {
        if (changeMode === ChangeMode.INITIAL_SETUP) {
            if (factors === ModifiedFactors.LOCAL_PASSWORD) {
                return this.i18nDynamic(locale, 'factorSuccessTitleLocalPasswordSet');
            }
            // Add more strings here once we support more combinations of factors.
            // Fallback option:
            return this.i18nDynamic(locale, 'factorSuccessTitleLocalPasswordSet');
        }
        else {
            if (factors === ModifiedFactors.LOCAL_PASSWORD) {
                return this.i18nDynamic(locale, 'factorSuccessTitleLocalPasswordUpdated');
            }
            // Add more strings here once we support more combinations of factors.
            // Fallback option:
            return this.i18nDynamic(locale, 'factorSuccessTitleLocalPasswordUpdated');
        }
    }
    getSubtitle(locale, factors) {
        if (factors === ModifiedFactors.LOCAL_PASSWORD) {
            return this.i18nDynamic(locale, 'factorSuccessSubtitleLocalPassword');
        }
        return undefined;
    }
    onProceed() {
        this.userActed(ACTION_PROCEED);
    }
}
customElements.define(FactorSetupSuccessScreen.is, FactorSetupSuccessScreen);
