// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/**
 * @fileoverview 'settings-clear-browsing-data-dialog' allows the user to
 * delete browsing data that has been cached by Chromium.
 */
import 'chrome://resources/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/cr_elements/cr_dialog/cr_dialog.js';
import 'chrome://resources/cr_elements/cr_tabs/cr_tabs.js';
import 'chrome://resources/cr_elements/cr_shared_vars.css.js';
import 'chrome://resources/polymer/v3_0/iron-pages/iron-pages.js';
import 'chrome://resources/polymer/v3_0/paper-spinner/paper-spinner-lite.js';
import './history_deletion_dialog.js';
import './passwords_deletion_dialog.js';
import '../controls/settings_checkbox.js';
import '../icons.html.js';
import '../settings_shared.css.js';
import { StatusAction, SyncBrowserProxyImpl } from '/shared/settings/people_page/sync_browser_proxy.js';
import { PrefsMixin } from 'chrome://resources/cr_components/settings_prefs/prefs_mixin.js';
import { getInstance as getAnnouncerInstance } from 'chrome://resources/cr_elements/cr_a11y_announcer/cr_a11y_announcer.js';
import { I18nMixin } from 'chrome://resources/cr_elements/i18n_mixin.js';
import { WebUiListenerMixin } from 'chrome://resources/cr_elements/web_ui_listener_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { FocusOutlineManager } from 'chrome://resources/js/focus_outline_manager.js';
import { sanitizeInnerHtml } from 'chrome://resources/js/parse_html_subset.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { loadTimeData } from '../i18n_setup.js';
import { routes } from '../route.js';
import { RouteObserverMixin } from '../router.js';
import { ClearBrowsingDataBrowserProxyImpl } from './clear_browsing_data_browser_proxy.js';
import { getTemplate } from './clear_browsing_data_dialog.html.js';
/**
 * @param dialog the dialog to close
 * @param isLast whether this is the last CBD-related dialog
 */
