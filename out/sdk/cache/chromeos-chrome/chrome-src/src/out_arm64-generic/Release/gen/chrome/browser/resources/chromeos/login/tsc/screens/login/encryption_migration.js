// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying encryption migration screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './encryption_migration.html.js';
/**
 * Enum for the UI states corresponding to sub steps inside migration screen.
 * These values must be kept in sync with
 * EncryptionMigrationScreenView::UIState in C++ code and the order of the
 * enum must be the same.
 */
var EncryptionMigrationUiState;
(function (EncryptionMigrationUiState) {
    EncryptionMigrationUiState["INITIAL"] = "initial";
    EncryptionMigrationUiState["READY"] = "ready";
    EncryptionMigrationUiState["MIGRATING"] = "migrating";
    EncryptionMigrationUiState["MIGRATION_FAILED"] = "migration-failed";
    EncryptionMigrationUiState["NOT_ENOUGH_SPACE"] = "not-enough-space";
})(EncryptionMigrationUiState || (EncryptionMigrationUiState = {}));
const EncryptionMigrationBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class EncryptionMigration extends EncryptionMigrationBase {
    static get is() {
        return 'encryption-migration-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Current migration progress in range [0, 1]. Negative value means that
             * the progress is unknown.
             */
            progress: {
                type: Number,
                value: -1,
            },
            /**
             * Whether the current migration is resuming the previous one.
             */
            isResuming: {
                type: Boolean,
                value: false,
            },
            /**
             * Battery level.
             */
            batteryPercent: {
                type: Number,
                value: 0,
            },
            /**
             * Necessary battery level to start migration in percent.
             */
            necessaryBatteryPercent: {
                type: Number,
                value: 0,
            },
            /**
             * True if the battery level is enough to start migration.
             */
            isEnoughBattery: {
                type: Boolean,
                value: true,
            },
            /**
             * True if the device is charging.
             */
            isCharging: {
                type: Boolean,
                value: false,
            },
            /**
             * True if the migration was skipped.
             */
            isSkipped: {
                type: Boolean,
                value: false,
            },
            /**
             * Formatted string of the current available space size.
             */
            availableSpaceInString: {
                type: String,
                value: '',
            },
            /**
             * Formatted string of the necessary space size for migration.
             */
            necessarySpaceInString: {
                type: String,
                value: '',
            },
        };
    }
    constructor() {
        super();
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    get UI_STEPS() {
        return EncryptionMigrationUiState;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return EncryptionMigrationUiState.INITIAL;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.MIGRATION;
    }
    get EXTERNAL_API() {
        return [
            'setUIState',
            'setMigrationProgress',
            'setIsResuming',
            'setBatteryState',
            'setNecessaryBatteryPercent',
            'setSpaceInfoInString',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('EncryptionMigrationScreen');
    }
    /**
     * Updates the migration screen by specifying a state which corresponds
     * to a sub step in the migration process.
     * @param state The UI state to identify a sub step in migration.
     */
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setUIState(state) {
        this.setUIStep(Object.values(EncryptionMigrationUiState)[state]);
    }
    /**
     * Updates the migration progress.
     * @param progress The progress of migration in range [0, 1].
     */
    setMigrationProgress(progress) {
        this.progress = progress;
    }
    /**
     * Updates the migration screen based on whether the migration process
     * is resuming the previous one.
     */
    setIsResuming(isResuming) {
        this.isResuming = isResuming;
    }
    /**
     * Updates battery level of the device.
     * @param batteryPercent Battery level in percent.
     * @param isEnoughBattery True if the battery is enough.
     * @param isCharging True if the device is connected to power.
     */
    setBatteryState(batteryPercent, isEnoughBattery, isCharging) {
        this.batteryPercent = Math.floor(batteryPercent);
        this.isEnoughBattery = isEnoughBattery;
        this.isCharging = isCharging;
    }
    /**
     * Update the necessary battery percent to start migration in the UI.
     * @param necessaryBatteryPercent Necessary battery level.
     */
    setNecessaryBatteryPercent(necessaryBatteryPercent) {
        this.necessaryBatteryPercent = necessaryBatteryPercent;
    }
    /**
     * Updates the string representation of available space size and necessary
     * space size.
     */
    setSpaceInfoInString(availableSpaceSize, necessarySpaceSize) {
        this.availableSpaceInString = availableSpaceSize;
        this.necessarySpaceInString = necessarySpaceSize;
    }
    /**
     * Returns true if the current migration progress is unknown.
     */
    isProgressIndeterminate(progress) {
        return progress < 0;
    }
    /**
     * Returns true if the 'Update' button should be disabled.
     */
    isUpdateDisabled(isEnoughBattery, isSkipped) {
        return !isEnoughBattery || isSkipped;
    }
    /**
     * Returns true if the 'Skip' button on the initial screen should be hidden.
     */
    isSkipHidden() {
        // TODO(fukino): Instead of checking the board name here to behave
        // differently, it's recommended to add a command-line flag to Chrome and
        // make session_manager pass it based on a feature-based USE flag which is
        // set in the appropriate board overlays.
        // https://goo.gl/BbBkzg.
        return this.i18n('migrationBoardName').startsWith('kevin');
    }
    /**
     * Computes the label shown under progress bar.
     */
    computeProgressLabel(locale, progress) {
        return this.i18nDynamic(locale, 'migrationProgressLabel', Math.floor(progress * 100).toString());
    }
    /**
     * Computes the warning label when battery level is not enough.
     */
    computeBatteryWarningLabel(locale, batteryPercent) {
        return this.i18nDynamic(locale, 'migrationBatteryWarningLabel', batteryPercent.toString());
    }
    /**
     * Computes the label to show the necessary battery level for migration.
     */
    computeNecessaryBatteryLevelLabel(locale, necessaryBatteryPercent) {
        return this.i18nDynamic(locale, 'migrationNecessaryBatteryLevelLabel', necessaryBatteryPercent.toString());
    }
    /**
     * Computes the label to show the current available space.
     */
    computeAvailableSpaceLabel(locale, availableSpaceInString) {
        return this.i18nDynamic(locale, 'migrationAvailableSpaceLabel', availableSpaceInString);
    }
    /**
     * Computes the label to show the necessary space to start migration.
     */
    computeNecessarySpaceLabel(locale, necessarySpaceInString) {
        return this.i18nDynamic(locale, 'migrationNecessarySpaceLabel', necessarySpaceInString);
    }
    /**
     * Handles click on UPGRADE button.
     */
    onUpgradeClicked() {
        this.userActed('startMigration');
    }
    /**
     * Handles click on SKIP button.
     */
    onSkipClicked() {
        this.isSkipped = true;
        this.userActed('skipMigration');
    }
    /**
     * Handles click on RESTART button.
     */
    onRestartOnLowStorageClicked() {
        this.userActed('requestRestartOnLowStorage');
    }
    /**
     * Handles click on RESTART button on the migration failure screen.
     */
    onRestartOnFailureClicked() {
        this.userActed('requestRestartOnFailure');
    }
    /**
     * Handles click on REPORT AN ISSUE button.
     */
    onReportAnIssueClicked() {
        this.userActed('openFeedbackDialog');
    }
}
customElements.define(EncryptionMigration.is, EncryptionMigration);
