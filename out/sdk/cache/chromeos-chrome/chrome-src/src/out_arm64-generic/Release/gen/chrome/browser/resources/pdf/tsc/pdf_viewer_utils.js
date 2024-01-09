// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
import { getDeepActiveElement } from 'chrome://resources/js/util.js';
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier.
 * @return Whether the event has the ctrl key modifier.
 */
export function hasCtrlModifier(e) {
    let hasModifier = e.ctrlKey;
    // 
    return hasModifier;
}
/**
 * Determines if the event has the platform-equivalent of the Windows ctrl key
 * modifier, and only that modifier.
 * @return Whether the event only has the ctrl key modifier.
 */
export function hasCtrlModifierOnly(e) {
    let metaModifier = e.metaKey;
    // 
    return hasCtrlModifier(e) && !e.shiftKey && !e.altKey && !metaModifier;
}
/**
 * Whether keydown events should currently be ignored. Events are ignored when
 * an editable element has focus, to allow for proper editing controls.
 * @return Whether keydown events should be ignored.
 */
export function shouldIgnoreKeyEvents() {
    const activeElement = getDeepActiveElement();
    assert(activeElement);
    return activeElement.isContentEditable ||
        (activeElement.tagName === 'INPUT' &&
            activeElement.type !== 'radio') ||
        activeElement.tagName === 'TEXTAREA';
}
