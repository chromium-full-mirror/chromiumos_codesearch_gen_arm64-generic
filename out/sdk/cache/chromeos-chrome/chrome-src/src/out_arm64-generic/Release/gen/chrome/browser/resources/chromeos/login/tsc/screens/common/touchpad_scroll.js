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
import { assert } from '//resources/js/assert.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './touchpad_scroll.html.js';
const TouchpadScrollScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * Enum to represent steps on the touchpad scroll screen.
 * Currently there is only one step, but we still use
 * MultiStepBehavior because it provides implementation of
 * things like processing 'focus-on-show' class
 */
var TouchpadScrollStep;
(function (TouchpadScrollStep) {
    TouchpadScrollStep["OVERVIEW"] = "overview";
})(TouchpadScrollStep || (TouchpadScrollStep = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["NEXT"] = "next";
    UserAction["REVERSE"] = "update-scroll";
    UserAction["RETURN"] = "return";
})(UserAction || (UserAction = {}));
export class TouchpadScrollScreen extends TouchpadScrollScreenElementBase {
    static get is() {
        return 'touchpad-scroll-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            isReverseScrolling: {
                type: Boolean,
                value: false,
                observer: 'onCheckChanged',
            },
            /**
             * Whether the button to return to CHOOBE screen should be shown.
             */
            shouldShowReturn: {
                type: Boolean,
                value: false,
            },
        };
    }
    constructor() {
        super();
        this.resizeobserver = new ResizeObserver(() => this.onScrollAreaResize());
    }
    get EXTERNAL_API() {
        return ['setReverseScrolling'];
    }
    get UI_STEPS() {
        return TouchpadScrollStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return TouchpadScrollStep.OVERVIEW;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('TouchpadScrollScreen');
        const scrollArea = this.shadowRoot?.querySelector('#scrollArea');
        if (scrollArea instanceof HTMLElement) {
            this.resizeobserver.observe(scrollArea);
        }
    }
    onScrollAreaResize() {
        const scrollArea = this.shadowRoot?.querySelector('#scrollArea');
        assert(scrollArea instanceof HTMLElement);
        // Removing the margin to set it
        scrollArea.scrollTop = scrollArea.scrollHeight / 2 - 150;
    }
    onBeforeShow(data) {
        this.shouldShowReturn = data['shouldShowReturn'];
    }
    /**
     * Set the toggle to the synced
     * scrolling preferences.
     */
    setReverseScrolling(isReverseScrolling) {
        this.isReverseScrolling = isReverseScrolling;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.CHOOBE;
    }
    onCheckChanged(newValue, oldValue) {
        // Do not forward action to browser during property initialization
        if (oldValue != null) {
            this.userActed([UserAction.REVERSE, newValue]);
        }
    }
    onNextClicked() {
        this.userActed(UserAction.NEXT);
    }
    onReturnClicked() {
        this.userActed(UserAction.RETURN);
    }
    getAriaLabelToggleButtons(locale, title, subtitle) {
        return this.i18nDynamic(locale, title) + '. ' +
            this.i18nDynamic(locale, subtitle);
    }
}
customElements.define(TouchpadScrollScreen.is, TouchpadScrollScreen);
