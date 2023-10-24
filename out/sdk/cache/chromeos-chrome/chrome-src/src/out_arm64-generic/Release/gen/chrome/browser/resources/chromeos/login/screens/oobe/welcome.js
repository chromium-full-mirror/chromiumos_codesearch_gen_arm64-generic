// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design OOBE.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_input/cr_input.js';
import '//resources/cr_elements/cr_shared_vars.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_a11y_option.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_i18n_dropdown.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeModalDialog} from '../../components/dialogs/oobe_modal_dialog.js';
import {getSelectedTitle, SelectListType} from '../../components/oobe_select.js';
import {OobeTypes} from '../../components/oobe_types.js';
import {Oobe} from '../../cr_ui.js';
import {traceWelcomeAnimationPlay} from '../../oobe_trace.js';

import {OobeWelcomeDialog} from './welcome_dialog.js';

/** @const {string} */
const DEFAULT_CHROMEVOX_HINT_LOCALE = 'en-US';

/**
 * The extension ID of the speech engine (Google Speech Synthesis) used to
 * give the default ChromeVox hint.
 * @const {string}
 */
const DEFAULT_CHROMEVOX_HINT_VOICE_EXTENSION_ID =
    'gjjabgpgjpampikjhjpfhneeoapjbjaf';

// The help topic regarding language packs.
const HELP_LANGUAGE_PACKS = 11383012;

/**
 * UI mode for the dialog.
 * @enum {string}
 */
const WelcomeScreenState = {
  GREETING: 'greeting',
  LANGUAGE: 'language',
  ACCESSIBILITY: 'accessibility',
  TIMEZONE: 'timezone',
  ADVANCED_OPTIONS: 'advanced-options',
};

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const OobeWelcomeScreenBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   welcomeScreen:  OobeWelcomeDialog,
 *   demoModeConfirmationDialog:  OobeModalDialog,
 *   editRequisitionDialog:  OobeModalDialog,
 *   editRequisitionInput: CrInputElement,
 *   remoraRequisitionDialog: OobeModalDialog,
 * }}
 */
OobeWelcomeScreenBase.$;
/**
 * @polymer
 */
class OobeWelcomeScreen extends OobeWelcomeScreenBase {
  static get is() {
    return 'oobe-welcome-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2016 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  :host {
    --oobe-dialog-list-item-border: 1px solid var(--cros-sys-separator);
    --oobe-a11y-dialog-list-item-border: 1px solid var(--cros-sys-separator);
    color: var(--oobe-text-color);
    font-family: var(--oobe-default-font-family);
    font-size: var(--oobe-default-font-size);
    font-weight: var(--oobe-default-font-weight);
    line-height: var(--oobe-default-line-height);
  }

  /************* Edit Requisition Dialog **************/
  :host-context(.jelly-enabled) cr-input#editRequisitionInput {
    --cr-input-background-color: var(--cros-sys-input_field_on_shaded);
  }

  /************* Language Screen **************/
  #languageScreen .language-selection-entry {
    border-top: var(--oobe-dialog-list-item-border);
    min-height: var(--selection-entry-height);
  }

  #languageScreen .language-selection-entry:last-of-type {
    border-bottom: var(--oobe-dialog-list-item-border);
  }

  /************* Accessibility Screen **************/
  #accessibilityScreen oobe-a11y-option {
    border-top: var(--oobe-a11y-dialog-list-item-border);
    min-height: var(--a11y-option-height);
  }

  #accessibilityScreen oobe-a11y-option:last-of-type {
    border-bottom: var(--oobe-a11y-dialog-list-item-border);
  }

  /************* Timezone Screen **************/
  #timezoneScreen .timezone-selection-entry {
    border-top: var(--oobe-dialog-list-item-border);
    min-height: var(--selection-entry-height);
  }

  #timezoneScreen .timezone-selection-entry:last-of-type {
    border-bottom: var(--oobe-dialog-list-item-border);
  }

  /************* Advanced Options screen **************/
  #oobeAdvancedOptionsScreen .advanced-options-entry {
    border-top: var(--oobe-dialog-list-item-border);
    min-height: 64px;
  }

  #oobeAdvancedOptionsScreen .advanced-options-entry:last-of-type {
    border-bottom: var(--oobe-dialog-list-item-border);
  }

  #oobeAdvancedOptionsScreen .advanced-option-subtitle {
    color: var(--google-grey-700);
  }
