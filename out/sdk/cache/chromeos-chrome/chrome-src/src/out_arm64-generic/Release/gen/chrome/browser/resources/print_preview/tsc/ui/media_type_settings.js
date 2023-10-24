// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './print_preview_shared.css.js';
import './settings_section.js';
import '../strings.m.js';
import './settings_select.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './media_type_settings.html.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewMediaTypeSettingsElementBase = SettingsMixin(PolymerElement);
export class PrintPreviewMediaTypeSettingsElement extends PrintPreviewMediaTypeSettingsElementBase {
    static get is() {
        return 'print-preview-media-type-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            capability: Object,
            disabled: Boolean,
        };
    }
    static get observers() {
        return [
            'onMediaTypeSettingChange_(settings.mediaType.*, capability.option)',
        ];
    }
    onMediaTypeSettingChange_() {
        if (!this.capability) {
            return;
        }
        const valueToSet = JSON.stringify(this.getSettingValue('mediaType'));
        for (const option of this.capability.option) {
            if (JSON.stringify(option) === valueToSet) {
                this.shadowRoot.querySelector('print-preview-settings-select')
                    .selectValue(valueToSet);
                return;
            }
        }
        const defaultOption = this.capability.option.find(o => !!o.is_default) ||
            this.capability.option[0];
        this.setSetting('mediaType', defaultOption);
    }
}
customElements.define(PrintPreviewMediaTypeSettingsElement.is, PrintPreviewMediaTypeSettingsElement);
