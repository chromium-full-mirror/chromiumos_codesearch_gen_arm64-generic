// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the SeaPen recently used
 * wallpapers.
 */
import 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import '../../../css/common.css.js';
import '../../../css/wallpaper.css.js';
import '../../../css/sea_pen.css.js';
import { isImageDataUrl, isNonEmptyArray, isNonEmptyFilePath } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { AnchorAlignment } from 'chrome://resources/cr_elements/cr_action_menu/cr_action_menu.js';
import { assert } from 'chrome://resources/js/assert.js';
import { deleteRecentSeaPenImage, fetchRecentSeaPenData, selectRecentSeaPenImage } from './sea_pen_controller.js';
import { getSeaPenProvider } from './sea_pen_interface_provider.js';
import { getTemplate } from './sea_pen_recent_wallpapers_element.html.js';
import { WithSeaPenStore } from './sea_pen_store.js';
export class SeaPenRecentWallpapersElement extends WithSeaPenStore {
    static get is() {
        return 'sea-pen-recent-wallpapers';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            recentImages_: {
                type: Array,
                observer: 'onRecentImagesChanged_',
            },
            /** Mapping of recent Sea Pen image path to its data. */
            recentImageData_: Object,
            /**
               Mapping of recent Sea Pen image path to data loading status (boolean).
             */
            recentImageDataLoading_: Object,
            recentImagesToDisplay_: {
                type: Array,
                value: [],
            },
            currentShowWallpaperInfoDialog_: {
                type: Number,
                value: null,
            },
            currentSelected_: Object,
            pendingSelected_: Object,
        };
    }
    static get observers() {
        return ['onRecentImageLoaded_(recentImageData_, recentImageDataLoading_)'];
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('recentImages_', state => state.recentImages);
        this.watch('recentImageData_', state => state.recentImageData);
        this.watch('recentImageDataLoading_', state => state.loading.recentImageData);
        this.watch('currentSelected_', state => state.currentSelected);
        this.watch('pendingSelected_', state => state.pendingSelected);
        this.updateFromStore();
        // TODO(b/304576846): also refetch sea pen data when adding and deleting
        // image.
        fetchRecentSeaPenData(getSeaPenProvider(), this.getStore());
    }
    /**
     * Sets `recentImagesToDisplay` when a new set of recent Sea Pen images
     * loads.
     */
    onRecentImagesChanged_(recentImages) {
        this.recentImagesToDisplay_ = (recentImages || []).filter(image => {
            if (this.recentImageDataLoading_[image.path] === false) {
                const data = this.recentImageData_[image.path];
                return data && data.queryInfo && data.url;
            }
            return true;
        });
    }
    /**
     * Called each time a new recent Sea Pen image data is loaded. Removes images
     * from the list of displayed images if it has failed to load.
     */
    onRecentImageLoaded_(recentImageData, recentImageDataLoading) {
        if (!recentImageData || !recentImageDataLoading) {
            return;
        }
        // Iterate backwards in case we need to splice to remove from
        // `recentImagesToDisplay` while iterating.
        for (let i = this.recentImagesToDisplay_.length - 1; i >= 0; i--) {
            const image = this.recentImagesToDisplay_[i];
            const failed = image && recentImageDataLoading[image.path] === false &&
                !isImageDataUrl(recentImageData[image.path].url);
            if (failed) {
                this.recentImagesToDisplay_.splice(i, 1);
            }
        }
    }
    isRecentImageLoading_(recentImage, recentImageDataLoading) {
        if (!recentImage || !recentImageDataLoading) {
            return true;
        }
        // If key is not present, then loading has not yet started. Still show a
        // loading tile in this case.
        return !recentImageDataLoading.hasOwnProperty(recentImage.path) ||
            recentImageDataLoading[recentImage.path] === true;
    }
    getRecentImageUrl_(recentImage, recentImageData, recentImageDataLoading) {
        if (!recentImage ||
            this.isRecentImageLoading_(recentImage, recentImageDataLoading)) {
            return null;
        }
        const data = recentImageData[recentImage.path];
        if (!data || !isImageDataUrl(data.url)) {
            return { url: '' };
        }
        return data.url;
    }
    getWallpaperInfoMessage_(recentImage, recentImageData, recentImageDataLoading) {
        if (!recentImage ||
            this.isRecentImageLoading_(recentImage, recentImageDataLoading)) {
            return null;
        }
        return recentImageData[recentImage.path].queryInfo;
    }
    getAriaIndex_(i) {
        return i + 1;
    }
    shouldShowRecentlyUsedWallpapers_(recentImages) {
        return isNonEmptyArray(recentImages);
    }
    isRecentImageSelected_(image, currentSelected, pendingSelected) {
        if (!isNonEmptyFilePath(image)) {
            return false;
        }
        return (isNonEmptyFilePath(pendingSelected) &&
            image.path === pendingSelected.path) ||
            (!pendingSelected && image.path === currentSelected);
    }
    onRecentImageSelected_(event) {
        assert(isNonEmptyFilePath(event.model.image), 'recent Sea Pen image is a file path');
        selectRecentSeaPenImage(event.model.image, getSeaPenProvider(), this.getStore());
    }
    onClickMenuIcon_(e) {
        const targetElement = e.currentTarget;
        const menuIconContainerRect = targetElement.getBoundingClientRect();
        const config = {
            top: menuIconContainerRect.top -
                8, // 8px is the padding of .menu-icon-container
            left: menuIconContainerRect.left - menuIconContainerRect.width / 2,
            height: menuIconContainerRect.height,
            width: menuIconContainerRect.width,
            anchorAlignmentX: AnchorAlignment.AFTER_END,
            anchorAlignmentY: AnchorAlignment.BEFORE_START,
        };
        const id = targetElement.dataset['id'];
        if (id !== undefined) {
            const index = parseInt(id, 10);
            const menuElement = this.shadowRoot.querySelectorAll('cr-action-menu')[index];
            menuElement.showAtPosition(config);
        }
    }
    onClickMoreLikeThis_() {
        // TODO(b/304581483): make "More like this" button functional.
    }
    onClickDeleteWallpaper_(event) {
        // TODO (b/315069374): confirm if currently set Sea Pen wallpaper can be
        // removed.
        assert(isNonEmptyFilePath(event.model.image), 'selected Sea Pen image is a file path');
        deleteRecentSeaPenImage(event.model.image, getSeaPenProvider(), this.getStore());
        this.closeAllActionMenus_();
    }
    onClickWallpaperInfo_(e) {
        const eventTarget = e.currentTarget;
        const id = eventTarget.dataset['id'];
        if (id !== undefined) {
            this.currentShowWallpaperInfoDialog_ = parseInt(id, 10);
        }
        this.closeAllActionMenus_();
    }
    closeAllActionMenus_() {
        const menuElements = this.shadowRoot.querySelectorAll('cr-action-menu');
        menuElements.forEach(menuElement => {
            menuElement.close();
        });
    }
    shouldShowWallpaperInfoDialog_(i, currentShowWallpaperInfoDialog) {
        return currentShowWallpaperInfoDialog === i;
    }
    onCloseDialog_() {
        this.currentShowWallpaperInfoDialog_ = null;
    }
}
customElements.define(SeaPenRecentWallpapersElement.is, SeaPenRecentWallpapersElement);
