// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview This dialog walks a user through the flow of setting up Switch
 * Access.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_shared_style.css.js';
import '../controls/settings_slider.js';
import '../os_settings_icons.html.js';
import './switch_access_action_assignment_pane.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { castExists } from '../assert_extras.js';
import { Router, routes } from '../router.js';
import { actionToPref, AssignmentContext, AUTO_SCAN_ENABLED_PREF, AUTO_SCAN_KEYBOARD_SPEED_PREF, AUTO_SCAN_SPEED_PREF, AUTO_SCAN_SPEED_RANGE_MS, DEFAULT_AUTO_SCAN_SPEED_MS, SwitchAccessCommand } from './switch_access_constants.js';
import { getTemplate } from './switch_access_setup_guide_dialog.html.js';
import { SwitchAccessSubpageBrowserProxyImpl } from './switch_access_subpage_browser_proxy.js';
/**
 * Elements that can be hidden or shown for each setup page.
 * The string value should match the element ID in the HTML.
 */
var SetupElement;
(function (SetupElement) {
    SetupElement["BLUETOOTH_BUTTON"] = "bluetooth";
    SetupElement["DONE_BUTTON"] = "done";
    SetupElement["NEXT_BUTTON"] = "next";
    SetupElement["PREVIOUS_BUTTON"] = "previous";
    SetupElement["START_OVER_BUTTON"] = "startOver";
    SetupElement["INTRO_CONTENT"] = "intro";
    SetupElement["ASSIGN_SWITCH_CONTENT"] = "assignSwitch";
    SetupElement["AUTO_SCAN_ENABLED_CONTENT"] = "autoScanEnabled";
    SetupElement["CHOOSE_SWITCH_COUNT_CONTENT"] = "chooseSwitchCount";
    SetupElement["AUTO_SCAN_SPEED_CONTENT"] = "autoScanSpeed";
    SetupElement["CLOSING_CONTENT"] = "closing";
})(SetupElement || (SetupElement = {}));
/**
 * The IDs of each page in the setup flow.
 */
var SetupPageId;
(function (SetupPageId) {
    SetupPageId[SetupPageId["INTRO"] = 0] = "INTRO";
    SetupPageId[SetupPageId["ASSIGN_SELECT"] = 1] = "ASSIGN_SELECT";
    SetupPageId[SetupPageId["AUTO_SCAN_ENABLED"] = 2] = "AUTO_SCAN_ENABLED";
    SetupPageId[SetupPageId["CHOOSE_SWITCH_COUNT"] = 3] = "CHOOSE_SWITCH_COUNT";
    SetupPageId[SetupPageId["AUTO_SCAN_SPEED"] = 4] = "AUTO_SCAN_SPEED";
    SetupPageId[SetupPageId["ASSIGN_NEXT"] = 5] = "ASSIGN_NEXT";
    SetupPageId[SetupPageId["ASSIGN_PREVIOUS"] = 6] = "ASSIGN_PREVIOUS";
    SetupPageId[SetupPageId["TIC_TAC_TOE"] = 7] = "TIC_TAC_TOE";
    SetupPageId[SetupPageId["CLOSING"] = 8] = "CLOSING";
})(SetupPageId || (SetupPageId = {}));
/**
 * A dictionary of all of the dialog pages.
 */
