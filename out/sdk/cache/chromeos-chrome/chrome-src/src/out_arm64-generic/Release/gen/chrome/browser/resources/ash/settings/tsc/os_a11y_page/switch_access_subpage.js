// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'switch-access-subpage' is the collapsible section containing
 * Switch Access settings.
 */
import 'chrome://resources/cr_elements/md_select.css.js';
import 'chrome://resources/cr_elements/cr_link_row/cr_link_row.js';
import '../controls/settings_slider.js';
import '../controls/settings_toggle_button.js';
import '../settings_shared.css.js';
import './switch_access_action_assignment_dialog.js';
import './switch_access_setup_guide_dialog.js';
import './switch_access_setup_guide_warning_dialog.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assertNotReached } from 'chrome://resources/js/assert.js';
import { loadTimeData } from 'chrome://resources/js/load_time_data.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { DeepLinkingMixin } from '../common/deep_linking_mixin.js';
import { RouteObserverMixin } from '../common/route_observer_mixin.js';
import { Setting } from '../mojom-webui/setting.mojom-webui.js';
import { routes } from '../router.js';
import { AUTO_SCAN_SPEED_RANGE_MS, SwitchAccessCommand, SwitchAccessDeviceType } from './switch_access_constants.js';
import { getTemplate } from './switch_access_subpage.html.js';
import { SwitchAccessSubpageBrowserProxyImpl } from './switch_access_subpage_browser_proxy.js';
/**
 * The portion of the setting name common to all Switch Access preferences.
 */
