// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
import { FakeInputMethodPrivate } from '../fake_input_method_private.js';
import { FakeLanguageSettingsPrivate } from '../fake_language_settings_private.js';
export class TestLanguagesBrowserProxy extends TestBrowserProxy {
    languageSettingsPrivate_;
    inputMethodPrivate_;
    constructor() {
        super([
            'getProspectiveUiLanguage',
            'setProspectiveUiLanguage',
            'getInputMethodPrivate',
            'getLanguageSettingsPrivate',
        ]);
        this.languageSettingsPrivate_ = new FakeLanguageSettingsPrivate();
        this.inputMethodPrivate_ =
            new FakeInputMethodPrivate();
    }
    getLanguageSettingsPrivate() {
        this.methodCalled('getLanguageSettingsPrivate');
        return this.languageSettingsPrivate_;
    }
    setLanguageSettingsPrivate(languageSettingsPrivate) {
        this.languageSettingsPrivate_ = languageSettingsPrivate;
    }
    getProspectiveUiLanguage() {
        this.methodCalled('getProspectiveUiLanguage');
        return Promise.resolve('en-US');
    }
    setProspectiveUiLanguage(language) {
        this.methodCalled('setProspectiveUiLanguage', language);
    }
    getInputMethodPrivate() {
        this.methodCalled('getInputMethodPrivate');
        return this.inputMethodPrivate_;
    }
}
