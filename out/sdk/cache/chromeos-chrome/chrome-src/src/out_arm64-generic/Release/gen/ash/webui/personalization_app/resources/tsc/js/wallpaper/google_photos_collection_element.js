// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Polymer element that fetches and displays the Google Photos
 * collection.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import '../../css/wallpaper.css.js';
import '../../css/common.css.js';
import './google_photos_zero_state_element.js';
import { isNonEmptyArray } from 'chrome://resources/ash/common/sea_pen/sea_pen_utils.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { afterNextRender } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GooglePhotosEnablementState } from '../../personalization_app.mojom-webui.js';
import { isGooglePhotosSharedAlbumsEnabled } from '../load_time_booleans.js';
import { Paths, PersonalizationRouterElement } from '../personalization_router_element.js';
import { WithPersonalizationStore } from '../personalization_store.js';
import { getTemplate } from './google_photos_collection_element.html.js';
import { fetchGooglePhotosAlbums, fetchGooglePhotosPhotos, fetchGooglePhotosSharedAlbums } from './wallpaper_controller.js';
import { getWallpaperProvider } from './wallpaper_interface_provider.js';
/**
 * Checks if argument is an array with zero length.
 */
function isEmptyArray(maybeArray) {
    return Array.isArray(maybeArray) && maybeArray.length === 0;
}
/** Enumeration of supported tabs. */
export var GooglePhotosTab;
(function (GooglePhotosTab) {
    GooglePhotosTab["ALBUMS"] = "albums";
    GooglePhotosTab["PHOTOS"] = "photos";
    GooglePhotosTab["PHOTOS_BY_ALBUM_ID"] = "photos_by_album_id";
})(GooglePhotosTab || (GooglePhotosTab = {}));
export class GooglePhotosCollectionElement extends WithPersonalizationStore {
    constructor() {
        super(...arguments);
        /** The singleton wallpaper provider interface. */
        this.wallpaperProvider_ = getWallpaperProvider();
    }
    static get is() {
        return 'google-photos-collection';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            albumId: {
                type: String,
                observer: 'onAlbumIdChanged_',
            },
            path: String,
            albums_: Array,
            albumsLoading_: Boolean,
            albumsShared_: Array,
            albumsSharedLoading_: Boolean,
            enabled_: Number,
            photos_: Array,
            photosByAlbumId_: Object,
            tab_: {
                type: String,
                value: GooglePhotosTab.PHOTOS,
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
        return ['onPathOrEnabledChanged_(path, enabled_)'];
    }
    ready() {
        super.ready();
        afterNextRender(this, () => {
            this.$.main.focus();
        });
    }
    connectedCallback() {
        super.connectedCallback();
        this.watch('albums_', state => state.wallpaper.googlePhotos.albums);
        this.watch('albumsLoading_', state => state.wallpaper.loading.googlePhotos.albums);
        if (this.isSharedAlbumsEnabled_) {
            this.watch('albumsShared_', state => state.wallpaper.googlePhotos.albumsShared);
            this.watch('albumsSharedLoading_', state => state.wallpaper.loading.googlePhotos.albumsShared);
        }
        this.watch('enabled_', state => state.wallpaper.googlePhotos.enabled);
        this.watch('photos_', state => state.wallpaper.googlePhotos.photos);
        this.watch('photosByAlbumId_', state => state.wallpaper.googlePhotos.photosByAlbumId);
        this.watch('photosLoading_', state => state.wallpaper.loading.googlePhotos.photos);
        this.updateFromStore();
    }
    /** Invoked on changes to the currently selected |albumId|. */
    onAlbumIdChanged_(albumId) {
        this.tab_ =
            albumId ? GooglePhotosTab.PHOTOS_BY_ALBUM_ID : GooglePhotosTab.ALBUMS;
    }
    /** Invoked on changes to either |path| or |enabled_|. */
    onPathOrEnabledChanged_(path, enabled) {
        // If the Google Photos collection is selected but the user is not allowed
        // to access Google Photos, redirect back to the collections page.
        if (path === Paths.GOOGLE_PHOTOS_COLLECTION &&
            enabled === GooglePhotosEnablementState.kDisabled) {
            PersonalizationRouterElement.reloadAtWallpaper();
        }
        if (enabled === GooglePhotosEnablementState.kEnabled) {
            // When the user first selects the Google Photos collection it should
            // result in a data fetch for the user's photos.
            if (this.photos_ === undefined && !this.photosLoading_) {
                fetchGooglePhotosPhotos(this.wallpaperProvider_, this.getStore());
            }
            // When the user first selects the Google Photos collection it should
            // result in a data fetch for the user's albums.
            if (this.albums_ === undefined && !this.albumsLoading_ &&
                this.albumsShared_ === undefined && !this.albumsSharedLoading_) {
                fetchGooglePhotosAlbums(this.wallpaperProvider_, this.getStore());
                if (this.isSharedAlbumsEnabled_) {
                    fetchGooglePhotosSharedAlbums(this.wallpaperProvider_, this.getStore());
                }
            }
        }
    }
    /** Invoked on tab selected. */
    onTabSelected_(e) {
        const currentTarget = e.currentTarget;
        switch (currentTarget.id) {
            case 'albumsTab':
                this.tab_ = GooglePhotosTab.ALBUMS;
                return;
            case 'photosTab':
                this.tab_ = GooglePhotosTab.PHOTOS;
                return;
            default:
                assertNotReached();
        }
    }
    /** Whether the list of albums is empty. */
    isAlbumsEmpty_(albums, albumsShared) {
        if (this.isSharedAlbumsEnabled_) {
            // The list of (owned+shared) albums is empty only if both albums are
            // enpty.
            return !isNonEmptyArray(albums) && !isNonEmptyArray(albumsShared);
        }
        return !isNonEmptyArray(albums);
    }
    /** Whether the albums tab is currently selected. */
    isAlbumsTabSelected_(tab) {
        return tab === GooglePhotosTab.ALBUMS;
    }
    /** Whether the albums tab content is currently visible. */
    isAlbumsTabContentVisible_(tab) {
        return this.isAlbumsTabSelected_(tab);
    }
    /** Whether the photos by album id tab is currently selected. */
    isPhotosByAlbumIdTabSelected_(tab) {
        return tab === GooglePhotosTab.PHOTOS_BY_ALBUM_ID;
    }
    /** Whether the photos by album id tab content is currently visible. */
    isPhotosByAlbumIdTabContentVisible_(albumId, photosByAlbumId, tab) {
        return this.isPhotosByAlbumIdTabSelected_(tab) &&
            !this.isPhotosByAlbumIdTabZeroStateVisible_(albumId, photosByAlbumId, tab);
    }
    /** Whether the photos by album id tab zero state is currently visible. */
    isPhotosByAlbumIdTabZeroStateVisible_(albumId, photosByAlbumId, tab) {
        return this.isPhotosByAlbumIdTabSelected_(tab) && !!albumId &&
            !!photosByAlbumId && isEmptyArray(photosByAlbumId[albumId]);
    }
    /** Whether the photos tab is currently selected. */
    isPhotosTabSelected_(tab) {
        return tab === GooglePhotosTab.PHOTOS;
    }
    /** Whether the photos tab content is currently visible. */
    isPhotosTabContentVisible_(photos, tab) {
        return this.isPhotosTabSelected_(tab) &&
            !this.isPhotosTabZeroStateVisible_(photos, tab);
    }
    /** Whether the photos tab zero state is currently visible. */
    isPhotosTabZeroStateVisible_(photos, tab) {
        return this.isPhotosTabSelected_(tab) && isEmptyArray(photos);
    }
    /** Whether the tab strip is currently visible. */
    isTabStripVisible_(albumId, albums, albumsShared) {
        return !albumId && !this.isAlbumsEmpty_(albums, albumsShared);
    }
    /** Whether zero state is currently visible. */
    isZeroStateVisible_(albumId, photos, photosByAlbumId, tab) {
        switch (tab) {
            case GooglePhotosTab.ALBUMS:
                return false;
            case GooglePhotosTab.PHOTOS:
                return this.isPhotosTabZeroStateVisible_(photos, tab);
            case GooglePhotosTab.PHOTOS_BY_ALBUM_ID:
                return this.isPhotosByAlbumIdTabZeroStateVisible_(albumId, photosByAlbumId, tab);
            default:
                assertNotReached();
        }
    }
}
customElements.define(GooglePhotosCollectionElement.is, GooglePhotosCollectionElement);
