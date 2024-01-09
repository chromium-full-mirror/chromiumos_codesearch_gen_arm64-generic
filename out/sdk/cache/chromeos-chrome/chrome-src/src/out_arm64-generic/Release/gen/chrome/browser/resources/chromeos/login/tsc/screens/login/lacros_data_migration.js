// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for lacros data migration screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_slide.js';
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './lacros_data_migration.html.js';
var LacrosDataMigrationStep;
(function (LacrosDataMigrationStep) {
    LacrosDataMigrationStep["PROGRESS"] = "progress";
    LacrosDataMigrationStep["ERROR"] = "error";
})(LacrosDataMigrationStep || (LacrosDataMigrationStep = {}));
const LacrosDataMigrationScreenElementBase = mixinBehaviors([
    OobeDialogHostBehavior,
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class LacrosDataMigrationScreen extends LacrosDataMigrationScreenElementBase {
    static get is() {
        return 'lacros-data-migration-element';
    }
    static get template() {
        return getTemplate();
    }
    constructor() {
        super();
    }
    static get properties() {
        return {
            progressValue: {
                type: Number,
                value: 0,
            },
            canSkip: {
                type: Boolean,
                value: false,
            },
            lowBatteryStatus: {
                type: Boolean,
                value: false,
            },
            requiredSizeStr: {
                type: String,
                value: '',
            },
            showGotoFiles: {
                type: Boolean,
                value: false,
            },
        };
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return LacrosDataMigrationStep.PROGRESS;
    }
    get UI_STEPS() {
        return LacrosDataMigrationStep;
    }
    get EXTERNAL_API() {
        return [
            'setProgressValue',
            'showSkipButton',
            'setLowBatteryStatus',
            'setFailureStatus',
        ];
    }
    /**
     * Called when the migration failed.
     * @param requiredSizeStr The extra space that users need to free up
     *     to run the migration formatted into a string. Maybe empty, if the
     *     failure is not caused by low disk space.
     * @param showGotoFiles If true, displays the "goto files" button.
     */
    setFailureStatus(requiredSizeStr, showGotoFiles) {
        this.requiredSizeStr = requiredSizeStr;
        this.showGotoFiles = showGotoFiles;
        this.setUIStep(LacrosDataMigrationStep.ERROR);
    }
    /**
     * Called to update the progress of data migration.
     * @param progress Percentage of data copied so far.
     */
    setProgressValue(progress) {
        this.progressValue = progress;
    }
    /**
     * Called to make the skip button visible.
     */
    showSkipButton() {
        this.canSkip = true;
    }
    /**
     * Called on updating low battery status.
     * @param status Whether or not low-battery UI should
     *   show. Specifically, if battery is low and no charger is connected.
     */
    setLowBatteryStatus(status) {
        this.lowBatteryStatus = status;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('LacrosDataMigrationScreen');
    }
    onSkipButtonClicked() {
        assert(this.canSkip);
        this.userActed('skip');
    }
    onCancelButtonClicked() {
        this.userActed('cancel');
    }
    onGotoFilesButtonClicked() {
        this.userActed('gotoFiles');
    }
}
customElements.define(LacrosDataMigrationScreen.is, LacrosDataMigrationScreen);
