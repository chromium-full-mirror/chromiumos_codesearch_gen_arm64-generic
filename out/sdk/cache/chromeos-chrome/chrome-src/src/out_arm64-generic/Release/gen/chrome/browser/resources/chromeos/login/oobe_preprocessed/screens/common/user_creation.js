// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_radio_button/cr_card_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
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

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import {loadTimeData} from 'chrome://resources/js/load_time_data.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeModalDialog} from '../../components/dialogs/oobe_modal_dialog.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';
import {Oobe} from '../../cr_ui.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const UserCreationScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * UI mode for the dialog.
 * @enum {string}
 */
const UserCreationUIState = {
  CREATE: 'create',
  ENROLL_TRIAGE: 'enroll-triage',
  CHILD_SETUP: 'child-setup',
};

/**
 * User type for setting up the device.
 * @enum {string}
 */
const UserCreationUserType = {
  SELF: 'self',
  CHILD: 'child',
  ENROLL: 'enroll',
};

/**
 * Enroll triage method for setting up the device.
 * @enum {string}
 */
const EnrollTriageMethod = {
  ENROLL: 'enroll',
  SIGNIN: 'signin',
};

/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  SIGNIN: 'signin',
  SIGNIN_TRIAGE: 'signin-triage',
  SIGNIN_SCHOOL: 'signin-school',
  ADD_CHILD: 'add-child',
  ENROLL: 'enroll',
  TRIAGE: 'triage',
  CHILD_SETUP: 'child-setup',
  CANCEL: 'cancel',
};

/**
 * Enroll triage method for setting up the device.
 * @enum {string}
 */
const ChildSetupMethod = {
  CHILD_ACCOUNT: 'child-account',
  SCHOOL_ACCOUNT: 'school-account',
};

/**
 * @polymer
 */
class UserCreation extends UserCreationScreenElementBase {
  static get is() {
    return 'user-creation-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cr-card-radio-group-styles
    cros-color-overrides">
  @media screen and (max-width: 920px) {
  :host {
      --radio-button-height: 155px;
    }
  }

  #enroll-description{
    margin-top: 10px;
  }

  .title{
    font-weight: bold;
    margin-top: 10px;
  }

  #learnMoreDialog p {
    margin-bottom: 10px;
  }

</style>
<oobe-adaptive-dialog id="userCreationDialog"
    for-step="create"
    role="dialog"
    aria-label$="[[i18nDynamic(locale, titleKey_)]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, titleKey_)]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, subtitleKey_)]]
  </div>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <cr-radio-group id="userType" selected="{{selectedUserType}}">
      <cr-card-radio-button id="selfButton" class="flex" name="self">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:avatar"
              icon2x="oobe-96:avatar">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[getPersonalCardLabel_(locale)]]
            </div>
            <div class="card-text">
              [[getPersonalCardText_(locale)]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="childButton" class="flex" name="child">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:child-user"
            icon2x="oobe-96:child-user">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[getChildCardLabel_(locale)]]
            </div>
            <div class="card-text">
              [[getChildCardText_(locale)]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="enrollButton"
          hidden="[[!isOobeSoftwareUpdateEnabled_]]"
          class="flex" name="enroll">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:add-work"
            icon2x="oobe-96:add-work">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'userCreationEnrollButtonTitle')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale, 'userCreationEnrollButtonDescription')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
    </cr-radio-group>
    </div>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton" on-click="onBackClicked_"
        hidden="[[!isBackButtonVisible_]]" disabled="[[!isOobeLoaded_]]">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton"
        class="focus-on-show" on-click="onNextClicked_"
        disabled="[[!isNextButtonEnabled_(selectedUserType, isOobeLoaded_)]]">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="enrollTriageDialog"
    role="dialog"
    for-step="enroll-triage"
    aria-label$="[[i18nDynamic(locale, 'userCreationEnrollTriageTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:work"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'userCreationEnrollTriageTitle')]]
  </h1>
  <div slot="subtitle">
    <div>
      [[i18nDynamic(locale, 'userCreationEnrollTriageSubtitle')]]
      <a id="learnMoreLink" class="oobe-local-link"
          aria-label$="[[i18nDynamic(locale, 'userCreationLearnMoreAria')]]"
          on-click="onLearnMoreClicked_" is="action-link">
        [[i18nDynamic(locale, 'userCreationEnrollLearnMore')]]
      </a>
    </div>
    <div id="enroll-description">
      <span class="title">
        [[i18nDynamic(locale, 'userCreationEnrollTriageDescriptionTitle')]]
      </span>
      <span>
        [[i18nDynamic(locale, 'userCreationEnrollTriageDescription')]]
      </span>
    </div>
  </div>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <cr-radio-group id="enrollTriageMethod"
        selected="{{selectedEnrollTriageMethod}}">
      <cr-card-radio-button id="triageEnrollButton" name="enroll"
          class="flex">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:managed"
              icon2x="oobe-96:managed">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale,
                  'userCreationEnrollTriageAcceptEnrollButtonLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="triageNotEnrollButton" name="signin"
          class="flex">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:avatar"
              icon2x="oobe-96:avatar">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale,
                  'userCreationEnrollTriageDeclineEnrollButtonLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
    </cr-radio-group>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="enrollTriageBackButton" on-click="onBackClicked_"
        disabled="[[!isOobeLoaded_]]">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="enrollTriageNextButton"
        on-click="onTriageNextClicked_"
        disabled="[[!isNextButtonEnabled_(selectedEnrollTriageMethod,
            isOobeLoaded_)]]">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="childSetupDialog"
    role="dialog"
    for-step="child-setup"
    aria-label$="[[i18nDynamic(locale, 'userCreationChildSetupTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'userCreationChildSetupTitle')]]
  </h1>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <cr-radio-group id="childSetupMethod"
        selected="{{selectedChildSetupMethod}}">
      <cr-card-radio-button id="childAccountButton" name="child-account"
          class="flex">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:child-account"
              icon2x="oobe-96:child-account">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale,
                  'userCreationChildSetupChildAccountButtonText')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale,
                  'userCreationChildSetupChildAccountButtonLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="schoolAccountButton" name="school-account"
          class="flex">
        <div class="card-container">
          <hd-iron-icon class="card-icon" icon1x="oobe-48:school-account"
              icon2x="oobe-96:school-account">
          </hd-iron-icon>
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale,
                  'userCreationChildSetupSchoolAccountButtonText')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale,
                  'userCreationChildSetupSchoolAccountButtonLabel')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
    </cr-radio-group>
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="childSetupBackButton" on-click="onBackClicked_"
        disabled="[[!isOobeLoaded_]]">
    </oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="childSetupNextButton"
        on-click="onChildSetupNextClicked_"
        disabled="[[!isNextButtonEnabled_(selectedChildSetupMethod,
            isOobeLoaded_)]]">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-modal-dialog id="learnMoreDialog" on-close="focusLearnMoreLink_"
    title-key="userCreationEnrollLearnMoreTitle">
  <span slot="content"
    inner-h-t-m-l="[[i18nAdvancedDynamic(
      locale, 'userCreationEnrollLearnMoreText')]]">
  </span>
