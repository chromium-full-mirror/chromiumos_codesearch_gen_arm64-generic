// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome-untrusted://read-anything-side-panel.top-chrome/voice_selection_menu.js';
import { flush } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { assertEquals, assertFalse, assertTrue } from 'chrome-untrusted://webui-test/chai_assert.js';
suite('VoiceSelectionMenuElement', () => {
    let voiceSelectionMenu;
    let availableVoices;
    const setAvailableVoices = () => {
        // Bypass Typescript compiler to allow us to set a private readonly
        // property
        // @ts-ignore
        voiceSelectionMenu.availableVoices = availableVoices;
        flush();
    };
    setup(() => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        voiceSelectionMenu = document.createElement('voice-selection-menu');
        document.body.appendChild(voiceSelectionMenu);
    });
    suite('with one voice', () => {
        setup(() => {
            availableVoices = [{ name: 'test voice 1' }];
            setAvailableVoices();
        });
        test('it does not show dropdown before click', () => {
            const dropdownItems = voiceSelectionMenu.$.voiceSelectionMenu
                .querySelectorAll('.dropdown-item');
            assertFalse(isPositionedOnPage(dropdownItems.item(0)));
        });
        test('it shows dropdown items after button click', () => {
            const button = voiceSelectionMenu.shadowRoot.querySelector('#voice-selection');
            button.click();
            flush();
            const dropdownItems = voiceSelectionMenu.$.voiceSelectionMenu
                .querySelectorAll('.dropdown-item');
            assertTrue(isPositionedOnPage(dropdownItems.item(0)));
            assertEquals(dropdownItems.item(0).textContent.trim(), availableVoices[0].name);
        });
        suite('when availableVoices updates', () => {
            setup(() => {
                availableVoices = [
                    { name: 'test voice 1' },
                    { name: 'test voice 2' },
                ];
                setAvailableVoices();
            });
            test('it updates and displays the new voices', () => {
                const button = voiceSelectionMenu.shadowRoot.querySelector('#voice-selection');
                button.click();
                flush();
                const dropdownItems = voiceSelectionMenu.$.voiceSelectionMenu
                    .querySelectorAll('.dropdown-item');
                assertEquals(dropdownItems.item(0).textContent.trim(), availableVoices[0].name);
                assertEquals(dropdownItems.item(1).textContent.trim(), availableVoices[1].name);
                assertEquals(dropdownItems.length, 2);
                assertTrue(isPositionedOnPage(dropdownItems.item(0)));
                assertTrue(isPositionedOnPage(dropdownItems.item(1)));
            });
        });
    });
    suite('with multiple available voices', () => {
        let selectedVoice;
        setup(() => {
            selectedVoice = { name: 'test voice 3' };
            availableVoices = [
                { name: 'test voice 0' },
                { name: 'test voice 1' },
                { name: 'test voice 2' },
                selectedVoice,
            ];
            setAvailableVoices();
        });
        test('it shows a checkmark for the selected voice', () => {
            // Bypass Typescript compiler to allow us to set a private readonly
            // property
            // @ts-ignore
            voiceSelectionMenu.selectedVoice = selectedVoice;
            flush();
            const dropdownItems = voiceSelectionMenu.$.voiceSelectionMenu
                .querySelectorAll('.dropdown-item');
            const checkMarkVoice0 = dropdownItems.item(0).querySelector('#check-mark');
            const checkMarkSelectedVoice = dropdownItems.item(3).querySelector('#check-mark');
            assertEquals(dropdownItems.length, 4);
            assertFalse(isHiddenWithCss(checkMarkSelectedVoice));
            assertTrue(isHiddenWithCss(checkMarkVoice0));
        });
    });
});
function isHiddenWithCss(element) {
    return window.getComputedStyle(element).visibility === 'hidden';
}
function isPositionedOnPage(element) {
    return !!(element.offsetWidth || element.offsetHeight ||
        element.getClientRects().length);
}
