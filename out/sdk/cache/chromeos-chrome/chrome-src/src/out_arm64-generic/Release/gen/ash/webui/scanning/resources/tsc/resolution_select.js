// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import './scan_settings_section.js';
import './strings.m.js';
import { assert } from 'chrome://resources/ash/common/assert.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getTemplate } from './resolution_select.html.js';
import { SelectMixin } from './select_mixin.js';
const DEFAULT_RESOLUTION = 300;
/**
 * @fileoverview
 * 'resolution-select' displays the available scan resolutions in a dropdown.
 */
const ResolutionSelectElementBase = SelectMixin(I18nMixin(PolymerElement));
class ResolutionSelectElement extends ResolutionSelectElementBase {
    static get is() {
        return 'resolution-select';
    }
    static get template() {
        return getTemplate();
    }
    getOptionAtIndex(index) {
        assert(index < this.options.length);
        return this.options[index].toString();
    }
    getResolutionString(resolution) {
        return this.i18n('resolutionOptionText', resolution);
    }
    sortOptions() {
        // Sort the resolutions in descending order.
        this.options.sort(function (a, b) {
            return b - a;
        });
    }
    isDefaultOption(option) {
        return option === DEFAULT_RESOLUTION;
    }
}
customElements.define(ResolutionSelectElement.is, ResolutionSelectElement);
