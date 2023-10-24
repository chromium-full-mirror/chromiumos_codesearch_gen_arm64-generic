// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for theme selection screen.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_radio_button/cr_radio_button.js';
import '//resources/cr_elements/cr_radio_group/cr_radio_group.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/cr_card_radio_group_styles.css.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';

import {html, mixinBehaviors, PolymerElement} from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';

import {LoginScreenBehavior, LoginScreenBehaviorInterface} from '../../components/behaviors/login_screen_behavior.js';
import {MultiStepBehavior, MultiStepBehaviorInterface} from '../../components/behaviors/multi_step_behavior.js';
import {OobeI18nBehavior, OobeI18nBehaviorInterface} from '../../components/behaviors/oobe_i18n_behavior.js';
import {OOBE_UI_STATE} from '../../components/display_manager_types.js';


/**
 * @constructor
 * @extends {PolymerElement}
 * @implements {LoginScreenBehaviorInterface}
 * @implements {OobeI18nBehaviorInterface}
 * @implements {MultiStepBehaviorInterface}
 */
const ThemeSelectionScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * Enum to represent steps on the theme selection screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 * @enum {string}
 */
const ThemeSelectionStep = {
  OVERVIEW: 'overview',
};

/**
 * Available themes. The values should be in sync with the enum
 * defined in theme_selection_screen.h
 * @enum {number}
 */
const SelectedTheme = {
  AUTO: 0,
  DARK: 1,
  LIGHT: 2,
};

/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  SELECT: 'select',
  NEXT: 'next',
  RETURN: 'return',
};

/**
 * @polymer
 */
class ThemeSelectionScreen extends ThemeSelectionScreenElementBase {
  static get is() {
    return 'theme-selection-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2022 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles cr-card-radio-group-styles
    cros-color-overrides">
  .card-container {
    padding-inline-start: 16px;
  }

  @media screen and (max-width: 920px) {
    .oobe-illustration {
      height: 50%;
    }
    cr-card-radio-button:not(:last-child) {
      margin-bottom: 10px;
    }
    .card-container {
      padding-inline-start: 24px;
    }
  }
</style>
<oobe-adaptive-dialog id="themeSelectionDialog" role="presentation"
    for-step="overview" aria-live="polite">
  <iron-icon slot="icon" icon="oobe-32:theme-light"></iron-icon>
  <h1 slot="title" id="theme-selection-title">
    [[i18nDynamic(locale, 'themeSelectionScreenTitle')]]
  </h1>
  <div hidden="[[isInTabletMode_]]" slot="subtitle"
      id="theme-selection-subtitle-clamshell">
    [[i18nDynamic(locale, 'themeSelectionScreenDescriptionClamshell')]]
  </div>
  <div hidden="[[!isInTabletMode_]]" slot="subtitle"
      id="theme-selection-subtitle-tablet">
    [[i18nDynamic(locale, 'themeSelectionScreenDescriptionTablet')]]
  </div>
  <div slot="content" class="layout vertical landscape-vertical-centered">
    <cr-radio-group id="theme" selected="{{selectedTheme}}">
      <cr-card-radio-button id="lightThemeButton" class="flex" name="light">
        <div class="card-container">
          <img srcset="images/1x/thumbnail-theme-light-1x.png,
              images/2x/thumbnail-theme-light-2x.png"
              class="oobe-illustration">
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'lightThemeLabel')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale, 'lightThemeDescription')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="darkThemeButton" class="flex"
          name="dark">
        <div class="card-container">
          <img srcset="images/1x/thumbnail-theme-dark-1x.png,
              images/2x/thumbnail-theme-dark-2x.png"
              class="oobe-illustration">
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'darkThemeLabel')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale, 'darkThemeDescription')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
      <cr-card-radio-button id="autoThemeButton" class="flex"
          name="auto">
        <div class="card-container">
          <img srcset="images/1x/thumbnail-theme-auto-1x.png,
              images/2x/thumbnail-theme-auto-2x.png"
              class="oobe-illustration">
          <div class="card-content">
            <div class="card-label">
              [[i18nDynamic(locale, 'autoThemeLabel')]]
            </div>
            <div class="card-text">
              [[i18nDynamic(locale, 'autoThemeDescription')]]
            </div>
          </div>
        </div>
      </cr-card-radio-button>
    </cr-radio-group>
  </div>
  <div slot="bottom-buttons">
    <oobe-text-button id="returnButton" text-key="choobeReturnButton"
      hidden="[[!shouldShowReturn_]]" on-click="onReturnClicked_">
    </oobe-text-button>
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
       * Indicates selected theme
       * @private
       */
      selectedTheme: {type: String, value: 'auto', observer: 'onThemeChanged_'},

      /**
       * Indicates if the device is used in tablet mode
       * @private
       */
      isInTabletMode_: {
        type: Boolean,
        value: false,
      },

      /**
       * Whether the button to return to CHOOBE screen should be shown.
       * @private
       */
      shouldShowReturn_: {
        type: Boolean,
        value: false,
      },
    };
  }

  get UI_STEPS() {
    return ThemeSelectionStep;
  }

  defaultUIStep() {
    return ThemeSelectionStep.OVERVIEW;
  }

  /**
   * Updates "device in tablet mode" state when tablet mode is changed.
   * Overridden from LoginScreenBehavior.
   * @param {boolean} isInTabletMode True when in tablet mode.
   */
  setTabletModeState(isInTabletMode) {
    this.isInTabletMode_ = isInTabletMode;
  }

  ready() {
    super.ready();
    this.initializeLoginScreen('ThemeSelectionScreen');
  }

  onBeforeShow(data) {
    if ('selectedTheme' in data) {
      this.selectedTheme = data.selectedTheme;
    }
    this.shouldShowReturn_ = data['shouldShowReturn'];
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.THEME_SELECTION;
  }

  onNextClicked_() {
    this.userActed(UserAction.NEXT);
  }

  onThemeChanged_(themeSelect, oldTheme) {
    if (oldTheme === undefined) {
      return;
    }
    if (themeSelect === 'auto') {
      this.userActed([UserAction.SELECT, SelectedTheme.AUTO]);
    }
    if (themeSelect === 'light') {
      this.userActed([UserAction.SELECT, SelectedTheme.LIGHT]);
    }
    if (themeSelect === 'dark') {
      this.userActed([UserAction.SELECT, SelectedTheme.DARK]);
    }
  }

  onReturnClicked_() {
    this.userActed(UserAction.RETURN);
  }
}
customElements.define(ThemeSelectionScreen.is, ThemeSelectionScreen);
