// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const CATEGORY_BUTTON_CLICK = 'category-button-click';
export const GROUP_BUTTON_CLICK = 'group-button-click';
export const EMOJI_TEXT_BUTTON_CLICK = 'emoji-text-button-click';
export const EMOJI_IMG_BUTTON_CLICK = 'emoji-img-button-click';
export const EMOJI_VARIANTS_SHOWN = 'emoji-variants-shown';
/**
 * The event that data of a category is fetched and processed for rendering.
 * Note: this event does not indicate if rendering of the category data is
 * completed or not.
 */
export const CATEGORY_DATA_LOADED = 'category-data-loaded';
/**
 * The event that the user clicks try again when there is either a network or
 * http error when trying to fetch for gifs.
 */
export const GIF_ERROR_TRY_AGAIN = 'gif-error-try-again';
/**
 * The event that all the data are loaded and rendered and all the
 * emoji-picker functionalities are ready to use.
 */
export const EMOJI_PICKER_READY = 'emoji-picker-ready';
export const EMOJI_CLEAR_RECENTS_CLICK = 'emoji-clear-recents-click';
/**
 * Constructs a CustomEvent with the given event type and details.
 * The event will bubble up through elements and components.
 */
export function createCustomEvent(type, detail) {
    return new CustomEvent(type, { bubbles: true, composed: true, detail });
}
