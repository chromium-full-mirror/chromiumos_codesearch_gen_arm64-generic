// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Abstracts away the details of `chrome.bluetooth`,
 * `chrome.bluetoothPrivate`, and `ChromeVoxSubpageBrowserProxy` for a UI
 * component to interact with a bluetooth braille display.
 */
import { ChromeVoxSubpageBrowserProxyImpl } from './chromevox_subpage_browser_proxy.js';
/**
 * Manages interaction with the bluetooth and braille subsystems in ChromeOS.
 * A caller can use this class by doing:
 * let manager = new BluetoothBrailleDisplayManager();
 * manager.addListener(listenerObject); // listenerObject receives updates
 *                                      // on important events in bluetooth.
 * manager.start();         // Starts bluetooth discovery.
 * manager.connect();       // Connects to a discovered device received in the
 *                          // listenerObject.
 * manager.finishPairing(); // If a pairing request is sent to the
 *                          // listenerObject, this is how a caller can
 *                          // respond.
 * manager.stop();          // Stops discovery, but persists connections.
 *
 * TODO(b/270617362): Add tests for BluetoothBrailleDisplayManager.
 */
export class BluetoothBrailleDisplayManager {
    constructor() {
        /**
         * This list of braille display names was taken from other services that
         * utilize Brltty (e.g. BrailleBack).
         */
        this.displayNamePrefixes_ = [
            'Actilino ALO',
            'Activator AC4',
            'Active Braille AB',
            'Active Star AS',
            'ALVA BC',
            'APEX',
            'APH Chameleon',
            'APH Mantis',
            'Basic Braille BB',
            'Basic Braille Plus BP',
            'BAUM Conny',
            'Baum PocketVario',
            'Baum SuperVario',
            'Baum SVario',
            'BrailleConnect',
            'BrailleEDGE',
            'BrailleMe',
            'BMpk',
            'BMsmart',
            'BM32',
            'BrailleNote Touch',
            'BrailleSense',
            'Braille Star',
            'Braillex',
            'Brailliant BI',
            'Brailliant 14',
            'Brailliant 80',
            'Braillino BL',
            'B2G',
            'Conny',
            'DotPad',
            'Easy Braille EBR',
            'EL12-',
            'Esys-',
            'Focus',
            'Humanware BrailleOne',
            'HWG Brailliant',
            'MB248',
            'NLS eReader',
            'Orbit Reader',
            'Pronto!',
            'Refreshabraille',
            'SmartBeetle',
            'SuperVario',
            'TSM',
            'VarioConnect',
            'VarioUltra',
        ];
        this.listeners_ = [];
        this.chromeVoxSubpageBrowserProxy_ =
            ChromeVoxSubpageBrowserProxyImpl.getInstance();
        this.onDeviceAddedListener_ = device => this.handleDevicesChanged(device);
        this.onDeviceChangedListener_ = device => this.handleDevicesChanged(device);
        this.onDeviceRemovedListener_ = device => this.handleDevicesChanged(device);
        this.onPairingListener_ = pairingEvent => this.handlePairing(pairingEvent);
        chrome.settingsPrivate
            .getPref('settings.a11y.chromevox.preferred_braille_display_address')
            .then((pref) => {
            this.preferredDisplayAddress_ = pref.value;
        });
    }
    addListener(listener) {
        this.listeners_.push(listener);
    }
    /**
     * Starts listening for changes and discovering bluetooth devices.
     */
    start() {
        this.chromeVoxSubpageBrowserProxy_.addDeviceAddedListener(this.onDeviceAddedListener_);
        this.chromeVoxSubpageBrowserProxy_.addDeviceChangedListener(this.onDeviceChangedListener_);
        this.chromeVoxSubpageBrowserProxy_.addDeviceRemovedListener(this.onDeviceRemovedListener_);
        this.chromeVoxSubpageBrowserProxy_.addPairingListener(this.onPairingListener_);
        this.chromeVoxSubpageBrowserProxy_.startDiscovery();
        // Pick up any devices already in the system including previously paired,
        // but out of range displays.
        this.handleDevicesChanged();
    }
    /**
     * Stops discovering bluetooth devices and listening for changes.
     */
    stop() {
        this.chromeVoxSubpageBrowserProxy_.stopDiscovery();
        this.chromeVoxSubpageBrowserProxy_.removeDeviceAddedListener(this.onDeviceAddedListener_);
        this.chromeVoxSubpageBrowserProxy_.removeDeviceChangedListener(this.onDeviceChangedListener_);
        this.chromeVoxSubpageBrowserProxy_.removeDeviceRemovedListener(this.onDeviceRemovedListener_);
        this.chromeVoxSubpageBrowserProxy_.removePairingListener(this.onPairingListener_);
    }
    /**
     * Connects to the given bluetooth braille display.
     */
    async connect(display) {
        if (this.preferredDisplayAddress_ === display.address ||
            !this.preferredDisplayAddress_) {
            this.connectInternal(display);
        }
        else {
            // Disconnect any previously connected bluetooth braille display.
            await chrome.bluetoothPrivate.disconnectAll(this.preferredDisplayAddress_);
            this.connectInternal(display);
        }
    }
    async connectInternal(display) {
        this.preferredDisplayAddress_ = display.address;
        chrome.settingsPrivate.setPref('settings.a11y.chromevox.preferred_braille_display_address', display.address);
        if (!display.connected) {
            await chrome.bluetoothPrivate.connect(display.address);
        }
        if (!display.paired) {
            chrome.bluetoothPrivate.pair(display.address);
        }
    }
    /**
     * Disconnects the given display and clears it from Brltty.
     */
    disconnect(display) {
        chrome.bluetoothPrivate.disconnectAll(display.address);
        this.chromeVoxSubpageBrowserProxy_.updateBluetoothBrailleDisplayAddress('');
    }
    /**
     * Forgets the given display.
     */
    forget(display) {
        chrome.bluetoothPrivate.forgetDevice(display.address);
        this.chromeVoxSubpageBrowserProxy_.updateBluetoothBrailleDisplayAddress('');
    }
    /**
     * Finishes pairing in response to
     * `BluetoothBrailleDisplayListener.onPincodeRequested`.
     */
    finishPairing(display, pincode) {
        chrome.bluetoothPrivate.setPairingResponse({
            response: chrome.bluetoothPrivate.PairingResponse.CONFIRM,
            device: display,
            pincode,
        });
    }
    async handleDevicesChanged(device) {
        const devices = await chrome.bluetooth.getDevices();
        const displayList = devices.filter(device => {
            return this.displayNamePrefixes_.some(name => {
                return device.name && device.name.startsWith(name);
            });
        });
        if (displayList.length === 0) {
            return;
        }
        if (device && !displayList.find(i => i.name === device.name)) {
            return;
        }
        displayList.forEach(display => {
            if (this.preferredDisplayAddress_ === display.address) {
                this.handlePreferredDisplayConnectionStateChanged(display);
            }
        });
        this.listeners_.forEach(listener => listener.onDisplayListChanged(displayList));
    }
    handlePairing(pairingEvent) {
        if (pairingEvent.pairing ===
            chrome.bluetoothPrivate.PairingEventType.REQUEST_PINCODE) {
            this.listeners_.forEach(listener => listener.onPincodeRequested(pairingEvent.device));
        }
    }
    handlePreferredDisplayConnectionStateChanged(display) {
        if (display.connected === this.preferredDisplayConnected_) {
            return;
        }
        this.preferredDisplayConnected_ = display.connected;
        // We do not clear the address seen by Brltty unless the caller explicitly
        // disconnects or forgets the display via the public methods of this
        // class.
        if (display.connected) {
            this.chromeVoxSubpageBrowserProxy_.updateBluetoothBrailleDisplayAddress(display.address);
        }
    }
}
