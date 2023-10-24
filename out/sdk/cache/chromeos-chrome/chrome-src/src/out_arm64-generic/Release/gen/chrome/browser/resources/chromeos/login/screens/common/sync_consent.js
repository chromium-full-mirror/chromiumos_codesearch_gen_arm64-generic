// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design Sync Consent
 * screen.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
// <if expr="_google_chrome">
import '//oobe/sync-consent-icons.m.js';
// </if>

import '../../components/buttons/oobe_text_button.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/hd_iron_icon.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';

import {assert, assertNotReached} from '//resources/ash/common/assert.js';
import {CrCheckboxElement} from '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import {afterNextRender, html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE, SCREEN_GAIA_SIGNIN} from '../../components/display_manager_types.js';


/**
 * UI mode for the dialog.
 * @enum {string}
 */
const SyncUIState = {
  ASH_SYNC: 'ash-sync',
  LOADING: 'loading',
  LACROS_OVERVIEW: 'lacros-overview',
  LACROS_CUSTOMIZE: 'lacros-customize',
};


/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  CONTINUE: 'continue',
  SYNC_EVERYTHING: 'sync-everything',
  SYNC_CUSTOM: 'sync-custom',
  LACROS_DECLINE: 'lacros-decline',
};


/**
 *  A set of flags of sync options for ChromeOS OOBE.
 * @typedef {{
 *   osApps: boolean,
 *   osPreferences: boolean,
 *   osWifiConfigurations: boolean,
 *   osWallpaper: boolean,
 * }}
 */
export let OsSyncItems;

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const SyncConsentScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * @typedef {{
 *   reviewSettingsBox:  HTMLElement,
 * }}
 */
SyncConsentScreenElementBase.$;

/**
 * @polymer
 */
class SyncConsentScreen extends SyncConsentScreenElementBase {
  static get is() {
    return 'sync-consent-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2017 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles cros-color-overrides">
  .overview-list-item {
    border-top: 1px solid var(--cros-sys-separator);
    padding: 16px;
  }

  .overview-list-item:last-of-type {
    border-bottom: 1px solid var(--cros-sys-separator);
    margin-bottom: 0;
  }

  .overview-list-item-title {
    font-size: var(--oobe-sync-consent-list-item-title-font-size);
    font-weight: var(--oobe-sync-consent-list-item-title-font-weight);
    line-height: var(--oobe-sync-consent-list-item-title-line-height);
    margin-bottom: 4px;
  }

  .overview-list-item-icon {
    padding-inline-end: 16px;
    --iron-icon-fill-color: var(--cros-icon-color-blue);
    --iron-icon-height: 24px;
    --iron-icon-width: 24px;
  }

  :host-context(.jelly-enabled) .overview-list-item-icon {
    --iron-icon-fill-color: var(--cros-sys-primary);
  }

  .overview-list-item-description {
    padding-inline-end: 16px;
  }

  cr-checkbox {
    align-self: start; /* Prevent label from spanning the whole width. */
    margin-top: 16px;
    padding-inline-start: 8px;
    --cr-checkbox-label-padding-start: 12px;
  }

  img[slot='subtitle'] {
    padding-top: 20px;
  }

  @media screen and (max-height: 610px) {
    :host-context([screen=gaia-signin]) img[slot='subtitle'] {
      display: none;
    }
  }

  @media screen and (max-height: 740px) {
    :host-context([screen=oobe]) img[slot='subtitle'] {
      display: none;
    }
  }

  :host-context([orientation=vertical]) #syncConsentOverviewDialog {
    --oobe-adaptive-dialog-content-top-padding: 20px;
  }

  cr-toggle {
    align-self: center;
    margin-inline-end: 12px;
    margin-inline-start: auto;
  }

  .card {
    align-items: center;
    display: flex;
    padding: 16px 10px 16px 0;
  }

  .card:not(:last-child) {
    box-shadow: 0 1px 0 var(--cros-separator-color);
  }

  .card-icon {
    align-items: center;
    align-self: center;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-inline-end: 16px;
    --iron-icon-fill-color: var(--cros-icon-color-blue);
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
  }

