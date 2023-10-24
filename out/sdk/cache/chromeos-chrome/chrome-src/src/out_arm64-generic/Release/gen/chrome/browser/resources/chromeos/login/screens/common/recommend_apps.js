// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/**
 * @fileoverview Polymer element for displaying material design Recommend Apps
 * screen.
 */

import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';

import {assert, assertNotReached} from '//resources/ash/common/assert.js';
import {loadTimeData} from '//resources/ash/common/load_time_data.m.js';
import {html, mixinBehaviors, Polymer, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeDialogHostBehavior} from '../../components/behaviors/oobe_dialog_host_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OobeTextButton} from '../../components/buttons/oobe_text_button.js';
import {OobeAdaptiveDialog} from '../../components/dialogs/oobe_adaptive_dialog.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';
import {OobeAppsList} from '../../components/oobe_apps_list.js';



/**
 * UI mode for the dialog.
 * @enum {string}
 */
const RecommendAppsUiState = {
  LOADING: 'loading',
  LIST: 'list',
};

const BLANK_PAGE_URL = 'about:blank';

/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 */
const RecommendAppsElementBase = mixinBehaviors(
    [
      OobeI18nBehavior,
      OobeDialogHostBehavior,
      LoginScreenBehavior,
      MultiStepBehavior,
    ],
    PolymerElement);

/**
 * @typedef {{
 *   appsDialog:  OobeAdaptiveDialog,
 *   appView:  WebView,
 *   appsList: OobeAppsList,
 *   installButton:  OobeTextButton,
 * }}
 */
RecommendAppsElementBase.$;

/**
 * @polymer
 */
class RecommendAppsElement extends RecommendAppsElementBase {

  static get is() {
    return 'recommend-apps-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2018 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles action-link">
  #skipButton {
    color: rgba(0, 0, 0, 0.54);
    padding-inline-end: 6px;
  }

  #app-list-view-container {
    overflow-y: auto;
  }
</style>
<oobe-loading-dialog id="loadingDialog" for-step="loading"
    title-key="recommendAppsLoading">
  <iron-icon slot="icon" icon="oobe-32:googleg"></iron-icon>
</oobe-loading-dialog>
<oobe-adaptive-dialog id="appsDialog" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'recommendAppsScreenTitle')]]"
    no-footer-padding footer-shrinkable for-step="list">
  <iron-icon src="../../../arc_support/icon/playstore.svg" slot="icon">
  </iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'recommendAppsScreenTitle')]]
  </h1>
  <div slot="subtitle">
    [[i18nDynamic(locale, 'recommendAppsScreenDescription')]]
  </div>
  <div id="app-list-view-container" slot="content">
    <oobe-apps-list id="appsList" app-list="[[appList_]]"
        apps-selected="{{appsSelected_}}"
        on-apps-list-loaded="onFullyLoaded_">
      <div slot="selectAllTitle">
        [[i18nDynamic(locale, 'recommendAppsSelectAll')]]
      </div>
    </oobe-apps-list>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="skipButton"
        text-key="recommendAppsSkip" on-click="onSkip_" border>
    </oobe-text-button>
    <oobe-text-button id="installButton" on-click="onInstall_" inverse
        text-key="recommendAppsInstall"
        disabled="[[!canProceed_(appsSelected_)]]">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }

  static get properties() {
    return {
      appsSelected_: {
        type: Number,
        value: 0,
      },

      appList_: {
        type: Array,
        value: [],
      },
    };
  }

  constructor() {
    super();
    this.initialized_ = false;
  }

  get EXTERNAL_API() {
    return ['loadAppList'];
  }

  get UI_STEPS() {
    return RecommendAppsUiState;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('RecommendAppsScreen');
  }

  /**
   * Resets screen to initial state.
   * Currently is used for debugging purposes only.
   */
  reset() {
    this.setUIStep(RecommendAppsUiState.LOADING);
    this.appsSelected_ = 0;
    this.appList_ = [];
  }

  /**
   * Returns the control which should receive initial focus.
   */
  get defaultControl() {
    return this.$.appsDialog;
  }

  defaultUIStep() {
    return RecommendAppsUiState.LOADING;
  }

  /**
   * Initial UI State for screen
   */
  getOobeUIInitialState() {
    return OOBE_UI_STATE.ONBOARDING;
  }

  onBeforeHide() {
    this.appList_ = [];
    return;
  }

  /**
   * Generates the contents in the webview.
   */
  loadAppList(appList) {
    const recommendAppsContainsAdsStr = this.i18n('recommendAppsContainsAds');
    const recommendAppsInAppPurchasesStr =
        this.i18n('recommendAppsInAppPurchases');
    const recommendAppsWasInstalledStr = this.i18n('recommendAppsWasInstalled');
    this.appList_ = appList.map(app => {
      const tagList = [app.category];
      if (app.contains_ads) {
        tagList.push(recommendAppsContainsAdsStr);
      }
      if (app.in_app_purchases) {
        tagList.push(recommendAppsInAppPurchasesStr);
      }
      if (app.was_installed) {
        tagList.push(recommendAppsWasInstalledStr);
      }
      if (app.content_rating) {
        tagList.push(app.content_rating);
      }
      return {
        title: app.title,
        icon_url: app.icon_url,
        tags: tagList,
        description: app.description,
        package_name: app.package_name,
        checked: false,
      };
    });
    return;
  }

  /**
   * Handles event when contents in the webview is generated.
   */
  onFullyLoaded_() {
    this.setUIStep(RecommendAppsUiState.LIST);
    this.shadowRoot.querySelector('#appsList').focus();
  }

  /**
   * Handles Skip button click.
   */
  onSkip_() {
    this.userActed('recommendAppsSkip');
  }

  /**
   * Handles Install button click.
   */
  onInstall_() {
    // Button should be disabled if nothing is selected.
    assert(this.appsSelected_ > 0);
    // Can't use this.$.appsList here as the element is in a <dom-if>.
    const appsList = this.shadowRoot.querySelector('#appsList');
    const packageNames = appsList.getSelectedApps();
    this.userActed(['recommendAppsInstall', packageNames]);
  }

  canProceed_(appsSelected) {
    return appsSelected > 0;
  }
}

customElements.define(RecommendAppsElement.is, RecommendAppsElement);
