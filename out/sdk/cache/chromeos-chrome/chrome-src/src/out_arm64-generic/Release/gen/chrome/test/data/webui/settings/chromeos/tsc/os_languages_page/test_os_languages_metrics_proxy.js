// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import { TestBrowserProxy } from 'chrome://webui-test/test_browser_proxy.js';
export class TestLanguagesMetricsProxy extends TestBrowserProxy {
    constructor() {
        super([
            'recordInteraction',
            'recordAddLanguages',
            'recordManageInputMethods',
            'recordToggleShowInputOptionsOnShelf',
            'recordToggleSpellCheck',
            'recordToggleTranslate',
            'recordAddInputMethod',
            'recordTranslateCheckboxChanged',
            'recordShortcutReminderDismissed',
        ]);
    }
    recordInteraction(interaction) {
        this.methodCalled('recordInteraction', interaction);
    }
    recordAddLanguages() {
        this.methodCalled('recordAddLanguages');
    }
    recordManageInputMethods() {
        this.methodCalled('recordManageInputMethods');
    }
    recordToggleShowInputOptionsOnShelf(value) {
        this.methodCalled('recordToggleShowInputOptionsOnShelf', value);
    }
    recordToggleSpellCheck(value) {
        this.methodCalled('recordToggleSpellCheck', value);
    }
    recordToggleTranslate(value) {
        this.methodCalled('recordToggleTranslate', value);
    }
    recordAddInputMethod() {
        this.methodCalled('recordAddInputMethod');
    }
    recordTranslateCheckboxChanged(value) {
        this.methodCalled('recordTranslateCheckboxChanged', value);
    }
    recordShortcutReminderDismissed(value) {
        this.methodCalled('recordShortcutReminderDismissed', value);
    }
}