  #tooltip-icon {
    --iron-icon-height: 32px;
    --iron-icon-width: 32px;
  }

  :host-context(.jelly-enabled) .card-icon {
    --iron-icon-fill-color: var(--cros-sys-primary);
  }

  .card-title {
    color: var(--cros-text-color-primary);
    font: var(--oobe-sync-consent-card-title-font);
  }

  :host-context(.jelly-enabled) .card-title {
    color: var(--oobe-text-color);
  }

  .card-subtitle {
    color: var(--cros-text-color-secondary);
    font: var(--oobe-sync-consent-card-subtitle-font);
  }

  :host-context(.jelly-enabled) .card-subtitle {
    color: var(--oobe-subheader-text-color);
  }

  .tooltip-text {
    font: var(--oobe-sync-consent-tooltip-text-font);
  }

  #tooltip-element {
    --paper-tooltip-background: var(--cros-bg-color);
    --paper-tooltip-text-color: var(--cros-text-color-primary);
    border-radius: 6px;
    box-shadow: 0 1px 3px var(--cros-shadow-color-key),
                0 4px 8px var(--cros-separator-color);
    width: 444px;
  }

  :host-context(.jelly-enabled) #tooltip-element {
    --paper-tooltip-background: var(--cros-sys-base_elevated);
    --paper-tooltip-text-color: var(--oobe-text-color);
  }

  .bottom-buttons {
    display: flex;
    justify-content: space-between;
    width:100%;
  }

  #rightButtons {
    display: flex;
  }
</style>

<oobe-adaptive-dialog id="syncConsentOverviewDialog" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'syncConsentScreenTitle')]]"
    for-step="ash-sync">
  <iron-icon slot="icon" icon="sync-consent-32:googleg"></iron-icon>
  <h1 slot="title" consent-description hidden="[[isLacrosEnabled_]]">
    [[i18nDynamic(locale, 'syncConsentScreenTitle')]]
  </h1>
  <h1 slot="title" consent-description hidden="[[!isLacrosEnabled_]]">
    [[i18nDynamic(locale, 'syncConsentScreenTitleArcRestrictions')]]
  </h1>
  <div slot="subtitle" consent-description hidden="[[isLacrosEnabled_]]">
    [[i18nDynamic(locale, 'syncConsentScreenSubtitle')]]
  </div>
  <iron-icon slot="subtitle-illustration" icon="oobe-illos:sync-consent-illo"
      class="illustration-jelly">
  </iron-icon>
  </div>
  <div slot="content" class="landscape-header-aligned">
    <div class="overview-list-item layout horizontal"
        hidden="[[isLacrosEnabled_]]">
      <iron-icon icon="oobe-24:settings-gear" class="overview-list-item-icon"
          aria-hidden="true"></iron-icon>
      <div class="flex layout vertical center-justified">
        <div role="heading" aria-level="2" class="overview-list-item-title"
            consent-description>
          [[i18nDynamic(locale, 'syncConsentScreenOsSyncTitle')]]
        </div>
      </div>
    </div>
    <div class="overview-list-item layout horizontal"
        hidden="[[isLacrosEnabled_]]">
      <iron-icon icon="oobe-24:browser-sync" class="overview-list-item-icon"
          aria-hidden="true"></iron-icon>
      <div class="flex layout vertical center-justified">
        <div role="heading" aria-level="2" class="overview-list-item-title"
            consent-description>
          [[i18nDynamic(locale, 'syncConsentScreenChromeBrowserSyncTitle')]]
        </div>
        <div class="overview-list-item-description" consent-description>
          [[i18nDynamic(locale,
              'syncConsentScreenChromeBrowserSyncDescription')]]
        </div>
      </div>
    </div>
    <div hidden="[[!isLacrosEnabled_]]" consent-description>
      [[i18nDynamic(locale,
          'syncConsentScreenOsSyncDescriptionArcRestrictions')]]
    </div>

    <cr-checkbox id="reviewSettingsBox" hidden="[[isMinorMode_]]"
        consent-description>
      [[getReviewSettingText_(locale, isLacrosEnabled_)]]
    </cr-checkbox>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="declineButton"
        on-click="onDeclined_" hidden="[[!isMinorMode_]]"
        label-for-aria="[[i18nDynamic(locale,
                                      'syncConsentScreenDecline')]]">
      <div slot="text" consent-description consent-confirmation>
        [[i18nDynamic(locale, 'syncConsentScreenDecline')]]
      </div>
    </oobe-text-button>
    <oobe-text-button class="focus-on-show" inverse="[[!isMinorMode_]]"
        id="acceptButton"
        on-click="onAccepted_"
        label-for-aria="[[i18nDynamic(locale, optInButtonTextKey_)]]">
      <div slot="text" consent-description consent-confirmation>
        [[i18nDynamic(locale, optInButtonTextKey_)]]
      </div>
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-loading-dialog id="sync-loading" role="dialog" for-step="loading"
    title-key="gaiaLoading">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>

