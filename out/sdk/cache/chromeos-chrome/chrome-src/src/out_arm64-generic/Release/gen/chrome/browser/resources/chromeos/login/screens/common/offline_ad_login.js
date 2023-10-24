// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying AD domain joining and AD
 * Authenticate user screens.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/cr_elements/icons.html.js';
import '//resources/cr_elements/md_select.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {I18nBehavior} from '//resources/ash/common/i18n_behavior.js';
import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';
import {OobeA11yOption} from '../../components/oobe_a11y_option.js';
import {getSelectedTitle, getSelectedValue, SelectListType, setupSelect} from '../../components/oobe_select.js';


// The definitions below (JoinConfigType, ActiveDirectoryErrorState) are
// used in enterprise_enrollment.js as well.

/**
 * @typedef {{name: string, ad_username: ?string, ad_password: ?string,
 *             computer_ou: ?string, encryption_types: ?string,
 *             computer_name_validation_regex: ?string}}
 */
export var JoinConfigType;

// Possible error states of the screen. Must be in the same order as
// ActiveDirectoryErrorState enum values. Used in enterprise_enrollment
/**
 * @enum {number}
 */
export const ActiveDirectoryErrorState = {
  NONE: 0,
  MACHINE_NAME_INVALID: 1,
  MACHINE_NAME_TOO_LONG: 2,
  BAD_USERNAME: 3,
  BAD_AUTH_PASSWORD: 4,
  BAD_UNLOCK_PASSWORD: 5,
};

// Used by enterprise_enrollment.js
export const ADLoginStep = {
  UNLOCK: 'unlock',
  CREDS: 'creds',
};

const DEFAULT_ENCRYPTION_TYPES = 'strong';

/**
 * @typedef {Iterable<{value: string, title: string, selected: boolean,
 *                      subtitle: string}>}
 */
var EncryptionSelectListType;

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const OfflineAdLoginBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   marketingOptInOverviewDialog:  OobeAdaptiveDialog,
 *   chromebookUpdatesOption:  CrToggleElement,
 *   a11yNavButtonToggle:  OobeA11yOption,
 * }}
 */
OfflineAdLoginBase.$;

/**
 * @polymer
 */
class OfflineAdLogin extends OfflineAdLoginBase {
  static get is() {
    return 'offline-ad-login-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2016 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.

Offline UI for the AD Domain joining and User authentication.

Example:
    <offline-ad-login-element show-machine-input> </offline-ad-login-element>

Attributes:
  'isDomainJoin' - Whether the screen is for domain join. For the join it
                    contains some specific elements (e.g. machine name input).
  'realm' - The AD realm the device is managed by.
  'userRealm' - Autocomplete realm for the user input.
  'disabled' - Whether the UI disabled. Could be used to disable the UI
                during blocking IO operations.
  'adWelcomeMessageKey' - ID of localized welcome message on top of the UI.

Events:
  'authCompletedAd' - Fired when user enters login and password. Fires with an
                    argument |credentials| which contains:
                    |credentials| = { 'machineName': <machine name input>,
                                      'distinguished_name': <orgUnitInput>,
                                      (e.g. "OU=Computers,DC=example,DC=com")
                                      'encryption_types': Number value of
                                      chosen encryption types
                                      'username': <username> (UPN),
                                      'password': <typed password> }
  'unlockPasswordEntered' - Fired when user enters password to unlock
                            configuration. Argument
                            {'unlock_password': <password>}
Methods:
  'focus' - Focuses current input (user input or password input).
  'setUserMachine' - Accepts arguments |user| and |machineName|. Both are
                      optional. If user passed, the password input would be
                      invalidated.
-->
<style include="md-select oobe-dialog-host-styles cros-color-overrides">
  .select-title {
    color: var(--cros-menu-label-color);
    font-size: var(--oobe-offline-ad-login-select-title-font-size);
    line-height: var(--subtitle-line-height);
    padding-inline-end: 16px;
  }

  :host-context(.jelly-enabled) .select-title {
    color: var(--oobe-text-color);
  }

  .encryption-subtitle {
    color: var(--cros-text-color-secondary);
    padding-bottom: 9px;
    padding-top: 9px;
  }

  :host-context(.jelly-enabled) .encryption-subtitle {
    color: var(--oobe-subheader-text-color);
  }

  .encryption-select-row {
    padding-bottom: 24px;
  }

  iron-icon[icon='cr:warning'] {
    color: var(--cros-illustration-color-3);
    margin-bottom: 0;
    margin-inline-end: 15px;
    margin-inline-start: 0;
    margin-top: 0;
  }

  :host-context(.jelly-enabled) iron-icon[icon='cr:warning'] {
    color: var(--cros-sys-warning);
  }

  .select-divider-line {
    border-bottom: 1px solid var(--cros-sys-separator);
    display: block;
    margin-inline-end: 0;
    margin-inline-start: 0;
    position: relative;
  }

  .top-line {
    margin-bottom: 8px;
  }

  .bottom-line {
    margin-bottom: 26px;
    margin-top: 8px;
  }

  .md-select {
    height: 32px;
    width: 240px;
  }

  #moreOptionsDlg {
    --cr-input-error-display: none;
  }

