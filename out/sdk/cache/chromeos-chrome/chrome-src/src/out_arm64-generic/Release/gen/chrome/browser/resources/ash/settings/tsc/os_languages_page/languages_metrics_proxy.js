// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * Handles metrics for ChromeOS's languages OS settings.
 * TODO(crbug/1109431): Remove these metrics when languages settings migration
 * is completed and data analysed.
 */
/**
 * Keeps in sync with SettingsLanguagesPageInteraction
 * in tools/metrics/histograms/enums.xml.
 */
export var LanguagesPageInteraction;
(function (LanguagesPageInteraction) {
    LanguagesPageInteraction[LanguagesPageInteraction["SWITCH_SYSTEM_LANGUAGE"] = 0] = "SWITCH_SYSTEM_LANGUAGE";
    LanguagesPageInteraction[LanguagesPageInteraction["RESTART"] = 1] = "RESTART";
    LanguagesPageInteraction[LanguagesPageInteraction["SWITCH_INPUT_METHOD"] = 2] = "SWITCH_INPUT_METHOD";
    LanguagesPageInteraction[LanguagesPageInteraction["RESTART_LATER"] = 3] = "RESTART_LATER";
    LanguagesPageInteraction[LanguagesPageInteraction["OPEN_CUSTOM_SPELL_CHECK"] = 4] = "OPEN_CUSTOM_SPELL_CHECK";
    LanguagesPageInteraction[LanguagesPageInteraction["OPEN_MANAGE_GOOGLE_ACCOUNT_LANGUAGE"] = 5] = "OPEN_MANAGE_GOOGLE_ACCOUNT_LANGUAGE";
    LanguagesPageInteraction[LanguagesPageInteraction["OPEN_WEB_LANGUAGES_LEARN_MORE"] = 6] = "OPEN_WEB_LANGUAGES_LEARN_MORE";
    LanguagesPageInteraction[LanguagesPageInteraction["OPEN_LANGUAGE_PACKS_LEARN_MORE"] = 7] = "OPEN_LANGUAGE_PACKS_LEARN_MORE";
})(LanguagesPageInteraction || (LanguagesPageInteraction = {}));
/**
 * Keeps in sync with SettingsInputsShortcutReminderState
 * in tools/metrics/histograms/enums.xml.
 */
export var InputsShortcutReminderState;
(function (InputsShortcutReminderState) {
    InputsShortcutReminderState[InputsShortcutReminderState["NONE"] = 0] = "NONE";
    InputsShortcutReminderState[InputsShortcutReminderState["LAST_USED_IME"] = 1] = "LAST_USED_IME";
    InputsShortcutReminderState[InputsShortcutReminderState["NEXT_IME"] = 2] = "NEXT_IME";
    InputsShortcutReminderState[InputsShortcutReminderState["LAST_USED_IME_AND_NEXT_IME"] = 3] = "LAST_USED_IME_AND_NEXT_IME";
})(InputsShortcutReminderState || (InputsShortcutReminderState = {}));
let instance = null;
export class LanguagesMetricsProxyImpl {
    static getInstance() {
        return instance || (instance = new LanguagesMetricsProxyImpl());
    }
    static setInstanceForTesting(obj) {
        instance = obj;
    }
    recordInteraction(interaction) {
        chrome.metricsPrivate.recordEnumerationValue('ChromeOS.Settings.Languages.Interaction', interaction, Object.keys(LanguagesPageInteraction).length);
    }
    recordAddInputMethod() {
        chrome.metricsPrivate.recordUserAction('ChromeOS.Settings.Languages.AddInputMethod');
    }
    recordAddLanguages() {
        chrome.metricsPrivate.recordUserAction('ChromeOS.Settings.Languages.AddLanguages');
    }
    recordManageInputMethods() {
        chrome.metricsPrivate.recordUserAction('ChromeOS.Settings.Languages.ManageInputMethods');
    }
    recordToggleShowInputOptionsOnShelf(value) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.Settings.Languages.Toggle.ShowInputOptionsOnShelf', value);
    }
    recordToggleSpellCheck(value) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.Settings.Languages.Toggle.SpellCheck', value);
    }
    recordToggleTranslate(value) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.Settings.Languages.Toggle.Translate', value);
    }
    recordTranslateCheckboxChanged(value) {
        chrome.metricsPrivate.recordBoolean('ChromeOS.Settings.Languages.OfferToTranslateCheckbox', value);
    }
    recordShortcutReminderDismissed(value) {
        chrome.metricsPrivate.recordEnumerationValue('ChromeOS.Settings.Inputs.ShortcutReminderDismissed', value, Object.keys(InputsShortcutReminderState).length);
    }
}
