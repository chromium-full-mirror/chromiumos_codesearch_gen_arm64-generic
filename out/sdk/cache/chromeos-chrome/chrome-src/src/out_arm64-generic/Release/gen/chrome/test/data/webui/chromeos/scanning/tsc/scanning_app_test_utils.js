// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { alphabeticalCompare } from 'chrome://scanning/scanning_app_util.js';
import { assertTrue } from 'chrome://webui-test/chromeos/chai_assert.js';
import { flushTasks } from 'chrome://webui-test/polymer_test_util.js';
export function assertOrderedAlphabetically(arr, conversionFn = (val) => `${val}`) {
    for (let i = 0; i < arr.length - 1; i++) {
        // |alphabeticalCompare| will return -1 if the first argument is less than
        // the second and 0 if the two arguments are equal.
        assertTrue(alphabeticalCompare(conversionFn(arr[i]), conversionFn(arr[i + 1])) <=
            0);
    }
}
export function createScanner(id, displayName) {
    return { id, displayName: strToMojoString16(displayName) };
}
export function createScannerSource(type, name, pageSizes, colorModes, resolutions) {
    return { type, name, pageSizes, colorModes, resolutions };
}
/**
 * Converts a JS string to a mojo_base::mojom::String16 object.
 */
function strToMojoString16(str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        arr[i] = str.charCodeAt(i);
    }
    return { data: arr };
}
export function changeSelectedValue(select, value) {
    select.value = value;
    select.dispatchEvent(new CustomEvent('change'));
    return flushTasks();
}
export function changeSelectedIndex(select, index) {
    select.selectedIndex = index;
    select.dispatchEvent(new CustomEvent('change'));
    return flushTasks();
}
/**
 * Fake MediaQueryList for mocking behavior of |window.matchMedia|.
 */
export class FakeMediaQueryList extends EventTarget {
    mediaString;
    mediaMatches = false;
    listener = null;
    constructor(media) {
        super();
        this.mediaString = media;
    }
    addListener(listener) {
        this.listener = listener;
    }
    removeListener() {
        this.listener = null;
    }
    onchange() {
        if (!this.listener) {
            return;
        }
        this.listener(new window.MediaQueryListEvent('change', { media: this.mediaString, matches: this.mediaMatches }));
    }
    get media() {
        return this.mediaString;
    }
    get matches() {
        return this.mediaMatches;
    }
    set matches(matches) {
        this.mediaMatches = matches;
        this.onchange();
    }
}