const PREFIX = 'settings.a11y.switch_access.';
const POINT_SCAN_SPEED_RANGE_DIPS_PER_SECOND = [25, 50, 75, 100, 150, 200, 300];
function ticksWithLabelsInSec(ticksInMs) {
    // Dividing by 1000 to convert milliseconds to seconds for the label.
    return ticksInMs.map(x => ({ label: `${x / 1000}`, value: x }));
}
function ticksWithCountingLabels(ticks) {
    return ticks.map((x, i) => ({ label: `${i + 1}`, value: x }));
}
const SettingsSwitchAccessSubpageElementBase = DeepLinkingMixin(PrefsMixin(RouteObserverMixin(WebUiListenerMixin(I18nMixin(PolymerElement)))));
export class SettingsSwitchAccessSubpageElement extends SettingsSwitchAccessSubpageElementBase {
    static get is() {
        return 'settings-switch-access-subpage';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            selectAssignments_: {
                type: Array,
                value: [],
                notify: true,
            },
            nextAssignments_: {
                type: Array,
                value: [],
                notify: true,
            },
            previousAssignments_: {
                type: Array,
                value: [],
                notify: true,
            },
            autoScanSpeedRangeMs_: {
                readOnly: true,
                type: Array,
                value: ticksWithLabelsInSec(AUTO_SCAN_SPEED_RANGE_MS),
            },
            pointScanSpeedRangeDipsPerSecond_: {
                readOnly: true,
                type: Array,
                value: ticksWithCountingLabels(POINT_SCAN_SPEED_RANGE_DIPS_PER_SECOND),
            },
            formatter_: {
                type: Object,
                value() {
                    // navigator.language actually returns a locale, not just a language.
                    const locale = window.navigator.language;
                    const options = { minimumFractionDigits: 1, maximumFractionDigits: 1 };
                    return new Intl.NumberFormat(locale, options);
                },
            },
            maxScanSpeedMs_: {
                readOnly: true,
                type: Number,
                value: AUTO_SCAN_SPEED_RANGE_MS[AUTO_SCAN_SPEED_RANGE_MS.length - 1],
            },
            maxScanSpeedLabelSec_: {
                readOnly: true,
                type: String,
            },
            minScanSpeedMs_: {
                readOnly: true,
                type: Number,
                value: AUTO_SCAN_SPEED_RANGE_MS[0],
            },
            minScanSpeedLabelSec_: {
                readOnly: true,
                type: String,
            },
            maxPointScanSpeed_: {
                readOnly: true,
                type: Number,
                value: POINT_SCAN_SPEED_RANGE_DIPS_PER_SECOND.length,
            },
            minPointScanSpeed_: {
                readOnly: true,
                type: Number,
                value: 1,
            },
            /**
             * Used by DeepLinkingMixin to focus this page's deep links.
             */
            supportedSettingIds: {
                type: Object,
                value: () => new Set([
                    Setting.kSwitchActionAssignment,
                    Setting.kSwitchActionAutoScan,
                    Setting.kSwitchActionAutoScanKeyboard,
                ]),
            },
            showSwitchAccessActionAssignmentDialog_: {
                type: Boolean,
                value: false,
            },
            showSwitchAccessSetupGuideDialog_: {
                type: Boolean,
                value: false,
            },
            showSwitchAccessSetupGuideWarningDialog_: {
                type: Boolean,
                value: false,
            },
            action_: {
                type: String,
                value: null,
                notify: true,
            },
        };
    }
    constructor() {
        super();
        this.maxScanSpeedLabelSec_ =
            this.scanSpeedStringInSec_(this.maxScanSpeedMs_);
        this.minScanSpeedLabelSec_ =
            this.scanSpeedStringInSec_(this.minScanSpeedMs_);
        this.switchAccessBrowserProxy_ =
            SwitchAccessSubpageBrowserProxyImpl.getInstance();
        this.focusAfterDialogClose_ = null;
    }
    ready() {
        super.ready();
        this.addWebUiListener('switch-access-assignments-changed', (value) => this.onAssignmentsChanged_(value));
        this.switchAccessBrowserProxy_.refreshAssignmentsFromPrefs();
    }
    currentRouteChanged(route) {
        // Does not apply to this page.
        if (route !== routes.MANAGE_SWITCH_ACCESS_SETTINGS) {
            return;
        }
        this.attemptDeepLink();
    }
    onSetupGuideRerunClick_() {
        this.showSwitchAccessSetupGuideWarningDialog_ = true;
    }
    onSetupGuideWarningDialogCancel_() {
        this.showSwitchAccessSetupGuideWarningDialog_ = false;
    }
    onSetupGuideWarningDialogClose_() {
        // The on_cancel is followed by on_close, so check cancel didn't happen
        // first.
        if (this.showSwitchAccessSetupGuideWarningDialog_) {
            this.openSetupGuide_();
            this.showSwitchAccessSetupGuideWarningDialog_ = false;
        }
    }
    openSetupGuide_() {
        this.showSwitchAccessSetupGuideWarningDialog_ = false;
        this.showSwitchAccessSetupGuideDialog_ = true;
    }
    onSelectAssignClick_() {
        this.action_ = SwitchAccessCommand.SELECT;
        this.showSwitchAccessActionAssignmentDialog_ = true;
        this.focusAfterDialogClose_ = this.$.selectLinkRow;
    }
    onNextAssignClick_() {
        this.action_ = SwitchAccessCommand.NEXT;
        this.showSwitchAccessActionAssignmentDialog_ = true;
        this.focusAfterDialogClose_ = this.$.nextLinkRow;
    }
    onPreviousAssignClick_() {
        this.action_ = SwitchAccessCommand.PREVIOUS;
        this.showSwitchAccessActionAssignmentDialog_ = true;
        this.focusAfterDialogClose_ = this.$.previousLinkRow;
    }
    onSwitchAccessSetupGuideDialogClose_() {
        this.showSwitchAccessSetupGuideDialog_ = false;
        this.$.setupGuideLink.focus();
    }
    onSwitchAccessActionAssignmentDialogClose_() {
        this.showSwitchAccessActionAssignmentDialog_ = false;
        this.focusAfterDialogClose_.focus();
    }
    onAssignmentsChanged_(value) {
        this.selectAssignments_ = value[SwitchAccessCommand.SELECT];
        this.nextAssignments_ = value[SwitchAccessCommand.NEXT];
        this.previousAssignments_ = value[SwitchAccessCommand.PREVIOUS];
        // Any complete assignment will have at least one switch assigned to SELECT.
        // If this method is called with no SELECT switches, then the page has just
        // loaded, and we should open the setup guide.
        if (Object.keys(this.selectAssignments_).length === 0) {
            this.openSetupGuide_();
        }
    }
    getLabelForDeviceType_(deviceType) {
        switch (deviceType) {
            case SwitchAccessDeviceType.INTERNAL:
                return this.i18nAdvanced('switchAccessInternalDeviceTypeLabel', {});
            case SwitchAccessDeviceType.USB:
                return this.i18nAdvanced('switchAccessUsbDeviceTypeLabel', {});
            case SwitchAccessDeviceType.BLUETOOTH:
                return this.i18nAdvanced('switchAccessBluetoothDeviceTypeLabel', {});
            case SwitchAccessDeviceType.UNKNOWN:
                return this.i18nAdvanced('switchAccessUnknownDeviceTypeLabel', {});
            default:
                assertNotReached('Invalid device type.');
        }
    }
    /**
     * Converts assignment object to pretty-formatted label.
     * E.g. {key: 'Escape', device: 'usb'} -> 'Escape (USB)'
     */
    getLabelForAssignment_(assignment) {
        return this.i18nAdvanced('switchAndDeviceType', {
            substitutions: [
                assignment.key,
                this.getLabelForDeviceType_(assignment.device).toString(),
            ],
        });
    }
    /**
     * @return (e.g. 'Alt (USB), Backspace, Enter, and 4 more switches')
     */
    getAssignSwitchSubLabel_(assignments) {
        const switches = assignments.map(assignment => this.getLabelForAssignment_(assignment).toString());
        switch (switches.length) {
            case 0:
                return this.i18n('assignSwitchSubLabel0Switches');
            case 1:
                return this.i18n('assignSwitchSubLabel1Switch', switches[0]);
            case 2:
                return this.i18n('assignSwitchSubLabel2Switches', ...switches);
            case 3:
                return this.i18n('assignSwitchSubLabel3Switches', ...switches);
            case 4:
                return this.i18n('assignSwitchSubLabel4Switches', ...switches.slice(0, 3));
            default:
                return this.i18n('assignSwitchSubLabel5OrMoreSwitches', ...switches.slice(0, 3), switches.length - 3);
        }
    }
    showKeyboardScanSettings_() {
        const improvedTextInputEnabled = loadTimeData.getBoolean('showExperimentalAccessibilitySwitchAccessImprovedTextInput');
        const pref = this.getPref(PREFIX + 'auto_scan.enabled');
        const autoScanEnabled = pref.value;
        return improvedTextInputEnabled && autoScanEnabled;
    }
    scanSpeedStringInSec_(scanSpeedValueMs) {
        const scanSpeedValueSec = scanSpeedValueMs / 1000;
        return this.i18n('durationInSeconds', this.formatter_.format(scanSpeedValueSec));
    }
}
customElements.define(SettingsSwitchAccessSubpageElement.is, SettingsSwitchAccessSubpageElement);
