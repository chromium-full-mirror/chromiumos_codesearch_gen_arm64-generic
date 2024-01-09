// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { assertEquals, assertNotEquals } from 'chrome://webui-test/chai_assert.js';
import { TestMock } from 'chrome://webui-test/test_mock.js';
export function installMock(clazz, installer) {
    installer = installer ||
        clazz.setInstance;
    const mock = TestMock.fromClass(clazz);
    installer(mock);
    return mock;
}
export function assertStyle(element, name, expected) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertEquals(expected, actual);
}
export function assertNotStyle(element, name, not) {
    const actual = window.getComputedStyle(element).getPropertyValue(name).trim();
    assertNotEquals(not, actual);
}
export function $$(element, selector) {
    return element.shadowRoot.querySelector(selector);
}
export function createBackgroundImage(url) {
    return {
        url: { url },
        snapshotUrl: { url },
        isUploadedImage: false,
        localBackgroundId: undefined,
        title: '',
        collectionId: '',
        dailyRefreshEnabled: false,
    };
}
export function createThirdPartyThemeInfo(id, name) {
    return {
        id: id,
        name: name,
    };
}
export function createTheme() {
    return {
        backgroundImage: undefined,
        thirdPartyThemeInfo: undefined,
        backgroundColor: { value: 0xffff0000 },
        foregroundColor: undefined,
        backgroundManagedByPolicy: false,
        followDeviceTheme: false,
    };
}
export function capture(target, event) {
    const capture = { received: false };
    target.addEventListener(event, () => capture.received = true);
    return capture;
}
