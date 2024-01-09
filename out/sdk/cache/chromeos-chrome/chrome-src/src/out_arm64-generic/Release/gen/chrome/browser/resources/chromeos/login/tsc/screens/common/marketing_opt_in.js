// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design marketing
 * opt-in screen.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_toggle/cr_toggle.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../components/oobe_a11y_option.js';
import '../../components/oobe_cr_lottie.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_icon_button.js';
import '../../components/buttons/oobe_text_button.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './marketing_opt_in.html.js';
const MarketingScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
/**
 * Enum to represent each page in the marketing opt in screen.
 */
var MarketingOptInStep;
(function (MarketingOptInStep) {
    MarketingOptInStep["OVERVIEW"] = "overview";
    MarketingOptInStep["ACCESSIBILITY"] = "accessibility";
})(MarketingOptInStep || (MarketingOptInStep = {}));
export class MarketingOptIn extends MarketingScreenElementBase {
    static get is() {
        return 'marketing-opt-in-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Whether the accessibility button is shown. This button is only shown
             * if the gesture EDU screen was shown before the marketing screen.
             */
            isA11ySettingsButtonVisible: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the marketing opt in toggles should be shown, which will be the
             * case only if marketing opt in feature is enabled AND if the current
             * user is a non-managed user. When this is false, the screen will only
             * contain UI related to the tablet mode gestural navigation settings.
             */
            marketingOptInVisible: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether a verbose footer will be shown to the user containing some
             * legal information such as the Google address. Currently shown for
             * Canada only.
             */
            hasLegalFooter: {
                type: Boolean,
                value: false,
            },
            /**
             * Whether the device is cloud gaming device, which will
             * alternate different title, subtitle and animation.
             */
            isCloudGamingDevice: {
                type: Boolean,
                value: false,
            },
        };
    }
    get UI_STEPS() {
        return MarketingOptInStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return MarketingOptInStep.OVERVIEW;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.MARKETING_OPT_IN;
    }
    get EXTERNAL_API() {
        return [
            'updateA11ySettingsButtonVisibility',
            'updateA11yNavigationButtonToggle',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('MarketingOptInScreen');
    }
    /** Shortcut method to control animation */
    setAnimationPlay(played) {
        const animation = this.shadowRoot.querySelector('#animation');
        if (animation) {
            animation.playing = played;
        }
    }
    /**
     * @param data Screen init payload.
     */
    onBeforeShow(data) {
        this.marketingOptInVisible =
            'optInVisibility' in data && data.optInVisibility;
        this.shadowRoot
            .querySelector('#chromebookUpdatesOption').checked =
            'optInDefaultState' in data && data.optInDefaultState;
        this.hasLegalFooter =
            'legalFooterVisibility' in data && data.legalFooterVisibility;
        this.isCloudGamingDevice =
            'cloudGamingDevice' in data && data.cloudGamingDevice;
        this.setAnimationPlay(true);
        this.shadowRoot
            .querySelector('#marketingOptInOverviewDialog').show();
    }
    get defaultControl() {
        return this.shadowRoot.querySelector('#marketingOptInOverviewDialog');
    }
    /**
     * This is 'on-click' event handler for 'AcceptAndContinue/Next' buttons.
     */
    onGetStarted() {
        this.setAnimationPlay(false);
        this.userActed([
            'get-started',
            this.shadowRoot
                .querySelector('#chromebookUpdatesOption').checked,
        ]);
    }
    /**
     * @param shown Whether the A11y Settings button should be shown.
     */
    updateA11ySettingsButtonVisibility(shown) {
        this.isA11ySettingsButtonVisible = shown;
    }
    /**
     * @param enabled Whether the a11y setting for shownig shelf
     * navigation buttons is enabled.
     */
    updateA11yNavigationButtonToggle(enabled) {
        this.shadowRoot.querySelector('#a11yNavButtonToggle').checked = enabled;
    }
    /**
     * This is the 'on-click' event handler for the accessibility settings link
     * and for the back button on the accessibility page.
     */
    onToggleAccessibilityPage() {
        if (this.uiStep == MarketingOptInStep.OVERVIEW) {
            this.setUIStep(MarketingOptInStep.ACCESSIBILITY);
            this.setAnimationPlay(false);
        }
        else {
            this.setUIStep(MarketingOptInStep.OVERVIEW);
            this.setAnimationPlay(true);
        }
    }
    /**
     * The 'on-change' event handler for when the a11y navigation button setting
     * is toggled on or off.
     */
    onA11yNavButtonsSettingChanged() {
        this.userActed([
            'set-a11y-button-enable',
            this.shadowRoot.querySelector('#a11yNavButtonToggle').checked,
        ]);
    }
    /**
     * Returns the src of the icon.
     */
    getIcon() {
        return this.isCloudGamingDevice ? 'oobe-32:game-controller' :
            'oobe-32:checkmark';
    }
}
customElements.define(MarketingOptIn.is, MarketingOptIn);
