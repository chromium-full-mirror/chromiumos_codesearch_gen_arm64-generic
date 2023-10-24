// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { VISUAL_CONTENT_WIDTH } from './constants.js';
import { getTemplate } from './emoji_image.html.js';
import { createCustomEvent, EMOJI_CLEAR_RECENTS_CLICK } from './events.js';
import { CategoryEnum } from './types.js';
export class EmojiImageComponent extends PolymerElement {
    constructor() {
        super(...arguments);
        this.loading = true;
    }
    static get is() {
        return 'emoji-image';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            index: Number,
            item: Object,
            showTooltip: Object,
            emojiClick: Object,
            clearable: { type: Boolean, value: false },
            showClearButton: { type: Boolean, value: false },
        };
    }
    handleMouseEnter(event) {
        this.showTooltip(event);
    }
    handleFocus(event) {
        this.showTooltip(event);
    }
    handleClick(event) {
        this.emojiClick(event);
    }
    findSiblingEmojiImageByIndex(index) {
        // The shadow root of emoji-group.
        const parentShadowRoot = this.shadowRoot.host.getRootNode();
        for (const emojiImage of parentShadowRoot.querySelectorAll('emoji-image')) {
            if (emojiImage.index === index) {
                return emojiImage;
            }
        }
        return null;
    }
    handleKeydown(event) {
        // The img element where the keyboard event is triggered.
        const target = event.target;
        // Triggers click event to insert the current GIF image.
        if (event.code === 'Enter') {
            event.stopPropagation();
            target.click();
            return;
        }
        // Moves focus to the correct sibling.
        if (event.code === 'Tab') {
            const siblingIndex = this.index + (event.shiftKey ? -1 : +1);
            const sibling = this.findSiblingEmojiImageByIndex(siblingIndex);
            if (sibling !== null) {
                event.preventDefault();
                event.stopPropagation();
                sibling.focus();
                return;
            }
        }
    }
    focus() {
        this.shadowRoot?.querySelector('img')?.focus();
    }
    handleLoad() {
        this.loading = false;
    }
    handleContextMenu(evt) {
        if (this.clearable) {
            evt.preventDefault();
            evt.stopPropagation();
            this.showClearButton = true;
        }
    }
    handleMouseLeave() {
        if (this.showClearButton) {
            this.showClearButton = false;
        }
    }
    handleClear(evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.showClearButton = false;
        this.dispatchEvent(createCustomEvent(EMOJI_CLEAR_RECENTS_CLICK, {
            category: CategoryEnum.GIF,
            item: this.item,
        }));
    }
    getImageClassName(loading) {
        return loading ? 'emoji-image loading' : 'emoji-image';
    }
    /**
     * Returns visual content preview url.
     */
    getUrl(item) {
        return item.base.visualContent?.url.preview.url;
    }
    getStyles(item) {
        const { visualContent } = item.base;
        if (visualContent === undefined) {
            return;
        }
        const { height, width } = visualContent.previewSize;
        const visualContentHeight = height / width * VISUAL_CONTENT_WIDTH;
        return `--visual-content-height: ${visualContentHeight}px`;
    }
}
customElements.define(EmojiImageComponent.is, EmojiImageComponent);