const SetupPageList = {
    [SetupPageId.INTRO]: {
        titleId: 'switchAccessSetupIntroTitle',
        visibleElements: [
            SetupElement.BLUETOOTH_BUTTON,
            SetupElement.NEXT_BUTTON,
            SetupElement.INTRO_CONTENT,
        ],
    },
    [SetupPageId.ASSIGN_SELECT]: {
        titleId: 'switchAccessSetupAssignSelectTitle',
        visibleElements: [SetupElement.ASSIGN_SWITCH_CONTENT],
    },
    [SetupPageId.AUTO_SCAN_ENABLED]: {
        titleId: 'switchAccessSetupAutoScanEnabledTitle',
        visibleElements: [
            SetupElement.NEXT_BUTTON,
            SetupElement.PREVIOUS_BUTTON,
            SetupElement.AUTO_SCAN_ENABLED_CONTENT,
        ],
    },
    [SetupPageId.CHOOSE_SWITCH_COUNT]: {
        titleId: 'switchAccessSetupChooseSwitchCountTitle',
        visibleElements: [
            SetupElement.NEXT_BUTTON,
            SetupElement.PREVIOUS_BUTTON,
            SetupElement.CHOOSE_SWITCH_COUNT_CONTENT,
        ],
    },
    [SetupPageId.AUTO_SCAN_SPEED]: {
        titleId: 'switchAccessSetupAutoScanSpeedTitle',
        visibleElements: [
            SetupElement.NEXT_BUTTON,
            SetupElement.PREVIOUS_BUTTON,
            SetupElement.AUTO_SCAN_SPEED_CONTENT,
        ],
    },
    [SetupPageId.ASSIGN_NEXT]: {
        titleId: 'switchAccessSetupAssignNextTitle',
        visibleElements: [SetupElement.PREVIOUS_BUTTON, SetupElement.ASSIGN_SWITCH_CONTENT],
    },
    [SetupPageId.ASSIGN_PREVIOUS]: {
        titleId: 'switchAccessSetupAssignPreviousTitle',
        visibleElements: [SetupElement.PREVIOUS_BUTTON, SetupElement.ASSIGN_SWITCH_CONTENT],
    },
    [SetupPageId.CLOSING]: {
        titleId: 'switchAccessSetupClosingTitle',
        visibleElements: [
            SetupElement.DONE_BUTTON,
            SetupElement.START_OVER_BUTTON,
            SetupElement.CLOSING_CONTENT,
        ],
    },
};
const SettingsSwitchAccessSetupGuideDialogElementBase = PrefsMixin(I18nMixin(PolymerElement));
export class SettingsSwitchAccessSetupGuideDialogElement extends SettingsSwitchAccessSetupGuideDialogElementBase {
    static get is() {
        return 'settings-switch-access-setup-guide-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            autoScanSpeedRangeMs_: {
                type: Array,
                value: [],
            },
            currentPageId_: {
                type: Number,
                value: SetupPageId.INTRO,
            },
            /**
             * A number formatter, to display values with exactly 1 digit after the
             * decimal (that has been internationalized properly).
             */
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
            switchCount_: {
                type: Number,
                value: 1,
            },
            switchToAssign_: {
                type: String,
                value: null,
            },
        };
    }
    static get observers() {
        return [
            `onSwitchAssignmentMaybeChanged_(
          prefs.settings.a11y.switch_access.next.*,
          prefs.settings.a11y.switch_access.previous.*,
          prefs.settings.a11y.switch_access.select.*)`,
        ];
    }
    constructor() {
        super();
        this.maxScanSpeedLabelSec_ =
            this.scanSpeedStringInSec_(this.maxScanSpeedMs_);
        this.minScanSpeedLabelSec_ =
            this.scanSpeedStringInSec_(this.minScanSpeedMs_);
        this.autoScanSpeedRangeMs_ =
            this.ticksWithLabelsInSec_(AUTO_SCAN_SPEED_RANGE_MS);
    }
    connectedCallback() {
        super.connectedCallback();
        SwitchAccessSubpageBrowserProxyImpl.getInstance()
            .notifySwitchAccessSetupGuideAttached();
    }
    ready() {
        super.ready();
        this.addEventListener('exit-pane', this.onSwitchAssignmentMaybeChanged_);
        // Reset all switch assignments.
        for (const pref of Object.values(actionToPref)) {
            chrome.settingsPrivate.setPref(pref, {});
        }
        // Reset auto-scan.
        chrome.settingsPrivate.setPref(AUTO_SCAN_SPEED_PREF, DEFAULT_AUTO_SCAN_SPEED_MS);
        chrome.settingsPrivate.setPref(AUTO_SCAN_KEYBOARD_SPEED_PREF, DEFAULT_AUTO_SCAN_SPEED_MS);
        chrome.settingsPrivate.setPref(AUTO_SCAN_ENABLED_PREF, false);
    }
    loadPage_(id) {
        this.addOrRemoveAssignmentPane_(id);
        const newPage = castExists(SetupPageList[id]);
        this.$.titleText.textContent = this.i18n(newPage.titleId);
        for (const elementId of Object.values(SetupElement)) {
            this.shadowRoot.getElementById(elementId).hidden =
                !newPage.visibleElements.includes(elementId);
        }
        this.currentPageId_ = id;
    }
    /**
     * The assignment pane prevents Switch Access from receiving key events when
     * it is attached, which disables the user's navigational control. Therefore,
     * we add the assignment pane only when it's about to be displayed, and remove
     * it as soon as it's complete.
     */
    addOrRemoveAssignmentPane_(id) {
        let action;
        switch (id) {
            case SetupPageId.ASSIGN_SELECT:
                action = SwitchAccessCommand.SELECT;
                break;
            case SetupPageId.ASSIGN_NEXT:
                action = SwitchAccessCommand.NEXT;
                break;
            case SetupPageId.ASSIGN_PREVIOUS:
                action = SwitchAccessCommand.PREVIOUS;
        }
        if (action) {
            this.initializeAssignmentPane_(action);
        }
        else {
            this.removeAssignmentPaneIfPresent_();
        }
    }
    initializeAssignmentPane_(action) {
        this.removeAssignmentPaneIfPresent_();
        this.switchToAssign_ = action;
        const assignmentPane = document.createElement('settings-switch-access-action-assignment-pane');
        assignmentPane.action = action;
        assignmentPane.context = AssignmentContext.SETUP_GUIDE;
        this.assignmentContentsElement.appendChild(assignmentPane);
    }
    removeAssignmentPaneIfPresent_() {
        if (this.assignmentContentsElement.firstChild) {
            this.assignmentContentsElement.removeChild(this.assignmentContentsElement.firstChild);
        }
        this.switchToAssign_ = null;
    }
    /**
     * Determines what page is shown next, from the current page ID and other
     * state.
     */
    getNextPageId_() {
        switch (this.currentPageId_) {
            case SetupPageId.INTRO:
                return SetupPageId.ASSIGN_SELECT;
            case SetupPageId.ASSIGN_SELECT:
                return SetupPageId.AUTO_SCAN_ENABLED;
            case SetupPageId.AUTO_SCAN_ENABLED:
                return SetupPageId.CHOOSE_SWITCH_COUNT;
            case SetupPageId.CHOOSE_SWITCH_COUNT:
                if (this.switchCount_ === 3 || this.switchCount_ === 2) {
                    return SetupPageId.ASSIGN_NEXT;
                }
                else {
                    return SetupPageId.AUTO_SCAN_SPEED;
                }
            case SetupPageId.ASSIGN_NEXT:
                if (this.switchCount_ === 3) {
                    return SetupPageId.ASSIGN_PREVIOUS;
                }
                else {
                    return SetupPageId.CLOSING;
                }
            case SetupPageId.ASSIGN_PREVIOUS:
            case SetupPageId.AUTO_SCAN_SPEED:
            default:
                return SetupPageId.CLOSING;
        }
    }
    /**
     * Returns what page was shown previously from the current page ID.
     */
    getPreviousPageId_() {
        switch (this.currentPageId_) {
            case SetupPageId.CLOSING:
                if (this.switchCount_ === 3) {
                    return SetupPageId.ASSIGN_PREVIOUS;
                }
                else if (this.switchCount_ === 2) {
                    return SetupPageId.ASSIGN_NEXT;
                }
                else {
                    return SetupPageId.AUTO_SCAN_SPEED;
                }
            case SetupPageId.ASSIGN_PREVIOUS:
                return SetupPageId.ASSIGN_NEXT;
            case SetupPageId.ASSIGN_NEXT:
            case SetupPageId.AUTO_SCAN_SPEED:
                return SetupPageId.CHOOSE_SWITCH_COUNT;
            case SetupPageId.CHOOSE_SWITCH_COUNT:
                return SetupPageId.AUTO_SCAN_ENABLED;
            case SetupPageId.AUTO_SCAN_ENABLED:
                return SetupPageId.ASSIGN_SELECT;
            case SetupPageId.ASSIGN_SELECT:
            default:
                return SetupPageId.INTRO;
        }
    }
    onExitClick_() {
        this.$.switchAccessSetupGuideDialog.close();
    }
    onStartOverClick_() {
        this.loadPage_(SetupPageId.INTRO);
    }
    onNextClick_() {
        this.loadPage_(this.getNextPageId_());
        // Enable auto-scan when we reach that page of the setup guide.
        if (this.currentPageId_ === SetupPageId.AUTO_SCAN_ENABLED) {
            chrome.settingsPrivate.setPref(AUTO_SCAN_ENABLED_PREF, true);
        }
        // Disable auto-scan once the user has selected two or more switches.
        if (this.currentPageId_ === SetupPageId.ASSIGN_NEXT) {
            chrome.settingsPrivate.setPref(AUTO_SCAN_ENABLED_PREF, false);
        }
        if (this.currentPageId_ === SetupPageId.CLOSING) {
            if (this.switchCount_ >= 2) {
                this.$.closingInstructions.textContent =
                    this.i18n('switchAccessSetupClosingManualScanInstructions');
            }
        }
    }
    onPreviousClick_() {
        // Disable auto-scan when the user reverses to before it was enabled.
        if (this.currentPageId_ === SetupPageId.AUTO_SCAN_ENABLED) {
            chrome.settingsPrivate.setPref(AUTO_SCAN_ENABLED_PREF, false);
        }
        this.loadPage_(this.getPreviousPageId_());
    }
    onBluetoothClick_() {
        Router.getInstance().navigateTo(routes.BLUETOOTH_DEVICES);
    }
    onAutoScanSpeedFaster_() {
        const pref = this.getPref(AUTO_SCAN_SPEED_PREF);
        const currentValue = pref.value;
        // Find the first element in the array that is equal to, or smaller than,
        // the current value. Since AUTO_SCAN_SPEED_RANGE_MS is sorted largest to
        // smallest, this gives us a guarantee that we are within one step (100ms)
        // of the value at the provided index.
        const index = AUTO_SCAN_SPEED_RANGE_MS.findIndex(elem => elem <= currentValue);
        if (index === -1 || index === AUTO_SCAN_SPEED_RANGE_MS.length - 1) {
            return;
        }
        chrome.settingsPrivate.setPref(AUTO_SCAN_SPEED_PREF, AUTO_SCAN_SPEED_RANGE_MS[index + 1]);
    }
    onAutoScanSpeedSlower_() {
        const pref = this.getPref(AUTO_SCAN_SPEED_PREF);
        const currentValue = pref.value;
        // Find the first element in the array that is equal to, or smaller than,
        // the current value. Since AUTO_SCAN_SPEED_RANGE_MS is sorted largest to
        // smallest, this gives us a guarantee that we are within one step (100ms)
        // of the value at the provided index.
        const index = AUTO_SCAN_SPEED_RANGE_MS.findIndex(elem => elem <= currentValue);
        if (index <= 0) {
            return;
        }
        chrome.settingsPrivate.setPref(AUTO_SCAN_SPEED_PREF, AUTO_SCAN_SPEED_RANGE_MS[index - 1]);
    }
    onSwitchCountChanged_() {
        const selected = this.$.switchCountGroup.selected;
        if (selected === 'one-switch') {
            this.switchCount_ = 1;
        }
        else if (selected === 'two-switches') {
            this.switchCount_ = 2;
        }
        else if (selected === 'three-switches') {
            this.switchCount_ = 3;
        }
    }
    onSwitchAssignmentMaybeChanged_() {
        if (!this.assignmentContentsElement ||
            !this.assignmentContentsElement.firstChild) {
            return;
        }
        const currentAction = this.assignmentContentsElement.firstChild
            .action;
        const pref = this.getPref(actionToPref[currentAction]);
        const hasSwitchAssigned = Object.keys(pref.value).length > 0;
        if (hasSwitchAssigned) {
            this.onNextClick_();
        }
        else {
            this.initializeAssignmentPane_(currentAction);
        }
    }
    scanSpeedStringInSec_(scanSpeedValueMs) {
        const scanSpeedValueSec = scanSpeedValueMs / 1000;
        return this.i18n('durationInSeconds', this.formatter_.format(scanSpeedValueSec));
    }
    ticksWithLabelsInSec_(ticksInMs) {
        // Dividing by 1000 to convert milliseconds to seconds for the label.
        return ticksInMs.map(x => ({ label: `${this.scanSpeedStringInSec_(x)}`, value: x }));
    }
    get assignmentContentsElement() {
        return castExists(this.shadowRoot.getElementById(SetupElement.ASSIGN_SWITCH_CONTENT)
            .querySelector('.sa-setup-contents'));
    }
    getAssignSwitchIllo_() {
        switch (this.switchToAssign_) {
            case SwitchAccessCommand.SELECT:
                return 'os-settings-illo:switch-access-setup-guide-assign-select';
            case SwitchAccessCommand.NEXT:
                return 'os-settings-illo:switch-access-setup-guide-assign-next';
            case SwitchAccessCommand.PREVIOUS:
                return 'os-settings-illo:switch-access-setup-guide-assign-previous';
            default:
                return '';
        }
    }
    getSwitchCountIllo_() {
        switch (this.switchCount_) {
            case 1:
                return 'os-settings-illo:switch-access-setup-guide-choose-1-switch';
            case 2:
                return 'os-settings-illo:switch-access-setup-guide-choose-2-switches';
            case 3:
                return 'os-settings-illo:switch-access-setup-guide-choose-3-switches';
            default:
                return '';
        }
    }
}
customElements.define(SettingsSwitchAccessSetupGuideDialogElement.is, SettingsSwitchAccessSetupGuideDialogElement);
