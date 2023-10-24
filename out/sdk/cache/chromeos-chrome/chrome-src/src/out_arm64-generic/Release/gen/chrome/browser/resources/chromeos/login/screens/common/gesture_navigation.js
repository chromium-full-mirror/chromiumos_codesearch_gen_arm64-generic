// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_cr_lottie.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';


/**
 * Enum to represent each page in the gesture navigation screen.
 * @enum {string}
 */
const GesturePage = {
  INTRO: 'gestureIntro',
  HOME: 'gestureHome',
  OVERVIEW: 'gestureOverview',
  BACK: 'gestureBack',
};

/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  SKIP: 'skip',
  EXIT: 'exit',
  PAGE_CHANGE: 'gesture-page-change',
};


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const GestureScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

class GestureNavigation extends GestureScreenElementBase {
  static get is() {
    return 'gesture-navigation-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2020 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->

<style include="oobe-dialog-host-styles">
  .gesture-animation-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }

  .gesture-list-item {
    display: flex;
    height: 46px;
    padding-bottom: 4px;
  }

  .gesture-list-item-icon {
    --iron-icon-height: 24px;
    --iron-icon-width: 24px;
    align-self: flex-start;
    margin: auto;
  }

  .gesture-list-item-text {
    flex: 1 1 auto;
    font-family: var(--oobe-header-font-family);
    font-size: var(--oobe-gesture-navigation-list-item-font-size);
    font-weight: var(--oobe-header-font-weight);
    margin: auto;
    padding-inline-start: 16px;
  }
</style>
<oobe-adaptive-dialog id="gestureIntro" for-step="gestureIntro"
    role="dialog"
    aria-label$="[[i18nDynamic(locale, 'gestureNavigationIntroTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:gestures"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'gestureNavigationIntroTitle')]]
  </h1>
  <div slot="content" class="landscape-header-aligned
      portrait-horizontal-centered">
    <div class="gesture-list-item">
      <iron-icon class="gesture-list-item-icon" icon="oobe-32:gesture-home">
      </iron-icon>
      <div class="gesture-list-item-text">
        [[i18nDynamic(locale, 'gestureNavigationIntroGoHomeItem')]]
      </div>
    </div>
    <div class="gesture-list-item">
      <iron-icon class="gesture-list-item-icon"
          icon="oobe-32:gesture-overview">
      </iron-icon>
      <div class="gesture-list-item-text">
        [[i18nDynamic(locale, 'gestureNavigationIntroSwitchAppItem')]]
      </div>
    </div>
    <div class="gesture-list-item">
      <iron-icon class="gesture-list-item-icon" icon="oobe-32:gesture-back">
      </iron-icon>
      <div class="gesture-list-item-text">
          [[i18nDynamic(locale, 'gestureNavigationIntroGoBackItem')]]
      </div>
    </div>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button  on-click="onSkip_"
        id="gesture-intro-skip-button"
        text-key="gestureNavigationIntroSkipButton">
    </oobe-text-button>
    <oobe-text-button inverse on-click="onNext_"
        id="gesture-intro-next-button" class="focus-on-show"
        text-key="gestureNavigationIntroNextButton">
    </oobe-text-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="gestureHome" for-step="gestureHome" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'gestureNavigationHomeTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:gesture-home"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'gestureNavigationHomeTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'gestureNavigationHomeDescription')]]
  </p>
  <div slot="content" class="content-centered gesture-animation-container">
    <oobe-cr-lottie class="gesture-animation"
        animation-url="animations/gesture_go_home.json">
  </div>
  <div slot="back-navigation">
    <oobe-back-button on-click="onBack_"
        id="gesture-home-back-button"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button on-click="onNext_" class="focus-on-show"
        id="gesture-home-next-button"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="gestureOverview" for-step="gestureOverview"
    role="dialog"
    aria-label$="[[i18nDynamic(locale, 'gestureNavigationOverviewTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:gesture-overview"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'gestureNavigationOverviewTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'gestureNavigationOverviewDescription')]]
  </p>
  <div slot="content" class="content-centered gesture-animation-container">
    <oobe-cr-lottie class="gesture-animation"
        animation-url="animations/gesture_hotseat_overview.json">
    </oobe-cr-lottie>
  </div>
  <div slot="back-navigation">
    <oobe-back-button on-click="onBack_"
        id="gesture-overview-back-button"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button on-click="onNext_" class="focus-on-show"
        id="gesture-overview-next-button"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>

