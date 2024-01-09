// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import { KeyInputState } from 'chrome://resources/ash/common/shortcut_input_ui/shortcut_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { mojoString16ToString } from 'chrome://resources/js/mojo_type_util.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { AcceleratorLookupManager } from './accelerator_lookup_manager.js';
import { TextAcceleratorPartType } from './shortcut_types.js';
import { isCustomizationAllowed } from './shortcut_utils.js';
import { getTemplate } from './text_accelerator.html.js';
/**
 * @fileoverview
 * 'text-accelerator' is a wrapper component for the text of shortcuts that
 * have a kText LayoutStyle. It is responsible for displaying arbitrary text
 * that is passed into it, as well as styling key elements in the text.
 */
export class TextAcceleratorElement extends PolymerElement {
    constructor() {
        super(...arguments);
        this.lookupManager = AcceleratorLookupManager.getInstance();
    }
    static get is() {
        return 'text-accelerator';
    }
    static get properties() {
        return {
            parts: {
                type: Array,
                observer: TextAcceleratorElement.prototype.parseAndDisplayTextParts,
            },
            isOnlyText: {
                type: Boolean,
                value: false,
                computed: 'areAllPartsTextParts(parts)',
                reflectToAttribute: true,
            },
            // If this property is true, the spacing between keys will be narrower
            // than usual.
            narrow: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            // If this property is true, keys will be styled with the bolder highlight
            // background.
            highlighted: {
                type: Boolean,
                value: false,
                // Update the parts when the highlighted status changes so their style
                // can be updated.
                observer: TextAcceleratorElement.prototype.parseAndDisplayTextParts,
            },
            action: {
                type: Number,
                value: 0,
            },
            source: {
                type: Number,
                value: 0,
            },
        };
    }
    parseAndDisplayTextParts() {
        const container = this.shadowRoot.querySelector('.parts-container');
        assert(window.trustedTypes);
        container.innerHTML = window.trustedTypes.emptyHTML;
        const textParts = [];
        for (const part of this.parts) {
            const text = mojoString16ToString(part.text);
            if (part.type === TextAcceleratorPartType.kPlainText) {
                textParts.push(this.createPlainTextPart(text));
            }
            else if (part.type === TextAcceleratorPartType.kDelimiter) {
                textParts.push(this.createDelimiterIconPart());
            }
            else {
                textParts.push(this.createInputKeyPart(text, part.type));
            }
        }
        container.append(...textParts);
    }
    createDelimiterIconPart() {
        const icon = document.createElement('iron-icon');
        icon.classList.add('spacing');
        icon.icon = this.getIconForDelimiter();
        icon.id = 'delimiter-icon';
        return icon;
    }
    createInputKeyPart(keyText, type) {
        const keyState = type === TextAcceleratorPartType.kModifier ?
            KeyInputState.MODIFIER_SELECTED :
            KeyInputState.ALPHANUMERIC_SELECTED;
        const key = document.createElement('shortcut-input-key');
        key.key = keyText;
        key.keyState = keyState;
        key.narrow = this.narrow;
        key.highlighted = this.highlighted;
        key.hasLauncherButton = this.lookupManager.getHasLauncherButton();
        return key;
    }
    getIconForDelimiter() {
        // Update if/when more delimiters are added.
        return 'shortcut-customization-keys:plus';
    }
    createPlainTextPart(text) {
        const span = document.createElement('span');
        span.classList.add('spacing');
        span.innerText = text;
        return span;
    }
    shouldShowLockIcon() {
        // Show lock icon in each row if customization is enabled and its
        // category is not locked.
        if (!isCustomizationAllowed()) {
            return false;
        }
        return !this.lookupManager.isCategoryLocked(this.lookupManager.getAcceleratorCategory(this.source, this.action));
    }
    areAllPartsTextParts() {
        return this.parts.every(part => part.type === TextAcceleratorPartType.kPlainText);
    }
    static get template() {
        return getTemplate();
    }
}
customElements.define(TextAcceleratorElement.is, TextAcceleratorElement);