function closeDialog(dialog, isLast) {
    // If this is not the last dialog, then stop the 'close' event from
    // propagating so that other (following) dialogs don't get closed as well.
    if (!isLast) {
        dialog.addEventListener('close', e => {
            e.stopPropagation();
        }, { once: true });
    }
    dialog.close();
}
export var TimePeriod;
(function (TimePeriod) {
    TimePeriod[TimePeriod["LAST_HOUR"] = 0] = "LAST_HOUR";
    TimePeriod[TimePeriod["LAST_DAY"] = 1] = "LAST_DAY";
    TimePeriod[TimePeriod["LAST_WEEK"] = 2] = "LAST_WEEK";
    TimePeriod[TimePeriod["FOUR_WEEKS"] = 3] = "FOUR_WEEKS";
    TimePeriod[TimePeriod["ALL_TIME"] = 4] = "ALL_TIME";
    TimePeriod[TimePeriod["TIME_PERIOD_LAST"] = 4] = "TIME_PERIOD_LAST";
})(TimePeriod || (TimePeriod = {}));
// TODO(crbug.com/1487530): Remove this after CbdTimeframeRequired finishes.
export var TimePeriodExperiment;
(function (TimePeriodExperiment) {
    TimePeriodExperiment[TimePeriodExperiment["NOT_SELECTED"] = -1] = "NOT_SELECTED";
    TimePeriodExperiment[TimePeriodExperiment["LAST_HOUR"] = 0] = "LAST_HOUR";
    TimePeriodExperiment[TimePeriodExperiment["LAST_DAY"] = 1] = "LAST_DAY";
    TimePeriodExperiment[TimePeriodExperiment["LAST_WEEK"] = 2] = "LAST_WEEK";
    TimePeriodExperiment[TimePeriodExperiment["FOUR_WEEKS"] = 3] = "FOUR_WEEKS";
    TimePeriodExperiment[TimePeriodExperiment["ALL_TIME"] = 4] = "ALL_TIME";
    TimePeriodExperiment[TimePeriodExperiment["OLDER_THAN_30_DAYS"] = 5] = "OLDER_THAN_30_DAYS";
    TimePeriodExperiment[TimePeriodExperiment["LAST_15_MINUTES"] = 6] = "LAST_15_MINUTES";
    TimePeriodExperiment[TimePeriodExperiment["TIME_PERIOD_LAST"] = 6] = "TIME_PERIOD_LAST";
})(TimePeriodExperiment || (TimePeriodExperiment = {}));
const SettingsClearBrowsingDataDialogElementBase = RouteObserverMixin(WebUiListenerMixin(PrefsMixin(I18nMixin(PolymerElement))));
export class SettingsClearBrowsingDataDialogElement extends SettingsClearBrowsingDataDialogElementBase {
    constructor() {
        super(...arguments);
        this.browserProxy_ = ClearBrowsingDataBrowserProxyImpl.getInstance();
        this.syncBrowserProxy_ = SyncBrowserProxyImpl.getInstance();
    }
    static get is() {
        return 'settings-clear-browsing-data-dialog';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            /**
             * Preferences state.
             */
            prefs: {
                type: Object,
                notify: true,
            },
            /**
             * The current sync status, supplied by SyncBrowserProxy.
             */
            syncStatus: Object,
            /**
             * Results of browsing data counters, keyed by the suffix of
             * the corresponding data type deletion preference, as reported
             * by the C++ side.
             */
            counters_: {
                type: Object,
                // Will be filled as results are reported.
                value() {
                    return {};
                },
            },
            /**
             * List of options for the dropdown menu.
             */
            clearFromOptions_: {
                readOnly: true,
                type: Array,
                value: [
                    {
                        value: TimePeriod.LAST_HOUR,
                        name: loadTimeData.getString('clearPeriodHour'),
                    },
                    {
                        value: TimePeriod.LAST_DAY,
                        name: loadTimeData.getString('clearPeriod24Hours'),
                    },
                    {
                        value: TimePeriod.LAST_WEEK,
                        name: loadTimeData.getString('clearPeriod7Days'),
                    },
                    {
                        value: TimePeriod.FOUR_WEEKS,
                        name: loadTimeData.getString('clearPeriod4Weeks'),
                    },
                    {
                        value: TimePeriod.ALL_TIME,
                        name: loadTimeData.getString('clearPeriodEverything'),
                    },
                ],
            },
            enableCbdTimeframeRequired_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('enableCbdTimeframeRequired');
                },
            },
            unoDesktopEnabled_: {
                type: Boolean,
                value() {
                    return loadTimeData.getBoolean('unoDesktopEnabled');
                },
            },
            /**
             * When CBDTimeframeRequired feature/flag is on, this will be the list
             * of options for the dropdown menu. V2 additionally contains the "Last 15
             * minutes" and the "Select a time range" options with "Select a time
             * range" being always hidden in the menuOptions list in which users can
             * chose the time range.
             */
            clearFromOptionsV2_: {
                readOnly: true,
                type: Array,
                value: [
                    // The pref is initialized to TimePeriodExperiment.NOT_SELECTED, which
                    // is shown in the dropdown as the selected option until the user
                    // selects a different value. The menuList of options should not
                    // contain the option for TimePeriodExperiment.NOT_SELECTED, as it
                    // doesn't make sense for users to choose it.
                    {
                        value: TimePeriodExperiment.NOT_SELECTED,
                        name: loadTimeData.getString('clearPeriodNotSelected'),
                        hidden: true,
                    },
                    // The value of 15min is 6 to match the value written in the backend,
                    // Also, it comes first in the list to keep the list in ascending
                    // order.
                    {
                        value: TimePeriodExperiment.LAST_15_MINUTES,
                        name: loadTimeData.getString('clearPeriod15Minutes'),
                    },
                    {
                        value: TimePeriodExperiment.LAST_HOUR,
                        name: loadTimeData.getString('clearPeriodHour'),
                    },
                    {
                        value: TimePeriodExperiment.LAST_DAY,
                        name: loadTimeData.getString('clearPeriod24Hours'),
                    },
                    {
                        value: TimePeriodExperiment.LAST_WEEK,
                        name: loadTimeData.getString('clearPeriod7Days'),
                    },
                    {
                        value: TimePeriodExperiment.FOUR_WEEKS,
                        name: loadTimeData.getString('clearPeriod4Weeks'),
                    },
                    {
                        value: TimePeriodExperiment.ALL_TIME,
                        name: loadTimeData.getString('clearPeriodEverything'),
                    },
                ],
            },
            clearingInProgress_: {
                type: Boolean,
                value: false,
            },
            clearingDataAlertString_: {
                type: String,
                value: '',
            },
            clearButtonDisabled_: {
                type: Boolean,
                value: false,
            },
            showHistoryDeletionDialog_: {
                type: Boolean,
                value: false,
            },
            showPasswordsDeletionDialogLater_: {
                type: Boolean,
                value: false,
            },
            showPasswordsDeletionDialog_: {
                type: Boolean,
                value: false,
            },
            isSignedIn_: {
                type: Boolean,
                value: false,
            },
            isSyncConsented_: {
                type: Boolean,
                value: false,
            },
            isSyncingHistory_: {
                type: Boolean,
                value: false,
            },
            shouldShowCookieException_: {
                type: Boolean,
                value: false,
            },
            isSyncPaused_: {
                type: Boolean,
                value: false,
                computed: 'computeIsSyncPaused_(syncStatus)',
            },
            hasPassphraseError_: {
                type: Boolean,
                value: false,
                computed: 'computeHasPassphraseError_(syncStatus)',
            },
            hasOtherSyncError_: {
                type: Boolean,
                value: false,
                computed: 'computeHasOtherError_(syncStatus, isSyncPaused_, hasPassphraseError_)',
            },
            selectedTabIndex_: Number,
            tabsNames_: {
                type: Array,
                value: () => [loadTimeData.getString('basicPageTitle'),
                    loadTimeData.getString('advancedPageTitle'),
                ],
            },
            googleSearchHistoryString_: {
                type: String,
                computed: 'computeGoogleSearchHistoryString_(isNonGoogleDse_)',
            },
            isNonGoogleDse_: {
                type: Boolean,
                value: false,
            },
            nonGoogleSearchHistoryString_: String,
        };
    }
    static get observers() {
        return [
            `onTimePeriodAdvancedPrefUpdated_(
          prefs.browser.clear_data.time_period.value)`,
            `onTimePeriodBasicPrefUpdated_(
          prefs.browser.clear_data.time_period_basic.value)`,
            `onSelectedTabIndexPrefUpdated_(
          prefs.browser.last_clear_browsing_data_tab.value)`,
        ];
    }
    ready() {
        super.ready();
        this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));
        this.addWebUiListener('sync-status-changed', this.handleSyncStatus_.bind(this));
        this.addWebUiListener('update-sync-state', this.updateSyncState_.bind(this));
        this.addWebUiListener('update-counter-text', this.updateCounterText_.bind(this));
        this.addEventListener('settings-boolean-control-change', this.updateClearButtonState_);
    }
    connectedCallback() {
        super.connectedCallback();
        this.browserProxy_.initialize().then(() => {
            this.$.clearBrowsingDataDialog.showModal();
            // AutoFocus is not visible in mouse navigation by default. But in this
            // dialog the default focus is on cancel which is not a default button. To
            // make this clear to the user we make it visible to the user and remove
            // the focus after the next mouse event.
            this.focusOutlineManager_ = FocusOutlineManager.forDocument(document);
            this.focusOutlineManager_.visible = true;
            document.addEventListener('mousedown', () => {
                this.focusOutlineManager_.visible = false;
            }, { once: true });
        });
    }
    /**
     * Handler for when the sync state is pushed from the browser.
     */
    handleSyncStatus_(syncStatus) {
        this.syncStatus = syncStatus;
    }
    /**
     * @return Whether either clearing is in progress or no data type is selected.
     */
    isClearButtonDisabled_(clearingInProgress, clearButtonDisabled) {
        return clearingInProgress || clearButtonDisabled;
    }
    /**
     * Disables the Clear Data button if no data type is selected.
     */
    updateClearButtonState_() {
        // on-select-item-changed gets called with undefined during a tab change.
        // https://github.com/PolymerElements/iron-selector/issues/95
        const tab = this.$.tabs.selectedItem;
        if (!tab) {
            return;
        }
        this.clearButtonDisabled_ =
            this.getSelectedDataTypes_(tab).length === 0;
    }
    /**
     * Record visits to the CBD dialog.
     *
     * RouteObserverMixin
     */
    currentRouteChanged(currentRoute) {
        if (currentRoute === routes.CLEAR_BROWSER_DATA) {
            chrome.metricsPrivate.recordUserAction('ClearBrowsingData_DialogCreated');
        }
    }
    /**
     * Updates the history description to show the relevant information
     * depending on sync and signin state.
     */
    updateSyncState_(event) {
        this.isSignedIn_ = event.signedIn;
        this.isSyncConsented_ = event.syncConsented;
        this.isSyncingHistory_ = event.syncingHistory;
        this.shouldShowCookieException_ = event.shouldShowCookieException;
        this.$.clearBrowsingDataDialog.classList.add('fully-rendered');
        this.isNonGoogleDse_ = event.isNonGoogleDse;
        this.nonGoogleSearchHistoryString_ =
            sanitizeInnerHtml(event.nonGoogleSearchHistoryString);
    }
    /** Choose a label for the history checkbox. */
    browsingCheckboxLabel_(isSyncingHistory, historySummary, historySummarySignedInNoLink) {
        return isSyncingHistory ? historySummarySignedInNoLink : historySummary;
    }
    /**
     * Choose a label for the cookie checkbox
     * @param isSignedIn boolean whether the user is signed in or not.
     * @param shouldShowCookieException boolean whether the exception about not
     * being signed out of your Google account should be shown when user is
     * sync.
     * @param cookiesSummary string explaining that deleting cookies and site data
     * will sign the user out of most websites.
     * @param clearCookiesSummarySignedIn string explaining that deleting cookies
     * and site data will sign the user out of most websites but Google sign in
     * will stay.
     * @param clearCookiesSummarySyncing string explaining that deleting cookies
     * and site data will sign the user out of most websites but Google sign in
     * will stay when user is syncing.
     * @param clearCookiesSummarySignedInSupervisedProfile string used for a
     * supervised user. Gives information about family link controls and that they
     * will not be signed out on clearing cookies
     */
    cookiesCheckboxLabel_(isSignedIn, shouldShowCookieException, cookiesSummary, clearCookiesSummarySignedIn, clearCookiesSummarySyncing, 
    // @ts-ignore: error TS6133: unused on some platforms
    clearCookiesSummarySignedInSupervisedProfile) {
        // 
        if (this.unoDesktopEnabled_ && isSignedIn) {
            return clearCookiesSummarySignedIn;
        }
        if (shouldShowCookieException) {
            return clearCookiesSummarySyncing;
        }
        // 
        return cookiesSummary;
    }
    /**
     * Updates the text of a browsing data counter corresponding to the given
     * preference.
     * @param prefName Browsing data type deletion preference.
     * @param text The text with which to update the counter
     */
    updateCounterText_(prefName, text) {
        // Data type deletion preferences are named "browser.clear_data.<datatype>".
        // Strip the common prefix, i.e. use only "<datatype>".
        const matches = prefName.match(/^browser\.clear_data\.(\w+)$/);
        assert(matches[1]);
        this.set('counters_.' + matches[1], text);
    }
    /**
     * @return A list of selected data types.
     */
    getSelectedDataTypes_(tab) {
        const checkboxes = tab.querySelectorAll('settings-checkbox');
        const dataTypes = [];
        checkboxes.forEach((checkbox) => {
            if (checkbox.checked && !checkbox.hidden) {
                dataTypes.push(checkbox.pref.key);
            }
        });
        return dataTypes;
    }
    /** Clears browsing data and maybe shows a history notice. */
    async clearBrowsingData_() {
        this.clearingInProgress_ = true;
        this.clearingDataAlertString_ = loadTimeData.getString('clearingData');
        const tab = this.$.tabs.selectedItem;
        const dataTypes = this.getSelectedDataTypes_(tab);
        const dropdownMenu = tab.querySelector('.time-range-select');
        assert(dropdownMenu);
        const timePeriod = dropdownMenu.pref.value;
        if (tab.id === 'basic-tab') {
            chrome.metricsPrivate.recordUserAction('ClearBrowsingData_BasicTab');
        }
        else {
            chrome.metricsPrivate.recordUserAction('ClearBrowsingData_AdvancedTab');
        }
        this.setPrefValue('browser.last_clear_browsing_data_tab', this.selectedTabIndex_);
        // Dropdown menu and checkbox selections of both tabs should be persisted
        // independently from the tab on which the user confirmed the deletion.
        this.shadowRoot
            .querySelectorAll('settings-checkbox[no-set-pref]')
            .forEach(checkbox => checkbox.sendPrefChange());
        this.shadowRoot
            .querySelectorAll('settings-dropdown-menu[no-set-pref]')
            .forEach(dropdown => dropdown.sendPrefChange());
        const { showHistoryNotice, showPasswordsNotice } = await this.browserProxy_.clearBrowsingData(dataTypes, timePeriod);
        this.clearingInProgress_ = false;
        getAnnouncerInstance().announce(loadTimeData.getString('clearedData'));
        this.showHistoryDeletionDialog_ = showHistoryNotice;
        // If both the history notice and the passwords notice should be shown, show
        // the history notice first, and then show the passwords notice once the
        // history notice gets closed.
        this.showPasswordsDeletionDialog_ =
            showPasswordsNotice && !showHistoryNotice;
        this.showPasswordsDeletionDialogLater_ =
            showPasswordsNotice && showHistoryNotice;
        // Close the clear browsing data if it is open.
        const isLastDialog = !showHistoryNotice && !showPasswordsNotice;
        if (this.$.clearBrowsingDataDialog.open) {
            closeDialog(this.$.clearBrowsingDataDialog, isLastDialog);
        }
    }
    onCancelClick_() {
        this.$.clearBrowsingDataDialog.cancel();
    }
    /**
     * Handles the closing of the notice about other forms of browsing history.
     */
    onHistoryDeletionDialogClose_(e) {
        this.showHistoryDeletionDialog_ = false;
        if (this.showPasswordsDeletionDialogLater_) {
            // Stop the close event from propagating further and also automatically
            // closing other dialogs.
            e.stopPropagation();
            this.showPasswordsDeletionDialogLater_ = false;
            this.showPasswordsDeletionDialog_ = true;
        }
    }
    /**
     * Handles the closing of the notice about incomplete passwords deletion.
     */
    onPasswordsDeletionDialogClose_() {
        this.showPasswordsDeletionDialog_ = false;
    }
    onSelectedTabIndexPrefUpdated_(selectedTabIndex) {
        this.selectedTabIndex_ = selectedTabIndex;
    }
    /**
     * Records an action when the user changes between the basic and advanced tab.
     */
    recordTabChange_(event) {
        if (event.detail.value === 0) {
            chrome.metricsPrivate.recordUserAction('ClearBrowsingData_SwitchTo_BasicTab');
        }
        else {
            chrome.metricsPrivate.recordUserAction('ClearBrowsingData_SwitchTo_AdvancedTab');
        }
    }
    // 
    computeIsSyncPaused_() {
        return !!this.syncStatus.hasError &&
            !this.syncStatus.hasUnrecoverableError &&
            this.syncStatus.statusAction === StatusAction.REAUTHENTICATE;
    }
    computeHasPassphraseError_() {
        return !!this.syncStatus.hasError &&
            this.syncStatus.statusAction === StatusAction.ENTER_PASSPHRASE;
    }
    computeHasOtherError_() {
        return this.syncStatus !== undefined && !!this.syncStatus.hasError &&
            !this.isSyncPaused_ && !this.hasPassphraseError_;
    }
    computeGoogleSearchHistoryString_(isNonGoogleDse) {
        return isNonGoogleDse ?
            this.i18nAdvanced('clearGoogleSearchHistoryNonGoogleDse') :
            this.i18nAdvanced('clearGoogleSearchHistoryGoogleDse');
    }
    shouldShowFooter_() {
        let showFooter = false;
        // 
        return showFooter;
    }
    /**
     * @return Whether the signed info description should be shown in the footer.
     */
    showSigninInfo_() {
        return this.unoDesktopEnabled_ && this.isSignedIn_ &&
            (!this.syncStatus || !this.syncStatus.signedIn);
    }
    /**
     * @return Whether the synced info description should be shown in the footer.
     */
    showSyncInfo_() {
        return !this.showSigninInfo_() && !!this.syncStatus &&
            !this.syncStatus.hasError;
    }
    onTimePeriodAdvancedPrefUpdated_() {
        this.onTimePeriodPrefUpdated_(false);
    }
    onTimePeriodBasicPrefUpdated_() {
        this.onTimePeriodPrefUpdated_(true);
    }
    onTimePeriodPrefUpdated_(basic) {
        const timePeriodPref = basic ? 'browser.clear_data.time_period_basic' :
            'browser.clear_data.time_period';
        const timePeriodValue = this.getPref(timePeriodPref).value;
        if (!(timePeriodValue in TimePeriod)) {
            // If the synced time period is not supported, default to "Last hour".
            this.setPrefValue(timePeriodPref, TimePeriod.LAST_HOUR);
        }
    }
}
customElements.define(SettingsClearBrowsingDataDialogElement.is, SettingsClearBrowsingDataDialogElement);