</style>
<oobe-welcome-dialog
  id="welcomeScreen"
  role="dialog"
  for-step="greeting"
  aria-label$="[[i18nDynamic(locale, 'welcomeScreenGreeting')]]"
  current-language="[[currentLanguage]]"
  on-language-button-clicked="onWelcomeSelectLanguageButtonClicked_"
  on-accessibility-button-clicked="onWelcomeAccessibilityButtonClicked_"
  on-timezone-button-clicked="onWelcomeTimezoneButtonClicked_"
  on-next-button-clicked="onWelcomeNextButtonClicked_"
  on-quick-start-clicked="onQuickStartButtonClicked_"
  on-enable-debugging-clicked="onEnableDebuggingClicked_"
  on-launch-advanced-options="onWelcomeLaunchAdvancedOptions_"
  on-chromevox-hint-accepted="onChromeVoxHintAccepted_"
  on-chromevox-hint-dismissed="onChromeVoxHintDismissed_"
  timezone-button-visible="[[isTimezoneButtonVisible_(highlightStrength)]]"
  debugging-link-visible="[[debuggingLinkVisible_]]"
>
</oobe-welcome-dialog>
<oobe-adaptive-dialog
  id="languageScreen"
  role="dialog"
  for-step="language"
  aria-label$="[[i18nDynamic(locale, 'languageSectionTitle')]]"
>
  <iron-icon slot="icon" icon="oobe-32:language"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'languageSectionTitle')]]</h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'languageSectionHint')]]
    <a
      id="languagesLearnMore"
      class="oobe-local-link"
      is="action-link"
      on-click="onLanguageLearnMoreLinkClicked_"
    >
      [[i18nDynamic(locale, 'learnMore')]]
    </a>
  </p>
  <div id="setup-container" slot="content" class="landscape-header-aligned">
    <div
      id="languageDropdownContainer"
      class="flex layout center horizontal justified language-selection-entry"
    >
      <div id="language-dropdown">
        [[i18nDynamic(locale, 'languageDropdownTitle')]]
      </div>
      <oobe-i18n-dropdown
        id="languageSelect"
        items="[[languages]]"
        on-select-item="onLanguageSelected_"
        class="focus-on-show"
        label-for-aria="[[i18nDynamic(locale, 'languageDropdownLabel')]]"
      >
      </oobe-i18n-dropdown>
    </div>
    <div
      id="keyboardDropdownContainer"
      class="flex layout center horizontal justified language-selection-entry"
    >
      <div id="keyboard-dropdown">
        [[i18nDynamic(locale, 'keyboardDropdownTitle')]]
      </div>
      <oobe-i18n-dropdown
        id="keyboardSelect"
        items="[[keyboards]]"
        on-select-item="onKeyboardSelected_"
        label-for-aria="[[i18nDynamic(locale, 'keyboardDropdownLabel')]]"
      >
      </oobe-i18n-dropdown>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button
      id="ok-button-language"
      text-key="oobeOKButtonText"
      inverse
      on-click="closeLanguageSection_"
    ></oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog
  id="accessibilityScreen"
  role="dialog"
  for-step="accessibility"
  aria-label$="[[i18nDynamic(locale, 'accessibilitySectionTitle')]]"
>
  <iron-icon slot="icon" icon="oobe-32:accessibility"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'accessibilitySectionTitle')]]</h1>
  <p slot="subtitle">[[i18nDynamic(locale, 'accessibilitySectionHint')]]</p>
  <div slot="content" class="layout vertical">
    <oobe-a11y-option
      id="accessibility-spoken-feedback"
      checked="[[a11yStatus.spokenFeedbackEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'spokenFeedbackOption')]]"
      class="focus-on-show"
    >
      <span slot="title">
        [[i18nDynamic(locale, 'spokenFeedbackOption')]]
      </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-large-cursor"
      checked="[[a11yStatus.largeCursorEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'largeCursorOption')]]"
    >
      <span slot="title"> [[i18nDynamic(locale, 'largeCursorOption')]] </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'largeCursorOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'largeCursorOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-high-contrast"
      checked="[[a11yStatus.highContrastEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'highContrastOption')]]"
    >
      <span slot="title"> [[i18nDynamic(locale, 'highContrastOption')]] </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-screen-magnifier"
      checked="[[a11yStatus.screenMagnifierEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'screenMagnifierOption')]]"
    >
      <span slot="title">
        [[i18nDynamic(locale, 'screenMagnifierOption')]]
      </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-select-to-speak"
      checked="[[a11yStatus.selectToSpeakEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'selectToSpeakOption')]]"
      id="selectToSpeakOobeOption"
    >
      <span slot="title"> [[i18nDynamic(locale, 'selectToSpeakOption')]] </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-docked-magnifier"
      checked="[[a11yStatus.dockedMagnifierEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'dockedMagnifierOption')]]"
    >
      <span slot="title">
        [[i18nDynamic(locale, 'dockedMagnifierOption')]]
      </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
    <oobe-a11y-option
      id="accessibility-virtual-keyboard"
      checked="[[a11yStatus.virtualKeyboardEnabled]]"
      on-change="onA11yOptionChanged_"
      label-for-aria="[[i18nDynamic(locale, 'virtualKeyboardOption')]]"
    >
      <span slot="title">
        [[i18nDynamic(locale, 'virtualKeyboardOption')]]
      </span>
      <span slot="checked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOn')]]
      </span>
      <span slot="unchecked-value">
        [[i18nDynamic(locale, 'a11ySettingToggleOptionOff')]]
      </span>
    </oobe-a11y-option>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button
      id="ok-button-accessibility"
      text-key="oobeOKButtonText"
      inverse
      on-click="closeAccessibilitySection_"
    ></oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<oobe-adaptive-dialog
  id="timezoneScreen"
  role="dialog"
  for-step="timezone"
  aria-label$="[[i18nDynamic(locale, 'timezoneSectionTitle')]]"
