// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-collapse/iron-collapse.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/controlled_radio_button.js';
import '../controls/settings_radio_group.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { OpenWindowProxyImpl } from 'chrome://resources/js/open_window_proxy.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { getTemplate } from './battery_page.html.js';
import { BatterySaverModeState, PerformanceMetricsProxyImpl } from './performance_metrics_proxy.js';
export const BATTERY_SAVER_MODE_PREF = 'performance_tuning.battery_saver_mode.state';
const SettingsBatteryPageElementBase = PrefsMixin(PolymerElement);
export class SettingsBatteryPageElement extends SettingsBatteryPageElementBase {
    constructor() {
        super(...arguments);
        this.metricsProxy_ = PerformanceMetricsProxyImpl.getInstance();
        // 
    }
    static get is() {
        return 'settings-battery-page';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            batterySaverModeStateEnum_: {
                readOnly: true,
                type: Object,
                value: BatterySaverModeState,
            },
            isBatterySaverModeManagedByOS_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isBatterySaverModeManagedByOS');
                },
            },
            numericUncheckedValues_: {
                type: Array,
                value: () => [BatterySaverModeState.DISABLED],
            },
        };
    }
    isBatterySaverModeEnabled_(value) {
        return value !== BatterySaverModeState.DISABLED;
    }
    onChange_() {
        this.metricsProxy_.recordBatterySaverModeChanged(this.getPref(BATTERY_SAVER_MODE_PREF).value);
    }
    // 
    openOsPowerSettings_() {
        OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString('osPowerSettingsUrl'));
    }
}
customElements.define(SettingsBatteryPageElement.is, SettingsBatteryPageElement);
