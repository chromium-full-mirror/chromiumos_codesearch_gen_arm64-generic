// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/md_select.css.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { MarginsType } from '../data/margins.js';
import { State } from '../data/state.js';
import { getTemplate } from './margins_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewMarginsSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
export class PrintPreviewMarginsSettingsElement extends PrintPreviewMarginsSettingsElementBase {
    constructor() {
        super(...arguments);
        this.loaded_ = false;
    }
    static get is() {
        return 'print-preview-margins-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                observer: 'updateMarginsDisabled_',
            },
            state: {
                type: Number,
                observer: 'onStateChange_',
            },
            marginsDisabled_: Boolean,
            /** Mirroring the enum so that it can be used from HTML bindings. */
            marginsTypeEnum_: {
                type: Object,
                value: MarginsType,
            },
        };
    }
    static get observers() {
        return [
            'onMarginsSettingChange_(settings.margins.value)',
            'onMediaSizeOrLayoutChange_(' +
                'settings.mediaSize.value, settings.layout.value)',
            'onPagesPerSheetSettingChange_(settings.pagesPerSheet.value)',
        ];
    }
    onStateChange_() {
        if (this.state === State.READY) {
            this.loaded_ = true;
        }
    }
    onMediaSizeOrLayoutChange_() {
        if (this.loaded_ &&
            this.getSetting('margins').value === MarginsType.CUSTOM) {
            this.setSetting('margins', MarginsType.DEFAULT);
        }
    }
    /**
     * @param newValue The new value of the pages per sheet setting.
     */
    onPagesPerSheetSettingChange_(newValue) {
        if (newValue > 1) {
            this.setSetting('margins', MarginsType.DEFAULT);
        }
        this.updateMarginsDisabled_();
    }
    /** @param newValue The new value of the margins setting. */
    onMarginsSettingChange_(newValue) {
        this.selectedValue = newValue.toString();
    }
    onProcessSelectChange(value) {
        this.setSetting('margins', parseInt(value, 10));
    }
    updateMarginsDisabled_() {
        this.marginsDisabled_ =
            this.getSettingValue('pagesPerSheet') > 1 || this.disabled;
    }
}
customElements.define(PrintPreviewMarginsSettingsElement.is, PrintPreviewMarginsSettingsElement);
