// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://os-settings/lazy_load.js';
import { BatteryType } from 'chrome://resources/ash/common/bluetooth/bluetooth_types.js';
import { DeviceConnectionState } from 'chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { createDefaultBluetoothDevice } from 'chrome://webui-test/cr_components/chromeos/bluetooth/fake_bluetooth_config.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { isVisible } from 'chrome://webui-test/test_util.js';
suite('<os-settings-bluetooth-true-wireless-images>', () => {
    let bluetoothTrueWirelessImages;
    setup(async () => {
        bluetoothTrueWirelessImages =
            document.createElement('os-settings-bluetooth-true-wireless-images');
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        document.body.appendChild(bluetoothTrueWirelessImages);
        await flushTasks();
    });
    async function setBatteryTypePercentage(batteryType, batteryPercentage) {
        if (!bluetoothTrueWirelessImages.device.batteryInfo) {
            bluetoothTrueWirelessImages.device.batteryInfo = {
                defaultProperties: undefined,
                leftBudInfo: undefined,
                caseInfo: undefined,
                rightBudInfo: undefined,
            };
        }
        if (batteryType === BatteryType.DEFAULT) {
            bluetoothTrueWirelessImages.device.batteryInfo.defaultProperties = {
                batteryPercentage,
            };
        }
        else if (batteryType === BatteryType.LEFT_BUD) {
            bluetoothTrueWirelessImages.device.batteryInfo.leftBudInfo = {
                batteryPercentage,
            };
        }
        else if (batteryType === BatteryType.CASE) {
            bluetoothTrueWirelessImages.device.batteryInfo.caseInfo = {
                batteryPercentage,
            };
        }
        else if (batteryType === BatteryType.RIGHT_BUD) {
            bluetoothTrueWirelessImages.device.batteryInfo.rightBudInfo = {
                batteryPercentage,
            };
        }
        bluetoothTrueWirelessImages.device = {
            ...bluetoothTrueWirelessImages.device
        };
        await flushTasks();
    }
    async function setTrueWirelessImages() {
        const fakeUrl = { url: 'fake_image' };
        const trueWireless = {
            leftBudImageUrl: fakeUrl,
            caseImageUrl: fakeUrl,
            rightBudImageUrl: fakeUrl,
        };
        bluetoothTrueWirelessImages.device.imageInfo = {
            defaultImageUrl: fakeUrl,
            trueWirelessImages: trueWireless,
        };
        bluetoothTrueWirelessImages.device = {
            ...bluetoothTrueWirelessImages.device
        };
        await flushTasks();
    }
    function queryLeftBudContainer() {
        return bluetoothTrueWirelessImages.shadowRoot.querySelector('#leftBudContainer');
    }
    function queryRightBudContainer() {
        return bluetoothTrueWirelessImages.shadowRoot.querySelector('#rightBudContainer');
    }
    function queryCaseContainer() {
        return bluetoothTrueWirelessImages.shadowRoot.querySelector('#caseContainer');
    }
    function queryDefaultContainer() {
        return bluetoothTrueWirelessImages.shadowRoot.querySelector('#defaultContainer');
    }
    test('Connected and all battery info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.DEFAULT, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.LEFT_BUD, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.CASE, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.RIGHT_BUD, batteryPercentage);
        assertTrue(isVisible(queryLeftBudContainer()));
        assertTrue(isVisible(queryCaseContainer()));
        assertTrue(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
        assertEquals(bluetoothTrueWirelessImages.i18n('bluetoothTrueWirelessLeftBudLabel'), bluetoothTrueWirelessImages.shadowRoot
            .querySelector('#leftBudLabel').innerText.trim());
        assertEquals(bluetoothTrueWirelessImages.i18n('bluetoothTrueWirelessCaseLabel'), bluetoothTrueWirelessImages.shadowRoot
            .querySelector('#caseLabel').innerText.trim());
        assertEquals(bluetoothTrueWirelessImages.i18n('bluetoothTrueWirelessRightBudLabel'), bluetoothTrueWirelessImages.shadowRoot
            .querySelector('#rightBudLabel').innerText.trim());
    });
    test('Connected, no battery info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
    test('Connected and only default battery info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.DEFAULT, batteryPercentage);
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertTrue(isVisible(queryDefaultContainer()));
        assertFalse(isVisible(bluetoothTrueWirelessImages.shadowRoot.querySelector('#notConnectedLabel')));
    });
    test('Connected and only left bud info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.LEFT_BUD, batteryPercentage);
        assertTrue(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
    test('Connected and only case info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.CASE, batteryPercentage);
        assertFalse(isVisible(queryLeftBudContainer()));
        assertTrue(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
    test('Connected and only right bud info', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.RIGHT_BUD, batteryPercentage);
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertTrue(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
    test('Connected and no True Wireless Images', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.DEFAULT, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.LEFT_BUD, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.CASE, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.RIGHT_BUD, batteryPercentage);
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
    test('Not connected state', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kNotConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        await setTrueWirelessImages();
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertTrue(isVisible(queryDefaultContainer()));
        assertEquals(bluetoothTrueWirelessImages.i18n('bluetoothDeviceDetailDisconnected'), bluetoothTrueWirelessImages.shadowRoot
            .querySelector('#notConnectedLabel').innerText.trim());
    });
    test('Not connected and no True Wireless Images', async () => {
        const device = createDefaultBluetoothDevice(
        /* id= */ '123456789', /* publicName= */ 'BeatsX', 
        /* connectionState= */
        DeviceConnectionState.kNotConnected);
        bluetoothTrueWirelessImages.device = device.deviceProperties;
        const batteryPercentage = 100;
        await setBatteryTypePercentage(BatteryType.LEFT_BUD, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.CASE, batteryPercentage);
        await setBatteryTypePercentage(BatteryType.RIGHT_BUD, batteryPercentage);
        assertFalse(isVisible(queryLeftBudContainer()));
        assertFalse(isVisible(queryCaseContainer()));
        assertFalse(isVisible(queryRightBudContainer()));
        assertFalse(isVisible(queryDefaultContainer()));
    });
});
