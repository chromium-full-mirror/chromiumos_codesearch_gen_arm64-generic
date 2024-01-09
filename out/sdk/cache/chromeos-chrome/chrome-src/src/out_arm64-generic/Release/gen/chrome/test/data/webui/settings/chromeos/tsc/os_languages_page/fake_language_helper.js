// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
export const FIRST_PARTY_INPUT_METHOD_ID_PREFIX = '_comp_ime_jkghodnilhceideoidjikpgommlajknk';
export class FakeLanguageHelper {
    async whenReady() { }
    setProspectiveUiLanguage(_) { }
    requiresRestart() {
        return false;
    }
    getArcImeLanguageCode() {
        return '';
    }
    isLanguageCodeForArcIme(_) {
        return false;
    }
    isLanguageTranslatable(_) {
        return true;
    }
    isLanguageEnabled(_) {
        return true;
    }
    enableLanguage(_) { }
    disableLanguage(_) { }
    isOnlyTranslateBlockedLanguage(_) {
        return false;
    }
    canDisableLanguage(_) {
        return true;
    }
    canEnableLanguage(_) {
        return true;
    }
    moveLanguage(_1, _2) { }
    moveLanguageToFront(_) { }
    enableTranslateLanguage(_) { }
    disableTranslateLanguage(_) { }
    setLanguageAlwaysTranslateState(_1, _2) { }
    toggleSpellCheck(_1, _2) { }
    convertLanguageCodeForTranslate(_) {
        return '';
    }
    getLanguageCodeWithoutRegion(_) {
        return '';
    }
    getLanguage(_) {
        return undefined;
    }
    retryDownloadDictionary(_) { }
    addInputMethod(_) { }
    removeInputMethod(_) { }
    setCurrentInputMethod(_) { }
    getInputMethodsForLanguage(_) {
        return [
            {
                id: 'fake display name',
                displayName: 'fake display name',
                languageCodes: ['en', 'en-US'],
                tags: [],
                enabled: true,
            },
        ];
    }
    getInputMethodsForLanguages(_) {
        return [
            {
                id: 'fake display name',
                displayName: 'fake display name',
                languageCodes: ['en', 'en-US'],
                tags: [],
                enabled: true,
            },
        ];
    }
    getEnabledLanguageCodes() {
        return new Set();
    }
    isInputMethodEnabled(_) {
        return true;
    }
    isComponentIme(_) {
        return false;
    }
    openInputMethodOptions(_) { }
    getInputMethodDisplayName(_) {
        return 'fake display name';
    }
    getCurrentInputMethod() {
        return Promise.resolve(FIRST_PARTY_INPUT_METHOD_ID_PREFIX + 'xkb:us::eng');
    }
    getImeLanguagePackStatus() {
        return chrome.inputMethodPrivate.LanguagePackStatus.UNKNOWN;
    }
}
