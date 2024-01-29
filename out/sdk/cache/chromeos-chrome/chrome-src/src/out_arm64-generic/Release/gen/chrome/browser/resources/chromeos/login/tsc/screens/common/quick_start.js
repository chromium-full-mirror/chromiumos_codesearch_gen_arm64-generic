// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '//resources/polymer/v3_0/paper-styles/color.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/dialogs/oobe_loading_dialog.js';
import '../../components/quick_start_pin.js';
import { assert } from '//resources/js/assert.js';
import { flush, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { MultiStepBehavior } from '../../components/behaviors/multi_step_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeCrLottie } from '../../components/oobe_cr_lottie.js';
import { QrCodeCanvas } from '../../components/qr_code_canvas.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { loadTimeData } from '../../i18n_setup.js';
import { getTemplate } from './quick_start.html.js';
/**
 * UI mode for the screen.
 */
var QuickStartUiState;
(function (QuickStartUiState) {
    QuickStartUiState["DEFAULT"] = "default";
    QuickStartUiState["CONNECTING_TO_PHONE"] = "connecting_to_phone";
    QuickStartUiState["VERIFICATION"] = "verification";
    QuickStartUiState["CONNECTING_TO_WIFI"] = "connecting_to_wifi";
    QuickStartUiState["CONNECTED_TO_WIFI"] = "connected_to_wifi";
    QuickStartUiState["CONFIRM_GOOGLE_ACCOUNT"] = "confirm_google_account";
    QuickStartUiState["SIGNING_IN"] = "signing_in";
    QuickStartUiState["SETUP_COMPLETE"] = "setup_complete";
})(QuickStartUiState || (QuickStartUiState = {}));
var UserActions;
(function (UserActions) {
    UserActions["CANCEL"] = "cancel";
    UserActions["NEXT"] = "next";
    UserActions["TURN_ON_BLUETOOTH"] = "turn_on_bluetooth";
})(UserActions || (UserActions = {}));
const QuickStartScreenBase = mixinBehaviors([LoginScreenBehavior, MultiStepBehavior, OobeI18nBehavior], PolymerElement);
export class QuickStartScreen extends QuickStartScreenBase {
    static get is() {
        return 'quick-start-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            discoverableName: {
                type: String,
                value: '',
            },
            pin: {
                type: String,
                value: '0000',
            },
            // Whether to show the PIN for verification instead of a QR code.
            usePinInsteadOfQrForVerification: {
                type: Boolean,
                value: false,
            },
            userEmail: {
                type: String,
                value: '',
            },
            userFullName: {
                type: String,
                value: '',
            },
            userAvatarUrl: {
                type: String,
                value: '',
            },
            // Once account creation starts, it is no longer possible to cancel.
            canCancelSignin: {
                type: Boolean,
                value: true,
            },
        };
    }
    constructor() {
        super();
        this.qrCodeCanvas = null;
    }
    get EXTERNAL_API() {
        return [
            'setQRCode',
            'setPin',
            'showInitialUiStep',
            'showBluetoothDialog',
            'showConnectingToPhoneStep',
            'showConnectingToWifi',
            'setDiscoverableName',
            'showConfirmGoogleAccount',
            'showSigningInStep',
            'showCreatingAccountStep',
            'showSetupCompleteStep',
            'setUserEmail',
            'setUserFullName',
            'setUserAvatarUrl',
        ];
    }
    getVerificationSubtitle(_title) {
        return this.i18nAdvanced('quickStartSetupSubtitle', {
            substitutions: [loadTimeData.getString('deviceType'), this.discoverableName],
        });
    }
    getSetupCompleteTitle(locale) {
        return this.i18nAdvancedDynamic(locale, 'quickStartSetupCompleteTitle', {
            substitutions: [loadTimeData.getString('deviceType')],
        });
    }
    getSetupCompleteSubtitle(locale, _email) {
        return this.i18nAdvancedDynamic(locale, 'quickStartSetupCompleteSubtitle', {
            substitutions: [this.userEmail],
        });
    }
    getCanvas() {
        const canvas = this.shadowRoot?.querySelector('#qrCodeCanvas');
        assert(canvas instanceof HTMLCanvasElement);
        return canvas;
    }
    getQuickStartBluetoothDialog() {
        const dialog = this.shadowRoot?.
            querySelector('#quickStartBluetoothDialog');
        assert(dialog instanceof OobeModalDialog);
        return dialog;
    }
    getSpinnerAnimation() {
        const animation = this.shadowRoot?.querySelector('#spinner');
        assert(animation instanceof OobeCrLottie);
        return animation;
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('QuickStartScreen');
        // Helper for drawing the QR code using circles as per spec.
        this.qrCodeCanvas = new QrCodeCanvas(this.getCanvas());
    }
    onBeforeHide() {
        this.getSpinnerAnimation().playing = false;
    }
    get UI_STEPS() {
        return QuickStartUiState;
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    defaultUIStep() {
        return QuickStartUiState.DEFAULT;
    }
    showInitialUiStep() {
        this.setUIStep(this.defaultUIStep());
    }
    showConnectingToPhoneStep() {
        this.getQuickStartBluetoothDialog().hideDialog();
        this.setUIStep(QuickStartUiState.CONNECTING_TO_PHONE);
    }
    showConnectingToWifi() {
        this.setUIStep(QuickStartUiState.CONNECTING_TO_WIFI);
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    setQRCode(qrCode) {
        this.getQuickStartBluetoothDialog().hideDialog();
        this.usePinInsteadOfQrForVerification = false;
        this.setUIStep(QuickStartUiState.VERIFICATION);
        flush();
        this.qrCodeCanvas?.setData(qrCode);
    }
    setPin(pin) {
        this.usePinInsteadOfQrForVerification = true;
        this.setUIStep(QuickStartUiState.VERIFICATION);
        assert(pin.length === 4);
        this.pin = pin;
    }
    setDiscoverableName(discoverableName) {
        this.discoverableName = discoverableName;
    }
    showConfirmGoogleAccount() {
        this.setUIStep(QuickStartUiState.CONFIRM_GOOGLE_ACCOUNT);
    }
    showSigningInStep() {
        this.setUIStep(QuickStartUiState.SIGNING_IN);
        this.getSpinnerAnimation().playing = true;
    }
    showCreatingAccountStep() {
        // Same UI as 'Signing in...' but without a cancel button.
        this.setUIStep(QuickStartUiState.SIGNING_IN);
        this.canCancelSignin = false;
    }
    showSetupCompleteStep() {
        this.setUIStep(QuickStartUiState.SETUP_COMPLETE);
    }
    setUserEmail(email) {
        this.userEmail = email;
    }
    setUserFullName(userFullName) {
        this.userFullName = userFullName;
    }
    setUserAvatarUrl(userAvatarUrl) {
        this.userAvatarUrl = userAvatarUrl;
    }
    showBluetoothDialog() {
        // Shown on top of the QR code step.
        this.setUIStep(QuickStartUiState.VERIFICATION);
        this.getQuickStartBluetoothDialog().showDialog();
    }
    cancelBluetoothDialog() {
        this.getQuickStartBluetoothDialog().hideDialog();
        this.userActed(UserActions.CANCEL);
    }
    turnOnBluetooth() {
        this.getQuickStartBluetoothDialog().hideDialog();
        this.userActed(UserActions.TURN_ON_BLUETOOTH);
    }
    /**
     * Wrap the user avatar as an image into a html snippet.
     *
     * @param avatarUri the icon uri to be wrapped.
     * @return wrapped html snippet.
     *
     */
    getWrappedAvatar(avatarUri) {
        return ('data:text/html;charset=utf-8,' + encodeURIComponent(String.raw `
    <html>
      <style>
        body {
          margin: 0;
        }
        #avatar {
          width: 32px;
          height: 32px;
          user-select: none;
          border-radius: 50%;
        }
      </style>
    <body><img id="avatar" src="` + avatarUri + '"></body></html>'));
    }
    onCancelClicked() {
        this.userActed(UserActions.CANCEL);
    }
    onNextClicked() {
        this.userActed(UserActions.NEXT);
    }
}
customElements.define(QuickStartScreen.is, QuickStartScreen);
