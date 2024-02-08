// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import 'chrome://resources/ash/common/cr_elements/cr_button/cr_button.js';
import 'chrome://resources/ash/common/cr_elements/icons.html.js';
import 'chrome://resources/ash/common/cr_elements/policy/cr_policy_indicator.js';
import 'chrome://resources/ash/common/cr_elements/cr_shared_style.css.js';
import 'chrome://resources/polymer/v3_0/iron-list/iron-list.js';
import 'chrome://resources/polymer/v3_0/iron-icon/iron-icon.js';
import 'chrome://resources/polymer/v3_0/paper-tooltip/paper-tooltip.js';
import './print_job_clear_history_dialog.js';
import './print_job_entry.js';
import './print_management_fonts.css.js';
import './print_management_shared.css.js';
import './printer_setup_info.js';
import './strings.m.js';
import { loadTimeData } from 'chrome://resources/ash/common/load_time_data.m.js';
import { ColorChangeUpdater } from 'chrome://resources/cr_components/color_change_listener/colors_css_updater.js';
import { I18nMixin } from 'chrome://resources/ash/common/cr_elements/i18n_mixin.js';
import { assert } from 'chrome://resources/js/assert.js';
import { PolymerElement } from 'chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js';
import { getMetadataProvider, getPrintManagementHandler } from './mojo_interface_provider.js';
import { getTemplate } from './print_management.html.js';
import { ActivePrintJobState, LaunchSource, PrintJobsObserverReceiver } from './printing_manager.mojom-webui.js';
const METADATA_STORED_INDEFINITELY = -1;
const METADATA_STORED_FOR_ONE_DAY = 1;
const METADATA_NOT_STORED = 0;
function comparePrintJobsReverseChronologically(first, second) {
    return -comparePrintJobsChronologically(first, second);
}
function comparePrintJobsChronologically(first, second) {
    return Number(first.creationTime.internalValue) -
        Number(second.creationTime.internalValue);
}
/**
 * @fileoverview
 * 'print-management' is used as the main app to display print jobs.
 */
