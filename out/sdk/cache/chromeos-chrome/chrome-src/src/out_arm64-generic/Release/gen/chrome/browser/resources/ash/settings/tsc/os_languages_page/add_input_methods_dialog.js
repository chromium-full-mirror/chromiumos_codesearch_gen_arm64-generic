// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'os-settings-add-input-methods-dialog' is a dialog for
 * adding input methods.
 */
import './add_items_dialog.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { getTemplate } from './add_input_methods_dialog.html.js';
import { ACCESSIBILITY_COMMON_IME_ID } from './languages.js';
class OsSettingsAddInputMethodsDialogElement extends PolymerElement {
    constructor() {
        super(...arguments);
        // Internal state.
        this.shouldPrioritiseVietnameseExtensions_ = !loadTimeData.getBoolean('allowFirstPartyVietnameseInput');
    }
    static get is() {
        return 'os-settings-add-input-methods-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            languages: Object,
            languageHelper: Object,
        };
    }
    /**
     * Get suggested input methods based on user's enabled languages and ARC IMEs
     */
    getSuggestedInputMethodIds_() {
        const languageCodes = [
            ...this.languageHelper.getEnabledLanguageCodes(),
            this.languageHelper.getArcImeLanguageCode(),
        ];
        let inputMethods = this.languageHelper.getInputMethodsForLanguages(languageCodes);
        if (this.shouldPrioritiseVietnameseExtensions_) {
            // Temporary solution for b/237492047: move Vietnamese extension input
            // methods to the top of the suggested list.
            // TODO(b/237492047): Remove this once 1P Vietnamese input methods are
            // launched.
            const isVietnameseExtension = (inputMethod) => (inputMethod.id.startsWith('_ext_ime_') &&
                inputMethod.languageCodes.includes('vi'));
            inputMethods =
                inputMethods.filter(isVietnameseExtension)
                    .concat(inputMethods.filter(inputMethod => !isVietnameseExtension(inputMethod)));
        }
        return inputMethods.map(inputMethod => inputMethod.id);
    }
    /**
     * @return A list of possible input methods.
     */
    getInputMethods_() {
        return this
            // This assertion of `this.languages` is potentially unsafe and could
            // fail.
            // TODO(b/265553377): Prove that this assertion is safe, or rewrite this
            // to avoid this assertion.
            .languages
            // Safety: `LanguagesModel.inputMethods` is always defined on CrOS.
            .inputMethods.supported
            .filter(inputMethod => {
            // Don't show input methods which are already enabled.
            if (this.languageHelper.isInputMethodEnabled(inputMethod.id)) {
                return false;
            }
            // Don't show the Dictation (Accessibility Common) extension in this
            // list.
            if (inputMethod.id === ACCESSIBILITY_COMMON_IME_ID) {
                return false;
            }
            return true;
        })
            .map(inputMethod => ({
            id: inputMethod.id,
            name: inputMethod.displayName,
            searchTerms: inputMethod.tags,
            disabledByPolicy: !!inputMethod.isProhibitedByPolicy,
        }));
    }
    /**
     * Add input methods.
     */
    onItemsAdded_(e) {
        e.detail.forEach(id => {
            this.languageHelper.addInputMethod(id);
        });
        recordSettingChange();
    }
}
customElements.define(OsSettingsAddInputMethodsDialogElement.is, OsSettingsAddInputMethodsDialogElement);
