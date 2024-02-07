// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'os-settings-edit-dictionary-page' is a sub-page for editing
 * the "dictionary" of custom words used for spell check.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_icon_button/cr_icon_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/polymer/v3_0/iron-a11y-keys/iron-a11y-keys.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import '../settings_shared.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { GlobalScrollTargetMixin } from '../common/global_scroll_target_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { routes } from '../router.js';
import { LanguagesBrowserProxyImpl } from './languages_browser_proxy.js';
import { getTemplate } from './os_edit_dictionary_page.html.js';
// Max valid word size, keep in sync with kMaxCustomDictionaryWordBytes in
// //components/spellcheck/common/spellcheck_common.h
const MAX_CUSTOM_DICTIONARY_WORD_BYTES = 99;
var NewWordState;
(function (NewWordState) {
    NewWordState[NewWordState["NO_WORD"] = 0] = "NO_WORD";
    NewWordState[NewWordState["VALID_WORD"] = 1] = "VALID_WORD";
    NewWordState[NewWordState["WORD_ALREADY_ADDED"] = 2] = "WORD_ALREADY_ADDED";
    NewWordState[NewWordState["WORD_TOO_LONG"] = 3] = "WORD_TOO_LONG";
})(NewWordState || (NewWordState = {}));
// TODO(b/265559727): Remove GlobalScrollTargetMixin if it is unused.
const OsSettingsEditDictionaryPageElementBase = GlobalScrollTargetMixin(I18nMixin(PolymerElement));
export class OsSettingsEditDictionaryPageElement extends OsSettingsEditDictionaryPageElementBase {
    constructor() {
        super(...arguments);
        // API proxies.
        this.languageSettingsPrivate_ = LanguagesBrowserProxyImpl.getInstance().getLanguageSettingsPrivate();
        // Internal properties for mixins.
        // From GlobalScrollTargetMixin.
        this.subpageRoute = routes.OS_LANGUAGES_EDIT_DICTIONARY;
        // Internal state.
        this.words_ = [];
    }
    static get is() {
        return 'os-settings-edit-dictionary-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            newWordValue_: {
                type: String,
                value: '',
            },
            words_: Array,
            hasWords_: {
                type: Boolean,
                value: false,
                computed: 'computeHasWords_(words_.length)',
            },
            disableAddButton_: {
                type: Boolean,
                value: true,
                computed: 'shouldDisableAddButton_(newWordState_)',
            },
            newWordState_: {
                type: Number,
                value: NewWordState.NO_WORD,
                computed: 'updateNewWordState_(newWordValue_, words_.*)',
            },
        };
    }
    ready() {
        super.ready();
        this.languageSettingsPrivate_.getSpellcheckWords().then(words => {
            this.words_ = words;
        });
        this.languageSettingsPrivate_.onCustomDictionaryChanged.addListener(this.onCustomDictionaryChanged_.bind(this));
        // Add a key handler for the new-word input.
        this.$.keys.target = this.$.newWord;
    }
    computeHasWords_() {
        return this.words_.length > 0;
    }
    /**
     * Adds the word in the new-word input to the dictionary.
     */
    addWordFromInput_() {
        // Spaces are allowed, but removing leading and trailing whitespace.
        const word = this.getTrimmedNewWord_();
        this.newWordValue_ = '';
        if (word) {
            this.languageSettingsPrivate_.addSpellcheckWord(word);
            recordSettingChange();
        }
    }
    getTrimmedNewWord_() {
        return this.newWordValue_.trim();
    }
    updateNewWordState_() {
        const trimmedNewWord = this.getTrimmedNewWord_();
        if (!trimmedNewWord.length) {
            return NewWordState.NO_WORD;
        }
        if (this.words_.includes(trimmedNewWord)) {
            return NewWordState.WORD_ALREADY_ADDED;
        }
        if (new Blob([trimmedNewWord]).size > MAX_CUSTOM_DICTIONARY_WORD_BYTES) {
            return NewWordState.WORD_TOO_LONG;
        }
        return NewWordState.VALID_WORD;
    }
    shouldDisableAddButton_() {
        return this.newWordState_ !== NewWordState.VALID_WORD;
    }
    getErrorMessage_() {
        switch (this.newWordState_) {
            case NewWordState.WORD_TOO_LONG:
                return this.i18n('addDictionaryWordLengthError');
            case NewWordState.WORD_ALREADY_ADDED:
                return this.i18n('addDictionaryWordDuplicateError');
            default:
                return '';
        }
    }
    isNewWordInvalid_() {
        return this.newWordState_ === NewWordState.WORD_TOO_LONG ||
            this.newWordState_ === NewWordState.WORD_ALREADY_ADDED;
    }
    /**
     * Handles tapping on the Add Word button.
     */
    onAddWordClick_() {
        this.addWordFromInput_();
        this.$.newWord.focus();
    }
    /**
     * Handles updates to the word list. Additions are unshifted to the top
     * of the list so that users can see them easily.
     */
    onCustomDictionaryChanged_(added, removed) {
        for (const word of removed) {
            const index = this.words_.indexOf(word);
            if (index !== -1) {
                this.splice('words_', index, 1);
            }
        }
        for (const word of added) {
            if (!this.words_.includes(word)) {
                this.unshift('words_', word);
            }
        }
    }
    /**
     * Handles Enter and Escape key presses for the new-word input.
     */
    onKeysPress_(e) {
        if (e.detail.key === 'enter' && !this.disableAddButton_) {
            this.addWordFromInput_();
        }
        else if (e.detail.key === 'esc') {
            // Safety: This method is only used as an event listener for an
            // <iron-a11y-keys> which has its target set to `this.$.newWord` in
            // `ready()`, so the target must always be a CrInputElement.
            e.detail.keyboardEvent.target.value = '';
        }
    }
    /**
     * Handles tapping on a "Remove word" icon button.
     */
    onRemoveWordClick_(e) {
        this.languageSettingsPrivate_.removeSpellcheckWord(e.model.item);
        recordSettingChange();
    }
}
customElements.define(OsSettingsEditDictionaryPageElement.is, OsSettingsEditDictionaryPageElement);
