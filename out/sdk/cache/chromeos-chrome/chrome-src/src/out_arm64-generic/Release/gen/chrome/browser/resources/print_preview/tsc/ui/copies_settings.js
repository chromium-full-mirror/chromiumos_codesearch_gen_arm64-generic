// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import './number_settings_section.js';
import './print_preview_shared.css.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './copies_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
/**
 * Maximum number of copies supported by the printer if not explicitly
 * specified.
 */
export const DEFAULT_MAX_COPIES = 999;
const PrintPreviewCopiesSettingsElementBase = SettingsMixin(PolymerElement);
export class PrintPreviewCopiesSettingsElement extends PrintPreviewCopiesSettingsElementBase {
    static get is() {
        return 'print-preview-copies-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            capability: Object,
            copiesMax_: {
                type: Number,
                computed: 'computeCopiesMax_(capability)',
            },
            currentValue_: {
                type: String,
                observer: 'onInputChanged_',
            },
            inputValid_: Boolean,
            disabled: Boolean,
        };
    }
    static get observers() {
        return ['onSettingsChanged_(settings.copies.value, settings.collate.*)'];
    }
    /**
     * @return The maximum number of copies this printer supports.
     */
    computeCopiesMax_() {
        return (this.capability && this.capability.max) ? this.capability.max :
            DEFAULT_MAX_COPIES;
    }
    /**
     * @return The message to show as hint.
     */
    getHintMessage_() {
        return loadTimeData.getStringF('copiesInstruction', this.copiesMax_);
    }
    /**
     * Updates the input string when the setting has been initialized.
     */
    onSettingsChanged_() {
        const copies = this.getSetting('copies');
        if (this.inputValid_) {
            this.currentValue_ = copies.value.toString();
        }
        const collate = this.getSetting('collate');
        this.$.collate.checked = collate.value;
    }
    /**
     * Updates model.copies and model.copiesInvalid based on the validity
     * and current value of the copies input.
     */
    onInputChanged_() {
        if (this.currentValue_ !== '' &&
            this.currentValue_ !== this.getSettingValue('copies').toString()) {
            this.setSetting('copies', this.inputValid_ ? parseInt(this.currentValue_, 10) : 1);
        }
        this.setSettingValid('copies', this.inputValid_);
    }
    /**
     * @return Whether collate checkbox should be hidden.
     */
    collateHidden_() {
        return !this.getSetting('collate').available || !this.inputValid_ ||
            this.currentValue_ === '' || parseInt(this.currentValue_, 10) === 1;
    }
    onCollateChange_() {
        this.setSetting('collate', this.$.collate.checked);
    }
}
customElements.define(PrintPreviewCopiesSettingsElement.is, PrintPreviewCopiesSettingsElement);
