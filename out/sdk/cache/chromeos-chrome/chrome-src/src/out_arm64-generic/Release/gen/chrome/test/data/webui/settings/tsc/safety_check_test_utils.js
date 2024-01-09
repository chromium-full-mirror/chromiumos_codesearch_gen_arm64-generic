// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertTrue } from 'chrome://webui-test/chai_assert.js';
/**
 * Verify that the safety check child inside the page has been configured as
 * specified.
 */
export function assertSafetyCheckChild({ page, iconStatus, label, sublabel, buttonLabel, buttonAriaLabel, buttonClass, managedIcon, rowClickable, }) {
    const safetyCheckChild = page.shadowRoot.querySelector('#safetyCheckChild');
    assertTrue(safetyCheckChild.iconStatus === iconStatus);
    assertTrue(safetyCheckChild.label === label);
    assertTrue((!sublabel && !safetyCheckChild.subLabel) ||
        safetyCheckChild.subLabel === sublabel);
    assertTrue(!buttonLabel || safetyCheckChild.buttonLabel === buttonLabel);
    assertTrue(!buttonAriaLabel || safetyCheckChild.buttonAriaLabel === buttonAriaLabel);
    assertTrue(!buttonClass || safetyCheckChild.buttonClass === buttonClass);
    assertTrue(!!managedIcon === !!safetyCheckChild.managedIcon);
    assertTrue(!!rowClickable === !!safetyCheckChild.rowClickable);
}
