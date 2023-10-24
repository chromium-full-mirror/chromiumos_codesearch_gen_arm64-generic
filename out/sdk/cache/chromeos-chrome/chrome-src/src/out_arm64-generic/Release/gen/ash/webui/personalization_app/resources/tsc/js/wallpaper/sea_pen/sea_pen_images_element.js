// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the result set of SeaPen
 * wallpapers.
 */
import 'chrome://resources/cr_elements/cr_auto_img/cr_auto_img.js';
import '../../../css/common.css.js';
import { WithPersonalizationStore } from '../../personalization_store.js';
import { getZerosArray, isNonEmptyArray } from '../../utils.js';
import { getTemplate } from './sea_pen_images_element.html.js';
export class SeaPenImagesElement extends WithPersonalizationStore {
    static get is() {
        return 'sea-pen-images';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            templateId: String,
            query_: String,
            thumbnails_: Object,
            thumbnailsLoading_: Boolean,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('query_', state => state.wallpaper.seaPen.query);
        this.watch('thumbnails_', state => state.wallpaper.seaPen.thumbnails);
        this.watch('thumbnailsLoading_', state => state.wallpaper.seaPen.thumbnailsLoading);
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
        return !thumbnails || thumbnailsLoading;
    }
    shouldShowImageThumbnails_(thumbnailsLoading, thumbnails) {
        return !thumbnailsLoading && isNonEmptyArray(thumbnails);
    }
    getPlaceholders_(x) {
        return getZerosArray(x);
    }
}
customElements.define(SeaPenImagesElement.is, SeaPenImagesElement);
