// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import '../strings.m.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './other_options_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewOtherOptionsSettingsElementBase = SettingsMixin(I18nMixin(PolymerElement));
export class PrintPreviewOtherOptionsSettingsElement extends PrintPreviewOtherOptionsSettingsElementBase {
    constructor() {
        super(...arguments);
        this.timeouts_ = new Map();
        this.previousValues_ = new Map();
    }
    static get is() {
        return 'print-preview-other-options-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: Boolean,
            options_: {
                type: Array,
                value() {
                    return [
                        { name: 'headerFooter', label: 'optionHeaderFooter' },
                        { name: 'cssBackground', label: 'optionBackgroundColorsAndImages' },
                        { name: 'rasterize', label: 'optionRasterize' },
                        { name: 'selectionOnly', label: 'optionSelectionOnly' },
                    ];
                },
            },
            /**
             * The index of the checkbox that should display the "Options" title.
             */
            firstIndex_: {
                type: Number,
                value: 0,
            },
        };
    }
    static get observers() {
        return [
            'onHeaderFooterSettingChange_(settings.headerFooter.*)',
            'onCssBackgroundSettingChange_(settings.cssBackground.*)',
            'onRasterizeSettingChange_(settings.rasterize.*)',
            'onSelectionOnlySettingChange_(settings.selectionOnly.*)',
        ];
    }
    /**
     * @param settingName The name of the setting to updated.
     * @param newValue The new value for the setting.
     */
    updateSettingWithTimeout_(settingName, newValue) {
        const timeout = this.timeouts_.get(settingName);
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        this.timeouts_.set(settingName, setTimeout(() => {
            this.timeouts_.delete(settingName);
            if (this.previousValues_.get(settingName) === newValue) {
                return;
            }
            this.previousValues_.set(settingName, newValue);
            this.setSetting(settingName, newValue);
            // For tests only
            this.dispatchEvent(new CustomEvent('update-checkbox-setting', { bubbles: true, composed: true, detail: settingName }));
        }, 200));
    }
    /**
     * @param index The index of the option to update.
     */
    updateOptionFromSetting_(index) {
        const setting = this.getSetting(this.options_[index].name);
        this.set(`options_.${index}.available`, setting.available);
        this.set(`options_.${index}.value`, setting.value);
        this.set(`options_.${index}.managed`, setting.setByPolicy);
        // Update first index
        const availableOptions = this.options_.filter(option => !!option.available);
        if (availableOptions.length > 0) {
            this.firstIndex_ = this.options_.indexOf(availableOptions[0]);
        }
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @param disabled value of this.disabled
     * @return Whether the checkbox should be disabled.
     */
    getDisabled_(managed, disabled) {
        return managed || disabled;
    }
    onHeaderFooterSettingChange_() {
        this.updateOptionFromSetting_(0);
    }
    onCssBackgroundSettingChange_() {
        this.updateOptionFromSetting_(1);
    }
    onRasterizeSettingChange_() {
        this.updateOptionFromSetting_(2);
    }
    onSelectionOnlySettingChange_() {
        this.updateOptionFromSetting_(3);
    }
    /**
     * @param e Contains the checkbox item that was checked.
     */
    onChange_(e) {
        const name = e.model.item.name;
        this.updateSettingWithTimeout_(name, this.shadowRoot.querySelector(`#${name}`).checked);
    }
    /**
     * @param index The index of the settings section.
     * @return Class string containing 'first-visible' if the settings
     *     section is the first visible.
     */
    getClass_(index) {
        return index === this.firstIndex_ ? 'first-visible' : '';
    }
}
customElements.define(PrintPreviewOtherOptionsSettingsElement.is, PrintPreviewOtherOptionsSettingsElement);
