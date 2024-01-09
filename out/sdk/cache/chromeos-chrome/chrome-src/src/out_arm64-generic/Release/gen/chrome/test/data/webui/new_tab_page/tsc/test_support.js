// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { NtpBackgroundImageSource } from 'chrome://new-tab-page/new_tab_page.mojom-webui.js';
import { getDeepActiveElement } from 'chrome://resources/js/util.js';
import { keyDownOn } from 'chrome://resources/polymer/v3_0/iron-test-helpers/mock-interactions.js';
import { assertEquals, assertNotEquals } from 'chrome://webui-test/chai_assert.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
export const NONE_ANIMATION = 'none 0s ease 0s 1 normal none running';
export function keydown(element, key) {
    keyDownOn(element, 0, [], key);
}
/**
 * Asserts the computed style value for an element.
 * @param name The name of the style to assert.
 * @param expected The expected style value.
 */
export function assertStyle(element, name, expected) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertEquals(expected, actual);
}
/**
 * Asserts the computed style for an element is not value.
 * @param name The name of the style to assert.
 * @param not The value the style should not be.
 */
export function assertNotStyle(element, name, not) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertNotEquals(not, actual);
}
/** Asserts that an element is focused. */
export function assertFocus(element) {
    assertEquals(element, getDeepActiveElement());
}
export function installMock(clazz, installer) {
    installer = installer ||
        clazz.setInstance;
    const mock = TestMock.fromClass(clazz);
    installer(mock);
    return mock;
}
export function createBackgroundImage(url) {
    return {
        url: { url },
        imageSource: NtpBackgroundImageSource.kNoImage,
    };
}
export function createTheme(isDark = false) {
    const mostVisited = {
        backgroundColor: { value: 0xff00ff00 },
        isDark,
        useWhiteTileIcon: false,
    };
    return {
        backgroundColor: { value: 0xffff0000 },
        backgroundImageAttribution1: '',
        backgroundImageAttribution2: '',
        dailyRefreshEnabled: false,
        backgroundImageCollectionId: '',
        isBaseline: true,
        isDark,
        mostVisited: mostVisited,
        textColor: { value: 0xff0000ff },
        themeRealboxIcons: false,
        isCustomBackground: true,
    };
}
export async function initNullModule() {
    return null;
}
export function createElement() {
    return document.createElement('div');
}
export function render(element) {
    element.shadowRoot.querySelectorAll('dom-if').forEach(tmpl => tmpl.render());
}
export function capture(target, event) {
    const capture = { received: false };
    target.addEventListener(event, () => capture.received = true);
    return capture;
}
