// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Demo Setup
 * screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/progress_list_item.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './demo_setup.html.js';
/**
 * UI mode for the dialog.
 */
var DemoSetupUiState;
(function (DemoSetupUiState) {
    DemoSetupUiState["PROGRESS"] = "progress";
    DemoSetupUiState["ERROR"] = "error";
})(DemoSetupUiState || (DemoSetupUiState = {}));
export const DemoSetupScreenBase = mixinBehaviors([
    OobeI18nBehavior,
    OobeDialogHostBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
class DemoSetupScreen extends DemoSetupScreenBase {
    static get is() {
        return 'demo-setup-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Object mapping step strings to step indices */
            setupSteps_: {
                type: Object,
                value() {
                    return loadTimeData.getValue('demoSetupSteps');
                },
            },
            /** Which step index is currently running in Demo Mode setup. */
            currentStepIndex_: {
                type: Number,
                value: -1,
            },
            /** Error message displayed on demoSetupErrorDialog screen. */
            errorMessage_: {
                type: String,
                value: '',
            },
            /** Whether powerwash is required in case of a setup error. */
            isPowerwashRequired_: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('DemoSetupScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return DemoSetupUiState.PROGRESS;
    }
    get UI_STEPS() {
        return DemoSetupUiState;
    }
    /** Overridden from LoginScreenBehavior. */
    get EXTERNAL_API() {
        return ['setCurrentSetupStep', 'onSetupSucceeded', 'onSetupFailed'];
    }
    onBeforeShow() {
        this.reset();
    }
    /** Resets demo setup flow to the initial screen and starts setup. */
    reset() {
        this.setUIStep(DemoSetupUiState.PROGRESS);
        this.userActed('start-setup');
    }
    /** Called after resources are updated. */
    updateLocalizedContent() {
        this.i18nUpdateLocale();
    }
    /**
     * Called at the beginning of a setup step.
     * @param currentStep The new step name.
     */
    setCurrentSetupStep(currentStep) {
        // If new step index not specified, remain unchanged.
        if (this.setupSteps_.hasOwnProperty(currentStep)) {
            this.currentStepIndex_ = this.setupSteps_[currentStep];
        }
    }
    /** Called when demo mode setup succeeded. */
    onSetupSucceeded() {
        this.errorMessage_ = '';
    }
    /**
     * Called when demo mode setup failed.
     * @param message Error message to be displayed to the user.
     * @param isPowerwashRequired Whether powerwash is required to
     *     recover from the error.
     */
    onSetupFailed(message, isPowerwashRequired) {
        this.errorMessage_ = message;
        this.isPowerwashRequired_ = isPowerwashRequired;
        this.setUIStep(DemoSetupUiState.ERROR);
    }
    /**
     * Retry button click handler.
     */
    onRetryClicked_() {
        this.reset();
    }
    /**
     * Powerwash button click handler.
     */
    onPowerwashClicked_() {
        this.userActed('powerwash');
    }
    /**
     * Close button click handler.
     */
    onCloseClicked_() {
        // TODO(wzang): Remove this after crbug.com/900640 is fixed.
        if (this.isPowerwashRequired_) {
            return;
        }
        this.userActed('close-setup');
    }
    /**
     * Whether a given step should be rendered on the UI.
     * @param stepName The name of the step (from the enum).
     */
    shouldShowStep_(stepName, setupSteps) {
        return setupSteps.hasOwnProperty(stepName);
    }
    /**
     * Whether a given step is active.
     * @param stepName The name of the step (from the enum).
     */
    stepIsActive_(stepName, setupSteps, currentStepIndex) {
        return currentStepIndex === setupSteps[stepName];
    }
    /**
     * Whether a given step is completed.
     * @param stepName The name of the step (from the enum).
     */
    stepIsCompleted_(stepName, setupSteps, currentStepIndex) {
        return currentStepIndex > setupSteps[stepName];
    }
}
customElements.define(DemoSetupScreen.is, DemoSetupScreen);
