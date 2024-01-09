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
import '../../components/oobe_cr_lottie.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './gesture_navigation.html.js';
/**
 * Enum to represent each page in the gesture navigation screen.
 */
var GesturePage;
(function (GesturePage) {
    GesturePage["INTRO"] = "gestureIntro";
    GesturePage["HOME"] = "gestureHome";
    GesturePage["OVERVIEW"] = "gestureOverview";
    GesturePage["BACK"] = "gestureBack";
})(GesturePage || (GesturePage = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["SKIP"] = "skip";
    UserAction["EXIT"] = "exit";
    UserAction["PAGE_CHANGE"] = "gesture-page-change";
})(UserAction || (UserAction = {}));
export const GestureScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class GestureNavigation extends GestureScreenElementBase {
    static get is() {
        return 'gesture-navigation-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {};
    }
    constructor() {
        super();
    }
    get UI_STEPS() {
        return GesturePage;
    }
    get EXTERNAL_API() {
        return [];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return GesturePage.INTRO;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('GestureNavigationScreen');
    }
    /**
     * This is the 'on-tap' event handler for the skip button.
     */
    onSkip_() {
        this.userActed(UserAction.SKIP);
    }
    /**
     * This is the 'on-tap' event handler for the 'next' or 'get started' button.
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
     */
    setCurrentPage_(newPage) {
        this.setPlayCurrentScreenAnimation(false);
        this.setUIStep(newPage);
        this.userActed([UserAction.PAGE_CHANGE, newPage]);
        this.setPlayCurrentScreenAnimation(true);
    }
    /**
     * This will play or stop the current screen's lottie animation.
     * param enabled Whether the animation should play or not.
     */
    setPlayCurrentScreenAnimation(enabled) {
        const animation = this.shadowRoot.querySelector('.gesture-animation');
        if (animation) {
            animation.playing = enabled;
        }
    }
}
customElements.define(GestureNavigation.is, GestureNavigation);
