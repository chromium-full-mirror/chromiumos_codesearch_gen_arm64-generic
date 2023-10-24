// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'personalization-options' contains several toggles related to
 * personalizations.
 */
import 'chrome://resources/cr_components/settings_prefs/prefs.js';
import '/shared/settings/controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import { PolymerElement } from '//resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { getTemplate } from './os_personalization_options.html.js';
const OsSettingsPersonalizationOptionsElementBase = PrefsMixin(PolymerElement);
export class OsSettingsPersonalizationOptionsElement extends OsSettingsPersonalizationOptionsElementBase {
    static get is() {
        return 'os-settings-personalization-options';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            showMetricsToggle_: {
                type: Boolean,
                value() {
                    return !loadTimeData.getBoolean('osDeprecateSyncMetricsToggle');
                },
            },
        };
    }
    /**
     * the autocomplete search suggestions CrToggleElement.
     */
    getSearchSuggestToggle() {
        return this.shadowRoot.querySelector('#searchSuggestToggle');
    }
    /**
     * the anonymized URL collection CrToggleElement.
     */
    getUrlCollectionToggle() {
        return this.shadowRoot.querySelector('#urlCollectionToggle');
    }
    /**
     * the Drive suggestions CrToggleElement.
     */
    getDriveSuggestToggle() {
        return this.shadowRoot.querySelector('#driveSuggestControl');
    }
}
customElements.define(OsSettingsPersonalizationOptionsElement.is, OsSettingsPersonalizationOptionsElement);
