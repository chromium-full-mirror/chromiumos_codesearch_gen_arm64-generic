// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://accessory-update/peripheral_updates_list.js';
import { fakeFirmwareUpdates } from 'chrome://accessory-update/fake_data.js';
import { FakeUpdateProvider } from 'chrome://accessory-update/fake_update_provider.js';
import { setUpdateProviderForTesting } from 'chrome://accessory-update/mojo_interface_provider.js';
import { assert } from 'chrome://resources/js/assert.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome://webui-test/chromeos/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
import { isVisible } from 'chrome://webui-test/test_util.js';
suite('PeripheralUpdatesListTest', () => {
    let peripheralUpdateListElement = null;
    let provider = null;
    setup(() => {
        provider = new FakeUpdateProvider();
        setUpdateProviderForTesting(provider);
        // @ts-ignore
        document.body.innerHTML = window.trustedTypes.emptyHTML;
    });
    teardown(() => {
        peripheralUpdateListElement?.remove();
        peripheralUpdateListElement = null;
        provider?.reset();
        provider = null;
    });
    function initializeUpdateList() {
        assertFalse(!!peripheralUpdateListElement);
        provider?.setFakeFirmwareUpdates(fakeFirmwareUpdates);
        // Add the update list to the DOM.
        peripheralUpdateListElement =
            document.createElement('peripheral-updates-list');
        assertTrue(!!peripheralUpdateListElement);
        document.body.appendChild(peripheralUpdateListElement);
        return flushTasks();
    }
    function clearFirmwareUpdates() {
        peripheralUpdateListElement?.setFirmwareUpdatesForTesting([]);
        return flushTasks();
    }
    function getFirmwareUpdates() {
        assert(peripheralUpdateListElement);
        return peripheralUpdateListElement?.getFirmwareUpdatesForTesting();
    }
    function getUpdateCards() {
        assert(peripheralUpdateListElement?.shadowRoot);
        return Array.from(peripheralUpdateListElement?.shadowRoot.querySelectorAll('update-card'));
    }
    test('UpdateCardsPopulated', () => {
        return initializeUpdateList().then(() => {
            const updateCards = getUpdateCards();
            getFirmwareUpdates().forEach((u, i) => {
                const card = updateCards[i];
                assertTrue(!!card);
                const updateCardName = card.shadowRoot.querySelector('#name');
                assertTrue(!!updateCardName);
                assertEquals(mojoString16ToString(u.deviceName), updateCardName.innerText);
            });
        });
    });
    test('EmptyState', () => {
        return initializeUpdateList()
            .then(() => clearFirmwareUpdates())
            .then(() => {
            assert(peripheralUpdateListElement?.shadowRoot);
            const upToDateText = peripheralUpdateListElement?.shadowRoot.querySelector('#upToDateText');
            assertTrue(isVisible(upToDateText));
        });
    });
});
