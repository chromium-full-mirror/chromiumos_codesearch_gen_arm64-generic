// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_hidden_style.css.js';
import 'chrome://resources/cr_elements/cr_checkbox/cr_checkbox.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/polymer/v3_0/iron-iconset-svg/iron-iconset-svg.js';
import 'chrome://resources/polymer/v3_0/iron-meta/iron-meta.js';
import './icons.html.js';
import './print_preview_shared.css.js';
import './settings_section.js';
import { IronMeta } from 'chrome://resources/polymer/v3_0/iron-meta/iron-meta.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DuplexMode } from '../data/model.js';
import { getSelectDropdownBackground } from '../print_preview_utils.js';
import { getTemplate } from './duplex_settings.html.js';
import { SelectMixin } from './select_mixin.js';
import { SettingsMixin } from './settings_mixin.js';
const PrintPreviewDuplexSettingsElementBase = SettingsMixin(SelectMixin(PolymerElement));
export class PrintPreviewDuplexSettingsElement extends PrintPreviewDuplexSettingsElementBase {
    static get is() {
        return 'print-preview-duplex-settings';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            dark: Boolean,
            disabled: Boolean,
            /**
             * Mirroring the enum so that it can be used from HTML bindings.
             */
            duplexValueEnum_: {
                type: Object,
                value: DuplexMode,
            },
        };
    }
    static get observers() {
        return [
            'onDuplexSettingChange_(settings.duplex.*)',
            'onDuplexTypeChange_(settings.duplexShortEdge.*)',
        ];
    }
    constructor() {
        super();
        this.meta_ = new IronMeta({ type: 'iconset', value: undefined });
    }
    onDuplexSettingChange_() {
        this.$.duplex.checked = this.getSettingValue('duplex');
    }
    onDuplexTypeChange_() {
        this.selectedValue = this.getSettingValue('duplexShortEdge') ?
            DuplexMode.SHORT_EDGE.toString() :
            DuplexMode.LONG_EDGE.toString();
    }
    onCheckboxChange_() {
        this.setSetting('duplex', this.$.duplex.checked);
    }
    onProcessSelectChange(value) {
        this.setSetting('duplexShortEdge', value === DuplexMode.SHORT_EDGE.toString());
    }
    /**
     * @return Whether to expand the collapse for the dropdown.
     */
    getOpenCollapse_() {
        return this.getSetting('duplexShortEdge').available &&
            this.getSettingValue('duplex');
    }
    /**
     * @param managed Whether the setting is managed by policy.
     * @param disabled value of this.disabled
     * @return Whether the controls should be disabled.
     */
    getDisabled_(managed, disabled) {
        return managed || disabled;
    }
    /**
     * @return An inline svg corresponding to |icon| and the image for
     *     the dropdown arrow.
     */
    getBackgroundImages_() {
        const icon = this.getSettingValue('duplexShortEdge') ? 'short-edge' : 'long-edge';
        const iconset = this.meta_.byKey('print-preview');
        return getSelectDropdownBackground(iconset, icon, this);
    }
}
customElements.define(PrintPreviewDuplexSettingsElement.is, PrintPreviewDuplexSettingsElement);