>
  <iron-icon slot="icon" icon="oobe-32:timezone"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'timezoneSectionTitle')]]</h1>
  <div slot="content" class="landscape-header-aligned">
    <div
      class="flex layout center horizontal justified timezone-selection-entry"
    >
      <div>[[i18nDynamic(locale, 'timezoneDropdownTitle')]]</div>
      <oobe-i18n-dropdown
        id="timezoneSelect"
        items="[[timezones]]"
        on-select-item="onTimezoneSelected_"
        label-for-aria="[[i18nDynamic(locale, 'timezoneDropdownLabel')]]"
        class="focus-on-show"
      >
      </oobe-i18n-dropdown>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button
      id="ok-button-timezone"
      text-key="oobeOKButtonText"
      inverse
      on-click="closeTimezoneSection_"
    ></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<!-- Advanced options dialog -->
<oobe-adaptive-dialog
  id="oobeAdvancedOptionsScreen"
  role="dialog"
  for-step="advanced-options"
  aria-label$="[[i18nDynamic(locale, 'advancedOptionsSectionTitle')]]"
>
  <iron-icon slot="icon" icon="oobe-32:gear"></iron-icon>
  <h1 slot="title">[[i18nDynamic(locale, 'advancedOptionsSectionTitle')]]</h1>
  <div slot="content" class="landscape-header-aligned">
    <div class="flex layout vertical center-justified advanced-options-entry"
        hidden="[[hideCFMSetupButton_(isDeviceRequisitionConfigurable_,
                                     isMeet_)]]">
      <button on-click="onCFMBootstrappingClicked_">
        <div>[[i18nDynamic(locale, 'advancedOptionsCFMSetupTitle')]]</div>
        <div class="advanced-option-subtitle">
          [[i18nDynamic(locale, 'advancedOptionsCFMSetupSubtitle')]]
        </div>
      </button>
    </div>
    <div class="flex layout vertical center-justified advanced-options-entry"
        hidden="[[!isDeviceRequisitionConfigurable_]]">
      <button on-click="onDeviceRequisitionClicked_">
        <div>
          [[i18nDynamic(locale, 'advancedOptionsDeviceRequisitionTitle')]]
        </div>
        <div class="advanced-option-subtitle">
          [[i18nDynamic(locale, 'advancedOptionsDeviceRequisitionSubtitle')]]
        </div>
      </button>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button
      id="ok-button-advanced-options"
      text-key="oobeOKButtonText"
      inverse
      on-click="closeAdvancedOptionsSection_"
    ></oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<!-- Demo Mode confirmation dialog -->
<oobe-modal-dialog id="demoModeConfirmationDialog">
  <div slot="title">[[i18nDynamic(locale, 'enableDemoModeDialogTitle')]]</div>
  <div slot="content">[[i18nDynamic(locale, 'enableDemoModeDialogText')]]</div>
  <div slot="buttons">
    <oobe-text-button
      id="cancelButton"
      border
      on-click="onDemoModeDialogCancelTap_"
      text-key="enableDemoModeDialogCancel"
    ></oobe-text-button>
    <oobe-text-button
      inverse
      on-click="onDemoModeDialogConfirmTap_"
      id="okButton"
      text-key="enableDemoModeDialogConfirm"
    ></oobe-text-button>
  </div>
</oobe-modal-dialog>

<!-- Remora requisition dialog -->
<oobe-modal-dialog id="remoraRequisitionDialog">
  <div slot="title">
    [[i18nDynamic(locale, 'deviceRequisitionRemoraPromptText')]]
  </div>
  <div slot="buttons">
    <oobe-text-button
      border
      on-click="onRemoraCancel_"
      text-key="deviceRequisitionRemoraPromptCancel"
    ></oobe-text-button>
    <oobe-text-button
      inverse
      on-click="onRemoraConfirm_"
      text-key="deviceRequisitionRemoraPromptOk"
    ></oobe-text-button>
  </div>
