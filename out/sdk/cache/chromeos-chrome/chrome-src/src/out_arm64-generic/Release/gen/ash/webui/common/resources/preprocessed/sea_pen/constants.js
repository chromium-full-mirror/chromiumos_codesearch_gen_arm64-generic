// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { getVcBackgroundTemplates, getWallpaperTemplates } from './constants_generated.js';
import { isSeaPenTextInputEnabled } from './load_time_booleans.js';
export function getSeaPenTemplates() {
    const templates = window.location.origin === 'chrome://personalization' ?
        getWallpaperTemplates() :
        getVcBackgroundTemplates();
    if (isSeaPenTextInputEnabled()) {
        templates.push({
            preview: [{
                    url: 'chrome://resources/ash/common/sea_pen/sea_pen_images/sea_pen_tile.jpg',
                }],
            title: 'Freeform',
            text: 'Freeform',
            id: 'Query',
            options: new Map(),
        });
    }
    return templates;
}
/**
 * Split the template string into an array of strings, where each string is
 * either a literal string or a placeholder for a chip.
 * @example
 * // returns ['A park in ', '<city>', ' in the style of ', '<style>']
 * parseTemplateText('A park in <city> in the style of <style>');
 */
export function parseTemplateText(template) {
    return template.split(/(<\w+>)/g);
}
