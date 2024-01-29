// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview
 * 'settings-power' is the settings subpage for power settings.
 */
import 'chrome://resources/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-flex-layout/iron-flex-layout-classes.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { isRevampWayfindingEnabled } from '../common/load_time_booleans.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { recordSettingChange } from '../metrics_recorder.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { DevicePageBrowserProxyImpl, IdleBehavior, LidClosedBehavior } from './device_page_browser_proxy.js';
import { getTemplate } from './power.html.js';
const SettingsPowerElementBase = DeepLinkingMixin(RouteObserverMixin(PrefsMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));
export class SettingsPowerElement extends SettingsPowerElementBase {
    static get is() {
        return 'settings-power';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * ID of the selected power source, or ''.
             */
            selectedPowerSourceId_: String,
            batteryStatus_: Object,
            /**
             * Whether a low-power (USB) charger is being used.
             */
            isExternalPowerUSB_: Boolean,
            /**
             * Whether an AC charger is being used.
             */
            isExternalPowerAC_: Boolean,
            /**
             *  Whether the AC idle behavior is managed by policy.
             */
            acIdleManaged_: Boolean,
            /**
             * Whether the battery idle behavior is managed by policy.
             */
            batteryIdleManaged_: Boolean,
            /**
             * Text for label describing the lid-closed behavior.
             */
            lidClosedLabel_: String,
            /**
             * Whether the system possesses a lid.
             */
            hasLid_: Boolean,
            /**
             * List of available dual-role power sources.
             */
            powerSources_: Array,
            powerSourceLabel_: {
                type: String,
                computed: 'computePowerSourceLabel_(powerSources_, batteryStatus_.calculating)',
            },
            showPowerSourceDropdown_: {
                type: Boolean,
                computed: 'computeShowPowerSourceDropdown_(powerSources_)',
                value: false,
            },
            /**
             * The name of the dedicated charging device being used, if present.
             */
            powerSourceName_: {
                type: String,
                computed: 'computePowerSourceName_(powerSources_, isExternalPowerUSB_)',
            },
            acIdleOptions_: {
                type: Array,
                value() {
                    return [];
                },
            },
            batteryIdleOptions_: {
                type: Array,
                value() {
                    return [];
                },
            },
            shouldAcIdleSelectBeDisabled_: {
                type: Boolean,
                computed: 'hasSingleOption_(acIdleOptions_)',
            },
            shouldBatteryIdleSelectBeDisabled_: {
                type: Boolean,
                computed: 'hasSingleOption_(batteryIdleOptions_)',
            },
            adaptiveChargingEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('isAdaptiveChargingEnabled');
                },
            },
            /** Whether adaptive charging is managed by policy. */
            adaptiveChargingManaged_: Boolean,
            lidClosedPref_: {
                type: Object,
                value() {
                    return {};
                },
            },
            adaptiveChargingPref_: {
                type: Object,
                value() {
                    return {};
                },
            },
            batterySaverFeatureEnabled_: Boolean,
            batterySaverHidden_: {
                type: Boolean,
                computed: 'computeBatterySaverHidden_(batteryStatus_, batterySaverFeatureEnabled_)',
            },
            isRevampWayfindingEnabled_: {
                type: Boolean,
                value: () => {
                    return isRevampWayfindingEnabled();
                },
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kPowerIdleBehaviorWhileCharging,
                    Setting.kPowerSource,
                    Setting.kSleepWhenLaptopLidClosed,
                    Setting.kPowerIdleBehaviorWhileOnBattery,
                    Setting.kAdaptiveCharging,
                    Setting.kBatterySaver,
                ]),
            },
        };
    }
    constructor() {
        super();
        this.browserProxy_ = DevicePageBrowserProxyImpl.getInstance();
    }
    connectedCallback() {
        super.connectedCallback();
        this.addWebUiListener('battery-status-changed', this.set.bind(this, 'batteryStatus_'));
        this.addWebUiListener('power-sources-changed', this.powerSourcesChanged_.bind(this));
        this.browserProxy_.updatePowerStatus();
        this.addWebUiListener('power-management-settings-changed', this.powerManagementSettingsChanged_.bind(this));
        this.browserProxy_.requestPowerManagementSettings();
    }
    /**
     * Overridden from DeepLinkingMixin.
     */
    beforeDeepLinkAttempt(settingId) {
        if (settingId === Setting.kPowerSource && this.$.powerSource.hidden) {
            // If there is only 1 power source, there is no dropdown to focus.
            // Stop the deep link attempt in this case.
            return false;
        }
        // Continue with deep link attempt.
        return true;
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.POWER) {
            return;
        }
        this.attemptDeepLink();
    }
    /**
     * @return The primary label for the power source row.
     */
    computePowerSourceLabel_(powerSources, calculating) {
        return this.i18n(calculating ? 'calculatingPower' :
            powerSources && powerSources.length ? 'powerSourceLabel' :
                'powerSourceBattery');
    }
    /**
     * @return True if at least one power source is attached and all of
     *     them are dual-role (no dedicated chargers).
     */
    computeShowPowerSourceDropdown_(powerSources) {
        return powerSources.length > 0 &&
            powerSources.every((source) => !source.is_dedicated_charger);
    }
    /**
     * @return Description of the power source.
     */
    computePowerSourceName_(powerSources, lowPowerCharger) {
        if (lowPowerCharger) {
            return this.i18n('powerSourceLowPowerCharger');
        }
        if (powerSources.length) {
            return this.i18n('powerSourceAcAdapter');
        }
        return '';
    }
    computeBatterySaverHidden_(batteryStatus, featureEnabled) {
        if (batteryStatus === undefined) {
            return true;
        }
        return !featureEnabled || !batteryStatus.present;
    }
    onPowerSourceChange_() {
        this.browserProxy_.setPowerSource(this.$.powerSource.value);
    }
    /**
     * Used to disable Battery/AC idle select dropdowns.
     */
    hasSingleOption_(idleOptions) {
        return idleOptions.length === 1;
    }
    onAcIdleSelectChange_(event) {
        const behavior = parseInt(event.target.value, 10);
        this.browserProxy_.setIdleBehavior(behavior, /* whenOnAc */ true);
        recordSettingChange();
    }
    onBatteryIdleSelectChange_(event) {
        const behavior = parseInt(event.target.value, 10);
        this.browserProxy_.setIdleBehavior(behavior, /* whenOnAc */ false);
        recordSettingChange();
    }
    onLidClosedToggleChange_() {
        // Other behaviors are only displayed when the setting is controlled, in
        // which case the toggle can't be changed by the user.
        this.browserProxy_.setLidClosedBehavior(this.$.lidClosedToggle.checked ? LidClosedBehavior.SUSPEND :
            LidClosedBehavior.DO_NOTHING);
        recordSettingChange();
    }
    onAdaptiveChargingToggleChange_() {
        const enabled = this.$.adaptiveChargingToggle.checked;
        this.browserProxy_.setAdaptiveCharging(enabled);
        recordSettingChange(Setting.kAdaptiveCharging, { boolValue: enabled });
    }
    /**
     * @param sources External power sources.
     * @param selectedId The ID of the currently used power source.
     * @param isExternalPowerUSB Whether the currently used power source is a
     *     low-powered USB charger.
     * @param isExternalPowerAC Whether the currently used power source is an AC
     *     charged connected to mains power.
     */
    powerSourcesChanged_(sources, selectedId, isExternalPowerUSB, isExternalPowerAC) {
        this.powerSources_ = sources;
        this.selectedPowerSourceId_ = selectedId;
        this.isExternalPowerUSB_ = isExternalPowerUSB;
        this.isExternalPowerAC_ = isExternalPowerAC;
    }
    /**
     * @param behavior Current behavior.
     * @param isControlled Whether the underlying pref is controlled.
     */
    updateLidClosedLabelAndPref_(behavior, isControlled) {
        const pref = {
            key: '',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            // Most behaviors get a dedicated label and appear as checked.
            value: true,
        };
        switch (behavior) {
            case LidClosedBehavior.SUSPEND:
            case LidClosedBehavior.DO_NOTHING:
                // "Suspend" and "do nothing" share the "sleep" label and communicate
                // their state via the toggle state.
                this.lidClosedLabel_ = loadTimeData.getString('powerLidSleepLabel');
                pref.value = behavior === LidClosedBehavior.SUSPEND;
                break;
            case LidClosedBehavior.STOP_SESSION:
                this.lidClosedLabel_ = loadTimeData.getString('powerLidSignOutLabel');
                break;
            case LidClosedBehavior.SHUT_DOWN:
                this.lidClosedLabel_ = loadTimeData.getString('powerLidShutDownLabel');
                break;
        }
        if (isControlled) {
            pref.enforcement = chrome.settingsPrivate.Enforcement.ENFORCED;
            pref.controlledBy = chrome.settingsPrivate.ControlledBy.USER_POLICY;
        }
        this.lidClosedPref_ = pref;
    }
    /**
     * @return Idle option object that maps to idleBehavior.
     */
    getIdleOption_(idleBehavior, currIdleBehavior) {
        const selected = idleBehavior === currIdleBehavior;
        switch (idleBehavior) {
            case IdleBehavior.DISPLAY_OFF_SLEEP:
                return {
                    value: idleBehavior,
                    name: loadTimeData.getString('powerIdleDisplayOffSleep'),
                    selected: selected,
                };
            case IdleBehavior.DISPLAY_OFF:
                return {
                    value: idleBehavior,
                    name: loadTimeData.getString('powerIdleDisplayOff'),
                    selected: selected,
                };
            case IdleBehavior.DISPLAY_ON:
                return {
                    value: idleBehavior,
                    name: loadTimeData.getString('powerIdleDisplayOn'),
                    selected: selected,
                };
            case IdleBehavior.SHUT_DOWN:
                return {
                    value: idleBehavior,
                    name: loadTimeData.getString('powerIdleDisplayShutDown'),
                    selected: selected,
                };
            case IdleBehavior.STOP_SESSION:
                return {
                    value: idleBehavior,
                    name: loadTimeData.getString('powerIdleDisplayStopSession'),
                    selected: selected,
                };
            default:
                assertNotReached('Unknown IdleBehavior type');
        }
    }
    updateIdleOptions_(acIdleBehaviors, batteryIdleBehaviors, currAcIdleBehavior, currBatteryIdleBehavior) {
        this.acIdleOptions_ = acIdleBehaviors.map((idleBehavior) => {
            return this.getIdleOption_(idleBehavior, currAcIdleBehavior);
        });
        this.batteryIdleOptions_ = batteryIdleBehaviors.map((idleBehavior) => {
            return this.getIdleOption_(idleBehavior, currBatteryIdleBehavior);
        });
    }
    /**
     * @param powerManagementSettings Current power management settings.
     */
    powerManagementSettingsChanged_(powerManagementSettings) {
        this.updateIdleOptions_(powerManagementSettings.possibleAcIdleBehaviors || [], powerManagementSettings.possibleBatteryIdleBehaviors || [], powerManagementSettings.currentAcIdleBehavior, powerManagementSettings.currentBatteryIdleBehavior);
        this.acIdleManaged_ = powerManagementSettings.acIdleManaged;
        this.batteryIdleManaged_ = powerManagementSettings.batteryIdleManaged;
        this.hasLid_ = powerManagementSettings.hasLid;
        this.updateLidClosedLabelAndPref_(powerManagementSettings.lidClosedBehavior, powerManagementSettings.lidClosedControlled);
        this.adaptiveChargingManaged_ =
            powerManagementSettings.adaptiveChargingManaged;
        // Use an atomic assign to trigger UI change.
        const adaptiveChargingPref = {
            key: '',
            type: chrome.settingsPrivate.PrefType.BOOLEAN,
            value: powerManagementSettings.adaptiveCharging,
        };
        if (this.adaptiveChargingManaged_) {
            adaptiveChargingPref.enforcement =
                chrome.settingsPrivate.Enforcement.ENFORCED;
            adaptiveChargingPref.controlledBy =
                chrome.settingsPrivate.ControlledBy.DEVICE_POLICY;
        }
        this.adaptiveChargingPref_ = adaptiveChargingPref;
        this.batterySaverFeatureEnabled_ =
            powerManagementSettings.batterySaverFeatureEnabled;
    }
    /**
     * Returns the row class for the given settings row
     * @param batteryPresent if battery is present
     * @param element the name of the row being queried
     * @return the class for the given row
     */
    getClassForRow_(batteryPresent, element) {
        const classes = ['cr-row'];
        switch (element) {
            case 'batterySaver':
                if (!batteryPresent) {
                    classes.push('first');
                }
                break;
            case 'adaptiveCharging':
                if (!batteryPresent && this.batterySaverHidden_) {
                    classes.push('first');
                }
                break;
            case 'idle':
                if (!batteryPresent && this.batterySaverHidden_ &&
                    !this.adaptiveChargingEnabled_) {
                    classes.push('first');
                }
                break;
            case 'acIdle':
                if (!batteryPresent && this.batterySaverHidden_ &&
                    !this.adaptiveChargingEnabled_) {
                    classes.push('first');
                }
                if (this.isRevampWayfindingEnabled_) {
                    classes.push('dropdown-row');
                }
                else {
                    classes.push('indented');
                }
                break;
            case 'batteryIdle':
                if (this.isRevampWayfindingEnabled_) {
                    classes.push('dropdown-row');
                }
                else {
                    classes.push('indented');
                }
                break;
            case 'lidClosed':
                if (this.isRevampWayfindingEnabled_) {
                    classes.push('dropdown-row');
                }
                else {
                    classes.push('first');
                }
                break;
        }
        return classes.join(' ');
    }
    isEqual_(lhs, rhs) {
        return lhs === rhs;
    }
}
customElements.define(SettingsPowerElement.is, SettingsPowerElement);
