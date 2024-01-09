// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome-untrusted://read-anything-side-panel.top-chrome/read_anything_toolbar.js';
import { assertEquals } from 'chrome-untrusted://webui-test/chai_assert.js';
import { FakeReadingMode } from './fake_reading_mode.js';
suite('CheckmarkVisibleOnSelected', () => {
    let toolbar;
    setup(function () {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        const readingMode = new FakeReadingMode();
        chrome.readingMode = readingMode;
        toolbar = document.createElement('read-anything-toolbar');
        document.body.appendChild(toolbar);
    });
    function assertCheckMarkVisible(checkMarks, expectedIndex) {
        checkMarks.forEach((element, index) => {
            assertEquals(element.style.visibility, index === expectedIndex ? 'visible' : 'hidden');
        });
    }
    function assertCheckMarksForDropdown(dropdown) {
        const buttons = dropdown.querySelectorAll('.dropdown-item');
        const checkMarks = dropdown.querySelectorAll('.check-mark');
        assertEquals(buttons.length, checkMarks.length);
        buttons.forEach((button, index) => {
            button.click();
            assertCheckMarkVisible(checkMarks, index);
        });
    }
    test('test', function () {
        assertCheckMarksForDropdown(toolbar.$.fontMenu);
        assertCheckMarksForDropdown(toolbar.$.rateMenu);
        assertCheckMarksForDropdown(toolbar.$.lineSpacingMenu);
        assertCheckMarksForDropdown(toolbar.$.letterSpacingMenu);
        assertCheckMarksForDropdown(toolbar.$.colorMenu);
        assertCheckMarksForDropdown(toolbar.$.voiceSelectionMenu);
    });
});
