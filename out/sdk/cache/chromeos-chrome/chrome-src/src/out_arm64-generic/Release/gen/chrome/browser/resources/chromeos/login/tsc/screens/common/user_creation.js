// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Some of the properties and class names doesn't follow naming convention.
// Disable naming-convention checks.
/* eslint-disable @typescript-eslint/naming-convention */
import '//resources/ash/common/cr_elements/cros_color_overrides.css.js';
import '//resources/ash/common/cr_elements/cr_radio_button/cr_card_radio_button.js';
import '//resources/ash/common/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/hd_iron_icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/cr_card_radio_group_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { Oobe } from '../../cr_ui.js';
import { getTemplate } from './user_creation.html.js';
export const UserCreationScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * UI mode for the dialog.
 */
var UserCreationUIState;
(function (UserCreationUIState) {
    UserCreationUIState["CREATE"] = "create";
    UserCreationUIState["ENROLL_TRIAGE"] = "enroll-triage";
    UserCreationUIState["CHILD_SETUP"] = "child-setup";
})(UserCreationUIState || (UserCreationUIState = {}));
/**
 * User type for setting up the device.
 */
var UserCreationUserType;
(function (UserCreationUserType) {
    UserCreationUserType["SELF"] = "self";
    UserCreationUserType["CHILD"] = "child";
    UserCreationUserType["ENROLL"] = "enroll";
})(UserCreationUserType || (UserCreationUserType = {}));
/**
 * Enroll triage method for setting up the device.
 */
var EnrollTriageMethod;
(function (EnrollTriageMethod) {
    EnrollTriageMethod["ENROLL"] = "enroll";
    EnrollTriageMethod["SIGNIN"] = "signin";
})(EnrollTriageMethod || (EnrollTriageMethod = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["SIGNIN"] = "signin";
    UserAction["SIGNIN_TRIAGE"] = "signin-triage";
    UserAction["SIGNIN_SCHOOL"] = "signin-school";
    UserAction["ADD_CHILD"] = "add-child";
    UserAction["ENROLL"] = "enroll";
    UserAction["TRIAGE"] = "triage";
    UserAction["CHILD_SETUP"] = "child-setup";
    UserAction["CANCEL"] = "cancel";
})(UserAction || (UserAction = {}));
/**
 * Enroll triage method for setting up the device.
 */
