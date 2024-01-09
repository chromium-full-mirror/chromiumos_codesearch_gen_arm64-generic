// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the result set of SeaPen
 * wallpapers.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import 'chrome://resources/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/cr_elements/icons.html.js';
import '../../../css/common.css.js';
import './sparkle_placeholder_element.js';
import '../../../css/sea_pen.css.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { selectSeaPenWallpaper } from './sea_pen_controller.js';
import { getTemplate } from './sea_pen_images_element.html.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { WithSeaPenStore } from './sea_pen_store.js';
export class SeaPenImagesElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-images';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: String,
            thumbnails_: Object,
            thumbnailsLoading_: Boolean,
            // The pending selected image. Not persisted in store as it is only
            // temporarily available in this element.
            pendingSelected_: Object,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('thumbnails_', state => state.thumbnails);
        this.watch('thumbnailsLoading_', state => state.loading.thumbnails);
        this.updateFromStore();
    }
    getThumbnailPlaceholderClass_(thumbnailsLoading) {
        // TODO(b/299108994): change placeholder to other loading class and add
        // loading effect style.
        return thumbnailsLoading ? 'thumbnail-placeholder placeholder' :
            'thumbnail-placeholder';
    }
    shouldShowThumbnailPlaceholders_(thumbnailsLoading, thumbnails) {
        // Use placeholders before and during loading thumbnails.
        return !thumbnails && !thumbnailsLoading;
    }
    shouldShowImageThumbnails_(thumbnailsLoading, thumbnails) {
        return !thumbnailsLoading && isNonEmptyArray(thumbnails);
    }
    getPlaceholders_(x) {
        return new Array(x).fill(0);
    }
    onThumbnailSelected_(event) {
        this.pendingSelected_ = event.model.item;
        selectSeaPenWallpaper(event.model.item, getSeaPenProvider(), this.getStore());
    }
    getAriaIndex_(i) {
        return i + 1;
    }
    isThumbnailSelected_(thumbnail, pendingSelected) {
        return thumbnail === pendingSelected;
    }
    onClickThumbsUp_() {
        // TODO(b/313667113): Implement thumbs up.
    }
    onClickThumbsDown_() {
        // TODO(b/313667113): Implement thumbs down.
    }
}
customElements.define(SeaPenImagesElement.is, SeaPenImagesElement);
