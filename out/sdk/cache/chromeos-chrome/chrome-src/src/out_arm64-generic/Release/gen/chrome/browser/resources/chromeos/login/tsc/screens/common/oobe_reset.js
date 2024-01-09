// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design reset screen.
 */
import '//resources/cr_elements/chromeos/cros_color_overrides.css.js';
import '//resources/cr_elements/cr_checkbox/cr_checkbox.js';
import '//resources/js/action_link.js';
import '//resources/polymer/v3_0/iron-icon/iron-icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/buttons/oobe_text_button.js';
import { getInstance as getAnnouncerInstance } from '//resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { getTemplate } from './oobe_reset.html.js';
/**
 * UI state for the dialog.
 */
var ResetScreenUiState;
(function (ResetScreenUiState) {
    ResetScreenUiState["RESTART_REQUIRED"] = "restart-required";
    ResetScreenUiState["REVERT_PROMISE"] = "revert-promise";
    // POWERWASH_PROPOSAL supports 2 ui-states: with or without rollback
    ResetScreenUiState["POWERWASH_PROPOSAL"] = "powerwash-proposal";
    ResetScreenUiState["ERROR"] = "error";
})(ResetScreenUiState || (ResetScreenUiState = {}));
/**
 * The order should be in sync with the ResetView::State enum.
 */
