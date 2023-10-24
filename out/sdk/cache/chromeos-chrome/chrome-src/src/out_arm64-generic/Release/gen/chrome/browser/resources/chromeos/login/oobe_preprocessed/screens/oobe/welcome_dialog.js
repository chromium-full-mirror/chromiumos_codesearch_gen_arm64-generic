// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/js/action_link.js';
import '//resources/cr_elements/cr_shared_style.css.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_illo_icons.html.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/oobe_vars/oobe_shared_vars.css.js';
import '../../components/buttons/oobe_icon_button.js';
import '../../components/hd_iron_icon.js';
import '../../components/quick_start_entry_point.js';

import {assert} from '//resources/ash/common/assert.js';
import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeModalDialog} from '../../components/dialogs/oobe_modal_dialog.js';
import {LongTouchDetector} from '../../components/long_touch_detector.js';
import {OobeCrLottie} from '../../components/oobe_cr_lottie.js';

/**
 * @constructor
 * @extends {PolymerElement}
 */
const OobeWelcomeDialogBase =
    mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior], PolymerElement);

/**
 * @typedef {{
 *   title:  HTMLAnchorElement,
 *   chromeVoxHint:  OobeModalDialog,
 *   welcomeAnimation:  OobeCrLottie,
 * }}
 */
OobeWelcomeDialogBase.$;

/**
 * @polymer
 */
export class OobeWelcomeDialog extends OobeWelcomeDialogBase {
  static get is() {
    return 'oobe-welcome-dialog';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2016 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="cr-shared-style oobe-dialog-host-styles">
  :host {
    --oobe-welcome-dialog-horizontal-padding: 40px;
    box-sizing: border-box;
    height: var(--oobe-adaptive-dialog-height);
    padding-bottom: var(--oobe-adaptive-dialog-buttons-vertical-padding);
    padding-inline-end: var(--oobe-welcome-dialog-horizontal-padding);
    padding-inline-start: var(--oobe-welcome-dialog-horizontal-padding);
    padding-top: var(--oobe-adaptive-dialog-back-button-vertical-padding);
    width: var(--oobe-adaptive-dialog-width);
  }
  :host(:host-context(.simon-enabled[orientation='vertical'])) {
    padding-inline-start: calc(var(--oobe-adaptive-dialog-width) / 3);
  }
  :host(:host-context(.simon-enabled[orientation='horizontal'])) {
    padding-inline-start: calc(
      var(--oobe-welcome-dialog-horizontal-padding)
      + var(--oobe-adaptive-dialog-width) / 2);
  }

  #dialog {
    box-sizing: border-box;
    height: 100%;
  }

