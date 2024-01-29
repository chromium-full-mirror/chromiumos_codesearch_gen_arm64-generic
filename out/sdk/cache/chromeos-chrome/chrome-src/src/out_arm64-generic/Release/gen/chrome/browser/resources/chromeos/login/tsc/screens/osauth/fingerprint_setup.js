// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design Fingerprint
 * Enrollment screen.
 */
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import { FingerprintProgressElement } from '//resources/ash/common/quick_unlock/fingerprint_progress.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OOBE_UI_STATE } from '../../components/display_manager_types.js';
import { OobeCrLottie } from '../../components/oobe_cr_lottie.js';
import { getTemplate } from './fingerprint_setup.html.js';
/**
 * These values must be kept in sync with the values in
 * third_party/cros_system_api/dbus/service_constants.h.
 */
var FingerprintResultType;
(function (FingerprintResultType) {
    FingerprintResultType[FingerprintResultType["SUCCESS"] = 0] = "SUCCESS";
    FingerprintResultType[FingerprintResultType["PARTIAL"] = 1] = "PARTIAL";
    FingerprintResultType[FingerprintResultType["INSUFFICIENT"] = 2] = "INSUFFICIENT";
    FingerprintResultType[FingerprintResultType["SENSOR_DIRTY"] = 3] = "SENSOR_DIRTY";
    FingerprintResultType[FingerprintResultType["TOO_SLOW"] = 4] = "TOO_SLOW";
    FingerprintResultType[FingerprintResultType["TOO_FAST"] = 5] = "TOO_FAST";
    FingerprintResultType[FingerprintResultType["IMMOBILE"] = 6] = "IMMOBILE";
})(FingerprintResultType || (FingerprintResultType = {}));
/**
 * UI mode for the dialog.
 */
var FingerprintUiState;
(function (FingerprintUiState) {
    FingerprintUiState["START"] = "start";
    FingerprintUiState["PROGRESS"] = "progress";
})(FingerprintUiState || (FingerprintUiState = {}));
const FingerprintSetupBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class FingerprintSetup extends FingerprintSetupBase {
    static get is() {
        return 'fingerprint-setup-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The percentage of completion that has been received during setup.
             * The value within [0, 100] represents the percent of enrollment
             * completion.
             */
            percentComplete: {
                type: Number,
                value: 0,
                observer: 'onProgressChanged',
            },
            /**
             * Is current finger enrollment complete?
             */
            complete: {
                type: Boolean,
                value: false,
                computed: 'enrollIsComplete(percentComplete)',
            },
            /**
             * Can we add another finger?
             */
            canAddFinger: {
                type: Boolean,
                value: true,
            },
            /**
             * The result of fingerprint enrollment scan.
             */
            scanResult: {
                type: Number,
                value: FingerprintResultType.SUCCESS,
            },
            /**
             * Indicates whether user is a child account.
             */
            isChildAccount: {
                type: Boolean,
                value: false,
            },
            /**
             * Indicates whether Jelly is enabled.
             */
            isDynamicColor: {
                type: Boolean,
                value: loadTimeData.getBoolean('isOobeJellyEnabled'),
            },
        };
    }
    constructor() {
        super();
    }
    get EXTERNAL_API() {
        return [
            'onEnrollScanDone',
            'enableAddAnotherFinger',
        ];
    }
    get UI_STEPS() {
        return FingerprintUiState;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('FingerprintSetupScreen');
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    getOobeUIInitialState() {
        return OOBE_UI_STATE.ONBOARDING;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return FingerprintUiState.START;
    }
    onBeforeShow(data) {
        this.isChildAccount = data['isChildAccount'];
        this.setAnimationState(true);
    }
    onBeforeHide() {
        this.setAnimationState(false);
    }
    /**
     * Called when a fingerprint enroll scan result is received.
     * @param scanResult Result of the enroll scan.
     * @param isComplete Whether fingerprint enrollment is complete.
     * @param percentComplete Percentage of completion of the enrollment.
     */
    /**
     * TODO(b/321675493) Revamp progress update to validate isComplete
    */
    onEnrollScanDone(scanResult, _isComplete, percentComplete) {
        this.setUIStep(FingerprintUiState.PROGRESS);
        const progress = this.shadowRoot?.querySelector('#arc');
        if (progress instanceof FingerprintProgressElement) {
            progress.reset();
        }
        this.percentComplete = percentComplete;
        this.scanResult = scanResult;
    }
    /**
     * Enable/disable add another finger.
     * @param enable True if add another fingerprint is enabled.
     */
    enableAddAnotherFinger(enable) {
        this.canAddFinger = enable;
    }
    /**
     * Check whether Add Another button should be shown.
     */
    isAnotherButtonVisible(percentComplete, canAddFinger) {
        return percentComplete >= 100 && canAddFinger;
    }
    /**
     * This is 'on-click' event handler for 'Skip' button for 'START' step.
     */
    onSkipOnStart() {
        this.userActed('setup-skipped-on-start');
    }
    /**
     * This is 'on-click' event handler for 'Skip' button for 'PROGRESS' step.
     */
    onSkipInProgress() {
        this.userActed('setup-skipped-in-flow');
    }
    /**
     * Enable/disable lottie animation.
     * @param playing True if animation should be playing.
     */
    setAnimationState(playing) {
        const animation = this.shadowRoot?.querySelector('#scannerLocationLottie');
        if (animation instanceof OobeCrLottie) {
            animation.playing = playing;
        }
        const progress = this.shadowRoot?.querySelector('#arc');
        if (progress instanceof FingerprintProgressElement) {
            progress.setPlay(playing);
        }
    }
    /**
     * This is 'on-click' event handler for 'Done' button.
     */
    onDone() {
        this.userActed('setup-done');
    }
    /**
     * This is 'on-click' event handler for 'Add another' button.
     */
    onAddAnother() {
        this.percentComplete = 0;
        this.userActed('add-another-finger');
    }
    /**
     * Check whether fingerprint enrollment is in progress.
     */
    enrollIsComplete(percent) {
        return percent >= 100;
    }
    /**
     * Check whether fingerprint scan problem is IMMOBILE.
     */
    isProblemImmobile(scanResult) {
        return scanResult === FingerprintResultType.IMMOBILE;
    }
    /**
     * Check whether fingerprint scan problem is other than IMMOBILE.
     */
    isProblemOther(scanResult) {
        return scanResult != FingerprintResultType.SUCCESS &&
            scanResult != FingerprintResultType.IMMOBILE;
    }
    /**
     * Observer for percentComplete.
     */
    onProgressChanged(newValue, oldValue) {
        // Start a new enrollment, so reset all enrollment related states.
        if (newValue === 0) {
            const progress = this.shadowRoot?.querySelector('#arc');
            if (progress instanceof FingerprintProgressElement) {
                progress.reset();
            }
            this.scanResult = FingerprintResultType.SUCCESS;
            return;
        }
        const progress = this.shadowRoot?.querySelector('#arc');
        if (progress instanceof FingerprintProgressElement) {
            progress.setProgress(oldValue, newValue, newValue === 100);
        }
    }
}
customElements.define(FingerprintSetup.is, FingerprintSetup);
