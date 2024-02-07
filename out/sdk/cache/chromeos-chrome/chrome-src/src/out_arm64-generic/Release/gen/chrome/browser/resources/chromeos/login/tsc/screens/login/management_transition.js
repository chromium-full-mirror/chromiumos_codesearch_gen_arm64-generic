// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design management
 * transition screen.
 */
import '//resources/ash/common/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './management_transition.html.js';
var ManagementTransitionUiState;
(function (ManagementTransitionUiState) {
    ManagementTransitionUiState["PROGRESS"] = "progress";
    ManagementTransitionUiState["ERROR"] = "error";
})(ManagementTransitionUiState || (ManagementTransitionUiState = {}));
/**
 * Possible transition types. Must be in the same order as
 * ArcSupervisionTransition enum values.
 */
var ArcSupervisionTransition;
(function (ArcSupervisionTransition) {
    ArcSupervisionTransition[ArcSupervisionTransition["NO_TRANSITION"] = 0] = "NO_TRANSITION";
    ArcSupervisionTransition[ArcSupervisionTransition["CHILD_TO_REGULAR"] = 1] = "CHILD_TO_REGULAR";
    ArcSupervisionTransition[ArcSupervisionTransition["REGULAR_TO_CHILD"] = 2] = "REGULAR_TO_CHILD";
    ArcSupervisionTransition[ArcSupervisionTransition["UNMANAGED_TO_MANAGED"] = 3] = "UNMANAGED_TO_MANAGED";
})(ArcSupervisionTransition || (ArcSupervisionTransition = {}));
const ManagementTransitionScreenBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
class ManagementTransitionScreen extends ManagementTransitionScreenBase {
    static get is() {
        return 'management-transition-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Property that determines transition direction.
             */
            arcTransition: {
                type: Number,
                value: ArcSupervisionTransition.NO_TRANSITION,
            },
            /**
             * String that represents management entity for the user. Can be domain or
             * admin name.
             */
            managementEntity: {
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
        return ManagementTransitionUiState.PROGRESS;
    }
    get UI_STEPS() {
        return ManagementTransitionUiState;
    }
    get EXTERNAL_API() {
        return ['showStep'];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ManagementTransitionScreen');
    }
    onBeforeShow(data) {
        this.setArcTransition(data['arcTransition']);
        this.setManagementEntity(data['managementEntity']);
    }
    /**
     * Switches between different steps.
     * @param step the steps to show
     */
    showStep(step) {
        this.setUIStep(step);
    }
    /**
     * Sets arc transition type.
     * @param arc_transition enum element indicating
     *     transition type
     */
    setArcTransition(arcTransition) {
        switch (arcTransition) {
            case ArcSupervisionTransition.CHILD_TO_REGULAR:
            case ArcSupervisionTransition.REGULAR_TO_CHILD:
            case ArcSupervisionTransition.UNMANAGED_TO_MANAGED:
                this.arcTransition = arcTransition;
                break;
            case ArcSupervisionTransition.NO_TRANSITION:
                console.error('Screen should not appear for ' +
                    'ARC_SUPERIVISION_TRANSITION.NO_TRANSITION');
                break;
            default:
                console.error('Not handled transition type: ' + arcTransition);
        }
    }
    setManagementEntity(managementEntity) {
        this.managementEntity = managementEntity;
    }
    getDialogTitle(locale, arcTransition, managementEntity) {
        switch (arcTransition) {
            case ArcSupervisionTransition.CHILD_TO_REGULAR:
                return this.i18nDynamic(locale, 'removingSupervisionTitle');
            case ArcSupervisionTransition.REGULAR_TO_CHILD:
                return this.i18nDynamic(locale, 'addingSupervisionTitle');
            case ArcSupervisionTransition.UNMANAGED_TO_MANAGED:
                if (managementEntity) {
                    return this.i18nDynamic(locale, 'addingManagementTitle', managementEntity);
                }
                else {
                    return this.i18nDynamic(locale, 'addingManagementTitleUnknownAdmin');
                }
        }
        return '';
    }
    isChildTransition(arcTransition) {
        return arcTransition != ArcSupervisionTransition.UNMANAGED_TO_MANAGED;
    }
    /**
     * On-tap event handler for OK button.
     */
    onAcceptAndContinue() {
        this.userActed(['finish-management-transition']);
    }
}
customElements.define(ManagementTransitionScreen.is, ManagementTransitionScreen);
