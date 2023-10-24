// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element that displays a single grid item.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '../../css/common.css.js';
import './info_svg_element.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { getCheckmarkIcon, isSelectionEvent } from '../utils.js';
import { getLoadingPlaceholderAnimationDelay } from './utils.js';
import { getTemplate } from './wallpaper_grid_item_element.html.js';
function getDataIndex(event) {
    const dataIndex = event.currentTarget.dataset['index'];
    assert(typeof dataIndex === 'string', 'data-index property required');
    const index = parseInt(dataIndex, 10);
    assert(!isNaN(index), `could not parseInt on ${dataIndex}`);
    return index;
}
function shouldShowPlaceholder(imageStatus) {
    return imageStatus.length === 0 ||
        (imageStatus.includes("loading" /* ImageStatus.LOADING */) &&
            !imageStatus.includes("error" /* ImageStatus.ERROR */));
}
const wallpaperGridItemSelectedEventName = 'wallpaper-grid-item-selected';
export class WallpaperGridItemSelectedEvent extends CustomEvent {
    constructor() {
        super(wallpaperGridItemSelectedEventName, {
            bubbles: true,
            composed: true,
            detail: null,
        });
    }
}
export class WallpaperGridItemElement extends PolymerElement {
    static get is() {
        return 'wallpaper-grid-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            src: {
                type: Object,
                observer: 'onImageSrcChanged_',
                value: null,
            },
            index: Number,
            primaryText: String,
            secondaryText: String,
            infoText: String,
            isGooglePhotos: {
                type: Boolean,
                value: false,
            },
            selected: {
                type: Boolean,
                observer: 'onSelectedChanged_',
            },
            disabled: {
                type: Boolean,
                value: false,
                observer: 'onDisabledChanged_',
            },
            collage: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
                observer: 'onCollageChanged_',
            },
            imageStatus_: {
                type: Array,
                value() {
                    return [];
                },
                observer: 'onImageStatusChanged_',
            },
            checkmarkIcon_: {
                type: String,
                value() {
                    return getCheckmarkIcon();
                },
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('click', this.onUserSelection_);
        this.addEventListener('keydown', this.onUserSelection_);
    }
    onUserSelection_(event) {
        // Ignore extraneous events and let them continue.
        // Also ignore click and keydown events if this grid item is disabled.
        // These events will continue to propagate up in case someone else is
        // interested that this item was interacted with.
        if (!isSelectionEvent(event) || this.disabled) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.dispatchEvent(new WallpaperGridItemSelectedEvent());
    }
    // Invoked on changes to |imageSrc|.
    onImageSrcChanged_(src, old) {
        // Set loading status if src has just changed while we wait for new images.
        const oldSrcArray = this.getSrcArray_(old, this.collage);
        this.imageStatus_ = this.getSrcArray_(src, this.collage).map(({ url }, i) => {
            if (oldSrcArray.length > i && oldSrcArray[i].url === url) {
                // If the underlying url has not changed, keep the prior image status.
                // If we have a new |Url| object but the underlying url is the same, the
                // img onload event will not fire and reset the status to ready.
                return this.imageStatus_[i];
            }
            return "loading" /* ImageStatus.LOADING */;
        });
    }
    onSelectedChanged_(selected) {
        if (typeof selected === 'boolean') {
            this.setAttribute('aria-selected', selected.toString());
        }
        else {
            this.removeAttribute('aria-selected');
        }
    }
    onDisabledChanged_(disabled) {
        this.setAttribute('aria-disabled', disabled.toString());
    }
    onCollageChanged_(collage) {
        if (collage) {
            const imageStatus = this.getSrcArray_(this.src, collage)
                .map((_, index) => this.imageStatus_.length > index ?
                this.imageStatus_[index] :
                "loading" /* ImageStatus.LOADING */);
            this.imageStatus_ = imageStatus;
            return;
        }
        this.imageStatus_.length =
            Math.min(2 /* MaxImageCount.DEFAULT */, this.imageStatus_.length);
    }
    onImageStatusChanged_(imageStatus) {
        if (shouldShowPlaceholder(imageStatus)) {
            this.setAttribute('placeholder', '');
        }
        else {
            this.removeAttribute('placeholder');
        }
    }
    onImgError_(event) {
        const targetIndex = getDataIndex(event);
        this.imageStatus_ = this.imageStatus_.map((status, index) => index === targetIndex ? "error" /* ImageStatus.ERROR */ : status);
    }
    onImgLoad_(event) {
        const targetIndex = getDataIndex(event);
        this.imageStatus_ = this.imageStatus_.map((status, index) => index === targetIndex ? "ready" /* ImageStatus.READY */ : status);
    }
    getSrcArray_(src, collage) {
        if (!src) {
            return [];
        }
        if (Array.isArray(src)) {
            const max = collage ? 4 /* MaxImageCount.COLLAGE */ : 2 /* MaxImageCount.DEFAULT */;
            return src.slice(0, max);
        }
        return [src];
    }
    isImageHidden_(imageStatus) {
        // |imageStatus| is usually a non-empty array when this function is called.
        // But there are weird cases where dom-repeat will still call this function
        // when |src| goes from an array back to undefined.
        assert(Array.isArray(imageStatus), 'image status must be an array');
        // Do not show the image while loading because it has an ugly white frame.
        // Do not show the image on error either because it has an ugly broken red
        // icon symbol.
        // Wait until all images are ready to show any of them.
        return imageStatus.length === 0 ||
            imageStatus.some(status => status !== "ready" /* ImageStatus.READY */);
    }
    /** Returns the delay to use for the grid item's placeholder animation. */
    getItemPlaceholderAnimationDelay_(index) {
        return getLoadingPlaceholderAnimationDelay(index);
    }
    /** Whether the primary text is currently visible. */
    isPrimaryTextVisible_() {
        return !!this.primaryText && !!this.primaryText.length;
    }
    /** Whether the secondary text is currently visible. */
    isSecondaryTextVisible_() {
        return !!this.secondaryText && !!this.secondaryText.length;
    }
    /** Whether any text is currently visible. */
    isTextVisible_() {
        if (shouldShowPlaceholder(this.imageStatus_)) {
            // Hide text while placeholder is displayed.
            return false;
        }
        return this.isSecondaryTextVisible_() || this.isPrimaryTextVisible_();
    }
    shouldShowInfoText_() {
        return isPersonalizationJellyEnabled() &&
            typeof this.infoText === 'string' && this.infoText.length > 0 &&
            !shouldShowPlaceholder(this.imageStatus_);
    }
}
customElements.define(WallpaperGridItemElement.is, WallpaperGridItemElement);
