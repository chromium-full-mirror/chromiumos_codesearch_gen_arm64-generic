// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import '/shared/settings/controls/controlled_radio_button.js';
import '/shared/settings/controls/settings_dropdown_menu.js';
import '/shared/settings/controls/settings_radio_group.js';
import '/shared/settings/controls/settings_toggle_button.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import '../settings_shared.css.js';
import './tab_discard_exception_list.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getDiscardTimerOptions } from './discard_timer_options.js';
import { HighEfficiencyModeState, PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
import { getTemplate } from './performance_page.html.js';
export const HIGH_EFFICIENCY_MODE_PREF = 'performance_tuning.high_efficiency_mode.state';
const SettingsPerformancePageElementBase = PrefsMixin(PolymerElement);
export class SettingsPerformancePageElement extends SettingsPerformancePageElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-performance-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * List of options for the discard timer drop-down menu.
             */
            discardTimerOptions_: {
                readOnly: true,
                type: Array,
                value: getDiscardTimerOptions,
            },
            isHighEfficiencyMultistateModeEnabled_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isHighEfficiencyMultistateModeEnabled');
                },
            },
            showHighEfficiencyHeuristicModeRecommendedBadge_: {
                readOnly: true,
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('highEfficiencyShowRecommendedBadge');
                },
            },
            highEfficiencyModeStateEnum_: {
                readOnly: true,
                type: Object,
                value: HighEfficiencyModeState,
            },
        };
    }
    onChange_() {
        this.metricsProxy_.recordHighEfficiencyModeChanged(this.getPref(HIGH_EFFICIENCY_MODE_PREF).value);
    }
    toggleButtonCheckedValue_() {
        return this.isHighEfficiencyMultistateModeEnabled_ ?
            HighEfficiencyModeState.ENABLED :
            HighEfficiencyModeState.ENABLED_ON_TIMER;
    }
    isHighEfficiencyModeEnabled_(value) {
        return value !== HighEfficiencyModeState.DISABLED;
    }
    isHighEfficiencyModeEnabledOnTimer_(value) {
        return value === HighEfficiencyModeState.ENABLED_ON_TIMER;
    }
    onDropdownClick_(e) {
        e.stopPropagation();
    }
}
customElements.define(SettingsPerformancePageElement.is, SettingsPerformancePageElement);
