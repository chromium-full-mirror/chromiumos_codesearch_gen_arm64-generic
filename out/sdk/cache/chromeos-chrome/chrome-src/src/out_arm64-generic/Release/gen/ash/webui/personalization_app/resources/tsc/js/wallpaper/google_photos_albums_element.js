// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element that displays Google Photos albums.
 */
import 'chrome://resources/ash/common/personalization/common.css.js';
import 'chrome://resources/ash/common/personalization/wallpaper.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/polymer/v3_0/iron-scroll-threshold/iron-scroll-threshold.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assert } from 'chrome://resources/js/assert.js';
import { afterNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { isGooglePhotosSharedAlbumsEnabled } from '../load_time_booleans.js';
import { dismissErrorAction, setErrorAction } from '../personalization_actions.js';
import { PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getCountText, isRecentHighlightsAlbum } from '../utils.js';
import { getTemplate } from './google_photos_albums_element.html.js';
import { getLoadingPlaceholders } from './utils.js';
import { fetchGooglePhotosAlbums, fetchGooglePhotosSharedAlbums } from './wallpaper_controller.js';
import { getWallpaperProvider } from './wallpaper_interface_provider.js';
const ERROR_ID = 'GooglePhotosAlbums';
const PLACEHOLDER_ID = 'placeholder';
/** Returns placeholders to show while Google Photos albums are loading. */
function getPlaceholders() {
    return getLoadingPlaceholders(() => {
        return {
            id: PLACEHOLDER_ID,
            title: '',
            photoCount: 0,
            isShared: false,
            preview: { url: '' },
            timestamp: { internalValue: BigInt(0) },
        };
    });
}
export class GooglePhotosAlbumsElement extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        /** The singleton wallpaper provider interface. */
        this.wallpaperProvider_ = getWallpaperProvider();
    }
    static get is() {
        return 'google-photos-albums';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            hidden: {
                type: Boolean,
                value: true,
                reflectToAttribute: true,
                observer: 'onHiddenChanged_',
            },
            albums_: Array,
            albumsForDisplay_: {
                type: Array,
                value: getPlaceholders,
            },
            albumsLoading_: Boolean,
            albumsResumeToken_: String,
            albumsShared_: Array,
            albumsSharedLoading_: Boolean,
            albumsSharedResumeToken_: String,
            error_: {
                type: Object,
                value: null,
            },
            isSharedAlbumsEnabled_: {
                type: Boolean,
                value() {
                    return isGooglePhotosSharedAlbumsEnabled();
                },
            },
        };
    }
    static get observers() {
        return [
            'onAlbumsChanged_(albums_, albumsShared_)',
            'onAlbumsResumeTokenChanged_(albumsResumeToken_, albumsSharedResumeToken_)',
        ];
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('albums_', state => state.wallpaper.googlePhotos.albums);
        this.watch('albumsLoading_', state => state.wallpaper.loading.googlePhotos.albums);
        this.watch('albumsResumeToken_', state => state.wallpaper.googlePhotos.resumeTokens.albums);
        if (this.isSharedAlbumsEnabled_) {
            this.watch('albumsShared_', state => state.wallpaper.googlePhotos.albumsShared);
            this.watch('albumsSharedLoading_', state => state.wallpaper.loading.googlePhotos.albumsShared);
            this.watch('albumsSharedResumeToken_', state => state.wallpaper.googlePhotos.resumeTokens.albumsShared);
        }
        this.watch('error_', state => state.error);
        this.updateFromStore();
    }
    /** Invoked on selection of an album. */
    onAlbumSelected_(e) {
        assert(e.model.album);
        if (!this.isAlbumPlaceholder_(e.model.album)) {
            PersonalizationRouterElement.instance().selectGooglePhotosAlbum(e.model.album);
        }
    }
    mergeAlbumsByTimestamp_(owned, shared) {
        if (!isNonEmptyArray(owned)) {
            owned = [];
        }
        if (!isNonEmptyArray(shared)) {
            shared = [];
        }
        // If the Recent Highlights album exists, it will be the first element in
        // the owned albums, i.e. owned[0].
        let recentHighlights;
        if (isNonEmptyArray(owned) && isRecentHighlightsAlbum(owned[0])) {
            recentHighlights = owned.shift();
        }
        const albums = (owned).concat(shared).sort((a, b) => Number(b.timestamp.internalValue) -
            Number(a.timestamp.internalValue));
        return recentHighlights ? [recentHighlights].concat(albums) : albums;
    }
    /** Invoked on changes to |albums_| or |albumsShared_|. */
    onAlbumsChanged_(albums, albumsShared) {
        // If the list of albums fails to load, display an error to the user that
        // allows them to make another attempt.
        // When shared albums flag is enabled, also need to make sure |albumsShared|
        // fails to load.
        if (albums === null &&
            !(this.isSharedAlbumsEnabled_ && albumsShared !== null)) {
            if (!this.hidden) {
                this.dispatch(setErrorAction({
                    id: ERROR_ID,
                    message: this.i18n('googlePhotosError'),
                    dismiss: {
                        message: this.i18n('googlePhotosTryAgain'),
                        callback: (fromUser) => {
                            if (fromUser) {
                                // Post the reattempt instead of performing it immediately to
                                // avoid updating the personalization store from the same
                                // sequence that generated this event.
                                setTimeout(() => {
                                    fetchGooglePhotosAlbums(this.wallpaperProvider_, this.getStore());
                                    if (this.isSharedAlbumsEnabled_) {
                                        fetchGooglePhotosSharedAlbums(this.wallpaperProvider_, this.getStore());
                                    }
                                });
                            }
                        },
                    },
                }));
            }
            return;
        }
        // NOTE: |albumsForDisplay_| is updated in place to avoid resetting the
        // scroll position of the grid which would otherwise occur during
        // reassignment but it will be deeply equal to |newList| after updating.
        this.updateList(
        /*propertyPath=*/ 'albumsForDisplay_', 
        /*identityGetter=*/ (album) => album.id, 
        /*newList=*/ this.mergeAlbumsByTimestamp_(albums, albumsShared), 
        /*identityBasedUpdate=*/ true);
    }
    /**
     * Invoked on changes to |albumsResumeToken_| or |albumsSharedResumeToken_|.
     */
    onAlbumsResumeTokenChanged_(albumsResumeToken, albumsSharedResumeToken) {
        if (albumsResumeToken || albumsSharedResumeToken) {
            this.$.gridScrollThreshold.clearTriggers();
        }
    }
    /** Invoked on grid scroll threshold reached. */
    onGridScrollThresholdReached_() {
        // Ignore this event if fired during initialization.
        if (!this.$.gridScrollThreshold.scrollHeight) {
            this.$.gridScrollThreshold.clearTriggers();
            return;
        }
        // Ignore this event if albums are already being loading or if there is no
        // resume token (indicating there are no additional albums to load).
        const isLoading = this.albumsLoading_ === true || this.albumsSharedLoading_ === true;
        const albumResumeTokensPresent = this.albumsResumeToken_ || this.albumsSharedResumeToken_;
        if (isLoading || !albumResumeTokensPresent) {
            return;
        }
        // Fetch the next page of owned albums.
        fetchGooglePhotosAlbums(this.wallpaperProvider_, this.getStore());
        // Fetch the next page of shared albums when needed.
        if (this.isSharedAlbumsEnabled_) {
            if (this.albumsSharedLoading_ === true ||
                !this.albumsSharedResumeToken_) {
                return;
            }
            fetchGooglePhotosSharedAlbums(this.wallpaperProvider_, this.getStore());
        }
    }
    /** Invoked on changes to this element's |hidden| state. */
    onHiddenChanged_(hidden) {
        if (hidden && this.error_ && this.error_.id === ERROR_ID) {
            // If |hidden|, the error associated with this element will have lost
            // user-facing context so it should be dismissed.
            this.dispatch(dismissErrorAction(ERROR_ID, /*fromUser=*/ false));
            return;
        }
        // When iron-list items change while their parent element is hidden, the
        // iron-list will render incorrectly. Force relayout by invalidating the
        // iron-list when this element becomes visible.
        afterNextRender(this, () => this.$.grid.fire('iron-resize'));
    }
    /** Returns the aria label for the specified |album|. */
    getAlbumAriaLabel_(album) {
        if (album) {
            return album.id === PLACEHOLDER_ID ?
                this.i18n('ariaLabelLoading') :
                `${album.title} ${this.getSecondaryText_(album)}`;
        }
        return undefined;
    }
    /** Returns the aria posinset index for the album at index |i|. */
    getAlbumAriaIndex_(i) {
        return i + 1;
    }
    /** Returns the secondary text to display for the specified |album|. */
    getSecondaryText_(album) {
        return album.isShared ? this.i18n('googlePhotosAlbumShared') :
            getCountText(album.photoCount);
    }
    /** Returns whether the specified |album| is a placeholder. */
    isAlbumPlaceholder_(album) {
        return album.id === PLACEHOLDER_ID;
    }
}
customElements.define(GooglePhotosAlbumsElement.is, GooglePhotosAlbumsElement);
