// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Update screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '//resources/polymer/v3_0/paper-progress/paper-progress.js';
import '//resources/polymer/v3_0/paper-styles/color.js';
import { OobeCrLottie } from '../../components/oobe_cr_lottie.js';
import '../../components/oobe_icons.html.js';
import '../../components/buttons/oobe_back_button.js';
import '../../components/buttons/oobe_next_button.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/oobe_carousel.js';
import '../../components/oobe_slide.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { getTemplate } from './consumer_update.html.js';
/**
 * @constructor
 */
const ConsumerUpdateScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
const UNREACHABLE_PERCENT = 1000;
// Thresholds which are used to determine when update status announcement should
// take place. Last element is not reachable to simplify implementation.
const PERCENT_THRESHOLDS = [
    0,
    10,
    20,
    30,
    40,
    50,
    60,
    70,
    80,
    90,
    95,
    98,
    99,
    100,
    UNREACHABLE_PERCENT,
];
/**
 * Enum to represent steps on the consumer update screen.
 */
var ConsumerUpdateStep;
(function (ConsumerUpdateStep) {
    ConsumerUpdateStep["CHECKING"] = "checking";
    ConsumerUpdateStep["UPDATE"] = "update";
    ConsumerUpdateStep["RESTART"] = "restart";
    ConsumerUpdateStep["REBOOT"] = "reboot";
    ConsumerUpdateStep["CELLULAR"] = "cellular";
})(ConsumerUpdateStep || (ConsumerUpdateStep = {}));
/**
 * Available user actions.
 */
var UserAction;
(function (UserAction) {
    UserAction["BACK"] = "back";
    UserAction["SKIP"] = "skip-consumer-update";
    UserAction["DECLINE_CELLULAR"] = "consumer-update-reject-cellular";
    UserAction["ACCEPT_CELLULAR"] = "consumer-update-accept-cellular";
})(UserAction || (UserAction = {}));
/**
 * @polymer
 */
class ConsumerUpdateScreen extends ConsumerUpdateScreenElementBase {
    static get is() {
        return 'consumer-update-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * True if update is forced.
             */
            isUpdateMandatory: {
                type: Boolean,
                value: true,
            },
            /**
             * Shows battery warning message during Downloading stage.
             */
            showLowBatteryWarning: {
                type: Boolean,
                value: false,
            },
            /**
             * Message like "3% complete".
             */
            updateStatusMessagePercent: {
                type: String,
                value: '',
            },
            /**
             * Message like "About 5 minutes left".
             */
            updateStatusMessageTimeLeft: {
                type: String,
                value: '',
            },
            /**
             * Progress bar percent that is used in BetterUpdate version of the
             * screen.
             */
            betterUpdateProgressValue: {
                type: Number,
                value: 0,
            },
            /**
             * Whether auto-transition is enabled or not.
             */
            autoTransition: {
                type: Boolean,
                value: true,
            },
            /**
             * Index of threshold that has been already achieved.
             */
            thresholdIndex: {
                type: Number,
                value: 0,
            },
        };
    }
    static get observers() {
        return ['playAnimation(uiStep)'];
    }
    get EXTERNAL_API() {
        return [
            'setIsUpdateMandatory',
            'showLowBatteryWarningMessage',
            'setUpdateState',
            'setUpdateStatus',
            'setAutoTransition',
        ];
    }
    get UI_STEPS() {
        return ConsumerUpdateStep;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return ConsumerUpdateStep.CHECKING;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ConsumerUpdateScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    /**
     * Shows or hides skip button while update in progress.
     * @param visible Is skip button visible?
     */
    setIsUpdateMandatory(visible) {
        this.isUpdateMandatory = visible;
    }
    /**
     * Decline to use cellular data.
     */
    onDeclineCellularClicked() {
        this.userActed(UserAction.DECLINE_CELLULAR);
    }
    /**
     * Accept to use cellular data.
     */
    onAcceptCellularClicked() {
        this.userActed(UserAction.ACCEPT_CELLULAR);
    }
    onSkip() {
        this.userActed(UserAction.SKIP);
    }
    /**
     * Shows or hides battery warning message.
     * @param visible Is message visible?
     */
    showLowBatteryWarningMessage(visible) {
        this.showLowBatteryWarning = visible;
    }
    /**
     * Sets which dialog should be shown.
     * @param value Current update state.
     */
    setUpdateState(value) {
        this.setUIStep(value);
    }
    /**
     * Sets percent to be shown in progress bar.
     * @param percent Current progress
     * @param messagePercent Message describing current progress.
     * @param messageTimeLeft Message describing time left.
     */
    setUpdateStatus(percent, messagePercent, messageTimeLeft) {
        // Sets aria-live polite on percent and timeleft container every time
        // new threshold has been achieved otherwise do not initiate spoken
        // feedback update by setting aria-live off.
        const betterUpdatePercent = this.shadowRoot?.
            querySelector('#betterUpdatePercent');
        const betterUpdateTimeleft = this.shadowRoot?.
            querySelector('#betterUpdateTimeleft');
        if (percent >= PERCENT_THRESHOLDS[this.thresholdIndex]) {
            while (percent >= PERCENT_THRESHOLDS[this.thresholdIndex]) {
                this.thresholdIndex = this.thresholdIndex + 1;
            }
            if (betterUpdatePercent instanceof HTMLElement
                && betterUpdateTimeleft instanceof HTMLElement) {
                betterUpdatePercent.setAttribute('aria-live', 'polite');
                betterUpdateTimeleft.setAttribute('aria-live', 'polite');
            }
        }
        else {
            if (betterUpdatePercent instanceof HTMLElement
                && betterUpdateTimeleft instanceof HTMLElement) {
                betterUpdatePercent.setAttribute('aria-live', 'off');
                betterUpdateTimeleft.setAttribute('aria-live', 'off');
            }
        }
        this.betterUpdateProgressValue = percent;
        this.updateStatusMessagePercent = messagePercent;
        this.updateStatusMessageTimeLeft = messageTimeLeft;
    }
    /**
     * Sets whether carousel should auto transit slides.
     */
    setAutoTransition(value) {
        this.autoTransition = value;
    }
    /**
     * Gets whether carousel should auto transit slides.
     * @param step Which UIState is shown now.
     * @param autoTransition Is auto transition allowed.
     */
    getAutoTransition(step, autoTransition) {
        return step == ConsumerUpdateStep.UPDATE && autoTransition;
    }
    onBackClicked() {
        this.userActed(UserAction.BACK);
    }
    /**
     * @param uiStep which UIState is shown now.
     */
    playAnimation(uiStep) {
        const animation = this.shadowRoot?.querySelector('#checkingAnimation');
        if (animation instanceof OobeCrLottie) {
            animation.playing = (uiStep === ConsumerUpdateStep.CHECKING);
        }
    }
}
customElements.define(ConsumerUpdateScreen.is, ConsumerUpdateScreen);