  #content {
    display: grid;
    flex-grow: 1;
    min-height: 0;
  }
  :host-context(.simon-enabled) #content {
    flex-grow: 0;
  }
  :host-context([orientation='vertical']) #content {
    grid-template-columns: auto;
    grid-template-rows: min-content auto min-content;
  }
  :host-context([orientation='horizontal']) #content {
    grid-template-columns: auto minmax(0, 1fr);
    grid-template-rows: minmax(0, 1fr) minmax(0, 1fr);
  }
  :host-context(.simon-enabled[orientation='horizontal']) #content {
    grid-template-columns: auto;
  }

  #getStarted[disabled] {
    opacity: 0;
  }

  #getStarted {
    transition: opacity 250ms linear 0ms;
  }

  #buttons {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
  :host-context([orientation='vertical']) #buttons {
    align-items: center;
    align-self: center;
    justify-self: center;
  }
  :host-context(.simon-enabled[orientation='vertical']) #buttons {
    align-items: normal;
    align-self: start;
    justify-self: start;
  }
  :host-context([orientation='horizontal']) #buttons {
    align-self: start;
    justify-self: start;
  }

  :host-context([orientation='vertical']) #bottomButtons {
    align-self: end;
    grid-column: 1 / span 1;
    grid-row: 3 / span 1;
    justify-self: center;
  }
  :host-context([orientation='horizontal']) #bottomButtons {
    align-self: end;
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    justify-self: start;
  }
  :host-context(.simon-enabled) #bottomButtons {
    justify-self: end;
    margin-top: 72px;
  }

  #welcomeAnimation {
    min-height: 0;
    min-width: 0;
  }
  :host-context([orientation='vertical']) #welcomeAnimationSlot {
    grid-column: 1 / span 1;
    grid-row: 2 / span 1;
    place-self: stretch;
  }
  :host-context([orientation='horizontal']) #welcomeAnimationSlot {
    align-self: stretch;
    grid-column: 2 / span 1;
    grid-row: 1 / span 2;
  }

  #welcomeAnimationSlot {
    position: relative;
  }

  .stacked-animations {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #accessibilitySettingsButton,
  #timezoneSettingsButton,
  #enableDebuggingButton {
    margin-top: 16px;
  }

  #title {
    color: var(--oobe-header-text-color);
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-welcome-header-font-size);
    line-height: var(--oobe-welcome-header-line-height);
    margin-bottom: 0;
  }
  :host-context([orientation='horizontal']) #title {
    margin-top: 48px;
  }
  :host-context([orientation='vertical']) #title {
    margin-top: 40px;
  }
  :host-context(.simon-enabled) #title {
    font-size: var(--oobe-welcome-header-font-size);
    line-height: var(--oobe-welcome-header-line-height);
    margin-bottom: 48px;
    margin-top: auto;
  }

  #subtitle {
    color: var(--oobe-subheader-text-color);
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-welcome-subheader-font-size);
    line-height: var(--oobe-welcome-subheader-line-height);
    margin-top: 16px;
  }

  :host-context([orientation='horizontal']) #subtitle {
    margin-bottom: 64px;
  }
  :host-context([orientation='vertical']) #subtitle {
    margin-bottom: 40px;
  }

  :host-context(.jelly-enabled) .welcome-left-buttons {
    --oobe-button-font-family: var(--cros-body-0-font-family);
    --oobe-button-font-size: var(--cros-body-0-font-size);
    --oobe-button-font-weight: var(--cros-body-0-font-weight);
    line-height: var(--cros-body-0-line-height);
  }

  .welcome-header-text {
    font-weight: var(--oobe-welcome-header-font-weight);
  }
  :host-context([orientation='vertical']) .welcome-header-text {
    align-self: center;
    text-align: center;
  }
  :host-context(.simon-enabled[orientation='vertical']) .welcome-header-text {
    align-self: auto;
    text-align: start;
  }
  :host-context([orientation='horizontal']) .welcome-header-text {
    text-align: start;
  }

  :host-context(.jelly-enabled) oobe-icon-button.bg-transparent {
    --oobe-button-icon-fill-color: var(--cros-sys-primary);
    --oobe-icon-button-text-color: var(--cros-sys-on_surface_variant);
  }

  .illustration-jelly {
    width: 100%;
    height: 100%;
  }
</style>
<div id="dialog" class="layout vertical">
  <h1 id="title" class="welcome-header-text">
    [[i18nDynamic(locale, 'welcomeScreenGreeting')]]
  </h1>
  <template is="dom-if" if="[[!isSimon_]]">
    <div id="subtitle" class="welcome-header-text">
      [[i18nDynamic(locale, 'welcomeScreenGreetingSubtitle')]]
    </div>
  </template>
  <div id="content">
    <div id="buttons" class="layout vertical welcome-left-buttons">
      <oobe-icon-button
        class="bg-transparent"
        id="languageSelectionButton"
        icon1x="oobe-20:welcome-language"
        icon2x="oobe-40:welcome-language"
        on-click="onLanguageClicked_"
        label-for-aria="[[i18nDynamic(locale, 'languageButtonLabel',
                  currentLanguage)]]"
      >
        <div slot="text">[[currentLanguage]]</div>
      </oobe-icon-button>
      <oobe-icon-button
        class="bg-transparent"
        id="accessibilitySettingsButton"
        text-key="accessibilityLink"
        icon1x="oobe-20:welcome-accessibility"
        icon2x="oobe-40:welcome-accessibility"
        on-click="onAccessibilityClicked_"
      >
      </oobe-icon-button>
      <oobe-icon-button
        class="bg-transparent"
        id="timezoneSettingsButton"
        text-key="timezoneButtonText"
        icon1x="oobe-32:timezone"
        icon2x="oobe-32:timezone"
        on-click="onTimezoneClicked_"
        hidden="[[!timezoneButtonVisible]]"
      >
      </oobe-icon-button>
      <oobe-icon-button
        class="bg-transparent"
        id="enableDebuggingButton"
        text-key="debuggingFeaturesLink"
        icon1x="oobe-32:chromebook"
        icon2x="oobe-32:chromebook"
        on-click="onDebuggingLinkClicked_"
        hidden="[[!debuggingLinkVisible]]"
      >
      </oobe-icon-button>
    </div>
    <div id="bottomButtons" class="layout horizontal">
      <quick-start-entry-point
        id="quick-start-welcome-button"
        on-click="onQuickStartClicked_"
        hidden="[[!isQuickStartEnabled]]"
        quick-start-text-key="welcomeScreenQuickStart">
      </quick-start-entry-point>
      <oobe-text-button
        id="getStarted"
        inverse
        on-click="onNextClicked_"
        text-key="welcomeScreenGetStarted"
      >
      </oobe-text-button>
    </div>
    <template is="dom-if" if="[[showAnimationSlot()]]">
      <div id="welcomeAnimationSlot">
        <template is="dom-if" if="[[!isMeet_]]">
          <iron-icon id="welcomeAnimationFirstFrame" icon="oobe-illos:connect-illo"
              class="illustration-jelly stacked-animations" hidden="[[isOobeLoaded_]]">
          </iron-icon>
          <oobe-cr-lottie
            id="welcomeAnimation" preload
            animation-url="animations/welcome_screen_animation.json"
            class="stacked-animations"
          >
          </oobe-cr-lottie>
        </template>
        <template is="dom-if" if="[[isMeet_]]">
          <img
            src="/images/cfm/welcome.svg"
            class="oobe-illustration"
            id="remoraWelcomeImage"
            aria-hidden="true"
          >
        </template>
      </div>
    </template>
  </div>
