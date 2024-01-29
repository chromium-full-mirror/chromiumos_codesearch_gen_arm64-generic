// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for ARCVM /data migration screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_icons.html.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './arc_vm_data_migration.html.js';
// Keep in sync with ArcVmDataMigrationScreenView::UIState.
var ArcVmDataMigrationUiState;
(function (ArcVmDataMigrationUiState) {
    ArcVmDataMigrationUiState["LOADING"] = "loading";
    ArcVmDataMigrationUiState["WELCOME"] = "welcome";
    ArcVmDataMigrationUiState["RESUM"] = "resume";
    ArcVmDataMigrationUiState["PROGRESS"] = "progress";
    ArcVmDataMigrationUiState["SUCCESS"] = "success";
    ArcVmDataMigrationUiState["FAILURE"] = "failure";
})(ArcVmDataMigrationUiState || (ArcVmDataMigrationUiState = {}));
// Keep in sync with kUserAction* in arc_vm_data_migration_screen.cc.
var ArcVmDataMigrationUserAction;
(function (ArcVmDataMigrationUserAction) {
    ArcVmDataMigrationUserAction["SKIP"] = "skip";
    ArcVmDataMigrationUserAction["UPDATE"] = "update";
    ArcVmDataMigrationUserAction["RESUME"] = "resume";
    ArcVmDataMigrationUserAction["FINISH"] = "finish";
    ArcVmDataMigrationUserAction["REPORT"] = "report";
})(ArcVmDataMigrationUserAction || (ArcVmDataMigrationUserAction = {}));
const ArcVmDataMigrationScreenElementBase = mixinBehaviors([
    OobeDialogHostBehavior,
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class ArcVmDataMigrationScreen extends ArcVmDataMigrationScreenElementBase {
    static get is() {
        return 'arc-vm-data-migration-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hasEnoughFreeDiskSpace: {
                type: Boolean,
                value: true,
            },
            requiredFreeDiskSpaceInString: {
                type: String,
                value: '',
            },
            minimumBatteryPercent: {
                type: Number,
                value: 0,
            },
            hasEnoughBattery: {
                type: Boolean,
                value: true,
            },
            isConnectedToCharger: {
                type: Boolean,
                value: true,
            },
            migrationProgress: {
                type: Number,
                value: -1,
            },
            estimatedRemainingTimeInString: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return ArcVmDataMigrationUiState.LOADING;
    }
    get UI_STEPS() {
        return ArcVmDataMigrationUiState;
    }
    get EXTERNAL_API() {
        return [
            'setUIState',
            'setRequiredFreeDiskSpace',
            'setMinimumBatteryPercent',
            'setBatteryState',
            'setMigrationProgress',
            'setEstimatedRemainingTime',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ArcVmDataMigrationScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.MIGRATION;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setUIState(state) {
        this.setUIStep(Object.values(ArcVmDataMigrationUiState)[state]);
    }
    setRequiredFreeDiskSpace(requiredFreeDiskSpaceInString) {
        this.hasEnoughFreeDiskSpace = false;
        this.requiredFreeDiskSpaceInString = requiredFreeDiskSpaceInString;
    }
    setMinimumBatteryPercent(minimumBatteryPercent) {
        this.minimumBatteryPercent = Math.floor(minimumBatteryPercent);
    }
    setBatteryState(hasEnoughBattery, isConnectedToCharger) {
        this.hasEnoughBattery = hasEnoughBattery;
        this.isConnectedToCharger = isConnectedToCharger;
    }
    setMigrationProgress(migrationProgress) {
        this.migrationProgress = Math.floor(migrationProgress);
    }
    setEstimatedRemainingTime(estimatedRemainingTimeInString) {
        this.estimatedRemainingTimeInString = estimatedRemainingTimeInString;
    }
    shouldDisableUpdateButton(hasEnoughFreeDiskSpace, hasEnoughBattery) {
        return !hasEnoughFreeDiskSpace || !hasEnoughBattery;
    }
    isProgressIndeterminate(migrationProgress) {
        return migrationProgress < 0;
    }
    onSkipButtonClicked() {
        this.userActed(ArcVmDataMigrationUserAction.SKIP);
    }
    onUpdateButtonClicked() {
        this.userActed(ArcVmDataMigrationUserAction.UPDATE);
    }
    onResumeButtonClicked() {
        this.userActed(ArcVmDataMigrationUserAction.RESUME);
    }
    onFinishButtonClicked() {
        this.userActed(ArcVmDataMigrationUserAction.FINISH);
    }
    onReportButtonClicked() {
        this.userActed(ArcVmDataMigrationUserAction.REPORT);
    }
}
customElements.define(ArcVmDataMigrationScreen.is, ArcVmDataMigrationScreen);
