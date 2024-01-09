// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for lacros data backward migration screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_slide.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './lacros_data_backward_migration.html.js';
var LacrosDataBackwardMigrationStep;
(function (LacrosDataBackwardMigrationStep) {
    LacrosDataBackwardMigrationStep["PROGRESS"] = "progress";
    LacrosDataBackwardMigrationStep["ERROR"] = "error";
})(LacrosDataBackwardMigrationStep || (LacrosDataBackwardMigrationStep = {}));
const LacrosDataBackwardMigrationScreenElementBase = mixinBehaviors([
    OobeDialogHostBehavior,
    OobeI18nBehavior,
    LoginScreenBehavior,
    MultiStepBehavior,
], PolymerElement);
export class LacrosDataBackwardMigrationScreen extends LacrosDataBackwardMigrationScreenElementBase {
    static get is() {
        return 'lacros-data-backward-migration-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            progressValue: {
                type: Number,
                value: 0,
            },
        };
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return LacrosDataBackwardMigrationStep.PROGRESS;
    }
    get UI_STEPS() {
        return LacrosDataBackwardMigrationStep;
    }
    get EXTERNAL_API() {
        return [
            'setProgressValue',
            'setFailureStatus',
        ];
    }
    /**
     * Called when the migration failed.
    */
    setFailureStatus() {
        this.setUIStep('error');
    }
    /**
     * Called to update the progress of data migration.
     * @param progress Percentage of data copied so far.
     */
    setProgressValue(progress) {
        this.progressValue = progress;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('LacrosDataBackwardMigrationScreen');
    }
    onCancelButtonClicked() {
        this.userActed('cancel');
    }
}
customElements.define(LacrosDataBackwardMigrationScreen.is, LacrosDataBackwardMigrationScreen);
