// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assert } from 'chrome://resources/js/assert.js';
/**
 * @fileoverview Defines the actions to change wallpaper state.
 */
export var WallpaperActionName;
(function (WallpaperActionName) {
    WallpaperActionName["APPEND_GOOGLE_PHOTOS_ALBUM"] = "append_google_photos_album";
    WallpaperActionName["APPEND_GOOGLE_PHOTOS_ALBUMS"] = "append_google_photos_albums";
    WallpaperActionName["APPEND_GOOGLE_PHOTOS_SHARED_ALBUMS"] = "append_google_photos_shared_albums";
    WallpaperActionName["APPEND_GOOGLE_PHOTOS_PHOTOS"] = "append_google_photos_photos";
    WallpaperActionName["BEGIN_SEARCH_IMAGE_THUMBNAILS"] = "begin_search_image_thumbnails";
    WallpaperActionName["BEGIN_LOAD_GOOGLE_PHOTOS_ALBUM"] = "begin_load_google_photos_album";
    WallpaperActionName["BEGIN_LOAD_GOOGLE_PHOTOS_ALBUMS"] = "begin_load_google_photos_albums";
    WallpaperActionName["BEGIN_LOAD_GOOGLE_PHOTOS_SHARED_ALBUMS"] = "begin_load_google_photos_shared_albums";
    WallpaperActionName["BEGIN_LOAD_GOOGLE_PHOTOS_ENABLED"] = "begin_load_google_photos_enabled";
    WallpaperActionName["BEGIN_LOAD_GOOGLE_PHOTOS_PHOTOS"] = "begin_load_google_photos_photos";
    WallpaperActionName["BEGIN_LOAD_IMAGES_FOR_COLLECTIONS"] = "begin_load_images_for_collections";
    WallpaperActionName["BEGIN_LOAD_DEFAULT_IMAGE_THUMBNAIL"] = "begin_load_default_image";
    WallpaperActionName["BEGIN_LOAD_LOCAL_IMAGES"] = "begin_load_local_images";
    WallpaperActionName["BEGIN_LOAD_LOCAL_IMAGE_DATA"] = "begin_load_local_image_data";
    WallpaperActionName["BEGIN_LOAD_SELECTED_IMAGE"] = "begin_load_selected_image";
    WallpaperActionName["BEGIN_SELECT_IMAGE"] = "begin_select_image";
    WallpaperActionName["BEGIN_UPDATE_DAILY_REFRESH_IMAGE"] = "begin_update_daily_refresh_image";
    WallpaperActionName["CLEAR_DAILY_REFRESH_ACTION"] = "clear_daily_refresh_action";
    WallpaperActionName["END_SELECT_IMAGE"] = "end_select_image";
    WallpaperActionName["SET_ATTRIBUTION"] = "set_attribution";
    WallpaperActionName["SET_COLLECTIONS"] = "set_collections";
    WallpaperActionName["SET_DAILY_REFRESH_COLLECTION_ID"] = "set_daily_refresh_collection_id";
    WallpaperActionName["SET_GOOGLE_PHOTOS_DAILY_REFRESH_ALBUM_ID"] = "set_google_photos_daily_refresh_album_id";
    WallpaperActionName["SET_GOOGLE_PHOTOS_ENABLED"] = "set_google_photos_enabled";
    WallpaperActionName["SET_IMAGES_FOR_COLLECTION"] = "set_images_for_collection";
    WallpaperActionName["SET_DEFAULT_IMAGE_THUMBNAIL"] = "set_default_image";
    WallpaperActionName["SET_LOCAL_IMAGES"] = "set_local_images";
    WallpaperActionName["SET_LOCAL_IMAGE_DATA"] = "set_local_image_data";
    WallpaperActionName["SET_SELECTED_IMAGE"] = "set_selected_image";
    WallpaperActionName["SET_UPDATED_DAILY_REFRESH_IMAGE"] = "set_updated_daily_refreshed_image";
    WallpaperActionName["SET_FULLSCREEN_ENABLED"] = "set_fullscreen_enabled";
    WallpaperActionName["SET_IMAGE_THUMBNAILS"] = "set_image_thumbnails";
})(WallpaperActionName || (WallpaperActionName = {}));
/**
 * Appends to the list of Google Photos photos for the album associated with the
 * specified id. May be called with null on error.
 */