  #orgUnitInput {
    padding-bottom: 28px;
  }

  :host-context(.jelly-enabled)
    cr-input#unlockPasswordInput,
    cr-input#machineNameInput,
    cr-input#userInput,
    cr-input#passwordInput,
    cr-input#orgUnitInput {
      --cr-input-background-color: var(--cros-sys-input_field_on_shaded);
  }

  :host-context(.jelly-enabled)
    select#joinConfigSelect,
    select#encryptionList {
      --md-select-bg-color: var(--cros-sys-input_field_on_shaded);
  }
</style>
<oobe-adaptive-dialog id="unlockStep" for-step="unlock" role="dialog"
    aria-label$="[[i18nDynamic(locale, adWelcomeMessageKey)]]">
  <iron-icon slot="icon" icon="oobe-32:enterprise"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'adUnlockTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'adUnlockSubtitle')]]
  </div>
  <div slot="content" id="adUnlock" class="landscape-vertical-centered">
    <cr-input id="unlockPasswordInput" type="password" slot="inputs"
        invalid="{{unlockPasswordInvalid}}" class="focus-on-show"
        label="[[i18nDynamic(locale, 'adUnlockPassword')]]"
        error-message="[[i18nDynamic(locale, 'adUnlockIncorrectPassword')]]"
        disabled="[[disabled]]" on-keydown="onKeydownUnlockPassword_"
        required>
    </cr-input>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipButton" on-click="onSkipClicked_"
        text-key="adUnlockPasswordSkip"></oobe-text-button>
    <oobe-next-button id="unlockButton"
        on-click="onUnlockPasswordEntered_"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog id="credsStep" for-step="creds" role="dialog"
    aria-label$="[[i18nDynamic(locale, adWelcomeMessageKey)]]">
  <iron-icon slot="icon" icon="oobe-32:enterprise"
      hidden="[[!isDomainJoin]]">
  </iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, adWelcomeMessageKey)]]
  </h1>
  <div slot="subtitle" hidden="[[isDomainJoin]]">
    [[i18nDynamic(locale, 'enterpriseInfoMessage', realm)]]
  </div>
  <paper-progress slot="progress" hidden="[[!loading]]" indeterminate>
  </paper-progress>
  <div slot="content" class="landscape-vertical-centered"
      hidden="[[loading]]">
    <div class="layout vertical" id="joinConfig"
        hidden="[[!joinConfigVisible_]]">
      <span class="select-divider-line top-line"></span>
      <div class="layout horizontal justified">
        <div class="flex self-center select-title">
          [[i18nDynamic(locale, 'selectConfiguration')]]
        </div>
        <select id="joinConfigSelect" class="md-select">
        </select>
      </div>
      <span class="select-divider-line bottom-line"></span>
    </div>
    <div class="layout vertical">
      <cr-input slot="inputs" id="machineNameInput" required
          hidden="[[!isDomainJoin]]" value="{{machineName}}"
          disabled="[[disabled]]" invalid="[[machineNameInvalid]]"
          pattern="[[machineNameInputPattern_]]"
          label="[[i18nDynamic(locale, 'oauthEnrollAdMachineNameInput')]]"
          on-keydown="onKeydownMachineNameInput_" class="focus-on-show"
          error-message="[[getMachineNameError_(locale, errorState,
              selectedConfigOption_)]]">
      </cr-input>
      <cr-input slot="inputs" id="userInput" required
          invalid="[[userInvalid]]" domain="[[userRealm]]"
                                    value="{{userName}}"
          disabled="[[isInputDisabled_('ad_username',
                                        selectedConfigOption_, disabled)]]"
          label="[[i18nDynamic(locale, 'adAuthLoginUsername')]]"
          on-keydown="onKeydownUserInput_"
          error-message="[[i18nDynamic(locale, 'adLoginInvalidUsername')]]">
        <span slot="suffix" id="userRealm"
            hidden="[[domainHidden(userRealm, userName)]]">
          [[userRealm]]
        </span>
      </cr-input>
      <cr-input slot="inputs" id="passwordInput" type="password" required
          invalid="[[authPasswordInvalid]]"
          disabled="[[isInputDisabled_('ad_password',
                                        selectedConfigOption_, disabled)]]"
          value="[[calculateInputValue_('passwordInput', 'ad_password',
                                        selectedConfigOption_)]]"
          label="[[i18nDynamic(locale, 'adLoginPassword')]]"
          on-keydown="onKeydownAuthPasswordInput_"
          error-message="[[i18nDynamic(locale, 'adLoginInvalidPassword')]]">
      </cr-input>
      <div class="flex layout horizontal start-justified">
        <gaia-button id="moreOptionsBtn" on-click="onMoreOptionsClicked_"
            hidden="[[!isDomainJoin]]" disabled="[[disabled]]" link>
          [[i18nDynamic(locale, 'adJoinMoreOptions')]]
        </gaia-button>
      </div>
    </div>
  </div>
  <div slot="back-navigation" hidden="[[loading]]">
    <oobe-back-button id="backToUnlockButton" on-click="onBackToUnlock_"
        disabled="[[disabled]]" hidden="[[!backToUnlockButtonVisible_]]">
    </oobe-back-button>
    <oobe-back-button id="backButton" on-click="onBackButton_"
        hidden="[[isDomainJoin]]"></oobe-back-button>
  </div>
  <div slot="bottom-buttons" hidden="[[loading]]">
    <oobe-next-button id="nextButton" on-click="onSubmit_"
        disabled="[[disabled]]"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<cr-dialog id="moreOptionsDlg" on-close="onMoreOptionsClosed_">
  <div slot="title">
    [[i18nDynamic(locale, 'adJoinMoreOptions')]]
  </div>
  <div slot="body">
    <cr-input id="orgUnitInput"
        disabled="[[isInputDisabled_('computer_ou',
                                      selectedConfigOption_)]]"
        label="[[i18nDynamic(locale, 'adJoinOrgUnit')]]"
        value="[[calculateInputValue_('orgUnitInput', 'computer_ou',
                                      selectedConfigOption_)]]">
    </cr-input>
  </div>
  <div slot="body">
    <div class="flex layout center horizontal start-justified
        encryption-select-row">
      <div class="self-center select-title">
        [[i18nDynamic(locale, 'selectEncryption')]]
      </div>
      <select id="encryptionList"
          aria-label$="[[i18nDynamic(locale, 'selectEncryption')]]"
          class="md-select"
          disabled="[[isInputDisabled_('encryption_types',
                                        selectedConfigOption_)]]"
          value="[[encryptionValue_]]">
      </select>
    </div>
    <div class="flex layout center horizontal start-justified
        encryption-subtitle">
      <iron-icon id="encryptionWarningIcon" icon="cr:warning"
          hidden="[[isEncryptionStrong_(encryptionValue_)]]">
      </iron-icon>
      <div id="encryptionSubtitle">
        [[encryptionSubtitle_(locale, encryptionValue_)]]
      </div>
    </div>
  </div>
  <div slot="button-container">
    <oobe-text-button text-key="adJoinCancel"
        on-click="onMoreOptionsCancelTap_" autofocus></oobe-text-button>
    <oobe-text-button id="moreOptionsSave" text-key="adJoinSave"
        on-click="onMoreOptionsConfirmTap_" inverse></oobe-text-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Whether the UI disabled.
       */
      disabled: {type: Boolean, value: false, observer: 'disabledObserver_'},
      /**
       * Whether the loading UI shown.
       */
      loading: {type: Boolean, value: false},
      /**
       * Whether the screen is for domain join.
       */
      isDomainJoin: {type: Boolean, value: false},
      /**
       * The kerberos realm (AD Domain), the machine is part of.
       */
      realm: {type: String},
      /**
       * The user kerberos default realm. Used for autocompletion.
       */
      userRealm: {type: String, value: ''},
      /**
       * Predefined machine name.
       */
      machineName: {type: String, value: ''},
      /**
       * Predefined user name.
       */
      userName: {type: String, value: '', observer: 'userNameObserver_'},
      /**
       * Label for the user input.
       */
      userNameLabel: {type: String, value: ''},
      /**
       * ID of localized welcome message on top of the UI.
       */
      adWelcomeMessageKey: {type: String, value: 'loginWelcomeMessage'},
      /**
       * Error message for the machine name input.
       */
      machineNameError: {type: String, value: ''},
      /**
       * Error state of the UI.
       */
      errorState: {
        type: Number,
        value: ActiveDirectoryErrorState.NONE,
        observer: 'errorStateObserver_',
      },
      /**
       * Whether machine name input should be invalid.
       */
      machineNameInvalid: {
        type: Boolean,
        value: false,
        observer: 'machineNameInvalidObserver_',
      },
      /**
       * Whether username input should be invalid.
       */
      userInvalid:
          {type: Boolean, value: false, observer: 'userInvalidObserver_'},
      /**
       * Whether user password input should be invalid.
       */
      authPasswordInvalid: {
        type: Boolean,
        value: false,
        observer: 'authPasswordInvalidObserver_',
      },
      /**
       * Whether unlock password input should be invalid.
       */
      unlockPasswordInvalid: {
        type: Boolean,
        value: false,
        observer: 'unlockPasswordInvalidObserver_',
      },

      /**
       * Selected domain join configuration option.
       * @private {!JoinConfigType|undefined}
       */
      selectedConfigOption_: {type: Object, value: {}},

      /**
       * Verification pattern for the machine name input.
       * @private {string}
       */
      machineNameInputPattern_: {
        type: String,
        computed: 'getMachineNameInputPattern_(selectedConfigOption_)',
      },

      encryptionValue_: String,
    };
  }

  static get observers() {
    return ['calculateUserInputValue_(selectedConfigOption_)'];
  }

  constructor() {
    super();

    /**
     * Used for 'More options' dialog.
     * @private {string}
     */
    this.storedOrgUnit_ = '';

    /**
     * Used for 'More options' dialog.
     * @private {string}
     */
    this.storedEncryption_ = '';

    /**
     * Previous selected domain join configuration option.
     * @private {!JoinConfigType|undefined}
     */
    this.previousSelectedConfigOption_ = undefined;

    /**
     * Maps encryption value to subtitle message.
     * @private {Object<string,string>}
     * */
    this.encryptionValueToSubtitleMap = {};

    /**
     * Contains preselected default encryption. Does not show the warning sign
     * for that one.
     * @private {string}
     * */
    this.defaultEncryption = '';

    /**
     * List of domain join configuration options.
     * @private {!Array<JoinConfigType>|undefined}
     */
    this.joinConfigOptions_ = undefined;

    /**
     * Mutex on errorState. True when errorState is being updated from the C++
     * side.
     * @private {boolean}
     */
    this.errorStateLocked_ = false;

    /**
     * True when we skip unlock step and show back button option.
     * @private {boolean}
     */
    this.backToUnlockButtonVisible_ = false;

    /**
     * True when join configurations are visible.
     * @private {boolean}
     */
    this.joinConfigVisible_ = false;
  }

  get EXTERNAL_API() {
    return ['reset', 'setErrorState'];
  }

  get UI_STEPS() {
    return ADLoginStep;
  }

  defaultUIStep() {
    return ADLoginStep.CREDS;
  }

  /** @override */
  ready() {
    super.ready();
    if (this.isDomainJoin) {
      this.setupEncList();
    } else {
      this.initializeLoginScreen('ActiveDirectoryLoginScreen');
    }
  }

  onBeforeShow(data) {
    if (data) {
      this.realm = data['realm'];
      if ('emailDomain' in data) {
        this.userRealm = '@' + data['emailDomain'];
      }
    }
    this.focus();
  }

  /**
   * @param {string} username
   * @param {ActiveDirectoryErrorState} errorState
   */
  setErrorState(username, errorState) {
    this.userName = username;
    this.errorState = errorState;
    this.loading = false;
  }

  reset() {
    this.$.userInput.value = '';
    this.$.passwordInput.value = '';
    this.errorState = ActiveDirectoryErrorState.NONE;
  }

  setupEncList() {
    var list = /** @type {!EncryptionSelectListType}>} */
        (loadTimeData.getValue('encryptionTypesList'));
    for (var item of list) {
      this.encryptionValueToSubtitleMap[item.value] = item.subtitle;
      delete item.subtitle;
    }
    list = /** @type {!SelectListType} */ (list);
    setupSelect(
        this.$.encryptionList, list, this.onEncryptionSelected_.bind(this));
    this.defaultEncryption = /** @type {!string} */ (getSelectedValue(list));
    this.encryptionValue_ = this.defaultEncryption;
    this.machineNameError =
        loadTimeData.getString('adJoinErrorMachineNameInvalid');
  }

  focus() {
    if (this.uiStep === ADLoginStep.UNLOCK) {
      this.$.unlockPasswordInput.focus();
    } else if (this.isDomainJoin && !this.$.machineNameInput.value) {
      this.$.machineNameInput.focus();
    } else if (!this.$.userInput.value) {
      this.$.userInput.focus();
    } else {
      this.$.passwordInput.focus();
    }
  }

  errorStateObserver_() {
    if (this.errorStateLocked_) {
      return;
    }
    // Prevent updateErrorStateOnInputInvalidStateChange_ from changing
    // errorState.
    this.errorStateLocked_ = true;
    this.machineNameInvalid =
        this.errorState == ActiveDirectoryErrorState.MACHINE_NAME_INVALID ||
        this.errorState == ActiveDirectoryErrorState.MACHINE_NAME_TOO_LONG;
    this.userInvalid =
        this.errorState == ActiveDirectoryErrorState.BAD_USERNAME;
    this.authPasswordInvalid =
        this.errorState == ActiveDirectoryErrorState.BAD_AUTH_PASSWORD;
    this.unlockPasswordInvalid =
        this.errorState == ActiveDirectoryErrorState.BAD_UNLOCK_PASSWORD;

    // Clear password.
    if (this.errorState == ActiveDirectoryErrorState.NONE) {
      this.$.passwordInput.value = '';
    }
    this.errorStateLocked_ = false;
  }

  encryptionSubtitle_() {
    return this.encryptionValueToSubtitleMap[this.encryptionValue_];
  }

  isEncryptionStrong_() {
    return this.encryptionValue_ == this.defaultEncryption;
  }

  /**
   * @param {Array<JoinConfigType>} options
   */
  setJoinConfigurationOptions(options) {
    this.backToUnlockButtonVisible_ = false;
    if (!options || options.length < 1) {
      this.joinConfigVisible_ = false;
      return;
    }
    this.joinConfigOptions_ = options;
    var selectList = [];
    for (var i = 0; i < options.length; ++i) {
      selectList.push({title: options[i].name, value: i});
    }
    setupSelect(
        this.$.joinConfigSelect, selectList,
        this.onJoinConfigSelected_.bind(this));
    this.onJoinConfigSelected_(this.$.joinConfigSelect.value);
    this.joinConfigVisible_ = true;
  }

  /** @private */
  onSubmit_() {
    if (this.disabled) {
      return;
    }

    if (this.isDomainJoin) {
      this.machineNameInvalid = !this.$.machineNameInput.validate();
      if (this.machineNameInvalid) {
        return;
      }
    }

    this.userInvalid = !this.$.userInput.validate();
    if (this.userInvalid) {
      return;
    }

    this.authPasswordInvalid = !this.$.passwordInput.validate();
    if (this.authPasswordInvalid) {
      return;
    }

    var user = /** @type {string} */ (this.$.userInput.value);
    const password = /** @type {string} / */ (this.$.passwordInput.value);
    if (!user.includes('@') && this.userRealm) {
      user += this.userRealm;
    }

    if (this.isDomainJoin) {
      const msg = {
        'distinguished_name': this.storedOrgUnit_,
        'username': user,
        'password': password,
        'machine_name': this.$.machineNameInput.value,
        'encryption_types': this.storedEncryption_,
      };
      this.dispatchEvent(new CustomEvent(
        'authCompletedAd', { bubbles: true, composed: true, detail: msg }));
    } else {
      this.loading = true;
      this.userActed(['completeAdAuthentication', user, password]);
    }
  }

  /** @private */
  onBackButton_() {
    this.userActed('cancel');
  }

  /** @private */
  onMoreOptionsClicked_() {
    this.disabled = true;
    this.dispatchEvent(
        new CustomEvent('dialogShown', {bubbles: true, composed: true}));
    this.$.moreOptionsDlg.showModal();
    this.$.orgUnitInput.focus();
  }

  /** @private */
  onMoreOptionsConfirmTap_() {
    this.storedOrgUnit_ = this.$.orgUnitInput.value;
    this.storedEncryption_ = this.$.encryptionList.value;
    this.$.moreOptionsDlg.close();
  }

  /** @private */
  onMoreOptionsCancelTap_() {
    // Restore previous values
    this.$.orgUnitInput.value = this.storedOrgUnit_;
    this.$.encryptionList.value = this.storedEncryption_;
    this.$.moreOptionsDlg.close();
  }

  /** @private */
  onMoreOptionsClosed_() {
    this.dispatchEvent(
        new CustomEvent('dialogHidden', {bubbles: true, composed: true}));
    this.disabled = false;
    this.$.moreOptionsBtn.focus();
  }

  /** @private */
  onUnlockPasswordEntered_() {
    var msg = {
      'unlock_password': this.$.unlockPasswordInput.value,
    };
    this.dispatchEvent(new CustomEvent(
        'unlockPasswordEntered', {bubbles: true, composed: true, detail: msg}));
  }

  /** @private */
  onSkipClicked_() {
    this.backToUnlockButtonVisible_ = true;
    this.setUIStep(ADLoginStep.CREDS);
    this.focus();
  }

  /** @private */
  onBackToUnlock_() {
    if (this.disabled) {
      return;
    }
    this.setUIStep(ADLoginStep.UNLOCK);
    this.focus();
  }

  /**
   * @private
   * @param {!string} value
   * */
  onEncryptionSelected_(value) {
    this.encryptionValue_ = value;
  }

  /** @private */
  onJoinConfigSelected_(value) {
    if (this.selectedConfigOption_ == this.joinConfigOptions_[value]) {
      return;
    }
    this.errorState = ActiveDirectoryErrorState.NONE;
    this.previousSelectedConfigOption_ = this.selectedConfigOption_;
    this.selectedConfigOption_ = this.joinConfigOptions_[value];
    var option = this.selectedConfigOption_;
    var encryptionTypes =
        option['encryption_types'] || DEFAULT_ENCRYPTION_TYPES;
    if (!(encryptionTypes in this.encryptionValueToSubtitleMap)) {
      encryptionTypes = DEFAULT_ENCRYPTION_TYPES;
    }
    this.encryptionValue_ = encryptionTypes;
    this.focus();
  }
  /**
   * Returns pattern for checking machine name input.
   *
   * @param {Object} option Value of this.selectedConfigOption_.
   * @return {string} Regular expression.
   * @private
   */
  getMachineNameInputPattern_(option) {
    return option['computer_name_validation_regex'];
  }

  /**
   * Sets username according to |option|.
   * @param {!JoinConfigType} option Value of this.selectedConfigOption_;
   * @private
   */
  calculateUserInputValue_(option) {
    this.userName =
        this.calculateInputValue_('userInput', 'ad_username', option);
  }

  /**
   * Returns new input value when selected config option is changed.
   *
   * @param {string} inputElementId Id of the input element.
   * @param {string} key Input element key
   * @param {!JoinConfigType} option Value of this.selectedConfigOption_;
   * @return {string} New input value.
   * @private
   */
  calculateInputValue_(inputElementId, key, option) {
    if (option && key in option) {
      return option[key];
    }

    if (this.previousSelectedConfigOption_ &&
        key in this.previousSelectedConfigOption_) {
      return '';
    }

    // No changes.
    return this.$[inputElementId].value;
  }

  /**
   * Returns true if input with the given key should be disabled.
   *
   * @param {boolean} disabledAll Value of this.disabled.
   * @param {string} key Input key.
   * @param {Object} option Value of this.selectedConfigOption_;
   * @private
   */
  isInputDisabled_(key, option, disabledAll) {
    return disabledAll || (key in option);
  }

  /**
   * Returns true if "Machine name is invalid" error should be displayed.
   * @param {ActiveDirectoryErrorState} errorState
   */
  isMachineNameInvalid_(errorState) {
    return errorState != ActiveDirectoryErrorState.MACHINE_NAME_TOO_LONG;
  }

  getMachineNameError_(locale, errorState) {
    if (errorState == ActiveDirectoryErrorState.MACHINE_NAME_TOO_LONG) {
      return this.i18n('adJoinErrorMachineNameTooLong');
    }
    if (errorState == ActiveDirectoryErrorState.MACHINE_NAME_INVALID) {
      if (this.machineNameInputPattern_) {
        return this.i18n('adJoinErrorMachineNameInvalidFormat');
      }
    }
    return this.i18n('adJoinErrorMachineNameInvalid');
  }

  onKeydownUnlockPassword_(e) {
    if (e.key == 'Enter') {
      if (this.$.unlockPasswordInput.value.length == 0) {
        this.onSkipClicked_();
      } else {
        this.onUnlockPasswordEntered_();
      }
    }
    this.errorState = ActiveDirectoryErrorState.NONE;
  }

  onKeydownMachineNameInput_(e) {
    this.errorState = ActiveDirectoryErrorState.NONE;
    if (e.key == 'Enter') {
      this.switchTo_('userInput') || this.switchTo_('passwordInput') ||
          this.onSubmit_();
    }
  }

  onKeydownUserInput_(e) {
    this.errorState = ActiveDirectoryErrorState.NONE;
    if (e.key == 'Enter') {
      this.switchTo_('passwordInput') || this.onSubmit_();
    }
  }

  userNameObserver_() {
    if (this.userRealm && this.userName &&
        this.userName.endsWith(this.userRealm)) {
      this.userName = this.userName.replace(this.userRealm, '');
    }
  }

  domainHidden(userRealm, userName) {
    return !userRealm || (userName && userName.includes('@'));
  }

  onKeydownAuthPasswordInput_(e) {
    this.errorState = ActiveDirectoryErrorState.NONE;
    if (e.key == 'Enter') {
      this.onSubmit_();
    }
  }

  switchTo_(inputId) {
    if (!this.$[inputId].disabled && this.$[inputId].value.length == 0) {
      this.$[inputId].focus();
      return true;
    }
    return false;
  }

  machineNameInvalidObserver_(isInvalid) {
    this.setErrorState_(
        isInvalid, ActiveDirectoryErrorState.MACHINE_NAME_INVALID);
  }

  userInvalidObserver_(isInvalid) {
    this.setErrorState_(isInvalid, ActiveDirectoryErrorState.BAD_USERNAME);
  }

  authPasswordInvalidObserver_(isInvalid) {
    this.setErrorState_(
        isInvalid, ActiveDirectoryErrorState.BAD_AUTH_PASSWORD);
  }

  unlockPasswordInvalidObserver_(isInvalid) {
    this.setErrorState_(
        isInvalid, ActiveDirectoryErrorState.BAD_UNLOCK_PASSWORD);
  }

  setErrorState_(isInvalid, error) {
    if (this.errorStateLocked_) {
      return;
    }
    this.errorStateLocked_ = true;
    if (isInvalid) {
      this.errorState = error;
    } else {
      this.errorState = ActiveDirectoryErrorState.NONE;
    }
    this.errorStateLocked_ = false;
  }

  disabledObserver_(disabled) {
    if (disabled) {
      this.$.credsStep.classList.add('full-disabled');
    } else {
      this.$.credsStep.classList.remove('full-disabled');
    }
  }
}

customElements.define(OfflineAdLogin.is, OfflineAdLogin);
