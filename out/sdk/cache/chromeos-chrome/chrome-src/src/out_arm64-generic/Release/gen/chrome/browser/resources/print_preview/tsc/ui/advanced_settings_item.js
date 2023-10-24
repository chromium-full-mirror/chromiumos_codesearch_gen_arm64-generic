// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/cr_input/cr_input.js';
import 'chrome://resources/cr_elements/search_highlight_style.css.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import './print_preview_shared.css.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getStringForCurrentLocale } from '../print_preview_utils.js';
import { getTemplate } from './advanced_settings_item.html.js';
import { updateHighlights } from './highlight_utils.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewAdvancedSettingsItemElementBase = SettingsMixin(PolymerElement);
export class PrintPreviewAdvancedSettingsItemElement extends PrintPreviewAdvancedSettingsItemElementBase {
    static get is() {
        return 'print-preview-advanced-settings-item';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            capability: Object,
            currentValue_: String,
        };
    }
    static get observers() {
        return [
            'updateFromSettings_(capability, settings.vendorItems.value)',
        ];
    }
    updateFromSettings_() {
        const settings = this.getSetting('vendorItems').value;
        // The settings may not have a property with the id if they were populated
        // from sticky settings from a different destination or if the
        // destination's capabilities changed since the sticky settings were
        // generated.
        if (!settings.hasOwnProperty(this.capability.id)) {
            return;
        }
        const value = settings[this.capability.id];
        if (this.isCapabilityTypeSelect_()) {
            // Ignore a value that can't be selected.
            if (this.hasOptionWithValue_(value)) {
                this.currentValue_ = value;
            }
        }
        else {
            this.currentValue_ = value;
            this.shadowRoot.querySelector('cr-input').value = this.currentValue_;
        }
    }
    /**
     * @return The display name for the setting.
     */
    getDisplayName_(item) {
        let displayName = item.display_name;
        if (!displayName && item.display_name_localized) {
            displayName = getStringForCurrentLocale(item.display_name_localized);
        }
        return displayName || '';
    }
    /**
     * @return Whether the capability represented by this item is of type select.
     */
    isCapabilityTypeSelect_() {
        return this.capability.type === 'SELECT';
    }
    /**
     * @return Whether the capability represented by this item is of type
     *     checkbox.
     */
    isCapabilityTypeCheckbox_() {
        return this.capability.type === 'TYPED_VALUE' &&
            this.capability.typed_value_cap.value_type === 'BOOLEAN';
    }
    /**
     * @return Whether the capability represented by this item is of type input.
     */
    isCapabilityTypeInput_() {
        return !this.isCapabilityTypeSelect_() && !this.isCapabilityTypeCheckbox_();
    }
    /**
     * @return Whether the checkbox setting is checked.
     */
    isChecked_() {
        return this.currentValue_ === 'true';
    }
    /**
     * @param option The option for a select capability.
     * @return Whether the option is selected.
     */
    isOptionSelected_(option) {
        return this.currentValue_ === undefined ?
            !!option.is_default :
            option.value === this.currentValue_;
    }
    /**
     * @return The placeholder value for the capability's text input.
     */
    getCapabilityPlaceholder_() {
        if (this.capability.type === 'TYPED_VALUE' &&
            this.capability.typed_value_cap &&
            this.capability.typed_value_cap.default !== undefined) {
            return this.capability.typed_value_cap.default.toString() || '';
        }
        if (this.capability.type === 'RANGE' && this.capability.range_cap &&
            this.capability.range_cap.default !== undefined) {
            return this.capability.range_cap.default.toString() || '';
        }
        return '';
    }
    hasOptionWithValue_(value) {
        return !!this.capability.select_cap &&
            !!this.capability.select_cap.option &&
            this.capability.select_cap.option.some(option => option.value === value);
    }
    /**
     * @param query The current search query.
     * @return Whether the item has a match for the query.
     */
    hasMatch(query) {
        if (!query || this.getDisplayName_(this.capability).match(query)) {
            return true;
        }
        if (!this.isCapabilityTypeSelect_()) {
            return false;
        }
        for (const option of this.capability.select_cap.option) {
            if (this.getDisplayName_(option).match(query)) {
                return true;
            }
        }
        return false;
    }
    onUserInput_(e) {
        this.currentValue_ = e.target.value;
    }
    onCheckboxInput_(e) {
        this.currentValue_ =
            e.target.checked ? 'true' : 'false';
    }
    /**
     * @return The current value of the setting, or the empty string if it is not
     *     set.
     */
    getCurrentValue() {
        return this.currentValue_ || '';
    }
    /**
     * Only used in tests.
     * @param value A value to set the setting to.
     */
    setCurrentValueForTest(value) {
        this.currentValue_ = value;
    }
    /**
     * @return The highlight wrappers and that were created.
     */
    updateHighlighting(query, bubbles) {
        return updateHighlights(this, query, bubbles);
    }
}
customElements.define(PrintPreviewAdvancedSettingsItemElement.is, PrintPreviewAdvancedSettingsItemElement);