const ResetScreenUiStateMapping = [
    ResetScreenUiState.RESTART_REQUIRED,
    ResetScreenUiState.REVERT_PROMISE,
    ResetScreenUiState.POWERWASH_PROPOSAL,
    ResetScreenUiState.ERROR,
];
// When the screen is in the powerwash proposal state, it depends on the mode
var PowerwashMode;
(function (PowerwashMode) {
    PowerwashMode[PowerwashMode["POWERWASH_WITH_ROLLBACK"] = 0] = "POWERWASH_WITH_ROLLBACK";
    PowerwashMode[PowerwashMode["POWERWASH_ONLY"] = 1] = "POWERWASH_ONLY";
})(PowerwashMode || (PowerwashMode = {}));
// Powerwash mode details. Used by the UI for the two different modes
const POWERWASH_MODE_DETAILS = new Map([
    [
        PowerwashMode.POWERWASH_WITH_ROLLBACK,
        {
            subtitleText: 'resetPowerwashRollbackWarningDetails',
            dialogTitle: 'confirmRollbackTitle',
            dialogContent: 'confirmRollbackMessage',
            buttonTextKey: 'resetButtonPowerwashAndRollback',
        },
    ],
    [
        PowerwashMode.POWERWASH_ONLY,
        {
            subtitleText: 'resetPowerwashWarningDetails',
            dialogTitle: 'confirmPowerwashTitle',
            dialogContent: 'confirmPowerwashMessage',
            buttonTextKey: 'resetButtonPowerwash',
        },
    ],
]);
const ResetScreenElementBase = mixinBehaviors([OobeI18nBehavior, LoginScreenBehavior, MultiStepBehavior], PolymerElement);
export class OobeReset extends ResetScreenElementBase {
    static get is() {
        return 'oobe-reset-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /** Whether rollback is available */
            isRollbackAvailable_: {
                type: Boolean,
                value: false,
                observer: 'updatePowerwashModeBasedOnRollbackOptions',
            },
            /**
             * Whether the rollback option was chosen by the user.
             */
            isRollbackRequested_: {
                type: Boolean,
                value: false,
                observer: 'updatePowerwashModeBasedOnRollbackOptions',
            },
            /**
             * Whether to show the TPM firmware update checkbox.
             */
            tpmUpdateAvailable_: {
                type: Boolean,
            },
            /**
             * If the checkbox to request a TPM firmware update is checked.
             */
            tpmUpdateChecked_: {
                type: Boolean,
            },
            /**
             * If the checkbox to request a TPM firmware update is editable.
             */
            tpmUpdateEditable_: {
                type: Boolean,
            },
            /**
             * The current TPM update mode.
             */
            tpmUpdateMode_: {
                type: String,
            },
            // Title to be shown on the confirmation dialog.
            confirmationDialogTitle_: {
                type: String,
                computed: 'getConfirmationDialogTitle(locale, powerwashMode_)',
            },
            // Content to be shown on the confirmation dialog.
            confirmationDialogText_: {
                type: String,
                computed: 'getConfirmationDialogText(locale, powerwashMode_)',
            },
            // The subtitle to be shown while the screen is in POWERWASH_PROPOSAL
            powerwashStateSubtitle_: {
                type: String,
                computed: 'getPowerwashStateSubtitle(locale, powerwashMode_)',
            },
            // The text shown on the powerwash button. (depends on powerwash mode)
            powerwashButtonTextKey_: {
                type: String,
                computed: 'getPowerwashButtonTextKey(locale, powerwashMode_)',
            },
            // Whether the powerwash button is disabled.
            powerwashButtonDisabled_: {
                type: Boolean,
                computed: 'isPowerwashDisabled(powerwashMode_, tpmUpdateChecked_)',
            },
            // The chosen powerwash mode
            powerwashMode_: {
                type: Number,
                value: PowerwashMode.POWERWASH_ONLY,
            },
            inRevertState_: {
                type: Boolean,
                value: false,
            },
        };
    }
    /** Overridden from LoginScreenBehavior. */
    get EXTERNAL_API() {
        return [
            'setIsRollbackAvailable',
            'setIsRollbackRequested',
            'setIsTpmFirmwareUpdateAvailable',
            'setIsTpmFirmwareUpdateChecked',
            'setIsTpmFirmwareUpdateEditable',
            'setTpmFirmwareUpdateMode',
            'setShouldShowConfirmationDialog',
            'setScreenState',
        ];
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return ResetScreenUiState.RESTART_REQUIRED;
    }
    get UI_STEPS() {
        return ResetScreenUiState;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('ResetScreen');
    }
    reset() {
        this.setUIStep(ResetScreenUiState.RESTART_REQUIRED);
        this.onScreenStateChanged();
        this.powerwashMode_ = PowerwashMode.POWERWASH_ONLY;
        this.tpmUpdateAvailable_ = false;
        this.isRollbackAvailable_ = false;
        this.isRollbackRequested_ = false;
    }
    /* ---------- EXTERNAL API BEGIN ---------- */
    setIsRollbackAvailable(rollbackAvailable) {
        this.isRollbackAvailable_ = rollbackAvailable;
    }
    setIsRollbackRequested(rollbackRequested) {
        this.isRollbackRequested_ = rollbackRequested;
    }
    setIsTpmFirmwareUpdateAvailable(value) {
        this.tpmUpdateAvailable_ = value;
    }
    setIsTpmFirmwareUpdateChecked(value) {
        this.tpmUpdateChecked_ = value;
    }
    setIsTpmFirmwareUpdateEditable(value) {
        this.tpmUpdateEditable_ = value;
    }
    setTpmFirmwareUpdateMode(value) {
        this.tpmUpdateMode_ = value;
    }
    setShouldShowConfirmationDialog(shouldShow) {
        const confirmationDialog = this.shadowRoot.querySelector('#confirmationDialog');
        if (shouldShow) {
            confirmationDialog.showDialog();
        }
        else {
            confirmationDialog.hideDialog();
        }
    }
    setScreenState(state) {
        this.setUIStep(ResetScreenUiStateMapping[state]);
        this.onScreenStateChanged();
    }
    /* ---------- EXTERNAL API END ---------- */
    /**
     *  When rollback is available and requested, the powerwash mode changes
     *  to POWERWASH_WITH_ROLLBACK.
     */
    updatePowerwashModeBasedOnRollbackOptions() {
        if (this.isRollbackAvailable_ && this.isRollbackRequested_) {
            this.powerwashMode_ = PowerwashMode.POWERWASH_WITH_ROLLBACK;
            this.classList.add('rollback-proposal-view');
        }
        else {
            this.powerwashMode_ = PowerwashMode.POWERWASH_ONLY;
            this.classList.remove('rollback-proposal-view');
        }
    }
    onScreenStateChanged() {
        if (this.uiStep == ResetScreenUiState.REVERT_PROMISE) {
            getAnnouncerInstance().announce(this.i18n('resetRevertSpinnerMessage'));
            this.classList.add('revert-promise-view');
        }
        else {
            this.classList.remove('revert-promise-view');
        }
        this.inRevertState_ = this.uiStep == ResetScreenUiState.REVERT_PROMISE;
    }
    /**
     * Determines the subtitle based on the current powerwash mode
     */
    getPowerwashStateSubtitle(_locale, _mode) {
        if (this.powerwashMode_ === undefined) {
            return '';
        }
        const modeDetails = POWERWASH_MODE_DETAILS.get(this.powerwashMode_);
        return this.i18n(modeDetails.subtitleText);
    }
    /**
     * The powerwash button text depends on the powerwash mode
     */
    getPowerwashButtonTextKey(_locale, _mode) {
        if (this.powerwashMode_ === undefined) {
            return '';
        }
        return POWERWASH_MODE_DETAILS.get(this.powerwashMode_).buttonTextKey;
    }
    /**
     * Cannot powerwash with rollback when the TPM update checkbox is checked
     */
    isPowerwashDisabled(_mode, _tpmUpdateChecked) {
        return this.tpmUpdateChecked_ &&
            (this.powerwashMode_ == PowerwashMode.POWERWASH_WITH_ROLLBACK);
    }
    /* ---------- CONFIRMATION DIALOG ---------- */
    /**
     * Determines the confirmation dialog title.
     */
    getConfirmationDialogTitle(_locale, _mode) {
        if (this.powerwashMode_ === undefined) {
            return '';
        }
        const modeDetails = POWERWASH_MODE_DETAILS.get(this.powerwashMode_);
        return this.i18n(modeDetails.dialogTitle);
    }
    /**
     * Determines the confirmation dialog content
     */
    getConfirmationDialogText(_locale, _mode) {
        if (this.powerwashMode_ === undefined) {
            return '';
        }
        const modeDetails = POWERWASH_MODE_DETAILS.get(this.powerwashMode_);
        return this.i18n(modeDetails.dialogContent);
    }
    /**
     * On-tap event handler for confirmation dialog continue button.
     */
    onDialogContinueClick() {
        this.userActed('powerwash-pressed');
    }
    /**
     * On-tap event handler for confirmation dialog cancel button.
     */
    onDialogCancelClick() {
        const confirmationDialog = this.shadowRoot.querySelector('#confirmationDialog');
        confirmationDialog.hideDialog();
        this.userActed('reset-confirm-dismissed');
    }
    /**
     * Catch 'close' event through escape key
     */
    onDialogClosed() {
        this.userActed('reset-confirm-dismissed');
    }
    /* ---------- SIMPLE EVENT HANDLERS ---------- */
    /**
     * On-tap event handler for cancel button.
     */
    onCancelClick() {
        this.userActed('cancel-reset');
    }
    /**
     * On-tap event handler for restart button.
     */
    onRestartClick() {
        this.userActed('restart-pressed');
    }
    /**
     * On-tap event handler for powerwash button.
     */
    onPowerwashClick() {
        this.userActed('show-confirmation');
    }
    /**
     * On-tap event handler for learn more link.
     */
    onLearnMoreClick() {
        this.userActed('learn-more-link');
    }
    /**
     * Change handler for TPM firmware update checkbox.
     */
    onTpmFirmwareUpdateChanged() {
        const tpmFirmwareUpdateCheckbox = this.shadowRoot.querySelector('#tpmFirmwareUpdateCheckbox');
        const checked = tpmFirmwareUpdateCheckbox.checked;
        this.userActed(['tpmfirmware-update-checked', checked]);
    }
    /**
     * On-tap event handler for the TPM firmware update learn more link.
     */
    onTpmFirmwareUpdateLearnMore(event) {
        this.userActed('tpm-firmware-update-learn-more-link');
        event.stopPropagation();
    }
}
customElements.define(OobeReset.is, OobeReset);
