// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview Fake implementation of chrome.settingsPrivate for testing.
 */
import { assertEquals, assertNotEquals, assertTrue } from 'chrome://webui-test/chai_assert.js';
import { FakeChromeEvent } from 'chrome://webui-test/fake_chrome_event.js';
const deepCopy = structuredClone;
/**
 * Fake of chrome.settingsPrivate API. Use by setting
 * CrSettingsPrefs.deferInitialization to true, then passing a
 * FakeSettingsPrivate to settings-prefs#initialize().
 */
export class FakeSettingsPrivate {
    // Mirroring chrome.settingsPrivate API members.
    /* eslint-disable @typescript-eslint/naming-convention */
    PrefType = chrome.settingsPrivate.PrefType;
    ControlledBy = chrome.settingsPrivate.ControlledBy;
    Enforcement = chrome.settingsPrivate.Enforcement;
    /* eslint-enable @typescript-eslint/naming-convention */
    prefs = {};
    onPrefsChanged = new FakeChromeEvent();
    disallowSetPref_ = false;
    failNextSetPref_ = false;
    constructor(initialPrefs) {
        if (initialPrefs) {
            for (const pref of initialPrefs) {
                this.addPref_(pref.type, pref.key, pref.value);
            }
        }
    }
    // chrome.settingsPrivate overrides.
    getAllPrefs() {
        // Send a copy of prefs to keep our internal state private.
        const prefs = [];
        for (const key in this.prefs) {
            prefs.push(deepCopy(this.prefs[key]));
        }
        return Promise.resolve(prefs);
    }
    setPref(key, value, _pageId) {
        const pref = this.prefs[key];
        assertTrue(!!pref);
        assertEquals(typeof value, typeof pref.value);
        assertEquals(Array.isArray(value), Array.isArray(pref.value));
        if (this.failNextSetPref_) {
            this.failNextSetPref_ = false;
            return Promise.resolve(false);
        }
        assertNotEquals(true, this.disallowSetPref_);
        const changed = JSON.stringify(pref.value) !== JSON.stringify(value);
        pref.value = deepCopy(value);
        // Like chrome.settingsPrivate, send a notification when prefs change.
        if (changed) {
            this.sendPrefChanges([{ key, value: deepCopy(value) }]);
        }
        return Promise.resolve(true);
    }
    getPref(key) {
        const pref = this.prefs[key];
        assertTrue(!!pref);
        return Promise.resolve(deepCopy(pref));
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
            assertTrue(!!pref);
            pref.value = change.value;
            prefs.push(deepCopy(pref));
        }
        this.onPrefsChanged.callListeners(prefs);
    }
    getDefaultZoom() {
        return Promise.resolve(1);
    }
    setDefaultZoom() { }
    // Private methods for use by the fake API.
    addPref_(type, key, value) {
        this.prefs[key] = {
            type,
            key,
            value,
        };
    }
}
