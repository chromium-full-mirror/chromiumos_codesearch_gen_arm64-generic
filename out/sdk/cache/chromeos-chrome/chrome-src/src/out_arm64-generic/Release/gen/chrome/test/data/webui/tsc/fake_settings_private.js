// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// clang-format off
import { assertEquals, assertNotEquals } from './chai_assert.js';
import { TestBrowserProxy } from './test_browser_proxy.js';
import { FakeChromeEvent } from './fake_chrome_event.js';
// clang-format on
/** @fileoverview Fake implementation of chrome.settingsPrivate for testing. */
/**
 * Fake of chrome.settingsPrivate API. Use by setting
 * CrSettingsPrefs.deferInitialization to true, then passing a
 * FakeSettingsPrivate to settings-prefs#initialize().
 */
export class FakeSettingsPrivate extends TestBrowserProxy {
    disallowSetPref_ = false;
    failNextSetPref_ = false;
    prefs = {};
    onPrefsChanged = new FakeChromeEvent();
    constructor(initialPrefs) {
        super([
            'setPref',
            'getPref',
        ]);
        if (!initialPrefs) {
            return;
        }
        for (const pref of initialPrefs) {
            this.addPref_(pref.type, pref.key, pref.value);
        }
    }
    // chrome.settingsPrivate overrides.
    getAllPrefs() {
        // Send a copy of prefs to keep our internal state private.
        const prefs = [];
        for (const key in this.prefs) {
            prefs.push(structuredClone(this.prefs[key]));
        }
        return Promise.resolve(prefs);
    }
    setPref(key, value, _pageId) {
        this.methodCalled('setPref', { key, value });
        const pref = this.prefs[key];
        assertNotEquals(undefined, pref);
        assertEquals(typeof value, typeof pref.value);
        assertEquals(Array.isArray(value), Array.isArray(pref.value));
        if (this.failNextSetPref_) {
            this.failNextSetPref_ = false;
            return Promise.resolve(false);
        }
        assertNotEquals(true, this.disallowSetPref_);
        const changed = JSON.stringify(pref.value) !== JSON.stringify(value);
        pref.value = structuredClone(value);
        // Like chrome.settingsPrivate, send a notification when prefs change.
        if (changed) {
            this.sendPrefChanges([{ key: key, value: structuredClone(value) }]);
        }
        return Promise.resolve(true);
    }
    getPref(key) {
        this.methodCalled('getPref', key);
        const pref = this.prefs[key];
        assertNotEquals(undefined, pref);
        return Promise.resolve(structuredClone(pref));
    }
    // Functions used by tests.
    /** Instructs the API to return a failure when setPref is next called. */
    failNextSetPref() {
        this.failNextSetPref_ = true;
    }
    /** Instructs the API to assert (fail the test) if setPref is called. */
    disallowSetPref() {
        this.disallowSetPref_ = true;
    }
    allowSetPref() {
        this.disallowSetPref_ = false;
    }
    /**
     * Notifies the listeners of pref changes.
     */
    sendPrefChanges(changes) {
        const prefs = [];
        for (const change of changes) {
            const pref = this.prefs[change.key];
            assertNotEquals(undefined, pref);
            pref.value = change.value;
            prefs.push(structuredClone(pref));
        }
        this.onPrefsChanged.callListeners(prefs);
    }
    getDefaultZoom() { }
    setDefaultZoom() { }
    // Private methods for use by the fake API.
    addPref_(type, key, value) {
        this.prefs[key] = {
            type: type,
            key: key,
            value: value,
        };
    }
}