</oobe-modal-dialog>
<!--_html_template_end_-->`;
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
       * @private
       */
      isBackButtonVisible_: {
        type: Boolean,
      },

      /** @private */
      titleKey_: {
        type: String,
      },

      /** @private */
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
      },

      /**
       * Indicates if all OOBE screens have been loaded, so that it's safe to
       * enable the Next and Back buttons.
       */
      isOobeLoaded_: {
        type: Boolean,
      },
    };
  }

  constructor() {
    super();
    if (this.isOobeSoftwareUpdateEnabled_) {
      this.selectedUserType = '';
      this.titleKey_ = 'userCreationUpdatedTitle';
      this.subtitleKey_ = 'userCreationUpdatedSubtitle';
    } else {
      this.titleKey_ = 'userCreationTitle';
      this.subtitleKey_ = 'userCreationSubtitle';
      this.selectedUserType = UserCreationUserType.SELF;
    }
    this.selectedEnrollTriageMethod = '';
    this.selectedChildSetupMethod = '';
    this.isBackButtonVisible_ = false;
  }

  /** @override */
  get EXTERNAL_API() {
    return [
      'setIsBackButtonVisible',
      'setTriageStep',
      'setChildSetupStep',
    ];
  }

  /** @override */
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
      } else {
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
    } else {
      this.titleKey_ = 'userCreationTitle';
      this.subtitleKey_ = 'userCreationSubtitle';
    }
  }

  /** @override */
  ready() {
    super.ready();

    if (loadTimeData.getBoolean('isOobeLazyLoadingEnabled')) {
      // The UserCreation screen is a priority screen, so it becomes visible
      // before the remaining of the OOBE flow is fully loaded. 'Back' and
      // 'Next' buttons are initially disabled, and enabled upon receiving the
      //|oobe-screens-loaded| event.
      this.isOobeLoaded_ = false;
      document.addEventListener('oobe-screens-loaded', () => {
        this.isOobeLoaded_ = true;
      }, {once: true});
    } else {
      this.isOobeLoaded_ = true;
    }

    this.initializeLoginScreen('UserCreationScreen');
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
    } else {
      this.userActed(UserAction.CANCEL);
    }
  }

  isNextButtonEnabled_(selection, isOobeLoaded) {
    return selection && isOobeLoaded;
  }

  onNextClicked_() {
    if (this.uiStep === UserCreationUIState.CREATE) {
      if (this.selectedUserType === UserCreationUserType.SELF) {
        this.userActed(UserAction.SIGNIN);
      } else if (this.selectedUserType === UserCreationUserType.CHILD) {
        if (this.isOobeSoftwareUpdateEnabled_) {
          this.userActed(UserAction.CHILD_SETUP);
        } else {
          this.userActed(UserAction.ADD_CHILD);
        }
      } else if (this.selectedUserType === UserCreationUserType.ENROLL) {
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
    } else if (this.selectedEnrollTriageMethod === EnrollTriageMethod.SIGNIN) {
      this.userActed(UserAction.SIGNIN_TRIAGE);
    }
  }

  onChildSetupNextClicked_() {
    if (this.selectedChildSetupMethod === ChildSetupMethod.CHILD_ACCOUNT) {
      this.userActed(UserAction.ADD_CHILD);
    } else if (
        this.selectedChildSetupMethod === ChildSetupMethod.SCHOOL_ACCOUNT) {
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