</div>
<oobe-modal-dialog id="chromeVoxHint">
  <div id="chromeVoxHintTitle"
    slot="title">
    <hd-iron-icon icon1x="oobe-20:welcome-accessibility"
      icon2x="oobe-40:welcome-accessibility"></hd-iron-icon>
    <p>[[i18nDynamic(locale, 'chromevoxHintTitle')]]</p>
  </div>
  <div id="chromeVoxHintContent"
    slot="content">[[i18nDynamic(locale, 'chromeVoxHintTextExpanded')]]</div>
  <div slot="buttons">
    <oobe-text-button
      id="dismissChromeVoxButton"
      on-click="dismissChromeVoxHint_"
      text-key="chromevoxHintClose"
    >
    </oobe-text-button>
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
       * Controls visibility of "Timezone" button.
       */
      timezoneButtonVisible: Boolean,

      /**
       * Controls displaying of "Enable debugging features" link.
       */
      debuggingLinkVisible: Boolean,

      /**
       * Observer for when this screen is hidden, or shown.
       */
      hidden: {
        type: Boolean,
        observer: 'updateHidden_',
        reflectToAttribute: true,
      },

      isMeet_: {
        type: Boolean,
        value: function() {
          return (
              loadTimeData.valueExists('deviceFlowType') &&
              loadTimeData.getString('deviceFlowType') == 'meet');
        },
        readOnly: true,
      },

      isSimon_: {
        type: Boolean,
        value: function() {
          return (
              loadTimeData.valueExists('isOobeSimonEnabled') &&
              loadTimeData.getBoolean('isOobeSimonEnabled'));
        },
        readOnly: true,
      },

      isDeviceRequisitionConfigurable_: {
        type: Boolean,
        value: function() {
          return loadTimeData.getBoolean('isDeviceRequisitionConfigurable');
        },
        readOnly: true,
      },

      isOobeLoaded_: {
        type: Boolean,
        value: false,
      },

      isQuickStartEnabled: Boolean,
    };
  }

  constructor() {
    super();
    this.currentLanguage = '';
    this.timezoneButtonVisible = false;

    /**
     * @private {LongTouchDetector}
     */
    this.titleLongTouchDetector_ = null;
    /**
     * This is stored ID of currently focused element to restore id on returns
     * to this dialog from Language / Timezone Selection dialogs.
     */
    this.focusedElement_ = null;

    this.isQuickStartEnabled = false;
  }

  ready() {
    super.ready();
    if (loadTimeData.getBoolean('isOobeLazyLoadingEnabled')) {
      // Disable the 'Get Started' & 'Enable Debugging' button until OOBE is
      // fully initialized.
      this.$.getStarted.disabled = true;
      this.$.enableDebuggingButton.disabled = true;
      document.addEventListener(
        'oobe-screens-loaded', this.enableButtonsWhenLoaded.bind(this));
    }
  }

  onBeforeShow() {
    this.setVideoPlay_(true);
  }

  /**
   * Since we prioritize the showing of the the Welcome Screen, it becomes
   * visible before the remaining of the OOBE flow is fully loaded. For this
   * reason, we listen to the |oobe-screens-loaded| signal and enable it.
   */
  enableButtonsWhenLoaded(e) {
    document.removeEventListener(
      'oobe-screens-loaded', this.enableButtonsWhenLoaded.bind(this));
    this.$.getStarted.disabled = false;
    this.$.enableDebuggingButton.disabled = false;
    this.isOobeLoaded_ = true;
  }

  onLanguageClicked_(e) {
    this.focusedElement_ = 'languageSelectionButton';
    this.dispatchEvent(new CustomEvent('language-button-clicked', {
      bubbles: true,
      composed: true,
    }));
  }

  onAccessibilityClicked_() {
    this.focusedElement_ = 'accessibilitySettingsButton';
    this.dispatchEvent(new CustomEvent('accessibility-button-clicked', {
      bubbles: true,
      composed: true,
    }));
  }

  onTimezoneClicked_() {
    this.focusedElement_ = 'timezoneSettingsButton';
    this.dispatchEvent(new CustomEvent('timezone-button-clicked', {
      bubbles: true,
      composed: true,
    }));
  }

  onNextClicked_() {
    this.focusedElement_ = 'getStarted';
    this.dispatchEvent(new CustomEvent(
        'next-button-clicked', {bubbles: true, composed: true}));
  }

  onQuickStartClicked_() {
    assert(this.isQuickStartEnabled);
    this.dispatchEvent(new CustomEvent(
        'quick-start-clicked', {bubbles: true, composed: true}));
  }

  onDebuggingLinkClicked_() {
    this.dispatchEvent(new CustomEvent('enable-debugging-clicked', {
      bubbles: true,
      composed: true,
    }));
  }

  /*
   * This is called from titleLongTouchDetector_ when long touch is detected.
   *
   * @private
   */
  onTitleLongTouch_() {
    this.dispatchEvent(new CustomEvent('launch-advanced-options', {
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * @suppress {missingProperties}
   */
  attached() {
    // Allow opening advanced options only if it is a meet device or device
    // requisition is configurable.
    if (this.isMeet_ || this.isDeviceRequisitionConfigurable_) {
      this.titleLongTouchDetector_ = new LongTouchDetector(
          this.$.title, () => void this.onTitleLongTouch_());
    }
    this.$.chromeVoxHint.addEventListener('keydown', (event) => {
      // When the ChromeVox hint dialog is open, allow users to press the
      // space bar to activate ChromeVox. This is intended to help first time
      // users easily activate ChromeVox.
      if (this.$.chromeVoxHint.open && event.key === ' ') {
        this.activateChromeVox_();
        event.preventDefault();
        event.stopPropagation();
      }
    });
    this.focus();
  }

  focus() {
    if (!this.focusedElement_) {
      this.focusedElement_ = 'getStarted';
    }
    const focusedElement = this.$[this.focusedElement_];
    if (focusedElement) {
      focusedElement.focus();
    }
  }

  /*
   * Observer method for changes to the hidden property.
   * This replaces the show() function, in this class.
   */
  updateHidden_(newValue, oldValue) {
    const visible = !newValue;
    if (visible) {
      this.focus();
    }

    this.setVideoPlay_(visible);
  }

  /**
   * Play or pause welcome video.
   * @param {boolean} play - whether play or pause welcome video.
   * @private
   * @suppress {missingProperties}
   */
  setVideoPlay_(play) {
    // Postpone the call until OOBE is loaded, if necessary.
    if (!this.isOobeLoaded_) {
      document.addEventListener(
        'oobe-screens-loaded', () => {
          this.isOobeLoaded_ = true;
          this.setVideoPlay_(play);
        }, { once: true });
      return;
    }

    if (this.$$('#welcomeAnimation')) {
      this.$$('#welcomeAnimation').playing = play;
    }
  }

  /**
   * This function formats message for labels.
   * @param {string} label i18n string ID.
   * @param {string} parameter i18n string parameter.
   * @private
   */
  formatMessage_(label, parameter) {
    return loadTimeData.getStringF(label, parameter);
  }

  // ChromeVox hint section.

  /**
   * Called to show the ChromeVox hint dialog.
   */
  showChromeVoxHint() {
    this.$.chromeVoxHint.showDialog();
    this.setVideoPlay_(false);
  }

  /**
   * Called to close the ChromeVox hint dialog.
   */
  closeChromeVoxHint() {
    this.setVideoPlay_(true);
    this.$.chromeVoxHint.hideDialog();
  }

  /**
   * Called when the 'Continue without ChromeVox' button is clicked.
   * @private
   */
  dismissChromeVoxHint_() {
    this.dispatchEvent(new CustomEvent('chromevox-hint-dismissed', {
      bubbles: true,
      composed: true,
    }));
    this.closeChromeVoxHint();
  }

  /** @private */
  activateChromeVox_() {
    this.closeChromeVoxHint();
    this.dispatchEvent(new CustomEvent('chromevox-hint-accepted', {
      bubbles: true,
      composed: true,
    }));
  }

  /**
   * Determines if AnimationSlot is needed for specific flow
   */
  showAnimationSlot() {
    return !this.isSimon_;
  }
}

customElements.define(OobeWelcomeDialog.is, OobeWelcomeDialog);