export function appendGooglePhotosAlbumAction(albumId, photos, resumeToken) {
    return {
        albumId,
        photos,
        resumeToken,
        name: WallpaperActionName.APPEND_GOOGLE_PHOTOS_ALBUM,
    };
}
/**
 * Appends to the list of Google Photos owned albums. May be called with
 * null on error.
 */
export function appendGooglePhotosAlbumsAction(albums, resumeToken) {
    return {
        albums,
        resumeToken,
        name: WallpaperActionName.APPEND_GOOGLE_PHOTOS_ALBUMS,
    };
}
/**
 * Appends to the list of Google Photos shared albums. May be called with
 * null on error.
 */
export function appendGooglePhotosSharedAlbumsAction(albums, resumeToken) {
    return {
        albums,
        resumeToken,
        name: WallpaperActionName.APPEND_GOOGLE_PHOTOS_SHARED_ALBUMS,
    };
}
/**
 * Appends to the list of Google Photos photos. May be called with null on
 * error.
 */
export function appendGooglePhotosPhotosAction(photos, resumeToken) {
    return {
        photos,
        resumeToken,
        name: WallpaperActionName.APPEND_GOOGLE_PHOTOS_PHOTOS,
    };
}
export function beginSearchImageThumbnailsAction(query) {
    return {
        query: query,
        name: WallpaperActionName.BEGIN_SEARCH_IMAGE_THUMBNAILS,
    };
}
/**
 * Notifies that the app is loading the list of Google Photos photos for the
 * album associated with the specified id.
 */
export function beginLoadGooglePhotosAlbumAction(albumId) {
    return { albumId, name: WallpaperActionName.BEGIN_LOAD_GOOGLE_PHOTOS_ALBUM };
}
/**
 * Notifies that the app is loading the list of Google Photos albums.
 */
export function beginLoadGooglePhotosAlbumsAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_GOOGLE_PHOTOS_ALBUMS };
}
/**
 * Notifies that the app is loading the list of Google Photos albums.
 */
export function beginLoadGooglePhotosSharedAlbumsAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_GOOGLE_PHOTOS_SHARED_ALBUMS };
}
/**
 * Notifies that the app is loading whether the user is allowed to access Google
 * Photos.
 */
export function beginLoadGooglePhotosEnabledAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_GOOGLE_PHOTOS_ENABLED };
}
/**
 * Notifies that the app is loading the list of Google Photos photos.
 */
export function beginLoadGooglePhotosPhotosAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_GOOGLE_PHOTOS_PHOTOS };
}
/**
 * Notifies that app is loading image list for the given collection.
 */
export function beginLoadImagesForCollectionsAction(collections) {
    return {
        collections,
        name: WallpaperActionName.BEGIN_LOAD_IMAGES_FOR_COLLECTIONS,
    };
}
export function beginLoadDefaultImageThubmnailAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_DEFAULT_IMAGE_THUMBNAIL };
}
/**
 * Notifies that app is loading local image list.
 */
export function beginLoadLocalImagesAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_LOCAL_IMAGES };
}
/**
 * Notifies that app is loading thumbnail for the given local image.
 */
export function beginLoadLocalImageDataAction(image) {
    return {
        id: image.path,
        name: WallpaperActionName.BEGIN_LOAD_LOCAL_IMAGE_DATA,
    };
}
/**
 * Notifies that a user has clicked on the refresh button.
 */
export function beginUpdateDailyRefreshImageAction() {
    return {
        name: WallpaperActionName.BEGIN_UPDATE_DAILY_REFRESH_IMAGE,
    };
}
/**
 * Notifies that app is loading currently selected image information.
 */