const PrintManagementElementBase = I18nMixin(PolymerElement);
export class PrintManagementElement extends PrintManagementElementBase {
    static get is() {
        return 'print-management';
    }
    static get template() {
        return getTemplate();
    }
    static get properties() {
        return {
            printJobs: {
                type: Array,
                value: () => [],
            },
            printJobHistoryExpirationPeriod: {
                type: String,
                value: '',
            },
            activeHistoryInfoIcon: {
                type: String,
                value: '',
            },
            isPolicyControlled: {
                type: Boolean,
                value: false,
            },
            ongoingPrintJobs: {
                type: Array,
                value: () => [],
            },
            // Used by FocusRowBehavior to track the last focused element on a row.
            lastFocused: Object,
            // Used by FocusRowBehavior to track if the list has been blurred.
            listBlurred: Boolean,
            showClearAllButton: {
                type: Boolean,
                value: false,
                reflectToAttribute: true,
            },
            showClearAllDialog: {
                type: Boolean,
                value: false,
            },
            showSetupAssistance: {
                type: Boolean,
                value: () => {
                    return loadTimeData.getBoolean('isSetupAssistanceEnabled');
                },
            },
            deletePrintJobHistoryAllowedByPolicy: {
                type: Boolean,
                value: true,
            },
            shouldDisableClearAllButton: {
                type: Boolean,
                computed: 'computeShouldDisableClearAllButton(printJobs,' +
                    'deletePrintJobHistoryAllowedByPolicy)',
            },
            /**
             * Receiver responsible for observing print job updates notification
             * events.
             */
            printJobsObserverReceiver: { type: Object },
        };
    }
    static get observers() {
        return ['onClearAllButtonUpdated(shouldDisableClearAllButton)'];
    }
    constructor() {
        super();
        this.mojoInterfaceProvider = getMetadataProvider();
        this.pageHandler = getPrintManagementHandler();
        window.CrPolicyStrings = {
            controlledSettingPolicy: loadTimeData.getString('clearAllPrintJobPolicyIndicatorToolTip'),
        };
        this.addEventListener('all-history-cleared', () => this.getPrintJobs());
        this.addEventListener('remove-print-job', (e) => this.removePrintJob(e));
    }
    connectedCallback() {
        super.connectedCallback();
        this.getPrintJobHistoryExpirationPeriod();
        this.startObservingPrintJobs();
        this.fetchDeletePrintJobHistoryPolicy();
        ColorChangeUpdater.forDocument().start();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.printJobsObserverReceiver.$.close();
    }
    startObservingPrintJobs() {
        this.printJobsObserverReceiver = new PrintJobsObserverReceiver((this));
        this.mojoInterfaceProvider
            .observePrintJobs(this.printJobsObserverReceiver.$.bindNewPipeAndPassRemote())
            .then(() => {
            this.getPrintJobs();
        });
    }
    fetchDeletePrintJobHistoryPolicy() {
        this.mojoInterfaceProvider.getDeletePrintJobHistoryAllowedByPolicy().then((param) => {
            this.onGetDeletePrintHistoryPolicy(param);
        });
    }
    onGetDeletePrintHistoryPolicy(responseParam) {
        this.showClearAllButton = true;
        this.deletePrintJobHistoryAllowedByPolicy = responseParam.isAllowedByPolicy;
    }
    onAllPrintJobsDeleted() {
        this.getPrintJobs();
    }
    onPrintJobUpdate(job) {
        // Only update ongoing print jobs.
        assert(job.activePrintJobInfo);
        // Check if |job| is an existing ongoing print job and requires an update
        // or if |job| is a new ongoing print job.
        const idx = this.getIndexOfOngoingPrintJob(job.id);
        if (idx !== -1) {
            // Replace the existing ongoing print job with its updated entry.
            this.splice('ongoingPrintJobs', idx, 1, job);
        }
        else {
            // New ongoing print jobs are appended to the ongoing print
            // jobs list.
            this.push('ongoingPrintJobs', job);
        }
        if (job.activePrintJobInfo?.activeState ===
            ActivePrintJobState.kDocumentDone) {
            // This print job is now completed, next step is to update the history
            // list with the recently stored print job.
            this.getPrintJobs();
        }
    }
    onPrintJobsReceived(jobs) {
        // TODO(crbug/1073690): Update this when BigInt is supported for
        // updateList().
        const ongoingList = [];
        const historyList = [];
        for (const job of jobs.printJobs) {
            // activePrintJobInfo is not null for ongoing print jobs.
            if (job.activePrintJobInfo) {
                ongoingList.push(job);
            }
            else {
                historyList.push(job);
            }
        }
        // Sort the print jobs in chronological order.
        this.ongoingPrintJobs = ongoingList.sort(comparePrintJobsChronologically);
        this.printJobs = historyList.sort(comparePrintJobsReverseChronologically);
    }
    getPrintJobs() {
        this.mojoInterfaceProvider.getPrintJobs().then(this.onPrintJobsReceived.bind(this));
    }
    onPrintJobHistoryExpirationPeriodReceived(printJobPolicyInfo) {
        const expirationPeriod = printJobPolicyInfo.expirationPeriodInDays;
        // If print jobs are not persisted, we can return early since the tooltip
        // section won't be shown.
        if (expirationPeriod === METADATA_NOT_STORED) {
            return;
        }
        this.isPolicyControlled = printJobPolicyInfo.isFromPolicy;
        this.activeHistoryInfoIcon =
            this.isPolicyControlled ? 'enterpriseIcon' : 'infoIcon';
        switch (expirationPeriod) {
            case METADATA_STORED_INDEFINITELY:
                this.printJobHistoryExpirationPeriod =
                    loadTimeData.getString('printJobHistoryIndefinitePeriod');
                break;
            case METADATA_STORED_FOR_ONE_DAY:
                this.printJobHistoryExpirationPeriod =
                    loadTimeData.getString('printJobHistorySingleDay');
                break;
            default:
                this.printJobHistoryExpirationPeriod = loadTimeData.getStringF('printJobHistoryExpirationPeriod', expirationPeriod);
        }
    }
    getPrintJobHistoryExpirationPeriod() {
        this.mojoInterfaceProvider.getPrintJobHistoryExpirationPeriod().then(this.onPrintJobHistoryExpirationPeriodReceived.bind(this));
    }
    removePrintJob(e) {
        const idx = this.getIndexOfOngoingPrintJob(e.detail);
        if (idx !== -1) {
            this.splice('ongoingPrintJobs', idx, 1);
        }
    }
    onClearHistoryClicked() {
        this.showClearAllDialog = true;
    }
    onClearHistoryDialogClosed() {
        this.showClearAllDialog = false;
    }
    getIndexOfOngoingPrintJob(expectedId) {
        return this.ongoingPrintJobs.findIndex(arrJob => arrJob.id === expectedId);
    }
    computeShouldDisableClearAllButton() {
        return !this.deletePrintJobHistoryAllowedByPolicy || !this.printJobs.length;
    }
    onClearAllButtonUpdated() {
        this.$.deleteIcon.classList.toggle('delete-enabled', !this.shouldDisableClearAllButton);
        this.$.deleteIcon.classList.toggle('delete-disabled', this.shouldDisableClearAllButton);
    }
    /** Determine if printer setup UI should be shown. */
    shouldShowSetupAssistance() {
        return this.showSetupAssistance && this.ongoingPrintJobs.length === 0 &&
            this.printJobs.length === 0;
    }
    /** Determine if ongoing jobs empty messaging should be shown. */
    shouldShowOngoingEmptyState() {
        return !this.shouldShowSetupAssistance() &&
            this.ongoingPrintJobs.length === 0;
    }
    /** Determine if manage printer button in header should be shown. */
    shouldShowManagePrinterButton() {
        return this.showSetupAssistance &&
            (this.ongoingPrintJobs.length > 0 || this.printJobs.length > 0);
    }
    onManagePrintersClicked() {
        this.pageHandler.launchPrinterSettings(LaunchSource.kHeaderButton);
    }
}
customElements.define(PrintManagementElement.is, PrintManagementElement);
