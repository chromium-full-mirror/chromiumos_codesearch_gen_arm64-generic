// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview A polymer component that displays the currently selected
 * wallpaper.
 */
import 'chrome://resources/ash/common/personalization/cros_button_style.css.js';
import 'chrome://resources/ash/common/personalization/personalization_shared_icons.html.js';
import 'chrome://resources/ash/common/personalization/wallpaper.css.js';
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import '../../common/icons.html.js';
import './google_photos_shared_album_dialog_element.js';
import './info_svg_element.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { WallpaperLayout, WallpaperType } from '../../personalization_app.mojom-webui.js';
import { isGooglePhotosSharedAlbumsEnabled, isPersonalizationJellyEnabled } from '../load_time_booleans.js';
import { Paths } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getCheckmarkIcon } from '../utils.js';
import { getLocalStorageAttribution, getWallpaperAriaLabel, getWallpaperLayoutEnum, getWallpaperSrc } from './utils.js';
import { getDailyRefreshState, selectGooglePhotosAlbum, setCurrentWallpaperLayout, setDailyRefreshCollectionId, updateDailyRefreshWallpaper } from './wallpaper_controller.js';
import { getWallpaperProvider } from './wallpaper_interface_provider.js';
import { getTemplate } from './wallpaper_selected_element.html.js';
export class WallpaperSelectedElement extends WithPersonalizationStore {
    static get is() {
        return 'wallpaper-selected';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * The current collection id to display.
             */
            collectionId: String,
            /**
             * Whether the google photos album is shared.
             */
            isGooglePhotosAlbumShared: {
                type: Boolean,
                value: false,
            },
            /**
             * The current Google Photos Album id to display.
             */
            googlePhotosAlbumId: String,
            /**
             * The current path of the page.
             */
            path: String,
            imagesByCollectionId_: Object,
            photosByAlbumId_: Object,
            attribution_: {
                type: Object,
                observer: 'onAttributionChanged_',
            },
            image_: Object,
            imageTitle_: {
                type: String,
                computed: 'computeImageTitle_(image_, attribution_, dailyRefreshState_)',
            },
            imageOtherAttribution_: {
                type: Array,
                computed: 'computeImageOtherAttribution_(image_, attribution_)',
            },
            dailyRefreshState_: Object,
            isLoading_: Boolean,
            hasError_: {
                type: Boolean,
                computed: 'computeHasError_(image_, isLoading_, error_)',
            },
            showDailyRefreshConfirmationDialog_: Boolean,
            showImage_: {
                type: Boolean,
                computed: 'computeShowImage_(image_, isLoading_)',
            },
            showLayoutOptions_: {
                type: Boolean,
                computed: 'computeShowLayoutOptions_(image_, path, googlePhotosAlbumId)',
            },
            showDescriptionButton_: {
                type: Boolean,
                computed: 'computeShowDescriptionButton_(image_,path,collectionId,imagesByCollectionId_)',
            },
            showDescriptionDialog_: Boolean,
            showDailyRefreshButton_: {
                type: Boolean,
                computed: 'computeShowDailyRefreshButton_(path,collectionId,googlePhotosAlbumId,photosByAlbumId_)',
            },
            showRefreshButton_: {
                type: Boolean,
                computed: 'computeShowRefreshButton_(path,collectionId,googlePhotosAlbumId,dailyRefreshState_)',
            },
            dailyRefreshIcon_: {
                type: String,
                computed: 'computeDailyRefreshIcon_(collectionId,googlePhotosAlbumId,dailyRefreshState_)',
            },
            ariaPressed_: {
                type: String,
                computed: 'computeAriaPressed_(collectionId,googlePhotosAlbumId,dailyRefreshState_)',
            },
            fillIcon_: {
                type: String,
                computed: 'computeFillIcon_(image_)',
            },
            centerIcon_: {
                type: String,
                computed: 'computeCenterIcon_(image_)',
            },
            error_: {
                type: String,
                value: null,
            },
            googlePhotosSharedAlbumsEnabled_: {
                type: Boolean,
                value() {
                    return isGooglePhotosSharedAlbumsEnabled();
                },
            },
        };
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('error_', state => state.error);
        this.watch('attribution_', state => state.wallpaper.attribution);
        this.watch('image_', state => state.wallpaper.currentSelected);
        this.watch('isLoading_', state => {
            const isWallpaperLoading = state.wallpaper.loading.setImage > 0 ||
                state.wallpaper.loading.selected.image ||
                state.wallpaper.loading.selected.attribution ||
                state.wallpaper.loading.refreshWallpaper;
            const isSeaPenLoading = state.wallpaper.seaPen.loading.setImage > 0 ||
                state.wallpaper.seaPen.loading.selected.image ||
                state.wallpaper.seaPen.loading.selected.attribution;
            return isWallpaperLoading || isSeaPenLoading;
        });
        this.watch('dailyRefreshState_', state => state.wallpaper.dailyRefresh);
        this.watch('imagesByCollectionId_', state => state.wallpaper.backdrop.images);
        this.watch('photosByAlbumId_', state => state.wallpaper.googlePhotos.photosByAlbumId);
        this.updateFromStore();
        getDailyRefreshState(getWallpaperProvider(), this.getStore());
    }
    computeShowImage_(image, loading) {
        // Specifically check === false to avoid undefined case while component is
        // initializing.
        return loading === false && !!image;
    }
    computeImageTitle_(image, attribution, dailyRefreshState) {
        if (!image || !attribution || image.key !== attribution.key) {
            return this.i18n('unknownImageAttribution');
        }
        if (image.type === WallpaperType.kDefault) {
            return this.i18n('defaultWallpaper');
        }
        const isDailyRefreshActive = !!dailyRefreshState;
        if (isNonEmptyArray(attribution.attribution)) {
            const title = attribution.attribution[0];
            return isDailyRefreshActive ? this.i18n('dailyRefresh') + ': ' + title :
                title;
        }
        // Fallback to cached attribution.
        const cachedAttribution = getLocalStorageAttribution(image.key);
        if (isNonEmptyArray(cachedAttribution)) {
            const title = cachedAttribution[0];
            return isDailyRefreshActive ? this.i18n('dailyRefresh') + ': ' + title :
                title;
        }
        return this.i18n('unknownImageAttribution');
    }
    computeImageOtherAttribution_(image, attribution) {
        if (!image || !attribution || image.key !== attribution.key) {
            return [];
        }
        if (isNonEmptyArray(attribution.attribution)) {
            return attribution.attribution.slice(1);
        }
        // Fallback to cached attribution.
        const cachedAttribution = getLocalStorageAttribution(image.key);
        if (isNonEmptyArray(cachedAttribution)) {
            return cachedAttribution.slice(1);
        }
        return [];
    }
    computeShowLayoutOptions_(image, path, googlePhotosAlbumId) {
        return !!image &&
            ((image.type === WallpaperType.kCustomized &&
                path === Paths.LOCAL_COLLECTION ||
                (image.type === WallpaperType.kOnceGooglePhotos &&
                    path === Paths.GOOGLE_PHOTOS_COLLECTION && !googlePhotosAlbumId)));
    }
    computeShowDescriptionButton_(image, path, collectionId, imagesByCollectionId) {
        // Only show the description dialog if title and content exist.
        if (!isPersonalizationJellyEnabled() || !image?.descriptionContent ||
            !image?.descriptionTitle) {
            return false;
        }
        switch (path) {
            // Hide button when viewing a different collection.
            case Paths.COLLECTION_IMAGES:
                if (!imagesByCollectionId[collectionId]) {
                    return false;
                }
                const imageIsInCollection = imagesByCollectionId[collectionId]?.find((wallpaper) => wallpaper.unitId.toString() === image.key);
                return !!imageIsInCollection;
            // Hide button when viewing Google Photos.
            case Paths.GOOGLE_PHOTOS_COLLECTION:
                return false;
            // Hide button when viewing local images.
            case Paths.LOCAL_COLLECTION:
                return false;
            default:
                return true;
        }
    }
    computeShowDailyRefreshButton_(path, collectionId, googlePhotosAlbumId, photosByAlbumId) {
        // Special collection where daily refresh is disabled.
        if (collectionId ===
            loadTimeData.getString('timeOfDayWallpaperCollectionId')) {
            return false;
        }
        switch (path) {
            case Paths.COLLECTION_IMAGES:
                return true;
            case Paths.GOOGLE_PHOTOS_COLLECTION:
                return !!googlePhotosAlbumId && !!photosByAlbumId &&
                    isNonEmptyArray(photosByAlbumId[googlePhotosAlbumId]);
            default:
                return false;
        }
    }
    computeShowRefreshButton_(path, collectionId, googlePhotosAlbumId, dailyRefreshState) {
        switch (path) {
            case Paths.COLLECTION_IMAGES:
                return !!collectionId &&
                    this.isDailyRefreshId_(collectionId, dailyRefreshState);
            case Paths.GOOGLE_PHOTOS_COLLECTION:
                return !!googlePhotosAlbumId &&
                    this.isDailyRefreshId_(googlePhotosAlbumId, dailyRefreshState);
            default:
                return false;
        }
    }
    getWallpaperSrc_(image) {
        return getWallpaperSrc(image);
    }
    getCenterAriaPressed_(image) {
        return (!!image && image.layout === WallpaperLayout.kCenter).toString();
    }
    getFillAriaPressed_(image) {
        return (!!image && image.layout === WallpaperLayout.kCenterCropped)
            .toString();
    }
    computeFillIcon_(image) {
        if (!!image && image.layout === WallpaperLayout.kCenterCropped) {
            return getCheckmarkIcon();
        }
        return 'personalization:layout_fill';
    }
    computeCenterIcon_(image) {
        if (!!image && image.layout === WallpaperLayout.kCenter) {
            return getCheckmarkIcon();
        }
        return 'personalization:layout_center';
    }
    onClickLayoutIcon_(event) {
        const eventTarget = event.currentTarget;
        const layout = getWallpaperLayoutEnum(eventTarget.dataset['layout']);
        setCurrentWallpaperLayout(layout, getWallpaperProvider(), this.getStore());
    }
    computeDailyRefreshIcon_(collectionId, googlePhotosAlbumId, dailyRefreshState) {
        if (this.isDailyRefreshId_(collectionId || googlePhotosAlbumId, dailyRefreshState)) {
            return getCheckmarkIcon();
        }
        return 'personalization:change-daily';
    }
    computeAriaPressed_(collectionId, googlePhotosAlbumId, dailyRefreshState) {
        if (this.isDailyRefreshId_(collectionId || googlePhotosAlbumId, dailyRefreshState)) {
            return 'true';
        }
        return 'false';
    }
    onClickDailyRefreshToggle_() {
        const dailyRefreshEnabled = this.isDailyRefreshId_(this.collectionId || this.googlePhotosAlbumId, this.dailyRefreshState_);
        if (dailyRefreshEnabled) {
            this.disableDailyRefresh_();
        }
        else {
            this.enableDailyRefresh_();
        }
    }
    /**
     * Determine the current collection view belongs to the collection that is
     * enabled with daily refresh. If true, highlight the toggle and display the
     * refresh button
     */
    isDailyRefreshId_(id, dailyRefreshState) {
        return dailyRefreshState ? id === dailyRefreshState.id : false;
    }
    disableDailyRefresh_() {
        if (this.googlePhotosAlbumId) {
            assert(!this.collectionId);
            selectGooglePhotosAlbum(
            /*albumId=*/ '', getWallpaperProvider(), this.getStore());
        }
        else {
            setDailyRefreshCollectionId(
            /*collectionId=*/ '', getWallpaperProvider(), this.getStore());
        }
    }
    enableDailyRefresh_() {
        if (this.googlePhotosAlbumId) {
            assert(!this.collectionId);
            if (this.googlePhotosSharedAlbumsEnabled_ &&
                this.isGooglePhotosAlbumShared) {
                this.showDailyRefreshConfirmationDialog_ = true;
            }
            else {
                this.enableGooglePhotosAlbumDailyRefresh_();
            }
        }
        else {
            setDailyRefreshCollectionId(this.collectionId, getWallpaperProvider(), this.getStore());
        }
    }
    enableGooglePhotosAlbumDailyRefresh_() {
        selectGooglePhotosAlbum(this.googlePhotosAlbumId, getWallpaperProvider(), this.getStore());
    }
    onClickShowDescription_() {
        assert(isPersonalizationJellyEnabled(), 'description dialog only available if personalization jelly enabled');
        assert(this.showDescriptionButton_, 'description dialog can only be opened if button is visible');
        this.showDescriptionDialog_ = true;
    }
    closeDescriptionDialog_() {
        this.showDescriptionDialog_ = false;
    }
    closeDailyRefreshConfirmationDialog_() {
        this.showDailyRefreshConfirmationDialog_ = false;
        this.shadowRoot.getElementById('dailyRefresh')?.focus();
    }
    onAcceptDailyRefreshDialog_() {
        this.enableGooglePhotosAlbumDailyRefresh_();
        this.closeDailyRefreshConfirmationDialog_();
    }
    onClickUpdateDailyRefreshWallpaper_() {
        updateDailyRefreshWallpaper(getWallpaperProvider(), this.getStore());
    }
    /**
     * Determine whether there is an error in showing selected image. An error
     * happens when there is no previously loaded image and either no new image
     * is being loaded or there is an error from upstream.
     */
    computeHasError_(image, loading, error) {
        return (!loading || !!error) && !image;
    }
    getAriaLabel_(image, attribution, dailyRefreshState) {
        return getWallpaperAriaLabel(image, attribution, dailyRefreshState);
    }
    /**
     * Returns hidden state of loading placeholder.
     */
    showPlaceholders_(loading, showImage) {
        return loading || !showImage;
    }
    /**
     * Cache the attribution in local storage when attribution is updated
     * Populate the attribution map in local storage when attribution is updated
     */
    async onAttributionChanged_(newAttribution, oldAttribution) {
        const attributionMap = JSON.parse((window.localStorage['attribution'] || '{}'));
        const attributeChanged = !!newAttribution && !!oldAttribution &&
            newAttribution.key !== oldAttribution.key;
        if (attributionMap.size == 0 || attributeChanged) {
            if (newAttribution) {
                attributionMap[newAttribution.key] = newAttribution.attribution;
            }
            if (oldAttribution) {
                delete attributionMap[oldAttribution.key];
            }
            window.localStorage['attribution'] = JSON.stringify(attributionMap);
        }
    }
    /**
     * Return a container class depending on loading state.
     */
    getContainerClass_(isLoading, showImage) {
        return this.showPlaceholders_(isLoading, showImage) ? 'loading' : '';
    }
}
customElements.define(WallpaperSelectedElement.is, WallpaperSelectedElement);
