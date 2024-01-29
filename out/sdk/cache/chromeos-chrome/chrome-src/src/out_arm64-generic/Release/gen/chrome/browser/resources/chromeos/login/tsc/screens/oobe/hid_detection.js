// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element for displaying material design HID detection
 * screen.
 */
import '//resources/polymer/v3_0/paper-styles/color.js';
import '//resources/ash/common/bluetooth/bluetooth_pairing_enter_code_page.js';
import '../../components/hd_iron_icon.js';
import '../../components/oobe_icons.html.js';
import '../../components/common_styles/oobe_common_styles.css.js';
import '../../components/common_styles/oobe_dialog_host_styles.css.js';
import '../../components/dialogs/oobe_adaptive_dialog.js';
import '../../components/dialogs/oobe_modal_dialog.js';
import '../../components/buttons/oobe_text_button.js';
import { assert } from '//resources/js/assert.js';
import { loadTimeData } from '//resources/js/load_time_data.js';
import { IronA11yAnnouncer } from '//resources/polymer/v3_0/iron-a11y-announcer/iron-a11y-announcer.js';
import { afterNextRender, mixinBehaviors, PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { LoginScreenBehavior } from '../../components/behaviors/login_screen_behavior.js';
import { OobeDialogHostBehavior } from '../../components/behaviors/oobe_dialog_host_behavior.js';
import { OobeI18nBehavior } from '../../components/behaviors/oobe_i18n_behavior.js';
import { OobeModalDialog } from '../../components/dialogs/oobe_modal_dialog.js';
import { getTemplate } from './hid_detection.html.js';
const PINCODE_LENGTH = 6;
/**
 * Enumeration of possible connection states of a device.
 */
var Connection;
(function (Connection) {
    Connection["SEARCHING"] = "searching";
    Connection["USB"] = "usb";
    Connection["CONNECTED"] = "connected";
    Connection["PAIRING"] = "pairing";
    Connection["PAIRED"] = "paired";
})(Connection || (Connection = {}));
const HidDetectionScreenBase = mixinBehaviors([OobeI18nBehavior, OobeDialogHostBehavior, LoginScreenBehavior], PolymerElement);
export class HidDetectionScreen extends HidDetectionScreenBase {
    static get is() {
        return 'hid-detection-element';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * "Continue" button is disabled until HID devices are paired.
             */
            continueButtonEnabled: {
                type: Boolean,
                value: false,
            },
            /**
             * The keyboard device name
             */
            keyboardDeviceName: {
                type: String,
                value: '',
            },
            /**
             * The pointing device name
             */
            pointingDeviceName: {
                type: String,
                value: '',
            },
            /**
             * State of touchscreen detection
             */
            touchscreenDetected_: {
                type: Boolean,
                value: false,
            },
            /**
             * Current state in mouse pairing process.
             */
            mouseState: {
                type: String,
                value: Connection.SEARCHING,
            },
            /**
             * Current state in keyboard pairing process.
             */
            keyboardState: {
                type: String,
                value: Connection.SEARCHING,
            },
            /**
             * Controls the visibility of the PIN dialog.
             */
            pinDialogVisible: {
                type: Boolean,
                value: false,
                observer: 'onPinDialogVisibilityChanged',
            },
            /**
             * The PIN code to be typed by the user
             */
            pinCode: {
                type: String,
                value: '000000',
                observer: 'onPinParametersChanged',
            },
            /**
             * The number of keys that the user already entered for this PIN.
             * This helps the user to see what's the next key to be pressed.
             */
            numKeysEnteredPinCode: {
                type: Number,
                value: 0,
                observer: 'onPinParametersChanged',
            },
            /**
             *  Whether the dialog for PIN input is being shown.
             *  Internal use only. Used for preventing multiple openings.
             */
            pinDialogIsOpen: {
                type: Boolean,
                value: false,
            },
            /**
             * The title that is displayed on the PIN dialog
             */
            pinDialogTitle: {
                type: String,
                computed: 'getPinDialogTitle(locale, keyboardDeviceName)',
            },
            /**
             * True when kOobeHidDetectionRevamp is enabled.
             */
            isOobeHidDetectionRevampEnabled: {
                type: Boolean,
                value: loadTimeData.getBoolean('enableOobeHidDetectionRevamp'),
            },
        };
    }
    get EXTERNAL_API() {
        return [
            'setKeyboardState',
            'setMouseState',
            'setKeyboardPinCode',
            'setPinDialogVisible',
            'setNumKeysEnteredPinCode',
            'setPointingDeviceName',
            'setKeyboardDeviceName',
            'setTouchscreenDetectedState',
            'setContinueButtonEnabled',
        ];
    }
    ready() {
        super.ready();
        this.initializeLoginScreen('HIDDetectionScreen');
        IronA11yAnnouncer.requestAvailability();
    }
    getPrerequisitesText(locale, touchscreenDetected) {
        if (touchscreenDetected) {
            return this.i18nDynamic(locale, 'hidDetectionPrerequisitesTouchscreen');
        }
        else {
            return this.i18nDynamic(locale, 'hidDetectionPrerequisites');
        }
    }
    /**
     * Provides the label for the mouse row
     */
    getMouseLabel() {
        const stateToStrMap = new Map([
            [Connection.SEARCHING, 'hidDetectionMouseSearching'],
            [Connection.USB, 'hidDetectionUSBMouseConnected'],
            [Connection.CONNECTED, 'hidDetectionPointingDeviceConnected'],
            [Connection.PAIRING, 'hidDetectionPointingDeviceConnected'],
            [Connection.PAIRED, 'hidDetectionBTMousePaired'],
        ]);
        if (stateToStrMap.has(this.mouseState)) {
            return this.i18n(stateToStrMap.get(this.mouseState));
        }
        else {
            return '';
        }
    }
    /**
     * Provides the label for the keyboard row
     */
    getKeyboardLabel() {
        switch (this.keyboardState) {
            case Connection.SEARCHING:
                return this.i18n('hidDetectionKeyboardSearching');
            case Connection.USB:
            case Connection.CONNECTED:
                return this.i18n('hidDetectionUSBKeyboardConnected');
            case Connection.PAIRED:
                return this.i18n('hidDetectionBluetoothKeyboardPaired', this.keyboardDeviceName);
            case Connection.PAIRING:
                return this.i18n('hidDetectionKeyboardPairing', this.keyboardDeviceName);
        }
    }
    /**
     * If the user accidentally closed the PIN dialog, tapping on on the keyboard
     * row while the dialog should be visible will reopen it.
     */
    openPinDialog() {
        this.onPinDialogVisibilityChanged();
    }
    /**
     * Helper function to calculate visibility of 'connected' icons.
     * @param state Connection state (one of Connection).
     */
    tickIsVisible(state) {
        return (state == Connection.USB) || (state == Connection.CONNECTED) ||
            (state == Connection.PAIRED);
    }
    /**
     * Helper function to calculate visibility of the spinner.
     * @param state Connection state (one of Connection).
     */
    spinnerIsVisible(state) {
        return state == Connection.SEARCHING;
    }
    /**
     * Updates the visibility of the PIN dialog.
     */
    onPinDialogVisibilityChanged() {
        const dialog = this.shadowRoot?.querySelector('#hid-pin-popup');
        // Return early if element is not yet attached to the page.
        if (!dialog) {
            return;
        }
        if (this.pinDialogVisible) {
            if (!this.pinDialogIsOpen) {
                dialog.showDialog();
                this.pinDialogIsOpen = true;
                this.onPinParametersChanged();
            }
        }
        else {
            dialog.hideDialog();
            this.pinDialogIsOpen = false;
        }
    }
    /**
     * Sets the title of the PIN dialog according to the device's name.
     */
    getPinDialogTitle() {
        return this.i18n('hidDetectionPinDialogTitle', this.keyboardDeviceName);
    }
    /**
     *  Modifies the PIN that is seen on the PIN dialog.
     *  Also marks the current number to be entered with the class 'key-next'.
     */
    onPinParametersChanged() {
        if (this.isOobeHidDetectionRevampEnabled || !this.pinDialogVisible) {
            return;
        }
        const keysEntered = this.numKeysEnteredPinCode;
        for (let i = 0; i < PINCODE_LENGTH; i++) {
            const pincodeSymbol = this.shadowRoot?.querySelector('#hid-pincode-sym-' + (i + 1));
            assert(pincodeSymbol instanceof HTMLDivElement);
            pincodeSymbol.classList.toggle('key-next', i == keysEntered);
            if (i < PINCODE_LENGTH) {
                pincodeSymbol.textContent = this.pinCode[i] ? this.pinCode[i] : '';
            }
        }
    }
    /**
     * Action to be taken when the user closes the PIN dialog before finishing
     * the pairing process.
     */
    onPinDialogClosed() {
        this.pinDialogIsOpen = false;
    }
    /**
     * Action to be taken when the user closes the PIN dialog before finishing
     * the pairing process.
     */
    onCancel(event) {
        event.stopPropagation();
        const hidPinPopupDialog = this.shadowRoot?.querySelector('#hid-pin-popup');
        if (hidPinPopupDialog instanceof OobeModalDialog) {
            hidPinPopupDialog.hideDialog();
        }
    }
    /**
     * This is 'on-tap' event handler for 'Continue' button.
     */
    onHidContinueClick(event) {
        this.userActed('HIDDetectionOnContinue');
        event.stopPropagation();
    }
    /**
     * Sets TouchscreenDetected to true
     */
    setTouchscreenDetectedState(state) {
        this.touchscreenDetected_ = state;
    }
    /**
     * Sets current state in keyboard pairing process.
     * @param state Connection state (one of Connection).
     */
    setKeyboardState(state) {
        this.keyboardState = state;
    }
    /**
     * Sets current state in mouse pairing process.
     * @param state Connection state (one of Connection).
     */
    setMouseState(state) {
        this.mouseState = state;
    }
    setKeyboardPinCode(pin) {
        this.pinCode = pin;
    }
    setPinDialogVisible(visibility) {
        this.pinDialogVisible = visibility;
    }
    setNumKeysEnteredPinCode(numKeys) {
        this.numKeysEnteredPinCode = numKeys;
    }
    setPointingDeviceName(deviceName) {
        this.pointingDeviceName = deviceName;
    }
    setKeyboardDeviceName(deviceName) {
        this.keyboardDeviceName = deviceName;
    }
    setContinueButtonEnabled(enabled) {
        const oldContinueButtonEnabled = this.continueButtonEnabled;
        this.continueButtonEnabled = enabled;
        afterNextRender(this, () => {
            const hidContinueButton = this.shadowRoot?.querySelector('#hid-continue-button');
            if (hidContinueButton instanceof HTMLElement) {
                hidContinueButton.focus();
            }
        });
        if (oldContinueButtonEnabled != enabled) {
            this.announceContinueButtonUpdates();
        }
    }
    announceContinueButtonUpdates() {
        this.dispatchEvent(new CustomEvent('iron-announce', {
            bubbles: true,
            composed: true,
            detail: {
                text: this.continueButtonEnabled ?
                    this.i18n('hidDetectionA11yContinueEnabled') :
                    this.i18n('hidDetectionA11yContinueDisabled'),
            },
        }));
    }
}
customElements.define(HidDetectionScreen.is, HidDetectionScreen);
