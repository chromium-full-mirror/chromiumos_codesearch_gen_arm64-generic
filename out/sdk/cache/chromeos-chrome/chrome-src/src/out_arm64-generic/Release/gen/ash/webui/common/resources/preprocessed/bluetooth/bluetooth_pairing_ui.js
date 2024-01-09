// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Root UI element for Bluetooth pairing dialog.
 */
import '//resources/cr_elements/cr_button/cr_button.js';
import './bluetooth_pairing_device_selection_page.js';
import './bluetooth_pairing_enter_code_page.js';
import './bluetooth_pairing_request_code_page.js';
import './bluetooth_pairing_confirm_code_page.js';
import './bluetooth_spinner_page.js';
import { assert, assertNotReached } from 'chrome://resources/js/assert.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { BluetoothDiscoveryDelegateReceiver, BluetoothSystemState, DevicePairingDelegateReceiver, KeyEnteredHandlerReceiver, PairingResult, SystemPropertiesObserverReceiver } from 'chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js';
import { getTemplate } from './bluetooth_pairing_ui.html.js';
import { PairingAuthType } from './bluetooth_types.js';
import { getBluetoothConfig } from './cros_bluetooth_config.js';
class KeyEnteredHandler {
    constructor(page, keyEnteredHandlerReceiver) {
        this.page_ = page;
        this.keyEnteredHandlerReceiver_ = new KeyEnteredHandlerReceiver(this);
        this.keyEnteredHandlerReceiver_.$.bindHandle(keyEnteredHandlerReceiver.handle);
    }
    handleKeyEntered(numKeysEntered) {
        this.page_.handleKeyEntered(numKeysEntered);
    }
    close() {
        this.keyEnteredHandlerReceiver_.$.close();
    }
}
var BluetoothPairingSubpageId;
(function (BluetoothPairingSubpageId) {
    BluetoothPairingSubpageId["DEVICE_SELECTION_PAGE"] = "deviceSelectionPage";
    BluetoothPairingSubpageId["DEVICE_ENTER_CODE_PAGE"] = "deviceEnterCodePage";
    BluetoothPairingSubpageId["DEVICE_REQUEST_CODE_PAGE"] = "deviceRequestCodePage";
    BluetoothPairingSubpageId["DEVICE_CONFIRM_CODE_PAGE"] = "deviceConfirmCodePage";
    BluetoothPairingSubpageId["SPINNER_PAGE"] = "spinnerPage";
})(BluetoothPairingSubpageId || (BluetoothPairingSubpageId = {}));
export class SettingsBluetoothPairingUiElement extends PolymerElement {
    static get is() {
        return 'bluetooth-pairing-ui';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The address, when set, of the specific device that will be attempted to
             * be paired with by the pairing dialog. If null, no specific device will
             * be paired with and the user will be allowed to select a device to pair
             * with. This is set when the dialog is opened if the purpose of the
             * dialog is to pair with a specific device.
             */
            pairingDeviceAddress: {
                type: String,
                value: null,
            },
            /**
             * Flag indicating whether links should be displayed or not. In some
             * cases, such as the user being in OOBE or the login screen, links will
             * not work and should not be displayed.
             */
            shouldOmitLinks: {
                type: Boolean,
                value: false,
            },
            /**
             * Id of the currently selected Bluetooth pairing subpage.
             */
            selectedPageId_: {
                type: String,
                value: BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE,
                observer: 'onSelectedPageIdChanged_',
            },
            discoveredDevices_: {
                type: Array,
                value: [],
            },
            /**
             * This can be null if no pairing attempt was started or a pairing attempt
             * was cancelled by user.
             */
            devicePendingPairing_: {
                type: Object,
                value: null,
            },
            pairingAuthType_: {
                type: Object,
                value: null,
            },
            pairingCode_: {
                type: String,
                value: '',
            },
            numKeysEntered_: {
                type: Number,
                value: 0,
            },
            /**
             * Id of a device who's pairing attempt failed.
             */
            lastFailedPairingDeviceId_: {
                type: String,
                value: '',
            },
            isBluetoothEnabled_: {
                type: Boolean,
                value: false,
            },
            /**
             * Used to access |BluetoothPairingSubpageId| type in HTML.
             */
            SubpageId: {
                type: Object,
                value: BluetoothPairingSubpageId,
            },
        };
    }
    constructor() {
        super();
        /**
         * The Mojo receiver of the current ongoing pairing. If null indicates no
         * pairing is occurring.
         */
        this.pairingDelegateReceiver_ = null;
        this.requestCodeCallback_ = null;
        this.keyEnteredReceiver_ = null;
        this.confirmCodeCallback_ = null;
        this.onBluetoothDiscoveryStartedCallbackForTest_ = null;
        this.handlePairDeviceResultCallbackForTest_ = null;
        this.systemPropertiesObserverReceiver_ =
            new SystemPropertiesObserverReceiver(this);
        this.bluetoothDiscoveryDelegateReceiver_ =
            new BluetoothDiscoveryDelegateReceiver(this);
    }
    ready() {
        super.ready();
        // If there's a specific device to pair with, immediately go to the spinner
        // page.
        if (this.pairingDeviceAddress) {
            this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
        }
    }
    connectedCallback() {
        super.connectedCallback();
        getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote());
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        if (this.systemPropertiesObserverReceiver_) {
            this.systemPropertiesObserverReceiver_.$.close();
        }
        if (this.bluetoothDiscoveryDelegateReceiver_) {
            this.bluetoothDiscoveryDelegateReceiver_.$.close();
        }
        if (this.pairingDelegateReceiver_) {
            this.pairingDelegateReceiver_.$.close();
        }
        if (this.keyEnteredReceiver_) {
            this.keyEnteredReceiver_.close();
        }
    }
    onPropertiesUpdated(properties) {
        const wasBluetoothEnabled = this.isBluetoothEnabled_;
        this.isBluetoothEnabled_ =
            properties.systemState === BluetoothSystemState.kEnabled;
        if (!wasBluetoothEnabled && this.isBluetoothEnabled_) {
            // If Bluetooth enables after being disabled, initialize the UI state.
            this.lastFailedPairingDeviceId_ = '';
            // Start discovery.
            getBluetoothConfig().startDiscovery(this.bluetoothDiscoveryDelegateReceiver_.$
                .bindNewPipeAndPassRemote());
        }
    }
    onDiscoveredDevicesListChanged(discoveredDevices) {
        this.discoveredDevices_ = discoveredDevices;
        this.updateLastFailedPairingDeviceId_(discoveredDevices);
        // Check if this dialog needs to pair to a specific device.
        if (!this.pairingDeviceAddress) {
            return;
        }
        // Check if a pairing is already occurring.
        if (this.pairingDelegateReceiver_) {
            return;
        }
        // If |this.pairingDeviceAddress| exists and no ongoing pairing is
        // occurring, search for the device with address |this.pairingDeviceAddress|
        // and attempt to pair with it.
        this.attemptPairDeviceByAddress_();
    }
    updateLastFailedPairingDeviceId_(devices) {
        if (devices.some(device => device.id === this.lastFailedPairingDeviceId_)) {
            return;
        }
        this.lastFailedPairingDeviceId_ = '';
    }
    onBluetoothDiscoveryStarted(handler) {
        this.devicePairingHandler_ = handler;
        // Inform tests that onBluetoothDiscoveryStarted() has been called. This is
        // to ensure tests don't progress until |devicePairingHandler_| has been
        // set.
        if (this.onBluetoothDiscoveryStartedCallbackForTest_) {
            this.onBluetoothDiscoveryStartedCallbackForTest_();
        }
    }
    onBluetoothDiscoveryStopped() {
        // Discovery will stop if Bluetooth disables. Reset the UI back to the
        // selection page.
        this.bluetoothDiscoveryDelegateReceiver_.$.close();
        this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;
        this.devicePairingHandler_ = null;
    }
    /**
     * Returns a promise that will be resolved the next time
     * onBluetoothDiscoveryStarted() is called.
     */
    waitForOnBluetoothDiscoveryStartedForTest() {
        return new Promise((resolve) => {
            this.onBluetoothDiscoveryStartedCallbackForTest_ = resolve;
        });
    }
    /**
     * Returns a promise that will be resolved the next time
     * handlePairDeviceResult_() is called.
     */
    waitForHandlePairDeviceResultForTest() {
        return new Promise((resolve) => {
            this.handlePairDeviceResultCallbackForTest_ = resolve;
        });
    }
    onPairDevice_(event) {
        if (!event.detail.device) {
            return;
        }
        // If a pairing operation is currently underway, close it and queue
        // the current device to be paired after pairDevice_() promise is
        // returned.
        if (this.pairingDelegateReceiver_) {
            this.queuedDevicePendingPairing_ = event.detail.device;
            this.pairingDelegateReceiver_.$.close();
            return;
        }
        this.pairDevice_(event.detail.device);
    }
    /**
     * Searches for the device with address |this.pairingDeviceAddress| in
     * |this.discoveredDevices| and attempts to pair with it.
     */
    attemptPairDeviceByAddress_() {
        assert(this.pairingDeviceAddress);
        assert(!this.pairingDelegateReceiver_);
        if (!this.devicePairingHandler_) {
            console.error('Attempted pairing with no device pairing handler.');
            return;
        }
        this.devicePairingHandler_.fetchDevice(this.pairingDeviceAddress)
            .then(result => {
            if (!result.device) {
                console.warn('Attempted pairing with a device that was not found, address: ' +
                    this.pairingDeviceAddress);
                return;
            }
            this.pairDevice_(result.device);
        });
    }
    pairDevice_(device) {
        assert(this.devicePairingHandler_, 'devicePairingHandler_ has not been set.');
        this.pairingDelegateReceiver_ = new DevicePairingDelegateReceiver(this);
        this.devicePendingPairing_ = device;
        assert(this.devicePendingPairing_);
        this.lastFailedPairingDeviceId_ = '';
        this.devicePairingHandler_
            .pairDevice(this.devicePendingPairing_.id, this.pairingDelegateReceiver_.$.bindNewPipeAndPassRemote())
            .then(result => {
            this.handlePairDeviceResult_(result.result);
        })
            .catch(() => {
            // Pairing failed due to external issues, such as Mojo pipe
            // disconnecting from Bluetooth disabling.
            this.handlePairDeviceResult_(PairingResult.kNonAuthFailure);
        });
    }
    handlePairDeviceResult_(result) {
        if (this.pairingDelegateReceiver_) {
            this.pairingDelegateReceiver_.$.close();
        }
        this.pairingAuthType_ = null;
        if (this.keyEnteredReceiver_) {
            this.keyEnteredReceiver_.close();
            this.keyEnteredReceiver_ = null;
        }
        this.pairingDelegateReceiver_ = null;
        if (result === PairingResult.kSuccess) {
            this.closeDialog_();
            return;
        }
        // If |pairingDeviceAddress| is defined, this was a device-specific pairing
        // request that has failed. Clear |pairingDeviceAddress| so that we don't
        // automatically attempt to re-pair with the same device again.
        this.pairingDeviceAddress = null;
        this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;
        if (this.devicePendingPairing_) {
            this.lastFailedPairingDeviceId_ = this.devicePendingPairing_.id;
        }
        this.devicePendingPairing_ = null;
        if (this.queuedDevicePendingPairing_ && this.devicePairingHandler_) {
            this.pairDevice_(this.queuedDevicePendingPairing_);
        }
        this.queuedDevicePendingPairing_ = null;
        // Inform tests that handlePairDeviceResult_() has been called. This is
        // to ensure tests don't progress until the correct state has been
        // set.
        if (this.handlePairDeviceResultCallbackForTest_) {
            this.handlePairDeviceResultCallbackForTest_();
        }
    }
    requestPinCode() {
        return this.requestCode_(PairingAuthType.REQUEST_PIN_CODE);
    }
    requestPasskey() {
        return this.requestCode_(PairingAuthType.REQUEST_PASSKEY);
    }
    requestCode_(authType) {
        this.pairingAuthType_ = authType;
        this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_REQUEST_CODE_PAGE;
        this.requestCodeCallback_ = {
            reject: null,
            resolve: null,
        };
        const promise = new Promise((resolve, reject) => {
            this.requestCodeCallback_.resolve = (code) => {
                if (authType === PairingAuthType.REQUEST_PIN_CODE) {
                    resolve({ 'pinCode': code });
                    return;
                }
                if (authType === PairingAuthType.REQUEST_PASSKEY) {
                    resolve({ 'passkey': code });
                    return;
                }
                assertNotReached();
            };
            this.requestCodeCallback_.reject = reject;
        });
        return promise;
    }
    onRequestCodeEntered_(event) {
        this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
        event.stopPropagation();
        assert(this.pairingAuthType_);
        assert(this.requestCodeCallback_ && this.requestCodeCallback_.resolve);
        this.requestCodeCallback_.resolve(event.detail.code);
    }
    displayPinCode(pinCode, handler) {
        this.displayCode_(handler, pinCode);
    }
    displayPasskey(passkey, handler) {
        this.displayCode_(handler, passkey);
    }
    displayCode_(handler, code) {
        this.pairingCode_ = code;
        this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_ENTER_CODE_PAGE;
        this.keyEnteredReceiver_ = new KeyEnteredHandler(this, handler);
    }
    handleKeyEntered(numKeysEntered) {
        this.numKeysEntered_ = numKeysEntered;
    }
    confirmPasskey(passkey) {
        this.pairingAuthType_ = PairingAuthType.CONFIRM_PASSKEY;
        this.selectedPageId_ = BluetoothPairingSubpageId.DEVICE_CONFIRM_CODE_PAGE;
        this.pairingCode_ = passkey;
        this.confirmCodeCallback_ = {
            resolve: null,
            reject: null,
        };
        return new Promise((resolve, reject) => {
            this.confirmCodeCallback_.resolve = () => {
                resolve({ 'confirmed': true });
            };
            this.confirmCodeCallback_.reject = reject;
        });
    }
    onConfirmCode_(event) {
        this.selectedPageId_ = BluetoothPairingSubpageId.SPINNER_PAGE;
        event.stopPropagation();
        assert(this.pairingAuthType_);
        assert(this.confirmCodeCallback_ && this.confirmCodeCallback_.resolve);
        this.confirmCodeCallback_.resolve();
    }
    authorizePairing() {
        // TODO(crbug.com/1010321): Implement this function.
        return new Promise(() => { });
    }
    shouldShowSubpage_(subpageId) {
        return this.selectedPageId_ === subpageId;
    }
    onCancelClick_(event) {
        event.stopPropagation();
        this.devicePendingPairing_ = null;
        if (this.pairingDelegateReceiver_) {
            this.pairingDelegateReceiver_.$.close();
            this.finishPendingCallbacksForTest_();
            this.pairingDelegateReceiver_ = null;
            return;
        }
        // If there is no receiver, this means pairing was not initiated and we
        // we are currently in DEVICE_SELECTION_PAGE or something went wrong and
        // |pairingDelegateReceiver_| was not instantiated. (b/218368694)
        this.closeDialog_();
    }
    closeDialog_() {
        this.dispatchEvent(new CustomEvent('finished', {
            bubbles: true,
            composed: true,
        }));
    }
    onSelectedPageIdChanged_() {
        // If the current page changes to the device selection page, focus the item
        // corresponding to the last device attempted to be paired with.
        if (this.selectedPageId_ !==
            BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE) {
            return;
        }
        const deviceSelectionPage = this.shadowRoot.querySelector('#deviceSelectionPage');
        if (!deviceSelectionPage) {
            return;
        }
        deviceSelectionPage.attemptFocusLastSelectedItem();
    }
    finishPendingCallbacksForTest_() {
        if (this.requestCodeCallback_ && this.requestCodeCallback_.reject) {
            // |requestCodeCallback_| promise is held by FakeDevicePairingHandler
            // in test. This does not get resolved for the test case where user
            // cancels request while in request code page. Calling reject is
            // necessary here to make sure the promise is resolved.
            this.requestCodeCallback_.reject();
        }
        // |confirmCodeCallback_| promise is held by FakeDevicePairingHandler
        // in test. This does not get resolved for the test case where user
        // cancels request while in request code page. Calling reject is
        // necessary here to make sure the promise is resolved.
        if (this.confirmCodeCallback_ && this.confirmCodeCallback_.reject) {
            this.confirmCodeCallback_.reject();
        }
    }
    getDeviceName_() {
        if (!this.devicePendingPairing_) {
            return '';
        }
        return mojoString16ToString(this.devicePendingPairing_.publicName);
    }
}
customElements.define(SettingsBluetoothPairingUiElement.is, SettingsBluetoothPairingUiElement);
