// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '../controls/settings_toggle_button.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { getTemplate } from './ai_page.html.js';
// These values must stay in sync with
// optimization_guide::prefs::FeatureOptInState in
// components/optimization_guide/core/optimization_guide_prefs.h.
export var FeatureOptInState;
(function (FeatureOptInState) {
    FeatureOptInState[FeatureOptInState["NOT_INITIALIZED"] = 0] = "NOT_INITIALIZED";
    FeatureOptInState[FeatureOptInState["ENABLED"] = 1] = "ENABLED";
    FeatureOptInState[FeatureOptInState["DISABLED"] = 2] = "DISABLED";
})(FeatureOptInState || (FeatureOptInState = {}));
// Exporting pref names so that they can be referenced by tests.
export var SettingsAiPageFeaturePrefName;
(function (SettingsAiPageFeaturePrefName) {
    SettingsAiPageFeaturePrefName["MAIN"] = "optimization_guide.model_execution_main_toggle_setting_state";
    SettingsAiPageFeaturePrefName["COMPOSE"] = "optimization_guide.compose_setting_state";
    SettingsAiPageFeaturePrefName["TAB_ORGANIZATION"] = "optimization_guide.tab_organization_setting_state";
    SettingsAiPageFeaturePrefName["WALLPAPER_SEARCH"] = "optimization_guide.wallpaper_search_setting_state";
})(SettingsAiPageFeaturePrefName || (SettingsAiPageFeaturePrefName = {}));
const SettingsAiPageElementBase = PrefsMixin(PolymerElement);
export class SettingsAiPageElement extends SettingsAiPageElementBase {
    static get is() {
        return 'settings-ai-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            prefs: {
                type: Object,
                notify: true,
            },
            showComposeControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showComposeControl'),
            },
            showTabOrganizationControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showTabOrganizationControl'),
            },
            showWallpaperSearchControl_: {
                type: Boolean,
                value: () => loadTimeData.getBoolean('showWallpaperSearchControl'),
            },
            featureOptInStateEnum_: {
                type: Object,
                value: FeatureOptInState,
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [FeatureOptInState.DISABLED, FeatureOptInState.NOT_INITIALIZED],
            },
        };
    }
    isExpanded_() {
        return this.getPref(SettingsAiPageFeaturePrefName.MAIN).value ===
            FeatureOptInState.ENABLED;
    }
    getTabOrganizationHrCssClass_() {
        return this.showComposeControl_ ? 'hr' : '';
    }
    getWallpaperSearchHrCssClass_() {
        return this.showComposeControl_ || this.showTabOrganizationControl_ ? 'hr' :
            '';
    }
}
customElements.define(SettingsAiPageElement.is, SettingsAiPageElement);
