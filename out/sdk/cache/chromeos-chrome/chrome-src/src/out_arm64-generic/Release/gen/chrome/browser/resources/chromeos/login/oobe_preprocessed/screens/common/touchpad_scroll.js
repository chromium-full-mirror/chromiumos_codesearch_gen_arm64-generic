// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for touchpad scroll screen.
 */

import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/oobe_icons.html.js';
import '../../components/oobe_illo_icons.html.js';
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
const TouchpadScrollScreenElementBase = mixinBehaviors(
    [OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);

/**
 * Enum to represent steps on the touchpad scroll screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 * @enum {string}
 */
const TouchpadScrollStep = {
  OVERVIEW: 'overview',
};


/**
 * Available user actions.
 * @enum {string}
 */
const UserAction = {
  NEXT: 'next',
  REVERSE: 'update-scroll',
  RETURN: 'return',
};

/**
 * @polymer
 */
class TouchpadScrollScreen extends TouchpadScrollScreenElementBase {
  static get is() {
    return 'touchpad-scroll-element';
  }

  static get template() {
    return html`<!--_html_template_start_-->
<!--
Copyright 2023 The Chromium Authors
Use of this source code is governed by a BSD-style license that can be
found in the LICENSE file.
-->
<style include="oobe-dialog-host-styles cros-color-overrides">

#scrollArea {
  display: flex;
  max-height: 324px;
  height: 1290px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(var(--cros-icon-color-secondary-rgb), 0.3);
  border-radius: 16px;
}

#toggleElementBox {
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 25px;
}

#areaText {
  color: var(--cros-text-color-primary);
  font-size: 14px;
  font-weight: 500; /* roboto-medium */
  left: 20px;
  line-height: 20px;
  padding-top: 20px;
  position: sticky;
  top: 0px;
  z-index : 1;
}

:host-context(.jelly-enabled) #areaText {
  color: var(--oobe-text-color);
  font-size: var(--oobe-touchpad-scroll-font-size);
  font-weight: var(--oobe-touchpad-scroll-font-weight);
  line-height: var(--oobe-touchpad-scroll-line-height);
}

#toggleTitle {
  color: var(--cros-text-color-primary);
}

:host-context(.jelly-enabled) #toggleTitle {
  color: var(--oobe-text-color);
}

.illustration-jelly {
  width: 100%;
  height: auto;
  position: absolute;
}

@media screen and (max-width: 700px) {
  #scrollArea {
    max-height: 250px;
  }
}

</style>
<oobe-adaptive-dialog id="touchpadScrolDialogue" role="presentation"
    for-step="overview">
  <iron-icon slot="icon" icon="oobe-32:scroll-direction"></iron-icon>
  <h1 slot="title" id="touchpad-scroll-title">
    [[i18nDynamic(locale, 'TouchpadScrollScreenTitle')]]
  </h1>
  <div slot="subtitle" id="touchpad-scroll-subtitle">
    [[i18nDynamic(locale, 'TouchpadScrollScreenDescription')]]
  </div>
  <div slot="content" class="layout vertical center-justified">
    <div id="scrollArea" aria-hidden="true">
      <div id="areaText">
        [[i18nDynamic(locale, 'TouchpadScrollAreaDescription')]]
      </div>
      <iron-icon id="iconArea" icon="oobe-illos:touchpad-scroll-illo"
        class="illustration-jelly">
      </iron-icon>
    </div>
    <div id="toggleElementBox" class="layout horizontal">
        <div class="flex layout vertical center-justified">
          <div id="toggleTitle" aria-hidden="true">
            [[i18nDynamic(locale, 'TouchpadScrollToggleTitle')]]
          </div>
          <div id="toggleDesc" aria-hidden="true">
            [[i18nDynamic(locale, 'TouchpadScrollToggleDescription')]]
          </div>
        </div>
        <cr-toggle id="updateToggle" checked="{{isReverseScrolling_}}"
            role="checkbox"
            aria-checked="[[isReverseScrolling_]]"
            aria-label$="[[getAriaLabelToggleButtons_(locale,
                'TouchpadScrollToggleTitle' ,
                'TouchpadScrollToggleDescription')]]">
        </cr-toggle>
    </div>
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
      isReverseScrolling_: {
        type: Boolean,
        value: false,
        observer: 'onCheckChanged_',
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

  constructor() {
    super();
    this.resizeobserver_ = new ResizeObserver(() => this.onresize());
  }

  get EXTERNAL_API() {
    return ['setReverseScrolling'];
  }

  get UI_STEPS() {
    return TouchpadScrollStep;
  }

  defaultUIStep() {
    return TouchpadScrollStep.OVERVIEW;
  }

  /** @override */
  ready() {
    super.ready();
    this.initializeLoginScreen('TouchpadScrollScreen');
    const scrollArea = this.shadowRoot.querySelector('#scrollArea');
    if (scrollArea !== null) {
      this.resizeobserver_.observe(scrollArea);
    }
  }

  onresize() {
    const scrollArea = this.shadowRoot.querySelector('#scrollArea');
    // Removing the margin to set it
    scrollArea.scrollTop = scrollArea.scrollHeight / 2 - 150;
  }

  onBeforeShow(data) {
    this.shouldShowReturn_ = data['shouldShowReturn'];
  }

  /**
   * Set the toggle to the synced
   * scrolling preferences.
   * @param {boolean} isReverseScrolling
   */
  setReverseScrolling(isReverseScrolling) {
    this.isReverseScrolling_ = isReverseScrolling;
  }

  getOobeUIInitialState() {
    return OOBE_UI_STATE.CHOOBE;
  }

  onCheckChanged_(newValue, oldValue) {
    // Do not forward action to browser during property initialization
    if (oldValue != null) {
      this.userActed([UserAction.REVERSE, newValue]);
    }
  }

  onNextClicked_() {
    this.userActed(UserAction.NEXT);
  }

  onReturnClicked_() {
    this.userActed(UserAction.RETURN);
  }

  getAriaLabelToggleButtons_(locale, title, subtitle) {
    return this.i18nDynamic(locale, title) + '. ' +
        this.i18nDynamic(locale, subtitle);
  }
}

customElements.define(TouchpadScrollScreen.is, TouchpadScrollScreen);