export function beginLoadSelectedImageAction() {
    return { name: WallpaperActionName.BEGIN_LOAD_SELECTED_IMAGE };
}
/**
 * Notifies that a user has clicked on an image to set as wallpaper.
 */
export function beginSelectImageAction(image) {
    return { name: WallpaperActionName.BEGIN_SELECT_IMAGE, image };
}
/**
 * Notifies that the user-initiated action to set image has finished.
 */
export function endSelectImageAction(image, success) {
    return { name: WallpaperActionName.END_SELECT_IMAGE, image, success };
}
/**
 * Sets the attribution of the current wallpaper. May be called with null if an
 * error occurred.
 */
export function setAttributionAction(attribution) {
    return {
        name: WallpaperActionName.SET_ATTRIBUTION,
        attribution,
    };
}
/**
 * Sets the collections. May be called with null if an error occurred.
 */
export function setCollectionsAction(collections) {
    return {
        name: WallpaperActionName.SET_COLLECTIONS,
        collections,
    };
}
/**
 * Sets and enable daily refresh for given collectionId.
 */
export function setDailyRefreshCollectionIdAction(collectionId) {
    return {
        collectionId,
        name: WallpaperActionName.SET_DAILY_REFRESH_COLLECTION_ID,
    };
}
/**
 * Sets and enable daily refresh for given Google Photos albumId.
 */
export function setGooglePhotosDailyRefreshAlbumIdAction(albumId) {
    return {
        albumId,
        name: WallpaperActionName.SET_GOOGLE_PHOTOS_DAILY_REFRESH_ALBUM_ID,
    };
}
/**
 * Clears the data related to daily refresh, indicating daily refresh is not
 * active.
 */
export function clearDailyRefreshAction() {
    return {
        name: WallpaperActionName.CLEAR_DAILY_REFRESH_ACTION,
    };
}
/** Sets whether the user is allowed to access Google Photos. */
export function setGooglePhotosEnabledAction(enabled) {
    return { enabled, name: WallpaperActionName.SET_GOOGLE_PHOTOS_ENABLED };
}
/**
 * Sets the images for a given collection. May be called with null if an error
 * occurred.
 */
export function setImagesForCollectionAction(collectionId, images) {
    return {
        collectionId,
        images,
        name: WallpaperActionName.SET_IMAGES_FOR_COLLECTION,
    };
}
export function setDefaultImageThumbnailAction(thumbnail) {
    return {
        thumbnail,
        name: WallpaperActionName.SET_DEFAULT_IMAGE_THUMBNAIL,
    };
}
/**
 * Sets the thumbnail data for a local image.
 */
export function setLocalImageDataAction(filePath, data) {
    return {
        id: filePath.path,
        data,
        name: WallpaperActionName.SET_LOCAL_IMAGE_DATA,
    };
}
/** Sets the list of local images. */
export function setLocalImagesAction(images) {
    return {
        images,
        name: WallpaperActionName.SET_LOCAL_IMAGES,
    };
}
/**
 * Notifies that a image has been refreshed.
 */
export function setUpdatedDailyRefreshImageAction() {
    return {
        name: WallpaperActionName.SET_UPDATED_DAILY_REFRESH_IMAGE,
    };
}
/**
 * Returns an action to set the current image as currently selected across the
 * app. Can be called with null to represent no image currently selected or that
 * an error occurred.
 */
export function setSelectedImageAction(image) {
    return {
        image,
        name: WallpaperActionName.SET_SELECTED_IMAGE,
    };
}
/**
 * Enables/disables the fullscreen preview mode for wallpaper.
 */
export function setFullscreenEnabledAction(enabled) {
    assert(typeof enabled === 'boolean');
    return { name: WallpaperActionName.SET_FULLSCREEN_ENABLED, enabled };
}
/**
 * Set the generated thumbnails for the given prompt text.
 */
export function setImageThumbnailsAction(query, images) {
    return { name: WallpaperActionName.SET_IMAGE_THUMBNAILS, query, images };
}
