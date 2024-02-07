// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This dialog holds a Dictation locale selection pane that
 * allows a user to pick their locale for Dictation's speech recognition.
 */
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/ash/common/cr_elements/cr_search_field/cr_search_field.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/polymer/v3_0/paper-ripple/paper-ripple.js';
import '../settings_shared.css.js';
import '../os_languages_page/shared_style.css.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { afterNextRender, PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './change_dictation_locale_dialog.html.js';
const ChangeDictationLocaleDialogBase = I18nMixin(PolymerElement);
export class ChangeDictationLocaleDialog extends ChangeDictationLocaleDialogBase {
    static get is() {
        return 'os-settings-change-dictation-locale-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Set by the manage OS a11y page, this is the full list of locales
             * available.
             */
            options: Array,
            /**
             * Preference associated with Dictation locales.
             */
            pref: Object,
            displayedLocales_: {
                type: Array,
                computed: `getAllDictationLocales_(options, lowercaseQueryString_)`,
            },
            recommendedLocales_: {
                type: Array,
                computed: `getRecommendedDictationLocales_(options, lowercaseQueryString_)`,
            },
            /**
             * Whether any locales are displayed.
             */
            displayedLocalesEmpty_: {
                type: Boolean,
                computed: 'isZero_(displayedLocales_.length)',
            },
            /**
             * Whether any locales are displayed.
             */
            recommendedLocalesEmpty_: {
                type: Boolean,
                computed: 'isZero_(recommendedLocales_.length)',
            },
            /**
             * Whether to enable the button to update the locale pref.
             */
            disableUpdateButton_: {
                type: Boolean,
                computed: 'shouldDisableActionButton_(selectedLocale_)',
            },
            lowercaseQueryString_: {
                type: String,
                value: '',
            },
            /**
             * The currently selected locale from the recommended locales list.
             */
            selectedRecommendedLocale_: {
                type: Object,
                value: null,
            },
            /**
             * The currently selected locale from the full locales list.
             */
            selectedLocale_: {
                type: Object,
                value: null,
            },
        };
    }
    ready() {
        super.ready();
        this.addEventListener('exit-pane', () => this.onPaneExit_());
    }
    connectedCallback() {
        super.connectedCallback();
        // Sets offset in iron-list that uses the body as a scrollTarget.
        afterNextRender(this, () => {
            this.$.allLocalesList.scrollOffset = this.$.allLocalesList.offsetTop;
        });
    }
    /**
     * Gets the list of all recommended Dictation locales based on the current
     * search.
     */
    getRecommendedDictationLocales_() {
        return this.getPossibleDictationLocales_(/*recommendedOnly=*/ true);
    }
    /**
     * Gets the list of all possible Dictation locales based on the current
     * search.
     */
    getAllDictationLocales_() {
        return this.getPossibleDictationLocales_(/*recommendedOnly=*/ false);
    }
    getPossibleDictationLocales_(recommendedOnly) {
        return this.options
            .filter(option => {
            // Filter recommended options. The currently selected option is also
            // recommended.
            if (recommendedOnly &&
                !(this.pref.value === option.value || option.recommended)) {
                return false;
            }
            return !this.lowercaseQueryString_ ||
                option.name.toLowerCase().includes(this.lowercaseQueryString_) ||
                option.value.toLowerCase().includes(this.lowercaseQueryString_);
        })
            .sort((first, second) => {
            return first.name.localeCompare(second.name);
        });
    }
    /**
     * |selectedRecommendedLocale_| is not changed by the time this is called. The
     * value that |selectedRecommendedLocale_| will be assigned to is stored in
     * |this.$.recommendedLocalesList.selectedItem|.
     */
    selectedRecommendedLocaleChanged_() {
        const allLocalesSelected = this.$.allLocalesList.selectedItem;
        const recommendedLocalesSelected = this.$.recommendedLocalesList.selectedItem;
        // Check for equality before updating to avoid an infinite loop with
        // selectedLocaleChanged_().
        if (allLocalesSelected === recommendedLocalesSelected) {
            return;
        }
        if (recommendedLocalesSelected) {
            this.$.allLocalesList.selectItem(recommendedLocalesSelected);
        }
        else {
            this.$.allLocalesList.deselectItem(allLocalesSelected);
        }
    }
    /**
     * |selectedLocale_| is not changed by the time this is called. The value that
     * |selectedLocale_| will be assigned to is stored in
     * |this.$.allLocalesList.selectedItem|.
     */
    selectedLocaleChanged_() {
        const allLocalesSelected = this.$.allLocalesList.selectedItem;
        const recommendedLocalesSelected = this.$.recommendedLocalesList.selectedItem;
        if (allLocalesSelected === recommendedLocalesSelected) {
            return;
        }
        // Check if the locale is also in the recommended list.
        if (allLocalesSelected?.recommended) {
            this.$.recommendedLocalesList.selectItem(allLocalesSelected);
        }
        else if (recommendedLocalesSelected) {
            this.$.recommendedLocalesList.deselectItem(recommendedLocalesSelected);
        }
    }
    isZero_(num) {
        return num === 0;
    }
    /**
     * Disable the action button unless a new locale has been selected.
     * @return Whether the "update" action button should be disabled.
     */
    shouldDisableActionButton_() {
        return this.selectedLocale_ === null ||
            this.selectedLocale_.value === this.pref.value;
    }
    /**
     * Gets the ARIA label for an item given the online/offline state and selected
     * state, which are also portrayed via icons in the HTML.
     */
    getAriaLabelForItem_(item, selected) {
        const longName = item.worksOffline ?
            this.i18n('dictationChangeLanguageDialogOfflineDescription', item.name) :
            item.name;
        const description = selected ?
            'dictationChangeLanguageDialogSelectedDescription' :
            'dictationChangeLanguageDialogNotSelectedDescription';
        return this.i18n(description, longName);
    }
    getItemClass_(selected) {
        return selected ? 'selected' : '';
    }
    getIconClass_(item, selected) {
        if (this.pref.value === item.value) {
            return 'previous';
        }
        return selected ? 'active' : 'hidden';
    }
    onSearchChanged_(e) {
        this.lowercaseQueryString_ = e.detail.toLowerCase();
    }
    onKeydown_(e) {
        // Close dialog if 'esc' is pressed and the search box is already empty.
        if (e.key === 'Escape' && !this.$.search.getValue().trim()) {
            this.$.changeDictationLocaleDialog.close();
        }
        else if (e.key !== 'PageDown' && e.key !== 'PageUp') {
            this.$.search.scrollIntoViewIfNeeded();
        }
    }
    onPaneExit_() {
        this.$.changeDictationLocaleDialog.close();
    }
    onCancelClick_() {
        this.$.changeDictationLocaleDialog.close();
    }
    onUpdateClick_() {
        if (this.selectedLocale_) {
            this.set('pref.value', this.selectedLocale_.value);
        }
        this.$.changeDictationLocaleDialog.close();
    }
}
customElements.define(ChangeDictationLocaleDialog.is, ChangeDictationLocaleDialog);