</oobe-modal-dialog>

<!-- Edit requisition dialog -->
<oobe-modal-dialog id="editRequisitionDialog">
  <div slot="title">[[i18nDynamic(locale, 'deviceRequisitionPromptText')]]</div>
  <cr-input
    id="editRequisitionInput"
    slot="content"
    placeholder="[[i18nDynamic(locale,
              'advancedOptionsDeviceRequisitionTitle')]]"
  >
  </cr-input>
  <div slot="buttons">
    <oobe-text-button
      border
      on-click="onEditRequisitionCancel_"
      text-key="deviceRequisitionPromptCancel"
    ></oobe-text-button>
    <oobe-text-button
      inverse
      on-click="onEditRequisitionConfirm_"
      text-key="deviceRequisitionPromptOk"
    ></oobe-text-button>
  </div>
</oobe-modal-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * Currently selected system language (display name).
       */
      currentLanguage: String,

      /**
       * Currently selected input method (display name).
       */
      currentKeyboard: String,

      /**
       * List of languages for language selector dropdown.
       * @type {!Array<OobeTypes.LanguageDsc>}
       */
      languages: {
        type: Array,
        observer: 'onLanguagesChanged_',
      },

      /**
       * List of keyboards for keyboard selector dropdown.
       * @type {!Array<OobeTypes.IMEDsc>}
       */
      keyboards: {
        type: Array,
        observer: 'onKeyboardsChanged_',
      },

      /**
       * Accessibility options status.
       * @type {!OobeTypes.A11yStatuses}
       */
      a11yStatus: Object,

      /**
       * A list of timezones for Timezone Selection screen.
       * @type {!Array<OobeTypes.TimezoneDsc>}
       */
      timezones: Object,

      /**
       * If UI uses forced keyboard navigation.
       */
      highlightStrength: String,

      /**
       * Controls displaying of "Enable debugging features" link.
       */
      debuggingLinkVisible_: Boolean,

      /**
       * Used to save the function instance created when for binded
       * maybeGiveChromeVoxHint.
       * @private {function(this:SpeechSynthesis, Event): *|null|undefined}
       */
      voicesChangedListenerMaybeGiveChromeVoxHint_: Function,

      /**
       * The id of the timer that's set when setting a timeout on
       * giveChromeVoxHint.
       * Only gets set if the initial call to maybeGiveChromeVoxHint fails.
       * @private {number|undefined}
       */
      defaultChromeVoxHintTimeoutId_: Number,

      /**
       * The time in MS to wait before giving the ChromeVox hint in English.
       * Declared as a property so it can be modified in a test.
       * @private {number}
       * @const
       */
      DEFAULT_CHROMEVOX_HINT_TIMEOUT_MS_: Number,

      /**
       * Tracks if we've given the ChromeVox hint yet.
       * @private
       */
      chromeVoxHintGiven_: Boolean,

      /**
       * If it is a meet device.
       * @private
       */
      isMeet_: {
        type: Boolean,
        value: function() {
          return (
              loadTimeData.valueExists('deviceFlowType') &&
              loadTimeData.getString('deviceFlowType') == 'meet');
        },
        readOnly: true,
      },

      /**
       * If device requisition is configurable.
       * @private
       */
      isDeviceRequisitionConfigurable_: {
        type: Boolean,
        value: function() {
          return loadTimeData.getBoolean('isDeviceRequisitionConfigurable');
        },
        readOnly: true,
      },
    };
  }

  constructor() {
    super();
    this.UI_STEPS = WelcomeScreenState;

    // -- Properties --
    this.currentLanguage = '';
    this.currentKeyboard = '';
    this.highlightStrength = '';
    this.debuggingLinkVisible_ = false;
    this.voicesChangedListenerMaybeGiveChromeVoxHint_ = undefined;
    this.defaultChromeVoxHintTimeoutId_ = undefined;
    this.DEFAULT_CHROMEVOX_HINT_TIMEOUT_MS_ = 40 * 1000;
    this.chromeVoxHintGiven_ = false;

    // -- Member Variables --
    // Flag that ensures that OOBE configuration is applied only once.
    this.configuration_applied_ = false;
  }

  /** Overridden from LoginScreenBehavior. */
  get EXTERNAL_API() {
    return [
      'onInputMethodIdSetFromBackend',
      'refreshA11yInfo',
      'showDemoModeConfirmationDialog',
      'showEditRequisitionDialog',
      'showRemoraRequisitionDialog',
      'maybeGiveChromeVoxHint',
      'setQuickStartEnabled',
    ];
  }

  defaultUIStep() {
    return WelcomeScreenState.GREETING;
  }

  /** @override */
  ready() {
    super.ready();
    this.addEventListener('cr-lottie-playing', this.measureAnimationPlayDelay_);
    this.initializeLoginScreen('WelcomeScreen');
    this.updateLocalizedContent();
  }

  /**
   * Event handler that is invoked just before the screen is shown.
   * TODO (https://crbug.com/948932): Define this type.
   * @param {Object} data Screen init payload.
   */
  onBeforeShow(data) {
    this.debuggingLinkVisible_ =
        data && 'isDeveloperMode' in data && data['isDeveloperMode'];

    window.setTimeout(() => void this.applyOobeConfiguration_(), 0);
  }

  measureAnimationPlayDelay_(e) {
    e.stopPropagation();
    traceWelcomeAnimationPlay();
  }

  /**
   * Event handler that is invoked just before the screen is hidden.
   */
  onBeforeHide() {
    this.cleanupChromeVoxHint_();
  }

  cancel() {
    if (this.uiStep === WelcomeScreenState.LANGUAGE) {
      this.closeLanguageSection_();
      return;
    }

    if (this.uiStep === WelcomeScreenState.ACCESSIBILITY) {
      this.closeAccessibilitySection_();
      return;
    }
  }

  /**
   * This is called when UI strings are changed.
   * Overridden from LoginScreenBehavior.
   */
  updateLocalizedContent() {
    this.languages = /** @type {!Array<OobeTypes.LanguageDsc>} */ (
        loadTimeData.getValue('languageList'));
    this.keyboards = /** @type {!Array<OobeTypes.IMEDsc>} */ (
        loadTimeData.getValue('inputMethodsList'));
    this.timezones = /** @type {!Array<OobeTypes.TimezoneDsc>} */ (
        loadTimeData.getValue('timezoneList'));
    this.highlightStrength =
        /** @type {string} */ (loadTimeData.getValue('highlightStrength'));

    this.$.welcomeScreen.i18nUpdateLocale();
    this.i18nUpdateLocale();

    var currentLanguage = loadTimeData.getString('language');

    // We might have changed language via configuration. In this case
    // we need to proceed with rest of configuration after language change
    // was fully resolved.
    var configuration = Oobe.getInstance().getOobeConfiguration();
    if (configuration && configuration.language &&
        configuration.language == currentLanguage) {
      window.setTimeout(() => void this.applyOobeConfiguration_(), 0);
    }
  }

  /**
   * Called when OOBE configuration is loaded.
   * Overridden from LoginScreenBehavior.
   * @param {!OobeTypes.OobeConfiguration} configuration
   */
  updateOobeConfiguration(configuration) {
    if (!this.configuration_applied_) {
      window.setTimeout(() => void this.applyOobeConfiguration_(), 0);
    }
  }

  /**
   * Called when dialog is shown for the first time.
   * @private
   */
  applyOobeConfiguration_() {
    if (this.configuration_applied_) {
      return;
    }
    var configuration = Oobe.getInstance().getOobeConfiguration();
    if (!configuration) {
      return;
    }

    if (configuration.language) {
      var currentLanguage = loadTimeData.getString('language');
      if (currentLanguage != configuration.language) {
        this.applySelectedLanguage_(configuration.language);
        // Trigger language change without marking it as applied.
        // applyOobeConfiguration will be called again once language change
        // was applied.
        return;
      }
    }
    if (configuration.inputMethod) {
      this.applySelectedLkeyboard_(configuration.inputMethod);
    }

    if (configuration.welcomeNext) {
      this.onWelcomeNextButtonClicked_();
    }

    if (configuration.enableDemoMode) {
      this.userActed('setupDemoModeGesture');
    }

    this.configuration_applied_ = true;
  }

  /**
   * Updates "device in tablet mode" state when tablet mode is changed.
   * Overridden from LoginScreenBehavior.
   * @param {boolean} isInTabletMode True when in tablet mode.
   */
  setTabletModeState(isInTabletMode) {
    this.$.welcomeScreen.isInTabletMode = isInTabletMode;
  }

  /**
   * Returns true if timezone button should be visible.
   * @private
   */
  isTimezoneButtonVisible_(highlightStrength) {
    return highlightStrength === 'strong';
  }

  /**
   * Handle "Next" button for "Welcome" screen.
   *
   * @private
   */
  onWelcomeNextButtonClicked_() {
    this.userActed('continue');
  }

  /**
   * Handle "Quick Start" button for "Welcome" screen.
   *
   * @private
   */
  onQuickStartButtonClicked_() {
    this.userActed('activateQuickStart');
  }

  /**
   * Handles "enable-debugging" link for "Welcome" screen.
   *
   * @private
   */
  onEnableDebuggingClicked_() {
    this.userActed('enableDebugging');
  }

  /**
   * Handle "launch-advanced-options" button for "Welcome" screen.
   *
   * @private
   */
  onWelcomeLaunchAdvancedOptions_() {
    this.cancelChromeVoxHint_();
    this.setUIStep(WelcomeScreenState.ADVANCED_OPTIONS);
  }

  /**
   * Handle "Language" button for "Welcome" screen.
   *
   * @private
   */
  onWelcomeSelectLanguageButtonClicked_() {
    this.cancelChromeVoxHint_();
    this.setUIStep(WelcomeScreenState.LANGUAGE);
  }

  /**
   * Handle "Accessibility" button for "Welcome" screen.
   *
   * @private
   */
  onWelcomeAccessibilityButtonClicked_() {
    this.cancelChromeVoxHint_();
    this.setUIStep(WelcomeScreenState.ACCESSIBILITY);
  }

  /**
   * Handle "Timezone" button for "Welcome" screen.
   *
   * @private
   */
  onWelcomeTimezoneButtonClicked_() {
    this.cancelChromeVoxHint_();
    this.setUIStep(WelcomeScreenState.TIMEZONE);
  }

  /**
   * Handle language selection.
   *
   * @param {!CustomEvent<!OobeTypes.LanguageDsc>} event
   * @private
   */
  onLanguageSelected_(event) {
    var item = event.detail;
    var languageId = item.value;
    this.currentLanguage = item.title;
    this.applySelectedLanguage_(languageId);
  }

  /**
   * Switch UI language.
   *
   * @param {string} languageId
   * @private
   */
  applySelectedLanguage_(languageId) {
    this.userActed(['setLocaleId', languageId]);
  }

  /**
   * Handle keyboard layout selection.
   *
   * @param {!CustomEvent<!OobeTypes.IMEDsc>} event
   * @private
   */
  onKeyboardSelected_(event) {
    var item = event.detail;
    var inputMethodId = item.value;
    this.currentKeyboard = item.title;
    this.applySelectedLkeyboard_(inputMethodId);
  }

  /**
   * Switch keyboard layout.
   *
   * @param {string} inputMethodId
   * @private
   */
  applySelectedLkeyboard_(inputMethodId) {
    this.userActed(['setInputMethodId', inputMethodId]);
  }

  onLanguagesChanged_() {
    this.currentLanguage = getSelectedTitle(
        /** @type {!SelectListType} */ (this.languages));
  }

  onInputMethodIdSetFromBackend(keyboard_id) {
    var found = false;
    for (var i = 0; i < this.keyboards.length; ++i) {
      if (this.keyboards[i].value != keyboard_id) {
        this.keyboards[i].selected = false;
        continue;
      }
      this.keyboards[i].selected = true;
      found = true;
    }
    if (!found) {
      return;
    }

    // Force i18n-dropdown to refresh.
    this.keyboards = this.keyboards.slice();
    this.onKeyboardsChanged_();
  }

  /**
   * Refreshes a11y menu state.
   * @param {!OobeTypes.A11yStatuses} data New dictionary with a11y features
   *     state.
   */
  refreshA11yInfo(data) {
    this.a11yStatus = data;
    if (data.spokenFeedbackEnabled) {
      this.closeChromeVoxHint_();
    }
  }

  /**
   * On-tap event handler for demo mode confirmation dialog cancel button.
   * @private
   */
  onDemoModeDialogCancelTap_() {
    this.$.demoModeConfirmationDialog.hideDialog();
  }

  /**
   * On-tap event handler for demo mode confirmation dialog confirm button.
   * @private
   */
  onDemoModeDialogConfirmTap_() {
    this.userActed('setupDemoMode');
    this.$.demoModeConfirmationDialog.hideDialog();
  }

  /**
   * Shows confirmation dialog for starting Demo mode
   */
  showDemoModeConfirmationDialog() {
    // Ensure the ChromeVox hint dialog is closed.
    this.closeChromeVoxHint_();
    this.$.demoModeConfirmationDialog.showDialog();
  }

  onSetupDemoModeGesture() {
    this.userActed('setupDemoModeGesture');
  }

  /**
   * Shows the device requisition prompt.
   */
  showEditRequisitionDialog(requisition) {
    this.$.editRequisitionDialog.showDialog();
    this.$.editRequisitionInput.focus();
  }

  onEditRequisitionCancel_() {
    this.userActed(['setDeviceRequisition', 'none']);
    this.$.editRequisitionDialog.hideDialog();
  }

  onEditRequisitionConfirm_() {
    const requisition = this.$.editRequisitionInput.value;
    this.userActed(['setDeviceRequisition', requisition]);
    this.$.editRequisitionDialog.hideDialog();
  }

  /**
   * Shows the special remora/shark device requisition prompt.
   */
  showRemoraRequisitionDialog() {
    this.$.remoraRequisitionDialog.showDialog();
  }

  /**
   * Shows the special remora/shark device requisition prompt.
   */
  onRemoraCancel_() {
    this.userActed(['setDeviceRequisition', 'none']);
    this.$.remoraRequisitionDialog.hideDialog();
  }

  /**
   * Shows the special remora/shark device requisition prompt.
   */
  onRemoraConfirm_() {
    this.userActed(['setDeviceRequisition', 'remora']);
    this.$.remoraRequisitionDialog.hideDialog();
  }

  onKeyboardsChanged_() {
    this.currentKeyboard = getSelectedTitle(this.keyboards);
  }

  /** ******************** Language section ******************* */

  /**
   * Handle "OK" button for "LanguageSelection" screen.
   *
   * @private
   */
  closeLanguageSection_() {
    this.setUIStep(WelcomeScreenState.GREETING);
  }

  /**
   * On-tap event handler for "learn more" link about language packs.
   *
   * @private
   */
  onLanguageLearnMoreLinkClicked_(e) {
    chrome.send('launchHelpApp', [HELP_LANGUAGE_PACKS]);

    // Can't use this.$.languagesLearnMore here as the element is in a <dom-if>.
    this.shadowRoot.querySelector('#languagesLearnMore').focus();
    e.stopPropagation();
  }

  /** ******************** Accessibility section ******************* */

  /**
   * Handle "OK" button for "Accessibility Options" screen.
   *
   * @private
   */
  closeAccessibilitySection_() {
    this.setUIStep(WelcomeScreenState.GREETING);
  }

  /**
   * Handle all accessibility buttons.
   * Note that each <oobe-a11y-option> has chromeMessage attribute
   * containing Chromium callback name.
   *
   * @private
   * @param {!Event} event
   */
  onA11yOptionChanged_(event) {
    var a11ytarget = /** @type {{chromeMessage: string, checked: boolean}} */ (
        event.currentTarget);
    if (a11ytarget.checked) {
      this.userActed(a11ytarget.id + '-enable');
    } else {
      this.userActed(a11ytarget.id + '-disable');
    }
  }

  /** ******************** Timezone section ******************* */

  /**
   * Handle "OK" button for "Timezone Selection" screen.
   *
   * @private
   */
  closeTimezoneSection_() {
    this.setUIStep(WelcomeScreenState.GREETING);
  }

  /**
   * Handle timezone selection.
   *
   * @param {!CustomEvent<!OobeTypes.TimezoneDsc>} event
   * @private
   */
  onTimezoneSelected_(event) {
    var item = event.detail;
    if (!item) {
      return;
    }

    this.userActed(['setTimezoneId', item.value]);
  }

  /** ******************** AdvancedOptions section ******************* */

  /**
   * Handle "OK" button for "AdvancedOptions Selection" screen.
   *
   * @private
   */
  closeAdvancedOptionsSection_() {
    this.setUIStep(WelcomeScreenState.GREETING);
  }

  /**
   * Handle click on "Set up as CFM device" option.
   *
   * @private
   */
  onCFMBootstrappingClicked_() {
    this.userActed('activateRemoraRequisition');
  }

  /**
   * Handle click on "Device requisition" option.
   *
   * @private
   */
  onDeviceRequisitionClicked_() {
    this.userActed('editDeviceRequisition');
  }

  /** ******************** ChromeVox hint section ******************* */

  /** @private */
  onChromeVoxHintAccepted_() {
    this.userActed('activateChromeVoxFromHint');
  }

  /** @private */
  onChromeVoxHintDismissed_() {
    this.userActed('dismissChromeVoxHint');
    chrome.tts.isSpeaking((speaking) => {
      if (speaking) {
        chrome.tts.stop();
      }
    });
  }

  /**
   */
  showChromeVoxHint_() {
    this.$.welcomeScreen.showChromeVoxHint();
  }

  /**
   * @private
   */
  closeChromeVoxHint_() {
    this.$.welcomeScreen.closeChromeVoxHint();
  }

  /** @private */
  cancelChromeVoxHint_() {
    this.userActed('cancelChromeVoxHint');
    this.cleanupChromeVoxHint_();
  }

  /**
   * Initially called from WelcomeScreenHandler.
   * If we find a matching voice for the current locale, show the ChromeVox hint
   * dialog and give a spoken announcement with instructions for activating
   * ChromeVox. If we can't find a matching voice, call this function again
   * whenever a SpeechSynthesis voiceschanged event fires.
   */
  maybeGiveChromeVoxHint() {
    chrome.tts.getVoices((voices) => {
      const locale = loadTimeData.getString('language');
      const voiceName = this.findVoiceForLocale_(voices, locale);
      if (!voiceName) {
        this.onVoiceNotLoaded_();
        return;
      }

      const ttsOptions = /** @type {!chrome.tts.TtsOptions} */ ({
        lang: locale,
        voiceName,
      });
      this.giveChromeVoxHint_(locale, ttsOptions, false);
    });
  }

  setQuickStartEnabled() {
    this.$.welcomeScreen.isQuickStartEnabled = true;
  }

  /**
   * Returns a voice name from |voices| that matches |locale|.
   * Returns undefined if no voice can be found.
   * Both |locale| and |voice.lang| will be in the form 'language-region'.
   * Examples include 'en', 'en-US', 'fr', and 'fr-CA'.
   * @param {Array<!chrome.tts.TtsVoice>} voices
   * @param {string} locale
   * @return {string|undefined}
   * @private
   */
  findVoiceForLocale_(voices, locale) {
    const language = locale.toLowerCase().split('-')[0];
    const voice = voices.find((voice) => {
      return !!(
          voice.lang && voice.lang.toLowerCase().split('-')[0] === language);
    });
    return voice ? voice.voiceName : undefined;
  }

  /**
   * Called if we couldn't find a voice in which to announce the ChromeVox
   * hint.
   * Registers a voiceschanged listener that tries to give the hint when new
   * voices are loaded. Also sets a timeout that gives the hint in the default
   * locale as a last resort.
   * @private
   */
  onVoiceNotLoaded_() {
    if (this.voicesChangedListenerMaybeGiveChromeVoxHint_ === undefined) {
      // Add voiceschanged listener that tries to give the hint when new voices
      // are loaded.
      this.voicesChangedListenerMaybeGiveChromeVoxHint_ = () =>
          this.maybeGiveChromeVoxHint();
      window.speechSynthesis.addEventListener(
          'voiceschanged', this.voicesChangedListenerMaybeGiveChromeVoxHint_,
          false);
    }

    if (!this.defaultChromeVoxHintTimeoutId_) {
      // Set a timeout that gives the ChromeVox hint in the default locale.
      const ttsOptions = /** @type {!chrome.tts.TtsOptions} */ ({
        lang: DEFAULT_CHROMEVOX_HINT_LOCALE,
        extensionId: DEFAULT_CHROMEVOX_HINT_VOICE_EXTENSION_ID,
      });
      this.defaultChromeVoxHintTimeoutId_ = window.setTimeout(
          () => this.giveChromeVoxHint_(
              DEFAULT_CHROMEVOX_HINT_LOCALE, ttsOptions, true),
          this.DEFAULT_CHROMEVOX_HINT_TIMEOUT_MS_);
    }
  }

  /**
   * Shows the ChromeVox hint dialog and plays the spoken announcement. Gives
   * the spoken announcement with the provided options.
   * @param {string} locale
   * @param {!chrome.tts.TtsOptions} options
   * @param {boolean} isDefaultHint
   * @private
   */
  giveChromeVoxHint_(locale, options, isDefaultHint) {
    if (this.chromeVoxHintGiven_) {
      // Only give the hint once.
      // Due to event listeners/timeouts, there is the chance that this gets
      // called multiple times.
      return;
    }

    this.chromeVoxHintGiven_ = true;
    if (isDefaultHint) {
      console.warn(
          'No voice available for ' + loadTimeData.getString('language') +
          ', giving default hint in English.');
    }
    this.cleanupChromeVoxHint_();
    // |msgId| depends on both feature enabled status and tablet mode.
    const msgId = this.$.welcomeScreen.isInTabletMode ?
        'chromeVoxHintAnnouncementTextTabletExpanded' :
        'chromeVoxHintAnnouncementTextLaptopExpanded';

    const message = this.i18n(msgId);
    chrome.tts.speak(message, options, () => {
      this.showChromeVoxHint_();
      chrome.send('WelcomeScreen.recordChromeVoxHintSpokenSuccess');
    });
  }

  /**
   * Clear timeout and remove voiceschanged listener.
   * @private
   */
  cleanupChromeVoxHint_() {
    if (this.defaultChromeVoxHintTimeoutId_) {
      window.clearTimeout(this.defaultChromeVoxHintTimeoutId_);
    }
    window.speechSynthesis.removeEventListener(
        'voiceschanged',
        /** @type {function(this:SpeechSynthesis, Event): *} */
        (this.voicesChangedListenerMaybeGiveChromeVoxHint_),
        /* useCapture */ false);
    this.voicesChangedListenerMaybeGiveChromeVoxHint_ = null;
  }

  /**
   * If it is possible to set up CFM.
   */
  hideCFMSetupButton_(isDeviceRequisitionConfigurable, isMeet) {
    return !isDeviceRequisitionConfigurable && !isMeet;
  }
}

customElements.define(OobeWelcomeScreen.is, OobeWelcomeScreen);
