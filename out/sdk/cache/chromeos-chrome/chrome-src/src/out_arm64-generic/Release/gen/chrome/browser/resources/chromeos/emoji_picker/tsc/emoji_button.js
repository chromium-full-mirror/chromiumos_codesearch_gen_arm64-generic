// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// TODO(b/264211466): This is only used by emoji_variants.html. The only props
// that are set seem to be emoji, variant, base, all-variants, tooltip  and
// disabled.  I can delete the others in a follow up, but not changing this file
// to make the revert simpler to review.
// https://source.chromium.org/chromium/chromium/src/+/main:chrome/browser/resources/chromeos/emoji_picker/emoji_variants.html
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './emoji_button.html.js';
import { createCustomEvent, EMOJI_IMG_BUTTON_CLICK, EMOJI_TEXT_BUTTON_CLICK, EMOJI_VARIANTS_SHOWN } from './events.js';
import { CategoryEnum } from './types.js';
export class EmojiButton extends PolymerElement {
    static get is() {
        return 'emoji-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            emoji: { type: String, readonly: true },
            variant: { type: Boolean, value: false, readonly: true },
            disabled: { type: Boolean, value: false, readonly: true },
            base: { type: String },
            allVariants: { type: Array, readonly: true },
            tooltip: { type: String, readonly: true },
        };
    }
    onClick() {
        if (this.disabled) {
            return;
        }
        this.dispatchEvent(createCustomEvent(EMOJI_TEXT_BUTTON_CLICK, {
            text: this.emoji,
            isVariant: this.variant,
            baseEmoji: this.base,
            allVariants: this.allVariants ? this.allVariants : [],
            name: this.tooltip,
            category: CategoryEnum.EMOJI,
        }));
    }
    getLabel() {
        // TODO(crbug/1227852): Just use emoji as the tooltip once ChromeVox can
        // announce them properly.
        return (navigator.languages.some(lang => lang.startsWith('en')) &&
            this.tooltip) ?
            this.tooltip :
            this.emoji;
    }
}
customElements.define(EmojiButton.is, EmojiButton);