var ChildSetupMethod;
(function (ChildSetupMethod) {
    ChildSetupMethod["CHILD_ACCOUNT"] = "child-account";
    ChildSetupMethod["SCHOOL_ACCOUNT"] = "school-account";
})(ChildSetupMethod || (ChildSetupMethod = {}));
export class UserCreation extends UserCreationScreenElementBase {
    static get is() {
        return 'user-creation-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The currently selected user type.
             */
            selectedUserType: {
                type: String,
            },
            /**
             * The currently selected sign in method.
             */
            selectedEnrollTriageMethod: {
                type: String,
            },
            /**
             * The currently selected child setup method.
             */
            selectedChildSetupMethod: {
                type: String,
            },
            /**
             * Is the back button visible on the first step of the screen. Back button
             * is visible iff we are in the add person flow.
             */
            isBackButtonVisible_: {
                type: Boolean,
            },
            titleKey_: {
                type: String,
            },
            subtitleKey_: {
                type: String,
            },
            /**
             * Whether software updaate feature is enabled.
             */
            isOobeSoftwareUpdateEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isOobeSoftwareUpdateEnabled');
                },
                readOnly: true,
            },
            /**
             * Indicates if all OOBE screens have been loaded, so that it's safe to
             * enable the Next and Back buttons.
             */
            isOobeLoaded_: Boolean,
        };
    }
    constructor() {
        super();
        if (this.isOobeSoftwareUpdateEnabled_) {
            this.selectedUserType = '';
            this.titleKey_ = 'userCreationUpdatedTitle';
            this.subtitleKey_ = 'userCreationUpdatedSubtitle';
        }
        else {
            this.titleKey_ = 'userCreationTitle';
            this.subtitleKey_ = 'userCreationSubtitle';
            this.selectedUserType = UserCreationUserType.SELF;
        }
        this.selectedEnrollTriageMethod = '';
        this.selectedChildSetupMethod = '';
        this.isBackButtonVisible_ = false;
    }
    get EXTERNAL_API() {
        return [
            'setIsBackButtonVisible',
            'setTriageStep',
            'setChildSetupStep',
        ];
    }
    defaultUIStep() {
        return UserCreationUIState.CREATE;
    }
    get UI_STEPS() {
        return UserCreationUIState;
    }
    onBeforeShow() {
        if (this.isOobeSoftwareUpdateEnabled_) {
            this.restoreOobeUIState();
            this.selectedUserType = '';
            if (!loadTimeData.getBoolean('isOobeFlow')) {
                this.titleKey_ = 'userCreationAddPersonUpdatedTitle';
                this.subtitleKey_ = 'userCreationAddPersonUpdatedSubtitle';
            }
            else {
                this.titleKey_ = 'userCreationUpdatedTitle';
                this.subtitleKey_ = 'userCreationUpdatedSubtitle';
            }
            this.selectedEnrollTriageMethod = '';
            this.selectedChildSetupMethod = '';
            return;
        }
        this.selectedUserType = UserCreationUserType.SELF;
        if (!loadTimeData.getBoolean('isOobeFlow')) {
            this.titleKey_ = 'userCreationAddPersonTitle';
            this.subtitleKey_ = 'userCreationAddPersonSubtitle';
        }
        else {
            this.titleKey_ = 'userCreationTitle';
            this.subtitleKey_ = 'userCreationSubtitle';
        }
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('UserCreationScreen');
        if (loadTimeData.getBoolean('isOobeLazyLoadingEnabled')) {
            // The UserCreation screen is a priority screen, so it becomes visible
            // before the remaining of the OOBE flow is fully loaded. 'Back' and
            // 'Next' buttons are initially disabled, and enabled upon receiving the
            //|oobe-screens-loaded| event.
            this.isOobeLoaded_ = false;
            document.addEventListener('oobe-screens-loaded', () => {
                this.isOobeLoaded_ = true;
            }, { once: true });
        }
        else {
            this.isOobeLoaded_ = true;
        }
    }
    getOobeUIInitialState() {
        return OOBE_UI_STATE.USER_CREATION;
    }
    // this will allows to restore the oobe UI state
    // ex: click for child -> choose google account -> AddChild Screen is shown
    // clicking back will display user creation screen with child setup step
    // and we need to restore the oobe ui state.
    restoreOobeUIState() {
        if (this.uiStep === UserCreationUIState.ENROLL_TRIAGE) {
            Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.ENROLL_TRIAGE);
        }
        if (this.uiStep === UserCreationUIState.CREATE) {
            Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.USER_CREATION);
        }
        if (this.uiStep === UserCreationUIState.CHILD_SETUP) {
            Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.SETUP_CHILD);
        }
    }
    setIsBackButtonVisible(isVisible) {
        this.isBackButtonVisible_ = isVisible;
    }
    cancel() {
        if (this.isBackButtonVisible_) {
            this.onBackClicked_();
        }
    }
    onBackClicked_() {
        if (this.uiStep === UserCreationUIState.ENROLL_TRIAGE ||
            this.uiStep === UserCreationUIState.CHILD_SETUP) {
            this.setUIStep(UserCreationUIState.CREATE);
            this.selectedUserType = '';
            Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.USER_CREATION);
        }
        else {
            this.userActed(UserAction.CANCEL);
        }
    }
    isNextButtonEnabled_(selection, isOobeLoaded) {
        return selection !== '' && isOobeLoaded;
    }
    onNextClicked_() {
        if (this.uiStep === UserCreationUIState.CREATE) {
            if (this.selectedUserType === UserCreationUserType.SELF) {
                this.userActed(UserAction.SIGNIN);
            }
            else if (this.selectedUserType === UserCreationUserType.CHILD) {
                if (this.isOobeSoftwareUpdateEnabled_) {
                    this.userActed(UserAction.CHILD_SETUP);
                }
                else {
                    this.userActed(UserAction.ADD_CHILD);
                }
            }
            else if (this.selectedUserType === UserCreationUserType.ENROLL) {
                this.userActed(UserAction.TRIAGE);
            }
        }
    }
    onLearnMoreClicked_() {
        this.$.learnMoreDialog.showDialog();
    }
    focusLearnMoreLink_() {
        this.$.learnMoreLink.focus();
    }
    setTriageStep() {
        Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.ENROLL_TRIAGE);
        this.setUIStep(UserCreationUIState.ENROLL_TRIAGE);
    }
    setChildSetupStep() {
        this.setUIStep(UserCreationUIState.CHILD_SETUP);
        Oobe.getInstance().setOobeUIState(OOBE_UI_STATE.SETUP_CHILD);
    }
    onTriageNextClicked_() {
        if (this.selectedEnrollTriageMethod === EnrollTriageMethod.ENROLL) {
            this.userActed(UserAction.ENROLL);
        }
        else if (this.selectedEnrollTriageMethod === EnrollTriageMethod.SIGNIN) {
            this.userActed(UserAction.SIGNIN_TRIAGE);
        }
    }
    onChildSetupNextClicked_() {
        if (this.selectedChildSetupMethod === ChildSetupMethod.CHILD_ACCOUNT) {
            this.userActed(UserAction.ADD_CHILD);
        }
        else if (this.selectedChildSetupMethod === ChildSetupMethod.SCHOOL_ACCOUNT) {
            this.userActed(UserAction.SIGNIN_SCHOOL);
        }
    }
    getPersonalCardLabel_(locale) {
        if (this.isOobeSoftwareUpdateEnabled_) {
            return this.i18nDynamic(locale, 'userCreationPersonalButtonTitle');
        }
        return this.i18nDynamic(locale, 'createForSelfLabel');
    }
    getPersonalCardText_(locale) {
        if (this.isOobeSoftwareUpdateEnabled_) {
            return this.i18nDynamic(locale, 'userCreationPersonalButtonDescription');
        }
        return this.i18nDynamic(locale, 'createForSelfDescription');
    }
    getChildCardLabel_(locale) {
        if (this.isOobeSoftwareUpdateEnabled_) {
            return this.i18nDynamic(locale, 'userCreationChildButtonTitle');
        }
        return this.i18nDynamic(locale, 'createForChildLabel');
    }
    getChildCardText_(locale) {
        if (this.isOobeSoftwareUpdateEnabled_) {
            return this.i18nDynamic(locale, 'userCreationChildButtonDescription');
        }
        return this.i18nDynamic(locale, 'createForChildDescription');
    }
}
customElements.define(UserCreation.is, UserCreation);
