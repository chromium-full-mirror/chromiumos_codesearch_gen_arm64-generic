// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying ARC ADB sideloading screen.
 */
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/oobe_icons.html.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './adb_sideloading.html.js';
/**
 * UI mode for the dialog.
 */
var AdbSideloadingState;
(function (AdbSideloadingState) {
    AdbSideloadingState["ERROR"] = "error";
    AdbSideloadingState["SETUP"] = "setup";
})(AdbSideloadingState || (AdbSideloadingState = {}));
/**
 * The constants need to be synced with EnableAdbSideloadingScreenView::UIState
 */
var AdbsideloadingScreenState;
(function (AdbsideloadingScreenState) {
    AdbsideloadingScreenState[AdbsideloadingScreenState["ERROR"] = 1] = "ERROR";
    AdbsideloadingScreenState[AdbsideloadingScreenState["SETUP"] = 2] = "SETUP";
})(AdbsideloadingScreenState || (AdbsideloadingScreenState = {}));
const AdbSideloadingBase = mixinBehaviors([OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior], PolymerElement);
export class AdbSideloading extends AdbSideloadingBase {
    static get is() {
        return 'adb-sideloading-element';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return ['setScreenState'];
    }
    get UI_STEPS() {
        return AdbSideloadingState;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return AdbSideloadingState.SETUP;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('EnableAdbSideloadingScreen');
    }
    /*
     * Executed on language change.
     */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    onBeforeShow() {
        this.setScreenState(AdbsideloadingScreenState.SETUP);
    }
    /**
     * Sets UI state for the dialog to show corresponding content.
     */
    setScreenState(state) {
        if (state == AdbsideloadingScreenState.ERROR) {
            this.setUIStep(AdbSideloadingState.ERROR);
        }
        else if (state == AdbsideloadingScreenState.SETUP) {
            this.setUIStep(AdbSideloadingState.SETUP);
        }
    }
    /**
     * On-tap event handler for enable button.
     */
    onEnableClick() {
        this.userActed('enable-pressed');
    }
    /**
     * On-tap event handler for cancel button.
     */
    onCancelClick() {
        this.userActed('cancel-pressed');
    }
    /**
     * On-tap event handler for learn more link.
     */
    onLearnMoreClick() {
        this.userActed('learn-more-link');
    }
}
customElements.define(AdbSideloading.is, AdbSideloading);
