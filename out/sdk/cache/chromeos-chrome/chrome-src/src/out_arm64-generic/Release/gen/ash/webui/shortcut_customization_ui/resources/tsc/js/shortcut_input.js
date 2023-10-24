// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './shortcut_input.html.js';
var AllowedModifierKeyCodes;
(function (AllowedModifierKeyCodes) {
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["SHIFT"] = 16] = "SHIFT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["ALT"] = 17] = "ALT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["CTRL"] = 18] = "CTRL";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["META_LEFT"] = 91] = "META_LEFT";
    AllowedModifierKeyCodes[AllowedModifierKeyCodes["META_RIGHT"] = 92] = "META_RIGHT";
})(AllowedModifierKeyCodes || (AllowedModifierKeyCodes = {}));
export const ModifierKeyCodes = [
    AllowedModifierKeyCodes.SHIFT,
    AllowedModifierKeyCodes.ALT,
    AllowedModifierKeyCodes.CTRL,
    AllowedModifierKeyCodes.META_LEFT,
    AllowedModifierKeyCodes.META_RIGHT,
];
/**
 * @fileoverview
 * 'shortcut-input' is the shortcut input element that consumes user inputs
 * and displays the shortcut.
 */
export class ShortcutInputElement extends PolymerElement {
    static get is() {
        return 'shortcut-input';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            shortcut: {
                type: String,
                value: '',
            },
            pendingShortcut: {
                type: String,
                value: '',
            },
            capturing: {
                type: Boolean,
                value: false,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('keydown', (e) => this.onKeyDown(e));
        this.addEventListener('keyup', (e) => this.onKeyUp(e));
        this.addEventListener('focus', () => this.startCapture());
        this.addEventListener('mouseup', () => this.startCapture());
        this.addEventListener('blur', () => this.endCapture());
    }
    startCapture() {
        if (this.capturing) {
            return;
        }
        this.pendingShortcut = '';
        this.shortcut = '';
        this.capturing = true;
    }
    endCapture() {
        if (!this.capturing) {
            return;
        }
        this.capturing = false;
        this.pendingShortcut = '';
        this.$.input.blur();
    }
    onKeyDown(e) {
        this.handleKey(e);
    }
    onKeyUp(e) {
        e.preventDefault();
        e.stopPropagation();
        this.endCapture();
    }
    computeText() {
        const shortcutString = this.capturing ? this.pendingShortcut : this.shortcut;
        return shortcutString.split('+').join(' + ');
    }
    handleKey(e) {
        // While capturing, we prevent all events from bubbling, to prevent
        // shortcuts from executing and interrupting the input capture.
        e.preventDefault();
        e.stopPropagation();
        if (!this.hasValidModifiers(e)) {
            this.pendingShortcut = '';
            return;
        }
        this.pendingShortcut = this.keystrokeToString(e);
        this.shortcut = this.pendingShortcut;
    }
    /**
     * Converts a keystroke event to string form.
     * Returns the keystroke as a string.
     */
    keystrokeToString(e) {
        const output = [];
        if (e.metaKey) {
            output.push('Search');
        }
        if (e.ctrlKey) {
            output.push('Ctrl');
        }
        if (e.altKey) {
            output.push('Alt');
        }
        if (e.shiftKey) {
            output.push('Shift');
        }
        // Only add non-modifier keys, otherwise we will double capture the modifier
        // keys.
        if (!this.isModifierKey(e)) {
            // TODO(jimmyxgong): update this to show only the DomKey.
            // Displays in the format: (DomKey)(V-Key)(DomCode), e.g.
            // ([)(219)(BracketLeft).
            output.push('(' + e.key + ')' +
                '(' + e.keyCode + ')' +
                '(' + e.code + ')');
        }
        return output.join('+');
    }
    /** Returns true if the event has valid modifiers. */
    hasValidModifiers(e) {
        // Although Shift is a modifier, it cannot be a standalone modifier for a
        // shortcut.
        return e.ctrlKey || e.altKey || e.metaKey;
    }
    isModifierKey(e) {
        return ModifierKeyCodes.includes(e.keyCode);
    }
}
customElements.define(ShortcutInputElement.is, ShortcutInputElement);
