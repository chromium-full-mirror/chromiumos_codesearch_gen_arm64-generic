// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertEquals } from 'chrome://webui-test/chai_assert.js';
export function clickAcceptButton(discountConsentCard) {
    const contentSelectedPage = discountConsentCard.shadowRoot.querySelectorAll('#contentSteps .iron-selected');
    assertEquals(contentSelectedPage.length, 1);
    assertEquals('step2', contentSelectedPage[0].getAttribute('id'), 'Selected content step should have id as step2');
    contentSelectedPage[0].querySelector('.action-button').click();
}
export function clickCloseButton(discountConsentCard) {
    discountConsentCard.shadowRoot.querySelector('#close').click();
}
export function clickRejectButton(discountConsentCard) {
    const contentSelectedPage = discountConsentCard.shadowRoot.querySelectorAll('#contentSteps .iron-selected');
    assertEquals(contentSelectedPage.length, 1);
    assertEquals('step2', contentSelectedPage[0].getAttribute('id'), 'Selected content step should have id as step2');
    contentSelectedPage[0].querySelector('.cancel-button').click();
}
export function nextStep(discountConsentCard) {
    assertEquals(0, discountConsentCard.currentStep, 'discountConsentCard is not in step 1');
    const contentSelectedPage = discountConsentCard.shadowRoot.querySelectorAll('#contentSteps .iron-selected');
    contentSelectedPage[0].querySelector('.action-button').click();
}