<oobe-adaptive-dialog id="gestureBack" for-step="gestureBack" role="dialog"
    aria-label$="[[i18nDynamic(locale, 'gestureNavigationBackTitle')]]">
  <iron-icon slot="icon" icon="oobe-32:gesture-back"></iron-icon>
  <h1 slot="title">
    [[i18nDynamic(locale, 'gestureNavigationBackTitle')]]
  </h1>
  <p slot="subtitle">
    [[i18nDynamic(locale, 'gestureNavigationBackDescription')]]
  </p>
  <div slot="content" class="content-centered gesture-animation-container">
    <oobe-cr-lottie animation-url="animations/gesture_go_back.json"
        class="gesture-animation">
    </oobe-cr-lottie>
  </div>
  <div slot="back-navigation">
    <oobe-back-button on-click="onBack_"
        id="gesture-back-back-button"></oobe-back-button>
  </div>
  <div slot="bottom-buttons">
    <oobe-next-button on-click="onNext_" class="focus-on-show"
        id="gesture-back-next-button"></oobe-next-button>
  </div>
</oobe-adaptive-dialog>
<!--_html_template_end_-->`;
  }


  static get properties() {
    return {};
  }

  constructor() {
    super();
    this.UI_STEPS = GesturePage;
  }

  /** @override */
  get EXTERNAL_API() {
    return [];
  }

  /** @override */
  defaultUIStep() {
    return GesturePage.INTRO;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('GestureNavigationScreen');
  }

  /**
   * This is the 'on-tap' event handler for the skip button.
   * @private
   */
  onSkip_() {
    this.userActed(UserAction.SKIP);
  }

  /**
   * This is the 'on-tap' event handler for the 'next' or 'get started' button.
   * @private
   */
  onNext_() {
    switch (this.uiStep) {
      case GesturePage.INTRO:
        this.setCurrentPage_(GesturePage.HOME);
        break;
      case GesturePage.HOME:
        this.setCurrentPage_(GesturePage.OVERVIEW);
        break;
      case GesturePage.OVERVIEW:
        this.setCurrentPage_(GesturePage.BACK);
        break;
      case GesturePage.BACK:
        // Exiting the last page in the sequence - stop the animation, and
        // report exit. Keep the currentPage_ value so the UI does not get
        // updated until the next screen is shown.
        this.setPlayCurrentScreenAnimation(false);
        this.userActed(UserAction.EXIT);
        break;
    }
  }

  /**
   * This is the 'on-tap' event handler for the 'back' button.
   * @private
   */
  onBack_() {
    switch (this.uiStep) {
      case GesturePage.HOME:
        this.setCurrentPage_(GesturePage.INTRO);
        break;
      case GesturePage.OVERVIEW:
        this.setCurrentPage_(GesturePage.HOME);
        break;
      case GesturePage.BACK:
        this.setCurrentPage_(GesturePage.OVERVIEW);
        break;
    }
  }

  /**
   * Set the new page, making sure to stop the animation for the old page and
   * start the animation for the new page.
   * @param {GesturePage} newPage The target page.
   * @private
   */
  setCurrentPage_(newPage) {
    this.setPlayCurrentScreenAnimation(false);
    this.setUIStep(newPage);
    this.userActed([UserAction.PAGE_CHANGE, newPage]);
    this.setPlayCurrentScreenAnimation(true);
  }

  /**
   * This will play or stop the current screen's lottie animation.
   * @param {boolean} enabled Whether the animation should play or not.
   * @private
   */
  setPlayCurrentScreenAnimation(enabled) {
    var animation = this.$[this.uiStep].querySelector('.gesture-animation');
    if (animation) {
      animation.playing = enabled;
    }
  }
}

customElements.define(GestureNavigation.is, GestureNavigation);
