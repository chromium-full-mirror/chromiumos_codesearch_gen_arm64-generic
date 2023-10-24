// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/md_select.css.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './color_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewColorSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
export class PrintPreviewColorSettingsElement extends PrintPreviewColorSettingsElementBase {
    static get is() {
        return 'print-preview-color-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: Boolean,
            disabled_: {
                type: Boolean,
                computed: 'computeDisabled_(disabled, settings.color.setByPolicy)',
            },
        };
    }
    static get observers() {
        return ['onColorSettingChange_(settings.color.value)'];
    }
    onColorSettingChange_(newValue) {
        this.selectedValue = newValue ? 'color' : 'bw';
    }
    /**
     * @param disabled Whether color selection is disabled.
     * @param managed Whether color selection is managed.
     * @return Whether drop-down should be disabled.
     */
    computeDisabled_(disabled, managed) {
        return disabled || managed;
    }
    /** @param value The new select value. */
    onProcessSelectChange(value) {
        this.setSetting('color', value === 'color');
    }
}
customElements.define(PrintPreviewColorSettingsElement.is, PrintPreviewColorSettingsElement);
