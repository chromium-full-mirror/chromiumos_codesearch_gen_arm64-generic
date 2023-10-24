// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './icons.html.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './emoji_category_button.html.js';
import { CATEGORY_BUTTON_CLICK, createCustomEvent } from './events.js';
import { CategoryEnum } from './types.js';
const ARIA_LABELS_WITH_GIF_SUPPORT = {
    [CategoryEnum.EMOJI]: 'Emoji category',
    [CategoryEnum.SYMBOL]: 'Symbol category',
    [CategoryEnum.EMOTICON]: 'Emoticon category',
    [CategoryEnum.GIF]: 'GIF category',
};
export class EmojiCategoryButton extends PolymerElement {
    static get is() {
        return 'emoji-category-button';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            name: { type: CategoryEnum, readonly: true },
            icon: { type: String, readonly: true },
            active: { type: Boolean, value: false },
            searchActive: { type: Boolean, value: false },
            gifSupport: { type: Boolean, value: false },
        };
    }
    handleClick() {
        this.dispatchEvent(createCustomEvent(CATEGORY_BUTTON_CLICK, { categoryName: this.name }));
    }
    calculateClassName(active, searchActive) {
        // Show un-selected category button if user is searching.
        if (searchActive) {
            return '';
        }
        return active ? 'category-button-active' : '';
    }
    getAriaLabel(name, gifSupport) {
        // TODO(b/281609806): Remove this condition once GIF support is fully
        // launched.
        if (!gifSupport) {
            return name;
        }
        return ARIA_LABELS_WITH_GIF_SUPPORT[name] ?? name;
    }
    getAriaPressedState(active) {
        return active ? 'true' : 'false';
    }
}
customElements.define(EmojiCategoryButton.is, EmojiCategoryButton);
