// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview defines the actions to change SeaPen state.
 */
export var SeaPenActionName;
(function (SeaPenActionName) {
    SeaPenActionName["BEGIN_SEARCH_SEA_PEN_THUMBNAILS"] = "begin_search_sea_pen_thumbnails";
    SeaPenActionName["BEGIN_LOAD_RECENT_SEA_PEN_IMAGES"] = "begin_load_recent_sea_pen_images";
    SeaPenActionName["BEGIN_LOAD_RECENT_SEA_PEN_IMAGE_DATA"] = "begin_load_recent_sea_pen_image_data";
    SeaPenActionName["BEGIN_LOAD_SELECTED_RECENT_SEA_PEN_IMAGE"] = "begin_load_selected_recent_sea_pen_image";
    SeaPenActionName["BEGIN_SELECT_RECENT_SEA_PEN_IMAGE"] = "begin_select_recent_sea_pen_image";
    SeaPenActionName["END_SELECT_RECENT_SEA_PEN_IMAGE"] = "end_select_recent_sea_pen_image";
    SeaPenActionName["SET_SEA_PEN_THUMBNAILS"] = "set_sea_pen_thumbnails";
    SeaPenActionName["SET_RECENT_SEA_PEN_IMAGES"] = "set_recent_sea_pen_images";
    SeaPenActionName["SET_RECENT_SEA_PEN_IMAGE_DATA"] = "set_recent_sea_pen_image_data";
    SeaPenActionName["SET_SELECTED_RECENT_SEA_PEN_IMAGE"] = "set_selected_recent_sea_pen_image";
})(SeaPenActionName || (SeaPenActionName = {}));
export function beginSearchSeaPenThumbnailsAction(query) {
    return {
        query: query,
        name: SeaPenActionName.BEGIN_SEARCH_SEA_PEN_THUMBNAILS,
    };
}
/**
 * Sets the generated thumbnails for the given prompt text.
 */
export function setSeaPenThumbnailsAction(query, images) {
    return { name: SeaPenActionName.SET_SEA_PEN_THUMBNAILS, query, images };
}
/**
 * Begins load recent sea pen images.
 */
export function beginLoadRecentSeaPenImagesAction() {
    return {
        name: SeaPenActionName.BEGIN_LOAD_RECENT_SEA_PEN_IMAGES,
    };
}
/**
 * Sets the recent sea pen images.
 */
export function setRecentSeaPenImagesAction(recentImages) {
    return {
        name: SeaPenActionName.SET_RECENT_SEA_PEN_IMAGES,
        recentImages,
    };
}
/**
 * Begins load the recent sea pen image data.
 */
export function beginLoadRecentSeaPenImageDataAction(image) {
    return {
        name: SeaPenActionName.BEGIN_LOAD_RECENT_SEA_PEN_IMAGE_DATA,
        id: image.path,
    };
}
/**
 * Sets the recent sea pen image data.
 */
export function setRecentSeaPenImageDataAction(filePath, data) {
    return {
        name: SeaPenActionName.SET_RECENT_SEA_PEN_IMAGE_DATA,
        id: filePath.path,
        data,
    };
}
/**
 * Begins selecting a recent Sea Pen image.
 */
export function beginSelectRecentSeaPenImageAction(image) {
    return {
        name: SeaPenActionName.BEGIN_SELECT_RECENT_SEA_PEN_IMAGE,
        image: image,
    };
}
/**
 * Ends selecting a recent Sea Pen image.
 */
export function endSelectRecentSeaPenImageAction(image, success) {
    return {
        name: SeaPenActionName.END_SELECT_RECENT_SEA_PEN_IMAGE,
        image,
        success,
    };
}
/**
 * Begins loading the selected recent Sea Pen image.
 */
export function beginLoadSelectedRecentSeaPenImageAction() {
    return { name: SeaPenActionName.BEGIN_LOAD_SELECTED_RECENT_SEA_PEN_IMAGE };
}
/**
 * Sets the selected recent Sea Pen image.
 */
export function setSelectedRecentSeaPenImageAction(key) {
    return {
        name: SeaPenActionName.SET_SELECTED_RECENT_SEA_PEN_IMAGE,
        key: key,
    };
}
