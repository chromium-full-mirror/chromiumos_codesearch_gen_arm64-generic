// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Utility functions to be used throughout personalization app.
 */
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { BacklightColor, BLUE_COLOR, GREEN_COLOR, INDIGO_COLOR, PURPLE_COLOR, RED_COLOR, WHITE_COLOR, YELLOW_COLOR } from './../personalization_app.mojom-webui.js';
import { isPersonalizationJellyEnabled } from './load_time_booleans.js';
export const WALLPAPER = 'wallpaperColor';
export const WHITE = 'whiteColor';
export const RED = 'redColor';
export const YELLOW = 'yellowColor';
export const GREEN = 'greenColor';
export const BLUE = 'blueColor';
export const INDIGO = 'indigoColor';
export const PURPLE = 'purpleColor';
export const RAINBOW = 'rainbowColor';
export const staticColorIds = [WALLPAPER, WHITE, RED, YELLOW, GREEN, BLUE, INDIGO, PURPLE];
/** Returns true if this event is a user action to select an item. */
export function isSelectionEvent(event) {
    return (event instanceof MouseEvent && event.type === 'click') ||
        (event instanceof KeyboardEvent && event.key === 'Enter');
}
/** Returns the text to display for a number of images. */
export function getCountText(x) {
    switch (x) {
        case null:
        case undefined:
            return '';
        case 0:
            return loadTimeData.getString('zeroImages');
        case 1:
            return loadTimeData.getString('oneImage');
        default:
            if ('number' !== typeof x || x < 0) {
                console.error('Received an impossible value');
                return '';
            }
            return loadTimeData.getStringF('multipleImages', x);
    }
}
/**
 * Returns the number of grid items to render per row given the current inner
 * width of the |window|.
 */
export function getNumberOfGridItemsPerRow() {
    return window.innerWidth > 720 ? 4 : 3;
}
/**
 * Checks if argument is a string with non-zero length.
 */
export function isNonEmptyString(maybeString) {
    return typeof maybeString === 'string' && maybeString.length > 0;
}
/**
 * Checks if a number is within a range.
 */
export function inBetween(num, minVal, maxVal) {
    return minVal <= num && num <= maxVal;
}
/** Returns the RGB hex in #ffffff format. */
export function convertToRgbHexStr(hexVal) {
    const PADDING_LENGTH = 6;
    const STRING_LENGTH = 16;
    return `#${(hexVal & 0x0FFFFFF)
        .toString(STRING_LENGTH)
        .padStart(PADDING_LENGTH, '0')}`;
}
/**
 * Returns the mapping of preset colors to their hex value and enum value in
 * BacklightColor.
 */
export function getPresetColors() {
    return {
        [WHITE]: {
            hexVal: convertToRgbHexStr(WHITE_COLOR),
            enumVal: BacklightColor.kWhite,
        },
        [RED]: {
            hexVal: convertToRgbHexStr(RED_COLOR),
            enumVal: BacklightColor.kRed,
        },
        [YELLOW]: {
            hexVal: convertToRgbHexStr(YELLOW_COLOR),
            enumVal: BacklightColor.kYellow,
        },
        [GREEN]: {
            hexVal: convertToRgbHexStr(GREEN_COLOR),
            enumVal: BacklightColor.kGreen,
        },
        [BLUE]: {
            hexVal: convertToRgbHexStr(BLUE_COLOR),
            enumVal: BacklightColor.kBlue,
        },
        [INDIGO]: {
            hexVal: convertToRgbHexStr(INDIGO_COLOR),
            enumVal: BacklightColor.kIndigo,
        },
        [PURPLE]: {
            hexVal: convertToRgbHexStr(PURPLE_COLOR),
            enumVal: BacklightColor.kPurple,
        },
    };
}
/**
 * Returns whether the given album is Recent Highlights.
 */
export function isRecentHighlightsAlbum(album) {
    return album.id === 'RecentHighlights';
}
/**
 * Returns the icon string for the checkmark.
 */
export function getCheckmarkIcon() {
    return isPersonalizationJellyEnabled() ?
        'personalization-shared:circle-checkmark' :
        'personalization:checkmark';
}
/**
 * Returns a x-length dummy array of zeros (0s)
 */
export function getZerosArray(x) {
    return new Array(x).fill(0);
}
