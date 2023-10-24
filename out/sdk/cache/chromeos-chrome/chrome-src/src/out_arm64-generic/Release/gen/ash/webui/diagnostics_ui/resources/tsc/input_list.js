// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './diagnostics_shared.css.js';
import './input_card.js';
import './keyboard_tester.js';
import './touchscreen_tester.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DiagnosticsBrowserProxyImpl } from './diagnostics_browser_proxy.js';
import { ConnectionType } from './input.mojom-webui.js';
import { ConnectedDevicesObserverReceiver, InternalDisplayPowerStateObserverReceiver, LidStateObserverReceiver, TabletModeObserverReceiver, TouchDeviceType } from './input_data_provider.mojom-webui.js';
import { getTemplate } from './input_list.html.js';
import { getInputDataProvider } from './mojo_interface_provider.js';
import { TouchpadTesterElement } from './touchpad_tester.js';
/**
 * @fileoverview
 * 'input-list' is responsible for displaying keyboard, touchpad, and
 * touchscreen cards.
 */
const InputListElementBase = I18nMixin(PolymerElement);
export class InputListElement extends InputListElementBase {
    static get is() {
        return 'input-list';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            keyboards: {
                type: Array,
                value: () => [],
            },
            touchpads: {
                type: Array,
                value: () => [],
            },
            touchscreens: {
                type: Array,
                value: () => [],
            },
            showTouchpads: {
                type: Boolean,
                computed: 'computeShowTouchpads(touchpads.length)',
            },
            showTouchscreens: {
                type: Boolean,
                computed: 'computeShowTouchscreens(touchscreens.length)',
            },
            touchscreenIdUnderTesting: {
                type: Number,
                value: -1,
                notify: true,
            },
            hostDeviceStatus: {
                type: Object,
            },
        };
    }
    computeShowTouchpads(numTouchpads) {
        return numTouchpads > 0 && loadTimeData.getBoolean('isTouchpadEnabled');
    }
    computeShowTouchscreens(numTouchscreens) {
        return numTouchscreens > 0 &&
            loadTimeData.getBoolean('isTouchscreenEnabled');
    }
    constructor() {
        super();
        // The evdev id of touchscreen under testing.
        this.touchscreenIdUnderTesting = -1;
        this.hostDeviceStatus = { isLidOpen: false, isTabletMode: false };
        this.connectedDevicesObserverReceiver = null;
        this.internalDisplayPowerStateObserverReceiver = null;
        this.tabletModeReceiver = null;
        this.lidStateReceiver = null;
        this.touchscreenTester = null;
        this.touchpadTester = null;
        this.browserProxy = DiagnosticsBrowserProxyImpl.getInstance();
        this.inputDataProvider = getInputDataProvider();
        this.browserProxy.initialize();
        this.loadInitialDevices();
        this.observeConnectedDevices();
        this.observeInternalDisplayPowerState();
        this.observeLidState();
        this.observeTabletMode();
    }
    connectedCallback() {
        super.connectedCallback();
        const keyboardTester = this.shadowRoot.querySelector('keyboard-tester');
        assert(keyboardTester);
        this.keyboardTester = keyboardTester;
    }
    loadInitialDevices() {
        this.inputDataProvider.getConnectedDevices().then((devices) => {
            this.keyboards = devices.keyboards;
            this.touchpads = devices.touchDevices.filter((device) => device.type === TouchDeviceType.kPointer);
            this.touchscreens = devices.touchDevices.filter((device) => device.type === TouchDeviceType.kDirect);
        });
    }
    observeConnectedDevices() {
        this.connectedDevicesObserverReceiver =
            new ConnectedDevicesObserverReceiver(this);
        this.inputDataProvider.observeConnectedDevices(this.connectedDevicesObserverReceiver.$.bindNewPipeAndPassRemote());
    }
    observeInternalDisplayPowerState() {
        this.internalDisplayPowerStateObserverReceiver =
            new InternalDisplayPowerStateObserverReceiver(this);
        this.inputDataProvider.observeInternalDisplayPowerState(this.internalDisplayPowerStateObserverReceiver.$
            .bindNewPipeAndPassRemote());
    }
    observeLidState() {
        this.lidStateReceiver = new LidStateObserverReceiver(this);
        this.inputDataProvider
            .observeLidState(this.lidStateReceiver.$.bindNewPipeAndPassRemote())
            .then(({ isLidOpen }) => {
            this.onLidStateChanged(isLidOpen);
        });
    }
    observeTabletMode() {
        this.tabletModeReceiver = new TabletModeObserverReceiver(this);
        this.inputDataProvider
            .observeTabletMode(this.tabletModeReceiver.$.bindNewPipeAndPassRemote())
            .then(({ isTabletMode }) => {
            this.onTabletModeChanged(isTabletMode);
        });
    }
    /**
     * Implements
     * InternalDisplayPowerStateObserver.OnInternalDisplayPowerStateChanged.
     * @param isDisplayOn Just applied value of whether the display power is on.
     */
    onInternalDisplayPowerStateChanged(isDisplayOn) {
        // Find the internal touchscreen.
        const index = this.touchscreens.findIndex((device) => device.connectionType === ConnectionType.kInternal);
        if (index != -1) {
            // Copy object to enforce dom to re-render.
            const internalTouchscreen = { ...this.touchscreens[index] };
            internalTouchscreen.testable = isDisplayOn;
            this.splice('touchscreens', index, 1, internalTouchscreen);
            // If the internal display becomes untestable, and it is currently under
            // testing, close the touchscreen tester.
            if (!isDisplayOn &&
                internalTouchscreen.id === this.touchscreenIdUnderTesting) {
                assert(this.touchscreenTester);
                this.touchscreenTester.closeTester();
            }
        }
    }
    /**
     * Implements ConnectedDevicesObserver.OnKeyboardConnected.
     */
    onKeyboardConnected(newKeyboard) {
        this.push('keyboards', newKeyboard);
    }
    /**
     * Removes the device with the given evdev ID from one of the device list
     * properties.
     * @param path the property's path
     */
    removeDeviceById(path, id) {
        const index = this.get(path).findIndex((device) => device.id === id);
        if (index !== -1) {
            this.splice(path, index, 1);
        }
    }
    showDeviceDisconnectedToast() {
        this.dispatchEvent(new CustomEvent('show-toast', {
            composed: true,
            bubbles: true,
            detail: { message: loadTimeData.getString('deviceDisconnected') },
        }));
    }
    /**
     * Implements ConnectedDevicesObserver.OnKeyboardDisconnected.
     */
    onKeyboardDisconnected(id) {
        this.removeDeviceById('keyboards', id);
        if (this.keyboards.length === 0 && this.keyboardTester?.isOpen()) {
            // When no keyboards are connected, the <diagnostics-app> component hides
            // the input page. If that happens while a <cr-dialog> is open, the rest
            // of the app remains unresponsive due to the dialog's native logic
            // blocking interaction with other elements. To prevent this we have to
            // explicitly close the dialog when this happens.
            this.keyboardTester.close();
            this.showDeviceDisconnectedToast();
        }
    }
    /**
     * Implements ConnectedDevicesObserver.OnTouchDeviceConnected.
     */
    onTouchDeviceConnected(newTouchDevice) {
        if (newTouchDevice.type === TouchDeviceType.kPointer) {
            this.push('touchpads', newTouchDevice);
        }
        else {
            this.push('touchscreens', newTouchDevice);
        }
    }
    /**
     * Implements ConnectedDevicesObserver.OnTouchDeviceDisconnected.
     */
    onTouchDeviceDisconnected(id) {
        this.removeDeviceById('touchpads', id);
        this.removeDeviceById('touchscreens', id);
        // If the touchscreen under testing is disconnected, close the touchscreen
        // tester.
        if (id === this.touchscreenIdUnderTesting) {
            assert(this.touchscreenTester);
            this.touchscreenTester.closeTester();
        }
    }
    handleKeyboardTestButtonClick(e) {
        const keyboard = this.keyboards.find((keyboard) => keyboard.id === e.detail.evdevId);
        assert(keyboard);
        this.keyboardTester.keyboard = keyboard;
        this.keyboardTester.show();
    }
    /**
     * Shows touchpad-tester interface when input-card "test" button for specific
     * device is clicked.
     */
    handleTouchpadTestButtonClick(e) {
        this.touchpadTester =
            this.shadowRoot.querySelector(TouchpadTesterElement.is);
        assert(this.touchpadTester);
        const touchpad = this.touchpads.find((touchpad) => touchpad.id === e.detail.evdevId);
        assert(touchpad);
        this.touchpadTester.show(touchpad);
    }
    /**
     * Handles when the touchscreen Test button is clicked.
     */
    handleTouchscreenTestButtonClick(e) {
        this.touchscreenTester =
            this.shadowRoot.querySelector('touchscreen-tester');
        assert(this.touchscreenTester);
        this.touchscreenIdUnderTesting = e.detail.evdevId;
        this.touchscreenTester.showTester(e.detail.evdevId);
    }
    /**
     * 'navigation-view-panel' is responsible for calling this function when
     * the active page changes.
     */
    onNavigationPageChanged({ isActive }) {
        if (isActive) {
            // Focus the first visible card title. If no cards are present,
            // fallback to focusing the element's main container.
            afterNextRender(this, () => {
                if (this.keyboards) {
                    const keyboard = this.shadowRoot.querySelector('#keyboardInputCard');
                    assert(keyboard);
                    const keyboardTitle = keyboard.querySelector('#keyboardTitle');
                    assert(keyboardTitle);
                    keyboardTitle.focus();
                }
                else {
                    const inputListContainer = this.shadowRoot.querySelector('#inputListContainer');
                    assert(inputListContainer);
                    inputListContainer.focus();
                }
            });
            // TODO(ashleydp): Remove when a call can be made at a higher component
            // to avoid duplicate code in all navigatable pages.
            this.browserProxy.recordNavigation('input');
        }
    }
    onHostDeviceStatusChanged() {
        // If the keyboard tester isn't open or we aren't testing an internal
        // keyboard, do nothing.
        if (!this.keyboardTester.isOpen() ||
            this.keyboardTester.keyboard.connectionType !=
                ConnectionType.kInternal) {
            return;
        }
        // Keyboard tester remains open if the lid is open and we are not in tablet
        // mode.
        if (this.hostDeviceStatus.isLidOpen &&
            !this.hostDeviceStatus.isTabletMode) {
            return;
        }
        this.keyboardTester.close();
        this.dispatchEvent(new CustomEvent('show-toast', {
            composed: true,
            bubbles: true,
            detail: { message: this.getKeyboardTesterClosedToastString() },
        }));
    }
    getKeyboardTesterClosedToastString() {
        if (!this.hostDeviceStatus.isLidOpen) {
            return loadTimeData.getString('inputKeyboardTesterClosedToastLidClosed');
        }
        if (this.hostDeviceStatus.isTabletMode) {
            return loadTimeData.getString('inputKeyboardTesterClosedToastTabletMode');
        }
        return loadTimeData.getString('deviceDisconnected');
    }
    /**
     * Implements TabletModeObserver.OnTabletModeChanged.
     * @param isTabletMode Is current display on tablet mode.
     */
    onTabletModeChanged(isTabletMode) {
        this.hostDeviceStatus = {
            ...this.hostDeviceStatus,
            isTabletMode: isTabletMode,
        };
        this.onHostDeviceStatusChanged();
    }
    onLidStateChanged(isLidOpen) {
        this.hostDeviceStatus = {
            ...this.hostDeviceStatus,
            isLidOpen: isLidOpen,
        };
        this.onHostDeviceStatusChanged();
    }
}
customElements.define(InputListElement.is, InputListElement);