<oobe-adaptive-dialog id="syncConsentLacrosOverviewDialog" role="dialog"
  for-step="lacros-overview">
  <iron-icon slot="icon" icon="oobe-32:sync-chrome"></iron-icon>
  <h1 slot="title" consent-description>
    [[i18nDynamic(locale, 'syncConsentScreenTitleLacros')]]
  </h1>
  <div slot="subtitle">
    <p consent-description>
      [[i18nDynamic(locale, 'syncConsentScreenSubtitleLacros')]]
    </p>
    <p consent-description>
      [[i18nDynamic(locale, 'syncConsentScreenAdditionalSubtitleLacros')]]
    </p>
  </div>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <iron-icon icon="oobe-illos:sync-consent-illo" class="illustration-jelly">
    </iron-icon>
  </div>
  <div slot="bottom-buttons" hidden="[[isMinorMode_]]">
    <oobe-text-button id="manageButtonRegularUser"
        on-click="onManageClicked_"
        label-for-aria="[[i18nDynamic(locale, 'syncConsentScreenManage')]]">
      <div slot="text" consent-description consent-confirmation>
        [[i18nDynamic(locale, 'syncConsentScreenManage')]]
      </div>
    </oobe-text-button>
    <oobe-text-button class="focus-on-show" inverse
        id="syncEverythingButton"
        on-click="onSyncEverything_"
        label-for-aria="[[i18nDynamic(locale, 'syncConsentTurnOnSync')]]">
      <div slot="text" consent-description consent-confirmation>
        [[i18nDynamic(locale, 'syncConsentTurnOnSync')]]
      </div>
    </oobe-text-button>
  </div>
  <div class="bottom-buttons" slot="bottom-buttons" hidden="[[!isMinorMode_]]">
    <oobe-text-button id="manageButtonMinorUser"
        on-click="onManageClicked_"
        label-for-aria="[[i18nDynamic(locale, 'syncConsentScreenManage')]]">
      <div slot="text" consent-description consent-confirmation>
        [[i18nDynamic(locale, 'syncConsentScreenManage')]]
      </div>
    </oobe-text-button>
    <div id="rightButtons">
      <oobe-text-button id="declineLacrosButton"
          on-click="onLacrosDeclineClicked_"
          label-for-aria="[[i18nDynamic(locale,
                                          'syncConsentScreenDecline')]]">
        <div slot="text" consent-description consent-confirmation>
          [[i18nDynamic(locale, 'syncConsentScreenDecline')]]
        </div>
      </oobe-text-button>
      <oobe-text-button class="focus-on-show"
          id="syncEverythingButton"
          on-click="onSyncEverything_"
          label-for-aria="[[i18nDynamic(locale, 'syncConsentTurnOnSync')]]">
        <div slot="text" consent-description consent-confirmation>
          [[i18nDynamic(locale, 'syncConsentTurnOnSync')]]
        </div>
      </oobe-text-button>
    </div>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="syncConsentLacrosCustomizeDialog" role="dialog"
  for-step="lacros-customize">
  <iron-icon slot="icon" icon="oobe-32:sync-chrome"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'syncConsentScreenManageTitleLacros')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'syncConsentScreenManageSubtitleLacros')]]
  </div>
  <div slot="back-navigation">
    <oobe-back-button id="backButton"
        on-click="onBackClicked_"></oobe-back-button>
  </div>
  <div slot="content" class="layout vertical landscape-header-aligned ">
    <div id="cards-container">
      <!--Apps card-->
      <div class="card layout horizontal">
        <div class="card-icon">
          <iron-icon icon="oobe-32:sync-app"></iron-icon>
        </div>
        <div aria-hidden="true"
            class="text-container flex layout vertical center-justified">
          <div class="card-title">
            [[i18nDynamic(locale,
                'syncConsentScreenOsSyncItemOptionAppsTitle')]]
          </div>
          <div class="card-subtitle">
            [[i18nDynamic(locale,
                'syncConsentScreenOsSyncItemOptionAppsSubtitle')]]
          </div>
        </div>
        <div style="display:inline-block">
          <iron-icon id="tooltip-icon" icon="oobe-32:sync-tooltip"
            role="img" aria-label$="[[getAriaLabeltooltip_(locale)]]">
          </iron-icon>
          <paper-tooltip id="tooltip-element" position="left"
              aria-hidden="true"
              for="tooltip-icon"
              animation-delay="0">
            <p  class="tooltip-text">
              [[i18nDynamic(locale,
                'syncConsentScreenOsSyncAppsTooltipText')]]
            </p>
            <p  class="tooltip-text">
              [[i18nDynamic(locale,
                'syncConsentScreenOsSyncAppsTooltipAdditionalText')]]
            </p>
          </paper-tooltip>
        </div>
        <cr-toggle id="appsTogglebutton" checked="{{osSyncItemsStatus.osApps}}"
          aria-label$="[[getAriaLabelToggleButtons_(locale,
            'syncConsentScreenOsSyncItemOptionAppsTitle' ,
            'syncConsentScreenOsSyncItemOptionAppsSubtitle')]]">
        </cr-toggle>
      </div>
       <!--Settings card-->
      <div class="card layout horizontal">
        <div class="card-icon">
          <iron-icon icon="oobe-32:sync-settings"></iron-icon>
        </div>
        <div aria-hidden="true" class="text-container">
          <div class="card-title">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionSettingsTitle')]]
          </div>
          <div class="card-subtitle">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionSettingsSubtitle')]]
          </div>
        </div>
        <cr-toggle id="settingsTogglebutton"
                   on-change="onSettingsSyncedChanged_"
                   checked="{{osSyncItemsStatus.osPreferences}}"
                   aria-label$="[[getAriaLabelToggleButtons_(locale,
                      'syncConsentScreenOsSyncItemOptionSettingsTitle' ,
                      'syncConsentScreenOsSyncItemOptionSettingsSubtitle')]]">
        </cr-toggle>
      </div>
      <!--Wifi card-->
      <div class="card layout horizontal">
        <div class="card-icon">
          <iron-icon icon="oobe-32:sync-wifi"></iron-icon>
        </div>
        <div aria-hidden="true" class="text-container">
          <div class="card-title">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionWifiTitle')]]
          </div>
          <div class="card-subtitle">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionWifiSubtitle')]]
          </div>
        </div>
        <cr-toggle id="wifiTogglebutton"
            checked="{{osSyncItemsStatus.osWifiConfigurations}}"
            aria-label$="[[getAriaLabelToggleButtons_(locale,
                      'syncConsentScreenOsSyncItemOptionWifiTitle' ,
                      'syncConsentScreenOsSyncItemOptionWifiSubtitle')]]">
        </cr-toggle>
      </div>
       <!--Wallpaper card-->
      <div class="card layout horizontal">
        <div class="card-icon">
          <iron-icon icon="oobe-32:sync-wallpaper"></iron-icon>
        </div>
        <div aria-hidden="true" class="text-container">
          <div class="card-title">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionWallpaperTitle')]]
          </div>
          <div class="card-subtitle">
            [[i18nDynamic(locale,
              'syncConsentScreenOsSyncItemOptionWallpaperSubtitle')]]
          </div>
        </div>
        <cr-toggle id="wallpaperTogglebutton"
                   checked="{{osSyncItemsStatus.osWallpaper}}"
                   disabled="[[!osSyncItemsStatus.osPreferences]]"
                   aria-label$="[[getAriaLabelToggleButtons_(locale,
                      'syncConsentScreenOsSyncItemOptionWallpaperTitle' ,
                      'syncConsentScreenOsSyncItemOptionWallpaperSubtitle')]]">
        </cr-toggle>
      </div>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button id="nextButton" class="focus-on-show"
      on-click="onNextClicked_">
    </oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      /**
       * OS Sync options status.
       * @type {!OsSyncItems}
       */
      osSyncItemsStatus: {
        type: Object,
        notify: true,
      },

      /**
       * Indicates whether user is minor mode user (e.g. under age of 18).
       * @private
       */
      isMinorMode_: Boolean,

      /**
       * Indicates whether Lacros is enabled.
       * @private
       */
      isLacrosEnabled_: Boolean,

      /**
       * The text key for the opt-in button (it could vary based on whether
       * the user is in minor mode).
       * @private
       */
      optInButtonTextKey_: {
        type: String,
        computed: 'getOptInButtonTextKey_(isMinorMode_)',
      },

      /**
       * Array of strings of the consent description elements
       * @private
       */
      consentDescription_: {
        type: Array,
      },

      /**
       * The text of the consent confirmation element.
       * @private
       */
      consentConfirmation_: {
        type: String,
      },


    };
  }

  constructor() {
    super();
    this.UI_STEPS = SyncUIState;

    this.isMinorMode_ = false;
    this.isLacrosEnabled_ = false;
    this.osSyncItemsStatus = {
      osApps: true,
      osPreferences: true,
      osWifiConfigurations: true,
      osWallpaper: true,
    };
  }

  get EXTERNAL_API() {
    return ['showLoadedStep', 'setIsMinorMode'];
  }

  /** Initial UI State for screen */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  /**
   * Event handler that is invoked just before the screen is shown.
   * @param {Object} data Screen init payload.
   */
  onBeforeShow(data) {
    this.isLacrosEnabled_ = data['isLacrosEnabled'];
  }

  defaultUIStep() {
    return SyncUIState.LOADING;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('SyncConsentScreen');

    if (this.locale === '') {
      // Update the locale just in case the locale switched between the element
      // loading start and `ready()` event (see https://crbug.com/1289095).
      this.i18nUpdateLocale();
    }
  }


  /**
   * Wallpaper sync is a special case; its implementation relies upon
   * OS Settings to be synced. Thus, the wallpaper label and toggle are
   * only enabled when the Settings sync toggle is on.
   */
  onSettingsSyncedChanged_() {
    this.set(
        'osSyncItemsStatus.osWallpaper', this.osSyncItemsStatus.osPreferences);
  }

  /**
   * Reacts to changes in loadTimeData.
   */
  updateLocalizedContent() {
    this.i18nUpdateLocale();
  }


  /**
   * This is called when SyncScreenBehavior becomes Shown.
   * @param {boolean} isSyncLacros
   */
  showLoadedStep(isSyncLacros) {
    if (isSyncLacros) {
      this.showLacrosOverview();
    } else {
      this.showAshSync();
    }
  }

  /**
   * This is called to set ash-sync step.
   */
  showAshSync() {
    this.setUIStep(SyncUIState.ASH_SYNC);
  }

  /**
   * This is called to set lacros-overview step.
   */
  showLacrosOverview() {
    this.setUIStep(SyncUIState.LACROS_OVERVIEW);
  }

  /**
   * This is called to set lacros-customize step.
   */
  showLacrosCustomize() {
    this.setUIStep(SyncUIState.LACROS_CUSTOMIZE);
  }

  /**
   * Set the minor mode flag, which controls whether we could use nudge
   * techinuque on the UI.
   * @param {boolean} isMinorMode
   */
  setIsMinorMode(isMinorMode) {
    this.isMinorMode_ = isMinorMode;
  }

  /**
   * Continue button is clicked
   * @private
   */
  onSettingsSaveAndContinue_(e, opted_in) {
    assert(e.composedPath());
    this.userActed([
      UserAction.CONTINUE,
      opted_in,
      this.$.reviewSettingsBox.checked,
      this.getConsentDescription_(),
      this.getConsentConfirmation_(
          /** @type {!Array<!HTMLElement>} */ (e.composedPath())),
    ]);
  }

  onAccepted_(e) {
    this.onSettingsSaveAndContinue_(e, true /* opted_in */);
  }

  onDeclined_(e) {
    this.onSettingsSaveAndContinue_(e, false /* opted_in */);
  }

  /**
   * @param {!Array<!HTMLElement>} path Path of the click event. Must contain
   *     a consent confirmation element.
   * @return {string} The text of the consent confirmation element.
   * @private
   */
  getConsentConfirmation_(path) {
    for (const element of path) {
      if (!element.hasAttribute) {
        continue;
      }

      if (element.hasAttribute('consent-confirmation')) {
        return element.innerHTML.trim();
      }

      // Search down in case of click on a button with description below.
      const labels = element.querySelectorAll('[consent-confirmation]');
      if (labels && labels.length > 0) {
        assert(labels.length == 1);

        let result = '';
        for (const label of labels) {
          result += label.innerHTML.trim();
        }
        return result;
      }
    }
    assertNotReached('No consent confirmation element found.');
    return '';
  }

  /** @return {!Array<string>} Text of the consent description elements. */
  getConsentDescription_() {
    const consentDescription =
        Array.from(this.shadowRoot.querySelectorAll('[consent-description]'))
            .filter(element => element.clientWidth * element.clientHeight > 0)
            .map(element => element.innerHTML.trim());
    assert(consentDescription);
    return consentDescription;
  }

  getReviewSettingText_(locale, isArcRestricted) {
    if (isArcRestricted) {
      return this.i18n('syncConsentReviewSyncOptionsWithArcRestrictedText');
    }
    return this.i18n('syncConsentReviewSyncOptionsText');
  }

  /**
   * @param {boolean} isMinorMode
   * @return {string} The text key of the accept button.
   */
  getOptInButtonTextKey_(isMinorMode) {
    return isMinorMode ? 'syncConsentTurnOnSync' :
                         'syncConsentAcceptAndContinue';
  }

  onSyncEverything_(e) {
    this.userActed([
      UserAction.SYNC_EVERYTHING,
      this.getConsentDescription_(),
      this.getConsentConfirmation_(
          /** @type {!Array<!HTMLElement>} */ (e.composedPath())),
    ]);
  }

  onManageClicked_(e) {
    this.consentDescription_ = this.getConsentDescription_();
    this.consentConfirmation_ = this.getConsentConfirmation_(
        /** @type {!Array<!HTMLElement>} */ (e.composedPath()));
    this.showLacrosCustomize();
  }

  onBackClicked_() {
    this.showLacrosOverview();
  }

  onNextClicked_() {
    this.userActed([
      UserAction.SYNC_CUSTOM,
      this.osSyncItemsStatus,
      this.consentDescription_,
      this.consentConfirmation_,
    ]);
  }

  onLacrosDeclineClicked_() {
    this.userActed(UserAction.LACROS_DECLINE);
  }

  getAriaLabeltooltip_(locale) {
    return this.i18nDynamic(locale, 'syncConsentScreenOsSyncAppsTooltipText') +
        this.i18nDynamic(
            locale, 'syncConsentScreenOsSyncAppsTooltipAdditionalText');
  }

  getAriaLabelToggleButtons_(locale, title, subtitle) {
    return this.i18nDynamic(locale, title) + '. ' +
        this.i18nDynamic(locale, subtitle);
  }
}

customElements.define(SyncConsentScreen.is, SyncConsentScreen);
