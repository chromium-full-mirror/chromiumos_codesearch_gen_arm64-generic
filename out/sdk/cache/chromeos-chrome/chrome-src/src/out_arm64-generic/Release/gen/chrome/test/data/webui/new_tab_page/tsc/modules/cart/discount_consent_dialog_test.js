// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://new-tab-page/lazy_load.js';
import { pressAndReleaseKeyOn } from 'chrome://resources/polymer/v3_0/iron-test-helpers/mock-interactions.js';
import { assertEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
suite('NewTabPageDiscountConsentDialogTest', () => {
    let ActionSignal;
    (function (ActionSignal) {
        ActionSignal[ActionSignal["ACCEPTED"] = 0] = "ACCEPTED";
        ActionSignal[ActionSignal["DISMISSED"] = 1] = "DISMISSED";
        ActionSignal[ActionSignal["REJECTED"] = 2] = "REJECTED";
    })(ActionSignal || (ActionSignal = {}));
    let discountConsentDialog;
    let actionSignalCaptured;
    setup(() => {
        document.body.innerHTML = window.trustedTypes.emptyHTML;
        discountConsentDialog = document.createElement('discount-consent-dialog');
        document.body.appendChild(discountConsentDialog);
        discountConsentDialog.addEventListener('discount-consent-accepted', () => actionSignalCaptured = ActionSignal.ACCEPTED);
        discountConsentDialog.addEventListener('discount-consent-rejected', () => actionSignalCaptured = ActionSignal.REJECTED);
        discountConsentDialog.addEventListener('discount-consent-dismissed', () => actionSignalCaptured = ActionSignal.DISMISSED);
    });
    test('opens crDialog on attach', () => {
        assertTrue(discountConsentDialog.$.dialog.open);
    });
    test('emits discount-consent-rejected event when reject button is clicked', () => {
        discountConsentDialog.$.cancelButton.click();
        assertEquals(ActionSignal.REJECTED, actionSignalCaptured);
    });
    test('emits discount-consent-accepted event when accept button is clicked', () => {
        discountConsentDialog.$.confirmButton.click();
        assertEquals(ActionSignal.ACCEPTED, actionSignalCaptured);
    });
    test('emits discount-consent-dismissed event when close button is clicked', () => {
        discountConsentDialog.shadowRoot
            .querySelector('#dialog').cancel();
        assertEquals(ActionSignal.DISMISSED, actionSignalCaptured);
    });
    test('emits discount-consent-dismissed event when esc key is pressed', () => {
        pressAndReleaseKeyOn(discountConsentDialog, 27, '', 'Escape');
        assertEquals(ActionSignal.DISMISSED, actionSignalCaptured);
    });
    test('verify dialogTitle property', () => {
        const title = discountConsentDialog.shadowRoot.querySelector('div[slot=title]');
        assertTrue(title != null);
        assertEquals('Your carts', title.textContent);
    });
});
